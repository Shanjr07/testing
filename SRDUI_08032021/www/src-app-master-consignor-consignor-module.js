(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-consignor-consignor-module"],{

/***/ "./src/app/dataService/consignor-service.ts":
/*!**************************************************!*\
  !*** ./src/app/dataService/consignor-service.ts ***!
  \**************************************************/
/*! exports provided: ConsignorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignorService", function() { return ConsignorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsignorService = /** @class */ (function () {
    //private _url = "./assets/data/supplier-master.json";
    function ConsignorService(http) {
        this.http = http;
    }
    ConsignorService.prototype.getSupplierMasterData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/supplier-master.json');
    };
    ConsignorService.prototype.getSummaryData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/lr-dispatch-booking-report.json');
    };
    ConsignorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsignorService);
    return ConsignorService;
}());



/***/ }),

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

/***/ "./src/app/master/consignor/consignor-master/consignor-master.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/master/consignor/consignor-master/consignor-master.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\n\nhr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below css is done for the verticle form ends here */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbnNpZ25vci9jb25zaWdub3ItbWFzdGVyL2NvbnNpZ25vci1tYXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRCwyREFBMkQiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXIvY29uc2lnbm9yL2NvbnNpZ25vci1tYXN0ZXIvY29uc2lnbm9yLW1hc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGhlIGJlbG93IGNzcyBpcyBkb25lIGZvciB0aGUgdmVydGljbGUgZm9ybSBzdGFydHMgaGVyZSovXG5cbmhyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBwWDtcbn1cblxuLyogdGhlIGJlbG93IGNzcyBpcyBkb25lIGZvciB0aGUgdmVydGljbGUgZm9ybSBlbmRzIGhlcmUgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/master/consignor/consignor-master/consignor-master.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/master/consignor/consignor-master/consignor-master.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Consignor Master</h6>\n\t\t\t</div>\n\t\t\t<form>\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Party Details</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user-circle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"gstNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Gst Numberr</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mobileNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"officeNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Office Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"emailId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Email-Id</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"contactPerson\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Person</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Address Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"address\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control \" rows=\"1 \"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"area\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Area</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"city\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"pincode\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"finishBtn\">Finish</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Search Criteria</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Search Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchMode\" #searchMode\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchModeMethod(searchMode.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"normalSearch\">Normal Search</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"advanceSearch\">Advance Search</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"normalView\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchMethod(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select.......</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"index\">Index</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"commodity\">Commodity</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"source\">Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"srcncom\">Source & Commodity</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"index\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Index</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainIndex\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteIndex=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(indexOptions | filter: controlMainIndex.value) as resultIndex\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultIndex\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultIndex.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"commodity\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCommodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteCommodity=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(commodityOptions | filter: controlMainCommodity.value) as resultCommodity\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultCommodity.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"source\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autoSourceList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autoSourceList=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceListOptions | filter: controlMainSource.value) as resultSourceList\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSourceList\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSourceList.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"advanceView\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"sourceAll\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainSourceAll\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSourceAll\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSourceAll=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceAllOptions | filter: controlMainSourceAll.value) as resultSourceAll\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSourceAll\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSourceAll.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"getDetailsBtn\">Get Details</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"getDetailsDD\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Get Details</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Consignor Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">GST Number Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='padding: 1px 4px;' id=\"getDetailsTableBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getConsignorDetailsList()\"><i class =\"fas fa-file-alt\"></i>Get Details</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsignorMaster\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsignorMaster\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consignorNameMasterData of consignorMasterDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignorNameMasterData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/consignor/consignor-master/consignor-master.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/master/consignor/consignor-master/consignor-master.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsignorMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignorMasterComponent", function() { return ConsignorMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/master-dto */ "./src/app/dto/master-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_11__);
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

//for the select option with filter starts

//for the select option with filter ends








var ConsignorMasterComponent = /** @class */ (function () {
    function ConsignorMasterComponent(http, consignorMasterScreen, modalService, 
    //          service starts
    masteRreadService, router
    //            service ends        
    ) {
        var _this = this;
        this.http = http;
        this.consignorMasterScreen = consignorMasterScreen;
        this.modalService = modalService;
        this.masteRreadService = masteRreadService;
        this.router = router;
        this.masterDto = new src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_5__["MasterDto"]();
        this.isLoggedIn = true;
        this.partyMasterDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_6__["PartyMasterDto"]();
        this.index = true;
        this.commodity = false;
        this.source = false;
        this.sourceAll = false;
        this.others = false;
        this.normalView = true;
        this.advanceView = false;
        //    onDestroyUnsubscribtionConsignorMaster: Subscription;
        this.loadingIndicator = true;
        this.controlMainIndex = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.controlMainSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.controlMainCommodity = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.controlMainSourceAll = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.indexOptions = [
            { id: 1, label: 'A' },
            { id: 2, label: 'B' },
            { id: 3, label: 'C' },
            { id: 4, label: 'D' }
        ];
        this.commodityOptions = [
            { id: 1, label: 'Agra Footwear' },
            { id: 2, label: 'Bangles' },
            { id: 3, label: 'Claims' },
            { id: 4, label: 'Delhi Office' }
        ];
        this.sourceListOptions = [
            { id: 1, label: 'Delhi' },
            { id: 2, label: 'Gujarat' },
            { id: 3, label: 'Mumbai' },
            { id: 4, label: 'Nagpur' },
            { id: 5, label: 'others' }
        ];
        this.sourceAllOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Delhi' },
            { id: 3, label: 'Gujarat' },
            { id: 4, label: 'Mumbai' },
            { id: 5, label: 'Nagpur' },
            { id: 6, label: 'others' }
        ];
        this.dtTriggerConsignorMaster = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.getConsignorDetailsList = function () {
            //        console.log( this.partyMasterDto.companyId + "," + this.partyMasterDto.mainStation );
            _this.getPartyDetailsForRead();
            _this.masteRreadService.getConsignorMaster(_this.partyMasterDto).subscribe(function (response) {
                if (response) {
                    console.log(response);
                    _this.consignorMasterDataList = response;
                    _this.dtTriggerConsignorMaster.next();
                    //                    console.log( this.consignorMasterDataList[5] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                title: "Error",
                text: "Server Error While Getting Consignor Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
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
            this.consignorMasterDataTable();
        }
    }
    ConsignorMasterComponent.prototype.searchMethod = function (searchType) {
        if (searchType === 'index') {
            this.index = true;
            this.commodity = false;
            this.source = false;
        }
        else if (searchType === 'commodity') {
            this.index = false;
            this.commodity = true;
            this.source = false;
        }
        else if (searchType === 'source') {
            this.index = false;
            this.commodity = false;
            this.source = true;
        }
        else if (searchType === 'srcncom') {
            this.index = false;
            this.commodity = true;
            this.source = true;
        }
        else {
            this.index = false;
            this.commodity = false;
            this.source = false;
        }
    };
    ConsignorMasterComponent.prototype.searchModeMethod = function (searchTypes) {
        if (searchTypes === 'normalSearch') {
            this.normalView = true;
            this.advanceView = false;
        }
        else if (searchTypes === 'advanceSearch') {
            this.advanceView = true;
            this.normalView = false;
        }
        else {
            this.advanceView = false;
            this.normalView = true;
        }
    };
    ConsignorMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsignorMasterComponent.prototype.ngOnInit = function () {
    };
    ConsignorMasterComponent.prototype.consignorMasterDataTable = function () {
        this.dtOptionsConsignorMaster = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel">Export</i>',
                    titleAttr: 'Export',
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
            pagingType: 'full_numbers',
            pageLength: 9,
        };
        //        this.gettingDataFrmServiceFrConsignorMasterTable = this.consignorMasterScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionConsignorMaster = this.gettingDataFrmServiceFrConsignorMasterTable.subscribe( data => {
        //            this.consignorMasterDataList = data['data'];
        //            this.dtTriggerConsignorMaster.next();
        //        } );
        //the below code is for the getting data through json ends
    };
    ConsignorMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerConsignorMaster.unsubscribe();
        //        this.onDestroyUnsubscribtionConsignorMaster.unsubscribe();
    };
    //  service starts
    ConsignorMasterComponent.prototype.getPartyDetailsForRead = function () {
        this.partyMasterDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    ConsignorMasterComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsignorMasterComponent.prototype, "dtElements", void 0);
    ConsignorMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignor-master',
            template: __webpack_require__(/*! ./consignor-master.component.html */ "./src/app/master/consignor/consignor-master/consignor-master.component.html"),
            styles: [__webpack_require__(/*! ./consignor-master.component.css */ "./src/app/master/consignor/consignor-master/consignor-master.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_7__["MasterService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
            //            service ends        
        ])
    ], ConsignorMasterComponent);
    return ConsignorMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/consignor/consignor-merge/consignor-merge.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/master/consignor/consignor-merge/consignor-merge.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* to fix the height of a single row in drag and drop starts */\n::ng-deep .table-striped tbody tr:nth-of-type(odd) {\n\tbackground-color: rgba(0, 0, 0, .05);\n\theight: 24px;\n}\n::ng-deep .table-striped tbody tr:nth-of-type(even) {\n\theight: 24px;\n}\n/* to fix the height of a single row in drag and drop ends */\n\n                                    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbnNpZ25vci9jb25zaWdub3ItbWVyZ2UvY29uc2lnbm9yLW1lcmdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9EO0NBQ0MscUNBQXFDO0NBQ3JDLGFBQWE7Q0FDYjtBQUVEO0NBQ0MsYUFBYTtDQUNiO0FBQ0QsNkRBQTZEIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2NvbnNpZ25vci9jb25zaWdub3ItbWVyZ2UvY29uc2lnbm9yLW1lcmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0byBmaXggdGhlIGhlaWdodCBvZiBhIHNpbmdsZSByb3cgaW4gZHJhZyBhbmQgZHJvcCBzdGFydHMgKi9cbjo6bmctZGVlcCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDUpO1xuXHRoZWlnaHQ6IDI0cHg7XG59XG5cbjo6bmctZGVlcCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShldmVuKSB7XG5cdGhlaWdodDogMjRweDtcbn1cbi8qIHRvIGZpeCB0aGUgaGVpZ2h0IG9mIGEgc2luZ2xlIHJvdyBpbiBkcmFnIGFuZCBkcm9wIGVuZHMgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIl19 */"

/***/ }),

