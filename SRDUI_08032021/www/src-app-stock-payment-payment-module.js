(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-stock-payment-payment-module"],{

/***/ "./src/app/stock/payment/hireslip-advance/hireslip-advance.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/stock/payment/hireslip-advance/hireslip-advance.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p_custom {\n\tpadding: 1px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svcGF5bWVudC9oaXJlc2xpcC1hZHZhbmNlL2hpcmVzbGlwLWFkdmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3BheW1lbnQvaGlyZXNsaXAtYWR2YW5jZS9oaXJlc2xpcC1hZHZhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucF9jdXN0b20ge1xuXHRwYWRkaW5nOiAxcHggNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/stock/payment/hireslip-advance/hireslip-advance.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/stock/payment/hireslip-advance/hireslip-advance.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Hireslip Advance</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hireslipNumber\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"p_custom btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"getBtn\">Get Details</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<hr style=\"margin: 0px;\">\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Trip Details</h6>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Date</label> <input id=\"invoiceDate\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"invoiceDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t#invoiceDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"invoiceDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Driver Details</h6>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"vehicleNumber\">\n\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"supplierName\">\n\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"driverName\">\n\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mobileNumber\">\n\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"licenseNumber\">\n\t\t\t\t\t\t\t\t\t\t<label>License Number </label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Time Details</h6>\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label> <input id=\"departureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"departureDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t#departureDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"departureDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"departureTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Departure Time\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(departureTimeOptions | filter: control.value) as resultDepartureTime\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDepartureTime.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scheduledDate\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"scheduledDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t#scheduledDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"scheduledDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Scheduled Time\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(scheduledTimeOptions | filter: control.value) as resultScheduledTime\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultScheduledTime.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"arrivalDate\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"arrivalDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t#arrivalDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"arrivalDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"arrivalTime \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Time</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<!-- </div>style=\"background-color:#f2f9fb;\"> -->\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Billing Detail</h6>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hireAmount\">\n\t\t\t\t\t\t\t\t\t\t<label>Hire Amount</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"advance\">\n\t\t\t\t\t\t\t\t\t\t<label>Advance</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"balance\">\n\t\t\t\t\t\t\t\t\t\t<label>Balance</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"payableAt\">\n\t\t\t\t\t\t\t\t\t\t<label>Payable At</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"editBtn\">Edit</button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"savenprintBtn\">Save\n\t\t\t\t\t\t& Print</button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"clearBtn\">Clear</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/stock/payment/hireslip-advance/hireslip-advance.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/stock/payment/hireslip-advance/hireslip-advance.component.ts ***!
  \******************************************************************************/
/*! exports provided: HireslipAdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipAdvanceComponent", function() { return HireslipAdvanceComponent; });
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends
//for the select option with filter starts

//for the select option with filter ends
var HireslipAdvanceComponent = /** @class */ (function () {
    //for the select option with filter ends
    function HireslipAdvanceComponent() {
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.departureTimeOptions = [
            { id: 1, label: '00:00' },
            { id: 2, label: '00:15' },
            { id: 3, label: '00:30' },
            { id: 4, label: '00:45' },
            { id: 5, label: '01:00' },
            { id: 6, label: '01:15' }
        ];
        this.scheduledTimeOptions = [
            { id: 1, label: '00:00' },
            { id: 2, label: '00:15' },
            { id: 3, label: '00:30' },
            { id: 4, label: '00:45' },
            { id: 5, label: '01:00' },
            { id: 6, label: '01:15' }
        ];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    HireslipAdvanceComponent.prototype.ngOnInit = function () {
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    HireslipAdvanceComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    HireslipAdvanceComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    HireslipAdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hireslip-advance',
            template: __webpack_require__(/*! ./hireslip-advance.component.html */ "./src/app/stock/payment/hireslip-advance/hireslip-advance.component.html"),
            styles: [__webpack_require__(/*! ./hireslip-advance.component.css */ "./src/app/stock/payment/hireslip-advance/hireslip-advance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HireslipAdvanceComponent);
    return HireslipAdvanceComponent;
}());



/***/ }),

/***/ "./src/app/stock/payment/hireslip-balance/hireslip-balance.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/stock/payment/hireslip-balance/hireslip-balance.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n@media print {\r\n\tbody, html * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#showHireBlnRpt, #showHireBlnRpt * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#printVoucher {\r\n\t\tposition: absolute;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svcGF5bWVudC9oaXJlc2xpcC1iYWxhbmNlL2hpcmVzbGlwLWJhbGFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsT0FBTztLQUNKO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdG9jay9wYXltZW50L2hpcmVzbGlwLWJhbGFuY2UvaGlyZXNsaXAtYmFsYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdHRvcDogMjZweDtcclxuICAgIGxlZnQ6IDE4OHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdGJvZHksIGh0bWwgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNzaG93SGlyZUJsblJwdCwgI3Nob3dIaXJlQmxuUnB0ICoge1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHQjcHJpbnRWb3VjaGVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stock/payment/hireslip-balance/hireslip-balance.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/stock/payment/hireslip-balance/hireslip-balance.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n\n<body>\n\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\" id=\"showHireBlnRpt\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Hireslip Balance</h6>\n\t\t\t\t</div>\n\t\t\t\t<hr style=\"margin: 0px;\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!viewAlreadyReward\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm_efftect\" id=\"isAlreadyRewardedHeadingId\">\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Trip Details</h6>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Scan Code</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"scanCode\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"getScanCodeFieldsDetails($event,hireslipBalancePopUpTemplate);\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"hireslipNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyHireslipNo\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Date</label> <input id=\"invoiceDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"invoiceDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"invoiceDatesModal\" #invoiceDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [readonly]=\"isReadonlyInvoiceDate\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"invoiceDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"source\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlySource\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"destination\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDestination\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Driver Details</h6>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"vehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyVehicleNumber\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"supplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlySupplierName\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDriverName\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"mobileNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyMobileNumber\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>License Number </label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"licenseNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyLicenseNumber\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Time Details</h6>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label> <input id=\"departureDates\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"departureDates\"\n\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker [(ngModel)]=\"departureDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t#departureDates=\"ngbDatepicker\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDepartureDate\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"departureDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" id=\"departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Departure Time\" [formControl]=\"controlDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDepartureTime=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(departureTimeOptions | filter: controlDepartureTime.value) as resultDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultDepartureTime.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"time\" class=\"form-control \" id=\"departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"scheduledDates\" placeholder=\"yyyy-mm-dd\" name=\"scheduledDates\"\n\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker [(ngModel)]=\"scheduledDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t#scheduledDates=\"ngbDatepicker\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyScheduledDate\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"scheduledDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Time</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"time\" class=\"form-control \" id=\"scheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Time</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" id=\"scheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Scheduled Time\" [formControl]=\"controlScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteScheduledTime=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(scheduledTimeOptions | filter: controlScheduledTime.value) as resultScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultScheduledTime.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"arrivalDates\" name=\"arrivalDates\"\n\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #arrivalDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"arrivalDatesModal\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyArrivalDate\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"arrivalDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Time</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"time\" class=\"form-control \" id=\"arrivalTime\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyArrivalTime\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<!-- </div>style=\"background-color:#f2f9fb;\"> -->\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Billing Detail</h6>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Time Taken To Reached</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"timeTakenToReached\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyTimeTakenToReached\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Hire Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"hireAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyHireAmount\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Advance</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"advance\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyAdvanceAmount\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Deduction</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"deduction\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDeductionAmount\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Balance</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"balance\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyBalanceAmount\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Payable At</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"payableAt\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyPayableAt\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Goods\n\t\t\t\t\t\t\t\tShort & Extra Details</h6>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<div class=\"row\"> -->\n\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t<table datatable class=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHireslipBalance\" [dtTrigger]=\"dtTriggerHireslipBalance\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Extra</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Open</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Short</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Wet</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let hireslipBalanceData of hireslipBalanceDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipBalanceData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipBalanceData.art }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipBalanceData.extra }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipBalanceData.open }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipBalanceData.short }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipBalanceData.wet }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipBalanceData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tid=\"deductionBtn\">Deduction</button> -->\n\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Deduction</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Deduction Details</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Less Late Arrival</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lessLateArrival\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyLessLateArrival\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"lessLateArrivalFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"lessLateArrivalBlur($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Less Unload Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"lessUnloadHamali\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlylessUnloadHamali\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"lessUnloadHamaliFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"lessUnloadHamaliBlur($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Less Munishiana</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"lessMunishiana\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyLessMunishiana\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"lessMunishianaFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"lessMunishianaBlur($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Bank Details</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payment Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"paymentMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"paymentMode\" #paymentMode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"paymentModeMode(paymentMode.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"select payment\">Select Payment Mode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"cash\">Cash</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"cheque\">Cheque/PDC</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"neft\">NEFT/IMPS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByChequeNumber\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"chequeNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyChequeNumber\"\t[(ngModel)]='chequeNumber'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByChequeDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Date</label> <input id=\"chequeDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"chequeDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='chequeDatesModal' #chequeDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [readonly]=\"isReadonlyChequeDates\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"chequeDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByConsigneeBankName\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #bankName class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid='bankName' placeholder=\"Select Bank\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"bankNameDropDownListner($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='modelBankName'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"bankNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusBankNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyBankName\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--<div *ngIf=\"viewNewBankNameField\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"newBankNameId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#newBankName aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByReferenceNumber\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Reference Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"referenceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [(ngModel)]='ngModalRefferenceNumber'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyRefference\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<!--\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"deductionBtn\">Deduction\n\t\t\t\t\t\t\t\t\t</button>-->\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"confirmPaymentBtn\"\n\t\t\t\t\t\t\t\t\t\t[hidden]=\"!viewConfirmPaymentBtn\" (click)=\"confirmPaymentClickBtn();\">Confirm\n\t\t\t\t\t\t\t\t\t\tPayment</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"printBtn\" [hidden]=\"!viewPrintBtn\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"printClickBtn();\">Print</button>\n\t\t\t\t\t\t\t\t\t<!--<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"okBtn\">OK</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\">Clear</button>-->\n\t\t\t\t\t\t\t\t\t<!--<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"cancelBtn\">Cancel</button>-->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Row -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--POP UP START HERE-->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #hireslipBalancePopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h5>Fileupload :</h5>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pan</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"panFileUpload\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onFileChangedPan($event)\" #fileInputPan />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10 mr-auto\" id=\"uploadPopUpBtn\"\n\t\t\t\t\t\t\t(click)=\"popupUploadClickBtn();\">Upload</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10 mr-auto\" id=\"cancelBtn\"\n\t\t\t\t\t\t\t(click)=\"popupCancelClickBtn();\">Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--POP UP END HERE-->\n\t<div *ngIf=\"viewVoucher \" onafterprint=\"afterPrint()\" id=\"printVoucher\">\n\t\t<app-lorry-hire-balance-rpt-print></app-lorry-hire-balance-rpt-print>\n\t</div>\n</body>"

/***/ }),

/***/ "./src/app/stock/payment/hireslip-balance/hireslip-balance.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/stock/payment/hireslip-balance/hireslip-balance.component.ts ***!
  \******************************************************************************/
/*! exports provided: HireslipBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipBalanceComponent", function() { return HireslipBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
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















//for the select option with filter ends
var HireslipBalanceComponent = /** @class */ (function () {
    function HireslipBalanceComponent(masterService, masterReadService, http, router, datePipe, modalService, memoService, hireslipService) {
        var _this = this;
        this.masterService = masterService;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.memoService = memoService;
        this.hireslipService = hireslipService;
        //for datatable ends
        //for hide and show starts
        this.viewByChequeNumber = false;
        this.viewByChequeDate = false;
        this.viewByConsigneeBankName = false;
        this.viewByReferenceNumber = false;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.controlDepartureTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlScheduledTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlConsigneeBankName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.departureTimeOptions = [
            { id: 1, label: '00:00' },
            { id: 2, label: '00:15' },
            { id: 3, label: '00:30' },
            { id: 4, label: '00:45' },
            { id: 5, label: '01:00' },
            { id: 6, label: '01:15' }
        ];
        this.scheduledTimeOptions = [
            { id: 1, label: '00:00' },
            { id: 2, label: '00:15' },
            { id: 3, label: '00:30' },
            { id: 4, label: '00:45' },
            { id: 5, label: '01:00' },
            { id: 6, label: '01:15' }
        ];
        this.consigneeBankNameOptions = [
            { id: 1, label: 'Add New Bank' },
            { id: 2, label: 'Union Bank' },
            { id: 3, label: 'ICICI Bank' },
            { id: 4, label: 'HDFC Bank' },
        ];
        this.dtTriggerHireslipBalance = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.srcSupAdmin = false;
        this.srcBkgAdmin = false;
        this.viewConfirmPaymentBtn = false;
        this.viewPrintBtn = false;
        this.viewAlreadyReward = false;
        this.hireSlipDtoScanningCode = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.hireSlipDtoScanningCodeReturn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.hireSlipDtoForTimeDiff = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.hireSlipDtoForPrintAndConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.hireSlipDtoPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.hireSlipDtoForPrint = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.hireSlipDtoForConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.isAllowed = false;
        this.listOfStation = [];
        this.totDed = null;
        this.balanceAmt = null;
        this.enteredScanCodeValue = null;
        this.enteredHireslipNumberValue = null;
        this.invoiceDatesModal = null;
        this.departureDatesModal = null;
        this.scheduledDatesModal = null;
        this.arrivalDatesModal = null;
        this.validateLessLateArrival = null;
        this.validatelessUnloadHamali = null;
        this.validatelessMunishiana = null;
        this.validateHireAmt = null;
        this.validateAdvanceAmt = null;
        this.validateDeductionAmt = null;
        this.enteredHireSlipNumber = null;
        this.enteredDepartureDate = null;
        this.enteredDepartureTime = null;
        this.enteredArrivalDate = null;
        this.enteredArrivalTime = null;
        this.enteredScanCodeNumberPrint = null;
        this.enteredHireSlipNumberPrint = null;
        this.enteredForInvoiceDatePrint = null;
        this.enteredForHireAmountPrint = null;
        this.enteredForBalanceAmountPrint = null;
        this.enteredForAdvanceAmountPrint = null;
        this.enteredForPayableAtPrint = null;
        this.enteredForVehicleNumberPrint = null;
        this.enteredForSupplierNamePrint = null;
        this.enteredForDriverNamePrint = null;
        this.enteredForDeductionAmountPrint = null;
        this.enteredForLessLateArrivalPrint = null;
        this.enteredForLessMunishianaPrint = null;
        this.enteredForLessunloadhamaliPrint = null;
        this.enteredForBankNamePrint = null;
        this.enteredForChequeNumberPrint = null;
        this.enteredForRefferenceNumberPrint = null;
        this.enteredForChequeDatePrint = null;
        this.enteredForLessAmtDeductionPrint = null;
        this.enteredForArrivalDatePrint = null;
        this.enteredForArrivalTimePrint = null;
        this.enteredForTimeTakenToReachedPrint = null;
        this.isReadonlyHireslipNo = false;
        this.isReadonlyInvoiceDate = false;
        this.isReadonlySource = false;
        this.isReadonlyDestination = false;
        this.isReadonlyVehicleNumber = false;
        this.isReadonlySupplierName = false;
        this.isReadonlyDriverName = false;
        this.isReadonlyMobileNumber = false;
        this.isReadonlyLicenseNumber = false;
        this.isReadonlyDepartureDate = false;
        this.isReadonlyDepartureTime = false;
        this.isReadonlyScheduledDate = false;
        this.isReadonlyScheduledTime = false;
        this.isReadonlyArrivalDate = false;
        this.isReadonlyArrivalTime = false;
        this.isReadonlyTimeTakenToReached = false;
        this.isReadonlyHireAmount = false;
        this.isReadonlyAdvanceAmount = false;
        this.isReadonlyDeductionAmount = false;
        this.isReadonlyBalanceAmount = false;
        this.isReadonlyPayableAt = false;
        this.isReadonlyLessLateArrival = false;
        this.isReadonlylessUnloadHamali = false;
        this.isReadonlyLessMunishiana = false;
        //isReadonlyPaymentMode = false;
        this.isReadonlyChequeNumber = false;
        this.isReadonlyChequeDates = false;
        this.isReadonlyBankName = false;
        this.isReadonlyRefference = false;
        this.validateVehicleNoForUpload = null;
        this.isUploaded = false;
        this.hireSlipDtoPanFileUpload = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.viewNewBankNameField = false;
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__["UserDataDto"]();
        this.userDataDtoAddNewBank = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__["UserDataDto"]();
        this.bankNameTA = [];
        this.focusBankNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.bankNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusBankNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.bankNameTA
                : _this.bankNameTA.filter(function (v) { return v.bankName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterBankName = function (x) { return x.bankName; };
        this.viewVoucher = false;
        this.rightsForShowOnlyPrintToSelectRole = "Rights To Show Only Print For Selected Role";
        this.getBankDetailsList = function () {
            _this.getDetailsForBankMasterRead();
            _this.showSpinnerForAction = true;
            _this.masterReadService.getBankMasterDetails(_this.userDataDto).subscribe(function (response) {
                console.log(response);
                if (response.length > 0) {
                    _this.bankNameOptions = [];
                    _this.bankNameTA = [];
                    _this.bankNameOptions = response;
                    _this.userDataDtoAddNewBank = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__["UserDataDto"]();
                    // this.userDataDtoAddNewBank.bankName = "Add New";
                    // this.bankNameTA.push(this.userDataDtoAddNewBank);
                    for (var i = 0; i < _this.bankNameOptions.length; i++) {
                        _this.bankNameTA.push(_this.bankNameOptions[i]);
                    }
                }
                else {
                    _this.bankNameOptions = [];
                    _this.bankNameTA = [];
                }
                _this.showSpinnerForAction = false;
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Getting Bank Name Details", "warning");
            },
                function () { return console.log('done'); };
        };
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            /*if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (let i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                        "HireSlipAdvPay SrcSupAdmin") {
                        this.srcSupAdmin = true;
                    } else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                        "HireSlipAdvPay SrcBkgAdmin") {
                        this.srcBkgAdmin = true;
                    }
                }
            }*/
            this.getBankDetailsList();
        }
    }
    HireslipBalanceComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    HireslipBalanceComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsHireslipBalance = {
            dom: 'Bfrtip',
            buttons: [],
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
            "paging": false,
            "info": false,
        };
    };
    HireslipBalanceComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerHireslipBalance.next();
    };
    HireslipBalanceComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    HireslipBalanceComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerHireslipBalance.unsubscribe();
        //this.onDestroyUnsubscribtionHireslipBalance.unsubscribe();
    };
    HireslipBalanceComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    HireslipBalanceComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    HireslipBalanceComponent.prototype.paymentModeMode = function (paymentMode) {
        if (paymentMode === 'cash') {
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = false;
            this.viewByReferenceNumber = false;
            this.modelBankName = null;
            //$("#newBankNameId").val('');
        }
        else if (paymentMode === 'cheque') {
            this.viewByChequeNumber = true;
            this.viewByChequeDate = true;
            this.viewByConsigneeBankName = true;
            this.viewByReferenceNumber = false;
            this.modelBankName = null;
            //$("#newBankNameId").val('');
        }
        else if (paymentMode === 'neft') {
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = true;
            this.viewByReferenceNumber = true;
            this.modelBankName = null;
            //$("#newBankNameId").val('');
        }
        else {
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = false;
            this.viewByReferenceNumber = false;
            this.modelBankName = null;
            //$("#newBankNameId").val('');
        }
    };
    //for hide and show ends
    HireslipBalanceComponent.prototype.getScanCodeFieldsDetails = function (event, hireslipBalancePopUpTemplate) {
        if (event.charCode == 13) {
            this.scanningProcess(hireslipBalancePopUpTemplate);
        }
    };
    HireslipBalanceComponent.prototype.scanningProcess = function (hireslipBalancePopUpTemplate) {
        var _this = this;
        this.resetReadOnlyFields();
        this.clearFields();
        this.hireSlipDtoScanningCode = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.enteredScanCodeValue = $("#scanCode").val();
        this.enteredHireslipNumberValue = $("#hireslipNumber").val();
        this.hireSlipDtoScanningCode.hireslipnumber = this.enteredHireslipNumberValue;
        this.hireSlipDtoScanningCode.barcodeValue = this.enteredScanCodeValue;
        this.hireSlipDtoScanningCode.mode = "hirebal";
        this.hireSlipDtoScanningCode.branch = this.userDataDtoReturnSession.office;
        this.hireSlipDtoScanningCode.companyid = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        this.hireslipService.getHireSlipDetailsForRewarding(this.hireSlipDtoScanningCode).subscribe(function (response) {
            _this.hireSlipDtoScanningCodeReturn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
            _this.hireSlipDtoScanningCodeReturn = response;
            //console.log(response);
            //console.log(this.hireSlipDtoScanningCodeReturn);
            $("#hireslipNumber").val(response.hireslipnumber);
            if (response.size != null && response.size == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Result Not Found", "No Result Found", "warning");
            }
            else {
                if (response.status == "Scheduled" || response.status == "Transit") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Not Allowed", "" + $("#hireslipNumber").val() + " is in " + response.status + " , payment can be done only after taken into stock.", "warning");
                    _this.clearFields();
                    _this.commonClearFieldFalse();
                }
                else if (((!_this.chkSourceValidation(response.fromstation))) &&
                    ((!(response.branch == response.tostation)) &&
                        (!(_this.userDataDtoReturnSession.office == response.tostation)))) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Not Allowed", "You Are Not Allowed to see the" + response.tostation + " Informations", "");
                    _this.clearFields();
                    _this.commonClearFieldFalse();
                }
                else {
                    _this.clearFields();
                    var deductionAmout = 0;
                    $("#deduction").val(0.0);
                    _this.setValues(response);
                    if (response.invoiceType != null && response.invoiceType == "Main") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                            title: "Pan Document Is Not Uploaded",
                            text: "Do U Want to Upload ",
                            icon: "info",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                            buttons: ["No", "Yes"],
                        }).then(function (yesBtn) {
                            if (yesBtn) {
                                _this.fileUploadPanPopupOpenLink(hireslipBalancePopUpTemplate);
                            }
                        });
                    }
                    _this.getShortExtraDetails();
                    _this.getReachedDuration();
                    if (response.isRewarded != null && response.isRewarded &&
                        response.isLryBalancePaid != null && (!(response.isLryBalancePaid))) {
                        _this.showFieldAlreadyRewardAndConfirmPayment();
                        $("#isAlreadyRewardedHeadingId").text('Already Rewarded');
                        //console.log("1");
                    }
                    else if (response.isLryBalancePaid != null && response.isLryBalancePaid &&
                        response.isRewarded != null && (!(response.isRewarded))) {
                        _this.showFieldAlreadyRewardAndPrint();
                        $("#isAlreadyRewardedHeadingId").text('HireSlip Balance Amount Already Paid');
                        _this.setReadOnlyFields();
                        //console.log("2");
                    }
                    else if (response.isRewarded != null && response.isRewarded &&
                        response.isLryBalancePaid != null && response.isLryBalancePaid) {
                        _this.showFieldAlreadyRewardAndPrint();
                        $("#isAlreadyRewardedHeadingId").text('HireSlip Balance And Reward Amount Already Paid');
                        _this.setReadOnlyFields();
                        _this.getReachedDuration();
                        //console.log("3");
                    }
                    else {
                        _this.viewAlreadyReward = false;
                        _this.viewConfirmPaymentBtn = true;
                        _this.viewPrintBtn = false;
                        //console.log("4");
                    }
                    /*if (!(this.rightsForDeliveryManager == "Rights To Show Delivery Manager") &&
                        (!(this.rightsForBillingManager == "Rights To Show Billing Manager")) &&
                        (!(this.rightsForTransshipmentManager == "Rights To Show Transshipment Manager")) &&
                        (!(this.rightsForAdministrator == "Rights To Show Administrator")) &&
                        (!(this.rightsForBookingAdministrator == "Rights To Show Booking Administrator")) &&
                        (!(this.rightsForBookingManager == "Rights To Show Booking Manager"))) {
                        */
                    /*
                    if (!(this.rightsForShowOnlyPrintToSelectRole == "Rights To Show Only Print For Selected Role")) {
                     */
                    if (!(_this.userDataDtoReturnSession.role == "Delivery Manager") &&
                        (!(_this.userDataDtoReturnSession.role == "Billing Manager")) &&
                        (!(_this.userDataDtoReturnSession.role == "Transshipment Manager")) &&
                        (!(_this.userDataDtoReturnSession.role == "Administrator")) &&
                        (!(_this.userDataDtoReturnSession.role == "Booking Administrator")) &&
                        (!(_this.userDataDtoReturnSession.role == "Booking Manager"))) {
                        //this.viewAlreadyReward = false;
                        _this.viewConfirmPaymentBtn = false;
                        _this.viewPrintBtn = true;
                        _this.setReadOnlyFields();
                    }
                }
            }
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "Problem occur while getting  HireSlipDetailsForRewarding", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    HireslipBalanceComponent.prototype.clearFields = function () {
        $("#hireslipNumber").val('');
        $("#invoiceDates").val('');
        $("#source").val('');
        $("#destination").val('');
        $("#vehicleNumber").val('');
        $("#supplierName").val('');
        $("#driverName").val('');
        $("#mobileNumber").val('');
        $("#licenseNumber").val('');
        $("#departureDates").val('');
        $("#departureTime").val('');
        $("#scheduledDates").val('');
        $("#scheduledTime").val('');
        $("#arrivalDates").val('');
        $("#arrivalTime").val('');
        $("#timeTakenToReached").val('');
        $("#hireAmount").val('');
        $("#advance").val('');
        $("#deduction").val('');
        $("#balance").val('');
        $("#payableAt").val('');
        $("#lessLateArrival").val('');
        $("#lessUnloadHamali").val('');
        $("#lessMunishiana").val('');
        this.modelBankName = null;
        $("#bankName").val('');
        //$("#newBankNameId").val('');
        $("#referenceNumber").val('');
        $("#chequeDates").val('');
        $("#chequeNumber").val('');
        $("#paymentMode").val('select payment');
        this.viewByChequeNumber = false;
        this.viewByChequeDate = false;
        this.viewByConsigneeBankName = false;
        this.viewByReferenceNumber = false;
        this.invoiceDatesModal = null;
        this.departureDatesModal = null;
        this.scheduledDatesModal = null;
        this.arrivalDatesModal = null;
        this.chequeDatesModal = '';
        this.ngModalRefferenceNumber = '';
        this.isReadonlyHireslipNo = false;
        this.isReadonlyInvoiceDate = false;
        this.isReadonlySource = false;
        this.isReadonlyDestination = false;
        this.isReadonlyVehicleNumber = false;
        this.isReadonlySupplierName = false;
        this.isReadonlyDriverName = false;
        this.isReadonlyMobileNumber = false;
        this.isReadonlyLicenseNumber = false;
        this.isReadonlyDepartureDate = false;
        this.isReadonlyDepartureTime = false;
        this.isReadonlyScheduledDate = false;
        this.isReadonlyScheduledTime = false;
        this.isReadonlyArrivalDate = false;
        this.isReadonlyArrivalTime = false;
        this.isReadonlyTimeTakenToReached = false;
        this.isReadonlyHireAmount = false;
        this.isReadonlyAdvanceAmount = false;
        this.isReadonlyDeductionAmount = false;
        this.isReadonlyBalanceAmount = false;
        this.isReadonlyPayableAt = false;
        this.isReadonlyLessLateArrival = false;
        this.isReadonlylessUnloadHamali = false;
        this.isReadonlyLessMunishiana = false;
        //isReadonlyPaymentMode = false;
        this.isReadonlyChequeNumber = false;
        this.isReadonlyChequeDates = false;
        this.isReadonlyBankName = false;
        this.isReadonlyRefference = false;
        //this.viewNewBankNameField = false;
        this.enteredScanCodeNumberPrint = null;
        this.enteredHireSlipNumberPrint = null;
        this.enteredForInvoiceDatePrint = null;
        this.enteredForHireAmountPrint = null;
        this.enteredForBalanceAmountPrint = null;
        this.enteredForAdvanceAmountPrint = null;
        this.enteredForPayableAtPrint = null;
        this.enteredForVehicleNumberPrint = null;
        this.enteredForSupplierNamePrint = null;
        this.enteredForDriverNamePrint = null;
        this.enteredForDeductionAmountPrint = null;
        this.enteredForLessLateArrivalPrint = null;
        this.enteredForLessMunishianaPrint = null;
        this.enteredForLessunloadhamaliPrint = null;
        this.enteredForBankNamePrint = null;
        this.enteredForChequeNumberPrint = null;
        this.enteredForRefferenceNumberPrint = null;
        this.enteredForChequeDatePrint = null;
        this.enteredForLessAmtDeductionPrint = null;
        this.enteredForArrivalDatePrint = null;
        this.enteredForArrivalTimePrint = null;
        this.enteredForTimeTakenToReachedPrint = null;
    };
    HireslipBalanceComponent.prototype.resetReadOnlyFields = function () {
        this.isReadonlyBankName = false;
        this.isReadonlyChequeNumber = false;
        this.isReadonlyRefference = false;
        this.isReadonlyChequeDates = false;
        this.isReadonlyLessLateArrival = false;
        this.isReadonlylessUnloadHamali = false;
        this.isReadonlyLessMunishiana = false;
        //isReadonlyPaymentMode = false; 
    };
    HireslipBalanceComponent.prototype.setReadOnlyFields = function () {
        this.isReadonlyBankName = true;
        this.isReadonlyChequeNumber = true;
        this.isReadonlyRefference = true;
        this.isReadonlyChequeDates = false;
        this.isReadonlyLessLateArrival = true;
        this.isReadonlylessUnloadHamali = true;
        this.isReadonlyLessMunishiana = true;
    };
    HireslipBalanceComponent.prototype.commonClearFieldFalse = function () {
        this.viewAlreadyReward = false;
        this.viewConfirmPaymentBtn = false;
        this.viewPrintBtn = false;
        $("#scanCode").val('');
        $("#scanCode").focus();
    };
    HireslipBalanceComponent.prototype.showFieldAlreadyRewardAndConfirmPayment = function () {
        this.viewAlreadyReward = true;
        this.viewConfirmPaymentBtn = true;
        this.viewPrintBtn = false;
    };
    HireslipBalanceComponent.prototype.showFieldAlreadyRewardAndPrint = function () {
        this.viewAlreadyReward = true;
        this.viewConfirmPaymentBtn = false;
        this.viewPrintBtn = true;
    };
    HireslipBalanceComponent.prototype.chkSourceValidation = function (source) {
        this.isAllowed = false;
        this.listOfStation = [];
        this.listOfStation = this.userDataDtoReturnSession.stationList;
        if (this.listOfStation.length == 0) {
            this.listOfStation = this.userDataDtoReturnSession.mainStation;
        }
        for (var i = 0; i < this.listOfStation.length; i++) {
            if (source == this.listOfStation[i]) {
                this.isAllowed = true;
                break;
            }
        }
        console.log(this.isAllowed);
        return this.isAllowed;
    };
    HireslipBalanceComponent.prototype.setValues = function (responseHireslipDto) {
        console.log(responseHireslipDto);
        $("#hireslipNumber").val(responseHireslipDto.hireslipnumber);
        $("#invoiceDates").val(responseHireslipDto.invoicedate == null ? null : moment__WEBPACK_IMPORTED_MODULE_15__(responseHireslipDto.invoicedate).format("YYYY-MM-DD"));
        $("#source").val(responseHireslipDto.fromstation);
        $("#destination").val(responseHireslipDto.tostation);
        $("#vehicleNumber").val(responseHireslipDto.vehicleNumber);
        $("#supplierName").val(responseHireslipDto.vehiCompName);
        $("#driverName").val(responseHireslipDto.drivername);
        $("#mobileNumber").val(responseHireslipDto.driverMobileNumber);
        $("#licenseNumber").val(responseHireslipDto.driverlicencenumber);
        $("#departureDates").val(responseHireslipDto.departuredate == null ? null : moment__WEBPACK_IMPORTED_MODULE_15__(responseHireslipDto.departuredate).format("YYYY-MM-DD"));
        $("#departureTime").val(responseHireslipDto.departureTime);
        $("#scheduledDates").val(responseHireslipDto.scheduleddate == null ? null : moment__WEBPACK_IMPORTED_MODULE_15__(responseHireslipDto.scheduleddate).format("YYYY-MM-DD"));
        $("#scheduledTime").val(responseHireslipDto.scheduledTime);
        $("#arrivalDates").val(responseHireslipDto.arrivaldate == null ? null : moment__WEBPACK_IMPORTED_MODULE_15__(responseHireslipDto.arrivaldate).format("YYYY-MM-DD"));
        $("#arrivalTime").val(responseHireslipDto.arrivalTime);
        $("#timeTakenToReached").val(responseHireslipDto.column3);
        $("#hireAmount").val(responseHireslipDto.totalhire);
        $("#advance").val(responseHireslipDto.advance);
        if (responseHireslipDto.isLryBalancePaid != null && (!responseHireslipDto.isLryBalancePaid)) {
            this.calDedAmt();
            $("#deduction").val(responseHireslipDto.lesslatearrival == null ? 0.0 : responseHireslipDto.lesslatearrival == undefined ? 0.0 : responseHireslipDto.lesslatearrival);
        }
        else {
            $("#deduction").val(responseHireslipDto.deductionAmt == null ? 0.0 : responseHireslipDto.deductionAmt == undefined ? 0.0 : responseHireslipDto.deductionAmt);
        }
        $("#balance").val(responseHireslipDto.balance);
        $("#payableAt").val(responseHireslipDto.payableat);
        $("#lessLateArrival").val(responseHireslipDto.lesslatearrival == null ? 0.0 : responseHireslipDto.lesslatearrival == undefined ? 0.0 : responseHireslipDto.lesslatearrival);
        $("#lessUnloadHamali").val(responseHireslipDto.lessunloadhamali == null ? 0.0 : responseHireslipDto.lessunloadhamali == undefined ? 0.0 : responseHireslipDto.lessunloadhamali);
        $("#lessMunishiana").val(responseHireslipDto.lessmunishiana == null ? 0.0 : responseHireslipDto.lessmunishiana == undefined ? 0.0 : responseHireslipDto.lessmunishiana);
        if (responseHireslipDto.balPaymentType != null &&
            responseHireslipDto.balPaymentType == "Cash") {
            $("#paymentMode").val('cash');
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = false;
            this.viewByReferenceNumber = false;
        }
        else if (responseHireslipDto.balPaymentType != null &&
            responseHireslipDto.balPaymentType == "Cheque") {
            this.viewByChequeNumber = true;
            this.viewByChequeDate = true;
            this.viewByConsigneeBankName = true;
            this.viewByReferenceNumber = false;
            this.setBankName = responseHireslipDto.bankname;
            $("#paymentMode").val('cheque');
            this.modelBankName = responseHireslipDto.bankname;
            this.chequeNumber = responseHireslipDto.chequeno;
            this.chequeDatesModal = (responseHireslipDto.chequedate == null ? null : moment__WEBPACK_IMPORTED_MODULE_15__(responseHireslipDto.chequedate).format("YYYY-MM-DD"));
            //responseHireslipDto.chequedate;
            console.log(this.modelBankName + "-" + this.chequeNumber + "-" + this.chequeDatesModal);
            $("#bankName").val(this.modelBankName);
            // $( "#bankName" ).val( responseHireslipDto.bankname );
            $("#chequeNumber").val(this.chequeNumber);
            $("#chequeDates").val(this.chequeDatesModal);
            //$( "#bankName" ).val( this.setBankName);
        }
        else if (responseHireslipDto.balPaymentType != null &&
            responseHireslipDto.balPaymentType == "Neft") {
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = true;
            this.viewByReferenceNumber = true;
            $("#paymentMode").val('neft');
            $("#bankName").val(responseHireslipDto.bankname);
            //$("#referenceNumber").val(responseHireslipDto.chequeno);
            this.ngModalRefferenceNumber = responseHireslipDto.chequeno;
            $("#chequeDates").val(responseHireslipDto.chequedate);
        }
        else {
            $("#paymentMode").val('select payment');
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = false;
            this.viewByReferenceNumber = false;
        }
        this.isReadonlyHireslipNo = true;
        this.isReadonlyInvoiceDate = true;
        this.isReadonlySource = true;
        this.isReadonlyDestination = true;
        this.isReadonlyVehicleNumber = true;
        this.isReadonlySupplierName = true;
        this.isReadonlyDriverName = true;
        this.isReadonlyMobileNumber = true;
        this.isReadonlyLicenseNumber = true;
        this.isReadonlyDepartureDate = true;
        this.isReadonlyDepartureTime = true;
        this.isReadonlyScheduledDate = true;
        this.isReadonlyScheduledTime = true;
        this.isReadonlyArrivalDate = true;
        this.isReadonlyArrivalTime = true;
        this.isReadonlyTimeTakenToReached = true;
        this.isReadonlyHireAmount = true;
        this.isReadonlyAdvanceAmount = true;
        this.isReadonlyDeductionAmount = true;
        this.isReadonlyBalanceAmount = true;
        this.isReadonlyPayableAt = true;
    };
    HireslipBalanceComponent.prototype.lessLateArrivalFocus = function (e) {
        if (e.keyCode == 13) {
            $("#lessUnloadHamali").focus();
            this.calDedAmt();
        }
    };
    HireslipBalanceComponent.prototype.lessLateArrivalBlur = function (e) {
        this.calDedAmt();
    };
    HireslipBalanceComponent.prototype.lessUnloadHamaliFocus = function (e) {
        if (e.keyCode == 13) {
            $("#lessMunishiana").focus();
            this.calDedAmt();
        }
    };
    HireslipBalanceComponent.prototype.lessUnloadHamaliBlur = function (e) {
        this.calDedAmt();
    };
    HireslipBalanceComponent.prototype.lessMunishianaFocus = function (e) {
        if (e.keyCode == 13) {
            this.calDedAmt();
        }
    };
    HireslipBalanceComponent.prototype.lessMunishianaBlur = function (e) {
        this.calDedAmt();
    };
    HireslipBalanceComponent.prototype.calDedAmt = function () {
        this.totDed = 0.0;
        this.validateLessLateArrival = ($("#lessLateArrival").val() == null ? 0.0 : $("#lessLateArrival").val());
        this.validatelessUnloadHamali = ($("#lessUnloadHamali").val() == null ? 0.0 : $("#lessUnloadHamali").val());
        this.validatelessMunishiana = ($("#lessMunishiana").val() == null ? 0.0 : $("#lessMunishiana").val());
        this.totDed = +this.validateLessLateArrival + +this.validatelessUnloadHamali + +this.validatelessMunishiana;
        $("#deduction").val(this.totDed);
        //console.log(this.totDed);
        this.balanceAmt = 0.0;
        this.validateHireAmt = ($("#hireAmount").val() == null ? 0.0 : $("#hireAmount").val());
        this.validateAdvanceAmt = ($("#advance").val() == null ? 0.0 : $("#advance").val());
        this.validateDeductionAmt = ($("#deduction").val() == null ? 0.0 : $("#deduction").val());
        this.balanceAmt = ((+(this.validateHireAmt) + -(this.validateAdvanceAmt) + -(this.validateDeductionAmt)));
        $("#balance").val(this.balanceAmt);
    };
    HireslipBalanceComponent.prototype.getReachedDuration = function () {
        this.hireSlipDtoForTimeDiff = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.enteredDepartureDate = $("#departureDates").val();
        this.enteredDepartureTime = $("#departureTime").val();
        this.enteredArrivalDate = $("#arrivalDates").val();
        this.enteredArrivalTime = $("#arrivalTime").val();
        this.enteredHireSlipNumber = $("#hireslipNumber").val();
        this.hireSlipDtoForTimeDiff.departuredate = this.enteredDepartureDate;
        this.hireSlipDtoForTimeDiff.departureTime = this.enteredDepartureTime;
        this.hireSlipDtoForTimeDiff.arrivaldate = this.enteredArrivalDate;
        this.hireSlipDtoForTimeDiff.arrivalTime = this.enteredArrivalTime;
        this.hireSlipDtoForTimeDiff.hireslipnumber = this.enteredHireSlipNumber;
        this.hireSlipDtoForTimeDiff.excludeSunday = false;
        this.hireSlipDtoForTimeDiff.bufferedTimeInHours = this.hireSlipDtoScanningCodeReturn.bufferedTimeInHours;
        this.hireSlipDtoForTimeDiff.column1 = this.hireSlipDtoScanningCodeReturn.column1;
        this.hireSlipDtoForTimeDiff.companyid = this.userDataDtoReturnSession.companyId;
        console.log(this.hireSlipDtoForTimeDiff);
        this.hireslipService.getTimeDifference(this.hireSlipDtoForTimeDiff).subscribe(function (response) {
            //console.log(response);
            $("#timeTakenToReached").val(response.reachedDuration);
        }),
            function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "Problem occur while getting  TimeDifference", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    HireslipBalanceComponent.prototype.getShortExtraDetails = function () {
    };
    HireslipBalanceComponent.prototype.getDismissReason = function (reason) {
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
    HireslipBalanceComponent.prototype.fileUploadPanPopupOpenLink = function (hireslipBalancePopUpTemplate) {
        var _this = this;
        this.modalRefferenceHireslipBalancePopUp = this.modalService.open(hireslipBalancePopUpTemplate, { centered: true, size: "sm" });
        this.modalRefferenceHireslipBalancePopUp.result.then(function (result) {
            _this.modalRefferenceHireslipBalanceClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceHireslipBalanceClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HireslipBalanceComponent.prototype.popupUploadClickBtn = function () {
        this.uploadPanBtnPopUp();
    };
    HireslipBalanceComponent.prototype.popupCancelClickBtn = function () {
        this.modalRefferenceHireslipBalancePopUp.close();
    };
    HireslipBalanceComponent.prototype.onFileChangedPan = function (event) {
        this.selectedPanDetails = event.target.files[0];
    };
    HireslipBalanceComponent.prototype.uploadPanBtnPopUp = function () {
        var _this = this;
        if ($("#panFileUpload").val() != null &&
            $("#panFileUpload").val() != undefined &&
            $("#panFileUpload").val() != "") {
            if ((this.selectedPanDetails.type != null) &&
                (this.selectedPanDetails.type == "image/jpeg" ||
                    this.selectedPanDetails.type == "image/jpg" ||
                    this.selectedPanDetails.type == "image/png")) {
                var splitTypePan = this.selectedPanDetails.type.split("/");
                var commonListPan = "vehicledriverdocs&&documents&&ASRAR&&" + splitTypePan[1] + "&&" + $("#vehicleNumber").val() + "";
                // const commonListPan = "vehicledriverdocs&&documents&&ASRAR&&" + this.validateVehicleNoForUpload + "&&" + splitTypePan[1] + "";
                var formData = new FormData();
                formData.append(commonListPan, commonListPan);
                formData.append('myfile', this.selectedPanDetails, this.selectedPanDetails.name);
                this.masterReadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        if (response[0] != "Error") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("File Upload", "File Uploaded Succcessfully", "success");
                            _this.isUploaded = true;
                            _this.setPanDoc();
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("ERROR", "Correct the Pan File and Upload Again", "error");
                        }
                    }
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: "Error",
                    text: "Server Error While Uploading a Pan file",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                    function () { return console.log('done'); };
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Only jpg & png image format are allowed to upload for Pan Document File", "warning");
        }
    };
    HireslipBalanceComponent.prototype.setPanDoc = function () {
        var _this = this;
        if (this.isUploaded && $("#vehicleNumber").val() != null) {
            this.hireSlipDtoPanFileUpload = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
            this.validateVehicleNoForUpload = $("#vehicleNumber").val();
            this.hireSlipDtoPanFileUpload.vehicleNumber = this.validateVehicleNoForUpload;
            if ($("#panFileUpload").val() != null && $("#panFileUpload").val() != "") {
                var constImgUrlPan = "http://vehicledriverdocs.s3.amazonaws.com/documents/" + $("#vehicleNumber").val() + "_" + this.selectedPanDetails.name + "";
                this.hireSlipDtoPanFileUpload.imgURLPan = constImgUrlPan;
            }
            this.masterService.setPanTruckMasterDtls(this.hireSlipDtoPanFileUpload).
                subscribe(function (response) {
                if (response.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Success", "Pan Details Saved/Updated Successfully", "success");
                    _this.isUploaded = false;
                    _this.modalRefferenceHireslipBalancePopUp.close();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Error While Saving Pan Details", "warning");
                    return false;
                }
            }),
                function (error) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Saving Pan Details", "warning");
                },
                function () { return console.log('done'); };
        }
    };
    HireslipBalanceComponent.prototype.confirmPaymentClickBtn = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
            title: "Confirm Payment",
            text: "Sure U Want to confirm the Payment",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (yesBtn) {
            if (yesBtn) {
                _this.setHireSlipDetailsForRewarding();
            }
        });
    };
    HireslipBalanceComponent.prototype.setHireSlipDetailsForRewarding = function () {
        var _this = this;
        this.hireSlipDtoForConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.hireSlipDtoForConfirmPayment = this.getFieldValues();
        console.log(this.hireSlipDtoForConfirmPayment);
        this.showSpinnerForAction = true;
        this.hireslipService.updateDriverRewardingHireBalance(this.hireSlipDtoForConfirmPayment).subscribe(function (response) {
            //console.log(response);
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "Print Voucher",
                text: "Do U Want to Print the HireSilpBalance Payment Voucher for " + $("#hireslipNumber").val() + "",
                icon: "info",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (yesBtn) {
                _this.clearFields();
                $("#hireslipNumber").val('');
                $("#scanCode").val('');
                //clearPopupFields();
                _this.viewConfirmPaymentBtn = false;
                _this.viewPrintBtn = false;
                if (yesBtn) {
                    localStorage.clear();
                    localStorage.setItem('lorryHireBalanceVoucherPrint', JSON.stringify(_this.hireSlipDtoForConfirmPayment));
                    _this.viewVoucher = true;
                    window.addEventListener('afterprint', function (onclick) {
                        if (_this.viewVoucher) {
                            _this.viewVoucher = false;
                            _this.hireSlipDtoForConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
                            localStorage.clear();
                            _this.viewPrintBtn = false;
                            _this.clearFields();
                            _this.commonClearFieldFalse();
                        }
                    });
                }
            });
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "Problem occur while getting  getHireSlipDetailsForRewarding", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    HireslipBalanceComponent.prototype.printClickBtn = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
            title: "Print Voucher",
            text: "Do U Want to Print the HireSilpBalance Payment Voucher for " + $("#hireslipNumber").val() + "",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (yesBtn) {
            if (yesBtn) {
                _this.hireSlipDtoForPrint = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
                _this.hireSlipDtoForPrint = _this.getFieldValues();
                //console.log("Cofirm");
                localStorage.clear();
                localStorage.setItem('lorryHireBalanceVoucherPrint', JSON.stringify(_this.hireSlipDtoForPrint));
                _this.viewVoucher = true;
                window.addEventListener('afterprint', function (onclick) {
                    if (_this.viewVoucher) {
                        _this.viewVoucher = false;
                        _this.hireSlipDtoForPrint = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
                        localStorage.clear();
                        _this.viewPrintBtn = false;
                        _this.clearFields();
                        _this.commonClearFieldFalse();
                    }
                });
            } /*else {
                this.clearFields();
                $("#hireslipNumber").val('');
                $("#scanCode").val('');
                this.viewConfirmPaymentBtn = false;
                this.viewPrintBtn = false;
                this.viewAlreadyReward = false;
            }*/
        });
    };
    HireslipBalanceComponent.prototype.getFieldValues = function () {
        var _this = this;
        this.hireSlipDtoForPrintAndConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.enteredScanCodeNumberPrint = $("#scanCode").val();
        this.enteredHireSlipNumberPrint = $("#hireslipNumber").val();
        this.enteredForInvoiceDatePrint = $("#invoiceDates").val();
        this.enteredForHireAmountPrint = $("#hireAmount").val();
        this.enteredForBalanceAmountPrint = $("#balance").val();
        this.enteredForAdvanceAmountPrint = $("#advance").val();
        this.enteredForPayableAtPrint = $("#payableAt").val();
        this.enteredForVehicleNumberPrint = $("#vehicleNumber").val();
        this.enteredForSupplierNamePrint = $("#supplierName").val();
        this.enteredForDriverNamePrint = $("#driverName").val();
        this.enteredForDeductionAmountPrint = $("#deduction").val();
        this.enteredForLessLateArrivalPrint = $("#lessLateArrival").val();
        this.enteredForLessMunishianaPrint = $("#lessMunishiana").val();
        this.enteredForLessunloadhamaliPrint = $("#lessUnloadHamali").val();
        this.enteredForTimeTakenToReachedPrint = $("#timeTakenToReached").val();
        this.enteredForArrivalDatePrint = $("#arrivalDates").val();
        this.enteredForArrivalTimePrint = $("#arrivalTime").val();
        var arrTimeSplit = this.enteredForTimeTakenToReachedPrint.split(":");
        var inMins = (arrTimeSplit[0] * 60);
        if (arrTimeSplit.length > 1) {
            inMins = inMins + +arrTimeSplit[1];
        }
        this.hireSlipDtoForPrintAndConfirmPayment.hireslipnumber = this.enteredHireSlipNumberPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.barcodeValue = this.enteredScanCodeNumberPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDtoForPrintAndConfirmPayment.totalhire = this.enteredForHireAmountPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.balance = this.enteredForBalanceAmountPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.advance = this.enteredForAdvanceAmountPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.payableat = this.enteredForPayableAtPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.status = "BalancePaid";
        this.hireSlipDtoForPrintAndConfirmPayment.mode = "HireBalance";
        this.hireSlipDtoForPrintAndConfirmPayment.invoicedate = this.enteredForInvoiceDatePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.suppliername = this.enteredForSupplierNamePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.vehicleNumber = this.enteredForVehicleNumberPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.drivername = this.enteredForDriverNamePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.deductionAmt = this.enteredForDeductionAmountPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.lesslatearrival = this.enteredForLessLateArrivalPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.lessmunishiana = this.enteredForLessMunishianaPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.lessunloadhamali = this.enteredForLessunloadhamaliPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.arrivaldate = this.enteredForArrivalDatePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.arrivalTime = this.enteredForArrivalTimePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.column3 = this.enteredForTimeTakenToReachedPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.reportMode = "FromPayment";
        this.hireSlipDtoForPrintAndConfirmPayment.inMinutes = inMins;
        if ($("#paymentMode").val() != null && $("#paymentMode").val() == "cash") {
            this.hireSlipDtoForPrintAndConfirmPayment.balPaymentType = "Cash";
        }
        else if ($("#paymentMode").val() != null && $("#paymentMode").val() == "cheque") {
            this.enteredForChequeNumberPrint = $("#chequeNumber").val();
            this.enteredForChequeDatePrint = $("#chequeDates").val();
            this.enteredForBankNamePrint = $("#bankName").val();
            this.hireSlipDtoForPrintAndConfirmPayment.bankname = this.enteredForBankNamePrint;
            this.hireSlipDtoForPrintAndConfirmPayment.chequeno = this.enteredForChequeNumberPrint;
            this.hireSlipDtoForPrintAndConfirmPayment.chequedate = this.enteredForChequeDatePrint;
            this.hireSlipDtoForPrintAndConfirmPayment.balPaymentType = "Cheque";
        }
        else if ($("#paymentMode").val() != null && $("#paymentMode").val() == "neft") {
            this.enteredForRefferenceNumberPrint = $("#referenceNumber").val();
            this.enteredForBankNamePrint = $("#bankName").val();
            this.hireSlipDtoForPrintAndConfirmPayment.bankname = this.enteredForBankNamePrint;
            this.hireSlipDtoForPrintAndConfirmPayment.chequeno = this.enteredForRefferenceNumberPrint;
            this.hireSlipDtoForPrintAndConfirmPayment.balPaymentType = "Neft";
        }
        this.hireSlipDtoForPrintAndConfirmPayment.companyid = this.userDataDtoReturnSession.companyId;
        if (this.enteredHireSlipNumberPrint != null) {
            this.hireSlipDtoPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
            this.hireSlipDtoPrintVoucher.hireslipnumber = this.enteredHireSlipNumberPrint;
            this.hireSlipDtoPrintVoucher.companyid = this.userDataDtoReturnSession.companyId;
            this.hireslipService.getHireSlipDetailsForVoucher(this.hireSlipDtoPrintVoucher).subscribe(function (response) {
                //console.log(response);
                if (response.length > 0) {
                    _this.hireSlipDtoForPrintAndConfirmPayment.mainBookingStation = response[0].mainBookingStation;
                    _this.hireSlipDtoForPrintAndConfirmPayment.toStation = response[0].toStation;
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While Getting the hireslip details for print voucher", "info");
            }, function () { return console.log('done'); };
        }
        return this.hireSlipDtoForPrintAndConfirmPayment;
    };
    HireslipBalanceComponent.prototype.bankNameDropDownListner = function (event) {
        this.modelBankName = event.item.bankName;
        $("#bankName").val(event.item.bankName);
        /* if ($("#bankName").val() == "Add New") {
             $("#newBankNameId").val('');
             this.viewNewBankNameField = true;
         } else {
             $("#newBankNameId").val('');
             this.viewNewBankNameField = false;
         }*/
    };
    HireslipBalanceComponent.prototype.getDetailsForBankMasterRead = function () {
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__["UserDataDto"]();
        this.userDataDto.office = this.userDataDtoReturnSession.mainStation;
        this.userDataDto.status = "Working";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HireslipBalanceComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hireslipBalancePopUpTemplate'),
        __metadata("design:type", Object)
    ], HireslipBalanceComponent.prototype, "hireslipBalancePopUpTemplate", void 0);
    HireslipBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hireslip-balance',
            template: __webpack_require__(/*! ./hireslip-balance.component.html */ "./src/app/stock/payment/hireslip-balance/hireslip-balance.component.html"),
            styles: [__webpack_require__(/*! ./hireslip-balance.component.css */ "./src/app/stock/payment/hireslip-balance/hireslip-balance.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_16__["MasterService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_6__["MemoService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_14__["HireslipService"]])
    ], HireslipBalanceComponent);
    return HireslipBalanceComponent;
}());



/***/ }),

/***/ "./src/app/stock/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/stock/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var src_app_stock_payment_payment_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/stock/payment/payment.routing */ "./src/app/stock/payment/payment.routing.ts");
/* harmony import */ var src_app_stock_payment_hireslip_advance_hireslip_advance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/stock/payment/hireslip-advance/hireslip-advance.component */ "./src/app/stock/payment/hireslip-advance/hireslip-advance.component.ts");
/* harmony import */ var src_app_stock_payment_hireslip_balance_hireslip_balance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/stock/payment/hireslip-balance/hireslip-balance.component */ "./src/app/stock/payment/hireslip-balance/hireslip-balance.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_report_lr_report_lr_report_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/lr-report/lr-report.module */ "./src/app/report/lr-report/lr-report.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//for select option search starts




