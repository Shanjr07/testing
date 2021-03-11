(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-transhipment-transhipment-module"],{

/***/ "./src/app/dto/PartyMaster-dto.ts":
/*!****************************************!*\
  !*** ./src/app/dto/PartyMaster-dto.ts ***!
  \****************************************/
/*! exports provided: PartyMasterDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyMasterDto", function() { return PartyMasterDto; });
var PartyMasterDto = /** @class */ (function () {
    function PartyMasterDto() {
    }
    return PartyMasterDto;
}());



/***/ }),

/***/ "./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* for custom css for autocomplete select option starts */\n.auto_selectOption {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n}\n/* for small mobile */\n@media ( max-width : 355px) {\n\t.auto_selectOption {\n\t\twidth: 48% !important;\n\t}\n}\n/* for medium mobile */\n@media ( max-width : 365px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for mobile */\n@media ( min-width : 370px) and (max-width: 766px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n/* for ipad */\n@media ( min-width : 767px) and (max-width: 990px) {\n\t.auto_selectOption {\n\t\twidth: 80%;\n\t}\n}\n/* for ipad pro */\n@media ( min-width : 991px) and (max-width: 1200px) {\n\t.auto_selectOption {\n\t\twidth: 46%;\n\t}\n}\n/* for desktop */\n@media ( min-width : 1201px) and (max-width: 1500px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for custom css for autocomplete select option ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3RyYW5zaGlwbWVudC9hZ2VudC10ZW1wby1tYXN0ZXIvYWdlbnQtdGVtcG8tbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEO0FBQzFEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLFlBQVk7Q0FDWjtBQUNELHNCQUFzQjtBQUN0QjtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCO0NBQ0Q7QUFDRCx1QkFBdUI7QUFDdkI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsZ0JBQWdCO0FBQ2hCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGNBQWM7QUFDZDtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxrQkFBa0I7QUFDbEI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsaUJBQWlCO0FBQ2pCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUVELHdEQUF3RCIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci90cmFuc2hpcG1lbnQvYWdlbnQtdGVtcG8tbWFzdGVyL2FnZW50LXRlbXBvLW1hc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9yIGN1c3RvbSBjc3MgZm9yIGF1dG9jb21wbGV0ZSBzZWxlY3Qgb3B0aW9uIHN0YXJ0cyAqL1xuLmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNkYWRlZTI7XG5cdGhlaWdodDogMjZweDtcblx0d2lkdGg6IDEwMCU7XG59XG4vKiBmb3Igc21hbGwgbW9iaWxlICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAzNTVweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA0OCUgIWltcG9ydGFudDtcblx0fVxufVxuLyogZm9yIG1lZGl1bSBtb2JpbGUgKi9cbkBtZWRpYSAoIG1heC13aWR0aCA6IDM2NXB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxufVxuLyogZm9yIG1vYmlsZSAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogMzcwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MSU7XG5cdH1cbn1cbi8qIGZvciBpcGFkICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDgwJTtcblx0fVxufVxuLyogZm9yIGlwYWQgcHJvICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA0NiU7XG5cdH1cbn1cbi8qIGZvciBkZXNrdG9wICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiAxMjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTAlO1xuXHR9XG59XG5cbi8qIGZvciBjdXN0b20gY3NzIGZvciBhdXRvY29tcGxldGUgc2VsZWN0IG9wdGlvbiBlbmRzICovIl19 */"

/***/ }),

/***/ "./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Agent Tempo Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Number*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #truckNumber (keyup)=\"fieldFocus($event, ownerName)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"truckNumber\" name=\"truckNumber\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"checkTempoNumber($event)\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" #numberTender=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckNumber\" minlength=\"9\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tpattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{9,}$\" required /> <small\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"numberTender.valid\" class=\"errorLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Enter the alphanumeric value. </small>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Owner Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #ownerName (keyup)=\"fieldFocus($event,panNumber)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"ownerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"ownerName\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.ownerName\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>PAN(Enter PAN as AAAAA9999A, if you don't\n\t\t\t\t\t\t\t\t\t\t\t\t\thave PAN)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #panNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, truckCapacityInTones)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"panNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"panNumber\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.panNo\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Capacity (In Tones)*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #truckCapacityInTones\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, saveBtn)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"truckCapacityInTones\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"truckCapacityInTones\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckCapcityDouble\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" #saveBtn style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<button #saveBtn type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"saveBtn\" (click)=\"validateAgentTempoDetails();\">Save</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"deleteBtn\" (click)=\"validateDeleteRow()\">Delete</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Agent Tempo Master</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"getDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getAgentTempoMasterDetailsList()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i> Get Details\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentTempoMaster\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentTempoMaster\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Owner Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>PAN Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck Capacity</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentTempoMasterData of agentTempoMasterDataList \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelected(agentTempoMasterData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentTempoMasterData.truckNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentTempoMasterData.ownerName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentTempoMasterData.panNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentTempoMasterData.truckCapacity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<tfoot> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<tr> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</tfoot> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AgentTempoMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentTempoMasterComponent", function() { return AgentTempoMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
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
//service starts





