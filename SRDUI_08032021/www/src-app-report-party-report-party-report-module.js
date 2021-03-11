(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-party-report-party-report-module"],{

/***/ "./src/app/dto/Invoice-dto.ts":
/*!************************************!*\
  !*** ./src/app/dto/Invoice-dto.ts ***!
  \************************************/
/*! exports provided: InvoiceDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDto", function() { return InvoiceDto; });
/* harmony import */ var _TruckData_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckData-dto */ "./src/app/dto/TruckData-dto.ts");

var InvoiceDto = /** @class */ (function () {
    function InvoiceDto() {
        this.truckDataDto = new _TruckData_dto__WEBPACK_IMPORTED_MODULE_0__["TruckDataDto"]();
        // bash bh
    }
    return InvoiceDto;
}());



/***/ }),

/***/ "./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  padding: 0px 10px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9hZG1pbi1idXNpbmVzcy1yYXRlLXJlcG9ydC9hZG1pbi1idXNpbmVzcy1yYXRlLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9hZG1pbi1idXNpbmVzcy1yYXRlLXJlcG9ydC9hZG1pbi1idXNpbmVzcy1yYXRlLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n.imb_patch {\n\ttext-align: center;\n\tbackground-color: orange;\n\tpadding: 2px;\n}\n</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Admin Business Rate Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\" style=\"border-bottom: 1px solid orange;\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-12 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">Statement Less Checked And Pending Lrs</h6> -->\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRateForPartiesTable\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRateForPartiesTable\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate Type</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th>GC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>S.Ham</th>\n\t\t\t\t\t\t\t\t\t\t<th>LC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>BC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>AOC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>FOV</th>\n\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t<th>D.Ham</th>\n\t\t\t\t\t\t\t\t\t\t<th>Receipt Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Eff. From</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Day Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Day Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Day Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let rateForPartiesTableData of rateForPartiesTableDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.rateType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.gcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.sHam }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.lcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.bcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.aocChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.dd }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.others }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.dHam }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.receiptChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.serviceChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.effFrom }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.totArt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.perDayArt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.totActWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.perDayActWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.totChgWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ rateForPartiesTableData.perDayChgWgt }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" style=\"padding-top: 20px;\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">LR Details</h6> -->\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommodityRateDetailsTable\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommodityRateDetailsTable\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th>GC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>S.Ham</th>\n\t\t\t\t\t\t\t\t\t\t<th>LC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>BC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>AOC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>FOV</th>\n\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t<th>D.Ham</th>\n\t\t\t\t\t\t\t\t\t\t<th>Receipt Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Eff. From</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Day Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Day Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Day Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let commodityRateDetailsTableData of commodityRateDetailsTableDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.unit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.gcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.sHam }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.lcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.bcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.aocChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.dd }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.others }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.dHam }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.receiptChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.serviceChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.effFrom }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.totArt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.perDayArt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.totActWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.perDayActWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.totChgWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.perDayChgWgt }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AdminBusinessRateReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBusinessRateReportComponent", function() { return AdminBusinessRateReportComponent; });
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var AdminBusinessRateReportComponent = /** @class */ (function () {
    function AdminBusinessRateReportComponent(adminBusinessRateRpt) {
        this.adminBusinessRateRpt = adminBusinessRateRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerRateForPartiesTable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerCommodityRateDetailsTable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AdminBusinessRateReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    AdminBusinessRateReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsRateForPartiesTable = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Rate Type',
                    data: 'rateType'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Gc Chg',
                    data: 'gcChg'
                },
                {
                    title: 'S.Ham',
                    data: 'sHam'
                },
                {
                    title: 'LC Chg',
                    data: 'lcChg'
                },
                {
                    title: 'BC Chg',
                    data: 'bcChg'
                },
                {
                    title: 'AOC Chg',
                    data: 'aocChg'
                },
                {
                    title: 'FOV',
                    data: 'fov'
                },
                {
                    title: 'DD',
                    data: 'dd'
                },
                {
                    title: 'Others',
                    data: 'others'
                },
                {
                    title: 'D.Ham',
                    data: 'dHam'
                },
                {
                    title: 'Receipt Chg',
                    data: 'receiptChg'
                },
                {
                    title: 'Service Chg',
                    data: 'serviceChg'
                },
                {
                    title: 'Per Unit',
                    data: 'perUnit'
                },
                {
                    title: 'Commodity',
                    data: 'commodity'
                },
                {
                    title: 'Eff. From',
                    data: 'effFrom'
                },
                {
                    title: 'Tot Art',
                    data: 'totArt'
                },
                {
                    title: 'Per Day Art',
                    data: 'perDayArt'
                },
                {
                    title: 'Tot Act Wgt',
                    data: 'totActWgt'
                },
                {
                    title: 'Per Day Act Wgt',
                    data: 'perDayActWgt'
                },
                {
                    title: 'Tot Chg Wgt',
                    data: 'totChgWgt'
                },
                {
                    title: 'Per Day Chg Wgt',
                    data: 'perDayChgWgt'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                //                {
                //                    extend: 'print',
                //                    text: '<i class="fas fa-print"> Print</i>',
                //                    titleAttr: 'Print',
                //
                //                }, 
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
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
            "scrollY": 200,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        this.dtOptionsCommodityRateDetailsTable = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Unit',
                    data: 'unit'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Gc Chg',
                    data: 'gcChg'
                },
                {
                    title: 'S.Ham',
                    data: 'sHam'
                },
                {
                    title: 'LC Chg',
                    data: 'lcChg'
                },
                {
                    title: 'BC Chg',
                    data: 'bcChg'
                },
                {
                    title: 'AOC Chg',
                    data: 'aocChg'
                },
                {
                    title: 'FOV',
                    data: 'fov'
                },
                {
                    title: 'DD',
                    data: 'dd'
                },
                {
                    title: 'Others',
                    data: 'others'
                },
                {
                    title: 'D.Ham',
                    data: 'dHam'
                },
                {
                    title: 'Receipt Chg',
                    data: 'receiptChg'
                },
                {
                    title: 'Service Chg',
                    data: 'serviceChg'
                },
                {
                    title: 'Per Unit',
                    data: 'perUnit'
                },
                {
                    title: 'Eff. From',
                    data: 'effFrom'
                },
                {
                    title: 'Tot Art',
                    data: 'totArt'
                },
                {
                    title: 'Per Day Art',
                    data: 'perDayArt'
                },
                {
                    title: 'Tot Act Wgt',
                    data: 'totActWgt'
                },
                {
                    title: 'Per Day Act Wgt',
                    data: 'perDayActWgt'
                },
                {
                    title: 'Tot Chg Wgt',
                    data: 'totChgWgt'
                },
                {
                    title: 'Per Day Chg Wgt',
                    data: 'perDayChgWgt'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
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
        this.getDataFrmServiceFrRateForPartiesTable = this.adminBusinessRateRpt.getSummaryData();
        this.onDestroyUnsubscribtionRateForPartiesTable = this.getDataFrmServiceFrRateForPartiesTable.subscribe(function (data) {
            _this.rateForPartiesTableDataList = data['data'];
            _this.dtTriggerRateForPartiesTable.next();
        });
        this.getDataFrmServiceFrCommodityRateDetailsTable = this.adminBusinessRateRpt.getSummaryData();
        this.onDestroyUnsubscribtionCommodityRateDetailsTable = this.getDataFrmServiceFrCommodityRateDetailsTable.subscribe(function (data) {
            _this.commodityRateDetailsTableDataList = data['data'];
            _this.dtTriggerCommodityRateDetailsTable.next();
        });
        //the below code is for the getting data through json ends
    };
    AdminBusinessRateReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRateForPartiesTable.unsubscribe();
        this.dtTriggerCommodityRateDetailsTable.unsubscribe();
        this.onDestroyUnsubscribtionRateForPartiesTable.unsubscribe();
        this.onDestroyUnsubscribtionCommodityRateDetailsTable.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    AdminBusinessRateReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AdminBusinessRateReportComponent.prototype, "dtElements", void 0);
    AdminBusinessRateReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-business-rate-report',
            template: __webpack_require__(/*! ./admin-business-rate-report.component.html */ "./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.html"),
            styles: [__webpack_require__(/*! ./admin-business-rate-report.component.css */ "./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], AdminBusinessRateReportComponent);
    return AdminBusinessRateReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9wYXJ0eS1yZXBvcnQvYnVzaW5lc3Mtc3RhcnQtbHJzLWRldGFpbHMtcmVwb3J0L2J1c2luZXNzLXN0YXJ0LWxycy1kZXRhaWxzLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">{{consigneeNameOnLoadSet}} Details Report {{fromDateOnLoadSet}} to\n\t\t\t\t\t\t{{toDateOnLoadSet}}</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\">\n\t\t\t\t\t<div class=\"col-md-12  p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<table datatable id=\"businessStartLrsSummaryTableId\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBusinessStartLrsSummaryReport\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerBusinessStartLrsSummaryReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let businessStartRptLrsSummaryData of businessStartRptLrsSummaryList  \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{businessStartRptLrsSummaryData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptLrsSummaryData.bookingDateStr}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptLrsSummaryData.agentName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{businessStartRptLrsSummaryData.commodityName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptLrsSummaryData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptLrsSummaryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{businessStartRptLrsSummaryData.chargedWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptLrsSummaryData.toPay }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptLrsSummaryData.paid }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BusinessStartLRSDetailsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessStartLRSDetailsReportComponent", function() { return BusinessStartLRSDetailsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var my = new Date();








var BusinessStartLRSDetailsReportComponent = /** @class */ (function () {
    function BusinessStartLRSDetailsReportComponent(router, datePipe, consigneeService, destStmtReport) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.consigneeService = consigneeService;
        this.destStmtReport = destStmtReport;
        this.loadingIndicator = true;
        this.dtTriggerBusinessStartLrsSummaryReport = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.lrDtoLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.consigneeNameOnLoadSet = null;
        this.fromDateOnLoadSet = null;
        this.toDateOnLoadSet = null;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.lrDtoLocalStorage = JSON.parse(localStorage.getItem('businessStartRptLrsDetailsPopUpTemplate'));
            localStorage.clear();
            if (this.lrDtoLocalStorage != null) {
                this.consigneeNameOnLoadSet = this.lrDtoLocalStorage.consigneeName;
                this.fromDateOnLoadSet = this.lrDtoLocalStorage.fromDate;
                this.toDateOnLoadSet = this.lrDtoLocalStorage.toDate;
                console.log(this.consigneeNameOnLoadSet);
                this.setBusinessStartRptOfLrsSummary();
            }
        }
    }
    BusinessStartLRSDetailsReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    BusinessStartLRSDetailsReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    BusinessStartLRSDetailsReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var consigneeNamePrint = this.consigneeNameOnLoadSet;
        var fromDatePrint = this.fromDateOnLoadSet;
        var toDatePrint = this.toDateOnLoadSet;
        this.dtOptionsBusinessStartLrsSummaryReport = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 22%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>From Date</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + fromDatePrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + toDatePrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:24px;'><u>" + consigneeNamePrint + " Details </u></strong><br>" +
                            "</td>" +
                            "<td rowspan='3' align='left' style='width:22%;'>" +
                            "</td>" +
                            "</tr>" +
                            "</table><br>";
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "New Consignee Summary Report" +
                            "Form Date : " + fromDatePrint + " - " +
                            "To Date : " + toDatePrint + "";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
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
            "scrollY": 250,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                var articles = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chdWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(4).footer()).html(articles);
                $(api.column(5).footer()).html(actWgt);
                $(api.column(6).footer()).html(chdWgt);
                $(api.column(7).footer()).html(toPay);
                $(api.column(8).footer()).html(paid);
            }
        };
    };
    BusinessStartLRSDetailsReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerBusinessStartLrsSummaryReport.unsubscribe();
    };
    BusinessStartLRSDetailsReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerBusinessStartLrsSummaryReport.next();
    };
    BusinessStartLRSDetailsReportComponent.prototype.setBusinessStartRptOfLrsSummary = function () {
        var _this = this;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDto.consigneeId = this.lrDtoLocalStorage.consigneeId;
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        this.consigneeService.getBusinessStartindividualReport(this.lrDto).subscribe(function (response) {
            console.log(response);
            $("#businessStartLrsSummaryTableId").DataTable().destroy();
            _this.businessStartRptLrsSummaryList = [];
            if (response.length > 0) {
                _this.businessStartRptLrsSummaryList = response;
                //this.dtTriggerStmtVerificationLrsSummaryReport.next();
                setTimeout(function () {
                    _this.dtTriggerBusinessStartLrsSummaryReport.next();
                }, 5000);
            }
            else {
                //this.dtTriggerStmtVerificationLrsSummaryReport.next();
                setTimeout(function () {
                    _this.dtTriggerBusinessStartLrsSummaryReport.next();
                }, 5000);
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Warning", "No  Details found !", "warning");
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Error", "Server Problem Occurred While getting the Business Start Report of LR's Details", "info");
        }, function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BusinessStartLRSDetailsReportComponent.prototype, "dtElements", void 0);
    BusinessStartLRSDetailsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-start-lrs-details-report',
            template: __webpack_require__(/*! ./business-start-lrs-details-report.component.html */ "./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.html"),
            styles: [__webpack_require__(/*! ./business-start-lrs-details-report.component.css */ "./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_6__["ConsigneeService"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_8__["DestStmtReport"]])
    ], BusinessStartLRSDetailsReportComponent);
    return BusinessStartLRSDetailsReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/business-start-report/business-start-report.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/report/party-report/business-start-report/business-start-report.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9idXNpbmVzcy1zdGFydC1yZXBvcnQvYnVzaW5lc3Mtc3RhcnQtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVEO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9idXNpbmVzcy1zdGFydC1yZXBvcnQvYnVzaW5lc3Mtc3RhcnQtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcblx0dG9wOiAyNnB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/report/party-report/business-start-report/business-start-report.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/report/party-report/business-start-report/business-start-report.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Business Start Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"fromDates\" name=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceStationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForSourceStation($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" (click)=\"validateSearchBtn();\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" (click)=\"validateClearBtn();\"\n\t\t\t\t\t\t\t\tid=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable id=\"businessStartRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBusinessStartRpt\" [dtTrigger]=\"dtTriggerBusinessStartRpt\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>1st Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Paid</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let businessStartRptData of businessStartRptDataList \">\n\t\t\t\t\t\t\t\t\t\t<!--<td>{{ businessStartRptData.consigneeName }}</td>-->\n\t\t\t\t\t\t\t\t\t\t<td style=\"color:blue;cursor: pointer;text-decoration: underline;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"businessStartReportPopUpBtnLink(businessStartRptSummaryDetailsPopUpTemplate,businessStartRptData)\">\n\t\t\t\t\t\t\t\t\t\t\t{{ businessStartRptData.consigneeName }}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStartRptData.paid }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--POP UP START HERE-->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #businessStartRptSummaryDetailsPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewBusinessStartSummaryRptPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"popupBusinessStartSummaryRpt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-business-start-lrs-details-report>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-business-start-lrs-details-report>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<button type=\"button\" style='background: green;width: auto;color: white;float: right;'\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t\t\t(click)=\"closeBusinessStartSummaryRptPopUp()\">Close</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--<div class=\"modal-footer\">\n\t\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<button type=\"button\" style='background: green;width: 100%;color: white;'\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-dark\" (click)=\"closeStmtVerificationRptPopUp()\">Close</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t\t</div>-->\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/business-start-report/business-start-report.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/report/party-report/business-start-report/business-start-report.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BusinessStartReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessStartReportComponent", function() { return BusinessStartReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var my = new Date();













var BusinessStartReportComponent = /** @class */ (function () {
    function BusinessStartReportComponent(memoLessRpt, router, masterReadService, memoReport, modalService, consigneeService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.consigneeService = consigneeService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerBusinessStartRpt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.lrDtoDestinationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.agentDtoOptionSourceStationAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.agentDtoSourceStation = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.sourceStationTA = [];
        this.focusSourceStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchSourceStation = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.sourceStationTA
                : _this.sourceStationTA.filter(function (v) { return v.mainBookStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSourceStation = function (x) { return x.mainBookStations; };
        this.destinationAll = false;
        this.showSpinnerForAction = false;
        this.fromDatesModal = null;
        this.toDatesModal = null;
        this.validateSourceIdValue = null;
        this.validateDestinationIdValue = null;
        this.validateFromDateIdValue = null;
        this.validateToDateIdValue = null;
        this.lrDtoForSearch = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.viewBusinessStartSummaryRptPopUp = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "destinationAllCneeBusStopRpt") {
                        this.destinationAll = true;
                    }
                }
            }
            this.getDestinationDetails();
            this.getSourceDetails();
            //this.fromDatesModal = moment(new Date()).format("YYYY-MM-DD");
            //$("#fromDates").val(moment(new Date()).format("YYYY-MM-DD"));
            //$("#toDates").val(moment(new Date()).format("YYYY-MM-DD"));
        }
    }
    BusinessStartReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    BusinessStartReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsBusinessStartRpt = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    /* exportOptions: {
                         columns: [0, 1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12]
                     },*/
                    /*messageTop: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>New Consignee Summary Report</u><br><br>" +
                            "From Date : " + moment($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                            "</td>" +
                            "</tr></table><br>"
                    },*/
                    messageTop: function () {
                        return "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 22%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>From Date</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Source&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#sourceStationId").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Destination</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:24px;'><u>New Consignee Summary Report</u></strong><br>" +
                            "</td>" +
                            "<td rowspan='3' align='left' style='width:22%;'>" +
                            "</td>" +
                            "</tr>" +
                            "</table><br>";
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "New Consignee Summary Report - " +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                            "Source : " + $("#sourceStationId").val() + " - " +
                            "Destination : " + $("#destinationId").val() + "";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 380,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                var totalLrs = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var articles = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var topay = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(2).footer()).html(totalLrs);
                $(api.column(3).footer()).html(articles);
                $(api.column(4).footer()).html(actWgt);
                $(api.column(5).footer()).html(chgWgt);
                $(api.column(6).footer()).html(topay);
                $(api.column(7).footer()).html(paid);
            }
        };
    };
    BusinessStartReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerBusinessStartRpt.next();
    };
    BusinessStartReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    BusinessStartReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerBusinessStartRpt.unsubscribe();
        //this.onDestroyUnsubscribtionBusinessStartRpt.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    BusinessStartReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    BusinessStartReportComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
        // this.validateDestinationIdValue = this.modelDestination.destination;
    };
    BusinessStartReportComponent.prototype.clickListnerForSourceStation = function (e, fubi) {
        this.modelSourceStation = e.item;
        $("#sourceStationId").val(this.modelSourceStation.mainBookStations);
        // this.validateDestinationIdValue = this.modelDestination.destination;
    };
    BusinessStartReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        if (this.destinationAll == true) {
            this.lrDtoDestination.mode = "LrForm";
        }
        else {
            this.lrDtoDestination.mode = "ALL";
            this.lrDtoDestination.mainstation = this.userDataDtoReturnSession.mainStation;
        }
        console.log(this.destinationAll);
    };
    BusinessStartReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationOptions = response;
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "While Getting destination details", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    BusinessStartReportComponent.prototype.getSourceDataDetails = function () {
        this.agentDtoSourceStation = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.agentDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
    };
    BusinessStartReportComponent.prototype.getSourceDetails = function () {
        var _this = this;
        this.getSourceDataDetails();
        this.showSpinnerForAction = true;
        this.masterReadService.getMainBookingStationsDetails(this.agentDtoSourceStation).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.sourceStationTA = [];
                _this.agentDtoOptionSourceStation = [];
                _this.agentDtoOptionSourceStation = response;
                _this.agentDtoOptionSourceStationAll.mainBookStations = "All";
                _this.sourceStationTA.push(_this.agentDtoOptionSourceStationAll);
                for (var i = 0; i < _this.agentDtoOptionSourceStation.length; i++) {
                    _this.sourceStationTA.push(_this.agentDtoOptionSourceStation[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Stock At Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    BusinessStartReportComponent.prototype.validateClearBtn = function () {
        this.clearField();
        this.businessStartRptDataList = [];
        $("#businessStartRptTableId").DataTable().destroy();
        this.dtTriggerBusinessStartRpt.next();
    };
    BusinessStartReportComponent.prototype.clearField = function () {
        this.fromDatesModal = null;
        this.toDatesModal = null;
        this.validateSourceIdValue = null;
        this.validateDestinationIdValue = null;
        this.validateFromDateIdValue = null;
        this.validateToDateIdValue = null;
        this.modelDestination = null;
        this.modelSourceStation = null;
    };
    BusinessStartReportComponent.prototype.validateSearchBtn = function () {
        this.validateSourceIdValue = $("#sourceStationId").val();
        this.validateDestinationIdValue = $("#destinationId").val();
        this.validateFromDateIdValue = $("#fromDates").val();
        this.validateToDateIdValue = $("#toDates").val();
        if ((this.validateFromDateIdValue == null) || (this.validateFromDateIdValue == undefined) ||
            (this.validateFromDateIdValue == "") || (this.validateToDateIdValue == null) ||
            (this.validateToDateIdValue == undefined) || (this.validateToDateIdValue == "") ||
            (this.validateSourceIdValue == null) || (this.validateSourceIdValue == undefined) ||
            (this.validateSourceIdValue == "") || (this.validateDestinationIdValue == null) ||
            (this.validateDestinationIdValue == undefined) || (this.validateDestinationIdValue == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Fields", "Please select the mandatory field", "warning");
            return false;
        }
        else {
            this.setBusinessStartRptDetails();
        }
    };
    BusinessStartReportComponent.prototype.getBusinessStartRptDataDetails = function () {
        this.lrDtoForSearch = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.validateSourceIdValue = $("#sourceStationId").val();
        this.validateDestinationIdValue = $("#destinationId").val();
        this.validateFromDateIdValue = $("#fromDates").val();
        this.validateToDateIdValue = $("#toDates").val();
        this.lrDtoForSearch.fromDate = this.validateFromDateIdValue;
        this.lrDtoForSearch.toDate = this.validateToDateIdValue;
        this.lrDtoForSearch.source = this.validateSourceIdValue;
        this.lrDtoForSearch.destination = this.validateDestinationIdValue;
        this.lrDtoForSearch.companyId = this.userDataDtoReturnSession.companyId;
    };
    BusinessStartReportComponent.prototype.setBusinessStartRptDetails = function () {
        var _this = this;
        this.getBusinessStartRptDataDetails();
        this.showSpinnerForAction = true;
        //console.log(this.lrDtoForSearch);
        this.consigneeService.getBusinessStartReport(this.lrDtoForSearch).subscribe(function (response) {
            //console.log(response);
            _this.businessStartRptDataList = [];
            $("#businessStartRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.businessStartRptDataList = response;
                setTimeout(function () {
                    _this.dtTriggerBusinessStartRpt.next();
                }, 3000);
                _this.showSpinnerForAction = false;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("No Data", "No datas found for this information", "warning");
                setTimeout(function () {
                    _this.dtTriggerBusinessStartRpt.next();
                }, 3000);
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the business start report  Details", "info");
        },
            function () { return console.log('done'); };
    };
    BusinessStartReportComponent.prototype.getDismissReason = function (reason) {
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
    BusinessStartReportComponent.prototype.businessStartReportPopUpBtnLink = function (businessStartRptSummaryDetailsPopUpTemplate, businessStartRptData) {
        var _this = this;
        this.modalRefferenceBusinessStartReportPopUp = this.modalService.open(businessStartRptSummaryDetailsPopUpTemplate, { centered: true, size: "lg" });
        //{ centered: true, windowClass: "modalClassForPopUpTruckOwner" });
        this.modalRefferenceBusinessStartReportPopUp.result.then(function (result) {
            _this.modalRefferenceBusinessStartReportClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceBusinessStartReportClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
        this.lrDtoLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.validateFromDateIdValue = null;
        this.validateToDateIdValue = null;
        this.validateFromDateIdValue = $("#fromDates").val();
        this.validateToDateIdValue = $("#toDates").val();
        this.lrDtoLocalStorage.fromDate = moment__WEBPACK_IMPORTED_MODULE_12__(this.validateFromDateIdValue).format("DD-MM-YYYY");
        this.lrDtoLocalStorage.toDate = moment__WEBPACK_IMPORTED_MODULE_12__(this.validateToDateIdValue).format("DD-MM-YYYY");
        this.lrDtoLocalStorage.consigneeId = businessStartRptData.consigneeId;
        this.lrDtoLocalStorage.consigneeName = businessStartRptData.consigneeName;
        localStorage.clear();
        localStorage.setItem('businessStartRptLrsDetailsPopUpTemplate', JSON.stringify(this.lrDtoLocalStorage));
        this.viewBusinessStartSummaryRptPopUp = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewBusinessStartSummaryRptPopUp = false;
        });
    };
    BusinessStartReportComponent.prototype.closeBusinessStartSummaryRptPopUp = function () {
        this.modalRefferenceBusinessStartReportPopUp.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BusinessStartReportComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('businessStartRptSummaryDetailsPopUpTemplate'),
        __metadata("design:type", Object)
    ], BusinessStartReportComponent.prototype, "businessStartRptSummaryDetailsPopUpTemplate", void 0);
    BusinessStartReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-start-report',
            template: __webpack_require__(/*! ./business-start-report.component.html */ "./src/app/report/party-report/business-start-report/business-start-report.component.html"),
            styles: [__webpack_require__(/*! ./business-start-report.component.css */ "./src/app/report/party-report/business-start-report/business-start-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_15__["ConsigneeService"]])
    ], BusinessStartReportComponent);
    return BusinessStartReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/business-stop-report/business-stop-report.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/report/party-report/business-stop-report/business-stop-report.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9idXNpbmVzcy1zdG9wLXJlcG9ydC9idXNpbmVzcy1zdG9wLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjtBQUNEO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9idXNpbmVzcy1zdG9wLXJlcG9ydC9idXNpbmVzcy1zdG9wLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xuXHR0b3A6IDI2cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/report/party-report/business-stop-report/business-stop-report.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/report/party-report/business-stop-report/business-stop-report.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Business Stop Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceStationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForSourcStation($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable class=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBusinessStopRpt\" [dtTrigger]=\"dtTriggerBusinessStopRpt\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>1st Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total to Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Paid</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let businessStopRptData of businessStopRptDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStopRptData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStopRptData.partyName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStopRptData.address }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStopRptData.officeNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStopRptData.mobileNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStopRptData.lastLrDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStopRptData.avgActWtPerDay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ businessStopRptData.avgChgWtPerDay }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/business-stop-report/business-stop-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/report/party-report/business-stop-report/business-stop-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BusinessStopReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessStopReportComponent", function() { return BusinessStopReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//from the particular global folder ends











var BusinessStopReportComponent = /** @class */ (function () {
    function BusinessStopReportComponent(memoLessRpt, router, masterReadService, memoReport, modalService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerBusinessStopRpt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.lrDtoDestinationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        /*agentDtoForMainBookingStationSrc: AgentDetailsDto = new AgentDetailsDto();
        agentDtoForMainBookingStationSrcAll: AgentDetailsDto = new AgentDetailsDto();
        agentDtoOptionsForMainBookingStationSrc: AgentDetailsDto[];
    */
        /*lrDtoOptionSourceStationForOther: LRDto[];
        lrDtoSourceBookingStationForOther: LRDto = new LRDto();
        public modelSourceBookingStationForOther: any;
        sourceBookingStationForOtherTA: Array<LRDto> = [];
        focusSourceBookingStationForOtherTA$ = new Subject<string>();
        searchSourceBookingStationForOther = (text$: Observable<string>) => {
            const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
            const inputFocus$ = this.focusSourceBookingStationForOtherTA$;
    
            return merge(debouncedText$, inputFocus$).pipe(
                map(term => (term === '' ? this.sourceBookingStationForOtherTA
                    : this.sourceBookingStationForOtherTA.filter(v => v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 200))
            );
        }
        formatterSourceBookingStationForOthers = (x: { destination: string }) => x.destination;
    
        lrDtoOptionSourceStation: LRDto[];
        lrDtoSourceBookingStation: LRDto = new LRDto();
        public modelSourceBookingStation: any;
        sourceBookingStationTA: Array<LRDto> = [];
        focusSourceBookingStationTA$ = new Subject<string>();
        searchSourceBookingStation = (text$: Observable<string>) => {
            const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
            const inputFocus$ = this.focusSourceBookingStationTA$;
    
            return merge(debouncedText$, inputFocus$).pipe(
                map(term => (term === '' ? this.sourceBookingStationTA
                    : this.sourceBookingStationTA.filter(v => v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 200))
            );
        }
        formatterSourceBookingStation = (x: { subStations: string }) => x.subStations;
        */
        this.agentDtoOptionSourceStationAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_13__["AgentDetailsDto"]();
        this.agentDtoSourceStation = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_13__["AgentDetailsDto"]();
        this.sourceStationTA = [];
        this.focusSourceStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchSourceStation = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.sourceStationTA
                : _this.sourceStationTA.filter(function (v) { return v.mainBookStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSourceStation = function (x) { return x.mainBookStations; };
        this.destinationAll = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "destinationAllCneeBusStopRpt") {
                        this.destinationAll = true;
                    }
                    /*else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                        "Source BkgLrDispSupAdmin") {
                        this.getSourceDetailsForOthers();
                    } else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                        "Source BkgLrDispBkgAdmin") {
                        this.getSourceDetails();
                    }*/
                }
            }
            this.getDestinationDetails();
            this.getSourceDetails();
        }
    }
    BusinessStopReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    BusinessStopReportComponent.prototype.ngOnInit = function () {
        this.dtOptionsBusinessStopRpt = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'Party Name',
                    data: 'partyName'
                },
                {
                    title: 'Address',
                    data: 'address'
                },
                {
                    title: 'Office No',
                    data: 'officeNo'
                },
                {
                    title: 'Mobile No',
                    data: 'mobileNo'
                },
                {
                    title: 'Last LR Date',
                    data: 'lastLrDate'
                }, {
                    title: 'Avg Act Wt. per day',
                    data: 'avgActWtPerDay'
                }, {
                    title: 'Avg Chg Wt. per day',
                    data: 'avgChgWtPerDay'
                }
            ],
            dom: 'Bfrtip',
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
        /* this.getDataFrmServiceFrTable = this.businessStopReport.getSummaryData()
         this.onDestroyUnsubscribtionBusinessStopRpt = this.getDataFrmServiceFrTable.subscribe( data => {
             this.businessStopRptDataList = data['data'];
             this.dtTriggerBusinessStopRpt.next();
         } );*/
        //the below code is for the getting data through json ends
    };
    BusinessStopReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    BusinessStopReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerBusinessStopRpt.next();
    };
    BusinessStopReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerBusinessStopRpt.unsubscribe();
        //this.onDestroyUnsubscribtionBusinessStopRpt.unsubscribe();
    };
    BusinessStopReportComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
    };
    BusinessStopReportComponent.prototype.clickListnerForSourcStation = function (e, fubi) {
        this.modelSourceStation = e.item;
        $("#sourceStationId").val(this.modelSourceStation.mainBookStations);
    };
    /* clickListnerForSourceBookingStationForOther(e: NgbTypeaheadSelectItemEvent, fubi: any) {
         this.modelSourceBookingStationForOther = e.item;
         $("#sourceBookingStationForOtherId").val(this.modelSourceBookingStationForOther.destination)
     }
     clickListnerForSourceBookingStation(e: NgbTypeaheadSelectItemEvent, fubi: any) {
         this.modelSourceBookingStation = e.item;
         $("#sourceBookingStationId").val(this.modelSourceBookingStation.subStations)
     }*/
    BusinessStopReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        if (this.destinationAll == true) {
            this.lrDtoDestination.mode = "LrForm";
        }
        else {
            this.lrDtoDestination.mode = "ALL";
            this.lrDtoDestination.mainstation = this.userDataDtoReturnSession.mainStation;
        }
        console.log(this.destinationAll);
    };
    BusinessStopReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        //this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationOptions = response;
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                //this.showSpinnerForAction = false;
            }
            else {
                //this.showSpinnerForAction = false;
            }
        }), function (error) {
            //this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "While Getting destination details", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    BusinessStopReportComponent.prototype.getSourceDataDetails = function () {
        this.agentDtoSourceStation = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_13__["AgentDetailsDto"]();
        this.agentDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
    };
    BusinessStopReportComponent.prototype.getSourceDetails = function () {
        var _this = this;
        this.getSourceDataDetails();
        //this.showSpinnerForAction=true;
        this.masterReadService.getMainBookingStationsDetails(this.agentDtoSourceStation).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.sourceStationTA = [];
                _this.agentDtoOptionSourceStation = [];
                _this.agentDtoOptionSourceStation = response;
                _this.agentDtoOptionSourceStationAll.mainBookStations = "All";
                _this.sourceStationTA.push(_this.agentDtoOptionSourceStationAll);
                for (var i = 0; i < _this.agentDtoOptionSourceStation.length; i++) {
                    _this.sourceStationTA.push(_this.agentDtoOptionSourceStation[i]);
                }
                //this.showSpinnerForAction = false;
            }
            else {
                //this.showSpinnerForAction = false;
            }
        }), function (error) {
            //this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Stock At Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BusinessStopReportComponent.prototype, "dtElements", void 0);
    BusinessStopReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-stop-report',
            template: __webpack_require__(/*! ./business-stop-report.component.html */ "./src/app/report/party-report/business-stop-report/business-stop-report.component.html"),
            styles: [__webpack_require__(/*! ./business-stop-report.component.css */ "./src/app/report/party-report/business-stop-report/business-stop-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], BusinessStopReportComponent);
    return BusinessStopReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9jb21tb2RpdHktbWlzbWF0Y2gtcmVwb3J0L2NvbW1vZGl0eS1taXNtYXRjaC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBRUQ7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcGFydHktcmVwb3J0L2NvbW1vZGl0eS1taXNtYXRjaC1yZXBvcnQvY29tbW9kaXR5LW1pc21hdGNoLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuXG46Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3d7XG5cdHRvcDogMjZweDtcbiAgICBsZWZ0OiAxODhweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Commodity Mismatch Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDates\" #fromDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"clearBtn();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable id=\"commodityMismatchRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommodityMismatchReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommodityMismatchReport\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cash Memo No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name/Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Commodity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Commodity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Discount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Total</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source User</th>\n\t\t\t\t\t\t\t\t\t\t<th>Des User</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let commodityMismatchReportData of commodityMismatchReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.cashMemoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.desCommodityName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.discountAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.grandTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.srcUserName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMismatchReportData.destUserName }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CommodityMismatchReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityMismatchReportComponent", function() { return CommodityMismatchReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var my = new Date();











var CommodityMismatchReportComponent = /** @class */ (function () {
    function CommodityMismatchReportComponent(memoLessRpt, router, masterReadService, memoReport, modalService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerCommodityMismatchReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.lrDtoDestinationSpecificCity = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            /* return merge(debouncedText$, inputFocus$).pipe(
                 map(term => (term === '' ? this.destinationTA
                     : this.destinationTA.filter(v => v.destination)).slice(0, 200))
             );*/
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.userSpecificCity = false;
        this.rightForSuperAdminRole = "rights for super administrator specific destination";
        this.showSpinnerForAction = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            //if(this.rightForSuperAdminRole == "rights for super administrator specific destination"){
            if (this.userDataDtoReturnSession.role != "Super Administrator") {
                this.getDestinationDetailsForSpecificCity();
            }
            else {
                this.getDestinationDetails();
            }
        }
    }
    CommodityMismatchReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CommodityMismatchReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsCommodityMismatchReport = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 20%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Destination</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:60%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:25px;'><u>Commodity Mismatch Report</u></strong><br>" +
                            "</td>" +
                            "<td rowspan='3' align='left' style='width:20%;'>" +
                            "</td>" +
                            "</tr>" +
                            "</table><br>";
                        /*return "<table style='width: 100%;'>" +
                            "<tr>" +
                            "<td align='center' style='width: 20%;'>" +
                            "</td>" +
                            "<td style='width:40%;word-wrap: break-word;text-align:center;'>" +
                            "<strong style='font-size:25px;'><u>Commodity Mismatch Report </u></strong><br>" +
                            "</td>" +
                            "<td align='left' style='width:40%;'>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='width: 20%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>From Date</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment($("#fromDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>To Date</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment($("#toDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Destination</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td style='width:40%;word-wrap: break-word;text-align:center;'>" +
                            "</td>" +
                            "<td align='left' style='width:40%;'>" +
                            "</td>" +
                            "</tr>" +
                            "</table><br>";*/
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return " Commodity Mismatch Report - " +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                            "Destination : " + $("#destinationId").val() + "";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
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
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                // computing column Total of the complete result 
                var actWgtAmt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgtAmt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalArticleAmt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var discountAmt = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var memoAmt = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(6).footer()).html(actWgtAmt);
                $(api.column(7).footer()).html(chgWgtAmt);
                $(api.column(8).footer()).html(totalArticleAmt);
                $(api.column(9).footer()).html(discountAmt);
                $(api.column(10).footer()).html(memoAmt);
            },
        };
    };
    CommodityMismatchReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerCommodityMismatchReport.next();
    };
    CommodityMismatchReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    CommodityMismatchReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerCommodityMismatchReport.unsubscribe();
        //this.onDestroyUnsubscribtionCommodityMismatchReport.unsubscribe();
    };
    CommodityMismatchReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    CommodityMismatchReportComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
    };
    CommodityMismatchReportComponent.prototype.getDestinationDetailsForSpecificCity = function () {
        this.lrDtoDestinationSpecificCity = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.destinationTA = [];
        this.destinationOptions = [];
        this.lrDtoDestinationSpecificCity.destination = this.userDataDtoReturnSession.mainStation;
        this.destinationOptions.push(this.lrDtoDestinationSpecificCity);
        this.destinationTA.push(this.destinationOptions[0]);
    };
    CommodityMismatchReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    CommodityMismatchReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationOptions = response;
                _this.destinationTA = [];
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "While Getting destination details", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    CommodityMismatchReportComponent.prototype.clearField = function () {
        this.fromDatesModal = null;
        this.toDatesModal = null;
        this.modelDestination = null;
        this.validateDestination = null;
        $("#fromDates").val('');
        $("#toDates").val('');
        $("#destinationId").val('');
        this.validateFromDate = null;
        this.validateToDate = null;
        $("#commodityMismatchRptTableId").DataTable().destroy();
        this.dtTriggerCommodityMismatchReport.next();
        this.commodityMismatchReportDataList = [];
    };
    CommodityMismatchReportComponent.prototype.clearBtn = function () {
        this.clearField();
    };
    CommodityMismatchReportComponent.prototype.validateSearchBtn = function () {
        if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
            ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
            ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
            ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
            ($("#destinationId").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Fields", "Please select the mandatory fields", "warning");
            return false;
        }
        else {
            this.setCommodityMisMatchDetailsReport();
        }
    };
    CommodityMismatchReportComponent.prototype.getCommodityMisMatchDetailsData = function () {
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.validateFromDate = $("#fromDates").val();
        this.validateToDate = $("#toDates").val();
        this.validateDestination = $("#destinationId").val();
        this.lrDto.fromDate = this.validateFromDate;
        this.lrDto.toDate = this.validateToDate;
        this.lrDto.city = this.validateDestination;
    };
    CommodityMismatchReportComponent.prototype.setCommodityMisMatchDetailsReport = function () {
        var _this = this;
        this.getCommodityMisMatchDetailsData();
        this.showSpinnerForAction = true;
        this.memoReport.getCommodityMismatchDetails(this.lrDto).subscribe(function (response) {
            console.log(response);
            _this.commodityMismatchReportDataList = [];
            $("#commodityMismatchRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.commodityMismatchReportDataList = response;
                _this.dtTriggerCommodityMismatchReport.next();
            }
            else {
                _this.dtTriggerCommodityMismatchReport.next();
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No datas found for this information", "info");
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "While Getting CommodityMisMatch Report details", "warning");
        },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CommodityMismatchReportComponent.prototype, "dtElements", void 0);
    CommodityMismatchReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commodity-mismatch-report',
            template: __webpack_require__(/*! ./commodity-mismatch-report.component.html */ "./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.html"),
            styles: [__webpack_require__(/*! ./commodity-mismatch-report.component.css */ "./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], CommodityMismatchReportComponent);
    return CommodityMismatchReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  padding: 0px 10px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9jb25zaWduZWUtYWRtaW4tcmF0ZS1yZXBvcnQvY29uc2lnbmVlLWFkbWluLXJhdGUtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcGFydHktcmVwb3J0L2NvbnNpZ25lZS1hZG1pbi1yYXRlLXJlcG9ydC9jb25zaWduZWUtYWRtaW4tcmF0ZS1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n.imb_patch {\n\ttext-align: center;\n\tbackground-color: orange;\n\tpadding: 2px;\n}\n</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Consignee Admin Rate Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\" style=\"border-bottom: 1px solid orange;\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-12 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">Statement Less Checked And Pending Lrs</h6> -->\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsigneeAdminRateReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsigneeAdminRateReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th>Gc Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Receipt Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>D.Ham</th>\n\t\t\t\t\t\t\t\t\t\t<th>S.Hamali</th>\n\t\t\t\t\t\t\t\t\t\t<th>Lc Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bc Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>AOC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>FOV</th>\n\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t<th>Deliv Type</th>\n\t\t\t\t\t\t\t\t\t\t<th>Eff. From</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consigneeAdminRateReportData of consigneeAdminRateReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.unit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.gcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.receiptChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.serviceChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.dHam }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.sHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.lcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.bcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.aocChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.dd }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.others }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.delivType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeAdminRateReportData.effFrom }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" style=\"padding-top: 20px;\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">LR Details</h6> -->\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommodityRateDetailsTable\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommodityRateDetailsTable\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th>Gc Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Receipt Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>D.Ham</th>\n\t\t\t\t\t\t\t\t\t\t<th>S.Hamali</th>\n\t\t\t\t\t\t\t\t\t\t<th>Lc Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bc Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>AOC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>FOV</th>\n\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t<th>Deliv Type</th>\n\t\t\t\t\t\t\t\t\t\t<th>Eff. From</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let commodityRateDetailsTableData of commodityRateDetailsTableDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.unit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.gcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.receiptChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.serviceChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.dHam }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.sHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.lcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.bcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.aocChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.dd }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.others }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.delivType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateDetailsTableData.effFrom }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ConsigneeAdminRateReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeAdminRateReportComponent", function() { return ConsigneeAdminRateReportComponent; });
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