/***/ "./src/app/master/consignor/consignor-merge/consignor-merge.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/master/consignor/consignor-merge/consignor-merge.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row system_responsive\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Consignor Merge</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-4 \">\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"repeatedConsignorSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlRepeatedConsignorSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteRepeatedConsignorSource\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t#autocompleteRepeatedConsignorSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(repeatedConsignorSourceOptions | filter: controlRepeatedConsignorSource.value) as resultRepeatedConsignorSource\">\n\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultRepeatedConsignorSource\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultRepeatedConsignorSource.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"repeatedConsignorIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlRepeatedConsignorIndex\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteRepeatedConsignorIndex\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t#autocompleteRepeatedConsignorIndex=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(repeatedConsignorIndexOptions | filter: controlRepeatedConsignorIndex.value) as resultRepeatedConsignorIndex\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultRepeatedConsignorIndex\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultRepeatedConsignorIndex.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">Repeated Consignor List</h6>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the first datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRepeatedConsignorList\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRepeatedConsignorList\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody style=\"height: 40vh;\" class='dragndrop'\n\t\t\t\t\t\t\t\t\t\t\t\t[dragula]='\"first-bag\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let repeatedConsignorListData of repeatedConsignorListDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ repeatedConsignorListData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ repeatedConsignorListData.grade }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatable ends  -->\n\n\n\n\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete starts -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mergeConsignorSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMergeConsignorSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteMergeConsignorSource\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t#autocompleteMergeConsignorSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(mergeConsignorSourceOptions | filter: controlMergeConsignorSource.value) as resultMergeConsignorSource\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultMergeConsignorSource\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultMergeConsignorSource.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete ends -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the second datatable starts  -->\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">Merge Consignor List</h6>\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionMergeConsignorList\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerMergeConsignorList\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody style=\"height: 40vh;\" class='dragndrop'\n\t\t\t\t\t\t\t\t\t\t\t\t[dragula]='\"first-bag\"'>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let mergeConsignorListData of mergeConsignorListDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ mergeConsignorListData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ mergeConsignorListData.gstNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t the second datatable ends  -->\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorName\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Consignor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"consignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"confirmBtn\">Confirm</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"mergeBtn\">Merge</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fourth autocomplete starts -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"confirmedConsignorSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConfirmedConsignorSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConfirmedConsignorSource\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t#autocompleteConfirmedConsignorSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(confirmedConsignorSourceOptions | filter: controlConfirmedConsignorSource.value) as resultConfirmedConsignorSource\">\n\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultConfirmedConsignorSource\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConfirmedConsignorSource.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fourth autocomplete ends -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fifth autocomplete starts -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"confirmedConsignorIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConfirmedConsignorIndex\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConfirmedConsignorIndex\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t#autocompleteConfirmedConsignorIndex=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(confirmedConsignorIndexOptions | filter: controlConfirmedConsignorIndex.value) as resultConfirmedConsignorIndex\">\n\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultConfirmedConsignorIndex\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConfirmedConsignorIndex.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fifth autocomplete ends -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"border-bottom: 1px solid orange;\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Confirmed Consignor List</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openPopup(content)\" class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"undoBtn\">Undo</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionConfirmedConsignorList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConfirmedConsignorList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let confirmedConsignorListData of confirmedConsignorListDataList; let i = index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"RowSelected(confirmedConsignorListData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ confirmedConsignorListData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ confirmedConsignorListData.contactNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsTwo\">\n\t\t\t\t\t\t\t<ng-template #content let-ok=\"close\" let-yes=\"close\"\n\t\t\t\t\t\t\t\tlet-no=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h5 class=\"m-b-10\">Sure you want to UnConfirm the -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tselected Consignors?</h5> -->\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"m-b-10\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle\"></i> Please select\n\t\t\t\t\t\t\t\t\t\t\tconsignor name to Undo\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"ok('Yes click')\">Ok</button>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t(click)=\"yes('Yes click')\">Yes</button> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t(click)=\"no('No click')\">No</button> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-template>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/consignor/consignor-merge/consignor-merge.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/master/consignor/consignor-merge/consignor-merge.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConsignorMergeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignorMergeComponent", function() { return ConsignorMergeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_consignor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/consignor-service */ "./src/app/dataService/consignor-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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


