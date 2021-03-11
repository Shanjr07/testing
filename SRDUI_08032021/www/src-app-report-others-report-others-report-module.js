(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-others-report-others-report-module"],{

/***/ "./src/app/report/others-report/cheque-details-report/cheque-details-report.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/report/others-report/cheque-details-report/cheque-details-report.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvY2hlcXVlLWRldGFpbHMtcmVwb3J0L2NoZXF1ZS1kZXRhaWxzLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9vdGhlcnMtcmVwb3J0L2NoZXF1ZS1kZXRhaWxzLXJlcG9ydC9jaGVxdWUtZGV0YWlscy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBwWDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/report/others-report/cheque-details-report/cheque-details-report.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/report/others-report/cheque-details-report/cheque-details-report.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Cheque Details Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select #searchBy class=\"custom-select col-12\" id=\"chequeModeId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByType(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ALL\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Current\">Current</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"PDC\">PDC</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Specific\">Specific</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!showHiddenChequeDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Date</label> <input id=\"chequeDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"chequeDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"chequeDatesModal\" #chequeDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"chequeDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearBtn()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSendBankDetailsBtn(chequeBankDetailsPopUpTemplate)\">\n\t\t\t\t\t\t\t\tSend To Bank</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateChangeChequeDateDetailsBtn(changeChequeDateDetailsPopUpTemplate)\">\n\t\t\t\t\t\t\t\tChange Cheque Date</button>\n\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable id=\"chequeDetailsTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsChequeDetailsReport\" [dtTrigger]=\"dtTriggerChequeDetailsReport\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t<!--<input type=\"checkbox\" [checked]=\"multiSelect\"\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"multiSelect = !multiSelect\" />-->\n\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bank Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t<!--<th>Action</th>-->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let chequeDetailsReportData of chequeDetailsReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [checked]=\"multiSelect\" id='selected'\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"rowCheckBoxChecked($event, chequeDetailsReportData)\" />\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsReportData.chequeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsReportData.chequeDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsReportData.chqAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsReportData.bankName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsReportData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t\t<!--<td>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn()\">Search</button>\n\t\t\t\t\t\t\t\t\t\t</td>-->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<!--<td></td>-->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--POP UP START HERE-->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t<ng-template #chequeBankDetailsPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h5>Cheque Bank Details :</h5>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #bankName id=\"bankNameId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForBankName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelBankName\" [ngbTypeahead]=\"searchBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusBankNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"updateBtnId\" (click)=\"updateChequeDetailsRptPopUp()\">Update\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"cancelBtnId\" (click)=\"closeChequeDetailsRptPopUp()\">Cancel\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t<ng-template #changeChequeDateDetailsPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h5>Change Cheque Date :</h5>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Cheque Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"changeNewChequeDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"changeNewChequeDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #changeNewChequeDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"changeNewChequeDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"updateBtnId\" (click)=\"updateChequeDateDetailsRptPopUp()\">Update\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"cancelBtnId\" (click)=\"closeChequeDateDetailsRptPopUp()\">Cancel\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--POP UP START HERE-->\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/others-report/cheque-details-report/cheque-details-report.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/report/others-report/cheque-details-report/cheque-details-report.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ChequeDetailsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeDetailsReportComponent", function() { return ChequeDetailsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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












var ChequeDetailsReportComponent = /** @class */ (function () {
    function ChequeDetailsReportComponent(chequeSearchRpt, router, memoReport, masterReadService, modalService) {
        var _this = this;
        this.chequeSearchRpt = chequeSearchRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerChequeDetailsReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.bankNameTA = [];
        this.focusBankNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchBankName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusBankNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (term) { return (term === '' ? _this.bankNameTA
                : _this.bankNameTA.filter(function (v) { return v.bankName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterBankName = function (x) { return x.bankName; };
        this.isLoggedIn = true;
        this.validateChequeDate = null;
        this.validateChequeMode = null;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.showSpinnerForAction = false;
        this.showHiddenChequeDate = false;
        this.lrDtoList = [];
        this.bankLrDtoList = [];
        this.bankDtoList = [];
        this.lrDtoData = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.chequeDateUpdateLRDto = [];
        this.chequeDateLrDtoList = [];
        this.multiSelect = false;
        this.validateBankNameId = null;
        this.validateNewChequeDateId = null;
        this.chequeDatesModal = null;
        this.getBankDetailsList = function () {
            _this.showSpinnerForAction = true;
            _this.bankNameOptions = [];
            _this.getDetailsForBankMasterRead();
            _this.masterReadService.getBankMasterDetails(_this.userDataDto).subscribe(function (response) {
                if (response) {
                    if (response.length > 0) {
                        _this.bankNameOptions = response;
                        _this.bankNameTA = [];
                        for (var i = 0; i < _this.bankNameOptions.length; i++) {
                            _this.bankNameTA.push(_this.bankNameOptions[i]);
                        }
                        _this.showSpinnerForAction = false;
                    }
                    else {
                        _this.showSpinnerForAction = false;
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Error While Getting Bank Master Details", "error");
            },
                function () { return console.log('done'); };
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
            this.getBankDetailsList();
        }
    }
    ChequeDetailsReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ChequeDetailsReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                //dtInstance.destroy();
            });
        });
    };
    ChequeDetailsReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsChequeDetailsReport = {
            //dom: 'lBfrtip',
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
                    pageSize: 'A4',
                    autowidth: true,
                    exportOptions: {
                        columns: [1, 2, 3, 5, 4, 5, 6]
                    },
                    messageTop: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Cheque Details Report</u><br><br>" +
                            "Type : " + $("#chequeModeId").val() + " -  " +
                            "Date : " + moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('DD-MM-YYYY') + "" +
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
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    exportOptions: {
                        columns: [1, 2, 3, 5, 4, 5, 6]
                    },
                    title: function () {
                        return "Cheque Details Report - " +
                            "Type : " + $("#chequeModeId").val() + " -  " +
                            "Date : " + moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('DD-MM-YYYY') + "";
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
                // computing column Total of the complete result 
                var chqAmt = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(3).footer()).html(chqAmt);
            },
        };
    };
    ChequeDetailsReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerChequeDetailsReport.unsubscribe();
        //this.onDestroyUnsubscribtionChequeSearchReport.unsubscribe();
    };
    ChequeDetailsReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerChequeDetailsReport.next();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ChequeDetailsReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    ChequeDetailsReportComponent.prototype.onKeyPressFieldForChequeReffNo = function (event) {
        if (event == 13) {
            $("#searchBtn").focus();
        }
    };
    ChequeDetailsReportComponent.prototype.searchByType = function (searchBy) {
        if (searchBy == "Specific") {
            this.chequeDatesModal = null;
            this.showHiddenChequeDate = true;
        }
        else {
            this.chequeDatesModal = null;
            this.showHiddenChequeDate = false;
        }
    };
    ChequeDetailsReportComponent.prototype.clearChequeBtn = function () {
        //$("#chequeModeId").val('ALL');
        this.validateChequeDate = null;
        this.validateChequeMode = null;
        this.chequeDatesModal = null;
        this.showHiddenChequeDate = false;
    };
    ChequeDetailsReportComponent.prototype.clearBtn = function () {
        $("#chequeModeId").val('ALL');
        this.lrDtoList = [];
        this.clearBankFields();
        this.clearNewChequeDateFields();
        this.chequeDetailsReportDataList = [];
        $("#chequeDetailsTableId").DataTable().destroy();
        this.dtTriggerChequeDetailsReport.next();
        this.validateChequeDate = null;
        this.validateChequeMode = null;
        this.chequeDatesModal = null;
        this.showHiddenChequeDate = false;
    };
    ChequeDetailsReportComponent.prototype.validateSearchBtn = function () {
        this.getChequeDetailsReportDataList();
    };
    ChequeDetailsReportComponent.prototype.getChequeDetailsData = function () {
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDto.destination = this.userDataDtoReturnSession.mainStation;
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.validateChequeDate = $("#chequeDates").val();
        this.validateChequeMode = $("#chequeModeId").val();
        this.lrDto.date = this.validateChequeDate;
        this.lrDto.mode = this.validateChequeMode;
    };
    ChequeDetailsReportComponent.prototype.getChequeDetailsReportDataList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getChequeDetailsData();
        this.memoReport.getDestinationChequeDetailsReport(this.lrDto).subscribe(function (response) {
            _this.lrDtoList = [];
            $("#chequeDetailsTableId").DataTable().destroy();
            _this.chequeDetailsReportDataList = [];
            if (response.length > 0) {
                _this.showSpinnerForAction = false;
                console.log(response);
                _this.chequeDetailsReportDataList = response;
            }
            else {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("No Records", "No Records found for this search", "info");
            }
            _this.dtTriggerChequeDetailsReport.next();
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the cheque Details", "info");
            },
            function () { return console.log('done'); };
    };
    ChequeDetailsReportComponent.prototype.clickListnerForBankName = function (event) {
        this.modelBankName = event.item;
        $("#bankNameId").val(this.modelBankName.bankName);
    };
    ChequeDetailsReportComponent.prototype.getDetailsForBankMasterRead = function () {
        this.userDataDto.office = this.userDataDtoReturnSession.mainStation;
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.status = "Working";
    };
    //pop up
    ChequeDetailsReportComponent.prototype.getDismissReason = function (reason) {
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
    ChequeDetailsReportComponent.prototype.validateSendBankDetailsBtn = function (chequeBankDetailsPopUpTemplate) {
        var _this = this;
        console.log(this.lrDtoList);
        if (this.lrDtoList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Mandatory Fields", "Please select the atleast one checkbox to proceed", "warning");
            return false;
        }
        else {
            this.modalRefferenceBankPopUp = this.modalService.open(chequeBankDetailsPopUpTemplate, { centered: true, windowClass: "modalClassForPopUpTruckOwner" });
            this.modalRefferenceBankPopUp.result.then(function (result) {
                _this.modalRefferenceBankClosePopUp = "Closed with: " + result;
            }, function (reason) {
                _this.modalRefferenceBankClosePopUp = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    ChequeDetailsReportComponent.prototype.rowCheckBoxChecked = function (e, chequeDetailsReportData) {
        if (e.currentTarget.checked) {
            if (this.lrDtoList.length == 0) {
                this.lrDtoList = [];
                this.lrDtoList.push(chequeDetailsReportData);
            }
            else {
                this.lrDtoList.push(chequeDetailsReportData);
            }
        }
        else {
            var index = this.lrDtoList.indexOf(chequeDetailsReportData);
            if (index > -1) {
                this.lrDtoList.splice(index, 1);
            }
        }
    };
    ChequeDetailsReportComponent.prototype.validateChangeChequeDateDetailsBtn = function (changeChequeDateDetailsPopUpTemplate) {
        var _this = this;
        if (this.lrDtoList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Mandatory Fields", "Please select the atleast one checkbox to proceed", "warning");
            return false;
        }
        else {
            this.modalRefferenceChequeDatePopUp = this.modalService.open(changeChequeDateDetailsPopUpTemplate, { centered: true, windowClass: "modalClassForPopUpTruckOwner" });
            this.modalRefferenceChequeDatePopUp.result.then(function (result) {
                _this.modalRefferenceChequeDateClosePopUp = "Closed with: " + result;
            }, function (reason) {
                _this.modalRefferenceChequeDateClosePopUp = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    //send to bank 
    ChequeDetailsReportComponent.prototype.updateSendToBank = function () {
        var _this = this;
        this.bankDtoList = [];
        this.bankDtoList = this.getSelectedValuesBank();
        //console.log(this.bankDtoList);
        this.memoReport.updateDestinationChqSentToBankDetailsReport(this.bankDtoList).subscribe(function (response) {
            _this.bankDtoListReturn = response;
            console.log(_this.bankDtoListReturn.status);
            if (_this.bankDtoListReturn.status != null && _this.bankDtoListReturn.status == "Success") {
                _this.clearBankFields();
                _this.getChequeDetailsReportDataList();
                _this.modalRefferenceBankPopUp.close();
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Details Updated", "Bank details updated successfully!", "success");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Problem occurred while updating bank details!", "warning");
            }
        }),
            function (error) {
                _this.modalRefferenceBankPopUp.close();
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While updating a bank details", "info");
            },
            function () { return console.log('done'); };
    };
    ChequeDetailsReportComponent.prototype.getSelectedValuesBank = function () {
        this.bankLrDtoList = [];
        for (var i = 0; i < this.lrDtoList.length; i++) {
            this.lrDtoData = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
            this.lrDtoData.destination = this.userDataDtoReturnSession.mainStation;
            this.lrDtoData.userName = this.userDataDtoReturnSession.userId;
            this.lrDtoData.chequeDate = this.lrDtoList[i].chequeDate;
            this.lrDtoData.chequeNumber = this.lrDtoList[i].chequeNumber;
            this.lrDtoData.bankName = this.lrDtoList[i].bankName;
            this.validateBankNameId = $("#bankNameId").val();
            this.lrDtoData.bankLr = this.validateBankNameId;
            this.bankLrDtoList.push(this.lrDtoData);
        }
        return this.bankLrDtoList;
    };
    ChequeDetailsReportComponent.prototype.updateChequeDetailsRptPopUp = function () {
        this.validateBankNameId = $("#bankNameId").val();
        if (this.validateBankNameId == null || this.validateBankNameId == undefined ||
            this.validateBankNameId == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Mandatory Field", "Please select the Bank Name", "warning");
            return false;
        }
        else {
            this.updateSendToBank();
        }
    };
    ChequeDetailsReportComponent.prototype.clearBankFields = function () {
        this.lrDtoList = [];
        this.validateBankNameId = null;
        $("#bankNameId").val('');
        this.modelBankName = null;
    };
    ChequeDetailsReportComponent.prototype.closeChequeDetailsRptPopUp = function () {
        this.modalRefferenceBankPopUp.close();
    };
    //change cheque date
    ChequeDetailsReportComponent.prototype.changeChequeDate = function () {
        var _this = this;
        this.chequeDateUpdateLRDto = [];
        this.chequeDateUpdateLRDto = this.getSelectedValues();
        console.log(this.chequeDateUpdateLRDto);
        this.memoReport.updateDestinationChequeDateDetails(this.chequeDateUpdateLRDto).subscribe(function (response) {
            _this.chequeDateUpdateLRDtoReturn = response;
            console.log(_this.chequeDateUpdateLRDtoReturn.status);
            if (_this.chequeDateUpdateLRDtoReturn.status != null &&
                _this.chequeDateUpdateLRDtoReturn.status == "Success") {
                _this.getChequeDetailsReportDataList();
                _this.clearNewChequeDateFields();
                _this.modalRefferenceChequeDatePopUp.close();
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Details Updated", "Cheque Date Updated successfully!", "success");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Problem occurred while updating the cheque date!", "warning");
            }
        }),
            function (error) {
                _this.modalRefferenceChequeDatePopUp.close();
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While updating the cheque date!", "info");
            },
            function () { return console.log('done'); };
    };
    ChequeDetailsReportComponent.prototype.getSelectedValues = function () {
        this.chequeDateLrDtoList = [];
        for (var i = 0; i < this.lrDtoList.length; i++) {
            this.lrDtoData = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
            this.lrDtoData.destination = this.userDataDtoReturnSession.mainStation;
            this.lrDtoData.userName = this.userDataDtoReturnSession.userId;
            this.lrDtoData.chequeDate = this.lrDtoList[i].chequeDate;
            this.lrDtoData.chequeNumber = this.lrDtoList[i].chequeNumber;
            this.lrDtoData.bankName = this.lrDtoList[i].bankName;
            this.validateNewChequeDateId = $("#changeNewChequeDates").val();
            console.log(this.validateNewChequeDateId);
            this.lrDtoData.dateInDate = this.validateNewChequeDateId;
            this.chequeDateLrDtoList.push(this.lrDtoData);
        }
        return this.chequeDateLrDtoList;
    };
    ChequeDetailsReportComponent.prototype.updateChequeDateDetailsRptPopUp = function () {
        this.validateNewChequeDateId = $("#changeNewChequeDates").val();
        if (this.validateNewChequeDateId == null || this.validateNewChequeDateId == undefined ||
            this.validateNewChequeDateId == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Mandatory Field", "Please select the new cheque date", "warning");
            return false;
        }
        else {
            this.changeChequeDate();
        }
    };
    ChequeDetailsReportComponent.prototype.clearNewChequeDateFields = function () {
        this.lrDtoList = [];
        this.validateNewChequeDateId = null;
        $("#changeNewChequeDates").val('');
    };
    ChequeDetailsReportComponent.prototype.closeChequeDateDetailsRptPopUp = function () {
        this.modalRefferenceChequeDatePopUp.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ChequeDetailsReportComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chequeBankDetailsPopUpTemplate'),
        __metadata("design:type", Object)
    ], ChequeDetailsReportComponent.prototype, "chequeBankDetailsPopUpTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('changeChequeDateDetailsPopUpTemplate'),
        __metadata("design:type", Object)
    ], ChequeDetailsReportComponent.prototype, "changeChequeDateDetailsPopUpTemplate", void 0);
    ChequeDetailsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheque-details-report',
            template: __webpack_require__(/*! ./cheque-details-report.component.html */ "./src/app/report/others-report/cheque-details-report/cheque-details-report.component.html"),
            styles: [__webpack_require__(/*! ./cheque-details-report.component.css */ "./src/app/report/others-report/cheque-details-report/cheque-details-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_7__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__["MasterReadService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ChequeDetailsReportComponent);
    return ChequeDetailsReportComponent;
}());



/***/ }),

/***/ "./src/app/report/others-report/cheque-search-report/cheque-search-report.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/report/others-report/cheque-search-report/cheque-search-report.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\n\t top:26px;\n    left:25px;\n\tmax-height: 150px;\n    overflow-y: auto;\n    position: absolute;\n}\n.pointer {cursor: pointer;}\n@media print {\n\tbody, html * {\n\t\tvisibility: hidden;\n\t}\n\t#showChqSearchRpt, #showChqSearchRpt * {\n\t\tvisibility: hidden;\n\t}\n\t#viewCustomPrintV1 {\n\t\tposition: static;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin-top: -530px!important;\n\t}\n}\n::ng-deep .mat-horizontal-stepper-header {\n\tpointer-events: none !important;\n}\n::ng-deep .mat-progress-bar-fill::after {\n    background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvY2hlcXVlLXNlYXJjaC1yZXBvcnQvY2hlcXVlLXNlYXJjaC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QjtBQUNELFVBQVUsZ0JBQWdCLENBQUM7QUFFM0I7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLE9BQU87RUFDUCw2QkFBNkI7RUFDN0I7Q0FDRDtBQUVEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvb3RoZXJzLXJlcG9ydC9jaGVxdWUtc2VhcmNoLXJlcG9ydC9jaGVxdWUtc2VhcmNoLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xuXHQgdG9wOjI2cHg7XG4gICAgbGVmdDoyNXB4O1xuXHRtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxuXG5AbWVkaWEgcHJpbnQge1xuXHRib2R5LCBodG1sICoge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjc2hvd0NocVNlYXJjaFJwdCwgI3Nob3dDaHFTZWFyY2hScHQgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCN2aWV3Q3VzdG9tUHJpbnRWMSB7XG5cdFx0cG9zaXRpb246IHN0YXRpYztcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRtYXJnaW4tdG9wOiAtNTMwcHghaW1wb3J0YW50O1xuXHR9XG59XG5cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuXHRwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/others-report/cheque-search-report/cheque-search-report.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/report/others-report/cheque-search-report/cheque-search-report.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\" id=\"showChqSearchRpt\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Cheque Search Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque/Referenc Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"chequeOrReferencNumber\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForChequeReffNo($event.keyCode)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"validateSearchBtn()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"clearChequeBtn()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"dt-button\" style=\"margin-left: 92%;\"\n\t\t\t\t\t\t\t\t(click)=\"customPrintChqSearch()\" id=\"printAllBtn\">\n\t\t\t\t\t\t\t\t<span><i class=\"fas fa-print\">Print</i></span>\n\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t<table datatable id=\"chequeSearchTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsChequeSearchReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerChequeSearchReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Coll.Cls.Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>TDS Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Claim Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>NEFT Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chq./Reff.No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bank Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chq Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let chequeSearchReportData of chequeSearchReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.completedOnStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.amount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.less }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.tds }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.claim }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.chequeAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.neftAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.chqNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.bankName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.dateInDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ chequeSearchReportData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"viewCustomPrintV1\" onafterprint=\"afterPrint()\"\n\t\tid=\"viewCustomPrintV1\">\n\t\t<app-custom-dynamic-printV1></app-custom-dynamic-printV1>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/others-report/cheque-search-report/cheque-search-report.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/report/others-report/cheque-search-report/cheque-search-report.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChequeSearchReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeSearchReportComponent", function() { return ChequeSearchReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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








var ChequeSearchReportComponent = /** @class */ (function () {
    //
    function ChequeSearchReportComponent(chequeSearchRpt, router, datePipe, memoReport) {
        var _this = this;
        this.chequeSearchRpt = chequeSearchRpt;
        this.router = router;
        this.datePipe = datePipe;
        this.memoReport = memoReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerChequeSearchReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.validateChequeOrRefNo = null;
        this.cashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
        this.showSpinnerForAction = false;
        //for custom print
        this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
        this.cashMemoDtoForCustomPrintListColumnNames = [];
        this.cashMemoDtoForCustomPrintListColumnWidths = [];
        this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
        this.cashMemoDtoForCustomPrintListColumnValues = [];
        this.viewCustomPrintV1 = false;
        this.cashMemoDtoForCustomPrintListHeadingNamesV1 = [];
        this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [];
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
        }
    }
    ChequeSearchReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ChequeSearchReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                //dtInstance.destroy();
            });
        });
    };
    ChequeSearchReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsChequeSearchReport = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "Cheque Report - " +
                            "Cheque / Refference No : " + $("#chequeOrReferencNumber").val() + " -  " +
                            "Date : " + moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('DD-MM-YYYY') + "";
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
            "scrollY": 320,
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
                var memoAmt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var memoLessAmt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var tdsLessAmt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var cliamLessAmt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chequeAmt = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var neftAmt = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                //$( api.column( 1 ).footer() ).html(data.length);
                $(api.column(5).footer()).html(memoAmt);
                $(api.column(6).footer()).html(memoLessAmt);
                $(api.column(7).footer()).html(tdsLessAmt);
                $(api.column(8).footer()).html(cliamLessAmt);
                $(api.column(9).footer()).html(chequeAmt);
                $(api.column(10).footer()).html(neftAmt);
            },
        };
    };
    ChequeSearchReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerChequeSearchReport.unsubscribe();
        //this.onDestroyUnsubscribtionChequeSearchReport.unsubscribe();
    };
    ChequeSearchReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerChequeSearchReport.next();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ChequeSearchReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    ChequeSearchReportComponent.prototype.onKeyPressFieldForChequeReffNo = function (event) {
        if (event == 13) {
            $("#searchBtn").focus();
        }
    };
    ChequeSearchReportComponent.prototype.clearChequeBtn = function () {
        $("#chequeOrReferencNumber").val('');
        this.validateChequeOrRefNo = null;
        this.chequeSearchReportDataList = [];
        $("#chequeSearchTableId").DataTable().destroy();
        this.dtTriggerChequeSearchReport.next();
    };
    ChequeSearchReportComponent.prototype.validateSearchBtn = function () {
        if ($("#chequeOrReferencNumber").val() == null ||
            $("#chequeOrReferencNumber").val() == undefined || $("#chequeOrReferencNumber").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Mandatory Field", "Please enter the cheque number or refference number", "warning");
            return false;
        }
        else {
            this.getChequeRefferenceDetailsList();
        }
    };
    ChequeSearchReportComponent.prototype.getChequeRefferenceDataDetails = function () {
        this.cashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
        this.validateChequeOrRefNo = $("#chequeOrReferencNumber").val();
        this.cashMemoDto.chqNumber = this.validateChequeOrRefNo;
        this.cashMemoDto.companyId = this.userDataDtoReturnSession.companyId;
        this.cashMemoDto.destination = this.userDataDtoReturnSession.mainStation;
        this.cashMemoDto.dateInDate = new Date();
    };
    ChequeSearchReportComponent.prototype.getChequeRefferenceDetailsList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getChequeRefferenceDataDetails();
        this.memoReport.getChequeDetailsReport(this.cashMemoDto).subscribe(function (response) {
            $("#chequeSearchTableId").DataTable().destroy();
            _this.chequeSearchReportDataList = [];
            if (response.length > 0) {
                _this.showSpinnerForAction = false;
                _this.chequeSearchReportDataList = response;
            }
            else {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("No Records", "No Records found for this search", "info");
            }
            _this.dtTriggerChequeSearchReport.next();
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the cheque Details", "info");
            },
            function () { return console.log('done'); };
    };
    ChequeSearchReportComponent.prototype.customPrintChqSearch = function () {
        var _this = this;
        if (this.chequeSearchReportDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "No records found to print",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            localStorage.clear();
            this.cashMemoDtoForCustomPrintList = [];
            this.cashMemoDtoForCustomPrintListColumnNames = ["Memo Number", "LR No", "Source", "Party Name", "Coll.Clos Dt", "Memo Amt", "Memo Less", "TDS Less", "Claim Less", "Chq Amt", "NEFT Amt", "Bank Name", "Chq Date", "Collection Man"];
            this.cashMemoDtoForCustomPrintListColumnWidths = [10, 7, 9, 14, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListColumnNames.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.columnName = this.cashMemoDtoForCustomPrintListColumnNames[i];
                this.cashMemoDtoForCustomPrint.columnWidth = this.cashMemoDtoForCustomPrintListColumnWidths[i];
                this.cashMemoDtoForCustomPrintList.push(this.cashMemoDtoForCustomPrint);
            }
            this.cashMemoDtoForCustomPrintDataList = [];
            this.cashMemoDtoForCustomPrintDataSummaryList = [];
            this.summary1 = this.summary2 = this.summary3 = this.summary4 = this.summary5 = this.summary6 = 0;
            for (var i = 0; i < this.chequeSearchReportDataList.length; i++) {
                this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrintListColumnValues = [this.chequeSearchReportDataList[i].memoNumber, this.chequeSearchReportDataList[i].lrNumber, this.chequeSearchReportDataList[i].source, this.chequeSearchReportDataList[i].consigneeName, this.chequeSearchReportDataList[i].completedOnStr, this.chequeSearchReportDataList[i].amount, this.chequeSearchReportDataList[i].less, this.chequeSearchReportDataList[i].tds, this.chequeSearchReportDataList[i].claim, this.chequeSearchReportDataList[i].chequeAmt, this.chequeSearchReportDataList[i].neftAmt, this.chequeSearchReportDataList[i].bankName, this.chequeSearchReportDataList[i].dateInDate, this.chequeSearchReportDataList[i].collectionMan];
                this.cashMemoDtoForCustomPrintData.cashMemoDtoForCustomPrintListColumnValues = this.cashMemoDtoForCustomPrintListColumnValues;
                this.cashMemoDtoForCustomPrintDataList.push(this.cashMemoDtoForCustomPrintData);
                this.summary1 = this.summary1 + this.chequeSearchReportDataList[i].amount;
                this.summary2 = this.summary2 + this.chequeSearchReportDataList[i].less;
                this.summary3 = this.summary3 + this.chequeSearchReportDataList[i].tds;
                this.summary4 = this.summary4 + this.chequeSearchReportDataList[i].claim;
                this.summary5 = this.summary5 + this.chequeSearchReportDataList[i].chequeAmt;
                this.summary6 = this.summary6 + this.chequeSearchReportDataList[i].neftAmt;
            }
            this.cashMemoDtoForCustomPrintDataSummaryList = ["Total : " + this.chequeSearchReportDataList.length, "", "", "", "", this.summary1, this.summary2, this.summary3, this.summary4, this.summary5, this.summary6, "", "", ""];
            //heading logics For Date
            this.cashMemoDtoForCustomPrintListHeadingV1 = [];
            this.curDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
            this.cashMemoDtoForCustomPrintListHeadingNamesV1 = ["Chq/Ref.Number", "Date"];
            this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [this.cashMemoDto.chqNumber, this.curDate];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV1.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV1[i];
                this.cashMemoDtoForCustomPrint.printHeadingValue = this.cashMemoDtoForCustomPrintListHeadingValuesV1[i];
                this.cashMemoDtoForCustomPrintListHeadingV1.push(this.cashMemoDtoForCustomPrint);
            }
            localStorage.setItem('printCashMemoDtoForCustomPrintList', JSON.stringify(this.cashMemoDtoForCustomPrintList));
            localStorage.setItem('printCashMemoDtoForCustomPrintDataList', JSON.stringify(this.cashMemoDtoForCustomPrintDataList));
            localStorage.setItem('printcashMemoDtoForCustomPrintDataSummaryList', JSON.stringify(this.cashMemoDtoForCustomPrintDataSummaryList));
            localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV1', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV1));
            localStorage.setItem('printTitle', "Cheque Report");
            this.viewCustomPrintV1 = true;
            window.addEventListener('afterprint', function (onclick) {
                if (_this.viewCustomPrintV1) {
                    _this.viewCustomPrintV1 = false;
                    localStorage.clear();
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ChequeSearchReportComponent.prototype, "dtElements", void 0);
    ChequeSearchReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cheque-search-report',
            template: __webpack_require__(/*! ./cheque-search-report.component.html */ "./src/app/report/others-report/cheque-search-report/cheque-search-report.component.html"),
            styles: [__webpack_require__(/*! ./cheque-search-report.component.css */ "./src/app/report/others-report/cheque-search-report/cheque-search-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_7__["MemoReport"]])
    ], ChequeSearchReportComponent);
    return ChequeSearchReportComponent;
}());



/***/ }),

