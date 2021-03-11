(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-cashmemo-transfer-cashmemo-transfer-cashmemo-module"],{

/***/ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2htZW1vL3RyYW5zZmVyLWNhc2htZW1vL2JpbGxpbmctdG8tc3JkLWNvbGxlY3Rpb24tc3RvY2svYmlsbGluZy10by1zcmQtY29sbGVjdGlvbi1zdG9jay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-12\"> -->\n<!-- \t<div class=\"form-group\"> -->\n<!-- \t\t<div class=\"input-group\" id=\"popupDetails\"> -->\n<!-- \t\t\t<ng-template #content let-c=\"close\" let-d=\"dismiss\"> -->\n<!-- \t\t\t<div class=\"modal-header\"> -->\n<!-- \t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Billing To SRD -->\n<!-- \t\t\t\t\tCollection Stock</h6> -->\n<!-- \t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" -->\n<!-- \t\t\t\t\t(click)=\"d('Cross click')\"> -->\n<!-- \t\t\t\t\t<span aria-hidden=\"true\">&times;</span> -->\n<!-- \t\t\t\t</button> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t\t<div class=\"modal-body\"> -->\n<!-- \t\t\t\t<div class=\"row\"> -->\n<!-- \t\t\t\t\t<div class=\"col-md-12\"> -->\n<!-- \t\t\t\t\t\t<form> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Entry Type</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</select> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Station</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Station</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"Chennai\">Chennai</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"Konditope\">Konditope</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"Binnymills\">Binnymills</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</select> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly> <input -->\n<!-- \t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>LR Number :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Memo Amount :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t</form> -->\n<!-- \t\t\t\t\t</div> -->\n<!-- \t\t\t\t</div> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t\t<div class=\"modal-footer\"> -->\n<!-- \t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t(click)=\"c('Save click')\" disabled>Transfer</button> -->\n<!-- \t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t(click)=\"c('Save click')\">Finish</button> -->\n<!-- \t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t(click)=\"c('Save click')\">Cancel</button> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t\t</ng-template> -->\n\n<!-- \t\t\t\t\t\t<a style=\"cursor: pointer; color: blue; font-weight: bolder;\" -->\n<!-- \t\t\t\t\t\t\t(click)=\"open2(content)\">Click Here</a> -->\n<!-- \t\t</div> -->\n<!-- \t</div> -->\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: BillingToSrdCollectionStockComponent, BillingToSrdCollectionStockPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingToSrdCollectionStockComponent", function() { return BillingToSrdCollectionStockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingToSrdCollectionStockPopupComponent", function() { return BillingToSrdCollectionStockPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//for datepicker ends 
//for popup modal starts 

//for popup modal endss 


//for the select option with filter starts

//for the select option with filter ends
//for service starts







var BillingToSrdCollectionStockComponent = /** @class */ (function () {
    function BillingToSrdCollectionStockComponent(modalService, dialog, router) {
        var _this = this;
        this.modalService = modalService;
        this.dialog = dialog;
        this.router = router;
        this.isLoggedIn = true;
        {
            if (sessionStorage.length == 0) {
                this.isLoggedIn = false;
                //          sweet alert starts
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
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
    }
    //for popup modal starts 
    BillingToSrdCollectionStockComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    BillingToSrdCollectionStockComponent.prototype.getDismissReason = function (reason) {
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
    BillingToSrdCollectionStockComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(BillingToSrdCollectionStockPopupComponent, {
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //            console.log( 'The dialog was closed' );
            _this.animal = result;
        });
    };
    BillingToSrdCollectionStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        //        this.modalService.open( this.content );
        setTimeout(function () {
            _this.openDialog();
        }, 0);
    };
    BillingToSrdCollectionStockComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], BillingToSrdCollectionStockComponent.prototype, "content", void 0);
    BillingToSrdCollectionStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-to-srd-collection-stock',
            template: __webpack_require__(/*! ./billing-to-srd-collection-stock.component.html */ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.html"),
            styles: [__webpack_require__(/*! ./billing-to-srd-collection-stock.component.css */ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], BillingToSrdCollectionStockComponent);
    return BillingToSrdCollectionStockComponent;
}());

var BillingToSrdCollectionStockPopupComponent = /** @class */ (function () {
    //    stationOptions = [
    //        { id: 1, label: 'Bangalore' },
    //        { id: 2, label: 'Chennai' },
    //        { id: 3, label: 'Kerela' },
    //    ];
    //for the select option with filter ends
    function BillingToSrdCollectionStockPopupComponent(
    //for modal starts
    dialogRef, data, 
    //for modal ends
    router, memoService, masterReadService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.memoService = memoService;
        this.masterReadService = masterReadService;
        this.manualView = true;
        this.automaticView = false;
        this.isLoggedIn = true;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.getDtlsCashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
        //    checkDtlsCashMemoDto: CashMemoDto = new CashMemoDto();
        this.userDataDtoTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.chkUserDtoTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDataDtoFinishTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.chkUserDataDtoFinishTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.chkuserDataDtoFinishBtnTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.chkUserDtoFinishBtn = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.memoNum = null;
        this.showStation = true;
        this.listOfMemoNumber = [];
        //for the select option with filter starts
        //    @ViewChild( "cashMemoFormat" ) cashMemoFormat: ElementRef;
        this.controlStation = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
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
            this.getDestinationDetails();
            this.showStation = true;
            //            this.getMemoCode();
            this.dataForPopupFromCashmemoPendAndMissOtherDetails = JSON.parse(localStorage.getItem('cashmemoPendingAndMissingForBillingPopup'));
            this.dataForPopupFromCashmemoPendFromBinnyOtherDetails = JSON.parse(localStorage.getItem('cashmemoPendingFromBinnyForBillingPopup'));
            console.log(this.dataForPopupFromCashmemoPendAndMissOtherDetails);
            console.log(this.dataForPopupFromCashmemoPendFromBinnyOtherDetails);
            localStorage.clear();
            if (this.dataForPopupFromCashmemoPendAndMissOtherDetails != null) {
                this.model = this.dataForPopupFromCashmemoPendAndMissOtherDetails;
                this.getBatchNumber = this.dataForPopupFromCashmemoPendAndMissOtherDetails.batchNumber;
                this.getMode = 'transfer';
                this.showStation = false;
                this.getMemoCodeForDashBoard();
            }
            else if (this.dataForPopupFromCashmemoPendFromBinnyOtherDetails != null) {
                this.model = this.dataForPopupFromCashmemoPendFromBinnyOtherDetails;
                this.getBatchNumber = this.dataForPopupFromCashmemoPendFromBinnyOtherDetails.batchNumber;
                this.getMode = 'transferToGodown';
                this.showStation = true;
            }
            else {
                this.model = null;
                this.getBatchNumber = '';
                this.getMode = '';
            }
            this.dataForPopupFromCashmemoPendFromBinnyOtherDetails = '';
            this.dataForPopupFromCashmemoPendFromBinnyOtherDetails = '';
        }
    }
    BillingToSrdCollectionStockPopupComponent.prototype.ngOnInit = function () {
    };
    BillingToSrdCollectionStockPopupComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    //for modal starts
    BillingToSrdCollectionStockPopupComponent.prototype.onTransferClick = function () {
        this.dialogRef.close();
    };
    BillingToSrdCollectionStockPopupComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    //for modal ends
    BillingToSrdCollectionStockPopupComponent.prototype.entryTypeMode = function (entryType) {
        if (entryType === 'manual') {
            this.manualView = true;
            this.automaticView = false;
        }
        else if (entryType === 'automatic') {
            this.manualView = false;
            this.automaticView = true;
        }
        else {
            this.manualView = false;
            this.automaticView = false;
        }
    };
    //    getMainStationDataFroMthd() {
    //        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
    //        this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
    //    }
    //
    //    getMainStationGodownsMethod = () => {
    //        this.getMainStationDataFroMthd();
    //        this.memoService.getMainStationService( this.lrDto ).subscribe(
    //            ( response ) => {
    //                if ( response ) {
    //                    this.stationOptions = response;
    //                    //                    console.log( this.truckInvoiceRptDataList[0] );
    //                    //                this.dtTriggerTruckInvoiceRpt.next();
    //
    //                }
    //                //                else {
    //                //                    swal( {
    //                //                        title: "Warning",
    //                //                        text: "No records found for the selected city!",
    //                //                        icon: "warning",
    //                //                        closeOnClickOutside: false,
    //                //                        closeOnEsc: false,
    //                //                    } );
    //
    //                //                }
    //            } ), ( error ) => swal( {
    //                title: "Server Error",
    //                text: "While Getting Station",
    //                icon: "warning",
    //                closeOnClickOutside: false,
    //                closeOnEsc: false,
    //            } ),
    //            () => console.log( 'done' );
    //    };
    BillingToSrdCollectionStockPopupComponent.prototype.getDestinationMethod = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDto.mode = "ALL";
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDto).subscribe(function (response) {
            if (response) {
                _this.stationOptions = response;
                //                    this.stationList = this.stationOptions;
                //                    this.stationList.destination;
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Station Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    BillingToSrdCollectionStockPopupComponent.prototype.getDetailsForMemoCode = function (data) {
        //        this.userDataDto.office = '';
        //        console.log( "The station>> " + this.selectedStation );
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.office = data.destination;
        //        console.log( "Dto>> " + this.userDataDto.office );
        //        this.userDataDto.office = "Chennai";
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getMemoCode = function (dataForMemoCode) {
        var _this = this;
        this.getDetailsForMemoCode(dataForMemoCode);
        this.masterReadService.getStationCodeService(this.userDataDto).subscribe(function (response) {
            if (response.length != 0) {
                _this.selectedEntryType = $("#entryType").val();
                //                    this.cashMemoFormat = $( "#cashMemoFormat" ).val();
                if (_this.selectedEntryType == "automatic") {
                    _this.automaticView = true;
                    $("#cashMemoNumber").focus();
                }
                else {
                    _this.stationCodeDetails = response;
                    if (_this.stationCodeDetails.stationCode == null) {
                        $("#cashMemoFormat").val('');
                        //                            console.log( this.stationCodeDetails.stationCode );
                    }
                    else {
                        //                            console.log( this.stationCodeDetails.stationCode );
                        _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                        //                            console.log( "Memo>>> " + this.memoFormat );
                        //                        this.cashMemoFormat = this.memoFormat;
                        $("#cashMemoFormat").val(_this.memoFormat);
                        $("#memoNumber").val('');
                        $("#cashMemoNumber").val('');
                        $("#lrNumber").val('');
                        $("#memoAmount").val('');
                        $("#memoNumber").focus();
                    }
                }
            }
            //                else {
            //                                    swal( {
            //                                        title: "Warning",
            //                                        text: "No records found for the selected city!",
            //                                        icon: "warning",
            //                                        closeOnClickOutside: false,
            //                                        closeOnEsc: false,
            //                                    } );
            //                }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Station",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    BillingToSrdCollectionStockPopupComponent.prototype.getDetailsForMemoCodeForDashBoard = function () {
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.office = this.userDataDtoReturnSession.office;
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getMemoCodeForDashBoard = function () {
        var _this = this;
        this.getDetailsForMemoCodeForDashBoard();
        this.masterReadService.getStationCodeService(this.userDataDto).subscribe(function (response) {
            if (response.length != 0) {
                _this.selectedEntryType = $("#entryType").val();
                //                    this.cashMemoFormat = $( "#cashMemoFormat" ).val();
                if (_this.selectedEntryType == "automatic") {
                    _this.automaticView = true;
                    $("#cashMemoNumber").focus();
                }
                else {
                    _this.stationCodeDetails = response;
                    if (_this.stationCodeDetails.stationCode == null) {
                        $("#cashMemoFormat").val('');
                        //                            console.log( this.stationCodeDetails.stationCode );
                    }
                    else {
                        //                            console.log( this.stationCodeDetails.stationCode );
                        _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                        $("#cashMemoFormat").val(_this.memoFormat);
                        $("#memoNumber").val('');
                        $("#cashMemoNumber").val('');
                        $("#lrNumber").val('');
                        $("#memoAmount").val('');
                        $("#memoNumber").focus();
                    }
                }
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Station",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    BillingToSrdCollectionStockPopupComponent.prototype.getFocusMethod = function () {
        this.selectedEntryType = $("#entryType").val();
        if (this.selectedEntryType == "automatic") {
            window.setTimeout(function () {
                $("#cashMemoNumber").val('');
                $("#cashMemoNumber").focus();
                $("#lrNumber").val('');
                $("#memoAmount").val('');
            }, 1000);
        }
        else {
            window.setTimeout(function () {
                $("#memoNumber").val('');
                $("#memoNumber").focus();
                $("#lrNumber").val('');
                $("#memoAmount").val('');
            }, 1000);
        }
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getMemoNumber = function (e) {
        if (e.keyCode == 13) { // press A
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //                
            //                this.enteredCashMemoNumber = $( "#cashMemoNumber" ).val();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //                this.enteredMemoNumber = $( "#memoNumber" ).val();
            //                this.enteredCashMemoFormat = $( "#cashMemoFormat" ).val();
            //            }
            this.getMemoDetails();
        }
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getMethodForMemoDtails = function () {
        this.getDtlsCashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
        this.selectedEntryType = $("#entryType").val();
        this.enteredMemoNumber = $("#memoNumber").val();
        this.enteredCashMemoFormat = $("#cashMemoFormat").val();
        this.enteredCashMemoNumber = $("#cashMemoNumber").val();
        this.memoNum = '';
        if (this.selectedEntryType == "automatic") {
            this.memoNum = this.enteredCashMemoNumber;
        }
        else {
            this.memoNum = this.enteredCashMemoFormat + "" + this.enteredMemoNumber;
            if (this.enteredMemoNumber == '') {
                this.memoNum = null;
            }
        }
        this.getDtlsCashMemoDto.companyId = this.userDataDtoReturnSession.companyId;
        this.getDtlsCashMemoDto.memoNumber = this.memoNum;
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getMemoDetails = function () {
        var _this = this;
        this.getMethodForMemoDtails();
        if (this.memoNum == null || this.memoNum == "") {
            //            window.setTimeout( function() {
            //                swal( {
            //                    title: "Warning",
            //                    text: "Memo Number is Mandatory!",
            //                    icon: "warning",
            //                    closeOnClickOutside: false,
            //                    closeOnEsc: false,
            //
            //                } ); 
            //            }, 2000 );
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Memo Number is Mandatory!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.getFocusMethod();
            });
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //
            //            }
        }
        else {
            this.memoService.getMemoDetailService(this.getDtlsCashMemoDto).subscribe(function (response) {
                if (response) {
                    _this.memoDetails = response;
                    //                        this.checkDtlsCashMemoDto = this.memoDetails;
                    if (_this.memoDetails.cashMemoName == null && _this.memoDetails.status == null && _this.memoDetails.grandTotal == null) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetails.cashMemoName == "Cash") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " Amount is collected",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetails.cashMemoName != "Cash") {
                        if (_this.memoDetails.status == 'transfer' || _this.memoDetails.status == 'transferToGodown' || _this.memoDetails.status == 'missing') {
                            $("#memoAmount").val(_this.memoDetails.grandTotal);
                            $("#lrNumber").val(_this.memoDetails.gcNoteNumber);
                            window.setTimeout(function () {
                                $("#transferBtn").focus();
                            }, 100);
                        }
                        else if (_this.memoDetails.status == 'billing') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " is in Billing Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetails.status == 'collection') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " already in Collection Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetails.status == 'completed') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " Collection Closed",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Server Error",
                text: "While Getting Memo Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        }
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getValidateMemoNumber = function (e) {
        if (e.keyCode == 13) { // press Enter
            this.validateMemoOnTransfer();
        }
    };
    BillingToSrdCollectionStockPopupComponent.prototype.validateMemoOnTransfer = function () {
        var _this = this;
        this.getMethodForMemoDtails();
        if (this.memoNum == null) {
            //            window.setTimeout( function() {
            //                swal( {
            //                    title: "Warning",
            //                    text: "Memo Number is Mandatory!",
            //                    icon: "warning",
            //                    closeOnClickOutside: false,
            //                    closeOnEsc: false,
            //
            //                } );
            //            }, 2000 );
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Memo Number is Mandatory!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.getFocusMethod();
            });
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //
            //            }
        }
        else {
            this.memoService.getMemoDetailService(this.getDtlsCashMemoDto).subscribe(function (response) {
                if (response) {
                    _this.memoDetailsTransfer = response;
                    //                        this.checkDtlsCashMemoDto = this.memoDetailsTransfer;
                    if (_this.memoDetailsTransfer.cashMemoName == null && _this.memoDetailsTransfer.status == null && _this.memoDetailsTransfer.grandTotal == null) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetailsTransfer.cashMemoName == "Cash") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " Amount is collected",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetailsTransfer.cashMemoName != "Cash") {
                        if (_this.memoDetailsTransfer.status == 'transfer' || _this.memoDetailsTransfer.status == 'transferToGodown' || _this.memoDetailsTransfer.status == 'missing') {
                            _this.transferMemoMethod();
                        }
                        else if (_this.memoDetailsTransfer.status == 'billing') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " is in Billing Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetailsTransfer.status == 'collection') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " already in Collection Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetailsTransfer.status == 'completed') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " Collection Closed",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Server Error",
                text: "While Getting Memo Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        }
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getMethodForTransferMemoDtails = function () {
        this.selectedEntryType = $("#entryType").val();
        this.enteredMemoNumber = $("#memoNumber").val();
        this.enteredCashMemoFormat = $("#cashMemoFormat").val();
        this.enteredCashMemoNumber = $("#cashMemoNumber").val();
        this.memoNum = '';
        if (this.selectedEntryType == "automatic") {
            this.memoNum = this.enteredCashMemoNumber;
        }
        else {
            this.memoNum = this.enteredCashMemoFormat + "" + this.enteredMemoNumber;
            if (this.enteredMemoNumber == '') {
                this.memoNum = null;
            }
        }
        this.userDataDtoTransferMemo.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDtoTransferMemo.memoNumber = this.memoNum;
        this.userDataDtoTransferMemo.mode = "collection";
        this.userDataDtoTransferMemo.updatedBy = this.userDataDtoReturnSession.userId;
    };
    BillingToSrdCollectionStockPopupComponent.prototype.transferMemoMethod = function () {
        var _this = this;
        this.getMethodForTransferMemoDtails();
        this.memoService.updateMemoDetailService(this.userDataDtoTransferMemo).subscribe(function (response) {
            if (response) {
                _this.updateMemoDetails = response;
                _this.chkUserDtoTransferMemo = _this.updateMemoDetails;
                if (_this.chkUserDtoTransferMemo.result == "exists") {
                    $("#memoAmount").val('');
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "Warning",
                        text: "Transfer To Collection CashMemo " + _this.userDataDtoTransferMemo.memoNumber + " already transferd to collection!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.getFocusMethod();
                    });
                }
                else if (_this.chkUserDtoTransferMemo.result == "notexists") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "Warning",
                        text: "Transfer To Collection CashMemo " + _this.userDataDtoTransferMemo.memoNumber + " does not exist!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.getFocusMethod();
                    });
                }
                else {
                    $("#memoNumber").val('');
                    $("#cashMemoNumber").val('');
                    $("#lrNumber").val('');
                    $("#memoAmount").val('');
                    _this.getFocusMethod();
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Updating Memo Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getMethodForFinishBtnTransfer = function () {
        //need to change the code for batchNumber and status
        this.chkuserDataDtoFinishBtnTransferMemo.companyId = this.userDataDtoReturnSession.companyId;
        //this.chkuserDataDtoFinishBtnTransferMemo.status = 'transfer';
        //this.chkuserDataDtoFinishBtnTransferMemo.batchNumber = '100';
        this.chkuserDataDtoFinishBtnTransferMemo.status = this.getMode;
        this.chkuserDataDtoFinishBtnTransferMemo.batchNumber = this.getBatchNumber;
        this.chkuserDataDtoFinishBtnTransferMemo.mainStation = this.userDataDtoReturnSession.mainStation;
    };
    BillingToSrdCollectionStockPopupComponent.prototype.finishBtnTransfer = function () {
        var _this = this;
        //the this.model is null hardcoded it need to redirect from dashboard is pending
        if (this.model != null) {
            this.getMethodForFinishBtnTransfer();
            this.memoService.chkRemCashMemoService(this.chkuserDataDtoFinishBtnTransferMemo).subscribe(function (response) {
                if (response.length > 0) {
                    _this.chkMemoDetails = response;
                    _this.chkUserDtoFinishBtn = _this.chkMemoDetails;
                    //                    this.finishTransfer()
                    console.log(_this.chkUserDtoFinishBtn);
                    _this.finishTransfer(_this.chkUserDtoFinishBtn);
                }
                else {
                    //                        alert( "Inside of else" );
                    _this.dialogRef.close();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Server Error",
                text: "While Updating Memo Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        }
        else {
            this.dialogRef.close();
        }
    };
    BillingToSrdCollectionStockPopupComponent.prototype.getMethodForFinishTransfer = function (dataForMethodFinishTransfer) {
        this.userDataDtoFinishTransferMemo.mode = "missing";
        //        need to integrate from other page are batchnumber from Dashboard List of string to pass having error
        // this.userDataDtoFinishTransferMemo.batchNumber = "100";
        this.userDataDtoFinishTransferMemo.batchNumber = this.getBatchNumber;
        //uncomment the below code and comment the next line after the dashboard redirect
        //        this.userDataDtoFinishTransferMemo.listOfResponse = dataForMethodFinishTransfer;
        this.listOfMemoNumber = [];
        for (var i = 0; i < this.chkMemoDetails.length; i++) {
            this.listOfMemoNumber.push(this.chkMemoDetails[i].memoNumber);
        }
        this.userDataDtoFinishTransferMemo.list = this.listOfMemoNumber;
        this.userDataDtoFinishTransferMemo.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDtoFinishTransferMemo.updatedBy = this.userDataDtoReturnSession.userId;
        console.log(this.userDataDtoFinishTransferMemo);
    };
    BillingToSrdCollectionStockPopupComponent.prototype.finishTransfer = function (dataForFinishTransfer) {
        var _this = this;
        //        alert( "yes finish Transfer" );
        //        below this.chkUserDtoFinishBtn.memoNumber need to show the size 
        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Memos Missing ",
            text: dataForFinishTransfer.length + " CashMemos are not transfered.R U want to mark as Missing?",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (yesBtn) {
            if (yesBtn) {
                _this.getMethodForFinishTransfer(dataForFinishTransfer);
                _this.memoService.updateMemoDetailService(_this.userDataDtoFinishTransferMemo).subscribe(function (response) {
                    if (response) {
                        _this.updateMemoDetails = response;
                        _this.chkUserDataDtoFinishTransferMemo = _this.updateMemoDetails;
                        //For Grid code is not add while we work on grid we will add it
                        //on success need to call other page like dashboard is pending
                        _this.dialogRef.close();
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
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                    title: "Server Error",
                    text: "While Updating Memo Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                    function () { return console.log('done'); };
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default.a.close();
            }
        });
    };
    BillingToSrdCollectionStockPopupComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    BillingToSrdCollectionStockPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-to-srd-collection-stock-popup',
            template: __webpack_require__(/*! ./billing-to-srd-collection-stock.popup.component.html */ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.popup.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_4__["MemoService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"]])
    ], BillingToSrdCollectionStockPopupComponent);
    return BillingToSrdCollectionStockPopupComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.popup.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.popup.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn\">\n\t<h1 class=\"title_custom\" mat-dialog-title>\n\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Billing To SRD\n\t\t\tCollection Stock</h6>\n\t</h1>\n\t<div mat-dialog-content style=\"width: 36vw;\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"showStation\"class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"stations\" placeholder=\"Select Station\" #stations\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteStation\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteStation=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(stationOptions | filterDest: controlStation.value) as resultStation\">\n\t\t\t\t\t\t\t\t\t\t<app-option (click)=\"getMemoCode(option)\"\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultStation\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.destination\"> {{\n\t\t\t\t\t\t\t\t\t\toption.destination }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultStation.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoFormat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#cashMemoFormat aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"memoNumber\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumber($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumber($event)\" #cashMemoNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tcommentted due to error in transfer btn click  and add #transferBtn in btn as a id-->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, transferBtn);getMemoNumber($event)\" -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>LR Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #lrNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"lrNumber\" aria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Amount :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"memoAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getValidateMemoNumber($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div mat-dialog-actions style=\"float: right;\">\n\t\t<!-- \t\t\t(click)=\"onTransferClick()\" -->\n\t\t<button #transferBtn type=\"button\" id=\"transferBtn\"class=\"btn btn-outline-dark\"\n\t\t\t(click)=\"validateMemoOnTransfer()\" id=\"transferBtn\">Transfer</button>\n\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t(click)=\"finishBtnTransfer();\" #finishBtn id=\"finishBtn\">Finish</button>\n\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t(click)=\"onCancelClick()\" #cancelBtn id=\"cancelBtn\">Cancel</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media ( max-width :767px) {\n\t.margin_bt {\n\t\tmargin-top: 10px;\n\t}\n}\n\n@media ( min-width :768px) {\n\t.margin_bt {\n\t\tmargin-top: 170px;\n\t}\n}\n\na:hover {\n\tfont-weight: bolder;\n}\n\n/* table inside btn css starts  */\n\n.btn_custome {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\tmargin-right: 0.333em;\n\tmargin-bottom: 0.333em;\n\t/*   padding: 0.5em 1em; */\n\t/*   border: 1px solid #999; */\n\tborder-radius: 2px;\n\tcursor: pointer;\n\tfont-size: 0.88em;\n\tline-height: 1.6em;\n\tcolor: black;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\t/*   background-color: #e9e9e9; */\n\t/*the below code customize added for export btn in datatable starts*/\n\tpadding: 0px 10px;\n\tbackground-color: orange;\n\tborder: 1px solid black;\n\tborder-radius: 5px;\n\t/*the below code customize added for export btn in datatable endss*/\n\t/*the below background image for export btn in datatable is removed starts*/\n\t/*   Fallback */\n\t/*   background-image: -webkit-linear-gradient(top, white 0%, #e9e9e9 100%); */\n\t/*   Chrome 10+, Saf5.1+, iOS 5+ */\n\t/*   background-image: -moz-linear-gradient(top, white 0%, #e9e9e9 100%); */\n\t/*   FF3.6 */\n\t/*   background-image: -ms-linear-gradient(top, white 0%, #e9e9e9 100%); */\n\t/*   IE10 */\n\t/*   background-image: -o-linear-gradient(top, white 0%, #e9e9e9 100%); */\n\t/*   Opera 11.10+ */\n\t/*   background-image: linear-gradient(to bottom, white 0%, #e9e9e9 100%); */\n\t/*the below background image for export btn in datatable is removed endss*/\n\tfilter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,\n\t\tStartColorStr='white', EndColorStr='#e9e9e9');\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\ttext-decoration: none;\n\toutline: none;\n}\n\n/*  for export btn on hover customize starts */\n\n.btn_custome:hover {\n\tbackground-color: lightblue !important;\n\tcolor: black !important;\n\tbackground-image: none !important;\n\tborder: 1px solid black !important;\n\tborder-radius: 10px;\n}\n\n/*  for export btn on hover customize endss */\n\n/* table inside btn css ends  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vY2FzaG1lbW8tdHJhbnNmZXIvY2FzaG1lbW8tdHJhbnNmZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQjtDQUNEOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUNELGtDQUFrQzs7QUFDbEM7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLDJCQUEyQjtDQUMzQiwrQkFBK0I7Q0FDL0IsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxxRUFBcUU7Q0FDckUsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsbUJBQW1CO0NBQ25CLG9FQUFvRTtDQUNwRSw0RUFBNEU7Q0FDNUUsZ0JBQWdCO0NBQ2hCLCtFQUErRTtDQUMvRSxtQ0FBbUM7Q0FDbkMsNEVBQTRFO0NBQzVFLGFBQWE7Q0FDYiwyRUFBMkU7Q0FDM0UsWUFBWTtDQUNaLDBFQUEwRTtDQUMxRSxvQkFBb0I7Q0FDcEIsNkVBQTZFO0NBQzdFLDJFQUEyRTtDQUMzRTtnREFDK0M7Q0FDL0MsMEJBQTBCO0NBQzFCLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2Q7O0FBQ0QsK0NBQStDOztBQUMvQztDQUNDLHVDQUF1QztDQUN2Qyx3QkFBd0I7Q0FDeEIsa0NBQWtDO0NBQ2xDLG1DQUFtQztDQUNuQyxvQkFBb0I7Q0FDcEI7O0FBQ0QsOENBQThDOztBQUM5QyxnQ0FBZ0MiLCJmaWxlIjoic3JjL2FwcC9jYXNobWVtby90cmFuc2Zlci1jYXNobWVtby9jYXNobWVtby10cmFuc2Zlci9jYXNobWVtby10cmFuc2Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhICggbWF4LXdpZHRoIDo3NjdweCkge1xuXHQubWFyZ2luX2J0IHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHR9XG59XG5cbkBtZWRpYSAoIG1pbi13aWR0aCA6NzY4cHgpIHtcblx0Lm1hcmdpbl9idCB7XG5cdFx0bWFyZ2luLXRvcDogMTcwcHg7XG5cdH1cbn1cblxuYTpob3ZlciB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4vKiB0YWJsZSBpbnNpZGUgYnRuIGNzcyBzdGFydHMgICovXG4uYnRuX2N1c3RvbWUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0bWFyZ2luLXJpZ2h0OiAwLjMzM2VtO1xuXHRtYXJnaW4tYm90dG9tOiAwLjMzM2VtO1xuXHQvKiAgIHBhZGRpbmc6IDAuNWVtIDFlbTsgKi9cblx0LyogICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OyAqL1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAwLjg4ZW07XG5cdGxpbmUtaGVpZ2h0OiAxLjZlbTtcblx0Y29sb3I6IGJsYWNrO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHQvKiAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7ICovXG5cdC8qdGhlIGJlbG93IGNvZGUgY3VzdG9taXplIGFkZGVkIGZvciBleHBvcnQgYnRuIGluIGRhdGF0YWJsZSBzdGFydHMqL1xuXHRwYWRkaW5nOiAwcHggMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHQvKnRoZSBiZWxvdyBjb2RlIGN1c3RvbWl6ZSBhZGRlZCBmb3IgZXhwb3J0IGJ0biBpbiBkYXRhdGFibGUgZW5kc3MqL1xuXHQvKnRoZSBiZWxvdyBiYWNrZ3JvdW5kIGltYWdlIGZvciBleHBvcnQgYnRuIGluIGRhdGF0YWJsZSBpcyByZW1vdmVkIHN0YXJ0cyovXG5cdC8qICAgRmFsbGJhY2sgKi9cblx0LyogICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHdoaXRlIDAlLCAjZTllOWU5IDEwMCUpOyAqL1xuXHQvKiAgIENocm9tZSAxMCssIFNhZjUuMSssIGlPUyA1KyAqL1xuXHQvKiAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgd2hpdGUgMCUsICNlOWU5ZTkgMTAwJSk7ICovXG5cdC8qICAgRkYzLjYgKi9cblx0LyogICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgd2hpdGUgMCUsICNlOWU5ZTkgMTAwJSk7ICovXG5cdC8qICAgSUUxMCAqL1xuXHQvKiAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHdoaXRlIDAlLCAjZTllOWU5IDEwMCUpOyAqL1xuXHQvKiAgIE9wZXJhIDExLjEwKyAqL1xuXHQvKiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlIDAlLCAjZTllOWU5IDEwMCUpOyAqL1xuXHQvKnRoZSBiZWxvdyBiYWNrZ3JvdW5kIGltYWdlIGZvciBleHBvcnQgYnRuIGluIGRhdGF0YWJsZSBpcyByZW1vdmVkIGVuZHNzKi9cblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoR3JhZGllbnRUeXBlPTAsXG5cdFx0U3RhcnRDb2xvclN0cj0nd2hpdGUnLCBFbmRDb2xvclN0cj0nI2U5ZTllOScpO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG59XG4vKiAgZm9yIGV4cG9ydCBidG4gb24gaG92ZXIgY3VzdG9taXplIHN0YXJ0cyAqL1xuLmJ0bl9jdXN0b21lOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4vKiAgZm9yIGV4cG9ydCBidG4gb24gaG92ZXIgY3VzdG9taXplIGVuZHNzICovXG4vKiB0YWJsZSBpbnNpZGUgYnRuIGNzcyBlbmRzICAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Transfer Cash Memo</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\n\t\t\t\t\t<div class=\"col-md-9 p-t-10\" style=\"margin-left: 10px;\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCashmemoTransfer\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCashmemoTransfer\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Cash Memo</th>\n\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Type</th>\n\t\t\t\t\t\t\t\t\t\t<th>Delivery Mode</th>\n\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"editBtnView\">Action</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let cashmemoTransferData of cashmemoTransferDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.consignor }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.amount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.status }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.memoType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ cashmemoTransferData.deliveryType }}</td>\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"editBtnView\"><button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn_custome\" id=\"editBtn\">Edit</button></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-2 margin_bt\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"transferBtn\" (click)=\"transferBtn()\">Transfer</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>\n\n"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CashmemoTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashmemoTransferComponent", function() { return CashmemoTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
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






var CashmemoTransferComponent = /** @class */ (function () {
    function CashmemoTransferComponent(memoService, router) {
        var _this = this;
        this.memoService = memoService;
        this.router = router;
        //    onDestroyUnsubscribtionCashmemoTransfer: Subscription;
        this.loadingIndicator = true;
        this.cashMemoDtoTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
        this.cashDtoReconfigureWhileTransfer = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
        this.cashDtoDetailWhileTransfer = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_5__["CashMemoDto"]();
        this.userDtoUpdateMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__["UserDataDto"]();
        this.dtTriggerCashmemoTransfer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.manualView = true;
        this.scanView = false;
        this.isLoggedIn = true;
        this.stationRights = "cashmemo trf specific station";
        this.editBtnRights = "cashmemo trf show edit btn ";
        this.editBtnView = false;
        this.officeRights = "cashmemo trf specific office";
        this.listOfMemos = [];
        this.rerenderofTaable = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
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
            this.cashmemoTransferDataTable();
            this.getCashMemoUnAssgDetail();
            if (this.editBtnRights == "cashmemo trf show edit btn") {
                this.editBtnView = true;
            }
        }
    }
    CashmemoTransferComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
                _this.rerenderofTaable = true;
                _this.dtTriggerCashmemoTransfer.next();
            });
        });
    };
    CashmemoTransferComponent.prototype.cashmemoTransferDataTable = function () {
        this.dtOptionsCashmemoTransfer = {
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
    };
    CashmemoTransferComponent.prototype.ngOnInit = function () {
        //
        //        this.gettingDataFrmServiceFrCashmemoTransferTable = this.cashmemoTransferScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionCashmemoTransfer = this.gettingDataFrmServiceFrCashmemoTransferTable.subscribe( data => {
        //            this.cashmemoTransferDataList = data['data'];
        //            this.dtTriggerCashmemoTransfer.next();
        //        } );
        //the below code is for the getting data through json ends
    };
    CashmemoTransferComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerCashmemoTransfer.unsubscribe();
        //        this.onDestroyUnsubscribtionCashmemoTransfer.unsubscribe();
    };
    CashmemoTransferComponent.prototype.ngAfterViewInit = function () {
        //        this.dtTriggerCashmemoTransfer.next();
    };
    //  service starts
    CashmemoTransferComponent.prototype.getMethodForCashmemoTableDetailList = function () {
        this.cashMemoDtoTable.companyId = this.userDataDtoReturnSession.companyId;
        // logic changed, will get the billing memos except cash and DD @Dated :
        // 07/12/2017
        //        if ( this.stationRights = "cashmemo trf specific station" ) {
        //            this.cashMemoDtoTable.mode = "transferRevLogic";
        //        } else {
        //            this.cashMemoDtoTable.mode = "transfer";
        //        }
        if (this.userDataDtoReturnSession.mainStation == "Chennai") {
            this.cashMemoDtoTable.mode = "transferRevLogic";
        }
        else {
            this.cashMemoDtoTable.mode = "transfer";
        }
        this.cashMemoDtoTable.destination = this.userDataDtoReturnSession.mainStation;
        this.cashMemoDtoTable.godown = this.userDataDtoReturnSession.office;
        //        console.log( "user login list>> " );
        //        console.log( this.userDataDtoReturnSession );
        console.log(this.cashMemoDtoTable);
    };
    CashmemoTransferComponent.prototype.getCashMemoUnAssgDetail = function () {
        var _this = this;
        //        console.log( this.lrDto.companyId );
        this.getMethodForCashmemoTableDetailList();
        this.memoService.getCashMemoUnAssgDetailService(this.cashMemoDtoTable).subscribe(function (response) {
            if (response) {
                //                                        console.log( response );
                _this.cashmemoTransferDataList = response;
                if (_this.rerenderofTaable == false) {
                    _this.dtTriggerCashmemoTransfer.next();
                }
                //                    console.log( "cashmemoTransferDataList>> " + this.cashmemoTransferDataList[0] );
            }
            //                swal( {
            //                    title: "Server Error",
            //                    text: "While Updating Memo Details",
            //                    icon: "warning",
            //                    showCancelButton: true,
            //                    confirmButtonText: 'Yes',
            //                    cancelButtonText: "No",
            //                    closeOnConfirm: false,
            //                    closeOnCancel: false
            //                },
            //                    function( isConfirm ) {
            //                        if ( isConfirm ) {
            //                            swal( "Deleted!", "Your imaginary file has been deleted!", "success" );
            //                        } else {
            //                            swal( "Cancelled", "Your imaginary file is safe :)", "error" );
            //                        }
            //                    } );
            //                else {
            //                    swal( {
            //                        title: "Warning",
            //                        text: "No records found for the selected city!",
            //                        icon: "warning",
            //                        closeOnClickOutside: false,
            //                        closeOnEsc: false,
            //                    } );
            //                }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Server Error",
            text: "While Getting Nature Of Pack Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    CashmemoTransferComponent.prototype.transferBtn = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Billing To Collection",
            text: "Are you sure you want to Transfer",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (yesBtn) {
            if (yesBtn) {
                _this.gridReconfigureWhileTransfer();
            }
            else {
            }
        });
    };
    CashmemoTransferComponent.prototype.getMethodForgridReconfigureWhileTransfer = function () {
        this.cashDtoReconfigureWhileTransfer.companyId = this.userDataDtoReturnSession.companyId;
        //        if ( this.stationRights = "cashmemo trf specific station" ) {
        //                    this.cashDtoReconfigureWhileTransfer.mode = "transferRevLogic";
        //                } else {
        //                    this.cashDtoReconfigureWhileTransfer.mode = "transfer";
        //                }
        // logic changed, will get the billing memos except cash and DD @Dated :
        // 07/12/2017
        if (this.userDataDtoReturnSession.mainStation == "Chennai") {
            this.cashDtoReconfigureWhileTransfer.mode = "transferRevLogic";
        }
        else {
            this.cashDtoReconfigureWhileTransfer.mode = "transfer";
        }
        this.cashDtoReconfigureWhileTransfer.destination = this.userDataDtoReturnSession.mainStation;
        this.cashDtoReconfigureWhileTransfer.godown = this.userDataDtoReturnSession.office;
    };
    CashmemoTransferComponent.prototype.gridReconfigureWhileTransfer = function () {
        var _this = this;
        //        console.log( this.lrDto.companyId );
        this.getMethodForgridReconfigureWhileTransfer();
        this.memoService.getCashMemoUnAssgDetailService(this.cashDtoReconfigureWhileTransfer).subscribe(function (response) {
            if (response.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "No Records",
                    text: "No Memo Found To Transfer",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                _this.cashmemoDetailWhileTransfer = response;
                //                    this.cashDtoDetailWhileTransfer = this.cashmemoDetailWhileTransfer;
                //                    userDtoUpdateMemo
                //                    this.list = this.cashDtoDetailWhileTransfer.memoNumber;
                //                    console.log( "List>>" + this.list );
                //                    this.userDtoUpdateMemo.list = this.list.memoNumber;
                //                    console.log(this.cashmemoDetailWhileTransfer)
                //                    console.log( this.listOfMemos );
                //                    for ( let i = 0; i < this.cashmemoDetailWhileTransfer.length; i++ ) {
                //                        //                        listOfMemos.add(cashmemoDetailWhileTransfer.get[i].memoNumber);
                //                        this.listOfMemos = this.cashmemoDetailWhileTransfer[i].memoNumber;
                //
                //                    }
                //                    console.log( this.listOfMemos );
                //                    this.userDtoUpdateMemo.list = this.listOfMemos;
                //                    console.log( "the final>> " + this.userDtoUpdateMemo.list );
                _this.userDtoUpdateMemo.listOfResponse = _this.cashmemoDetailWhileTransfer;
                //                    this.userDtoUpdateMemo.listOfResponse = this.listOfMemos;
                //                    console.log( this.userDtoUpdateMemo.listOfResponse );
                _this.userDtoUpdateMemo.office = _this.userDataDtoReturnSession.office;
                //                    if ( this.officeRights = "cashmemo trf specific office" ) {
                //                        this.userDtoUpdateMemo.mode = "transferToGodown";
                //                    } else {
                //                        this.userDtoUpdateMemo.mode = "transfer";
                //                    }
                if (_this.userDataDtoReturnSession.office == "Binnymills") {
                    _this.userDtoUpdateMemo.mode = "transferToGodown";
                }
                else {
                    _this.userDtoUpdateMemo.mode = "transfer";
                }
                _this.userDtoUpdateMemo.companyId = _this.userDataDtoReturnSession.companyId;
                _this.userDtoUpdateMemo.updatedBy = _this.userDataDtoReturnSession.userId;
                //console.log( "Data Sending to Update" );
                // console.log( this.userDtoUpdateMemo );
                _this.updateCashMemo(_this.userDtoUpdateMemo);
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Server Error",
            text: "While Getting Nature Of Pack Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    CashmemoTransferComponent.prototype.updateCashMemo = function (userDtoUpdateMemo) {
        var _this = this;
        this.memoService.updateMemoDetailService(this.userDtoUpdateMemo).subscribe(function (response) {
            //                if ( response ) {
            //                    //                    this.updateMemoDetails = response;
            //                    this.getCashMemoUnAssgDetail();
            //                    
            //                }
            if (response.length == 0) {
                //Pending 
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Server Error",
                    text: "While Updating Memo Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                _this.cashmemoDetailWhileTransferRet = response;
                if (_this.cashmemoDetailWhileTransferRet.result == 'success') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Cashmemo Transfered Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.rerender();
                    _this.getCashMemoUnAssgDetail();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Server Error",
                        text: "While Updating Memo Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Server Error",
            text: "While Updating Memo Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    CashmemoTransferComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CashmemoTransferComponent.prototype, "dtElements", void 0);
    CashmemoTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cashmemo-transfer',
            template: __webpack_require__(/*! ./cashmemo-transfer.component.html */ "./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.html"),
            styles: [__webpack_require__(/*! ./cashmemo-transfer.component.css */ "./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_1__["MemoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CashmemoTransferComponent);
    return CashmemoTransferComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.css":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.customCss {\n\tpadding: 1px 5px;\n}\n\n@media screen and (max-width:992px) {\n\t.btn_bootstrap {\n\t\tpadding-top: 10px;\n\t}\n}\n\n@media screen and (min-width:992px) {\n\t.btn_bootstrap {\n\t\tpadding-top: 0px;\n\t}\n}\n\n::ng-deep ngb-typeahead-window {\n  top:26px;\n    left:25px;\n    width: 60%;\n\tmax-height: 150px;\n    overflow-y: auto;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vY29sbGVjdGlvbi1tYW4tY2FzaG1lbW8tc3RvY2stY2hlY2svY29sbGVjdGlvbi1tYW4tY2FzaG1lbW8tc3RvY2stY2hlY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQjtDQUNEOztBQUVEO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakI7Q0FDRDs7QUFFRDtFQUNFLFNBQVM7SUFDUCxVQUFVO0lBQ1YsV0FBVztDQUNkLGtCQUFrQjtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9jYXNobWVtby90cmFuc2Zlci1jYXNobWVtby9jb2xsZWN0aW9uLW1hbi1jYXNobWVtby1zdG9jay1jaGVjay9jb2xsZWN0aW9uLW1hbi1jYXNobWVtby1zdG9jay1jaGVjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY3VzdG9tQ3NzIHtcblx0cGFkZGluZzogMXB4IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCkge1xuXHQuYnRuX2Jvb3RzdHJhcCB7XG5cdFx0cGFkZGluZy10b3A6IDEwcHg7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xuXHQuYnRuX2Jvb3RzdHJhcCB7XG5cdFx0cGFkZGluZy10b3A6IDBweDtcblx0fVxufVxuXG46Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3cge1xuICB0b3A6MjZweDtcbiAgICBsZWZ0OjI1cHg7XG4gICAgd2lkdGg6IDYwJTtcblx0bWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\" >\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<h6 class=\"card-title text-white\">Collection Man Cashmemo\n\t\t\t\t\t\t\t\tStock Check</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8 btn_bootstrap\" style='text-align: right;'>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\t\tid=\"checkAllBtn\" (click)=\"checkAllBtn(collectionManCashmemoStockCheckPrintPopUpTemplate);\">Checked Memos-All</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\t\tid=\"checkBtn\" (click)=\"checkBtn(collectionManCashmemoStockCheckPrintPopUpTemplate);\"disabled>Checked Memos</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\t\tid=\"unCheckAllBtn\" (click)=\"unCheckAllBtn(collectionManCashmemoStockCheckPrintPopUpTemplate);\">UnChecked Memos-All</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\t\tid=\"unCheckBtn\" (click)=\"unCheckBtn(collectionManCashmemoStockCheckPrintPopUpTemplate);\"disabled>UnChecked Memos</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionMan id=\"collectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"collectionMan\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"collectionManSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCollectionManTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Staion</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #station id=\"station\" name=\"station\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Station\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"stationSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"getMemoCode($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id='codeForManual'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForManual($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id='cashMemoManual'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cashMemoAutomatic\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForAutomatic($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Amount :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"memoAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Lr Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lrNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" style=\"margin-left: 50px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"okBtn\"(click)=\"finishMethod();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled>OK</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"finishBtn\" (click)=\"completeMethod();\">Finish</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clearAllMethod();\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" align=\"right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"lblMemoCount\">{{textMemoCount}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Collection Man Cashmemo Stock Check</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"collectionManCashmemoStockCheckId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCollectionManCashmemoStockCheck\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCollectionManCashmemoStockCheck\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let collectionManCashmemoStockCheckData of collectionManCashmemoStockCheckDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcollectionManCashmemoStockCheckData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ collectionManCashmemoStockCheckData.memoDateStr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcollectionManCashmemoStockCheckData.grandTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ collectionManCashmemoStockCheckData.lrNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ collectionManCashmemoStockCheckData.articles\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ collectionManCashmemoStockCheckData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcollectionManCashmemoStockCheckData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcollectionManCashmemoStockCheckData.collectionMan }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total : {{countOfLr}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotAmt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotArt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t<ng-template #collectionManCashmemoStockCheckPrintPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewCollectionManCashmemoStockCheckPrintPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"popupCollectionManCashmemoStockCheckPrint\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-manual-cashmemo-check-and-collectionman-stock-check-print></app-manual-cashmemo-check-and-collectionman-stock-check-print>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"cancelBtnId\" (click)=\"closeCollectionManCashmemoStockCheckPrintPopUp()\">Cancel\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>\n\n"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: CollectionManCashmemoStockCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionManCashmemoStockCheckComponent", function() { return CollectionManCashmemoStockCheckComponent; });
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
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
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













var CollectionManCashmemoStockCheckComponent = /** @class */ (function () {
    function CollectionManCashmemoStockCheckComponent(memoLessRpt, router, memoReport, masterReadService, modalService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.loadingIndicator = true;
        this.dtTriggerCollectionManCashmemoStockCheck = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.manualView = true;
        this.automaticView = false;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.stationTA = [];
        this.focusStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchCashmemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.collectionManCashmemoStockCheckDataList = [];
        this.newAttribute = {};
        this.textMemoCount = '';
        this.memoCount = 0;
        this.lblMemoCount = false;
        this.stationSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.stationTA
                : _this.stationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterStation = function (x) { return x.destination; };
        ////
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.checkMemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.checkMemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.updateCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.countOfLr = 0;
        this.sumOfTotAmt = 0;
        this.sumOfTotArt = 0;
        ////
        //for collection Man
        this.collectionManAllOption = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.collectionManTA = [];
        this.focusCollectionManTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.collectionManSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCollectionManTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.collectionManTA
                : _this.collectionManTA.filter(function (v) { return v.collectioMan.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterCollectionMan = function (x) { return x.collectioMan; };
        ////
        this.userDtoCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.setStation = [];
        this.viewCollectionManCashmemoStockCheckPrintPopUp = false;
        this.cashmemoDtoForPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.getStationDtails = function () {
            _this.getStationInfo();
            _this.masterReadService.getDestinationForLREntryService(_this.lrDtoForStation).subscribe(function (response) {
                if (response) {
                    _this.stationOptions = response;
                    _this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
                    _this.stationTA = [];
                    //                    console.log(this.stationOptions.length);
                    for (var i = 0; i < _this.stationOptions.length; i++) {
                        _this.stationTA.push(_this.stationOptions[i]);
                    }
                    console.log(_this.stationTA, _this.stationOptions);
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Error While Getting Station Details", "info");
            }, function () { return console.log('done'); };
        };
        this.checkingBeforeInsertInTable = function () {
            _this.memoReport.getManualCashMemoCheckFirst(_this.searchCashmemoNumberForTable).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Alert",
                        text: "No Datas Found For This Information",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.clearMethod();
                    });
                }
                else {
                    _this.checkMemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
                    _this.responseOfCheckMemoNumberForTable = response;
                    _this.checkMemoNumberForTable = _this.responseOfCheckMemoNumberForTable;
                    _this.addInTable();
                    console.log('6');
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.updateMethodDetails = function () {
            _this.memoReport.updateCMMemoStockCheck(_this.updateCashmemoNumberForTable).subscribe(function (response) {
                if (response.status == 'updated') {
                }
                else {
                    console.log('111');
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getCollectionCheckPrintOutDetails = function (collectionManCashmemoStockCheckPrintPopUpTemplate) {
            _this.showSpinnerForAction = true;
            _this.memoReport.getManualCashMemoCheckPrintOut(_this.cashmemoDtoForPrint).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Empty",
                        text: "No records found to print",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.getPrintData = response;
                    _this.collectionManCashmemoStockCheckPrintPopUp = _this.modalService.open(collectionManCashmemoStockCheckPrintPopUpTemplate, { centered: true, size: 'lg', windowClass: "modalClassForPopUpTruckOwner" });
                    _this.collectionManCashmemoStockCheckPrintPopUp.result.then(function (result) {
                        _this.collectionManCashmemoStockCheckPrintClosePopUp = "Closed with: " + result;
                    }, function (reason) {
                        _this.collectionManCashmemoStockCheckPrintClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                    });
                    localStorage.clear();
                    localStorage.setItem('popupCollectionManCashmemoStockCheckDetails', JSON.stringify(_this.cashmemoDtoForPrint));
                    localStorage.setItem('popupCollectionManCashmemoStockCheckPrintDetails', JSON.stringify(_this.getPrintData));
                    _this.viewCollectionManCashmemoStockCheckPrintPopUp = true;
                    window.addEventListener('afterPopUp', function (event) {
                        _this.viewCollectionManCashmemoStockCheckPrintPopUp = false;
                    });
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the details", "info");
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
            this.getStationDtails();
            this.getCollectionManDetailsList();
        }
    }
    CollectionManCashmemoStockCheckComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CollectionManCashmemoStockCheckComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    CollectionManCashmemoStockCheckComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var mainStation = this.userDataDtoReturnSession.mainStation;
        this.dtOptionsCollectionManCashmemoStockCheck = {
            dom: 'Bfrtip',
            buttons: [],
            //place holder in search/filter in datatable starts
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
                var totalAmt = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalArt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html(totalAmt);
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html(totalArt);
                $(api.column(5).footer()).html();
                $(api.column(6).footer()).html();
                $(api.column(7).footer()).html();
            }
        };
    };
    CollectionManCashmemoStockCheckComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerCollectionManCashmemoStockCheck.unsubscribe();
    };
    CollectionManCashmemoStockCheckComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerCollectionManCashmemoStockCheck.next();
    };
    CollectionManCashmemoStockCheckComponent.prototype.entryTypeMode = function (entryType) {
        if (entryType === 'manual') {
            this.manualView = true;
            this.automaticView = false;
        }
        else if (entryType === 'automatic') {
            this.manualView = false;
            this.automaticView = true;
        }
        else {
            this.manualView = false;
            this.automaticView = false;
        }
    };
    CollectionManCashmemoStockCheckComponent.prototype.getDetailsForCollectionMasterRead = function () {
        this.userDtoCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDtoCollectionMan.branchId = this.userDataDtoReturnSession.mainStation;
        this.userDtoCollectionMan.companyId = this.userDataDtoReturnSession.companyId;
        this.userDtoCollectionMan.status = "D";
    };
    CollectionManCashmemoStockCheckComponent.prototype.getCollectionManDetailsList = function () {
        var _this = this;
        this.collectionManDataList = [];
        this.collectionManTA = [];
        this.getDetailsForCollectionMasterRead();
        this.masterReadService.getCollectionManMasterDetails(this.userDtoCollectionMan).subscribe(function (response) {
            if (response.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "No Collection Man Details found !",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                _this.collectionManDataList = [];
                _this.collectionManTA = [];
            }
            else {
                console.log(response);
                _this.collectionManDataList = response;
                console.log(_this.collectionManDataList);
                _this.collectionManTA = [];
                for (var i = 0; i < _this.collectionManDataList.length; i++) {
                    _this.collectionManTA.push(_this.collectionManDataList[i]);
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Collection Man details", "info");
        }, function () { return console.log('done'); };
    };
    ;
    CollectionManCashmemoStockCheckComponent.prototype.getStationInfo = function () {
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.lrDtoForStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForStation.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDtoForStation.mode = "ALL";
    };
    CollectionManCashmemoStockCheckComponent.prototype.getMemoCode = function (e) {
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.modelStation = e.item;
        this.userDtoMemoCode.companyId = this.userDataDtoReturnSession.companyId;
        this.stationForCode = this.modelStation.destination;
        this.userDtoMemoCode.office = this.stationForCode;
        console.log(this.userDtoMemoCode);
        this.getDetailsForMemoCode();
        $("#checkBtn").prop("disabled", false);
        $("#unCheckBtn").prop("disabled", false);
    };
    CollectionManCashmemoStockCheckComponent.prototype.getDetailsForMemoCode = function () {
        var _this = this;
        this.masterReadService.getStationCodeService(this.userDtoMemoCode).subscribe(function (response) {
            if (response.length != 0) {
                _this.stationCodeDetails = response;
                _this.selectedEntryType = $("#entryType").val();
                if (_this.selectedEntryType == "automatic") {
                    _this.manualView = false;
                    _this.automaticView = true;
                    $("#cashMemoAutomatic").focus();
                }
                else {
                    if (_this.stationCodeDetails.stationCode == null) {
                        $("#codeForManual").val('');
                    }
                    else {
                        //Basha Pending
                        _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                        //                                this.memoFormat = 'BNG/1920/';
                        $("#codeForManual").val(_this.memoFormat);
                        $("#cashMemoManual").val('');
                        $("#cashMemoAutomatic").val('');
                        $("#cashMemoManual").focus();
                    }
                }
                _this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Server Error",
            text: "While Getting Station",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    CollectionManCashmemoStockCheckComponent.prototype.getMemoNumberForManual = function (e) {
        if (e.keyCode == 13) {
            this.selectedMemoNumberForManual = $("#cashMemoManual").val();
            this.selectedCollectionMan = $("#collectionMan").val();
            if (this.selectedMemoNumberForManual != null && this.selectedMemoNumberForManual != '') {
                if (this.selectedCollectionMan == null && this.selectedCollectionMan == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Mandatory Fields",
                        text: "Please select Collection Man to proceed",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        sweetalert__WEBPACK_IMPORTED_MODULE_6___default.a.close();
                        window.setTimeout(function () {
                            $("#collectionMan").focus();
                        }, 100);
                        return false;
                    });
                }
                else {
                    this.getManualCashMemoCheckMtd();
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Memo Number Empty",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default.a.close();
                    window.setTimeout(function () {
                        $("#cashMemoManual").focus();
                    }, 100);
                    return false;
                });
            }
        }
    };
    CollectionManCashmemoStockCheckComponent.prototype.getMemoNumberForAutomatic = function (e) {
        /*setTimeout(() => {
            this.showforAutomatic();
        },
            500 );*/
        this.selectedMemoNumberForAutomatic = $("#cashMemoAutomatic").val();
        this.selectedCollectionMan = $("#collectionMan").val();
        console.log(this.selectedCollectionMan);
        if (e.keyCode == 13) {
            if (this.selectedMemoNumberForAutomatic != null && this.selectedMemoNumberForAutomatic != '') {
                if (this.selectedCollectionMan == null && this.selectedCollectionMan == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Mandatory Fields",
                        text: "Please select Collection Man to proceed",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        sweetalert__WEBPACK_IMPORTED_MODULE_6___default.a.close();
                        window.setTimeout(function () {
                            $("#collectionMan").focus();
                        }, 100);
                        return false;
                    });
                }
                else {
                    this.getManualCashMemoCheckMtd();
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Memo Number Empty",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default.a.close();
                    window.setTimeout(function () {
                        $("#cashMemoAutomatic").focus();
                    }, 100);
                    return false;
                });
            }
        }
    };
    /*  showforAutomatic() {
            this.selectedMemoNumberForAutomatic = $( "#cashMemoAutomatic" ).val();
             this.selectedCollectionMan = $( "#collectionMan" ).val();
             console.log( this.selectedCollectionMan);
            if ( this.selectedMemoNumberForAutomatic != null && this.selectedMemoNumberForAutomatic != '' ) {
             
                if ( this.selectedCollectionMan == null && this.selectedCollectionMan == '' ) {
                swal({
                    title: "Mandatory Fields",
                    text: "Please select Collection Man to proceed",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(() => {
                    swal.close();
                window.setTimeout(function () {
                   $( "#collectionMan" ).focus();
                }, 100);
                 return false;
                });
                }else{
                this.getManualCashMemoCheckMtd();
                }
            }else{
                swal({
                        title: "Warning",
                        text: "Memo Number Empty",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(() => {
                        swal.close();
                         window.setTimeout(function () {
                             $( "#cashMemoAutomatic" ).focus();
                        }, 100);
                     return false;
                    });
            }
        }*/
    CollectionManCashmemoStockCheckComponent.prototype.getManualCashMemoCheckMtd = function () {
        this.memoNum = '';
        this.selectedEntryType = $("#entryType").val();
        this.selectedCodeForManual = $("#codeForManual").val();
        this.selectedMemoNumberForManual = $("#cashMemoManual").val();
        this.selectedMemoNumberForAutomatic = $("#cashMemoAutomatic").val();
        if (this.selectedEntryType == 'automatic') {
            this.memoNum = this.selectedMemoNumberForAutomatic;
        }
        else {
            this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
        }
        this.searchCashmemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchCashmemoNumber.memoNumber = this.memoNum;
        this.getManualCashMemoCheckMtdDetails();
        this.showSpinnerForAction = true;
    };
    CollectionManCashmemoStockCheckComponent.prototype.getManualCashMemoCheckMtdDetails = function () {
        var _this = this;
        this.memoReport.getManualCashMemoCheckFirst(this.searchCashmemoNumber).subscribe(function (response) {
            console.log(response);
            _this.showSpinnerForAction = false;
            $("#okBtn").prop("disabled", true);
            if (response.length > 0) {
                _this.showSpinnerForAction = false;
                _this.checkMemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
                _this.responseOfCheckMemoNumber = response;
                _this.checkMemoNumber = _this.responseOfCheckMemoNumber;
                console.log(_this.checkMemoNumber);
                console.log(_this.checkMemoNumber[0].lrNumber);
                if (_this.checkMemoNumber[0].lrNumber != null && _this.checkMemoNumber[0].lrNumber != '') {
                    if (((_this.checkMemoNumber[0].status == null) && (_this.checkMemoNumber[0].column1 == null) && (_this.checkMemoNumber[0].memoCheck == null)) || (_this.checkMemoNumber[0].memoCheck == null)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                            title: "Empty",
                            text: "Cashmemo number not found",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else {
                        _this.showStatus = '';
                        if ((_this.checkMemoNumber[0].memoCheck != null) && (_this.checkMemoNumber[0].memoCheck == false)) {
                            if (_this.checkMemoNumber[0].collectionMan != _this.selectedCollectionMan) {
                                _this.showStatus = ' This memo is in ' + _this.checkMemoNumber[0].collectionMan + " stock, system can't allow to check in different collection man, please verify once!";
                                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                                    title: "Status",
                                    text: " " + _this.showStatus,
                                    icon: "warning",
                                    closeOnClickOutside: false,
                                    closeOnEsc: false,
                                }).then(function () {
                                    _this.clearMethod();
                                });
                            }
                            else if ((_this.checkMemoNumber[0].status == 'cmstock') && (_this.checkMemoNumber[0].column1 == 'Pending')) {
                                // insert into grid @Dated :
                                // 29/08/2018
                                _this.gridReconfigure();
                                $("#memoAmount").val(_this.checkMemoNumber[0].grandTotal);
                                $("#lrNumber").val(_this.checkMemoNumber[0].lrNumber);
                                /*$( "#okBtn" ).prop( "disabled", false );
                                $( "#okBtn" ).focus();
                                this.clearMethod1();*/
                                _this.selectedEntryType = $("#entryType").val();
                                /*if ( this.selectedEntryType == 'automatic' ) {
                                       if((this.checkMemoNumber[0].cmstockMemoCheck != null) && (this.checkMemoNumber[0].cmstockMemoCheck == false)){
                                            this.lblMemoCount=true;
                                            this.memoCount= +this.memoCount + +1;
                                            this.textMemoCount=" No. of cashmemos: "+this.memoCount;
                                       }
                                    this.updateMethod(this.memoNum);
                                    
                                            this.lblMemoCount=true;
                                            this.memoCount= +this.memoCount + +1;
                                            this.textMemoCount=" No. of cashmemos: "+this.memoCount;
                                       
                                            
                                            this.clearMethod();
       
                            } */
                            }
                            else {
                                _this.showStatus = '';
                                if (_this.checkMemoNumber[0].status == 'billing') {
                                    _this.showStatus = ' Cash Memo is in Billing Stock';
                                }
                                else if (_this.checkMemoNumber[0].status == 'transfer') {
                                    _this.showStatus = ' Cash Memo not in SRD Collection Stock';
                                }
                                else if ((_this.checkMemoNumber[0].status == 'collection') && (_this.checkMemoNumber[0].column1 == 'completed')) {
                                    _this.showStatus = ' Collection Closed';
                                }
                                else if ((_this.checkMemoNumber[0].status == 'collection') && (_this.checkMemoNumber[0].column1 == 'Pending')) {
                                    _this.showStatus = ' Cash Memo is in Collection Stock';
                                }
                                else if ((_this.checkMemoNumber[0].status == 'cmstock') && (_this.checkMemoNumber[0].column1 == 'Assigned')) {
                                    _this.showStatus = ' Cash Memo assigned for Collection';
                                }
                                else if (_this.checkMemoNumber[0].status == 'to party') {
                                    _this.showStatus = ' Cash Memo Left To-Party';
                                }
                                else if (_this.checkMemoNumber[0].status == 'completed') {
                                    _this.showStatus = ' Collection Closed';
                                }
                                else if (_this.checkMemoNumber[0].status == 'transferToGodown') {
                                    _this.showStatus = ' Cash Memo not in SRD Collection Stock';
                                }
                                else if (_this.checkMemoNumber[0].status == 'missing') {
                                    _this.showStatus = ' Cash Memo is Missing';
                                }
                                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                                    title: "Status",
                                    text: " " + _this.showStatus,
                                    icon: "warning",
                                    closeOnClickOutside: false,
                                    closeOnEsc: false,
                                }).then(function () {
                                    _this.clearMethod();
                                });
                            }
                        }
                        else if ((_this.checkMemoNumber[0].memoCheck != null) && (_this.checkMemoNumber[0].memoCheck == true)) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                                title: "Status",
                                text: "Cash Memo Number Already Checked",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.clearMethod();
                            });
                        }
                    }
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "Cash memo number does not exist",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.clearMethod();
                    });
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Cash memo number does not exist",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.clearMethod();
                });
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While Getting Memo Number Details", "info");
        }, function () { return console.log('done'); };
    };
    ;
    CollectionManCashmemoStockCheckComponent.prototype.clearMethod = function () {
        this.selectedEntryType = $("#entryType").val();
        $("#memoAmount").val('');
        $("#lrNumber").val('');
        if (this.selectedEntryType == 'automatic') {
            $("#cashMemoAutomatic").val('');
            //$( "#cashMemoAutomatic" ).focus();
            window.setTimeout(function () {
                $("#cashMemoAutomatic").focus();
            }, 100);
        }
        else {
            $("#cashMemoManual").val('');
            window.setTimeout(function () {
                $("#cashMemoManual").focus();
            }, 100);
            return false;
        }
    };
    CollectionManCashmemoStockCheckComponent.prototype.gridReconfigure = function () {
        var _this = this;
        this.selectedEntryType = $("#entryType").val();
        if (this.collectionManCashmemoStockCheckDataList.length > 0) {
            var checkMemoNumberInTable = this.collectionManCashmemoStockCheckDataList.find(function (collectionManCashmemoStockCheckData) { return collectionManCashmemoStockCheckData.memoNumber === _this.memoNum; });
            console.log(checkMemoNumberInTable);
            if (checkMemoNumberInTable == undefined) {
                this.checkingBeforeInsertInTableDetails();
                if (this.selectedEntryType == 'automatic') {
                    this.updateMethod(this.memoNum);
                    this.lblMemoCount = true;
                    this.memoCount = +this.memoCount + +1;
                    this.textMemoCount = " No. of cashmemos: " + this.memoCount;
                    this.clearMethod();
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Duplicate Memo Number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default.a.close();
                    _this.clearMethod();
                    return false;
                });
            }
        }
        else {
            console.log('5');
            this.checkingBeforeInsertInTableDetails();
            if (this.selectedEntryType == 'automatic') {
                this.updateMethod(this.memoNum);
                this.lblMemoCount = true;
                this.memoCount = +this.memoCount + +1;
                this.textMemoCount = " No. of cashmemos: " + this.memoCount;
                this.clearMethod();
            }
        }
    };
    CollectionManCashmemoStockCheckComponent.prototype.checkingBeforeInsertInTableDetails = function () {
        this.searchCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchCashmemoNumberForTable.memoNumber = this.memoNum;
        this.checkingBeforeInsertInTable();
    };
    CollectionManCashmemoStockCheckComponent.prototype.addInTable = function () {
        console.log('8');
        this.newAttribute.memoNumber = this.checkMemoNumberForTable[0].memoNumber;
        this.newAttribute.memoDateStr = this.checkMemoNumberForTable[0].memoDateStr;
        this.newAttribute.grandTotal = this.checkMemoNumberForTable[0].grandTotal;
        this.newAttribute.lrNumber = this.checkMemoNumberForTable[0].lrNumber;
        this.newAttribute.articles = this.checkMemoNumberForTable[0].articles;
        this.newAttribute.area = this.checkMemoNumberForTable[0].area;
        this.newAttribute.consigneeName = this.checkMemoNumberForTable[0].consigneeName;
        this.newAttribute.collectionMan = this.checkMemoNumberForTable[0].collectionMan;
        $("#collectionManCashmemoStockCheckId").DataTable().destroy();
        if (this.collectionManCashmemoStockCheckDataList == null) {
            this.collectionManCashmemoStockCheckDataList = [];
        }
        if (this.collectionManCashmemoStockCheckDataList.length == 0) {
            this.collectionManCashmemoStockCheckDataList.push(this.newAttribute);
        }
        else {
            this.collectionManCashmemoStockCheckDataList.push(this.newAttribute);
        }
        this.dtTriggerCollectionManCashmemoStockCheck.next();
        // console.log( this.collectionManCashmemoStockCheckDataList );
        this.countOfLr = +this.countOfLr + 1;
        this.sumOfTotAmt = +this.sumOfTotAmt + +this.newAttribute.grandTotal;
        this.sumOfTotArt = +this.sumOfTotArt + +this.newAttribute.articles;
        this.newAttribute = {};
        $("#okBtn").prop("disabled", false);
        $("#okBtn").focus();
        this.clearMethod1();
    };
    CollectionManCashmemoStockCheckComponent.prototype.clearMethod1 = function () {
        this.selectedEntryType = $("#entryType").val();
        if (this.selectedEntryType == 'automatic') {
            $("#cashMemoAutomatic").val('');
            $("#cashMemoAutomatic").focus();
        }
        else {
            console.log('81');
            $("#okBtn").prop("disabled", false);
            $("#okBtn").focus();
        }
    };
    CollectionManCashmemoStockCheckComponent.prototype.finishMethod = function () {
        this.memoNum = '';
        this.selectedEntryType = $("#entryType").val();
        this.selectedCodeForManual = $("#codeForManual").val();
        this.selectedMemoNumberForManual = $("#cashMemoManual").val();
        this.selectedMemoNumberForAutomatic = $("#cashMemoAutomatic").val();
        if (this.selectedEntryType == 'automatic') {
            this.memoNum = this.selectedMemoNumberForAutomatic;
        }
        else {
            this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
        }
        this.updateMethod(this.memoNum);
        this.lblMemoCount = true;
        this.memoCount = +this.memoCount + +1;
        this.textMemoCount = " No. of cashmemos: " + this.memoCount;
        this.clearMethod();
    };
    CollectionManCashmemoStockCheckComponent.prototype.updateMethod = function (memoNum) {
        this.updateCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.updateCashmemoNumberForTable.memoNumber = memoNum;
        this.updateCashmemoNumberForTable.enteredBy = this.userDataDtoReturnSession.userId;
        this.updateCashmemoNumberForTable.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.updateCashmemoNumberForTable);
        this.updateMethodDetails();
    };
    CollectionManCashmemoStockCheckComponent.prototype.clearAllMethod = function () {
        this.showSpinnerForAction = false;
        this.memoFormat = '',
            this.selectedMemoNumberForManual = '';
        this.selectedMemoNumberForAutomatic = '';
        this.memoNum = '';
        this.textMemoCount = '';
        this.memoCount = 0;
        this.lblMemoCount = false;
        this.stationForCode = '';
        this.selectedCodeForManual = '';
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.stationCodeDetails = '';
        this.checkMemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.checkMemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.responseOfCheckMemoNumber = '';
        this.responseOfCheckMemoNumberForTable = '';
        this.showStatus = '';
        this.searchCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.updateCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.countOfLr = 0;
        this.sumOfTotAmt = 0;
        this.sumOfTotArt = 0;
        $("#collectionManCashmemoStockCheckId").DataTable().destroy();
        this.collectionManCashmemoStockCheckDataList = [];
        this.dtTriggerCollectionManCashmemoStockCheck.next();
        this.modelStation = '';
        this.selectedCollectionMan = '';
        this.getPrintData = '';
        this.setStation = [];
        this.cashmemoDtoForPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        localStorage.clear();
        this.viewCollectionManCashmemoStockCheckPrintPopUp = false;
    };
    CollectionManCashmemoStockCheckComponent.prototype.completeMethod = function () {
        this.textMemoCount = '';
        this.memoCount = 0;
        this.lblMemoCount = false;
        this.showStatus = '';
        this.searchCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.updateCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.countOfLr = 0;
        this.sumOfTotAmt = 0;
        this.sumOfTotArt = 0;
        $("#collectionManCashmemoStockCheckId").DataTable().destroy();
        this.collectionManCashmemoStockCheckDataList = [];
        this.dtTriggerCollectionManCashmemoStockCheck.next();
        this.modelStation = '';
        $("#okBtn").prop("disabled", true);
    };
    CollectionManCashmemoStockCheckComponent.prototype.checkBtn = function (collectionManCashmemoStockCheckPrintPopUpTemplate) {
        this.getCollectionCheckPrintOut("NotAll", true, collectionManCashmemoStockCheckPrintPopUpTemplate);
    };
    CollectionManCashmemoStockCheckComponent.prototype.checkAllBtn = function (collectionManCashmemoStockCheckPrintPopUpTemplate) {
        this.getCollectionCheckPrintOut("All", true, collectionManCashmemoStockCheckPrintPopUpTemplate);
    };
    CollectionManCashmemoStockCheckComponent.prototype.unCheckBtn = function (collectionManCashmemoStockCheckPrintPopUpTemplate) {
        this.getCollectionCheckPrintOut("NotAll", false, collectionManCashmemoStockCheckPrintPopUpTemplate);
    };
    CollectionManCashmemoStockCheckComponent.prototype.unCheckAllBtn = function (collectionManCashmemoStockCheckPrintPopUpTemplate) {
        this.getCollectionCheckPrintOut("All", false, collectionManCashmemoStockCheckPrintPopUpTemplate);
    };
    CollectionManCashmemoStockCheckComponent.prototype.getCollectionCheckPrintOut = function (mode, memoChk, collectionManCashmemoStockCheckPrintPopUpTemplate) {
        this.selectionStation = $("#station").val();
        this.selectedCollectionMan = $("#collectionMan").val();
        this.setStation = [];
        for (var i = 0; i < this.stationOptions.length; i++) {
            this.setStation.push(this.stationOptions[i].destination);
        }
        console.log(this.setStation);
        this.cashmemoDtoForPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.cashmemoDtoForPrint.mode = mode;
        this.cashmemoDtoForPrint.destination = this.selectionStation;
        this.cashmemoDtoForPrint.status = "cmstock";
        this.cashmemoDtoForPrint.column1 = "pending";
        this.cashmemoDtoForPrint.memoCheck = memoChk;
        this.cashmemoDtoForPrint.list = this.setStation;
        this.cashmemoDtoForPrint.collectionMan = this.selectedCollectionMan;
        this.cashmemoDtoForPrint.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.cashmemoDtoForPrint);
        this.getCollectionCheckPrintOutDetails(collectionManCashmemoStockCheckPrintPopUpTemplate);
    };
    CollectionManCashmemoStockCheckComponent.prototype.closeCollectionManCashmemoStockCheckPrintPopUp = function () {
        this.collectionManCashmemoStockCheckPrintPopUp.close();
    };
    CollectionManCashmemoStockCheckComponent.prototype.getDismissReason = function (reason) {
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
    ], CollectionManCashmemoStockCheckComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('collectionManCashmemoStockCheckPrintPopUpTemplate'),
        __metadata("design:type", Object)
    ], CollectionManCashmemoStockCheckComponent.prototype, "collectionManCashmemoStockCheckPrintPopUpTemplate", void 0);
    CollectionManCashmemoStockCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection-man-cashmemo-stock-check',
            template: __webpack_require__(/*! ./collection-man-cashmemo-stock-check.component.html */ "./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.html"),
            styles: [__webpack_require__(/*! ./collection-man-cashmemo-stock-check.component.css */ "./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_14__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], CollectionManCashmemoStockCheckComponent);
    return CollectionManCashmemoStockCheckComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer-popup.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer-popup.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn\" id=\"srdCollectionToCollectionManStockId\">\n\t<h1 class=\"title_custom\" mat-dialog-title>\n\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">SRD Collection To\n\t\t\tCollection Man Stock</h6>\n\t</h1>\n\t<div class=\"row\">\n\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h6 class=\"card-title\" align='center' style=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div mat-dialog-content style=\"width: 36vw;\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\" id=\"collectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionMan\" #collectionMan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCollectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteCollectionMan=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManDataList | filterCollectioMan: controlCollectionMan.value) as resultCollectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{\n\t\t\t\t\t\t\t\t\t\toption.collectioMan }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultCollectionMan.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\" name=\"entryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#entryType (change)=\"entryTypeMode(entryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Station\" id=\"selectedStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlStation\" #selectedStation\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteStation\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteStation=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(stationOptions | filterDest: controlStation.value) as resultStation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getMemoCode(option)\" [value]=\"option.destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ option.destination }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultStation.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoFormat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#cashMemoFormat aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"memoNumber\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumber($event)\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumber($event)\" #cashMemoNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tcommentted due to error in transfer btn click  and add #transferBtn in btn as a id-->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, transferBtn);getMemoNumber($event)\" -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>LR Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #lrNumber id=\"lrNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Amount :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"memoAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getValidateMemoNumber($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div mat-dialog-actions>\n\t\t<!-- \t\t\t(click)=\"onTransferClick()\" -->\n\t\t<!-- \t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n\t\t<!-- \t\t\t(keyup)=\"fieldFocus($event, memoNumber);getValidateMemoNumber($event)\" -->\n\t\t<!-- \t\t\t#transferBtn id=\"transferBtn\">Transfer</button> -->\n\t\t<!-- \t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n\t\t<!-- \t\t\t(click)=\"finishBtnTransfer();\" #finishBtn -->\n\t\t<!-- \t\t\tid=\"finishBtn\">Finish</button> -->\n\t\t<!-- \t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n\t\t<!-- \t\t\t(click)=\"onCancelClick()\" #cancelBtn id=\"cancelBtn\">Cancel</button> -->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" id=\"btnPrint\" (click)=\"btnPrint()\">BatchWise\n\t\t\t\t\tPrint</button>\n\t\t\t\t<button *ngIf=\"btnTransferAllView\" type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"btnTranserferAll()\">Transfer\n\t\t\t\t\tAll</button>\n\t\t\t\t<button #transferBtn type=\"button\" class=\"btn btn-outline-dark\" id=\"transferBtn\"\n\t\t\t\t\t(click)=\"validateMemoOnTransfer()\">Transfer</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"btnFinish()\">Finish</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onCloseClick()\">Close</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\" style=\"padding-top: 10px; text-align: center;\">\n\t\t\t\t<h6 style='color: green;'>Transferred Memos :\n\t\t\t\t\t{{lRCountsValues}}</h6>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n<div *ngIf=\"viewCollectionManStockPrint\" onafterprint=\"afterPrint()\" id=\"printCollectionManStockPrintId\">\n\t<app-collectionman-stocks-print></app-collectionman-stocks-print>\n</div>"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-overlay-pane {\n\tmax-width: 40vw !important;\n}\n\n@media print {\n\tbody, html * {\n\t\tvisibility: hidden;\n\t}\n\t#srdCollectionToCollectionManStockId, #srdCollectionToCollectionManStockId * {\n\t\tvisibility: hidden;\n\t}\n\t#printCollectionManStockPrintId {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n/*\t#printChallanRpt {\n\t\tposition: static;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin-left: 10px !important;\n\t\tmargin-top: -1380px !important;\n\t\tfont-family: serif;\n\t}*/\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vY29sbGVjdGlvbi1tYW4tc3RvY2stdHJhbnNmZXIvY29sbGVjdGlvbi1tYW4tc3RvY2stdHJhbnNmZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDJCQUEyQjtDQUMzQjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsT0FBTztFQUNQO0FBQ0Y7Ozs7Ozs7SUFPSTs7Q0FFSCIsImZpbGUiOiJzcmMvYXBwL2Nhc2htZW1vL3RyYW5zZmVyLWNhc2htZW1vL2NvbGxlY3Rpb24tbWFuLXN0b2NrLXRyYW5zZmVyL2NvbGxlY3Rpb24tbWFuLXN0b2NrLXRyYW5zZmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2RrLW92ZXJsYXktcGFuZSB7XG5cdG1heC13aWR0aDogNDB2dyAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuXHRib2R5LCBodG1sICoge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjc3JkQ29sbGVjdGlvblRvQ29sbGVjdGlvbk1hblN0b2NrSWQsICNzcmRDb2xsZWN0aW9uVG9Db2xsZWN0aW9uTWFuU3RvY2tJZCAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3ByaW50Q29sbGVjdGlvbk1hblN0b2NrUHJpbnRJZCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiAwO1xuXHR9XG4vKlx0I3ByaW50Q2hhbGxhblJwdCB7XG5cdFx0cG9zaXRpb246IHN0YXRpYztcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi10b3A6IC0xMzgwcHggIWltcG9ydGFudDtcblx0XHRmb250LWZhbWlseTogc2VyaWY7XG5cdH0qL1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-12 \" *ngIf=\"isLoggedIn\"> -->\n<!-- \t<div class=\"form-group\"> -->\n<!-- \t\t<div class=\"input-group\" id=\"popupDetails\"> -->\n<!-- \t\t\t<ng-template #content let-c=\"close\" let-d=\"dismiss\"> -->\n<!-- \t\t\t<div class=\"modal-header\"> -->\n<!-- \t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">SRD Collection -->\n<!-- \t\t\t\t\tTo Collection Man Stock</h6> -->\n<!-- \t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" -->\n<!-- \t\t\t\t\t(click)=\"d('Cross click')\"> -->\n<!-- \t\t\t\t\t<span aria-hidden=\"true\">&times;</span> -->\n<!-- \t\t\t\t</button> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t\t<div class=\"modal-body \"> -->\n<!-- \t\t\t\t<div class=\"row\"> -->\n<!-- \t\t\t\t\t<div class=\"col-md-12\"> -->\n<!-- \t\t\t\t\t\t<form> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"control\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Collection Man</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\" id=\"collectionMan\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionMan\" #collectionMan -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCollectionMan\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n\n<!-- \t\t\t\t\t\t\t\t<app-autocomplete #autocompleteCollectionMan=\"appAutocomplete\"> -->\n<!-- \t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManDataList | filterCollectioMan: controlCollectionMan.value) as resultCollectionMan\"> -->\n<!-- \t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCollectionMan\" -->\n<!-- \t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{ -->\n<!-- \t\t\t\t\t\t\t\toption.collectioMan }} </app-option> <app-option class=\"no-result\" -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"!resultCollectionMan.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Entry Type</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</select> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"control\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Station</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Station\" id=\"station\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlStation\" #station -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteStation\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n\n<!-- \t\t\t\t\t\t\t\t<app-autocomplete #autocompleteStation=\"appAutocomplete\"> -->\n<!-- \t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"(stationOptions | filterDest: controlStation.value) as resultStation\"> -->\n<!-- \t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultStation\" -->\n<!-- \t\t\t\t\t\t\t\t\t(click)=\"getMemoCode()\" [value]=\"option.destination\"> -->\n<!-- \t\t\t\t\t\t\t\t{{ option.destination }} </app-option> <app-option class=\"no-result\" -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"!resultStation.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoFormat\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t#cashMemoFormat aria-describedby=\"basic-addon11\" readonly> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input id=\"memoNumber\" type=\"text\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, lrNumber);getMemoNumber($event)\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoNumber\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, lrNumber);getMemoNumber($event)\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t#cashMemoNumber aria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>LR Number :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #lrNumber -->\n<!-- \t\t\t\t\t\t\t\t\t\t\tid=\"lrNumber\" aria-describedby=\"basic-addon11\" readonly> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Memo Amount :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"memoAmount\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, transferBtn);getValidateMemoNumber($event)\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t</form> -->\n<!-- \t\t\t\t\t</div> -->\n<!-- \t\t\t\t</div> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t\t<div class=\"modal-footer\" style='border-bottom: 1px solid #e9ecef;'> -->\n<!-- \t\t\t\t<div class=\"row\"> -->\n<!-- \t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t\t(click)=\"c('Save click')\">BatchWise Print</button> -->\n<!-- \t\t\t\t\t<button *ngIf=\"btnTransferAllView\" type=\"button\" -->\n<!-- \t\t\t\t\t\tclass=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t\t(click)=\"c('Save click');btnTranserferAll()\">Transfer All</button> -->\n<!-- \t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t\t(click)=\"c('Save click');getValidateMemoNumber($event)\" disabled>Transfer</button> -->\n<!-- \t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t\t(click)=\"c('Save click')\">Finish</button> -->\n<!-- \t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t\t(click)=\"c('Save click')\">Close</button> -->\n<!-- \t\t\t\t</div> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t\t<div class=\"modal-footer\" -->\n<!-- \t\t\t\tstyle='align-self: center; border-top: none;'> -->\n<!-- \t\t\t\t<div class=\"row\"> -->\n<!-- \t\t\t\t\t<h6 style='color: green;'>Transferred Memos : 0</h6> -->\n<!-- \t\t\t\t</div> -->\n<!-- \t\t\t</div> -->\n\n<!-- \t\t\t</ng-template> -->\n\n<!-- \t\t\t<a style=\"cursor: pointer; color: blue; font-weight: bolder;\" -->\n<!-- \t\t\t\t(click)=\"open2(content)\">Click Here</a> -->\n<!-- \t\t</div> -->\n<!-- \t</div> -->\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CollectionManStockTransferComponent, CollectionManStockTransferPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionManStockTransferComponent", function() { return CollectionManStockTransferComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionManStockTransferPopupComponent", function() { return CollectionManStockTransferPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//for datepicker ends 
//for popup modal starts 

//for popup modal endss 


//for the select option with filter starts

//for the select option with filter ends
//for service starts







var CollectionManStockTransferComponent = /** @class */ (function () {
    function CollectionManStockTransferComponent(modalService, dialog, router) {
        var _this = this;
        this.modalService = modalService;
        this.dialog = dialog;
        this.router = router;
        this.isLoggedIn = true;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
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
    //for popup modal starts 
    //    open2( content ) {
    //        this.modalService.open( content, { centered: true } ).result.then(
    //            result => {
    //                this.closeResult = `Closed with: ${result}`;
    //            },
    //            reason => {
    //                this.closeResult = `Dismissed ${this.getDismissReason( reason )}`;
    //            }
    //        );
    //    }
    //    private getDismissReason( reason: any ): string {
    //        if ( reason === ModalDismissReasons.ESC ) {
    //            return 'by pressing ESC';
    //        } else if ( reason === ModalDismissReasons.BACKDROP_CLICK ) {
    //            return 'by clicking on a backdrop';
    //        } else {
    //            return `with: ${reason}`;
    //        }
    //    }
    //for popup modal ends 
    CollectionManStockTransferComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(CollectionManStockTransferPopupComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            //            console.log( 'The dialog was closed' );
            //            this.animal = result;
        });
    };
    CollectionManStockTransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        //        this.modalService.open( this.content );
        setTimeout(function () {
            _this.openDialog();
        }, 0);
    };
    CollectionManStockTransferComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CollectionManStockTransferComponent.prototype, "content", void 0);
    CollectionManStockTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection-man-stock-transfer',
            template: __webpack_require__(/*! ./collection-man-stock-transfer.component.html */ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.html"),
            styles: [__webpack_require__(/*! ./collection-man-stock-transfer.component.css */ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CollectionManStockTransferComponent);
    return CollectionManStockTransferComponent;
}());

var CollectionManStockTransferPopupComponent = /** @class */ (function () {
    //cashMemoDtos: CashMemoDto[];
    function CollectionManStockTransferPopupComponent(
    //for modal starts
    dialogRef, data, 
    //for modal ends
    router, memoService, masterReadService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.memoService = memoService;
        this.masterReadService = masterReadService;
        this.manualView = true;
        this.automaticView = false;
        this.isLoggedIn = true;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.getDtlsCashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
        //    checkDtlsCashMemoDto: CashMemoDto = new CashMemoDto();
        this.userDataDtoTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.chkUserDtoTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDtoCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDtoTransferAll = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.memoNum = null;
        this.btnTransferAllView = false;
        this.lRCounts = 0;
        this.lRCountsValues = 0;
        this.cashDtoSrdToColManRpt = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
        //for the select option with filter starts
        this.controlCollectionMan = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.controlStation = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        //    collectionManOptions = [
        //        { id: 1, label: 'All' },
        //        { id: 2, label: 'Aamer' },
        //        { id: 3, label: 'Afzal' },
        //        { id: 3, label: 'Arif' }
        //    ];
        //for the select option with filter ends
        this.viewCollectionManStockPrint = false;
        this.showSpinnerForAction = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
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
            this.getDestinationDetails();
            //            this.getMemoCode();
            this.getCollectionManDetailsList();
            //            console.log( this.userDataDtoReturnSession.collectionFlow );
            if (this.userDataDtoReturnSession.collectionFlow == false) {
                this.btnTransferAllView = true;
            }
        }
    }
    //for popup modal starts 
    //    open2( content ) {
    //        this.modalService.open( content, { centered: true } ).result.then(
    //            result => {
    //                this.closeResult = `Closed with: ${result}`;
    //            },
    //            reason => {
    //                this.closeResult = `Dismissed ${this.getDismissReason( reason )}`;
    //            }
    //        );
    //    }
    //    private getDismissReason( reason: any ): string {
    //        if ( reason === ModalDismissReasons.ESC ) {
    //            return 'by pressing ESC';
    //        } else if ( reason === ModalDismissReasons.BACKDROP_CLICK ) {
    //            return 'by clicking on a backdrop';
    //        } else {
    //            return `with: ${reason}`;
    //        }
    //    }
    //for popup modal ends 
    CollectionManStockTransferPopupComponent.prototype.entryTypeMode = function (entryType) {
        if (entryType === 'manual') {
            this.manualView = true;
            this.automaticView = false;
        }
        else if (entryType === 'automatic') {
            this.manualView = false;
            this.automaticView = true;
        }
        else {
            this.manualView = false;
            this.automaticView = false;
        }
    };
    CollectionManStockTransferPopupComponent.prototype.ngOnInit = function () {
    };
    CollectionManStockTransferPopupComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    //    getMainStationDataFroMthd() {
    //        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
    //        this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
    //    }
    //
    //    getMainStationGodownsMethod() {
    //        this.getMainStationDataFroMthd();
    //        this.memoService.getMainStationService( this.lrDto ).subscribe(
    //            ( response ) => {
    //                if ( response ) {
    //                    this.stationOptions = response;
    //                    //                    console.log( this.truckInvoiceRptDataList[0] );
    //                    //                this.dtTriggerTruckInvoiceRpt.next();
    //
    //                }
    //                //                else {
    //                //                    swal( {
    //                //                        title: "Warning",
    //                //                        text: "No records found for the selected city!",
    //                //                        icon: "warning",
    //                //                        closeOnClickOutside: false,
    //                //                        closeOnEsc: false,
    //                //                    } );
    //
    //                //                }
    //            } ), ( error ) => swal( {
    //                title: "Server Error",
    //                text: "While Getting Station",
    //                icon: "warning",
    //                closeOnClickOutside: false,
    //                closeOnEsc: false,
    //            } ),
    //            () => console.log( 'done' );
    //    };
    CollectionManStockTransferPopupComponent.prototype.getDestinationMethod = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDto.mode = "ALL";
    };
    CollectionManStockTransferPopupComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDto).subscribe(function (response) {
            if (response) {
                _this.stationOptions = response;
                _this.stationList = _this.stationOptions;
                //                    this.stationList.destination;
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Station Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    CollectionManStockTransferPopupComponent.prototype.getDetailsForMemoCode = function (data) {
        //        console.log( "The station>> " + data.destination );
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.office = data.destination;
        //        console.log( "Dto>> " + this.userDataDto.office );
        //        this.userDataDto.office = "Chennai";
    };
    CollectionManStockTransferPopupComponent.prototype.getMemoCode = function (dataForMemoCode) {
        var _this = this;
        this.getDetailsForMemoCode(dataForMemoCode);
        this.masterReadService.getStationCodeService(this.userDataDto).subscribe(function (response) {
            if (response.length != 0) {
                _this.selectedEntryType = $("#entryType").val();
                //                    this.cashMemoFormat = $( "#cashMemoFormat" ).val();
                if (_this.selectedEntryType == "automatic") {
                    _this.automaticView = true;
                    $("#cashMemoNumber").focus();
                }
                else {
                    _this.stationCodeDetails = response;
                    if (_this.stationCodeDetails.stationCode == null) {
                        $("#cashMemoFormat").val('');
                        //                            console.log( this.stationCodeDetails.stationCode );
                    }
                    else {
                        //                            console.log( this.stationCodeDetails.stationCode );
                        _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                        //                            console.log( "Memo>>> " + this.memoFormat );
                        //                        this.cashMemoFormat = this.memoFormat;
                        $("#cashMemoFormat").val(_this.memoFormat);
                        $("#memoNumber").val('');
                        $("#cashMemoNumber").val('');
                        $("#lrNumber").val('');
                        $("#memoAmount").val('');
                        $("#memoNumber").focus();
                    }
                }
            }
            //                else {
            //                                    swal( {
            //                                        title: "Warning",
            //                                        text: "No records found for the selected city!",
            //                                        icon: "warning",
            //                                        closeOnClickOutside: false,
            //                                        closeOnEsc: false,
            //                                    } );
            //                }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Station",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    CollectionManStockTransferPopupComponent.prototype.getFocusMethod = function () {
        this.selectedEntryType = $("#entryType").val();
        if (this.selectedEntryType == "automatic") {
            window.setTimeout(function () {
                $("#cashMemoNumber").val('');
                $("#cashMemoNumber").focus();
                $("#lrNumber").val('');
                $("#memoAmount").val('');
            }, 1000);
        }
        else {
            window.setTimeout(function () {
                $("#memoNumber").val('');
                $("#memoNumber").focus();
                $("#lrNumber").val('');
                $("#memoAmount").val('');
            }, 1000);
        }
    };
    CollectionManStockTransferPopupComponent.prototype.getMemoNumber = function (e) {
        if (e.keyCode == 13) { // press A
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //                
            //                this.enteredCashMemoNumber = $( "#cashMemoNumber" ).val();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //                this.enteredMemoNumber = $( "#memoNumber" ).val();
            //                this.enteredCashMemoFormat = $( "#cashMemoFormat" ).val();
            //            }
            this.getMemoDetails();
        }
    };
    CollectionManStockTransferPopupComponent.prototype.getMethodForMemoDtails = function () {
        this.selectedEntryType = $("#entryType").val();
        this.enteredMemoNumber = $("#memoNumber").val();
        this.enteredCashMemoFormat = $("#cashMemoFormat").val();
        this.enteredCashMemoNumber = $("#cashMemoNumber").val();
        this.selectedCollectionMan = $("#collectionMan").val();
        //        console.log( this.selectedCollectionMan );
        this.memoNum = '';
        if (this.selectedEntryType == "automatic") {
            this.memoNum = this.enteredCashMemoNumber;
        }
        else {
            this.memoNum = this.enteredCashMemoFormat + "" + this.enteredMemoNumber;
            if (this.enteredMemoNumber == '') {
                this.memoNum = null;
            }
        }
        this.getDtlsCashMemoDto.companyId = this.userDataDtoReturnSession.companyId;
        this.getDtlsCashMemoDto.memoNumber = this.memoNum;
    };
    CollectionManStockTransferPopupComponent.prototype.getMemoDetails = function () {
        var _this = this;
        this.selectedCollectionMan = $("#collectionMan").val();
        this.getMethodForMemoDtails();
        if (this.memoNum == null || this.memoNum == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Memo Number is Mandatory!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.getFocusMethod();
            });
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //
            //            }
        }
        else if (this.selectedCollectionMan == '' || this.selectedCollectionMan == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Mandatory Fields Please select Collection Man to proceed",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.memoService.getMemoDetailService(this.getDtlsCashMemoDto).subscribe(function (response) {
                if (response) {
                    _this.memoDetails = response;
                    //                        this.checkDtlsCashMemoDto = this.memoDetails;
                    if (_this.memoDetails.cashMemoName == null && _this.memoDetails.status == null && _this.memoDetails.grandTotal == null) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetails.cashMemoName == "Cash") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " Amount is collected",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetails.cashMemoName != "Cash") {
                        if (_this.memoDetails.status == "transfer" || _this.memoDetails.status == "transfertogodown" || _this.memoDetails.status == "missing") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " not in SRD Collection Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetails.status == "billing") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " is in Billing Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetails.status == "cmstock") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " already in Collection Man Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetails.status == "collection" && _this.memoDetails.column1 == "Pending") {
                            $("#memoAmount").val(_this.memoDetails.grandTotal);
                            $("#lrNumber").val(_this.memoDetails.gcNoteNumber);
                            window.setTimeout(function () {
                                $("#transferBtn").focus();
                            }, 100);
                            //                                $( "#memoAmount" ).focus();
                        }
                        else if (_this.memoDetails.status == "completed") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "" + _this.getDtlsCashMemoDto.memoNumber + " Collection Closed",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Server Error",
                text: "While Getting Memo Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        }
    };
    CollectionManStockTransferPopupComponent.prototype.getValidateMemoNumber = function (e) {
        if (e.keyCode == 13) { // press Enter
            this.validateMemoOnTransfer();
        }
    };
    CollectionManStockTransferPopupComponent.prototype.validateMemoOnTransfer = function () {
        var _this = this;
        this.getMethodForMemoDtails();
        this.selectedLrnumber = $("#lrNumber").val();
        if (this.memoNum == null || this.memoNum == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Memo Number is Mandatory!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.getFocusMethod();
            });
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //
            //            }
        }
        else if (this.selectedLrnumber == '' || this.selectedLrnumber == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Lr Number is Mandatory!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (this.selectedCollectionMan == '' || this.selectedCollectionMan == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Mandatory Fields Please select Collection Man to proceed",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.memoService.getMemoDetailService(this.getDtlsCashMemoDto).subscribe(function (response) {
                if (response) {
                    _this.memoDetailsTransfer = response;
                    //                        this.checkDtlsCashMemoDto = this.memoDetails;
                    if (_this.memoDetailsTransfer.cashMemoName == null && _this.memoDetailsTransfer.status == null && _this.memoDetailsTransfer.grandTotal == null) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetailsTransfer.cashMemoName == "Cash") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " Amount is collected",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetailsTransfer.cashMemoName != "Cash") {
                        if (_this.memoDetailsTransfer.status == "transfer" || _this.memoDetailsTransfer.status == "transfertogodown" || _this.memoDetailsTransfer.status == "missing") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " not in SRD Collection Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetailsTransfer.status == "billing") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " is in Billing Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetailsTransfer.status == "cmstock") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " already in Collection Man Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetailsTransfer.status == "collection" && _this.memoDetailsTransfer.column1 == "Pending") {
                            _this.transferMemoMethod(_this.memoDetailsTransfer);
                        }
                        else if (_this.memoDetailsTransfer.status == "completed") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "" + _this.getDtlsCashMemoDto.memoNumber + " Collection Closed",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Server Error",
                text: "While Getting Memo Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        }
    };
    CollectionManStockTransferPopupComponent.prototype.getMethodForTransferMemoDtails = function () {
        this.selectedEntryType = $("#entryType").val();
        this.enteredMemoNumber = $("#memoNumber").val();
        this.enteredCashMemoFormat = $("#cashMemoFormat").val();
        this.enteredCashMemoNumber = $("#cashMemoNumber").val();
        this.selectedCollectionMan = $("#collectionMan").val();
        this.userDataDtoTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.memoNum = '';
        if (this.selectedEntryType == "automatic") {
            this.memoNum = this.enteredCashMemoNumber;
        }
        else {
            this.memoNum = this.enteredCashMemoFormat + "" + this.enteredMemoNumber;
            if (this.enteredMemoNumber == '') {
                this.memoNum = null;
            }
        }
        this.userDataDtoTransferMemo.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDtoTransferMemo.memoNumber = this.memoNum;
        this.userDataDtoTransferMemo.mode = "cmstock";
        this.userDataDtoTransferMemo.collectioMan = this.selectedCollectionMan;
        this.userDataDtoTransferMemo.updatedBy = this.userDataDtoReturnSession.userId;
    };
    CollectionManStockTransferPopupComponent.prototype.transferMemoMethod = function (dataForTransferMemoMethod) {
        var _this = this;
        this.getMethodForTransferMemoDtails();
        this.memoService.updateMemoDetailService(this.userDataDtoTransferMemo).subscribe(function (response) {
            if (response) {
                _this.updateMemoDetails = response;
                _this.chkUserDtoTransferMemo = _this.updateMemoDetails;
                if (_this.chkUserDtoTransferMemo.result == "exists") {
                    $("#memoAmount").val('');
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "Alert",
                        text: "Transfer To Collection Man Stock CashMemo " + _this.userDataDtoTransferMemo.memoNumber + " already transferred to collection man stock!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.getFocusMethod();
                    });
                }
                else if (_this.chkUserDtoTransferMemo.result == "notexists") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "Warning",
                        text: "Transfer To Collection Man Stock - CashMemo " + _this.userDataDtoTransferMemo.memoNumber + " does not exist!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.getFocusMethod();
                    });
                }
                else {
                    $("#memoNumber").val('');
                    $("#cashMemoNumber").val('');
                    $("#lrNumber").val('');
                    $("#memoAmount").val('');
                    _this.getFocusMethod();
                    _this.lRCounts = +_this.lRCounts + +1;
                    _this.lRCountsValues = ("" + _this.lRCounts);
                    // this.collectionManObject = this.selectedCollectionMan;
                    //.getRawValue());
                    //  cashMemoDtos.add(cashMemoDto);
                    dataForTransferMemoMethod.collectionMan = _this.selectedCollectionMan;
                    // need to create a obj to pass it to Print like this cashMemoDtos.add(cashMemoDto); in line no 568 in old ws CollectionManStock.java 
                    console.log(_this.cashMemoDtosPrint);
                    if (_this.cashMemoDtosPrint == null || _this.cashMemoDtosPrint == undefined ||
                        _this.cashMemoDtosPrint.length == 0) {
                        _this.cashMemoDtosPrint = [];
                        _this.cashMemoDtosPrint.push(dataForTransferMemoMethod);
                    }
                    else {
                        _this.cashMemoDtosPrint.push(dataForTransferMemoMethod);
                    }
                    console.log(dataForTransferMemoMethod);
                    console.log(_this.cashMemoDtosPrint);
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Updating Memo Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    CollectionManStockTransferPopupComponent.prototype.getDetailsForCollectionMasterRead = function () {
        this.userDtoCollectionMan.branchId = this.userDataDtoReturnSession.mainStation;
        this.userDtoCollectionMan.companyId = this.userDataDtoReturnSession.companyId;
        this.userDtoCollectionMan.status = "D";
    };
    CollectionManStockTransferPopupComponent.prototype.getCollectionManDetailsList = function () {
        var _this = this;
        this.getDetailsForCollectionMasterRead();
        this.masterReadService.getCollectionManMasterDetails(this.userDtoCollectionMan).subscribe(function (response) {
            if (response) {
                //                    console.log( response );
                _this.collectionManDataList = response;
                //                    this.dtTriggerCollectionMan.next();
                //                    console.log( this.collectionManDataList[0] );
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Collection Man Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    CollectionManStockTransferPopupComponent.prototype.btnTranserferAll = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Confirm Transfer All",
            text: "Sure you want to transfer all Memos from SRD Collection Stock to the stock of collection Man 'SRD STOCK'?",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (yesBtn) {
            if (yesBtn) {
                _this.transferAllMemoMethod();
                _this.lRCounts = 0;
                _this.lRCountsValues = ("" + 0);
                //cashMemoDtos.clear();
                _this.cashMemoDtosPrint = [];
            }
        });
    };
    CollectionManStockTransferPopupComponent.prototype.getMethodForTransferAllMemoDtails = function () {
        this.userDtoTransferAll.updatedBy = this.userDataDtoReturnSession.userId;
        this.userDtoTransferAll.branchId = this.userDataDtoReturnSession.mainStation;
        this.userDtoTransferAll.companyId = this.userDataDtoReturnSession.companyId;
        this.userDtoTransferAll.memoStatus = "cmstock";
        this.userDtoTransferAll.collectioMan = "SRD STOCK";
        this.userDtoTransferAll.status = "collection";
        this.userDtoTransferAll.column1 = "Pending";
    };
    CollectionManStockTransferPopupComponent.prototype.transferAllMemoMethod = function () {
        var _this = this;
        this.getMethodForTransferAllMemoDtails();
        this.memoService.updateMemoAllService(this.userDtoTransferAll).subscribe(function (response) {
            if (response) {
                _this.updateMemoDetails = response;
                //                    this.chkUserDtoTransferMemo.result="";
                console.log(_this.updateMemoDetails.result);
                if (_this.updateMemoDetails.result == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "All trannsfer",
                        text: "Transfer To 'SRD STOCK' Collection Man Stock completed!",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.getFocusMethod();
                    });
                }
                else if (_this.updateMemoDetails.result == "failed") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "All trannsfer",
                        text: "Transfer To 'SRD STOCK' Collection Man Stock failed",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.getFocusMethod();
                    });
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Updating Memo Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    CollectionManStockTransferPopupComponent.prototype.onCloseClick = function () {
        this.dialogRef.close();
        this.lRCounts = 0;
        this.lRCountsValues = ("" + 0);
        //cashMemoDtos.clear();
        this.cashMemoDtosPrint = [];
    };
    CollectionManStockTransferPopupComponent.prototype.btnPrint = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Print A Copy",
            text: "Sure you to Print the Batch wise copy of this Collection Man ",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (yesBtn) {
            if (yesBtn) {
                _this.getSRDToColManRpt();
            }
            else {
            }
        });
    };
    CollectionManStockTransferPopupComponent.prototype.methodForGetSRDToColManRpt = function () {
        this.cashDtoSrdToColManRpt = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
        this.selectedCollectionMan = $("#collectionMan").val();
        this.cashDtoSrdToColManRpt.destination = this.userDataDtoReturnSession.mainStation;
        this.cashDtoSrdToColManRpt.collectionMan = this.selectedCollectionMan;
        this.cashDtoSrdToColManRpt.companyId = this.userDataDtoReturnSession.companyId;
    };
    CollectionManStockTransferPopupComponent.prototype.getSRDToColManRpt = function () {
        var _this = this;
        this.selectedCollectionMan = $("#collectionMan").val();
        this.methodForGetSRDToColManRpt();
        if (this.selectedCollectionMan == '' || this.selectedCollectionMan == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "No Collection Man",
                text: "Please Select the Collection Man ",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.showSpinnerForAction = true;
            this.memoService.getSRDToColManRptForPrintService(this.cashDtoSrdToColManRpt).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "No Record",
                        text: "No Records found  for the Selected Collection Man",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    // this.memoDetailsForPrint = [];
                    _this.memoDetailsForPrint = response;
                    //  console.log(this.memoDetailsForPrint);
                    // the print need to come here CollectionManStockPrint
                    localStorage.clear();
                    console.log(_this.memoDetailsForPrint);
                    localStorage.setItem('collectionManStockPrint', JSON.stringify(_this.memoDetailsForPrint));
                    _this.viewCollectionManStockPrint = true;
                    window.addEventListener('afterprint', function (onclick) {
                        if (_this.viewCollectionManStockPrint) {
                            _this.viewCollectionManStockPrint = false;
                        }
                    });
                }
                _this.showSpinnerForAction = false;
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                    title: "Server Error",
                    text: "Server problem occurred while getting the details!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                _this.showSpinnerForAction = false;
            },
                function () { return console.log('done'); };
        }
    };
    CollectionManStockTransferPopupComponent.prototype.btnFinish = function () {
        var _this = this;
        if (this.lRCounts == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Empty Transaction",
                text: "No memo transferred, sure you want to finish!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (yesBtn) {
                if (yesBtn) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default.a.close();
                    _this.lRCounts = 0;
                    _this.lRCountsValues = ("" + 0);
                    //cashMemoDtos.clear();
                    _this.cashMemoDtosPrint = [];
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Finish Transaction",
                text: "Sure you want to finish this transaction!",
                icon: "info",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (yesBtn) {
                if (yesBtn) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "Print A Copy",
                        text: "Want to print A copy of this transaction",
                        icon: "info",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        buttons: ["No", "Yes"],
                    }).then(function (yesBtn) {
                        if (yesBtn) {
                            // the print need to come here
                            localStorage.clear();
                            console.log(_this.cashMemoDtosPrint);
                            localStorage.setItem('collectionManStockPrint', JSON.stringify(_this.cashMemoDtosPrint));
                            _this.viewCollectionManStockPrint = true;
                            window.addEventListener('afterprint', function (onclick) {
                                if (_this.viewCollectionManStockPrint) {
                                    _this.viewCollectionManStockPrint = false;
                                }
                            });
                            //CollectionManStockPrint
                            _this.lRCounts = 0;
                            _this.lRCountsValues = ("" + 0);
                            // cashMemoDtos.clear();
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default.a.close();
                        }
                        else {
                            _this.lRCounts = 0;
                            _this.lRCountsValues = ("" + 0);
                            //cashMemoDtos.clear();
                            _this.cashMemoDtosPrint = [];
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default.a.close();
                        }
                    });
                }
            });
        }
    };
    CollectionManStockTransferPopupComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CollectionManStockTransferPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection-man-stock-transfer-popup',
            template: __webpack_require__(/*! ./collection-man-stock-transfer-popup.component.html */ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer-popup.component.html"),
            styles: [__webpack_require__(/*! ./collection-man-stock-transfer.component.css */ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_4__["MemoService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"]])
    ], CollectionManStockTransferPopupComponent);
    return CollectionManStockTransferPopupComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer-popup.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer-popup.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn\">\n\t<h1 class=\"title_custom\" mat-dialog-title>\n\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Collection Man To\n\t\t\tCollection Man Stock Transfer</h6>\n\t</h1>\n\t<div mat-dialog-content style=\"width: 36vw;\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man From :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" id=\"collectionManFrom\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#collectionManFrom placeholder=\"Select Collection Man\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionManFrom\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCollectionManFrom\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteCollectionManFrom=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManFromOptions | filterCollectioMan: controlCollectionManFrom.value) as resultCollectionManFrom\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCollectionManFrom\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{\n\t\t\t\t\t\t\t\t\toption.collectioMan }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultCollectionManFrom.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man To :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" id=\"collectionManTo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#collectionManTo placeholder=\"Select Collection Man\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionManTo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCollectionManTo\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteCollectionManTo=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManToOptions | filterCollectioMan: controlCollectionManTo.value) as resultCollectionManTo\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCollectionManTo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{\n\t\t\t\t\t\t\t\t\toption.collectioMan }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultCollectionManTo.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\" name=\"entryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t#entryType (change)=\"entryTypeMode(entryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Godown</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Godown\" id=\"godown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlGodown\" #godown\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteGodown\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteGodown=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(godownOptions | filterDest: controlGodown.value) as resultGodown\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getMemoCode(option)\" [value]=\"option.destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ option.destination }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultGodown.length\">No result\n\t\t\t\t\t\t\t\t\t\t\t\t</app-option>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoFormat\" #cashMemoFormat\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"memoNumber\" #memoNumber type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumber($event)\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tcommentted due to error in transfer btn click  and add #transferBtn in btn as a id-->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, transferBtn);getMemoNumber($event)\" -->\n\t\t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumber($event)\" #cashMemoNumber\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>LR Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #lrNumber id=\"lrNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Memo Amount :</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"memoAmount\" #memoAmount\n\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getValidateMemoNumber($event)\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\treadonly>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div mat-dialog-actions style=\"float: right;\">\n\t\t<!-- \t\t\t(click)=\"onTransferClick()\" -->\n\t\t<!-- \t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n\t\t<!-- \t\t\t(keyup)=\"fieldFocus($event, memoNumber);getValidateMemoNumber($event)\" -->\n\t\t<!-- \t\t\t#transferBtn id=\"transferBtn\">Transfer</button> -->\n\t\t<!-- \t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n\t\t<!-- \t\t\t(click)=\"finishBtnTransfer();\" #finishBtn -->\n\t\t<!-- \t\t\tid=\"finishBtn\">Finish</button> -->\n\t\t<!-- \t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n\t\t<!-- \t\t\t(click)=\"onCancelClick()\" #cancelBtn id=\"cancelBtn\">Cancel</button> -->\n\t\t<div class=\"row\">\n\n\t\t\t<!-- \t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" id=\"transferBtn\" -->\n\t\t\t<!-- \t\t\t\tstyle=\"display: none;\" #empty>Transfer</button> -->\n\t\t\t<!-- \t\t\t\t\tc('Save click'); -->\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"transferBtn()\"\n\t\t\t\tid=\"transferBtn\">Transfer</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onCloseClick()\">Close</button>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below code we add to view the option in popup modal starts  */\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n/* the below code we add to view the option in popup modal ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vY29sbGVjdGlvbi1tYW4tdG8tY29sbGVjdGlvbi1tYW4tc3RvY2stdHJhbnNmZXIvY29sbGVjdGlvbi1tYW4tdG8tY29sbGVjdGlvbi1tYW4tc3RvY2stdHJhbnNmZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUFBcUU7QUFDckU7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZDtBQUVEO0NBQ0MsY0FBYztDQUNkO0FBQ0Qsa0VBQWtFIiwiZmlsZSI6InNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vY29sbGVjdGlvbi1tYW4tdG8tY29sbGVjdGlvbi1tYW4tc3RvY2stdHJhbnNmZXIvY29sbGVjdGlvbi1tYW4tdG8tY29sbGVjdGlvbi1tYW4tc3RvY2stdHJhbnNmZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgc3RhcnRzICAqL1xuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuXHQvKiBEbyB5b3UgY2hhbmdlcyBoZXJlICovXG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogOTk5OTtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcblx0ei1pbmRleDogOTk5OTtcbn1cbi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgZW5kcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-12\" *ngIf=\"isLoggedIn\"> -->\n<!-- \t<div class=\"form-group\"> -->\n<!-- \t\t<div class=\"input-group\" id=\"popupDetails\"> -->\n<!-- \t\t\t<ng-template #content let-c=\"close\" let-d=\"dismiss\"> -->\n<!-- \t\t\t<div class=\"modal-header\"> -->\n<!-- \t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Collection Man -->\n<!-- \t\t\t\t\tTo Collection Man Stock Transfer</h6> -->\n<!-- \t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" -->\n<!-- \t\t\t\t\t(click)=\"d('Cross click')\"> -->\n<!-- \t\t\t\t\t<span aria-hidden=\"true\">&times;</span> -->\n<!-- \t\t\t\t</button> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t\t<div class=\"modal-body\"> -->\n<!-- \t\t\t\t<div class=\"row\"> -->\n<!-- \t\t\t\t\t<div class=\"col-md-12\"> -->\n<!-- \t\t\t\t\t\t<form> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n<!-- \t\t\t\t\t\t\t\t<div class=\"control\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Collection Man From :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tid=\"collectionManFrom\" #collectionManFrom -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionManFrom\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n\n<!-- \t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\"> -->\n<!-- \t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManFromOptions | filterCollectioMan: controlCollectionManFrom.value) as resultCollectionManFrom\"> -->\n<!-- \t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCollectionManFrom\" -->\n<!-- \t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{ -->\n<!-- \t\t\t\t\t\t\t\toption.collectioMan }} </app-option> <app-option class=\"no-result\" -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"!resultCollectionManFrom.length\">No result</app-option> -->\n<!-- \t\t\t\t\t\t\t\t</ng-container> </ng-template> </app-autocomplete> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n<!-- \t\t\t\t\t\t\t\t<div class=\"control\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Collection Man To :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tid=\"collectionManTo\" #collectionManTo -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionManTo\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n\n<!-- \t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\"> -->\n<!-- \t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManToOptions | filterCollectioMan: controlCollectionManTo.value) as resultCollectionManTo\"> -->\n<!-- \t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCollectionManTo\" -->\n<!-- \t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{ -->\n<!-- \t\t\t\t\t\t\t\toption.collectioMan }} </app-option> <app-option class=\"no-result\" -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"!resultCollectionManTo.length\">No result</app-option> </ng-container> </ng-template> -->\n<!-- \t\t\t\t\t\t\t\t</app-autocomplete> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Entry Type</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</select> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"control\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Godown</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Godown\" id=\"godown\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlGodown\" #godown -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteGodown\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n\n<!-- \t\t\t\t\t\t\t\t<app-autocomplete #autocompleteGodown=\"appAutocomplete\"> -->\n<!-- \t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"(godownOptions | filterDest: controlGodown.value) as resultGodown\"> -->\n<!-- \t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultGodown\" -->\n<!-- \t\t\t\t\t\t\t\t\t(click)=\"getMemoCode()\" [value]=\"option.destination\"> -->\n<!-- \t\t\t\t\t\t\t\t{{ option.destination }} </app-option> <app-option class=\"no-result\" -->\n<!-- \t\t\t\t\t\t\t\t\t*ngIf=\"!resultGodown.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoFormat\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t#cashMemoFormat aria-describedby=\"basic-addon11\" readonly> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input id=\"memoNumber\" #memoNumber type=\"text\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, lrNumber);getMemoNumber($event)\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cashMemoNumber\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, lrNumber);getMemoNumber($event)\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t#cashMemoNumber aria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>LR Number :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #lrNumber -->\n<!-- \t\t\t\t\t\t\t\t\t\t\tid=\"lrNumber\" aria-describedby=\"basic-addon11\" readonly> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Memo Amount :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"memoAmount\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t#memoAmount -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, empty);getValidateMemoNumber($event)\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t</form> -->\n<!-- \t\t\t\t\t</div> -->\n<!-- \t\t\t\t</div> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t\t<div class=\"modal-footer\" style='border-bottom: 1px solid #e9ecef;'> -->\n<!-- \t\t\t\t<div class=\"row\"> -->\n\n<!-- \t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" id=\"transferBtn\" -->\n<!-- \t\t\t\t\t\tstyle=\"display: none;\" #empty>Transfer</button> -->\n<!-- \t\t\t\t\t\t\t\t\t\tc('Save click'); -->\n<!-- \t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" id=\"transferBtn\" -->\n<!-- \t\t\t\t\t\t(click)=\"transferBtn()\">Transfer</button> -->\n<!-- \t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t\t\t\t(click)=\"c('Save click')\">Close</button> -->\n<!-- \t\t\t\t</div> -->\n<!-- \t\t\t</div> -->\n\n\n<!-- \t\t\t</ng-template> -->\n\n<!-- \t\t\t<a style=\"cursor: pointer; color: blue; font-weight: bolder;\" -->\n<!-- \t\t\t\t(click)=\"open2(content)\">Click Here</a> -->\n<!-- \t\t</div> -->\n<!-- \t</div> -->\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: CollectionManToCollectionManStockTransferComponent, CollectionManToCollectionManStockTransferPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionManToCollectionManStockTransferComponent", function() { return CollectionManToCollectionManStockTransferComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionManToCollectionManStockTransferPopupComponent", function() { return CollectionManToCollectionManStockTransferPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//for datepicker ends 
//for popup modal starts 

//for popup modal endss 


//for the select option with filter starts







//for the select option with filter ends

var CollectionManToCollectionManStockTransferComponent = /** @class */ (function () {
    function CollectionManToCollectionManStockTransferComponent(modalService, dialog, router) {
        var _this = this;
        this.modalService = modalService;
        this.dialog = dialog;
        this.router = router;
        this.isLoggedIn = true;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
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
    //for popup modal starts 
    //    open2( content ) {
    //        this.modalService.open( content, { centered: true } ).result.then(
    //            result => {
    //                this.closeResult = `Closed with: ${result}`;
    //            },
    //            reason => {
    //                this.closeResult = `Dismissed ${this.getDismissReason( reason )}`;
    //            }
    //        );
    //    }
    //    private getDismissReason( reason: any ): string {
    //        if ( reason === ModalDismissReasons.ESC ) {
    //            return 'by pressing ESC';
    //        } else if ( reason === ModalDismissReasons.BACKDROP_CLICK ) {
    //            return 'by clicking on a backdrop';
    //        } else {
    //            return `with: ${reason}`;
    //        }
    //    }
    //for popup modal ends 
    CollectionManToCollectionManStockTransferComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(CollectionManToCollectionManStockTransferPopupComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            //            console.log( 'The dialog was closed' );
            //            this.animal = result;
        });
    };
    CollectionManToCollectionManStockTransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        //        this.modalService.open( this.content );
        setTimeout(function () {
            _this.openDialog();
        }, 0);
    };
    CollectionManToCollectionManStockTransferComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CollectionManToCollectionManStockTransferComponent.prototype, "content", void 0);
    CollectionManToCollectionManStockTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection-man-to-collection-man-stock-transfer',
            template: __webpack_require__(/*! ./collection-man-to-collection-man-stock-transfer.component.html */ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.html"),
            styles: [__webpack_require__(/*! ./collection-man-to-collection-man-stock-transfer.component.css */ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CollectionManToCollectionManStockTransferComponent);
    return CollectionManToCollectionManStockTransferComponent;
}());

var CollectionManToCollectionManStockTransferPopupComponent = /** @class */ (function () {
    //    collectionManFromOptions = [
    //        { id: 1, label: 'All' },
    //        { id: 2, label: 'Agra' },
    //        { id: 3, label: 'Bawana' },
    //        { id: 4, label: 'Delhi' }
    //    ];
    //
    //
    //
    //    collectionManToOptions = [
    //        { id: 1, label: 'All' },
    //        { id: 2, label: 'Aamer' },
    //        { id: 3, label: 'Afzal' },
    //        { id: 3, label: 'Arif' }
    //    ];
    //for the select option with filter ends
    function CollectionManToCollectionManStockTransferPopupComponent(
    //for modal starts
    dialogRef, data, 
    //for modal ends
    router, memoService, masterReadService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.memoService = memoService;
        this.masterReadService = masterReadService;
        this.manualView = true;
        this.automaticView = false;
        this.isLoggedIn = true;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"]();
        this.getDtlsCashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
        //    checkDtlsCashMemoDto: CashMemoDto = new CashMemoDto();
        this.userDataDtoTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"]();
        this.chkUserDtoTransferMemo = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"]();
        this.userDtoCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"]();
        this.userDtoTransferAll = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_4__["UserDataDto"]();
        this.memoNum = null;
        //for the select option with filter starts
        this.controlCollectionManFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.controlCollectionManTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.controlGodown = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        {
            if (sessionStorage.length == 0) {
                this.isLoggedIn = false;
                //          sweet alert starts
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
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
                this.getDestinationDetails();
                //                this.getMemoCode();
                this.getCollectionManDetailsList();
            }
        }
    }
    //for popup modal starts 
    //    open2( content ) {
    //        this.modalService.open( content, { centered: true } ).result.then(
    //            result => {
    //                this.closeResult = `Closed with: ${result}`;
    //            },
    //            reason => {
    //                this.closeResult = `Dismissed ${this.getDismissReason( reason )}`;
    //            }
    //        );
    //    }
    //    private getDismissReason( reason: any ): string {
    //        if ( reason === ModalDismissReasons.ESC ) {
    //            return 'by pressing ESC';
    //        } else if ( reason === ModalDismissReasons.BACKDROP_CLICK ) {
    //            return 'by clicking on a backdrop';
    //        } else {
    //            return `with: ${reason}`;
    //        }
    //    }
    //for popup modal ends 
    CollectionManToCollectionManStockTransferPopupComponent.prototype.entryTypeMode = function (entryType) {
        if (entryType === 'manual') {
            this.manualView = true;
            this.automaticView = false;
        }
        else if (entryType === 'automatic') {
            this.manualView = false;
            this.automaticView = true;
        }
        else {
            this.manualView = false;
            this.automaticView = false;
        }
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.ngOnInit = function () {
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getDestinationMethod = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDto.mode = "ALL";
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDto).subscribe(function (response) {
            if (response) {
                _this.godownOptions = response;
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Godown Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getDetailsForMemoCode = function (data) {
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.office = data.destination;
        //        console.log( "Dto>> " + this.userDataDto.office );
        //        this.userDataDto.office = "Chennai";
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getMemoCode = function (dataForMemoCode) {
        var _this = this;
        this.getDetailsForMemoCode(dataForMemoCode);
        this.masterReadService.getStationCodeService(this.userDataDto).subscribe(function (response) {
            if (response.length != 0) {
                _this.selectedEntryType = $("#entryType").val();
                //                    this.cashMemoFormat = $( "#cashMemoFormat" ).val();
                if (_this.selectedEntryType == "automatic") {
                    _this.automaticView = true;
                    $("#cashMemoNumber").focus();
                }
                else {
                    _this.stationCodeDetails = response;
                    if (_this.stationCodeDetails.stationCode == null) {
                        $("#cashMemoFormat").val('');
                        //                            console.log( this.stationCodeDetails.stationCode );
                    }
                    else {
                        //                            console.log( this.stationCodeDetails.stationCode );
                        _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                        //this.memoFormat = 'BNG/1920/';
                        //                            console.log( "Memo>>> " + this.memoFormat );
                        //                        this.cashMemoFormat = this.memoFormat;
                        $("#cashMemoFormat").val(_this.memoFormat);
                        $("#memoNumber").val('');
                        $("#cashMemoNumber").val('');
                        $("#lrNumber").val('');
                        $("#memoAmount").val('');
                        $("#memoNumber").focus();
                    }
                }
            }
            //                else {
            //                                    swal( {
            //                                        title: "Warning",
            //                                        text: "No records found for the selected city!",
            //                                        icon: "warning",
            //                                        closeOnClickOutside: false,
            //                                        closeOnEsc: false,
            //                                    } );
            //                }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Station",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getDetailsForCollectionMasterRead = function () {
        this.userDtoCollectionMan.branchId = this.userDataDtoReturnSession.mainStation;
        this.userDtoCollectionMan.companyId = this.userDataDtoReturnSession.companyId;
        this.userDtoCollectionMan.status = "D";
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getCollectionManDetailsList = function () {
        var _this = this;
        this.getDetailsForCollectionMasterRead();
        this.masterReadService.getCollectionManMasterDetails(this.userDtoCollectionMan).subscribe(function (response) {
            if (response) {
                //                    console.log( response );
                _this.collectionManFromOptions = response;
                _this.collectionManToOptions = response;
                //                    this.dtTriggerCollectionMan.next();
                //                    console.log( this.collectionManFromOptions[0] + "<< from & to >>" + this.collectionManToOptions[0] );
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Getting Collection Man Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getFocusMethod = function () {
        this.selectedEntryType = $("#entryType").val();
        if (this.selectedEntryType == "automatic") {
            window.setTimeout(function () {
                $("#cashMemoNumber").val('');
                $("#cashMemoNumber").focus();
                $("#lrNumber").val('');
                $("#memoAmount").val('');
            }, 1000);
        }
        else {
            window.setTimeout(function () {
                $("#memoNumber").val('');
                $("#memoNumber").focus();
                $("#lrNumber").val('');
                $("#memoAmount").val('');
            }, 1000);
        }
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getMemoNumber = function (e) {
        if (e.keyCode == 13) { // press A
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //                
            //                this.enteredCashMemoNumber = $( "#cashMemoNumber" ).val();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //                this.enteredMemoNumber = $( "#memoNumber" ).val();
            //                this.enteredCashMemoFormat = $( "#cashMemoFormat" ).val();
            //            }
            this.getMemoDetails();
        }
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getMethodForMemoDtails = function () {
        this.getDtlsCashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
        this.selectedEntryType = $("#entryType").val();
        this.enteredMemoNumber = $("#memoNumber").val();
        this.enteredCashMemoFormat = $("#cashMemoFormat").val();
        this.enteredCashMemoNumber = $("#cashMemoNumber").val();
        //        this.selectedCollectionManFrom = $( "#collectionManFrom" ).val();
        //        this.selectedCollectionManTo = $( "#collectionManTo" ).val();
        //        console.log( this.selectedCollectionManFrom + " << from && to >> " + this.selectedCollectionManTo );
        //        if ( this.selectedCollectionManFrom == '' || this.selectedCollectionManFrom == null || this.selectedCollectionManTo == '' || this.selectedCollectionManTo == null ) {
        //            swal( {
        //                title: "Mandatory Fields",
        //                text: "Please select Collection Man to proceed",
        //                icon: "warning",
        //                closeOnClickOutside: false,
        //                closeOnEsc: false,
        //
        //            } );
        //        } else {
        this.memoNum = '';
        if (this.selectedEntryType == "automatic") {
            this.memoNum = this.enteredCashMemoNumber;
        }
        else {
            this.memoNum = this.enteredCashMemoFormat + "" + this.enteredMemoNumber;
            if (this.enteredMemoNumber == '') {
                this.memoNum = null;
            }
        }
        this.getDtlsCashMemoDto.companyId = this.userDataDtoReturnSession.companyId;
        this.getDtlsCashMemoDto.memoNumber = this.memoNum;
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getMemoDetails = function () {
        var _this = this;
        this.getMethodForMemoDtails();
        if (this.memoNum == null || this.memoNum == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Memo Number is Mandatory!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.getFocusMethod();
            });
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //
            //            }
        }
        else {
            this.memoService.getMemoDetailService(this.getDtlsCashMemoDto).subscribe(function (response) {
                if (response) {
                    _this.memoDetails = response;
                    //                        this.checkDtlsCashMemoDto = this.memoDetails;
                    if (_this.memoDetails.cashMemoName == null && _this.memoDetails.status == null && _this.memoDetails.grandTotal == null) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetails.cashMemoName == "Cash") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " Amount is collected",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetails.cashMemoName != "Cash") {
                        if (_this.memoDetails.status == "transfer" || _this.memoDetails.status == "transfertogodown" || _this.memoDetails.status == "missing") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " not in SRD Collection Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetails.status == "billing") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " is in Billing Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetails.status == "collection") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " is in SRD Collection Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetails.status == "cmstock" && _this.memoDetails.column1 == "Pending") {
                            $("#memoAmount").val(_this.memoDetails.grandTotal);
                            $("#lrNumber").val(_this.memoDetails.gcNoteNumber);
                            window.setTimeout(function () {
                                $("#transferBtn").focus();
                            }, 100);
                            //                                this.getFocusMethod();
                        }
                        else if (_this.memoDetails.status == "completed") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "" + _this.getDtlsCashMemoDto.memoNumber + " Collection Closed",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Server Error",
                text: "While Getting Memo Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        }
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.transferBtn = function () {
        this.selectedCollectionManFrom = $("#collectionManFrom").val();
        this.selectedCollectionManTo = $("#collectionManTo").val();
        //        console.log( this.selectedCollectionManFrom + " << from check && to check >> " + this.selectedCollectionManTo );
        if (this.selectedCollectionManFrom == '' || this.selectedCollectionManTo == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Mandatory Fields",
                text: "Please select Collection Man to proceed",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.validateMemoOnTransfer();
        }
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getValidateMemoNumber = function (e) {
        if (e.keyCode == 13) { // press Enter
            this.selectedCollectionManFrom = $("#collectionManFrom").val();
            this.selectedCollectionManTo = $("#collectionManTo").val();
            //            console.log( this.selectedCollectionManFrom + " << from check && to check >> " + this.selectedCollectionManTo );
            if (this.selectedCollectionManFrom == '' || this.selectedCollectionManTo == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                    title: "Mandatory Fields",
                    text: "Please select Collection Man to proceed",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.validateMemoOnTransfer();
            }
        }
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.validateMemoOnTransfer = function () {
        var _this = this;
        this.getMethodForMemoDtails();
        if (this.memoNum == null || this.memoNum == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Warning",
                text: "Memo Number is Mandatory!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.getFocusMethod();
            });
            //            this.selectedEntryType = $( "#entryType" ).val();
            //            if ( this.selectedEntryType == "automatic" ) {
            //                $( "#cashMemoNumber" ).focus();
            //            } else {
            //                $( "#memoNumber" ).focus();
            //
            //            }
        }
        else {
            this.memoService.getMemoDetailService(this.getDtlsCashMemoDto).subscribe(function (response) {
                if (response) {
                    _this.memoDetailsTransfer = response;
                    //                        this.checkDtlsCashMemoDto = this.memoDetailsTransfer;
                    if (_this.memoDetailsTransfer.cashMemoName == null && _this.memoDetailsTransfer.status == null && _this.memoDetailsTransfer.grandTotal == null) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetailsTransfer.cashMemoName == "Cash") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                            title: "Warning",
                            text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " Amount is collected",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else if (_this.memoDetailsTransfer.cashMemoName != "Cash") {
                        if (_this.memoDetailsTransfer.status == "transfer" || _this.memoDetailsTransfer.status == "transfertogodown" || _this.memoDetailsTransfer.status == "missing") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " not in SRD Collection Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetailsTransfer.status == "billing") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " is in Billing Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetailsTransfer.status == "collection") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo  " + _this.getDtlsCashMemoDto.memoNumber + " is in SRD Collection Stock",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else if (_this.memoDetailsTransfer.status == "cmstock" && _this.memoDetailsTransfer.column1 == "Pending") {
                            _this.transferMemoMethod();
                        }
                        else if (_this.memoDetailsTransfer.status == "completed") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "" + _this.getDtlsCashMemoDto.memoNumber + " Collection Closed",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                                title: "Warning",
                                text: "Cash Memo Number " + _this.getDtlsCashMemoDto.memoNumber + " Not Found",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.getFocusMethod();
                            });
                        }
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Server Error",
                text: "While Getting Memo Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        }
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.getMethodForTransferMemoDtails = function () {
        this.selectedEntryType = $("#entryType").val();
        this.enteredMemoNumber = $("#memoNumber").val();
        this.enteredCashMemoFormat = $("#cashMemoFormat").val();
        this.enteredCashMemoNumber = $("#cashMemoNumber").val();
        this.selectedCollectionManFrom = $("#collectionManFrom").val();
        this.selectedCollectionManTo = $("#collectionManTo").val();
        this.memoNum = '';
        if (this.selectedEntryType == "automatic") {
            this.memoNum = this.enteredCashMemoNumber;
        }
        else {
            this.memoNum = this.enteredCashMemoFormat + "" + this.enteredMemoNumber;
            if (this.enteredMemoNumber == '') {
                this.memoNum = null;
            }
        }
        this.userDataDtoTransferMemo.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDtoTransferMemo.memoNumber = this.memoNum;
        this.userDataDtoTransferMemo.mode = "cm2cmstock";
        this.userDataDtoTransferMemo.collectioMan = this.selectedCollectionManFrom;
        this.userDataDtoTransferMemo.collectioManTo = this.selectedCollectionManTo;
        this.userDataDtoTransferMemo.updatedBy = this.userDataDtoReturnSession.userId;
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.transferMemoMethod = function () {
        var _this = this;
        this.getMethodForTransferMemoDtails();
        this.memoService.updateMemoDetailService(this.userDataDtoTransferMemo).subscribe(function (response) {
            if (response) {
                _this.updateMemoDetails = response;
                _this.chkUserDtoTransferMemo = _this.updateMemoDetails;
                if (_this.chkUserDtoTransferMemo.result == "exists") {
                    $("#memoAmount").val('');
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "Warning",
                        text: "Transfer To Collection Man Stock CashMemo " + _this.userDataDtoTransferMemo.memoNumber + " already transferred to collection man stock!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.getFocusMethod();
                    });
                }
                else if (_this.chkUserDtoTransferMemo.result == "notexists") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                        title: "Warning",
                        text: "Transfer To Collection Man Stock - CashMemo " + _this.userDataDtoTransferMemo.memoNumber + " does not exist!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.getFocusMethod();
                    });
                }
                else {
                    $("#memoNumber").val('');
                    $("#cashMemoNumber").val('');
                    $("#lrNumber").val('');
                    $("#memoAmount").val('');
                    _this.getFocusMethod();
                    //                        LRCounts++;
                    //                        lblLRCountsValues.setText("" + LRCounts);
                    //                        cashMemoDto.setCollectionMan(cbCollectionMan
                    //                                .getRawValue());
                    //                        cashMemoDtos.add(cashMemoDto);
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
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "Server Error",
            text: "While Updating Memo Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.onCloseClick = function () {
        this.dialogRef.close();
    };
    CollectionManToCollectionManStockTransferPopupComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CollectionManToCollectionManStockTransferPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection-man-to-collection-man-stock-transfer-popup',
            template: __webpack_require__(/*! ./collection-man-to-collection-man-stock-transfer-popup.component.html */ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer-popup.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_8__["MemoService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"]])
    ], CollectionManToCollectionManStockTransferPopupComponent);
    return CollectionManToCollectionManStockTransferPopupComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title_custom {\n\tborder-bottom: 1px solid orange;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vY29sbGVjdGlvbm1hbi1zdG9ja3MtcHJpbnQvY29sbGVjdGlvbm1hbi1zdG9ja3MtcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdDQUFnQztDQUNoQyxZQUFZO0NBQ1osYUFBYTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vY29sbGVjdGlvbm1hbi1zdG9ja3MtcHJpbnQvY29sbGVjdGlvbm1hbi1zdG9ja3MtcHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZV9jdXN0b20ge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlO1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page row system_responsive\" id=\"firstPrint\">\n\t<div class=\"col-md-12\">\n\t\t<!--first row starts-->\n\t\t<div class=\"row\" style=\"padding-top: 5px;\" height='30px'>\n\t\t\t<div class=\"col-md-7\">\n\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<h6>\n\t\t\t\t\t{{address}}<br>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--first row starts-->\n\t\t<div class=\"row\" style=\"padding-top: 5px;\" height='30px'>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='text-align: center;'>Transferred To Collection Man Stock</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Second  row starts-->\n\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t<tr>\n\t\t\t\t<td width='17%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-left: 1px solid black;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><strong>Memo Number</strong></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong> LR No</strong></td>\n\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong> Articles</strong></td>\n\t\t\t\t<td width='19%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong> Consignee Name</strong></td>\n\t\t\t\t<td width='19%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong> Consignor Name</strong></td>\n\t\t\t\t<td width='9%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong> Memo Amount</strong></td>\n\t\t\t\t<td width='18%' align='center'\n\t\t\t\t\tstyle='border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid black;border-right: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><strong> Collection Man</strong></td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let collectionManDetailsDataList of collectionManDetailsDataList\">\n\t\t\t\t<td width='17%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word; border-right: 1px solid #000; border-left: 1px solid #000;'\n\t\t\t\t\tvalign='top' type='text' id='appMemoNumberPrint'><span>\n\t\t\t\t\t\t{{collectionManDetailsDataList.memoNumber}} </span></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: 1px solid #000;border-left: 1px solid #000;'\n\t\t\t\t\tvalign='top' type='number' id='appEnteredDatePrint'><span>\n\t\t\t\t\t\t{{collectionManDetailsDataList.gcNoteNumber}}\n\t\t\t\t\t</span></td>\n\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: 1px solid #000;border-left: 1px solid #000;'\n\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'><span>\n\t\t\t\t\t\t{{collectionManDetailsDataList.totalArticles}} </span></td>\n\t\t\t\t<td width='19%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: 1px solid #000;border-left: 1px solid #000;'\n\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'><span>\n\t\t\t\t\t\t{{collectionManDetailsDataList.consignee}} </span></td>\n\t\t\t\t<td width='19%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: 1px solid #000;border-left: 1px solid #000;'\n\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'><span>\n\t\t\t\t\t\t{{collectionManDetailsDataList.consignor}} </span></td>\n\t\t\t\t<td width='9%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: 1px solid #000;border-left: 1px solid #000;'\n\t\t\t\t\tvalign='top' type='text' id='appLrNumberPrint'><span>\n\t\t\t\t\t\t{{collectionManDetailsDataList.grandTotal}} </span></td>\n\t\t\t\t<td width='18%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: 1px solid #000;border-left: 1px solid #000;'\n\t\t\t\t\tvalign='top' type='text' id='appPartyNamePrint'><span>\n\t\t\t\t\t\t{{collectionManDetailsDataList.collectionMan}}</span></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td width='17%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;border-bottom: 1px solid black;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><strong> Total : </strong><strong>\n\t\t\t\t\t\t{{totalCount}} </strong></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;border-bottom: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;border-bottom: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong>{{totalArticle}} </strong></td>\n\t\t\t\t<td width='19%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;border-bottom: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong></strong></td>\n\t\t\t\t<td width='19%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;border-bottom: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t<td width='9%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;border-bottom: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><strong> {{totalAmount}}</strong></td>\n\t\t\t\t<td width='18%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; word-wrap: break-word;border-bottom: 1px solid black;border-right: 1px solid #000;'\n\t\t\t\t\tvalign='top' type='text'><strong> </strong></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CollectionManStocksPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionManStocksPrintComponent", function() { return CollectionManStocksPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/dashboard-service */ "./src/app/dataService/dashboard-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
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



//for modal ends
var CollectionManStocksPrintComponent = /** @class */ (function () {
    //for datatable ends
    function CollectionManStocksPrintComponent(pendingLrDetailsScreen, router) {
        var _this = this;
        this.pendingLrDetailsScreen = pendingLrDetailsScreen;
        this.router = router;
        this.dtTriggerCollectionManStockPrintDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //for datatable ends
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        console.log(localStorage);
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
            this.collectionManStockPrintDataLocalStorage = JSON.parse(localStorage.getItem('collectionManStockPrint'));
            localStorage.clear();
            console.log(this.collectionManStockPrintDataLocalStorage);
            if (this.collectionManStockPrintDataLocalStorage != null &&
                this.collectionManStockPrintDataLocalStorage != undefined &&
                this.collectionManStockPrintDataLocalStorage != "") {
                this.collectionManDetailsDataList = [];
                this.collectionManDetailsDataList = this.collectionManStockPrintDataLocalStorage;
                this.totalCount = 0;
                this.totalAmount = 0.0;
                this.totalArticle = 0.0;
                for (var i = 0; i < this.collectionManDetailsDataList.length; i++) {
                    this.totalCount = i + +1;
                    this.totalAmount = +this.totalAmount + +this.collectionManDetailsDataList[i].grandTotal;
                    this.totalArticle = +this.totalArticle + +this.collectionManDetailsDataList[i].totalArticles;
                }
            }
            window.setTimeout(function () {
                window.print();
            }, 1000);
            window.onafterprint = function () {
                window.close();
            };
            localStorage.clear();
            window.addEventListener('afterprint', function (event) {
                _this.clearField();
            });
        }
    }
    /* for datatable starts */
    CollectionManStocksPrintComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    CollectionManStocksPrintComponent.prototype.ngOnInit = function () {
    };
    CollectionManStocksPrintComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerCollectionManStockPrintDetails.unsubscribe();
    };
    CollectionManStocksPrintComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerCollectionManStockPrintDetails.next();
    };
    CollectionManStocksPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CollectionManStocksPrintComponent.prototype.clearField = function () {
        this.collectionManDetailsDataList = [];
        localStorage.clear();
        this.totalCount = 0;
        this.totalAmount = 0.0;
        this.totalArticle = 0.0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CollectionManStocksPrintComponent.prototype, "dtElements", void 0);
    CollectionManStocksPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collectionman-stocks-print',
            template: __webpack_require__(/*! ./collectionman-stocks-print.component.html */ "./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.html"),
            styles: [__webpack_require__(/*! ./collectionman-stocks-print.component.css */ "./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CollectionManStocksPrintComponent);
    return CollectionManStocksPrintComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customCss{\n\tpadding :1px 5px;\n}\n@media screen and (max-width:992px) {\n\t.btn_bootstrap {\n\t\tpadding-top: 10px;\n\t}\n}\n@media screen and (min-width:992px) {\n\t.btn_bootstrap {\n\t\tpadding-top: 0px;\n\t}\n}\n::ng-deep ngb-typeahead-window {\n  top:26px;\n    left:25px;\n    width: 60%;\n\tmax-height: 150px;\n    overflow-y: auto;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vbWFudWFsLWNhc2htZW1vLWNoZWNrL21hbnVhbC1jYXNobWVtby1jaGVjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQjtDQUNEO0FBRUQ7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQjtDQUNEO0FBQ0Q7RUFDRSxTQUFTO0lBQ1AsVUFBVTtJQUNWLFdBQVc7Q0FDZCxrQkFBa0I7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vbWFudWFsLWNhc2htZW1vLWNoZWNrL21hbnVhbC1jYXNobWVtby1jaGVjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUNzc3tcblx0cGFkZGluZyA6MXB4IDVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcblx0LmJ0bl9ib290c3RyYXAge1xuXHRcdHBhZGRpbmctdG9wOiAxMHB4O1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpIHtcblx0LmJ0bl9ib290c3RyYXAge1xuXHRcdHBhZGRpbmctdG9wOiAwcHg7XG5cdH1cbn1cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdyB7XG4gIHRvcDoyNnB4O1xuICAgIGxlZnQ6MjVweDtcbiAgICB3aWR0aDogNjAlO1xuXHRtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\" >\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<h6 class=\"card-title text-white\">Manual CashMemo's Check</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8 btn_bootstrap\" style='text-align: right;'>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\t\tid=\"checkAllBtn\" (click)=\"checkAllBtn(manualCashmemoCheckPrintPopUpTemplate);\">Checked Memos-All</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\t\tid=\"checkBtn\" (click)=\"checkBtn(manualCashmemoCheckPrintPopUpTemplate);\"disabled>Checked Memos</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\t\tid=\"unCheckAllBtn\" (click)=\"unCheckAllBtn(manualCashmemoCheckPrintPopUpTemplate);\">UnChecked Memos-All</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\t\tid=\"unCheckBtn\" (click)=\"unCheckBtn(manualCashmemoCheckPrintPopUpTemplate);\"disabled>UnChecked Memos</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Staion</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #station id=\"station\" name=\"station\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Station\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"stationSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"getMemoCode($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id='codeForManual'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForManual($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id='cashMemoManual'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cashMemoAutomatic\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForAutomatic($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Amount :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"memoAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Lr Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lrNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" style=\"margin-left: 50px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"finishBtn\" (click)=\"finishMethod();\"disabled>Finish</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearAllMethod();\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" align=\"right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"lblMemoCount\">{{textMemoCount}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Manual Cash Memo Check</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"manualCashmemoCheckId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsManualCashmemoCheck\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerManualCashmemoCheck\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let manualCashmemoCheckData of manualCashmemoCheckDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualCashmemoCheckData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualCashmemoCheckData.memoDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualCashmemoCheckData.grandTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualCashmemoCheckData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualCashmemoCheckData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualCashmemoCheckData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualCashmemoCheckData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualCashmemoCheckData.collectionMan }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total :\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{countOfLr}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotAmt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotArt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t<ng-template #manualCashmemoCheckPrintPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewManualCashmemoCheckPrintPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"popupManualCashmemoCheckPrint\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-manual-cashmemo-check-and-collectionman-stock-check-print></app-manual-cashmemo-check-and-collectionman-stock-check-print>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"cancelBtnId\" (click)=\"closeManualCashmemoCheckPrintPopUp()\">Cancel\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>\n\n"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ManualCashmemoCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualCashmemoCheckComponent", function() { return ManualCashmemoCheckComponent; });
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
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
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













var ManualCashmemoCheckComponent = /** @class */ (function () {
    function ManualCashmemoCheckComponent(memoLessRpt, router, memoReport, masterReadService, modalService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.loadingIndicator = true;
        this.dtTriggerManualCashmemoCheck = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.manualView = true;
        this.automaticView = false;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.stationTA = [];
        this.focusStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchCashmemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.manualCashmemoCheckDataList = [];
        this.newAttribute = {};
        this.textMemoCount = '';
        this.memoCount = 0;
        this.lblMemoCount = false;
        this.stationSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.stationTA
                : _this.stationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterStation = function (x) { return x.destination; };
        ////
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.checkMemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.checkMemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.updateCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.cashmemoDtoForPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.countOfLr = 0;
        this.sumOfTotAmt = 0;
        this.sumOfTotArt = 0;
        this.setStation = [];
        this.viewManualCashmemoCheckPrintPopUp = false;
        this.getStationDtails = function () {
            _this.getStationInfo();
            _this.masterReadService.getDestinationForLREntryService(_this.lrDtoForStation).subscribe(function (response) {
                if (response) {
                    _this.stationOptions = response;
                    _this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
                    _this.stationTA = [];
                    //                    console.log(this.stationOptions.length);
                    for (var i = 0; i < _this.stationOptions.length; i++) {
                        _this.stationTA.push(_this.stationOptions[i]);
                    }
                    console.log(_this.stationTA, _this.stationOptions);
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Error While Getting Station Details", "info");
            }, function () { return console.log('done'); };
        };
        this.checkingBeforeInsertInTable = function () {
            _this.memoReport.getManualCashMemoCheckFirst(_this.searchCashmemoNumberForTable).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Alert",
                        text: "No Datas Found For This Information",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.clearMethod();
                    });
                }
                else {
                    _this.checkMemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
                    _this.responseOfCheckMemoNumberForTable = response;
                    _this.checkMemoNumberForTable = _this.responseOfCheckMemoNumberForTable;
                    // implemented the below check as per chennai
                    // requirements to avoid the insertion if the
                    // status is assigned or to party
                    // @Dated : 26/06/2018
                    if ((_this.checkMemoNumberForTable[0].status == 'to party') || (_this.checkMemoNumberForTable[0].column1 == 'Assigned')) {
                        // no insert into grid
                        console.log('7');
                    }
                    else {
                        _this.addInTable();
                        console.log('6');
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.updateMethodDetails = function () {
            _this.memoReport.updateCashMemoCheck(_this.updateCashmemoNumberForTable).subscribe(function (response) {
                if (response.status == 'updated') {
                }
                else {
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getCollectionCheckPrintOutDetails = function (manualCashmemoCheckPrintPopUpTemplate) {
            _this.showSpinnerForAction = true;
            _this.memoReport.getManualCashMemoCheckPrintOut(_this.cashmemoDtoForPrint).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Empty",
                        text: "No records found to print",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.getPrintData = response;
                    _this.manualCashmemoCheckPrintPopUp = _this.modalService.open(manualCashmemoCheckPrintPopUpTemplate, { centered: true, size: 'lg', windowClass: "modalClassForPopUpTruckOwner" });
                    _this.manualCashmemoCheckPrintPopUp.result.then(function (result) {
                        _this.manualCashmemoCheckPrintClosePopUp = "Closed with: " + result;
                    }, function (reason) {
                        _this.manualCashmemoCheckPrintClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                    });
                    localStorage.clear();
                    localStorage.setItem('popupManualCashmemoCheckDetails', JSON.stringify(_this.cashmemoDtoForPrint));
                    localStorage.setItem('popupManualCashmemoCheckPrintDetails', JSON.stringify(_this.getPrintData));
                    _this.viewManualCashmemoCheckPrintPopUp = true;
                    window.addEventListener('afterPopUp', function (event) {
                        _this.viewManualCashmemoCheckPrintPopUp = false;
                    });
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the details", "info");
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
            this.getStationDtails();
        }
    }
    ManualCashmemoCheckComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ManualCashmemoCheckComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ManualCashmemoCheckComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var mainStation = this.userDataDtoReturnSession.mainStation;
        this.dtOptionsManualCashmemoCheck = {
            dom: 'Bfrtip',
            buttons: [],
            //place holder in search/filter in datatable starts
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
                var totalAmt = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalArt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html(totalAmt);
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html(totalArt);
                $(api.column(5).footer()).html();
                $(api.column(6).footer()).html();
                $(api.column(7).footer()).html();
            }
        };
    };
    ManualCashmemoCheckComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerManualCashmemoCheck.unsubscribe();
    };
    ManualCashmemoCheckComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerManualCashmemoCheck.next();
    };
    ManualCashmemoCheckComponent.prototype.entryTypeMode = function (entryType) {
        if (entryType === 'manual') {
            this.manualView = true;
            this.automaticView = false;
        }
        else if (entryType === 'automatic') {
            this.manualView = false;
            this.automaticView = true;
        }
        else {
            this.manualView = false;
            this.automaticView = false;
        }
    };
    ManualCashmemoCheckComponent.prototype.getStationInfo = function () {
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.lrDtoForStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForStation.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDtoForStation.mode = "ALL";
    };
    ManualCashmemoCheckComponent.prototype.getMemoCode = function (e) {
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.modelStation = e.item;
        this.userDtoMemoCode.companyId = this.userDataDtoReturnSession.companyId;
        this.stationForCode = this.modelStation.destination;
        this.userDtoMemoCode.office = this.stationForCode;
        console.log(this.userDtoMemoCode);
        this.getDetailsForMemoCode();
        $("#checkBtn").prop("disabled", false);
        $("#unCheckBtn").prop("disabled", false);
    };
    ManualCashmemoCheckComponent.prototype.getDetailsForMemoCode = function () {
        var _this = this;
        this.masterReadService.getStationCodeService(this.userDtoMemoCode).subscribe(function (response) {
            if (response.length != 0) {
                _this.stationCodeDetails = response;
                _this.selectedEntryType = $("#entryType").val();
                if (_this.selectedEntryType == "automatic") {
                    _this.manualView = false;
                    _this.automaticView = true;
                    $("#cashMemoAutomatic").focus();
                }
                else {
                    if (_this.stationCodeDetails.stationCode == null) {
                        $("#codeForManual").val('');
                    }
                    else {
                        //Basha Pending
                        _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                        //                                this.memoFormat = 'BNG/1920/';
                        $("#codeForManual").val(_this.memoFormat);
                        $("#cashMemoManual").val('');
                        $("#cashMemoAutomatic").val('');
                        $("#cashMemoManual").focus();
                    }
                }
                _this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
            title: "Server Error",
            text: "While Getting Station",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    ManualCashmemoCheckComponent.prototype.getMemoNumberForManual = function (e) {
        if (e.keyCode == 13) {
            this.selectedMemoNumberForManual = $("#cashMemoManual").val();
            if (this.selectedMemoNumberForManual != null && this.selectedMemoNumberForManual != '') {
                this.getManualCashMemoCheckMtd();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Memo Number Empty",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default.a.close();
                    // $( "#cashMemoManual" ).focus();
                    window.setTimeout(function () {
                        $("#cashMemoManual").focus();
                    }, 100);
                    return false;
                });
            }
        }
    };
    ManualCashmemoCheckComponent.prototype.getMemoNumberForAutomatic = function (e) {
        /*  setTimeout(() => {
              this.showforAutomatic();
          },
              500 );*/
        if (e.keyCode == 13) {
            this.selectedMemoNumberForAutomatic = $("#cashMemoAutomatic").val();
            if (this.selectedMemoNumberForAutomatic != null && this.selectedMemoNumberForAutomatic != '') {
                this.getManualCashMemoCheckMtd();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Memo Number Empty",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default.a.close();
                    window.setTimeout(function () {
                        $("#cashMemoAutomatic").focus();
                    }, 100);
                    return false;
                });
            }
        }
    };
    /*  showforAutomatic() {
            this.selectedMemoNumberForAutomatic = $( "#cashMemoAutomatic" ).val();
            if ( this.selectedMemoNumberForAutomatic != null && this.selectedMemoNumberForAutomatic != '' ) {
                this.getManualCashMemoCheckMtd();
            }else{
                swal({
                        title: "Warning",
                        text: "Memo Number Empty",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(() => {
                        swal.close();
                         window.setTimeout(function () {
                             $( "#cashMemoAutomatic" ).focus();
                        }, 100);
                     return false;
                    });
            }
        }*/
    ManualCashmemoCheckComponent.prototype.getManualCashMemoCheckMtd = function () {
        this.memoNum = '';
        this.selectedEntryType = $("#entryType").val();
        this.selectedCodeForManual = $("#codeForManual").val();
        this.selectedMemoNumberForManual = $("#cashMemoManual").val();
        this.selectedMemoNumberForAutomatic = $("#cashMemoAutomatic").val();
        if (this.selectedEntryType == 'automatic') {
            this.memoNum = this.selectedMemoNumberForAutomatic;
        }
        else {
            this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
        }
        this.searchCashmemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchCashmemoNumber.memoNumber = this.memoNum;
        this.getManualCashMemoCheckMtdDetails();
        this.showSpinnerForAction = true;
    };
    ManualCashmemoCheckComponent.prototype.getManualCashMemoCheckMtdDetails = function () {
        var _this = this;
        this.memoReport.getManualCashMemoCheckFirst(this.searchCashmemoNumber).subscribe(function (response) {
            console.log(response);
            _this.showSpinnerForAction = false;
            $("#finishBtn").prop("disabled", true);
            if (response.length > 0) {
                _this.showSpinnerForAction = false;
                _this.checkMemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
                _this.responseOfCheckMemoNumber = response;
                _this.checkMemoNumber = _this.responseOfCheckMemoNumber;
                console.log(_this.checkMemoNumber);
                console.log(_this.checkMemoNumber[0].lrNumber);
                if (_this.checkMemoNumber[0].lrNumber != null && _this.checkMemoNumber[0].lrNumber != '') {
                    if (((_this.checkMemoNumber[0].status == null) && (_this.checkMemoNumber[0].column1 == null) && (_this.checkMemoNumber[0].memoCheck == null)) || (_this.checkMemoNumber[0].memoCheck == null)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                            title: "Empty",
                            text: "Cashmemo number not found",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else {
                        if ((_this.checkMemoNumber[0].memoCheck != null) && (_this.checkMemoNumber[0].memoCheck == false)) {
                            if ((_this.checkMemoNumber[0].status == 'collection') && (_this.checkMemoNumber[0].column1 == 'Pending')) {
                                // manualCollectionCheck();
                                // insert into grid @Dated :
                                // 29/08/2018
                                //Pending
                                _this.gridReconfigure();
                                $("#memoAmount").val(_this.checkMemoNumber[0].grandTotal);
                                $("#lrNumber").val(_this.checkMemoNumber[0].lrNumber);
                                $("#finishBtn").prop("disabled", false);
                                $("#finishBtn").focus();
                                _this.clearMethod1();
                                _this.selectedEntryType = $("#entryType").val();
                                if (_this.selectedEntryType == 'automatic') {
                                    _this.updateMethod(_this.memoNum);
                                    _this.lblMemoCount = true;
                                    _this.memoCount = +_this.memoCount + +1;
                                    _this.textMemoCount = " No. of cashmemos: " + _this.memoCount;
                                    _this.clearMethod();
                                }
                            }
                            else {
                                _this.showStatus = '';
                                if (_this.checkMemoNumber[0].status == 'billing') {
                                    _this.showStatus = ' Cash Memo is in Billing Stock';
                                }
                                else if (_this.checkMemoNumber[0].status == 'transfer') {
                                    _this.showStatus = ' Cash Memo not in SRD Collection Stock';
                                }
                                else if ((_this.checkMemoNumber[0].status == 'collection') && (_this.checkMemoNumber[0].column1 == 'completed')) {
                                    _this.showStatus = ' Collection Closed';
                                }
                                else if ((_this.checkMemoNumber[0].status == 'cmstock') && (_this.checkMemoNumber[0].column1 == 'Pending')) {
                                    _this.showStatus = ' Cash Memo is in Collection Man Stock';
                                }
                                else if ((_this.checkMemoNumber[0].status == 'cmstock') && (_this.checkMemoNumber[0].column1 == 'Assigned')) {
                                    _this.showStatus = ' Cash Memo assigned for Collection';
                                }
                                else if (_this.checkMemoNumber[0].status == 'to party') {
                                    _this.showStatus = ' Cash Memo Left To-Party';
                                }
                                else if (_this.checkMemoNumber[0].status == 'completed') {
                                    _this.showStatus = ' Collection Closed';
                                }
                                else if (_this.checkMemoNumber[0].status == 'transferToGodown') {
                                    _this.showStatus = ' Cash Memo not in SRD Collection Stock';
                                }
                                else if (_this.checkMemoNumber[0].status == 'missing') {
                                    _this.showStatus = ' Cash Memo is Missing';
                                }
                                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                                    title: "Status",
                                    text: " " + _this.showStatus,
                                    icon: "warning",
                                    closeOnClickOutside: false,
                                    closeOnEsc: false,
                                }).then(function () {
                                    _this.clearMethod();
                                });
                            }
                        }
                        else if ((_this.checkMemoNumber[0].memoCheck != null) && (_this.checkMemoNumber[0].memoCheck == true)) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                                title: "Status",
                                text: "Cash Memo Number Already Checked",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.clearMethod();
                            });
                        }
                    }
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "Cash memo number does not exist",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.clearMethod();
                    });
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Cash memo number does not exist",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.clearMethod();
                });
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While Getting Memo Number Details", "info");
        }, function () { return console.log('done'); };
    };
    ;
    ManualCashmemoCheckComponent.prototype.clearMethod = function () {
        this.selectedEntryType = $("#entryType").val();
        $("#memoAmount").val('');
        $("#lrNumber").val('');
        if (this.selectedEntryType == 'automatic') {
            $("#cashMemoAutomatic").val('');
            //$( "#cashMemoAutomatic" ).focus();
            window.setTimeout(function () {
                $("#cashMemoAutomatic").focus();
            }, 100);
        }
        else {
            $("#cashMemoManual").val('');
            window.setTimeout(function () {
                $("#cashMemoManual").focus();
            }, 100);
        }
    };
    ManualCashmemoCheckComponent.prototype.gridReconfigure = function () {
        var _this = this;
        if (this.manualCashmemoCheckDataList.length > 0) {
            var checkMemoNumberInTable = this.manualCashmemoCheckDataList.find(function (manualCashmemoCheckData) { return manualCashmemoCheckData.memoNumber === _this.memoNum; });
            console.log(checkMemoNumberInTable);
            if (checkMemoNumberInTable == undefined) {
                this.checkingBeforeInsertInTableDetails();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Duplicate Memo Number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default.a.close();
                    _this.clearMethod();
                });
            }
        }
        else {
            console.log('5');
            this.checkingBeforeInsertInTableDetails();
        }
    };
    ManualCashmemoCheckComponent.prototype.checkingBeforeInsertInTableDetails = function () {
        this.searchCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.searchCashmemoNumberForTable.memoNumber = this.memoNum;
        this.checkingBeforeInsertInTable();
    };
    ManualCashmemoCheckComponent.prototype.addInTable = function () {
        console.log('8');
        this.newAttribute.memoNumber = this.checkMemoNumberForTable[0].memoNumber;
        this.newAttribute.memoDateStr = this.checkMemoNumberForTable[0].memoDateStr;
        this.newAttribute.grandTotal = this.checkMemoNumberForTable[0].grandTotal;
        this.newAttribute.lrNumber = this.checkMemoNumberForTable[0].lrNumber;
        this.newAttribute.articles = this.checkMemoNumberForTable[0].articles;
        this.newAttribute.area = this.checkMemoNumberForTable[0].area;
        this.newAttribute.consigneeName = this.checkMemoNumberForTable[0].consigneeName;
        this.newAttribute.collectionMan = this.checkMemoNumberForTable[0].collectionMan;
        $("#manualCashmemoCheckId").DataTable().destroy();
        if (this.manualCashmemoCheckDataList == null) {
            this.manualCashmemoCheckDataList = [];
        }
        if (this.manualCashmemoCheckDataList.length == 0) {
            this.manualCashmemoCheckDataList.push(this.newAttribute);
        }
        else {
            this.manualCashmemoCheckDataList.push(this.newAttribute);
        }
        this.dtTriggerManualCashmemoCheck.next();
        // console.log( this.manualCashmemoCheckDataList );
        this.countOfLr = +this.countOfLr + 1;
        this.sumOfTotAmt = +this.sumOfTotAmt + +this.newAttribute.grandTotal;
        this.sumOfTotArt = +this.sumOfTotArt + +this.newAttribute.articles;
        this.newAttribute = {};
        /* $( "#entryLessAmount" ).val( '' );
         this.selectedEntryType = $( "#entryLessEntryType" ).val();
         this.selectedCodeForManual = $( "#codeForManualLess" ).val();
 
         if ( this.selectedEntryType == 'entryLessAutomatic' ) {
             $( "#memoNumberForAutomaticLess" ).val( '' );
             $( "#memoNumberForAutomaticLess" ).focus();
         } else {
             $( "#memoNumberForManualLess" ).val( '' );
             $( "#memoNumberForManualLess" ).focus();
         }*/
    };
    ManualCashmemoCheckComponent.prototype.clearMethod1 = function () {
        this.selectedEntryType = $("#entryType").val();
        if (this.selectedEntryType == 'automatic') {
            $("#cashMemoAutomatic").val('');
            $("#cashMemoAutomatic").focus();
        }
        else {
            console.log('81');
            $("#finishBtn").prop("disabled", false);
            $("#finishBtn").focus();
        }
    };
    ManualCashmemoCheckComponent.prototype.finishMethod = function () {
        this.memoNum = '';
        this.selectedEntryType = $("#entryType").val();
        this.selectedCodeForManual = $("#codeForManual").val();
        this.selectedMemoNumberForManual = $("#cashMemoManual").val();
        this.selectedMemoNumberForAutomatic = $("#cashMemoAutomatic").val();
        if (this.selectedEntryType == 'automatic') {
            this.memoNum = this.selectedMemoNumberForAutomatic;
        }
        else {
            this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
        }
        this.updateMethod(this.memoNum);
        this.lblMemoCount = true;
        this.memoCount = +this.memoCount + +1;
        this.textMemoCount = " No. of cashmemos: " + this.memoCount;
        this.clearMethod();
    };
    ManualCashmemoCheckComponent.prototype.updateMethod = function (memoNum) {
        this.updateCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.updateCashmemoNumberForTable.memoNumber = memoNum;
        this.updateCashmemoNumberForTable.enteredBy = this.userDataDtoReturnSession.userId;
        this.updateCashmemoNumberForTable.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.updateCashmemoNumberForTable);
        this.updateMethodDetails();
    };
    ManualCashmemoCheckComponent.prototype.clearAllMethod = function () {
        this.showSpinnerForAction = false;
        this.memoFormat = '',
            this.selectedMemoNumberForManual = '';
        this.selectedMemoNumberForAutomatic = '';
        this.memoNum = '';
        this.textMemoCount = '';
        this.memoCount = 0;
        this.lblMemoCount = false;
        this.stationForCode = '';
        this.selectedCodeForManual = '';
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.stationCodeDetails = '';
        this.checkMemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.checkMemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.responseOfCheckMemoNumber = '';
        this.responseOfCheckMemoNumberForTable = '';
        this.showStatus = '';
        this.searchCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.updateCashmemoNumberForTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.countOfLr = 0;
        this.sumOfTotAmt = 0;
        this.sumOfTotArt = 0;
        $("#manualCashmemoCheckId").DataTable().destroy();
        $("#finishBtn").prop("disabled", true);
        this.manualCashmemoCheckDataList = [];
        this.dtTriggerManualCashmemoCheck.next();
        this.modelStation = '';
        this.getPrintData = '';
        this.setStation = [];
        this.cashmemoDtoForPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        localStorage.clear();
        this.viewManualCashmemoCheckPrintPopUp = false;
    };
    ManualCashmemoCheckComponent.prototype.checkBtn = function (manualCashmemoCheckPrintPopUpTemplate) {
        this.getCollectionCheckPrintOut("NotAll", true, manualCashmemoCheckPrintPopUpTemplate);
    };
    ManualCashmemoCheckComponent.prototype.checkAllBtn = function (manualCashmemoCheckPrintPopUpTemplate) {
        this.getCollectionCheckPrintOut("All", true, manualCashmemoCheckPrintPopUpTemplate);
    };
    ManualCashmemoCheckComponent.prototype.unCheckBtn = function (manualCashmemoCheckPrintPopUpTemplate) {
        this.getCollectionCheckPrintOut("NotAll", false, manualCashmemoCheckPrintPopUpTemplate);
    };
    ManualCashmemoCheckComponent.prototype.unCheckAllBtn = function (manualCashmemoCheckPrintPopUpTemplate) {
        this.getCollectionCheckPrintOut("All", false, manualCashmemoCheckPrintPopUpTemplate);
    };
    ManualCashmemoCheckComponent.prototype.getCollectionCheckPrintOut = function (mode, memoChk, manualCashmemoCheckPrintPopUpTemplate) {
        this.selectionStation = $("#station").val();
        this.setStation = [];
        for (var i = 0; i < this.stationOptions.length; i++) {
            this.setStation.push(this.stationOptions[i].destination);
        }
        console.log(this.setStation);
        this.cashmemoDtoForPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_10__["CashMemoDto"]();
        this.cashmemoDtoForPrint.mode = mode;
        this.cashmemoDtoForPrint.destination = this.selectionStation;
        this.cashmemoDtoForPrint.status = "collection";
        this.cashmemoDtoForPrint.column1 = "pending";
        this.cashmemoDtoForPrint.memoCheck = memoChk;
        this.cashmemoDtoForPrint.list = this.setStation;
        this.cashmemoDtoForPrint.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.cashmemoDtoForPrint);
        this.getCollectionCheckPrintOutDetails(manualCashmemoCheckPrintPopUpTemplate);
    };
    ManualCashmemoCheckComponent.prototype.closeManualCashmemoCheckPrintPopUp = function () {
        this.manualCashmemoCheckPrintPopUp.close();
    };
    ManualCashmemoCheckComponent.prototype.getDismissReason = function (reason) {
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
    ], ManualCashmemoCheckComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('manualCashmemoCheckPrintPopUpTemplate'),
        __metadata("design:type", Object)
    ], ManualCashmemoCheckComponent.prototype, "manualCashmemoCheckPrintPopUpTemplate", void 0);
    ManualCashmemoCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-cashmemo-check',
            template: __webpack_require__(/*! ./manual-cashmemo-check.component.html */ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.html"),
            styles: [__webpack_require__(/*! ./manual-cashmemo-check.component.css */ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_14__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], ManualCashmemoCheckComponent);
    return ManualCashmemoCheckComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/transfer-cashmemo.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/transfer-cashmemo.module.ts ***!
  \************************************************************************/
/*! exports provided: TransferCashmemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferCashmemoModule", function() { return TransferCashmemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_transfer_cashmemo_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/transfer-cashmemo.routing */ "./src/app/cashmemo/transfer-cashmemo/transfer-cashmemo.routing.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_billing_to_srd_collection_stock_billing_to_srd_collection_stock_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component */ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_transfer_to_collection_transfer_to_collection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component */ "./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_cashmemo_transfer_cashmemo_transfer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component */ "./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_manual_cashmemo_check_manual_cashmemo_check_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component */ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_collection_man_cashmemo_stock_check_collection_man_cashmemo_stock_check_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component */ "./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_collection_man_stock_transfer_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component */ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_collection_man_to_collection_man_stock_transfer_collection_man_to_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component */ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_manual_cashmemo_check_and_collectionman_stock_check_print_manual_cashmemo_check_and_collectionman_stock_check_print_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component */ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_collectionman_stocks_print_collectionman_stocks_print_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component */ "./src/app/cashmemo/transfer-cashmemo/collectionman-stocks-print/collectionman-stocks-print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//for select option search starts




//for select option search ends












var TransferCashmemoModule = /** @class */ (function () {
    function TransferCashmemoModule() {
    }
    TransferCashmemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_cashmemo_transfer_cashmemo_transfer_cashmemo_routing__WEBPACK_IMPORTED_MODULE_10__["TransferCashmemoRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_19__["DragulaModule"]],
            declarations: [
                src_app_cashmemo_transfer_cashmemo_billing_to_srd_collection_stock_billing_to_srd_collection_stock_component__WEBPACK_IMPORTED_MODULE_11__["BillingToSrdCollectionStockComponent"],
                src_app_cashmemo_transfer_cashmemo_transfer_to_collection_transfer_to_collection_component__WEBPACK_IMPORTED_MODULE_12__["TransferToCollectionComponent"],
                src_app_cashmemo_transfer_cashmemo_cashmemo_transfer_cashmemo_transfer_component__WEBPACK_IMPORTED_MODULE_13__["CashmemoTransferComponent"],
                src_app_cashmemo_transfer_cashmemo_manual_cashmemo_check_manual_cashmemo_check_component__WEBPACK_IMPORTED_MODULE_14__["ManualCashmemoCheckComponent"],
                src_app_cashmemo_transfer_cashmemo_collection_man_cashmemo_stock_check_collection_man_cashmemo_stock_check_component__WEBPACK_IMPORTED_MODULE_15__["CollectionManCashmemoStockCheckComponent"],
                src_app_cashmemo_transfer_cashmemo_collection_man_stock_transfer_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_16__["CollectionManStockTransferComponent"],
                src_app_cashmemo_transfer_cashmemo_collection_man_stock_transfer_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_16__["CollectionManStockTransferPopupComponent"],
                src_app_cashmemo_transfer_cashmemo_collection_man_to_collection_man_stock_transfer_collection_man_to_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_17__["CollectionManToCollectionManStockTransferComponent"],
                src_app_cashmemo_transfer_cashmemo_collection_man_to_collection_man_stock_transfer_collection_man_to_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_17__["CollectionManToCollectionManStockTransferPopupComponent"],
                src_app_cashmemo_transfer_cashmemo_billing_to_srd_collection_stock_billing_to_srd_collection_stock_component__WEBPACK_IMPORTED_MODULE_11__["BillingToSrdCollectionStockPopupComponent"],
                src_app_cashmemo_transfer_cashmemo_manual_cashmemo_check_and_collectionman_stock_check_print_manual_cashmemo_check_and_collectionman_stock_check_print_component__WEBPACK_IMPORTED_MODULE_18__["ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent"],
                src_app_cashmemo_transfer_cashmemo_collectionman_stocks_print_collectionman_stocks_print_component__WEBPACK_IMPORTED_MODULE_21__["CollectionManStocksPrintComponent"]
            ],
            entryComponents: [src_app_cashmemo_transfer_cashmemo_billing_to_srd_collection_stock_billing_to_srd_collection_stock_component__WEBPACK_IMPORTED_MODULE_11__["BillingToSrdCollectionStockComponent"], src_app_cashmemo_transfer_cashmemo_billing_to_srd_collection_stock_billing_to_srd_collection_stock_component__WEBPACK_IMPORTED_MODULE_11__["BillingToSrdCollectionStockPopupComponent"], src_app_cashmemo_transfer_cashmemo_collection_man_stock_transfer_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_16__["CollectionManStockTransferComponent"], src_app_cashmemo_transfer_cashmemo_collection_man_stock_transfer_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_16__["CollectionManStockTransferPopupComponent"], src_app_cashmemo_transfer_cashmemo_collection_man_to_collection_man_stock_transfer_collection_man_to_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_17__["CollectionManToCollectionManStockTransferPopupComponent"]],
        })
    ], TransferCashmemoModule);
    return TransferCashmemoModule;
}());



/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/transfer-cashmemo.routing.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/transfer-cashmemo.routing.ts ***!
  \*************************************************************************/
/*! exports provided: TransferCashmemoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferCashmemoRoutes", function() { return TransferCashmemoRoutes; });
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_billing_to_srd_collection_stock_billing_to_srd_collection_stock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component */ "./src/app/cashmemo/transfer-cashmemo/billing-to-srd-collection-stock/billing-to-srd-collection-stock.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_transfer_to_collection_transfer_to_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component */ "./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_cashmemo_transfer_cashmemo_transfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component */ "./src/app/cashmemo/transfer-cashmemo/cashmemo-transfer/cashmemo-transfer.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_manual_cashmemo_check_manual_cashmemo_check_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component */ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check/manual-cashmemo-check.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_collection_man_cashmemo_stock_check_collection_man_cashmemo_stock_check_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component */ "./src/app/cashmemo/transfer-cashmemo/collection-man-cashmemo-stock-check/collection-man-cashmemo-stock-check.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_collection_man_stock_transfer_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component */ "./src/app/cashmemo/transfer-cashmemo/collection-man-stock-transfer/collection-man-stock-transfer.component.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_collection_man_to_collection_man_stock_transfer_collection_man_to_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component */ "./src/app/cashmemo/transfer-cashmemo/collection-man-to-collection-man-stock-transfer/collection-man-to-collection-man-stock-transfer.component.ts");







var TransferCashmemoRoutes = [
    {
        path: '',
        children: [
            {
                path: 'billingToSrdCollectionStock',
                component: src_app_cashmemo_transfer_cashmemo_billing_to_srd_collection_stock_billing_to_srd_collection_stock_component__WEBPACK_IMPORTED_MODULE_0__["BillingToSrdCollectionStockComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'transferToCollection',
                component: src_app_cashmemo_transfer_cashmemo_transfer_to_collection_transfer_to_collection_component__WEBPACK_IMPORTED_MODULE_1__["TransferToCollectionComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'manualCashmemoCheck',
                component: src_app_cashmemo_transfer_cashmemo_manual_cashmemo_check_manual_cashmemo_check_component__WEBPACK_IMPORTED_MODULE_3__["ManualCashmemoCheckComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'cashmemoTransfer',
                component: src_app_cashmemo_transfer_cashmemo_cashmemo_transfer_cashmemo_transfer_component__WEBPACK_IMPORTED_MODULE_2__["CashmemoTransferComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'collectionManCashmemoStockCheck',
                component: src_app_cashmemo_transfer_cashmemo_collection_man_cashmemo_stock_check_collection_man_cashmemo_stock_check_component__WEBPACK_IMPORTED_MODULE_4__["CollectionManCashmemoStockCheckComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'collectionManStockTransfer',
                component: src_app_cashmemo_transfer_cashmemo_collection_man_stock_transfer_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_5__["CollectionManStockTransferComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'collectionManToCollectionManStockTransfer',
                component: src_app_cashmemo_transfer_cashmemo_collection_man_to_collection_man_stock_transfer_collection_man_to_collection_man_stock_transfer_component__WEBPACK_IMPORTED_MODULE_6__["CollectionManToCollectionManStockTransferComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: '**',
                redirectTo: '',
                data: {
                    title: 'SRD Surface Application',
                }
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media ( max-width :767px) {\n\t.margin_bt {\n\t\tmargin-top: 10px;\n\t}\n}\n\n@media ( min-width :768px) {\n\t.margin_bt {\n\t\tmargin-top: 170px;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vdHJhbnNmZXItdG8tY29sbGVjdGlvbi90cmFuc2Zlci10by1jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQjtDQUNEOztBQUVEO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEI7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2Nhc2htZW1vL3RyYW5zZmVyLWNhc2htZW1vL3RyYW5zZmVyLXRvLWNvbGxlY3Rpb24vdHJhbnNmZXItdG8tY29sbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhICggbWF4LXdpZHRoIDo3NjdweCkge1xuXHQubWFyZ2luX2J0IHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHR9XG59XG5cbkBtZWRpYSAoIG1pbi13aWR0aCA6NzY4cHgpIHtcblx0Lm1hcmdpbl9idCB7XG5cdFx0bWFyZ2luLXRvcDogMTcwcHg7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Transfer To Collection</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"memoTypeView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Transfer Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\t\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"transferType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Transfer Type</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manualCashMemo\">Manual Cash Memo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paymentCashMemo\">Payment Cash\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMemo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Staion</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #station id=\"station\" name=\"station\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Station\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"stationSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"getMemoCode($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"scan\">Scan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"codeForManual\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#codeForManual aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"cashMemoManual\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForManual($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"scanView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cashMemoAutomatic\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForAutomatic($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#cashMemoAutomatic aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7 vl p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Transfer To Collection</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"transferToCollectionId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTransferToCollection\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTransferToCollection\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cash Memo</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let transferToCollectionData of transferToCollectionDataList; let i = index \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transferToCollectionData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transferToCollectionData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transferToCollectionData.totalArticles\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transferToCollectionData.consigneeName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transferToCollectionData.consignor }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transferToCollectionData.amount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ transferToCollectionData.collectionMan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeleteForTable(transferToCollectionData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total :\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{countOfLr}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotArt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotAmt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 margin_bt\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"transferBtn\"(click)=\"transferBtnValidation();\">Transfer</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TransferToCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferToCollectionComponent", function() { return TransferToCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
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
















var TransferToCollectionComponent = /** @class */ (function () {
    function TransferToCollectionComponent(transferToCollectionScreen, router, memoService, masterReadService, memoReport, datePipe) {
        var _this = this;
        this.transferToCollectionScreen = transferToCollectionScreen;
        this.router = router;
        this.memoService = memoService;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.datePipe = datePipe;
        //    gettingDataFrmServiceFrTransferToCollectionTable: any;
        this.transferToCollectionDataList = [];
        //    onDestroyUnsubscribtionTransferToCollection: Subscription;
        this.loadingIndicator = true;
        //stationOptions: LRDto[];
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForTable = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.chkCashDtoTransfer = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_12__["CashMemoDto"]();
        this.searchCashmemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_12__["CashMemoDto"]();
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_9__["UserDataDto"]();
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_9__["UserDataDto"]();
        this.isTransferBlockForNonDeliveryLrs = false;
        this.blockRights = "TransToColl isTransferBlockForNonDeliveryLrs";
        this.memoTypeRights = "TransToColl ShowMemoTypeView";
        this.manualView = true;
        this.scanView = false;
        this.memoTypeView = false;
        this.isLoggedIn = true;
        this.memoNum = null;
        this.newAttribute = {};
        this.controlStation = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.showSpinnerForAction = false;
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.countOfLr = 0;
        this.sumOfTotAmt = 0;
        this.sumOfTotArt = 0;
        this.dtTriggerTransferToCollection = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.listOfMemoNumber = [];
        this.transferToGodownDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_12__["CashMemoDto"]();
        this.stationTA = [];
        this.focusStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.stationSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_14__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_15__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.stationTA
                : _this.stationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterStation = function (x) { return x.destination; };
        this.getStationDtails = function () {
            _this.getStationInfo();
            _this.masterReadService.getDestinationForLREntryService(_this.lrDtoForStation).subscribe(function (response) {
                if (response) {
                    _this.stationOptions = response;
                    _this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
                    _this.stationTA = [];
                    //                    console.log(this.stationOptions.length);
                    for (var i = 0; i < _this.stationOptions.length; i++) {
                        _this.stationTA.push(_this.stationOptions[i]);
                    }
                    console.log(_this.stationTA, _this.stationOptions);
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Station Details", "info");
            }, function () { return console.log('done'); };
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
            //   this.getMemoCode();
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.getStationDtails();
            //need comment this 
            /*   if ( this.blockRights == "TransToColl isTransferBlockForNonDeliveryLrs" ) {
                   this.isTransferBlockForNonDeliveryLrs = true;
               }
               if ( this.memoTypeRights == "TransToColl ShowMemoTypeView" ) {
                   this.memoTypeView = true;
               }*/
            //rights not added anywhere (local,live)
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "TransToColl isTransferBlockForNonDeliveryLrs") {
                        this.isTransferBlockForNonDeliveryLrs = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "TransToColl ShowMemoTypeView") {
                        this.memoTypeView = true;
                    }
                }
            }
        }
    }
    TransferToCollectionComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TransferToCollectionComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var mainStation = this.userDataDtoReturnSession.mainStation;
        var todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        var dateformate = moment__WEBPACK_IMPORTED_MODULE_17__(todayDate).format('DD-MM-YYYY');
        this.dtOptionsTransferToCollection = {
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
                        columns: [0, 1, 2, 3, 4, 5, 6]
                    },
                    messageTop: function () {
                        var returnVal = null;
                        returnVal = "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 25%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Date&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + dateformate + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='1'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:17px;'><u> Cash Memo Transfer</u></strong><br>" +
                            "</td>" +
                            "<td align='left' style='width:35%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:13px;'></strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:13px;'></strong>" +
                            "</td>" +
                            "<td width='32%' style='text-align:left !important;'>" +
                            "<span style='font-size:13px;'></span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
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
                }
            ],
            //place holder in search/filter in datatable starts
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
                var totalAmt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalArt = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html(totalArt);
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html(totalAmt);
                $(api.column(6).footer()).html();
                $(api.column(7).footer()).html();
            }
        };
    };
    TransferToCollectionComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTransferToCollection.unsubscribe();
    };
    TransferToCollectionComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerTransferToCollection.next();
    };
    TransferToCollectionComponent.prototype.entryTypeMode = function (entryType) {
        if (entryType === 'manual') {
            this.manualView = true;
            this.scanView = false;
        }
        else if (entryType === 'scan') {
            this.manualView = false;
            this.scanView = true;
        }
        else {
            this.manualView = false;
            this.scanView = false;
        }
    };
    TransferToCollectionComponent.prototype.getStationInfo = function () {
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForStation.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDtoForStation.mode = "ALL";
    };
    TransferToCollectionComponent.prototype.getMemoCode = function (e) {
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_9__["UserDataDto"]();
        this.modelStation = e.item;
        this.userDtoMemoCode.companyId = this.userDataDtoReturnSession.companyId;
        this.stationForCode = this.modelStation.destination;
        this.userDtoMemoCode.office = this.stationForCode;
        console.log(this.userDtoMemoCode);
        this.getDetailsForMemoCode();
    };
    TransferToCollectionComponent.prototype.getDetailsForMemoCode = function () {
        var _this = this;
        this.masterReadService.getStationCodeService(this.userDtoMemoCode).subscribe(function (response) {
            if (response.length != 0) {
                _this.selectedEntryType = $("#entryType").val();
                if (_this.selectedEntryType == "scan") {
                    _this.scanView = true;
                    $("#cashMemoAutomatic").focus();
                }
                else {
                    _this.stationCodeDetails = response;
                    if (_this.stationCodeDetails.stationCode == null) {
                        $("#codeForManual").val('');
                        //                            console.log( this.stationCodeDetails.stationCode );
                    }
                    else {
                        //                            console.log( this.stationCodeDetails.stationCode );
                        _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                        //                            console.log( "Memo>>> " + this.memoFormat );
                        $("#codeForManual").val(_this.memoFormat);
                        $("#cashMemoManual").val('');
                        $("#cashMemoAutomatic").val('');
                        $("#lrNumber").val('');
                        $("#memoAmount").val('');
                        $("#cashMemoManual").focus();
                    }
                }
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Server Error",
            text: "While Getting Station",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    TransferToCollectionComponent.prototype.getFocusMethod = function () {
        this.selectedEntryType = $("#entryType").val();
        $("#cashMemoManual").val('');
        $("#cashMemoAutomatic").val('');
        if (this.selectedEntryType == "scan") {
            window.setTimeout(function () {
                $("#cashMemoAutomatic").focus();
            }, 100);
        }
        else {
            window.setTimeout(function () {
                $("#cashMemoManual").focus();
            }, 100);
        }
    };
    //////////////////
    TransferToCollectionComponent.prototype.getMemoNumberForManual = function (e) {
        if (e.keyCode == 13) {
            this.selectedMemoNumberForManual = $("#cashMemoManual").val();
            if (this.selectedMemoNumberForManual != null && this.selectedMemoNumberForManual != '') {
                if (this.memoTypeView == true) {
                    this.selectedTransferType = $("#transferType").val();
                    if (this.selectedTransferType == null || this.selectedTransferType == '') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                            title: "Empty Data",
                            text: "Please select Transfer Type",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default.a.close();
                            window.setTimeout(function () {
                                $("#transferType").focus();
                            }, 100);
                            return false;
                        });
                    }
                    else {
                        this.getMethodForGridReConfigure();
                    }
                }
                else {
                    this.getMethodForGridReConfigure();
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Warning",
                    text: "Memo Number Empty",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default.a.close();
                    window.setTimeout(function () {
                        $("#cashMemoManual").focus();
                    }, 100);
                    return false;
                });
            }
        }
    };
    TransferToCollectionComponent.prototype.getMemoNumberForAutomatic = function (e) {
        /*  setTimeout(() => {
              this.showforAutomatic();
          },
              500 );*/
        if (e.keyCode == 13) {
            this.selectedMemoNumberForAutomatic = $("#cashMemoAutomatic").val();
            if (this.selectedMemoNumberForAutomatic != null && this.selectedMemoNumberForAutomatic != '') {
                this.getMethodForGridReConfigure();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Warning",
                    text: "Memo Number Empty",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default.a.close();
                    window.setTimeout(function () {
                        $("#cashMemoAutomatic").focus();
                    }, 100);
                    return false;
                });
            }
        }
    };
    /* showforAutomatic() {
           this.selectedMemoNumberForAutomatic = $( "#cashMemoAutomatic" ).val();
           if ( this.selectedMemoNumberForAutomatic != null && this.selectedMemoNumberForAutomatic != '' ) {
               this.getMethodForGridReConfigure();
           }else{
               swal({
                       title: "Warning",
                       text: "Memo Number Empty",
                       icon: "error",
                       closeOnClickOutside: false,
                       closeOnEsc: false,
                   }).then(() => {
                       swal.close();
                        window.setTimeout(function () {
                            $( "#cashMemoAutomatic" ).focus();
                       }, 100);
                    return false;
                   });
           }
       }*/
    TransferToCollectionComponent.prototype.getMethodForGridReConfigure = function () {
        this.memoNum = '';
        this.selectedStation = $("#station").val();
        this.selectedEntryType = $("#entryType").val();
        this.selectedCodeForManual = $("#codeForManual").val();
        this.selectedMemoNumberForManual = $("#cashMemoManual").val();
        this.selectedMemoNumberForAutomatic = $("#cashMemoAutomatic").val();
        if (this.selectedEntryType == 'scan') {
            this.memoNum = this.selectedMemoNumberForAutomatic;
        }
        else {
            this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
        }
        this.searchCashmemoNumber = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_12__["CashMemoDto"]();
        this.searchCashmemoNumber.station = this.selectedStation;
        this.searchCashmemoNumber.memoNumber = this.memoNum;
        this.gridReconfigure();
        this.showSpinnerForAction = true;
    };
    TransferToCollectionComponent.prototype.gridReconfigure = function () {
        var _this = this;
        this.memoReport.getSingleCashMemo(this.searchCashmemoNumber).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            _this.transferToCollectionDataListPush = response;
            _this.chkCashDtoTransfer = _this.transferToCollectionDataListPush;
            console.log(_this.chkCashDtoTransfer);
            if (_this.chkCashDtoTransfer.size == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "LR Not Found",
                    text: "CashMemo " + _this.memoNum + " not found!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.getFocusMethod();
                });
            }
            else if (_this.chkCashDtoTransfer.status == "Delivered") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "LR Delivered",
                    text: "CashMemo " + _this.memoNum + " Delivered!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.getFocusMethod();
                });
            }
            else if (_this.chkCashDtoTransfer.memoType == "Cash") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Not Allowed",
                    text: "CashMemo " + _this.memoNum + " type is Cash! Can't Transfer",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.getFocusMethod();
                });
            }
            else if (_this.chkCashDtoTransfer.memoType == "PP") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Not Allowed",
                    text: "CashMemo " + _this.memoNum + " type is PP! Can't Transfer",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.getFocusMethod();
                });
            }
            // only delivered LR will able to move in
            // transfer(Mr.Senthil Req) @Dated : 07/12/2017
            else if (_this.isTransferBlockForNonDeliveryLrs == true) {
                // added the patch to avoid the block of Goods
                // Return LRs in
                // Transfer to Collection, Goods return Lrs should
                // allow in
                // transfer to collection @Dated : 19/12/2017
                if (_this.chkCashDtoTransfer.goodsReturnStatus == null || _this.chkCashDtoTransfer.goodsReturnStatus != "Goods Return") {
                    if (_this.chkCashDtoTransfer.lrStatus != "Delivered") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                            title: "Not Allowed",
                            text: "CashMemo " + _this.memoNum + " not yet Deliver!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.getFocusMethod();
                        });
                    }
                    else {
                        _this.memoCheckCallAllow(_this.chkCashDtoTransfer);
                    }
                }
                else {
                    _this.memoCheckCallAllow(_this.chkCashDtoTransfer);
                }
            }
            else {
                _this.memoCheckCallAllow(_this.chkCashDtoTransfer);
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Error",
            text: "Server Error While Getting Memo Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    TransferToCollectionComponent.prototype.memoCheckCallAllow = function (chkCashDtoTransfer) {
        var _this = this;
        if (this.transferToCollectionDataList.length > 0) {
            var checkMemoNumberInTable = this.transferToCollectionDataList.find(function (transferToCollectionData) { return transferToCollectionData.memoNumber === _this.memoNum; });
            console.log(checkMemoNumberInTable);
            if (checkMemoNumberInTable == undefined) {
                this.addInTable();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Duplicate CashMemo",
                    text: "CashMemo " + this.memoNum + " already moved to transfer!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default.a.close();
                    _this.getFocusMethod();
                });
            }
        }
        else {
            console.log('5');
            this.getFocusMethod();
            this.addInTable();
        }
    };
    TransferToCollectionComponent.prototype.addInTable = function () {
        console.log('8');
        this.newAttribute.memoNumber = this.chkCashDtoTransfer.memoNumber;
        this.newAttribute.lrNumber = this.chkCashDtoTransfer.lrNumber;
        this.newAttribute.totalArticles = this.chkCashDtoTransfer.totalArticles;
        this.newAttribute.consigneeName = this.chkCashDtoTransfer.consigneeName;
        this.newAttribute.consignor = this.chkCashDtoTransfer.consignor;
        this.newAttribute.amount = this.chkCashDtoTransfer.amount;
        this.newAttribute.collectionMan = this.chkCashDtoTransfer.collectionMan;
        $("#transferToCollectionId").DataTable().destroy();
        if (this.transferToCollectionDataList == null) {
            this.transferToCollectionDataList = [];
        }
        if (this.transferToCollectionDataList.length == 0) {
            this.transferToCollectionDataList.push(this.newAttribute);
        }
        else {
            this.transferToCollectionDataList.push(this.newAttribute);
        }
        this.dtTriggerTransferToCollection.next();
        // console.log( this.transferToCollectionDataList );
        this.countOfLr = +this.countOfLr + 1;
        this.sumOfTotAmt = +this.sumOfTotAmt + +this.newAttribute.amount;
        this.sumOfTotArt = +this.sumOfTotArt + +this.newAttribute.totalArticles;
        this.newAttribute = {};
        $("#cashMemoManual").val('');
        $("#cashMemoAutomatic").val('');
    };
    TransferToCollectionComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    TransferToCollectionComponent.prototype.transferBtnValidation = function () {
        var _this = this;
        if (this.transferToCollectionDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Not Record",
                text: "No memos to transfer!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default.a.close();
                _this.getFocusMethod();
            });
        }
        else {
            this.officeToTrans = '';
            /*if (this.userDataDtoReturnSession.office=='Binnymills') {
            //As of now user only konditope
            //As per asrar bhai
            //	this.officeToTrans = "Konditope";
                this.officeToTrans = this.userDataDtoReturnSession.office;
            }*/
            this.officeToTrans = this.selectedStation;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Validation",
                text: "Sure U Want to Transfer the Selected CashMemos To " + this.officeToTrans,
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (transfer) {
                if (transfer) {
                    _this.getTransferMemoDetails();
                }
                else {
                }
            });
        }
    };
    TransferToCollectionComponent.prototype.getTransferMemoDetails = function () {
        this.selectedStation = $("#station").val();
        this.transferToGodownDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_12__["CashMemoDto"]();
        if (this.memoTypeView == true) {
            this.selectedTransferType = $("#transferType").val();
            if (this.selectedTransferType == null || this.selectedTransferType == '') {
                this.transferToGodownDto.memoType = null;
            }
            else {
                this.transferToGodownDto.memoType = this.selectedTransferType;
            }
        }
        else {
            this.transferToGodownDto.memoType = null;
        }
        this.listOfMemoNumber = [];
        for (var i = 0; i < this.transferToCollectionDataList.length; i++) {
            this.listOfMemoNumber.push(this.transferToCollectionDataList[i].memoNumber);
        }
        this.transferToGodownDto.status = 'transferToGodown';
        this.transferToGodownDto.station = this.userDataDtoReturnSession.office;
        this.transferToGodownDto.office = this.userDataDtoReturnSession.office;
        this.transferToGodownDto.stationType = this.userDataDtoReturnSession.officeType;
        this.transferToGodownDto.userName = this.userDataDtoReturnSession.userId;
        this.transferToGodownDto.mainStation = this.userDataDtoReturnSession.mainStation;
        //As per Asrar bhai Instructions
        //this.transferToGodownDto.godown='Konditope';
        this.transferToGodownDto.godown = this.selectedStation;
        //
        this.transferToGodownDto.companyId = this.userDataDtoReturnSession.companyId;
        this.transferToGodownDto.list = this.listOfMemoNumber;
        this.getTransferMemoInfo();
        console.log(this.transferToGodownDto);
        this.showSpinnerForAction = true;
    };
    TransferToCollectionComponent.prototype.getTransferMemoInfo = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.memoReport.transferToGodownLrs(this.transferToGodownDto).subscribe(function (response) {
            console.log(response);
            _this.showSpinnerForAction = false;
            if (response.status == 'Success') {
                /* swal( {
            title: "Validation",
            text: "Are U Sure U want to Print",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        } ).then(( print ) => {
            if ( print ) {
            //Print Pending
                //this.getTransferMemoDetails();
            $("#transferToCollectionId").DataTable().destroy();
            this.transferToCollectionDataList = [];
            this.dtTriggerTransferToCollection.next();
            $( "#cashMemoManual" ).val('');
            $( "#cashMemoAutomatic" ).val('');
            } else {
                
            }
               } );*/
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Success",
                    text: "Memos Transfered Successfully!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default.a.close();
                    _this.getFocusMethod();
                });
                $("#transferToCollectionId").DataTable().destroy();
                _this.transferToCollectionDataList = [];
                _this.dtTriggerTransferToCollection.next();
                $("#cashMemoManual").val('');
                $("#cashMemoAutomatic").val('');
            }
            else if (response.status == 'No Records') {
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Problem Occurred While Error in getting updating memo : ", "info");
        }, function () { return console.log('done'); };
    };
    ;
    TransferToCollectionComponent.prototype.rowSelectedDeleteForTable = function (transferToCollectionData, index) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Confirm Remove",
            text: "Sure you want to remove the selected Row",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (remove) {
            if (remove) {
                _this.transferToCollectionDataList.splice(index, 1);
                $("#transferToCollectionId").DataTable().destroy();
                _this.dtTriggerTransferToCollection.next();
                _this.countOfLr = +_this.countOfLr - 1;
                _this.sumOfTotAmt = +_this.sumOfTotAmt - +_this.newAttribute.amount;
                _this.sumOfTotArt = +_this.sumOfTotArt - +_this.newAttribute.totalArticles;
                _this.newAttribute = {};
                $("#cashMemoManual").val('');
                $("#cashMemoAutomatic").val('');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TransferToCollectionComponent.prototype, "dtElements", void 0);
    TransferToCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer-to-collection',
            template: __webpack_require__(/*! ./transfer-to-collection.component.html */ "./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.html"),
            styles: [__webpack_require__(/*! ./transfer-to-collection.component.css */ "./src/app/cashmemo/transfer-cashmemo/transfer-to-collection/transfer-to-collection.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_6__["MemoService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_16__["MemoReport"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])
    ], TransferToCollectionComponent);
    return TransferToCollectionComponent;
}());



/***/ }),

/***/ "./src/app/dataService/memo-report.ts":
/*!********************************************!*\
  !*** ./src/app/dataService/memo-report.ts ***!
  \********************************************/
/*! exports provided: MemoReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoReport", function() { return MemoReport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemoReport = /** @class */ (function () {
    function MemoReport(http) {
        this.http = http;
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webMemoReport;
    }
    MemoReport.prototype.getMemoLessDetailsReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getMemoLessDetailsRptApi", cashMemoDto);
    };
    MemoReport.prototype.getMemoLessDetailsForSourceWiseReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getMemoLessDetailsSourceWiseRptApi", cashMemoDto);
    };
    MemoReport.prototype.getMemoLessDescriptionDetailsReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getMemoLessDescriptionApi", cashMemoDto);
    };
    MemoReport.prototype.getChequeDetailsReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getChequeDetailsApi", cashMemoDto);
    };
    MemoReport.prototype.getOSCashmemoCollectionDeptReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getOSCashmemoCollectionDeptApi", cashMemoDto);
    };
    MemoReport.prototype.getCashMemoReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCashMemoReportApi", cashMemoDto);
    };
    MemoReport.prototype.getConsolidatedMemoReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getConsolidatedMemoReportApi", cashMemoDto);
    };
    MemoReport.prototype.getConsolidatedMemoReportSourceWise = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getConsolidatedMemoReportSourceWiseApi", cashMemoDto);
    };
    MemoReport.prototype.getConsolidatedMemoReportSourceMainWise = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getConsolidatedMemoReportMainSourceWiseApi", cashMemoDto);
    };
    MemoReport.prototype.getDestinationChequeDetailsReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getDestinationChequeDetailsReportApi", lrDto);
    };
    MemoReport.prototype.updateDestinationChqSentToBankDetailsReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateDestinationChqSentToBankDetailsApi", lrDto);
    };
    MemoReport.prototype.updateDestinationChequeDateDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "//updateDestinationChequeDateApi", lrDto);
    };
    MemoReport.prototype.getCashMemoHistoryDetailsReport = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getCashMemoHistoryDetailsApi", rateMasterDto);
    };
    MemoReport.prototype.getLrdetailsForCashMemoRpt = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrdetailsForCashMemoRptApi", lrDto);
    };
    MemoReport.prototype.getGCNotRecievedDetails = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getGCNotRecievedDetailsApi", cashMemoDto);
    };
    MemoReport.prototype.getCashMemoLetterHeadDtls = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getCashMemoLetterHeadDtlsApi", rateMasterDto);
    };
    MemoReport.prototype.updateCashMemoLetterHead = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/updateCashMemoLetterHeadApi", rateMasterDto);
    };
    MemoReport.prototype.getPartyLessReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getPartyLessReportApi", cashMemoDto);
    };
    MemoReport.prototype.getMemoDiscountDetailsSourceWise = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getMemoDiscountDetailsSourceWiseApi", cashMemoDto);
    };
    MemoReport.prototype.getCommodityMismatchDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getCommodityMismatchDetailsApi", lrDto);
    };
    MemoReport.prototype.getDailyCollectionRptDetails = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getDailyCollectionRptDetailsApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsGCTaken = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsGCTakenApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsLeftToParty = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsLeftToPartyApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsLeftToPartyStmtSummary = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsLeftToPartyStmtSummaryApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsAmtCollected = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsAmtCollectedApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsLeftToPartyPendAckStmt = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsLeftToPartyPendAckStmtApi", cashMemoDto);
    };
    MemoReport.prototype.updateToPartyAckRec = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/updateToPartyAckRecApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsCollectionConsolidatedRpt = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsCollectionConsolidatedRptApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionManWiseOSDetailsSummary = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionManWiseOSDetailsSummaryApi", cashMemoDto);
    };
    MemoReport.prototype.blockCashMemo = function (lrDto) {
        return this.http.post(this._baseUrl + "/blockCashMemoApi", lrDto);
    };
    MemoReport.prototype.getManualCashMemoCheckFirst = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getManualCashMemoCheckFirstApi", cashMemoDto);
    };
    MemoReport.prototype.updateCashMemoCheck = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/updateCashMemoCheckApi", cashMemoDto);
    };
    MemoReport.prototype.updateCMMemoStockCheck = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/updateCMMemoStockCheckApi", cashMemoDto);
    };
    MemoReport.prototype.getManualCashMemoCheckPrintOut = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getManualCashMemoCheckPrintOutApi", cashMemoDto);
    };
    MemoReport.prototype.getSingleCashMemo = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getSingleCashMemoApi", cashMemoDto);
    };
    MemoReport.prototype.transferToGodownLrs = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/transferToGodownLrsApi", cashMemoDto);
    };
    MemoReport = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemoReport);
    return MemoReport;
}());



