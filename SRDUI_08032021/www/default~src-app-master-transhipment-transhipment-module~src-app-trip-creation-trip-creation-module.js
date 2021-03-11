(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-master-transhipment-transhipment-module~src-app-trip-creation-trip-creation-module"],{

/***/ "./src/app/dto/Driverdetails-dto.ts":
/*!******************************************!*\
  !*** ./src/app/dto/Driverdetails-dto.ts ***!
  \******************************************/
/*! exports provided: DriverdetailsDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverdetailsDto", function() { return DriverdetailsDto; });
var DriverdetailsDto = /** @class */ (function () {
    function DriverdetailsDto() {
    }
    return DriverdetailsDto;
}());



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

/***/ "./src/app/master/transhipment/truck-master/truck-master.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/master/transhipment/truck-master/truck-master.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* for custom css for autocomplete select option starts */\r\n.auto_selectOption {\r\n\tfont-size: 15px;\r\n\tpadding: 0px;\r\n\tborder: 2px solid #dadee2;\r\n\theight: 26px;\r\n\twidth: 100%;\r\n}\r\n/* for small mobile */\r\n@media ( max-width : 355px) {\r\n\t.auto_selectOption {\r\n\t\twidth: 48% !important;\r\n\t}\r\n}\r\n/* for medium mobile */\r\n@media ( max-width : 365px) {\r\n\t.auto_selectOption {\r\n\t\twidth: 50%;\r\n\t}\r\n}\r\n/* for mobile */\r\n@media ( min-width : 370px) and (max-width: 766px) {\r\n\t.auto_selectOption {\r\n\t\twidth: 51%;\r\n\t}\r\n}\r\n/* for ipad */\r\n@media ( min-width : 767px) and (max-width: 990px) {\r\n\t.auto_selectOption {\r\n\t\twidth: 80%;\r\n\t}\r\n}\r\n/* for ipad pro */\r\n@media ( min-width : 991px) and (max-width: 1200px) {\r\n\t.auto_selectOption {\r\n\t\twidth: 46%;\r\n\t}\r\n}\r\n/* for desktop */\r\n@media ( min-width : 1201px) and (max-width: 1500px) {\r\n\t.auto_selectOption {\r\n\t\twidth: 50%;\r\n\t}\r\n}\r\n/* for custom css for autocomplete select option ends */\r\n::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 150px;\r\n    overflow-y: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3RyYW5zaGlwbWVudC90cnVjay1tYXN0ZXIvdHJ1Y2stbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEO0FBQzFEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLFlBQVk7Q0FDWjtBQUNELHNCQUFzQjtBQUN0QjtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCO0NBQ0Q7QUFDRCx1QkFBdUI7QUFDdkI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsZ0JBQWdCO0FBQ2hCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGNBQWM7QUFDZDtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxrQkFBa0I7QUFDbEI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsaUJBQWlCO0FBQ2pCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUVELHdEQUF3RDtBQUV4RDtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci90cmFuc2hpcG1lbnQvdHJ1Y2stbWFzdGVyL3RydWNrLW1hc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9yIGN1c3RvbSBjc3MgZm9yIGF1dG9jb21wbGV0ZSBzZWxlY3Qgb3B0aW9uIHN0YXJ0cyAqL1xyXG4uYXV0b19zZWxlY3RPcHRpb24ge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0Ym9yZGVyOiAycHggc29saWQgI2RhZGVlMjtcclxuXHRoZWlnaHQ6IDI2cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLyogZm9yIHNtYWxsIG1vYmlsZSAqL1xyXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAzNTVweCkge1xyXG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XHJcblx0XHR3aWR0aDogNDglICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcbi8qIGZvciBtZWRpdW0gbW9iaWxlICovXHJcbkBtZWRpYSAoIG1heC13aWR0aCA6IDM2NXB4KSB7XHJcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG59XHJcbi8qIGZvciBtb2JpbGUgKi9cclxuQG1lZGlhICggbWluLXdpZHRoIDogMzcwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xyXG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XHJcblx0XHR3aWR0aDogNTElO1xyXG5cdH1cclxufVxyXG4vKiBmb3IgaXBhZCAqL1xyXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcclxuXHRcdHdpZHRoOiA4MCU7XHJcblx0fVxyXG59XHJcbi8qIGZvciBpcGFkIHBybyAqL1xyXG5AbWVkaWEgKCBtaW4td2lkdGggOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XHJcblx0XHR3aWR0aDogNDYlO1xyXG5cdH1cclxufVxyXG4vKiBmb3IgZGVza3RvcCAqL1xyXG5AbWVkaWEgKCBtaW4td2lkdGggOiAxMjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIGZvciBjdXN0b20gY3NzIGZvciBhdXRvY29tcGxldGUgc2VsZWN0IG9wdGlvbiBlbmRzICovXHJcblxyXG46Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3d7XHJcblx0dG9wOiAyNnB4O1xyXG4gICAgbGVmdDogMTg4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/master/transhipment/truck-master/truck-master.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/master/transhipment/truck-master/truck-master.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Truck Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Number*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #truckNumber (keyup)=\"fieldFocus($event, ownerName)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"truckNumberId\" name=\"truckNumberId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckNumber\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"readonlytruckNumber\"(blur)=\"truckNumberValidationOfBlur($event)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Owner Name*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #ownerName (keyup)=\"fieldFocus($event, address)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"ownerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"ownerName\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.ownerName\"autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Address*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea #address (keyup)=\"fieldFocus($event, city)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control \" rows=\"1 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.address\" id=\"truckAddressId\" autocomplete=\"off\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>City*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #city (keyup)=\"fieldFocus($event, stateName)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"city\" name=\"city\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.city\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Reg.State*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input  #stateName id=\"regStateName\" type=\"text\"class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForRegState($event)\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelRegState\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchRegState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t    [resultFormatter]=\"formatterRegState\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterRegState\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusRegStateTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, pinCode)\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #pinCode (keyup)=\"fieldFocus($event, panNumber)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\" id=\"pinCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"pinCode\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.pinCodeNumber\"autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>PAN(Enter PAN as AAAAA9999A, if you don't\n\t\t\t\t\t\t\t\t\t\t\t\t\thave PAN)*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #panNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, truckCapacityInTones)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"truckOwnerPanNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"truckOwnerPanNumber\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.panNo\"autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label> RC </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\"id=\"rcFileUploadId\" (change)=\"onFileChangedRC($event)\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t#fileInputRC/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Insurance </label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\"id=\"insuranceFileUploadId\" (change)=\"onFileChangedInsurance($event)\" \n\t\t\t\t\t\t\t\t\t\t\t\t#fileInputInsurance/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label> Pan </label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\"id=\"panFileUploadId\" (change)=\"onFileChangedPan($event)\"\n\t\t\t\t\t\t\t\t\t\t\t #fileInputPan/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success m-r-10\" id=\"uploadBtn\" \n\t\t\t\t\t\t\t\t\t\t\t(click)=\"uploadBtn()\">Upload</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Capacity (In Tones)*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #truckCapacityInTones\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, truckType)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"truckCapacityInTones\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"truckCapacityInTones\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckCapcityDouble\"autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckType\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Type</label> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Truck Type\" [formControl]=\"control\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(truckTypeOptions | filter: control.value) as resultTruckType\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultTruckType\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultTruckType.length\">No -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Type*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<select class=\"custom-select col-12\" id=\"truckType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"truckType\" #truckType\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"truckMethod(truckType.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"Select Truck\">Select\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttruck...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"addNew\">Add New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">2Ton</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">4Ton</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<input #truckType type=\"text\"class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForTruckTypeCapacity($event)\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelTruckTypeCapacity\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchTruckTypeCapacity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t    [resultFormatter]=\"formatterTruckTypeCapacity\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterTruckTypeCapacity\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusTruckTypeCapacityTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"truckTypeCapacityId\"  name =\"truckTypeCapacityId\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, insurancePolicyNumber)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"newTruck\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Add New T.Type*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #addNewTruckType\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, insurancePolicyNumber)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"addNewTruckType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"addNewTruckType\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckTypeNew\"autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- the below comment for css work later -->\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"rc\">\n                          <label>RC</label>\n                          <input type=\"file\" class=\"form-control\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"insurance\">\n                          <label>Insurance</label>\n                          <input type=\"file\" class=\"form-control\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"pan\">\n                          <label>Pan</label>\n                          <input type=\"file\" class=\"form-control\">\n                        </div>\n                      </div>\n                    </div> -->\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Insurance Policy No. Code*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #insurancePolicyNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, truckLength)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"insurancePolicyNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"insurancePolicyNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.insPolNo\"autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Length (feets)*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #truckLength (keyup)=\"fieldFocus($event, saveButton)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\" id=\"truckLengthFeet\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"truckLengthFeet\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.trkLgth\"autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\" >\n\t\t\t\t\t\t\t\t\t<button #saveButton type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"saveBtn\" (click)=\"validateTruckDetails()\">Save/Update</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\" #saveBtn>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\" (click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\" #saveBtn>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"deleteBtn\" (click)=\"validateDeleteRow()\">Delete</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-4\" #saveBtn>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"saveBtn\" (click)=\"validateTruckDetails()\">Save/Update</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"deleteBtn\" (click)=\"validateDeleteRow()\">Delete</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\" #saveBtn>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\" #saveBtn>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"deleteBtn\" (click)=\"validateDeleteRow()\">Delete</button>\n\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t\t\t\t<div class=\"row\"  *ngIf=\"datatableHideShow\">\n\t\t\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t             style=\"padding: 1px 4px;\" id=\"getDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t              (click)=\"getTruckMasterDetailsList()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  Get Details Of Truck Master\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t            </button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Truck Master</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"getDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getTruckMasterDetailsList()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-file-alt\"></i> Get Details\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"truckMasterDatatableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTruckMaster\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTruckMaster\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Owner Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>City</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Pincode Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Pan Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck Capacity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>RC Copy</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Insurance Copy</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Pan Copy</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Ins Policy No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck Length(Feets)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let truckMasterData of truckMasterDataList \"(click)=\"rowSelected(truckMasterData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.truckNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.ownerName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.address }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.city }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.pinCodeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.tinNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.truckCapacity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.truckType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.rcCopy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.insuranceCopy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.panCopy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.insPolNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckMasterData.trkLgth }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<tfoot> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<tr> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</tfoot> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/transhipment/truck-master/truck-master.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/master/transhipment/truck-master/truck-master.component.ts ***!
  \****************************************************************************/
/*! exports provided: TruckMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckMasterComponent", function() { return TruckMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
var TruckMasterComponent = /** @class */ (function () {
    function TruckMasterComponent(masterService, masterReadService, http, router, httpClient) {
        var _this = this;
        this.masterService = masterService;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.httpClient = httpClient;
        this.newTruck = false;
        this.isLoggedIn = true;
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.truckDataDeleteDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.isUploaded = false;
        //    onDestroyUnsubscribtionTruckMaster: Subscription;
        //for datatable ends
        this.loadingIndicator = true;
        this.dtTriggerTruckMaster = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //for datatable ends
        //for the select option with filter starts
        this.controlRegState = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.regStateOptions = [
            { id: 1, label: 'Assam' },
            { id: 2, label: 'Delhi' },
            { id: 3, label: 'Tamil Nadu' },
        ];
        this.modelRegStateTA = [];
        this.focusRegStateTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchRegState = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusRegStateTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.modelRegStateTA
                : _this.modelRegStateTA.filter(function (v) { return v.state.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterRegState = function (x) { return x.state; };
        this.truckTypeCapacityTA = [];
        this.focusTruckTypeCapacityTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchTruckTypeCapacity = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusTruckTypeCapacityTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.truckTypeCapacityTA
                : _this.truckTypeCapacityTA.filter(function (v) { return v.truckType.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterTruckTypeCapacity = function (x) { return x.truckType; };
        this.partyMasterDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_13__["PartyMasterDto"]();
        this.truckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.datatableHideShow = false;
        this.truckDtoLocalStorage = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.isUpdateMode = false;
        this.truckDataDtoSetFieldVal = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.readonlytruckNumber = false;
        this.truckDataDtoValidateTruckNo = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        //    getValuesForTruckMasterList() {
        //        var partyDto = {
        //            'mainStation': 'Delhi',
        //            'mainAdminStation': 'Budhpur'
        //        }
        //        return partyDto;
        //    }
        /*let apiUrlTruckMasterModel = `http://localhost:8080/srd/master/v1/returnTruckMasterdetailsModel`;
        this.http.get(apiUrlTruckMasterModel).subscribe(
            (response) => {
    
                this.truckMasterDataList = response.json();
    
            }),
            (error) => console.log(error.json()),
            () => console.log('done');*/
        this.getTruckMasterDetailsList = function () {
            //        console.log( this.truckDataDto.companyId + "," + this.truckDataDto.mainStation + "," + this.truckDataDto.status );
            _this.getDriverDetailsForRead();
            _this.masterReadService.getTruck(_this.truckDataDto).subscribe(function (response) {
                if (response) {
                    //  console.log( response );
                    _this.truckMasterDataList = response;
                    $("#truckMasterDatatableId").DataTable().destroy();
                    _this.dtTriggerTruckMaster.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "Error",
                text: "Server Error While Getting Truck Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateTruckDetails = function () {
            _this.getTruckDetailsForSave();
            console.log(_this.truckDataDto);
            _this.masterService.createTruck(_this.truckDataDto).
                subscribe(function (data) {
                _this.truckDataDtoSaveRet = data;
                //                console.log( this.truckDataDtoSaveRet.status );
                if (_this.truckDataDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Success",
                        text: "Truck Details Saved/Updated Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    _this.getTruckMasterDetailsList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Error",
                        text: "Error While Saving Truck Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: "Error",
                    text: "Server Error While Saving Truck Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteTruckDetails = function () {
            _this.getDeleteTruckDetails();
            _this.masterService.deleteTruck(_this.truckDataDeleteDto).
                subscribe(function (data) {
                _this.truckDataDtoDeleteRet = data;
                if (_this.truckDataDtoDeleteRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Success",
                        text: "Truck Details Deleted Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    _this.getTruckMasterDetailsList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Error",
                        text: "Error While Deleting Truck Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: "Error",
                    text: "Server Error While Deleting Truck Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
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
            this.getTruckTypesMethod();
            this.modeStorage = localStorage.getItem('fromHireslipPageLocalStorage');
            this.truckDtoLocalStorage = JSON.parse(localStorage.getItem('fromHireslipPassingTruckDataDtoIntoLocalStorage'));
            localStorage.clear();
            if (this.modeStorage != null && this.modeStorage == "Hireslip") {
                this.datatableHideShow = false;
                this.isUpdateMode = true;
            }
            else {
                this.datatableHideShow = true;
                this.isUpdateMode = false;
            }
            if (this.isUpdateMode) {
                this.setFieldValues(this.truckDtoLocalStorage.truckNumber);
                this.readonlytruckNumber = true;
            }
        }
    }
    TruckMasterComponent.prototype.pinfocus = function () {
        this.pinField.nativeElement.focus();
    };
    TruckMasterComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    /* for datatable starts */
    TruckMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    TruckMasterComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsTruckMaster = {
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: ['excel', 'print'],*/
            //place holder in search/filter in datatable starts
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 280,
            "scrollCollapse": true,
            "paging": true,
            "info": true,
            "pagingType": 'full_numbers',
            "pageLength": 25,
        };
    };
    TruckMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTruckMaster.unsubscribe();
    };
    TruckMasterComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerTruckMaster.next();
    };
    //for the select option with filter starts
    TruckMasterComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    TruckMasterComponent.prototype.truckMethod = function (selectTruck) {
        if (selectTruck === 'addNew') {
            this.newTruck = true;
        }
        else {
            this.newTruck = false;
        }
    };
    //  service starts
    TruckMasterComponent.prototype.getDriverDetailsForRead = function () {
        this.truckDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDto.status = "Working";
        if (this.userDataDtoReturnSession.mainAdminStation != null) {
            this.truckDataDto.mode = "MainStation";
            this.truckDataDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        }
        else {
            this.truckDataDto.mode = "Station";
            this.truckDataDto.mainStation = this.userDataDtoReturnSession.office;
        }
    };
    //    signout() {
    //        sessionStorage.clear();
    //        this.router.navigate( ['/authentication/login'] );
    //    }
    //for the select option with filter ends
    TruckMasterComponent.prototype.validateTruckDetails = function () {
        var validateTruckNumber = this.truckDataDto.truckNumber;
        var validateOwnerName = this.truckDataDto.ownerName;
        var validateAddress = this.truckDataDto.address;
        var validateCity = this.truckDataDto.city;
        var validatePincode = this.truckDataDto.pinCodeNumber;
        var validatePanNo = this.truckDataDto.panNo;
        var validateTruckCapacity_Tones = this.truckDataDto.truckCapcityDouble;
        var validateInsurancePolicyNo = this.truckDataDto.insPolNo;
        var validateTruckLengthFeet = this.truckDataDto.trkLgth;
        this.validatePanNumber = $('#truckOwnerPanNumber').val();
        var regpan = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
        this.validateStateName_save = $('#regStateName').val();
        this.validateTruckType_save = $('#truckTypeCapacityId').val();
        ;
        if ((validateTruckNumber == null) || (validateTruckNumber == undefined) || (validateTruckNumber == '') ||
            (validateOwnerName == null) || (validateOwnerName == undefined) || (validateOwnerName == '') ||
            (validateAddress == null) || (validateAddress == undefined) || (validateAddress == '') ||
            (validateCity == null) || (validateCity == undefined) || (validateCity == '') ||
            (validatePincode == null) || (validatePincode == undefined) || (validatePincode == '') ||
            (validatePanNo == null) || (validatePanNo == undefined) || (validatePanNo == '') ||
            (validateTruckCapacity_Tones == null) || (validateTruckCapacity_Tones == undefined) ||
            (validateInsurancePolicyNo == null) || (validateInsurancePolicyNo == undefined) ||
            (validateInsurancePolicyNo == '') || (validateTruckLengthFeet == null) ||
            (validateTruckLengthFeet == undefined) || (this.validateStateName_save == null) ||
            (this.validateStateName_save == undefined) || (this.validateStateName_save == '') ||
            (this.validateTruckType_save == null) || (this.validateTruckType_save == undefined) ||
            (this.validateTruckType_save == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Please Enter the Mandetory Fields", "warning");
            return false;
        }
        else if (!regpan.test(this.validatePanNumber)) {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Invalid PAN Number", "warning");
            return false;
        }
        else {
            this.saveUpdateTruckDetails();
        }
    };
    TruckMasterComponent.prototype.getTruckDetailsForSave = function () {
        this.truckDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDto.userId = this.userDataDtoReturnSession.userId;
        this.truckDataDto.status = "Working";
        if ($("#regStateName").val() != null && $("#regStateName").val() != "") {
            this.regStateName = $("#regStateName").val();
            this.truckDataDto.state = this.regStateName;
            if (this.modelRegState != null && this.modelRegState != undefined) {
                this.truckDataDto.stateCode = this.modelRegState.stateCode;
            }
        }
        if (this.userDataDtoReturnSession.mainAdminStation != null) {
            this.truckDataDto.mainStation = this.userDataDtoReturnSession.mainStation;
        }
        else {
            this.truckDataDto.mainStation = this.userDataDtoReturnSession.office;
        }
        //        if ( this.truckDataDto.truckNumber  != null) {
        //            dto.settruckNumber((truckNo.getValue().replaceAll(
        //                    pattern, "")));
        //        }
        /* if ( this.truckDataDto.truckType == "addNew" ) {
             if ( ( this.truckDataDto.truckTypeNew == null ) || ( this.truckDataDto.truckTypeNew == "" ) ) {
                 this.truckDataDto.truckType = "NA";
             } else {
                 this.truckDataDto.truckType = this.truckDataDto.truckTypeNew;
             }
 
         } else if ( ( this.truckDataDto.truckType != null ) && ( this.truckDataDto.truckType == "Select Truck" ) ) {
             this.truckDataDto.truckType = "NA";
         } else if ( ( ( this.truckDataDto.truckType == null ) || ( this.truckDataDto.truckType == "" ) ) ) {
             this.truckDataDto.truckType = "NA";
         }*/
        if ($("#truckTypeCapacityId").val() != null && $("#truckTypeCapacityId").val() != "") {
            this.truckType = $("#truckTypeCapacityId").val();
            this.truckDataDto.truckType = this.truckType;
        }
        //        if (listBoxTruckType.getItemText(
        //                listBoxTruckType.getSelectedIndex())
        //                .equalsIgnoreCase("Add New")) {
        //            if (txtNewTruckType.getValue() == null) {
        //                dto.setTruckType("NA");
        //            } else {
        //                dto.setTruckType(txtNewTruckType.getValue());
        //            }
        //        } else {
        //            dto.setTruckType(listBoxTruckType
        //                    .getValue(listBoxTruckType.getSelectedIndex()));
        //            if ((dto.getTruckType() != null)
        //                    && (dto.getTruckType()
        //                            .equalsIgnoreCase("Select Type"))) {
        //                dto.setTruckType("NA");
        //            }
        //        }
        if (this.isUploaded) {
            //            upload part is pending
            //            this.truckDataDto.setImgURLIns(fileUploadIns.getValue() == null ? null
            //                    : "http://vehicledriverdocs.s3.amazonaws.com/documents/"
            //                            + truckNo.getValue()
            //                            + "_"
            //                            + fileUploadIns.getValue());
            //            this.truckDataDto.setImgURLRc(fileUploadRC.getValue() == null ? null
            //                    : "http://vehicledriverdocs.s3.amazonaws.com/documents/"
            //                            + truckNo.getValue()
            //                            + "_"
            //                            + fileUploadRC.getValue());
            //            this.truckDataDto.setImgURLPan(fileUploadPan.getValue() == null ? null
            //                    : "http://vehicledriverdocs.s3.amazonaws.com/documents/"
            //                            + truckNo.getValue()
            //                            + "_"
            //                            + fileUploadPan.getValue());
            if ($("#rcFileUploadId").val() != null && $("#rcFileUploadId").val() != "") {
                var constImgUrlRc = "http://vehicledriverdocs.s3.amazonaws.com/documents/" + $("#truckNumberId").val() + "_" + this.selectedFileRC.name + "";
                this.truckDataDto.imgURLRc = constImgUrlRc;
            }
            if ($("#insuranceFileUploadId").val() != null && $("#insuranceFileUploadId").val() != "") {
                var constImgUrlInsurance = "http://vehicledriverdocs.s3.amazonaws.com/documents/" + $("#truckNumberId").val() + "_" + this.selectedFileInsurance.name + "";
                this.truckDataDto.imgURLIns = constImgUrlInsurance;
            }
            if ($("#panFileUploadId").val() != null && $("#panFileUploadId").val() != "") {
                var constImgUrlPan = "http://vehicledriverdocs.s3.amazonaws.com/documents/" + $("#truckNumberId").val() + "_" + this.selectedFilePan.name + "";
                this.truckDataDto.imgURLPan = constImgUrlPan;
            }
            this.truckDataDto.imgUploadedIns = true;
            this.truckDataDto.imgUploadedRc = true;
            this.truckDataDto.imgUploadedPan = true;
        }
        else {
            this.truckDataDto.imgUploadedIns = false;
            this.truckDataDto.imgUploadedRc = false;
            this.truckDataDto.imgUploadedPan = false;
        }
        // dto.setPanNo(tfPanNo.getValue());
        if ((this.truckDataDto.trkLgth == null) || (this.truckDataDto.trkLgth == 0)) {
            this.truckDataDto.trkLgth = 0.0;
        }
    };
    TruckMasterComponent.prototype.clearAll = function () {
        $("#truckNumberId").val('');
        $("#ownerName").val('');
        $("#truckAddressId").val('');
        $("#city").val('');
        $("#regStateName").val('');
        $("#pinCode").val('');
        $("#truckOwnerPanNumber").val('');
        $("#rcFileUploadId").val('');
        $("#insuranceFileUploadId").val('');
        $("#panFileUploadId").val('');
        $("#truckCapacityInTones").val('');
        $("#truckTypeCapacityId").val('');
        $("#addNewTruckType").val('');
        $("#insurancePolicyNumber").val('');
        $("#truckLengthFeet").val('');
        //$( 'input[type="text"],[type="number"],[type="file"]' ).val( '' );
        this.newTruck = false;
        //$( "#truckType" ).val( 'Select Truck' );
        //$( "#regState" ).val( 'Select State' );
        this.truckDataDto.truckNumber = null;
        //$( "#rcFileUploadId" ).val( '' );
        this.modeStorage = 'TruckMaster';
        // this.datatableHideShow=false;
        this.regStateName = null;
        this.regStateCode = null;
        this.truckType = null;
        this.rowSelectedStateName = null;
        this.rowSelectedStateCoe = null;
        this.rowSelectedTruckType = null;
        this.truckDtoLocalStorage = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.isUpdateMode = false;
        this.readonlytruckNumber = false;
        if (this.modeStorage != null && this.modeStorage == "Hireslip") {
            this.datatableHideShow = false;
            //this.isUpdateMode =true;
        }
        else {
            this.datatableHideShow = true;
            //this.isUpdateMode =false;
        }
    };
    TruckMasterComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    TruckMasterComponent.prototype.rowSelected = function (truckMasterData) {
        //console.log(truckMasterData);
        this.truckDataDto.truckNumber = truckMasterData.truckNumber;
        this.truckDataDto.ownerName = truckMasterData.ownerName;
        this.truckDataDto.address = truckMasterData.address;
        this.truckDataDto.city = truckMasterData.city;
        //this.truckDataDto.state = truckMasterData.state;
        this.truckDataDto.pinCodeNumber = truckMasterData.pinCodeNumber;
        this.truckDataDto.panNo = truckMasterData.tinNo;
        this.truckDataDto.truckCapcityDouble = truckMasterData.truckCapacity;
        // this.truckDataDto.truckType = truckMasterData.truckType;
        this.truckDataDto.insPolNo = truckMasterData.insPolNo;
        this.truckDataDto.trkLgth = truckMasterData.trkLgth;
        if (truckMasterData.state != null && truckMasterData.state != "") {
            this.rowSelectedStateName = truckMasterData.state;
            //this.modelRegState.stateCode = truckMasterData.stateCode;
            $("#regStateName").val(this.rowSelectedStateName);
        }
        if (truckMasterData.truckType != null && truckMasterData.truckType != "") {
            this.rowSelectedTruckType = truckMasterData.truckType;
            $("#truckTypeCapacityId").val(this.rowSelectedTruckType);
        }
        this.readonlytruckNumber = true;
    };
    //    service ends
    TruckMasterComponent.prototype.validateDeleteRow = function () {
        this.deleteTruckDetails();
    };
    TruckMasterComponent.prototype.getDeleteTruckDetails = function () {
        this.truckDataDeleteDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDeleteDto.truckNumber = this.truckDataDto.truckNumber;
        this.truckDataDeleteDto.userId = this.userDataDtoReturnSession.userId;
    };
    TruckMasterComponent.prototype.clickListnerForRegState = function (e, fubi) {
        this.modelRegState = e.item;
        console.log(this.modelRegState);
        $("#regStateName").val(this.modelRegState.state);
    };
    TruckMasterComponent.prototype.getStatesMethod = function () {
        var _this = this;
        this.partyMasterDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_13__["PartyMasterDto"]();
        this.partyMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.masterReadService.getStateDetailsService(this.partyMasterDto).subscribe(function (response) {
            if (response) {
                // console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
            title: "Error",
            text: "Server Error While Getting getStatesMethod",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    TruckMasterComponent.prototype.focusRegStateTA = function (e) {
        console.log(e);
        if (e.keyCode == 13) {
            $("#pinCode").focus();
        }
    };
    TruckMasterComponent.prototype.clickListnerForTruckTypeCapacity = function (e, fubi) {
        this.modelTruckTypeCapacity = e.item;
        $("#truckType").val(this.modelTruckTypeCapacity.truckType);
    };
    TruckMasterComponent.prototype.getTruckTypesMethod = function () {
        var _this = this;
        this.truckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.truckDto.companyId = this.userDataDtoReturnSession.companyId;
        this.masterReadService.getTruckTypes(this.truckDto).subscribe(function (response) {
            if (response) {
                console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                        title: "Warning",
                        text: "No getTruckTypesMethod records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlRegState.reset();
                    _this.truckDataDtoOptions = [];
                    _this.truckTypeCapacityTA = [];
                }
                else {
                    _this.controlRegState.reset();
                    _this.truckDataDtoOptions = response;
                    _this.truckTypeCapacityTA = [];
                    for (var i = 0; i < _this.truckDataDtoOptions.length; i++) {
                        _this.truckTypeCapacityTA.push(_this.truckDataDtoOptions[i]);
                    }
                }
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
            title: "Error",
            text: "Server Error While Getting getTruckTypesMethod",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    TruckMasterComponent.prototype.focusTruckTypeCapacityTA = function (e) {
        console.log(e);
        if (e.keyCode == 13) {
            $("#insurancePolicyNumber").focus();
        }
    };
    TruckMasterComponent.prototype.onFileChangedRC = function (event) {
        this.selectedFileRC = event.target.files[0];
        console.log(this.selectedFileRC);
    };
    TruckMasterComponent.prototype.onFileChangedInsurance = function (event) {
        this.selectedFileInsurance = event.target.files[0];
        console.log(this.selectedFileInsurance);
    };
    TruckMasterComponent.prototype.onFileChangedPan = function (event) {
        this.selectedFilePan = event.target.files[0];
        console.log(this.selectedFilePan);
    };
    TruckMasterComponent.prototype.uploadBtn = function () {
        var _this = this;
        console.log($("#rcFileUploadId").val());
        console.log($("#insuranceFileUploadId").val());
        console.log($("#panFileUploadId").val());
        if ($("#rcFileUploadId").val() != null && $("#rcFileUploadId").val() != "") {
            if ((this.selectedFileRC.type != null &&
                (this.selectedFileRC.type == "image/jpeg" ||
                    this.selectedFileRC.type == "image/jpg" ||
                    this.selectedFileRC.type == "image/png"))) {
                var splitTypeRc = this.selectedFileRC.type.split("/");
                //const truckLorr_No =$("#truckNumber").val(); 
                //console.log(truckLorr_No);
                var commonListRc = "vehicledriverdocs&&documents&&ASRAR&&" + splitTypeRc[1] + "&&" + this.truckDataDto.truckNumber + "";
                var formData = new FormData();
                formData.append(commonListRc, commonListRc);
                formData.append('myfileRC', this.selectedFileRC, this.selectedFileRC.name);
                this.masterReadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        if (response[0] != "Error") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("File Upload", "File Uploaded Succcessfully", "success");
                            _this.isUploaded = true;
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("ERROR", "Correct the RC File and Upload Again", "error");
                        }
                    }
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: "Error",
                    text: "Server Error While Uploading a RC File",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                    function () { return console.log('done'); };
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Only jpg & png image format are allowed to upload for RC File", "warning");
            }
        }
        if ($("#insuranceFileUploadId").val() != null && $("#insuranceFileUploadId").val() != "") {
            if ((this.selectedFileInsurance.type != null &&
                (this.selectedFileInsurance.type == "image/jpeg" ||
                    this.selectedFileInsurance.type == "image/jpg" ||
                    this.selectedFileInsurance.type == "image/png"))) {
                var splitTypeInsurance = this.selectedFileInsurance.type.split("/");
                var commonListInsurance = "vehicledriverdocs&&documents&&ASRAR&& " + splitTypeInsurance[1] + "&&" + this.truckDataDto.truckNumber + "";
                var formData = new FormData();
                formData.append(commonListInsurance, commonListInsurance);
                formData.append('myfileInsurance', this.selectedFileInsurance, this.selectedFileInsurance.name);
                this.masterReadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        if (response[0] != "Error") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("File Upload", "File Uploaded Succcessfully", "success");
                            _this.isUploaded = true;
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("ERROR", "Correct the Insurance File and Upload Again", "error");
                        }
                    }
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: "Error",
                    text: "Server Error While Uploading a Insurance file",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                    function () { return console.log('done'); };
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Only jpg & png image format are allowed to upload for insurance file", "warning");
            }
        }
        if ($("#panFileUploadId").val() != null && $("#panFileUploadId").val() != "") {
            if ((this.selectedFilePan.type != null &&
                (this.selectedFilePan.type == "image/jpeg" ||
                    this.selectedFilePan.type == "image/jpg" ||
                    this.selectedFilePan.type == "image/png"))) {
                var splitTypePan = this.selectedFileInsurance.type.split("/");
                var commonListPan = "vehicledriverdocs&&documents&&ASRAR&&" + splitTypePan[1] + "&&" + this.truckDataDto.truckNumber + "";
                var formData = new FormData();
                formData.append(commonListPan, commonListPan);
                formData.append('myfilePan', this.selectedFilePan, this.selectedFilePan.name);
                this.masterReadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        if (response[0] != "Error") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("File Upload", "File Uploaded Succcessfully", "success");
                            _this.isUploaded = true;
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
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Only jpg & png image format are allowed to upload for pan file", "warning");
            }
        }
    };
    TruckMasterComponent.prototype.setFieldValues = function (lorryNumber) {
        var _this = this;
        this.truckDataDtoSetFieldVal = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.truckDataDtoSetFieldVal.truckNumber = lorryNumber;
        this.masterReadService.getTruckDtlsInHireSlipGeneration(this.truckDataDtoSetFieldVal).
            subscribe(function (data) {
            console.log(data);
            _this.retriveTruckDtoSetField = data;
            if (_this.retriveTruckDtoSetField.status == "Success") {
                _this.truckDataDto.truckNumber = _this.retriveTruckDtoSetField.truckNumber;
                _this.truckDataDto.ownerName = _this.retriveTruckDtoSetField.ownerName;
                _this.truckDataDto.address = _this.retriveTruckDtoSetField.address;
                _this.truckDataDto.city = _this.retriveTruckDtoSetField.city;
                _this.truckDataDto.pinCodeNumber = _this.retriveTruckDtoSetField.pinCodeNumber;
                _this.truckDataDto.panNo = _this.retriveTruckDtoSetField.tinNo;
                _this.truckDataDto.truckCapcityDouble = _this.retriveTruckDtoSetField.truckCapacity;
                _this.truckDataDto.insPolNo = _this.retriveTruckDtoSetField.insPolNo;
                _this.truckDataDto.trkLgth = _this.retriveTruckDtoSetField.trkLgth;
                if (_this.retriveTruckDtoSetField.state != null && _this.retriveTruckDtoSetField.state != "") {
                    _this.rowSelectedStateName = _this.retriveTruckDtoSetField.state;
                    $("#regStateName").val(_this.rowSelectedStateName);
                }
                if (_this.retriveTruckDtoSetField.truckType != null && _this.retriveTruckDtoSetField.truckType != "") {
                    _this.rowSelectedTruckType = _this.retriveTruckDtoSetField.truckType;
                    $("#truckTypeCapacityId").val(_this.rowSelectedTruckType);
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Alert", "Failed to get truck master details", "error");
            }
        }),
            function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "Error",
                text: "Server Error While Saving Truck Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
            function () { return console.log('done'); };
    };
    TruckMasterComponent.prototype.truckNumberValidationOfBlur = function (e) {
        this.validatingTruckNumberAlreadyExist();
    };
    TruckMasterComponent.prototype.validatingTruckNumberAlreadyExist = function () {
        var _this = this;
        this.truckDataDtoValidateTruckNo = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_8__["TruckDataDto"]();
        this.truckDataDtoValidateTruckNo.truckNumber = this.truckDataDto.truckNumber;
        // console.log(this.truckDataDtoValidateTruckNo);
        this.masterService.checkTruckExist(this.truckDataDtoValidateTruckNo).subscribe(function (data) {
            _this.truckDataDtoReturnValidateTruckNo = data;
            //console.log( this.truckDataDtoReturnValidateTruckNo.status);
            if (_this.truckDataDtoReturnValidateTruckNo.status == "Exist") {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Truck Number", "This Truck Number: " + $("#truckNumberId").val() + " is Already Exist", "warning");
                $("#truckNumberId").val('');
                _this.truckDataDto.truckNumber = null;
            }
            else if (_this.truckDataDtoReturnValidateTruckNo.status == "Failed") {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While validatingTruckNumberAlreadyExist", "error");
            }
        }),
            function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While validatingTruckNumberAlreadyExist", "error"); },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pinCode"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TruckMasterComponent.prototype, "pinField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TruckMasterComponent.prototype, "dtElements", void 0);
    TruckMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //selector: 'app-truck-master',
            selector: 'app-truck-master',
            template: __webpack_require__(/*! ./truck-master.component.html */ "./src/app/master/transhipment/truck-master/truck-master.component.html"),
            styles: [__webpack_require__(/*! ./truck-master.component.css */ "./src/app/master/transhipment/truck-master/truck-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]])
    ], TruckMasterComponent);
    return TruckMasterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-master-transhipment-transhipment-module~src-app-trip-creation-trip-creation-module.js.map