/***/ "./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvZHJpdmVyLXJld2FyZGVkLXJlcG9ydC9kcml2ZXItcmV3YXJkZWQtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvZHJpdmVyLXJld2FyZGVkLXJlcG9ydC9kcml2ZXItcmV3YXJkZWQtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Driver Rewarded Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDriverRewardedReport\" [dtTrigger]=\"dtTriggerDriverRewardedReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>GSTIN/UNI Of Recipient</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Value</th>\n\t\t\t\t\t\t\t\t\t\t<th>Place Of Supply</th>\n\t\t\t\t\t\t\t\t\t\t<th>Reverse Charge</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Type</th>\n\t\t\t\t\t\t\t\t\t\t<th>E-Commerece GSTIN</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th>Taxable Value</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cess Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let driverRewardedReportData of driverRewardedReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.gstinUinOfRecipient }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.invoiceDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.invoiceValue }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.placeOfSupply }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.reverseCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.invoiceType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.eCommerceGstin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.taxableValue }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ driverRewardedReportData.cessAmount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DriverRewardedReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRewardedReportComponent", function() { return DriverRewardedReportComponent; });
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


var DriverRewardedReportComponent = /** @class */ (function () {
    function DriverRewardedReportComponent(driverRewardedRpt) {
        this.driverRewardedRpt = driverRewardedRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerDriverRewardedReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DriverRewardedReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DriverRewardedReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsDriverRewardedReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'GSTIN/UIN Of Recipient',
                    data: 'gstinUinOfRecipient'
                },
                {
                    title: 'Invoice Number',
                    data: 'inoviceNumber'
                },
                {
                    title: 'Invoice Date',
                    data: 'invoiceDate'
                },
                {
                    title: 'Invoice Value',
                    data: 'invoiceValue'
                },
                {
                    title: 'Place Of Supply',
                    data: 'placeOfSupply'
                },
                {
                    title: 'Reverse Charge',
                    data: 'reverseCharge'
                },
                {
                    title: 'Invoice Type',
                    data: 'invoiceType'
                },
                {
                    title: 'E-Commerce GSTIN',
                    data: 'eCommerceGstin'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Taxable Value',
                    data: 'taxableValue'
                },
                {
                    title: 'Cess Amount',
                    data: 'cessAmount'
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
        this.gettingDataFrmServiceFrDriverRewardedReportTable = this.driverRewardedRpt.getSummaryData();
        this.onDestroyUnsubscribtionDriverRewardedReport = this.gettingDataFrmServiceFrDriverRewardedReportTable.subscribe(function (data) {
            _this.driverRewardedReportDataList = data['data'];
            _this.dtTriggerDriverRewardedReport.next();
        });
        //the below code is for the getting data through json ends
    };
    DriverRewardedReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDriverRewardedReport.unsubscribe();
        this.onDestroyUnsubscribtionDriverRewardedReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    DriverRewardedReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DriverRewardedReportComponent.prototype, "dtElements", void 0);
    DriverRewardedReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-rewarded-report',
            template: __webpack_require__(/*! ./driver-rewarded-report.component.html */ "./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.html"),
            styles: [__webpack_require__(/*! ./driver-rewarded-report.component.css */ "./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], DriverRewardedReportComponent);
    return DriverRewardedReportComponent;
}());



/***/ }),