var ConsigneeAdminRateReportComponent = /** @class */ (function () {
    function ConsigneeAdminRateReportComponent(consigneeAdminRateRpt) {
        this.consigneeAdminRateRpt = consigneeAdminRateRpt;
        this.loadingIndicator = true;
        this.dtTriggerConsigneeAdminRateReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerCommodityRateDetailsTable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ConsigneeAdminRateReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsigneeAdminRateReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsConsigneeAdminRateReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                },
                {
                    title: 'Commodity',
                    data: 'commodity'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Unit',
                    data: 'unit'
                },
                {
                    title: 'Per Unit',
                    data: 'perUnit'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Gc Chg',
                    data: 'gcChg'
                }, {
                    title: 'Receipt Chg',
                    data: 'receiptChg'
                }, {
                    title: 'Service Chg',
                    data: 'serviceChg'
                },
                {
                    title: 'D.Ham',
                    data: 'dHam'
                },
                {
                    title: 'S.Hamali',
                    data: 'sHamali'
                },
                {
                    title: 'Lc Chg',
                    data: 'lcChg'
                },
                {
                    title: 'Bc Chg',
                    data: 'bcChg'
                },
                {
                    title: 'AOC Chg',
                    data: 'aocChg'
                },
                {
                    title: 'FOV',
                    data: 'fov'
                }, {
                    title: 'DD',
                    data: 'dd'
                }, {
                    title: 'Others',
                    data: 'others'
                },
                {
                    title: 'Collection Man',
                    data: 'collectionMan'
                },
                {
                    title: 'Deliv Type',
                    data: 'delivType'
                },
                {
                    title: 'Eff. From',
                    data: 'effFrom'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
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
            "scrollY": 200,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        this.dtOptionsCommodityRateDetailsTable = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Commodity',
                    data: 'commodity'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Unit',
                    data: 'unit'
                },
                {
                    title: 'Per Unit',
                    data: 'perUnit'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Gc Chg',
                    data: 'gcChg'
                }, {
                    title: 'Receipt Chg',
                    data: 'receiptChg'
                }, {
                    title: 'Service Chg',
                    data: 'serviceChg'
                },
                {
                    title: 'D.Ham',
                    data: 'dHam'
                },
                {
                    title: 'S.Hamali',
                    data: 'sHamali'
                },
                {
                    title: 'Lc Chg',
                    data: 'lcChg'
                },
                {
                    title: 'Bc Chg',
                    data: 'bcChg'
                },
                {
                    title: 'AOC Chg',
                    data: 'aocChg'
                },
                {
                    title: 'FOV',
                    data: 'fov'
                }, {
                    title: 'DD',
                    data: 'dd'
                }, {
                    title: 'Others',
                    data: 'others'
                },
                {
                    title: 'Collection Man',
                    data: 'collectionMan'
                },
                {
                    title: 'Deliv Type',
                    data: 'delivType'
                },
                {
                    title: 'Eff. From',
                    data: 'effFrom'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
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
        this.getDataFrmServiceFrConsigneeAdminRateTable = this.consigneeAdminRateRpt.getSummaryData();
        this.onDestroyUnsubscribtionConsigneeAdminRateReport = this.getDataFrmServiceFrConsigneeAdminRateTable.subscribe(function (data) {
            _this.consigneeAdminRateReportDataList = data['data'];
            _this.dtTriggerConsigneeAdminRateReport.next();
        });
        this.getDataFrmServiceFrCommodityRateDetailsTable = this.consigneeAdminRateRpt.getSummaryData();
        this.onDestroyUnsubscribtionCommodityRateDetailsTable = this.getDataFrmServiceFrCommodityRateDetailsTable.subscribe(function (data) {
            _this.commodityRateDetailsTableDataList = data['data'];
            _this.dtTriggerCommodityRateDetailsTable.next();
        });
        //the below code is for the getting data through json ends
    };
    ConsigneeAdminRateReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerConsigneeAdminRateReport.unsubscribe();
        this.dtTriggerCommodityRateDetailsTable.unsubscribe();
        this.onDestroyUnsubscribtionConsigneeAdminRateReport.unsubscribe();
        this.onDestroyUnsubscribtionCommodityRateDetailsTable.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsigneeAdminRateReportComponent.prototype, "dtElements", void 0);
    ConsigneeAdminRateReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignee-admin-rate-report',
            template: __webpack_require__(/*! ./consignee-admin-rate-report.component.html */ "./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.html"),
            styles: [__webpack_require__(/*! ./consignee-admin-rate-report.component.css */ "./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ConsigneeAdminRateReportComponent);
    return ConsigneeAdminRateReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9wYXJ0eS1yZXBvcnQvY29uc2lnbmVlLXJhdGUtcmVwb3J0L2NvbnNpZ25lZS1yYXRlLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Consignee Rate Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"collectionManWise\">Collection\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMan Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"sourceWise\">Source Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentOptions | filter: control.value) as resultAgent\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultAgent.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"collectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"control\" [appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManOptions | filter: control.value) as resultCollectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultCollectionMan.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Less Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"lessType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Less Type</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"rate\">Rate</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"discount\">Discount</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsigneeRateReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsigneeRateReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Deliv Type</th>\n\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Src.Ham</th>\n\t\t\t\t\t\t\t\t\t\t<th>Des.Ham</th>\n\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th>Receipt Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>GC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consigneeRateReportData of consigneeRateReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.delivType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.unit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.sourceHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.destinationHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.receiptChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.serviceChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.gcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateReportData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ConsigneeRateReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeRateReportComponent", function() { return ConsigneeRateReportComponent; });
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
//for the select option with filter starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var ConsigneeRateReportComponent = /** @class */ (function () {
    function ConsigneeRateReportComponent(consigneeRateRpt) {
        this.consigneeRateRpt = consigneeRateRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.agentOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Agra' },
            { id: 3, label: 'Bawana' },
            { id: 4, label: 'Delhi' }
        ];
        this.collectionManOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Aamer' },
            { id: 3, label: 'Afzal' },
            { id: 3, label: 'Arif' }
        ];
        this.dtTriggerConsigneeRateReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ConsigneeRateReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsigneeRateReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsConsigneeRateReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Deliv Type',
                    data: 'delivType'
                },
                {
                    title: 'Unit',
                    data: 'unit'
                },
                {
                    title: 'Src.Ham',
                    data: 'sourceHamali'
                },
                {
                    title: 'Des.Ham',
                    data: 'destinationHamali'
                },
                {
                    title: 'Collection Man',
                    data: 'collectionMan'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Recepit Chg',
                    data: 'recepitChg'
                },
                {
                    title: 'Service Chg',
                    data: 'serviceChg'
                },
                {
                    title: 'GC Chg',
                    data: 'gcChg'
                },
                {
                    title: 'Per Unit',
                    data: 'perUnit'
                },
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                },
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
        this.gettingDataFrmServiceFrConsigneeRateReportTable = this.consigneeRateRpt.getSummaryData();
        this.onDestroyUnsubscribtionConsigneeRateReport = this.gettingDataFrmServiceFrConsigneeRateReportTable.subscribe(function (data) {
            _this.consigneeRateReportDataList = data['data'];
            _this.dtTriggerConsigneeRateReport.next();
        });
        //the below code is for the getting data through json ends
    };
    ConsigneeRateReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerConsigneeRateReport.unsubscribe();
        this.onDestroyUnsubscribtionConsigneeRateReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ConsigneeRateReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    ConsigneeRateReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], ConsigneeRateReportComponent.prototype, "dtElements", void 0);
    ConsigneeRateReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignee-rate-report',
            template: __webpack_require__(/*! ./consignee-rate-report.component.html */ "./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.html"),
            styles: [__webpack_require__(/*! ./consignee-rate-report.component.css */ "./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ConsigneeRateReportComponent);
    return ConsigneeRateReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/consignee-report/consignee-report.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-report/consignee-report.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9jb25zaWduZWUtcmVwb3J0L2NvbnNpZ25lZS1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcGFydHktcmVwb3J0L2NvbnNpZ25lZS1yZXBvcnQvY29uc2lnbmVlLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/report/party-report/consignee-report/consignee-report.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-report/consignee-report.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Consignee Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxAgentWiseView\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxAgentWiseView\">Agent Wise View</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summary\">Summary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detail\">Detail</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>C/nee Index</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select C/nee Index</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"a\">A</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"b\">B</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"c\">C</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>C/nee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select C/nee Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"aaIndustries\">AA Industries</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ayTradeLinks\">AY Trade Links</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"asMarketing\">AS Marketing</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>C/nor Index</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select C.nor Index</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"a\">A</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"b\">B</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"c\">C</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>C/nor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select C/nor Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ajIndustries\">AJ Industries</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ayCreations\">AY Creations</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"aZone\">A Zone</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Commodity</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A C Parts</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">A P Sheets</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">A S Goods</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Agent</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agra\">Agra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"daman\">Daman</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSummary\" [dtTrigger]=\"dtTriggerSummary\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Cnnsignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee GST No</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryData of summaryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.consigneeGstNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.article }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.fov }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<div [hidden]=\"! detailTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionDetail\" [dtTrigger]=\"dtTriggerDetail\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignee GST</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Commodity Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>CashMemo Amt</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Unloading At</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Arr Wtn</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Delivery Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Del Wtn</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let detailData of detailDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.invoiceNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.consigneeGst }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.article }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.actWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.chgWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.lc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.cashmemoAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.unloadingAt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.arrWtn }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.deliveryDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.delWtn }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/consignee-report/consignee-report.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/report/party-report/consignee-report/consignee-report.component.ts ***!
  \************************************************************************************/
/*! exports provided: ConsigneeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeReportComponent", function() { return ConsigneeReportComponent; });
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var ConsigneeReportComponent = /** @class */ (function () {
    function ConsigneeReportComponent(consigneeRpt) {
        this.consigneeRpt = consigneeRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewTypeSummary = true;
        this.viewTypeDetail = false;
        this.searchWithOldConsignor = false;
        this.dtTriggerSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerDetail = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ConsigneeReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsigneeReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsSummary = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                },
                {
                    title: 'Total Lrs',
                    data: 'totalLrs'
                },
                {
                    title: 'Consignee Gst No',
                    data: 'consigneeGstNo'
                },
                {
                    title: 'To Pay',
                    data: 'toPay'
                },
                {
                    title: 'Paid',
                    data: 'paid'
                },
                {
                    title: 'Article',
                    data: 'article'
                },
                {
                    title: 'Actual Weight',
                    data: 'actualWeight'
                },
                {
                    title: 'Charged Weight',
                    data: 'chargedWeight'
                },
                {
                    title: 'Goods Value',
                    data: 'goodsValue'
                },
                {
                    title: 'F O V',
                    data: 'fov'
                }
            ],
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
        this.dtOptionDetail = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'Booking Date',
                    data: 'bookingDate'
                },
                {
                    title: 'Invoice No',
                    data: 'invoiceNo'
                },
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                },
                {
                    title: 'Consignor Name',
                    data: 'consignorName'
                },
                {
                    title: 'Consignee GST',
                    data: 'consigneeGst'
                },
                {
                    title: 'Commodity Name',
                    data: 'commodityName'
                },
                {
                    title: 'To Pay',
                    data: 'toPay'
                },
                {
                    title: 'Paid',
                    data: 'paid'
                },
                {
                    title: 'Article',
                    data: 'article'
                },
                {
                    title: 'Act Wgt',
                    data: 'actWgt'
                },
                {
                    title: 'Chg Wgt',
                    data: 'chgWgt'
                },
                {
                    title: 'LC',
                    data: 'lc'
                },
                {
                    title: 'BC',
                    data: 'bc'
                },
                {
                    title: 'CashMemo Amt',
                    data: 'cashmemoAmt'
                },
                {
                    title: 'Unloading At',
                    data: 'unloadingAt'
                },
                {
                    title: 'Arr Wtn',
                    data: 'arrWtn'
                },
                {
                    title: 'Delivery Date',
                    data: 'deliveryDate'
                },
                {
                    title: 'Del Wtn',
                    data: 'delWtn'
                },
                {
                    title: 'Goods Value',
                    data: 'goodsValue'
                },
                {
                    title: 'F O V',
                    data: 'fov'
                }
            ],
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
        this.gettingDataFrmServiceFrSmryTable = this.consigneeRpt.getSummaryData();
        this.onDestroyUnsubscribtionSmry = this.gettingDataFrmServiceFrSmryTable.subscribe(function (data) {
            _this.summaryDataList = data['data'];
            _this.dtTriggerSummary.next();
        });
        this.gettingDataFrmServiceFrDetailTable = this.consigneeRpt.getSummaryData();
        this.onDestroyUnsubscribtionDetail = this.gettingDataFrmServiceFrDetailTable.subscribe(function (data) {
            _this.detailDataList = data['data'];
            _this.dtTriggerDetail.next();
        });
        //the below code is for the getting data through json ends
    };
    ConsigneeReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSummary.unsubscribe();
        this.dtTriggerDetail.unsubscribe();
        this.onDestroyUnsubscribtionSmry.unsubscribe();
        this.onDestroyUnsubscribtionDetail.unsubscribe();
        //            this.gettingDataFrmServiceFrSmryTable.unsubscribe();
        //            this.gettingDataFrmServiceFrDetailTable.unsubscribe();
        //            this.gettingDataFrmServiceFrDestTable.unsubscribe();
        //            this.dtOptionsSummary.unsubscribe();
        //            this.dtOptionDetail.unsubscribe();
        //            this.dtOptionsDestination.unsubscribe();
    };
    ConsigneeReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'summary') {
            this.viewTypeSummary = true;
            this.viewTypeDetail = false;
        }
        else if (viewType === 'detail') {
            this.viewTypeSummary = false;
            this.viewTypeDetail = true;
        }
        else {
            this.viewTypeSummary = false;
            this.viewTypeDetail = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ConsigneeReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsigneeReportComponent.prototype, "dtElements", void 0);
    ConsigneeReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignee-report',
            template: __webpack_require__(/*! ./consignee-report.component.html */ "./src/app/report/party-report/consignee-report/consignee-report.component.html"),
            styles: [__webpack_require__(/*! ./consignee-report.component.css */ "./src/app/report/party-report/consignee-report/consignee-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ConsigneeReportComponent);
    return ConsigneeReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/consignor-report/consignor-report.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/report/party-report/consignor-report/consignor-report.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9jb25zaWdub3ItcmVwb3J0L2NvbnNpZ25vci1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcGFydHktcmVwb3J0L2NvbnNpZ25vci1yZXBvcnQvY29uc2lnbm9yLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/report/party-report/consignor-report/consignor-report.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/report/party-report/consignor-report/consignor-report.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Consignor Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search With</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchWith\"\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchWith\" #searchWith\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchWithMode(searchWith.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"newConsignor\">New Consignor</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"oldConsignor\">Old Consignor</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summary\">Summary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detail\">Detail</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchWithOldConsignor\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>C/nor Index</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select C.nor Index</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"a\">A</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"b\">B</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"c\">C</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>C/nor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select C/nor Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ajIndustries\">AJ Industries</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ayCreations\">AY Creations</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"aZone\">A Zone</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>C/nee Index</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select C/nee Index</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"a\">A</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"b\">B</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"c\">C</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>C/nee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select C/nee Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"aaIndustries\">AA Industries</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ayTradeLinks\">AY Trade Links</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"asMarketing\">AS Marketing</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Commodity</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A C Parts</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">A P Sheets</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">A S Goods</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSummary\" [dtTrigger]=\"dtTriggerSummary\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor GST No</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t<th>AOC</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryData of summaryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.consignorGstNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.article }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.aoc }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<div [hidden]=\"! detailTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionDetail\" [dtTrigger]=\"dtTriggerDetail\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Gst</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>AOC</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let detailData of detailDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.consignorGst }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.article }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.aoc }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/consignor-report/consignor-report.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/report/party-report/consignor-report/consignor-report.component.ts ***!
  \************************************************************************************/
/*! exports provided: ConsignorReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignorReportComponent", function() { return ConsignorReportComponent; });
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var ConsignorReportComponent = /** @class */ (function () {
    function ConsignorReportComponent(consignorRpt) {
        this.consignorRpt = consignorRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewTypeSummary = true;
        this.viewTypeDetail = false;
        this.searchWithOldConsignor = false;
        this.dtTriggerSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerDetail = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ConsignorReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsignorReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsSummary = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Consignor Name',
                    data: 'consignorName'
                },
                {
                    title: 'Total Lrs',
                    data: 'totalLrs'
                },
                {
                    title: 'Consignor Gst No',
                    data: 'consignorGstNo'
                },
                {
                    title: 'To Pay',
                    data: 'toPay'
                },
                {
                    title: 'Paid',
                    data: 'paid'
                },
                {
                    title: 'Article',
                    data: 'article'
                }, {
                    title: 'Actual Weight',
                    data: 'actualWeight'
                }, {
                    title: 'Charged Weight',
                    data: 'chargedWeight'
                }, {
                    title: 'F O V',
                    data: 'fov'
                }, {
                    title: 'AOC',
                    data: 'aoc'
                }
            ],
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
        this.dtOptionDetail = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'Destination',
                    data: 'destination'
                },
                {
                    title: 'Booking Date',
                    data: 'bookingDate'
                },
                {
                    title: 'Invoice Number',
                    data: 'invoiceNumber'
                },
                {
                    title: 'Consignor Name',
                    data: 'consignorName'
                },
                {
                    title: 'Consignor GST',
                    data: 'consignorGst'
                }, {
                    title: 'To Pay',
                    data: 'toPay'
                }, {
                    title: 'Paid',
                    data: 'paid'
                }, {
                    title: 'Article',
                    data: 'article'
                }, {
                    title: 'Actual Weight',
                    data: 'actualWeight'
                }, {
                    title: 'Charged Weight',
                    data: 'chargedWeight'
                }, {
                    title: 'F O V',
                    data: 'fov'
                }, {
                    title: 'AOC',
                    data: 'aoc'
                }
            ],
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
        this.gettingDataFrmServiceFrSmryTable = this.consignorRpt.getSummaryData();
        this.onDestroyUnsubscribtionSmry = this.gettingDataFrmServiceFrSmryTable.subscribe(function (data) {
            _this.summaryDataList = data['data'];
            _this.dtTriggerSummary.next();
        });
        this.gettingDataFrmServiceFrDetailTable = this.consignorRpt.getSummaryData();
        this.onDestroyUnsubscribtionDetail = this.gettingDataFrmServiceFrDetailTable.subscribe(function (data) {
            _this.detailDataList = data['data'];
            _this.dtTriggerDetail.next();
        });
        //the below code is for the getting data through json ends
    };
    ConsignorReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSummary.unsubscribe();
        this.dtTriggerDetail.unsubscribe();
        this.onDestroyUnsubscribtionSmry.unsubscribe();
        this.onDestroyUnsubscribtionDetail.unsubscribe();
        //            this.gettingDataFrmServiceFrSmryTable.unsubscribe();
        //            this.gettingDataFrmServiceFrDetailTable.unsubscribe();
        //            this.gettingDataFrmServiceFrDestTable.unsubscribe();
        //            this.dtOptionsSummary.unsubscribe();
        //            this.dtOptionDetail.unsubscribe();
        //            this.dtOptionsDestination.unsubscribe();
    };
    ConsignorReportComponent.prototype.searchWithMode = function (searchWith) {
        if (searchWith === 'newConsignor') {
            this.searchWithOldConsignor = false;
        }
        else if (searchWith === 'oldConsignor') {
            this.searchWithOldConsignor = true;
        }
        else {
            this.searchWithOldConsignor = false;
        }
    };
    ConsignorReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'summary') {
            this.viewTypeSummary = true;
            this.viewTypeDetail = false;
        }
        else if (viewType === 'detail') {
            this.viewTypeSummary = false;
            this.viewTypeDetail = true;
        }
        else {
            this.viewTypeSummary = false;
            this.viewTypeDetail = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ConsignorReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsignorReportComponent.prototype, "dtElements", void 0);
    ConsignorReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignor-report',
            template: __webpack_require__(/*! ./consignor-report.component.html */ "./src/app/report/party-report/consignor-report/consignor-report.component.html"),
            styles: [__webpack_require__(/*! ./consignor-report.component.css */ "./src/app/report/party-report/consignor-report/consignor-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ConsignorReportComponent);
    return ConsignorReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9kaXNjb250aW51b3VzLWRldGFpbHMtcmVwb3J0L2Rpc2NvbnRpbnVvdXMtZGV0YWlscy1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9wYXJ0eS1yZXBvcnQvZGlzY29udGludW91cy1kZXRhaWxzLXJlcG9ydC9kaXNjb250aW51b3VzLWRldGFpbHMtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3cge1xyXG4gIHRvcDoyNnB4O1xyXG4gICAgbGVmdDoyNXB4O1xyXG5cdG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Discontinuous Parties\n\t\t\t\t\t\tDetails Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #source id=\"source\" name=\"source\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelForMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchMainSrcAt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusMainSrcTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDestListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Periods(Days):</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"periodDay\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\"(click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Discontinue Parties Details\n\t\t\t\t\t\t\t\t\t\t\t\t\tReport</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"discontinuousDetailsReportId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDiscontinuousDetailsReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDiscontinuousDetailsReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Mobile No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GST No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Contact Person</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Book Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let discontinuousDetailsReportData of discontinuousDetailsReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ discontinuousDetailsReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ discontinuousDetailsReportData.address }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ discontinuousDetailsReportData.mobileNum }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ discontinuousDetailsReportData.gstNoConsignee }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ discontinuousDetailsReportData.contactPerson\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ discontinuousDetailsReportData.bookingDateStr  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ discontinuousDetailsReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>`\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DiscontinuousDetailsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinuousDetailsReportComponent", function() { return DiscontinuousDetailsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var my = new Date();
















var DiscontinuousDetailsReportComponent = /** @class */ (function () {
    function DiscontinuousDetailsReportComponent(router, masterReadService, datePipe, lrReportService, masterService, consigneeService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.consigneeService = consigneeService;
        //summaryTable:any;
        this.loadingIndicator = true;
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.dtTriggerDiscontinuousDetailsReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        //for ConsigneeName
        this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.consigneeNameTA = [];
        this.consigneeNameTATemp = [];
        this.consigneeNameTATempForDest = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.viewDestination = false;
        this.destView = false;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        //// Main Src
        this.agentDtoForMainSrc = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_13__["AgentDetailsDto"]();
        this.mainSrcTA = [];
        this.focusMainSrcTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchMainSrcAt = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusMainSrcTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.mainSrcTA
                : _this.mainSrcTA.filter(function (v) { return v.mainBookStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterMainSrc = function (x) { return x.mainBookStations; };
        this.lrDtoDiscontinousDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.showDest = 'DiscontPartyRpt DestView';
        this.getConsigneeDetails = function (destShow) {
            _this.getConsigneeDetailsList(destShow);
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    $("#consigneeName").val('All');
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    _this.selecDestinationForTemp = $("#destination").val();
                    if (_this.selecDestinationForTemp == _this.userDataDtoReturnSession.mainStation) {
                        _this.consigneeNameTATempForDest = _this.consigneeNameTA;
                    }
                    _this.consigneeNameTATemp = _this.consigneeNameTA;
                    $("#consigneeName").val('All');
                    console.log(_this.consigneeNameTA, _this.consigneeNameTATemp);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchDiscontinousDetails = function () {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getDiscontPartyRptDtls(_this.lrDtoDiscontinousDetails).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#discontinuousDetailsReportId").DataTable().destroy();
                _this.discontinuousDetailsReportDataList = [];
                //this.callServForTableDestroy();
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.discontinuousDetailsReportDataList = response;
                    console.log(_this.discontinuousDetailsReportDataList);
                }
                _this.dtTriggerDiscontinuousDetailsReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the  Party Details View", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.office = this.userDataDtoReturnSession.office == null ? '' : this.userDataDtoReturnSession.office;
            $("#destination").val(this.userDataDtoReturnSession.mainStation);
            this.getConsigneeDetails(false);
            this.getMainSrcDetails();
            /*if (this.showDest=='DiscontPartyRpt DestView') {
            this.destView=true;
            }*/
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "DiscontPartyRpt DestView") {
                        this.destView = true;
                    }
                }
            }
            if (this.destView == true) {
                this.viewDestination = true;
                this.getDestinationDetails();
            }
            else {
                this.viewDestination = false;
            }
        }
    }
    DiscontinuousDetailsReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    DiscontinuousDetailsReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    DiscontinuousDetailsReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DiscontinuousDetailsReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDiscontinuousDetailsReport.unsubscribe();
    };
    DiscontinuousDetailsReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerDiscontinuousDetailsReport.next();
    };
    DiscontinuousDetailsReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var todayDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
        var mainStation = this.office;
        console.log(mainStation);
        var destVisible = false;
        if (this.destView == true) {
            destVisible = true;
        }
        else {
            destVisible = false;
        }
        this.dtOptionsDiscontinuousDetailsReport = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '13px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        var returnVal = null;
                        if (destVisible == true) {
                            returnVal = "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                "<u>Discontinue Parties Details Report - " + $("#destination").val() + " Date : " + todayDate + "</u><br><br>" +
                                "</td>" +
                                "</tr></table><br>";
                        }
                        else {
                            returnVal = "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                "<u>Discontinue Parties Details Report - " + mainStation + " Date : " + todayDate + "</u><br><br>" +
                                "</td>" +
                                "</tr></table><br>";
                        }
                        return returnVal;
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        var returnSummaryExcel = null;
                        if (destVisible == true) {
                            returnSummaryExcel = "Discontinue Parties Details Report - " + $("#destination").val() + " Date : " + todayDate;
                        }
                        else {
                            returnSummaryExcel = "Discontinue Parties Details Report - " + mainStation + " Date : " + todayDate;
                        }
                        return returnSummaryExcel;
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": false,
            "scrollY": 300,
            "scrollCollapse": true,
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html();
                $(api.column(6).footer()).html();
            }
        };
    };
    DiscontinuousDetailsReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    DiscontinuousDetailsReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                //this.stationOptions = response;
                if (response.length > 0) {
                    _this.destinationOptions = response;
                    _this.destinationTA = [];
                    for (var i = 0; i < _this.destinationOptions.length; i++) {
                        _this.destinationTA.push(_this.destinationOptions[i]);
                    }
                    $("#destination").val(_this.userDataDtoReturnSession.mainStation);
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    DiscontinuousDetailsReportComponent.prototype.getConsigneeDetailsList = function (destShow) {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.selectedDestination = this.modelDestinationFotGet;
        if (destShow) {
            this.partyMasterDtoForconsignee.office = this.selectedDestination.destination;
            console.log(this.selectedDestination);
        }
        else {
            this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        }
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "specific";
        console.log(this.partyMasterDtoForconsignee);
    };
    DiscontinuousDetailsReportComponent.prototype.consigneeDestListener = function (e) {
        this.modelDestinationFotGet = e.item;
        this.getConsigneeDetails(true);
    };
    DiscontinuousDetailsReportComponent.prototype.rowSelectedConsignee = function (e) {
        this.modelConsigneeNameId = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
    };
    DiscontinuousDetailsReportComponent.prototype.getMainSrcMethod = function () {
        this.agentDtoForMainSrc = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_13__["AgentDetailsDto"]();
        this.agentDtoForMainSrc.companyId = this.userDataDtoReturnSession.companyId;
    };
    DiscontinuousDetailsReportComponent.prototype.getMainSrcDetails = function () {
        var _this = this;
        this.getMainSrcMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getMainBookingStationsDetails(this.agentDtoForMainSrc).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                _this.agentDtoOptionsForMainSrc = [];
                _this.mainSrcTA = [];
                if (response.length > 0) {
                    _this.agentDtoOptionsForMainSrc = response;
                    console.log(_this.agentDtoOptionsForMainSrc);
                    _this.mainSrcTA = [];
                    for (var i = 0; i < _this.agentDtoOptionsForMainSrc.length; i++) {
                        _this.mainSrcTA.push(_this.agentDtoOptionsForMainSrc[i]);
                    }
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Stock At Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    DiscontinuousDetailsReportComponent.prototype.searchMethod = function () {
        this.selectedSource = $("#source").val();
        this.selectedDestination = $("#destination").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDays = $("#periodDay").val();
        console.log(this.selectedSource);
        if (this.destView == true) {
            if (this.selectedDestination == null || this.selectedDestination == '' || this.selectedDestination == undefined) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Warning",
                    text: "Please Select Destination !",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
        }
        if (this.selectedSource == null || this.selectedSource == '' || this.selectedSource == undefined || this.selectedDays == null || this.selectedDays == '' || this.selectedDays == undefined) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "Warning",
                text: "Please Select the Mandetory Fields !",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.lrDtoDiscontinousDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
            if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
                this.lrDtoDiscontinousDetails.consigneeId = this.selectedConsigneeId;
            }
            else {
                this.lrDtoDiscontinousDetails.consigneeId = 0;
            }
            this.lrDtoDiscontinousDetails.companyId = this.userDataDtoReturnSession.companyId;
            this.lrDtoDiscontinousDetails.source = this.selectedSource;
            this.lrDtoDiscontinousDetails.periodRange = this.selectedDays;
            if (this.destView == true) {
                this.lrDtoDiscontinousDetails.destination = this.selectedDestination;
            }
            else {
                this.lrDtoDiscontinousDetails.destination = this.userDataDtoReturnSession.mainStation;
            }
            console.log(this.lrDtoDiscontinousDetails);
            this.searchDiscontinousDetails();
        }
    };
    DiscontinuousDetailsReportComponent.prototype.clearMethod = function () {
        $("#discontinuousDetailsReportId").DataTable().destroy();
        this.discontinuousDetailsReportDataList = [];
        this.dtTriggerDiscontinuousDetailsReport.next();
        this.lrDtoDiscontinousDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.showSpinnerForAction = false;
        this.selectedSource = '';
        $("#source").val('');
        this.modelForMainSrc = '';
        this.selectedDestination = '';
        this.selectedConsigneeName = '';
        this.selectedDays = '';
        $("#periodDay").val('');
        this.selectedConsigneeId == 0;
        this.modelDestinationFotGet = '';
        if (this.destView == true) {
            this.viewDestination = true;
            $("#destination").val(this.userDataDtoReturnSession.mainStation);
            this.consigneeNameTA = [];
            this.consigneeNameTA = this.consigneeNameTATempForDest;
            $("#consigneeName").val('All');
        }
        else {
            this.consigneeNameTA = this.consigneeNameTATemp;
            this.viewDestination = false;
            $("#consigneeName").val('All');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DiscontinuousDetailsReportComponent.prototype, "dtElements", void 0);
    DiscontinuousDetailsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discontinuous-details-report',
            template: __webpack_require__(/*! ./discontinuous-details-report.component.html */ "./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.html"),
            styles: [__webpack_require__(/*! ./discontinuous-details-report.component.css */ "./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_16__["MasterService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_15__["ConsigneeService"]])
    ], DiscontinuousDetailsReportComponent);
    return DiscontinuousDetailsReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/party-less-report/party-less-report.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/report/party-report/party-less-report/party-less-report.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9wYXJ0eS1sZXNzLXJlcG9ydC9wYXJ0eS1sZXNzLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRDtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9wYXJ0eS1yZXBvcnQvcGFydHktbGVzcy1yZXBvcnQvcGFydHktbGVzcy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBwWDtcbn1cblxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xuXHR0b3A6IDI2cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/party-report/party-less-report/party-less-report.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/report/party-report/party-less-report/party-less-report.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n\t<style>\n\t\t.imb_patch {\n\t\t\ttext-align: center;\n\t\t\tbackground-color: orange;\n\t\t\tpadding: 2px;\n\t\t}\n\t</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Party Less Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\" [(ngModel)]=\"fromDatesModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"partyName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Party Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDropDownListner($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" (click)=\"validateSearchBtn()\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" (click)=\"clearBtn()\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<hr style=\"background: none; padding-top: 10px\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\"> -->\n\t\t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">Source Wise Memo\n\t\t\t\t\t\t\t\tDiscount</h6>\n\t\t\t\t\t\t\t<div [hidden]=\" detailTable\">\n\t\t\t\t\t\t\t\t<table datatable id=\"partyLessSourceWiseTableId\"\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionPartyLessSrcWise\" [dtTrigger]=\"dtTriggerPartyLessSrcWise\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Main Station</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Discount Amount</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let partyLessSrcWiseData of partyLessSrcWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessSrcWiseData.mainStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessSrcWiseData.lessAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable id=\"partyLessDetailsTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPartyLessRpt\" [dtTrigger]=\"dtTriggerPartyLessRpt\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Cash Memo</th>\n\t\t\t\t\t\t\t\t\t\t<th>Agent</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Freight</th>\n\t\t\t\t\t\t\t\t\t\t<th>GD</th>\n\t\t\t\t\t\t\t\t\t\t<th>RC</th>\n\t\t\t\t\t\t\t\t\t\t<th>Disc</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dem</th>\n\t\t\t\t\t\t\t\t\t\t<th>SC</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t\t\t\t<th>G. Total</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Type</th>\n\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let partyLessRptData of partyLessRptDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.consignee }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.lorryFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.hamaligd }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.receiptCharges }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.discount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.demurrage }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.serviceCharges }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.subTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.grandTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.memoType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ partyLessRptData.hamaliDD }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/party-less-report/party-less-report.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/report/party-report/party-less-report/party-less-report.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PartyLessReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyLessReportComponent", function() { return PartyLessReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var my = new Date();












var PartyLessReportComponent = /** @class */ (function () {
    function PartyLessReportComponent(partyLessRpt, memoLessRpt, router, masterReadService, memoReport, modalService) {
        var _this = this;
        this.partyLessRpt = partyLessRpt;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerPartyLessRpt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerPartyLessSrcWise = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_7__["PartyMasterDto"]();
        this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_7__["PartyMasterDto"]();
        this.consigneeNameTA = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        this.showSpinnerForAction = false;
        this.memoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.cashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.validateFromDate = null;
        this.validateToDate = null;
        this.validateConsigneeName = null;
        this.validateConsigneeId = null;
        this.fromDatesModel = null;
        this.toDatesModel = null;
        this.getConsigneeDetails = function () {
            _this.getConsigneeDetailsList();
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
            this.getConsigneeDetails();
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            //console.log(this.address);
        }
    }
    PartyLessReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PartyLessReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsPartyLessRpt = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "Party Less Report - " +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDates").val()).format('DD-MM-YYYY') + "";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'print',
                    exportOptions: {
                        //columns: [0, 1, 2, 4, 5, 6, 7, 10, 14]
                        columns: [0, 1, 2, 3, 5, 6, 7, 8, 11, 15]
                    },
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Party Less Report</u><br><br>" +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDates").val()).format('DD-MM-YYYY') + "" +
                            "</td>" +
                            "</tr></table><br>";
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel1</i>',
                    titleAttr: 'Excel1',
                    footer: true,
                    title: function () {
                        return "Party Less Report - " +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDates").val()).format('DD-MM-YYYY') + "";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'print',
                    exportOptions: {
                        //columns: [0, 1, 2, 4, 5, 6, 7, 10, 14]
                        columns: [0, 2, 3, 5, 6, 7, 8, 11, 15, 1]
                    },
                    text: '<i class="fas fa-print"> Print1</i>',
                    titleAttr: 'Print - 1',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Party Less Report</u><br><br>" +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDates").val()).format('DD-MM-YYYY') + "" +
                            "</td>" +
                            "</tr></table><br>";
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                }
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 310,
            "scrollCollapse": true,
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                // computing column Total of the complete result 
                var article = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var freightAmt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var gd = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var rc = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var discAmt = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var dem = api.column(12).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var sc = api.column(13).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalAmt = api.column(14).data().reduce(function (a, b) {
                    return intVal(b);
                }, 0);
                var subTotalAmt = api.column(15).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var ddAmt = api.column(17).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(5).footer()).html(article);
                $(api.column(6).footer()).html(actWgt);
                $(api.column(7).footer()).html(chgWgt);
                $(api.column(8).footer()).html(freightAmt);
                $(api.column(9).footer()).html(gd);
                $(api.column(10).footer()).html(rc);
                $(api.column(11).footer()).html(discAmt);
                $(api.column(12).footer()).html(dem);
                $(api.column(13).footer()).html(sc);
                $(api.column(14).footer()).html(totalAmt);
                $(api.column(15).footer()).html(subTotalAmt);
                $(api.column(17).footer()).html(ddAmt);
            },
        };
        this.dtOptionPartyLessSrcWise = {
            /* columns: [
                 {
                     title: 'Main Station',
                     data: 'mainStation'
                 },
                 {
                     title: 'Discount Amount',
                     data: 'discountAmount'
                 }
             ],*/
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            searching: false,
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 150,
            "scrollCollapse": true,
            "paging": false,
            "info": false,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                // computing column Total of the complete result 
                var discountAmt = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(discountAmt);
            },
        };
    };
    PartyLessReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    PartyLessReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerPartyLessRpt.unsubscribe();
        this.dtTriggerPartyLessSrcWise.unsubscribe();
        //this.onDestroyUnsubscribtionPartyLessRpt.unsubscribe();
        //this.onDestroyUnsubscribtionPartyLessSrcWise.unsubscribe();
    };
    PartyLessReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerPartyLessRpt.next();
        this.dtTriggerPartyLessSrcWise.next();
    };
    PartyLessReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    PartyLessReportComponent.prototype.consigneeDropDownListner = function (event) {
        this.modelConsigneeName = event.item;
        this.validateConsigneeName = this.modelConsigneeName.consigneeName;
        this.validateConsigneeId = this.modelConsigneeName.consigneeId;
        $("#consigneeName").val(this.validateConsigneeName);
    };
    PartyLessReportComponent.prototype.getConsigneeDetailsList = function () {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_7__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "specific";
    };
    PartyLessReportComponent.prototype.clearField = function () {
        this.fromDatesModel = null;
        this.toDatesModel = null;
        //$("#fromDates").val('');
        //$("#toDates").val('');
        $('input[type="text"],[type="number"]').val('');
        this.modelConsigneeName = null;
        this.validateConsigneeName = null;
        this.validateConsigneeId = null;
        this.partyLessRptDataList = [];
        this.partyLessSrcWiseDataList = [];
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
        this.dtTriggerPartyLessRpt.next();
        this.dtTriggerPartyLessSrcWise.next();
    };
    PartyLessReportComponent.prototype.clearBtn = function () {
        this.clearField();
    };
    PartyLessReportComponent.prototype.validateSearchBtn = function () {
        this.validateFromDate = $("#fromDates").val();
        this.validateToDate = $("#toDates").val();
        this.validateConsigneeName = $("#consigneeName").val();
        if ((this.validateFromDate == null) || (this.validateFromDate == undefined) ||
            (this.validateFromDate == "") || (this.validateToDate == null) ||
            (this.validateToDate == undefined) || (this.validateToDate == "") ||
            (this.validateConsigneeName == null) || (this.validateConsigneeName == undefined) ||
            (this.validateConsigneeName == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Field", "please enter the mandatory fields", "warning");
            return false;
        }
        else {
            this.getPartyLessDetailsReport();
        }
    };
    PartyLessReportComponent.prototype.getPartyLessReport = function () {
        this.memoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.validateFromDate = $("#fromDates").val();
        this.validateToDate = $("#toDates").val();
        this.validateConsigneeName = $("#consigneeName").val();
        if (this.validateFromDate != null && this.validateToDate != undefined &&
            this.validateToDate != null && this.validateToDate != undefined) {
            this.memoDto.fromdate = this.validateFromDate;
            this.memoDto.todate = this.validateToDate;
            this.memoDto.mode = "dateBetween";
        }
        this.memoDto.station = this.userDataDtoReturnSession.office;
        if (this.validateConsigneeName == null || this.validateConsigneeName == undefined ||
            this.validateConsigneeName == "") {
            this.memoDto.consigneeName = "ALL";
            this.memoDto.consigneeId = 0;
        }
        else {
            this.memoDto.consigneeName = this.validateConsigneeName;
            this.memoDto.consigneeId = this.validateConsigneeId;
        }
        this.memoDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    PartyLessReportComponent.prototype.getPartyLessDetailsReport = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getPartyLessReport();
        console.log(this.memoDto);
        this.memoReport.getPartyLessReport(this.memoDto).subscribe(function (response) {
            console.log(response);
            _this.partyLessRptDataList = [];
            $("#partyLessDetailsTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.partyLessRptDataList = response;
                _this.showSpinnerForAction = false;
                _this.getPartyLessForSourceWiseDetails();
            }
            else {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("No Records", "No Records found for this search", "info");
            }
            _this.dtTriggerPartyLessRpt.next();
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Party Less Details", "info");
            },
            function () { return console.log('done'); };
    };
    PartyLessReportComponent.prototype.getPartyLessForSourceWiseDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.memoReport.getMemoDiscountDetailsSourceWise(this.memoDto).subscribe(function (response) {
            console.log(response);
            _this.partyLessSrcWiseDataList = [];
            $("#partyLessSourceWiseTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.partyLessSrcWiseDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("No Records", "No Records found for this search", "info");
            }
            _this.dtTriggerPartyLessSrcWise.next();
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Party Less Source Wise Details", "info");
            },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PartyLessReportComponent.prototype, "dtElements", void 0);
    PartyLessReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-party-less-report',
            template: __webpack_require__(/*! ./party-less-report.component.html */ "./src/app/report/party-report/party-less-report/party-less-report.component.html"),
            styles: [__webpack_require__(/*! ./party-less-report.component.css */ "./src/app/report/party-report/party-less-report/party-less-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PartyLessReportComponent);
    return PartyLessReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/party-report.module.ts":
/*!************************************************************!*\
  !*** ./src/app/report/party-report/party-report.module.ts ***!
  \************************************************************/
/*! exports provided: PartyReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyReportModule", function() { return PartyReportModule; });
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
/* harmony import */ var src_app_report_party_report_party_report_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/party-report/party-report.routing */ "./src/app/report/party-report/party-report.routing.ts");
/* harmony import */ var src_app_report_party_report_consignor_report_consignor_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/party-report/consignor-report/consignor-report.component */ "./src/app/report/party-report/consignor-report/consignor-report.component.ts");
/* harmony import */ var src_app_report_party_report_consignee_report_consignee_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/party-report/consignee-report/consignee-report.component */ "./src/app/report/party-report/consignee-report/consignee-report.component.ts");
/* harmony import */ var src_app_report_party_report_business_start_report_business_start_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/party-report/business-start-report/business-start-report.component */ "./src/app/report/party-report/business-start-report/business-start-report.component.ts");
/* harmony import */ var src_app_report_party_report_business_stop_report_business_stop_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/party-report/business-stop-report/business-stop-report.component */ "./src/app/report/party-report/business-stop-report/business-stop-report.component.ts");
/* harmony import */ var src_app_report_party_report_party_less_report_party_less_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/report/party-report/party-less-report/party-less-report.component */ "./src/app/report/party-report/party-less-report/party-less-report.component.ts");
/* harmony import */ var src_app_report_party_report_party_wise_os_report_party_wise_os_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/report/party-report/party-wise-os-report/party-wise-os-report.component */ "./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.ts");
/* harmony import */ var src_app_report_party_report_party_wise_total_status_details_party_wise_total_status_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component */ "./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.ts");
/* harmony import */ var src_app_report_party_report_commodity_mismatch_report_commodity_mismatch_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component */ "./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.ts");
/* harmony import */ var src_app_report_party_report_consignee_admin_rate_report_consignee_admin_rate_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component */ "./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.ts");
/* harmony import */ var src_app_report_party_report_rate_history_report_rate_history_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/report/party-report/rate-history-report/rate-history-report.component */ "./src/app/report/party-report/rate-history-report/rate-history-report.component.ts");
/* harmony import */ var src_app_report_party_report_admin_business_rate_report_admin_business_rate_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component */ "./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.ts");
/* harmony import */ var src_app_report_party_report_consignee_rate_report_consignee_rate_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/report/party-report/consignee-rate-report/consignee-rate-report.component */ "./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.ts");
/* harmony import */ var src_app_report_party_report_discontinuous_details_report_discontinuous_details_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component */ "./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.ts");
/* harmony import */ var src_app_report_party_report_regular_consignee_report_regular_consignee_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/report/party-report/regular-consignee-report/regular-consignee-report.component */ "./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var src_app_report_lr_report_lr_report_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/report/lr-report/lr-report.module */ "./src/app/report/lr-report/lr-report.module.ts");
/* harmony import */ var src_app_report_party_report_transit_lrs_details_report_transit_lrs_details_report_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component */ "./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.ts");
/* harmony import */ var src_app_report_party_report_business_start_lrs_details_report_business_start_lrs_details_report_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component */ "./src/app/report/party-report/business-start-lrs-details-report/business-start-lrs-details-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends




