//service ends
var AgentTempoMasterComponent = /** @class */ (function () {
    //    truckTypeOptions = [
    //        { id: 1, label: '1 Ton' },
    //        { id: 2, label: '2 Ton' },
    //        { id: 3, label: '4 Ton' },
    //    ];
    //for the select option with filter ends
    function AgentTempoMasterComponent(/* for datatable starts */ masterService, /* for datatable endss */ 
    //          service starts
    masterReadService, http, router
    //            service ends        
    ) {
        var _this = this;
        this.masterService = masterService;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.newTruck = false;
        this.isLoggedIn = true;
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataDtoSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataCheckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataDeleteDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.setAgentTempo = 'new';
        this.saveOrEdit = 'save';
        //    onDestroyUnsubscribtionTruckMaster: Subscription;
        //for datatable ends
        this.loadingIndicator = true;
        this.dtTriggerAgentTempoMaster = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //for datatable ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.regStateOptions = [
            { id: 1, label: 'Assam' },
            { id: 2, label: 'Delhi' },
            { id: 3, label: 'Tamil Nadu' },
        ];
        this.getAgentTempoMasterDetailsList = function () {
            _this.getAgentTempoDetailsForRead();
            _this.masterService.getAgentTempoDetails(_this.truckDataDto).subscribe(function (response) {
                if (response) {
                    _this.agentTempoMasterDataList = response;
                    if (_this.setAgentTempo == 'new') {
                        _this.dtTriggerAgentTempoMaster.next();
                        _this.setAgentTempo = 'old';
                    }
                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
            _this.truckDataCheckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
            _this.truckDataCheckDto.truckNumber = _this.enteredTruckNumber;
            _this.masterService.checkAgentTempoNumber(_this.truckDataCheckDto).subscribe(function (response) {
                _this.truckDataDtoCheckRet = response;
                console.log(_this.truckDataDtoCheckRet);
                if (_this.truckDataDtoCheckRet.status == 'exist') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Success",
                        text: "Agent Tempo Details Saved/Updated Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    _this.getAgentTempoMasterDetailsList();
                }
                else if (_this.truckDataDtoSaveRet.status == "exist") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Error",
                        text: "Error While Saving Truck Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Error",
                    text: "Server Error While Saving Truck Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteAgentTempoDetails = function () {
            _this.getDeleteAgentTempoDetails();
            _this.masterService.deleteAgentTempoMaster(_this.truckDataDeleteDto).
                subscribe(function (data) {
                _this.truckDataDtoDeleteRet = data;
                if (_this.truckDataDtoDeleteRet.status == "updated") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Success",
                        text: "Agent Tempo Details Deleted Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    _this.getAgentTempoMasterDetailsList();
                    //                    this.getDriverNameList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Error",
                        text: "Error While Deleting Agent Tempo Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Error",
                    text: "Server Error While Deleting Agent Tempo Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
        }
    }
    AgentTempoMasterComponent.prototype.pinfocus = function () {
        this.pinField.nativeElement.focus();
    };
    AgentTempoMasterComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    /* for datatable starts */
    AgentTempoMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    AgentTempoMasterComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsAgentTempoMaster = {
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [],
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
            "scrollY": 280,
            "scrollCollapse": true,
            //pagination starts
            "paging": true,
            "info": true,
            "pagingType": 'full_numbers',
            "pageLength": 25,
        };
    };
    AgentTempoMasterComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerAgentTempoMaster.unsubscribe();
        //        this.onDestroyUnsubscribtionTruckMaster.unsubscribe();
        //for datatable ends
    };
    //for the select option with filter starts
    AgentTempoMasterComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    //  service starts
    AgentTempoMasterComponent.prototype.getAgentTempoDetailsForRead = function () {
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
    };
    AgentTempoMasterComponent.prototype.ngAfterViewInit = function () { };
    AgentTempoMasterComponent.prototype.checkTempoNumber = function (e) {
        this.enteredTruckNumber = $("#truckNumber").val();
        if (e.keyCode == 13) {
            if ((this.enteredTruckNumber != '') || (this.enteredTruckNumber != null)) {
                this.tempoNumberChk();
            }
        }
    };
    AgentTempoMasterComponent.prototype.validateAgentTempoDetails = function () {
        this.enteredTruckNumber = $("#truckNumber").val();
        this.enteredTruckCapacity = $("#truckCapacityInTones").val();
        if ((this.enteredTruckNumber == '') || (this.enteredTruckNumber == null) || (this.enteredTruckCapacity == '') || (this.enteredTruckCapacity == null)) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
    AgentTempoMasterComponent.prototype.getAgentTempoDetailsForSave = function () {
        this.enteredTruckNumber = $("#truckNumber").val();
        this.enteredTruckNumber = this.enteredTruckNumber.replace(/\s/g, "");
        this.enteredTruckCapacity = $("#truckCapacityInTones").val();
        this.enteredOwnerName = $("#ownerName").val();
        this.enteredPanNO = $("#panNumber").val();
        this.truckDataDtoSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataDtoSave.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDtoSave.userId = this.userDataDtoReturnSession.userId;
        this.truckDataDtoSave.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        this.truckDataDtoSave.suppAdd = this.saveOrEdit;
        this.truckDataDtoSave.truckNumber = this.enteredTruckNumber.toUpperCase();
        this.truckDataDtoSave.ownerName = this.enteredOwnerName;
        this.truckDataDtoSave.panNo = this.enteredPanNO;
        this.truckDataDtoSave.truckCapcityDouble = this.enteredTruckCapacity;
    };
    AgentTempoMasterComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.newTruck = false;
        this.truckDataDto.truckNumber = null;
        this.saveOrEdit = 'save';
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataCheckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataDtoCheckRet = '';
        this.truckDataDtoSaveRet = '';
        this.truckDataDeleteDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataDtoDeleteRet = '';
        this.enteredTruckNumber = '';
        this.enteredTruckCapacity = '';
        this.truckDataDtoSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.enteredOwnerName = '';
        this.enteredPanNO = '';
    };
    AgentTempoMasterComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    AgentTempoMasterComponent.prototype.rowSelected = function (truckMasterData) {
        this.truckDataDto.truckNumber = truckMasterData.truckNumber;
        this.truckDataDto.ownerName = truckMasterData.ownerName;
        this.truckDataDto.panNo = truckMasterData.panNo;
        this.truckDataDto.truckCapcityDouble = truckMasterData.truckCapacity;
        this.saveOrEdit = 'edit';
    };
    //    service ends
    AgentTempoMasterComponent.prototype.validateDeleteRow = function () {
        this.deleteAgentTempoDetails();
    };
    AgentTempoMasterComponent.prototype.getDeleteAgentTempoDetails = function () {
        this.truckDataDeleteDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataDeleteDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDeleteDto.truckNumber = this.truckDataDto.truckNumber;
        this.truckDataDeleteDto.userId = this.userDataDtoReturnSession.userId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pinCode"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AgentTempoMasterComponent.prototype, "pinField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AgentTempoMasterComponent.prototype, "dtElements", void 0);
    AgentTempoMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-master',
            template: __webpack_require__(/*! ./agent-tempo-master.component.html */ "./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.html"),
            styles: [__webpack_require__(/*! ./agent-tempo-master.component.css */ "./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
            //            service ends        
        ])
    ], AgentTempoMasterComponent);
    return AgentTempoMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/transhipment/driver-master/driver-master.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/master/transhipment/driver-master/driver-master.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\r\n\r\nhr {\r\n  margin-bottom: 10px;\r\n  margin-top: 10pX;\r\n}\r\n\r\n/* the below css is done for the verticle form ends here */\r\n\r\n::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3RyYW5zaGlwbWVudC9kcml2ZXItbWFzdGVyL2RyaXZlci1tYXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRCwyREFBMkQ7O0FBQzNEO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL3RyYW5zaGlwbWVudC9kcml2ZXItbWFzdGVyL2RyaXZlci1tYXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gc3RhcnRzIGhlcmUqL1xyXG5cclxuaHIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBwWDtcclxufVxyXG5cclxuLyogdGhlIGJlbG93IGNzcyBpcyBkb25lIGZvciB0aGUgdmVydGljbGUgZm9ybSBlbmRzIGhlcmUgKi9cclxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdHRvcDogMjZweDtcclxuICAgIGxlZnQ6IDE4OHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/master/transhipment/driver-master/driver-master.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/master/transhipment/driver-master/driver-master.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Driver Master</h6>\n\t\t\t</div>\n\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"driverName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #driverName (keyup)=\"fieldFocus($event, licenceNo)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"driverDetailsDto.driverName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>License Number*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #licenceNo (keyup)=\"fieldFocus($event, mobileNo)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"licenceNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"licenceNo\" [(ngModel)]=\"driverDetailsDto.licenceNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #mobileNo (keyup)=\"fieldFocus($event, address)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"mobileNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"mobileNo\" [(ngModel)]=\"driverDetailsDto.mobileNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea #address (keyup)=\"fieldFocus($event, state)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control \" rows=\"1\" id=\"address\" name=\"address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"driverDetailsDto.address\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>DL Issue State*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input  #stateName id=\"regStateName\" type=\"text\"class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForRegState($event)\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelRegState\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchRegState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t    [resultFormatter]=\"formatterRegState\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterRegState\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusRegStateTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, pin)\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #pin (keyup)=\"fieldFocus($event, imgURL)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"pincode\" name=\"pincode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"driverDetailsDto.pin\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>License*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<input #imgURL (keyup)=\"fieldFocus($event, saveBtns)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"imgURL\" name=\"imgURL\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"driverDetailsDto.imgURL\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"driverLicenseFileUpload\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onFileChangedDriverLicense($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t #fileInputDriverMasterForLicense/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"class=\"btn btn-dark\"  id=\"updateBtnId\" \n\t\t\t\t\t\t\t\t\t\t\t            (click)=\"uploadFileForDriverLicBtnUpload()\">Upload\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button #saveBtns type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"saveBtns\" (click)=\"validateDriverDetails();\">Save/Update</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"deleteBtn\" (click)=\"validateDeleteRow()\">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"getDetailsBtn\"\n\t\t\t\t\t\t\t\t(click)=\"getDriverNameList()\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i> Get Details of Driver Master\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Driver Master</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<table datatable id=\"driverMasterDatatabelId\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDriverName\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Driver Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>License No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Mobile</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DL Issue State</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Pin</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Licence</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let driverNameData of driverDetailsDtoGetResult\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelected(driverNameData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ driverNameData.driverName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ driverNameData.licenceNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ driverNameData.mobileNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ driverNameData.address }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ driverNameData.dlissState }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ driverNameData.pin }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ driverNameData.imgURLIMB }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<tfoot> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<tr> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total</td> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</tfoot> -->\n\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/transhipment/driver-master/driver-master.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/master/transhipment/driver-master/driver-master.component.ts ***!
  \******************************************************************************/
/*! exports provided: DriverMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverMasterComponent", function() { return DriverMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/master-dto */ "./src/app/dto/master-dto.ts");
/* harmony import */ var src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/Driverdetails-dto */ "./src/app/dto/Driverdetails-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__);
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
//service starts


//we used any keyword so comment








//sweet alert ends
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'my-auth-token'
    })
};
//service ends
var DriverMasterComponent = /** @class */ (function () {
    function DriverMasterComponent(/* for datatable starts */ masterService, /* for datatable endss */ 
    //            service starts
    masteRreadService, http, router
    //            service ends
    ) {
        var _this = this;
        this.masterService = masterService;
        this.masteRreadService = masteRreadService;
        this.http = http;
        this.router = router;
        //service starts      
        //    partyModel: PartyModel = new PartyModel();
        this.baseUrl = '/api/v1/createconsignee';
        this.masterDto = new src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_8__["MasterDto"]();
        this.driverDetailsDto = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_9__["DriverdetailsDto"]();
        this.driverDetailsDeleteDto = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_9__["DriverdetailsDto"]();
        this.isLoggedIn = true;
        this.loadingIndicator = true;
        this.dtTriggerDriverName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectedDriverId = 0;
        //for datatable ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.dlIssueStateOptions = [
            { id: 1, label: 'Assam' },
            { id: 2, label: 'Delhi' },
            { id: 3, label: 'Tamil Nadu' },
        ];
        this.partyMasterDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_13__["PartyMasterDto"]();
        this.controlRegState = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.modelRegStateTA = [];
        this.focusRegStateTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchRegState = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusRegStateTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.modelRegStateTA
                : _this.modelRegStateTA.filter(function (v) { return v.state.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterRegState = function (x) { return x.state; };
        this.isUploaded = false;
        this.getDriverNameList = function () {
            //        console.log( this.driverDetailsDto.companyId + "," + this.driverDetailsDto.mainStation + "," + this.driverDetailsDto.status );
            _this.getDriverDetailsForRead();
            _this.masteRreadService.getDriver(_this.driverDetailsDto).subscribe(function (response) {
                if (response) {
                    console.log(response);
                    _this.driverDetailsDtoGetResult = response;
                    $("#driverMasterDatatabelId").DataTable().destroy();
                    _this.dtTriggerDriverName.next();
                    //                    console.log( this.driverDetailsDtoGetResult[5] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                title: "Error",
                text: "Server Error While Getting Driver Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateDriverDetails = function () {
            _this.getDriverDetailsForSave();
            console.log(_this.driverDetailsDto);
            _this.masterService.createDriver(_this.driverDetailsDto).
                subscribe(function (data) {
                _this.driverDetailsDtoSaveRet = data;
                if (_this.driverDetailsDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                        title: "Success",
                        text: "Driver Details Saved/Update Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    _this.getDriverNameList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                        title: "Error",
                        text: "Error While Saving Driver Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                    title: "Error",
                    text: "Server Error While Saving Driver Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteDriverDetails = function () {
            _this.getDeleteDriverDetails();
            _this.masterService.deleteDriver(_this.driverDetailsDeleteDto).
                subscribe(function (data) {
                _this.driverDetailsDeleteRet = data;
                if (_this.driverDetailsDeleteRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                        title: "Success",
                        text: "Driver Details Deleted Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    _this.getDriverNameList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                        title: "Error",
                        text: "Error While Deleting Driver Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                    title: "Error",
                    text: "Server Error While Deleting Driver Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
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
            this.getStatesMethod();
        }
    }
    //    consigneeDetailsModel: ConsigneedetailsModel = new ConsigneedetailsModel();
    //    service ends
    //    onDestroyUnsubscribtionDriverName: Subscription;
    //for datatable ends
    DriverMasterComponent.prototype.pinfocus = function () {
        this.pinField.nativeElement.focus();
    };
    DriverMasterComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    /* for datatable starts */
    DriverMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    DriverMasterComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsDriverName = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Driver Name',
            //                    data: 'driverName'
            //                },
            //                {
            //                    title: 'License No',
            //                    data: 'licenseNo'
            //                },
            //                {
            //                    title: 'Mobile',
            //                    data: 'mobile'
            //                },
            //                {
            //                    title: 'Address',
            //                    data: 'address'
            //                },
            //                {
            //                    title: 'DL Issue State',
            //                    data: 'dlIssueState'
            //                },
            //                {
            //                    title: 'Pin',
            //                    data: 'pin'
            //                },
            //                {
            //                    title: 'Licence',
            //                    data: 'licence'
            //                }
            //            ],
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
            "scrollY": 310,
            "scrollCollapse": true,
            //pagination starts
            "paging": true,
            "info": true,
            "pagingType": 'full_numbers',
            "pageLength": 25,
        };
        //the below code is for the getting data through json starts
        //        this.supplierList.getAllData().subscribe(data => {
        //            this.lrDispatchBknRptList = data['data'];
        //            this.dtTriggerSummary.next();
        //            } );
        //        this.gettingDataFrmServiceFrDriverNameTable = this.driverMaster.getSummaryData()
        //        this.onDestroyUnsubscribtionDriverName = this.gettingDataFrmServiceFrDriverNameTable.subscribe( data => {
        //            this.driverNameDataList = data['data'];
        //            this.dtTriggerDriverName.next();
        //        } );
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    DriverMasterComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerDriverName.unsubscribe();
        //        this.onDestroyUnsubscribtionDriverName.unsubscribe();
        //for datatable ends
    };
    //for the select option with filter starts
    DriverMasterComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    //  service starts
    //    getValuesForDriverNameList() {
    //        var masterDto = {
    //            'mainStation': 'Delhi',
    //            'mainAdminStation': 'Budhpur'
    //        }
    //        return masterDto;
    //    }
    DriverMasterComponent.prototype.getDriverDetailsForRead = function () {
        this.driverDetailsDto.companyId = this.userDataDtoReturnSession.companyId;
        this.driverDetailsDto.status = "Working";
        if (this.userDataDtoReturnSession.mainAdminStation != null) {
            this.driverDetailsDto.mode = "MainStation";
            this.driverDetailsDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        }
        else {
            this.driverDetailsDto.mode = "Station";
            this.driverDetailsDto.mainStation = this.userDataDtoReturnSession.office;
        }
    };
    //    service ends
    //for the select option with filter ends
    DriverMasterComponent.prototype.validateDriverDetails = function () {
        var validateDriverName = this.driverDetailsDto.driverName;
        var validateDriverLicNo = this.driverDetailsDto.licenceNo;
        var validateDriverMobileNumber = this.driverDetailsDto.mobileNo;
        var validateDriverAddress = this.driverDetailsDto.address;
        var validateDriverPincode = this.driverDetailsDto.pin;
        this.validateStateName_save = $('#regStateName').val();
        if ((validateDriverName == null) || (validateDriverName == undefined) || (validateDriverName == '') ||
            (validateDriverLicNo == null) || (validateDriverLicNo == undefined) || (validateDriverLicNo == '') ||
            (validateDriverMobileNumber == null) || (validateDriverMobileNumber == undefined) ||
            (validateDriverMobileNumber == '') || (validateDriverAddress == null) || (validateDriverAddress == undefined) ||
            (validateDriverAddress == '') || (validateDriverPincode == null) || (validateDriverPincode == undefined) ||
            (validateDriverPincode == '') || (this.validateStateName_save == null) ||
            (this.validateStateName_save == undefined) || (this.validateStateName_save == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Mandatory Field", "Please Enter the Mandetory Fields", "warning");
            return false;
        }
        else {
            this.saveUpdateDriverDetails();
        }
    };
    DriverMasterComponent.prototype.getDriverDetailsForSave = function () {
        this.driverDetailsDto.status = "Working";
        this.driverDetailsDto.id = this.selectedDriverId;
        this.driverDetailsDto.userId = this.userDataDtoReturnSession.userId;
        this.driverDetailsDto.companyId = this.userDataDtoReturnSession.companyId;
        if (this.userDataDtoReturnSession.mainAdminStation != null) {
            this.driverDetailsDto.mainStation = this.userDataDtoReturnSession.mainStation;
        }
        else {
            this.driverDetailsDto.mainStation = this.userDataDtoReturnSession.office;
        }
        if ($("#regStateName").val() != null && $("#regStateName").val() != "" && $("#regStateName").val() != "NA") {
            this.regStateName = $("#regStateName").val();
            this.driverDetailsDto.DLIssState = this.regStateName;
            if (this.modelRegState != null && this.modelRegState != undefined) {
                this.driverDetailsDto.DLIssStateCode = this.modelRegState.stateCode;
            }
        }
        if (this.isUploaded) {
            if ($("#driverLicenseFileUpload").val() != null && $("#driverLicenseFileUpload").val() != "") {
                var constImgUrlLic = "http://vehicledriverdocs.s3.amazonaws.com/documents/" + $("#licenceNo").val() + "_" + this.selectedFileDriverDetailsForLicense.name + "";
                this.driverDetailsDto.imgURL = constImgUrlLic;
                this.driverDetailsDto.imgUploaded = true;
            }
        }
        else {
            this.driverDetailsDto.imgUploaded = false;
        }
    };
    DriverMasterComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        //  $( "#dlIssueState" ).val( 'Select State' );
        $("#address").val('');
        this.selectedDriverId = 0;
        this.regStateName = null;
        this.regStateCode = null;
        this.validateStateName_save = null;
        this.rowSelectedStateName = null;
        this.isUploaded = false;
        $("#driverLicenseFileUpload").val('');
        //        console.log( this.selectedDriverId );
    };
    //to insert value of selected row in table to input field starts
    DriverMasterComponent.prototype.rowSelected = function (driverNameData) {
        console.log(driverNameData);
        this.driverDetailsDto.driverName = driverNameData.driverName;
        this.driverDetailsDto.licenceNo = driverNameData.licenceNo;
        this.driverDetailsDto.mobileNo = driverNameData.mobileNo;
        this.driverDetailsDto.address = driverNameData.address;
        //this.driverDetailsDto.DLIssState = driverNameData.DLIssState;
        this.driverDetailsDto.pin = driverNameData.pin;
        this.driverDetailsDto.imgURL = driverNameData.imgURLIMB;
        this.selectedDriverId = driverNameData.id;
        //        console.log( driverNameData.id );
        //        console.log( this.selectedDriverId );
        if (driverNameData.dlissState != null && driverNameData.dlissState != "") {
            this.rowSelectedStateName = driverNameData.dlissState;
            $("#regStateName").val(this.rowSelectedStateName);
        }
    };
    //to insert value of selected row in table to input field ends
    DriverMasterComponent.prototype.ngAfterViewInit = function () { };
    DriverMasterComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    DriverMasterComponent.prototype.validateDeleteRow = function () {
        this.deleteDriverDetails();
    };
    DriverMasterComponent.prototype.getDeleteDriverDetails = function () {
        this.driverDetailsDeleteDto.companyId = this.userDataDtoReturnSession.companyId;
        this.driverDetailsDeleteDto.driverName = this.driverDetailsDto.driverName;
        this.driverDetailsDeleteDto.userId = this.userDataDtoReturnSession.userId;
        this.driverDetailsDeleteDto.id = this.selectedDriverId;
    };
    DriverMasterComponent.prototype.clickListnerForRegState = function (e, fubi) {
        this.modelRegState = e.item;
        console.log(this.modelRegState);
        $("#regStateName").val(this.modelRegState.state);
        $("#pincode").focus();
    };
    DriverMasterComponent.prototype.getStatesMethod = function () {
        var _this = this;
        this.partyMasterDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_13__["PartyMasterDto"]();
        this.partyMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.masteRreadService.getStateDetailsService(this.partyMasterDto).subscribe(function (response) {
            if (response) {
                // console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
                        title: "Warning",
                        text: "No getStatesMethod records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlRegState.reset();
                    _this.partyMasterDtoOptions = [];
                    _this.modelRegStateTA = [];
                }
                else {
                    _this.controlRegState.reset();
                    _this.partyMasterDtoOptions = response;
                    _this.modelRegStateTA = [];
                    for (var i = 0; i < _this.partyMasterDtoOptions.length; i++) {
                        _this.modelRegStateTA.push(_this.partyMasterDtoOptions[i]);
                    }
                }
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_12___default()({
            title: "Error",
            text: "Server Error While Getting getStatesMethod",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    DriverMasterComponent.prototype.focusRegStateTA = function (e) {
        console.log(e);
        if (e.keyCode == 13) {
            $("#pincode").focus();
        }
    };
    DriverMasterComponent.prototype.onFileChangedDriverLicense = function (event) {
        this.selectedFileDriverDetailsForLicense = event.target.files[0];
        // console.log(this.selectedFileDriverDetailsForLicense);
    };
    DriverMasterComponent.prototype.uploadFileForDriverLicBtnUpload = function () {
        var _this = this;
        if ($("#driverLicenseFileUpload").val() != null && $("#driverLicenseFileUpload").val() != "") {
            if ((this.selectedFileDriverDetailsForLicense.type != null &&
                (this.selectedFileDriverDetailsForLicense.type == "image/jpeg" ||
                    this.selectedFileDriverDetailsForLicense.type == "image/jpg" ||
                    this.selectedFileDriverDetailsForLicense.type == "image/png"))) {
                var splitTypeDriverLic = this.selectedFileDriverDetailsForLicense.type.split("/");
                var commonListDriverLic = "vehicledriverdocs&&documents&&ASRAR&&" + splitTypeDriverLic[1] + "&&" + $("#licenceNo").val() + "";
                var formData = new FormData();
                formData.append(commonListDriverLic, commonListDriverLic);
                formData.append('myfileLic', this.selectedFileDriverDetailsForLicense, this.selectedFileDriverDetailsForLicense.name);
                this.masteRreadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        if (response[0] != "Error") {
                            _this.isUploaded = true;
                            sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("File Upload", "File Uploaded Succesfully", "success");
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("ERROR", "Correct the File and Upload Again", "warning");
                        }
                    }
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Error", "Server Error While Uploading a File", "error"); },
                    function () { return console.log('done'); };
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Mandatory Field", "Only jpg & png image format are allowed to upload for RC File", "warning");
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pin"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DriverMasterComponent.prototype, "pinField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DriverMasterComponent.prototype, "dtElements", void 0);
    DriverMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-master',
            template: __webpack_require__(/*! ./driver-master.component.html */ "./src/app/master/transhipment/driver-master/driver-master.component.html"),
            styles: [__webpack_require__(/*! ./driver-master.component.css */ "./src/app/master/transhipment/driver-master/driver-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__["MasterReadService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
            //            service ends
        ])
    ], DriverMasterComponent);
    return DriverMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci90cmFuc2hpcG1lbnQvZXhwZW5zZXMtcGF5bWVudC1mb2xsb3d1cC1yZXBvcnQvZXhwZW5zZXMtcGF5bWVudC1mb2xsb3d1cC1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Expenses Details Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"type\" name=\"type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paid\">Paid</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"unpaid\">Unpaid</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"vendorName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Vendor\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(vendorOptions | filter: control.value) as resultVendor\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultVendor\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultVendor.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsExpensesPaymentFollowupReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerExpensesPaymentFollowupReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Bill Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bill Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Vendor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bill Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Due Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let expensesPaymentFollowupReportData of expensesPaymentFollowupReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesPaymentFollowupReportData.billNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesPaymentFollowupReportData.billDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesPaymentFollowupReportData.vendorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesPaymentFollowupReportData.billAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesPaymentFollowupReportData.paidAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesPaymentFollowupReportData.dueAmount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ExpensesPaymentFollowupReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPaymentFollowupReportComponent", function() { return ExpensesPaymentFollowupReportComponent; });
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


var ExpensesPaymentFollowupReportComponent = /** @class */ (function () {
    function ExpensesPaymentFollowupReportComponent(expensesPaymentFollowupRpt) {
        this.expensesPaymentFollowupRpt = expensesPaymentFollowupRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.vendorOptions = [
            { id: 1, label: 'LK Automobiles' },
            { id: 2, label: 'K.G. Compputers' },
            { id: 3, label: 'KK Power Diesel' }
        ];
        this.dtTriggerExpensesPaymentFollowupReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ExpensesPaymentFollowupReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ExpensesPaymentFollowupReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsExpensesPaymentFollowupReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Bill Number',
                    data: 'billNumber'
                },
                {
                    title: 'Bill Date',
                    data: 'billDate'
                },
                {
                    title: 'Vendor Name',
                    data: 'vendorName'
                },
                {
                    title: 'Bill Amount',
                    data: 'billAmount'
                },
                {
                    title: 'Paid Amount',
                    data: 'paidAmount'
                },
                {
                    title: 'Due Amount',
                    data: 'dueAmount'
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
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
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
        this.gettingDataFrmServiceFrExpensesPaymentFollowupReportTable = this.expensesPaymentFollowupRpt.getSummaryData();
        this.onDestroyUnsubscribtionExpensesPaymentFollowupReport = this.gettingDataFrmServiceFrExpensesPaymentFollowupReportTable.subscribe(function (data) {
            _this.expensesPaymentFollowupReportDataList = data['data'];
            _this.dtTriggerExpensesPaymentFollowupReport.next();
        });
        //the below code is for the getting data through json ends
    };
    ExpensesPaymentFollowupReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerExpensesPaymentFollowupReport.unsubscribe();
        this.onDestroyUnsubscribtionExpensesPaymentFollowupReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ExpensesPaymentFollowupReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    ExpensesPaymentFollowupReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], ExpensesPaymentFollowupReportComponent.prototype, "dtElements", void 0);
    ExpensesPaymentFollowupReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expenses-payment-followup-report',
            template: __webpack_require__(/*! ./expenses-payment-followup-report.component.html */ "./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.html"),
            styles: [__webpack_require__(/*! ./expenses-payment-followup-report.component.css */ "./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ExpensesPaymentFollowupReportComponent);
    return ExpensesPaymentFollowupReportComponent;
}());



/***/ }),

/***/ "./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_custome_padding {\n\tpadding: 1px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3RyYW5zaGlwbWVudC9nZXQtaGlyZXNsaXAtYmFyY29kZS12YWx1ZS9nZXQtaGlyZXNsaXAtYmFyY29kZS12YWx1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL3RyYW5zaGlwbWVudC9nZXQtaGlyZXNsaXAtYmFyY29kZS12YWx1ZS9nZXQtaGlyZXNsaXAtYmFyY29kZS12YWx1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bl9jdXN0b21lX3BhZGRpbmcge1xuXHRwYWRkaW5nOiAxcHggNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t<ng-template #content let-a=\"close\" let-b=\"close\" let-c=\"close\"\n\t\t\t\tlet-d=\"dismiss\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Get Barcode\n\t\t\t\t\tValue</h6>\n\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hireslipNumber\">\n\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"barcodeValue\">\n\t\t\t\t\t\t\t\t\t\t<label>Barcode Value</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn_custome_padding btn btn-outline-success\"\n\t\t\t\t\t\t\t(click)=\"a('getCode click')\">Get Code</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"b('close click')\">Close</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"c('Cancel click')\">Cancel</button>\n\t\t\t</div>\n\t\t\t</ng-template>\n\n\t\t\t<a style=\"cursor: pointer; color: blue; font-weight: bolder;\"\n\t\t\t\t(click)=\"open2(content)\">Click Here</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: GetHireslipBarcodeValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetHireslipBarcodeValueComponent", function() { return GetHireslipBarcodeValueComponent; });
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
var GetHireslipBarcodeValueComponent = /** @class */ (function () {
    //summaryTable:any;
    function GetHireslipBarcodeValueComponent(modalService) {
        this.modalService = modalService;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.reasonForReturnOptions = [
            { id: 1, label: 'ADD NEW' },
            { id: 2, label: 'Door Locked' },
            { id: 3, label: 'Vehicle Repair' },
            { id: 3, label: 'over load' }
        ];
    }
    //for popup modal starts 
    GetHireslipBarcodeValueComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    GetHireslipBarcodeValueComponent.prototype.getDismissReason = function (reason) {
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
    //for the select option with filter starts
    GetHireslipBarcodeValueComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    GetHireslipBarcodeValueComponent.prototype.ngOnInit = function () {
    };
    GetHireslipBarcodeValueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-hireslip-barcode-value',
            template: __webpack_require__(/*! ./get-hireslip-barcode-value.component.html */ "./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.html"),
            styles: [__webpack_require__(/*! ./get-hireslip-barcode-value.component.css */ "./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], GetHireslipBarcodeValueComponent);
    return GetHireslipBarcodeValueComponent;
}());



/***/ }),

/***/ "./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n\t-webkit-appearance: none;\n\tmargin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3RyYW5zaGlwbWVudC9sb3JyeS1oaXJlLWRlZHVjdGlvbi1zZXR1cC9sb3JyeS1oaXJlLWRlZHVjdGlvbi1zZXR1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDViIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci90cmFuc2hpcG1lbnQvbG9ycnktaGlyZS1kZWR1Y3Rpb24tc2V0dXAvbG9ycnktaGlyZS1kZWR1Y3Rpb24tc2V0dXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Lorry Hire Deduction Setup</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-8 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Trip Duration</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #source id=\"source\" name=\"source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.fromstation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceOptions | filter: controlSource.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #destination id=\"destination\" name=\"destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.tostation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: controlDestination.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Buffer Time(In Hrs)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Hours\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"bufferTimeInHrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, bufferTimeInMins)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#bufferTimeInHrs [(ngModel)]=\"hireSlipDto.buffTimeInHr\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Minutes\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, timeToReach)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#bufferTimeInMins id=\"bufferTimeInMins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.buffTimeInMin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8 vl\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Time Setting</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"from\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">From Hrs</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"to\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">To Hrs</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"amount\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"fromTime\" name=\"fromTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" #fromTime\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, toTime)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.fromTime\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"toTime\" name=\"toTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" #toTime\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, rewardAmt)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.toTime\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"rewardingAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"rewardingAmt\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" #rewardAmt\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, addBtn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.rewardAmt\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\" style='display: none'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"hiddenIndex\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' id=\"addInTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#addBtn class=\"btn btn-icon-only yellow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addInTable();\"> <i class=\"fa fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLorryHireDeductionSetup\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLorryHireDeductionSetup\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>From Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rewarding Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let lorryHireDeductionSetupData of lorryHireDeductionSetupDataList; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireDeductionSetupData.fromTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireDeductionSetupData.toTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireDeductionSetupData.rewardAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableEditBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEdit(lorryHireDeductionSetupData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Edit\" class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDelete(i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\"\n\t\t\t\t\t\t\t\t#saveBtn (click)=\"validateLorryHireDeductionDetails()\">Save</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"removeBtn\" (click)=\"validateDeleteRow()\">Remove</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t(click)=\"getTimeList()\" id=\"clearBtn\">Get</button> -->\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4 vl\"></div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: LorryHireDeductionSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LorryHireDeductionSetupComponent", function() { return LorryHireDeductionSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for service starts





//for service ends
//for the select option with filter starts

//for the select option with filter ends
//for datatable starts



//for datatable ends
var LorryHireDeductionSetupComponent = /** @class */ (function () {
    function LorryHireDeductionSetupComponent(masterReadService, http, router, masterService
    //            service ends        
    ) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.masterService = masterService;
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_2__["HireSlipDto"]();
        this.hireSlipDtoDelete = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_2__["HireSlipDto"]();
        this.isLoggedIn = true;
        //    lorryHireDeductionSetupDataList: any;
        this.lorryHireDeductionSetupDataList = [];
        this.newAttribute = {};
        //for the select option with filter starts
        this.controlSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.sourceOptions = [
            { id: 1, label: 'Delhi', },
            { id: 2, label: 'Mumbai', },
            { id: 3, label: 'Budhpur', },
        ];
        this.destinationOptions = [
            { id: 1, label: 'Chennai' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Kerela' },
        ];
        this.dtTriggerLorryHireDeductionSetup = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getlorryHireDeductionList = function () {
            //        console.log( this.hireSlipDto.fromstation );
            _this.getUserDetailsForReadTime();
            _this.masterReadService.getLorryHireDeductionService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.lorryHireDeductionDataList = response;
                    _this.hireSlipDto = _this.lorryHireDeductionDataList;
                    _this.hireSlipDto.buffTimeInMin = _this.lorryHireDeductionDataList.buffTimeInMin.toFixed();
                    _this.lorryHireDeductionSetupDataList = _this.hireSlipDto.listTimeSettings;
                    //                  this.dtTriggerExpensesHeads.next();
                    //                    console.log( this.lorryHireDeductionDataList );
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
                text: "Server Error While Getting Time Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateLorryHireDeductionDetails = function () {
            _this.saveLorryHireDeductionDetails();
            _this.masterService.createLorryHireDeductionDetails(_this.hireSlipDto).
                subscribe(function (data) {
                _this.hireSlipDtoSaveRet = data;
                if (_this.hireSlipDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Success",
                        text: "Lorry Hire Deduction Details Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Error",
                        text: "Error While Saving Lorry Hire Deduction Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Error",
                    text: "Server Error While Saving Lorry Hire Deduction Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteLorryHireDeductionDetails = function () {
            _this.getDeleteLorryHireDeductionDetails();
            _this.masterService.deleteLorryHireDeduction(_this.hireSlipDtoDelete).
                subscribe(function (data) {
                _this.hireSlipDtoDeleteRet = data;
                if (_this.hireSlipDtoDeleteRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Success",
                        text: "Penalty Details Removed Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getlorryHireDeductionList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Error",
                        text: "Error While Deleting Penalty Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Error",
                    text: "Server Error While Deleting Penalty Details",
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
            this.getlorryHireDeductionList();
            this.timeSettingDetailsTable();
        }
    }
    //for the select option with filter ends
    LorryHireDeductionSetupComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    LorryHireDeductionSetupComponent.prototype.ngOnInit = function () {
    };
    //  service starts
    LorryHireDeductionSetupComponent.prototype.getUserDetailsForReadTime = function () {
        this.hireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDto.fromstation = "Budhpur";
        this.hireSlipDto.tostation = "Chennai";
    };
    //    service ends
    LorryHireDeductionSetupComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LorryHireDeductionSetupComponent.prototype.serviceCall = function () {
        //        console.log( this.hireSlipDto.tostation );
        this.getlorryHireDeductionList();
    };
    LorryHireDeductionSetupComponent.prototype.timeSettingDetailsTable = function () {
        //the first datatable starts
        this.dtOptionsLorryHireDeductionSetup = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Party Name',
            //                    data: 'partyName'
            //                },
            //                {
            //                    title: 'TDS Certf.No.',
            //                    data: 'tdsCertificateNumber'
            //                },
            //                {
            //                    title: 'TDS Amount',
            //                    data: 'tdsAmount'
            //                },
            //                {
            //                    title: 'From Period',
            //                    data: 'fromPeriod'
            //                },
            //                {
            //                    title: 'To Period',
            //                    data: 'toPeriod'
            //                },
            //                {
            //                    title: 'Payment Mode',
            //                    data: 'paymentMode'
            //                },
            //                {
            //                    title: 'Bank Name',
            //                    data: 'bankName'
            //                },
            //                {
            //                    title: 'Chq No.',
            //                    data: 'chequeNumber'
            //                },
            //                {
            //                    title: 'Chq.Date',
            //                    data: 'chequeDate'
            //                },
            //                {
            //                    title: 'Ref.No',
            //                    data: 'referenceNumber'
            //                },
            //                {
            //                    title: 'Setlm.Date',
            //                    data: 'settlementDate'
            //                },
            //                {
            //                    title: 'Remarks',
            //                    data: 'remarks'
            //                },
            //                {
            //                    title: 'TDS Certf. Copy',
            //                    data: 'tdsCertificateCopy'
            //                }
            //            ],
            //columns is used to for export and others endss
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
            "scrollY": 280,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": true,
            "info": true,
            pagingType: 'full_numbers',
            pageLength: 9,
        };
        //        this.getTdsEntryMasterDetailsList();
        //the first datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        //            this.getDataLorryHireDeductionSetupDataTable = this.tdsDetailsEntryRpt.getSummaryData()
        //        this.onDestroyUnsubscribtionLorryHireDeductionSetup = this.getDataLorryHireDeductionSetupDataTable.subscribe( data => {
        //            this.lorryHireDeductionSetupDataList = data['data'];
        //            this.dtTriggerLorryHireDeductionSetup.next();
        //        } );
        //first service ends
    };
    LorryHireDeductionSetupComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLorryHireDeductionSetup.unsubscribe();
        //        this.onDestroyUnsubscribtionLorryHireDeductionSetup.unsubscribe();
    };
    //to insert value of selected row in table to input field starts
    //    rowSelectedEdit( lorryHireDeductionSetupData ) {
    //        this.hireSlipDto.fromTime = lorryHireDeductionSetupData.fromTime;
    //        this.hireSlipDto.toTime = lorryHireDeductionSetupData.toTime;
    //        this.hireSlipDto.rewardAmt = lorryHireDeductionSetupData.rewardAmt;
    //    }
    //    rowSelectedDelete( lorryHireDeductionSetupData ) {
    //
    //        //        this.hireSlipDto.fromTime = LorryHireDeductionSetupData.fromTime;
    //        //        this.hireSlipDto.toTime = LorryHireDeductionSetupData.toTime;
    //        //        this.hireSlipDto.rewardAmt = LorryHireDeductionSetupData.rewardAmt;
    //        //        this.timeDataList.splice(index, 1); 
    //        //        console.log( this.hireSlipDto.fromTime + "," + this.hireSlipDto.toTime + "," + this.hireSlipDto.rewardAmt );
    //    }
    //    addRow( lorryHireDeductionSetupDataList ) {
    //        LorryHireDeductionSetupDataList.fromTime = this.hireSlipDto.fromTime;
    //        LorryHireDeductionSetupDataList.toTime = this.hireSlipDto.toTime;
    //        LorryHireDeductionSetupDataList.rewardAmt = this.hireSlipDto.rewardAmt;
    //        console.log( this.hireSlipDto.fromTime + "," + this.hireSlipDto.toTime + "," + this.hireSlipDto.rewardAmt );
    //    }
    //to insert value of selected row in table to input field ends
    LorryHireDeductionSetupComponent.prototype.addInTable = function () {
        this.newAttribute.fromTime = $("#fromTime").val();
        this.newAttribute.toTime = $("#toTime").val();
        this.newAttribute.rewardAmt = $("#rewardingAmt").val();
        console.log(this.newAttribute.rewardAmt);
        if ((parseInt(this.newAttribute.toTime) > parseInt(this.newAttribute.fromTime)) && (this.newAttribute.rewardAmt != '')) {
            if (this.editTableId != null) {
                this.lorryHireDeductionSetupDataList.splice(this.editTableId, 1);
            }
            if (this.lorryHireDeductionSetupDataList == null) {
                this.lorryHireDeductionSetupDataList = [];
            }
            if (this.lorryHireDeductionSetupDataList.length == 0) {
                this.lorryHireDeductionSetupDataList.push(this.newAttribute);
            }
            else {
                var array = this.lorryHireDeductionSetupDataList;
                this.lorryHireDeductionSetupDataList.push(this.newAttribute);
            }
            this.newAttribute = {};
            $("#fromTime").val('');
            $("#toTime").val('');
            $("#rewardingAmt").val('');
            $("#hiddenIndex").val('');
            this.editTableId = null;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Warning",
                text: "To  Time  must been greater then From Time",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    LorryHireDeductionSetupComponent.prototype.rowSelectedEdit = function (timeSettingEntryTableData, index) {
        console.log(timeSettingEntryTableData.fromTime);
        $("#fromTime").val(timeSettingEntryTableData.fromTime);
        $("#toTime").val(timeSettingEntryTableData.toTime);
        $("#rewardingAmt").val(timeSettingEntryTableData.rewardAmt);
        $("#hiddenIndex").val(index);
        this.editTableId = index;
        //    console.log( timeSettingEntryTableData.fromTime, index );
    };
    LorryHireDeductionSetupComponent.prototype.rowSelectedDelete = function (index) {
        this.lorryHireDeductionSetupDataList.splice(index, 1);
        $("#fromTime").val('');
        $("#toTime").val('');
        $("#rewardingAmt").val('');
        $("#hiddenIndex").val('');
    };
    LorryHireDeductionSetupComponent.prototype.validateLorryHireDeductionDetails = function () {
        this.saveUpdateLorryHireDeductionDetails();
    };
    LorryHireDeductionSetupComponent.prototype.saveLorryHireDeductionDetails = function () {
        this.hireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDto.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDto.branch = this.userDataDtoReturnSession.mainStation;
        this.hireSlipDto.listTimeSettings = this.lorryHireDeductionSetupDataList;
        //        console.log( this.hireSlipDto.listTimeSettings );
    };
    LorryHireDeductionSetupComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.lorryHireDeductionSetupDataList = [];
        $("#source").val('');
        $("#destination").val('');
        this.hireSlipDto.fromstation = null;
        this.hireSlipDto.tostation = null;
    };
    LorryHireDeductionSetupComponent.prototype.validateDeleteRow = function () {
        this.deleteLorryHireDeductionDetails();
    };
    LorryHireDeductionSetupComponent.prototype.getDeleteLorryHireDeductionDetails = function () {
        this.hireSlipDtoDelete.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDtoDelete.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDtoDelete.fromstation = this.hireSlipDto.fromstation;
        this.hireSlipDtoDelete.tostation = this.hireSlipDto.tostation;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LorryHireDeductionSetupComponent.prototype, "dtElements", void 0);
    LorryHireDeductionSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lorry-hire-deduction-setup',
            template: __webpack_require__(/*! ./lorry-hire-deduction-setup.component.html */ "./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.html"),
            styles: [__webpack_require__(/*! ./lorry-hire-deduction-setup.component.css */ "./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_1__["MasterReadService"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"]
            //            service ends        
        ])
    ], LorryHireDeductionSetupComponent);
    return LorryHireDeductionSetupComponent;
}());



/***/ }),

/***/ "./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci90cmFuc2hpcG1lbnQvbmF0dXJlLW9mLXBhY2svbmF0dXJlLW9mLXBhY2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Nature of Pack</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"packName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pack Name*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #packName (keyup)=\"fieldFocus($event, saveBtn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"packName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"packName\" [(ngModel)]=\"selectedName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button #saveBtn type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t(click)=\"savePackOfNatureBtn()\" id=\"saveBtn\">Save/Update</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"deleteBtn\" (click)=\"validateDeleteRow()\">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<table datatable id=\"natureOfPackDatatableId\"\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsNatureOfPack\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerNatureOfPack\">\n\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let natureOfPackData of natureOfPackDataList\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelected(natureOfPackData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ natureOfPackData.packNature }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.ts ***!
  \********************************************************************************/
/*! exports provided: NatureOfPackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NatureOfPackComponent", function() { return NatureOfPackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
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


// for datatable ends
//service starts

//we used any keyword so comment
//import { ConsigneedetailsModel } from 'src/app/models/Consigneedetails-model';
//import { PartyMasterDto } from "src/app/dto/PartyMaster-dto";
//import { MasterDto } from 'src/app/dto/master-dto';

//import { PartyModel } from "src/app/models/party-model";
//service ends



var NatureOfPackComponent = /** @class */ (function () {
    function NatureOfPackComponent(/* for datatable starts */ masterService, /* for datatable endss */ 
    //          service starts
    masterReadService, http, router
    //            service ends        
    ) {
        var _this = this;
        this.masterService = masterService;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDeleteDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        //    onDestroyUnsubscribtionNatureOfPack: Subscription;
        //service starts      
        //    partyModel: PartyModel = new PartyModel();
        this.baseUrl = '/api/v1/createconsignee';
        //for datatable ends
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        this.packId = 0;
        this.dtTriggerNatureOfPack = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //    getValuesForNatureOfPackList() {
        //        var masterDto = {
        //            'mainStation': 'Delhi',
        //            'mainAdminStation': 'Budhpur'
        //        }
        //        return masterDto;
        //    }
        this.getNatureOfPackList = function () {
            //        console.log( this.lrDto.companyId );
            _this.getNatureOfPackListRead();
            _this.masterReadService.getNatureOfPack(_this.lrDto).subscribe(function (response) {
                if (response) {
                    // console.log( response );
                    _this.natureOfPackDataList = response;
                    $("#natureOfPackDatatableId").DataTable().destroy();
                    _this.dtTriggerNatureOfPack.next();
                    //                    console.log( this.natureOfPackDataList[0] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Error",
                text: "Server Error While Getting Nature Of Pack Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.checkNatureOfPackDetails = function () {
            _this.checkPackDetails();
            _this.masterService.checkPackName(_this.lrDto).
                subscribe(function (data) {
                _this.lrDtoCheckRet = data;
                console.log(_this.lrDtoCheckRet.status);
                if (_this.lrDtoCheckRet.status == "exist") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Error",
                        text: "This Pack Name Already Exist",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (_this.lrDtoCheckRet.status == "notExist") {
                    _this.savePackNature();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Error",
                        text: "Server Error While Saving Pack Name Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Error",
                    text: "Server Error While Saving Pack Name Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.savePackNature = function () {
            _this.checkPackDetails();
            _this.masterService.createNatureOfPack(_this.lrDto).
                subscribe(function (data) {
                _this.lrDtoSaveRet = data;
                //console.log( this.lrDtoSaveRet.status );
                if (_this.lrDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Success",
                        text: "Pack Name Details Saved/Updated Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    _this.getNatureOfPackList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Error",
                        text: "Error While Saving Pack Name Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Error",
                    text: "Server Error While Saving Pack Name Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteNatureOfPackDetails = function () {
            _this.getDeleteNatureOfPackDetails();
            _this.masterService.deleteNatureOfPack(_this.lrDeleteDto).
                subscribe(function (data) {
                _this.lrDtoDelelteRet = data;
                if (_this.lrDtoDelelteRet.status == "deleted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Success",
                        text: "Nature Of Pack Details Deleted Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    _this.getNatureOfPackList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Error",
                        text: "Error While Deleting Nature Of Pack Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Error",
                    text: "Server Error While Deleting Nature Of Pack Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
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
            this.natureOfPackDatatable();
            this.getNatureOfPackList();
        }
    }
    NatureOfPackComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    /* for datatable starts */
    NatureOfPackComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    NatureOfPackComponent.prototype.ngOnInit = function () {
    };
    NatureOfPackComponent.prototype.natureOfPackDatatable = function () {
        //for datatable starts
        this.dtOptionsNatureOfPack = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Name',
                    data: 'name'
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
        //          this.supplierList.getAllData().subscribe(data => {
        //              this.lrDispatchBknRptList = data['data'];
        //              this.dtTriggerSummary.next();
        //              } );
        //        this.gettingDataFrmServiceFrNatureOfPackTable = this.natureOfPack.getSummaryData()
        //        this.onDestroyUnsubscribtionNatureOfPack = this.gettingDataFrmServiceFrNatureOfPackTable.subscribe( data => {
        //            this.natureOfPackDataList = data['data'];
        //            this.dtTriggerNatureOfPack.next();
        //        } );
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    NatureOfPackComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerNatureOfPack.unsubscribe();
        //        this.onDestroyUnsubscribtionNatureOfPack.unsubscribe();
        //for datatable ends
    };
    //  service starts
    NatureOfPackComponent.prototype.getNatureOfPackListRead = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    //    getNatureOfPackList = () => {
    //        /*let apiUrlConsigneeModel = `http://localhost:8080/srd/master/v1/returnNatureOfPackModel`;
    //        this.http.get(apiUrlConsigneeModel).subscribe(
    //            (response) => {
    //
    //                this.natureOfPackDataList = response.json();
    //
    //            }),
    //            (error) => console.log(error.json()),
    //            () => console.log('done');*/
    //
    //
    //
    //        let apiUrlNatureOfPackDetails = `http://localhost:8080/srd/master/v1/getNatureOfPack`;
    //        this.http.get( apiUrlNatureOfPackDetails, {
    //            params: {
    //                //                masterDto: this.getNatureOfPackList(),
    //                //                city: 'Chennai',
    //            },
    //        } ).subscribe(
    //            ( response ) => {
    //                if ( response.json().length == 0 ) {
    //                    alert( 'No records found for the selected city!' );
    //                } else {
    //                    this.natureOfPackDataList = response.json();
    //                    this.dtTriggerNatureOfPack.next();
    //                    console.log( this.natureOfPackDataList[0] );
    //                }
    //            } ),
    //            ( error ) => console.log( "edfdf" + error.json() ),
    //            () => console.log( 'done' );
    //
    //    };
    //    service ends
    //to insert value of selected row in table to input field starts
    NatureOfPackComponent.prototype.rowSelected = function (natureOfPackData) {
        this.selectedName = natureOfPackData.packNature;
        this.packId = natureOfPackData.id;
        //        console.log( this.selectedName );
    };
    //to insert value of selected row in table to input field ends
    NatureOfPackComponent.prototype.savePackOfNatureBtn = function () {
        this.validateSavePackName = this.selectedName;
        console.log(this.validateSavePackName);
        if (this.validateSavePackName == null || this.validateSavePackName == undefined || this.validateSavePackName == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandetory Field", "Please Enter the Mandetory Field", "warning");
            return false;
        }
        else {
            this.checkNatureOfPackDetails();
        }
    };
    NatureOfPackComponent.prototype.checkPackDetails = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.userName = this.userDataDtoReturnSession.office;
        this.lrDto.mode = "packMaster";
        this.lrDto.packName = this.selectedName;
        this.lrDto.id = this.packId;
    };
    NatureOfPackComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.packId = 0;
        this.selectedName = null;
    };
    NatureOfPackComponent.prototype.ngAfterViewInit = function () { };
    NatureOfPackComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    NatureOfPackComponent.prototype.validateDeleteRow = function () {
        this.deleteNatureOfPackDetails();
    };
    NatureOfPackComponent.prototype.getDeleteNatureOfPackDetails = function () {
        this.lrDeleteDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDeleteDto.userName = this.userDataDtoReturnSession.userId;
        this.lrDeleteDto.id = this.packId;
        this.lrDeleteDto.mode = "packMaster";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NatureOfPackComponent.prototype, "dtElements", void 0);
    NatureOfPackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nature-of-pack',
            template: __webpack_require__(/*! ./nature-of-pack.component.html */ "./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.html"),
            styles: [__webpack_require__(/*! ./nature-of-pack.component.css */ "./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
            //            service ends        
        ])
    ], NatureOfPackComponent);
    return NatureOfPackComponent;
}());



/***/ }),

/***/ "./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci90cmFuc2hpcG1lbnQvcG9pbnQtdG8tcG9pbnQtc2VydmljZS1jaGVjay9wb2ludC10by1wb2ludC1zZXJ2aWNlLWNoZWNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  point-to-point-service-check works!\n</p>\n"

/***/ }),

/***/ "./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PointToPointServiceCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointToPointServiceCheckComponent", function() { return PointToPointServiceCheckComponent; });
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

var PointToPointServiceCheckComponent = /** @class */ (function () {
    function PointToPointServiceCheckComponent() {
    }
    PointToPointServiceCheckComponent.prototype.ngOnInit = function () {
    };
    PointToPointServiceCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-point-to-point-service-check',
            template: __webpack_require__(/*! ./point-to-point-service-check.component.html */ "./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.html"),
            styles: [__webpack_require__(/*! ./point-to-point-service-check.component.css */ "./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PointToPointServiceCheckComponent);
    return PointToPointServiceCheckComponent;
}());



/***/ }),

/***/ "./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci90cmFuc2hpcG1lbnQvdHJhY2tpbmctbGl2ZS1yZXBvcnQvdHJhY2tpbmctbGl2ZS1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Truck / Device Live Status</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTrackingLiveReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTrackingLiveReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>S.No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Device Id</th>\n\t\t\t\t\t\t\t\t\t\t<th>Depart Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Vehicle Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Driver Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Driver Contact</th>\n\t\t\t\t\t\t\t\t\t\t<th>Supplier Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Last Location</th>\n\t\t\t\t\t\t\t\t\t\t<th>Last Updated At</th>\n\t\t\t\t\t\t\t\t\t\t<th>ETA</th>\n\t\t\t\t\t\t\t\t\t\t<th>Battery</th>\n\t\t\t\t\t\t\t\t\t\t<th>Track On Map</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let trackingLiveReportData of trackingLiveReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.sNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.deviceId }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.derartureDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.driverName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.driverContact }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.supplierName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.lastLocation }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.lastUpdatedAt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.eta }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.battery }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ trackingLiveReportData.trackOnMap }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TrackingLiveReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingLiveReportComponent", function() { return TrackingLiveReportComponent; });
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

//for the select option with filter ends


var TrackingLiveReportComponent = /** @class */ (function () {
    function TrackingLiveReportComponent(trackingLiveReport) {
        this.trackingLiveReport = trackingLiveReport;
        //summaryTable:any;
        this.loadingIndicator = true;
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.vendorOptions = [
            { id: 1, label: 'LK Automobiles' },
            { id: 2, label: 'K.G. Compputers' },
            { id: 3, label: 'KK Power Diesel' }
        ];
        this.dtTriggerTrackingLiveReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    TrackingLiveReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TrackingLiveReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsTrackingLiveReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'S.No',
                    data: 'sNo'
                },
                {
                    title: 'Device Id',
                    data: 'deviceId'
                },
                {
                    title: 'Depart Date',
                    data: 'derartureDate'
                },
                {
                    title: 'Invoice Number',
                    data: 'invoiceNumber'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Destination',
                    data: 'destination'
                },
                {
                    title: 'Vehicle Number',
                    data: 'vehicleNumber'
                },
                {
                    title: 'Driver Name',
                    data: 'driverName'
                },
                {
                    title: 'Driver Contact',
                    data: 'driverContact'
                },
                {
                    title: 'Supplier Name',
                    data: 'supplierName'
                },
                {
                    title: 'Last Location',
                    data: 'lastLocation'
                },
                {
                    title: 'Last Updated At',
                    data: 'lastUpdatedAt'
                },
                {
                    title: 'ETA',
                    data: 'eta'
                },
                {
                    title: 'Battery',
                    data: 'battery'
                },
                {
                    title: 'Track On Map',
                    data: 'trackOnMap'
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
        this.gettingDataFrmServiceFrTrackingLiveReportTable = this.trackingLiveReport.getSummaryData();
        this.onDestroyUnsubscribtionTrackingLiveReport = this.gettingDataFrmServiceFrTrackingLiveReportTable.subscribe(function (data) {
            _this.trackingLiveReportDataList = data['data'];
            _this.dtTriggerTrackingLiveReport.next();
        });
        //the below code is for the getting data through json ends
    };
    TrackingLiveReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTrackingLiveReport.unsubscribe();
        this.onDestroyUnsubscribtionTrackingLiveReport.unsubscribe();
    };
    //for the select option with filter starts
    TrackingLiveReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], TrackingLiveReportComponent.prototype, "dtElements", void 0);
    TrackingLiveReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tracking-live-report',
            template: __webpack_require__(/*! ./tracking-live-report.component.html */ "./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.html"),
            styles: [__webpack_require__(/*! ./tracking-live-report.component.css */ "./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], TrackingLiveReportComponent);
    return TrackingLiveReportComponent;
}());



/***/ }),

/***/ "./src/app/master/transhipment/transhipment.module.ts":
/*!************************************************************!*\
  !*** ./src/app/master/transhipment/transhipment.module.ts ***!
  \************************************************************/
/*! exports provided: TranshipmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranshipmentModule", function() { return TranshipmentModule; });
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
/* harmony import */ var src_app_master_transhipment_transhipment_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/master/transhipment/transhipment.routing */ "./src/app/master/transhipment/transhipment.routing.ts");
/* harmony import */ var src_app_master_transhipment_driver_master_driver_master_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/master/transhipment/driver-master/driver-master.component */ "./src/app/master/transhipment/driver-master/driver-master.component.ts");
/* harmony import */ var src_app_master_transhipment_vehicle_setup_master_vehicle_setup_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component */ "./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.ts");
/* harmony import */ var src_app_master_transhipment_truck_master_truck_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/master/transhipment/truck-master/truck-master.component */ "./src/app/master/transhipment/truck-master/truck-master.component.ts");
/* harmony import */ var src_app_master_transhipment_lorry_hire_deduction_setup_lorry_hire_deduction_setup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component */ "./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.ts");
/* harmony import */ var src_app_master_transhipment_nature_of_pack_nature_of_pack_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/master/transhipment/nature-of-pack/nature-of-pack.component */ "./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.ts");
/* harmony import */ var src_app_master_transhipment_expenses_payment_followup_report_expenses_payment_followup_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component */ "./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.ts");
/* harmony import */ var src_app_master_transhipment_tracking_live_report_tracking_live_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/master/transhipment/tracking-live-report/tracking-live-report.component */ "./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.ts");
/* harmony import */ var src_app_master_transhipment_point_to_point_service_check_point_to_point_service_check_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component */ "./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.ts");
/* harmony import */ var src_app_master_transhipment_get_hireslip_barcode_value_get_hireslip_barcode_value_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component */ "./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.ts");
/* harmony import */ var src_app_master_transhipment_agent_tempo_master_agent_tempo_master_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component */ "./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { DatatableComponent } from '@swimlane/ngx-datatable';
//(DatatableComponent) table: DatatableComponent;
/*for old datatable*/ 


