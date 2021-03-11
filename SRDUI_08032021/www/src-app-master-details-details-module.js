(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-details-details-module"],{

/***/ "./src/app/master/details/agent-setup/agent-setup.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/master/details/agent-setup/agent-setup.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9kZXRhaWxzL2FnZW50LXNldHVwL2FnZW50LXNldHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/details/agent-setup/agent-setup.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/master/details/agent-setup/agent-setup.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Agent Setup</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"padding: 0px !important;\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"selectAgentType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"selectAgentType\" #selectAgentType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectAgentTypeMode(selectAgentType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select...</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bookingAgent\" selected>Booking\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAgent</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destinationAgent\">Destination\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAgent</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewStationType\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"selectStationType\" name=\"selectStationType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#selectStationType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectStationTypeMode(selectStationType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngIf=\"viewBookingAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"mainStationBooking\" selected>Main\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStation</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngIf=\"viewBookingAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"subStationBooking\">Sub Station</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngIf=\"viewDestinationAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"mainStationDestination\" selected>Main\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStation</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngIf=\"viewDestinationAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"subStationDestination\">Sub Station</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewBookingAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"city\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"state\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select State\" [formControl]=\"controlState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteState=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(stateOptions | filter: controlState.value) as resultState\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultState.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"address\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"2\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"phoneNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Phone No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"emailAddress\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Email Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"contactPerson\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Person</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewBookingAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentCode\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-lock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewBookingAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Main Branch</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"mainBranch\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"mainBranch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"\">Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts  -->\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewMainStation\" class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mainStationName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Main Station Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Main Station\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"control\" [appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(mainStationNameOptions | filter: control.value) as resultMainStationName\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultMainStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultMainStationName.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestinationAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Working On Sunday</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"workingOnSumday\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"workingOnSumday\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"no\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"yes\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"\n\t\t\t\t\t\t\t\t\t\t\t\tviewDestinationAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"deliveryCharges\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Charges</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestinationAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"unitDc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"unitDc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"articleDc\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"actualWeightDc\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chargedWeightDc\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"\n\t\t\t\t\t\t\t\t\t\t\t\tviewDestinationAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"loadingAndUnloadingCharges\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loading & Unloading Charges</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestinationAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"unitLuc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"unitLuc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"articleLuc\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"actualWeightLuc\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chargedWeightLuc\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestinationAgentSubStation\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"subStationGdCharges\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Sub Station GD Charges</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestinationAgentSubStation\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"unitSsgdc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"unitSsgdc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"articleSsgdc\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"actualWeightSsgdc\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chargedWeightSsgdc\">Charged\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWeight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"saveBtn\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"deleteBtn\">Delete</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl p-t-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"selectAgentType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"selectAgentType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bookingAgent\">Booking Agent</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destinationAgent\">Destination\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAgent</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBookingAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerBookingAgent\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Station Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"display: none;\">Contact Person</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"display: none;\">Phone No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>City</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>State</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"display: none;\">Email Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent Code</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Branch</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let bookingAgentData of bookingAgentDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingAgentData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingAgentData.stationName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"display: none;\">{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbookingAgentData.contactPerson }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"display: none;\">{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbookingAgentData.phoneNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingAgentData.address }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingAgentData.city }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingAgentData.state }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"display: none;\">{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbookingAgentData.emailAddress }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingAgentData.agentCode }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingAgentData.branch }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/details/agent-setup/agent-setup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/master/details/agent-setup/agent-setup.component.ts ***!
  \*********************************************************************/
/*! exports provided: AgentSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentSetupComponent", function() { return AgentSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for datatable starts


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for datatable ends
//for the select option with filter starts

//for the select option with filter ends
var AgentSetupComponent = /** @class */ (function () {
    //for datatable ends
    function AgentSetupComponent(/* for datatable starts */ bookingAgent /* for datatable endss */) {
        this.bookingAgent = bookingAgent;
        //for datatable ends
        //summaryTable:any;
        this.loadingIndicator = true;
        this.viewBookingAgent = true;
        this.viewDestinationAgent = false;
        this.viewMainStation = false;
        this.viewStationType = true;
        this.viewDestinationAgentSubStation = false;
        //for the select option with filter starts
        this.controlState = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.stateOptions = [
            { id: 1, label: 'Maharashtra' },
            { id: 2, label: 'Kerela' },
            { id: 3, label: 'Tamil Nadu' }
        ];
        this.mainStationNameOptions = [
            { id: 1, label: 'Agra' },
            { id: 2, label: 'Delhi' },
            { id: 3, label: 'Mumbai' }
        ];
        this.dtTriggerBookingAgent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /* for datatable starts */
    AgentSetupComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    AgentSetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsBookingAgent = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Agent Name',
                    data: 'agentName'
                },
                {
                    title: 'Station Name',
                    data: 'stationName'
                },
                {
                    title: 'Contact Person',
                    data: 'contactPerson'
                },
                {
                    title: 'Phone No',
                    data: 'phoneNo'
                },
                {
                    title: 'Address',
                    data: 'address'
                },
                {
                    title: 'City',
                    data: 'city'
                },
                {
                    title: 'State',
                    data: 'state'
                },
                {
                    title: 'Email Address',
                    data: 'emailAddress'
                },
                {
                    title: 'Agent Code',
                    data: 'agentCode'
                },
                {
                    title: 'Branch',
                    data: 'branch'
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
        this.gettingDataFrmServiceFrBookingAgentTable = this.bookingAgent.getSummaryData();
        this.onDestroyUnsubscribtionBookingAgent = this.gettingDataFrmServiceFrBookingAgentTable.subscribe(function (data) {
            _this.bookingAgentDataList = data['data'];
            _this.dtTriggerBookingAgent.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    AgentSetupComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerBookingAgent.unsubscribe();
        this.onDestroyUnsubscribtionBookingAgent.unsubscribe();
        //for datatable ends
    };
    AgentSetupComponent.prototype.selectAgentTypeMode = function (selectAgentType) {
        if (selectAgentType === 'bookingAgent') {
            this.viewMainStation = false;
            this.viewBookingAgent = true;
            this.viewDestinationAgent = false;
            this.viewStationType = true;
            this.viewDestinationAgentSubStation = false;
        }
        else if (selectAgentType === 'destinationAgent') {
            this.viewMainStation = false;
            this.viewBookingAgent = false;
            this.viewDestinationAgent = true;
            this.viewStationType = true;
            this.viewDestinationAgentSubStation = false;
        }
        else {
            this.viewMainStation = false;
            this.viewBookingAgent = false;
            this.viewDestinationAgent = false;
            this.viewStationType = false;
            this.viewDestinationAgentSubStation = false;
        }
    };
    AgentSetupComponent.prototype.selectStationTypeMode = function (selectStationType) {
        if (selectStationType === 'mainStationBooking') {
            this.viewMainStation = false;
            this.viewDestinationAgentSubStation = false;
        }
        else if (selectStationType === 'subStationBooking') {
            this.viewMainStation = true;
            this.viewDestinationAgentSubStation = false;
        }
        else if (selectStationType === 'mainStationDestination') {
            this.viewMainStation = false;
            this.viewDestinationAgentSubStation = false;
        }
        else if (selectStationType === 'subStationDestination') {
            this.viewMainStation = false;
            this.viewDestinationAgentSubStation = true;
        }
        else {
            this.viewMainStation = false;
            this.viewDestinationAgentSubStation = false;
        }
    };
    //for the select option with filter starts
    AgentSetupComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AgentSetupComponent.prototype, "dtElements", void 0);
    AgentSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-setup',
            template: __webpack_require__(/*! ./agent-setup.component.html */ "./src/app/master/details/agent-setup/agent-setup.component.html"),
            styles: [__webpack_require__(/*! ./agent-setup.component.css */ "./src/app/master/details/agent-setup/agent-setup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] /* for datatable endss */])
    ], AgentSetupComponent);
    return AgentSetupComponent;
}());



/***/ }),