var PartyReportModule = /** @class */ (function () {
    function PartyReportModule() {
    }
    PartyReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_party_report_party_report_routing__WEBPACK_IMPORTED_MODULE_10__["PartyReportRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_25__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_26__["DragulaModule"], src_app_report_lr_report_lr_report_module__WEBPACK_IMPORTED_MODULE_27__["LrReportModule"]],
            declarations: [
                src_app_report_party_report_consignor_report_consignor_report_component__WEBPACK_IMPORTED_MODULE_11__["ConsignorReportComponent"],
                src_app_report_party_report_consignee_report_consignee_report_component__WEBPACK_IMPORTED_MODULE_12__["ConsigneeReportComponent"],
                src_app_report_party_report_business_start_report_business_start_report_component__WEBPACK_IMPORTED_MODULE_13__["BusinessStartReportComponent"],
                src_app_report_party_report_business_stop_report_business_stop_report_component__WEBPACK_IMPORTED_MODULE_14__["BusinessStopReportComponent"],
                src_app_report_party_report_party_less_report_party_less_report_component__WEBPACK_IMPORTED_MODULE_15__["PartyLessReportComponent"],
                src_app_report_party_report_party_wise_os_report_party_wise_os_report_component__WEBPACK_IMPORTED_MODULE_16__["PartyWiseOsReportComponent"],
                src_app_report_party_report_party_wise_total_status_details_party_wise_total_status_details_component__WEBPACK_IMPORTED_MODULE_17__["PartyWiseTotalStatusDetailsComponent"],
                src_app_report_party_report_commodity_mismatch_report_commodity_mismatch_report_component__WEBPACK_IMPORTED_MODULE_18__["CommodityMismatchReportComponent"],
                src_app_report_party_report_consignee_admin_rate_report_consignee_admin_rate_report_component__WEBPACK_IMPORTED_MODULE_19__["ConsigneeAdminRateReportComponent"],
                src_app_report_party_report_rate_history_report_rate_history_report_component__WEBPACK_IMPORTED_MODULE_20__["RateHistoryReportComponent"],
                src_app_report_party_report_admin_business_rate_report_admin_business_rate_report_component__WEBPACK_IMPORTED_MODULE_21__["AdminBusinessRateReportComponent"],
                src_app_report_party_report_consignee_rate_report_consignee_rate_report_component__WEBPACK_IMPORTED_MODULE_22__["ConsigneeRateReportComponent"],
                src_app_report_party_report_discontinuous_details_report_discontinuous_details_report_component__WEBPACK_IMPORTED_MODULE_23__["DiscontinuousDetailsReportComponent"],
                src_app_report_party_report_regular_consignee_report_regular_consignee_report_component__WEBPACK_IMPORTED_MODULE_24__["RegularConsigneeReportComponent"],
                src_app_report_party_report_transit_lrs_details_report_transit_lrs_details_report_component__WEBPACK_IMPORTED_MODULE_28__["TransitLrsDetailsReportComponent"],
                src_app_report_party_report_business_start_lrs_details_report_business_start_lrs_details_report_component__WEBPACK_IMPORTED_MODULE_29__["BusinessStartLRSDetailsReportComponent"]
            ]
        })
    ], PartyReportModule);
    return PartyReportModule;
}());