//for drag and drop ends
//for popup modal starts 

//for popup modal ends
var ConsignorMergeComponent = /** @class */ (function () {
    function ConsignorMergeComponent(consignorMerge, 
    //for popup modal starts
    modalService
    //for popup modal ends                
    ) {
        this.consignorMerge = consignorMerge;
        this.modalService = modalService;
        //for the select option with filter starts
        this.controlRepeatedConsignorSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlRepeatedConsignorIndex = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlMergeConsignorSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlConfirmedConsignorSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlConfirmedConsignorIndex = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.repeatedConsignorSourceOptions = [
            { id: 1, label: 'DELHI' },
            { id: 2, label: 'GUJARAT' },
            { id: 3, label: 'MUMBAI' },
            { id: 4, label: 'NAGPUR' },
            { id: 5, label: 'Others' },
        ];
        this.repeatedConsignorIndexOptions = [
            { id: 1, label: 'A' },
            { id: 2, label: 'B' },
            { id: 3, label: 'C' },
            { id: 4, label: 'D' },
            { id: 5, label: 'E' },
            { id: 6, label: 'F' },
            { id: 7, label: 'G' },
            { id: 8, label: 'H' },
            { id: 9, label: 'I' },
            { id: 10, label: 'J' },
            { id: 11, label: 'K' },
            { id: 12, label: 'L' },
            { id: 13, label: 'M' },
            { id: 14, label: 'N' },
            { id: 15, label: 'O' },
            { id: 16, label: 'P' },
            { id: 17, label: 'Q' },
            { id: 18, label: 'R' },
            { id: 19, label: 'S' },
            { id: 20, label: 'T' },
            { id: 21, label: 'U' },
            { id: 22, label: 'V' },
            { id: 23, label: 'W' },
            { id: 24, label: 'X' },
            { id: 25, label: 'Y' },
            { id: 26, label: 'Z' }
        ];
        this.mergeConsignorSourceOptions = [
            { id: 1, label: 'DELHI' },
            { id: 2, label: 'GUJARAT' },
            { id: 3, label: 'MUMBAI' },
            { id: 4, label: 'NAGPUR' },
            { id: 5, label: 'Others' },
        ];
        this.confirmedConsignorSourceOptions = [
            { id: 1, label: 'DELHI' },
            { id: 2, label: 'GUJARAT' },
            { id: 3, label: 'MUMBAI' },
            { id: 4, label: 'NAGPUR' },
            { id: 5, label: 'Others' },
        ];
        this.confirmedConsignorIndexOptions = [
            { id: 1, label: 'A' },
            { id: 2, label: 'B' },
            { id: 3, label: 'C' },
            { id: 4, label: 'D' },
            { id: 5, label: 'E' },
            { id: 6, label: 'F' },
            { id: 7, label: 'G' },
            { id: 8, label: 'H' },
            { id: 9, label: 'I' },
            { id: 10, label: 'J' },
            { id: 11, label: 'K' },
            { id: 12, label: 'L' },
            { id: 13, label: 'M' },
            { id: 14, label: 'N' },
            { id: 15, label: 'O' },
            { id: 16, label: 'P' },
            { id: 17, label: 'Q' },
            { id: 18, label: 'R' },
            { id: 19, label: 'S' },
            { id: 20, label: 'T' },
            { id: 21, label: 'U' },
            { id: 22, label: 'V' },
            { id: 23, label: 'W' },
            { id: 24, label: 'X' },
            { id: 25, label: 'Y' },
            { id: 26, label: 'Z' }
        ];
        //for popup modal ends
        //summaryTable:any;
        this.loadingIndicator = true;
        //
        this.dtTriggerRepeatedConsignorList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerMergeConsignorList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerConfirmedConsignorList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ConsignorMergeComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsignorMergeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //first datatable starts
        this.dtOptionsRepeatedConsignorList = {
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
            "scrollY": 210,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            pagingType: 'full_numbers',
            pageLength: 14,
        }, //first datatable ends
            //second datatable starts 
            this.dtOptionMergeConsignorList = {
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
                "scrollY": 210,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //second datatable ends
            //third datatable starts
            this.dtOptionConfirmedConsignorList = {
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
                "scrollY": 210,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                pagingType: 'full_numbers',
                pageLength: 14,
            };
        //third datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        this.getDataFrmServiceFrRepeatedConsignorListTable = this.consignorMerge.getSupplierMasterData();
        this.onDestroyUnsubscribtionRepeatedConsignorList = this.getDataFrmServiceFrRepeatedConsignorListTable.subscribe(function (data) {
            _this.repeatedConsignorListDataList = data['data'];
            _this.dtTriggerRepeatedConsignorList.next();
        });
        //first service ends
        //second service starts 
        this.getDataFrmServiceFrMergeConsignorListTable = this.consignorMerge.getSummaryData();
        this.onDestroyUnsubscribtionMergeConsignorList = this.getDataFrmServiceFrMergeConsignorListTable.subscribe(function (data) {
            _this.mergeConsignorListDataList = data['data'];
            _this.dtTriggerMergeConsignorList.next();
        });
        //second service ends
        //third service starts  
        this.getDataFrmServiceFrConfirmedConsignorListTable = this.consignorMerge.getSupplierMasterData();
        this.onDestroyUnsubscribtionConfirmedConsignorList = this.getDataFrmServiceFrConfirmedConsignorListTable.subscribe(function (data) {
            _this.confirmedConsignorListDataList = data['data'];
            _this.dtTriggerConfirmedConsignorList.next();
        });
        //third service ends
        //the below code is for the getting data through json ends
    };
    ConsignorMergeComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRepeatedConsignorList.unsubscribe();
        this.dtTriggerMergeConsignorList.unsubscribe();
        this.dtTriggerConfirmedConsignorList.unsubscribe();
        this.onDestroyUnsubscribtionRepeatedConsignorList.unsubscribe();
        this.onDestroyUnsubscribtionMergeConsignorList.unsubscribe();
        this.onDestroyUnsubscribtionConfirmedConsignorList.unsubscribe();
    };
    //for the select option with filter starts
    ConsignorMergeComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    //to insert value of selected row in table to input field starts
    ConsignorMergeComponent.prototype.RowSelected = function (confirmedConsignorListData) {
        this.selectedUser = confirmedConsignorListData;
        this.consignorName = this.selectedUser.name;
        console.log(this.selectedUser.name);
    };
    //to insert value of selected row in table to input field ends
    //for popup modal starts 
    ConsignorMergeComponent.prototype.openPopup = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContent = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContent = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConsignorMergeComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsignorMergeComponent.prototype, "dtElements", void 0);
    ConsignorMergeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignor-merge',
            template: __webpack_require__(/*! ./consignor-merge.component.html */ "./src/app/master/consignor/consignor-merge/consignor-merge.component.html"),
            styles: [__webpack_require__(/*! ./consignor-merge.component.css */ "./src/app/master/consignor/consignor-merge/consignor-merge.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_consignor_service__WEBPACK_IMPORTED_MODULE_1__["ConsignorService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
            //for popup modal ends                
        ])
    ], ConsignorMergeComponent);
    return ConsignorMergeComponent;
}());