/***/ "./src/app/master/details/details.module.ts":
/*!**************************************************!*\
  !*** ./src/app/master/details/details.module.ts ***!
  \**************************************************/
/*! exports provided: DetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
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
/* harmony import */ var src_app_master_details_details_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/master/details/details.routing */ "./src/app/master/details/details.routing.ts");
/* harmony import */ var src_app_master_details_agent_setup_agent_setup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/master/details/agent-setup/agent-setup.component */ "./src/app/master/details/agent-setup/agent-setup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends


var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_details_details_routing__WEBPACK_IMPORTED_MODULE_10__["DetailsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [
                src_app_master_details_agent_setup_agent_setup_component__WEBPACK_IMPORTED_MODULE_11__["AgentSetupComponent"],
            ]
        })
    ], DetailsModule);
    return DetailsModule;
}());



/***/ }),

/***/ "./src/app/master/details/details.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/master/details/details.routing.ts ***!
  \***************************************************/
/*! exports provided: DetailsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRoutes", function() { return DetailsRoutes; });
/* harmony import */ var src_app_master_details_agent_setup_agent_setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/master/details/agent-setup/agent-setup.component */ "./src/app/master/details/agent-setup/agent-setup.component.ts");

var DetailsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'agentSetup',
                component: src_app_master_details_agent_setup_agent_setup_component__WEBPACK_IMPORTED_MODULE_0__["AgentSetupComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-master-details-details-module.js.map