/***/ "./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvbGMtYW5kLWJjLXJlcG9ydC9sYy1hbmQtYmMtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0lBQ1AsVUFBVTtDQUNiLGtCQUFrQjtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvb3RoZXJzLXJlcG9ydC9sYy1hbmQtYmMtcmVwb3J0L2xjLWFuZC1iYy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdyB7XHJcbiAgdG9wOjI2cHg7XHJcbiAgICBsZWZ0OjI1cHg7XHJcblx0bWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">LC And BC Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summaryWise\">Summary Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detailsWise\">Details Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" [(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"toDateModel\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSource\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"source\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"agentName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusAgentNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!lcAndBcSummaryTable\">LC And\n\t\t\t\t\t\t\t\t\t\t\t\tBC Summary Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!lcAndBcDetailsTable\">LC And BC\n\t\t\t\t\t\t\t\t\t\t\t\tDetailed Report</h6>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!lcAndBcSummaryTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"lcbcSummaryRptId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLCBCSummaryReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLCBCSummaryReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let lcbcSummaryReportData of lcbcSummaryReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcSummaryReportData.agentId }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcSummaryReportData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcSummaryReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcSummaryReportData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcSummaryReportData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcSummaryReportData.lcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcSummaryReportData.bcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!lcAndBcDetailsTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"lcbcDetailedRptId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLCBCDetailedReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLCBCDetailedReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let lcbcDetailedReportData of lcbcDetailedReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.lcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.bcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lcbcDetailedReportData.agentId }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LcAndBcReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcAndBcReportComponent", function() { return LcAndBcReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
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
















var LcAndBcReportComponent = /** @class */ (function () {
    ///
    function LcAndBcReportComponent(memoLessRpt, router, memoReport, masterReadService, modalService, lrReportService, consigneeService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.lrReportService = lrReportService;
        this.consigneeService = consigneeService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.lcAndBcSummaryTable = true;
        this.lcAndBcDetailsTable = false;
        this.controlMainSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlMainAgent = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.dtTriggerLCBCSummaryReport = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTriggerLCBCDetailedReport = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.summaryTable = true;
        this.detailTable = false;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.showSource = false;
        this.lrDtoSource = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.sourceTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.sourceTA
                : _this.sourceTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.subStations; };
        this.srcList = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        ///
        this.searchLrRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoSourceAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoSourceAddOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.setSource = [];
        this.srcSupAdmin = false;
        this.srcBkgAdmin = false;
        //Agent
        this.sourceAgentDto = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.sourceAgentDtoAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.agentTA = [];
        this.focusAgentNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchAgentName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusAgentNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.agentTA
                : _this.agentTA.filter(function (v) { return v.subStation.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterAgentName = function (x) { return x.subStation; };
        this.searchBySummaryLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.superAdminView = false;
        this.showSourceForBkgListLCBCRpt = "Show Bkg Source For LCBC Rpt";
        this.showSourceForSupAdLCBCRpt = "Show Source In LCBC Rpt For SupAdmin";
        this.getAgentMethod = function () {
            _this.showSpinnerForAction = true;
            _this.masterReadService.getSourceListDetails(_this.sourceAgentDto).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.sourceDetailsOptionsGet = response;
                    console.log(_this.sourceDetailsOptionsGet);
                    _this.agentTA = [];
                    _this.sourceAgentDtoAll.subStation = "All";
                    _this.agentTA.push(_this.sourceAgentDtoAll);
                    for (var i = 0; i < _this.sourceDetailsOptionsGet.length; i++) {
                        _this.agentTA.push(_this.sourceDetailsOptionsGet[i]);
                    }
                    $("#agentName").val('All');
                    _this.showSpinnerForAction = false;
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Problem Occurred While getting the Agent details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchBySummaryMethod = function () {
            _this.searchBySummaryMethodDetails();
            _this.showSpinnerForAction = true;
            _this.lrReportService.getLrDetailsLCandBCSummary(_this.searchBySummaryLrdto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#lcbcSummaryRptId").DataTable().destroy();
                _this.lcbcSummaryReportDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lcbcSummaryReportDataList = response;
                    console.log(_this.lcbcSummaryReportDataList);
                }
                _this.dtTriggerLCBCSummaryReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Problem Occurred While getting the Summary details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByDetailedMethod = function () {
            _this.searchByDetailedMethodDetails();
            _this.showSpinnerForAction = true;
            _this.lrReportService.getLrDetailsLCandBCDetails(_this.searchByDetailedLrdto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#lcbcDetailedRptId").DataTable().destroy();
                _this.lcbcDetailedReportDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lcbcDetailedReportDataList = response;
                    console.log(_this.lcbcDetailedReportDataList);
                }
                _this.dtTriggerLCBCDetailedReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Problem Occurred While getting the details", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
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
            this.getAgentDetails();
            this.setSource.push(this.userDataDtoReturnSession.mainStation);
            ///Rights for show Show Source List
            //            if ( this.showSourceForBkgListLCBCRpt == "Show Bkg Source For LCBC Rpt" ) {
            //                this.showSource = true;
            //this.getSourceList();
            //} 
            ///Rights for show Show Source List For SubAdmin
            //            if ( this.showSourceForSupAdLCBCRpt == "Show Source In LCBC Rpt For SupAdmin" ) {
            //                this.showSource = true;
            //this.getSourceDetails();
            //} 
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "LcBcRpt SrcSupAdmin") {
                        this.showSource = true;
                        this.srcSupAdmin = true;
                        this.getSourceDetails();
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "LcBcRpt SrcBkgAdmin") {
                        this.showSource = true;
                        this.getSourceList();
                        this.srcBkgAdmin = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "LcBcRpt ShowAll") {
                        this.superAdminView = true;
                    }
                }
            }
        }
    }
    LcAndBcReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LcAndBcReportComponent.prototype.getSourceList = function () {
        //   this.srcList="";
        this.srcLists = this.userDataDtoReturnSession.stationList;
        this.srcList.subStations = this.srcLists;
        // this.sourceDetailsListGet.subStation = this.srcLists;
        console.log(this.srcLists);
        console.log(this.srcList.subStations);
        this.sourceTA = [];
        this.lrDtoSourceAllOption.subStations = 'All';
        this.sourceTA.push(this.lrDtoSourceAllOption);
        for (var i = 0; i < this.srcList.subStations.length; i++) {
            this.lrDtoSourceAddOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
            this.lrDtoSourceAddOption.subStations = this.srcList.subStations[i];
            this.sourceTA.push(this.lrDtoSourceAddOption);
        }
        window.setTimeout(function () {
            $("#source").val('All');
        }, 200);
    };
    LcAndBcReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                if (dtInstance.table().node().id == "lcbcSummaryRptId") {
                    console.log("a");
                    _this.lcbcSummaryReportDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerLCBCSummaryReport.next();
                }
                else if (dtInstance.table().node().id == "lcbcDetailedRptId") {
                    console.log("b");
                    _this.lcbcDetailedReportDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerLCBCDetailedReport.next();
                }
            });
        });
    };
    LcAndBcReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    LcAndBcReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var subSource = null;
        if (this.srcSupAdmin == true || this.srcBkgAdmin == true) {
            subSource = null;
        }
        else {
            subSource = "Source : " + this.userDataDtoReturnSession.office;
        }
        this.dtOptionsLCBCSummaryReport = {
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
                        var returnVal = null;
                        if (subSource != null) {
                            returnVal = "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                "<u>LC And BC Report Summary</u><br><br>" +
                                //"</td>"+
                                //"<td style='word-wrap: break-word;'>"+
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#toDate").val()).format('DD-MM-YYYY') + "<br><br>" + subSource + " Agent Name : " + $("#agentName").val() +
                                "</td>" +
                                "</tr></table><br>";
                        }
                        else {
                            returnVal = "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                "<u>LC And BC Report Summary</u><br><br>" +
                                //"</td>"+
                                //"<td style='word-wrap: break-word;'>"+
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#toDate").val()).format('DD-MM-YYYY') + "<br><br>Source : " + $("#source").val() + " Agent Name : " + $("#agentName").val() +
                                "</td>" +
                                "</tr></table><br>";
                        }
                        return returnVal;
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;width: 50%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
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
                        if (subSource != null) {
                            returnSummaryExcel = "LC And BC Report Summary" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#toDate").val()).format('DD-MM-YYYY') + " " + subSource + " Agent Name : " + $("#agentName").val();
                        }
                        else {
                            returnSummaryExcel = "LC And BC Report Summary" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#toDate").val()).format('DD-MM-YYYY') + "  Source : " + $("#source").val() + " Agent Name : " + $("#agentName").val();
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
                var totalLrs = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var articles = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWgt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var lc = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var bc = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(totalLrs);
                $(api.column(2).footer()).html(articles);
                $(api.column(3).footer()).html(actualWgt);
                $(api.column(4).footer()).html(chargedWgt);
                $(api.column(5).footer()).html(lc);
                $(api.column(6).footer()).html(bc);
            }
        },
            this.dtOptionsLCBCDetailedReport = {
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
                            var returnVal = null;
                            if (subSource != null) {
                                returnVal = "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                    "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                    "<u>LC And BC Report Detailed</u><br><br>" +
                                    //"</td>"+
                                    //"<td style='word-wrap: break-word;'>"+
                                    "From Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#toDate").val()).format('DD-MM-YYYY') + "<br><br>" + subSource + " Agent Name : " + $("#agentName").val() +
                                    "</td>" +
                                    "</tr></table><br>";
                            }
                            else {
                                returnVal = "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                    "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                    "<u>LC And BC Report Detailed</u><br><br>" +
                                    //"</td>"+
                                    //"<td style='word-wrap: break-word;'>"+
                                    "From Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#toDate").val()).format('DD-MM-YYYY') + "<br><br>Source : " + $("#source").val() + " Agent Name : " + $("#agentName").val() +
                                    "</td>" +
                                    "</tr></table><br>";
                            }
                            return returnVal;
                        },
                        title: function () {
                            return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;width: 50%;'>" +
                                "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
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
                            if (subSource != null) {
                                returnSummaryExcel = "LC And BC Report Detailed" +
                                    "From Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#toDate").val()).format('DD-MM-YYYY') + " " + subSource + " Agent Name : " + $("#agentName").val();
                            }
                            else {
                                returnSummaryExcel = "LC And BC Report Detailed" +
                                    "From Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_16__($("#toDate").val()).format('DD-MM-YYYY') + "  Source : " + $("#source").val() + " Agent Name : " + $("#agentName").val();
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
                    var articles = api.column(3).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actualWgt = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chargedWgt = api.column(5).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var lc = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var bc = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html(articles);
                    $(api.column(4).footer()).html(actualWgt);
                    $(api.column(5).footer()).html(chargedWgt);
                    $(api.column(6).footer()).html(lc);
                    $(api.column(7).footer()).html(bc);
                    $(api.column(8).footer()).html();
                }
            };
    };
    LcAndBcReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'summaryWise') {
            this.lcAndBcSummaryTable = true;
            this.lcAndBcDetailsTable = false;
            $("#lcbcSummaryRptId").DataTable().destroy();
            this.lcbcSummaryReportDataList = [];
            $("#lcbcDetailedRptId").DataTable().destroy();
            this.lcbcDetailedReportDataList = [];
            this.dtTriggerLCBCSummaryReport.next();
            this.dtTriggerLCBCDetailedReport.next();
            this.showSource = false;
            if (this.srcSupAdmin == true || this.srcBkgAdmin == true) {
                this.showSource = true;
            }
        }
        else if (viewType === 'detailsWise') {
            this.lcAndBcSummaryTable = false;
            this.lcAndBcDetailsTable = true;
            $("#lcbcSummaryRptId").DataTable().destroy();
            this.lcbcSummaryReportDataList = [];
            $("#lcbcDetailedRptId").DataTable().destroy();
            this.lcbcDetailedReportDataList = [];
            this.dtTriggerLCBCSummaryReport.next();
            this.dtTriggerLCBCDetailedReport.next();
            this.showSource = false;
            if (this.srcSupAdmin == true || this.srcBkgAdmin == true) {
                this.showSource = true;
            }
        }
        else {
            this.lcAndBcSummaryTable = false;
            this.lcAndBcDetailsTable = false;
            $("#lcbcSummaryRptId").DataTable().destroy();
            this.lcbcSummaryReportDataList = [];
            $("#lcbcDetailedRptId").DataTable().destroy();
            this.lcbcDetailedReportDataList = [];
            this.dtTriggerLCBCSummaryReport.next();
            this.dtTriggerLCBCDetailedReport.next();
            this.showSource = false;
            if (this.srcSupAdmin == true || this.srcBkgAdmin == true) {
                this.showSource = true;
            }
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LcAndBcReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    LcAndBcReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLCBCSummaryReport.unsubscribe();
        this.dtTriggerLCBCDetailedReport.unsubscribe();
    };
    LcAndBcReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerLCBCSummaryReport.next();
        this.dtTriggerLCBCDetailedReport.next();
    };
    LcAndBcReportComponent.prototype.getSourceDetailedList = function () {
        this.lrDtoSource.mode = 'Booking';
        this.lrDtoSource.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lrDtoSource);
    };
    LcAndBcReportComponent.prototype.getSourceDetails = function () {
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
                    _this.setSource = [];
                    for (var i = 0; i < _this.lrDtoSourceOptions.length; i++) {
                        _this.setSource.push(_this.lrDtoSourceOptions[i].subStations);
                    }
                    console.log(_this.setSource);
                    $("#source").val('All');
                    _this.srcLists = _this.sourceTA;
                    console.log(_this.srcLists);
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    /// Get Agent Names
    LcAndBcReportComponent.prototype.getAgentDetails = function () {
        this.sourceAgentDto.companyId = this.userDataDtoReturnSession.companyId;
        this.sourceAgentDto.column2 = "Working";
        this.sourceAgentDto.mode = "Sub";
        this.sourceAgentDto.status = "Working";
        this.getAgentMethod();
    };
    LcAndBcReportComponent.prototype.searchMethod = function () {
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedAgentName = $("#destination").val();
        this.selectedSource = $("#source").val();
        this.selectedViewType = $("#viewType").val();
        if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedToDate == null || this.selectedToDate == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Mandatory Field",
                text: "Please select Date",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        else {
            if (this.selectedViewType == 'summaryWise') {
                this.searchBySummaryMethod();
            }
            else if (this.selectedViewType == 'detailsWise') {
                this.searchByDetailedMethod();
            }
        }
    };
    LcAndBcReportComponent.prototype.searchBySummaryMethodDetails = function () {
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedAgentName = $("#agentName").val();
        this.selectedSource = $("#source").val();
        this.selectedViewType = $("#viewType").val();
        this.searchBySummaryLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchBySummaryLrdto.fromDate = this.selectedFromDate;
        this.searchBySummaryLrdto.toDate = this.selectedToDate;
        this.searchBySummaryLrdto.companyId = this.userDataDtoReturnSession.companyId;
        this.searchBySummaryLrdto.agentId = this.selectedAgentName;
        if (this.selectedAgentName != null && this.selectedAgentName != '' && this.selectedAgentName != 'All') {
            this.searchBySummaryLrdto.mode = 'NotAll';
        }
        else {
            this.searchBySummaryLrdto.mode = 'All';
        }
        /*if (this.superAdminView == false) {
        if (this.userDataDtoReturnSession.role == 'Booking Administrator') {
            this.searchByDetailedLrdto.mainstation=this.userDataDtoReturnSession.mainStation;
        } else {
            console.log(this.userDataDtoReturnSession.mainAdminStation);
        this.searchByDetailedLrdto.mainstation=this.userDataDtoReturnSession.mainAdminStation;
        }
    }*/
        this.searchByDetailedLrdto.mainstation = this.userDataDtoReturnSession.mainStation;
        if (this.showSource == true) {
            if (this.selectedSource != null && this.selectedSource != '' && this.selectedSource != 'All') {
                this.setSource = [];
                this.setSource.push(this.selectedSource);
                this.searchBySummaryLrdto.list = this.setSource;
            }
            else {
                if (this.srcBkgAdmin == true) {
                    this.searchBySummaryLrdto.list = this.srcLists; //session
                }
                else if (this.srcSupAdmin == true) {
                    this.setSource = [];
                    for (var i = 0; i < this.lrDtoSourceOptions.length; i++) {
                        this.setSource.push(this.lrDtoSourceOptions[i].subStations);
                    }
                    this.searchBySummaryLrdto.list = this.setSource; // superadmin source
                }
            }
        }
        else {
            this.setSource = [];
            this.setSource.push(this.userDataDtoReturnSession.mainStation);
            this.searchBySummaryLrdto.list = this.setSource; //mainStation
        }
        console.log(this.searchBySummaryLrdto);
    };
    LcAndBcReportComponent.prototype.searchByDetailedMethodDetails = function () {
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedAgentName = $("#agentName").val();
        this.selectedSource = $("#source").val();
        this.selectedViewType = $("#viewType").val();
        this.searchByDetailedLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedLrdto.fromDate = this.selectedFromDate;
        this.searchByDetailedLrdto.toDate = this.selectedToDate;
        this.searchByDetailedLrdto.companyId = this.userDataDtoReturnSession.companyId;
        this.searchByDetailedLrdto.agentId = this.selectedAgentName;
        if (this.selectedAgentName != null && this.selectedAgentName != '' && this.selectedAgentName != 'All') {
            this.searchByDetailedLrdto.mode = 'NotAll';
        }
        else {
            this.searchByDetailedLrdto.mode = 'All';
        }
        /*if (this.superAdminView == false) {
            if (this.userDataDtoReturnSession.role == 'Booking Administrator') {
                this.searchByDetailedLrdto.mainstation=this.userDataDtoReturnSession.mainStation;
            } else {
                console.log(this.userDataDtoReturnSession.mainAdminStation);
            this.searchByDetailedLrdto.mainstation=this.userDataDtoReturnSession.mainAdminStation;
            }
        }*/
        this.searchByDetailedLrdto.mainstation = this.userDataDtoReturnSession.mainStation;
        if (this.showSource == true) {
            if (this.selectedSource != null && this.selectedSource != '' && this.selectedSource != 'All') {
                this.setSource = [];
                this.setSource.push(this.selectedSource);
                this.searchByDetailedLrdto.list = this.setSource;
            }
            else {
                if (this.srcBkgAdmin == true) {
                    this.searchByDetailedLrdto.list = this.srcLists; //session
                }
                else if (this.srcSupAdmin == true) {
                    this.setSource = [];
                    for (var i = 0; i < this.lrDtoSourceOptions.length; i++) {
                        this.setSource.push(this.lrDtoSourceOptions[i].subStations);
                    }
                    this.searchByDetailedLrdto.list = this.setSource; // superadmin source
                }
            }
        }
        else {
            this.setSource = [];
            this.setSource.push(this.userDataDtoReturnSession.mainStation);
            this.searchByDetailedLrdto.list = this.setSource; //mainStation
        }
        console.log(this.searchByDetailedLrdto);
    };
    LcAndBcReportComponent.prototype.clearMethod = function () {
        this.selectedFromDate = '';
        this.selectedToDate = '';
        this.selectedAgentName = '';
        this.selectedSource = '';
        this.selectedViewType = '';
        this.searchBySummaryLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.showSpinnerForAction = false;
        $("#agentName").val('All');
        $("#fromDate").val('');
        $("#toDate").val('');
        this.fromDateModel = null;
        this.toDateModel = null;
        $("#lcbcDetailedRptId").DataTable().destroy();
        this.lcbcDetailedReportDataList = [];
        this.dtTriggerLCBCSummaryReport.next();
        $("#lcbcSummaryRptId").DataTable().destroy();
        this.lcbcSummaryReportDataList = [];
        this.dtTriggerLCBCDetailedReport.next();
        $("#viewType").val('summaryWise');
        this.showSource = false;
        if (this.srcSupAdmin == true || this.srcBkgAdmin == true) {
            this.showSource = true;
            $("#source").val('All');
        }
        this.lcAndBcSummaryTable = true;
        this.lcAndBcDetailsTable = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LcAndBcReportComponent.prototype, "dtElements", void 0);
    LcAndBcReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lc-and-bc-report',
            template: __webpack_require__(/*! ./lc-and-bc-report.component.html */ "./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.html"),
            styles: [__webpack_require__(/*! ./lc-and-bc-report.component.css */ "./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_13__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_15__["LrReportService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_17__["ConsigneeService"]])
    ], LcAndBcReportComponent);
    return LcAndBcReportComponent;
}());