/***/ }),

/***/ "./src/app/dataService/memo-service.ts":
/*!*********************************************!*\
  !*** ./src/app/dataService/memo-service.ts ***!
  \*********************************************/
/*! exports provided: MemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoService", function() { return MemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemoService = /** @class */ (function () {
    function MemoService(http) {
        this.http = http;
        //for local
        //        private _baseUrl = "http://localhost:8080/srd/memo/v1";
        //For QA
        //    private _baseUrl = "http://54.210.51.40:8080/srd/memo/v1";
        //For Live
        //        private _baseUrl = "http://3.222.201.242:8080/srd/memo/v1";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webMemo;
    }
    //        getBookingStationsService( lrDto: Object ): Observable<LRDto[]> {
    //            return this.http.post<LRDto[]>( `${this._baseUrl}/getBookingStationsDetails`, lrDto );
    //        }
    MemoService.prototype.getMemoDetailService = function (cashMemoDto) {
        //        console.log( cashMemoDto );
        return this.http.post(this._baseUrl + "/getMemoDetail", cashMemoDto);
    };
    MemoService.prototype.updateMemoDetailService = function (userDataDto) {
        //        console.log( userDataDto );
        return this.http.post(this._baseUrl + "/updateMemoDetail", userDataDto);
    };
    MemoService.prototype.chkRemCashMemoService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/chkRemCashMemoServiceDetail", userDataDto);
    };
    MemoService.prototype.updateMemoAllService = function (userDataDto) {
        //        console.log( userDataDto );
        return this.http.post(this._baseUrl + "/updateMemoAllDetail", userDataDto);
    };
    MemoService.prototype.getCashMemoUnAssgDetailService = function (userDataDto) {
        //        console.log( userDataDto );
        return this.http.post(this._baseUrl + "/getCashMemoUnAssgDetail", userDataDto);
    };
    MemoService.prototype.transferToGodownLrsService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/transferToGodownLrsDetail", userDataDto);
    };
    MemoService.prototype.getSingleMemoDetailService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getSingleMemoDetail", lrDto);
    };
    MemoService.prototype.createDummyCashMemoService = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/createDummyCashMemo", rateMasterDto);
    };
    MemoService.prototype.chkLrInCpService = function (lrDto) {
        return this.http.post(this._baseUrl + "/chkLrInCpDetail", lrDto);
    };
    MemoService.prototype.getLrDetailsForCashMemoService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrDetailsForCashMemo", lrDto);
    };
    MemoService.prototype.createNewPartyBankMasterService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/createNewPartyBankMasterDetail", userDataDto);
    };
    MemoService.prototype.createDeliveryAreaService = function (lrDto) {
        return this.http.post(this._baseUrl + "/createDeliveryArea", lrDto);
    };
    MemoService.prototype.createCashMemoService = function (rateMasterDto) {
        //        console.log( rateMasterDto );
        return this.http.post(this._baseUrl + "/createCashMemo", rateMasterDto);
    };
    MemoService.prototype.createNewCollectionManService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/createNewCollectionManDetails", userDataDto);
    };
    MemoService.prototype.updateCommodityDtlsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateCommodityDtls", lrDto);
    };
    MemoService.prototype.setCashMemoLaserPrintService = function (rateMasterDto) {
        // console.log(rateMasterDto);
        return this.http.post(this._baseUrl + "/setCashMemoLaserPrint", rateMasterDto);
    };
    MemoService.prototype.updateEnableBankLrDestMemoService = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateEnableBankLrDestMemo", lrDto);
    };
    MemoService.prototype.updateEnableSelfLrDestMemoService = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateEnableSelfLrDestMemo", lrDto);
    };
    MemoService.prototype.updateEnableBlockedLrDestMemoService = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateEnableBlockedLrDestMemo", lrDto);
    };
    MemoService.prototype.getSRDToColManRptForPrintService = function (cashMemoDto) {
        //        console.log( cashMemoDto );
        return this.http.post(this._baseUrl + "/getSRDToColManRptForPrint", cashMemoDto);
    };
    MemoService.prototype.getCashMemoBkgDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getcashmemobkgdetails", lrDto);
    };
    MemoService.prototype.updatedBkgCashMemo = function (lrDto) {
        return this.http.post(this._baseUrl + "/updatedbkgcashmemo", lrDto);
    };
    MemoService.prototype.editCashmemoDetailsService = function (rateMasterDto) {
        //        console.log( rateMasterDto );
        return this.http.post(this._baseUrl + "/editCashmemoDetails", rateMasterDto);
    };
    MemoService.prototype.deleteCashMemoService = function (lrDto) {
        //        console.log( lrDto );
        return this.http.post(this._baseUrl + "/deleteCashMemo", lrDto);
    };
    MemoService.prototype.getCollectionManDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getcollectionmandetails", userDataDto);
    };
    MemoService.prototype.updateCloseCollectionService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/updateclosecollection", userDataDto);
    };
    MemoService.prototype.getGroupStationOfLRNumber = function (lrDto) {
        return this.http.post(this._baseUrl + "/getgroupstationoflrnumber", lrDto);
    };
    MemoService.prototype.getTotalMemoLessAmount = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getTotalMemoLessAmount", cashMemoDto);
    };
    MemoService.prototype.getMemoLessDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getMemoLessDetails", userDataDto);
    };
    MemoService.prototype.addPartyBankMasterDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/addPartyBankMasterDetails", userDataDto);
    };
    MemoService.prototype.updateCashMemoLessDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/updateCashMemoLessDetails", userDataDto);
    };
    MemoService.prototype.updateCashMemoCompleteDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/updateCashMemoCompleteDetails", userDataDto);
    };
    MemoService.prototype.getDifferentMemoLessDetailsBasedOnLessDesc = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getDifferentMemoLessDetailsBasedOnLessDesc", userDataDto);
    };
    MemoService.prototype.validateChqNumberWithBank = function (lrDto) {
        return this.http.post(this._baseUrl + "/validateChqNumberWithBank", lrDto);
    };
    MemoService.prototype.getTPStmtPendingDetailsValidationCheck = function (cashMemoDto) {
        //        console.log( cashMemoDto );
        return this.http.post(this._baseUrl + "/getTPStmtPendingDetailsValidationCheck", cashMemoDto);
    };
    MemoService.prototype.getConsigneeWiseBalanceDet = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getConsigneeWiseBalanceDet", cashMemoDto);
    };
    MemoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemoService);
    return MemoService;
}());



/***/ }),

/***/ "./src/app/dto/CashMemo-dto.ts":
/*!*************************************!*\
  !*** ./src/app/dto/CashMemo-dto.ts ***!
  \*************************************/
/*! exports provided: CashMemoDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashMemoDto", function() { return CashMemoDto; });
var CashMemoDto = /** @class */ (function () {
    function CashMemoDto() {
        this.cashMemoDtoForCustomPrintListColumnValues = [];
    }
    return CashMemoDto;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-cashmemo-transfer-cashmemo-transfer-cashmemo-module.js.map