/***/ }),

/***/ "./src/app/report/party-report/party-report.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/report/party-report/party-report.routing.ts ***!
  \*************************************************************/
/*! exports provided: PartyReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyReportRoutes", function() { return PartyReportRoutes; });
/* harmony import */ var src_app_report_party_report_consignor_report_consignor_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/party-report/consignor-report/consignor-report.component */ "./src/app/report/party-report/consignor-report/consignor-report.component.ts");
/* harmony import */ var src_app_report_party_report_consignee_report_consignee_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/party-report/consignee-report/consignee-report.component */ "./src/app/report/party-report/consignee-report/consignee-report.component.ts");
/* harmony import */ var src_app_report_party_report_business_start_report_business_start_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/party-report/business-start-report/business-start-report.component */ "./src/app/report/party-report/business-start-report/business-start-report.component.ts");
/* harmony import */ var src_app_report_party_report_business_stop_report_business_stop_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/party-report/business-stop-report/business-stop-report.component */ "./src/app/report/party-report/business-stop-report/business-stop-report.component.ts");
/* harmony import */ var src_app_report_party_report_party_less_report_party_less_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/report/party-report/party-less-report/party-less-report.component */ "./src/app/report/party-report/party-less-report/party-less-report.component.ts");
/* harmony import */ var src_app_report_party_report_party_wise_os_report_party_wise_os_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/report/party-report/party-wise-os-report/party-wise-os-report.component */ "./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.ts");
/* harmony import */ var src_app_report_party_report_party_wise_total_status_details_party_wise_total_status_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component */ "./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.ts");
/* harmony import */ var src_app_report_party_report_commodity_mismatch_report_commodity_mismatch_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component */ "./src/app/report/party-report/commodity-mismatch-report/commodity-mismatch-report.component.ts");
/* harmony import */ var src_app_report_party_report_consignee_admin_rate_report_consignee_admin_rate_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component */ "./src/app/report/party-report/consignee-admin-rate-report/consignee-admin-rate-report.component.ts");
/* harmony import */ var src_app_report_party_report_rate_history_report_rate_history_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/report/party-report/rate-history-report/rate-history-report.component */ "./src/app/report/party-report/rate-history-report/rate-history-report.component.ts");
/* harmony import */ var src_app_report_party_report_admin_business_rate_report_admin_business_rate_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component */ "./src/app/report/party-report/admin-business-rate-report/admin-business-rate-report.component.ts");
/* harmony import */ var src_app_report_party_report_consignee_rate_report_consignee_rate_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/party-report/consignee-rate-report/consignee-rate-report.component */ "./src/app/report/party-report/consignee-rate-report/consignee-rate-report.component.ts");
/* harmony import */ var src_app_report_party_report_discontinuous_details_report_discontinuous_details_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component */ "./src/app/report/party-report/discontinuous-details-report/discontinuous-details-report.component.ts");
/* harmony import */ var src_app_report_party_report_regular_consignee_report_regular_consignee_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/party-report/regular-consignee-report/regular-consignee-report.component */ "./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.ts");
/* harmony import */ var src_app_report_party_report_transit_lrs_details_report_transit_lrs_details_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component */ "./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.ts");