/***/ }),

/***/ "./src/app/report/others-report/loader-performance-report/loader-performance-report.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/report/others-report/loader-performance-report/loader-performance-report.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvbG9hZGVyLXBlcmZvcm1hbmNlLXJlcG9ydC9sb2FkZXItcGVyZm9ybWFuY2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvbG9hZGVyLXBlcmZvcm1hbmNlLXJlcG9ydC9sb2FkZXItcGVyZm9ybWFuY2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/others-report/loader-performance-report/loader-performance-report.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/report/others-report/loader-performance-report/loader-performance-report.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Loader Performance Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"Hireslip Wise\">Hireslip\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Loader Wise\">Loader Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Truck Wise\">Truck Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByHireslipWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hireslipNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, searchBtn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"loaderPerfLrDto.invoiceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" placeholder=\"dd-mm-yyyy\" name=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"dd-mm-yyyy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByTruckWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#truckNumber id=\"truckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Truck Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteTruckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteTruckNumber=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(truckNumberDataListOptions | filterTruckNumber: controlTruckNumber.value) as resultTruckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.truckNumber\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\toption.truckNumber }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultTruckNumber.length\">No result</app-option> </ng-container> </ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByLoaderWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"loaderName\" #loaderName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Loader Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlLoaderName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteLoaderName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteLoaderName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(staffNameDataListOptions | filterStaffName: controlLoaderName.value) as resultLoaderName\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultLoaderName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.staffName\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\toption.staffName }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultLoaderName.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t#searchBtn (click)=\"getLoaderPerformanceDetailsList()\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"clearAll()\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t<table datatable #loaderPerformanceTable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLoaderPerformaceReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLoaderPerformaceReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hireslip No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Loader Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gur Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Kan Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gur Wt-Kan Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let loaderPerformaceReportData of loaderPerformaceReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderPerformaceReportData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderPerformaceReportData.loaderName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderPerformaceReportData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderPerformaceReportData.guranteeWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderPerformaceReportData.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderPerformaceReportData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderPerformaceReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderPerformaceReportData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/others-report/loader-performance-report/loader-performance-report.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/report/others-report/loader-performance-report/loader-performance-report.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LoaderPerformanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderPerformanceReportComponent", function() { return LoaderPerformanceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
//for datepicker ends


