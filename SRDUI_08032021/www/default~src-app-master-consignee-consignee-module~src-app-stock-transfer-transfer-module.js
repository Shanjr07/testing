(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-master-consignee-consignee-module~src-app-stock-transfer-transfer-module"],{

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

/***/ "./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* fixed-height */\n\n.fixed_height {\n  max-height: 200px;\n  height: 180px;\n  overflow-y: scroll;\n  max-width: 100%;\n  width: 100%;\n  overflow-x: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbnNpZ25lZS9jb25zaWduZWUtYWRtaW4tcmF0ZS1tYXN0ZXIvY29uc2lnbmVlLWFkbWluLXJhdGUtbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2NvbnNpZ25lZS9jb25zaWduZWUtYWRtaW4tcmF0ZS1tYXN0ZXIvY29uc2lnbmVlLWFkbWluLXJhdGUtbWFzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmaXhlZC1oZWlnaHQgKi9cblxuLmZpeGVkX2hlaWdodCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Consignee Admin Rate Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Rate Details</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Rate For</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchMode\" #searchMode\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchModeMethod(searchMode.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"party\">Party</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"commodity\">Commodity</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"rateForAll\">Rate For All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainDest\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autoDestinationList\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autoDestinationList=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationListOptions | filter: controlMainDest.value) as resultDestinationList\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestinationList\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestinationList.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"partyView\" class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"partyName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainParty\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autoPartyList\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autoPartyList=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(partyListOptions | filter: controlMainParty.value) as resultPartyList\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultPartyList\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultPartyList.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"collectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autoSourceList\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autoSourceList=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceListOptions | filter: controlMainSource.value) as resultSourceList\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSourceList\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSourceList.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"collectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autoCommodityList\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autoCommodityList=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(commodityListOptions | filter: controlMainCommodity.value) as resultCommodityList\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultCommodityList.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unit\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Unit</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Rate</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unitRate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Rates</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Fixed Rate</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Discount Rate</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"rate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Rate</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"gcCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>G.C Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"reciptCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Recipt Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"perUnit\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Per Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Chargable Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"status\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Status</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Account</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fixedBy\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Fixed By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"effectFromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Effect From</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"effectFromDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #effectFromDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"effectFromDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Fixed On</label> <input id=\"fixedOnDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"fixedOnDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t#fixedOnDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fixedOnDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lc\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>LC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hamaliSrc\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali Src</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"bc\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>BC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"aoc\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>AOC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fov\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>F.O.V</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"dd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>DD</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"others\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Others</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" align='center'>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"nextBtn\">Next</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"saveBtn\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"resetBtn\">Reset</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" align='center'>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"updateBtn\">Update</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class='row p-t-10'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Rate Master</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 2px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"bankMasterRemoveBtn\">Remove</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRateMaster\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRateMaster\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.Hamali</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AOC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>RC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>SC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Fixes By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>WEF Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let rateMasterData of RateMasterDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.rateType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.gc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.lc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.sourceHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.bc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.aoc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.dd }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.others }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.rc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.sc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.fixedBy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.wefDate }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class='row p-t-10'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Rate For\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tCommodities</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 2px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"bankMasterRemoveBtn\">Remove</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommodityRate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommodityRate\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.Hamali</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AOC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>RC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>SC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Fixes By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>WEF Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let commodityRateData of CommodityRateDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.rateType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.gc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.lc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.sourceHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.bc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.aoc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.dd }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.others }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.rc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.sc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.fixedBy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityRateData.wefDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class='row p-t-10'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Rate For Parties</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 2px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"bankMasterRemoveBtn\">Remove</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPartyRate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPartyRate\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>S.Hamali</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AOC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DD</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>RC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>SC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Fixes By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>WEF Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let partyRateData of PartyRateDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.companyName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.rateType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.gc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.lc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.sourceHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.bc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.aoc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.dd }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.others }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.rc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.sc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.fixedBy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyRateData.wefDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ConsigneeAdminRateMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeAdminRateMasterComponent", function() { return ConsigneeAdminRateMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
//for datepicker starts
//for datepicker ends
//for datepicker starts
var my = new Date();
var ConsigneeAdminRateMasterComponent = /** @class */ (function () {
    function ConsigneeAdminRateMasterComponent(rateMasterScreen) {
        this.rateMasterScreen = rateMasterScreen;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        this.partyView = true;
        this.controlMainSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlMainDest = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlMainCommodity = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlMainParty = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.commodityListOptions = [
            { id: 1, label: 'A C PARTS' },
            { id: 2, label: 'A P SHEET' },
            { id: 3, label: 'A S GOODS' },
            { id: 4, label: 'A S WIRE' }
        ];
        this.partyListOptions = [
            { id: 1, label: 'A C PARTS' },
            { id: 2, label: 'A P SHEET' },
            { id: 3, label: 'A S GOODS' },
            { id: 4, label: 'A S WIRE' }
        ];
        this.destinationListOptions = [
            { id: 1, label: 'ANDHERI' },
            { id: 2, label: 'BANGLORE' },
            { id: 3, label: 'CHENNAI' },
            { id: 4, label: 'COIMBATORE' }
        ];
        this.sourceListOptions = [
            { id: 1, label: 'ANDHERI' },
            { id: 2, label: 'BUDHPUR' },
            { id: 3, label: 'CHENNAI' },
            { id: 4, label: 'DELHI' }
        ];
        this.dtTriggerRateMaster = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerCommodityRate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerPartyRate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ConsigneeAdminRateMasterComponent.prototype.searchModeMethod = function (searchTypes) {
        if (searchTypes === 'party') {
            this.partyView = true;
        }
        else if (searchTypes === 'commodity') {
            this.partyView = false;
        }
        else if (searchTypes === 'rateForAll') {
            this.partyView = false;
        }
        else {
            this.partyView = false;
        }
    };
    ConsigneeAdminRateMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsigneeAdminRateMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsRateMaster = {
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
            "scrollY": 140,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        },
            this.dtOptionsCommodityRate = {
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
                "scrollY": 140,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            this.dtOptionsPartyRate = {
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
                "scrollY": 140,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            this.gettingDataFrmServiceFrRateMasterTable = this.rateMasterScreen.getSummaryData();
        this.onDestroyUnsubscribtionRateMaster = this.gettingDataFrmServiceFrRateMasterTable.subscribe(function (data) {
            _this.rateMasterDataList = data['data'];
            _this.dtTriggerRateMaster.next();
        });
        this.gettingDataFrmServiceFrCommodityRateTable = this.rateMasterScreen.getSummaryData();
        this.onDestroyUnsubscribtionCommodityRate = this.gettingDataFrmServiceFrCommodityRateTable.subscribe(function (data) {
            _this.commodityRateDataList = data['data'];
            _this.dtTriggerCommodityRate.next();
        });
        this.gettingDataFrmServiceFrPartyRateTable = this.rateMasterScreen.getSummaryData();
        this.onDestroyUnsubscribtionPartyRate = this.gettingDataFrmServiceFrPartyRateTable.subscribe(function (data) {
            _this.partyRateDataList = data['data'];
            _this.dtTriggerPartyRate.next();
        });
        //the below code is for the getting data through json ends
    };
    ConsigneeAdminRateMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRateMaster.unsubscribe();
        this.dtTriggerCommodityRate.unsubscribe();
        this.dtTriggerPartyRate.unsubscribe();
        this.onDestroyUnsubscribtionRateMaster.unsubscribe();
        this.onDestroyUnsubscribtionCommodityRate.unsubscribe();
        this.onDestroyUnsubscribtionPartyRate.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsigneeAdminRateMasterComponent.prototype, "dtElements", void 0);
    ConsigneeAdminRateMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignee-admin-rate-master',
            template: __webpack_require__(/*! ./consignee-admin-rate-master.component.html */ "./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.html"),
            styles: [__webpack_require__(/*! ./consignee-admin-rate-master.component.css */ "./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ConsigneeAdminRateMasterComponent);
    return ConsigneeAdminRateMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/consignee/consignee-grouping/consignee-grouping.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-grouping/consignee-grouping.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb25zaWduZWUvY29uc2lnbmVlLWdyb3VwaW5nL2NvbnNpZ25lZS1ncm91cGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/consignee/consignee-grouping/consignee-grouping.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-grouping/consignee-grouping.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n/* to fix the height of a single row in drag and drop starts */\n.table-striped tbody tr:nth-of-type(odd) {\n\tbackground-color: rgba(0, 0, 0, .05);\n\tmax-height: 24px;\n}\n\n.table-striped tbody tr:nth-of-type(even) {\n\tmax-height: 24px;\n}\n/* to fix the height of a single row in drag and drop ends */\n</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row system_responsive\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Consignee Grouping</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-4 \">\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consignee List</h6>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the first datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRepeatedConsigneeList\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRepeatedConsigneeList\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody style=\"height: 40vh;\" class='dragndrop'\n\t\t\t\t\t\t\t\t\t\t\t\t[dragula]='\"first-bag\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let repeatedConsigneeListData of repeatedConsigneeListDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ repeatedConsigneeListData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ repeatedConsigneeListData.grade }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatable ends  -->\n\n\n\n\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the second datatable starts  -->\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Grouping Consignee</h6>\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionMergeConsigneeList\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerMergeConsigneeList\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody style=\"height: 40vh;\" class='dragndrop'\n\t\t\t\t\t\t\t\t\t\t\t\t[dragula]='\"first-bag\"'>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let mergeConsigneeListData of mergeConsigneeListDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ mergeConsigneeListData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ mergeConsigneeListData.gstNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t the second datatable ends  -->\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" id=\"groupBtn\">Group</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"removeBtn\">Remove</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\"></div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid orange;\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Groupped Consignee Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\" type=\"submit\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openPopup(content)\" class=\"btn btn-dark m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tid=\"undoBtn\">Undo</button> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionConfirmedConsigneeList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConfirmedConsigneeList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let confirmedConsigneeListData of confirmedConsigneeListDataList; let i = index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"RowSelected(confirmedConsigneeListData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ confirmedConsigneeListData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ confirmedConsigneeListData.contactNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsTwo\">\n\t\t\t\t\t\t\t<ng-template #content let-yes=\"close\" let-no=\"close\"\n\t\t\t\t\t\t\t\tlet-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"m-b-10\">Sure you want to UnConfirm the\n\t\t\t\t\t\t\t\t\t\t\tselected Consignees?</h5>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<h5 class=\"m-b-10\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle\"></i> Please select -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tconsignee name to Undo -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</h5> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t(click)=\"ok('Yes click')\">Ok</button> -->\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"yes('Yes click')\">Yes</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"no('No click')\">No</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-template>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/consignee/consignee-grouping/consignee-grouping.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-grouping/consignee-grouping.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConsigneeGroupingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeGroupingComponent", function() { return ConsigneeGroupingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
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
var ConsigneeGroupingComponent = /** @class */ (function () {
    function ConsigneeGroupingComponent(consigneeMerge, 
    //for popup modal starts
    modalService
    //for popup modal ends                
    ) {
        this.consigneeMerge = consigneeMerge;
        this.modalService = modalService;
        //for the select option with filter starts
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlConsignorIndex = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'Agra' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Chennai' },
            { id: 4, label: 'Delhi' },
            { id: 5, label: 'Erode' },
        ];
        this.consignorIndexOptions = [
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
        this.dtTriggerRepeatedConsigneeList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerMergeConsigneeList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerConfirmedConsigneeList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ConsigneeGroupingComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsigneeGroupingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //first datatable starts
        this.dtOptionsRepeatedConsigneeList = {
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
            "scrollY": 270,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            pagingType: 'full_numbers',
            pageLength: 14,
        }, //first datatable ends
            //second datatable starts 
            this.dtOptionMergeConsigneeList = {
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
                "scrollY": 250,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //second datatable ends
            //third datatable starts
            this.dtOptionConfirmedConsigneeList = {
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
                "scrollY": 270,
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
        this.getDataFrmServiceFrRepeatedConsigneeListTable = this.consigneeMerge.getSupplierMasterData();
        this.onDestroyUnsubscribtionRepeatedConsigneeList = this.getDataFrmServiceFrRepeatedConsigneeListTable.subscribe(function (data) {
            _this.repeatedConsigneeListDataList = data['data'];
            _this.dtTriggerRepeatedConsigneeList.next();
        });
        //first service ends
        //second service starts 
        this.getDataFrmServiceFrMergeConsigneeListTable = this.consigneeMerge.getSummaryData();
        this.onDestroyUnsubscribtionMergeConsigneeList = this.getDataFrmServiceFrMergeConsigneeListTable.subscribe(function (data) {
            _this.mergeConsigneeListDataList = data['data'];
            _this.dtTriggerMergeConsigneeList.next();
        });
        //second service ends
        //third service starts  
        this.getDataFrmServiceFrConfirmedConsigneeListTable = this.consigneeMerge.getSupplierMasterData();
        this.onDestroyUnsubscribtionConfirmedConsigneeList = this.getDataFrmServiceFrConfirmedConsigneeListTable.subscribe(function (data) {
            _this.confirmedConsigneeListDataList = data['data'];
            _this.dtTriggerConfirmedConsigneeList.next();
        });
        //third service ends
        //the below code is for the getting data through json ends
    };
    ConsigneeGroupingComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRepeatedConsigneeList.unsubscribe();
        this.dtTriggerMergeConsigneeList.unsubscribe();
        this.dtTriggerConfirmedConsigneeList.unsubscribe();
        this.onDestroyUnsubscribtionRepeatedConsigneeList.unsubscribe();
        this.onDestroyUnsubscribtionMergeConsigneeList.unsubscribe();
        this.onDestroyUnsubscribtionConfirmedConsigneeList.unsubscribe();
    };
    //for the select option with filter starts
    ConsigneeGroupingComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ConsigneeGroupingComponent.prototype.RowSelected = function (confirmedConsigneeListData) {
        this.selectedUser = confirmedConsigneeListData;
        this.consigneeName = this.selectedUser.name;
        console.log(this.selectedUser);
    };
    //to insert value of selected row in table to input field ends
    //for popup modal starts 
    ConsigneeGroupingComponent.prototype.openPopup = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContent = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContent = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConsigneeGroupingComponent.prototype.getDismissReason = function (reason) {
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
    ], ConsigneeGroupingComponent.prototype, "dtElements", void 0);
    ConsigneeGroupingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignee-grouping',
            template: __webpack_require__(/*! ./consignee-grouping.component.html */ "./src/app/master/consignee/consignee-grouping/consignee-grouping.component.html"),
            styles: [__webpack_require__(/*! ./consignee-grouping.component.css */ "./src/app/master/consignee/consignee-grouping/consignee-grouping.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_1__["ConsigneeService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
            //for popup modal ends                
        ])
    ], ConsigneeGroupingComponent);
    return ConsigneeGroupingComponent;
}());



/***/ }),

/***/ "./src/app/master/consignee/consignee-master/consignee-master.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-master/consignee-master.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\nhr {\n\tmargin-bottom: 5px;\n\tmargin-top: 2pX;\n}\n/* the below css is done for the verticle form ends here */\n/* fixed-height */\n.fixed_height {\n\tmax-height: 120px;\n\theight: 100px;\n\toverflow-y: scroll;\n}\n@media ( min-width :768px) {\n\t.pd_1_at_largeView {\n\t\tpadding: 1px;\n\t}\n\t.cardbody_pd {\n\t\tpadding: 5px 0px;\n\t}\n}\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/* .btn_clr_pdng{\n  background-color:cyan;\n  padding:2px;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbnNpZ25lZS9jb25zaWduZWUtbWFzdGVyL2NvbnNpZ25lZS1tYXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7QUFDNUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCO0FBRUQsMkRBQTJEO0FBRTNELGtCQUFrQjtBQUNsQjtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CO0FBRUQ7Q0FDQztFQUNDLGFBQWE7RUFDYjtDQUNEO0VBQ0MsaUJBQWlCO0VBQ2pCO0NBQ0Q7QUFDRDtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjtBQUNEOzs7SUFHSSIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb25zaWduZWUvY29uc2lnbmVlLW1hc3Rlci9jb25zaWduZWUtbWFzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0aGUgYmVsb3cgY3NzIGlzIGRvbmUgZm9yIHRoZSB2ZXJ0aWNsZSBmb3JtIHN0YXJ0cyBoZXJlKi9cbmhyIHtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRtYXJnaW4tdG9wOiAycFg7XG59XG5cbi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gZW5kcyBoZXJlICovXG5cbi8qIGZpeGVkLWhlaWdodCAqL1xuLmZpeGVkX2hlaWdodCB7XG5cdG1heC1oZWlnaHQ6IDEyMHB4O1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbkBtZWRpYSAoIG1pbi13aWR0aCA6NzY4cHgpIHtcblx0LnBkXzFfYXRfbGFyZ2VWaWV3IHtcblx0XHRwYWRkaW5nOiAxcHg7XG5cdH1cblx0LmNhcmRib2R5X3BkIHtcblx0XHRwYWRkaW5nOiA1cHggMHB4O1xuXHR9XG59XG46Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3d7XG5cdHRvcDogMjZweDtcbiAgICBsZWZ0OiAxODhweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLyogLmJ0bl9jbHJfcGRuZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjpjeWFuO1xuICBwYWRkaW5nOjJweDtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/master/consignee/consignee-master/consignee-master.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-master/consignee-master.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Consignee Master</h6>\n\t\t\t</div>\n\t\t\t<!--<form (ngSubmit)=\"getConsigneeDetailsList()\">-->\n\t\t\t\t\t\n\t\t\t\t<div class=\"row \" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"citys\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select City\" [formControl]=\"controlCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.city\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #destinationCity id=\"destinationCityId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestinationCity($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestinationCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestinationCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestinationCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestinationCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationCityTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"  />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Party Details</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user-circle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"firstName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"firstName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.consigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Person</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"lastName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"lastName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.contactPerson\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Profile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tupdate</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"mobileNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"mobileNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.mobileNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"removeBtn\">Remove</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsMobileNumberPopUp\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerMobileNumberPopUp\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Mobile No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let mobileNumberPopUpData of mobileNumberPopUpDataList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ mobileNumberPopUpData.mobileNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; color: blue; font-weight: bolder;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open2(content)\">Add New</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select State\" [formControl]=\"controlState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteState\" [(ngModel)]=\"partyMasterDto.state\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #stateNameCode id=\"stateNameAndCodeId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForStateNameAndCode($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStateNameAndCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchStateNameAndCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterStateNameAndCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterStateNameAndCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusStateNameAndCodeTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" (keyup)=\"fieldFocus($event, gstNumber)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GST Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"gstNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"gstNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.gstNoConsignee\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Office Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"officeNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"officeNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.officeNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Email-Id</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"email\" name=\"email\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.email\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control \" rows=\"1 \" id=\"address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"address\" [(ngModel)]=\"partyMasterDto.address\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"pincode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"pincode\" [(ngModel)]=\"partyMasterDto.pincode\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Shipping Details</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"deliveryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"deliveryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.deliveryType\" #deliveryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"delivTypeMethod(deliveryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"godown\">Godown</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"doorDelivery\">Door Delivery</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewArea\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Area</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"area\" name=\"area\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.area\" #area\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"areaMethod(area.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"selectArea\">Select Area</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"addNew\">Add New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"newArea\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>New Area</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"area\" name=\"area\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.areaNew\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<select class=\"custom-select col-12\" id=\"collectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"collectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.collectionMan\" #collectionMan\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"collectionManMethod(collectionMan.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"selectCollectionMan\">Select\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollection Man</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"addNew\">Add New Collection Man</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cash\">Cash</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Driver\">Driver</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionMan id=\"collectionManId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForCollectionMan($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCollectionManTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"newCollectionMan\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>New Collection Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"collectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"collectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.collectionManNew\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Party Area</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"partyArea\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"partyArea\" [(ngModel)]=\"partyMasterDto.partyArea\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"binnymills\">Binnymills</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"konditope\">Konditope</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Application Setting</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"mode\" name=\"mode\" class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.isAllowed\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\" selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body cardbody_pd\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Des Block</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-ban\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"desBlock\" name=\"desBlock\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.isBlocked\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\" selected>No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Send Rmd SMS</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"sendRemainderSms\" name=\"sendRemainderSms\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.isSendRemindSMS\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\" selected>Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Send Stock Sms</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"sendStockSms\" name=\"sendStockSms\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.sendStockSms\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pop Up Alert</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-exclamation-triangle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"popUpAlert\" name=\"popUpAlert\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.isAlert\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>SRC Block</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-ban\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"srcBlock\" name=\"srcBlock\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyMasterDto.isSrcBlock\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"eDeclarationPassword\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<label>E- Decl Pass</label> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-lock\"></i> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\" style=\"padding: 0px;\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8 pd_1_at_largeView\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodityList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<input class=\"input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCommodity\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #CommodityMainUnldg id=\"CommodityMainUnldgId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForCommodityMainUnldg($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelCommodityMainUnldg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchCommodityMainUnldg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterCommodityMainUnldg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterCommodityMainUnldg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCommodityMainUnldgTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"  />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unldnChg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"Unldg Chg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Unit</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Chargable Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp; <i style=\"cursor: pointer;\" placement=\"right\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbTooltip=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommodity\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Unldg Chg</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let commodityData of commodityDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityData.unldgChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityData.unit }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consignee Commodities</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8 pd_1_at_largeView\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<input class=\"input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodities List\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsigneeCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsigneeCom\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #commodityMain id=\"commodityMainId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForCommodityMain($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelCommodityMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchCommodityMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterCommodityMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterCommodityMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCommodityMainTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"  />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp; <i style=\"cursor: pointer;\" placement=\"right\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbTooltip=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsigneeCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsigneeCommodity\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consigneeCommodityData of consigneeCommodityDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeCommodityData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 vl\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStatus Details &nbsp; <i style=\"cursor: pointer;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplacement=\"right\" ngbTooltip=\"Get Details\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"getDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getConsigneeDetailsList()\">Get Details</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsigneeStatusDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsigneeStatusDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Active</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Non Active</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consigneeStatusDetailsData of consigneeStatusDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeStatusDetailsData.type }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeStatusDetailsData.total }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeStatusDetailsData.active }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeStatusDetailsData.nonActive }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 vl\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"searchWise\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-check\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Partywise</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Commoditywise</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">GST No:</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<form class=\"w-50 m-b-10\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<input type='text' class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder='Type to filter the name column...' -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)='consigneeNameFilter($event)' /> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</form> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"card-header bg-info\" style=\"background-color:orange!important;padding:5px;\">\n                        <h6 class=\"card-title text-white\">Supplier Master</h6>\n                      </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsigneeDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsigneeDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity Wise</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GST No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Delivery Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consigneeDetailsData of consigneeDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeDetailsData.consigneename }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeDetailsData.mainCommodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeDetailsData.gstNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeDetailsData.deliverytype }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeDetailsData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"consigneeDetailsData.length==0\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\">No Data To Display</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t\t<div class=\"col-lg-6\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"finishBtn\" (click)=\"saveUpdateConsignee()\">Finish</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"mobileNoUpdationBtn\">Mobile Number Updation</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/master/consignee/consignee-master/consignee-master.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-master/consignee-master.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConsigneeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeMasterComponent", function() { return ConsigneeMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/master-dto */ "./src/app/dto/master-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var src_app_models_party_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/party-model */ "./src/app/models/party-model.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/dto/RateMaster-dto */ "./src/app/dto/RateMaster-dto.ts");
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
//for the select option with filter starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends
//for datatable ends

//import { Subject, Subscription } from 'rxjs';

//from the particular global folder starts

//from the particular global folder ends
//for datatable ends
//for popup modal starts 

//for popup modal endss
//service starts


//we used any keyword so comment
//import { ConsigneedetailsModel } from 'src/app/models/Consigneedetails-model';
//import { PartyMasterDto } from "src/app/dto/PartyMaster-dto";












var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'my-auth-token'
    })
};
//service ends
var ConsigneeMasterComponent = /** @class */ (function () {
    function ConsigneeMasterComponent(http, masterService, router, masterreadService, modalService) {
        var _this = this;
        this.http = http;
        this.masterService = masterService;
        this.router = router;
        this.masterreadService = masterreadService;
        this.modalService = modalService;
        //    service starts
        this.baseUrl = '/api/v1/createconsignee';
        this.masterDto = new src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_8__["MasterDto"]();
        this.partyMasterDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyModel = new src_app_models_party_model__WEBPACK_IMPORTED_MODULE_10__["PartyModel"]();
        this.viewArea = false;
        this.newArea = false;
        this.newCollectionMan = false;
        this.loadingIndicator = true;
        this.reorderable = true;
        //for the select option with filter starts
        this.controlCity = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlState = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlCollectionMan = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlCommodityUnldgList = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlCommodityList = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.cityOptions = [
            { id: 1, label: 'Mumbai' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Delhi' },
            { id: 4, label: 'Chennai' }
        ];
        this.stateOptions = [
            { id: 1, label: 'Bangalore ' },
            { id: 2, label: 'Calicut' },
            { id: 3, label: 'Delhi' },
            { id: 4, label: 'Chennai' }
        ];
        this.collectionManOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Aamer' },
            { id: 3, label: 'Afzal' },
            { id: 3, label: 'Arif' }
        ];
        this.commodityListOptions = [
            { id: 1, label: 'Bangalore' },
            { id: 2, label: 'Chennai' },
            { id: 3, label: 'A C Parts' },
            { id: 3, label: 'Others' }
        ];
        this.consigneeCommoditiesListOptions = [
            { id: 1, label: 'Bangalore' },
            { id: 2, label: 'Chennai' },
            { id: 3, label: 'A C Parts' },
            { id: 3, label: 'Others' }
        ];
        this.dtTriggerCommodity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerConsigneeCommodity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerConsigneeStatusDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerConsigneeDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerMobileNumberPopUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // for datatable ends
        this.isLoggedIn = true;
        this.modelStateNameAndCodeTA = [];
        this.focusStateNameAndCodeTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchStateNameAndCode = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusStateNameAndCodeTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (term) { return (term === '' ? _this.modelStateNameAndCodeTA
                : _this.modelStateNameAndCodeTA.filter(function (v) { return v.state.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterStateNameAndCode = function (x) { return x.state; };
        this.userDtoCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_17__["UserDataDto"]();
        this.userDtoCollectionManAddNew = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_17__["UserDataDto"]();
        this.modelCollectionManTA = [];
        this.focusCollectionManTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchCollectionMan = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCollectionManTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (term) { return (term === '' ? _this.modelCollectionManTA
                : _this.modelCollectionManTA.filter(function (v) { return v.collectioMan.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterCollectionMan = function (x) { return x.collectioMan; };
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_18__["LRDto"]();
        this.modelDestinationCityTA = [];
        this.focusDestinationCityTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDestinationCity = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationCityTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (term) { return (term === '' ? _this.modelDestinationCityTA
                : _this.modelDestinationCityTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestinationCity = function (x) { return x.destination; };
        this.rateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_19__["RateMasterDto"]();
        this.rateMasterDtoCommodityUnldAddNew = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_19__["RateMasterDto"]();
        this.modelCommodityMainUnldgTA = [];
        this.focusCommodityMainUnldgTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchCommodityMainUnldg = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCommodityMainUnldgTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (term) { return (term === '' ? _this.modelCommodityMainUnldgTA
                : _this.modelCommodityMainUnldgTA.filter(function (v) { return v.commodityName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterCommodityMainUnldg = function (x) { return x.commodityName; };
        this.modelCommodityMainTA = [];
        //modelCommodityMainTA= new Array<RateMasterDto>();
        this.focusCommodityMainTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchCommodityMain = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCommodityMainTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (term) { return (term === '' ? _this.modelCommodityMainTA
                : _this.modelCommodityMainTA.filter(function (v) { return v.commodityName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterCommodityMain = function (x) { return x.commodityName; };
        this.saveUpdateConsignee = function () {
            _this.getSaveDetails();
            _this.masterService.createConsignee(_this.partyMasterDto).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        };
        this.getConsigneeDetailsList = function () {
            var apiUrlConsigneeDetails = "http://localhost:8080/srd/master/v1/consigneedetails";
            _this.http.get(apiUrlConsigneeDetails, {
                params: {
                    masterDto: _this.getUserValuesForConsigneeList(),
                    city: 'Chennai',
                },
            }).subscribe(function (response) {
                if (response.json().length == 0) {
                    alert('No records found for the selected city!');
                }
                else {
                    _this.consigneeDetailsDataList = response.json();
                    _this.dtTriggerConsigneeDetails.next();
                    //console.log(this.consigneeDetailsDataList[5]);
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getStationDtails = function () {
            _this.getStationInfo();
            _this.masterreadService.getDestinationForLREntryService(_this.lrDtoForStation).subscribe(function (response) {
                if (response) {
                    if (response.length == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                            title: "Warning",
                            text: "No collection man details records found!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.controlCity.reset();
                        _this.lrDtoOptions = [];
                        _this.modelDestinationCityTA = [];
                    }
                    else {
                        _this.controlCity.reset();
                        _this.lrDtoOptions = response;
                        _this.modelDestinationCityTA = [];
                        for (var i = 0; i < _this.lrDtoOptions.length; i++) {
                            _this.modelDestinationCityTA.push(_this.lrDtoOptions[i]);
                        }
                    }
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                    title: "Error",
                    text: "Server Error While Getting Station Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.getCommodityMasterDetailsList = function () {
            //        console.log( this.lrDto.companyId );
            _this.getCommodityListRead();
            _this.masterreadService.getCommodityDetails(_this.rateMasterDto).subscribe(function (response) {
                if (response) {
                    console.log(response);
                    /* this.commodityData = response;
                     if ( this.rateMasterDto.searchType == "Partial" ) {
                         this.commodityMasterPartialDataList = this.commodityData;
                         this.dtTriggerCommodityMasterPartial.next();
                     } else if ( ( this.rateMasterDto.searchType == "All" ) || ( this.rateMasterDto.searchType == "Completed" ) ) {
                         this.commodityMasterDataList = this.commodityData;
                         this.dtTriggerCommodityMaster.next();
                     }*/
                    if (response.length == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                            title: "Warning",
                            text: "No commodity details records found!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.controlCommodityUnldgList.reset();
                        _this.rateMasterDtoOptions = [];
                        _this.modelCommodityMainUnldgTA = [];
                        _this.controlCommodityList.reset();
                        _this.rateMasterDtoCommodityMainOptions = [];
                        _this.modelCommodityMainTA = [];
                    }
                    else {
                        _this.controlCommodityUnldgList.reset();
                        _this.rateMasterDtoOptions = response;
                        _this.modelCommodityMainUnldgTA = [];
                        _this.controlCommodityList.reset();
                        _this.rateMasterDtoCommodityMainOptions = response;
                        _this.modelCommodityMainTA = [];
                        _this.rateMasterDtoCommodityUnldAddNew.commodityName = 'All';
                        _this.modelCommodityMainUnldgTA.push(_this.rateMasterDtoCommodityUnldAddNew);
                        for (var i = 0; i < _this.rateMasterDtoOptions.length; i++) {
                            _this.modelCommodityMainUnldgTA.push(_this.rateMasterDtoOptions[i]);
                        }
                        for (var i = 0; i < _this.rateMasterDtoCommodityMainOptions.length; i++) {
                            _this.modelCommodityMainTA.push(_this.rateMasterDtoCommodityMainOptions[i]);
                        }
                    }
                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                title: "Error",
                text: "Server Error While Getting Commodity Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
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
            this.getCollectionManDetailsList();
            this.getStationDtails();
            this.getCommodityMasterDetailsList();
        }
    }
    // for datatable ends
    ConsigneeMasterComponent.prototype.delivTypeMethod = function (deliveryType) {
        if (deliveryType === 'doorDelivery') {
            this.viewArea = true;
        }
        else if (deliveryType === 'godown') {
            this.viewArea = false;
        }
        else {
            this.viewArea = false;
        }
    };
    ConsigneeMasterComponent.prototype.areaMethod = function (areaSelect) {
        if (areaSelect === 'addNew') {
            this.newArea = true;
        }
        else {
            this.newArea = false;
        }
    };
    ConsigneeMasterComponent.prototype.collectionManMethod = function (event) {
        console.log("HAI");
        if (event === 'Add New') {
            this.newCollectionMan = true;
        }
        else {
            this.newCollectionMan = false;
        }
    };
    ConsigneeMasterComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    // for datatable starts
    ConsigneeMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    // for datatable ends
    ConsigneeMasterComponent.prototype.ngOnInit = function () {
        // for datatable starts
        // the first datatable starts 
        this.dtOptionsCommodity = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Commodity',
                    data: 'commodity'
                },
                {
                    title: 'Unldg Chg',
                    data: 'unldgChg'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Unit',
                    data: 'unit'
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
            "scrollY": 90,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
            searching: false,
        },
            // the first datatable ends 
            // the second datatable starts 
            this.dtOptionsConsigneeCommodity = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Commodity',
                        data: 'commodity'
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
                "scrollY": 90,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
                searching: false,
            },
            // the second datatable ends 
            // the third datatable starts 
            this.dtOptionsConsigneeStatusDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Type',
                        data: 'type'
                    },
                    {
                        title: 'Total',
                        data: 'total'
                    },
                    {
                        title: 'Active',
                        data: 'active'
                    },
                    {
                        title: 'Non Active',
                        data: 'nonActive'
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
                searching: false,
            },
            // the third datatable ends 
            // the fourth datatable starts 
            this.dtOptionsConsigneeDetails = {
                //};
                //columns is used to for export and others starts
                //                columns: [
                //                    {
                //                        title: 'Consignee Name',
                //                        data: 'consigneename'
                //                    },
                //                    {
                //                        title: 'Commodity Wise',
                //                        data: 'mainCommodity'
                //                    },
                //                    {
                //                        title: 'GST Number',
                //                        data: 'gstNumber'
                //                    },
                //                    {
                //                        title: 'Delivery Type',
                //                        data: 'deliverytype'
                //                    },
                //                    {
                //                        title: 'Area',
                //                        data: 'area'
                //                    }
                //                ],
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
                        footer: true,
                        exportOptions: {
                            columns: ':visible'
                        }
                    },
                    {
                        extend: 'print',
                        text: '<i class="fas fa-print"> Print</i>',
                        titleAttr: 'Print',
                        footer: true,
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
                paging: true,
                info: true,
                pagingType: 'full_numbers',
            },
            // the fourth datatable ends 
            // the fifth datatable starts 
            this.dtOptionsMobileNumberPopUp = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Mobile No',
                        data: 'mobileNo'
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
                "scrollY": 200,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
                searching: false,
            };
        // the first datatable ends 
        //the below code is for the getting data through json starts
        //      this.supplierList.getAllData().subscribe(data => {
        //          this.lrDispatchBknRptList = data['data'];
        //          this.dtTriggerSummary.next();
        //          } );
        // for datatable ends
    };
    //for the select option with filter starts
    ConsigneeMasterComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    //for popup modal starts 
    ConsigneeMasterComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConsigneeMasterComponent.prototype.getDismissReason = function (reason) {
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
    //for popup modal ends 
    /*saveUpdateConsignee() {
        alert(this.partyModel.consigneeName);
        this.consigneeSerivce.saveUpdateConsigneeDetails(this.partyModel);
    }*/
    /* getUserValuesToSaveConsignee() {
 
         var masterDto = {
             'city': 'Chennai',
             'gstNumber': '33AABPA9230H2Z8'
         }
         return masterDto;
     }*/
    ///For Saving Consigneedetails////
    ConsigneeMasterComponent.prototype.getSaveDetails = function () {
        this.partyMasterDto.consigneeId = 0;
        this.partyMasterDto.eDeclarationPwd = "Superadminbgl";
        this.partyMasterDto.stateCode = "TN";
        this.partyMasterDto.userName = "Superadminbgl";
        this.partyMasterDto.office = "Chennai";
        this.partyMasterDto.role = "Booking Manager";
        this.partyMasterDto.companyBranch = "SRD";
        this.partyMasterDto.status = "Completed";
        this.partyMasterDto.branch = "chennai";
        this.partyMasterDto.inStockRpt = true;
        this.partyMasterDto.mode = "Master";
        this.partyMasterDto.multipleCommodity = "Hardware goods#General goods";
        this.partyMasterDto.unldgCommodities = "Hardware goods#General goods";
        this.partyMasterDto.unldgChg = "General goods";
        this.partyMasterDto.unldgUnit = "Actual Weight";
        this.partyMasterDto.unldgSource = "Delhi";
        //        this.partyMasterDto.area = "Arni";
        //        this.partyMasterDto.collectionMan = "Rafiq";
        if (this.partyMasterDto.isBlocked = true) {
            this.partyMasterDto.message = "Pop for des block";
        }
        if (this.partyMasterDto.isAlert = true) {
            this.partyMasterDto.alertMessage = "Pop up alert Message";
        }
        if (this.partyMasterDto.isSrcBlock = true) {
            this.partyMasterDto.srcAlertMessage = " Pop src alert Message Block";
        }
        if (this.partyMasterDto.deliverytype == 'doorDelivery') {
            if ((this.partyMasterDto.area != 'selectArea') && (this.partyMasterDto.area != '') && (this.partyMasterDto.area == 'addNew')) {
                this.partyMasterDto.area = this.partyMasterDto.areaNew;
                console.log('area' + this.partyMasterDto.area);
            }
        }
        if (this.partyMasterDto.collectionMan == 'addNew') {
            this.partyMasterDto.collectionMan = this.partyMasterDto.collectionManNew;
        }
    };
    //    for Getting Consignee Details
    ConsigneeMasterComponent.prototype.getUserValuesForConsigneeList = function () {
        var masterDto = {
            'city': 'Chennai',
            'gstNumber': '33AABPA9230H2Z8'
        };
        return masterDto;
    };
    ConsigneeMasterComponent.prototype.ngOnDestroy = function () {
        // for datatable starts
        this.dtTriggerCommodity.unsubscribe();
        this.dtTriggerConsigneeCommodity.unsubscribe();
        this.dtTriggerConsigneeStatusDetails.unsubscribe();
        this.dtTriggerConsigneeDetails.unsubscribe();
        this.dtTriggerMobileNumberPopUp.unsubscribe();
        //this.onDestroyUnsubscribtionCommodity.unsubscribe();
        //this.onDestroyUnsubscribtionConsigneeCommodity.unsubscribe();
        //this.onDestroyUnsubscribtionConsigneeStatusDetails.unsubscribe();
        //        this.onDestroyUnsubscribtionConsigneeDetails.unsubscribe();
        //this.onDestroyUnsubscribtionMobileNumberPopUp.unsubscribe();
        // for datatable ends
    };
    ////
    ConsigneeMasterComponent.prototype.focusRegStateTA = function (e) {
        if (e.keyCode == 13) {
            $("#gstNumber").focus();
        }
    };
    ConsigneeMasterComponent.prototype.focusCollectionManTA = function (e) {
        if (e.keyCode == 13) {
            $("#partyArea").focus();
        }
    };
    ConsigneeMasterComponent.prototype.focusDestinationCityTA = function (e) {
        if (e.keyCode == 13) {
            $("#firstName").focus();
        }
    };
    ConsigneeMasterComponent.prototype.focusCommodityMainUnldgTA = function (e) {
        if (e.keyCode == 13) {
            $("#source").focus();
        }
    };
    ConsigneeMasterComponent.prototype.focusCommodityMainTA = function (e) {
        if (e.keyCode == 13) {
            console.log(e);
        }
    };
    ConsigneeMasterComponent.prototype.clickListnerForStateNameAndCode = function (e, fubi) {
        this.modelStateNameAndCode = e.item;
        $("#stateNameAndCodeId").val(this.modelStateNameAndCode.state);
        $("#gstNumber").focus();
    };
    ConsigneeMasterComponent.prototype.clickListnerForCollectionMan = function (e, fubi) {
        this.modelCollectionMan = e.item;
        $("#collectionManId").val(this.modelCollectionMan.collectioMan);
        if ($("#collectionManId").val() == 'Add New') {
            this.newCollectionMan = true;
            $("#collectionMan").focus();
        }
        else {
            this.newCollectionMan = false;
            $("#partyArea").focus();
        }
    };
    ConsigneeMasterComponent.prototype.clickListnerForDestinationCity = function (e, fubi) {
        this.modelDestinationCity = e.item;
        $("#destinationCityId").val(this.modelDestinationCity.destination);
        $("#firstName").focus();
    };
    ConsigneeMasterComponent.prototype.clickListnerForCommodityMainUnldg = function (e, fubi) {
        this.modelCommodityMainUnldg = e.item;
        $("#CommodityMainUnldgId").val(this.modelCommodityMainUnldg.commodityName);
        $("#source").focus();
    };
    ConsigneeMasterComponent.prototype.clickListnerForCommodityMain = function (e, fubi) {
        this.modelCommodityMain = e.item;
        console.log(this.modelCommodityMain);
        $("#CommodityMainId").val(this.modelCommodityMain.commodityName);
        // $( "#source" ).focus();
    };
    ConsigneeMasterComponent.prototype.getStatesMethod = function () {
        var _this = this;
        this.partyMasterDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.masterreadService.getStateDetailsService(this.partyMasterDto).subscribe(function (response) {
            if (response) {
                // console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                        title: "Warning",
                        text: "No getStatesMethod records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlState.reset();
                    _this.partyMasterDtoOptions = [];
                    _this.modelStateNameAndCodeTA = [];
                }
                else {
                    _this.controlState.reset();
                    _this.partyMasterDtoOptions = response;
                    _this.modelStateNameAndCodeTA = [];
                    for (var i = 0; i < _this.partyMasterDtoOptions.length; i++) {
                        _this.modelStateNameAndCodeTA.push(_this.partyMasterDtoOptions[i]);
                    }
                }
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
            title: "Error",
            text: "Server Error While Getting getStatesMethod",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ConsigneeMasterComponent.prototype.getDetailsForCollectionMasterRead = function () {
        this.userDtoCollectionMan.branchId = this.userDataDtoReturnSession.mainStation;
        this.userDtoCollectionMan.companyId = this.userDataDtoReturnSession.companyId;
        this.userDtoCollectionMan.status = "D";
    };
    ConsigneeMasterComponent.prototype.getCollectionManDetailsList = function () {
        var _this = this;
        this.getDetailsForCollectionMasterRead();
        this.masterreadService.getCollectionManMasterDetails(this.userDtoCollectionMan).subscribe(function (response) {
            if (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
                        title: "Warning",
                        text: "No collection man details records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlCollectionMan.reset();
                    _this.userDataDtoOptions = [];
                    _this.modelCollectionManTA = [];
                }
                else {
                    _this.controlCollectionMan.reset();
                    _this.userDataDtoOptions = response;
                    _this.modelCollectionManTA = [];
                    _this.userDtoCollectionManAddNew.collectioMan = "Add New";
                    _this.modelCollectionManTA.push(_this.userDtoCollectionManAddNew);
                    for (var i = 0; i < _this.userDataDtoOptions.length; i++) {
                        _this.modelCollectionManTA.push(_this.userDataDtoOptions[i]);
                    }
                }
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_14___default()({
            title: "Server Error",
            text: "Problem occur while getting Collection Man Details",
            icon: "error",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    ConsigneeMasterComponent.prototype.getStationInfo = function () {
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_18__["LRDto"]();
        this.lrDtoForStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForStation.branch = this.userDataDtoReturnSession.office;
        this.lrDtoForStation.mode = "LrForm";
    };
    ConsigneeMasterComponent.prototype.getCommodityListRead = function () {
        this.rateMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.rateMasterDto.destination = null;
        this.rateMasterDto.mode = "mainConsigneeMaster";
        this.rateMasterDto.status = "Working";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsigneeMasterComponent.prototype, "dtElements", void 0);
    ConsigneeMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignee-master',
            template: __webpack_require__(/*! ./consignee-master.component.html */ "./src/app/master/consignee/consignee-master/consignee-master.component.html"),
            styles: [__webpack_require__(/*! ./consignee-master.component.css */ "./src/app/master/consignee/consignee-master/consignee-master.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_15__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], ConsigneeMasterComponent);
    return ConsigneeMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/consignee/consignee-merge/consignee-merge.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-merge/consignee-merge.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* to fix the height of a single row in drag and drop starts */\n.table-striped tbody tr:nth-of-type(odd) {\n\tbackground-color: rgba(0, 0, 0, .05);\n\theight: 24px;\n}\n.table-striped tbody tr:nth-of-type(even) {\n\theight: 24px;\n}\n/* to fix the height of a single row in drag and drop ends */\ntr td {\n\theight: 5px;\n\twhite-space: nowrap;\n\tpadding: 1px 4px;\n}\ntable.dataTable tbody td img {\n\tmax-height: 20px;\n}\ntd {\n\tmax-width: 0;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.selected {\n\tbackground-color: red;\n\tfont-size: 140px;\n}\n.td.dataTables_empty {\n\tdisplay: none !important;\n}\ntable.dataTable td.dataTables_empty {\n\ttext-align: left !important;\n}\n::ng-deep ngb-typeahead-window {\n  top:26px;\n    left:25px;\n\tmax-height: 150px;\n    overflow-y: auto;\n\tposition: absolute;\n\tmax-width:-webkit-fill-available;\n\tmin-width:230px !important;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbnNpZ25lZS9jb25zaWduZWUtbWVyZ2UvY29uc2lnbmVlLW1lcmdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9EO0NBQ0MscUNBQXFDO0NBQ3JDLGFBQWE7Q0FDYjtBQUVEO0NBQ0MsYUFBYTtDQUNiO0FBQ0QsNkRBQTZEO0FBQzdEO0NBQ0MsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakI7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUVEO0NBQ0MsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCO0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyx5QkFBeUI7Q0FDekI7QUFFRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUVEO0VBQ0UsU0FBUztJQUNQLFVBQVU7Q0FDYixrQkFBa0I7SUFDZixpQkFBaUI7Q0FDcEIsbUJBQW1CO0NBQ25CLGlDQUFpQztDQUNqQywyQkFBMkI7O0NBRTNCIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2NvbnNpZ25lZS9jb25zaWduZWUtbWVyZ2UvY29uc2lnbmVlLW1lcmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0byBmaXggdGhlIGhlaWdodCBvZiBhIHNpbmdsZSByb3cgaW4gZHJhZyBhbmQgZHJvcCBzdGFydHMgKi9cbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG5cdGhlaWdodDogMjRweDtcbn1cblxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xuXHRoZWlnaHQ6IDI0cHg7XG59XG4vKiB0byBmaXggdGhlIGhlaWdodCBvZiBhIHNpbmdsZSByb3cgaW4gZHJhZyBhbmQgZHJvcCBlbmRzICovXG50ciB0ZCB7XG5cdGhlaWdodDogNXB4O1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRwYWRkaW5nOiAxcHggNHB4O1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQgaW1nIHtcblx0bWF4LWhlaWdodDogMjBweDtcbn1cblxudGQge1xuXHRtYXgtd2lkdGg6IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2VsZWN0ZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdGZvbnQtc2l6ZTogMTQwcHg7XG59XG5cbi50ZC5kYXRhVGFibGVzX2VtcHR5IHtcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGQuZGF0YVRhYmxlc19lbXB0eSB7XG5cdHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcbiAgdG9wOjI2cHg7XG4gICAgbGVmdDoyNXB4O1xuXHRtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdG1heC13aWR0aDotd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuXHRtaW4td2lkdGg6MjMwcHggIWltcG9ydGFudDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/master/consignee/consignee-merge/consignee-merge.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-merge/consignee-merge.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n<style>\r\n/* to fix the height of a single row in drag and drop starts */\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n\tbackground-color: rgba(0, 0, 0, .05);\r\n\tmax-height: 24px;\r\n}\r\n\r\n.table-striped tbody tr:nth-of-type(even) {\r\n\tmax-height: 24px;\r\n}\r\n/* to fix the height of a single row in drag and drop ends */\r\n</style>\r\n</head>\r\n\r\n<body>\r\n\r\n\t<!-- Row -->\r\n\t<div class=\"row system_responsive\">\r\n\t\t<div class=\"col-lg-12\">\r\n\r\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\r\n\t\t\t\t<div class=\"card-header bg-info\"\r\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\r\n\t\t\t\t\t<h6 class=\"card-title text-white\">{{contentHeader}}</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<!-- column -->\r\n\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\r\n\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\r\n\t\t\t\t\t<div class=\"col-md-4 \">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\r\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input #destination id=\"destination\" name=\"destination\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDestListener($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid orange; padding-bottom: 4px;\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Repeated Consignee List</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-7\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"confirmBtn\" type=\"submit\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"confrimBtnMethod();\">Confirm</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; background: blue;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-success m-r-10\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"moveToMergeBtn\" (click)=\"moveToMergeMethod();\">Move\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tto Merge</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">Repeated Consignee List</h6> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the first datatable starts  -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"repeatedConsigneeId\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRepeatedConsigneeList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRepeatedConsigneeList\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Is Ret Set?</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody style=\"height: 40vh;\" class='dragndrop'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dragula]='\"first-bag\"'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let repeatedConsigneeListData of repeatedConsigneeListDataList \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\" [checked]=\"multiSelect\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid='selected' style=\"margin-left: 20px\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"rowCheckBoxChecked($event, repeatedConsigneeListData)\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ repeatedConsigneeListData.consigneeName }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ repeatedConsigneeListData.gstNoConsignee }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"repeatedConsigneeListData.isAdminRateSet== false\">{{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trepeatedConsigneeListData.isAdminRateSet== true ? 'Yes'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t: 'No'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"repeatedConsigneeListData.isAdminRateSet== true\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='font-size: 13px; color: red; font-weight: bold;'>{{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trepeatedConsigneeListData.isAdminRateSet== true ? 'Yes'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t: 'No'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatable ends  -->\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 vl\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\r\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the second datatable starts  -->\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid orange; padding-bottom: 4px;\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Merge Consignee List</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\" align='right'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;background: brown;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-success m-r-10\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"mergeBtn\"(click)=\"mergeBtnMethod();\">Merge</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\"></h6>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t<table datatable id=\"mergeConsigneeId\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionMergeConsigneeList\"\r\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerMergeConsigneeList\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody style=\"height: 40vh;\" class='dragndrop'\r\n\t\t\t\t\t\t\t\t\t\t\t\t[dragula]='\"first-bag\"'>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr  style=\"cursor: pointer;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let mergeConsigneeListData of mergeConsigneeListDataList \"\t(click)=\"rowSelectedFromMerge(mergeConsigneeListData);\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ mergeConsigneeListData.consigneeName }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ mergeConsigneeListData.gstNoConsignee }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeleteForMerge(mergeConsigneeListData,i);\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t the second datatable ends  -->\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"row p-t-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<input #consigneeNameConfirmed type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeNameConfirmed\" name=\"consigneeNameConfirmed\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"consigneeName\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\r\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\"> -->\r\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\r\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tid=\"confirmBtn\">Confirm</button> -->\r\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"mergeBtn\">Merge</button> -->\r\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\r\n\t\t\t\t\t<div class=\"col-md-4 vl\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Index</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeIndex id=\"consigneeIndex\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeIndex\" type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Index\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsigneeIndex($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeIndexSearchTA\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeIndexTA$.next($any($event).target.value)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceConsigneeIndex)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceConsigneeIndex=\"ngbTypeahead\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"border-bottom: 1px solid orange;\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Confirmed Consignee List</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\" align='right'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\" type=\"submit\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"undoBtnMethod();\" class=\"btn btn-dark m-r-10\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"undoBtn\">Undo</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"confirmedConsigneeId\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionConfirmedConsigneeList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConfirmedConsigneeList\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Is Ret Set?</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style=\"cursor: pointer;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let confirmedConsigneeListData of confirmedConsigneeListDataList; let i = index\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedForUndo(confirmedConsigneeListData);\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ confirmedConsigneeListData.consigneeName }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ confirmedConsigneeListData.gstNoConsignee }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"confirmedConsigneeListData.isAdminRateSet== false\">{{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tconfirmedConsigneeListData.isAdminRateSet== true ? 'Yes'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t: 'No'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"confirmedConsigneeListData.isAdminRateSet== true\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='font-size: 13px; color: red; font-weight: bold;'>{{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tconfirmedConsigneeListData.isAdminRateSet== true ? 'Yes'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t: 'No'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable ends  -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Row -->\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsTwo\">\r\n\t\t\t\t\t\t\t<ng-template #content let-yes=\"close\" let-no=\"close\"\r\n\t\t\t\t\t\t\t\tlet-ok=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h5 class=\"m-b-10\">Sure you want to UnConfirm the -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tselected Consignees?</h5> -->\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"m-b-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle\"></i> Please select\r\n\t\t\t\t\t\t\t\t\t\t\tconsignee name to Undo\r\n\t\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"ok('Yes click')\">Ok</button>\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t(click)=\"yes('Yes click')\">Yes</button> -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\" -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t(click)=\"no('No click')\">No</button> -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/master/consignee/consignee-merge/consignee-merge.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/master/consignee/consignee-merge/consignee-merge.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConsigneeMergeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeMergeComponent", function() { return ConsigneeMergeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
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
var ConsigneeMergeComponent = /** @class */ (function () {
    function ConsigneeMergeComponent(router, modalService, masterReadService, datePipe, consigneeService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.consigneeService = consigneeService;
        // mergeConsigneeListDataList: any;
        this.mergeConsigneeListDataList = [];
        //for popup modal ends
        //for the select option with filter starts
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlConsigneeIndex = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.consigneeIndexOptions = [
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
        //for the select option with filter ends
        //summaryTable:any;
        this.loadingIndicator = true;
        //
        this.dtTriggerRepeatedConsigneeList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerMergeConsigneeList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerConfirmedConsigneeList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        //for ConsigneeName
        this.consigneeNameTA = [];
        this.consigneeNameTATemp = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        this.consigneeIndexTA = [];
        this.focusConsigneeIndexTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consigneeIndexSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeIndexTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.consigneeIndexTA
                : _this.consigneeIndexTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        ///
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.destView = false;
        this.viewDestination = false;
        this.setDestination = [];
        this.ShowDestForConsigneeMerge = 'Consignee Merge Dest View';
        this.partyMasterDtoConsigneeRpt = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.invoiceDtoShipmentForConsignee = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.lrDtoDestinationToAdd = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.partyMasterDtoConsigneeIndex = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.partyDtoIdList = [];
        this.partyDtoIdListForConfirmBtn = [];
        this.partyMasterDtoConfrimBtnConsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.partyMasterDtoUndoBtn = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.oldConsigneeId = 0;
        this.newAttributeForMerge = {};
        this.newAttributeForRepeat = {};
        this.partyMasterDtoMergeBtnSingle = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.partyMasterDtoMergeBtnList = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.partyDtoIdListForMergeBtn = [];
        this.contentHeader = "Consignee Merge";
        this.gridCreationRepeatCgneeInfo = function (destination) {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeRepeatDetails(_this.partyMasterDtoConsigneeRpt).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if ((_this.invoiceDtoShipmentForConsignee != null) && (_this.invoiceDtoShipmentForConsignee.mode != null) && (_this.invoiceDtoShipmentForConsignee.mode == 'shipmentstatus')) {
                    _this.destinationTA = [];
                    _this.lrDtoDestinationToAdd = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                    _this.lrDtoDestinationToAdd.destination = _this.userDataDtoReturnSession.mainStation;
                    _this.destinationTA.push(_this.lrDtoDestinationToAdd);
                }
                $("#repeatedConsigneeId").DataTable().destroy();
                _this.repeatedConsigneeListDataList = [];
                console.log('gridCreationRepeatCgneeInfo');
                console.log(response);
                $("#destination").val(destination);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Empty",
                        text: "No  Repeated Consignee Details available",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.repeatedConsigneeListDataList = response;
                    console.log(_this.repeatedConsigneeListDataList);
                }
                _this.dtTriggerRepeatedConsigneeList.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Repeated Consignee's  details", "info");
            }, function () { return console.log('done'); };
        };
        this.gridCreationConfirmedCgneeInfo = function (destination) {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeConfirmedDetails(_this.partyMasterDtoConsigneeIndex).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#confirmedConsigneeId").DataTable().destroy();
                _this.confirmedConsigneeListDataList = [];
                console.log('gridCreationRepeatCgneeInfo');
                console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Empty",
                        text: "No  Confrimed Consignee Details available",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.confirmedConsigneeListDataList = response;
                    console.log(_this.confirmedConsigneeListDataList);
                }
                _this.dtTriggerConfirmedConsigneeList.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Confirmed Consignee's  details", "info");
            }, function () { return console.log('done'); };
        };
        this.getUserValuesForConfirmInfo = function () {
            _this.showSpinnerForAction = true;
            _this.consigneeService.consigneeConfirmed(_this.partyDtoIdListForConfirmBtn).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log(response);
                _this.getValRetOfConfrim = response;
                if (_this.getValRetOfConfrim.status == 'Success') {
                    _this.gridSummaryRepeat();
                    _this.gridSummaryConfirmed();
                    $("#consigneeNameConfirmed").val('');
                    _this.oldCgneeName = '';
                    _this.oldConsigneeId = 0;
                    _this.partyDtoIdList = [];
                }
                else if (_this.getValRetOfConfrim.status == 'NotExist') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Failed",
                        text: "Consignee Not Exist",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Failed",
                        text: "Problem occur while confirm the consignee",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While  the Confirmed Consignee's  details", "info");
            }, function () { return console.log('done'); };
        };
        this.getUserValuesForUndoInfo = function () {
            _this.showSpinnerForAction = true;
            _this.consigneeService.undoCgneeMerge(_this.partyMasterDtoUndoBtn).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log(response);
                _this.getValRetOfUndo = response;
                if (_this.getValRetOfUndo.status == 'Success') {
                    _this.gridSummaryRepeat();
                    _this.gridSummaryConfirmed();
                    $("#consigneeNameConfirmed").val('');
                    _this.oldCgneeName = '';
                    _this.oldConsigneeId = 0;
                    _this.partyDtoIdList = [];
                    _this.selectedRowForUndo = '';
                }
                else if (_this.getValRetOfUndo.status == 'NotExist') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Failed",
                        text: "Consignee Not Exist",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Failed",
                        text: "Problem occur while confirm the consignee",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While  the Confirmed Consignee's  details", "info");
            }, function () { return console.log('done'); };
        };
        this.gridSummaryRepeatInfo = function (destination) {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeRepeatDetails(_this.partyMasterDtoConsigneeRpt).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#repeatedConsigneeId").DataTable().destroy();
                _this.repeatedConsigneeListDataList = [];
                console.log('gridCreationRepeatCgneeInfo');
                console.log(response);
                $("#destination").val(destination);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Empty",
                        text: "No  Repeated Consignee Details available",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.repeatedConsigneeListDataList = response;
                    console.log(_this.repeatedConsigneeListDataList);
                }
                _this.dtTriggerRepeatedConsigneeList.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Repeated Consignee's  details", "info");
            }, function () { return console.log('done'); };
        };
        this.gridSummaryConfirmedInfo = function (destination) {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeConfirmedDetails(_this.partyMasterDtoConsigneeIndex).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#confirmedConsigneeId").DataTable().destroy();
                _this.confirmedConsigneeListDataList = [];
                console.log('gridCreationRepeatCgneeInfo');
                console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Empty",
                        text: "No  Confrimed Consignee Details available",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.confirmedConsigneeListDataList = response;
                    console.log(_this.confirmedConsigneeListDataList);
                }
                _this.dtTriggerConfirmedConsigneeList.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Confirmed Consignee's  details", "info");
            }, function () { return console.log('done'); };
        };
        /*toRecalculateMemoAfterCgneeMerge = () => {
            this.showSpinnerForAction = true;
            //PENDING
                    
            this.consigneeService.getConsigneeConfirmedDetails(this.partyMasterDtoMergeBtnSingle).subscribe(
                (response) => {
                    this.showSpinnerForAction = false;
                    if (response.length == 0) {
                        this.doMerge();
    
                    } else {
                        this.doMerge();
    
                    }
                        
    
                }), (error) => {
                    this.showSpinnerForAction = false;
                    swal("Error", "Server Problem Occurred While getting the Re Calculate Memo After Consingnee Merge", "info");
                }, () => console.log('done');
        };*/
        this.doMerge = function () {
            _this.showSpinnerForAction = true;
            console.log('Inside Do merge method');
            console.log(_this.partyMasterDtoMergeBtnSingle);
            _this.consigneeService.consigneeMerge(_this.partyMasterDtoMergeBtnSingle).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.status == 'Success') {
                    $("#mergeConsigneeId").DataTable().destroy();
                    _this.mergeConsigneeListDataList = [];
                    _this.dtTriggerMergeConsigneeList.next();
                    _this.gridSummaryRepeat();
                    _this.gridSummaryConfirmed();
                    $("#consigneeNameConfirmed").val('');
                    _this.oldCgneeName = '';
                    _this.oldConsigneeId = 0;
                    _this.partyDtoIdList = [];
                    _this.partyDtoIdListForMergeBtn = [];
                    _this.selectedConsigneeName = '';
                    _this.selectedRowForMerge = '';
                    _this.consigneeName = '';
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Merged Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    //PENDING
                    //ConsigneePendingDetails.serviceCall();
                }
                else if (response.status == 'Failed') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Failed",
                        text: "Problem occur while confirm the consignee",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred while confirm the consignee", "info");
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
            this.office = this.userDataDtoReturnSession.office == null ? '' : this.userDataDtoReturnSession.office;
            this.mainStn = this.userDataDtoReturnSession.mainStation == null ? '' : this.userDataDtoReturnSession.mainStation;
            this.dataForPopupFromShipmentStatusOtherDetails = JSON.parse(localStorage.getItem('popupShipmentStatusForMerge'));
            localStorage.clear();
            if (this.dataForPopupFromShipmentStatusOtherDetails != null) {
                this.invoiceDtoShipmentForConsignee = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
                this.invoiceDtoShipmentForConsignee = this.dataForPopupFromShipmentStatusOtherDetails;
                this.contentHeader = "Consignee Merge InvoiceWise";
            }
            else {
                this.contentHeader = "Consignee Merge";
            }
            this.dataForPopupFromShipmentStatusOtherDetails = '';
            ///Rights for show Show Destination List
            //            if ( this.ShowDestForConsigneeMerge == "Consignee Merge Dest View" ) {
            //               this.destView = true;	 
            //} 
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Consignee Merge Dest View") {
                        this.destView = true;
                    }
                }
            }
            //need to comment this below
            // this.destView =true;
            if (this.destView == true) {
                //  this.viewDestination=true;
                this.getDestinationDetails();
            }
            else {
                // this.viewDestination=true;
                if ((this.invoiceDtoShipmentForConsignee != null) && (this.invoiceDtoShipmentForConsignee.mode != null) && (this.invoiceDtoShipmentForConsignee.mode == 'shipmentstatus')) {
                }
                else {
                    this.destinationTA = [];
                    this.lrDtoDestinationToAdd = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                    this.lrDtoDestinationToAdd.destination = this.userDataDtoReturnSession.mainStation;
                    this.destinationTA.push(this.lrDtoDestinationToAdd);
                }
            }
            this.setConsigneeIndex();
            this.gridCreationRepeatCgnee(this.userDataDtoReturnSession.mainStation);
            this.gridCreationConfirmedCgnee(this.userDataDtoReturnSession.mainStation, 'A');
        }
    }
    ConsigneeMergeComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ConsigneeMergeComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    ConsigneeMergeComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsigneeMergeComponent.prototype.setConsigneeIndex = function () {
        for (var i = 0; i < this.consigneeIndexOptions.length; i++) {
            this.consigneeIndexTA.push(this.consigneeIndexOptions[i].label);
        }
    };
    ConsigneeMergeComponent.prototype.ngOnInit = function () {
        //first datatable starts
        this.dtOptionsRepeatedConsigneeList = {
            // the below code is for button export starts
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 350,
            "scrollCollapse": true,
            "paging": false,
            "info": false,
        }, //first datatable ends
            //second datatable starts 
            this.dtOptionMergeConsigneeList = {
                dom: 'Bfrtip',
                buttons: [],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 330,
                "scrollCollapse": true,
                "paging": false,
                "info": false,
            },
            //second datatable ends
            //third datatable starts
            this.dtOptionConfirmedConsigneeList = {
                // the below code is for button export starts
                dom: 'Bfrtip',
                buttons: [],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 350,
                "scrollCollapse": true,
                "paging": false,
                "info": false,
            };
    };
    ConsigneeMergeComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRepeatedConsigneeList.unsubscribe();
        this.dtTriggerMergeConsigneeList.unsubscribe();
        this.dtTriggerConfirmedConsigneeList.unsubscribe();
    };
    ConsigneeMergeComponent.prototype.ngAfterViewInit = function () {
        // this.dtTriggerRepeatedConsigneeList.next();
        this.dtTriggerMergeConsigneeList.next();
        this.dtTriggerConfirmedConsigneeList.next();
    };
    //to insert value of selected row in table to input field starts
    //to insert value of selected row in table to input field ends
    //for popup modal starts 
    ConsigneeMergeComponent.prototype.openPopup = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContent = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContent = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConsigneeMergeComponent.prototype.getDismissReason = function (reason) {
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
    //for popup modal ends
    //for the select option with filter starts
    ConsigneeMergeComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    //To Get Destination List
    ConsigneeMergeComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    ConsigneeMergeComponent.prototype.getDestinationDetails = function () {
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
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ConsigneeMergeComponent.prototype.consigneeDestListener = function (e) {
        this.modelDestinationFotGet = e.item;
        this.gridCreationRepeatCgnee(this.modelDestinationFotGet.destination);
        this.gridCreationConfirmedCgnee(this.modelDestinationFotGet.destination, 'A');
        //   this.getConsigneeDetails(true);
    };
    ConsigneeMergeComponent.prototype.rowSelectedConsigneeIndex = function (e) {
        this.modelConsigneeIndex = e.item;
        this.selectedConsigneeIndex = this.modelConsigneeIndex;
        this.selectedDestination = $("#destination").val();
        if (this.selectedDestination != null && this.selectedDestination !== '' && this.selectedDestination != undefined) {
            this.gridCreationConfirmedCgnee(this.selectedDestination, this.selectedConsigneeIndex);
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Warning",
                text: "Please select destination",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    //For getting the gridCreationRepeatCgnee Onload Service
    ConsigneeMergeComponent.prototype.gridCreationRepeatCgnee = function (destination) {
        this.partyMasterDtoConsigneeRpt = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        if ((this.invoiceDtoShipmentForConsignee != null) && (this.invoiceDtoShipmentForConsignee.mode != null) && (this.invoiceDtoShipmentForConsignee.mode == 'shipmentstatus')) {
            this.partyMasterDtoConsigneeRpt.mode = 'specificInvoice';
            this.partyMasterDtoConsigneeRpt.invoiceNumber = this.invoiceDtoShipmentForConsignee.invoiceNumber;
        }
        else {
            this.partyMasterDtoConsigneeRpt.mode = 'specific';
        }
        this.partyMasterDtoConsigneeRpt.office = destination;
        this.partyMasterDtoConsigneeRpt.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.partyMasterDtoConsigneeRpt);
        this.gridCreationRepeatCgneeInfo(destination);
    };
    //For getting the gridCreationConfirmedCgnee Onload Service
    ConsigneeMergeComponent.prototype.gridCreationConfirmedCgnee = function (destination, index) {
        this.partyMasterDtoConsigneeIndex = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.partyMasterDtoConsigneeIndex.mode = 'Index';
        this.partyMasterDtoConsigneeIndex.indexValue = index;
        this.partyMasterDtoConsigneeIndex.office = destination;
        this.partyMasterDtoConsigneeIndex.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.partyMasterDtoConsigneeIndex);
        this.gridCreationConfirmedCgneeInfo(destination);
    };
    ConsigneeMergeComponent.prototype.rowCheckBoxChecked = function (e, repeatedConsigneeListData) {
        if (e.currentTarget.checked) {
            if (this.partyDtoIdList.length == 0) {
                this.partyDtoIdList = [];
                this.partyDtoIdList.push(repeatedConsigneeListData);
            }
            else {
                this.partyDtoIdList.push(repeatedConsigneeListData);
            }
        }
        else {
            var index = this.partyDtoIdList.indexOf(repeatedConsigneeListData);
            if (index > -1) {
                this.partyDtoIdList.splice(index, 1);
            }
        }
        console.log(this.partyDtoIdList);
    };
    //On Confirm Btn Clicked
    ConsigneeMergeComponent.prototype.confrimBtnMethod = function () {
        var _this = this;
        if (this.partyDtoIdList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Empty Selection",
                text: "Please select consignee name to confirm",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Confirm Individual",
                text: "Sure you want to Confirm the selected consignees as an Individual",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (update) {
                if (update) {
                    _this.getUserValuesForConfirm();
                }
                else {
                    //do nothing
                }
            });
        }
    };
    ConsigneeMergeComponent.prototype.getUserValuesForConfirm = function () {
        //	this.partyMasterDtoConfrimBtnConsignee = new PartyMasterDto();
        this.partyDtoIdListForConfirmBtn = [];
        for (var i = 0; i < this.partyDtoIdList.length; i++) {
            this.partyMasterDtoConfrimBtnConsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
            this.partyMasterDtoConfrimBtnConsignee.userName = this.userDataDtoReturnSession.userId;
            this.partyMasterDtoConfrimBtnConsignee.consigneeId = this.partyDtoIdList[i].consigneeId;
            this.partyMasterDtoConfrimBtnConsignee.consigneeName = this.partyDtoIdList[i].consigneeName;
            this.partyDtoIdListForConfirmBtn.push(this.partyMasterDtoConfrimBtnConsignee);
        }
        console.log(this.partyDtoIdListForConfirmBtn);
        this.getUserValuesForConfirmInfo();
    };
    //to insert value of selected row in table to input field starts
    ConsigneeMergeComponent.prototype.rowSelectedForUndo = function (confirmedConsigneeListData) {
        this.selectedRowForUndo = '';
        this.selectedRowForUndo = confirmedConsigneeListData;
        if (confirmedConsigneeListData.consigneeName != null) {
            this.consigneeName = this.selectedRowForUndo.consigneeName;
            $("#consigneeNameConfirmed").val(this.selectedRowForUndo.consigneeName);
            this.oldCgneeName = this.selectedRowForUndo.consigneeName;
            this.oldConsigneeId = this.selectedRowForUndo.consigneeId;
        }
        console.log(this.consigneeName, this.oldConsigneeId);
        console.log(this.selectedRowForUndo);
    };
    //On Undo Btn Clicked
    ConsigneeMergeComponent.prototype.undoBtnMethod = function () {
        var _this = this;
        if (this.selectedRowForUndo.consigneeName == '' || this.selectedRowForUndo.consigneeName == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Empty Selection",
                text: "Please select consignee name to Undo",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Confirm Undo",
                text: "Sure you want to UnConfirm the selected consignees",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (update) {
                if (update) {
                    _this.getUserValuesForUndo();
                }
                else {
                    //do nothing
                }
            });
        }
    };
    ConsigneeMergeComponent.prototype.getUserValuesForUndo = function () {
        this.partyMasterDtoUndoBtn = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.partyMasterDtoUndoBtn.userName = this.userDataDtoReturnSession.userId;
        this.partyMasterDtoUndoBtn.consigneeId = this.oldConsigneeId;
        this.partyMasterDtoUndoBtn.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.partyMasterDtoUndoBtn);
        this.getUserValuesForUndoInfo();
    };
    //Move To Merge Btn
    ConsigneeMergeComponent.prototype.moveToMergeMethod = function () {
        if (this.partyDtoIdList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Empty Selection",
                text: "Please select consignee name to Move",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.addInMergeTable();
        }
    };
    ConsigneeMergeComponent.prototype.addInMergeTable = function () {
        console.log(this.partyDtoIdList);
        console.log('inside of addInMergeTable');
        this.newAttributeForMerge = {};
        for (var i = 0; i < this.partyDtoIdList.length; i++) {
            console.log(this.partyDtoIdList[i].consigneeId);
            this.newAttributeForMerge.consigneeName = this.partyDtoIdList[i].consigneeName;
            this.newAttributeForMerge.consigneeId = this.partyDtoIdList[i].consigneeId;
            this.newAttributeForMerge.gstNoConsignee = this.partyDtoIdList[i].gstNoConsignee;
            this.newAttributeForMerge.isAdminRateSet = this.partyDtoIdList[i].isAdminRateSet;
            $("#mergeConsigneeId").DataTable().destroy();
            if (this.mergeConsigneeListDataList == null) {
                this.mergeConsigneeListDataList = [];
            }
            if (this.mergeConsigneeListDataList.length == 0) {
                this.mergeConsigneeListDataList.push(this.newAttributeForMerge);
            }
            else {
                this.mergeConsigneeListDataList.push(this.newAttributeForMerge);
            }
            //this.dtTriggerMergeConsigneeList.next();
            console.log(this.mergeConsigneeListDataList);
            //For Removing
            var index = -1;
            for (var j = 0; j < this.repeatedConsigneeListDataList.length; j++) {
                if (this.repeatedConsigneeListDataList[j].consigneeId === this.partyDtoIdList[i].consigneeId) {
                    console.log(this.repeatedConsigneeListDataList[j].consigneeId);
                    index = j;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            this.repeatedConsigneeListDataList.splice(index, 1);
            this.newAttributeForMerge = {};
        }
        this.partyDtoIdList = [];
        this.dtTriggerMergeConsigneeList.next();
        $("#repeatedConsigneeId").DataTable().destroy();
        this.dtTriggerRepeatedConsigneeList.next();
    };
    // For Delete From Merge Table
    ConsigneeMergeComponent.prototype.rowSelectedDeleteForMerge = function (mergeConsigneeListData, index) {
        var _this = this;
        console.log(mergeConsigneeListData);
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Confirm Remove",
            text: "Sure you want to remove the selected Row",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (remove) {
            if (remove) {
                _this.mergeConsigneeListDataList.splice(index, 1);
                $("#mergeConsigneeId").DataTable().destroy();
                _this.dtTriggerMergeConsigneeList.next();
                $("#consigneeNameConfirmed").val('');
                _this.oldCgneeName = '';
                _this.oldConsigneeId = 0;
                _this.addInRepeatedConsigneeTable(mergeConsigneeListData);
            }
        });
    };
    ConsigneeMergeComponent.prototype.addInRepeatedConsigneeTable = function (mergeConsigneeListData) {
        console.log(mergeConsigneeListData);
        console.log('inside of addInRepeatedConsigneeTable');
        this.newAttributeForRepeat = {};
        this.newAttributeForRepeat.consigneeName = mergeConsigneeListData.consigneeName;
        this.newAttributeForRepeat.consigneeId = mergeConsigneeListData.consigneeId;
        this.newAttributeForRepeat.gstNoConsignee = mergeConsigneeListData.gstNoConsignee;
        this.newAttributeForRepeat.isAdminRateSet = mergeConsigneeListData.isAdminRateSet;
        $("#repeatedConsigneeId").DataTable().destroy();
        if (this.repeatedConsigneeListDataList == null) {
            this.repeatedConsigneeListDataList = [];
        }
        if (this.repeatedConsigneeListDataList.length == 0) {
            this.repeatedConsigneeListDataList.push(this.newAttributeForRepeat);
        }
        else {
            this.repeatedConsigneeListDataList.push(this.newAttributeForRepeat);
        }
        //this.dtTriggerMergeConsigneeList.next();
        console.log(this.dtTriggerRepeatedConsigneeList);
        this.newAttributeForRepeat = {};
        this.partyDtoIdList = [];
        this.dtTriggerRepeatedConsigneeList.next();
    };
    //For getting the gridSummaryRepeat
    ConsigneeMergeComponent.prototype.gridSummaryRepeat = function () {
        this.selectedDestination = $("#destination").val();
        this.partyMasterDtoConsigneeRpt = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        if ((this.invoiceDtoShipmentForConsignee != null) && (this.invoiceDtoShipmentForConsignee.mode != null) && (this.invoiceDtoShipmentForConsignee.mode == 'shipmentstatus')) {
            this.partyMasterDtoConsigneeRpt.mode = 'specificInvoice';
            this.partyMasterDtoConsigneeRpt.invoiceNumber = this.invoiceDtoShipmentForConsignee.invoiceNumber;
        }
        else {
            this.partyMasterDtoConsigneeRpt.mode = 'specific';
        }
        if (this.selectedDestination != null && this.selectedDestination !== '' && this.selectedDestination != undefined) {
            this.partyMasterDtoConsigneeRpt.office = this.selectedDestination;
        }
        else {
            this.partyMasterDtoConsigneeRpt.office = this.userDataDtoReturnSession.mainStation;
        }
        //this.partyMasterDtoConsigneeRpt.office = destination;
        this.partyMasterDtoConsigneeRpt.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.partyMasterDtoConsigneeRpt);
        this.gridSummaryRepeatInfo(this.partyMasterDtoConsigneeRpt.office);
    };
    //For getting the gridCreationConfirmedCgnee
    ConsigneeMergeComponent.prototype.gridSummaryConfirmed = function () {
        this.selectedDestination = $("#destination").val();
        this.selectedConsigneeIndex = $("#consigneeIndex").val();
        this.partyMasterDtoConsigneeIndex = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.partyMasterDtoConsigneeIndex.mode = 'Index';
        if (this.selectedConsigneeIndex != null && this.selectedConsigneeIndex !== '' && this.selectedConsigneeIndex != undefined) {
            this.partyMasterDtoConsigneeIndex.indexValue = this.selectedConsigneeIndex;
        }
        else {
            this.partyMasterDtoConsigneeIndex.indexValue = 'A';
        }
        //this.partyMasterDtoConsigneeIndex.indexValue = index;
        if (this.selectedDestination != null && this.selectedDestination !== '' && this.selectedDestination != undefined) {
            this.partyMasterDtoConsigneeIndex.office = this.selectedDestination;
        }
        else {
            this.partyMasterDtoConsigneeIndex.office = this.userDataDtoReturnSession.mainStation;
        }
        //this.partyMasterDtoConsigneeIndex.office = destination;
        this.partyMasterDtoConsigneeIndex.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.partyMasterDtoConsigneeIndex);
        this.gridSummaryConfirmedInfo(this.partyMasterDtoConsigneeIndex.office);
    };
    //On Confirm Btn Clicked
    ConsigneeMergeComponent.prototype.mergeBtnMethod = function () {
        var _this = this;
        this.selectedConsigneeName = $("#consigneeNameConfirmed").val();
        if (this.mergeConsigneeListDataList.length == 0 || this.selectedConsigneeName == null || this.selectedConsigneeName == '' || this.selectedConsigneeName == undefined) {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Empty Selection",
                text: "Please select consignee name to merge",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Confirm Merge",
                text: "Sure you want to Merge the selected consignee",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (update) {
                if (update) {
                    _this.getUserValuesForMerge();
                }
                else {
                    //do nothing
                }
            });
        }
    };
    ConsigneeMergeComponent.prototype.getUserValuesForMerge = function () {
        this.partyDtoIdListForMergeBtn = [];
        this.selectedConsigneeName = $("#consigneeNameConfirmed").val();
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '') {
            this.selectedConsigneeName = this.selectedConsigneeName.trim().split(' ').filter(function (item) { return item.length > 0; }).join(' ');
        }
        for (var i = 0; i < this.mergeConsigneeListDataList.length; i++) {
            this.partyMasterDtoMergeBtnList = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
            this.partyMasterDtoMergeBtnList.consigneeId = this.mergeConsigneeListDataList[i].consigneeId;
            this.partyMasterDtoMergeBtnList.consigneeName = this.mergeConsigneeListDataList[i].consigneeName;
            this.partyDtoIdListForMergeBtn.push(this.partyMasterDtoMergeBtnList);
        }
        this.partyMasterDtoMergeBtnSingle = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.partyMasterDtoMergeBtnSingle.consigneeName = this.selectedConsigneeName;
        this.partyMasterDtoMergeBtnSingle.userName = this.userDataDtoReturnSession.userId;
        this.partyMasterDtoMergeBtnSingle.oldCgneeName = this.oldCgneeName;
        this.partyMasterDtoMergeBtnSingle.oldConsigneeId = this.oldConsigneeId;
        this.partyMasterDtoMergeBtnSingle.partyMasterDtos = this.partyDtoIdListForMergeBtn;
        this.partyMasterDtoMergeBtnSingle.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.partyMasterDtoMergeBtnSingle);
        //Need to comment this below 
        this.doMerge();
        //this.toRecalculateMemoAfterCgneeMerge();
    };
    //to insert value of selected row in table to input field starts
    ConsigneeMergeComponent.prototype.rowSelectedFromMerge = function (mergeConsigneeListData) {
        this.selectedRowForMerge = '';
        // this.selectedRowForMerge = mergeConsigneeListData;
        //if(mergeConsigneeListData.consigneeName !=null){
        /*	this.consigneeName = this.selectedRowForMerge.consigneeName;
            $("#consigneeNameConfirmed").val(this.selectedRowForMerge.consigneeName);
            this.oldCgneeName =this.selectedRowForMerge.consigneeName;
            this.oldConsigneeId = this.selectedRowForMerge.consigneeId;*/
        //}
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsigneeMergeComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceConsigneeIndex'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"])
    ], ConsigneeMergeComponent.prototype, "instanceConsigneeIndex", void 0);
    ConsigneeMergeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignee-merge',
            template: __webpack_require__(/*! ./consignee-merge.component.html */ "./src/app/master/consignee/consignee-merge/consignee-merge.component.html"),
            styles: [__webpack_require__(/*! ./consignee-merge.component.css */ "./src/app/master/consignee/consignee-merge/consignee-merge.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_14__["ConsigneeService"]])
    ], ConsigneeMergeComponent);
    return ConsigneeMergeComponent;
}());



/***/ }),

/***/ "./src/app/master/consignee/consignee.module.ts":
/*!******************************************************!*\
  !*** ./src/app/master/consignee/consignee.module.ts ***!
  \******************************************************/
/*! exports provided: ConsigneeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeModule", function() { return ConsigneeModule; });
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
/* harmony import */ var src_app_master_consignee_consignee_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/master/consignee/consignee.routing */ "./src/app/master/consignee/consignee.routing.ts");
/* harmony import */ var src_app_master_consignee_consignee_master_consignee_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/master/consignee/consignee-master/consignee-master.component */ "./src/app/master/consignee/consignee-master/consignee-master.component.ts");
/* harmony import */ var src_app_master_consignee_rate_master_rate_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/master/consignee/rate-master/rate-master.component */ "./src/app/master/consignee/rate-master/rate-master.component.ts");
/* harmony import */ var src_app_master_consignee_consignee_admin_rate_master_consignee_admin_rate_master_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component */ "./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.ts");
/* harmony import */ var src_app_master_consignee_consignee_merge_consignee_merge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/master/consignee/consignee-merge/consignee-merge.component */ "./src/app/master/consignee/consignee-merge/consignee-merge.component.ts");
/* harmony import */ var src_app_master_consignee_consignee_grouping_consignee_grouping_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/master/consignee/consignee-grouping/consignee-grouping.component */ "./src/app/master/consignee/consignee-grouping/consignee-grouping.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
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







var ConsigneeModule = /** @class */ (function () {
    function ConsigneeModule() {
    }
    ConsigneeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_consignee_consignee_routing__WEBPACK_IMPORTED_MODULE_11__["ConsigneeRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_10__["DragulaModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"]],
            declarations: [
                src_app_master_consignee_consignee_master_consignee_master_component__WEBPACK_IMPORTED_MODULE_12__["ConsigneeMasterComponent"],
                src_app_master_consignee_rate_master_rate_master_component__WEBPACK_IMPORTED_MODULE_13__["RateMasterComponent"],
                src_app_master_consignee_consignee_admin_rate_master_consignee_admin_rate_master_component__WEBPACK_IMPORTED_MODULE_14__["ConsigneeAdminRateMasterComponent"],
                src_app_master_consignee_consignee_merge_consignee_merge_component__WEBPACK_IMPORTED_MODULE_15__["ConsigneeMergeComponent"],
                src_app_master_consignee_consignee_grouping_consignee_grouping_component__WEBPACK_IMPORTED_MODULE_16__["ConsigneeGroupingComponent"]
            ],
            exports: [src_app_master_consignee_consignee_merge_consignee_merge_component__WEBPACK_IMPORTED_MODULE_15__["ConsigneeMergeComponent"]]
        })
    ], ConsigneeModule);
    return ConsigneeModule;
}());



/***/ }),

/***/ "./src/app/master/consignee/consignee.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/master/consignee/consignee.routing.ts ***!
  \*******************************************************/
/*! exports provided: ConsigneeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeRoutes", function() { return ConsigneeRoutes; });
/* harmony import */ var src_app_master_consignee_consignee_master_consignee_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/master/consignee/consignee-master/consignee-master.component */ "./src/app/master/consignee/consignee-master/consignee-master.component.ts");
/* harmony import */ var src_app_master_consignee_rate_master_rate_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/master/consignee/rate-master/rate-master.component */ "./src/app/master/consignee/rate-master/rate-master.component.ts");
/* harmony import */ var src_app_master_consignee_consignee_admin_rate_master_consignee_admin_rate_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component */ "./src/app/master/consignee/consignee-admin-rate-master/consignee-admin-rate-master.component.ts");
/* harmony import */ var src_app_master_consignee_consignee_merge_consignee_merge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/master/consignee/consignee-merge/consignee-merge.component */ "./src/app/master/consignee/consignee-merge/consignee-merge.component.ts");
/* harmony import */ var src_app_master_consignee_consignee_grouping_consignee_grouping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/master/consignee/consignee-grouping/consignee-grouping.component */ "./src/app/master/consignee/consignee-grouping/consignee-grouping.component.ts");





var ConsigneeRoutes = [
    {
        path: '',
        children: [
            {
                path: 'consigneeMaster',
                component: src_app_master_consignee_consignee_master_consignee_master_component__WEBPACK_IMPORTED_MODULE_0__["ConsigneeMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'rateMaster',
                component: src_app_master_consignee_rate_master_rate_master_component__WEBPACK_IMPORTED_MODULE_1__["RateMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consigneeAdminRateMaster',
                component: src_app_master_consignee_consignee_admin_rate_master_consignee_admin_rate_master_component__WEBPACK_IMPORTED_MODULE_2__["ConsigneeAdminRateMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consigneeMerge',
                component: src_app_master_consignee_consignee_merge_consignee_merge_component__WEBPACK_IMPORTED_MODULE_3__["ConsigneeMergeComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consigneeGrouping',
                component: src_app_master_consignee_consignee_grouping_consignee_grouping_component__WEBPACK_IMPORTED_MODULE_4__["ConsigneeGroupingComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/master/consignee/rate-master/rate-master.component.css":
/*!************************************************************************!*\
  !*** ./src/app/master/consignee/rate-master/rate-master.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb25zaWduZWUvcmF0ZS1tYXN0ZXIvcmF0ZS1tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/consignee/rate-master/rate-master.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/master/consignee/rate-master/rate-master.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Rate Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Rate Details 1</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: control.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consigneeNameOptions | filter: control.value) as resultConsigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultConsigneeName.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceOptions | filter: control.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fourth autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodity\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(commodityOptions | filter: control.value) as resultCommodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultCommodity.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fourth autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"unit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"unit\" #unit (change)=\"unitMethod(unit.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"rate\">Rate</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"discount\">Discount</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"unitRate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"rate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Rate</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"unitDiscount\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"On\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>On</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"\">Lr</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Total</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"unitDiscount\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"ratePercenage\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Rate (%)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Rate Details 2</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hamaliSrc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali Src</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"gcCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>G.C Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hamaliDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"reciptCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Recipt Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"perUnit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Per Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"article\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"actualWgh\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chargableWgh\">Chargable Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fov\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>F.O.V</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Status</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"cash\">Cash</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"account\">Acount</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delivery\">Delivery</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fixedBy\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Fixed By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"effectFrom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Effect From</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"effectFroms\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#effectFroms=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"effectFroms.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Fixed On</label> <input id=\"fixedOn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"fixedOns\" ngbDatepicker #fixedOns=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fixedOns.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center; margin: 5px;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"resetBtn\">Reset</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right; margin: 5px;\">\n\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark m-r-10\" id=\"removeBtn\">Remove</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRateMaster\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRateMaster\">\n\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Effective From</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let rateMasterData of rateMasterDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.unit }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ rateMasterData.effectiveFrom }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/consignee/rate-master/rate-master.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/master/consignee/rate-master/rate-master.component.ts ***!
  \***********************************************************************/
/*! exports provided: RateMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateMasterComponent", function() { return RateMasterComponent; });
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends
var RateMasterComponent = /** @class */ (function () {
    //for the select option with filter ends
    function RateMasterComponent(/* for datatable starts */ rateMaster /* for datatable endss */) {
        this.rateMaster = rateMaster;
        this.unitRate = false;
        this.unitDiscount = false;
        //for datatable ends
        this.loadingIndicator = true;
        this.dtTriggerRateMaster = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //for datatable ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'Alwaye' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Chennai' },
        ];
        this.consigneeNameOptions = [
            { id: 1, label: 'AK Paint' },
            { id: 2, label: 'GH Industries' },
            { id: 3, label: 'A & P Footwear' },
        ];
        this.sourceOptions = [
            { id: 1, label: 'Agra' },
            { id: 2, label: 'Daman' },
            { id: 3, label: 'Delhi' },
        ];
        this.commodityOptions = [
            { id: 1, label: 'A C Parts' },
            { id: 2, label: 'A S Goods' },
            { id: 3, label: 'A. Footwear' },
        ];
    }
    /* for datatable starts */
    RateMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    RateMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsRateMaster = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Commodity',
                    data: 'commodity'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Unit',
                    data: 'unit'
                },
                {
                    title: 'F O V',
                    data: 'fov'
                },
                {
                    title: 'Effective From',
                    data: 'effectiveFrom'
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
        //        this.supplierList.getAllData().subscribe(data => {
        //            this.lrDispatchBknRptList = data['data'];
        //            this.dtTriggerSummary.next();
        //            } );
        this.gettingDataFrmServiceFrRateMasterTable = this.rateMaster.getSummaryData();
        this.onDestroyUnsubscribtionRateMaster = this.gettingDataFrmServiceFrRateMasterTable.subscribe(function (data) {
            _this.rateMasterDataList = data['data'];
            _this.dtTriggerRateMaster.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    RateMasterComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerRateMaster.unsubscribe();
        this.onDestroyUnsubscribtionRateMaster.unsubscribe();
        //for datatable ends
    };
    //for the select option with filter starts
    RateMasterComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    RateMasterComponent.prototype.unitMethod = function (selectUnit) {
        if (selectUnit === 'rate') {
            this.unitRate = true;
            this.unitDiscount = false;
        }
        else if (selectUnit === 'discount') {
            this.unitRate = false;
            this.unitDiscount = true;
        }
        else {
            this.unitRate = false;
            this.unitDiscount = false;
        }
    };
    //for datepicker starts
    // the selectToday is the method for  selecting todays'z date
    RateMasterComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], RateMasterComponent.prototype, "dtElements", void 0);
    RateMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-master',
            template: __webpack_require__(/*! ./rate-master.component.html */ "./src/app/master/consignee/rate-master/rate-master.component.html"),
            styles: [__webpack_require__(/*! ./rate-master.component.css */ "./src/app/master/consignee/rate-master/rate-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] /* for datatable endss */])
    ], RateMasterComponent);
    return RateMasterComponent;
}());



/***/ }),

/***/ "./src/app/models/party-model.ts":
/*!***************************************!*\
  !*** ./src/app/models/party-model.ts ***!
  \***************************************/
/*! exports provided: PartyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyModel", function() { return PartyModel; });
var PartyModel = /** @class */ (function () {
    function PartyModel() {
    }
    return PartyModel;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-master-consignee-consignee-module~src-app-stock-transfer-transfer-module.js.map