//for select option search starts




//for select option search ends











var TranshipmentModule = /** @class */ (function () {
    function TranshipmentModule() {
    }
    TranshipmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_transhipment_transhipment_routing__WEBPACK_IMPORTED_MODULE_10__["TranshipmentRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [
                src_app_master_transhipment_driver_master_driver_master_component__WEBPACK_IMPORTED_MODULE_11__["DriverMasterComponent"],
                src_app_master_transhipment_vehicle_setup_master_vehicle_setup_master_component__WEBPACK_IMPORTED_MODULE_12__["VehicleSetupMasterComponent"],
                src_app_master_transhipment_truck_master_truck_master_component__WEBPACK_IMPORTED_MODULE_13__["TruckMasterComponent"],
                src_app_master_transhipment_lorry_hire_deduction_setup_lorry_hire_deduction_setup_component__WEBPACK_IMPORTED_MODULE_14__["LorryHireDeductionSetupComponent"],
                src_app_master_transhipment_nature_of_pack_nature_of_pack_component__WEBPACK_IMPORTED_MODULE_15__["NatureOfPackComponent"],
                src_app_master_transhipment_expenses_payment_followup_report_expenses_payment_followup_report_component__WEBPACK_IMPORTED_MODULE_16__["ExpensesPaymentFollowupReportComponent"],
                src_app_master_transhipment_tracking_live_report_tracking_live_report_component__WEBPACK_IMPORTED_MODULE_17__["TrackingLiveReportComponent"],
                src_app_master_transhipment_point_to_point_service_check_point_to_point_service_check_component__WEBPACK_IMPORTED_MODULE_18__["PointToPointServiceCheckComponent"],
                src_app_master_transhipment_get_hireslip_barcode_value_get_hireslip_barcode_value_component__WEBPACK_IMPORTED_MODULE_19__["GetHireslipBarcodeValueComponent"],
                src_app_master_transhipment_agent_tempo_master_agent_tempo_master_component__WEBPACK_IMPORTED_MODULE_20__["AgentTempoMasterComponent"]
            ]
        })
    ], TranshipmentModule);
    return TranshipmentModule;
}());