//for service starts



//for service ends


//for the select option with filter starts



//for the select option with filter ends
var LoaderPerformanceReportComponent = /** @class */ (function () {
    function LoaderPerformanceReportComponent(reportService, router, masterReadService, datePipe) {
        var _this = this;
        this.reportService = reportService;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        //    onDestroyUnsubscribtionLoaderPerformaceReport: Subscription;
        //for service starts
        //    lrDto: LRDto = new LRDto();
        this.loaderPerfLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.staffDetailsLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.bkgStationsLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_9__["TruckDataDto"]();
        this.isLoggedIn = true;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByHireslipWise = true;
        this.searchByLoaderWise = false;
        this.viewDate = false;
        this.searchByTruckWise = false;
        this.srcRights = "Loader Perform Rpt Src All";
        this.pageTitle = "Loader Performance Report";
        //    companyLogo = '<img src="assets/images/srdLogisticPrintLogo.png">'
        //for datepicker ends
        //for the select option with filter starts
        this.controlLoaderName = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.controlTruckNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.dtTriggerLoaderPerformaceReport = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getLoaderPerformanceDetailsList = function () {
            //        console.log( this.loaderPerfLrDto.companyId );
            _this.gettingDetailsForLoaderPerformance();
            _this.reportService.getLoaderPerformanceService(_this.loaderPerfLrDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.loaderPerformaceReportDataList = response;
                    if (_this.loaderPerformaceReportDataList.remarks == "NA") {
                        _this.loaderPerformaceReportDataList.remarks == "";
                    }
                    _this.dtTriggerLoaderPerformaceReport.next();
                    //                    console.log( this.loaderPerformaceReportDataList[0] );
                }
                //                else {
                //                    swal( {
                //                        title: "Warning",
                //                        text: "No records found for the selected city!",
                //                        icon: "warning",
                //                        closeOnClickOutside: false,
                //                        closeOnEsc: false,
                //                    } );
                //                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Error",
                text: "Server Error While Getting Loader Performance Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getTruckMasterDetailsList = function () {
            //        console.log( this.truckDataDto.companyId + "," + this.truckDataDto.mainStation + "," + this.truckDataDto.status );
            _this.getTruckDetailsForRead();
            _this.masterReadService.getTruck(_this.truckDataDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.truckNumberDataListOptions = response;
                    //                    console.log( this.truckMasterDataList[5] );
                }
                //                else {
                //                    swal( {
                //                        title: "Warning",
                //                        text: "No records found for the selected city!",
                //                        icon: "warning",
                //                        closeOnClickOutside: false,
                //                        closeOnEsc: false,
                //                    } );
                //                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Error",
                text: "Server Error While Getting Truck Number Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getStaffNameDetailsList = function () {
            _this.getStaffDetailsForRead();
            _this.reportService.getStaffDetailsService(_this.staffDetailsLrDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.staffNameDataListOptions = response;
                }
                //                else {
                //                    swal( {
                //                        title: "Warning",
                //                        text: "No records found for the selected city!",
                //                        icon: "warning",
                //                        closeOnClickOutside: false,
                //                        closeOnEsc: false,
                //                    } );
                //                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Error",
                text: "Server Error While Getting Loader Name Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getBookingStationsDetailsList = function () {
            _this.getBookingStationDetailsForRead();
            _this.reportService.getBookingStationsService(_this.bkgStationsLrDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.bookingStationsDataList = response;
                    if (_this.bookingStationsDataList != null) {
                        _this.sourceList = _this.bookingStationsDataList;
                    }
                }
                //                else {
                //                    swal( {
                //                        title: "Warning",
                //                        text: "No records found for the selected city!",
                //                        icon: "warning",
                //                        closeOnClickOutside: false,
                //                        closeOnEsc: false,
                //                    } );
                //                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Error",
                text: "Server Error While Getting Stations Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.logInPage();
            });
            //            sweet alert ends
        }
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.getTruckMasterDetailsList();
            this.getStaffNameDetailsList();
            this.datatable();
            // the below commentted becaue from now we are using from period and to period
            this.todayDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
            //
            if (this.srcRights == "Loader Perform Rpt Src Specific") {
                this.getSourceList();
            }
            else if (this.srcRights == "Loader Perform Rpt Src All") {
                this.getBookingStationsDetailsList();
            }
        }
    }
    LoaderPerformanceReportComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    LoaderPerformanceReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LoaderPerformanceReportComponent.prototype.ngOnInit = function () {
    };
    //    truckNumber(): void {
    //        this.searchButton.nativeElement.focus();
    //    }
    //    (click)="truckNumber()"
    //    loaderName(): void {
    //        this.searchButton.nativeElement.focus();
    //    }
    //    (click)="loaderName()"
    LoaderPerformanceReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLoaderPerformaceReport.unsubscribe();
        //        this.onDestroyUnsubscribtionLoaderPerformaceReport.unsubscribe();
    };
    LoaderPerformanceReportComponent.prototype.datatable = function () {
        this.dtOptionsLoaderPerformaceReport = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Hireslip No',
            //                    data: 'hireslipNo'
            //                },
            //                {
            //                    title: 'Act Wt',
            //                    data: 'actWt'
            //                },
            //                {
            //                    title: 'Gur Wt',
            //                    data: 'gurWt'
            //                },
            //                {
            //                    title: 'Kan Wt',
            //                    data: 'kanWt'
            //                },
            //                {
            //                    title: 'Gur Wt-Kan Wt',
            //                    data: 'gurWtMinusKanWt'
            //                },
            //                {
            //                    title: 'To Pay',
            //                    data: 'toPay'
            //                }, {
            //                    title: 'Remarks',
            //                    data: 'remarks'
            //                }
            //            ],
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
                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: this.changeDataTableTitileForExcel(),
                    messageTop: this.chnageDataTableMessageTopExcel(),
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
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // Remove the formatting to get integer data for summation
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                //                counts ends
                //              column one starts
                var total = api
                    .column(2)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(2).footer()).html(total);
                //              column one ends
                //              column two starts
                var total = api
                    .column(3)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(3).footer()).html(total);
                //              column two ends
                //              column three starts
                var total = api
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(4).footer()).html(total);
                //              column three ends
                //              column four starts
                var total = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(total);
                //              column four ends
                //              column five starts
                var total = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(6).footer()).html(total);
                //              column five ends
            }
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //        this.gettingDataFrmServiceFrLoaderPerformaceReportTable = this.loaderPerformaceRpt.getSummaryData()
        //        this.onDestroyUnsubscribtionLoaderPerformaceReport = this.gettingDataFrmServiceFrLoaderPerformaceReportTable.subscribe( data => {
        //            this.loaderPerformaceReportDataList = data['data'];
        //            this.dtTriggerLoaderPerformaceReport.next();
        //        } );
        //the below code is for the getting data through json ends
    };
    LoaderPerformanceReportComponent.prototype.getDateInfo = function () {
        this.dateWeNeed = '';
        this.selectedSearchBy = $("#searchBy").val();
        //        console.log( "here " + this.selectedSearchBy );
        if (this.selectedSearchBy == 'Hireslip Wise') {
            this.dateWeNeed = '<h6 style="font-weight:bold;font-size:16px;">Date: <span style="font-weight:400;">' + this.todayDate + '</span></h6>';
            //            console.log( "hireslip Wise today " + this.dateWeNeed );
        }
        else if (this.selectedSearchBy == 'Loader Wise' || this.selectedSearchBy == 'Truck Wise') {
            this.dateWeNeed = '<h6 style="font-weight:bold;font-size:16px;">From Period: <span style="font-weight:400;">' + this.selectedFromDatePrint + '</span></h6>'
                + '<h6 style="font-weight:bold;font-size:16px;">To Period: <span style="font-weight:400;">' + this.selectedToDatePrint + '</span></h6>';
            //            console.log( "loader wise from and to " + this.dateWeNeed );
        }
        else {
            this.dateWeNeed = '<h6 style="font-size:16px;">No Date Found</h6>';
        }
        //        console.log( "At last we get ????????? " + this.dateWeNeed );
        return this.dateWeNeed;
    };
    LoaderPerformanceReportComponent.prototype.changeDataTableTitileForPrint = function () {
        this.datasToExport = '';
        //        console.log( "Error>>>>>> " + this.datasToExport );
        this.datasToExport = this.getDateInfo();
        //        console.log( "full print " + this.getDateInfo() );
        //        if(this.loaderPerfLrDto.invoiceNumber !=null){
        //           var today= '<h6 style="font-weight:bold;">Date: <span style="font-weight:400;">' + this.todayDate + '</span></h6>'
        //           return today;
        //        }else {
        //            var today= '<h6 style="font-weight:bold;">Date: <span style="font-weight:400;">' + this.todayDate + '</span></h6>'
        //            return today;
        //        }
        //        console.log( "final " + this.datasToExport );
        //        return '<table>'
        //            + '<tr style="width:100%">'
        //            + '<td style="width:60%">'
        //            + '<img src="assets/images/srdLogisticPrintLogo.png">'
        //            + '</td>'
        //            + '<td style="width:40%">'
        //            + '<p>' + this.userDataDtoReturnSession.addressId
        //            + '</p>'
        //            + '</td>'
        //            + '</tr>'
        //            + '<tr style="width:100%;text-align:right;">'
        //            + '<td style="width:60%">'
        //            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
        //            + '</td>'
        //            + '<td style="width:40%">'
        //            + this.datasToExport
        //            + '</td>'
        //            + '</tr>'
        //            + '</table>'
        return '<div class="row">'
            + '<div class="col-md-7">'
            + '<img src="assets/images/srdLogisticPrintLogo.png">'
            + '</div>'
            + '<div class="col-md-5">'
            + '<p style="font-size:16px;">' + this.userDataDtoReturnSession.addressId
            + '</p>'
            + '</div>'
            + '</div>'
            + '<div class="row"  style="text-align:right">'
            + '<div class="col-md-8">'
            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
            + '</div>'
            + '<div class="col-md-4">'
            + this.datasToExport
            + '</div>'
            + '</div>';
    };
    //    chnageDataTableMessageTop() {
    //        return '<span>'
    //            + '<div style="text-align:center;">'
    //            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
    //            + '<h6 style="font-weight:bold;">'
    //            + "Date: " + '<span style="font-weight:400;">' + this.todayDate + '</span>'
    //            + '</h6>'
    //            + '</div>'
    //            + '</span>';
    //
    //    }
    LoaderPerformanceReportComponent.prototype.changeDataTableTitileForExcel = function () {
        return "SRDlogo"
            + this.userDataDtoReturnSession.addressId;
    };
    LoaderPerformanceReportComponent.prototype.chnageDataTableMessageTopExcel = function () {
        return +this.pageTitle
            + this.selectedFromDatePrint
            + "                 "
            + this.selectedToDatePrint;
    };
    LoaderPerformanceReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'Hireslip Wise') {
            this.searchByHireslipWise = true;
            this.searchByLoaderWise = false;
            this.viewDate = false;
            this.searchByTruckWise = false;
        }
        else if (searchBy === 'Loader Wise') {
            this.searchByHireslipWise = false;
            this.searchByLoaderWise = true;
            this.viewDate = true;
            this.searchByTruckWise = false;
        }
        else if (searchBy === 'Truck Wise') {
            this.searchByHireslipWise = false;
            this.searchByLoaderWise = false;
            this.viewDate = true;
            this.searchByTruckWise = true;
        }
        else {
            this.searchByHireslipWise = false;
            this.searchByLoaderWise = false;
            this.viewDate = false;
            this.searchByTruckWise = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LoaderPerformanceReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for service starts
    LoaderPerformanceReportComponent.prototype.getSourceList = function () {
        this.sourceList = this.userDataDtoReturnSession.stationList;
    };
    LoaderPerformanceReportComponent.prototype.gettingDetailsForLoaderPerformance = function () {
        this.selectedLoaderName = $("#loaderName").val();
        this.selectedVehicleNumber = $("#truckNumber").val();
        this.selectedSearchBy = $("#searchBy").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedFromDatePrint = this.selectedFromDate;
        this.selectedToDatePrint = this.selectedToDate;
        //        console.log( this.selectedSearchBy + "date From: " + this.selectedFromDate + "to date: " + this.selectedToDate );
        this.loaderPerfLrDto.companyId = this.userDataDtoReturnSession.companyId;
        //        console.log( "You Selected SearchBy>>" + this.selectedSearchBy );
        //        console.log( "You Selected Loader Name>>" + this.selectedLoaderName );
        //        console.log( "You Selected VehicleNumber>>" + this.selectedVehicleNumber );
        //        this.loaderPerfLrDto.list = this.sourceList;
        if (this.selectedSearchBy == "Hireslip Wise") {
            this.loaderPerfLrDto.loaderName = null;
            this.loaderPerfLrDto.fromDate = null;
            this.loaderPerfLrDto.toDate = null;
            this.loaderPerfLrDto.vehicleNumber = null;
        }
        else if (this.selectedSearchBy == "Loader Wise") {
            this.loaderPerfLrDto.invoiceNumber = null;
            this.loaderPerfLrDto.loaderName = this.selectedLoaderName;
            //                        this.loaderPerfLrDto.fromDate = this.datePipe.transform( this.selectedFromDate, 'yyyy-MM-dd' );
            //            this.loaderPerfLrDto.toDate = this.datePipe.transform( this.selectedToDate, 'yyyy-MM-dd' );
            this.loaderPerfLrDto.fromDate = "2019-09-24";
            this.loaderPerfLrDto.toDate = "2019-10-24";
            this.loaderPerfLrDto.vehicleNumber = null;
        }
        else if (this.selectedSearchBy == "Truck Wise") {
            this.loaderPerfLrDto.invoiceNumber = null;
            this.loaderPerfLrDto.loaderName = null;
            this.loaderPerfLrDto.vehicleNumber = this.selectedVehicleNumber;
            //                        this.loaderPerfLrDto.fromDate = "2019-09-24 00:00:00";
            //                        this.loaderPerfLrDto.toDate = "2019-10-24 23:59:59";
            this.loaderPerfLrDto.fromDate = "2016-10-24 00:00:00";
            this.loaderPerfLrDto.toDate = "2019-11-24 23:59:59";
            //            this.loaderPerfLrDto.fromDate = this.selectedFromDate;
            //            this.loaderPerfLrDto.toDate = this.selectedToDate;
        }
        else {
            this.loaderPerfLrDto.loaderName = null;
            this.loaderPerfLrDto.fromDate = null;
            this.loaderPerfLrDto.toDate = null;
            this.loaderPerfLrDto.vehicleNumber = null;
            this.loaderPerfLrDto.invoiceNumber = null;
        }
        this.datatable();
        //        this.selectedFromDate = this.datePipe.transform( this.loaderPerfLrDto.fromDate, "dd-MM-yyyy" );
        //        this.selectedToDate = this.datePipe.transform( this.loaderPerfLrDto.toDate, "dd-MM-yyyy" );
        //        console.log( "From " + this.selectedFromDate + " To " + this.selectedToDate );
    };
    LoaderPerformanceReportComponent.prototype.getTruckDetailsForRead = function () {
        this.truckDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDto.status = "Working";
    };
    LoaderPerformanceReportComponent.prototype.getStaffDetailsForRead = function () {
        this.staffDetailsLrDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    LoaderPerformanceReportComponent.prototype.getBookingStationDetailsForRead = function () {
        this.bkgStationsLrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.bkgStationsLrDto.mode = "All";
    };
    //for service ends
    LoaderPerformanceReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LoaderPerformanceReportComponent.prototype.clearAll = function () {
        //                $( "#loaderName" ).val( '' );
        //        this.controlLoaderName.setValue( '' );
        //        this.refs["#loaderName"].setState( { searchText: '' } );
        //        this.refs["#truckNumber"].setState( { searchText: '' } );
        //        this.loaderPerfLrDto.loaderName = '';
        //        this.loaderPerfLrDto.vehicleNumber = '';
        this.controlLoaderName.reset();
        this.controlTruckNumber.reset();
        this.loaderPerfLrDto.invoiceNumber = '';
        $("#fromDate").val('');
        $("#toDate").val('');
        //        this.loaderPerfLrDto.fromDate = '';
        //        this.loaderPerfLrDto.toDate = '';
        //        this.loaderPerformaceReportDataList = null;
        //        $( "#loaderPerformanceTable" ).DataTable().destroy();
        //        $( "#loaderPerformanceTable" ).remove();
        //        this.dtOptionsLoaderPerformaceReport.reset();
        //        this.total = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchBtn"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoaderPerformanceReportComponent.prototype, "searchButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LoaderPerformanceReportComponent.prototype, "dtElements", void 0);
    LoaderPerformanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader-performance-report',
            template: __webpack_require__(/*! ./loader-performance-report.component.html */ "./src/app/report/others-report/loader-performance-report/loader-performance-report.component.html"),
            styles: [__webpack_require__(/*! ./loader-performance-report.component.css */ "./src/app/report/others-report/loader-performance-report/loader-performance-report.component.css")],
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
    ], LoaderPerformanceReportComponent);
    return LoaderPerformanceReportComponent;
}());