/***/ }),

/***/ "./src/app/master/consignor/consignor.module.ts":
/*!******************************************************!*\
  !*** ./src/app/master/consignor/consignor.module.ts ***!
  \******************************************************/
/*! exports provided: ConsignorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignorModule", function() { return ConsignorModule; });
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
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_master_consignor_consignor_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/master/consignor/consignor.routing */ "./src/app/master/consignor/consignor.routing.ts");
/* harmony import */ var src_app_master_consignor_consignor_master_consignor_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/master/consignor/consignor-master/consignor-master.component */ "./src/app/master/consignor/consignor-master/consignor-master.component.ts");
/* harmony import */ var src_app_master_consignor_consignor_merge_consignor_merge_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/master/consignor/consignor-merge/consignor-merge.component */ "./src/app/master/consignor/consignor-merge/consignor-merge.component.ts");
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



var ConsignorModule = /** @class */ (function () {
    function ConsignorModule() {
    }
    ConsignorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_consignor_consignor_routing__WEBPACK_IMPORTED_MODULE_11__["ConsignorRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_10__["DragulaModule"]],
            declarations: [
                src_app_master_consignor_consignor_master_consignor_master_component__WEBPACK_IMPORTED_MODULE_12__["ConsignorMasterComponent"],
                src_app_master_consignor_consignor_merge_consignor_merge_component__WEBPACK_IMPORTED_MODULE_13__["ConsignorMergeComponent"]
            ]
        })
    ], ConsignorModule);
    return ConsignorModule;
}());



/***/ }),

/***/ "./src/app/master/consignor/consignor.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/master/consignor/consignor.routing.ts ***!
  \*******************************************************/
/*! exports provided: ConsignorRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignorRoutes", function() { return ConsignorRoutes; });
/* harmony import */ var src_app_master_consignor_consignor_master_consignor_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/master/consignor/consignor-master/consignor-master.component */ "./src/app/master/consignor/consignor-master/consignor-master.component.ts");
/* harmony import */ var src_app_master_consignor_consignor_merge_consignor_merge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/master/consignor/consignor-merge/consignor-merge.component */ "./src/app/master/consignor/consignor-merge/consignor-merge.component.ts");


var ConsignorRoutes = [
    {
        path: '',
        children: [
            {
                path: 'consignorMaster',
                component: src_app_master_consignor_consignor_master_consignor_master_component__WEBPACK_IMPORTED_MODULE_0__["ConsignorMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consignorMerge',
                component: src_app_master_consignor_consignor_merge_consignor_merge_component__WEBPACK_IMPORTED_MODULE_1__["ConsignorMergeComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-master-consignor-consignor-module.js.map