var PartyReportRoutes = [
    {
        path: '',
        children: [
            {
                path: 'consignorReport',
                component: src_app_report_party_report_consignor_report_consignor_report_component__WEBPACK_IMPORTED_MODULE_0__["ConsignorReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consigneeReport',
                component: src_app_report_party_report_consignee_report_consignee_report_component__WEBPACK_IMPORTED_MODULE_1__["ConsigneeReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'businessStopReport',
                component: src_app_report_party_report_business_stop_report_business_stop_report_component__WEBPACK_IMPORTED_MODULE_3__["BusinessStopReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'businessStartReport',
                component: src_app_report_party_report_business_start_report_business_start_report_component__WEBPACK_IMPORTED_MODULE_2__["BusinessStartReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'partyLessReport',
                component: src_app_report_party_report_party_less_report_party_less_report_component__WEBPACK_IMPORTED_MODULE_4__["PartyLessReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'partyWiseOsReport',
                component: src_app_report_party_report_party_wise_os_report_party_wise_os_report_component__WEBPACK_IMPORTED_MODULE_5__["PartyWiseOsReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'partyWiseTotalStatusDetails',
                component: src_app_report_party_report_party_wise_total_status_details_party_wise_total_status_details_component__WEBPACK_IMPORTED_MODULE_6__["PartyWiseTotalStatusDetailsComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'commodityMismatchReport',
                component: src_app_report_party_report_commodity_mismatch_report_commodity_mismatch_report_component__WEBPACK_IMPORTED_MODULE_7__["CommodityMismatchReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consigneeAdminRateReport',
                component: src_app_report_party_report_consignee_admin_rate_report_consignee_admin_rate_report_component__WEBPACK_IMPORTED_MODULE_8__["ConsigneeAdminRateReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'rateHistoryReport',
                component: src_app_report_party_report_rate_history_report_rate_history_report_component__WEBPACK_IMPORTED_MODULE_9__["RateHistoryReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'adminBusinessRateReport',
                component: src_app_report_party_report_admin_business_rate_report_admin_business_rate_report_component__WEBPACK_IMPORTED_MODULE_10__["AdminBusinessRateReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consigneeRateReport',
                component: src_app_report_party_report_consignee_rate_report_consignee_rate_report_component__WEBPACK_IMPORTED_MODULE_11__["ConsigneeRateReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'discontinuousDetailsReport',
                component: src_app_report_party_report_discontinuous_details_report_discontinuous_details_report_component__WEBPACK_IMPORTED_MODULE_12__["DiscontinuousDetailsReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'regularConsigneeReport',
                component: src_app_report_party_report_regular_consignee_report_regular_consignee_report_component__WEBPACK_IMPORTED_MODULE_13__["RegularConsigneeReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'transitLrsDetailsReport',
                component: src_app_report_party_report_transit_lrs_details_report_transit_lrs_details_report_component__WEBPACK_IMPORTED_MODULE_14__["TransitLrsDetailsReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n::ng-deep ngb-typeahead-window {\n  top:26px;\n    left:25px;\n\tmax-height: 150px;\n    overflow-y: auto;\n    position: absolute;\n}\n\n.pointer {\n\tcolor: blue;\n\tcursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9wYXJ0eS13aXNlLW9zLXJlcG9ydC9wYXJ0eS13aXNlLW9zLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFHRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcGFydHktcmVwb3J0L3BhcnR5LXdpc2Utb3MtcmVwb3J0L3BhcnR5LXdpc2Utb3MtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdyB7XG4gIHRvcDoyNnB4O1xuICAgIGxlZnQ6MjVweDtcblx0bWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuLnBvaW50ZXIge1xuXHRjb2xvcjogYmx1ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\"  *ngIf=\"isLoggedIn\" >\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Party Wise OS Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summaryView\">Summary\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tView</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detailView\">Detail View</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"overallSummaryView\">Overall\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSummary View</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>As On </label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"asOnDate\" [(ngModel)]=\"asOnDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"asOnDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Area Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #areaName id=\"areaName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"areaName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Area\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelAreaName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"areaNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterAreaName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterAreaName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusAreaNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionMan id=\"collectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"collectionMan\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"collectionManSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCollectionManTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\"(click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!summaryTable\">Party\n\t\t\t\t\t\t\t\t\t\t\t\t\tWise Os Summary Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!detailTable\">Party\n\t\t\t\t\t\t\t\t\t\t\t\t\tWise Os Details Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!overallSummaryTable\">Over\n\t\t\t\t\t\t\t\t\t\t\t\t\tAll Summary View</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!summaryTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"summaryTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSummary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerSummary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Memo</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryData of summaryDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalMemos }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.grandTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!detailTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"detailsTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionDetail\" [dtTrigger]=\"dtTriggerDetail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>No Of Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cur Date - Memo Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let detailData of detailDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.consignee }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.amount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.article }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.memoDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.days }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.status }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!overallSummaryTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"overallSummaryTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsOverallSummary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerOverallSummary\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GC Not Rec(Memo)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GC Not Rec(Amt)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Transfer To Collection(Memo)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Transfer To Collection(Amt)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th  *ngIf=\"hideshowForKondiTransToCol\">Transfer To Collection-Madhavaram(Memo)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th  *ngIf=\"hideshowForKondiTransToCol\">Transfer To Collection-Madhavaram(Amt)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>SRD Stocks(Memo)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>SRD Stocks(Amt)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man Summary(Memo)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man Summary(Amt)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let overallSummaryDataL of overallSummaryDataList \">\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ overallSummaryDataL.billingMemos }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"gcnoteReceivedPopUpBtnLink(gcnoteReceivedPopUpTemplate,overallSummaryDataL)\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ overallSummaryDataL.billingMemos }}</a></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a (click)=\"getGcNotRec(overallSummaryDataL);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"pointer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<u>{{  overallSummaryDataL.billingMemos }}</u></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ overallSummaryDataL.billingTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ overallSummaryDataL.transToCollMemos}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ overallSummaryDataL.transToCollTotal}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td  *ngIf=\"hideshowForKondiTransToCol\">{{ overallSummaryDataL.transToCollFrmBinnyMemos}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td  *ngIf=\"hideshowForKondiTransToCol\">{{ overallSummaryDataL.transToCollFrmBinnyTotal}}</td>\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ overallSummaryDataL.srdStockMemos }}</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a (click)=\"getOsRpt(overallSummaryDataL);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"pointer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<u>{{  overallSummaryDataL.srdStockMemos }}</u></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ overallSummaryDataL.srdStockTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ overallSummaryDataL.collManStockMemos}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ overallSummaryDataL.collManStockTotal}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"hideshowForKondiTransToCol\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"hideshowForKondiTransToCol\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PartyWiseOsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyWiseOsReportComponent", function() { return PartyWiseOsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var my = new Date();

















var PartyWiseOsReportComponent = /** @class */ (function () {
    function PartyWiseOsReportComponent(memoLessRpt, router, memoReport, masterReadService, modalService, lrReportService, consigneeService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.lrReportService = lrReportService;
        this.consigneeService = consigneeService;
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.viewTypeSummary = true;
        this.viewTypeDetail = false;
        this.viewTypeOverallSummary = false;
        this.summaryTable = true;
        this.detailTable = false;
        this.overallSummaryTable = false;
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_12__["PartyMasterDto"]();
        //for ConsigneeName
        this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_12__["PartyMasterDto"]();
        this.consigneeNameTA = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_13__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_14__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        //
        //for collection Man
        this.collectionManAllOption = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.collectionManTA = [];
        this.focusCollectionManTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.collectionManSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_13__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_14__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCollectionManTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.collectionManTA
                : _this.collectionManTA.filter(function (v) { return v.collectioMan.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterCollectionMan = function (x) { return x.collectioMan; };
        //collection Man
        /*collectionManDataList: any;
        collectionManTA1: Array<any> = [];
        focusCMTA$ = new Subject<string>();
        cmSearchTA = ( text$: Observable<string> ) => {
            const debouncedText$ = text$.pipe( debounceTime( 200 ), distinctUntilChanged() );
            const inputFocus$ = this.focusCMTA$;
        
            return merge( debouncedText$, inputFocus$ ).pipe(
                map( term => ( term === '' ? this.collectionManTA
                    :this.collectionManTA.filter(v => v.collectionMan.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 200))
            );
        }
        */
        ////Area
        this.lrDtoBranchArea = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.lrDtoAreaAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.areaNameTA = [];
        this.focusAreaNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.areaNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_13__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_14__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusAreaNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.areaNameTA
                : _this.areaNameTA.filter(function (v) { return v.godownName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterAreaName = function (x) { return x.godownName; };
        this.userDtoCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDtoCollectionManAll = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.searchBySummaryCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchByDetailedCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchByOverAllSummaryCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.hideshowForKondiTransToCol = false;
        this.memoDtoForGCNotRecvPopUp = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.memoDtoForSRDCollectionManStockRpt = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.dtTriggerSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerDetail = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerOverallSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchByDetailedCashmemodtoPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.detailsFromPartyWiseTotalStatusRptPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.getConsigneeDetails = function () {
            _this.getConsigneeDetailsList();
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    $("#consigneeName").val('All');
                    console.log(_this.consigneeNameTA);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchBySummaryMethod = function () {
            _this.searchBySummaryMethodDetails();
            _this.showSpinnerForAction = true;
            _this.consigneeService.getPartyOSDetailsSummaryWise(_this.searchBySummaryCashmemodto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#summaryTableId").DataTable().destroy();
                _this.summaryDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.summaryDataList = response;
                    console.log(_this.summaryDataList);
                }
                _this.dtTriggerSummary.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Summary details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByDetailedMethod = function () {
            _this.searchByDetailedMethodDetails();
            _this.showSpinnerForAction = true;
            _this.consigneeService.getPartyOSDetailsWise(_this.searchByDetailedCashmemodto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#detailsTableId").DataTable().destroy();
                _this.detailDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.detailDataList = response;
                    console.log(_this.detailDataList);
                }
                _this.dtTriggerDetail.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Party Wise Detailed View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByOverAllSummaryMethod = function () {
            _this.searchByOverAllSummaryDetails();
            _this.showSpinnerForAction = true;
            _this.consigneeService.getPartyOSOverAllSummaryView(_this.searchByOverAllSummaryCashmemodto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#overallSummaryTableId").DataTable().destroy();
                _this.overallSummaryDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.overallSummaryDataList = response;
                    console.log(_this.overallSummaryDataList);
                }
                _this.dtTriggerOverallSummary.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Party Wise OverAll Summary View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByDetailedMethodPopup = function () {
            _this.searchByDetailedMethodDetailsPopUp();
            _this.showSpinnerForAction = true;
            _this.consigneeService.getPartyOSDetailsWise(_this.searchByDetailedCashmemodtoPopup).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#collectionMan").val('All');
                $("#areaName").val('All');
                _this.selectedConsigneeName = _this.detailsFromPartyWiseTotalStatusRptPopup.consigneeName;
                $("#consigneeName").val(_this.selectedConsigneeName);
                console.log(_this.selectedConsigneeName);
                $("#asOnDate").val(_this.searchByDetailedCashmemodtoPopup.fromdate);
                $("#detailsTableId").DataTable().destroy();
                _this.detailDataList = [];
                $("#viewType").val('detailView');
                setTimeout(function () {
                    _this.setConsignee();
                }, 5000);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.detailDataList = response;
                    console.log(_this.detailDataList);
                }
                _this.dtTriggerDetail.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Party Wise Detailed View", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.getConsigneeDetails();
            this.getCollectionManDetailsList();
            this.getBranchAreaDetailsList();
            if (this.userDataDtoReturnSession.office != null &&
                this.userDataDtoReturnSession.office == "Konditope") {
                this.hideshowForKondiTransToCol = true;
            }
            else {
                this.hideshowForKondiTransToCol = false;
            }
            this.dataForPopup = JSON.parse(localStorage.getItem('memoDtoForPartyWiseOsReportPopup'));
            localStorage.clear();
            if (this.dataForPopup != null) {
                this.detailsFromPartyWiseTotalStatusRptPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
                this.detailsFromPartyWiseTotalStatusRptPopup = this.dataForPopup;
                if (this.detailsFromPartyWiseTotalStatusRptPopup != null) {
                    this.searchByDetailedMethodPopup();
                }
            }
            this.dataForPopup = '';
        }
    }
    PartyWiseOsReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PartyWiseOsReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                //console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
                if (dtInstance.table().node().id == "summaryTableId") {
                    console.log("a");
                    _this.summaryDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerSummary.next();
                }
                else if (dtInstance.table().node().id == "detailsTableId") {
                    console.log("b");
                    _this.detailDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerDetail.next();
                }
                else if (dtInstance.table().node().id == "overallSummaryTableId") {
                    console.log("c");
                    _this.overallSummaryDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerOverallSummary.next();
                }
            });
        });
    };
    PartyWiseOsReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    PartyWiseOsReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var showOverAllSummary = false;
        if (this.hideshowForKondiTransToCol == true) {
            showOverAllSummary = true;
        }
        else {
            showOverAllSummary = false;
        }
        this.dtOptionsSummary = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '13px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        var returnVal = null;
                        returnVal = "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 30%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>As On&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#asOnDate").val()).format('DD-MM-YYYY') + "</strong>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='2'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:25px;'><u>PartyWise OS Report</u></strong><br>" +
                            "</td>" +
                            "<td  align='left' style='width:30%;'>" +
                            "</td>" +
                            "</tr>" +
                            "</table><br>";
                        return returnVal;
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "PartyWise OS Report - " +
                            "As On : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#asOnDate").val()).format('DD-MM-YYYY');
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 300,
            "scrollCollapse": true,
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                var totalMemos = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var grandTotal = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalArticles = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total :' + data.length);
                $(api.column(1).footer()).html(totalMemos);
                $(api.column(2).footer()).html(grandTotal);
                $(api.column(3).footer()).html(totalArticles);
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html();
            }
        },
            this.dtOptionDetail = {
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'print',
                        text: '<i class="fas fa-print"> Print</i>',
                        titleAttr: 'Print',
                        customize: function (win) {
                            $(win.document.body).css('font-size', '10pt');
                            $(win.document.body).find('th, td').
                                css('font-family', 'Arial, Helvetica, sans-serif')
                                .css('font-size', '13px').css('text-align', 'center');
                        },
                        footer: true,
                        messageTop: function () {
                            var returnValDetails = null;
                            returnValDetails = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 20%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>As On&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#asOnDate").val()).format('DD-MM-YYYY') + "</strong>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:60%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:23px;'><u>PartyWise OutStanding Details Report</u></strong><br>" +
                                "</td>" +
                                "<td  align='left' style='width:20%;'>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                            return returnValDetails;
                        },
                        title: function () {
                            return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td align='left' style='width: 20%;'>" +
                                "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                                "</td>" +
                                "<td align='left' style='width: 30%;'>" +
                                "</td>" +
                                "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                                companyAddressDetls +
                                "</td>" +
                                "</tr></table>";
                        }
                    },
                    {
                        extend: 'excel',
                        text: '<i class="fas fa-file-excel"> Excel</i>',
                        titleAttr: 'Excel',
                        footer: true,
                        title: function () {
                            return "PartyWise OutStanding Details Report - " +
                                "As On : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#asOnDate").val()).format('DD-MM-YYYY');
                        },
                        exportOptions: {
                            columns: ':visible'
                        }
                    }
                ],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 300,
                "scrollCollapse": true,
                "paging": true,
                "info": true,
                "footerCallback": function (row, data, start, end, display) {
                    var api = this.api(), data;
                    // converting to interger to find total
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            +i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    var grandTotal = api.column(3).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var totalArticles = api.column(5).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html(grandTotal);
                    $(api.column(4).footer()).html();
                    $(api.column(5).footer()).html(totalArticles);
                    $(api.column(6).footer()).html();
                    $(api.column(7).footer()).html();
                    $(api.column(8).footer()).html();
                    $(api.column(9).footer()).html();
                    $(api.column(10).footer()).html();
                }
            },
            this.dtOptionsOverallSummary = {
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'print',
                        text: '<i class="fas fa-print"> Print</i>',
                        titleAttr: 'Print',
                        customize: function (win) {
                            $(win.document.body).css('font-size', '10pt');
                            $(win.document.body).find('th, td').
                                css('font-family', 'Arial, Helvetica, sans-serif')
                                .css('font-size', '13px').css('text-align', 'center');
                        },
                        footer: true,
                        messageTop: function () {
                            var returnValOverAll = null;
                            returnValOverAll = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 20%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>As On&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#asOnDate").val()).format('DD-MM-YYYY') + "</strong>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:60%;word-wrap: break-word;text-align:left !important;'align='left'>" +
                                "<strong style='font-size:23px;'><u>PartyWise OutStanding Over All Summary Report</u></strong><br>" +
                                "</td>" +
                                "<td  align='left' style='width:20%;'>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                            return returnValOverAll;
                        },
                        title: function () {
                            return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td align='left' style='width: 20%;'>" +
                                "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                                "</td>" +
                                "<td align='left' style='width: 30%;'>" +
                                "</td>" +
                                "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                                companyAddressDetls +
                                "</td>" +
                                "</tr></table>";
                        }
                    },
                    {
                        extend: 'excel',
                        text: '<i class="fas fa-file-excel"> Excel</i>',
                        titleAttr: 'Excel',
                        footer: true,
                        title: function () {
                            return "PartyWise OutStanding OverAll Summary  Report - " +
                                "As On : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#asOnDate").val()).format('DD-MM-YYYY');
                        },
                        exportOptions: {
                            columns: ':visible'
                        }
                    }
                ],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 300,
                "scrollCollapse": true,
                "paging": true,
                "info": true,
                "footerCallback": function (row, data, start, end, display) {
                    var api = this.api(), data;
                    // converting to interger to find total
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            +i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    if (showOverAllSummary == true) {
                        var billingMemos = api.column(0).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var billingTotal = api.column(1).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var transToCollMemos = api.column(2).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var transToCollTotal = api.column(3).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var transToCollFrmBinnyMemos = api.column(4).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var transToCollFrmBinnyTotal = api.column(5).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var srdStockMemos = api.column(6).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var srdStockTotal = api.column(7).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var collManStockMemos = api.column(8).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var collManStockTotal = api.column(9).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        $(api.column(0).footer()).html('Total : ' + billingMemos);
                        $(api.column(1).footer()).html(billingTotal);
                        $(api.column(2).footer()).html(transToCollMemos);
                        $(api.column(3).footer()).html(transToCollTotal);
                        $(api.column(4).footer()).html(transToCollFrmBinnyMemos);
                        $(api.column(5).footer()).html(transToCollFrmBinnyTotal);
                        $(api.column(6).footer()).html(srdStockMemos);
                        $(api.column(7).footer()).html(srdStockTotal);
                        $(api.column(8).footer()).html(collManStockMemos);
                        $(api.column(9).footer()).html(collManStockTotal);
                    }
                    else {
                        var billingMemos = api.column(0).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var billingTotal = api.column(1).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var transToCollMemos = api.column(2).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var transToCollTotal = api.column(3).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var srdStockMemos = api.column(4).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var srdStockTotal = api.column(5).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var collManStockMemos = api.column(6).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        var collManStockTotal = api.column(7).data().reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                        $(api.column(0).footer()).html('Total : ' + billingMemos);
                        $(api.column(1).footer()).html(billingTotal);
                        $(api.column(2).footer()).html(transToCollMemos);
                        $(api.column(3).footer()).html(transToCollTotal);
                        $(api.column(4).footer()).html(srdStockMemos);
                        $(api.column(5).footer()).html(srdStockTotal);
                        $(api.column(6).footer()).html(collManStockMemos);
                        $(api.column(7).footer()).html(collManStockTotal);
                    }
                }
            };
    };
    PartyWiseOsReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSummary.unsubscribe();
        this.dtTriggerDetail.unsubscribe();
        this.dtTriggerOverallSummary.unsubscribe();
    };
    PartyWiseOsReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerSummary.next();
        this.dtTriggerDetail.next();
        this.dtTriggerOverallSummary.next();
    };
    //datatablr hide / show        
    PartyWiseOsReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'summaryView') {
            this.viewTypeSummary = true;
            this.viewTypeDetail = false;
            this.viewTypeOverallSummary = false;
            this.summaryTable = true;
            this.detailTable = false;
            this.overallSummaryTable = false;
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#detailsTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#overallSummaryTableId").DataTable().destroy();
            this.overallSummaryDataList = [];
            this.dtTriggerSummary.next();
            this.dtTriggerDetail.next();
            this.dtTriggerOverallSummary.next();
        }
        else if (viewType === 'detailView') {
            this.viewTypeSummary = false;
            this.viewTypeDetail = true;
            this.viewTypeOverallSummary = false;
            this.summaryTable = false;
            this.detailTable = true;
            this.overallSummaryTable = false;
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#detailsTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#overallSummaryTableId").DataTable().destroy();
            this.overallSummaryDataList = [];
            this.dtTriggerSummary.next();
            this.dtTriggerDetail.next();
            this.dtTriggerOverallSummary.next();
        }
        else if (viewType === 'overallSummaryView') {
            this.viewTypeSummary = false;
            this.viewTypeDetail = false;
            this.viewTypeOverallSummary = true;
            this.summaryTable = false;
            this.detailTable = false;
            this.overallSummaryTable = true;
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#detailsTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#overallSummaryTableId").DataTable().destroy();
            this.overallSummaryDataList = [];
            this.dtTriggerSummary.next();
            this.dtTriggerDetail.next();
            this.dtTriggerOverallSummary.next();
        }
        else {
            this.viewTypeSummary = false;
            this.viewTypeDetail = false;
            this.viewTypeOverallSummary = false;
            this.summaryTable = true;
            this.detailTable = false;
            this.overallSummaryTable = false;
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#detailsTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#overallSummaryTableId").DataTable().destroy();
            this.overallSummaryDataList = [];
            this.dtTriggerSummary.next();
            this.dtTriggerDetail.next();
            this.dtTriggerOverallSummary.next();
        }
    };
    PartyWiseOsReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    PartyWiseOsReportComponent.prototype.getConsigneeDetailsList = function () {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_12__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "specific";
        console.log(this.partyMasterDtoForconsignee);
    };
    PartyWiseOsReportComponent.prototype.getDetailsForCollectionMasterRead = function () {
        this.userDtoCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDtoCollectionMan.branchId = this.userDataDtoReturnSession.mainStation;
        this.userDtoCollectionMan.companyId = this.userDataDtoReturnSession.companyId;
        this.userDtoCollectionMan.status = "D";
    };
    PartyWiseOsReportComponent.prototype.getCollectionManDetailsList = function () {
        var _this = this;
        this.collectionManDataList = [];
        this.collectionManTA = [];
        this.getDetailsForCollectionMasterRead();
        this.masterReadService.getCollectionManMasterDetails(this.userDtoCollectionMan).subscribe(function (response) {
            if (response) {
                console.log(response);
                _this.collectionManDataList = response;
                console.log(_this.collectionManDataList);
                _this.collectionManTA = [];
                _this.userDtoCollectionManAll.collectioMan = "All";
                _this.collectionManTA.push(_this.userDtoCollectionManAll);
                for (var i = 0; i < _this.collectionManDataList.length; i++) {
                    _this.collectionManTA.push(_this.collectionManDataList[i]);
                }
                $("#collectionMan").val('All');
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Server Error",
            text: "Problem occur while getting Collection Man Details",
            icon: "error",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    PartyWiseOsReportComponent.prototype.getMethodForBranchArea = function () {
        this.lrDtoBranchArea = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.lrDtoBranchArea.branch = this.userDataDtoReturnSession.office;
        this.lrDtoBranchArea.mode = this.userDataDtoReturnSession.office;
        this.lrDtoBranchArea.companyId = this.userDataDtoReturnSession.companyId;
    };
    PartyWiseOsReportComponent.prototype.getBranchAreaDetailsList = function () {
        var _this = this;
        this.branchAreaDataList = [];
        this.areaNameTA = [];
        this.getMethodForBranchArea();
        this.masterReadService.getBranchAreaDetailsService(this.lrDtoBranchArea).subscribe(function (response) {
            if (response) {
                console.log(response);
                _this.branchAreaDataList = response;
                console.log(_this.branchAreaDataList);
                _this.lrDtoAreaAll.godownName = "All";
                _this.areaNameTA.push(_this.lrDtoAreaAll);
                for (var i = 0; i < _this.branchAreaDataList.length; i++) {
                    _this.areaNameTA.push(_this.branchAreaDataList[i]);
                }
                $("#areaName").val('All');
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Server Error",
            text: "Problem occur while getting Area Details",
            icon: "error",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    PartyWiseOsReportComponent.prototype.rowSelectedConsignee = function (e) {
        this.modelConsigneeNameId = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
    };
    PartyWiseOsReportComponent.prototype.searchMethod = function () {
        this.selectedAsOnDate = $("#asOnDate").val();
        this.selectedViewType = $("#viewType").val();
        if (this.selectedAsOnDate == null || this.selectedAsOnDate == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Mandatory Field",
                text: "Please select Date",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        else {
            if (this.selectedViewType == 'summaryView') {
                this.searchBySummaryMethod();
            }
            else if (this.selectedViewType == 'detailView') {
                this.searchByDetailedMethod();
            }
            else if (this.selectedViewType == 'overallSummaryView') {
                this.searchByOverAllSummaryMethod();
            }
        }
    };
    PartyWiseOsReportComponent.prototype.searchBySummaryMethodDetails = function () {
        this.selectedCollectionMan = $("#collectionMan").val();
        this.selectedAreaName = $("#areaName").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        console.log(this.selectedConsigneeName);
        this.selectedAsOnDate = $("#asOnDate").val();
        this.searchBySummaryCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchBySummaryCashmemodto.consigneeName = this.selectedConsigneeName;
            this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
            this.searchBySummaryCashmemodto.consigneeId = this.selectedConsigneeId;
        }
        else {
            this.searchBySummaryCashmemodto.consigneeId = 0;
            this.searchBySummaryCashmemodto.consigneeName = 'ALL';
        }
        this.searchBySummaryCashmemodto.fromdate = this.selectedAsOnDate;
        this.searchBySummaryCashmemodto.collectionMan = this.selectedCollectionMan;
        this.searchBySummaryCashmemodto.area = this.selectedAreaName;
        this.searchBySummaryCashmemodto.destination = this.userDataDtoReturnSession.mainStation;
        this.searchBySummaryCashmemodto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.searchBySummaryCashmemodto);
    };
    PartyWiseOsReportComponent.prototype.searchByDetailedMethodDetails = function () {
        this.selectedCollectionMan = $("#collectionMan").val();
        this.selectedAreaName = $("#areaName").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        console.log(this.selectedConsigneeName);
        this.selectedAsOnDate = $("#asOnDate").val();
        this.searchByDetailedCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchByDetailedCashmemodto.consigneeName = this.selectedConsigneeName;
            this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
            this.searchByDetailedCashmemodto.consigneeId = this.selectedConsigneeId;
        }
        else {
            this.searchByDetailedCashmemodto.consigneeId = 0;
            this.searchByDetailedCashmemodto.consigneeName = 'ALL';
        }
        this.searchByDetailedCashmemodto.fromdate = this.selectedAsOnDate;
        this.searchByDetailedCashmemodto.collectionMan = this.selectedCollectionMan;
        this.searchByDetailedCashmemodto.area = this.selectedAreaName;
        this.searchByDetailedCashmemodto.destination = this.userDataDtoReturnSession.mainStation;
        this.searchByDetailedCashmemodto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.searchByDetailedCashmemodto);
    };
    PartyWiseOsReportComponent.prototype.searchByOverAllSummaryDetails = function () {
        this.selectedCollectionMan = $("#collectionMan").val();
        this.selectedAreaName = $("#areaName").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        console.log(this.selectedConsigneeName);
        this.selectedAsOnDate = $("#asOnDate").val();
        this.searchByOverAllSummaryCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchByOverAllSummaryCashmemodto.consigneeName = this.selectedConsigneeName;
            this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
            this.searchByOverAllSummaryCashmemodto.consigneeId = this.selectedConsigneeId;
        }
        else {
            this.searchByOverAllSummaryCashmemodto.consigneeId = 0;
            this.searchByOverAllSummaryCashmemodto.consigneeName = 'ALL';
        }
        this.searchByOverAllSummaryCashmemodto.fromdate = this.selectedAsOnDate;
        this.searchByOverAllSummaryCashmemodto.collectionMan = this.selectedCollectionMan;
        this.searchByOverAllSummaryCashmemodto.area = this.selectedAreaName;
        this.searchByOverAllSummaryCashmemodto.destination = this.userDataDtoReturnSession.mainStation;
        this.searchByOverAllSummaryCashmemodto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.searchByOverAllSummaryCashmemodto);
    };
    PartyWiseOsReportComponent.prototype.clearMethod = function () {
        $("#consigneeName").val('All');
        $("#areaName").val('All');
        $("#collectionMan").val('All');
        this.selectedCollectionMan = '';
        this.selectedAreaName = '';
        this.selectedConsigneeName = '';
        this.selectedAsOnDate = '';
        $("#asOnDate").val('');
        this.searchBySummaryCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchByOverAllSummaryCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchByDetailedCashmemodto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.viewTypeSummary = true;
        this.summaryTable = true;
        this.detailTable = false;
        this.overallSummaryTable = false;
        $("#summaryTableId").DataTable().destroy();
        this.summaryDataList = [];
        $("#detailsTableId").DataTable().destroy();
        this.detailDataList = [];
        $("#overallSummaryTableId").DataTable().destroy();
        this.overallSummaryDataList = [];
        this.dtTriggerSummary.next();
        this.dtTriggerDetail.next();
        this.dtTriggerOverallSummary.next();
        this.asOnDateModel = '';
        this.selectedViewType = '';
        $("#viewType").val('summaryView');
        this.showSpinnerForAction = false;
        this.selectedConsigneeId = '';
        this.modelConsigneeNameId = '';
        this.searchByDetailedCashmemodtoPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.detailsFromPartyWiseTotalStatusRptPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.dataForPopup = '';
        localStorage.clear();
    };
    PartyWiseOsReportComponent.prototype.getGcNotRec = function (overallSummaryDataL) {
        this.selectedAsOnDate = $("#asOnDate").val();
        this.memoDtoForGCNotRecvPopUp = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.memoDtoForGCNotRecvPopUp.mode = 'All';
        this.memoDtoForGCNotRecvPopUp.tillDate = this.selectedAsOnDate;
        localStorage.clear();
        localStorage.setItem('gcNotRecReportPopUp', JSON.stringify(this.memoDtoForGCNotRecvPopUp));
        //  window.location('/report/lr-report/gcNotReceivedReport');
        this.router.navigate(['/report/lr-report/gcNotReceivedReport']);
    };
    PartyWiseOsReportComponent.prototype.getOsRpt = function (overallSummaryDataL) {
        this.selectedAsOnDate = $("#asOnDate").val();
        this.memoDtoForSRDCollectionManStockRpt = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.memoDtoForSRDCollectionManStockRpt.mode = 'date';
        this.memoDtoForSRDCollectionManStockRpt.tillDateMode = "tillDate";
        this.memoDtoForSRDCollectionManStockRpt.fromdate = this.selectedAsOnDate;
        localStorage.clear();
        localStorage.setItem('srdCollectionManStockReport', JSON.stringify(this.memoDtoForSRDCollectionManStockRpt));
        this.router.navigate(['/report/cashmemo-report/srdCollectionStockReport']);
        // window.location('/report/cashmemo-report/srdCollectionStockReport');
    };
    PartyWiseOsReportComponent.prototype.searchByDetailedMethodDetailsPopUp = function () {
        this.viewTypeSummary = false;
        this.viewTypeDetail = true;
        this.viewTypeOverallSummary = false;
        this.summaryTable = false;
        this.detailTable = true;
        this.overallSummaryTable = false;
        $("#summaryTableId").DataTable().destroy();
        this.summaryDataList = [];
        $("#detailsTableId").DataTable().destroy();
        this.detailDataList = [];
        $("#overallSummaryTableId").DataTable().destroy();
        this.overallSummaryDataList = [];
        this.dtTriggerSummary.next();
        this.dtTriggerDetail.next();
        this.dtTriggerOverallSummary.next();
        this.selectedConsigneeName = this.detailsFromPartyWiseTotalStatusRptPopup.consigneeName;
        this.selectedAsOnDate = this.detailsFromPartyWiseTotalStatusRptPopup.fromdate;
        this.selectedConsigneeId = this.detailsFromPartyWiseTotalStatusRptPopup.consigneeId;
        this.selectedCollectionMan = 'All';
        this.selectedAreaName = 'All';
        this.searchByDetailedCashmemodtoPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchByDetailedCashmemodtoPopup.consigneeName = this.selectedConsigneeName;
        this.searchByDetailedCashmemodtoPopup.consigneeId = this.selectedConsigneeId;
        this.searchByDetailedCashmemodtoPopup.fromdate = this.selectedAsOnDate;
        this.searchByDetailedCashmemodtoPopup.collectionMan = this.selectedCollectionMan;
        this.searchByDetailedCashmemodtoPopup.area = this.selectedAreaName;
        this.searchByDetailedCashmemodtoPopup.destination = this.detailsFromPartyWiseTotalStatusRptPopup.destination;
        this.searchByDetailedCashmemodtoPopup.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.searchByDetailedCashmemodtoPopup);
    };
    PartyWiseOsReportComponent.prototype.setConsignee = function () {
        $("#consigneeName").val(this.detailsFromPartyWiseTotalStatusRptPopup.consigneeName);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PartyWiseOsReportComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gcnoteReceivedPopUpTemplate'),
        __metadata("design:type", Object)
    ], PartyWiseOsReportComponent.prototype, "gcnoteReceivedPopUpTemplate", void 0);
    PartyWiseOsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-party-wise-os-report',
            template: __webpack_require__(/*! ./party-wise-os-report.component.html */ "./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.html"),
            styles: [__webpack_require__(/*! ./party-wise-os-report.component.css */ "./src/app/report/party-report/party-wise-os-report/party-wise-os-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_15__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_16__["LrReportService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_18__["ConsigneeService"]])
    ], PartyWiseOsReportComponent);
    return PartyWiseOsReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n\r\n.pointer {\r\n\tcolor: blue;\r\n\tcursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9wYXJ0eS13aXNlLXRvdGFsLXN0YXR1cy1kZXRhaWxzL3BhcnR5LXdpc2UtdG90YWwtc3RhdHVzLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcGFydHktcmVwb3J0L3BhcnR5LXdpc2UtdG90YWwtc3RhdHVzLWRldGFpbHMvcGFydHktd2lzZS10b3RhbC1zdGF0dXMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcclxuICB0b3A6MjZweDtcclxuICAgIGxlZnQ6MjVweDtcclxuXHRtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuXHRjb2xvcjogYmx1ZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Party Wise Total Status\n\t\t\t\t\t\tDetails Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestination\" class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: static;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDestListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: static;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: static;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod();\">Get Details</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-12\" >\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">{{consigneeNameInTable}} -\n\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"partyWiseTotalStatusDetailsId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPartyWiseTotalStatusDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPartyWiseTotalStatusDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GST Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Pincode</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Contact Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Contact Person</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Mobile</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>OS Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Left Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>OS LR Stocks</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Transit Lrs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Business</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let partyWiseTotalStatusDetailsData of partyWiseTotalStatusDetailsDataList  \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpartyWiseTotalStatusDetailsData.gstNoConsignee }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyWiseTotalStatusDetailsData.address }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyWiseTotalStatusDetailsData.pincode }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyWiseTotalStatusDetailsData.officeNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpartyWiseTotalStatusDetailsData.contactPerson }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyWiseTotalStatusDetailsData.mobileNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a class=\"pointer\"  style=\"color: blue;\"(click)=\"getRateHistory();\"><u><strong>Rate</strong></u></a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getPartyWiseOsAmtRpt(partyWiseTotalStatusDetailsData);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"pointer\" style=\"color: blue;\"><u><strong>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpartyWiseTotalStatusDetailsData.grandTotal==null ? 0\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t: partyWiseTotalStatusDetailsData.grandTotal }}</strong></u></a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyWiseTotalStatusDetailsData.leftamount\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getGodownStockRpt(partyWiseTotalStatusDetailsData);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"pointer\"  style=\"color: blue;\"><u><strong>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpartyWiseTotalStatusDetailsData.totalLrs ==null ?0\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t:partyWiseTotalStatusDetailsData.totalLrs}}</strong></u></a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getTransitLrsRpt(partyWiseTotalStatusDetailsData);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"pointer\"  style=\"color: blue;\"><u><strong>{{ partyWiseTotalStatusDetailsData.transitLrs==null ? 0 : partyWiseTotalStatusDetailsData.transitLrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</strong></u></a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><strong>Business</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PartyWiseTotalStatusDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyWiseTotalStatusDetailsComponent", function() { return PartyWiseTotalStatusDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/RateMaster-dto */ "./src/app/dto/RateMaster-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var my = new Date();


















var PartyWiseTotalStatusDetailsComponent = /** @class */ (function () {
    function PartyWiseTotalStatusDetailsComponent(router, masterReadService, datePipe, lrReportService, masterService, consigneeService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.consigneeService = consigneeService;
        this.loadingIndicator = true;
        this.dtTriggerPartyWiseTotalStatusDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        //for ConsigneeName
        this.consigneeNameTA = [];
        this.consigneeNameTATemp = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        ///
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.destView = false;
        this.viewDestination = false;
        this.searchConsigneeDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.ShowDestForPartyWiseTotalStatusRpt = 'Show Dest In PartyWiseTotalStatusRpt';
        this.memoDtoForPartyWiseOsPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
        this.lrDtoForGodownStockOsPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.setDestination = [];
        this.invoiceDtoForTransitLRsPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_18__["InvoiceDto"]();
        this.partyWiseRateMasterDtoPopUp = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_13__["RateMasterDto"]();
        this.getConsigneeDetails = function (destShow) {
            _this.getConsigneeDetailsList(destShow);
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    _this.consigneeNameTATemp = _this.consigneeNameTA;
                    console.log(_this.consigneeNameTA);
                    if (destShow) {
                        $("#consigneeName").focus();
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchConsigneeMethod = function () {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeOverallStatus(_this.searchConsigneeDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#partyWiseTotalStatusDetailsId").DataTable().destroy();
                _this.partyWiseTotalStatusDetailsDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.partyWiseTotalStatusDetailsDataList = response;
                    console.log(_this.partyWiseTotalStatusDetailsDataList);
                }
                _this.dtTriggerPartyWiseTotalStatusDetails.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.office = this.userDataDtoReturnSession.office == null ? '' : this.userDataDtoReturnSession.office;
            this.getConsigneeDetails(false);
            ///Rights for show Show Source List
            //            if ( this.ShowDestForPartyWiseTotalStatusRpt == "Show Dest In PartyWiseTotalStatusRpt" ) {
            //                this.viewDestination = true;
            //this.getDestinationDetails();         
            //} 
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "PartyWiseTotalStatusRpt destView") {
                        this.destView = true;
                    }
                }
            }
            //need to comment this bel
            //this.destView =true;
            if (this.destView == true) {
                this.viewDestination = true;
                this.getDestinationDetails();
            }
            else {
                this.viewDestination = false;
            }
        }
    }
    PartyWiseTotalStatusDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PartyWiseTotalStatusDetailsComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    PartyWiseTotalStatusDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    PartyWiseTotalStatusDetailsComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var mainStation = this.userDataDtoReturnSession.mainStation;
        var destVisible = false;
        if (this.destView == true) {
            destVisible = true;
        }
        else {
            destVisible = false;
        }
        this.dtOptionsPartyWiseTotalStatusDetails = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '13px').css('text-align', 'center');
                    },
                    footer: true,
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10]
                    },
                    messageTop: function () {
                        var returnVal = null;
                        if (destVisible == true) {
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_15__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_15__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:19px;'><u>Party Wise Total Status Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Party Name</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#consigneeName").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Destination</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else {
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_15__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_15__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:19px;'><u>Party Wise Total Status Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Party Name</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#consigneeName").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Destination</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                "<span style='font-size:15px;'>" + mainStation + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        return returnVal;
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        var returnSummaryExcel = null;
                        if (destVisible == true) {
                            returnSummaryExcel = "Party Wise Total Status Report" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_15__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_15__($("#toDate").val()).format('DD-MM-YYYY') + " Party Name : " + $("#consigneeName").val() + " Destination : " + $("#destination").val();
                        }
                        else {
                            returnSummaryExcel = "Party Wise Total Status Report" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_15__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_15__($("#toDate").val()).format('DD-MM-YYYY') + " Party Name : " + $("#consigneeName").val() + " Destination : " + mainStation;
                        }
                        return returnSummaryExcel;
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": false,
            "scrollY": 300,
            "scrollCollapse": true,
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html();
                $(api.column(6).footer()).html();
                $(api.column(7).footer()).html();
                $(api.column(8).footer()).html();
                $(api.column(9).footer()).html();
                $(api.column(10).footer()).html();
                $(api.column(11).footer()).html();
            }
        };
    };
    PartyWiseTotalStatusDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerPartyWiseTotalStatusDetails.unsubscribe();
    };
    PartyWiseTotalStatusDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerPartyWiseTotalStatusDetails.next();
    };
    PartyWiseTotalStatusDetailsComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    PartyWiseTotalStatusDetailsComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                //this.stationOptions = response;
                if (response.length > 0) {
                    _this.destinationOptions = response;
                    _this.destinationTA = [];
                    for (var i = 0; i < _this.destinationOptions.length; i++) {
                        _this.destinationTA.push(_this.destinationOptions[i]);
                    }
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    PartyWiseTotalStatusDetailsComponent.prototype.getConsigneeDetailsList = function (destShow) {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.selectedDestination = this.modelDestinationFotGet;
        if (destShow) {
            this.partyMasterDtoForconsignee.office = this.selectedDestination.destination;
            console.log(this.selectedDestination);
        }
        else {
            this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        }
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "specific";
        console.log(this.partyMasterDtoForconsignee);
    };
    PartyWiseTotalStatusDetailsComponent.prototype.consigneeDestListener = function (e) {
        this.modelDestinationFotGet = e.item;
        this.getConsigneeDetails(true);
    };
    PartyWiseTotalStatusDetailsComponent.prototype.rowSelectedConsignee = function (e) {
        this.modelConsigneeNameId = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
    };
    PartyWiseTotalStatusDetailsComponent.prototype.searchMethod = function () {
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDestination = $("#destination").val();
        console.log(this.selectedConsigneeName);
        this.searchConsigneeDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchConsigneeDto.consigneeName = this.selectedConsigneeName;
            this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
            this.searchConsigneeDto.consigneeId = this.selectedConsigneeId;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Warning",
                text: "Please Select Consignee !",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        if (this.destView == true) {
            if (this.selectedDestination == null || this.selectedDestination == '') {
                this.searchConsigneeDto.mainStation = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.searchConsigneeDto.mainStation = this.selectedDestination;
            }
        }
        else {
            this.searchConsigneeDto.mainStation = this.userDataDtoReturnSession.mainStation;
        }
        //this.searchConsigneeDto.mainStation=this.userDataDtoReturnSession.mainStation;
        this.searchConsigneeDto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.searchConsigneeDto);
        this.searchConsigneeMethod();
        this.consigneeNameInTable = this.searchConsigneeDto.consigneeName;
    };
    PartyWiseTotalStatusDetailsComponent.prototype.getPartyWiseOsAmtRpt = function (partyWiseTotalStatusDetailsData) {
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDestination = $("#destination").val();
        console.log(this.selectedConsigneeName);
        this.memoDtoForPartyWiseOsPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
        this.memoDtoForPartyWiseOsPopup.fromdate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        this.memoDtoForPartyWiseOsPopup.consigneeName = this.selectedConsigneeName;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
        this.memoDtoForPartyWiseOsPopup.consigneeId = this.selectedConsigneeId;
        if (this.destView == true) {
            if (this.selectedDestination == null || this.selectedDestination == '') {
                this.memoDtoForPartyWiseOsPopup.destination = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.memoDtoForPartyWiseOsPopup.destination = this.selectedDestination;
            }
            console.log(this.selectedDestination);
        }
        else {
            this.memoDtoForPartyWiseOsPopup.destination = this.userDataDtoReturnSession.mainStation;
        }
        console.log(this.memoDtoForPartyWiseOsPopup);
        localStorage.clear();
        localStorage.setItem('memoDtoForPartyWiseOsReportPopup', JSON.stringify(this.memoDtoForPartyWiseOsPopup));
        this.router.navigate(['/report/party-report/partyWiseOsReport']);
    };
    PartyWiseTotalStatusDetailsComponent.prototype.getGodownStockRpt = function (partyWiseTotalStatusDetailsData) {
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDestination = $("#destination").val();
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
        console.log(this.selectedConsigneeName);
        this.lrDtoForGodownStockOsPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoForGodownStockOsPopup.consigneeName = this.selectedConsigneeName;
        this.lrDtoForGodownStockOsPopup.consigneeId = this.selectedConsigneeId;
        if (this.destView == true) {
            if (this.selectedDestination == null || this.selectedDestination == '') {
                this.setDestination = [];
                this.setDestination.push(this.userDataDtoReturnSession.mainStation);
                this.lrDtoForGodownStockOsPopup.list = this.setDestination;
                this.lrDtoForGodownStockOsPopup.destination = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.setDestination = [];
                this.setDestination.push(this.selectedDestination);
                this.lrDtoForGodownStockOsPopup.list = this.setDestination;
                this.lrDtoForGodownStockOsPopup.destination = this.selectedDestination;
            }
        }
        else {
            this.setDestination = [];
            this.setDestination.push(this.userDataDtoReturnSession.mainStation);
            this.lrDtoForGodownStockOsPopup.list = this.setDestination;
            this.lrDtoForGodownStockOsPopup.destination = this.userDataDtoReturnSession.mainStation;
        }
        console.log(this.lrDtoForGodownStockOsPopup);
        localStorage.clear();
        localStorage.setItem('godownStockOsReportPopup', JSON.stringify(this.lrDtoForGodownStockOsPopup));
        this.router.navigate(['/report/stocks-report/godownStocksReport']);
    };
    PartyWiseTotalStatusDetailsComponent.prototype.getTransitLrsRpt = function (partyWiseTotalStatusDetailsData) {
        this.selectedConsigneeName = $("#consigneeName").val();
        //this.selectedDestination= $("#destination").val();
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
        console.log(this.selectedConsigneeName);
        this.invoiceDtoForTransitLRsPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_18__["InvoiceDto"]();
        this.invoiceDtoForTransitLRsPopup.consigneeName = this.selectedConsigneeName;
        this.invoiceDtoForTransitLRsPopup.consigneeId = this.selectedConsigneeId;
        /*if(this.destView ==true){
         if(this.selectedDestination ==null || this.selectedDestination==''){
            this.invoiceDtoForTransitLRsPopup.destination=this.userDataDtoReturnSession.mainStation;
         }else{
          this.invoiceDtoForTransitLRsPopup.destination=this.selectedDestination;
         }
        }else{
         this.invoiceDtoForTransitLRsPopup.destination=this.userDataDtoReturnSession.mainStation;
        }*/
        console.log(this.invoiceDtoForTransitLRsPopup);
        localStorage.clear();
        localStorage.setItem('transitLrsReportPopup', JSON.stringify(this.invoiceDtoForTransitLRsPopup));
        this.router.navigate(['/report/party-report/transitLrsDetailsReport']);
    };
    PartyWiseTotalStatusDetailsComponent.prototype.getRateHistory = function () {
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDestination = $("#destination").val();
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
        console.log(this.selectedConsigneeName);
        this.partyWiseRateMasterDtoPopUp = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_13__["RateMasterDto"]();
        this.partyWiseRateMasterDtoPopUp.consigneeName = this.selectedConsigneeName;
        this.partyWiseRateMasterDtoPopUp.consigneeId = this.selectedConsigneeId;
        if (this.destView == true) {
            if (this.selectedDestination == null || this.selectedDestination == '') {
                this.partyWiseRateMasterDtoPopUp.destination = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.partyWiseRateMasterDtoPopUp.destination = this.selectedDestination;
            }
        }
        else {
            this.partyWiseRateMasterDtoPopUp.destination = this.userDataDtoReturnSession.mainStation;
        }
        this.partyWiseRateMasterDtoPopUp.fromDateStg = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        this.partyWiseRateMasterDtoPopUp.toDateStg = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        console.log(this.partyWiseRateMasterDtoPopUp);
        localStorage.clear();
        localStorage.setItem('rateHistroyReportPopup', JSON.stringify(this.partyWiseRateMasterDtoPopUp));
        this.router.navigate(['/report/party-report/rateHistoryReport']);
    };
    PartyWiseTotalStatusDetailsComponent.prototype.clearMethod = function () {
        this.selectedDestination = '';
        this.selectedConsigneeName = '';
        this.showSpinnerForAction = false;
        this.selectedConsigneeId = 0;
        this.modelDestinationFotGet = '';
        this.modelConsigneeNameId = '';
        if (this.destView == true) {
            this.viewDestination = true;
            $("#destination").val('');
            $("#consigneeName").val('');
            this.modelConsigneeName = '';
            this.consigneeNameTA = [];
        }
        else {
            this.consigneeNameTA = this.consigneeNameTATemp;
            $("#consigneeName").val('');
            this.viewDestination = false;
        }
        this.partyWiseRateMasterDtoPopUp = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_13__["RateMasterDto"]();
        this.invoiceDtoForTransitLRsPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_18__["InvoiceDto"]();
        this.lrDtoForGodownStockOsPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.memoDtoForPartyWiseOsPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
        $("#partyWiseTotalStatusDetailsId").DataTable().destroy();
        this.partyWiseTotalStatusDetailsDataList = [];
        this.dtTriggerPartyWiseTotalStatusDetails.next();
        this.searchConsigneeDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PartyWiseTotalStatusDetailsComponent.prototype, "dtElements", void 0);
    PartyWiseTotalStatusDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-party-wise-total-status-details',
            template: __webpack_require__(/*! ./party-wise-total-status-details.component.html */ "./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.html"),
            styles: [__webpack_require__(/*! ./party-wise-total-status-details.component.css */ "./src/app/report/party-report/party-wise-total-status-details/party-wise-total-status-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_17__["MasterService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_16__["ConsigneeService"]])
    ], PartyWiseTotalStatusDetailsComponent);
    return PartyWiseTotalStatusDetailsComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/rate-history-report/rate-history-report.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/report/party-report/rate-history-report/rate-history-report.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9yYXRlLWhpc3RvcnktcmVwb3J0L3JhdGUtaGlzdG9yeS1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9wYXJ0eS1yZXBvcnQvcmF0ZS1oaXN0b3J5LXJlcG9ydC9yYXRlLWhpc3RvcnktcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3cge1xyXG4gIHRvcDoyNnB4O1xyXG4gICAgbGVmdDoyNXB4O1xyXG5cdG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/party-report/rate-history-report/rate-history-report.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/report/party-report/rate-history-report/rate-history-report.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\"  *ngIf=\"isLoggedIn\" >\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Rate History Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"partyWise\">Party Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"commodityWise\">Commodity Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" [(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"toDateModel\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDestListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewParty\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewCommodity\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #commodity id=\"commodity\" name=\"commodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelCommodityMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchCommodityMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterCommodityMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterCommodityMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCommodityMainTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"source\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!partyWiseTable\">Party\n\t\t\t\t\t\t\t\t\t\t\t\t\tHistory Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!commodityWiseTable\">Commodity\n\t\t\t\t\t\t\t\t\t\t\t\t\tHistory Report</h6>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!partyWiseTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"partyWiseId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRateHistoryReportPartyWise\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRateHistoryReportPartyWise\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Des.Ham</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>R.C</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.C</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.Ham</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>G.C</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>P Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Fixed By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Effect From</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Effect To</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.HAMALI</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AOC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Group By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"display:none;\">Fixed On</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let rateHistoryReportPartyWiseData of rateHistoryReportPartyWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.column2 }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportPartyWiseData.hamaliDestination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportPartyWiseData.receiptCharges }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportPartyWiseData.serviceCharges }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.hamaliSource\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.gcCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.perUnit== null ? \"NA\": rateHistoryReportPartyWiseData.perUnit== \"\" ? \"NA\":rateHistoryReportPartyWiseData.perUnit}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.commodityName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.fixedBy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportPartyWiseData.effectiveFromDateStg}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportPartyWiseData.effectiveToDateSrg== null ? \"NA\": rateHistoryReportPartyWiseData.effectiveToDateSrg== \"\" ? \"NA\":rateHistoryReportPartyWiseData.effectiveToDateSrg}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.sourceCode }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.lcChg == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.hamaliChg == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.bcChg == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.aoc == true ?'Yes': 'No' }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.riskCharge == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.dd == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.others == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportPartyWiseData.groupBy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"display:none;\">{{ rateHistoryReportPartyWiseData.column3 }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"display:none;\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!commodityWiseTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"commodityWiseId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRateHistoryReportCommodityWise\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRateHistoryReportCommodityWise\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Des.Ham</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>R.C</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.C</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.Ham</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>G.C</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>P Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Fixed By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Effect From</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Effect To</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.HAMALI</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AOC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Group By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"display:none;\">Fixed On</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let rateHistoryReportCommodityWiseData of rateHistoryReportCommodityWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.column2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportCommodityWiseData.hamaliDestination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportCommodityWiseData.receiptCharges }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportCommodityWiseData.serviceCharges }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportCommodityWiseData.hamaliSource }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.gcCharge\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.perUnit== null ? \"NA\": rateHistoryReportCommodityWiseData.perUnit== \"\" ? \"NA\":rateHistoryReportCommodityWiseData.perUnit}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.fixedBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportCommodityWiseData.effectiveFromDateStg}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportCommodityWiseData.effectiveToDateSrg== null ? \"NA\": rateHistoryReportCommodityWiseData.effectiveToDateSrg== \"\" ? \"NA\":rateHistoryReportCommodityWiseData.effectiveToDateSrg}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trateHistoryReportCommodityWiseData.sourceCode }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.lcChg == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.hamaliChg == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.bcChg == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.aoc == true ?'Yes': 'No' }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.riskCharge == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.dd == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.others == true ?'Yes': 'No'  }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateHistoryReportCommodityWiseData.groupBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"display:none;\">{{ rateHistoryReportCommodityWiseData.column3 }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"display:none;\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/rate-history-report/rate-history-report.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/report/party-report/rate-history-report/rate-history-report.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RateHistoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateHistoryReportComponent", function() { return RateHistoryReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dto/RateMaster-dto */ "./src/app/dto/RateMaster-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var my = new Date();
















var RateHistoryReportComponent = /** @class */ (function () {
    function RateHistoryReportComponent(router, masterReadService, datePipe, lrReportService, masterService, consigneeService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.consigneeService = consigneeService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewParty = true;
        this.viewCommodity = false;
        this.dtTriggerRateHistoryReportPartyWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerRateHistoryReportCommodityWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        //for ConsigneeName
        this.consigneeNameTA = [];
        this.consigneeNameTATemp = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        ///
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.destView = false;
        this.viewDestination = false;
        this.searchConsigneeDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.ShowDestForConsigneeRateHistory = 'Show Dest In RateHistoryRpt';
        this.lrDtoSource = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.sourceTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.sourceTA
                : _this.sourceTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.subStations; };
        this.lrDtoSourceAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.partyWiseTable = true;
        this.commodityWiseTable = false;
        ///For Commodity
        this.rateMasterDtoCommodity = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.modelCommodityMainTA = [];
        this.modelCommodityMainTATemp = [];
        this.focusCommodityMainTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchCommodityMain = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCommodityMainTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.modelCommodityMainTA
                : _this.modelCommodityMainTA.filter(function (v) { return v.commodityName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterCommodityMain = function (x) { return x.commodityName; };
        this.SearchByPartyWiseRateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.SearchByCommodityWiseRateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.searchPartyWiseTotalStatusDtoPopup = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.SearchByPartyWiseRateMasterDtoPopUp = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.getConsigneeDetails = function (destShow) {
            _this.getConsigneeDetailsList(destShow);
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    _this.consigneeNameTATemp = _this.consigneeNameTA;
                    console.log(_this.consigneeNameTA);
                    if (destShow) {
                        $("#consigneeName").focus();
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        this.getCommodityMasterDetailsList = function (destShow) {
            //        console.log( this.lrDto.companyId );
            _this.getCommodityListRead(destShow);
            _this.showSpinnerForAction = true;
            _this.masterReadService.getCommodityDetails(_this.rateMasterDtoCommodity).subscribe(function (response) {
                if (response) {
                    _this.showSpinnerForAction = false;
                    if (response.length == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                            title: "Warning",
                            text: "No commodity details records found!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.rateMasterDtoCommodityOptions = [];
                        _this.modelCommodityMainTA = [];
                    }
                    else {
                        _this.rateMasterDtoCommodityOptions = response;
                        _this.modelCommodityMainTA = [];
                        for (var i = 0; i < _this.rateMasterDtoCommodityOptions.length; i++) {
                            _this.modelCommodityMainTA.push(_this.rateMasterDtoCommodityOptions[i]);
                        }
                        _this.modelCommodityMainTATemp = _this.modelCommodityMainTA;
                        if (destShow) {
                            $("#commodity").focus();
                        }
                        console.log(_this.modelCommodityMainTA);
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Comodity Details", "info");
            },
                function () { return console.log('done'); };
        };
        this.searchByPartyWiseDetailsMethod = function () {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeRateHistDtlsRptPartyWise(_this.SearchByPartyWiseRateMasterDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#partyWiseId").DataTable().destroy();
                _this.rateHistoryReportPartyWiseDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.rateHistoryReportPartyWiseDataList = response;
                    console.log(_this.rateHistoryReportPartyWiseDataList);
                }
                _this.dtTriggerRateHistoryReportPartyWise.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Party Wise View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByCommodityWiseDetailsMethod = function () {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeRateHistDtlsRptCommodityWise(_this.SearchByCommodityWiseRateMasterDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#commodityWiseId").DataTable().destroy();
                _this.rateHistoryReportCommodityWiseDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.rateHistoryReportCommodityWiseDataList = response;
                    console.log(_this.rateHistoryReportCommodityWiseDataList);
                }
                _this.dtTriggerRateHistoryReportCommodityWise.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Commodity Wise  View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByPartyWiseDetailsMethodPopup = function () {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeRateHistDtlsRptPartyWise(_this.SearchByPartyWiseRateMasterDtoPopUp).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#partyWiseId").DataTable().destroy();
                _this.rateHistoryReportPartyWiseDataList = [];
                _this.selectedFromDate = _this.searchPartyWiseTotalStatusDtoPopup.fromDateStg;
                $("#fromDate").val(_this.selectedFromDate);
                _this.selectedToDate = _this.searchPartyWiseTotalStatusDtoPopup.toDateStg;
                $("#toDate").val(_this.selectedToDate);
                _this.selectedDestination = _this.searchPartyWiseTotalStatusDtoPopup.destination;
                $("#destination").val(_this.selectedDestination);
                _this.selectedConsigneeName = _this.searchPartyWiseTotalStatusDtoPopup.consigneeName;
                $("#consigneeName").val(_this.selectedConsigneeName);
                $("#source").val('All');
                _this.selectedConsigneeId = _this.searchPartyWiseTotalStatusDtoPopup.consigneeId;
                _this.viewParty = true;
                _this.viewCommodity = false;
                _this.partyWiseTable = true;
                _this.commodityWiseTable = false;
                if (_this.destView == true) {
                    _this.viewDestination = true;
                    _this.selectedDestination = _this.searchPartyWiseTotalStatusDtoPopup.destination;
                    $("#destination").val(_this.selectedDestination);
                }
                else {
                    _this.viewDestination = false;
                }
                setTimeout(function () {
                    _this.setConsignee();
                }, 5000);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.rateHistoryReportPartyWiseDataList = response;
                    console.log(_this.rateHistoryReportPartyWiseDataList);
                }
                _this.dtTriggerRateHistoryReportPartyWise.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Party Wise View", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.office = this.userDataDtoReturnSession.office == null ? '' : this.userDataDtoReturnSession.office;
            this.getCommodityMasterDetailsList(false);
            this.getSourceDetails();
            ///Rights for show Show Dest List
            //            if ( this.ShowDestForConsigneeRateHistory == "Show Dest In RateHistoryRpt" ) {
            //                this.viewDestination = true;
            //this.getDestinationDetails();         
            //} 
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Dest ConsignRateHistortRpt") {
                        this.destView = true;
                    }
                }
            }
            //this.destView =true;
            if (this.destView == true) {
                this.viewDestination = true;
                this.getDestinationDetails();
            }
            else {
                this.viewDestination = false;
            }
            this.dataForPopup = JSON.parse(localStorage.getItem('rateHistroyReportPopup'));
            localStorage.clear();
            if (this.dataForPopup != null) {
                this.searchPartyWiseTotalStatusDtoPopup = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
                this.searchPartyWiseTotalStatusDtoPopup = this.dataForPopup;
                if (this.searchPartyWiseTotalStatusDtoPopup != null) {
                    this.searchByPartyWiseMethodDetailsPopup();
                }
            }
            else {
                this.getConsigneeDetails(false);
            }
            this.dataForPopup = '';
        }
    }
    RateHistoryReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    RateHistoryReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    RateHistoryReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                //console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
                if (dtInstance.table().node().id == "partyWiseId") {
                    console.log("a");
                    _this.rateHistoryReportPartyWiseDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerRateHistoryReportPartyWise.next();
                }
                else if (dtInstance.table().node().id == "commodityWiseId") {
                    console.log("b");
                    _this.rateHistoryReportCommodityWiseDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerRateHistoryReportCommodityWise.next();
                }
            });
        });
    };
    RateHistoryReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var mainStation = this.userDataDtoReturnSession.mainStation;
        var destVisible = false;
        if (this.destView == true) {
            destVisible = true;
        }
        else {
            destVisible = false;
        }
        this.dtOptionsRateHistoryReportPartyWise = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '13px').css('text-align', 'center');
                    },
                    footer: true,
                    exportOptions: {
                        columns: [8, 12, 2, 0, 1, 5, 6, 3, 4, 7, 9, 21, 10, 11]
                    },
                    messageTop: function () {
                        var returnVal = null;
                        if (destVisible == true) {
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>Party History Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Party Name</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#consigneeName").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Destination</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else {
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>Party History Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Party Name</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#consigneeName").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Destination</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                "<span style='font-size:15px;'>" + mainStation + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        return returnVal;
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        var returnSummaryExcel = null;
                        if (destVisible == true) {
                            returnSummaryExcel = "Party History Report" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + " Party Name : " + $("#consigneeName").val() + " Destination : " + $("#destination").val();
                        }
                        else {
                            returnSummaryExcel = "Party History Report" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + " Party Name : " + $("#consigneeName").val() + " Destination : " + mainStation;
                        }
                        return returnSummaryExcel;
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 300,
            "scrollCollapse": true,
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html();
                $(api.column(6).footer()).html();
                $(api.column(7).footer()).html();
                $(api.column(8).footer()).html();
                $(api.column(9).footer()).html();
                $(api.column(10).footer()).html();
                $(api.column(11).footer()).html();
                $(api.column(12).footer()).html();
                $(api.column(13).footer()).html();
                $(api.column(14).footer()).html();
                $(api.column(15).footer()).html();
                $(api.column(16).footer()).html();
                $(api.column(17).footer()).html();
                $(api.column(18).footer()).html();
                $(api.column(19).footer()).html();
                $(api.column(20).footer()).html();
                $(api.column(21).footer()).html();
            }
        },
            this.dtOptionsRateHistoryReportCommodityWise = {
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'print',
                        text: '<i class="fas fa-print"> Print</i>',
                        titleAttr: 'Print',
                        customize: function (win) {
                            $(win.document.body).css('font-size', '10pt');
                            $(win.document.body).find('th, td').
                                css('font-family', 'Arial, Helvetica, sans-serif')
                                .css('font-size', '13px').css('text-align', 'center');
                        },
                        footer: true,
                        exportOptions: {
                            columns: [11, 2, 0, 1, 5, 6, 3, 4, 7, 8, 20, 9, 10]
                        },
                        messageTop: function () {
                            var returnValCom = null;
                            if (destVisible == true) {
                                returnValCom = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:35%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:18px;'><u>Party History Report - Commodity Wise</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:35%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Commodity</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#commodity").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Destination</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            else {
                                returnValCom = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:35%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:18px;'><u>Party History Report - Commodity Wise</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:35%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Commodity</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#commodity").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Destination</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'>" + mainStation + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            return returnValCom;
                        },
                        title: function () {
                            return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td align='left' style='width: 20%;'>" +
                                "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                                "</td>" +
                                "<td align='left' style='width: 30%;'>" +
                                "</td>" +
                                "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                                companyAddressDetls +
                                "</td>" +
                                "</tr></table>";
                        }
                    },
                    {
                        extend: 'excel',
                        text: '<i class="fas fa-file-excel"> Excel</i>',
                        titleAttr: 'Excel',
                        footer: true,
                        title: function () {
                            var returnSummaryExcel = null;
                            if (destVisible == true) {
                                returnSummaryExcel = "Party History Report - Commodity Wise" +
                                    "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + " Commodity : " + $("#commodity").val() + " Destination : " + $("#destination").val();
                            }
                            else {
                                returnSummaryExcel = "Party History Report - Commodity Wise" +
                                    "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + " Commodity : " + $("#commodity").val() + " Destination : " + mainStation;
                            }
                            return returnSummaryExcel;
                        },
                        exportOptions: {
                            columns: ':visible'
                        }
                    }
                ],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 300,
                "scrollCollapse": true,
                "paging": true,
                "info": true,
                "footerCallback": function (row, data, start, end, display) {
                    var api = this.api(), data;
                    // converting to interger to find total
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            +i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html();
                    $(api.column(4).footer()).html();
                    $(api.column(5).footer()).html();
                    $(api.column(6).footer()).html();
                    $(api.column(7).footer()).html();
                    $(api.column(8).footer()).html();
                    $(api.column(9).footer()).html();
                    $(api.column(10).footer()).html();
                    $(api.column(11).footer()).html();
                    $(api.column(12).footer()).html();
                    $(api.column(13).footer()).html();
                    $(api.column(14).footer()).html();
                    $(api.column(15).footer()).html();
                    $(api.column(16).footer()).html();
                    $(api.column(17).footer()).html();
                    $(api.column(18).footer()).html();
                    $(api.column(19).footer()).html();
                    $(api.column(20).footer()).html();
                }
            };
    };
    RateHistoryReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRateHistoryReportPartyWise.unsubscribe();
        this.dtTriggerRateHistoryReportCommodityWise.unsubscribe();
    };
    RateHistoryReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerRateHistoryReportPartyWise.next();
        this.dtTriggerRateHistoryReportCommodityWise.next();
    };
    RateHistoryReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'partyWise') {
            this.viewParty = true;
            this.viewCommodity = false;
            this.partyWiseTable = true;
            this.commodityWiseTable = false;
            if (this.destView == true) {
                this.viewDestination = true;
                $("#destination").val('');
                this.modelConsigneeName = '';
                this.modelCommodityMain = '';
                this.consigneeNameTA = [];
                this.modelCommodityMainTA = [];
            }
            else {
                this.modelConsigneeName = '';
                this.modelCommodityMain = '';
                this.modelCommodityMainTA = this.modelCommodityMainTATemp;
                this.consigneeNameTA = this.consigneeNameTATemp;
                this.viewDestination = false;
            }
            $("#consigneeName").val('');
            $("#commodity").val('');
            this.callMethodToClearTable();
        }
        else if (searchBy === 'commodityWise') {
            this.viewParty = false;
            this.viewCommodity = true;
            this.partyWiseTable = false;
            this.commodityWiseTable = true;
            if (this.destView == true) {
                this.viewDestination = true;
                $("#destination").val('');
                this.modelConsigneeName = '';
                this.modelCommodityMain = '';
                this.consigneeNameTA = [];
                this.modelCommodityMainTA = [];
            }
            else {
                this.modelConsigneeName = '';
                this.modelCommodityMain = '';
                this.modelCommodityMainTA = this.modelCommodityMainTATemp;
                this.consigneeNameTA = this.consigneeNameTATemp;
                this.viewDestination = false;
            }
            $("#consigneeName").val('');
            $("#commodity").val('');
            this.callMethodToClearTable();
        }
        else {
            this.viewParty = false;
            this.viewCommodity = false;
            this.partyWiseTable = false;
            this.commodityWiseTable = false;
            if (this.destView == true) {
                this.viewDestination = true;
                $("#destination").val('');
                $("#consigneeName").val('');
                $("#commodity").val('');
                this.modelConsigneeName = '';
                this.modelCommodityMain = '';
                this.consigneeNameTA = [];
                this.modelCommodityMainTA = [];
            }
            else {
                this.modelConsigneeName = '';
                this.modelCommodityMain = '';
                this.modelCommodityMainTA = this.modelCommodityMainTATemp;
                this.consigneeNameTA = this.consigneeNameTATemp;
                $("#commodity").val('');
                $("#consigneeName").val('');
                this.viewDestination = false;
            }
            this.callMethodToClearTable();
        }
    };
    RateHistoryReportComponent.prototype.callMethodToClearTable = function () {
        $("#partyWiseId").DataTable().destroy();
        this.rateHistoryReportPartyWiseDataList = [];
        $("#commodityWiseId").DataTable().destroy();
        this.rateHistoryReportCommodityWiseDataList = [];
        this.dtTriggerRateHistoryReportPartyWise.next();
        this.dtTriggerRateHistoryReportCommodityWise.next();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    RateHistoryReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    RateHistoryReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    RateHistoryReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                //this.stationOptions = response;
                if (response.length > 0) {
                    _this.destinationOptions = response;
                    _this.destinationTA = [];
                    for (var i = 0; i < _this.destinationOptions.length; i++) {
                        _this.destinationTA.push(_this.destinationOptions[i]);
                    }
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    RateHistoryReportComponent.prototype.getConsigneeDetailsList = function (destShow) {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.selectedDestination = this.modelDestinationFotGet;
        if (destShow) {
            this.partyMasterDtoForconsignee.office = this.selectedDestination.destination;
            console.log(this.selectedDestination);
        }
        else {
            this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        }
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "specific";
        console.log(this.partyMasterDtoForconsignee);
    };
    RateHistoryReportComponent.prototype.consigneeDestListener = function (e) {
        this.modelDestinationFotGet = e.item;
        this.selectedSearchType = $("#searchBy").val();
        if (this.selectedSearchType == 'partyWise') {
            this.getConsigneeDetails(true);
        }
        else {
            this.getCommodityMasterDetailsList(true);
        }
    };
    RateHistoryReportComponent.prototype.rowSelectedConsignee = function (e) {
        this.modelConsigneeNameId = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
    };
    RateHistoryReportComponent.prototype.getSourceDetailedList = function () {
        this.lrDtoSource.mode = 'Booking';
        this.lrDtoSource.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lrDtoSource);
    };
    RateHistoryReportComponent.prototype.getSourceDetails = function () {
        var _this = this;
        this.getSourceDetailedList();
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoSource).subscribe(function (response) {
            if (response) {
                if (response.length > 0) {
                    _this.lrDtoSourceOptions = response;
                    console.log(_this.lrDtoSourceOptions);
                    _this.sourceTA = [];
                    _this.lrDtoSourceAllOption.subStations = "All";
                    _this.sourceTA.push(_this.lrDtoSourceAllOption);
                    for (var i = 0; i < _this.lrDtoSourceOptions.length; i++) {
                        _this.sourceTA.push(_this.lrDtoSourceOptions[i]);
                    }
                    $("#source").val('All');
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Agent Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    RateHistoryReportComponent.prototype.getCommodityListRead = function (destShow) {
        this.selectedDestination = this.modelDestinationFotGet;
        this.rateMasterDtoCommodity = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.rateMasterDtoCommodity.companyId = this.userDataDtoReturnSession.companyId;
        if (destShow) {
            this.rateMasterDtoCommodity.destination = this.selectedDestination.destination;
            //this.rateMasterDtoCommodity.destination = null;
            console.log(this.selectedDestination);
        }
        else {
            this.rateMasterDtoCommodity.destination = this.userDataDtoReturnSession.mainStation;
        }
        this.rateMasterDtoCommodity.mode = "mainConsigneeMaster";
        this.rateMasterDtoCommodity.status = "Working";
        console.log(this.rateMasterDtoCommodity);
    };
    RateHistoryReportComponent.prototype.searchMethod = function () {
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedSearchType = $("#searchBy").val();
        if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedToDate == null || this.selectedToDate == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Mandatory Field",
                text: "Please select Date",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        else {
            if (this.selectedSearchType == 'partyWise') {
                this.searchByPartyWiseMethod();
            }
            else if (this.selectedSearchType == 'commodityWise') {
                this.searchByCommodityWiseMethod();
            }
        }
    };
    RateHistoryReportComponent.prototype.searchByPartyWiseMethod = function () {
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestination = $("#destination").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedConsigneeId = $("#consigneeName").val();
        this.selectedSource = $("#source").val();
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Mandatory Field",
                text: "Please Select Party",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        if (this.destView == true) {
            if (this.selectedDestination == null && this.selectedDestination == '' && this.selectedDestination == 'All') {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Mandatory Field",
                    text: "Please Select Destination",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
        }
        this.SearchByPartyWiseRateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.SearchByPartyWiseRateMasterDto.fromDateStg = this.selectedFromDate;
        this.SearchByPartyWiseRateMasterDto.toDateStg = this.selectedToDate;
        this.SearchByPartyWiseRateMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.SearchByPartyWiseRateMasterDto.consigneeId = this.selectedConsigneeId;
        this.SearchByPartyWiseRateMasterDto.consigneeName = this.selectedConsigneeName;
        this.SearchByPartyWiseRateMasterDto.source = this.selectedSource;
        if (this.destView == true) {
            if (this.selectedDestination != null && this.selectedDestination != '' && this.selectedDestination != 'All') {
                this.SearchByPartyWiseRateMasterDto.destination = this.selectedDestination;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Mandatory Field",
                    text: "Please Select Destination",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
        }
        else {
            this.SearchByPartyWiseRateMasterDto.destination = this.userDataDtoReturnSession.mainStation;
        }
        this.searchByPartyWiseDetailsMethod();
        console.log(this.SearchByPartyWiseRateMasterDto);
    };
    RateHistoryReportComponent.prototype.searchByCommodityWiseMethod = function () {
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestination = $("#destination").val();
        this.selectedCommodityName = $("#commodity").val();
        this.selectedSource = $("#source").val();
        if (this.selectedCommodityName == null && this.selectedCommodityName == '' && this.selectedCommodityName == 'All') {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Mandatory Field",
                text: "Please Select Commodity",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        if (this.destView == true) {
            if (this.selectedDestination == null && this.selectedDestination == '' && this.selectedDestination == 'All') {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Mandatory Field",
                    text: "Please Select Destination",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
        }
        this.SearchByCommodityWiseRateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.SearchByCommodityWiseRateMasterDto.fromDateStg = this.selectedFromDate;
        this.SearchByCommodityWiseRateMasterDto.toDateStg = this.selectedToDate;
        this.SearchByCommodityWiseRateMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.SearchByCommodityWiseRateMasterDto.source = this.selectedSource;
        this.SearchByCommodityWiseRateMasterDto.commodityName = this.selectedCommodityName;
        if (this.destView == true) {
            if (this.selectedDestination != null && this.selectedDestination != '' && this.selectedDestination != 'All') {
                this.SearchByCommodityWiseRateMasterDto.destination = this.selectedDestination;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Mandatory Field",
                    text: "Please Select Destination",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
        }
        else {
            this.SearchByCommodityWiseRateMasterDto.destination = this.userDataDtoReturnSession.mainStation;
        }
        this.searchByCommodityWiseDetailsMethod();
        console.log(this.SearchByCommodityWiseRateMasterDto);
    };
    RateHistoryReportComponent.prototype.searchByPartyWiseMethodDetailsPopup = function () {
        this.SearchByPartyWiseRateMasterDtoPopUp = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.SearchByPartyWiseRateMasterDtoPopUp.fromDateStg = this.searchPartyWiseTotalStatusDtoPopup.fromDateStg;
        this.SearchByPartyWiseRateMasterDtoPopUp.toDateStg = this.searchPartyWiseTotalStatusDtoPopup.toDateStg;
        this.SearchByPartyWiseRateMasterDtoPopUp.companyId = this.userDataDtoReturnSession.companyId;
        this.SearchByPartyWiseRateMasterDtoPopUp.consigneeId = this.searchPartyWiseTotalStatusDtoPopup.consigneeId;
        this.SearchByPartyWiseRateMasterDtoPopUp.consigneeName = this.searchPartyWiseTotalStatusDtoPopup.consigneeName;
        this.SearchByPartyWiseRateMasterDtoPopUp.source = this.searchPartyWiseTotalStatusDtoPopup.source;
        this.SearchByPartyWiseRateMasterDtoPopUp.destination = this.searchPartyWiseTotalStatusDtoPopup.destination;
        this.searchByPartyWiseDetailsMethodPopup();
        console.log(this.SearchByPartyWiseRateMasterDtoPopUp);
    };
    RateHistoryReportComponent.prototype.setConsignee = function () {
        $("#consigneeName").val(this.searchPartyWiseTotalStatusDtoPopup.consigneeName);
    };
    RateHistoryReportComponent.prototype.clearMethod = function () {
        this.callMethodToClearTable();
        this.selectedSource = '';
        $("#source").val('All');
        this.selectedSearchType = '';
        $("#searchBy").val('partyWise');
        this.selectedDestination = '';
        $("#destination").val('');
        this.selectedFromDate = '';
        $("#fromDate").val('');
        this.selectedToDate = '';
        $("#toDate").val('');
        this.selectedCommodityName = '';
        this.selectedConsigneeName = '';
        this.showSpinnerForAction = false;
        this.selectedConsigneeId = 0;
        this.modelDestinationFotGet = '';
        this.modelConsigneeNameId = '';
        this.fromDateModel = null;
        this.toDateModel = null;
        this.modelConsigneeName = '';
        this.modelCommodityMain = '';
        //
        if (this.destView == true) {
            this.viewDestination = true;
            $("#destination").val('');
            this.consigneeNameTA = [];
            this.modelCommodityMainTA = [];
        }
        else {
            this.modelCommodityMainTA = this.modelCommodityMainTATemp;
            this.consigneeNameTA = this.consigneeNameTATemp;
            this.viewDestination = false;
        }
        $("#consigneeName").val('');
        $("#commodity").val('');
        this.viewParty = true;
        this.viewCommodity = false;
        this.partyWiseTable = true;
        this.commodityWiseTable = false;
        this.showSpinnerForAction = false;
        this.SearchByCommodityWiseRateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.SearchByPartyWiseRateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.searchPartyWiseTotalStatusDtoPopup = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        localStorage.clear();
        this.SearchByPartyWiseRateMasterDtoPopUp = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_12__["RateMasterDto"]();
        this.dataForPopup = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], RateHistoryReportComponent.prototype, "dtElements", void 0);
    RateHistoryReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-history-report',
            template: __webpack_require__(/*! ./rate-history-report.component.html */ "./src/app/report/party-report/rate-history-report/rate-history-report.component.html"),
            styles: [__webpack_require__(/*! ./rate-history-report.component.css */ "./src/app/report/party-report/rate-history-report/rate-history-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_16__["MasterService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_15__["ConsigneeService"]])
    ], RateHistoryReportComponent);
    return RateHistoryReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n\twidth: 32%;\n}\n\n.custome_border {\n\tborder-top: 1px solid #cebd9f;\n\tmargin: 0px 0px 5px 0px;\n}\n\n.custome_padding_btn {\n\tpadding: 2px 5px !important;\n}\n\n@media screen and (max-width:992px) {\n\t.custome_label {\n\twidth: 32%;\n}\n}\n\n@media screen and (min-width:992px) {\n\t.custome_label {\n\twidth: 50%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3BhcnR5LXJlcG9ydC9yZWd1bGFyLWNvbnNpZ25lZS1yZXBvcnQvcmVndWxhci1jb25zaWduZWUtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyw4QkFBOEI7Q0FDOUIsd0JBQXdCO0NBQ3hCOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCOztBQUVEO0NBQ0M7Q0FDQSxXQUFXO0NBQ1g7Q0FDQTs7QUFFRDtDQUNDO0NBQ0EsV0FBVztDQUNYO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcGFydHktcmVwb3J0L3JlZ3VsYXItY29uc2lnbmVlLXJlcG9ydC9yZWd1bGFyLWNvbnNpZ25lZS1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcblx0d2lkdGg6IDMyJTtcbn1cblxuLmN1c3RvbWVfYm9yZGVyIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjZWJkOWY7XG5cdG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xufVxuXG4uY3VzdG9tZV9wYWRkaW5nX2J0biB7XG5cdHBhZGRpbmc6IDJweCA1cHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCkge1xuXHQuY3VzdG9tZV9sYWJlbCB7XG5cdHdpZHRoOiAzMiU7XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpIHtcblx0LmN1c3RvbWVfbGFiZWwge1xuXHR3aWR0aDogNTAlO1xufVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Regular Consignee Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"sourceWise\">Source Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainSourceWise\">Main Source Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr class=\"custome_border\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" [formControl]=\"controlSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceOptions | filter: controlSource.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: controlDestination.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodityList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity List</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCommodityList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteCommodityList=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(commodityListOptions | filter: controlCommodityList.value) as resultCommodityList\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultCommodityList.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"periodDay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custome_label\">Per Month LR(Avg)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success custome_padding_btn m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark custome_padding_btn\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr class=\"custome_border\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Regular Consignee Report Summary</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"height: 240px;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRegularConsigneeReportSummary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRegularConsigneeReportSummary\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Number Of Lrs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let regularConsigneeReportSummaryData of regularConsigneeReportSummaryDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tregularConsigneeReportSummaryData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportSummaryData.numberOfLrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tthe second datatable starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\" regularConsigneeReportDetailsTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Regular Consignee Report Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"height: 240px;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRegularConsigneeReportDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRegularConsigneeReportDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let regularConsigneeReportDetailsData of regularConsigneeReportDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.bookingDate\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.destination\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.commodity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.actualWgt\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.chargedWgt\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ regularConsigneeReportDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tregularConsigneeReportDetailsData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tthe second datatable ends -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RegularConsigneeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularConsigneeReportComponent", function() { return RegularConsigneeReportComponent; });
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends
//for the select option with filter starts

//for the select option with filter ends


var RegularConsigneeReportComponent = /** @class */ (function () {
    function RegularConsigneeReportComponent(regularConsigneeRpt) {
        this.regularConsigneeRpt = regularConsigneeRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewParty = true;
        this.viewCommodity = false;
        //for datepicker ends
        //for the select option with filter starts
        this.controlSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlCommodityList = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.sourceOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Balotra' },
            { id: 3, label: 'Bawana' }
        ];
        this.destinationOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Chennai' }
        ];
        this.commodityListOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'A.footwear(till 72)' },
            { id: 3, label: 'B.footwear(till 78)' }
        ];
        this.dtTriggerRegularConsigneeReportSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerRegularConsigneeReportDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    RegularConsigneeReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    RegularConsigneeReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsRegularConsigneeReportSummary = {
            //};
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"></i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"></i>',
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
            "scrollY": 300,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
            columnDefs: [
                { width: 400, targets: 0 },
                { width: 20, targets: 1 }
            ],
        };
        this.dtOptionsRegularConsigneeReportDetails = {
            //};
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
            "scrollY": 300,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerLorryHireBalance.next();
        //                } );
        this.getDataFrmServiceFrRegularConsigneeReportSummaryTable = this.regularConsigneeRpt.getSummaryData();
        this.onDestroyUnsubscribtionRegularConsigneeReportSummary = this.getDataFrmServiceFrRegularConsigneeReportSummaryTable.subscribe(function (data) {
            _this.regularConsigneeReportSummaryDataList = data['data'];
            _this.dtTriggerRegularConsigneeReportSummary.next();
        });
        this.getDataFrmServiceFrRegularConsigneeReportDetailsTable = this.regularConsigneeRpt.getSummaryData();
        this.onDestroyUnsubscribtionRegularConsigneeReportDetails = this.getDataFrmServiceFrRegularConsigneeReportDetailsTable.subscribe(function (data) {
            _this.regularConsigneeReportDetailsDataList = data['data'];
            _this.dtTriggerRegularConsigneeReportDetails.next();
        });
        //the below code is for the getting data through json ends
    };
    RegularConsigneeReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRegularConsigneeReportSummary.unsubscribe();
        this.dtTriggerRegularConsigneeReportDetails.unsubscribe();
        this.onDestroyUnsubscribtionRegularConsigneeReportSummary.unsubscribe();
        this.onDestroyUnsubscribtionRegularConsigneeReportDetails.unsubscribe();
    };
    RegularConsigneeReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'partyWise') {
            this.viewParty = true;
            this.viewCommodity = false;
        }
        else if (searchBy === 'commodityWise') {
            this.viewParty = false;
            this.viewCommodity = true;
        }
        else {
            this.viewParty = false;
            this.viewCommodity = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    RegularConsigneeReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    RegularConsigneeReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], RegularConsigneeReportComponent.prototype, "dtElements", void 0);
    RegularConsigneeReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regular-consignee-report',
            template: __webpack_require__(/*! ./regular-consignee-report.component.html */ "./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.html"),
            styles: [__webpack_require__(/*! ./regular-consignee-report.component.css */ "./src/app/report/party-report/regular-consignee-report/regular-consignee-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], RegularConsigneeReportComponent);
    return RegularConsigneeReportComponent;
}());



/***/ }),

/***/ "./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9wYXJ0eS1yZXBvcnQvdHJhbnNpdC1scnMtZGV0YWlscy1yZXBvcnQvdHJhbnNpdC1scnMtZGV0YWlscy1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Transit LR's Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\">\n\t\t\t\t\t<div class=\"col-md-12  p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">{{consigneeNameInTable}}-\n\t\t\t\t\t\t\t\t\t\t\t\t\tTransit LR Details</h6>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"transitLrsDetailsId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTransitLrsDetailsDetailsReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTransitLrsDetailsReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let transitLrsDetailsReportData of transitLrsDetailsReportDataList  \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{transitLrsDetailsReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transitLrsDetailsReportData.bookingDateStr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transitLrsDetailsReportData.fromStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{transitLrsDetailsReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transitLrsDetailsReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transitLrsDetailsReportData.topay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{transitLrsDetailsReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transitLrsDetailsReportData.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transitLrsDetailsReportData.chargedwt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: TransitLrsDetailsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLrsDetailsReportComponent", function() { return TransitLrsDetailsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var my = new Date();







var TransitLrsDetailsReportComponent = /** @class */ (function () {
    function TransitLrsDetailsReportComponent(router, datePipe, consigneeService) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.consigneeService = consigneeService;
        this.loadingIndicator = true;
        this.dtTriggerTransitLrsDetailsReport = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.detailsFromPartyWiseTotalStatusRptPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_7__["InvoiceDto"]();
        this.invoiceDtoForTransitLRsPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_7__["InvoiceDto"]();
        this.searchByDetailedMethodPopup = function () {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getPartyTransitLrDetail(_this.invoiceDtoForTransitLRsPopup).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#transitLrsDetailsId").DataTable().destroy();
                _this.transitLrsDetailsReportDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.transitLrsDetailsReportDataList = response;
                    console.log(_this.transitLrsDetailsReportDataList);
                }
                setTimeout(function () {
                    _this.dtTriggerTransitLrsDetailsReport.next();
                }, 2000);
                _this.consigneeNameInTable = _this.detailsFromPartyWiseTotalStatusRptPopup.consigneeName;
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Error", "Server Problem Occurred While getting the Transit LR's View", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
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
            this.clearMethod();
            this.dataForPopup = JSON.parse(localStorage.getItem('transitLrsReportPopup'));
            localStorage.clear();
            if (this.dataForPopup != null) {
                this.detailsFromPartyWiseTotalStatusRptPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_7__["InvoiceDto"]();
                this.detailsFromPartyWiseTotalStatusRptPopup = this.dataForPopup;
                if (this.detailsFromPartyWiseTotalStatusRptPopup != null) {
                    this.searchTransitLrDetails();
                }
            }
            this.dataForPopup = '';
        }
    }
    TransitLrsDetailsReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    TransitLrsDetailsReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    TransitLrsDetailsReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    TransitLrsDetailsReportComponent.prototype.ngOnInit = function () {
        this.dtOptionsTransitLrsDetailsDetailsReport = {
            dom: 'Bfrtip',
            buttons: [],
            processing: true,
            responsive: true,
            "scrollX": false,
            "scrollY": 300,
            "scrollCollapse": true,
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                var articles = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var topay = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWgt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html(articles);
                $(api.column(5).footer()).html(topay);
                $(api.column(6).footer()).html(paid);
                $(api.column(7).footer()).html(actualWgt);
                $(api.column(8).footer()).html(chargedWgt);
            }
        };
    };
    TransitLrsDetailsReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTransitLrsDetailsReport.unsubscribe();
    };
    TransitLrsDetailsReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerTransitLrsDetailsReport.next();
    };
    //for the select option with filter starts
    TransitLrsDetailsReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    TransitLrsDetailsReportComponent.prototype.searchTransitLrDetails = function () {
        this.invoiceDtoForTransitLRsPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_7__["InvoiceDto"]();
        this.invoiceDtoForTransitLRsPopup.consigneeName = this.detailsFromPartyWiseTotalStatusRptPopup.consigneeName;
        this.invoiceDtoForTransitLRsPopup.consigneeId = this.detailsFromPartyWiseTotalStatusRptPopup.consigneeId;
        //this.invoiceDtoForTransitLRsPopup.destination=this.detailsFromPartyWiseTotalStatusRptPopup.destination;
        this.invoiceDtoForTransitLRsPopup.status = "Transit";
        console.log(this.invoiceDtoForTransitLRsPopup);
        this.searchByDetailedMethodPopup();
    };
    TransitLrsDetailsReportComponent.prototype.clearMethod = function () {
        this.invoiceDtoForTransitLRsPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_7__["InvoiceDto"]();
        this.showSpinnerForAction = false;
        $("#transitLrsDetailsId").DataTable().destroy();
        this.transitLrsDetailsReportDataList = [];
        this.dtTriggerTransitLrsDetailsReport.next();
        this.consigneeNameInTable = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TransitLrsDetailsReportComponent.prototype, "dtElements", void 0);
    TransitLrsDetailsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transit-lrs-details-report',
            template: __webpack_require__(/*! ./transit-lrs-details-report.component.html */ "./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.html"),
            styles: [__webpack_require__(/*! ./transit-lrs-details-report.component.css */ "./src/app/report/party-report/transit-lrs-details-report/transit-lrs-details-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_6__["ConsigneeService"]])
    ], TransitLrsDetailsReportComponent);
    return TransitLrsDetailsReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-party-report-party-report-module.js.map