/***/ }),

/***/ "./src/app/master/transhipment/transhipment.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/master/transhipment/transhipment.routing.ts ***!
  \*************************************************************/
/*! exports provided: TranshipmentRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranshipmentRoutes", function() { return TranshipmentRoutes; });
/* harmony import */ var src_app_master_transhipment_driver_master_driver_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/master/transhipment/driver-master/driver-master.component */ "./src/app/master/transhipment/driver-master/driver-master.component.ts");
/* harmony import */ var src_app_master_transhipment_vehicle_setup_master_vehicle_setup_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component */ "./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.ts");
/* harmony import */ var src_app_master_transhipment_truck_master_truck_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/master/transhipment/truck-master/truck-master.component */ "./src/app/master/transhipment/truck-master/truck-master.component.ts");
/* harmony import */ var src_app_master_transhipment_lorry_hire_deduction_setup_lorry_hire_deduction_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component */ "./src/app/master/transhipment/lorry-hire-deduction-setup/lorry-hire-deduction-setup.component.ts");
/* harmony import */ var src_app_master_transhipment_nature_of_pack_nature_of_pack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/master/transhipment/nature-of-pack/nature-of-pack.component */ "./src/app/master/transhipment/nature-of-pack/nature-of-pack.component.ts");
/* harmony import */ var src_app_master_transhipment_expenses_payment_followup_report_expenses_payment_followup_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component */ "./src/app/master/transhipment/expenses-payment-followup-report/expenses-payment-followup-report.component.ts");
/* harmony import */ var src_app_master_transhipment_tracking_live_report_tracking_live_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/master/transhipment/tracking-live-report/tracking-live-report.component */ "./src/app/master/transhipment/tracking-live-report/tracking-live-report.component.ts");
/* harmony import */ var src_app_master_transhipment_point_to_point_service_check_point_to_point_service_check_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component */ "./src/app/master/transhipment/point-to-point-service-check/point-to-point-service-check.component.ts");
/* harmony import */ var src_app_master_transhipment_get_hireslip_barcode_value_get_hireslip_barcode_value_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component */ "./src/app/master/transhipment/get-hireslip-barcode-value/get-hireslip-barcode-value.component.ts");
/* harmony import */ var src_app_master_transhipment_agent_tempo_master_agent_tempo_master_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component */ "./src/app/master/transhipment/agent-tempo-master/agent-tempo-master.component.ts");