/***/ }),

/***/ "./src/app/report/others-report/monthly-report/monthly-report.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/report/others-report/monthly-report/monthly-report.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvbW9udGhseS1yZXBvcnQvbW9udGhseS1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvb3RoZXJzLXJlcG9ydC9tb250aGx5LXJlcG9ydC9tb250aGx5LXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/report/others-report/monthly-report/monthly-report.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/report/others-report/monthly-report/monthly-report.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Monthly Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"direct\">Direct</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"via\">Via</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agra\">Agra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"financialYear\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Financial Year</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Financial Year</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"one\">2017-2018</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"two\">2018-2019</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"three\">2019-2020</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDirectMonthlyReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDirectMonthlyReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>MONTH</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Trucks</th>\n\t\t\t\t\t\t\t\t\t\t<th>TO PAY FREIGHT</th>\n\t\t\t\t\t\t\t\t\t\t<th>PAID FREIGHT</th>\n\t\t\t\t\t\t\t\t\t\t<th>TOTAL FREIGHT</th>\n\t\t\t\t\t\t\t\t\t\t<th>TOTAL HIRE</th>\n\t\t\t\t\t\t\t\t\t\t<th>ADVANCE</th>\n\t\t\t\t\t\t\t\t\t\t<th>GUR WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>KANTA WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>ACTUAL WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>CHARGED WT</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let directMonthlyReportData of directMonthlyReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.month }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.totTrucks }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.toPayFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.paidFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.totalFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.totalHire }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.gurWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.kantaWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.actualWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ directMonthlyReportData.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<div [hidden]=\"! viaTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionViaMonthlyReport\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerViaMonthlyReport\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>MONTH</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>TO PAY FREIGHT</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>PAID FREIGHT</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>TOTAL FREIGHT</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>ACTUAL WT</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>CHARGED WT</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let viaMonthlyReportData of viaMonthlyReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ viaMonthlyReportData.month }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ viaMonthlyReportData.toPayFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ viaMonthlyReportData.paidFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ viaMonthlyReportData.totalFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ viaMonthlyReportData.actualWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ viaMonthlyReportData.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/others-report/monthly-report/monthly-report.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/report/others-report/monthly-report/monthly-report.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MonthlyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyReportComponent", function() { return MonthlyReportComponent; });
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