//for select option search ends





var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_stock_payment_payment_routing__WEBPACK_IMPORTED_MODULE_9__["PaymentRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_7__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_8__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], src_app_report_lr_report_lr_report_module__WEBPACK_IMPORTED_MODULE_13__["LrReportModule"]],
            declarations: [
                src_app_stock_payment_hireslip_advance_hireslip_advance_component__WEBPACK_IMPORTED_MODULE_10__["HireslipAdvanceComponent"],
                src_app_stock_payment_hireslip_balance_hireslip_balance_component__WEBPACK_IMPORTED_MODULE_11__["HireslipBalanceComponent"]
            ]
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ }),

/***/ "./src/app/stock/payment/payment.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/stock/payment/payment.routing.ts ***!
  \**************************************************/
/*! exports provided: PaymentRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutes", function() { return PaymentRoutes; });
/* harmony import */ var src_app_stock_payment_hireslip_advance_hireslip_advance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/stock/payment/hireslip-advance/hireslip-advance.component */ "./src/app/stock/payment/hireslip-advance/hireslip-advance.component.ts");
/* harmony import */ var src_app_stock_payment_hireslip_balance_hireslip_balance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/stock/payment/hireslip-balance/hireslip-balance.component */ "./src/app/stock/payment/hireslip-balance/hireslip-balance.component.ts");


var PaymentRoutes = [
    {
        path: '',
        children: [
            {
                path: 'hireslipAdvance',
                component: src_app_stock_payment_hireslip_advance_hireslip_advance_component__WEBPACK_IMPORTED_MODULE_0__["HireslipAdvanceComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'hireslipBalance',
                component: src_app_stock_payment_hireslip_balance_hireslip_balance_component__WEBPACK_IMPORTED_MODULE_1__["HireslipBalanceComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-stock-payment-payment-module.js.map