var TranshipmentRoutes = [
    {
        path: '',
        children: [
            {
                path: 'driverMaster',
                component: src_app_master_transhipment_driver_master_driver_master_component__WEBPACK_IMPORTED_MODULE_0__["DriverMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'vehicleSetupMaster',
                component: src_app_master_transhipment_vehicle_setup_master_vehicle_setup_master_component__WEBPACK_IMPORTED_MODULE_1__["VehicleSetupMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'truckMaster',
                component: src_app_master_transhipment_truck_master_truck_master_component__WEBPACK_IMPORTED_MODULE_2__["TruckMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lorryHireDeductionSetupMaster',
                component: src_app_master_transhipment_lorry_hire_deduction_setup_lorry_hire_deduction_setup_component__WEBPACK_IMPORTED_MODULE_3__["LorryHireDeductionSetupComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'natureOfPack',
                component: src_app_master_transhipment_nature_of_pack_nature_of_pack_component__WEBPACK_IMPORTED_MODULE_4__["NatureOfPackComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'expensesPaymentFollowupReport',
                component: src_app_master_transhipment_expenses_payment_followup_report_expenses_payment_followup_report_component__WEBPACK_IMPORTED_MODULE_5__["ExpensesPaymentFollowupReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'trackingLiveReport',
                component: src_app_master_transhipment_tracking_live_report_tracking_live_report_component__WEBPACK_IMPORTED_MODULE_6__["TrackingLiveReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'pointToPointServiceCheck',
                component: src_app_master_transhipment_point_to_point_service_check_point_to_point_service_check_component__WEBPACK_IMPORTED_MODULE_7__["PointToPointServiceCheckComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'getHireslipBarcodeValue',
                component: src_app_master_transhipment_get_hireslip_barcode_value_get_hireslip_barcode_value_component__WEBPACK_IMPORTED_MODULE_8__["GetHireslipBarcodeValueComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'agentTempoMaster',
                component: src_app_master_transhipment_agent_tempo_master_agent_tempo_master_component__WEBPACK_IMPORTED_MODULE_9__["AgentTempoMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\n\nhr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below css is done for the verticle form ends here */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3RyYW5zaGlwbWVudC92ZWhpY2xlLXNldHVwLW1hc3Rlci92ZWhpY2xlLXNldHVwLW1hc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDs7QUFFNUQ7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVELDJEQUEyRCIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci90cmFuc2hpcG1lbnQvdmVoaWNsZS1zZXR1cC1tYXN0ZXIvdmVoaWNsZS1zZXR1cC1tYXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gc3RhcnRzIGhlcmUqL1xuXG5ociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gZW5kcyBoZXJlICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Vehicle Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #vehicleNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, vehicleName)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"vehicleNumber\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehilce Name*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #vehicleName (keyup)=\"fieldFocus($event, saveBtn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"vehicleName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.vehicleName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button #saveBtn type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"saveBtn\" (click)=\"validateVehicleDetails()\">Save/Update</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"deleteBtn\" (click)=\"validateDeleteRow()\">Delete</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"clearBtn\"\n\t\t\t\t\t\t\t(click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 vl \">\n\t\t\t\t\t<h6 class=\"card-title\">Vehicle Details</h6>\n\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsVehicleMaster\"\n\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerVehicleMaster\">\n\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Vehicle Number</th>\n\t\t\t\t\t\t\t\t\t<th>Vehicle Name</th>\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let vehicleNumberData of vehicleMasterDataList\"\n\t\t\t\t\t\t\t\t\t(click)=\"rowSelected(vehicleNumberData);\">\n\t\t\t\t\t\t\t\t\t<td>{{ vehicleNumberData.truckNumber }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ vehicleNumberData.vehicleName }}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.ts ***!
  \********************************************************************************************/
/*! exports provided: VehicleSetupMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleSetupMasterComponent", function() { return VehicleSetupMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/master-dto */ "./src/app/dto/master-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
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

//from the particular global folder ends


//service starts

//we used any keyword so comment
//import { ConsigneedetailsModel } from 'src/app/models/Consigneedetails-model';
//import { PartyMasterDto } from "src/app/dto/PartyMaster-dto";

//import { PartyModel } from "src/app/models/party-model";
//service ends





var VehicleSetupMasterComponent = /** @class */ (function () {
    function VehicleSetupMasterComponent(vehicleMasterScreen, 
    //        service starts
    http, router, masterService, masterReadService
    //            service ends        
    ) {
        var _this = this;
        this.vehicleMasterScreen = vehicleMasterScreen;
        this.http = http;
        this.router = router;
        this.masterService = masterService;
        this.masterReadService = masterReadService;
        //service starts      
        //    partyModel: PartyModel = new PartyModel();
        this.baseUrl = '/api/v1/createconsignee';
        this.masterDto = new src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_5__["MasterDto"]();
        this.isLoggedIn = true;
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        this.truckDataDeleteDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_7__["TruckDataDto"]();
        //  onDestroyUnsubscribtionVehicleMaster: Subscription;
        this.loadingIndicator = true;
        this.dtTriggerVehicleMaster = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getVehicleMasterList = function () {
            //        console.log( this.truckDataDto.companyId + "," + this.truckDataDto.office + "," + this.truckDataDto.mode );
            _this.getVehicleDetailsForRead();
            _this.masterReadService.getVehicleSetupMaster(_this.truckDataDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.vehicleMasterDataList = response;
                    _this.dtTriggerVehicleMaster.next();
                    //                    console.log( this.vehicleMasterDataList[5] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "Error",
                text: "Server Error While Getting Vehicle Setup Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateVehicleDetails = function () {
            _this.getVehicleDetailsForSave();
            //                this.masterService.createSupplier( this.truckDataDto ).subscribe( data => console.log( data ), error => console.log( error ) );
            _this.masterService.createVehicle(_this.truckDataDto).
                subscribe(function (data) {
                _this.truckDataDtoSaveRet = data;
                //                console.log( this.truckDataDtoSaveRet.status );
                if (_this.truckDataDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Success",
                        text: "Vehicle Details Saved/Updated Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getVehicleMasterList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Error",
                        text: "Error While Saving Vehicle Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: "Error",
                    text: "Server Error While Saving Vehicle Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteVehicleDetails = function () {
            _this.getDeleteVehicleDetails();
            _this.masterService.deleteVehicle(_this.truckDataDeleteDto).
                subscribe(function (data) {
                _this.truckDataDtoDeleteRet = data;
                if (_this.truckDataDtoDeleteRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Success",
                        text: "Vehicle Details Deleted Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getVehicleMasterList();
                }
                else if (_this.truckDataDtoDeleteRet.status == "not exist") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Success",
                        text: "Vehicle Details not exist",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Error",
                        text: "Error While Vehicle Driver Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: "Error",
                    text: "Server Error While Vehicle Driver Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
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
            this.getVehicleMasterList();
        }
    }
    VehicleSetupMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    VehicleSetupMasterComponent.prototype.ngOnInit = function () {
        this.dtOptionsVehicleMaster = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [],
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
        //      this.gettingDataFrmServiceFrVehicleMasterTable = this.vehicleMasterScreen.getSummaryData()
        //      this.onDestroyUnsubscribtionVehicleMaster = this.gettingDataFrmServiceFrVehicleMasterTable.subscribe( data => {
        //          this.vehicleMasterDataList = data['data'];
        //          this.dtTriggerVehicleMaster.next();
        //      } );
        //the below code is for the getting data through json ends
    };
    VehicleSetupMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerVehicleMaster.unsubscribe();
        //      this.onDestroyUnsubscribtionVehicleMaster.unsubscribe();
    };
    //service starts
    VehicleSetupMasterComponent.prototype.getVehicleDetailsForRead = function () {
        this.truckDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDto.office = this.userDataDtoReturnSession.mainStation;
        this.truckDataDto.isActive = true;
    };
    //    service ends
    VehicleSetupMasterComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    VehicleSetupMasterComponent.prototype.validateVehicleDetails = function () {
        this.saveUpdateVehicleDetails();
    };
    VehicleSetupMasterComponent.prototype.getVehicleDetailsForSave = function () {
        this.truckDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDto.userId = this.userDataDtoReturnSession.userId;
        this.truckDataDto.office = this.userDataDtoReturnSession.office;
        this.truckDataDto.mainStation = this.userDataDtoReturnSession.mainStation;
    };
    VehicleSetupMasterComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.truckDataDto.truckNumber = null;
        this.truckDataDto.vehicleName = null;
    };
    VehicleSetupMasterComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    VehicleSetupMasterComponent.prototype.rowSelected = function (vehicleNumberData) {
        this.truckDataDto.truckNumber = vehicleNumberData.truckNumber;
        this.truckDataDto.vehicleName = vehicleNumberData.vehicleName;
    };
    VehicleSetupMasterComponent.prototype.validateDeleteRow = function () {
        this.deleteVehicleDetails();
    };
    VehicleSetupMasterComponent.prototype.getDeleteVehicleDetails = function () {
        this.truckDataDeleteDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDeleteDto.truckNumber = this.truckDataDto.truckNumber;
        this.truckDataDeleteDto.vehicleName = this.truckDataDto.vehicleName;
        this.truckDataDeleteDto.userId = this.userDataDtoReturnSession.userId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], VehicleSetupMasterComponent.prototype, "dtElements", void 0);
    VehicleSetupMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-setup-master',
            template: __webpack_require__(/*! ./vehicle-setup-master.component.html */ "./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-setup-master.component.css */ "./src/app/master/transhipment/vehicle-setup-master/vehicle-setup-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"]
            //            service ends        
        ])
    ], VehicleSetupMasterComponent);
    return VehicleSetupMasterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-master-transhipment-transhipment-module.js.map