var MonthlyReportComponent = /** @class */ (function () {
    function MonthlyReportComponent(monthlyRpt) {
        this.monthlyRpt = monthlyRpt;
        this.loadingIndicator = true;
        this.dtTriggerDirectMonthlyReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerViaMonthlyReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MonthlyReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    MonthlyReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsDirectMonthlyReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Month',
                    data: 'month'
                },
                {
                    title: 'Tot Trucks',
                    data: 'totTrucks'
                },
                {
                    title: 'TO PAY FREIGHT',
                    data: 'toPayFreight'
                },
                {
                    title: 'PAID FREIGHT',
                    data: 'paidFreight'
                },
                {
                    title: 'TOTAL FREIGHT',
                    data: 'totalFreight'
                },
                {
                    title: 'TOTAL HIRE',
                    data: 'totalHire'
                },
                {
                    title: 'ADVANCE',
                    data: 'advance'
                },
                {
                    title: 'GUR WT',
                    data: 'gurWt'
                },
                {
                    title: 'KANTA WT',
                    data: 'kantaWt'
                },
                {
                    title: 'ACTUAL WT',
                    data: 'actualWt'
                },
                {
                    title: 'CHARGED WT',
                    data: 'chargedWt'
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
        this.dtOptionViaMonthlyReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'MONTH',
                    data: 'month'
                },
                {
                    title: 'TO PAY FREIGHT',
                    data: 'toPayFreight'
                },
                {
                    title: 'PAID FREIGHT',
                    data: 'paidFreight'
                },
                {
                    title: 'TOTAL FREIGHT',
                    data: 'totalFreight'
                },
                {
                    title: 'ACTUAL WT',
                    data: 'actualWt'
                },
                {
                    title: 'CHARGED WT',
                    data: 'chargedWt'
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
        this.gettingDataFrmServiceFrDirectMonthlyReportTable = this.monthlyRpt.getSummaryData();
        this.onDestroyUnsubscribtionDirectMonthlyReport = this.gettingDataFrmServiceFrDirectMonthlyReportTable.subscribe(function (data) {
            _this.directMonthlyReportDataList = data['data'];
            _this.dtTriggerDirectMonthlyReport.next();
        });
        this.gettingDataFrmServiceFrViaMonthlyReportTable = this.monthlyRpt.getSummaryData();
        this.onDestroyUnsubscribtionViaMonthlyReport = this.gettingDataFrmServiceFrViaMonthlyReportTable.subscribe(function (data) {
            _this.viaMonthlyReportDataList = data['data'];
            _this.dtTriggerViaMonthlyReport.next();
        });
        //the below code is for the getting data through json ends
    };
    MonthlyReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDirectMonthlyReport.unsubscribe();
        this.dtTriggerViaMonthlyReport.unsubscribe();
        this.onDestroyUnsubscribtionDirectMonthlyReport.unsubscribe();
        this.onDestroyUnsubscribtionViaMonthlyReport.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MonthlyReportComponent.prototype, "dtElements", void 0);
    MonthlyReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monthly-report',
            template: __webpack_require__(/*! ./monthly-report.component.html */ "./src/app/report/others-report/monthly-report/monthly-report.component.html"),
            styles: [__webpack_require__(/*! ./monthly-report.component.css */ "./src/app/report/others-report/monthly-report/monthly-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], MonthlyReportComponent);
    return MonthlyReportComponent;
}());



/***/ }),

/***/ "./src/app/report/others-report/others-report.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/report/others-report/others-report.module.ts ***!
  \**************************************************************/
/*! exports provided: OthersReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersReportModule", function() { return OthersReportModule; });
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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var src_app_report_others_report_others_report_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/others-report/others-report.routing */ "./src/app/report/others-report/others-report.routing.ts");
/* harmony import */ var src_app_report_others_report_lc_and_bc_report_lc_and_bc_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component */ "./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.ts");
/* harmony import */ var src_app_report_others_report_loader_performance_report_loader_performance_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/others-report/loader-performance-report/loader-performance-report.component */ "./src/app/report/others-report/loader-performance-report/loader-performance-report.component.ts");
/* harmony import */ var src_app_report_others_report_monthly_report_monthly_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/others-report/monthly-report/monthly-report.component */ "./src/app/report/others-report/monthly-report/monthly-report.component.ts");
/* harmony import */ var src_app_report_others_report_sales_tax_report_sales_tax_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/report/others-report/sales-tax-report/sales-tax-report.component */ "./src/app/report/others-report/sales-tax-report/sales-tax-report.component.ts");
/* harmony import */ var src_app_report_others_report_driver_rewarded_report_driver_rewarded_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component */ "./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.ts");
/* harmony import */ var src_app_report_others_report_tempo_performance_report_tempo_performance_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/report/others-report/tempo-performance-report/tempo-performance-report.component */ "./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.ts");
/* harmony import */ var src_app_report_others_report_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/report/others-report/vehicle-tracking/vehicle-tracking.component */ "./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.ts");
/* harmony import */ var src_app_report_others_report_cheque_search_report_cheque_search_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/report/others-report/cheque-search-report/cheque-search-report.component */ "./src/app/report/others-report/cheque-search-report/cheque-search-report.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_report_others_report_cheque_details_report_cheque_details_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/report/others-report/cheque-details-report/cheque-details-report.component */ "./src/app/report/others-report/cheque-details-report/cheque-details-report.component.ts");
/* harmony import */ var src_app_report_cashmemo_report_cashmemo_report_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/report/cashmemo-report/cashmemo-report.module */ "./src/app/report/cashmemo-report/cashmemo-report.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends
/* for map */ 












var OthersReportModule = /** @class */ (function () {
    function OthersReportModule() {
    }
    OthersReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_others_report_others_report_routing__WEBPACK_IMPORTED_MODULE_11__["OthersReportRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"], src_app_report_cashmemo_report_cashmemo_report_module__WEBPACK_IMPORTED_MODULE_22__["CashmemoReportModule"]],
            declarations: [
                src_app_report_others_report_lc_and_bc_report_lc_and_bc_report_component__WEBPACK_IMPORTED_MODULE_12__["LcAndBcReportComponent"],
                src_app_report_others_report_loader_performance_report_loader_performance_report_component__WEBPACK_IMPORTED_MODULE_13__["LoaderPerformanceReportComponent"],
                src_app_report_others_report_monthly_report_monthly_report_component__WEBPACK_IMPORTED_MODULE_14__["MonthlyReportComponent"],
                src_app_report_others_report_sales_tax_report_sales_tax_report_component__WEBPACK_IMPORTED_MODULE_15__["SalesTaxReportComponent"],
                src_app_report_others_report_driver_rewarded_report_driver_rewarded_report_component__WEBPACK_IMPORTED_MODULE_16__["DriverRewardedReportComponent"],
                src_app_report_others_report_tempo_performance_report_tempo_performance_report_component__WEBPACK_IMPORTED_MODULE_17__["TempoPerformanceReportComponent"],
                src_app_report_others_report_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_18__["VehicleTrackingComponent"],
                src_app_report_others_report_cheque_search_report_cheque_search_report_component__WEBPACK_IMPORTED_MODULE_19__["ChequeSearchReportComponent"],
                src_app_report_others_report_cheque_details_report_cheque_details_report_component__WEBPACK_IMPORTED_MODULE_21__["ChequeDetailsReportComponent"]
            ]
        })
    ], OthersReportModule);
    return OthersReportModule;
}());



/***/ }),

/***/ "./src/app/report/others-report/others-report.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/report/others-report/others-report.routing.ts ***!
  \***************************************************************/
/*! exports provided: OthersReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersReportRoutes", function() { return OthersReportRoutes; });
/* harmony import */ var src_app_report_others_report_lc_and_bc_report_lc_and_bc_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component */ "./src/app/report/others-report/lc-and-bc-report/lc-and-bc-report.component.ts");
/* harmony import */ var src_app_report_others_report_loader_performance_report_loader_performance_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/others-report/loader-performance-report/loader-performance-report.component */ "./src/app/report/others-report/loader-performance-report/loader-performance-report.component.ts");
/* harmony import */ var src_app_report_others_report_monthly_report_monthly_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/others-report/monthly-report/monthly-report.component */ "./src/app/report/others-report/monthly-report/monthly-report.component.ts");
/* harmony import */ var src_app_report_others_report_sales_tax_report_sales_tax_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/others-report/sales-tax-report/sales-tax-report.component */ "./src/app/report/others-report/sales-tax-report/sales-tax-report.component.ts");
/* harmony import */ var src_app_report_others_report_driver_rewarded_report_driver_rewarded_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component */ "./src/app/report/others-report/driver-rewarded-report/driver-rewarded-report.component.ts");
/* harmony import */ var src_app_report_others_report_tempo_performance_report_tempo_performance_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/report/others-report/tempo-performance-report/tempo-performance-report.component */ "./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.ts");
/* harmony import */ var src_app_report_others_report_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/report/others-report/vehicle-tracking/vehicle-tracking.component */ "./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.ts");
/* harmony import */ var src_app_report_others_report_cheque_search_report_cheque_search_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/report/others-report/cheque-search-report/cheque-search-report.component */ "./src/app/report/others-report/cheque-search-report/cheque-search-report.component.ts");
/* harmony import */ var src_app_report_others_report_cheque_details_report_cheque_details_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/report/others-report/cheque-details-report/cheque-details-report.component */ "./src/app/report/others-report/cheque-details-report/cheque-details-report.component.ts");









var OthersReportRoutes = [
    {
        path: '',
        children: [
            {
                path: 'lcAndBcReport',
                component: src_app_report_others_report_lc_and_bc_report_lc_and_bc_report_component__WEBPACK_IMPORTED_MODULE_0__["LcAndBcReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'loaderPerformanceReport',
                component: src_app_report_others_report_loader_performance_report_loader_performance_report_component__WEBPACK_IMPORTED_MODULE_1__["LoaderPerformanceReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'monthlyReport',
                component: src_app_report_others_report_monthly_report_monthly_report_component__WEBPACK_IMPORTED_MODULE_2__["MonthlyReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'salesTaxReport',
                component: src_app_report_others_report_sales_tax_report_sales_tax_report_component__WEBPACK_IMPORTED_MODULE_3__["SalesTaxReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'driverRewardedReport',
                component: src_app_report_others_report_driver_rewarded_report_driver_rewarded_report_component__WEBPACK_IMPORTED_MODULE_4__["DriverRewardedReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'tempoPerformanceReport',
                component: src_app_report_others_report_tempo_performance_report_tempo_performance_report_component__WEBPACK_IMPORTED_MODULE_5__["TempoPerformanceReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'vehicleTracking',
                component: src_app_report_others_report_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_6__["VehicleTrackingComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'chequeSearchReport',
                component: src_app_report_others_report_cheque_search_report_cheque_search_report_component__WEBPACK_IMPORTED_MODULE_7__["ChequeSearchReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'chequeDetailsReport',
                component: src_app_report_others_report_cheque_details_report_cheque_details_report_component__WEBPACK_IMPORTED_MODULE_8__["ChequeDetailsReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/others-report/sales-tax-report/sales-tax-report.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/report/others-report/sales-tax-report/sales-tax-report.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvc2FsZXMtdGF4LXJlcG9ydC9zYWxlcy10YXgtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvc2FsZXMtdGF4LXJlcG9ydC9zYWxlcy10YXgtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/others-report/sales-tax-report/sales-tax-report.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/report/others-report/sales-tax-report/sales-tax-report.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Sales Tax Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSalesTaxReport\" [dtTrigger]=\"dtTriggerSalesTaxReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>CM#</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Freight</th>\n\t\t\t\t\t\t\t\t\t\t<th>GD</th>\n\t\t\t\t\t\t\t\t\t\t<th>RC</th>\n\t\t\t\t\t\t\t\t\t\t<th>Discount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dem</th>\n\t\t\t\t\t\t\t\t\t\t<th>SC</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t\t\t\t<th>G.Total</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Type</th>\n\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let salesTaxReportData of salesTaxReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.cm }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.consignee }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.freight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.gd }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.rc }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.discount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.dem }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.sc }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.total }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.gTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.memoType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ salesTaxReportData.dd }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/others-report/sales-tax-report/sales-tax-report.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/report/others-report/sales-tax-report/sales-tax-report.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SalesTaxReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesTaxReportComponent", function() { return SalesTaxReportComponent; });
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


var SalesTaxReportComponent = /** @class */ (function () {
    function SalesTaxReportComponent(salesTaxRpt) {
        this.salesTaxRpt = salesTaxRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerSalesTaxReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SalesTaxReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    SalesTaxReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsSalesTaxReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'CM#',
                    data: 'cm'
                },
                {
                    title: 'LR No',
                    data: 'lrNo'
                },
                {
                    title: 'Consignee',
                    data: 'consignee'
                },
                {
                    title: 'Articles',
                    data: 'articles'
                },
                {
                    title: 'Freight',
                    data: 'freight'
                },
                {
                    title: 'GD',
                    data: 'gd'
                },
                {
                    title: 'RC',
                    data: 'rc'
                },
                {
                    title: 'Discount',
                    data: 'discount'
                },
                {
                    title: 'Dem',
                    data: 'dem'
                },
                {
                    title: 'SC',
                    data: 'sc'
                },
                {
                    title: 'Total',
                    data: 'total'
                },
                {
                    title: 'G.Total',
                    data: 'gTotal'
                },
                {
                    title: 'Memo Type',
                    data: 'memoType'
                },
                {
                    title: 'DD',
                    data: 'dd'
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
                //                    extend: 'excel',
                //                    text: '<i class="fas fa-file-excel"> Excel</i>',
                //                    titleAttr: 'Excel',
                //                    exportOptions: {
                //                        columns: ':visible'
                //                    }
                //                },
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
        this.gettingDataFrmServiceFrSalesTaxReportTable = this.salesTaxRpt.getSummaryData();
        this.onDestroyUnsubscribtionSalesTaxReport = this.gettingDataFrmServiceFrSalesTaxReportTable.subscribe(function (data) {
            _this.salesTaxReportDataList = data['data'];
            _this.dtTriggerSalesTaxReport.next();
        });
        //the below code is for the getting data through json ends
    };
    SalesTaxReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSalesTaxReport.unsubscribe();
        this.onDestroyUnsubscribtionSalesTaxReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    SalesTaxReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SalesTaxReportComponent.prototype, "dtElements", void 0);
    SalesTaxReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-tax-report',
            template: __webpack_require__(/*! ./sales-tax-report.component.html */ "./src/app/report/others-report/sales-tax-report/sales-tax-report.component.html"),
            styles: [__webpack_require__(/*! ./sales-tax-report.component.css */ "./src/app/report/others-report/sales-tax-report/sales-tax-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], SalesTaxReportComponent);
    return SalesTaxReportComponent;
}());



/***/ }),

/***/ "./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  padding: 0px 10px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvdGVtcG8tcGVyZm9ybWFuY2UtcmVwb3J0L3RlbXBvLXBlcmZvcm1hbmNlLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvdGVtcG8tcGVyZm9ybWFuY2UtcmVwb3J0L3RlbXBvLXBlcmZvcm1hbmNlLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n\n/* for ipad and ipad pro */\n@media ( min-width : 768px) and (max-width: 1200px) {\n\t.col-md-3 {\n\t\tflex: 0 0 50% !important;\n\t\tmax-width: 100% !important;\n\t}\n}\n</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Tempo Performance Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\" style=\"border-bottom: 1px solid orange;\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"reportDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Report Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"reportDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #reportDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"reportDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"getReportBtn\">Get Report</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTripDetails\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTripDetails\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Tempo No.</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Driver Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Tot Trips</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Tot Lrs</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tripDetailsData of tripDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.tempoNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.driverName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.totTrips }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.totLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.totArt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.actWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"startKm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Km Entry</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hourglass-start\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"Start KM\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"endKm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hourglass-end\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"End KM\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"kmRun\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hourglass\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"KM Run\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"tempoDescription\" name=\"tempoDescription\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#tempoDescription\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"tempoDescriptionMode(tempoDescription.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Description</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"tempAddNew\">Add New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewTempoAddNew\" class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"tempoAddNew\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Add New\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"tempoValue\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"Value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"tempoRemoveBtn\">Remove</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<h6 style=\"text-align: center\" class=\"card-title\">Tempo\n\t\t\t\t\t\t\t\t\t\tSpecific Entries</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"border-top: 1px solid orange;\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"box-body p-t-10\"\n\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid orange;\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the second datatable starts  -->\n\t\t\t\t\t\t\t\t<div [hidden]=\"tempoEntriesTable\">\n\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionTempoEntries\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTempoEntries\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Value</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tempoEntriesData of tempoEntriesDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tempoEntriesData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tempoEntriesData.value }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t the second datatable ends  -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10 p-b-10 \"\n\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"nextBtn\">Next</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"commonDescription\" name=\"commonDescription\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#commonDescription\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"commonDescriptionMode(commonDescription.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Description</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"cmnAddNew\">Add New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewCommonAddNew\" class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commonAddNew\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Add New\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commonValue\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"Value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"commonRemoveBtn\">Remove</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<h6 style=\"text-align: center\" class=\"card-title\">Common\n\t\t\t\t\t\t\t\t\t\tEntries</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"border-top: 1px solid orange;\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"box-body p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"p-t-10\" [hidden]=\"commonEntriesTable\">\n\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionCommonEntries\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommonEntries\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Value</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let commonEntriesData of commonEntriesDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commonEntriesData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commonEntriesData.value }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable ends  -->\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 p-t-10 p-b-10 \" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"updateBtn\">Update</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TempoPerformanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempoPerformanceReportComponent", function() { return TempoPerformanceReportComponent; });
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


var TempoPerformanceReportComponent = /** @class */ (function () {
    //firstDtOptions: DataTables.Settings = {};
    //secondDtOptions: DataTables.Settings = {};
    function TempoPerformanceReportComponent(tempoPerformanceRpt) {
        this.tempoPerformanceRpt = tempoPerformanceRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewTempoAddNew = false;
        this.viewCommonAddNew = false;
        //supList: SupplierModel[] = [];
        //
        this.dtTriggerTripDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerTempoEntries = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerCommonEntries = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TempoPerformanceReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TempoPerformanceReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        //first datatable starts 
        this.dtOptionsTripDetails = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Tempo No.',
                    data: 'tempoNo'
                },
                {
                    title: 'Driver Name',
                    data: 'driverName'
                },
                {
                    title: 'Tot Trips',
                    data: 'totTrips'
                },
                {
                    title: 'Tot Lrs',
                    data: 'totLrs'
                },
                {
                    title: 'Tot Art',
                    data: 'totArt'
                },
                {
                    title: 'Act Wgt',
                    data: 'actWgt'
                },
            ],
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
        },
            //first datatable ends
            //second datatable starts 
            this.dtOptionTempoEntries = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Description',
                        data: 'description'
                    },
                    {
                        title: 'Value',
                        data: 'value'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
                //                    },
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //                    }
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
                "scrollY": 120,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //second datatable ends
            //third datatable starts 
            this.dtOptionCommonEntries = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Description',
                        data: 'description'
                    },
                    {
                        title: 'Value',
                        data: 'value'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
                //                    },
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //                    }
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
                "scrollY": 120,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            };
        //third datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        this.gettingDataFrmServiceFrTripDetailsTable = this.tempoPerformanceRpt.getSummaryData();
        this.onDestroyUnsubscribtionTripDetails = this.gettingDataFrmServiceFrTripDetailsTable.subscribe(function (data) {
            _this.tripDetailsDataList = data['data'];
            _this.dtTriggerTripDetails.next();
        });
        //first service ends
        //second service starts 
        this.gettingDataFrmServiceFrTempoEntriesTable = this.tempoPerformanceRpt.getSummaryData();
        this.onDestroyUnsubscribtionTempoEntries = this.gettingDataFrmServiceFrTempoEntriesTable.subscribe(function (data) {
            _this.tempoEntriesDataList = data['data'];
            _this.dtTriggerTempoEntries.next();
        });
        //second service ends
        //third service starts  
        this.gettingDataFrmServiceFrCommonEntriesTable = this.tempoPerformanceRpt.getSummaryData();
        this.onDestroyUnsubscribtionCommonEntries = this.gettingDataFrmServiceFrCommonEntriesTable.subscribe(function (data) {
            _this.commonEntriesDataList = data['data'];
            _this.dtTriggerCommonEntries.next();
        });
        //third service ends
        //the below code is for the getting data through json ends
    };
    TempoPerformanceReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTripDetails.unsubscribe();
        this.dtTriggerTempoEntries.unsubscribe();
        this.dtTriggerCommonEntries.unsubscribe();
        this.onDestroyUnsubscribtionTripDetails.unsubscribe();
        this.onDestroyUnsubscribtionTempoEntries.unsubscribe();
        this.onDestroyUnsubscribtionCommonEntries.unsubscribe();
    };
    TempoPerformanceReportComponent.prototype.tempoDescriptionMode = function (tempoDescription) {
        if (tempoDescription === 'tempAddNew') {
            this.viewTempoAddNew = true;
        }
        else {
            this.viewTempoAddNew = false;
        }
    };
    TempoPerformanceReportComponent.prototype.commonDescriptionMode = function (commonDescription) {
        if (commonDescription === 'cmnAddNew') {
            this.viewCommonAddNew = true;
        }
        else {
            this.viewCommonAddNew = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    TempoPerformanceReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TempoPerformanceReportComponent.prototype, "dtElements", void 0);
    TempoPerformanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tempo-performance-report',
            template: __webpack_require__(/*! ./tempo-performance-report.component.html */ "./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.html"),
            styles: [__webpack_require__(/*! ./tempo-performance-report.component.css */ "./src/app/report/others-report/tempo-performance-report/tempo-performance-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], TempoPerformanceReportComponent);
    return TempoPerformanceReportComponent;
}());



/***/ }),

/***/ "./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n\tmargin-bottom: 10px;\n\tmargin-top: 10pX;\n}\n\n/* for map starts */\n\n.sebm-google-map-container {\n\twidth: 100%;\n\theight: 500px;\n\tdisplay: flex;\n}\n\n/* for Map ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L290aGVycy1yZXBvcnQvdmVoaWNsZS10cmFja2luZy92ZWhpY2xlLXRyYWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCOztBQUVELG9CQUFvQjs7QUFDcEI7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGNBQWM7Q0FDZDs7QUFFRCxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvb3RoZXJzLXJlcG9ydC92ZWhpY2xlLXRyYWNraW5nL3ZlaGljbGUtdHJhY2tpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0bWFyZ2luLXRvcDogMTBwWDtcbn1cblxuLyogZm9yIG1hcCBzdGFydHMgKi9cbi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNTAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIGZvciBNYXAgZW5kcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Vehicle Tracking</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Track By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"trackBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"trackBy\" #trackBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"trackByMode(trackBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select track By</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"lrNumber\">LR Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"invoiceNumber\">Invoice Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"deviceId\">Device Id</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"trackByLrNumber\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lrNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>LR Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"trackByInvoiceNumber\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"invoiceNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"trackByDeviceId\" class=\"col-sm-12 col-md-3\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"deviceId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Device Id</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Device To Track\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"control\" [appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(deviceIdOptions | filter: control.value) as resultDeviceId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDeviceId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDeviceId.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"trackYourConsignmentOrDeviceBtn\">Track Your\n\t\t\t\t\t\t\t\t\t\t\t\t\tConsignment / Device</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 vl p-t-10\">\n\t\t\t\t\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" #map1></agm-map>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VehicleTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTrackingComponent", function() { return VehicleTrackingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//for the select option with filter starts

//for the select option with filter ends
var VehicleTrackingComponent = /** @class */ (function () {
    //for map ends
    function VehicleTrackingComponent() {
        this.loadingIndicator = true;
        //hide and show starts
        this.trackByLrNumber = false;
        this.trackByInvoiceNumber = false;
        this.trackByDeviceId = false;
        //hide and show ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.deviceIdOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: '26682' },
            { id: 3, label: '26685' },
            { id: 4, label: '26737' }
        ];
        //lat = -34.397;
        //lng = 150.644;
        this.lat = 20.5937;
        this.lng = 78.9629;
        this.latA = -34.754764;
        this.lngA = 149.736246;
        this.zoom = 6;
        this.styles = [
            {
                featureType: 'all',
                stylers: [
                    {
                        saturation: -80
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        hue: '#00ffee'
                    },
                    {
                        saturation: 50
                    }
                ]
            },
            {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            }
        ];
    }
    VehicleTrackingComponent.prototype.ngOnInit = function () {
    };
    VehicleTrackingComponent.prototype.ngOnDestroy = function () {
    };
    //hide and show starts
    VehicleTrackingComponent.prototype.trackByMode = function (trackBy) {
        if (trackBy === 'lrNumber') {
            this.trackByLrNumber = true;
            this.trackByInvoiceNumber = false;
            this.trackByDeviceId = false;
        }
        else if (trackBy === 'invoiceNumber') {
            this.trackByLrNumber = false;
            this.trackByInvoiceNumber = true;
            this.trackByDeviceId = false;
        }
        else if (trackBy === 'deviceId') {
            this.trackByLrNumber = false;
            this.trackByInvoiceNumber = false;
            this.trackByDeviceId = true;
        }
        else {
            this.trackByLrNumber = false;
            this.trackByInvoiceNumber = false;
            this.trackByDeviceId = false;
        }
    };
    //hide and show ends
    //for the select option with filter starts
    VehicleTrackingComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map1'),
        __metadata("design:type", Object)
    ], VehicleTrackingComponent.prototype, "map1", void 0);
    VehicleTrackingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-tracking',
            template: __webpack_require__(/*! ./vehicle-tracking.component.html */ "./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-tracking.component.css */ "./src/app/report/others-report/vehicle-tracking/vehicle-tracking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VehicleTrackingComponent);
    return VehicleTrackingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-others-report-others-report-module.js.map