(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-cashmemo-cashmemo-module~src-app-dashboards-dashboard-module~src-app-report-cashmemo~24d2fb5c"],{

/***/ "./src/app/cashmemo/cashmemo-block/cashmemo-block.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/cashmemo/cashmemo-block/cashmemo-block.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2htZW1vL2Nhc2htZW1vLWJsb2NrL2Nhc2htZW1vLWJsb2NrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cashmemo/cashmemo-block/cashmemo-block.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/cashmemo/cashmemo-block/cashmemo-block.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"isLoggedIn\"> -->\n<!-- \t<h1 class=\"title_custom\" mat-dialog-title> -->\n<!-- \t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Block Lr Value</h6> -->\n<!-- \t</h1> -->\n<!-- \t<div mat-dialog-content style=\"width: 36vw;\"> -->\n<!-- \t\t<div class=\"row\"> -->\n<!-- \t\t\t<div class=\"col-md-12\"> -->\n<!-- \t\t\t\t<div class=\"card\"> -->\n<!-- \t\t\t\t\t<div class=\"card-body\"> -->\n<!-- \t\t\t\t\t\t<div class=\"row\"> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-lg-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<form> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>LR Number :</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<label>Reason:</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"1\"></textarea> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</form> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t</div> -->\n<!-- \t\t\t\t</div> -->\n<!-- \t\t\t</div> -->\n<!-- \t\t</div> -->\n<!-- \t</div> -->\n<!-- \t<div mat-dialog-actions style=\"float: right;\"> -->\n\t\n<!-- \t\t<button #blockBtn type=\"button\" id=\"blockBtn\"class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t>Block</button> -->\n<!-- \t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t#unBlockBtn id=\"unBlockBtn\">Finish</button> -->\n<!-- \t\t<button type=\"button\" class=\"btn btn-outline-dark\" -->\n<!-- \t\t\t(click)=\"onCancelClick()\" #cancelBtn id=\"cancelBtn\">Cancel</button> -->\n<!-- \t</div> -->\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/cashmemo/cashmemo-block/cashmemo-block.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cashmemo/cashmemo-block/cashmemo-block.component.ts ***!
  \*********************************************************************/
/*! exports provided: CashmemoBlockComponent, CashmemoBlockPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashmemoBlockComponent", function() { return CashmemoBlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashmemoBlockPopupComponent", function() { return CashmemoBlockPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
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








var CashmemoBlockComponent = /** @class */ (function () {
    function CashmemoBlockComponent(modalService, dialog, router) {
        var _this = this;
        this.modalService = modalService;
        this.dialog = dialog;
        this.router = router;
        this.isLoggedIn = true;
        {
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
    }
    //for popup modal starts 
    CashmemoBlockComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CashmemoBlockComponent.prototype.getDismissReason = function (reason) {
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
    CashmemoBlockComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CashmemoBlockPopupComponent, {
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //            console.log( 'The dialog was closed' );
            _this.animal = result;
        });
    };
    CashmemoBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        //        this.modalService.open( this.content );
        setTimeout(function () {
            _this.openDialog();
        }, 0);
    };
    CashmemoBlockComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CashmemoBlockComponent.prototype, "content", void 0);
    CashmemoBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cashmemo-block',
            template: __webpack_require__(/*! ./cashmemo-block.component.html */ "./src/app/cashmemo/cashmemo-block/cashmemo-block.component.html"),
            styles: [__webpack_require__(/*! ./cashmemo-block.component.css */ "./src/app/cashmemo/cashmemo-block/cashmemo-block.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CashmemoBlockComponent);
    return CashmemoBlockComponent;
}());

var CashmemoBlockPopupComponent = /** @class */ (function () {
    function CashmemoBlockPopupComponent(
    //for modal starts
    dialogRef, data, 
    //for modal ends
    router, memoReport, masterReadService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.isLoggedIn = true;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_7__["UserDataDto"]();
        this.showBlockBtn = false;
        this.showUnBlockBtn = false;
        this.showBlockUnBlockBtn = 'MemoBlock ShowBlockUnBlockBtn';
        this.lrDtoForBlock = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoForUnBlock = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.showSpinnerForAction = false;
        this.blockMethodDetails = function () {
            _this.showSpinnerForAction = true;
            _this.memoReport.blockCashMemo(_this.lrDtoForBlock).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.status == 'failed') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Failed",
                        text: "Update Failed",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'not found') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "warning",
                        text: "Lr Not Found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'alreadyGenCashmemo') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "warning",
                        text: "Cashmemo is Already Generated For This Lr",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'success') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Success",
                        text: "Update Successfully",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearFields();
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While Updating", "info");
            }, function () { return console.log('done'); };
        };
        this.unBlockMethodDetails = function () {
            _this.showSpinnerForAction = true;
            _this.memoReport.blockCashMemo(_this.lrDtoForUnBlock).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.status == 'failed') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Failed",
                        text: "Update Failed",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'not found') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "warning",
                        text: "Lr Not Found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'alreadyGenCashmemo') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "warning",
                        text: "Cashmemo is Already Generated For This Lr",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'success') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Success",
                        text: "Update Successfully",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearFields();
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While Updating", "info");
            }, function () { return console.log('done'); };
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
            /*if (this.showBlockUnBlockBtn=='MemoBlock ShowBlockUnBlockBtn') {
                 this.showBlockBtn=true;
                this.showUnBlockBtn=true;
                }*/
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "MemoBlock ShowBlockUnBlockBtn") {
                        this.showBlockBtn = true;
                        this.showUnBlockBtn = true;
                    }
                }
            }
        }
    }
    CashmemoBlockPopupComponent.prototype.ngOnInit = function () {
    };
    CashmemoBlockPopupComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    //for modal starts
    CashmemoBlockPopupComponent.prototype.onTransferClick = function () {
        this.dialogRef.close();
    };
    CashmemoBlockPopupComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
        this.clearFields();
    };
    CashmemoBlockPopupComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CashmemoBlockPopupComponent.prototype.blockMethod = function () {
        this.enteredLrNumber = $("#lrNumber").val();
        this.enteredReason = $("#reasonId").val();
        if (this.enteredLrNumber == '' || this.enteredLrNumber == null || this.enteredLrNumber == 'undefine') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Please Enter Lr Number",
                text: "Lr Number Filed should Not be Empty",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                $("#lrNumber").focus();
            });
            return false;
        }
        else {
            this.lrDtoForBlock = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
            this.lrDtoForBlock.lrNumber = this.enteredLrNumber;
            this.lrDtoForBlock.reason = this.enteredReason;
            this.lrDtoForBlock.mode = 'block';
            this.lrDtoForBlock.companyId = this.userDataDtoReturnSession.companyId;
            this.lrDtoForBlock.userName = this.userDataDtoReturnSession.userId;
        }
        console.log(this.lrDtoForBlock);
        this.blockMethodDetails();
    };
    CashmemoBlockPopupComponent.prototype.unBlockMethod = function () {
        this.enteredLrNumber = $("#lrNumber").val();
        this.enteredReason = $("#reasonId").val();
        if (this.enteredLrNumber == '' || this.enteredLrNumber == null || this.enteredLrNumber == 'undefine') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Please Enter Lr Number",
                text: "Lr Number Filed should Not be Empty",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                $("#lrNumber").focus();
            });
            return false;
        }
        else {
            this.lrDtoForUnBlock = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
            this.lrDtoForUnBlock.lrNumber = this.enteredLrNumber;
            this.lrDtoForUnBlock.reason = this.enteredReason;
            this.lrDtoForUnBlock.mode = 'unblock';
            this.lrDtoForUnBlock.companyId = this.userDataDtoReturnSession.companyId;
            this.lrDtoForUnBlock.userName = this.userDataDtoReturnSession.userId;
        }
        console.log(this.lrDtoForUnBlock);
        this.unBlockMethodDetails();
    };
    CashmemoBlockPopupComponent.prototype.clearFields = function () {
        this.enteredLrNumber = '';
        $("#lrNumber").val('');
        this.enteredReason = '';
        $("#reasonId").val('');
        $("#lrNumber").focus();
        this.lrDtoForUnBlock = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoForBlock = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.reasonValue = '';
    };
    CashmemoBlockPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cashmemo-block-popup',
            template: __webpack_require__(/*! ./cashmemo-block.popup.component.html */ "./src/app/cashmemo/cashmemo-block/cashmemo-block.popup.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_3__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"]])
    ], CashmemoBlockPopupComponent);
    return CashmemoBlockPopupComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/cashmemo-block/cashmemo-block.popup.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/cashmemo/cashmemo-block/cashmemo-block.popup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn\" style=\"border-top:1px solid #000;border-right:1px solid #000;border-left:1px solid #000;border-bottom:1px solid #000;\">\n\t<h1 class=\"title_custom\" mat-dialog-title  style=\"border-bottom:1px solid #000;\" >\n\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\" style=\"color: blue;\"><strong>&nbsp;Block Lr Value</strong></h6>\n\t</h1>\n\t<div class=\"row\">\n\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12 p-t-10\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">Please\n\t\t\t\t\t\tWait Updating Lr....</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div mat-dialog-content style=\"width: 36vw;\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\">\n\t\t\t\t\t\t\t\t\t\t<label>LR Number :</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"id=\"lrNumber\" name=\"lrNumber\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\">\n\t\t\t\t\t\t\t\t\t\t<label>Reason:</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"1\"id=\"reasonId\" [(ngModel)]=\"reasonValue\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div mat-dialog-actions style=\"float: right;\">\n\t\n\t\t<button *ngIf=\"showBlockBtn\"type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"blockMethod();\" >Block</button>\n\t\t\t\t<button *ngIf=\"showUnBlockBtn\" type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"unBlockMethod();\" >Un Block</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t(click)=\"onCancelClick()\" #cancelBtn id=\"cancelBtn\">Cancel</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/cashmemo/cashmemo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cashmemo/cashmemo.module.ts ***!
  \*********************************************/
/*! exports provided: CashmemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashmemoModule", function() { return CashmemoModule; });
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
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_cashmemo_cashmemo_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/cashmemo/cashmemo.routing */ "./src/app/cashmemo/cashmemo.routing.ts");
/* harmony import */ var src_app_cashmemo_cashmemo_block_cashmemo_block_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/cashmemo/cashmemo-block/cashmemo-block.component */ "./src/app/cashmemo/cashmemo-block/cashmemo-block.component.ts");
/* harmony import */ var src_app_cashmemo_payment_followup_payment_followup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/cashmemo/payment-followup/payment-followup.component */ "./src/app/cashmemo/payment-followup/payment-followup.component.ts");
/* harmony import */ var src_app_cashmemo_payment_followup_assign_print_payment_followup_assign_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component */ "./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.ts");
/* harmony import */ var src_app_cashmemo_payment_followup_challan_print_payment_followup_challan_print_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component */ "./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*old datatable*/ 


//for select option search starts




//for select option search ends
//for drag and drop starts

//for drag and drop ends






var CashmemoModule = /** @class */ (function () {
    function CashmemoModule() {
    }
    CashmemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_cashmemo_cashmemo_routing__WEBPACK_IMPORTED_MODULE_12__["CashmemoRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_10__["DragulaModule"]],
            declarations: [
                src_app_cashmemo_cashmemo_block_cashmemo_block_component__WEBPACK_IMPORTED_MODULE_13__["CashmemoBlockComponent"],
                src_app_cashmemo_payment_followup_payment_followup_component__WEBPACK_IMPORTED_MODULE_14__["PaymentFollowupComponent"],
                src_app_cashmemo_payment_followup_assign_print_payment_followup_assign_print_component__WEBPACK_IMPORTED_MODULE_15__["PaymentFollowupAssignPrintComponent"],
                src_app_cashmemo_payment_followup_challan_print_payment_followup_challan_print_component__WEBPACK_IMPORTED_MODULE_16__["PaymentFollowupChallanPrintComponent"],
                src_app_cashmemo_cashmemo_block_cashmemo_block_component__WEBPACK_IMPORTED_MODULE_13__["CashmemoBlockPopupComponent"]
            ],
            exports: [src_app_cashmemo_payment_followup_assign_print_payment_followup_assign_print_component__WEBPACK_IMPORTED_MODULE_15__["PaymentFollowupAssignPrintComponent"]],
            entryComponents: [src_app_cashmemo_cashmemo_block_cashmemo_block_component__WEBPACK_IMPORTED_MODULE_13__["CashmemoBlockPopupComponent"]]
        })
    ], CashmemoModule);
    return CashmemoModule;
}());



/***/ }),

/***/ "./src/app/cashmemo/cashmemo.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/cashmemo/cashmemo.routing.ts ***!
  \**********************************************/
/*! exports provided: CashmemoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashmemoRoutes", function() { return CashmemoRoutes; });
/* harmony import */ var src_app_cashmemo_cashmemo_block_cashmemo_block_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cashmemo/cashmemo-block/cashmemo-block.component */ "./src/app/cashmemo/cashmemo-block/cashmemo-block.component.ts");
/* harmony import */ var src_app_cashmemo_payment_followup_payment_followup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cashmemo/payment-followup/payment-followup.component */ "./src/app/cashmemo/payment-followup/payment-followup.component.ts");
/* harmony import */ var src_app_cashmemo_payment_followup_assign_print_payment_followup_assign_print_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component */ "./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.ts");
/* harmony import */ var src_app_cashmemo_payment_followup_challan_print_payment_followup_challan_print_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component */ "./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.ts");




var CashmemoRoutes = [
    {
        path: '',
        children: [
            { path: 'generation', loadChildren: 'src/app/cashmemo/generation/generation.module#GenerationModule' },
            { path: 'transfer-cashmemo', loadChildren: 'src/app/cashmemo/transfer-cashmemo/transfer-cashmemo.module#TransferCashmemoModule' },
            {
                path: 'cashmemoBlock',
                component: src_app_cashmemo_cashmemo_block_cashmemo_block_component__WEBPACK_IMPORTED_MODULE_0__["CashmemoBlockComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'paymentFollowup',
                component: src_app_cashmemo_payment_followup_payment_followup_component__WEBPACK_IMPORTED_MODULE_1__["PaymentFollowupComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'paymentFollowupAssignPrint',
                component: src_app_cashmemo_payment_followup_assign_print_payment_followup_assign_print_component__WEBPACK_IMPORTED_MODULE_2__["PaymentFollowupAssignPrintComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'paymentFollowupChallanPrint',
                component: src_app_cashmemo_payment_followup_challan_print_payment_followup_challan_print_component__WEBPACK_IMPORTED_MODULE_3__["PaymentFollowupChallanPrintComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\n\ttext-align: center;\n}\n\n.dsply-ib {\n\tdisplay: inline-block;\n}\n\nh6, h5, h4, h3, h2, h1, p, .custome {\n\tfont-size: 13.3px;\n\tmargin: 1px;\n\tpadding: 1px;\n\tpadding-top: 3px;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n.fontS_15 {\n\tfont-size: 16px;\n\tmargin: 0px;\n}\n\n.fontS_13 {\n\tfont-size: 14px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.fontS_12 {\n\tfont-size: 13px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.font_bold{\nfont-weight:900;\n}\n\n.border {\n\tborder: 1px solid #000 !important;\n\tborder-collapse: collapse;\n\tpadding: 0px;\n}\n\n.dsplyNone {\n\tdisplay: none;\n}\n\n.border_right {\n\tborder-right: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_left {\n\tborder-left: 1px solid #000;\n\tborder-collapse: collapse;\n\tmargin-left: -1px;\n}\n\n.border_bottom {\n\tborder-bottom: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_top {\n\tborder-top: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#section_to_print, #section_to_print * {\n\t\tvisibility: visible;\n\t}\n\t\n\t .modal-basic-title{\n visibility: hidden;\n }\n #closePopupBtn{\n visibility: hidden;\n }\n}\n\n#left, #right, div:empty {\n\tmin-height: 19px;\n}\n\n#left, div:empty {\n\tmin-height: 22px;\n}\n\n/* #left, #right, div!:empty { */\n\n/* \tmargin-top: -15px; */\n\n/* } */\n\n.sidebar-nav ul .sidebar-item {\n\tdisplay: none;\n}\n\n/* print changes */\n\n.container {\n\tmax-width: 97%;\n}\n\n@media ( min-width : 768px) {\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tdisplay: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.col-md-3, .col-md-9 {\n\t\tpadding-left: 7px !important;\n\t}\n}\n\nhr {\n\tborder: .5px solid black;\n\twidth: 100%;\n\tmargin-left: 7px !important;\n\tmargin: 0px;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#firstPrint, #firstPrint * {\n\t\tvisibility: visible;\n\t}\n/* \t.page-break { display:block; page-break-before:always; }  */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vcGF5bWVudC1mb2xsb3d1cC1hc3NpZ24tcHJpbnQvcGF5bWVudC1mb2xsb3d1cC1hc3NpZ24tcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQiwwQ0FBMEM7Q0FDMUM7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjs7QUFDRDtBQUNBLGdCQUFnQjtDQUNmOztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQyw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQjs7RUFFQTtDQUNELG1CQUFtQjtFQUNsQjtDQUNEO0NBQ0EsbUJBQW1CO0VBQ2xCO0NBQ0Q7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQsaUNBQWlDOztBQUNqQyx5QkFBeUI7O0FBQ3pCLE9BQU87O0FBSVA7Q0FDQyxjQUFjO0NBQ2Q7O0FBQ0QsbUJBQW1COztBQUNuQjtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2Q7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MsNkJBQTZCO0VBQzdCO0NBQ0Q7O0FBRUQ7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxvQkFBb0I7RUFDcEI7QUFDRixnRUFBZ0U7Q0FDL0QiLCJmaWxlIjoic3JjL2FwcC9jYXNobWVtby9wYXltZW50LWZvbGxvd3VwLWFzc2lnbi1wcmludC9wYXltZW50LWZvbGxvd3VwLWFzc2lnbi1wcmludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR4dF9hYyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRzcGx5LWliIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5oNiwgaDUsIGg0LCBoMywgaDIsIGgxLCBwLCAuY3VzdG9tZSB7XG5cdGZvbnQtc2l6ZTogMTMuM3B4O1xuXHRtYXJnaW46IDFweDtcblx0cGFkZGluZzogMXB4O1xuXHRwYWRkaW5nLXRvcDogM3B4O1xuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnRTXzE1IHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRtYXJnaW46IDBweDtcbn1cblxuLmZvbnRTXzEzIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG5cblxuLmZvbnRTXzEyIHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG4uZm9udF9ib2xke1xuZm9udC13ZWlnaHQ6OTAwO1xufVxuLmJvcmRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0cGFkZGluZzogMHB4O1xufVxuXG4uZHNwbHlOb25lIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmJvcmRlcl9yaWdodCB7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXJfbGVmdCB7XG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0bWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5ib3JkZXJfYm90dG9tIHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXJfdG9wIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbkBtZWRpYSBwcmludCB7XG5cdGJvZHkgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaWRlYmFybmF2IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3NlY3Rpb25fdG9fcHJpbnQsICNzZWN0aW9uX3RvX3ByaW50ICoge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cblx0XG5cdCAubW9kYWwtYmFzaWMtdGl0bGV7XG4gdmlzaWJpbGl0eTogaGlkZGVuO1xuIH1cbiAjY2xvc2VQb3B1cEJ0bntcbiB2aXNpYmlsaXR5OiBoaWRkZW47XG4gfVxufVxuXG4jbGVmdCwgI3JpZ2h0LCBkaXY6ZW1wdHkge1xuXHRtaW4taGVpZ2h0OiAxOXB4O1xufVxuXG4jbGVmdCwgZGl2OmVtcHR5IHtcblx0bWluLWhlaWdodDogMjJweDtcbn1cblxuLyogI2xlZnQsICNyaWdodCwgZGl2ITplbXB0eSB7ICovXG4vKiBcdG1hcmdpbi10b3A6IC0xNXB4OyAqL1xuLyogfSAqL1xuXG5cblxuLnNpZGViYXItbmF2IHVsIC5zaWRlYmFyLWl0ZW0ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuLyogcHJpbnQgY2hhbmdlcyAqL1xuLmNvbnRhaW5lciB7XG5cdG1heC13aWR0aDogOTclO1xufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQjbWFpbi13cmFwcGVyW2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSAuc2lkZWJhci1uYXYgI3NpZGViYXJuYXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQuY29sLW1kLTMsIC5jb2wtbWQtOSB7XG5cdFx0cGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcblx0fVxufVxuXG5ociB7XG5cdGJvcmRlcjogLjVweCBzb2xpZCBibGFjaztcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1sZWZ0OiA3cHggIWltcG9ydGFudDtcblx0bWFyZ2luOiAwcHg7XG59XG5cbkBtZWRpYSBwcmludCB7XG5cdGJvZHkgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaWRlYmFybmF2IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I2ZpcnN0UHJpbnQsICNmaXJzdFByaW50ICoge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cbi8qIFx0LnBhZ2UtYnJlYWsgeyBkaXNwbGF5OmJsb2NrOyBwYWdlLWJyZWFrLWJlZm9yZTphbHdheXM7IH0gICovXG59Il19 */"

/***/ }),

/***/ "./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page row system_responsive\" id=\"firstPrint\">\n\t<div class=\"col-md-12\">\n\t\t<!--first row starts-->\n\t\t<div class=\"row\" style=\"padding-top: 5px;\" height='30px'>\n\t\t\t<div class=\"col-md-7\">\n\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<h6>\n\t\t\t\t\t{{address}}<br>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--first row starts-->\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-7\">\n\t\t\t\t<h6 style='margin-left: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t<strong>G.C Taken by : </strong> <strong>{{collectionMan}}</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\" align='right'>\n\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t<strong>Date : </strong> <strong>{{todayDate}}</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Second  row starts-->\n\t\t<div class=\"container border\">\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1'\n\t\t\t\t\tstyle='table-layout: fixed;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='20%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Memo No.</strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Memo Date</strong></td>\n\t\t\t\t\t\t<td *ngIf='showAssignDate' width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Assign Date</strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Memo Amount</strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> LR No.</strong></td>\n\t\t\t\t\t\t<td width='35%' align='center'\n\t\t\t\t\t\t\tstyle='border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Party Name</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let pfCollectionManDetailsData of pfCollectionManDetailsDataList\">\n\t\t\t\t\t\t<td width='20%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appMemoNumberPrint'><strong>\n\t\t\t\t\t\t\t\t{{pfCollectionManDetailsData.memoNumber}} </strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appEnteredDatePrint'><strong>\n\t\t\t\t\t\t\t\t{{this.datePipe.transform( pfCollectionManDetailsData.enteredDate, \"dd-MM-yyyy\" )}} </strong></td>\n\t\t\t\t\t\t<td *ngIf='showAssignDate' width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appAssignedDatePrint'><strong>\n\t\t\t\t\t\t\t\t{{this.datePipe.transform( pfCollectionManDetailsData.assignedDate, \"dd-MM-yyyy\" )}} </strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'><strong>\n\t\t\t\t\t\t\t\t{{pfCollectionManDetailsData.amount}} </strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appLrNumberPrint'><strong>\n\t\t\t\t\t\t\t\t{{pfCollectionManDetailsData.lrNumber}} </strong></td>\n\t\t\t\t\t\t<td width='35%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appPartyNamePrint'><strong>\n\t\t\t\t\t\t\t\t{{pfCollectionManDetailsData.consigneeName}}</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='20%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Total : </strong><strong>\n\t\t\t\t\t\t\t\t{{totalCount}} </strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t\t\t<td *ngIf='showAssignDate' width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> {{totalAmount}}</strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t\t\t<td width='35%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> </strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='font-size: 17px; margin-left: 20px;'>\n\t\t\t\t\t<strong>Received the above number of G.C for collection\n\t\t\t\t\t\tamounting to Rs.</strong> <strong>{{totalAmount}}</strong><strong>.\n\t\t\t\t\t\tI will render the account in the evening.</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-16\">\n\t\t\t\t<h6>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\" align='right'>\n\t\t\t\t<h6 style='font-size: 17px; padding-top: 22px;'>\n\t\t\t\t\t<strong> Signature&nbsp;&nbsp;&nbsp;&nbsp;</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PaymentFollowupAssignPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFollowupAssignPrintComponent", function() { return PaymentFollowupAssignPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentFollowupAssignPrintComponent = /** @class */ (function () {
    function PaymentFollowupAssignPrintComponent(router, datePipe) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.isLoggedIn = true;
        this.showAssignDate = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            swal({
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
            //            this.dataForPrint = localStorage.getItem( 'print' );
            this.dataForPrintAssignMemo = JSON.parse(localStorage.getItem('printAfterAssignMemo'));
            this.dataForPrintAssignMemoList = JSON.parse(localStorage.getItem('printAfterAssignMemolist'));
            this.dataForPrintGCTakenMemo = JSON.parse(localStorage.getItem('printAfterAssignMemoFromCollectionManRpt'));
            this.dataForPrintGCTakenMemoList = JSON.parse(localStorage.getItem('printAfterAssignMemolistFromCollectionManRpt'));
            //       console.log( this.dataForPrintAssignMemo);
            //        console.log( this.dataForPrintAssignMemoList);
            //       console.log( this.dataForPrintGCTakenMemo);
            //        console.log( this.dataForPrintGCTakenMemoList);
            // for Payment Followup
            if (this.dataForPrintAssignMemo != null) {
                this.collectionMan = this.dataForPrintAssignMemo.collectionMan;
            }
            else {
                this.collectionMan = 'NA';
            }
            if (this.dataForPrintAssignMemoList != null) {
                this.pfCollectionManDetailsDataList = this.dataForPrintAssignMemoList;
            }
            //For GC taken from collection Man report 
            if (this.dataForPrintGCTakenMemo != null) {
                this.collectionMan = this.dataForPrintGCTakenMemo.collectionMan;
            }
            else {
                this.collectionMan = 'NA';
            }
            if (this.dataForPrintGCTakenMemoList != null) {
                this.showAssignDate = true;
                this.pfCollectionManDetailsDataList = this.dataForPrintGCTakenMemoList;
            }
            this.todayDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
            if (this.dataForPrintAssignMemoList != null) {
                this.totalCount = this.dataForPrintAssignMemoList.length;
                this.totalAmount = 0;
                this.memoAmount = 0;
                for (var i = 0; i < this.dataForPrintAssignMemoList.length; i++) {
                    this.memoAmount = this.dataForPrintAssignMemoList[i].amount;
                    this.totalAmount = +this.totalAmount + +this.memoAmount;
                }
            }
            if (this.dataForPrintGCTakenMemoList != null) {
                this.totalCount = this.dataForPrintGCTakenMemoList.length;
                this.totalAmount = 0;
                this.memoAmount = 0;
                for (var i = 0; i < this.dataForPrintGCTakenMemoList.length; i++) {
                    this.memoAmount = this.dataForPrintGCTakenMemoList[i].amount;
                    this.totalAmount = +this.totalAmount + +this.memoAmount;
                }
            }
            this.image = this.userDataDtoReturnSession.ip;
            this.validatBeforePrint();
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
    PaymentFollowupAssignPrintComponent.prototype.ngOnInit = function () {
    };
    PaymentFollowupAssignPrintComponent.prototype.validatBeforePrint = function () {
        this.address = this.userDataDtoReturnSession.addressId == null ? ' ' : this.userDataDtoReturnSession.addressId;
    };
    PaymentFollowupAssignPrintComponent.prototype.clearField = function () {
        this.address = '';
        this.dataForPrintAssignMemo = '';
        this.dataForPrintAssignMemoList = '';
        this.collectionMan = '';
        this.totalAmount = 0;
        this.pfCollectionManDetailsDataList = '';
        this.totalCount = 0;
        this.memoAmount = 0;
        this.dataForPrintGCTakenMemo = '';
        this.dataForPrintGCTakenMemoList = '';
        this.showAssignDate = false;
    };
    PaymentFollowupAssignPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PaymentFollowupAssignPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-followup-assign-print',
            template: __webpack_require__(/*! ./payment-followup-assign-print.component.html */ "./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.html"),
            styles: [__webpack_require__(/*! ./payment-followup-assign-print.component.css */ "./src/app/cashmemo/payment-followup-assign-print/payment-followup-assign-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], PaymentFollowupAssignPrintComponent);
    return PaymentFollowupAssignPrintComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\n\ttext-align: center;\n}\n\n.dsply-ib {\n\tdisplay: inline-block;\n}\n\nh6, h5, h4, h3, h2, h1, p, .custome {\n\tfont-size: 13.3px;\n\tmargin: 1px;\n\tpadding: 1px;\n\tpadding-top: 3px;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n.fontS_15 {\n\tfont-size: 16px;\n\tmargin: 0px;\n}\n\n.fontS_13 {\n\tfont-size: 14px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.fontS_12 {\n\tfont-size: 13px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.font_bold{\nfont-weight:900;\n}\n\n.border {\n\tborder: 1px solid #000 !important;\n\tborder-collapse: collapse;\n\tpadding: 0px;\n}\n\n.dsplyNone {\n\tdisplay: none;\n}\n\n.border_right {\n\tborder-right: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_left {\n\tborder-left: 1px solid #000;\n\tborder-collapse: collapse;\n\tmargin-left: -1px;\n}\n\n.border_bottom {\n\tborder-bottom: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_top {\n\tborder-top: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#section_to_print, #section_to_print * {\n\t\tvisibility: visible;\n\t}\n\t\n\t .modal-basic-title{\n visibility: hidden;\n }\n #closePopupBtn{\n visibility: hidden;\n }\n}\n\n#left, #right, div:empty {\n\tmin-height: 19px;\n}\n\n#left, div:empty {\n\tmin-height: 22px;\n}\n\n/* #left, #right, div!:empty { */\n\n/* \tmargin-top: -15px; */\n\n/* } */\n\n.sidebar-nav ul .sidebar-item {\n\tdisplay: none;\n}\n\n/* print changes */\n\n.container {\n\tmax-width: 97%;\n}\n\n@media ( min-width : 768px) {\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tdisplay: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.col-md-3, .col-md-9 {\n\t\tpadding-left: 7px !important;\n\t}\n}\n\nhr {\n\tborder: .5px solid black;\n\twidth: 100%;\n\tmargin-left: 7px !important;\n\tmargin: 0px;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#challanPrint, #challanPrint * {\n\t\tvisibility: visible;\n\t\tfont-family:serif !important;\n\t}\n/* \t.page-break { display:block; page-break-before:always; }  */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vcGF5bWVudC1mb2xsb3d1cC1jaGFsbGFuLXByaW50L3BheW1lbnQtZm9sbG93dXAtY2hhbGxhbi1wcmludC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLDBDQUEwQztDQUMxQzs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUNEO0FBQ0EsZ0JBQWdCO0NBQ2Y7O0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEMsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLDhCQUE4QjtDQUM5QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0Msb0JBQW9CO0VBQ3BCOztFQUVBO0NBQ0QsbUJBQW1CO0VBQ2xCO0NBQ0Q7Q0FDQSxtQkFBbUI7RUFDbEI7Q0FDRDs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRCxpQ0FBaUM7O0FBQ2pDLHlCQUF5Qjs7QUFDekIsT0FBTzs7QUFJUDtDQUNDLGNBQWM7Q0FDZDs7QUFDRCxtQkFBbUI7O0FBQ25CO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0NBQ0M7RUFDQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZDtDQUNEOztBQUVEO0NBQ0M7RUFDQyw2QkFBNkI7RUFDN0I7Q0FDRDs7QUFFRDtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osNEJBQTRCO0NBQzVCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0I7QUFDRixnRUFBZ0U7Q0FDL0QiLCJmaWxlIjoic3JjL2FwcC9jYXNobWVtby9wYXltZW50LWZvbGxvd3VwLWNoYWxsYW4tcHJpbnQvcGF5bWVudC1mb2xsb3d1cC1jaGFsbGFuLXByaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0X2FjIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHNwbHktaWIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmg2LCBoNSwgaDQsIGgzLCBoMiwgaDEsIHAsIC5jdXN0b21lIHtcblx0Zm9udC1zaXplOiAxMy4zcHg7XG5cdG1hcmdpbjogMXB4O1xuXHRwYWRkaW5nOiAxcHg7XG5cdHBhZGRpbmctdG9wOiAzcHg7XG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udFNfMTUge1xuXHRmb250LXNpemU6IDE2cHg7XG5cdG1hcmdpbjogMHB4O1xufVxuXG4uZm9udFNfMTMge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHhcbn1cblxuXG4uZm9udFNfMTIge1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHhcbn1cbi5mb250X2JvbGR7XG5mb250LXdlaWdodDo5MDA7XG59XG4uYm9yZGVyIHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbi5kc3BseU5vbmUge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4uYm9yZGVyX3JpZ2h0IHtcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmJvcmRlcl9sZWZ0IHtcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLmJvcmRlcl9ib3R0b20ge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmJvcmRlcl90b3Age1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuQG1lZGlhIHByaW50IHtcblx0Ym9keSAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3NpZGViYXJuYXYge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjc2VjdGlvbl90b19wcmludCwgI3NlY3Rpb25fdG9fcHJpbnQgKiB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0fVxuXHRcblx0IC5tb2RhbC1iYXNpYy10aXRsZXtcbiB2aXNpYmlsaXR5OiBoaWRkZW47XG4gfVxuICNjbG9zZVBvcHVwQnRue1xuIHZpc2liaWxpdHk6IGhpZGRlbjtcbiB9XG59XG5cbiNsZWZ0LCAjcmlnaHQsIGRpdjplbXB0eSB7XG5cdG1pbi1oZWlnaHQ6IDE5cHg7XG59XG5cbiNsZWZ0LCBkaXY6ZW1wdHkge1xuXHRtaW4taGVpZ2h0OiAyMnB4O1xufVxuXG4vKiAjbGVmdCwgI3JpZ2h0LCBkaXYhOmVtcHR5IHsgKi9cbi8qIFx0bWFyZ2luLXRvcDogLTE1cHg7ICovXG4vKiB9ICovXG5cblxuXG4uc2lkZWJhci1uYXYgdWwgLnNpZGViYXItaXRlbSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4vKiBwcmludCBjaGFuZ2VzICovXG4uY29udGFpbmVyIHtcblx0bWF4LXdpZHRoOiA5NyU7XG59XG5cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2OHB4KSB7XG5cdCNtYWluLXdyYXBwZXJbZGF0YS1sYXlvdXQ9XCJob3Jpem9udGFsXCJdIC5zaWRlYmFyLW5hdiAjc2lkZWJhcm5hdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2OHB4KSB7XG5cdC5jb2wtbWQtMywgLmNvbC1tZC05IHtcblx0XHRwYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbmhyIHtcblx0Ym9yZGVyOiAuNXB4IHNvbGlkIGJsYWNrO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xuXHRtYXJnaW46IDBweDtcbn1cblxuQG1lZGlhIHByaW50IHtcblx0Ym9keSAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3NpZGViYXJuYXYge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjY2hhbGxhblByaW50LCAjY2hhbGxhblByaW50ICoge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0Zm9udC1mYW1pbHk6c2VyaWYgIWltcG9ydGFudDtcblx0fVxuLyogXHQucGFnZS1icmVhayB7IGRpc3BsYXk6YmxvY2s7IHBhZ2UtYnJlYWstYmVmb3JlOmFsd2F5czsgfSAgKi9cbn0iXX0= */"

/***/ }),

/***/ "./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn\" class=\"page row system_responsive\"\n\tid=\"challanPrint\">\n\t<div class=\"container border\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<!--first row starts-->\n\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\n\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t<!-- \t\t\t\t\t<h6 style=\"font-size: 16px;\" [innerHtml]=\"addressLineOne\"> -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t {{addressLineOne}} -->\n\t\t\t\t\t<!-- \t\t\t\t\t</h6> -->\n\t\t\t\t\t<!-- \t\t\t\t\t<h6 style=\"font-size: 16px;\"> -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t {{addressLineTwo}}  -->\n\t\t\t\t\t<!-- \t\t\t\t\t</h6> -->\n\t\t\t\t\t<h6 style='margin-left: 20px; font-size: 16px; word-wrap: break-word;'>\n\t\t\t\t\t\t{{this.address}}\n\t\t\t\t\t</h6>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t<img style='margin-left: 270px;'\n\t\t\t\t\t\tsrc=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--first row starts-->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\" align='center'>\n\t\t\t\t\t<h6 style='margin-left: 20px; font-size: 24px;'>\n\t\t\t\t\t\t<strong><u>{{setMainStation}}</u></strong> <strong><u>\n\t\t\t\t\t\t\t\tCOLLECTION REPORT</u></strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 22px;'>\n\t\t\t\t\t\t<strong>Date : </strong> <strong>{{completedOnDt}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 22px;'>\n\t\t\t\t\t\t<strong>Collection Man : </strong> <strong>{{collectionMan}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" style='border-top: 1px solid #000;'>\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>CASH : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.totalCashAmt}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>CHEQUE : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.totalChqAmt}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>NEFT/IMPS : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.totalNeftAmt}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>PARTY LESS (DELHI) : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.delhiLess}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>PARTY LESS (MUMBAI) : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.mumbaiLess}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>PARTY LESS (GUJARAT) : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.gujaratLess}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>PARTY LESS (PUNJAB) : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.punjabLess}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let lessDescOptData of lessDescOpt\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>{{lessDescOptData.label}} : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"lessDescOptData.label == 'TDS' || lessDescOptData.label == 'CLAIM'\"\n\t\t\t\t\tclass=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{myFunction(lessDescOptData.label)}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"lessDescOptData.label != 'TDS' && lessDescOptData.label != 'CLAIM'\"\n\t\t\t\t\tclass=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px; margin-left: 390px;'>\n\t\t\t\t\t\t<strong>{{myFunction(lessDescOptData.label)}}</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>OTHERS : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 21px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>TOTAL COLLECTION AMOUNT :</strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.grandTotal}} </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5\" align='left'>\n\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 18px; padding-top: 21px;'>\n\t\t\t\t\t\t<strong>TOTAL GC COLLECTED : </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t<h6 style='font-size: 20px; padding-top: 21px;' align='center'>\n\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.totalMemos}} </strong>\n\t\t\t\t\t</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t<div class=\"col-md-12\" align='left'></div>\n\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;2000</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof2000Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF2000}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;500</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof500Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF500}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;200</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof200Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF200}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;100</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof100Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF100}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;50</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof50Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF50}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;20</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof20Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF20}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;10</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof10Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF10}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;5</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof5Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF5}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;2</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof2Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF2}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong>&nbsp;1</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> X </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfof1Count}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t<strong> = </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\" style='border-bottom: 1px solid #000;'>\n\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='center'>\n\t\t\t\t\t\t\t\t<strong>{{this.getChallanPrintValDto.nfOF1}}</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\" align='left'></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PaymentFollowupChallanPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFollowupChallanPrintComponent", function() { return PaymentFollowupChallanPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentFollowupChallanPrintComponent = /** @class */ (function () {
    function PaymentFollowupChallanPrintComponent(router, datePipe) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.isLoggedIn = true;
        this.lessDescOpt = [];
        this.entryLessTypeOptions = [
            { id: 1, label: 'Flat Discount' },
            { id: 2, label: 'Rate Difference' },
            { id: 3, label: 'Weight Difference' },
            { id: 4, label: 'Demmurage' },
            { id: 5, label: 'Unloading' },
            { id: 5, label: 'Door Deivery' },
            { id: 5, label: 'FOV' },
            { id: 5, label: 'TDS' },
            { id: 5, label: 'CLAIM' },
            { id: 5, label: 'FOC' }
        ];
        this.getChallanPrintValDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_3__["CashMemoDto"]();
        this.addressLineOne = '';
        this.addressLineTwo = '';
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            swal({
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
            //            this.dataForPrint = localStorage.getItem( 'print' );
            this.getChallanPrintValDto = JSON.parse(localStorage.getItem('printAfterChallanMemo'));
            this.dataForPrintChallanMemoList = JSON.parse(localStorage.getItem('printAfterChallanMemolist'));
            //            console.log( this.dataForPrintChallanMemo );
            //            console.log( this.dataForPrintChallanMemoList );
            //            this.lessDescOptSent = this.entryLessTypeOptions;
            this.lessDescOptSent = this.getChallanPrintValDto.lessDesc;
            this.lessDescOpt = this.lessDescOptSent;
            this.setMainStation = this.userDataDtoReturnSession.mainStation.toUpperCase();
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            //        console.log(this.address);
            //            this.addressComaSplit = this.address.split( "," );
            //            if ( this.addressComaSplit.length > 0 ) {
            //                this.addressLineTwo = this.addressComaSplit[this.addressComaSplit.length - 1] + ".";
            //                //            console.log( this.addressLineTwo );
            //                for ( let b = 0; b < this.addressComaSplit.length - 1; b++ ) {
            //                    this.addressLineOne += this.addressComaSplit[b] + ",<br>";
            //                }
            //            } else {
            //                this.addressLineOne = this.address;
            //            }
            this.validatBeforePrint();
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
    PaymentFollowupChallanPrintComponent.prototype.ngOnInit = function () {
    };
    PaymentFollowupChallanPrintComponent.prototype.validatBeforePrint = function () {
        this.completedOnDt = this.getChallanPrintValDto.completedOn == null ? '' : this.getChallanPrintValDto.completedOn;
        this.collectionMan = this.getChallanPrintValDto.collectionMan == null ? '' : this.getChallanPrintValDto.collectionMan;
        this.getChallanPrintValDto.nfof2000Count = this.getChallanPrintValDto.nfof2000Count == null ? 0 : this.getChallanPrintValDto.nfof2000Count;
        this.getChallanPrintValDto.nfof500Count = this.getChallanPrintValDto.nfof500Count == null ? 0 : this.getChallanPrintValDto.nfof500Count;
        this.getChallanPrintValDto.nfof200Count = this.getChallanPrintValDto.nfof200Count == null ? 0 : this.getChallanPrintValDto.nfof200Count;
        this.getChallanPrintValDto.nfof100Count = this.getChallanPrintValDto.nfof100Count == null ? 0 : this.getChallanPrintValDto.nfof100Count;
        this.getChallanPrintValDto.nfof50Count = this.getChallanPrintValDto.nfof50Count == null ? 0 : this.getChallanPrintValDto.nfof50Count;
        this.getChallanPrintValDto.nfof20Count = this.getChallanPrintValDto.nfof20Count == null ? 0 : this.getChallanPrintValDto.nfof20Count;
        this.getChallanPrintValDto.nfof10Count = this.getChallanPrintValDto.nfof10Count == null ? 0 : this.getChallanPrintValDto.nfof10Count;
        this.getChallanPrintValDto.nfof5Count = this.getChallanPrintValDto.nfof5Count == null ? 0 : this.getChallanPrintValDto.nfof5Count;
        this.getChallanPrintValDto.nfof2Count = this.getChallanPrintValDto.nfof2Count == null ? 0 : this.getChallanPrintValDto.nfof2Count;
        this.getChallanPrintValDto.nfof1Count = this.getChallanPrintValDto.nfof1Count == null ? 0 : this.getChallanPrintValDto.nfof1Count;
        this.getChallanPrintValDto.nfOF2000 = this.getChallanPrintValDto.nfOF2000 == null ? 0.0 : this.getChallanPrintValDto.nfOF2000;
        this.getChallanPrintValDto.nfOF500 = this.getChallanPrintValDto.nfOF500 == null ? 0.0 : this.getChallanPrintValDto.nfOF500;
        this.getChallanPrintValDto.nfOF200 = this.getChallanPrintValDto.nfOF200 == null ? 0.0 : this.getChallanPrintValDto.nfOF200;
        this.getChallanPrintValDto.nfOF100 = this.getChallanPrintValDto.nfOF100 == null ? 0.0 : this.getChallanPrintValDto.nfOF100;
        this.getChallanPrintValDto.nfOF50 = this.getChallanPrintValDto.nfOF50 == null ? 0.0 : this.getChallanPrintValDto.nfOF50;
        this.getChallanPrintValDto.nfOF20 = this.getChallanPrintValDto.nfOF20 == null ? 0.0 : this.getChallanPrintValDto.nfOF20;
        this.getChallanPrintValDto.nfOF10 = this.getChallanPrintValDto.nfOF10 == null ? 0.0 : this.getChallanPrintValDto.nfOF10;
        this.getChallanPrintValDto.nfOF5 = this.getChallanPrintValDto.nfOF5 == null ? 0.0 : this.getChallanPrintValDto.nfOF5;
        this.getChallanPrintValDto.nfOF2 = this.getChallanPrintValDto.nfOF2 == null ? 0.0 : this.getChallanPrintValDto.nfOF2;
        this.getChallanPrintValDto.nfOF1 = this.getChallanPrintValDto.nfOF1 == null ? 0.0 : this.getChallanPrintValDto.nfOF1;
        this.getChallanPrintValDto.totalLess = this.getChallanPrintValDto.totalLess == null ? 0 : this.getChallanPrintValDto.totalLess;
        this.getChallanPrintValDto.amtToBeCollected = this.getChallanPrintValDto.amtToBeCollected == null ? 0 : this.getChallanPrintValDto.amtToBeCollected;
        this.getChallanPrintValDto.delhiLess = this.getChallanPrintValDto.delhiLess == null ? 0 : this.getChallanPrintValDto.delhiLess;
        this.getChallanPrintValDto.mumbaiLess = this.getChallanPrintValDto.mumbaiLess == null ? 0 : this.getChallanPrintValDto.mumbaiLess;
        this.getChallanPrintValDto.gujaratLess = this.getChallanPrintValDto.gujaratLess == null ? 0 : this.getChallanPrintValDto.gujaratLess;
        this.getChallanPrintValDto.punjabLess = this.getChallanPrintValDto.punjabLess == null ? 0 : this.getChallanPrintValDto.punjabLess;
        this.getChallanPrintValDto.tds = this.getChallanPrintValDto.tds == null ? 0 : this.getChallanPrintValDto.tds;
        this.getChallanPrintValDto.claim = this.getChallanPrintValDto.claim == null ? 0 : this.getChallanPrintValDto.claim;
        this.getChallanPrintValDto.totalChqAmt = this.getChallanPrintValDto.totalChqAmt == null ? 0 : this.getChallanPrintValDto.totalChqAmt;
        this.getChallanPrintValDto.totalNeftAmt = this.getChallanPrintValDto.totalNeftAmt == null ? 0 : this.getChallanPrintValDto.totalNeftAmt;
        this.getChallanPrintValDto.totalCashAmt = this.getChallanPrintValDto.totalCashAmt == null ? 0 : this.getChallanPrintValDto.totalCashAmt;
        this.getChallanPrintValDto.balanceAmt = this.getChallanPrintValDto.balanceAmt == null ? 0 : this.getChallanPrintValDto.balanceAmt;
        this.getChallanPrintValDto.grandTotal = this.getChallanPrintValDto.grandTotal == null ? 0 : this.getChallanPrintValDto.grandTotal;
        this.getChallanPrintValDto.totalMemos = this.getChallanPrintValDto.totalMemos == null ? 0 : this.getChallanPrintValDto.totalMemos;
    };
    PaymentFollowupChallanPrintComponent.prototype.clearField = function () {
        this.address = '';
        this.dataForPrintChallanMemo = '';
        this.dataForPrintChallanMemoList = '';
        this.address = '';
        this.completedOnDt = '';
        this.collectionMan = '';
        this.returnVal = '';
    };
    PaymentFollowupChallanPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PaymentFollowupChallanPrintComponent.prototype.myFunction = function (option) {
        //   console.log( option );
        this.returnVal = '';
        for (var key in this.dataForPrintChallanMemoList.hashMapDiffLess) {
            if (option == key) {
                this.returnVal = this.dataForPrintChallanMemoList.hashMapDiffLess[key];
                break;
            }
            else {
                this.returnVal = '';
            }
        }
        return this.returnVal;
    };
    PaymentFollowupChallanPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-followup-challan-print',
            template: __webpack_require__(/*! ./payment-followup-challan-print.component.html */ "./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.html"),
            styles: [__webpack_require__(/*! ./payment-followup-challan-print.component.css */ "./src/app/cashmemo/payment-followup-challan-print/payment-followup-challan-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], PaymentFollowupChallanPrintComponent);
    return PaymentFollowupChallanPrintComponent;
}());



/***/ }),

/***/ "./src/app/cashmemo/payment-followup/payment-followup.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup/payment-followup.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-horizontal-stepper-header {\n\theight: auto !important;\n}\n\ntable.dataTable {\n\theight: 180px !important;\n}\n\n::ng-deep .mat-horizontal-content-container {\n\toverflow: hidden;\n\tpadding: 0px 0px 0px 0px !important;\n}\n\n/* ::ng-deep basic-container .mat-step-header .mat-step-icon-selected { */\n\n/* \tbackground-color: ; */\n\n/* \tcolor: #fff; */\n\n/* } */\n\n::ng-deep .mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done,\n\t.mat-step-header .mat-step-icon-state-edit .mat-step-header .mat-step-icon\n\t{\n\tbackground-color: blue;\n\tcolor: #fff;\n}\n\n/* ::ng-deep .mat-step-header.cdk-program-focused, .mat-step-header:hover { */\n\n/* \tbackground-color: #ffcd72; */\n\n/* } */\n\n/* for label starts */\n\n::ng-deep.mat-step-label {\n\tfont-size: 16px;\n\tfont-weight: 700;\n}\n\n/* icon fonts */\n\n::ng-deep .mat-horizontal-stepper-header .mat-step-icon {\n\tfont-size: 18px;\n}\n\n/* previous icon */\n\n.mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done,\n\t.mat-step-header .mat-step-icon-state-edit {\n\tbackground-color: #673ab7;\n\tcolor: #fff;\n}\n\n/* icons */\n\n::ng-deep .mat-step-icon {\n\theight: 30px;\n\twidth: 30px;\n}\n\n::ng-deep .mat-step-icon .mat-icon {\n\tfont-size: 20px;\n\theight: 22px;\n\twidth: 20px;\n}\n\n/* for row of stepper */\n\n::ng-deep .mat-horizontal-stepper-header-container {\n\theight: 32px;\n\tbackground-color: lightcyan;\n}\n\n/* on hover */\n\n::ng-deep .mat-step-header:hover, .mat-step-label:hover {\n\tbackground-color: white;\n\tcolor: #fff;\n}\n\n::ng-deep .mat-stepper-horizontal-line {\n\tborder-top-width: 2px !important;\n}\n\n::ng-deep .label_custome {\n\twidth: 100%;\n\tfont-size: 15px;\n}\n\n/* the below code we add to view the option in popup modal starts  */\n\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n\n/* the below code we add to view the option in popup modal ends */\n\n@media ( min-width : 576px) {\n\t.modal-dialog {\n\t\tmax-width: 600px;\n\t\tmargin: 1.75rem auto;\n\t}\n}\n\n/* the below is add for consignee name field with refresh icon starts */\n\n.auto_selectOption_consigneeName {\n\tfont-size: 15px;\n\tpadding: 5px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\tflex: 1 1 auto;\n\twidth: calc(100% - 65%) !important;\n}\n\n/* the below is add for consignee name field with refresh icon ends */\n\n/* for less entry starts */\n\n/* for amount summary starts */\n\n#visitor {\n\theight: 267px;\n\twidth: 100%;\n}\n\n.feed-widget {\n\theight: auto;\n\tposition: relative;\n\tdisplay: flex;\n}\n\n.feed-widget .feed-body .feed-item {\n\tpadding: 5px 0;\n\tdisplay: flex;\n\talign-items: center;\n\tword-break: break-word;\n}\n\n@media ( min-width : 768px) {\n\t.vl_custome {\n\t\tborder-left: 2px dashed #cebd9f;\n\t\theight: auto;\n\t}\n}\n\n@media ( max-width : 767px) {\n\t.vl_custome {\n\t\tmargin-top: 10px;\n\t\tborder-top: 2px dashed #756954;\n\t}\n}\n\n.cssaaa {\n\twidth: 25px;\n\theight: 23px;\n\tmargin-right: 7px;\n\tdisplay: inline-block;\n\ttext-align: center;\n\tvertical-align: middle;\n\tborder-radius: 100%;\n\tcolor: #fff;\n}\n\n.text-muted {\n\tfloat: right;\n}\n\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button\n\t{\n\t-webkit-appearance: none;\n\tmargin: 0;\n}\n\n.imb_custome:hover {\n\t/* \tbox-shadow: 0px 0px 7px 2px darkkhaki; */\n\tbox-shadow: 1px 1px 3px 1px black;\n}\n\n/* for amount summary ends */\n\n/* for less entry ends */\n\n::ng-deep .mat-horizontal-stepper-header {\n\tpointer-events: none !important;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n    background-color: green;\n}\n\n::ng-deep ngb-typeahead-window {\n  top:26px;\n    left:25px;\n\tmax-height: 150px;\n    overflow-y: auto;\n\tposition: absolute;\n\tmax-width:-webkit-fill-available;\n}\n\n::ng-deep ngb-typeahead-window::before {\n    position: static;\n}\n\n@media print {\n\tbody, html * {\n\t\tvisibility: hidden;\n\t}\n\t#showPaymentFollowup, #showPaymentFollowup * {\n\t\tvisibility: hidden;\n\t}\n\t#printAssignedMemo {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n\t#printChallanRpt {\n\t\tposition: static;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin-left: 10px !important;\n\t\tmargin-top: -1380px !important;\n\t\tfont-family: serif;\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vcGF5bWVudC1mb2xsb3d1cC9wYXltZW50LWZvbGxvd3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3QkFBd0I7Q0FDeEI7O0FBRUQ7Q0FDQyx5QkFBeUI7Q0FDekI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsb0NBQW9DO0NBQ3BDOztBQUVELDBFQUEwRTs7QUFDMUUsMEJBQTBCOztBQUMxQixtQkFBbUI7O0FBQ25CLE9BQU87O0FBQ1A7OztDQUdDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1o7O0FBRUQsOEVBQThFOztBQUM5RSxpQ0FBaUM7O0FBQ2pDLE9BQU87O0FBRVAsc0JBQXNCOztBQUN0QjtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakI7O0FBQ0QsZ0JBQWdCOztBQUNoQjtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRCxtQkFBbUI7O0FBQ25COztDQUVDLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1o7O0FBQ0QsV0FBVzs7QUFDWDtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLFlBQVk7Q0FDWjs7QUFDRCx3QkFBd0I7O0FBQ3hCO0NBQ0MsYUFBYTtDQUNiLDRCQUE0QjtDQUM1Qjs7QUFDRCxjQUFjOztBQUNkO0NBQ0Msd0JBQXdCO0NBQ3hCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGlDQUFpQztDQUNqQzs7QUFFRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEI7O0FBRUQscUVBQXFFOztBQUNyRTtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUNELGtFQUFrRTs7QUFDbEU7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckI7Q0FDRDs7QUFDRCx3RUFBd0U7O0FBQ3hFO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLGVBQWU7Q0FDZixtQ0FBbUM7Q0FDbkM7O0FBQ0Qsc0VBQXNFOztBQUN0RSwyQkFBMkI7O0FBQzNCLCtCQUErQjs7QUFDL0I7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaOztBQUVEO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLG9CQUFvQjtDQUNwQix1QkFBdUI7Q0FDdkI7O0FBRUQ7Q0FDQztFQUNDLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2I7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQjtDQUNEOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGFBQWE7Q0FDYjs7QUFFRDs7Q0FFQyx5QkFBeUI7Q0FDekIsVUFBVTtDQUNWOztBQUVEO0NBQ0MsNkNBQTZDO0NBQzdDLGtDQUFrQztDQUNsQzs7QUFDRCw2QkFBNkI7O0FBRTdCLHlCQUF5Qjs7QUFDekI7Q0FDQyxnQ0FBZ0M7Q0FDaEM7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7RUFDRSxTQUFTO0lBQ1AsVUFBVTtDQUNiLGtCQUFrQjtJQUNmLGlCQUFpQjtDQUNwQixtQkFBbUI7Q0FDbkIsaUNBQWlDO0NBQ2pDOztBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUdEO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixPQUFPO0VBQ1A7Q0FDRDtFQUNDLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsT0FBTztFQUNQLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25COztDQUVEIiwiZmlsZSI6InNyYy9hcHAvY2FzaG1lbW8vcGF5bWVudC1mb2xsb3d1cC9wYXltZW50LWZvbGxvd3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcblx0aGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB7XG5cdGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4vKiA6Om5nLWRlZXAgYmFzaWMtY29udGFpbmVyIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQgeyAqL1xuLyogXHRiYWNrZ3JvdW5kLWNvbG9yOiA7ICovXG4vKiBcdGNvbG9yOiAjZmZmOyAqL1xuLyogfSAqL1xuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcblx0Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb25cblx0e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuLyogOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7ICovXG4vKiBcdGJhY2tncm91bmQtY29sb3I6ICNmZmNkNzI7ICovXG4vKiB9ICovXG5cbi8qIGZvciBsYWJlbCBzdGFydHMgKi9cbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cbi8qIGljb24gZm9udHMgKi9cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHByZXZpb3VzIGljb24gKi9cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcblx0Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcblx0Y29sb3I6ICNmZmY7XG59XG4vKiBpY29ucyAqL1xuOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIHtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIC5tYXQtaWNvbiB7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0aGVpZ2h0OiAyMnB4O1xuXHR3aWR0aDogMjBweDtcbn1cbi8qIGZvciByb3cgb2Ygc3RlcHBlciAqL1xuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuXHRoZWlnaHQ6IDMycHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcbn1cbi8qIG9uIGhvdmVyICovXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciwgLm1hdC1zdGVwLWxhYmVsOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG5cdGJvcmRlci10b3Atd2lkdGg6IDJweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmxhYmVsX2N1c3RvbWUge1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAxNXB4O1xufVxuXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgKi9cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcblx0LyogRG8geW91IGNoYW5nZXMgaGVyZSAqL1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTk7XG59XG5cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XG5cdHotaW5kZXg6IDk5OTk7XG59XG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIGVuZHMgKi9cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDU3NnB4KSB7XG5cdC5tb2RhbC1kaWFsb2cge1xuXHRcdG1heC13aWR0aDogNjAwcHg7XG5cdFx0bWFyZ2luOiAxLjc1cmVtIGF1dG87XG5cdH1cbn1cbi8qIHRoZSBiZWxvdyBpcyBhZGQgZm9yIGNvbnNpZ25lZSBuYW1lIGZpZWxkIHdpdGggcmVmcmVzaCBpY29uIHN0YXJ0cyAqL1xuLmF1dG9fc2VsZWN0T3B0aW9uX2NvbnNpZ25lZU5hbWUge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAycHggc29saWQgI2RhZGVlMjtcblx0aGVpZ2h0OiAyNnB4O1xuXHRmbGV4OiAxIDEgYXV0bztcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDY1JSkgIWltcG9ydGFudDtcbn1cbi8qIHRoZSBiZWxvdyBpcyBhZGQgZm9yIGNvbnNpZ25lZSBuYW1lIGZpZWxkIHdpdGggcmVmcmVzaCBpY29uIGVuZHMgKi9cbi8qIGZvciBsZXNzIGVudHJ5IHN0YXJ0cyAqL1xuLyogZm9yIGFtb3VudCBzdW1tYXJ5IHN0YXJ0cyAqL1xuI3Zpc2l0b3Ige1xuXHRoZWlnaHQ6IDI2N3B4O1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmZlZWQtd2lkZ2V0IHtcblx0aGVpZ2h0OiBhdXRvO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mZWVkLXdpZGdldCAuZmVlZC1ib2R5IC5mZWVkLWl0ZW0ge1xuXHRwYWRkaW5nOiA1cHggMDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuQG1lZGlhICggbWluLXdpZHRoIDogNzY4cHgpIHtcblx0LnZsX2N1c3RvbWUge1xuXHRcdGJvcmRlci1sZWZ0OiAycHggZGFzaGVkICNjZWJkOWY7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG59XG5cbkBtZWRpYSAoIG1heC13aWR0aCA6IDc2N3B4KSB7XG5cdC52bF9jdXN0b21lIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdGJvcmRlci10b3A6IDJweCBkYXNoZWQgIzc1Njk1NDtcblx0fVxufVxuXG4uY3NzYWFhIHtcblx0d2lkdGg6IDI1cHg7XG5cdGhlaWdodDogMjNweDtcblx0bWFyZ2luLXJpZ2h0OiA3cHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtbXV0ZWQge1xuXHRmbG9hdDogcmlnaHQ7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uXG5cdHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRtYXJnaW46IDA7XG59XG5cbi5pbWJfY3VzdG9tZTpob3ZlciB7XG5cdC8qIFx0Ym94LXNoYWRvdzogMHB4IDBweCA3cHggMnB4IGRhcmtraGFraTsgKi9cblx0Ym94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IGJsYWNrO1xufVxuLyogZm9yIGFtb3VudCBzdW1tYXJ5IGVuZHMgKi9cblxuLyogZm9yIGxlc3MgZW50cnkgZW5kcyAqL1xuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdyB7XG4gIHRvcDoyNnB4O1xuICAgIGxlZnQ6MjVweDtcblx0bWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRtYXgtd2lkdGg6LXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdzo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG5cbkBtZWRpYSBwcmludCB7XG5cdGJvZHksIGh0bWwgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaG93UGF5bWVudEZvbGxvd3VwLCAjc2hvd1BheW1lbnRGb2xsb3d1cCAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3ByaW50QXNzaWduZWRNZW1vIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDA7XG5cdH1cblx0I3ByaW50Q2hhbGxhblJwdCB7XG5cdFx0cG9zaXRpb246IHN0YXRpYztcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi10b3A6IC0xMzgwcHggIWltcG9ydGFudDtcblx0XHRmb250LWZhbWlseTogc2VyaWY7XG5cdH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cashmemo/payment-followup/payment-followup.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup/payment-followup.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n\trel=\"stylesheet\">\n</head>\n<body>\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\" id=\"showPaymentFollowup\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<h6 class=\"card-title text-white\">Payment FollowUp</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 5px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row p-b-10\" style=\"border-bottom: 1px solid #cebd9f;\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<button mat-raised-button (click)=\"isLinear = !isLinear\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tid=\"toggle-linear\">{{!isLinear ? 'Enable linear mode' -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t: 'Disable linear mode'}}</button> -->\n\t\t\t\t\t\t\t\t\t<mat-horizontal-stepper [linear]=\"false\" #stepper>\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tone starts --> <mat-step\n\t\t\t\t\t\t\t\t\t\t[stepControl]=\"firstStepGroup\">\n\t\t\t\t\t\t\t\t\t<form [formGroup]=\"firstFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Payment Followup</ng-template>\n\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<mat-form-field> <input matInput -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\tplaceholder=\"Last name, First name\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\tformControlName=\"firstCtrl\" required> </mat-form-field> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tthe payment followup starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Row -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 5px; margin-right: 160px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-spinner></mat-spinner> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinner\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" --\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 5px; margin-right: 160px;\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-spinner></mat-spinner> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\"></mat-progress-bar> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinner\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center' -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSaving Payment Details Please Wait.....</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"border-bottom: 1px solid #cebd9f;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Action Type</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #actionType id=\"actionType\" autocomplete=\"off\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Action Type\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlActionType\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteActionType\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteActionType=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(actionTypeOptions | filter: controlActionType.value) as resultActionType\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultActionType\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"actionTypeFocus(option)\" [value]=\"option.label\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ option.label }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultActionType.length\">No result</app-option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: static;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Action Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #actionType id=\"actionType\" name=\"actionType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Action Type\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"actionTypeFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"actionTypeSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusActionTypeTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceActionType)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceActionType=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Collection Man</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionMan id=\"collectionMan\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionMan\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCollectionMan\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"enteredCollectionMan\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteCollectionMan=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManOptions | filterCollectionMan: controlCollectionMan.value) as resultCollectionMan\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCollectionMan\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"collectionManFocus(option,contentAcknowledgement)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.collectioMan }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultCollectionMan.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man</label> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionMan id=\"collectionMan\" type=\"text\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" [(ngModel)]=\"enteredCollectionMan\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"collectionManSearchTA\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCollectionManTA$.next($any($event).target.value)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceCollectionMan)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"collectionManFocus(option,contentAcknowledgement)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceCollectionMan=\"ngbTypeahead\" /> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-spinner></mat-spinner> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t   <div class=\"col-md-6\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--         <div class=\"card\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--             <div class=\"card-body\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--                 <p><ngb-progressbar type=\"success\" [value]=\"75\"></ngb-progressbar></p> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--             </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--         </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--     </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: static;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Collection Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionMan id=\"collectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"collectionMan\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"collectionManFocus($event,contentAcknowledgement)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"enteredCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"collectionManSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCollectionManTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceCollectionMan)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceCollectionMan=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Entry Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"automatic\">Automatic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Station</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"station\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Station\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlStation\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteStation\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteStation=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(stationOptions | filterDest: controlStation.value) as resultStation\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultStation\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getMemoCode(option,'main')\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.destination\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.destination }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultStation.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #station id=\"station\" name=\"station\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"getMemoCode($event,'main')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"stationSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceStation);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceStation=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"manualView\" class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"memoNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Memo Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #codeForManual type=\"text\" id=\"codeForManual\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #memoNumberForManual type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"memoNumberForManual\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForManual($event,'keyEnter')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"automaticView\" class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">Memo Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #memoNumberForAutomatic type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"memoNumberForAutomatic\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForAutomatic($event,'keyEnter')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dates\" ngbDatepicker #dates=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"dates.toggle()\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"completedOnDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"completedOnDate\" [(ngModel)]=\"tdyCompletedOnDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"completedOnDate.toggle()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#completedOnDate=\"ngbDatepicker\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"completedOnDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\" id=\"completedOnDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"completedOnDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"tdyCompletedOnDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"dd-mm-yyyy\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row  p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Collection Man Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"assingAllBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateAllBtn();\">ALL</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the first datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPfCollectionManDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPfCollectionManDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cashmemo</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--  class='dragndrop' [dragula]='\"first-bag\"' -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let pfCollectionManDetailsData of pfCollectionManDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfCollectionManDetailsData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfCollectionManDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfCollectionManDetailsData.amount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfCollectionManDetailsData.consigneeName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfCollectionManDetailsData.column1 }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total :\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{countOFMemosCollectionTable}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOFMemosCollectionTable}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the second datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Assigned Job Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"removeAllBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateRemoveAllBtn();\">Remove All</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionPfAssignedJobDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPfAssignedJobDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cashmemo</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- class='dragndrop' [dragula]='\"first-bag\"'-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let pfAssignedJobDetailsData of pfAssignedJobDetailsDataList let i = index \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfAssignedJobDetailsData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfAssignedJobDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfAssignedJobDetailsData.amount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfAssignedJobDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pfAssignedJobDetailsData.column1 }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeleteForAssignedTable(pfAssignedJobDetailsData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{countOfAssignLR}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfAssignLR}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t the second datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--  to open  popup use this 1. (click)=\"openNotAssignedPopup(contentNotAssigned)\" 2. (click) =\"openAssignedPopup(contentAssigned)\"  3. (click)=\"openPopup(content)\"-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Row -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsNotAssigned\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #contentNotAssigned let-ok=\"close\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Empty Datas</h5> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"text-align: center;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12 p-t-10\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 20px\"> No Cashmemo Found in -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAssigned Job!</i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"text-align: center;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-md-12 p-t-10\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ok('Ok click')\">Ok</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content10 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Select\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollection Man To Assign</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Assign To :</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionManAssign -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"collectionManAssign\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionManAssign\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCollectionManAssign\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"enteredCollectionManAssign\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteCollectionManAssign=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManOptionsAssign | filterCollectionMan: controlCollectionManAssign.value) as resultCollectionManAssign\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultCollectionManAssign\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.collectioMan }} </app-option> <app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultCollectionManAssign.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Assign To :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionManAssign\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"collectionManAssign\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"collectionManAssignSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCollectionManAssignTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceCollectionManAssign)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"enteredCollectionManAssign\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceCollectionManAssign=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"closePopupBtn\" (click)=\"d('Cross click')\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div #newConsigneeSaveBtn class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newCollectionManAssignBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateCollectionManAssign();d('Cross click')\">Assign</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content11 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Select\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTo-Party</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Assign To :</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionManToParty -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"collectionManToParty\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionManToParty\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCollectionManToParty\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"enteredCollectionManToParty\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteCollectionManToParty=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManOptionsToParty | filterCollectionMan: controlCollectionManToParty.value) as resultCollectionManToParty\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultCollectionManToParty\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.collectioMan\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.collectioMan }} </app-option> <app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultCollectionManToParty.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Assign To :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #collectionManToParty\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"collectionManToParty\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"collectionManToPartySearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCollectionManToPartyTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceCollectionManToParty)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"enteredCollectionManToParty\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceCollectionManToParty=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"closePopupBtnToParty\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div #newConsigneeSaveBtn class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newCollectionManToPartyBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateCollectionManToParty();d('Cross click')\">OK</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsAssigned\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #contentAssigned let-yes=\"close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet-no=\"close\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Assigning Memos</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"text-align: center;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-question\" style=\"font-size: 20px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSure You Want to Assign the selected Memos to <span>ANZAR</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"text-align: center;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"yes('Yes click')\">Yes</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"no('No click')\">No</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content let-cancel=\"close\" let-d=\"dismiss\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Select Collection Man to Assign</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fourth autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"collectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Assign To</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Collection Man\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCollectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteCollectionMan=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(collectionManOptions | filter: controlCollectionMan.value) as resultCollectionMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultCollectionMan.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fourth autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openAssignedPopup(contentAssigned)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled>Assign</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"cancel('Cancel click')\">Cancel</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsAcknowledgement\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #contentAcknowledgement let-ack=\"close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet-status=\"close\" let-cancel=\"close\" let-d=\"dismiss\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Validate To-Party Statement</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCollection Man <span>{{collectionManTP}}</span> have\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{countTp}}</span> left to party statements\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending for acknowledgement\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"acknowledgeNow\" disabled>Acknowledge\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNow</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\" id=\"statusBackBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled>Status Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"cancelTP();d('Cross click')\">Cancel</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tthe payment followup ends -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"viewFinishBtn\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"collectionManFinish(content10,content11)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"finishBtn\">Finish</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"showNextBtnInAssign\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark m-r-10\" id=\"nextBtnInAssign\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNextBtnInAssign()\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tid=\"resetInStockGroupingBtn\" mat-button matStepperPrevious>Reset</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"viewShowNexInAssingBtn2\" id=\"nextBtnAssign\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"nextBtn\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"showTheConsigneeWiseDetails()\" matStepperNext>Next</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</mat-step> <!-- \t\t\t\t\t\t\t\tone flow is ends --> <!-- \t\t\t\t\t\t\t\t \t\t\t\t\t\t two flow is starts  -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tthe less entry starts --> <mat-step\n\t\t\t\t\t\t\t\t\t\t[stepControl]=\"secondStepGroup\">\n\t\t\t\t\t\t\t\t\t<form [formGroup]=\"secondFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Less Entry</ng-template>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<mat-form-field> <input matInput -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\tplaceholder=\"Address\" formControlName=\"secondCtrl\" required> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</mat-form-field> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Row -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthe fifth autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption_consigneeName input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeName\" name=\"consigneeName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsigneeName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsigneeName\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-postpend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"background-color: orange; color: #fff\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-undo\" title=\"Relaod Consignee Name\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"reloadConsignee()\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteConsigneeName=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consigneeNameOptions | filterConsigneeName: controlConsigneeName.value) as resultConsigneeName\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultConsigneeName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedConsignee(option)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.consigneeName\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.consigneeName }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsigneeName.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceConsigneeName)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedConsignee(option)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceConsigneeName=\"ngbTypeahead\" /> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" /><span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: orange; color: #fff\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-undo\" title=\"Relaod Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer;\" (click)=\"reloadConsignee()\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fifth autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Less</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #totalLess type=\"number\" id=\"totalLess\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"totalLess\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"validateTotalLess($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #tdsBulkEntry type=\"checkbox\" class=\"custom-control-input\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"tdsBulkEntry\" name=\"tdsBulkEntry\" [(ngModel)]=\"viewByTdsBulkEntry\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull \" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"tdsBulkEntry\" (click)=\"openLessEntryTdsPopup(contentLessEntryTds)\">TDS Bulk Entry</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openLessEntryTdsPopup(contentLessEntryTds)\">check -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1</a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxTDS\" #checkboxTDS\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForTDS($event, contentLessEntryTds)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxTDS\">TDS Bulk Entry</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"statusBack\" #statusBack\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"viewByStatusBack\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForStatuBack($event, contentLessEntryStatusBack)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"statusBack\">Status Back</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openLessEntryStatusBackPopup(contentLessEntryStatusBack)\">check -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2</a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- the popup modal for less entry starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--  to open  popup use this 4. (click)=\"openLessEntryTdsPopup(contentLessEntryTds)\" 5. (click)=\"openLessEntryStatusBackPopup(contentLessEntryStatusBack)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsLessEntryTds\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #contentLessEntryTds let-ok=\"close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>TDS Bulk Entry</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Memo</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"totalMemoForTDS\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"memoAmountForTDS\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Less</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-minus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"lessForTDS\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>TDS Less(1.5%)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-percent\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"tdsLessTwoPer\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"tdsInsert()\">Apply TDS Bulk\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDiscount</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ok('Cancel click'); uncheck();\">Close</button>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- the popup modal for less entry ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"entryLessEntryType\" name=\"entryLessEntryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#entryLessEntryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"entryLessEntryTypeMode(entryLessEntryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"entryLessManual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"entryLessAutomatic\">Automatic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe sixth autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #entryLessStation -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Station\" id=\"entryLessStation\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlStationEntry\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteStationEntry\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteStationEntry=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(entryLessStationOptions | filterDest: controlStationEntry.value) as resultStationEntry\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultStationEntry\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getMemoCode(option,'entry')\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.destination\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.destination }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultStationEntry.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #entryLessStation id=\"entryLessStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" placeholder=\"Select Station\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"getMemoCode($event,'entry')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStationForLess\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"entryLessStationSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusEntryLessStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceEntryLessStation)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceEntryLessStation=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe sixth autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"entryLessManualView\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"entryLessMemoNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #codeForManualLess type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"codeForManualLess\" name=\"codeForManualLess\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStationForLessAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#memoNumberForManualLess type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"memoNumberForManualLess\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"memoNumberForManualLess\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForEntryLess($event,'manual')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"entryLessAutomaticView\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #memoNumberForAutomaticLess type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"memoNumberForAutomaticLess\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"memoNumberForAutomaticLess\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForEntryLess($event,'scan')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe sixth autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Less Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-minus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #lessType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Less Type\" id=\"lessType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"lessType\" [formControl]=\"controlEntryLessType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteEntryLessType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteEntryLessType=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(entryLessTypeOptions | filter: controlEntryLessType.value) as resultEntryLessType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultEntryLessType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedLessType();\" [value]=\"option.label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ option.label }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultEntryLessType.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe sixth autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #entryLessAmount type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"entryLessAmount\" name=\"entryLessAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"validateLessAmount($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" style='display: none;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"hiddenIndexForLessEntry\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">&nbsp;\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Less Entries</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"lessEntryRemoveBtn\">Remove -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the third datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLessEntriesDataTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLessEntriesDataTable\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Less Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Less Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--  class='dragndrop' [dragula]='\"first-bag\"' -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let lessEntriesDataTableData of lessEntriesDataTableDataList; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lessEntriesDataTableData.memoNumber }}</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lessEntriesDataTableData.memoAmount }}</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lessEntriesDataTableData.lessAmount }}</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lessEntriesDataTableData.lessDescription -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lessEntriesDataTableData.chqType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lessEntriesDataTableData.cashMemoAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lessEntriesDataTableData.chqAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lessEntriesDataTableData.chqNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableEditBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEditForLessEntry(lessEntriesDataTableData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Edit\" class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeleteForLessEntry(lessEntriesDataTableData,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{countOfLessLR}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfLessAmt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the third datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tmatStepperPrevious -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tid=\"entryLessFinishBtn\" mat-button>Finish</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"!viewNextBtn\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark m-r-10\" id=\"entryLessNextBtnCheck\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNextBtn($event)\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"viewNextBtn\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"nextToPaymentEntryBtn\" (click)=\"setPaymentEntry()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperNext>Next</button>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</mat-step> <!-- \t\t\t\t\t\t\t\ttwo flow is end --> <!-- \t\t\t\t\t\t\t\tthree flow is starts -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"thirdStepGroup\">\n\t\t\t\t\t\t\t\t\t<form [formGroup]=\"thirdFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Payment Entry</ng-template>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<mat-form-field> <input matInput -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\tplaceholder=\"Address\" formControlName=\"secondCtrl\" required> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</mat-form-field> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinner\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 5px; margin-right: 160px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinner\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSaving Payment Details Please Wait.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Row -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10 p-b-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payment Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"paymentMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"paymentMode\" #paymentMode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"paymentModeMode(paymentMode.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"select\" selected>Select\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayment Mode</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"cheque\">Cheque/PDC</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"neft\">NEFT/IMPS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"cash\">Cash</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByConsigneeName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeNameForPayment -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption_consigneeName input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeNameForPayment\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeNameForPayment\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsigneeNamePayment\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsigneeNamePayment\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-postpend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"background-color: orange; color: #fff\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-undo\" title=\"Relaod Consignee Name\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"reloadConsignee()\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteConsigneeNamePayment=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consigneeNameOptionsPayment | filterConsigneeName: controlConsigneeNamePayment.value) as resultConsigneeNamePayment\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultConsigneeNamePayment\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedConsigneePayment(option)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.consigneeName\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.consigneeName }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsigneeNamePayment.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeNameForPayment -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeNameForPayment\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeNameForPayment\" type=\"text\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameForPaymentSearchTA\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameForPaymentTA$.next($any($event).target.value)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceConsigneeNameForPayment)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedConsigneePayment(option)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceConsigneeNameForPayment=\"ngbTypeahead\" /> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeNameForPayment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeNameForPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeNameForPayment\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Consignee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsigneePayment($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeNameForPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameForPaymentSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeNameForPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeNameForPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameForPaymentTA$.next($any($event).target.value)\" /><span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: orange; color: #fff\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-undo\" title=\"Relaod Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer;\" (click)=\"reloadConsignee()\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"statusBackPayment\" #statusBackPayment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"viewByStatusBackPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForStatuBackPayment($event, contentLessEntryStatusBack)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"statusBackPayment\">Status Back</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <a -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"openLessEntryStatusBackPopup(contentLessEntryStatusBack)\">check -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3</a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByCash\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #totalAmountForPayment type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"totalAmountForPayment\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"validateTotalLess($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByChequeNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"chequeNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusChqNo($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByChequeDate\" class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Date</label> <input id=\"chequeDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" name=\"chequeDates\" ngbDatepicker -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#chequeDates=\"ngbDatepicker\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"chequeDates.toggle();focusChqDate();\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"chequeDates.toggle();focusChqDate();\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByChequeDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Date</label> <input id=\"chequeDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" name=\"chequeDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#chequeDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"focusChqDateEnter($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"focusChqDate($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.arrowdown)=\"chequeDates.toggle();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"chequeDates.toggle();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe seventh autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByConsigneeBankName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Bank Name</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeBankName -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Bank\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsigneeBankName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeBankName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsigneeBankName\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-postpend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"background-color: orange; color: #fff\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-undo\" title=\"Relaod Consignee Name\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer;\" (click)=\"reloadBank()\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteConsigneeBankName=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consigneeBankNameArrayRet | filterBankName: controlConsigneeBankName.value) as resultConsigneeBankName\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultConsigneeBankName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"partyBankMethod(option)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.bankName\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.bankName }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsigneeBankName.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByConsigneeBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeBankName id=\"consigneeBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeBankName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Bank\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"partyBankMethod($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeBankNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeBankNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceConsigneeBankName)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceConsigneeBankName=\"ngbTypeahead\" /> <span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: orange; color: #fff\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-undo\" title=\"Relaod Bank Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer;\" (click)=\"reloadBank()\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewNewBankName\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #newBankName type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newBankName\" name=\"newBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusNewBank($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe seventh autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByReferenceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Reference Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #referenceNumber type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"referenceNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusRef($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByCashs\" class=col-md-12>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card card-hover imb_custome\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: lightcyan;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">Denomination Details</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"\">2000 X:</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"twoThousandRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"twoThousandRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"twoThousandRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"twoThousandRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"twoThousandRupee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"twoThousandRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>500 X :</label> <input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"fiveHundredRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fiveHundredRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fiveHundredRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"fiveHundredRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"fiveHundredRupee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fiveHundredRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>200 X :</label> <input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"twoHundredRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"twoHundredRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"twoHundredRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"twoHundredRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"twoHundredRupee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"twoHundredRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>100 X :</label> <input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"hundredRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hundredRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"hundredRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"hundredRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"hundredRupee\" [(ngModel)]=\"hundredRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>50 X :</label> <input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"fiftyRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fiftyRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fiftyRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"fiftyRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fiftyRupee\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fiftyRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>20 X :</label> <input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"twentyRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"twentyRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"twentyRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"twentyRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"twentyRupee\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"twentyRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>10 X :</label><input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"tenRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"tenRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"tenRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"tenRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\" id=\"tenRupee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"tenRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>5 X :</label> <input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"fiveRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fiveRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fiveRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"fiveRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\" id=\"fiveRupee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fiveRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>2 X :</label> <input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"twoRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"twoRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"twoRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"twoRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\" id=\"twoRupee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"twoRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>1 X :</label> <input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"oneRupeeCount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"oneRupeeCountModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"oneRupeeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"oneRupeeBlur( $event)\"> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\" id=\"oneRupee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"oneRupeeModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total : </label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#totalRupeeDenomination type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"totalRupeeDenomination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinner\" class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-right: 160px;\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-spinner></mat-spinner> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinner\" class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" style=\"color: blue;\">Saving -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayment details......</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showForCheckandNeft\" class=\"col-md-3 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"entryLessPaymentEntry\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"entryLessPaymentEntry\" #entryLessPaymentEntry\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"entryLessPaymentEntryMode(entryLessPaymentEntry.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paymentLessManual\">Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paymentLessAutomatic\">Automatic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fifth autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #paymentLessStn -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Station\" id=\"paymentLessStn\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlEntryLessStation\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteEntryLessStation\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteEntryLessStation=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(paymentLessStationOptions | filterDest: controlEntryLessStation.value) as resultEntryLessStation\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultEntryLessStation\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getMemoCode(option,'payment')\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.destination\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.destination }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultEntryLessStation.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #paymentLessStn id=\"paymentLessStn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" placeholder=\"Select Station\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"getMemoCode($event,'payment')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStationForPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"paymentLessStnSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusPaymentLessStnTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instancePaymentLessStn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instancePaymentLessStn=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fifth autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"paymentLessManualView\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #codeForManualLessPayment\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"codeForManualLessPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"codeForManualLessPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStationForPaymentAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #memoNumberForManualLessPayment type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"memoNumberForManualLessPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"memoNumberForManualLessPayment\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForEntryLess($event,'manual')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"paymentLessAutomaticView\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #memoNumberForAutomaticLessPayment type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"memoNumberForAutomaticLessPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"memoNumberForAutomaticLessPayment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getMemoNumberForEntryLess($event,'scan')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"paymentLessAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"validateLessAmount($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" style='display: none;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"hiddenIndexForPaymentEntry\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">&nbsp;\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showForCheckandNeft\" class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Amount Entries</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"lessEntryRemoveBtn\">Remove -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the fifth datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPaymentAmountEntries\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPaymentAmountEntries\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Less Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Less Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Balance Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--  class='dragndrop' [dragula]='\"first-bag\"' -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let paymentAmountEntriesData of paymentAmountEntriesDataList; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ paymentAmountEntriesData.chqType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ paymentAmountEntriesData.cashMemoAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ paymentAmountEntriesData.chqAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ paymentAmountEntriesData.chqNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ paymentAmountEntriesData.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableEditBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEditForPaymentEntry(paymentAmountEntriesData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Edit\" class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeleteForPaymentEntry(paymentAmountEntriesData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{countOfPaymentMemo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfMemoAmtPayment}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfLessAmtPayment}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfBalanceAmtPayment}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the fifth datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showForCheckandNeft\" class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right; height: 150px;\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tmatStepperPrevious -->\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" type=\"button\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperPrevious (click)=\"callTempoForLess();\">Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"showNextBtn\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"paymentLessNextBtnCheck\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNextBtn($event)\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"paymentEntryFinishBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validatePaymentEntryFinishBtn($event)\" mat-button>Finish</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"showResetBtn\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"stepper.reset();resetAll()\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"nextToBtn\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperNext>Next</button> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<button mat-button matStepperPrevious>Back</button> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<button mat-button matStepperNext>Next</button> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</mat-step> <!-- \t\t\t\t\t\t\t\tthree flow is ends --> <!-- \t\t\t\t\t\t\t\tfour flow is starts -->\n\t\t\t\t\t\t\t\t\t</mat-horizontal-stepper>\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tpopup status back starts -->\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsLessEntryStatusBack\">\n\t\t\t\t\t\t\t\t\t\t<ng-template #contentLessEntryStatusBack let-ok=\"close\"\n\t\t\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\">\n\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Status Back</h5>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cashmemo Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #cashmemoNumberForStatusBack\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cashmemoNumberForStatusBack\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateStatusBackBtn();\">Status Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ok('Cancel click');uncheckStatusBack();\">Close</button>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tstatus back popup ends -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tthe datatable and amount summary starts -->\n\n\t\t\t\t\t\t\t<div [hidden]=\"!consigneeWiseDetails\" class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consignee Wise Balance Details</h6>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the fourth datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsigneeWiseBalanceDetails\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsigneeWiseBalanceDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memos</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Less</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cheque</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>NEFT</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Bal.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--  class='dragndrop' [dragula]='\"first-bag\"' -->\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consigneeWiseBalanceDetailsData of consigneeWiseBalanceDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeWiseBalanceDetailsData.consigneeName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeWiseBalanceDetailsData.totalCashMemo\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeWiseBalanceDetailsData.grandTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeWiseBalanceDetailsData.partyLessDed }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeWiseBalanceDetailsData.advChqAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeWiseBalanceDetailsData.neftAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeWiseBalanceDetailsData.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{countOfConsingeeWiseMemo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfConsingeeWiseTotalCashMemo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfConsingeeWiseGrandTotal}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfConsingeeWisePartyLessDed}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfConsingeeWiseAdvChqAmt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfConsingeeWiseNeftAmtl}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfConsingeeWiseBalance}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the fourth datatable ends  -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card card-hover imb_custome\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\" style=\"background-color: lightcyan;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">Amount Summary</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Delhi Less :<span class=\"ml-auto font-16 text-muted\">{{lblDelhiLessValue}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-warning\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Mumbai Less:<span class=\"ml-auto font-16 text-muted\">{{lblMumLessValue}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Gujarat Less :<span class=\"ml-auto font-16 text-muted\">{{lblGujLessValue}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-inverse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Punjab Less :<span class=\"ml-auto font-16 text-muted\">{{lblPjbLessValue}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\" cssaaa feed-icon bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>TDS Less : <span class=\"ml-auto font-16 text-muted\">{{lblTDSLessValue}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Claim Less::<span class=\"ml-auto font-16 text-muted\">{{lblClaimLessValue}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7 vl_custome\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Amount To Be Collected:<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ml-auto font-16 text-muted\">{{amountToBeCollected}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-warning\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Total Less :<span *ngIf=\"!showLessLbl\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ml-auto font-16 text-muted\">{{lblTotLessSummaryValue}}</span><span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"showLessLbl\" class=\"ml-auto font-16 text-muted\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid; color: blue !important; cursor: pointer;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"callTempoForLessForDataTable();\">{{lblTotLessSummaryValue}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Total Amount In Cheque/PDC :<span *ngIf=\"!showChqLbl\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ml-auto font-16 text-muted\">{{lblTotChqAmtSummaryValue}}</span><span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"showChqLbl\" class=\"ml-auto font-16 text-muted\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid; color: blue !important; cursor: pointer;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"callTempoForChq();\">{{lblTotChqAmtSummaryValue}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-inverse\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Total Amount In NEFT/IMPS :<span *ngIf=\"!showNEFTLbl\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ml-auto font-16 text-muted\">{{lblTotNeftAmtSummaryValue}}</span><span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"showNEFTLbl\" class=\"ml-auto font-16 text-muted\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid; color: blue !important; cursor: pointer;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"callTempoForNEFT();\">{{lblTotNeftAmtSummaryValue}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\" cssaaa feed-icon bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Total Amount In Cash : <span *ngIf=\"!showCashLbl\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ml-auto font-16 text-muted\">{{lblTotCashAmtSummaryValue}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"showCashLbl\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ml-auto font-16 text-muted\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid; color: blue !important; cursor: pointer;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"callTempoForCash();\">{{lblTotCashAmtSummaryValue}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label_custome\"><div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" cssaaa feed-icon bg-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"mdi mdi-currency-inr\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>Balance Amount :<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ml-auto font-16 text-muted\">{{balanceAmountFinal}}</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"feed-item\">-------------------------------</li> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Row -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"viewAssignMemoPrint\" onafterprint=\"afterPrint()\"\n\t\tid=\"printAssignedMemo\">\n\t\t<app-payment-followup-assign-print></app-payment-followup-assign-print>\n\t</div>\n\t<div *ngIf=\"viewChallanRptPrint\" onafterprint=\"afterPrint()\"\n\t\tid=\"printChallanRpt\">\n\t\t<app-payment-followup-challan-print></app-payment-followup-challan-print>\n\t</div>\n</body>"

/***/ }),

/***/ "./src/app/cashmemo/payment-followup/payment-followup.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cashmemo/payment-followup/payment-followup.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentFollowupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFollowupComponent", function() { return PaymentFollowupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dataService_consignor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/consignor-service */ "./src/app/dataService/consignor-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//for drag and drop ends
//for popup modal starts 



var my = new Date();
//for datepicker ends
//for redirect to other page starts












//for redirect to other page ends
var PaymentFollowupComponent = /** @class */ (function () {
    function PaymentFollowupComponent(_formBuilder, memoService, modalService, masterReadService, router, datePipe, dialog, route, paymentFollowScreen) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.memoService = memoService;
        this.modalService = modalService;
        this.masterReadService = masterReadService;
        this.router = router;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.route = route;
        this.paymentFollowScreen = paymentFollowScreen;
        this.isLinear = false;
        //    the payment followup starts
        this.manualView = true;
        this.automaticView = false;
        //for entry less starts
        this.entryLessManualView = true;
        this.entryLessAutomaticView = false;
        //for entry less ends
        //    for payemt entry starts
        //for hide and show starts
        this.viewByCash = false;
        this.viewByCashs = false;
        this.viewByChequeNumber = false;
        this.viewByChequeDate = false;
        this.viewByConsigneeBankName = false;
        this.viewByReferenceNumber = false;
        this.paymentEntryManualView = true;
        this.paymentEntryAutomaticView = false;
        this.consigneeWiseDetails = false;
        //for Payment entry ends
        this.pfCollectionManDetailsDataList = [];
        this.pfCollectionManDetailsDataListForSearch = [];
        this.pfAssignedJobDetailsDataList = [];
        this.findModel = [];
        //for entry less starts
        this.lessEntriesDataTableDataList = [];
        this.consigneeWiseBalanceDetailsDataList = [];
        //for entry less ends
        //for Payment entry Starts
        this.paymentAmountEntriesDataList = [];
        //for datepicker ends
        this.controlActionType = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlCollectionMan = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlStation = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlCollectionManAssign = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlCollectionManToParty = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //for entry less starts
        this.controlConsigneeName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlEntryLessStation = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlEntryLessType = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //for entry less ends
        //for Payment entry Starts
        this.controlConsigneeBankName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlStationEntry = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.controlConsigneeNamePayment = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //for Payment entry ends
        //for Payment entry Starts
        //for Payment entry ends
        this.actionTypeOptions = [
            { id: 1, label: 'Assign' },
            { id: 2, label: 'Complete' },
            { id: 3, label: 'Status Back' },
            { id: 4, label: 'To Party' },
            { id: 5, label: 'Finish' },
        ];
        this.entryLessTypeOptions = [
            { id: 1, label: 'FLAT DISCOUNT' },
            { id: 2, label: 'RATE DIFFERENCE' },
            { id: 3, label: 'WEIGHT DIFFERENCE' },
            { id: 4, label: 'DEMMURAGE' },
            { id: 5, label: 'UNLOADING' },
            { id: 5, label: 'DOOR DELIVERY' },
            { id: 5, label: 'FOV' },
            { id: 5, label: 'TDS' },
            { id: 5, label: 'CLAIM' },
            { id: 5, label: 'FOC' }
        ];
        //  for less entry ends
        //for popup modal ends
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerPfCollectionManDetails = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTriggerPfAssignedJobDetails = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        //for entry less starts
        this.dtTriggerLessEntriesDataTable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTriggerConsigneeWiseBalanceDetails = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        //for entry less ends
        //for Payment entry Starts
        this.dtTriggerPaymentAmountEntries = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isLoggedIn = true;
        this.userDataDtoForCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.cashMemoDtoTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.cashMemoDtoForTPStmt = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.searchedMemoInfo = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoForMemoAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoForDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.assingedDetailsDataList = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.tempStoreDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getsearchInCollectionManTableFoDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getsearchInCollectionManTableForAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofCollectionMan = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoAlreadyExistParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.setValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.addInTable = true;
        this.userDataDtoForLRAssign = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.listOfLrNumber = [];
        this.tempstore = [];
        this.userDataDtoForLRAssignSRDStock = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForLRStatusBack = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.removeMaint = [];
        this.isExist = false;
        this.userDataDtoForLRToParty = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForLRToPartySRDStock = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.tempStoreForAllTrx = [];
        this.value = true;
        this.userDataDtoForLRFinish = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.cashMemoDtoForAssignPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.viewAssignMemoPrint = false;
        this.showPaymentFollowup = true;
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_16__["PartyMasterDto"]();
        this.consigneeOptionsAdd = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_16__["PartyMasterDto"]();
        this.searchedMemoForMemoExistInTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getsearchInCollectionManTableForEntryLess = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoEntryLess = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoEntryLessAny = [];
        this.isDuplicateLess = false;
        //    findModel: any;
        this.searchedMemoForMemoExistInLessEntryTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofMemoExistInLessEntryTableAny = [];
        this.isEdit = false;
        //    maintenanceDisc: any;
        this.maintenanceDiscArray = [];
        //    searchedMemoForDiscInLessEntry: CashMemoDto = new CashMemoDto();
        //    searchedMemoForDiscInLessEntryAny: any;
        //    getsearchInMemoExistDiscInLessEntry: CashMemoDto = new CashMemoDto();
        //    letValueofMemoExistDiscInLessEntry: CashMemoDto = new CashMemoDto();
        this.totalAmt = 0.0;
        this.totalBalAmt = 0.0;
        this.enteredAmt = 0.0;
        this.clickedRowAmt = 0.0;
        this.balanceAmountFinal = 0.0;
        this.amountToBeCollected = 0.0;
        //    searchedMemoFrmAssingedTable: CashMemoDto = new CashMemoDto();
        //    maintenanceMemoNumber: any;
        //    getsearchInMemoFrmAssingedTable: CashMemoDto = new CashMemoDto();
        //    letValueofMemoFrmAssingedTable: CashMemoDto = new CashMemoDto();
        this.letValueofMemoFrmAssingedTableAny = [];
        this.lrDtoForGroupStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.lrDtoForGroupStationSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.newAttribute = {};
        this.newAttributeForTDS = {};
        this.newAttributeForPayment = {};
        this.newAttributeForConsigneeWiseBalance = {};
        this.editTableId = null;
        this.editTableIdForPayment = null;
        this.slashSplitMemo = [];
        this.countOfLessLR = 0;
        this.sumOfLessAmt = 0;
        this.editlessamount = 0;
        this.getConsingeewisememoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.isDuplicateBulkLess = false;
        this.tdsBulkTotMemoAmt = 0.0;
        this.listOfMemoNumber = [];
        this.cashMemoDtoForTDS = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.cashMemoDtoForTDSRet = [];
        this.letValueofSearchInAssingedTableForStatusBack = [];
        this.userDataDtosLessTemp = [];
        this.userDataDtosPaymentChqTemp = [];
        this.userDataDtosPaymentNeftTemp = [];
        this.userDataDtoForStatusBack = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForLess = [];
        this.userDataDtoForPayment = [];
        this.userDataDtoForCash = [];
        this.userDataDtoForLessDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForPaymentDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForPaymentCashDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.isLessClicked = false;
        this.isPaymentClicked = false;
        //Pending for checking the below dto is used
        //    userDataDtoListForLess: UserDataDto[] = [];
        //   Pending  for checking purpose the viewNextBtn is made true so after checking do the it as false  
        this.viewNextBtn = false;
        this.userDataDtoForBankDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForBankDetailsRet = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.viewNewBankName = false;
        this.paymentLessManualView = true;
        this.paymentLessAutomaticView = false;
        this.viewByConsigneeName = false;
        this.showNextBtn = false;
        this.letValueofMemoExistInPaymentEntryTableAny = [];
        this.countOfAssignLR = 0;
        this.sumOfAssignLR = 0;
        this.userDataDtoForChq = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.balanceAmtInAddingTable = 0;
        this.countOfPaymentMemo = 0;
        this.sumOfMemoAmtPayment = 0;
        this.sumOfLessAmtPayment = 0;
        this.sumOfBalanceAmtPayment = 0;
        this.editMemoAmtForPayment = 0;
        this.editLessAmtForPayment = 0;
        this.editBalanceAmtForPayment = 0;
        this.userDataDtoForBankName = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.viewFinishBtn = true;
        this.viewShowNexInAssingBtn = false;
        this.viewShowNexInAssingBtn2 = false;
        this.showNextBtnInAssign = false;
        this.showForCheckandNeft = false;
        this.userDataDtoForFinishDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.isDuplicateChq = false;
        this.lrDtoForValidateChq = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.getChallanPrintValDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.lessDescOpt = [];
        this.lessDescOptSent = [];
        this.viewChallanRptPrint = false;
        this.consigneeWiseBalancelDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.consigneeWiseBalancelDtoForUpdate = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.countOfConsingeeWiseMemo = 0;
        this.sumOfConsingeeWiseTotalCashMemo = 0;
        this.sumOfConsingeeWiseGrandTotal = 0;
        this.sumOfConsingeeWisePartyLessDed = 0;
        this.sumOfConsingeeWiseAdvChqAmt = 0;
        this.sumOfConsingeeWiseNeftAmtl = 0;
        this.sumOfConsingeeWiseBalance = 0;
        this.countOFMemosCollectionTable = 0;
        this.sumOFMemosCollectionTable = 0;
        this.setCollectionDetails = 'new';
        this.setAssingedDetails = 'new';
        this.newAttForColTable = {};
        this.tempStoreForRemove = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.consigneeWiseTrigger = 'new';
        this.showLessLbl = false;
        this.showChqLbl = false;
        this.showNEFTLbl = false;
        this.showCashLbl = false;
        this.getCashValDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.userDataDtosPaymentCashTemp = [];
        this.showCashLblAmt = false;
        this.showSpinner = false;
        this.showResetBtn = false;
        this.showSpinnerForAction = false;
        this.setLessEntryDetails = 'new';
        this.setPaymentEntryDetails = 'new';
        this.tdsLessMulti = 1.5;
        this.collectionManTA = [];
        this.focusCollectionManTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.collectionManSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCollectionManTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.collectionManTA
                : _this.collectionManTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.collectionManAssignTA = [];
        this.focusCollectionManAssignTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.collectionManAssignSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCollectionManAssignTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.collectionManAssignTA
                : _this.collectionManAssignTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.collectionManToPartyTA = [];
        this.focusCollectionManToPartyTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.collectionManToPartySearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCollectionManToPartyTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.collectionManToPartyTA
                : _this.collectionManToPartyTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.stationTA = [];
        this.focusStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.stationSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.stationTA
                : _this.stationTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.entryLessStationTA = [];
        this.focusEntryLessStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.entryLessStationSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusEntryLessStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.entryLessStationTA
                : _this.entryLessStationTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.paymentLessStnTA = [];
        this.focusPaymentLessStnTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.paymentLessStnSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusPaymentLessStnTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.paymentLessStnTA
                : _this.paymentLessStnTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.consigneeNameTA = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        this.consigneeNameForPaymentTA = [];
        this.focusConsigneeNameForPaymentTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.consigneeNameForPaymentSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameForPaymentTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeNameForPayment = function (x) { return x.consigneeName; };
        this.consigneeBankNameTA = [];
        this.focusConsigneeBankNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.consigneeBankNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeBankNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.consigneeBankNameTA
                : _this.consigneeBankNameTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.actionTypeTA = [];
        this.focusActionTypeTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.actionTypeSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusActionTypeTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.actionTypeTA
                : _this.actionTypeTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.getCollectionManDetails = function () {
            _this.getCollectionManInfo();
            _this.masterReadService.getCollectionManMasterDetails(_this.userDataDtoForCollectionMan).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Warning",
                        text: "No Collection Man  found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlCollectionMan.reset();
                    _this.collectionManOptions = [];
                    _this.controlCollectionManAssign.reset();
                    _this.collectionManOptionsAssign = [];
                    _this.controlCollectionManToParty.reset();
                    _this.collectionManOptionsToParty = [];
                    _this.collectionManTA = [];
                    _this.collectionManAssignTA = [];
                    _this.collectionManToPartyTA = [];
                }
                else {
                    _this.controlCollectionMan.reset();
                    _this.userDataDtoForCollectionManRet = response;
                    _this.collectionManOptions = _this.userDataDtoForCollectionManRet;
                    _this.controlCollectionManAssign.reset();
                    _this.collectionManOptionsAssign = _this.userDataDtoForCollectionManRet;
                    _this.controlCollectionManToParty.reset();
                    _this.collectionManOptionsToParty = _this.userDataDtoForCollectionManRet;
                    _this.collectionManTA = [];
                    _this.collectionManAssignTA = [];
                    _this.collectionManToPartyTA = [];
                    for (var i = 0; i < _this.collectionManOptions.length; i++) {
                        _this.collectionManTA.push(_this.collectionManOptions[i].collectioMan);
                        _this.collectionManAssignTA.push(_this.collectionManOptions[i].collectioMan);
                        _this.collectionManToPartyTA.push(_this.collectionManOptions[i].collectioMan);
                    }
                    //                    this.enteredMemoCodeMain=this.userDataDtoReturnSession.office;
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getCollectionManGridDtails = function () {
            _this.showSpinnerForAction = true;
            _this.getCollectionManGridInfo();
            _this.memoService.getCashMemoUnAssgDetailService(_this.cashMemoDtoTable).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response) {
                    _this.pfCollectionManDetailsDataList = [];
                    _this.pfCollectionManDetailsDataListForSearch = [];
                    //                    this.pfCollectionManDetailsDataList = response;
                    _this.pfCollectionManDetailsDataListForSearch = response;
                    //                    this.rerender();
                    //                    console.log( this.pfCollectionManDetailsDataList );
                    //                    $('#collectionManTable').DataTable().destroy();
                    if (_this.setCollectionDetails == 'new') {
                        _this.dtTriggerPfCollectionManDetails.next();
                        //                        this.dtTriggerPfCollectionManDetails.unsubscribe();
                        //                        $('#collectionManTable').DataTable().destroy();
                        _this.setCollectionDetails = 'old';
                    }
                    _this.countOFMemosCollectionTable = 0;
                    _this.sumOFMemosCollectionTable = 0;
                    _this.newAttForColTable = {};
                    for (var i = 0; i < _this.pfCollectionManDetailsDataListForSearch.length; i++) {
                        _this.newAttForColTable.memoNumber = _this.pfCollectionManDetailsDataListForSearch[i].memoNumber;
                        _this.newAttForColTable.lrNumber = _this.pfCollectionManDetailsDataListForSearch[i].lrNumber;
                        _this.newAttForColTable.amount = _this.pfCollectionManDetailsDataListForSearch[i].amount;
                        _this.newAttForColTable.consigneeName = _this.pfCollectionManDetailsDataListForSearch[i].consigneeName;
                        _this.newAttForColTable.consigneeId = _this.pfCollectionManDetailsDataListForSearch[i].consigneeId;
                        _this.newAttForColTable.column1 = _this.pfCollectionManDetailsDataListForSearch[i].column1;
                        _this.newAttForColTable.enteredDate = _this.pfCollectionManDetailsDataListForSearch[i].enteredDate;
                        _this.pfCollectionManDetailsDataList.push(_this.newAttForColTable);
                        _this.newAttForColTable = {};
                        _this.countOFMemosCollectionTable = _this.countOFMemosCollectionTable + 1;
                        _this.sumOFMemosCollectionTable = _this.sumOFMemosCollectionTable + +(_this.pfCollectionManDetailsDataListForSearch[i].amount);
                    }
                    _this.cashMemoDtoTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.validateTPStmtPending = function (contentAcknowledgement) {
            _this.validateTPStmtPendingInfo();
            _this.memoService.getTPStmtPendingDetailsValidationCheck(_this.cashMemoDtoForTPStmt).subscribe(function (response) {
                if (response.length > 0) {
                    console.log('1');
                    _this.collectionManTP = _this.selectedCollectionMan;
                    _this.countTp = response.length;
                    _this.showSpinnerForAction = false;
                    _this.modalService.open(contentAcknowledgement, { centered: true });
                }
                else {
                    console.log('2');
                    _this.getCollectionManGridDtails();
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getStationDtails = function () {
            _this.getStationInfo();
            _this.masterReadService.getDestinationForLREntryService(_this.lrDtoForStation).subscribe(function (response) {
                if (response) {
                    _this.stationOptions = response;
                    _this.entryLessStationOptions = response;
                    _this.paymentLessStationOptions = response;
                    //                    console.log( this.entryLessStationOptions );
                    _this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
                    _this.stationTA = [];
                    _this.entryLessStationTA = [];
                    _this.paymentLessStnTA = [];
                    //                    console.log(this.stationOptions.length);
                    for (var i = 0; i < _this.stationOptions.length; i++) {
                        _this.stationTA.push(_this.stationOptions[i].destination);
                        _this.entryLessStationTA.push(_this.stationOptions[i].destination);
                        _this.paymentLessStnTA.push(_this.stationOptions[i].destination);
                    }
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Error",
                    text: "Server Error While Getting Station Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.updateCashMemoDetails = function (userDataDtoForLR) {
            _this.memoService.updateMemoDetailService(userDataDtoForLR).subscribe(function (response) {
                if (response.length == 0) {
                    //Pending 
                    alert('');
                }
                else {
                    if (userDataDtoForLR.mode == 'assign') {
                        _this.userDataDtoForStatusRet = '';
                        _this.userDataDtoForStatusRet = response;
                        if (_this.userDataDtoForStatusRet.result == 'success') {
                            // the swal is hidden bcoz it hide the print
                            //                            swal( {
                            //                                title: "Success",
                            //                                text: "Selected Cashmemos assigned to " + userDataDtoForLR.collectioMan,
                            //                                icon: "success",
                            //                                closeOnClickOutside: false,
                            //                                closeOnEsc: false,
                            //                            } );
                            _this.clearForAssign();
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: "Server Error",
                                text: "Server problem occurred while Assigning the memo's",
                                icon: "error",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            });
                        }
                    }
                    else if (userDataDtoForLR.mode == 'statusBack') {
                        _this.userDataDtoForStatusRet = '';
                        _this.userDataDtoForStatusRet = response;
                        if (_this.userDataDtoForStatusRet.result == 'success') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: "Success",
                                text: "Selected Cashmemos taken into stocks",
                                icon: "success",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            });
                            _this.clearForStatusBack();
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: "Server Error",
                                text: "Server problem occurred while taking the memo's Back",
                                icon: "error",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            });
                        }
                    }
                    else if (userDataDtoForLR.mode == 'toParty') {
                        _this.userDataDtoForStatusRet = '';
                        _this.userDataDtoForStatusRet = response;
                        if (_this.userDataDtoForStatusRet.result == 'success') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: "Success",
                                text: "Selected Cashmemos marks as To-Party",
                                icon: "success",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            });
                            _this.clearToParty();
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: "Server Error",
                                text: "Server problem occurred while marking the memo's as To-Party",
                                icon: "error",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            });
                        }
                    }
                    _this.pfAssignedJobDetailsDataList = [];
                    //Pending
                    _this.tempstore = [];
                    _this.tempStoreDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
                    //Pending 
                    _this.gridReconfigureAssg("other");
                    _this.controlCollectionMan.reset();
                    _this.controlCollectionManAssign.reset();
                    $("#consigneeBankName").val('');
                    $("#newBankName").val('');
                    _this.controlConsigneeBankName.reset();
                    _this.viewNewBankName = false;
                    _this.clearAllAfterBtnFinish();
                    _this.userDataDtoForStatusRet = '';
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.updateCloseCollectionMethod = function (userDataDtoForLRFinish) {
            _this.memoService.updateCloseCollectionService(userDataDtoForLRFinish).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Error",
                        text: "Server Error ",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.updateCloseCollection = '';
                }
                else {
                    _this.updateCloseCollection = response;
                    if (_this.updateCloseCollection.status == 'success') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "Success",
                            text: "Success",
                            icon: "success",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.clearFinish();
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "Error",
                            text: "Server Error ",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    _this.updateCloseCollection = '';
                    _this.tempstore = [];
                    _this.pfAssignedJobDetailsDataList = [];
                    _this.clearAllAfterBtnFinish();
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getConsigneeDetails = function () {
            _this.getConsigneeDetailsList();
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlConsigneeName.reset();
                    _this.consigneeNameOptions = [];
                    _this.controlConsigneeNamePayment.reset();
                    _this.consigneeNameOptionsPayment = [];
                    _this.consigneeNameTA = [];
                    _this.consigneeNameForPaymentTA = [];
                }
                else {
                    _this.controlConsigneeName.reset();
                    _this.consigneeNameOptions = response;
                    //                    console.log(this.consigneeNameOptions);
                    _this.consigneeNameTA = [];
                    _this.consigneeNameForPaymentTA = [];
                    $("#consigneeName").val('');
                    $("#consigneeNameForPayment").val('');
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                        _this.consigneeNameForPaymentTA.push(_this.consigneeNameOptions[i]);
                    }
                    _this.controlConsigneeNamePayment.reset();
                    _this.consigneeNameOptionsPayment = response;
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getGroupStationOfLRService = function (memoNum) {
            _this.memoService.getGroupStationOfLRNumber(_this.lrDtoForGroupStation).subscribe(function (response) {
                if (response.length == 0) {
                }
                else {
                    _this.lrDtoForGroupStationRet = response;
                    //                    console.log(this.lrDtoForGroupStationRet)
                    _this.lrDtoForGroupStationSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
                    _this.lrDtoForGroupStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
                    _this.lrDtoForGroupStationSet = _this.lrDtoForGroupStationRet;
                    _this.addInLessEntryTable(memoNum);
                    //                    console.log(this.lrDtoForGroupStationSet);
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getConsigneeWiseBalanceInfo = function () {
            _this.memoService.getConsigneeWiseBalanceDet(_this.consigneeWiseBalancelDto).subscribe(function (response) {
                if (response.length == 0) {
                }
                else {
                    _this.consigneeWiseBalancelRet = response;
                    _this.setValInConsigneeWiseBalanceDetails();
                    if (_this.consigneeWiseTrigger == 'new') {
                        _this.dtTriggerConsigneeWiseBalanceDetails.next();
                        _this.consigneeWiseTrigger = 'old';
                    }
                    //console.log( this.consigneeWiseBalancelRet );
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getConsigneeWiseBalanceUpdate = function () {
            _this.memoService.getConsigneeWiseBalanceDet(_this.consigneeWiseBalancelDtoForUpdate).subscribe(function (response) {
                if (response.length == 0) {
                }
                else {
                    _this.consigneeWiseBalancelRet = [];
                    _this.consigneeWiseBalancelRet = response;
                    _this.setValInConsigneeWiseBalanceDetails();
                    //    console.log( this.consigneeWiseBalancelRet );
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getTotLessAmt = function (cashMemoDtoForTDS) {
            _this.memoService.getTotalMemoLessAmount(cashMemoDtoForTDS).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "TDS Bulk Entry",
                        text: "Server problem occurred while calculating the TDS bulk details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.cashMemoDtoForTDS = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
                }
                else {
                    //    console.log( 'success' );
                    _this.cashMemoDtoForTDSRet = response;
                    //                    console.log( this.cashMemoDtoForTDSRet );
                    //                    this.cashMemoDtoForTDSSet = new CashMemoDto();
                    //                    this.cashMemoDtoForTDSSet = this.cashMemoDtoForTDSRet;
                    var tdsBulkAmt = 0.0;
                    var less = 0.0;
                    for (var i = 0; i < _this.cashMemoDtoForTDSRet.length; i++) {
                        var balAfterDedLess = +_this.cashMemoDtoForTDSRet[i].grandTotal - +_this.cashMemoDtoForTDSRet[i].less;
                        var calTds = Math.round((balAfterDedLess * _this.tdsLessMulti) / 100);
                        tdsBulkAmt = +tdsBulkAmt + +calTds;
                        less = +less + +_this.cashMemoDtoForTDSRet[i].less;
                        //                             console.log( balAfterDedLess );
                        //                           console.log( calTds );
                        //                         console.log( tdsBulkAmt );
                        //                        console.log( less );
                    }
                    $("#lessForTDS").val(less);
                    $("#tdsLessTwoPer").val(tdsBulkAmt);
                    $("#totalMemoForTDS").val(_this.listOfMemoNumber.length);
                    $("#memoAmountForTDS").val(_this.tdsBulkTotMemoAmt);
                    _this.tdsBulkTotMemoAmt = 0.0;
                    _this.listOfMemoNumber = [];
                    tdsBulkAmt = 0.0;
                    less = 0.0;
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.updateStatusBack = function (userDataDtoForStatusBack) {
            _this.memoService.updateMemoDetailService(userDataDtoForStatusBack).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Server Error",
                        text: "Server problem occurred while taken back the memo into stock",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.userDataDtoForStatusBackRet = response;
                    //    console.log( this.userDataDtoForStatusBackRet );
                    //need to check the splice
                    //                    this.pfAssignedJobDetailsDataList.splice( this.pfAssignedJobDetailsDataList.find( pfAssignedJobDetailsData => pfAssignedJobDetailsData.memoNumber === this.statusBackMemoNumber ), 1 );
                    if (_this.userDataDtoForStatusBackRet.result == 'success') {
                        var index = -1;
                        for (var i = 0; i < _this.pfAssignedJobDetailsDataList.length; i++) {
                            if (_this.pfAssignedJobDetailsDataList[i].memoNumber === _this.statusBackMemoNumber) {
                                index = i;
                                break;
                            }
                        }
                        if (index === -1) {
                            alert("Something gone wrong while removing the row");
                        }
                        //    console.log( this.pfAssignedJobDetailsDataList );
                        _this.pfAssignedJobDetailsDataList.splice(index, 1);
                        // console.log( this.pfAssignedJobDetailsDataList );
                        //Pending
                        _this.getTotalAmtOfCompleteLrs();
                        _this.calculateAllTotalAndBalance();
                        _this.statusBackMemoNumber = '';
                        $("#cashmemoNumberForStatusBack").val('');
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "Success",
                            text: "Cashmemos taken back into stocks",
                            icon: "success",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.updateConsigneeBalanceDetails();
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "Server Error",
                            text: "Server problem occurred while taken back the memo into stock",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.validateDuplicateChqEntry = function () {
            _this.enteredCheckNumber = $("#chequeNumber").val();
            //        this.selectedBankName = option.bankName;
            //        this.selectedBankName = $( "#consigneeBankName" ).val();
            _this.selectedBankName = _this.modelPartyBankName;
            _this.selectedPaymentMode = $("#paymentMode").val();
            _this.enteredCheckNumber = $("#chequeNumber").val();
            _this.lrDtoForValidateChq = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
            _this.lrDtoForValidateChq.chequeNumber = _this.enteredCheckNumber;
            _this.lrDtoForValidateChq.bankName = _this.selectedBankName;
            _this.memoService.validateChqNumberWithBank(_this.lrDtoForValidateChq).subscribe(function (response) {
                //                console.log(response);
                if (response != null) {
                    if (response.length == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "Server Error",
                            text: "Server problem occurred while Validating Cheque number",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else {
                        _this.validateChqRet = response;
                        if (_this.validateChqRet.size > 0) {
                            _this.isDuplicateChq = true;
                            //                        this.selectedPaymentMode = $( "#paymentMode" ).val();
                            //                        this.enteredCheckNumber = $( "#chequeNumber" ).val();
                            //                        this.selectedBankName = option.bankName;
                            //                        this.selectedBankName = $( "#consigneeBankName" ).val();
                            if (_this.isDuplicateChq == true) {
                                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                    title: "Not Allowed",
                                    text: "Cheque Number " + _this.enteredCheckNumber + " with Bank Name " + _this.selectedBankName + " already exist, please verify!",
                                    icon: "warning",
                                    closeOnClickOutside: false,
                                    closeOnEsc: false,
                                });
                                $("#chequeNumber").val('');
                                //                            this.getPartyBankDetailsService()
                            }
                        }
                        else {
                            _this.isDuplicateChq = false;
                        }
                        // console.log( this.isDuplicateChq );
                        // console.log( this.selectedPaymentMode );
                        if (_this.selectedPaymentMode != '' && _this.selectedPaymentMode == 'cheque') {
                            window.setTimeout(function () {
                                //                            $( "#paymentLessStn" ).focus();
                                $("#memoNumberForManualLessPayment").focus();
                            }, 100);
                        }
                        else if (_this.selectedPaymentMode != '' && _this.selectedPaymentMode == 'neft') {
                            window.setTimeout(function () {
                                $("#referenceNumber").focus();
                            }, 100);
                        }
                    }
                }
                else {
                    _this.isDuplicateChq = false;
                    if (_this.selectedPaymentMode != '' && _this.selectedPaymentMode == 'cheque') {
                        window.setTimeout(function () {
                            //                            $( "#paymentLessStn" ).focus();
                            $("#memoNumberForManualLessPayment").focus();
                        }, 100);
                    }
                    else if (_this.selectedPaymentMode != '' && _this.selectedPaymentMode == 'neft') {
                        window.setTimeout(function () {
                            $("#referenceNumber").focus();
                        }, 100);
                    }
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
            //        return this.isDuplicateChq;
        };
        this.getLessDetails = function (userDataDtoForChq, keyEnter) {
            _this.memoService.getMemoLessDetails(userDataDtoForChq).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Server Error",
                        text: "Server problem occurred while taken back the memo into stock",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.userDataDtoForChqRet = response;
                    //                     console.log( this.userDataDtoForChqRet );
                    for (var i = 0; i < _this.userDataDtoForChqRet.length; i++) {
                        if (_this.userDataDtoForChqRet[i].status == 'completed') {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: "Duplicate Entry",
                                text: "Payment entry is already done for this memo, if want to edit, click on the corresponding Total beside!",
                                icon: "error",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            });
                            _this.selectedEntryType = $("#entryLessPaymentEntry").val();
                            _this.selectedCodeForManual = $("#codeForManualLessPayment").val();
                            _this.selectedMemoNumberForManual = $("#memoNumberForManualLessPayment").val();
                            _this.selectedMemoNumberForAutomatic = $("#memoNumberForAutomaticLessPayment").val();
                            _this.selectedConsignee = $("#consigneeNameForPayment").val();
                            if (_this.selectedEntryType == 'paymentLessAutomatic') {
                                window.setTimeout(function () {
                                    $("#memoNumberForAutomaticLessPayment").val('');
                                    $("#memoNumberForAutomaticLessPayment").focus();
                                }, 100);
                            }
                            else {
                                window.setTimeout(function () {
                                    $("#memoNumberForManualLessPayment").val('');
                                    $("#memoNumberForManualLessPayment").focus();
                                }, 100);
                            }
                        }
                        else {
                            window.setTimeout(function () {
                                //                                $( "#paymentLessAmount" ).focus();
                                $("#memoNumberForManualLessPayment").focus();
                            }, 100);
                            //                            for checking Pending added by basha bcoz after the memonumber enter key it directly added in table so i did this code to prevent adding in table
                            //                            if ( keyEnter != null && keyEnter == 'paymentLess' ) {
                            var totalLess = 0.0;
                            for (var j = 0; j < _this.userDataDtosLessTemp.length; j++) {
                                if (_this.userDataDtosLessTemp[j].memoNumber == _this.userDataDtoForChq.memoNumber) {
                                    totalLess = +totalLess + +_this.userDataDtosLessTemp[j].paymentAmt;
                                }
                            }
                            // if its edit then consider nflessamt value
                            //                   console.log( totalLess );
                            _this.balanceAmtInAddingTable = +_this.userDataDtoForChqRet[i].amount - +totalLess;
                            //                   console.log( this.balanceAmtInAddingTable, this.userDataDtoForChqRet[i].amount, totalLess );
                            if (_this.isEdit) {
                                _this.enteredLessAmt = $("#paymentLessAmount").val();
                                _this.enteredLessAmt = _this.enteredLessAmt == null ? 0.0 : _this.enteredLessAmt == '' ? 0.0 : _this.enteredLessAmt;
                                _this.balanceAmtInAddingTable = _this.enteredLessAmt;
                            }
                            _this.addInPaymentTable(_this.userDataDtoForChq.memoNumber, totalLess, _this.userDataDtoForChqRet[i].amount);
                            //                            }
                        }
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        //    finishCompleteEntries() {
        //        for ( let i = 0; i < this.userDataDtosPaymentChqTemp.length; i++ ) {
        //            let paymentMode = this.userDataDtosPaymentChqTemp[i].mode;
        //            let paymentType = this.userDataDtosPaymentChqTemp[i].paymentType;
        //            if (  paymentMode == '' || paymentMode == null || paymentType == '' || paymentType == null ) {
        //                swal( {
        //                    title: "Warning",
        //                    text: "Payment Type or PaymentMmode is missing for lr's In Check Entries",
        //                    icon: "warning",
        //                    closeOnClickOutside: false,
        //                    closeOnEsc: false,
        //                } );
        //                return false;
        //
        //            }
        //        }
        //        for ( let i = 0; i < this.userDataDtosPaymentNeftTemp.length; i++ ) {
        //            let paymentMode = this.userDataDtosPaymentNeftTemp[i].mode;
        //            let paymentType = this.userDataDtosPaymentNeftTemp[i].paymentType;
        //            if (  paymentMode == '' || paymentMode == null || paymentType == '' || paymentType == null ) {
        //                swal( {
        //                    title: "Warning",
        //                    text: "Payment Type or PaymentMmode is missing for lr's In NEFT/PDC Entries",
        //                    icon: "warning",
        //                    closeOnClickOutside: false,
        //                    closeOnEsc: false,
        //                } );
        //                return false;
        //
        //            }
        //        }
        //        for ( let i = 0; i < this.userDataDtosPaymentCashTemp.length; i++ ) {
        //            let paymentMode = this.userDataDtosPaymentCashTemp[i].mode;
        //            let paymentType = this.userDataDtosPaymentCashTemp[i].paymentType;
        //            if ( paymentMode == '' || paymentMode == null || paymentType == '' || paymentType == null ) {
        //                swal( {
        //                    title: "Warning",
        //                    text: "Payment Type or PaymentMmode is missing for lr's In Cash Entries",
        //                    icon: "warning",
        //                    closeOnClickOutside: false,
        //                    closeOnEsc: false,
        //                } );
        //                return false;
        //
        //            }
        //        }
        //
        //        this.userDataDtoForFinishDetails = new UserDataDto();
        //        this.userDataDtoForFinishDetails.listLessDetails = this.userDataDtosLessTemp;
        //        this.finishCompleteDetails();
        //        //    console.log( this.userDataDtoForFinishDetails );
        //    }
        this.finishCompleteDetails = function () {
            _this.memoService.updateCashMemoLessDetails(_this.userDataDtoForFinishDetails).subscribe(function (response) {
                _this.retrunStatus = response;
                if (_this.retrunStatus.status == "success") {
                    _this.finishPaymenChqEntries();
                }
                else {
                    _this.showSpinner = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Memo Less",
                        text: "Server Problem occurred while updating the Memo Less details",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                _this.retrunStatus = '';
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.finishPaymenChqDetails = function () {
            _this.memoService.updateCashMemoCompleteDetails(_this.userDataDtoForFinishDetails).subscribe(function (response) {
                _this.retrunStatus = response;
                if (_this.retrunStatus.status == "success") {
                    _this.finishPaymenNeftEntries();
                }
                else {
                    _this.showSpinner = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Memo Payment",
                        text: "Server Problem occurred while updating the Memo Cheque Payment details",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                _this.retrunStatus = '';
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.finishPaymenNeftDetails = function () {
            _this.memoService.updateCashMemoCompleteDetails(_this.userDataDtoForFinishDetails).subscribe(function (response) {
                _this.retrunStatus = response;
                if (_this.retrunStatus.status == "success") {
                    _this.updateCashEntries();
                }
                else {
                    _this.showSpinner = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Memo Payment",
                        text: "Server Problem occurred while updating the Memo Neft Payment details",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                _this.retrunStatus = '';
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.updateCashDetails = function () {
            _this.memoService.updateCashMemoCompleteDetails(_this.userDataDtoForFinishDetails).subscribe(function (response) {
                _this.retrunStatus = response;
                if (_this.retrunStatus.status == "success") {
                    _this.updateCollectionNumberOnComplete();
                }
                else {
                    _this.showSpinner = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Memo Payment",
                        text: "Server Problem occurred while updating the Memo Cash Payment details",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                _this.retrunStatus = '';
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.updateCollectionNumberOnCompleteDetails = function () {
            _this.memoService.updateCloseCollectionService(_this.userDataDtoForFinishDetails).subscribe(function (response) {
                _this.updateCloseCollection = response;
                _this.showSpinner = false;
                if (_this.updateCloseCollection.status == 'success') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Memo Payment",
                        text: "Payment details updated successfully",
                        icon: "success",
                        closeOnClickOutside: true,
                        closeOnEsc: true,
                    }).then(function () {
                        _this.getAllLessDetailsOnFinish();
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Error",
                        text: "Server Problem occurred while closing the collection",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                _this.updateCloseCollection = '';
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getAllLessDetailsOnFinishDetails = function () {
            _this.memoService.getDifferentMemoLessDetailsBasedOnLessDesc(_this.userDataDtoForFinishDetails).subscribe(function (response) {
                if (response.length == 0) {
                    //Pending
                    alert('');
                }
                else {
                    //Pending
                    _this.diffLessRet = response;
                    _this.setPringForChallanReport();
                    //                    Object.keys(this.diffLessRet.hashMapDiffLess);
                    //                    for ( let key in this.diffLessRet.hashMapDiffLess ) {
                    //                        //Whatever you want to do with key or obj[key]
                    //                        console.log( key );
                    //                        console.log( this.diffLessRet.hashMapDiffLess[key] );
                    //                    }
                    //                    console.log( this.diffLessRet );
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
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
            //            config.max = 100;
            //            config.striped = true;
            //            config.animated = true;
            //            config.type = 'success';
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.setActionVal();
            this.collectionManLrDetailsDataTable();
            this.assignedJobDetailsTable();
            this.getCollectionManDetails();
            this.consigneeWiseDetailsTable();
            this.getStationDtails();
            this.selectTodayCompletedOnDate();
            this.getConsigneeDetails();
            this.getPartyBankDetailsService();
            this.lessEntriesTable();
            this.paymentEntriesDataTable();
            //            console.log(this.userDataDtoReturnSession.addressId);
            //            console.log( this.userDataDtoReturnSession.sortedMapFeatures );
            //            console.log( Object.keys( this.userDataDtoReturnSession.sortedMapFeatures ) );
            //            for ( let key in this.userDataDtoReturnSession.sortedMapFeatures ) {
            //                //Whatever you want to do with key or obj[key]
            //                if ( key == 'LR' ) {
            //                    for ( let i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.LR.length; i++ ) {
            //                        //Whatever you want to do with key or obj[key]
            //                        if ( this.userDataDtoReturnSession.sortedMapFeatures.LR[i] == 'LR Delivery Status' ) {
            //                            console.log( 'LR Delivery Status' );
            //                        }
            //                    }
            //                }
            //            }
        }
    }
    PaymentFollowupComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PaymentFollowupComponent.prototype.selectTodayCompletedOnDate = function () {
        this.tdyCompletedOnDate = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
        //        console.log( this.tdyCompletedOnDate );
        $("#completedOnDate").val(this.tdyCompletedOnDate);
    };
    PaymentFollowupComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
                //                this.dtTriggerPfAssignedJobDetails.next();
                //                this.dtTriggerPfCollectionManDetails.next();
                //                console.log('The DataTable ${index} instance ID is:${dtInstance.table().node().id}');
                //                console.log('The DataTable ${index} instance ID is:${dtInstance.table().node().id}');
            });
        });
    };
    PaymentFollowupComponent.prototype.ngOnInit = function () {
        //        the below is for validator starts
        this.firstFormGroup = this._formBuilder.group({
        //        firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
        //            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
        //            thirdCtrl: ['', Validators.required]
        });
        this.fourthFormGroup = this._formBuilder.group({
        //            fourthCtrl: ['', Validators.required]
        });
        //        the below is for validator ends
        //        pages
        //first datatable starts
        //        this.dtOptionsPfCollectionManDetails = {
        //            // the below code is for button export starts
        //            dom: 'Bfrtip',
        //            /*buttons: [
        //                      'excel', 'print'
        //                  ],*/
        //            buttons: [
        //                //                {
        //                //                    extend: 'excel',
        //                //                    text: '<i class="fas fa-file-excel"> Excel</i>',
        //                //                    titleAttr: 'Excel',
        //                //                    exportOptions: {
        //                //                        columns: ':visible'
        //                //                    }
        //                //                },
        //                //                {
        //                //                    extend: 'print',
        //                //                    text: '<i class="fas fa-print"> Print</i>',
        //                //                    titleAttr: 'Print',
        //                //
        //                //                }
        //
        //            ],
        //
        //            // the below code is for button export ends                          
        //
        //            //place holder in search/filter in datatable starts
        //            language: {
        //                search: "_INPUT_",
        //                searchPlaceholder: "Search..."
        //            },
        //            //place holder in search/filter in datatable ends
        //
        //            processing: true,
        //            //scroll in datatable starts
        //            responsive: true,
        //            "scrollX": true,
        //            "scrollY": 200,
        //            "scrollCollapse": true,
        //            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //            pagingType: 'full_numbers',
        //            pageLength: 6,
        //            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //            //scroll in datatable ends
        //
        //
        //        },//first datatable ends
        //second datatable starts 
        //        this.dtOptionPfAssignedJobDetails = {
        //            // the below code is for button export starts
        //            dom: 'Bfrtip',
        //            /*buttons: [
        //                      'excel', 'print'
        //                  ],*/
        //            buttons: [
        //                //                    {
        //                //                        extend: 'excel',
        //                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
        //                //                        titleAttr: 'Excel',
        //                //                        exportOptions: {
        //                //                            columns: ':visible'
        //                //                        }
        //                //                    },
        //                //                    {
        //                //                        extend: 'print',
        //                //                        text: '<i class="fas fa-print"> Print</i>',
        //                //                        titleAttr: 'Print',
        //                //                    }
        //            ],
        //            // the below code is for button export ends
        //            //place holder in search/filter in datatable starts
        //            language: {
        //                search: "_INPUT_",
        //                searchPlaceholder: "Search..."
        //            },
        //            //place holder in search/filter in datatable ends
        //            processing: true,
        //            //scroll in datatable starts
        //            responsive: true,
        //            "scrollX": true,
        //            "scrollY": 200,
        //            "scrollCollapse": true,
        //            //this to paggination and content like showing 1 to 3 of 20 entries Starts
        //            pagingType: 'full_numbers',
        //            pageLength: 6,
        //            //this to paggination and content like showing 1 to 3 of 20 entries Starts
        //            //scroll in datatable ends
        //        },
        //second datatable ends
        //for entry less starts
        //third datatable starts
        //        this.dtOptionsLessEntriesDataTable = {
        //            // the below code is for button export starts
        //            dom: 'Bfrtip',
        //            /*buttons: [
        //                      'excel', 'print'
        //                  ],*/
        //            buttons: [
        //                //                {
        //                //                    extend: 'excel',
        //                //                    text: '<i class="fas fa-file-excel"> Excel</i>',
        //                //                    titleAttr: 'Excel',
        //                //                    exportOptions: {
        //                //                        columns: ':visible'
        //                //                    }
        //                //                },
        //                //                {
        //                //                    extend: 'print',
        //                //                    text: '<i class="fas fa-print"> Print</i>',
        //                //                    titleAttr: 'Print',
        //                //
        //                //                }
        //
        //            ],
        //
        //            // the below code is for button export ends                          
        //
        //            //place holder in search/filter in datatable starts
        //            language: {
        //                search: "_INPUT_",
        //                searchPlaceholder: "Search..."
        //            },
        //            //place holder in search/filter in datatable ends
        //
        //            processing: true,
        //            //scroll in datatable starts
        //            responsive: true,
        //            "scrollX": true,
        //            "scrollY": 200,
        //            "scrollCollapse": true,
        //            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //            "paging": false,
        //            "info": false,
        //            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //            //scroll in datatable ends
        //
        //
        //        },//third datatable ends
        //fourth datatable starts
        //            this.dtOptionsConsigneeWiseBalanceDetails = {
        //                // the below code is for button export starts
        //                dom: 'Bfrtip',
        //                /*buttons: [
        //                          'excel', 'print'
        //                      ],*/
        //                buttons: [
        //                    //                {
        //                    //                    extend: 'excel',
        //                    //                    text: '<i class="fas fa-file-excel"> Excel</i>',
        //                    //                    titleAttr: 'Excel',
        //                    //                    exportOptions: {
        //                    //                        columns: ':visible'
        //                    //                    }
        //                    //                },
        //                    //                {
        //                    //                    extend: 'print',
        //                    //                    text: '<i class="fas fa-print"> Print</i>',
        //                    //                    titleAttr: 'Print',
        //                    //
        //                    //                }
        //
        //                ],
        //
        //                // the below code is for button export ends                          
        //
        //                //place holder in search/filter in datatable starts
        //                language: {
        //                    search: "_INPUT_",
        //                    searchPlaceholder: "Search..."
        //                },
        //                //place holder in search/filter in datatable ends
        //
        //                processing: true,
        //                //scroll in datatable starts
        //                responsive: true,
        //                "scrollX": true,
        //                "scrollY": 200,
        //                "scrollCollapse": true,
        //                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //                "paging": false,
        //                "info": false,
        //                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //                //scroll in datatable ends
        //
        //
        //            },//fourth datatable ends
        //for entry less ends
        //for Payment entry Starts
        //fifth datatable starts
        //            this.dtOptionsPaymentAmountEntries = {
        //                // the below code is for button export starts
        //                dom: 'Bfrtip',
        //                /*buttons: [
        //                          'excel', 'print'
        //                      ],*/
        //                buttons: [
        //                ],
        //
        //                // the below code is for button export ends                          
        //
        //                //place holder in search/filter in datatable starts
        //                language: {
        //                    search: "_INPUT_",
        //                    searchPlaceholder: "Search..."
        //                },
        //                //place holder in search/filter in datatable ends
        //
        //                processing: true,
        //                //scroll in datatable starts
        //                responsive: true,
        //                "scrollX": true,
        //                "scrollY": 200,
        //                "scrollCollapse": true,
        //                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //                "paging": false,
        //                "info": false,
        //                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //                //scroll in datatable ends
        //
        //
        //            },//fifth datatable ends
        //for Payment entry ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        //            this.getDataFrmServiceFrPfCollectionManDetailsTable = this.paymentFollowScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionPfCollectionManDetails = this.getDataFrmServiceFrPfCollectionManDetailsTable.subscribe( data => {
        //            this.pfCollectionManDetailsDataList = data['data'];
        //            this.dtTriggerPfCollectionManDetails.next();
        //        } );
        //first service ends
        //second service starts 
        //            this.getDataFrmServiceFrPfAssignedJobDetailsTable = this.paymentFollowScreen.getSummaryData();
        //        this.onDestroyUnsubscribtionPfAssignedJobDetails = this.getDataFrmServiceFrPfAssignedJobDetailsTable.subscribe( data => {
        //            this.pfAssignedJobDetailsDataList = data['data'];
        //            this.dtTriggerPfAssignedJobDetails.next();
        //        } );
        //second service ends
        //for entry less starts
        //third service starts 
        //            this.getDataFrmServiceFrLessEntriesDataTableTable = this.paymentFollowScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionLessEntriesDataTable = this.getDataFrmServiceFrLessEntriesDataTableTable.subscribe( data => {
        //            this.lessEntriesDataTableDataList = data['data'];
        //            this.dtTriggerLessEntriesDataTable.next();
        //        } );
        //third service ends
        //fourth service starts 
        //  this.getDataFrmServiceFrConsigneeWiseBalanceDetailsTable = this.paymentFollowScreen.getSummaryData();
        //        this.onDestroyUnsubscribtionConsigneeWiseBalanceDetails = this.getDataFrmServiceFrConsigneeWiseBalanceDetailsTable.subscribe( data => {
        //            this.consigneeWiseBalanceDetailsDataList = data['data'];
        //            this.dtTriggerConsigneeWiseBalanceDetails.next();
        //        } );
        //fourth service ends
        //for entry less ends
        //for Payment entry Starts
        //fifth service starts 
        //        this.getDataFrmServiceFrPaymentAmountEntriesDataTable = this.paymentFollowScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionPaymentAmountEntries = this.getDataFrmServiceFrPaymentAmountEntriesDataTable.subscribe( data => {
        //            this.paymentAmountEntriesDataList = data['data'];
        //            this.dtTriggerPaymentAmountEntries.next();
        //        } );
        //fifth service ends
        //for Payment entry ends
        //the below code is for the getting data through json ends
    };
    PaymentFollowupComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerPfCollectionManDetails.unsubscribe();
        this.dtTriggerPfAssignedJobDetails.unsubscribe();
        //for entry less starts
        this.dtTriggerLessEntriesDataTable.unsubscribe();
        this.dtTriggerConsigneeWiseBalanceDetails.unsubscribe();
        //for entry less ends
        //for Payment entry Starts
        this.dtTriggerPaymentAmountEntries.unsubscribe();
        //for Payment entry ends
        //for Payment entry ends
    };
    //for the select option with filter starts
    PaymentFollowupComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    PaymentFollowupComponent.prototype.RowSelected = function (confirmedConsignorListData) {
        this.selectedUser = confirmedConsignorListData;
        this.consignorName = this.selectedUser.name;
        //        console.log( this.selectedUser.name );
    };
    //to insert value of selected row in table to input field ends
    //    the payment followup starts
    //for popup modal starts 
    PaymentFollowupComponent.prototype.openNotAssignedPopup = function (contentNotAssigned) {
        var _this = this;
        this.modalService.open(contentNotAssigned, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContentNotAssigned = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContentNotAssigned = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PaymentFollowupComponent.prototype.openAssignedPopup = function (contentAssigned) {
        var _this = this;
        this.modalService.open(contentAssigned, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContentAssigned = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContentAssigned = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PaymentFollowupComponent.prototype.openPopup = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContent = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContent = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PaymentFollowupComponent.prototype.openAcknowledgementPopup = function (contentAcknowledgement) {
        var _this = this;
        this.modalService.open(contentAcknowledgement, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContentAcknowledgement = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContentAcknowledgement = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    //    //    for less entry starts
    //    openLessEntryTdsPopup( contentLessEntryTds ) {
    //        this.modalService.open( contentLessEntryTds, { centered: true } ).result.then(
    //            resultContent => {
    //                this.closeResultContentLessEntryTds = `Closed with: ${resultContent}`;
    //            },
    //            reason => {
    //                this.closeResultContentLessEntryTds = `Dismissed ${this.getDismissReason( reason )}`;
    //            }
    //        );
    //    }
    //    openLessEntryStatusBackPopup( contentLessEntryStatusBack ) {
    //        this.modalService.open( contentLessEntryStatusBack, { centered: true } ).result.then(
    //            resultContent => {
    //                this.closeResultContentLessEntryStatusBack = `Closed with: ${resultContent}`;
    //            },
    //            reason => {
    //                this.closeResultContentLessEntryStatusBack = `Dismissed ${this.getDismissReason( reason )}`;
    //            }
    //        );
    //    }
    PaymentFollowupComponent.prototype.open10 = function (content10) {
        var _this = this;
        this.modalService.open(content10, { centered: true }).result.then(function (result) {
            _this.closeResultForCollectionManAssign = "Closed with: " + result;
        }, function (reason) {
            _this.closeResultForCollectionManAssign = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PaymentFollowupComponent.prototype.open11 = function (content11) {
        var _this = this;
        this.modalService.open(content11, { centered: true }).result.then(function (result) {
            _this.closeResultForCollectionManAssign = "Closed with: " + result;
        }, function (reason) {
            _this.closeResultForCollectionManAssign = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    //  for less entry ends    
    PaymentFollowupComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //for popup modal ends
    PaymentFollowupComponent.prototype.entryTypeMode = function (entryType) {
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
    //    the payment followup ends
    //  for payment entry starts
    PaymentFollowupComponent.prototype.entryLessPaymentEntryMode = function (paymentLessEntryType) {
        if (paymentLessEntryType === 'paymentLessManual') {
            this.paymentLessManualView = true;
            this.paymentLessAutomaticView = false;
        }
        else if (paymentLessEntryType === 'paymentLessAutomatic') {
            this.paymentLessManualView = false;
            this.paymentLessAutomaticView = true;
        }
        else {
            this.paymentLessManualView = false;
            this.paymentLessAutomaticView = false;
        }
    };
    //for entry less ends
    //for entry less starts
    //for hide and show starts
    PaymentFollowupComponent.prototype.entryLessEntryTypeMode = function (entryLessPaymentEntry) {
        if (entryLessPaymentEntry === 'entryLessManual') {
            this.entryLessManualView = true;
            this.entryLessAutomaticView = false;
        }
        else if (entryLessPaymentEntry === 'entryLessAutomatic') {
            this.entryLessManualView = false;
            this.entryLessAutomaticView = true;
        }
        else {
            this.entryLessManualView = false;
            this.entryLessAutomaticView = false;
        }
    };
    PaymentFollowupComponent.prototype.paymentModeMode = function (paymentMode) {
        $("#consigneeNameForPayment").val('');
        this.selectedConsigneeId = 0;
        this.modelConsigneeNameForPayment = '';
        if (paymentMode === 'cash') {
            //   console.log( 'cash' );
            this.viewByCash = true;
            this.viewByCashs = true;
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = false;
            this.viewByReferenceNumber = false;
            this.viewByConsigneeName = false;
            //            this.showNextBtn = false;
            this.showNextBtn = true;
            //            this.controlConsigneeBankName.reset();
            //Pending process 
            //            txtBankName.clear();
            //            cbBankName.clear();
            $("#consigneeBankName").val('');
            $("#newBankName").val('');
            this.selectedConsigneeId = 0;
            this.payType = "Cash";
            this.payMode = "completedcash";
            this.showForCheckandNeft = false;
            this.viewNewBankName = false;
            this.paymentAmountEntriesDataList = [];
            this.countOfPaymentMemo = 0;
            this.sumOfMemoAmtPayment = 0;
            this.sumOfLessAmtPayment = 0;
            this.sumOfBalanceAmtPayment = 0;
            $("#consigneeNameForPayment").val('');
            this.modelConsigneeNameForPayment = '';
            $("#codeForManualLessPayment").val('');
            $("#codeForManualLessPayment").val(this.memoFormat);
            this.modelStationForPaymentAmt = this.memoFormat;
        }
        else if (paymentMode === 'cheque') {
            //   console.log( 'cheque' );
            $("#consigneeNameForPayment").val('');
            this.viewByCash = true;
            this.viewByCashs = false;
            this.viewByChequeNumber = true;
            this.viewByChequeDate = true;
            this.viewByConsigneeBankName = true;
            this.viewByReferenceNumber = false;
            this.viewByConsigneeName = true;
            this.showNextBtn = true;
            this.payType = "Cheque";
            this.payMode = "completedcheque";
            $("#consigneeBankName").val('');
            $("#newBankName").val('');
            this.selectedConsigneeId = 0;
            //            this.controlConsigneeBankName.reset();
            this.showForCheckandNeft = true;
            this.viewNewBankName = false;
            this.paymentAmountEntriesDataList = [];
            this.countOfPaymentMemo = 0;
            this.sumOfMemoAmtPayment = 0;
            this.sumOfLessAmtPayment = 0;
            this.sumOfBalanceAmtPayment = 0;
            this.modelConsigneeNameForPayment = '';
            //    console.log(this.modelStationName);
            this.modelStationForPayment = this.modelStationName;
            $("#codeForManualLessPayment").val('');
            $("#codeForManualLessPayment").val(this.memoFormat);
            this.modelStationForPaymentAmt = this.memoFormat;
        }
        else if (paymentMode === 'neft') {
            //   console.log( 'neft' );
            $("#consigneeNameForPayment").val('');
            this.viewByCash = true;
            this.viewByCashs = false;
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = true;
            this.viewByReferenceNumber = true;
            this.viewByConsigneeName = true;
            this.showNextBtn = true;
            this.payType = "NEFT/IMPS";
            this.payMode = "completedneft";
            $("#consigneeBankName").val('');
            $("#newBankName").val('');
            this.selectedConsigneeId = 0;
            //            this.controlConsigneeBankName.reset();
            this.showForCheckandNeft = true;
            this.viewNewBankName = false;
            this.paymentAmountEntriesDataList = [];
            this.countOfPaymentMemo = 0;
            this.sumOfMemoAmtPayment = 0;
            this.sumOfLessAmtPayment = 0;
            this.sumOfBalanceAmtPayment = 0;
            this.modelConsigneeNameForPayment = '';
            this.modelStationForPayment = this.modelStationName;
            $("#codeForManualLessPayment").val(this.memoFormat);
            this.modelStationForPaymentAmt = this.memoFormat;
        }
        else {
            this.viewByCash = false;
            this.viewByCashs = false;
            this.viewByChequeNumber = false;
            this.viewByChequeDate = false;
            this.viewByConsigneeBankName = false;
            this.viewByReferenceNumber = false;
            this.viewByConsigneeName = false;
            this.showNextBtn = true;
            this.payType = "";
            this.payMode = "";
            $("#consigneeBankName").val('');
            $("#newBankName").val('');
            this.selectedConsigneeId = 0;
            //            this.controlConsigneeBankName.reset();
            this.showForCheckandNeft = false;
            this.viewNewBankName = false;
            this.paymentAmountEntriesDataList = [];
            this.countOfPaymentMemo = 0;
            this.sumOfMemoAmtPayment = 0;
            this.sumOfLessAmtPayment = 0;
            this.sumOfBalanceAmtPayment = 0;
            $("#consigneeNameForPayment").val('');
            this.modelConsigneeNameForPayment = '';
            this.modelStationForPaymentAmt = this.memoFormat;
        }
    };
    //for hide and show ends
    //    for payment entry ends
    //for datepicker starts
    // the selectToday is the method for  selecting todays'z date
    PaymentFollowupComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker ends
    //for redirect to other page starts
    PaymentFollowupComponent.prototype.goToCollectionManPage = function () {
        this.router.navigate(['/report/cashmemo-report/collectionManReport']);
    };
    //for redirect to other page starts
    //    hide and show consignee wise details starts
    PaymentFollowupComponent.prototype.showTheConsigneeWiseDetails = function () {
        this.consigneeWiseDetails = true;
        this.nextEntryType = 'Less Entry';
        this.modelStationForLess = this.modelStationName;
        this.modelStationForLessAmt = this.memoFormat;
        this.callForCompleteCollection();
    };
    PaymentFollowupComponent.prototype.setPaymentEntry = function () {
        this.nextEntryType = 'Payment Entry';
        this.updateLessDetails();
        // calculate total
        this.calculateAllTotalAndBalance();
        //Pending
        this.updateConsigneeBalanceDetails();
        this.showChqLbl = true;
        this.showNEFTLbl = true;
        this.showCashLbl = true;
        //// newly added basha       
        this.viewByCash = false;
        this.viewByCashs = false;
        this.viewByChequeNumber = false;
        this.viewByChequeDate = false;
        this.viewByConsigneeBankName = false;
        this.viewByReferenceNumber = false;
        this.viewByConsigneeName = false;
        this.showNextBtn = true;
        this.payType = "";
        this.payMode = "";
        $("#consigneeBankName").val('');
        $("#newBankName").val('');
        this.showForCheckandNeft = false;
        this.viewNewBankName = false;
        this.paymentAmountEntriesDataList = [];
        this.countOfPaymentMemo = 0;
        this.sumOfMemoAmtPayment = 0;
        this.sumOfLessAmtPayment = 0;
        this.sumOfBalanceAmtPayment = 0;
        $("#consigneeNameForPayment").val('');
        this.selectedConsigneeId = 0;
        this.modelConsigneeNameForPayment = '';
        this.modelStationForPaymentAmt = this.memoFormat;
        $("#paymentMode").val('select');
    };
    PaymentFollowupComponent.prototype.setActionVal = function () {
        for (var i = 0; i < this.actionTypeOptions.length; i++) {
            this.actionTypeTA.push(this.actionTypeOptions[i].label);
        }
    };
    ///for Action Type
    PaymentFollowupComponent.prototype.actionTypeFocus = function (e) {
        this.modelActionType = e.item;
        $("#collectionMan").val('');
        this.selectedCollectionMan = '';
        this.enteredCollectionMan = '';
        this.pfCollectionManDetailsDataList = [];
        this.pfCollectionManDetailsDataListForSearch = [];
        this.pfAssignedJobDetailsDataList = [];
        this.countOfAssignLR = 0;
        this.sumOfAssignLR = 0;
        this.countOFMemosCollectionTable = 0;
        this.sumOFMemosCollectionTable = 0;
        this.newAttForColTable = {};
        this.tempstore = [];
        this.selectedActionType = this.modelActionType;
        if (this.selectedActionType == null || this.selectedActionType == '') {
            //       console.log( this.selectedActionType );
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Warning",
                text: "Please select Action Type to get the details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.viewFinishBtn = true;
            this.viewShowNexInAssingBtn2 = false;
            this.showNextBtnInAssign = false;
        }
        else if (this.selectedActionType === 'Complete') {
            this.showNextBtnInAssign = true;
            this.viewFinishBtn = false;
            this.viewShowNexInAssingBtn2 = false;
        }
        else {
            this.viewFinishBtn = true;
            this.viewShowNexInAssingBtn2 = false;
            this.showNextBtnInAssign = false;
        }
    };
    PaymentFollowupComponent.prototype.validateNextBtnInAssign = function () {
        this.enteredCompletedOnDate = $("#completedOnDate").val();
        if (this.pfAssignedJobDetailsDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Empty Datas",
                text: "No Cashmemo Found in Assigned Job!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.viewFinishBtn = false;
            this.showNextBtnInAssign = true;
            this.viewShowNexInAssingBtn2 = false;
        }
        else if (this.enteredCompletedOnDate == null || this.enteredCompletedOnDate == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Mandetory",
                text: "Please Select Date",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.viewFinishBtn = false;
            this.showNextBtnInAssign = true;
            this.viewShowNexInAssingBtn2 = false;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "OK",
                text: "Please Click Next button again to continue",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.viewFinishBtn = false;
            this.showNextBtnInAssign = false;
            this.viewShowNexInAssingBtn2 = true;
            $("#nextBtnAssign").focus();
        }
    };
    //for Collection Man 
    PaymentFollowupComponent.prototype.getCollectionManInfo = function () {
        this.userDataDtoForCollectionMan = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForCollectionMan.branchId = this.userDataDtoReturnSession.mainStation;
        this.userDataDtoForCollectionMan.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDtoForCollectionMan.status = "D";
        //        console.log('D');
    };
    PaymentFollowupComponent.prototype.collectionManFocus = function (e, contentAcknowledgement) {
        //        if ( e.keyCode == 13 ) {
        this.modelCollectionManName = e.item;
        this.enteredCollectionMan = $("#collectionMan").val();
        console.log(this.enteredCollectionMan);
        this.selectedActionType = $("#actionType").val();
        this.selectedCollectionMan = $("#collectionMan").val();
        if (this.selectedActionType == null || this.selectedActionType == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Warning",
                text: "Please select Action Type to get the details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            $("#collectionMan").val('');
            this.modelCollectionManName = '';
        }
        else {
            this.showSpinnerForAction = true;
            if (this.userDataDtoReturnSession.validateTPReq != null
                && this.userDataDtoReturnSession.validateTPReq) {
                this.validateTPStmtPending(contentAcknowledgement);
                //                                this.getCollectionManGridDtails();
            }
            else {
                this.getCollectionManGridDtails();
            }
        }
        //        }
    };
    PaymentFollowupComponent.prototype.getCollectionManGridInfo = function () {
        this.selectedActionType = $("#actionType").val();
        //        this.selectedCollectionMan = $( "#collectionMan" ).val();
        this.selectedCollectionMan = this.modelCollectionManName;
        //        console.log( this.selectedActionType );
        console.log(this.selectedCollectionMan);
        this.cashMemoDtoTable = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.cashMemoDtoTable.status = 'collection';
        this.cashMemoDtoTable.mode = 'selected';
        this.cashMemoDtoTable.collectionMan = this.selectedCollectionMan;
        this.cashMemoDtoTable.memoType = this.selectedActionType;
        this.cashMemoDtoTable.destination = this.userDataDtoReturnSession.mainStation;
        this.cashMemoDtoTable.godown = this.userDataDtoReturnSession.office;
        this.cashMemoDtoTable.companyId = this.userDataDtoReturnSession.companyId;
    };
    PaymentFollowupComponent.prototype.collectionManLrDetailsDataTable = function () {
        this.dtOptionsPfCollectionManDetails = {
            // the below code is for button export starts
            //            destroy: true,
            dom: 'Bfrtip',
            buttons: [],
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 200,
            "scrollCollapse": true,
            "info": false,
            paging: false,
            searching: false
        };
    };
    PaymentFollowupComponent.prototype.assignedJobDetailsTable = function () {
        this.dtOptionPfAssignedJobDetails = {
            dom: 'Bfrtip',
            buttons: [],
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 200,
            "scrollCollapse": true,
            "info": false,
            paging: false,
            searching: false
        };
    };
    PaymentFollowupComponent.prototype.consigneeWiseDetailsTable = function () {
        this.dtOptionsConsigneeWiseBalanceDetails = {
            dom: 'Bfrtip',
            buttons: [],
            //            language: {
            //                search: "_INPUT_",
            //                searchPlaceholder: "Search..."
            //            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 200,
            "scrollCollapse": true,
            "info": false,
            paging: false,
            searching: false,
            //            pagingType: 'full_numbers',
            //            pageLength: 6,
            //            "rowCallback": (row: Node, data: any[] | Object, index: number) => {
            //                const self = this;
            //                $('td', row).unbind('click');
            //                $('td', row).bind('click', () => {
            //                  self.someClickHandler(data);
            //                });
            //                return row;
            //              },
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
                //                var columnData = api
                //                    .column(
                //                    0 )
                //                    .data();
                //
                //                // Update footer
                //                $( api.column( 0 ).footer() ).html(
                //                    columnData.count()
                //                );
                //                //                counts ends
                //                //
                //                var pageTotals = api
                //                    .column( 2, { page: 'current' } )
                //                    .data()
                //                    .reduce( function( a, b ) {
                //                        return intVal( a ) + intVal( b )
                //                    }, 0 );
                //                $( api.column( 2 ).footer() ).html(
                //                    pageTotals
                //                );
            }
        };
    };
    PaymentFollowupComponent.prototype.lessEntriesTable = function () {
        this.dtOptionsLessEntriesDataTable = {
            dom: 'Bfrtip',
            buttons: [],
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 200,
            "scrollCollapse": true,
            "info": false,
            paging: false,
            searching: false,
        };
    };
    PaymentFollowupComponent.prototype.paymentEntriesDataTable = function () {
        this.dtOptionsPaymentAmountEntries = {
            dom: 'Bfrtip',
            buttons: [],
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 200,
            "scrollCollapse": true,
            "info": false,
            paging: false,
            searching: false
        };
    };
    PaymentFollowupComponent.prototype.validateTPStmtPendingInfo = function () {
        //Pending 
        this.selectedCollectionMan = this.modelCollectionManName;
        this.cashMemoDtoForTPStmt = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.cashMemoDtoForTPStmt.collectionMan = this.selectedCollectionMan;
        this.cashMemoDtoForTPStmt.companyId = this.userDataDtoReturnSession.companyId;
        this.cashMemoDtoForTPStmt.destination = this.userDataDtoReturnSession.mainStation;
        this.cashMemoDtoForTPStmt.tpStatus = 'Pending';
        this.cashMemoDtoForTPStmt.status = 'To Party';
        //        console.log( this.selectedCollectionMan);
    };
    PaymentFollowupComponent.prototype.cancelTP = function () {
        this.cashMemoDtoForTPStmt = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.collectionManTP = '';
        this.countTp = '';
        this.getCollectionManGridDtails();
    };
    ///For getting List of Station
    PaymentFollowupComponent.prototype.getStationInfo = function () {
        this.lrDtoForStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.lrDtoForStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForStation.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDtoForStation.mode = "ALL";
    };
    //    ///For Getting Memo Code
    //    getDetailsForMemoCode( mode ) {
    //        this.userDtoMemoCode = new UserDataDto();
    //        this.userDtoMemoCode.companyId = this.userDataDtoReturnSession.companyId;
    //        if ( mode == 'main' ) {
    ////            this.stationForCode = $( "#station" ).val();
    //            this.enteredMemoCodeMain= $( "#station" ).val();
    //            this.stationForCode = this.enteredMemoCodeMain;
    //            console.log(this.enteredMemoCodeMain);
    //            this.userDtoMemoCode.office = this.stationForCode;
    //            console.log(this.userDtoMemoCode.office);
    //        } else if ( mode == 'entry' ) {
    ////            this.stationForCode = $( "#entryLessStation" ).val();
    //            this.stationForCode = this.enteredMemoCodeLess;
    //            this.userDtoMemoCode.office = this.stationForCode;
    //        } else if ( mode == 'payment' ) {
    ////            this.stationForCode = $( "#paymentLessStn" ).val();
    //            this.stationForCode = this.enteredMemoCodePayment;
    //            this.userDtoMemoCode.office = this.stationForCode;
    //        }
    //    }
    //    getMemoCode( e, mode: string ) {
    ////        if ( e.keyCode == 13 ) {
    //            this.getDetailsForMemoCode( mode );           
    //            this.masterReadService.getStationCodeService( this.userDtoMemoCode ).subscribe(
    //                ( response ) => {
    //                    if ( response.length != 0 ) {
    //                        this.stationCodeDetails = response;
    //                        this.selectedEntryType = $( "#entryType" ).val();
    //                        this.selectedEntryTypeForLess = $( "#entryLessEntryType" ).val();
    //                        this.selectedEntryTypeForPayment = $( "#entryLessPaymentEntry" ).val();
    //
    //                        if ( mode == 'main' ) {
    //                            if ( this.selectedEntryType == "automatic" ) {
    //                                this.manualView = false;
    //                                this.automaticView = true;
    //                                $( "#memoNumberForAutomatic" ).focus();
    //                            } else {
    //
    //                                if ( this.stationCodeDetails.stationCode == null ) {
    //                                    $( "#codeForManual" ).val( '' );
    //                                } else {
    //                                    //Basha Pending
    //                                    this.memoFormat = this.stationCodeDetails.stationCode + "/" + this.userDataDtoReturnSession.financialYearSplit + "/";
    //                                    //                                this.memoFormat = 'BNG/1920/';
    //                                    $( "#codeForManual" ).val( this.memoFormat );
    //                                    $( "#memoNumberForManual" ).val( '' );
    //                                    $( "#memoNumberForAutomatic" ).val( '' );
    //                                    $( "#memoNumberForManual" ).focus();
    //                                }
    //                            }
    //
    //
    //
    //                        } else if ( mode == 'entry' ) {
    //                            if ( this.selectedEntryTypeForLess == "entryLessAutomatic" ) {
    //                                this.entryLessManualView = false;
    //                                this.entryLessAutomaticView = true;
    //                                $( "#memoNumberForAutomaticLess" ).focus();
    //                            } else {
    //
    //                                if ( this.stationCodeDetails.stationCode == null ) {
    //                                    $( "#codeForManualLess" ).val( '' );
    //                                } else {
    //                                    //Basha Pending
    //                                    this.memoFormat = this.stationCodeDetails.stationCode + "/" + this.userDataDtoReturnSession.financialYearSplit + "/";
    //                                    //                                this.memoFormat = 'BNG/1920/';
    //                                    $( "#codeForManualLess" ).val( this.memoFormat );
    //                                    $( "#memoNumberForManualLess" ).val( '' );
    //                                    $( "#memoNumberForManualLess" ).focus();
    //                                    $( "#memoNumberForAutomaticLess" ).val( '' );
    //                                }
    //                            }
    //
    //                        } else if ( mode == 'payment' ) {
    //                            if ( this.selectedEntryTypeForPayment == "paymentLessAutomatic" ) {
    //                                this.paymentLessManualView = false;
    //                                this.paymentLessAutomaticView = true;
    //                                $( "#memoNumberForAutomaticLessPayment" ).focus();
    //                            } else {
    //
    //                                if ( this.stationCodeDetails.stationCode == null ) {
    //                                    $( "#codeForManualLessPayment" ).val( '' );
    //                                } else {
    //                                    //Basha Pending
    //                                    this.memoFormat = this.stationCodeDetails.stationCode + "/" + this.userDataDtoReturnSession.financialYearSplit + "/";
    //                                    //                                this.memoFormat = 'BNG/1920/';
    //                                    $( "#codeForManualLessPayment" ).val( this.memoFormat );
    //                                    $( "#memoNumberForManualLessPayment" ).val( '' );
    //                                    $( "#memoNumberForManualLessPayment" ).focus();
    //                                    $( "#memoNumberForAutomaticLessPayment" ).val( '' );
    //                                }
    //                            }
    //                        }
    //                        this.userDtoMemoCode = new UserDataDto();
    //                    }
    //
    //                } ), ( error ) => swal( {
    //                    title: "Server Error",
    //                    text: "While Getting Station",
    //                    icon: "warning",
    //                    closeOnClickOutside: false,
    //                    closeOnEsc: false,
    //                } ),
    //                () => console.log( 'done' );
    ////        }
    //    };
    ///For Getting Memo Code
    PaymentFollowupComponent.prototype.getMemoCode = function (e, mode) {
        this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.modelStationName = e.item;
        this.userDtoMemoCode.companyId = this.userDataDtoReturnSession.companyId;
        //        console.log(this.modelStationName);
        if (mode == 'main') {
            //            this.stationForCode = $( "#station" ).val();
            this.stationForCode = this.modelStationName;
            this.userDtoMemoCode.office = this.stationForCode;
        }
        else if (mode == 'entry') {
            //            this.stationForCode = $( "#entryLessStation" ).val();
            this.stationForCode = this.modelStationName;
            this.userDtoMemoCode.office = this.stationForCode;
        }
        else if (mode == 'payment') {
            //            this.stationForCode = $( "#paymentLessStn" ).val();
            this.stationForCode = this.modelStationName;
            this.userDtoMemoCode.office = this.stationForCode;
        }
        this.getDetailsForMemoCode(mode);
    };
    PaymentFollowupComponent.prototype.getDetailsForMemoCode = function (mode) {
        // if ( e.keyCode == 13 ) {
        //      console.log( this.userDtoMemoCode.office = this.stationForCode);
        var _this = this;
        this.masterReadService.getStationCodeService(this.userDtoMemoCode).subscribe(function (response) {
            if (response.length != 0) {
                _this.stationCodeDetails = response;
                _this.selectedEntryType = $("#entryType").val();
                _this.selectedEntryTypeForLess = $("#entryLessEntryType").val();
                _this.selectedEntryTypeForPayment = $("#entryLessPaymentEntry").val();
                if (mode == 'main') {
                    if (_this.selectedEntryType == "automatic") {
                        _this.manualView = false;
                        _this.automaticView = true;
                        $("#memoNumberForAutomatic").focus();
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
                            $("#memoNumberForManual").val('');
                            $("#memoNumberForAutomatic").val('');
                            $("#memoNumberForManual").focus();
                        }
                    }
                }
                else if (mode == 'entry') {
                    if (_this.selectedEntryTypeForLess == "entryLessAutomatic") {
                        _this.entryLessManualView = false;
                        _this.entryLessAutomaticView = true;
                        $("#memoNumberForAutomaticLess").focus();
                    }
                    else {
                        if (_this.stationCodeDetails.stationCode == null) {
                            $("#codeForManualLess").val('');
                        }
                        else {
                            //Basha Pending
                            _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                            //                                this.memoFormat = 'BNG/1920/';
                            $("#codeForManualLess").val(_this.memoFormat);
                            $("#memoNumberForManualLess").val('');
                            $("#memoNumberForManualLess").focus();
                            $("#memoNumberForAutomaticLess").val('');
                        }
                    }
                }
                else if (mode == 'payment') {
                    if (_this.selectedEntryTypeForPayment == "paymentLessAutomatic") {
                        _this.paymentLessManualView = false;
                        _this.paymentLessAutomaticView = true;
                        $("#memoNumberForAutomaticLessPayment").focus();
                    }
                    else {
                        if (_this.stationCodeDetails.stationCode == null) {
                            $("#codeForManualLessPayment").val('');
                        }
                        else {
                            //Basha Pending
                            _this.memoFormat = _this.stationCodeDetails.stationCode + "/" + _this.userDataDtoReturnSession.financialYearSplit + "/";
                            //                                this.memoFormat = 'BNG/1920/';
                            $("#codeForManualLessPayment").val(_this.memoFormat);
                            $("#memoNumberForManualLessPayment").val('');
                            $("#memoNumberForManualLessPayment").focus();
                            $("#memoNumberForAutomaticLessPayment").val('');
                        }
                    }
                }
                _this.userDtoMemoCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Server Error",
            text: "While Getting Station",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
        //}
    };
    ;
    PaymentFollowupComponent.prototype.getMemoNumberForAutomatic = function (e, keyEnter) {
        var _this = this;
        setTimeout(function () {
            _this.showforAutomatic(keyEnter);
        }, 500);
    };
    PaymentFollowupComponent.prototype.showforAutomatic = function (keyEnter) {
        this.selectedMemoNumberForAutomatic = $("#memoNumberForAutomatic").val();
        if (this.selectedMemoNumberForAutomatic != null && this.selectedMemoNumberForAutomatic != '') {
            this.gridReconfigureAssg(keyEnter);
        }
    };
    //    getMemoNumberForAutomatic( e, keyEnter: string ) {
    //        if ( e.keyCode == 13 ) {
    //        this.selectedMemoNumberForAutomatic = $( "#memoNumberForAutomatic" ).val();
    //        if ( this.selectedMemoNumberForAutomatic != null && this.selectedMemoNumberForAutomatic != '' ) {
    //            this.gridReconfigureAssg( keyEnter );
    //        }
    //        }
    //    }
    PaymentFollowupComponent.prototype.getMemoNumberForManual = function (e, keyEnter) {
        if (e.keyCode == 13) {
            this.selectedMemoNumberForManual = $("#memoNumberForManual").val();
            if (this.selectedMemoNumberForManual != null && this.selectedMemoNumberForManual != '') {
                this.gridReconfigureAssg(keyEnter);
            }
            //            this.gridReconfigureAssg( keyEnter );
        }
    };
    PaymentFollowupComponent.prototype.gridReconfigureAssg = function (keyEnter) {
        var _this = this;
        this.tempStoreDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.memoNum = '';
        this.selectedActionType = $("#actionType").val();
        this.selectedEntryType = $("#entryType").val();
        this.selectedCodeForManual = $("#codeForManual").val();
        this.selectedMemoNumberForManual = $("#memoNumberForManual").val();
        this.selectedMemoNumberForAutomatic = $("#memoNumberForAutomatic").val();
        if (this.selectedEntryType == 'automatic') {
            this.memoNum = this.selectedMemoNumberForAutomatic;
            //            console.log( this.memoNum );
        }
        else {
            this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
            //            console.log( this.memoNum );
        }
        //Checking in collection Man data List
        this.searchedMemoInfo = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoInfo = this.searchInCollectionManTable(this.memoNum);
        //        console.log( this.searchedMemoInfo );
        if (this.searchedMemoInfo.memoNumber == null || this.searchedMemoInfo.memoNumber == '') {
            this.modelForSearched = '';
        }
        else {
            this.modelForSearched = this.searchedMemoInfo.memoNumber;
        }
        //        console.log( '1' + this.modelForSearched );
        //Checking in Assingning Man data List
        this.searchedMemoForDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoForDup = this.searchInCollectionManTableFoDup(this.memoNum);
        if (this.searchedMemoForDup.memoNumber == null || this.searchedMemoForDup.memoNumber == '') {
            this.modelDup = '';
        }
        else {
            this.modelDup = this.searchedMemoForDup.memoNumber;
        }
        //        console.log( '2 ' + this.modelDup );
        //        //Checking in Assingning Man data List
        this.searchedMemoForMemoAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoForMemoAlreadyExist = this.searchInCollectionManTableForAlreadyExist(this.memoNum);
        if (this.searchedMemoForMemoAlreadyExist.memoNumber == null || this.searchedMemoForMemoAlreadyExist.memoNumber == '') {
            this.modelAlreadyExist = '';
        }
        else {
            this.modelAlreadyExist = this.searchedMemoForMemoAlreadyExist.memoNumber;
        }
        //        console.log( this.modelAlreadyExist );
        if (keyEnter == 'keyEnter' && (this.modelForSearched == null || this.modelForSearched == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "CashMemo Assigning",
                text: "CashMemo " + this.memoNum + " does not exist!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                if (_this.selectedEntryType == 'automatic') {
                    $("#memoNumberForAutomatic").focus();
                }
                else {
                    $("#memoNumberForManual").focus();
                }
            });
            this.addInTable = false;
        }
        else if (this.modelAlreadyExist != null && this.modelAlreadyExist != '' && this.consigneeExist == false) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "CashMemo Assigning",
                text: "CashMemo" + this.memoNum + " already transfer!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                if (_this.selectedEntryType == 'automatic') {
                    $("#memoNumberForAutomatic").focus();
                }
                else {
                    $("#memoNumberForManual").focus();
                }
            });
            this.addInTable = false;
        }
        else if (this.selectedActionType != null && this.selectedActionType != '' && this.selectedActionType == 'To Party' && this.pfAssignedJobDetailsDataList.length > 0) {
            this.assingedDetailsDataList = this.pfAssignedJobDetailsDataList[0];
            //            console.log( this.assingedDetailsDataList );
            //            console.log( this.searchedMemoForMemoAlreadyExist.consigneeName );
            if (this.assingedDetailsDataList.consigneeName != this.searchedMemoForMemoAlreadyExist.consigneeName) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "CashMemo Assigning",
                    text: "Different Consignee's Memo can't be possible at once in To Party, please select the same Consignee's Memo!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else if (this.modelForSearched != this.modelDup) {
                if (keyEnter == 'keyEnter') {
                    this.addInTable = true;
                    this.tempStoreDup = this.searchedMemoInfo;
                    this.gridReconfigureAllRemove();
                }
            }
        }
        else if (this.modelForSearched != this.modelDup) {
            if (keyEnter == 'keyEnter') {
                this.addInTable = true;
                this.tempStoreDup = this.searchedMemoInfo;
                //                console.log( this.tempStoreDup );
                this.gridReconfigureAllRemove();
            }
        }
        if (this.addInTable == true) {
            if (this.pfAssignedJobDetailsDataList == null) {
                //                console.log( '21' );
                this.pfAssignedJobDetailsDataList = [];
                //                this.dtTriggerPfAssignedJobDetails.next();
            }
            //            if ( this.pfAssignedJobDetailsDataList.length == 0 ) {
            //                console.log( '22' );
            //                this.pfAssignedJobDetailsDataList.push( this.tempStoreDup );
            //            } else {
            //                console.log( '23' );
            //                this.pfAssignedJobDetailsDataList.push( this.tempStoreDup );
            //            }
            if (this.setAssingedDetails == 'new') {
                this.dtTriggerPfAssignedJobDetails.next();
                this.setAssingedDetails = 'old';
            }
            //            console.log(this.tempStoreDup);
            this.pfAssignedJobDetailsDataList.push(this.tempStoreDup);
            this.countOfAssignLR = +this.countOfAssignLR + 1;
            this.sumOfAssignLR = +this.sumOfAssignLR + +this.tempStoreDup.amount;
            this.tempstore.push(this.tempStoreDup);
            //            console.log( this.tempstore.length );
            this.tempStoreDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            this.addInTable = false;
        }
        else {
            this.tempStoreDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            this.addInTable = false;
        }
        $("#memoNumberForAutomatic").val('');
        $("#memoNumberForManual").val('');
        this.value = true;
    };
    //
    PaymentFollowupComponent.prototype.searchInCollectionManTable = function (selectedNum) {
        //        console.log( '1111' );
        //        console.log( selectedNum );
        //        console.log( this.pfCollectionManDetailsDataList );
        //        console.log( this.pfCollectionManDetailsDataList.find( pfCollectionManDetailsData => pfCollectionManDetailsData.memoNumber === selectedNum ) );
        this.letValueofCollectionMan = (this.pfCollectionManDetailsDataList.find(function (pfCollectionManDetailsData) { return pfCollectionManDetailsData.memoNumber === selectedNum; }));
        //        console.log( this.letValueofCollectionMan );
        if (this.letValueofCollectionMan == null || this.letValueofCollectionMan == undefined) {
            this.letValueofCollectionMan = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            //            console.log( 'boss1s' );
        }
        else {
            //            console.log( 'boss2s' );
            this.letValueofCollectionMan = this.letValueofCollectionMan;
        }
        //        console.log( this.letValueofCollectionMan );
        return this.letValueofCollectionMan;
    };
    /////////////////////
    PaymentFollowupComponent.prototype.searchInCollectionManTableFoDup = function (selectedNum) {
        if (this.pfAssignedJobDetailsDataList.length == 0) {
            this.getsearchInCollectionManTableFoDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            //            console.log( ' 1' );
        }
        else {
            //            console.log( '2' );
            this.getsearchInCollectionManTableFoDup = this.enteredSearchInCollectionManTableFoDup(selectedNum);
        }
        //        console.log( this.getsearchInCollectionManTableFoDup );
        return this.getsearchInCollectionManTableFoDup;
    };
    PaymentFollowupComponent.prototype.enteredSearchInCollectionManTableFoDup = function (selectedNum) {
        //        console.log( '1111' );
        this.letValueofSearchInCollectionManTableFoDup = (this.pfAssignedJobDetailsDataList.find(function (pfAssignedJobDetailsData) { return pfAssignedJobDetailsData.memoNumber === selectedNum; }));
        if (this.letValueofSearchInCollectionManTableFoDup == null || this.letValueofSearchInCollectionManTableFoDup == undefined) {
            this.letValueofSearchInCollectionManTableFoDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            //            console.log( 'boss1' );
        }
        else {
            //            console.log( 'boss1' );
            this.letValueofSearchInCollectionManTableFoDup = this.letValueofSearchInCollectionManTableFoDup;
        }
        //        console.log( this.letValueofSearchInCollectionManTableFoDup );
        return this.letValueofSearchInCollectionManTableFoDup;
    };
    ///////////
    PaymentFollowupComponent.prototype.searchInCollectionManTableForAlreadyExist = function (selectedNum) {
        if (this.pfAssignedJobDetailsDataList.length == 0) {
            this.getsearchInCollectionManTableForAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            //            console.log( ' 1s' );
        }
        else {
            //            console.log( '2s' );
            this.getsearchInCollectionManTableForAlreadyExist = this.enteredSearchInCollectionManTableForAlreadyExist(selectedNum);
        }
        //        console.log( this.getsearchInCollectionManTableForAlreadyExist );
        return this.getsearchInCollectionManTableForAlreadyExist;
    };
    PaymentFollowupComponent.prototype.enteredSearchInCollectionManTableForAlreadyExist = function (selectedNum) {
        this.consigneeExist = false;
        //        console.log( '1111' );
        this.letValueofSearchInCollectionManTableFoAlreadyExist = (this.pfAssignedJobDetailsDataList.find(function (pfAssignedJobDetailsData) { return pfAssignedJobDetailsData.memoNumber === selectedNum; }));
        if (this.letValueofSearchInCollectionManTableFoAlreadyExist == null || this.letValueofSearchInCollectionManTableFoAlreadyExist == undefined) {
            //            this.letValueofSearchInCollectionManTableFoAlreadyExist = new CashMemoDto();
            //            console.log( 'boss11' );
            this.selectedActionType = $("#actionType").val();
            if (this.selectedActionType == 'To Party') {
                this.letValueofSearchInCollectionManTableFoAlreadyExistParty = this.getConsigneeNameParty(selectedNum);
                this.consigneeeName = this.letValueofSearchInCollectionManTableFoAlreadyExistParty.consigneeName;
                //                console.log( this.consigneeeName );
                this.letValueofSearchInCollectionManTableFoAlreadyExist = this.searchingToParty(this.consigneeeName);
            }
            else {
                this.letValueofSearchInCollectionManTableFoAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            }
        }
        else {
            //            console.log( 'boss12' );
            this.letValueofSearchInCollectionManTableFoAlreadyExist = this.letValueofSearchInCollectionManTableFoAlreadyExist;
        }
        //        console.log( this.letValueofSearchInCollectionManTableFoAlreadyExist );
        return this.letValueofSearchInCollectionManTableFoAlreadyExist;
    };
    PaymentFollowupComponent.prototype.searchingToParty = function (selectedConsigneeName) {
        this.consigneeExist = false;
        //        console.log( '2222' );
        this.getValueofSearchInCollectionManTableFoAlreadyExistToParty = (this.pfAssignedJobDetailsDataList.find(function (pfAssignedJobDetailsData) { return pfAssignedJobDetailsData.consigneeName === selectedConsigneeName; }));
        if (this.getValueofSearchInCollectionManTableFoAlreadyExistToParty == null || this.getValueofSearchInCollectionManTableFoAlreadyExistToParty == undefined) {
            this.getValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            //            console.log( '21' );
            this.consigneeExist = false;
        }
        else {
            //            console.log( '22' );
            this.consigneeExist = true;
            this.getValueofSearchInCollectionManTableFoAlreadyExistToParty = this.getValueofSearchInCollectionManTableFoAlreadyExistToParty;
        }
        //        console.log( this.getValueofSearchInCollectionManTableFoAlreadyExistToParty );
        //        console.log( this.consigneeExist );
        return this.getValueofSearchInCollectionManTableFoAlreadyExistToParty;
    };
    PaymentFollowupComponent.prototype.getConsigneeNameParty = function (selectedNum) {
        this.setValueofSearchInCollectionManTableFoAlreadyExistToParty = (this.pfCollectionManDetailsDataList.find(function (pfCollectionManDetailsData) { return pfCollectionManDetailsData.memoNumber === selectedNum; }));
        if (this.setValueofSearchInCollectionManTableFoAlreadyExistToParty == null || this.setValueofSearchInCollectionManTableFoAlreadyExistToParty == undefined) {
            this.setValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            //            console.log( '21' );
            this.consigneeExist = false;
        }
        else {
            //            console.log( '22' );
            this.consigneeExist = true;
            this.setValueofSearchInCollectionManTableFoAlreadyExistToParty = this.setValueofSearchInCollectionManTableFoAlreadyExistToParty;
        }
        return this.setValueofSearchInCollectionManTableFoAlreadyExistToParty;
    };
    /////////////////////////////
    PaymentFollowupComponent.prototype.gridReconfigureAllRemove = function () {
        var cashmemonumber = null;
        this.selectedEntryType = $("#entryType").val();
        this.selectedCodeForManual = $("#codeForManual").val();
        this.selectedMemoNumberForManual = $("#memoNumberForManual").val();
        this.selectedMemoNumberForAutomatic = $("#memoNumberForAutomatic").val();
        if (this.selectedEntryType == 'automatic') {
            cashmemonumber = this.selectedMemoNumberForAutomatic;
        }
        else {
            cashmemonumber = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
        }
        //Pending of date , remove btn,all btn, remove all btn, and reconfigure of datalist of both
        var index = -1;
        for (var i = 0; i < this.pfCollectionManDetailsDataList.length; i++) {
            if (this.pfCollectionManDetailsDataList[i].memoNumber === cashmemonumber) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");
        }
        this.pfCollectionManDetailsDataList.splice(index, 1);
        this.pfCollectionManDetailsDataListForSearch.splice(index, 1);
        this.countOFMemosCollectionTable = 0;
        this.sumOFMemosCollectionTable = 0;
        for (var i = 0; i < this.pfCollectionManDetailsDataList.length; i++) {
            this.countOFMemosCollectionTable = this.countOFMemosCollectionTable + 1;
            this.sumOFMemosCollectionTable = this.sumOFMemosCollectionTable + +(this.pfCollectionManDetailsDataList[i].amount);
        }
        //        this.pfCollectionManDetailsDataList.splice( this.pfCollectionManDetailsDataList.find( pfCollectionManDetailsData => pfCollectionManDetailsData.memoNumber === cashmemonumber ), 1 );
        //        console.log( this.pfCollectionManDetailsDataList );
    };
    //Btn Finish
    PaymentFollowupComponent.prototype.collectionManFinish = function (content10, content11) {
        this.selectedActionType = $("#actionType").val();
        this.selectedCollectionMan = this.enteredCollectionMan;
        //        console.log( this.selectedActionType );
        if (this.pfAssignedJobDetailsDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Empty Datas",
                text: "No Cashmemo Found in Assigned Job!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            //For testing
            //            this.modalService.open( content10, { centered: true } ); 
        }
        else if (this.selectedActionType == null || this.selectedActionType == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Mandatory Fields",
                text: "Please select Action type",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (this.selectedCollectionMan == null || this.selectedCollectionMan == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Mandatory Fields",
                text: "Please Select Collection Man to Proceed",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (this.selectedActionType != null && this.selectedActionType == 'Assign') {
            this.callForAssignMemo(content10);
        }
        else if (this.selectedActionType != null && this.selectedActionType == 'Status Back') {
            this.callForStatusBackMemo();
        }
        else if (this.selectedActionType != null && this.selectedActionType == 'To Party') {
            this.callForToPartyMemo(content11);
        }
        else if (this.selectedActionType != null && this.selectedActionType == 'Finish') {
            this.callForClosingCollection();
        }
        else if (this.selectedActionType != null && this.selectedActionType == 'Complete') {
            this.callForCompleteCollection();
        }
    };
    //For Assign in btn finish
    PaymentFollowupComponent.prototype.callForAssignMemo = function (content10) {
        var _this = this;
        this.selectedCollectionMan = this.enteredCollectionMan;
        if (!this.userDataDtoReturnSession.collectionFlow && this.selectedCollectionMan == 'SRD STOCK') {
            this.modalService.open(content10, { centered: true });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Assigning Memos",
                text: "Sure U Want to Assign the selected Memos to " + this.selectedCollectionMan,
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (assingMemo) {
                if (assingMemo) {
                    //Pending
                    _this.userDataDtoForLRAssign = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
                    _this.selectedCollectionMan = _this.enteredCollectionMan;
                    _this.userDataDtoForLRAssign.collectioMan = _this.selectedCollectionMan;
                    _this.userDataDtoForLRAssign.mode = 'assign';
                    _this.listOfLrNumber = [];
                    for (var i = 0; i < _this.pfAssignedJobDetailsDataList.length; i++) {
                        _this.listOfLrNumber.push(_this.pfAssignedJobDetailsDataList[i].memoNumber);
                    }
                    //                    console.log( this.listOfLrNumber );
                    _this.userDataDtoForLRAssign.list = _this.listOfLrNumber;
                    _this.updateCashMemoInfo(_this.userDataDtoForLRAssign);
                    //Pending
                    _this.cashMemoDtoForAssignPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
                    _this.cashMemoDtoForAssignPrint.collectionMan = _this.selectedCollectionMan;
                    _this.setPringForGCTakenReport(_this.cashMemoDtoForAssignPrint);
                    //                                        new GCTakenReport(storeAssg,
                    //                                                cashMemoDto);
                    //                    popupAssign.hide();
                }
            });
        }
    };
    //For Asssign In Pop up btn 
    PaymentFollowupComponent.prototype.validateCollectionManAssign = function () {
        var _this = this;
        //        console.log(this.enteredCollectionManAssign);
        this.selectedCollectionManAssign = this.enteredCollectionManAssign;
        if (this.selectedCollectionManAssign == null || this.selectedCollectionManAssign == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Collection Man Not Found",
                text: "Please Select A Collection Man",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Assigning Memos",
                text: "Sure U Want to Assign the selected Memos to " + this.selectedCollectionManAssign,
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (assingMemo) {
                if (assingMemo) {
                    //Pending
                    _this.userDataDtoForLRAssignSRDStock = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
                    _this.selectedCollectionManAssign = _this.enteredCollectionManAssign;
                    _this.userDataDtoForLRAssignSRDStock.collectioMan = _this.selectedCollectionManAssign;
                    _this.userDataDtoForLRAssignSRDStock.mode = 'assign';
                    _this.listOfLrNumber = [];
                    for (var i = 0; i < _this.pfAssignedJobDetailsDataList.length; i++) {
                        _this.listOfLrNumber.push(_this.pfAssignedJobDetailsDataList[i].memoNumber);
                    }
                    //                    console.log( this.listOfLrNumber );
                    _this.userDataDtoForLRAssignSRDStock.list = _this.listOfLrNumber;
                    _this.updateCashMemoInfo(_this.userDataDtoForLRAssignSRDStock);
                    //Pending
                    _this.cashMemoDtoForAssignPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
                    _this.cashMemoDtoForAssignPrint.collectionMan = _this.selectedCollectionManAssign;
                    _this.setPringForGCTakenReport(_this.cashMemoDtoForAssignPrint);
                    //                    new GCTakenReport(storeAssg,
                    //                            cashMemoDto);
                    //                    popupAssign.hide();
                }
            });
        }
    };
    //For Update Memo
    PaymentFollowupComponent.prototype.updateCashMemoInfo = function (userDataDtoForLR) {
        this.selectedCollectionMan = this.enteredCollectionMan;
        userDataDtoForLR.companyId = this.userDataDtoReturnSession.companyId;
        userDataDtoForLR.city = this.userDataDtoReturnSession.mainStation;
        userDataDtoForLR.updatedBy = this.userDataDtoReturnSession.userId;
        userDataDtoForLR.collectionFlow = this.userDataDtoReturnSession.collectionFlow;
        //        console.log( userDataDtoForLR );
        this.updateCashMemoDetails(userDataDtoForLR);
    };
    PaymentFollowupComponent.prototype.clearAllAfterBtnFinish = function () {
        this.memoNum = '';
        this.selectedActionType = '';
        this.selectedEntryType = '';
        this.selectedCodeForManual = '';
        this.selectedMemoNumberForManual = '';
        this.selectedMemoNumberForAutomatic = '';
        this.modelForSearched = '';
        this.letValueofCollectionMan = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getsearchInCollectionManTableFoDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoForDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoInfo = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoForMemoAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getsearchInCollectionManTableForAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.setValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoAlreadyExistParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.modelAlreadyExist = '';
        this.modelDup = '';
        this.countOfAssignLR = 0;
        this.sumOfAssignLR = 0;
        this.consigneeeName = '';
        this.consigneeExist = false;
        //        this.countOFMemosCollectionTable = 0;
        //        this.sumOFMemosCollectionTable = 0;
        //        this.newAttForColTable = {};
        //        this.pfCollectionManDetailsDataList = [];
        //        this.pfCollectionManDetailsDataListForSearch = [];
        this.selectTodayCompletedOnDate();
    };
    PaymentFollowupComponent.prototype.clearForAssign = function () {
        this.userDataDtoForLRAssign = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.selectedCollectionMan = '';
        this.selectedCollectionManAssign = '';
        this.listOfLrNumber = [];
        this.userDataDtoForLRAssignSRDStock = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.selectTodayCompletedOnDate();
    };
    PaymentFollowupComponent.prototype.clearForStatusBack = function () {
        this.selectedCollectionMan = '';
        this.userDataDtoForLRStatusBack = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.listOfLrNumber = [];
        this.selectTodayCompletedOnDate();
    };
    PaymentFollowupComponent.prototype.clearToParty = function () {
        this.userDataDtoForLRToPartySRDStock = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.selectedCollectionManToParty = '';
        this.listOfLrNumber = [];
        this.userDataDtoForLRToParty = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.selectedCollectionMan = '';
        this.selectTodayCompletedOnDate();
    };
    PaymentFollowupComponent.prototype.callForStatusBackMemo = function () {
        var _this = this;
        if (this.chkPendingMemosExist()) {
            this.removePendingMemos();
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Status Back",
                text: "Sure U want to take status back for the selected cashmemos",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (statusBackMemo) {
                if (statusBackMemo) {
                    //Pending
                    _this.userDataDtoForLRStatusBack = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
                    _this.selectedCollectionMan = _this.enteredCollectionMan;
                    _this.userDataDtoForLRStatusBack.collectioMan = _this.selectedCollectionMan;
                    _this.userDataDtoForLRStatusBack.mode = 'statusBack';
                    _this.listOfLrNumber = [];
                    for (var i = 0; i < _this.pfAssignedJobDetailsDataList.length; i++) {
                        _this.listOfLrNumber.push(_this.pfAssignedJobDetailsDataList[i].memoNumber);
                    }
                    //                    console.log( this.listOfLrNumber );
                    _this.userDataDtoForLRStatusBack.list = _this.listOfLrNumber;
                    _this.updateCashMemoInfo(_this.userDataDtoForLRStatusBack);
                }
            });
        }
    };
    PaymentFollowupComponent.prototype.chkPendingMemosExist = function () {
        this.isExist = false;
        //        console.log( this.tempstore );
        for (var i = 0; i < this.tempstore.length; i++) {
            if (this.tempstore[i].column1 != null && this.tempstore[i].column1 == 'Pending') {
                this.isExist = true;
                break;
            }
        }
        //        console.log( this.isExist );
        return this.isExist;
    };
    PaymentFollowupComponent.prototype.removePendingMemos = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Not Allowed",
            text: "Some Memos are still in Pending.For further processing, those memos sholud be Remove",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }).then(function () {
            for (var i = 0; i < _this.pfAssignedJobDetailsDataList.length; i++) {
                var column1 = _this.pfAssignedJobDetailsDataList[i].column1;
                if (column1 != null && column1 == 'Pending') {
                    _this.removeMaint.push(_this.pfAssignedJobDetailsDataList[i]);
                    //                    this.tempstore.splice( i, 1 );
                    //                    this.pfAssignedJobDetailsDataList.splice( i, 1 );
                }
            }
            //            console.log( this.removeMaint );
            var index = -1;
            //            For removing from tempstore
            //            console.log( this.tempstore );
            for (var i = 0; i < _this.removeMaint.length; i++) {
                for (var j = 0; j < _this.tempstore.length; j++) {
                    if (_this.tempstore[j].memoNumber === _this.removeMaint[i].memoNumber) {
                        //                        console.log( j );
                        index = j;
                    }
                    if (index === -1) {
                        alert("Something gone wrong1");
                    }
                    _this.tempstore.splice(index, 1);
                }
            }
            //            console.log( this.tempstore );
            //            console.log( this.pfAssignedJobDetailsDataList );
            for (var i = 0; i < _this.removeMaint.length; i++) {
                for (var j = 0; j < _this.pfAssignedJobDetailsDataList.length; j++) {
                    if (_this.pfAssignedJobDetailsDataList[j].memoNumber === _this.removeMaint[i].memoNumber) {
                        index = j;
                    }
                    if (index === -1) {
                        alert("Something gone wrong2");
                    }
                    _this.pfAssignedJobDetailsDataList.splice(index, 1);
                }
            }
            //            console.log( this.pfAssignedJobDetailsDataList );
            _this.countOfAssignLR = 0;
            _this.sumOfAssignLR = 0;
            for (var i = 0; i < _this.pfAssignedJobDetailsDataList.length; i++) {
                _this.countOfAssignLR = +_this.countOfAssignLR + 1;
                _this.sumOfAssignLR = +_this.sumOfAssignLR + +_this.pfAssignedJobDetailsDataList[i].amount;
            }
            for (var i = 0; i < _this.removeMaint.length; i++) {
                _this.pfCollectionManDetailsDataList.push(_this.removeMaint[i]);
            }
            _this.countOFMemosCollectionTable = 0;
            _this.sumOFMemosCollectionTable = 0;
            for (var i = 0; i < _this.pfCollectionManDetailsDataList.length; i++) {
                _this.countOFMemosCollectionTable = _this.countOFMemosCollectionTable + 1;
                _this.sumOFMemosCollectionTable = _this.sumOFMemosCollectionTable + +(_this.pfCollectionManDetailsDataList[i].amount);
            }
            //Pending 
            //            tempStore.removeAll(removeMaint);
            //            storeAssg.removeAll();
            //            storeAssg.add(tempStore);
            //            gridAssg.reconfigure(storeAssg, cmAssg);
            //            storeAll.add(removeMaint);
            //            gridAll.reconfigure(storeAll, cmAll);
        });
    };
    ///To Party 
    PaymentFollowupComponent.prototype.callForToPartyMemo = function (content11) {
        var _this = this;
        this.selectedCollectionMan = this.enteredCollectionMan;
        if (!this.userDataDtoReturnSession.collectionFlow && this.selectedCollectionMan == 'SRD STOCK') {
            this.modalService.open(content11, { centered: true });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Cashmemo To-Party",
                text: "Sure U Want to Mark the selected memos As To-Party " + this.selectedCollectionMan,
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (toPartyMemo) {
                if (toPartyMemo) {
                    //Pending
                    _this.userDataDtoForLRToParty = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
                    _this.selectedCollectionMan = _this.enteredCollectionMan;
                    _this.userDataDtoForLRToParty.collectioMan = _this.selectedCollectionMan;
                    _this.userDataDtoForLRToParty.mode = 'toParty';
                    _this.listOfLrNumber = [];
                    for (var i = 0; i < _this.pfAssignedJobDetailsDataList.length; i++) {
                        _this.listOfLrNumber.push(_this.pfAssignedJobDetailsDataList[i].memoNumber);
                    }
                    //                    console.log( this.listOfLrNumber );
                    _this.userDataDtoForLRToParty.list = _this.listOfLrNumber;
                    _this.userDataDtoForLRToParty.partyName = _this.pfAssignedJobDetailsDataList[0].consigneeName;
                    //                    console.log( this.pfAssignedJobDetailsDataList );
                    if (_this.pfAssignedJobDetailsDataList[0].consigneeName != null && _this.pfAssignedJobDetailsDataList[0].consigneeName != '') {
                        _this.userDataDtoForLRToParty.consigneeId = _this.pfAssignedJobDetailsDataList[0].consigneeId;
                    }
                    _this.updateCashMemoInfo(_this.userDataDtoForLRToParty);
                    //Pending
                    //                    CashMemoDto cashMemoDto = new CashMemoDto();
                    //                    cashMemoDto
                    //                            .setCollectionMan(comboBoxAssg
                    //                                    .getRawValue());
                    //                    new GCTakenReport(storeAssg,
                    //                            cashMemoDto);
                    //                    popupAssign.hide();
                }
            });
        }
    };
    //To Party Pop up
    PaymentFollowupComponent.prototype.validateCollectionManToParty = function () {
        var _this = this;
        this.selectedCollectionManToParty = this.enteredCollectionManToParty;
        if (this.selectedCollectionManToParty == null || this.selectedCollectionManToParty == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Collection Man Not Selected",
                text: "Please Select A Collection Man",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Cashmemo To-Party",
                text: "Sure U Want to Mark the selected memos As To-Party ",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (toPartyMemo) {
                if (toPartyMemo) {
                    //Pending
                    _this.userDataDtoForLRToPartySRDStock = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
                    _this.selectedCollectionManToParty = _this.enteredCollectionManToParty;
                    _this.userDataDtoForLRToPartySRDStock.collectioMan = _this.selectedCollectionManToParty;
                    _this.userDataDtoForLRToPartySRDStock.mode = 'toParty';
                    _this.listOfLrNumber = [];
                    for (var i = 0; i < _this.pfAssignedJobDetailsDataList.length; i++) {
                        _this.listOfLrNumber.push(_this.pfAssignedJobDetailsDataList[i].memoNumber);
                    }
                    //                    console.log( this.listOfLrNumber );
                    _this.userDataDtoForLRToPartySRDStock.list = _this.listOfLrNumber;
                    _this.userDataDtoForLRToPartySRDStock.partyName = _this.pfAssignedJobDetailsDataList[0].consigneeName;
                    //                    console.log( this.pfAssignedJobDetailsDataList );
                    if (_this.pfAssignedJobDetailsDataList[0].consigneeName != null && _this.pfAssignedJobDetailsDataList[0].consigneeName != '') {
                        _this.userDataDtoForLRToPartySRDStock.consigneeId = _this.pfAssignedJobDetailsDataList[0].consigneeId;
                    }
                    _this.updateCashMemoInfo(_this.userDataDtoForLRToPartySRDStock);
                    //Pending
                    //                    CashMemoDto cashMemoDto = new CashMemoDto();
                    //                    cashMemoDto
                    //                            .setCollectionMan(comboBoxAssg
                    //                                    .getRawValue());
                    //                    new GCTakenReport(storeAssg,
                    //                            cashMemoDto);
                    //                    popupAssign.hide();
                }
            });
        }
    };
    //for Btn All
    PaymentFollowupComponent.prototype.validateAllBtn = function () {
        if (this.pfCollectionManDetailsDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Empty Datas",
                text: "No Cashmemo Found",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.gridTransferAllToAssg();
        }
    };
    //for Btn  Remove All
    PaymentFollowupComponent.prototype.validateRemoveAllBtn = function () {
        if (this.pfAssignedJobDetailsDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Empty Datas",
                text: "No Cashmemo Found",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            //            this.chkPendingMemosExist();
            //            this.removePendingMemos();
            this.gridTransferAllToUnAssg();
        }
    };
    PaymentFollowupComponent.prototype.gridTransferAllToUnAssg = function () {
        //        console.log( this.pfAssignedJobDetailsDataList );
        for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
            this.pfCollectionManDetailsDataList.push(this.pfAssignedJobDetailsDataList[i]);
            this.pfCollectionManDetailsDataListForSearch.push(this.pfAssignedJobDetailsDataList[i]);
        }
        this.countOfAssignLR = 0;
        this.sumOfAssignLR = 0;
        this.pfAssignedJobDetailsDataList = [];
        //        console.log( this.pfAssignedJobDetailsDataList );
        this.countOFMemosCollectionTable = 0;
        this.sumOFMemosCollectionTable = 0;
        for (var i = 0; i < this.pfCollectionManDetailsDataList.length; i++) {
            this.countOFMemosCollectionTable = this.countOFMemosCollectionTable + 1;
            this.sumOFMemosCollectionTable = this.sumOFMemosCollectionTable + +(this.pfCollectionManDetailsDataList[i].amount);
        }
    };
    PaymentFollowupComponent.prototype.gridTransferAllToAssg = function () {
        var _this = this;
        //        console.log( this.pfAssignedJobDetailsDataList.length );
        //        console.log( this.tempstore.length );
        //        console.log( this.pfCollectionManDetailsDataList.length );
        this.countOfAssignLR = 0;
        this.sumOfAssignLR = 0;
        var _loop_1 = function (i) {
            this_1.modelAlreadyExist = null;
            this_1.modelAll = null;
            //            console.log( this.pfCollectionManDetailsDataList[i].memoNumber );
            //Pending
            this_1.modelAll = (this_1.pfCollectionManDetailsDataList.find(function (pfCollectionManDetailsData) { return pfCollectionManDetailsData.memoNumber === _this.pfCollectionManDetailsDataList[i].memoNumber; }));
            //            console.log( this.modelAll );
            if (this_1.pfAssignedJobDetailsDataList.length > 0) {
                this_1.modelAlreadyExist = (this_1.pfAssignedJobDetailsDataList.find(function (pfAssignedJobDetailsData) { return pfAssignedJobDetailsData.memoNumber === _this.pfCollectionManDetailsDataList[i].memoNumber; }));
                //Pending
            }
            //            console.log( this.modelAlreadyExist );
            //            console.log( 'modelAll.getColumn1()...  ' + this.modelAll.column1 );
            if ((this_1.modelAlreadyExist == null || this_1.modelAlreadyExist == undefined) && this_1.modelAll != null
                && this_1.modelAll.column1 != null && this_1.modelAll.column1 == 'Assigned') {
                this_1.countOFMemosCollectionTable = this_1.countOFMemosCollectionTable - 1;
                this_1.sumOFMemosCollectionTable = this_1.sumOFMemosCollectionTable - +(this_1.pfCollectionManDetailsDataListForSearch[i].amount);
                if (this_1.setAssingedDetails == 'new') {
                    this_1.dtTriggerPfAssignedJobDetails.next();
                    this_1.setAssingedDetails = 'old';
                }
                this_1.pfAssignedJobDetailsDataList.push(this_1.pfCollectionManDetailsDataList[i]);
                this_1.tempstore.push(this_1.pfCollectionManDetailsDataList[i]);
                this_1.tempStoreForAllTrx.push(this_1.pfCollectionManDetailsDataList[i]);
                this_1.countOfAssignLR = +this_1.countOfAssignLR + 1;
                this_1.sumOfAssignLR = +this_1.sumOfAssignLR + +this_1.pfCollectionManDetailsDataList[i].amount;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.pfCollectionManDetailsDataList.length; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            this_2.pfCollectionManDetailsDataList.splice(this_2.pfCollectionManDetailsDataList.find(function (pfCollectionManDetailsData) { return pfCollectionManDetailsData.memoNumber === _this.tempStoreForAllTrx[i]; }), 1);
        };
        var this_2 = this;
        for (var i = 0; i < this.tempStoreForAllTrx.length; i++) {
            _loop_2(i);
        }
        //        console.log( this.pfCollectionManDetailsDataList );
        //        console.log( this.pfAssignedJobDetailsDataList );
        //        console.log( this.tempstore );
        //        console.log( this.tempStoreForAllTrx );
        this.value = false;
    };
    //For action type finish 
    PaymentFollowupComponent.prototype.callForClosingCollection = function () {
        var _this = this;
        this.selectedCollectionMan = this.enteredCollectionMan;
        //        this.completedDate=
        this.enteredCompletedOnDate = $("#completedOnDate").val();
        if (this.enteredCompletedOnDate == null || this.enteredCompletedOnDate == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Mandetory",
                text: "Please Select Date",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Closing Collection",
                text: "Are U sure want to close the collection of " + this.selectedCollectionMan,
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (finishMemo) {
                if (finishMemo) {
                    //Pending
                    _this.userDataDtoForLRFinish = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
                    _this.selectedCollectionMan = _this.enteredCollectionMan;
                    _this.userDataDtoForLRFinish.collectioMan = _this.selectedCollectionMan;
                    _this.userDataDtoForLRFinish.updatedBy = _this.userDataDtoReturnSession.userId;
                    _this.userDataDtoForLRFinish.city = _this.userDataDtoReturnSession.mainStation;
                    _this.enteredCompletedOnDate = _this.datePipe.transform(_this.enteredCompletedOnDate, "yyyy-MM-dd");
                    //                    console.log( this.enteredCompletedOnDate );
                    _this.userDataDtoForLRFinish.completedOn = _this.enteredCompletedOnDate;
                    _this.userDataDtoForLRFinish.companyId = _this.userDataDtoReturnSession.companyId;
                    _this.updateCloseCollectionMethod(_this.userDataDtoForLRFinish);
                }
            });
        }
    };
    PaymentFollowupComponent.prototype.clearFinish = function () {
        this.userDataDtoForLRFinish = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.selectedCollectionMan = '';
        this.enteredCompletedOnDate = '';
        $("#completedOnDate").val('');
        this.selectTodayCompletedOnDate();
    };
    PaymentFollowupComponent.prototype.setPringForGCTakenReport = function (cashMemoDtoForAssignPrint) {
        var _this = this;
        localStorage.clear();
        //        console.log( this.resultDtos );
        //        console.log( this.pfAssignedJobDetailsDataList );
        localStorage.setItem('printAfterAssignMemo', JSON.stringify(this.cashMemoDtoForAssignPrint));
        localStorage.setItem('printAfterAssignMemolist', JSON.stringify(this.pfAssignedJobDetailsDataList));
        this.viewAssignMemoPrint = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewAssignMemoPrint) {
                _this.viewAssignMemoPrint = false;
                _this.cashMemoDtoForAssignPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
                localStorage.clear();
            }
        });
    };
    //    val(){
    //        alert('why are you here ?');
    //    }
    PaymentFollowupComponent.prototype.getConsigneeDetailsList = function () {
        this.consigneeNameOptions = [];
        this.consigneeNameOptionsPayment = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_16__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.city = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "specific";
    };
    PaymentFollowupComponent.prototype.reloadConsignee = function () {
        this.getConsigneeDetails();
    };
    PaymentFollowupComponent.prototype.reloadBank = function () {
        this.getPartyBankDetailsService();
    };
    //Frm here Adding in table of Less Entry Starts
    PaymentFollowupComponent.prototype.getMemoNumberForEntryLess = function (e, LessType) {
        if (e.keyCode == 13) {
            if (LessType == 'manual') {
                this.commonValidationsOnMemoEnter("manual");
                //                console.log( 'location1' );
            }
            else if (LessType == 'scan') {
                this.commonValidationsOnMemoEnter("scan");
            }
        }
    };
    PaymentFollowupComponent.prototype.validateLessAmount = function (e) {
        if (e.keyCode == 13) {
            if (this.nextEntryType == 'Payment Entry') {
                this.enteredLessAmt = $("#paymentLessAmount").val();
                if (this.enteredLessAmt == '' || this.enteredLessAmt == null) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Not Allowed",
                        text: "Please Enter Amount",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    this.enteredLessAmt = '';
                    this.commonValidationsOnMemoEnter("paymentLess");
                }
            }
            else if (this.nextEntryType == 'Less Entry') {
                this.enteredLessAmt = $("#entryLessAmount").val();
                if (this.enteredLessAmt == '' || this.enteredLessAmt == null) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Not Allowed",
                        text: "Please Enter Amount",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    this.enteredLessAmt = '';
                    this.commonValidationsOnMemoEnter("amtLess");
                }
            }
        }
    };
    //    rowSelectedConsignee( consigneeName ) {
    //        this.selectedConsigneeId = consigneeName.consigneeId;
    //        window.setTimeout( function() {
    //            $( "#totalLess" ).focus();
    //        }, 100 );
    //    }
    PaymentFollowupComponent.prototype.rowSelectedConsignee = function (e, fubi) {
        this.modelConsigneeName = e.item;
        this.selectedConsigneeId = this.modelConsigneeName.consigneeId;
        //        console.log('Id');
        //        console.log(this.selectedConsigneeId);
        window.setTimeout(function () {
            $("#totalLess").focus();
        }, 100);
    };
    //    rowSelectedConsigneePayment( consigneeName ) {
    //        this.selectedConsigneeId = consigneeName.consigneeId;
    //        window.setTimeout( function() {
    //            $( "#totalAmountForPayment" ).focus();
    //        }, 100 );
    //    }
    PaymentFollowupComponent.prototype.rowSelectedConsigneePayment = function (e, fubi) {
        this.modelConsigneeNameForPayment = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameForPayment.consigneeId;
        //        console.log('Id2');
        //        console.log(this.selectedConsigneeId);
        window.setTimeout(function () {
            $("#totalAmountForPayment").focus();
        }, 100);
    };
    PaymentFollowupComponent.prototype.commonValidationsOnMemoEnter = function (keyEnter) {
        var _this = this;
        this.tempStoreDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.memoNum = '';
        this.selectedActionType = '';
        this.selectedEntryType = '';
        this.selectedCodeForManual = '';
        this.selectedMemoNumberForManual = '';
        this.selectedMemoNumberForAutomatic = '';
        this.selectedActionType = $("#actionType").val();
        if (this.nextEntryType == 'Less Entry') {
            this.selectedEntryType = $("#entryLessEntryType").val();
            this.selectedCodeForManual = $("#codeForManualLess").val();
            this.selectedMemoNumberForManual = $("#memoNumberForManualLess").val();
            this.selectedMemoNumberForAutomatic = $("#memoNumberForAutomaticLess").val();
            this.selectedConsignee = $("#consigneeName").val();
            this.selectedTypeLess = $("#lessType").val();
            if (this.selectedEntryType == 'entryLessAutomatic') {
                this.memoNum = this.selectedMemoNumberForAutomatic;
                //                console.log( this.memoNum );
            }
            else {
                this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
                //                console.log( this.memoNum );
            }
        }
        else if (this.nextEntryType == 'Payment Entry') {
            this.selectedEntryType = $("#entryLessPaymentEntry").val();
            this.selectedCodeForManual = $("#codeForManualLessPayment").val();
            this.selectedMemoNumberForManual = $("#memoNumberForManualLessPayment").val();
            this.selectedMemoNumberForAutomatic = $("#memoNumberForAutomaticLessPayment").val();
            this.selectedConsignee = $("#consigneeNameForPayment").val();
            if (this.selectedEntryType == 'paymentLessAutomatic') {
                this.memoNum = this.selectedMemoNumberForAutomatic;
                //                console.log( this.memoNum );
            }
            else {
                this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
                //                console.log( this.memoNum );
            }
        }
        this.searchedMemoForMemoExistInTable = this.searchedMemoForMemoExistInTableForLess(this.memoNum);
        if (this.searchedMemoForMemoExistInTable.memoNumber == null || this.searchedMemoForMemoExistInTable.memoNumber == '') {
            this.modelForLessMaintain = '';
        }
        else {
            this.modelForLessMaintain = this.searchedMemoForMemoExistInTable;
        }
        //        const checkAssignedTable =this.pfAssignedJobDetailsDataList.find( pfAssignedJobDetailsData => pfAssignedJobDetailsData.memoNumber ===  this.memoNum  );
        //                console.log( checkAssignedTable );
        //        this.letValueofSearchInCollectionManTableFoEntryLessAny=[];
        //        if(checkAssignedTable.length == 0){
        //            this.letValueofSearchInCollectionManTableFoEntryLessAny=[];
        //        }else{
        //            this.letValueofSearchInCollectionManTableFoEntryLessAny=checkAssignedTable
        //        }
        if (this.selectedConsignee == null || this.selectedConsignee == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Not Allowed",
                text: "Please select a Consignee Name",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (this.modelForLessMaintain == null || this.modelForLessMaintain == '') {
            if (this.selectedMemoNumberForManual != null && this.selectedMemoNumberForManual != '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Not Allowed",
                    text: "Cashmemo Number " + this.memoNum + " does not exist!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
        }
        else if (this.modelForLessMaintain.consigneeId != this.selectedConsigneeId) {
            //    console.log( this.modelForLessMaintain.consigneeId );
            //  console.log( this.selectedConsigneeId );
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Not Allowed",
                text: "Consignee Name bind with Memo is not matched with the selected Consignee above, please verify! ",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (this.nextEntryType != '' && this.nextEntryType == 'Less Entry') {
            //console.log( 'location2' );
            //             duplicate less entry with same less description should blocked
            this.isDuplicateLess = false;
            var result = this.lessEntriesDataTableDataList.filter(function (lessEntriesDataTableData) { return lessEntriesDataTableData.chqType === _this.memoNum; });
            //   console.log( result );
            this.letValueofMemoExistInLessEntryTableAny = [];
            // console.log( this.letValueofMemoExistInLessEntryTableAny );
            this.letValueofMemoExistInLessEntryTableAny = result;
            //console.log( this.letValueofMemoExistInLessEntryTableAny );
            for (var i = 0; i < this.letValueofMemoExistInLessEntryTableAny.length; i++) {
                if (this.letValueofMemoExistInLessEntryTableAny != null
                    && this.letValueofMemoExistInLessEntryTableAny[i].chqNumber == this.selectedTypeLess
                    && !this.isEdit) {
                    //      console.log( 'am here' );
                    this.isDuplicateLess = true;
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Not Allowed",
                        text: "Duplicate Less Entry Cashmemo Number '" + this.memoNum + "' - Less Type '" + this.selectedTypeLess + "'",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    break;
                }
            }
            if (!this.isDuplicateLess) {
                //console.log( 'location3' );
                // console.log( this.modelForLessMaintain );
                this.lessSpecifcValidations(this.modelForLessMaintain, this.memoNum, keyEnter);
            }
        }
        else if (this.nextEntryType != '' && this.nextEntryType == 'Payment Entry') {
            // console.log( 'hhhhhh' );
            var paymentTableCheck = this.paymentAmountEntriesDataList.filter(function (paymentAmountEntriesData) { return paymentAmountEntriesData.chqType === _this.memoNum; });
            //console.log( paymentTableCheck );
            this.letValueofMemoExistInPaymentEntryTableAny = [];
            //console.log( this.letValueofMemoExistInLessEntryTableAny );
            this.letValueofMemoExistInPaymentEntryTableAny = paymentTableCheck;
            //console.log( this.letValueofMemoExistInPaymentEntryTableAny );
            if (this.isEdit == false && this.letValueofMemoExistInPaymentEntryTableAny.length > 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Not Allowed",
                    text: "Duplicate Entry for the Cashmemo Number " + this.memoNum,
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.paymentSpecifcValidations(keyEnter);
            }
        }
    };
    PaymentFollowupComponent.prototype.searchedMemoForMemoExistInTableForLess = function (selectedNum) {
        if (this.pfAssignedJobDetailsDataList.length == 0) {
            this.getsearchInCollectionManTableForEntryLess = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            //            console.log( ' 1' );
        }
        else {
            // console.log( '2' );
            this.getsearchInCollectionManTableForEntryLess = this.enteredSearchInCollectionManTableFoEnryLess(selectedNum);
        }
        //   console.log( this.getsearchInCollectionManTableForEntryLess );
        return this.getsearchInCollectionManTableForEntryLess;
    };
    PaymentFollowupComponent.prototype.enteredSearchInCollectionManTableFoEnryLess = function (selectedNum) {
        //    console.log( '1111' );
        this.letValueofSearchInCollectionManTableFoEntryLess = (this.pfAssignedJobDetailsDataList.find(function (pfAssignedJobDetailsData) { return pfAssignedJobDetailsData.memoNumber === selectedNum; }));
        if (this.letValueofSearchInCollectionManTableFoEntryLess == null || this.letValueofSearchInCollectionManTableFoDup == undefined) {
            this.letValueofSearchInCollectionManTableFoEntryLess = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            //   console.log( 'boss1' );
        }
        else {
            //    console.log( 'boss1cd' );
            this.letValueofSearchInCollectionManTableFoEntryLess = this.letValueofSearchInCollectionManTableFoEntryLess;
        }
        //   console.log( this.letValueofSearchInCollectionManTableFoEntryLess );
        return this.letValueofSearchInCollectionManTableFoEntryLess;
    };
    /// For checking the memo number exist in Less Entry table befor adding the new row 
    PaymentFollowupComponent.prototype.lessSpecifcValidations = function (modelForLessMaintain, memoNum, keyEnter) {
        var _this = this;
        var discount = 0.0;
        discount = modelForLessMaintain.discount == null ? 0.0 : modelForLessMaintain.discount;
        // console.log( discount );
        if (discount > 0) {
            //console.log( 'location4' );
            // show alert only at first time for single memo hence the below
            // condition
            //            this.searchedMemoForDiscInLessEntry = this.searchedMemoForForDiscInLessEntryTable( memoNum );
            //            this.searchedMemoForDiscInLessEntryAny = this.searchedMemoForDiscInLessEntry;
            //
            //           if ( this.searchedMemoForDiscInLessEntryAny.chqType == null || this.searchedMemoForDiscInLessEntryAny.chqType == '' ) {
            //                this.maintenanceDisc = '';
            //            } else {
            //
            //                this.maintenanceDisc = this.searchedMemoForDiscInLessEntryAny;
            //
            //            }
            //           console.log( this.maintenanceDisc );
            var result = this.lessEntriesDataTableDataList.filter(function (lessEntriesDataTableData) { return lessEntriesDataTableData.chqType === memoNum; });
            //  console.log( 'hello' );
            //console.log( result );
            this.maintenanceDiscArray = [];
            if (result == undefined) {
                this.maintenanceDiscArray = [];
                //  console.log( 'empty' );
            }
            else {
                this.maintenanceDiscArray = result;
                //  console.log( 'notempty' );
            }
            // console.log( this.maintenanceDiscArray );
            //            if ( this.maintenanceDiscArray == [] || this.maintenanceDiscArray == null ) {
            if (this.maintenanceDiscArray.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Already discounted",
                    text: "Discount already given for the Cashmemo Number " + memoNum + ", are you want to give additional less?",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (lessType) {
                    if (lessType) {
                        if (keyEnter != null && keyEnter == 'amtLess') {
                            _this.lessEntry();
                        }
                        else {
                            window.setTimeout(function () {
                                $("#lessType").focus();
                            }, 100);
                        }
                    }
                    else {
                        $("#memoNumberForAutomaticLess").val('');
                        $("#memoNumberForManualLess").val('');
                        $("#lessType").val('');
                        $("#memoNumberForManualLess").focus();
                    }
                });
            }
            else {
                //Pending
                if (keyEnter != null && keyEnter == 'amtLess') {
                    this.lessEntry();
                }
                else {
                    window.setTimeout(function () {
                        $("#lessType").focus();
                    }, 100);
                }
            }
        }
        else {
            //  console.log( 'location5' );
            //Pending
            if (keyEnter != null && keyEnter == 'amtLess') {
                this.lessEntry();
            }
            else {
                window.setTimeout(function () {
                    $("#lessType").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.lessEntry = function () {
        //  console.log( 'location6' );
        this.enteredTotalLess = $("#totalLess").val();
        this.enteredLessAmt = $("#entryLessAmount").val();
        this.enteredLessAmt = this.enteredLessAmt == null ? 0.0 : this.enteredLessAmt == '' ? 0.0 : this.enteredLessAmt;
        this.totalAmt = this.enteredTotalLess == null ? 0.0 : this.enteredTotalLess == '' ? 0.0 : this.enteredTotalLess;
        this.totalBalAmt = this.balanceAmountFinal;
        this.enteredAmt = 0.0;
        this.clickedRowAmt = 0.0;
        if (this.isEdit) {
            //Pending
            this.clickedRowAmt = this.maintenanceCompletedLessLrs.chqAmount;
        }
        for (var i = 0; i < this.lessEntriesDataTableDataList.length; i++) {
            this.enteredAmt = +this.enteredAmt + +this.lessEntriesDataTableDataList[i].chqAmount;
        }
        this.enteredAmt = +this.enteredAmt + +this.enteredLessAmt;
        // deduct the clicked row when edit
        this.enteredAmt = +this.enteredAmt - +this.clickedRowAmt;
        // console.log( this.enteredAmt, this.totalAmt, this.totalBalAmt );
        if (this.enteredTotalLess == null || this.enteredTotalLess == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Not Allowed",
                text: "Please enter the total Less amount ",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (this.enteredAmt > this.totalAmt) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Not Allowed",
                text: "Total entered amount exceed from the actual Amount, please verify!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (this.enteredAmt > this.totalBalAmt) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Not Allowed",
                text: "Amount exceeded from the actual Bill Amount, please verify!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            $("#entryLessAmount").val('');
        }
        else {
            this.insertRowLessEntry();
        }
    };
    PaymentFollowupComponent.prototype.validateTotalLess = function (e) {
        if (e.keyCode == 13) {
            if (this.nextEntryType == 'Less Entry') {
                if (!this.validateAmtWithBillBalTotal()) {
                    window.setTimeout(function () {
                        //                        $( "#entryLessStation" ).focus();
                        $("#memoNumberForManualLess").focus();
                    }, 100);
                }
            }
            else if (this.nextEntryType == 'Payment Entry') {
                if (!this.validateAmtWithBillBalTotal()) {
                    this.selectedPaymentMode = $("#paymentMode").val();
                    if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cash') {
                        window.setTimeout(function () {
                            $("#twoThousandRupeeCount").focus();
                        }, 100);
                    }
                    else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque') {
                        window.setTimeout(function () {
                            $("#chequeNumber").focus();
                        }, 100);
                    }
                    else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft') {
                        window.setTimeout(function () {
                            $("#consigneeBankName").val('');
                            $("#newBankName").val('');
                            $("#consigneeBankName").focus();
                        }, 100);
                    }
                }
            }
        }
    };
    //    validateAmtWithBillBalTotal() {
    //        if ( this.nextEntryType == 'Less Entry' ) {
    //            this.enteredTotalLess = $( "#totalLess" ).val();
    //        } else if ( this.nextEntryType == 'Payment Entry' ) {
    //            this.enteredTotalLess = $( "#totalAmountForPayment" ).val();
    //
    //        }
    //        this.totalAmt = this.enteredTotalLess == null ? 0.0 : this.enteredTotalLess == '' ? 0.0 : this.enteredTotalLess;
    //        this.totalBalAmt = this.balanceAmountFinal;
    //        console.log( this.totalAmt, this.totalBalAmt );
    //
    //
    //        if ( this.totalAmt > this.totalBalAmt ) {
    //            swal( {
    //                title: "Not Allowed",
    //                text: "Total amount exceed from the actual Bill Balance Amount, please verify!",
    //                icon: "warning",
    //                closeOnClickOutside: false,
    //                closeOnEsc: false,
    //            } );
    //            $( "#totalLess" ).val( '' );
    //            return true;
    //        } else {
    //            return false;
    //        }
    //    }
    PaymentFollowupComponent.prototype.validateAmtWithBillBalTotal = function () {
        if (this.nextEntryType == 'Less Entry') {
            this.enteredTotalLess = $("#totalLess").val();
        }
        else if (this.nextEntryType == 'Payment Entry') {
            this.enteredTotalLess = $("#totalAmountForPayment").val();
        }
        this.totalAmt = this.enteredTotalLess == null ? 0.0 : this.enteredTotalLess == '' ? 0.0 : this.enteredTotalLess;
        this.totalBalAmt = this.balanceAmountFinal;
        //  console.log( this.totalAmt, this.totalBalAmt );
        if (this.isPaymentClicked) {
            return false;
        }
        else {
            if (this.totalAmt > this.totalBalAmt) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Not Allowed",
                    text: "Total amount exceed from the actual Bill Balance Amount, please verify!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                $("#totalLess").val('');
                return true;
            }
            else {
                return false;
            }
        }
    };
    //    searchedMemoForForDiscInLessEntryTable( memoNum ) {
    //        if ( this.lessEntriesDataTableDataList.length == 0 ) {
    //            this.getsearchInMemoExistDiscInLessEntry = new CashMemoDto();
    //            console.log( ' 1' );
    //        } else {
    //            console.log( '2' );
    //            this.getsearchInMemoExistDiscInLessEntry = this.enteredSearchDiscInLessEntry( memoNum )
    //        }
    //        console.log( this.getsearchInMemoExistDiscInLessEntry );
    //        return this.getsearchInMemoExistDiscInLessEntry;
    //    }
    //    enteredSearchDiscInLessEntry( memoNum: string ): CashMemoDto {
    //        console.log( '1111' );
    //        this.letValueofMemoExistDiscInLessEntry = ( this.lessEntriesDataTableDataList.find( lessEntriesDataTableData => lessEntriesDataTableData.chqType === memoNum ) );
    //        if ( this.letValueofMemoExistDiscInLessEntry == null || this.letValueofMemoExistDiscInLessEntry == undefined ) {
    //            this.letValueofMemoExistDiscInLessEntry = new CashMemoDto();
    //            console.log( 'boss1' );
    //        } else {
    //            console.log( 'boss1cd' );
    //            this.letValueofMemoExistDiscInLessEntry = this.letValueofMemoExistDiscInLessEntry;
    //        }
    //        console.log( this.letValueofMemoExistDiscInLessEntry );
    //        return this.letValueofMemoExistDiscInLessEntry;
    //    }
    PaymentFollowupComponent.prototype.insertRowLessEntry = function () {
        var _this = this;
        //  console.log( 'i am here' );
        this.memoNum = '';
        this.selectedEntryType = '';
        this.selectedCodeForManual = '';
        this.selectedMemoNumberForManual = '';
        this.selectedMemoNumberForAutomatic = '';
        this.selectedEntryType = $("#entryLessEntryType").val();
        this.selectedCodeForManual = $("#codeForManualLess").val();
        this.selectedMemoNumberForManual = $("#memoNumberForManualLess").val();
        this.selectedMemoNumberForAutomatic = $("#memoNumberForAutomaticLess").val();
        this.selectedConsignee = $("#consigneeName").val();
        if (this.selectedEntryType == 'entryLessAutomatic') {
            this.memoNum = this.selectedMemoNumberForAutomatic;
            //     console.log( this.memoNum );
        }
        else {
            this.memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
            //        console.log( this.memoNum );
        }
        //Pending
        //                if (maintenanceCompletedLessLrs != null) {
        //                    listStoreCompleteLessLrs.remove(maintenanceCompletedLessLrs);
        //                }
        //        this.searchedMemoFrmAssingedTable = this.searchedMemoForMemoFrmAssingedTable( this.memoNum );
        //
        //        if ( this.searchedMemoFrmAssingedTable.memoNumber == null || this.searchedMemoFrmAssingedTable.memoNumber == '' ) {
        //            this.maintenanceMemoNumber = '';
        //        } else {
        //
        //            this.modelForLessMaintain = this.searchedMemoFrmAssingedTable;
        //        }
        var checkAssignedTable = this.pfAssignedJobDetailsDataList.find(function (pfAssignedJobDetailsData) { return pfAssignedJobDetailsData.memoNumber === _this.memoNum; });
        //  console.log( 'Checking' );
        // console.log( checkAssignedTable );
        this.letValueofMemoFrmAssingedTableAny = [];
        if (checkAssignedTable == undefined) {
            this.letValueofMemoFrmAssingedTableAny = [];
        }
        else {
            this.letValueofMemoFrmAssingedTableAny = checkAssignedTable;
        }
        //  console.log( this.letValueofMemoFrmAssingedTableAny );
        this.getGroupStationOfLR(this.letValueofMemoFrmAssingedTableAny, this.memoNum);
    };
    //    searchedMemoForMemoFrmAssingedTable( selectedNum: string ) {
    //
    //        if ( this.pfAssignedJobDetailsDataList.length == 0 ) {
    //            this.getsearchInMemoFrmAssingedTable = new CashMemoDto();
    //            console.log( ' 1' );
    //        } else {
    //            console.log( '2' );
    //            this.getsearchInMemoFrmAssingedTable = this.enteredSearchFromAssignedTable( selectedNum )
    //        }
    //        console.log( this.getsearchInMemoFrmAssingedTable );
    //        return this.getsearchInMemoFrmAssingedTable;
    //    }
    //    enteredSearchFromAssignedTable( selectedNum: string ): CashMemoDto {
    //        console.log( '1111' );
    //        this.letValueofMemoFrmAssingedTable = ( this.pfAssignedJobDetailsDataList.find( pfAssignedJobDetailsData => pfAssignedJobDetailsData.memoNumber === selectedNum ) );
    //        if ( this.letValueofMemoFrmAssingedTable == null || this.letValueofMemoFrmAssingedTable == undefined ) {
    //            this.letValueofMemoFrmAssingedTable = new CashMemoDto();
    //            console.log( 'boss1' );
    //        } else {
    //            console.log( 'boss1cd' );
    //            this.letValueofMemoFrmAssingedTable = this.letValueofMemoFrmAssingedTable;
    //        }
    //        console.log( this.letValueofMemoFrmAssingedTable );
    //        return this.letValueofMemoFrmAssingedTable;
    //    }
    PaymentFollowupComponent.prototype.getGroupStationOfLR = function (modelForLessMaintain, memoNum) {
        this.lrDtoForGroupStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.lrDtoForGroupStation.lrNumber = modelForLessMaintain.lrNumber;
        this.getGroupStationOfLRService(memoNum);
    };
    PaymentFollowupComponent.prototype.addInLessEntryTable = function (memoNum) {
        this.newAttribute.chqType = memoNum;
        this.newAttribute.chqNumber = $("#lessType").val();
        this.newAttribute.chqAmount = $("#entryLessAmount").val();
        this.newAttribute.cashMemoAmt = this.lrDtoForGroupStationSet.cashAmt;
        this.newAttribute.balance = 0.0;
        this.newAttribute.mainStation = this.lrDtoForGroupStationSet.mainstation;
        this.newAttribute.consigneeId = this.selectedConsigneeId;
        this.newAttribute.consigneeName = $("#consigneeName").val();
        //        console.log( this.newAttribute.cashMemoAmt, this.newAttribute.mainStation);
        if (this.editTableId != null) {
            this.lessEntriesDataTableDataList.splice(this.editTableId, 1);
            this.countOfLessLR = +this.countOfLessLR - 1;
            this.sumOfLessAmt = +this.sumOfLessAmt - +this.editlessamount;
        }
        if (this.lessEntriesDataTableDataList == null) {
            this.lessEntriesDataTableDataList = [];
        }
        //console.log(this.setLessEntryDetails);
        if (this.setLessEntryDetails == 'new') {
            this.dtTriggerLessEntriesDataTable.next();
            this.setLessEntryDetails = 'old';
        }
        if (this.lessEntriesDataTableDataList.length == 0) {
            this.lessEntriesDataTableDataList.push(this.newAttribute);
        }
        else {
            this.lessEntriesDataTableDataList.push(this.newAttribute);
        }
        // console.log( this.lessEntriesDataTableDataList );
        this.countOfLessLR = +this.countOfLessLR + 1;
        this.sumOfLessAmt = +this.sumOfLessAmt + +this.newAttribute.chqAmount;
        //        for(let i=0; i <this.lessEntriesDataTableDataList.length; i++){
        //       
        //        }
        this.newAttribute = {};
        this.isEdit = false;
        $("#entryLessAmount").val('');
        $("#lessType").val('');
        //        $( "#memoNumberForManualLess" ).val( '' );
        //        $( "#memoNumberForAutomaticLess" ).val( '' );
        //        $( "#memoNumberForManualLess" ).focus();
        this.selectedEntryType = $("#entryLessEntryType").val();
        this.selectedCodeForManual = $("#codeForManualLess").val();
        if (this.selectedEntryType == 'entryLessAutomatic') {
            $("#memoNumberForAutomaticLess").val('');
            $("#memoNumberForAutomaticLess").focus();
        }
        else {
            $("#memoNumberForManualLess").val('');
            $("#memoNumberForManualLess").focus();
        }
        $("#hiddenIndexForLessEntry").val('');
        this.editTableId = null;
        ///Pending 
        this.maintenanceCompletedLessLrs = [];
        this.editlessamount = 0;
        this.lrDtoForGroupStationRet = '';
        this.lrDtoForGroupStationSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.controlEntryLessType.reset();
    };
    PaymentFollowupComponent.prototype.callForCompleteCollection = function () {
        if (this.chkPendingMemosExist()) {
            //Pending
            this.removePendingMemos();
        }
        else {
            //Pending
            this.getTotalAmtOfCompleteLrs();
            this.getConsigneeWiseBalanceDetails();
        }
    };
    PaymentFollowupComponent.prototype.getConsigneeWiseBalanceDetails = function () {
        this.consigneeWiseBalancelDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.consigneeWiseBalancelDto.consigneeWiseMemo = this.pfAssignedJobDetailsDataList;
        this.consigneeWiseBalancelDto.consigneeWiseMode = "new";
        this.getConsigneeWiseBalanceInfo();
    };
    PaymentFollowupComponent.prototype.setValInConsigneeWiseBalanceDetails = function () {
        this.consigneeWiseBalanceDetailsDataList = [];
        this.countOfConsingeeWiseMemo = 0;
        this.sumOfConsingeeWiseTotalCashMemo = 0;
        this.sumOfConsingeeWiseGrandTotal = 0;
        this.sumOfConsingeeWisePartyLessDed = 0;
        this.sumOfConsingeeWiseAdvChqAmt = 0;
        this.sumOfConsingeeWiseNeftAmtl = 0;
        this.sumOfConsingeeWiseBalance = 0;
        for (var key in this.consigneeWiseBalancelRet.hashMapConsigneeBalance) {
            //Whatever you want to do with key or obj[key]
            //  console.log( key );
            //  console.log( this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key] );
            if (key != '') {
                this.newAttributeForConsigneeWiseBalance = {};
                this.newAttributeForConsigneeWiseBalance.consigneeName = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key].consignee;
                this.newAttributeForConsigneeWiseBalance.totalCashMemo = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key].size;
                this.newAttributeForConsigneeWiseBalance.grandTotal = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key].grandTotal;
                this.newAttributeForConsigneeWiseBalance.partyLessDed = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key].less;
                this.newAttributeForConsigneeWiseBalance.advChqAmt = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key].chequeAmt;
                this.newAttributeForConsigneeWiseBalance.neftAmt = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key].neftAmt;
                this.newAttributeForConsigneeWiseBalance.balance = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key].balanceAmt;
                this.newAttributeForConsigneeWiseBalance.consigneeId = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key].consigneeId;
                this.countOfConsingeeWiseMemo = +this.countOfConsingeeWiseMemo + 1;
                this.sumOfConsingeeWiseTotalCashMemo = +this.sumOfConsingeeWiseTotalCashMemo + +this.newAttributeForConsigneeWiseBalance.totalCashMemo;
                this.sumOfConsingeeWiseGrandTotal = +this.sumOfConsingeeWiseGrandTotal + +this.newAttributeForConsigneeWiseBalance.grandTotal;
                this.sumOfConsingeeWisePartyLessDed = +this.sumOfConsingeeWisePartyLessDed + +this.newAttributeForConsigneeWiseBalance.partyLessDed;
                this.sumOfConsingeeWiseAdvChqAmt = +this.sumOfConsingeeWiseAdvChqAmt + +this.newAttributeForConsigneeWiseBalance.advChqAmt;
                this.sumOfConsingeeWiseNeftAmtl = +this.sumOfConsingeeWiseNeftAmtl + +this.newAttributeForConsigneeWiseBalance.neftAmt;
                this.sumOfConsingeeWiseBalance = +this.sumOfConsingeeWiseBalance + +this.newAttributeForConsigneeWiseBalance.balance;
                this.consigneeWiseBalanceDetailsDataList.push(this.newAttributeForConsigneeWiseBalance);
            }
        }
    };
    PaymentFollowupComponent.prototype.updateConsigneeBalanceDetails = function () {
        //        // less entries
        //        for ( let i = 0; i < this.consigneeWiseBalanceDetailsDataList.length; i++ ) {
        //            let totLessAmt = 0.0, totChqAmt = 0.0, totNeftAmt = 0.0, balanceAmt = 0.0;
        //            for ( let j = 0; j < this.userDataDtosLessTemp.length; j++ ) {
        //                if ( this.consigneeWiseBalanceDetailsDataList[j].consigneeId == this.userDataDtosLessTemp[j].consigneeId ) {
        //                    totLessAmt = +totLessAmt + +( this.userDataDtosLessTemp[j].paymentAmt == null ? 0.0 : this.userDataDtosLessTemp[j].paymentAmt );
        //                }
        //            }
        //            // chq entries
        //            for ( let j = 0; j < this.userDataDtosPaymentChqTemp.length; j++ ) {
        //                if ( this.consigneeWiseBalanceDetailsDataList[j].consigneeId == this.userDataDtosPaymentChqTemp[j].consigneeId ) {
        //                    totChqAmt = +totChqAmt + +( this.userDataDtosPaymentChqTemp[j].paymentAmt == null ? 0.0 : this.userDataDtosPaymentChqTemp[j].paymentAmt );
        //                }
        //            }
        //            // neft entries
        //            for ( let j = 0; j < this.userDataDtosPaymentNeftTemp.length; j++ ) {
        //                if ( this.consigneeWiseBalanceDetailsDataList[j].consigneeId == this.userDataDtosPaymentNeftTemp[j].consigneeId ) {
        //                    totNeftAmt = +totNeftAmt + +( this.userDataDtosPaymentNeftTemp[j].paymentAmt == null ? 0.0 : this.userDataDtosPaymentNeftTemp[j].paymentAmt );
        //                }
        //            }
        //
        //
        ////            this.setValOfConsignee(this.consigneeWiseBalanceDetailsDataList[i].consigneeId);
        //            
        //            for ( let key in this.consigneeWiseBalancelRet.hashMapConsigneeBalance ) {
        //
        //                if ( key == this.consigneeWiseBalanceDetailsDataList[i].consigneeId ) {
        //                    this.consigneeWiseBalancelDto = new CashMemoDto();
        //                    this.consigneeWiseBalancelDto = this.consigneeWiseBalancelRet.hashMapConsigneeBalance[key];
        //                    if( this.consigneeWiseBalancelDto != null){
        //                        
        //                        this.consigneeWiseBalancelDto.less =totLessAmt;
        //                        this.consigneeWiseBalancelDto.chequeAmt =totChqAmt;
        //                        this.consigneeWiseBalancelDto.neftAmt =totNeftAmt;
        //                        balanceAmt= +this.consigneeWiseBalancelDto.grandTotal - +(+totLessAmt + +totChqAmt + +totNeftAmt);
        //                        console.log(balanceAmt);
        //                        this.consigneeWiseBalancelDto.balanceAmt =balanceAmt;
        //                        this.consigneeWiseBalancelRet.hashMapConsigneeBalance.set( this.consigneeWiseBalanceDetailsDataList[i].consigneeId,this.consigneeWiseBalancelDto);
        //                        console.log( this.consigneeWiseBalancelRet);
        //                    }
        //                }
        //            }
        //        }
        //        this.setValInConsigneeWiseBalanceDetails();
        this.getConsigneeWiseBalanceUpdateDetails();
    };
    PaymentFollowupComponent.prototype.getConsigneeWiseBalanceUpdateDetails = function () {
        this.consigneeWiseBalancelDtoForUpdate = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.consigneeWiseBalancelDtoForUpdate.consigneeWiseMemo = this.pfAssignedJobDetailsDataList;
        this.consigneeWiseBalancelDtoForUpdate.consigneeWiseBalanceDtails = this.consigneeWiseBalanceDetailsDataList;
        this.consigneeWiseBalancelDtoForUpdate.listLessDetails = this.userDataDtosLessTemp;
        this.consigneeWiseBalancelDtoForUpdate.listChqDetails = this.userDataDtosPaymentChqTemp;
        this.consigneeWiseBalancelDtoForUpdate.listNEFTDetails = this.userDataDtosPaymentNeftTemp;
        this.consigneeWiseBalancelDtoForUpdate.consigneeWiseMode = "update";
        //console.log( this.userDataDtosLessTemp, this.userDataDtosPaymentChqTemp );
        this.getConsigneeWiseBalanceUpdate();
    };
    PaymentFollowupComponent.prototype.clearConsigneewiseDetails = function () {
        this.countOfConsingeeWiseMemo = 0;
        this.sumOfConsingeeWiseTotalCashMemo = 0;
        this.sumOfConsingeeWiseGrandTotal = 0;
        this.sumOfConsingeeWisePartyLessDed = 0;
        this.sumOfConsingeeWiseAdvChqAmt = 0;
        this.sumOfConsingeeWiseNeftAmtl = 0;
        this.sumOfConsingeeWiseBalance = 0;
        this.consigneeWiseBalanceDetailsDataList = [];
        this.consigneeWiseBalancelRet = [];
        this.newAttributeForConsigneeWiseBalance = {};
        this.consigneeWiseBalancelDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.consigneeWiseBalancelDtoForUpdate = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
    };
    //    setValOfConsignee(consigneeId){
    //        this.consigneeWiseBalancelDto = new CashMemoDto();
    //        this.consigneeWiseBalancelDto.hashMapConsigneeBalance = this.consigneeWiseBalancelRet.hashMapConsigneeBalance;
    //        this.getConsigneeWiseBalanceInfo();
    //    }
    //    getConsigneeWiseUpdateInfo = () => {
    //        this.memoService.getConsigneeWiseBalanceUpdateDet( this.consigneeWiseBalancelDto ).subscribe(
    //            ( response ) => {
    //                if ( response.length == 0 ) {
    //
    //                } else {
    //                    this.consigneeWiseBalancelRet = response;
    //                    this.setValInConsigneeWiseBalanceDetails();
    //                    console.log( this.consigneeWiseBalancelRet );
    //                }
    //
    //            } ),
    //            ( error ) => console.log( error.json() ),
    //            () => console.log( 'done' );
    //    };
    PaymentFollowupComponent.prototype.getTotalAmtOfCompleteLrs = function () {
        var totAmt = 0.0;
        for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
            totAmt = +totAmt + +this.pfAssignedJobDetailsDataList[i].amount;
        }
        this.balanceAmountFinal = totAmt;
        this.amountToBeCollected = totAmt;
        //  console.log( this.balanceAmountFinal, this.amountToBeCollected );
    };
    PaymentFollowupComponent.prototype.rowSelectedEditForLessEntry = function (lessEntriesDataTableData, index) {
        $("#lessType").val(lessEntriesDataTableData.chqNumber);
        $("#entryLessAmount").val(lessEntriesDataTableData.chqAmount);
        //For manual 
        var selectedMemo = lessEntriesDataTableData.chqType;
        this.slashSplitMemo = selectedMemo.split("/");
        var destSplit = this.slashSplitMemo[0];
        var yearSplit = this.slashSplitMemo[1];
        var memoNumberSplit = this.slashSplitMemo[2];
        //   console.log( selectedMemo, this.slashSplitMemo, destSplit, yearSplit, memoNumberSplit );
        var memoNumberCombine = destSplit + "/" + yearSplit + "/";
        //        $( "#lessType" ).val( lessEntriesDataTableData.chqNumber );
        $("#codeForManualLess").val(memoNumberCombine);
        $("#memoNumberForManualLess").val(memoNumberSplit);
        this.modelStationForLessAmt = memoNumberCombine;
        //////
        //For Automatic
        $("#memoNumberForAutomaticLess").val(lessEntriesDataTableData.chqType);
        /////
        $("#hiddenIndexForLessEntry").val(index);
        this.editTableId = index;
        ///
        this.maintenanceCompletedLessLrs = [];
        this.maintenanceCompletedLessLrs = lessEntriesDataTableData;
        //   console.log( this.maintenanceCompletedLessLrs );
        this.isEdit = true;
        //Set as manual as per old logic
        $("#entryLessEntryType").val('entryLessManual');
        this.entryLessManualView = true;
        this.entryLessAutomaticView = false;
        if (this.nextEntryType == 'Payment Entry') {
            $("#entryLessAmount").val(lessEntriesDataTableData.balance);
        }
        else {
            $("#entryLessAmount").val(lessEntriesDataTableData.chqAmount);
        }
        this.editlessamount = 0;
        this.editlessamount = lessEntriesDataTableData.chqAmount;
        $("#consigneeName").val(lessEntriesDataTableData.consigneeName);
        this.selectedConsigneeId = lessEntriesDataTableData.consigneeId;
        //   console.log( this.selectedConsigneeId );
    };
    PaymentFollowupComponent.prototype.rowSelectedDeleteForLessEntry = function (lessEntriesDataTableData, index) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Confirm Remove",
            text: "Sure you want to remove the selected less entry",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (remove) {
            if (remove) {
                //  console.log( this.lessEntriesDataTableDataList.length );
                _this.lessEntriesDataTableDataList.splice(index, 1);
                $("#hiddenIndexForLessEntry").val('');
                //  console.log( this.lessEntriesDataTableDataList.length );
                _this.countOfLessLR = +_this.countOfLessLR - 1;
                _this.sumOfLessAmt = +_this.sumOfLessAmt - +lessEntriesDataTableData.chqAmount;
                $("#entryLessAmount").val('');
                $("#lessType").val('');
                $("#memoNumberForManualLess").val('');
                $("#memoNumberForManualLess").focus();
                _this.editTableId = null;
                _this.maintenanceCompletedLessLrs = [];
                _this.isEdit = false;
                _this.controlEntryLessType.reset();
            }
        });
    };
    //    for less entry starts
    PaymentFollowupComponent.prototype.toggleEditableForTDS = function (event, contentLessEntryTds) {
        if (event.target.checked) {
            this.openLessEntryTdsPopup(contentLessEntryTds);
        }
        else {
            this.resetTDSBulkFields();
        }
    };
    // TDS Process starts form here
    PaymentFollowupComponent.prototype.openLessEntryTdsPopup = function (contentLessEntryTds) {
        var _this = this;
        this.selectedConsignee = $("#consigneeName").val();
        if (this.selectedConsignee == '' || this.selectedConsignee == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Mandatory Field",
                text: "Please select Consignee Name to get TDS Bulk details!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            //Pending
            $("#checkboxTDS").prop("checked", false);
        }
        else {
            this.isDuplicateBulkLess = false;
            for (var i = 0; i < this.lessEntriesDataTableDataList.length; i++) {
                var consigneeId = this.lessEntriesDataTableDataList[i].consigneeId;
                var lessDesc = this.lessEntriesDataTableDataList[i].chqNumber;
                if ((this.selectedConsigneeId == consigneeId)
                    && (lessDesc == 'TDS')) {
                    this.isDuplicateBulkLess = true;
                    break;
                }
            }
            if (this.isDuplicateBulkLess) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Not Allowed",
                    text: "TDS Less entry is already done for this Consignee Memo, please verify again!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                this.resetTDSBulkFields();
            }
            else {
                this.tdsBulkEntryflow();
                this.modalService.open(contentLessEntryTds, { centered: true }).result.then(function (resultContent) {
                    _this.closeResultContentLessEntryTds = "Closed with: " + resultContent;
                }, function (reason) {
                    _this.closeResultContentLessEntryTds = "Dismissed " + _this.getDismissReason(reason);
                });
            }
        }
    };
    PaymentFollowupComponent.prototype.resetTDSBulkFields = function () {
        $("#totalMemoForTDS").val('');
        $("#memoAmountForTDS").val('');
        $("#lessForTDS").val('');
        $("#tdsLessTwoPer").val('');
        //Pending
        $("#checkboxTDS").prop("checked", false);
        //        need to clear the cashMemoDtoForTDSRet is  Pending
        this.cashMemoDtoForTDSRet = [];
    };
    PaymentFollowupComponent.prototype.tdsBulkEntryflow = function () {
        // filter memos from the assigned job details by this
        // selectedConsigneeId
        this.tdsBulkTotMemoAmt = 0.0;
        this.listOfMemoNumber = [];
        for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
            var consigneeId = this.pfAssignedJobDetailsDataList[i].consigneeId;
            if (consigneeId == this.selectedConsigneeId) {
                this.tdsBulkTotMemoAmt = +this.tdsBulkTotMemoAmt + +this.pfAssignedJobDetailsDataList[i].amount;
                this.listOfMemoNumber.push(this.pfAssignedJobDetailsDataList[i].memoNumber);
            }
        }
        //   console.log( this.tdsBulkTotMemoAmt, this.listOfMemoNumber );
        if (this.listOfMemoNumber.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "TDS Bulk Entry",
                text: "No memos to calculate TDS bulk details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.resetTDSBulkFields();
        }
        else {
            //                        $( "#totalMemoForTDS" ).val( this.listOfMemoNumber.length );
            //                        $( "#memoAmountForTDS" ).val( this.tdsBulkTotMemoAmt );
            this.cashMemoDtoForTDS = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
            this.cashMemoDtoForTDS.list = this.listOfMemoNumber;
            //  console.log( 'Dto' );
            // console.log( this.cashMemoDtoForTDS );
            this.getTotLessAmt(this.cashMemoDtoForTDS);
        }
    };
    PaymentFollowupComponent.prototype.tdsInsert = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Confirm Apply",
            text: "Sure you want to apply the TDS bulk entries?",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (insert) {
            if (insert) {
                _this.tdsBulkEntryInsert();
                _this.resetTDSBulkFields();
            }
        });
    };
    PaymentFollowupComponent.prototype.uncheck = function () {
        this.resetTDSBulkFields();
    };
    PaymentFollowupComponent.prototype.tdsBulkEntryInsert = function () {
        for (var i = 0; i < this.cashMemoDtoForTDSRet.length; i++) {
            //            console.log(this.cashMemoDtoForTDSRet);
            var balAfterDedLess = +this.cashMemoDtoForTDSRet[i].grandTotal - +this.cashMemoDtoForTDSRet[i].less;
            var calTds = Math.round((balAfterDedLess * this.tdsLessMulti) / 100);
            //            console.log(balAfterDedLess);
            //            console.log(calTds);
            this.newAttributeForTDS.chqType = this.cashMemoDtoForTDSRet[i].memoNumber;
            this.newAttributeForTDS.chqNumber = "TDS";
            this.newAttributeForTDS.chqAmount = calTds;
            this.newAttributeForTDS.cashMemoAmt = this.cashMemoDtoForTDSRet[i].grandTotal;
            this.newAttributeForTDS.balance = 0.0;
            this.newAttributeForTDS.mainStation = "NA";
            this.newAttributeForTDS.consigneeId = this.cashMemoDtoForTDSRet[i].consigneeId;
            this.newAttributeForTDS.consigneeName = this.cashMemoDtoForTDSRet[i].consigneeName;
            if (this.lessEntriesDataTableDataList == null) {
                this.lessEntriesDataTableDataList = [];
            }
            if (this.lessEntriesDataTableDataList.length == 0) {
                this.lessEntriesDataTableDataList.push(this.newAttributeForTDS);
            }
            else {
                this.lessEntriesDataTableDataList.push(this.newAttributeForTDS);
            }
            this.countOfLessLR = +this.countOfLessLR + 1;
            this.sumOfLessAmt = +this.sumOfLessAmt + +this.newAttributeForTDS.chqAmount;
            this.newAttributeForTDS = {};
            this.cashMemoDtoForTDS = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        }
    };
    PaymentFollowupComponent.prototype.toggleEditableForStatuBack = function (event, contentLessEntryStatusBack) {
        if (event.target.checked) {
            this.openLessEntryStatusBackPopup(contentLessEntryStatusBack);
        }
        else {
        }
    };
    PaymentFollowupComponent.prototype.toggleEditableForStatuBackPayment = function (event, contentLessEntryStatusBack) {
        if (event.target.checked) {
            this.openLessEntryStatusBackPopup(contentLessEntryStatusBack);
        }
        else {
        }
    };
    PaymentFollowupComponent.prototype.openLessEntryStatusBackPopup = function (contentLessEntryStatusBack) {
        var _this = this;
        this.modalService.open(contentLessEntryStatusBack, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContentLessEntryStatusBack = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContentLessEntryStatusBack = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PaymentFollowupComponent.prototype.validateStatusBackBtn = function () {
        this.verifyMemoExistInLessOrPaymentBeforeStatusBackOnComplete();
    };
    PaymentFollowupComponent.prototype.verifyMemoExistInLessOrPaymentBeforeStatusBackOnComplete = function () {
        var _this = this;
        this.statusBackMemoNumber = $("#cashmemoNumberForStatusBack").val();
        //   console.log( this.statusBackMemoNumber );
        var checkAssignedTable = this.pfAssignedJobDetailsDataList.find(function (pfAssignedJobDetailsData) { return pfAssignedJobDetailsData.memoNumber === _this.statusBackMemoNumber; });
        //    console.log( checkAssignedTable );
        this.letValueofSearchInAssingedTableForStatusBack = [];
        if (checkAssignedTable == undefined) {
            this.letValueofSearchInAssingedTableForStatusBack = [];
        }
        else {
            this.letValueofSearchInAssingedTableForStatusBack = checkAssignedTable;
        }
        if (this.letValueofSearchInAssingedTableForStatusBack.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "No Record",
                text: "No Memo found, please verify memo number",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.isExist = false;
            /////Pending
            for (var i = 0; i < this.userDataDtosLessTemp.length; i++) {
                if (this.statusBackMemoNumber == this.userDataDtosLessTemp[i].memoNumber) {
                    this.isExist = true;
                    break;
                }
            }
            for (var i = 0; i < this.userDataDtosPaymentChqTemp.length; i++) {
                if (this.statusBackMemoNumber == this.userDataDtosPaymentChqTemp[i].memoNumber) {
                    this.isExist = true;
                    break;
                }
            }
            for (var i = 0; i < this.userDataDtosPaymentNeftTemp.length; i++) {
                if (this.statusBackMemoNumber == this.userDataDtosPaymentNeftTemp[i].memoNumber) {
                    this.isExist = true;
                    break;
                }
            }
            ////
            if (this.isExist) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Not Allowed",
                    text: "Less/Payment entry for the Memo number " + this.statusBackMemoNumber + " is already entered, please verify and edit the entries?",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Confirm Action",
                    text: "Sure you want to take status back?",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (statusBack) {
                    if (statusBack) {
                        _this.statusBackOnComplete();
                    }
                });
            }
        }
    };
    PaymentFollowupComponent.prototype.statusBackOnComplete = function () {
        this.statusBackMemoNumber = $("#cashmemoNumberForStatusBack").val();
        this.selectedCollectionMan = this.enteredCollectionMan;
        this.userDataDtoForStatusBack = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.listOfMemoNumber = [];
        this.listOfMemoNumber.push(this.statusBackMemoNumber);
        this.userDataDtoForStatusBack.list = this.listOfMemoNumber;
        this.userDataDtoForStatusBack.mode = "statusBack";
        this.userDataDtoForStatusBack.collectioMan = this.selectedCollectionMan;
        this.userDataDtoForStatusBack.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDtoForStatusBack.city = this.userDataDtoReturnSession.mainStation;
        this.userDataDtoForStatusBack.updatedBy = this.userDataDtoReturnSession.userId;
        this.userDataDtoForStatusBack.collectionFlow = this.userDataDtoReturnSession.collectionFlow;
        this.updateStatusBack(this.userDataDtoForStatusBack);
    };
    PaymentFollowupComponent.prototype.uncheckStatusBack = function () {
        $("#cashmemoNumberForStatusBack").val('');
        $("#statusBack").prop("checked", false);
        $("#statusBackPayment").prop("checked", false);
        this.userDataDtoForStatusBack = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.listOfMemoNumber = [];
        this.userDataDtoForStatusBackRet = '';
    };
    PaymentFollowupComponent.prototype.calculateAllTotalAndBalance = function () {
        this.calculateTotalLessWithDifferentTypes();
        this.calculateTotalChequePayment();
        this.calculateTotalNeftPayment();
        this.calculateTotalCashPayment();
        var totalAmt = 0.0, totalLess = 0.0, totalChq = 0.0, totalNeft = 0.0, totalCash = 0.0, balanceAmt = 0.0;
        totalAmt = this.amountToBeCollected == null ? 0.0 : this.amountToBeCollected;
        totalLess = this.lblTotLessSummaryValue == null ? 0.0 : this.lblTotLessSummaryValue == '' ? 0.0 : this.lblTotLessSummaryValue;
        totalChq = this.lblTotChqAmtSummaryValue == null ? 0.0 : this.lblTotChqAmtSummaryValue == '' ? 0.0 : this.lblTotChqAmtSummaryValue;
        totalNeft = this.lblTotNeftAmtSummaryValue == null ? 0.0 : this.lblTotNeftAmtSummaryValue == '' ? 0.0 : this.lblTotNeftAmtSummaryValue;
        totalCash = this.lblTotCashAmtSummaryValue == null ? 0.0 : this.lblTotCashAmtSummaryValue == '' ? 0.0 : this.lblTotCashAmtSummaryValue;
        balanceAmt = +totalAmt - +(+totalLess + +totalChq + +totalNeft + +totalCash);
        //     console.log( totalAmt, totalLess, totalChq, totalNeft, totalCash, balanceAmt );
        this.balanceAmountFinal = balanceAmt;
    };
    PaymentFollowupComponent.prototype.calculateTotalLessWithDifferentTypes = function () {
        var amtLess = 0.0, amtLessDlh = 0.0, amtLessMum = 0.0, amtLessGuj = 0.0, amtLessPjb = 0.0, amtLessTDS = 0.0, amtLessClaim = 0.0;
        //   console.log( this.userDataDtosLessTemp );
        for (var i = 0; i < this.userDataDtosLessTemp.length; i++) {
            if (this.userDataDtosLessTemp[i].paymentType == 'TDS') {
                amtLessTDS = +amtLessTDS + +this.userDataDtosLessTemp[i].paymentAmt;
            }
            else if (this.userDataDtosLessTemp[i].paymentType == 'CLAIM') {
                amtLessClaim = +amtLessClaim + +this.userDataDtosLessTemp[i].paymentAmt;
            }
            else {
                if (this.userDataDtosLessTemp[i].mainStation != null
                    && this.userDataDtosLessTemp[i].mainStation == 'DELHI') {
                    amtLessDlh = +amtLessDlh + +this.userDataDtosLessTemp[i].paymentAmt;
                }
                else if (this.userDataDtosLessTemp[i].mainStation != null
                    && this.userDataDtosLessTemp[i].mainStation == 'MUMBAI') {
                    amtLessMum = +amtLessMum + +this.userDataDtosLessTemp[i].paymentAmt;
                }
                else if (this.userDataDtosLessTemp[i].mainStation != null
                    && this.userDataDtosLessTemp[i].mainStation == 'GUJARAT') {
                    amtLessGuj = +amtLessGuj + +this.userDataDtosLessTemp[i].paymentAmt;
                }
                else if (this.userDataDtosLessTemp[i].mainStation != null
                    && this.userDataDtosLessTemp[i].mainStation == 'PUNJAB') {
                    amtLessPjb = +amtLessPjb + +this.userDataDtosLessTemp[i].paymentAmt;
                }
            }
            amtLess = +amtLess + +this.userDataDtosLessTemp[i].paymentAmt;
        }
        this.lblDelhiLessValue = amtLessDlh;
        this.lblMumLessValue = amtLessMum;
        this.lblGujLessValue = amtLessGuj;
        this.lblPjbLessValue = amtLessPjb;
        this.lblTDSLessValue = amtLessTDS;
        this.lblClaimLessValue = amtLessClaim;
        this.lblTotLessSummaryValue = amtLess;
    };
    PaymentFollowupComponent.prototype.calculateTotalChequePayment = function () {
        var amtRecChq = 0.0;
        for (var i = 0; i < this.userDataDtosPaymentChqTemp.length; i++) {
            amtRecChq = +amtRecChq + +this.userDataDtosPaymentChqTemp[i].paymentAmt;
        }
        this.lblTotChqAmtSummaryValue = amtRecChq;
    };
    PaymentFollowupComponent.prototype.calculateTotalNeftPayment = function () {
        var amtRecNeft = 0.0;
        for (var i = 0; i < this.userDataDtosPaymentNeftTemp.length; i++) {
            amtRecNeft = +amtRecNeft + +this.userDataDtosPaymentNeftTemp[i].paymentAmt;
        }
        this.lblTotNeftAmtSummaryValue = amtRecNeft;
    };
    PaymentFollowupComponent.prototype.calculateTotalCashPayment = function () {
        var totAmtInCash = 0.0;
        this.nf2000 = $("#twoThousandRupee").val();
        this.nf500 = $("#fiveHundredRupee").val();
        this.nf200 = $("#twoHundredRupee").val();
        this.nf100 = $("#hundredRupee").val();
        this.nf50 = $("#fiftyRupee").val();
        this.nf20 = $("#twentyRupee").val();
        this.nf10 = $("#tenRupee").val();
        this.nf5 = $("#fiveRupee").val();
        this.nf2 = $("#twoRupee").val();
        this.nf1 = $("#oneRupee").val();
        //    console.log( this.nf2000 );
        totAmtInCash = +(this.nf2000 == null ? 0.0 : this.nf2000 == '' ? 0.0 : this.nf2000)
            + +(this.nf500 == null ? 0.0 : this.nf500 == '' ? 0.0 : this.nf500)
            + +(this.nf200 == null ? 0.0 : this.nf200 == '' ? 0.0 : this.nf200)
            + +(this.nf100 == null ? 0.0 : this.nf100 == '' ? 0.0 : this.nf100)
            + +(this.nf50 == null ? 0.0 : this.nf50 == '' ? 0.0 : this.nf50)
            + +(this.nf20 == null ? 0.0 : this.nf20 == '' ? 0.0 : this.nf20)
            + +(this.nf10 == null ? 0.0 : this.nf10 == '' ? 0.0 : this.nf10)
            + +(this.nf5 == null ? 0.0 : this.nf5 == '' ? 0.0 : this.nf5)
            + +(this.nf2 == null ? 0.0 : this.nf2 == '' ? 0.0 : this.nf2)
            + +(this.nf1 == null ? 0.0 : this.nf1 == '' ? 0.0 : this.nf1);
        //   console.log( totAmtInCash );
        if (this.showCashLblAmt) {
            this.lblTotCashAmtSummaryValue = this.getCashValDto.grandTotal;
        }
        else {
            this.lblTotCashAmtSummaryValue = totAmtInCash;
            //    console.log( this.lblTotCashAmtSummaryValue );
        }
    };
    // modified the logic, all the entries will be store in temp
    // dto(userDataDtosLessTemp) and will only go to DB when click on finish,
    // hence disabled the below service
    // @Dated : 10/09/2018
    PaymentFollowupComponent.prototype.updateLessDetails = function () {
        this.getLessLRDetails();
        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Memo Less",
            text: "Less details updated temporarily, please note that it will only be save permanently when click on Finish",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        });
        //Pending
        this.clearLessFields();
    };
    PaymentFollowupComponent.prototype.clearLessFields = function () {
        this.isEdit = false;
        this.viewNewBankName = false;
        $("#chequeNumber").val('');
        $("#consigneeBankName").val('');
        $("#newBankName").val('');
        this.selectedConsigneeId = 0;
        this.controlConsigneeBankName.reset();
        this.controlConsigneeName.reset();
        $("#totalAmountForPayment").val('');
        $("#chequeDate").val('');
        $("#referenceNumber").val('');
        $("#paymentLessAmount").val('');
        $("#memoNumberForManualLessPayment").val('');
        this.payMode = null;
        this.payType = null;
        $("#entryLessAmount").val('');
        $("#lessType").val('');
        $("#memoNumberForManualLess").val('');
        this.editTableId = null;
        this.editTableIdForPayment = null;
        this.controlEntryLessType.reset();
        $("#consigneeName").val('');
        $("#totalLess").val('');
        this.controlConsigneeNamePayment.reset();
        this.paymentAmountEntriesDataList = [];
        $("#consigneeNameForPayment").val('');
        this.selectedConsigneeId = 0;
        this.modelConsigneeNameForPayment = '';
        this.countOfPaymentMemo = +this.countOfPaymentMemo + 1;
        this.sumOfMemoAmtPayment = +this.sumOfMemoAmtPayment + +this.newAttributeForPayment.cashMemoAmt;
        this.sumOfLessAmtPayment = +this.sumOfLessAmtPayment + +this.newAttributeForPayment.chqAmount;
        this.sumOfBalanceAmtPayment = +this.sumOfBalanceAmtPayment + +this.newAttributeForPayment.balance;
        this.newAttributeForPayment = {};
        //Pending still the less page values need to cleared 
        //        listStoreCompleteLrs.removeAll();
        //        gridCompleteLrs.reconfigure(listStoreCompleteLrs, cmCompleteLrs);
        //        listStoreCompleteLessLrs.removeAll();
        //        gridCompleteLessLrs.reconfigure(listStoreCompleteLessLrs,
        //                cmCompleteLessLrs);
    };
    PaymentFollowupComponent.prototype.getLessLRDetails = function () {
        //Pending
        if (this.isLessClicked) {
            this.userDataDtosLessTemp = [];
            this.isLessClicked = false;
        }
        this.userDataDtoForLess = [];
        //        this.userDataDtoListForLess = [];
        for (var i = 0; i < this.lessEntriesDataTableDataList.length; i++) {
            var maintenance = this.lessEntriesDataTableDataList[i];
            //      console.log( maintenance );
            this.userDataDtoForLessDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
            this.userDataDtoForLessDetails.memoNumber = maintenance.chqType;
            this.userDataDtoForLessDetails.paymentType = maintenance.chqNumber;
            this.userDataDtoForLessDetails.paymentAmt = maintenance.chqAmount;
            this.userDataDtoForLessDetails.updatedBy = this.userDataDtoReturnSession.userId;
            this.userDataDtoForLessDetails.bankId = 0;
            this.userDataDtoForLessDetails.office = this.userDataDtoReturnSession.mainStation;
            this.userDataDtoForLessDetails.amount = maintenance.cashMemoAmt;
            this.userDataDtoForLessDetails.consigneeId = maintenance.consigneeId;
            this.userDataDtoForLessDetails.partyName = maintenance.consigneeName;
            this.userDataDtoForLessDetails.mainStation = maintenance.mainStation;
            this.userDataDtoForLess.push(this.userDataDtoForLessDetails);
            //Pending need to check this below new dto list no need of this object userDataDtoListForLess may delete this 
            //            this.userDataDtoListForLess.push( this.userDataDtoForLessDetails );
            // add the entry details in temp file
            this.userDataDtosLessTemp.push(this.userDataDtoForLessDetails);
        }
        //    console.log( this.userDataDtoForLess );
        //  console.log( this.userDataDtosLessTemp );
        $("#consigneeNameForPayment").val('');
        this.selectedConsigneeId = 0;
        this.modelConsigneeNameForPayment = '';
        this.countOfPaymentMemo = +this.countOfPaymentMemo + 1;
        this.sumOfMemoAmtPayment = +this.sumOfMemoAmtPayment + +this.newAttributeForPayment.cashMemoAmt;
        this.sumOfLessAmtPayment = +this.sumOfLessAmtPayment + +this.newAttributeForPayment.chqAmount;
        this.sumOfBalanceAmtPayment = +this.sumOfBalanceAmtPayment + +this.newAttributeForPayment.balance;
        this.newAttributeForPayment = {};
        return this.userDataDtoForLess;
    };
    PaymentFollowupComponent.prototype.validateTotalLessEnteredWithActulLessOnNext = function () {
        this.enteredTotalLess = $("#totalLess").val();
        var totalAmt = this.enteredTotalLess == null ? 0.0 : this.enteredTotalLess == '' ? 0.0 : this.enteredTotalLess;
        var enteredAmt = 0.0;
        for (var i = 0; i < this.lessEntriesDataTableDataList.length; i++) {
            enteredAmt = +enteredAmt + +this.lessEntriesDataTableDataList[i].chqAmount;
        }
        if (enteredAmt < totalAmt) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Not Allowed",
                text: "Total entered less entries amount are not tallied with the Total Less, please verify!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return true;
        }
        else {
            return false;
        }
    };
    PaymentFollowupComponent.prototype.validateNextBtn = function (e) {
        var _this = this;
        this.selectedPaymentMode = $("#paymentMode").val();
        if (this.nextEntryType == 'Less Entry') {
            //            if ( this.lessEntriesDataTableDataList.length == 0 ) {
            //                swal( {
            //                    title: "Not Allowed",
            //                    text: "No Less entries found to proceed",
            //                    icon: "warning",
            //                    closeOnClickOutside: false,
            //                    closeOnEsc: false,
            //                } );
            //            } else
            if (this.validateTotalLessEnteredWithActulLessOnNext()) {
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Confirm Changes",
                    text: "Sure you want to add the Less details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (next) {
                    if (next) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "OK",
                            text: "Please Click Next button again to continue",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.viewNextBtn = true;
                        _this.showLessLbl = false;
                    }
                });
            }
        }
        else if (this.nextEntryType == 'Payment Entry') {
            if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cash') {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Confirm Changes",
                    text: "Sure you want to add the Cash Payment details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (cash) {
                    if (cash) {
                        _this.updateCashAmt();
                        _this.calculateTotalCashPayment();
                        // calculate total
                        _this.calculateAllTotalAndBalance();
                    }
                });
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque') {
                if (this.paymentAmountEntriesDataList.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Not Allowed",
                        text: "No Cheque/PDC Payment entries found to proceed",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Confirm Changes",
                        text: "Sure you want to add the Cheque/PDC Payment details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        buttons: ["No", "Yes"],
                    }).then(function (check) {
                        if (check) {
                            _this.updateChqDetails('Cheque/PDC');
                            _this.calculateAllTotalAndBalance();
                            //Pending
                            _this.updateConsigneeBalanceDetails();
                        }
                    });
                }
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft') {
                if (this.paymentAmountEntriesDataList.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Not Allowed",
                        text: "No NEFT/IMPS Payment entries found to proceed",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Confirm Changes",
                        text: "Sure you want to add the NEFT/IMPS Payment details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        buttons: ["No", "Yes"],
                    }).then(function (check) {
                        if (check) {
                            _this.updateNeftDetails('NEFT/IMPS');
                            _this.calculateAllTotalAndBalance();
                            //Pending
                            _this.updateConsigneeBalanceDetails();
                        }
                    });
                }
            }
        }
    };
    PaymentFollowupComponent.prototype.getMethodForgetPartyBankDetailsService = function () {
        this.userDataDtoForBankDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForBankDetails.office = this.userDataDtoReturnSession.mainStation;
        this.userDataDtoForBankDetails.companyId = this.userDataDtoReturnSession.companyId;
    };
    PaymentFollowupComponent.prototype.getPartyBankDetailsService = function () {
        var _this = this;
        this.getMethodForgetPartyBankDetailsService();
        this.masterReadService.getPartyBankDetailsService(this.userDataDtoForBankDetails).subscribe(function (response) {
            _this.controlConsigneeBankName.reset();
            _this.consigneeBankNameArray = [];
            _this.consigneeBankNameArray = response;
            _this.consigneeBankNameArrayRet = _this.consigneeBankNameArray;
            _this.userDataDtoForBankDetailsRet.bankName = "ADD NEW BANK";
            _this.consigneeBankNameArrayRet.push(_this.userDataDtoForBankDetailsRet);
            _this.consigneeBankNameTA = [];
            for (var i = 0; i < _this.consigneeBankNameArrayRet.length; i++) {
                _this.consigneeBankNameTA.push(_this.consigneeBankNameArrayRet[i].bankName);
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Server Error",
            text: "Problem occur while getting Party Bank Details",
            icon: "error",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    //    partyBankMethod( e ) {
    //        if ( e.keyCode == 13 ) {
    //            this.selectedBankName = $( "#consigneeBankName" ).val();
    //            if ( this.selectedBankName == 'ADD NEW BANK' ) {
    //                this.viewNewBankName = true;
    //                $( "#newBankName" ).focus();
    //            } else {
    //                this.viewNewBankName = false;
    //                this.validateDuplicateChqEntry();
    //                //            this.selectedPaymentMode = $( "#paymentMode" ).val();
    //                //            this.enteredCheckNumber = $( "#chequeNumber" ).val();
    //                //            this.selectedBankName = option.bankName;
    //                //            if ( this.isDuplicateChq == true ) {
    //                //                swal( {
    //                //                    title: "Not Allowed",
    //                //                    text: "Cheque Number " + this.enteredCheckNumber + " with Bank Name " + this.selectedBankName + " already exist, please verify!",
    //                //                    icon: "warning",
    //                //                    closeOnClickOutside: false,
    //                //                    closeOnEsc: false,
    //                //                } );
    //                //                $( "#chequeNumber" ).val( '' );
    //                //            }else{
    //                //                if ( this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque' ) {
    //                //                    window.setTimeout( function() {
    //                //                        $( "#paymentLessStn" ).focus();
    //                //                    }, 100 );
    //                //                } else if ( this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft' ) {
    //                //                    window.setTimeout( function() {
    //                //                        $( "#referenceNumber" ).focus();
    //                //                    }, 100 );
    //                //                }
    //                //            }
    //
    //
    //            }
    //        }
    //    }
    PaymentFollowupComponent.prototype.partyBankMethod = function (e) {
        this.modelPartyBankName = e.item;
        this.selectedBankName = this.modelPartyBankName;
        if (this.selectedBankName == 'ADD NEW BANK') {
            this.viewNewBankName = true;
            $("#newBankName").focus();
        }
        else {
            this.viewNewBankName = false;
            this.validateDuplicateChqEntry();
        }
    };
    PaymentFollowupComponent.prototype.fieldFocusNewBank = function (e) {
        this.selectedPaymentMode = $("#paymentMode").val();
        if (e.keyCode == 13) {
            if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque') {
                window.setTimeout(function () {
                    $("#paymentLessStn").focus();
                }, 100);
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft') {
                window.setTimeout(function () {
                    $("#referenceNumber").focus();
                }, 100);
            }
        }
    };
    //    focusChqDate(e) {
    //       
    //        if ( e.keyCode == 13 ) {
    //            window.setTimeout( function() {
    ////                $( "#consigneeBankName" ).focus();
    //            }, 100 );
    //        }
    //    }
    PaymentFollowupComponent.prototype.focusChqDate = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                $("#consigneeBankName").focus();
            }, 100);
        }
    };
    PaymentFollowupComponent.prototype.focusChqDateEnter = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                $("#consigneeBankName").focus();
            }, 100);
        }
    };
    PaymentFollowupComponent.prototype.rowSelectedLessType = function () {
        window.setTimeout(function () {
            $("#entryLessAmount").focus();
        }, 100);
    };
    PaymentFollowupComponent.prototype.fieldFocusChqNo = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                $("#chequeDate").focus();
            }, 100);
        }
    };
    PaymentFollowupComponent.prototype.fieldFocusRef = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                //                $( "#paymentLessStn" ).focus();
                $("#memoNumberForManualLessPayment").focus();
            }, 100);
        }
    };
    PaymentFollowupComponent.prototype.validateCashWithAmount = function () {
        var totAmt = 0.0;
        this.nf2000 = $("#twoThousandRupee").val();
        this.nf500 = $("#fiveHundredRupee").val();
        this.nf200 = $("#twoHundredRupee").val();
        this.nf100 = $("#hundredRupee").val();
        this.nf50 = $("#fiftyRupee").val();
        this.nf20 = $("#twentyRupee").val();
        this.nf10 = $("#tenRupee").val();
        this.nf5 = $("#fiveRupee").val();
        this.nf2 = $("#twoRupee").val();
        this.nf1 = $("#oneRupee").val();
        //   console.log( this.nf2000 );
        totAmt = +(this.nf2000 == null ? 0.0 : this.nf2000 == '' ? 0.0 : this.nf2000)
            + +(this.nf500 == null ? 0.0 : this.nf500 == '' ? 0.0 : this.nf500)
            + +(this.nf200 == null ? 0.0 : this.nf200 == '' ? 0.0 : this.nf200)
            + +(this.nf100 == null ? 0.0 : this.nf100 == '' ? 0.0 : this.nf100)
            + +(this.nf50 == null ? 0.0 : this.nf50 == '' ? 0.0 : this.nf50)
            + +(this.nf20 == null ? 0.0 : this.nf20 == '' ? 0.0 : this.nf20)
            + +(this.nf10 == null ? 0.0 : this.nf10 == '' ? 0.0 : this.nf10)
            + +(this.nf5 == null ? 0.0 : this.nf5 == '' ? 0.0 : this.nf5)
            + +(this.nf2 == null ? 0.0 : this.nf2 == '' ? 0.0 : this.nf2)
            + +(this.nf1 == null ? 0.0 : this.nf1 == '' ? 0.0 : this.nf1);
        //    console.log( totAmt );
        this.enteredTotalLess = $("#totalAmountForPayment").val();
        this.enteredTotalLess = this.enteredTotalLess == null ? 0.0 : this.enteredTotalLess == '' ? 0.0 : this.enteredTotalLess;
        //    console.log( totAmt, this.enteredTotalLess );
        if (totAmt > this.enteredTotalLess) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Not Allowed",
                text: "Entered Cash amount exceed from the Total Amount, please verify!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return true;
        }
        else {
            return false;
        }
    };
    PaymentFollowupComponent.prototype.calculateDenominationTotalAmt = function () {
        var totAmt = 0.0;
        this.nf2000 = $("#twoThousandRupee").val();
        this.nf500 = $("#fiveHundredRupee").val();
        this.nf200 = $("#twoHundredRupee").val();
        this.nf100 = $("#hundredRupee").val();
        this.nf50 = $("#fiftyRupee").val();
        this.nf20 = $("#twentyRupee").val();
        this.nf10 = $("#tenRupee").val();
        this.nf5 = $("#fiveRupee").val();
        this.nf2 = $("#twoRupee").val();
        this.nf1 = $("#oneRupee").val();
        //   console.log( this.nf2000 );
        totAmt = +(this.nf2000 == null ? 0.0 : this.nf2000 == '' ? 0.0 : this.nf2000)
            + +(this.nf500 == null ? 0.0 : this.nf500 == '' ? 0.0 : this.nf500)
            + +(this.nf200 == null ? 0.0 : this.nf200 == '' ? 0.0 : this.nf200)
            + +(this.nf100 == null ? 0.0 : this.nf100 == '' ? 0.0 : this.nf100)
            + +(this.nf50 == null ? 0.0 : this.nf50 == '' ? 0.0 : this.nf50)
            + +(this.nf20 == null ? 0.0 : this.nf20 == '' ? 0.0 : this.nf20)
            + +(this.nf10 == null ? 0.0 : this.nf10 == '' ? 0.0 : this.nf10)
            + +(this.nf5 == null ? 0.0 : this.nf5 == '' ? 0.0 : this.nf5)
            + +(this.nf2 == null ? 0.0 : this.nf2 == '' ? 0.0 : this.nf2)
            + +(this.nf1 == null ? 0.0 : this.nf1 == '' ? 0.0 : this.nf1);
        //    console.log( totAmt );
        return totAmt;
    };
    PaymentFollowupComponent.prototype.twoThousandRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf2000Count = $("#twoThousandRupeeCount").val();
            this.nf2000Count = this.nf2000Count == null ? 0 : this.nf2000Count == '' ? 0 : this.nf2000Count;
            $("#twoThousandRupee").val(this.nf2000Count * 2000);
            if (this.validateCashWithAmount()) {
                $("#twoThousandRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#fiveHundredRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.twoThousandRupeeBlur = function (e) {
        this.nf2000Count = $("#twoThousandRupeeCount").val();
        this.nf2000Count = this.nf2000Count == null ? 0 : this.nf2000Count == '' ? 0 : this.nf2000Count;
        $("#twoThousandRupee").val(this.nf2000Count * 2000);
        if (this.validateCashWithAmount()) {
            $("#twoThousandRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
    };
    PaymentFollowupComponent.prototype.fiveHundredRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf500Count = $("#fiveHundredRupeeCount").val();
            this.nf500Count = this.nf500Count == null ? 0 : this.nf500Count == '' ? 0 : this.nf500Count;
            $("#fiveHundredRupee").val(this.nf500Count * 500);
            if (this.validateCashWithAmount()) {
                $("#fiveHundredRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#twoHundredRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.fiveHundredRupeeBlur = function (e) {
        this.nf500Count = $("#fiveHundredRupeeCount").val();
        this.nf500Count = this.nf500Count == null ? 0 : this.nf500Count == '' ? 0.0 : this.nf500Count;
        $("#fiveHundredRupee").val(this.nf500Count * 500);
        if (this.validateCashWithAmount()) {
            $("#fiveHundredRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
    };
    PaymentFollowupComponent.prototype.twoHundredRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf200Count = $("#twoHundredRupeeCount").val();
            this.nf200Count = this.nf200Count == null ? 0 : this.nf200Count == '' ? 0 : this.nf200Count;
            $("#twoHundredRupee").val(this.nf200Count * 200);
            if (this.validateCashWithAmount()) {
                $("#twoHundredRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#hundredRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.twoHundredRupeeBlur = function (e) {
        this.nf200Count = $("#twoHundredRupeeCount").val();
        this.nf200Count = this.nf200Count == null ? 0 : this.nf200Count == '' ? 0 : this.nf200Count;
        $("#twoHundredRupee").val(this.nf200Count * 200);
        if (this.validateCashWithAmount()) {
            $("#twoHundredRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
    };
    PaymentFollowupComponent.prototype.hundredRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf100Count = $("#hundredRupeeCount").val();
            this.nf100Count = this.nf100Count == null ? 0 : this.nf100Count == '' ? 0 : this.nf100Count;
            $("#hundredRupee").val(this.nf100Count * 100);
            if (this.validateCashWithAmount()) {
                $("#hundredRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#fiftyRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.hundredRupeeBlur = function (e) {
        this.nf100Count = $("#hundredRupeeCount").val();
        this.nf100Count = this.nf100Count == null ? 0 : this.nf100Count == '' ? 0 : this.nf100Count;
        $("#hundredRupee").val(this.nf100Count * 100);
        if (this.validateCashWithAmount()) {
            $("#hundredRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
    };
    PaymentFollowupComponent.prototype.fiftyRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf50Count = $("#fiftyRupeeCount").val();
            this.nf50Count = this.nf50Count == null ? 0 : this.nf50Count == '' ? 0 : this.nf50Count;
            $("#fiftyRupee").val(this.nf50Count * 50);
            if (this.validateCashWithAmount()) {
                $("#fiftyRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#twentyRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.fiftyRupeeBlur = function (e) {
        this.nf50Count = $("#fiftyRupeeCount").val();
        this.nf50Count = this.nf50Count == null ? 0 : this.nf50Count == '' ? 0 : this.nf50Count;
        $("#fiftyRupee").val(this.nf50Count * 50);
        if (this.validateCashWithAmount()) {
            $("#fiftyRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
            window.setTimeout(function () {
                $("#twentyRupeeCount").focus();
            }, 100);
        }
    };
    PaymentFollowupComponent.prototype.twentyRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf20Count = $("#twentyRupeeCount").val();
            this.nf20Count = this.nf20Count == null ? 0 : this.nf20Count == '' ? 0 : this.nf20Count;
            $("#twentyRupee").val(this.nf20Count * 20);
            if (this.validateCashWithAmount()) {
                $("#twentyRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#tenRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.twentyRupeeBlur = function (e) {
        this.nf20Count = $("#twentyRupeeCount").val();
        this.nf20Count = this.nf20Count == null ? 0 : this.nf20Count == '' ? 0 : this.nf20Count;
        $("#twentyRupee").val(this.nf20Count * 20);
        if (this.validateCashWithAmount()) {
            $("#twentyRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
    };
    PaymentFollowupComponent.prototype.tenRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf10Count = $("#tenRupeeCount").val();
            this.nf10Count = this.nf10Count == null ? 0 : this.nf10Count == '' ? 0 : this.nf10Count;
            $("#tenRupee").val(this.nf10Count * 10);
            if (this.validateCashWithAmount()) {
                $("#tenRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#fiveRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.tenRupeeBlur = function (e) {
        this.nf10Count = $("#tenRupeeCount").val();
        this.nf10Count = this.nf10Count == null ? 0 : this.nf10Count == '' ? 0 : this.nf10Count;
        $("#tenRupee").val(this.nf10Count * 10);
        if (this.validateCashWithAmount()) {
            $("#tenRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
            window.setTimeout(function () {
                $("#fiveRupeeCount").focus();
            }, 100);
        }
    };
    PaymentFollowupComponent.prototype.fiveRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf5Count = $("#fiveRupeeCount").val();
            this.nf5Count = this.nf5Count == null ? 0 : this.nf5Count == '' ? 0 : this.nf5Count;
            $("#fiveRupee").val(this.nf5Count * 5);
            if (this.validateCashWithAmount()) {
                $("#fiveRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#twoRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.fiveRupeeBlur = function (e) {
        this.nf5Count = $("#fiveRupeeCount").val();
        this.nf5Count = this.nf5Count == null ? 0 : this.nf5Count == '' ? 0 : this.nf5Count;
        $("#fiveRupee").val(this.nf5Count * 5);
        if (this.validateCashWithAmount()) {
            $("#fiveRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
    };
    PaymentFollowupComponent.prototype.twoRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf2Count = $("#twoRupeeCount").val();
            this.nf2Count = this.nf2Count == null ? 0 : this.nf2Count == '' ? 0 : this.nf2Count;
            $("#twoRupee").val(this.nf2Count * 2);
            if (this.validateCashWithAmount()) {
                $("#twoRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
                window.setTimeout(function () {
                    $("#oneRupeeCount").focus();
                }, 100);
            }
        }
    };
    PaymentFollowupComponent.prototype.twoRupeeBlur = function (e) {
        this.nf2Count = $("#twoRupeeCount").val();
        this.nf2Count = this.nf2Count == null ? 0 : this.nf2Count == '' ? 0 : this.nf2Count;
        $("#twoRupee").val(this.nf2Count * 2);
        if (this.validateCashWithAmount()) {
            $("#twoRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
    };
    PaymentFollowupComponent.prototype.oneRupeeEvent = function (e) {
        if (e.keyCode == 13) {
            this.nf1Count = $("#oneRupeeCount").val();
            this.nf1Count = this.nf1Count == null ? 0 : this.nf1Count == '' ? 0 : this.nf1Count;
            $("#oneRupee").val(this.nf1Count * 1);
            if (this.validateCashWithAmount()) {
                $("#oneRupee").val('');
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
            else {
                var calculatedTotalAmt = this.calculateDenominationTotalAmt();
                $("#totalRupeeDenomination").val(calculatedTotalAmt);
            }
        }
    };
    PaymentFollowupComponent.prototype.oneRupeeBlur = function (e) {
        this.nf1Count = $("#oneRupeeCount").val();
        this.nf1Count = this.nf1Count == null ? 0 : this.nf1Count == '' ? 0 : this.nf1Count;
        $("#oneRupee").val(this.nf1Count * 1);
        if (this.validateCashWithAmount()) {
            $("#oneRupee").val('');
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
        else {
            var calculatedTotalAmt = this.calculateDenominationTotalAmt();
            $("#totalRupeeDenomination").val(calculatedTotalAmt);
        }
    };
    //    paymentSpecifcValidations( keyEnter ) {
    //        let enteredAmt = 0.0;
    //        let clickedRowAmt = 0.0;
    //        this.enteredTotalLess = $( "#totalAmountForPayment" ).val();
    //        this.enteredTotalLess = this.enteredTotalLess == null ? 0.0 : this.enteredTotalLess == '' ? 0.0 : this.enteredTotalLess;
    //        this.enteredLessAmt = $( "#paymentLessAmount" ).val();
    //        this.enteredLessAmt = this.enteredLessAmt == null ? 0.0 : this.enteredLessAmt == '' ? 0.0 : this.enteredLessAmt;
    //        let totalAmt = this.enteredTotalLess;
    //        let memoNum = null;
    //        this.selectedEntryType = $( "#entryLessPaymentEntry" ).val();
    //        this.selectedCodeForManual = $( "#codeForManualLessPayment" ).val();
    //        this.selectedMemoNumberForManual = $( "#memoNumberForManualLessPayment" ).val();
    //        this.selectedMemoNumberForAutomatic = $( "#memoNumberForAutomaticLessPayment" ).val();
    //        this.selectedConsignee = $( "#consigneeNameForPayment" ).val();
    //        if ( this.selectedEntryType == 'paymentLessAutomatic' ) {
    //            memoNum = this.selectedMemoNumberForAutomatic;
    //            console.log( memoNum );
    //        } else {
    //            memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
    //            console.log( memoNum );
    //        }
    //
    //        if ( this.isEdit ) {
    //            this.clickedRowAmt = this.maintenanceCompletedLrs.chqAmount;
    //        }
    //        for ( let i = 0; i < this.paymentAmountEntriesDataList.length; i++ ) {
    //            enteredAmt = +enteredAmt + +this.paymentAmountEntriesDataList[i].chqAmount;
    //        }
    //
    //        enteredAmt = +enteredAmt + +this.enteredLessAmt;
    //        console.log( enteredAmt, totalAmt );
    //        // deduct the clicked row when edit
    //        enteredAmt = +enteredAmt - +this.clickedRowAmt;
    //        console.log( enteredAmt );
    //
    //        if ( enteredAmt > totalAmt ) {
    //            swal( {
    //                title: "Not Allowed",
    //                text: "Total entered amount exceed from the actual Amount, please verify!",
    //                icon: "warning",
    //                closeOnClickOutside: false,
    //                closeOnEsc: false,
    //            } );
    //
    //        } else {
    //            this.totalBalAmt = this.balanceAmountFinal;
    //
    //            if ( enteredAmt > this.totalBalAmt ) {
    //                swal( {
    //                    title: "Not Allowed",
    //                    text: "Amount exceeded from the actual Bill Amount, please verify!",
    //                    icon: "warning",
    //                    closeOnClickOutside: false,
    //                    closeOnEsc: false,
    //                } );
    //                $( "#paymentLessAmount" ).val( '' );
    //                $( "#paymentLessAmount" ).focus();
    //
    //            } else {
    //                this.insertRowPaymentEntry( memoNum, keyEnter );
    //            }
    //        }
    //
    //
    //    }
    PaymentFollowupComponent.prototype.paymentSpecifcValidations = function (keyEnter) {
        var enteredAmt = 0.0;
        var clickedRowAmt = 0.0;
        this.enteredTotalLess = $("#totalAmountForPayment").val();
        this.enteredTotalLess = this.enteredTotalLess == null ? 0.0 : this.enteredTotalLess == '' ? 0.0 : this.enteredTotalLess;
        this.enteredLessAmt = $("#paymentLessAmount").val();
        this.enteredLessAmt = this.enteredLessAmt == null ? 0.0 : this.enteredLessAmt == '' ? 0.0 : this.enteredLessAmt;
        var totalAmt = this.enteredTotalLess;
        var memoNum = null;
        this.selectedEntryType = $("#entryLessPaymentEntry").val();
        this.selectedCodeForManual = $("#codeForManualLessPayment").val();
        this.selectedMemoNumberForManual = $("#memoNumberForManualLessPayment").val();
        this.selectedMemoNumberForAutomatic = $("#memoNumberForAutomaticLessPayment").val();
        this.selectedConsignee = $("#consigneeNameForPayment").val();
        if (this.selectedEntryType == 'paymentLessAutomatic') {
            memoNum = this.selectedMemoNumberForAutomatic;
            //       console.log( memoNum );
        }
        else {
            memoNum = this.selectedCodeForManual + "" + this.selectedMemoNumberForManual;
            //        console.log( memoNum );
        }
        if (this.enteredLessAmt == '' || this.enteredLessAmt == null || this.enteredLessAmt == 0.0) {
            this.insertRowPaymentEntry(memoNum, keyEnter);
        }
        else {
            if (this.isEdit) {
                this.clickedRowAmt = this.maintenanceCompletedLrs.chqAmount;
            }
            for (var i = 0; i < this.paymentAmountEntriesDataList.length; i++) {
                enteredAmt = +enteredAmt + +this.paymentAmountEntriesDataList[i].chqAmount;
            }
            enteredAmt = +enteredAmt + +this.enteredLessAmt;
            //    console.log( enteredAmt, totalAmt );
            // deduct the clicked row when edit
            enteredAmt = +enteredAmt - +this.clickedRowAmt;
            //   console.log( enteredAmt );
            if (this.isPaymentClicked) {
                if (enteredAmt > totalAmt) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Not Allowed",
                        text: "Total entered amount exceed from the actual Amount, please verify!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    this.insertRowPaymentEntry(memoNum, keyEnter);
                }
            }
            else {
                if (enteredAmt > totalAmt) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Not Allowed",
                        text: "Total entered amount exceed from the actual Amount, please verify!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    this.totalBalAmt = this.balanceAmountFinal;
                    if (enteredAmt > this.totalBalAmt) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "Not Allowed",
                            text: "Amount exceeded from the actual Bill Amount, please verify!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        $("#paymentLessAmount").val('');
                        $("#paymentLessAmount").focus();
                    }
                    else {
                        this.insertRowPaymentEntry(memoNum, keyEnter);
                    }
                }
            }
        }
    };
    PaymentFollowupComponent.prototype.insertRowPaymentEntry = function (memoNum, keyEnter) {
        // console.log( 'here' );
        //Pending
        //        if (this.maintenanceCompletedLrs != null) {
        //            listStoreCompleteLrs.remove(maintenanceCompletedLrs);
        //        }
        this.userDataDtoForChq = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.listOfMemoNumber = [];
        this.listOfMemoNumber.push(memoNum);
        this.userDataDtoForChq.list = this.listOfMemoNumber;
        this.userDataDtoForChq.memoNumber = memoNum;
        this.userDataDtoForChq.companyId = this.userDataDtoReturnSession.companyId;
        this.getLessDetails(this.userDataDtoForChq, keyEnter);
    };
    PaymentFollowupComponent.prototype.addInPaymentTable = function (memoNum, totalLess, amount) {
        this.getChequeDate = $("#chequeDate").val();
        this.getMainStation = $("#paymentLessStn").val();
        this.selectedBankName = $("#consigneeBankName").val();
        this.enteredNewBankName = $("#newBankName").val();
        this.getChequeDate = this.datePipe.transform(this.getChequeDate, "yyyy-MM-dd");
        //   console.log( this.getChequeDate );
        this.newAttributeForPayment.chqType = memoNum;
        this.newAttributeForPayment.chqNumber = "NA";
        this.newAttributeForPayment.chqAmount = totalLess;
        this.newAttributeForPayment.cashMemoAmt = amount;
        this.newAttributeForPayment.balance = this.balanceAmtInAddingTable;
        //        this.newAttributeForPayment.mainStation = "NA";
        this.newAttributeForPayment.mainStation = this.getMainStation;
        this.newAttributeForPayment.chequeno = $("#chequeNumber").val();
        if (this.selectedBankName != '' && this.selectedBankName == 'ADD NEW BANK') {
            this.newAttributeForPayment.bankname = this.enteredNewBankName;
        }
        else {
            this.newAttributeForPayment.bankname = (this.selectedBankName == null ? null : this.selectedBankName == '' ? null : this.selectedBankName);
        }
        //        this.newAttributeForPayment.bankname = $( "#consigneeBankName" ).val();
        this.newAttributeForPayment.chequedate = this.getChequeDate;
        this.newAttributeForPayment.remarks = $("#referenceNumber").val();
        this.newAttributeForPayment.consigneeId = this.selectedConsigneeId;
        this.newAttributeForPayment.consigneeName = $("#consigneeNameForPayment").val();
        this.newAttributeForPayment.paymenttype = $("#paymentMode").val();
        if (this.editTableIdForPayment != null) {
            this.paymentAmountEntriesDataList.splice(this.editTableIdForPayment, 1);
            this.countOfPaymentMemo = +this.countOfPaymentMemo - 1;
            this.sumOfMemoAmtPayment = +this.sumOfMemoAmtPayment - +this.editMemoAmtForPayment;
            this.sumOfLessAmtPayment = +this.sumOfLessAmtPayment - +this.editLessAmtForPayment;
            this.sumOfBalanceAmtPayment = +this.sumOfBalanceAmtPayment - +this.editBalanceAmtForPayment;
        }
        if (this.paymentAmountEntriesDataList == null) {
            this.paymentAmountEntriesDataList = [];
        }
        //        console.log(this.setPaymentEntryDetails);
        if (this.setPaymentEntryDetails == 'new') {
            this.dtTriggerPaymentAmountEntries.next();
            this.setPaymentEntryDetails = 'old';
        }
        //        console.log(this.setPaymentEntryDetails);
        if (this.paymentAmountEntriesDataList.length == 0) {
            this.paymentAmountEntriesDataList.push(this.newAttributeForPayment);
        }
        else {
            this.paymentAmountEntriesDataList.push(this.newAttributeForPayment);
        }
        // console.log( this.paymentAmountEntriesDataList )
        this.countOfPaymentMemo = +this.countOfPaymentMemo + 1;
        this.sumOfMemoAmtPayment = +this.sumOfMemoAmtPayment + +this.newAttributeForPayment.cashMemoAmt;
        this.sumOfLessAmtPayment = +this.sumOfLessAmtPayment + +this.newAttributeForPayment.chqAmount;
        this.sumOfBalanceAmtPayment = +this.sumOfBalanceAmtPayment + +this.newAttributeForPayment.balance;
        this.newAttributeForPayment = {};
        this.isEdit = false;
        $("#paymentLessAmount").val('');
        $("#lessType").val('');
        //        $( "#memoNumberForManualLessPayment" ).val( '' );
        //        $( "#memoNumberForManualLessPayment" ).focus();
        this.selectedEntryType = $("#entryLessPaymentEntry").val();
        if (this.selectedEntryType == 'paymentLessAutomatic') {
            $("#memoNumberForAutomaticLessPayment").val('');
            $("#memoNumberForAutomaticLessPayment").focus();
        }
        else {
            $("#memoNumberForManualLessPayment").val('');
            $("#memoNumberForManualLessPayment").focus();
        }
        $("#hiddenIndexForPaymentEntry").val('');
        this.editTableIdForPayment = null;
        ///Pending 
    };
    PaymentFollowupComponent.prototype.rowSelectedEditForPaymentEntry = function (paymentAmountEntriesData, index) {
        $("#entryLessPaymentEntry").val('paymentLessManual');
        $("#consigneeNameForPayment").val(paymentAmountEntriesData.consigneeName);
        //        $( "#totalAmountForPayment" ).val( paymentAmountEntriesData.chqAmount );
        $("#chequeNumber").val(paymentAmountEntriesData.chequeno);
        $("#chequeDate").val(paymentAmountEntriesData.chequedate);
        $("#consigneeBankName").val(paymentAmountEntriesData.bankname);
        $("#paymentLessAmount").val(paymentAmountEntriesData.balance);
        $("#referenceNumber").val(paymentAmountEntriesData.remarks);
        $("#paymentLessStn").val(paymentAmountEntriesData.mainStation);
        this.paymentLessManualView = true;
        this.paymentLessAutomaticView = false;
        $("#paymentMode").val(paymentAmountEntriesData.paymenttype);
        //        $( "#entryLessPaymentEntry" ).val( paymentAmountEntriesData.paymenttype );
        this.selectedConsigneeId = paymentAmountEntriesData.consigneeId;
        //    console.log( this.selectedConsigneeId );
        //For manual 
        var selectedMemo = paymentAmountEntriesData.chqType;
        this.slashSplitMemo = selectedMemo.split("/");
        var destSplit = this.slashSplitMemo[0];
        var yearSplit = this.slashSplitMemo[1];
        var memoNumberSplit = this.slashSplitMemo[2];
        //    console.log( selectedMemo, this.slashSplitMemo, destSplit, yearSplit, memoNumberSplit );
        var memoNumberCombine = destSplit + "/" + yearSplit + "/";
        $("#codeForManualLessPayment").val(memoNumberCombine);
        $("#memoNumberForManualLessPayment").val(memoNumberSplit);
        this.modelStationForPaymentAmt = memoNumberCombine;
        //////
        //For Automatic
        $("#memoNumberForAutomaticLessPayment").val(paymentAmountEntriesData.chqType);
        /////
        $("#hiddenIndexForPaymentEntry").val(index);
        this.editTableIdForPayment = index;
        ///
        this.maintenanceCompletedLrs = [];
        this.maintenanceCompletedLrs = paymentAmountEntriesData;
        //    console.log( this.maintenanceCompletedLrs );
        this.isEdit = true;
        //
        this.editMemoAmtForPayment = 0;
        this.editLessAmtForPayment = 0;
        this.editBalanceAmtForPayment = 0;
        this.editMemoAmtForPayment = paymentAmountEntriesData.cashMemoAmt;
        this.editLessAmtForPayment = paymentAmountEntriesData.chqAmount;
        this.editBalanceAmtForPayment = paymentAmountEntriesData.balance;
    };
    PaymentFollowupComponent.prototype.rowSelectedDeleteForPaymentEntry = function (paymentAmountEntriesData, index) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Confirm Remove",
            text: "Sure you want to remove the selected Payment entry",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (remove) {
            if (remove) {
                _this.paymentAmountEntriesDataList.splice(index, 1);
                _this.isEdit = false;
                $("#paymentLessAmount").val('');
                $("#memoNumberForManualLessPayment").val('');
                $("#memoNumberForManualLessPayment").focus();
                _this.maintenanceCompletedLrs = [];
                $("#hiddenIndexForPaymentEntry").val('');
                _this.editTableIdForPayment = null;
                _this.countOfPaymentMemo = +_this.countOfPaymentMemo - 1;
                _this.sumOfMemoAmtPayment = +_this.sumOfMemoAmtPayment - +paymentAmountEntriesData.cashMemoAmt;
                _this.sumOfLessAmtPayment = +_this.sumOfLessAmtPayment - +paymentAmountEntriesData.chqAmount;
                _this.sumOfBalanceAmtPayment = +_this.sumOfBalanceAmtPayment - +paymentAmountEntriesData.balance;
            }
        });
    };
    PaymentFollowupComponent.prototype.updateCashAmt = function () {
        if (this.isPaymentClicked) {
            this.userDataDtosPaymentCashTemp = [];
            this.isPaymentClicked = false;
        }
        this.grandTotalForCash = $("#totalRupeeDenomination").val();
        this.nf2000 = $("#twoThousandRupee").val();
        this.nf500 = $("#fiveHundredRupee").val();
        this.nf200 = $("#twoHundredRupee").val();
        this.nf100 = $("#hundredRupee").val();
        this.nf50 = $("#fiftyRupee").val();
        this.nf20 = $("#twentyRupee").val();
        this.nf10 = $("#tenRupee").val();
        this.nf5 = $("#fiveRupee").val();
        this.nf2 = $("#twoRupee").val();
        this.nf1 = $("#oneRupee").val();
        this.nf2000Count = $("#twoThousandRupeeCount").val();
        this.nf500Count = $("#fiveHundredRupeeCount").val();
        this.nf200Count = $("#twoHundredRupeeCount").val();
        this.nf100Count = $("#hundredRupeeCount").val();
        this.nf50Count = $("#fiftyRupeeCount").val();
        this.nf20Count = $("#twentyRupeeCount").val();
        this.nf10Count = $("#tenRupeeCount").val();
        this.nf5Count = $("#fiveRupeeCount").val();
        this.nf2Count = $("#twoRupeeCount").val();
        this.nf1Count = $("#oneRupeeCount").val();
        this.nf2000 = this.nf2000 == null ? 0.0 : this.nf2000 == '' ? 0.0 : this.nf2000;
        this.nf500 = this.nf500 == null ? 0.0 : this.nf500 == '' ? 0.0 : this.nf500;
        this.nf200 = this.nf200 == null ? 0.0 : this.nf200 == '' ? 0.0 : this.nf200;
        this.nf100 = this.nf100 == null ? 0.0 : this.nf100 == '' ? 0.0 : this.nf100;
        this.nf50 = this.nf50 == null ? 0.0 : this.nf50 == '' ? 0.0 : this.nf50;
        this.nf20 = this.nf20 == null ? 0.0 : this.nf20 == '' ? 0.0 : this.nf20;
        this.nf10 = this.nf10 == null ? 0.0 : this.nf10 == '' ? 0.0 : this.nf10;
        this.nf5 = this.nf5 == null ? 0.0 : this.nf5 == '' ? 0.0 : this.nf5;
        this.nf2 = this.nf2 == null ? 0.0 : this.nf2 == '' ? 0.0 : this.nf2;
        this.nf1 = this.nf1 == null ? 0.0 : this.nf1 == '' ? 0.0 : this.nf1;
        this.nf2000Count = this.nf2000Count == null ? 0 : this.nf2000Count == '' ? 0 : this.nf2000Count;
        this.nf500Count = this.nf500Count == null ? 0 : this.nf500Count == '' ? 0 : this.nf500Count;
        this.nf200Count = this.nf200Count == null ? 0 : this.nf200Count == '' ? 0 : this.nf200Count;
        this.nf100Count = this.nf100Count == null ? 0 : this.nf100Count == '' ? 0 : this.nf100Count;
        this.nf50Count = this.nf50Count == null ? 0 : this.nf50Count == '' ? 0 : this.nf50Count;
        this.nf20Count = this.nf20Count == null ? 0 : this.nf20Count == '' ? 0 : this.nf20Count;
        this.nf10Count = this.nf10Count == null ? 0 : this.nf10Count == '' ? 0 : this.nf10Count;
        this.nf5Count = this.nf5Count == null ? 0 : this.nf5Count == '' ? 0 : this.nf5Count;
        this.nf2Count = this.nf2Count == null ? 0 : this.nf2Count == '' ? 0 : this.nf2Count;
        this.nf1Count = this.nf1Count == null ? 0 : this.nf1Count == '' ? 0 : this.nf1Count;
        this.getCashValDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getCashValDto.nfof2000Count = this.nf2000Count;
        this.getCashValDto.nfof500Count = this.nf500Count;
        this.getCashValDto.nfof200Count = this.nf200Count;
        this.getCashValDto.nfof100Count = this.nf100Count;
        this.getCashValDto.nfof50Count = this.nf50Count;
        this.getCashValDto.nfof20Count = this.nf20Count;
        this.getCashValDto.nfof10Count = this.nf10Count;
        this.getCashValDto.nfof5Count = this.nf5Count;
        this.getCashValDto.nfof2Count = this.nf2Count;
        this.getCashValDto.nfof1Count = this.nf1Count;
        this.getCashValDto.nfOF2000 = this.nf2000;
        this.getCashValDto.nfOF500 = this.nf500;
        this.getCashValDto.nfOF200 = this.nf200;
        this.getCashValDto.nfOF100 = this.nf100;
        this.getCashValDto.nfOF50 = this.nf50;
        this.getCashValDto.nfOF20 = this.nf20;
        this.getCashValDto.nfOF10 = this.nf10;
        this.getCashValDto.nfOF5 = this.nf5;
        this.getCashValDto.nfOF2 = this.nf2;
        this.getCashValDto.nfOF1 = this.nf1;
        this.getCashValDto.grandTotal = this.grandTotalForCash;
        this.userDataDtosPaymentCashTemp.push(this.getCashValDto);
        //    console.log( this.userDataDtosPaymentCashTemp );
        this.showCashLblAmt = true;
        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Memo Payment",
            text: "Payment details updated temporarily, please note that it will only be save permanently when click on Finish",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        });
        //        this.resetPaymentMode();
        //        this.clearCompletePopupCashFields();
    };
    PaymentFollowupComponent.prototype.updateChqDetails = function (type) {
        //        console.log( this.payType, this.payMode );
        if (this.payType == '' || this.payType == null || this.payMode == '' || this.payMode == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Warning",
                text: "Payment Type or PaymentMmode is missing for lr's",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.selectedPaymentMode = $("#paymentMode").val();
            if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cash') {
                this.payType = "Cash";
                this.payMode = "completedcash";
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque') {
                this.payType = "Cheque";
                this.payMode = "completedcheque";
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft') {
                this.payType = "NEFT/IMPS";
                this.payMode = "completedneft";
            }
        }
        else {
            this.getChqAndNeftLRDetails(type);
            this.selectedBankName = $("#consigneeBankName").val();
            // add new bank name
            if (this.selectedBankName != '' && this.selectedBankName == 'ADD NEW BANK') {
                this.addBankNames();
            }
            else {
                this.clearCompletePopupFieldsOnTypeChange();
            }
            this.resetPaymentMode();
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Memo Payment",
                text: "Payment details updated temporarily, please note that it will only be save permanently when click on Finish",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    PaymentFollowupComponent.prototype.resetPaymentMode = function () {
        this.viewByCash = false;
        this.viewByCashs = false;
        this.viewByChequeNumber = false;
        this.viewByChequeDate = false;
        this.viewByConsigneeBankName = false;
        this.viewByReferenceNumber = false;
        this.viewByConsigneeName = false;
        this.showNextBtn = true;
        this.payType = "";
        this.payMode = "";
        $("#consigneeBankName").val('');
        $("#newBankName").val('');
        this.selectedConsigneeId = 0;
        this.controlConsigneeBankName.reset();
        this.showForCheckandNeft = false;
        this.viewNewBankName = false;
        $("#paymentMode").val('select');
        //        this.dtTriggerPaymentAmountEntries.unsubscribe();
        //        this.paymentEntriesDataTable();
    };
    PaymentFollowupComponent.prototype.addBankNames = function () {
        this.enteredNewBankName = $("#newBankName").val();
        this.userDataDtoForBankName = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForBankName.bankId = 0;
        this.userDataDtoForBankName.bankName = this.enteredNewBankName;
        this.userDataDtoForBankName.office = this.userDataDtoReturnSession.mainStation;
        this.userDataDtoForBankName.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDtoForBankName.createdBy = this.userDataDtoReturnSession.userId;
        this.addBankDetails();
    };
    //    addBankDetails = () => {
    //        this.memoService.addPartyBankMasterDetails( this.userDataDtoForBankName ).subscribe(
    //            ( response ) => {
    //                if ( response.length == 0 ) {
    //                    swal( {
    //                        title: "Server Error",
    //                        text: "Ooops...Error Occured While adding the new Bank Name",
    //                        icon: "error",
    //                        closeOnClickOutside: false,
    //                        closeOnEsc: false,
    //                    } );
    //                } else {
    //                    this.clearCompletePopupFieldsOnTypeChange();
    //                    this.getPartyBankDetailsService();
    //
    //                }
    //            } ),
    //            ( error ) => console.log( error.json() ),
    //            () => console.log( 'done' );
    //    };
    PaymentFollowupComponent.prototype.addBankDetails = function () {
        var _this = this;
        this.memoService.createNewPartyBankMasterService(this.userDataDtoForBankName).subscribe(function (response) {
            if (response) {
                _this.newPartyBankDetial = response;
                if (_this.newPartyBankDetial.status == "persisted") {
                    _this.getPartyBankDetailsService();
                    _this.clearCompletePopupFieldsOnTypeChange();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Not Saved",
                        text: "Error Occured While adding the new Bank Name",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                _this.newPartyBankDetial = '';
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Server Error",
            text: "Problem occur while Saving New Bank Name",
            icon: "error",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    //    getChqAndNeftLRDetails( type ) {
    //        console.log( this.payType, this.payMode );
    //        this.selectedPaymentMode = $( "#paymentMode" ).val();
    //        if ( this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cash' ) {
    //            this.payType = "Cash";
    //                this.payMode = "completedcash";
    //        } else if ( this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque' ) {
    //            this.payType = "Cheque";
    //            this.payMode = "completedcheque";
    //        } else if ( this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft' ) {
    //            this.payType = "NEFT/IMPS";
    //            this.payMode = "completedneft";
    //        }
    //        this.userDataDtoForPayment = [];
    //        this.selectedCollectionMan = this.enteredCollectionMan;
    //        this.enteredCheckNumber = $( "#chequeNumber" ).val();
    //        this.selectedBankName = $( "#consigneeBankName" ).val();
    //        this.enteredNewBankName = $( "#newBankName" ).val();
    //        this.getChequeDate = $( "#chequeDate" ).val();
    //        this.enteredRefNumber = $( "#referenceNumber" ).val();
    //        this.getMainStation = $( "#paymentLessStn" ).val();
    //        if ( this.getChequeDate == null || this.getChequeDate == '' ) {
    //            this.getChequeDate = null;
    //        } else {
    //            this.getChequeDate = this.datePipe.transform( this.getChequeDate, "yyyy-MM-dd" );
    //        }
    //        this.enteredCompletedOnDate = $( "#completedOnDate" ).val();
    //        if ( this.enteredCompletedOnDate == null || this.enteredCompletedOnDate == '' ) {
    //            this.enteredCompletedOnDate == null;
    //        } else {
    //            this.enteredCompletedOnDate = this.datePipe.transform( this.enteredCompletedOnDate, "yyyy-MM-dd" );
    //            //       console.log( this.enteredCompletedOnDate );
    //        }
    //        for ( let i = 0; i < this.paymentAmountEntriesDataList.length; i++ ) {
    //
    //            this.userDataDtoForPaymentDetails = new UserDataDto();
    //            this.userDataDtoForPaymentDetails.memoNumber = this.paymentAmountEntriesDataList[i].chqType;
    //            this.userDataDtoForPaymentDetails.paymentAmt = this.paymentAmountEntriesDataList[i].balance;
    //            this.userDataDtoForPaymentDetails.collectioMan = this.selectedCollectionMan;
    //            this.userDataDtoForPaymentDetails.paymentType = this.payType;
    //            this.userDataDtoForPaymentDetails.chequeNumber = this.enteredCheckNumber == null ? null : this.enteredCheckNumber == '' ? null : this.enteredCheckNumber;
    //            this.userDataDtoForPaymentDetails.updatedBy = this.userDataDtoReturnSession.userId;
    //
    //            if ( this.selectedBankName != '' && this.selectedBankName == 'ADD NEW BANK' ) {
    //                this.userDataDtoForPaymentDetails.bankName = this.enteredNewBankName;
    //            } else {
    //                this.userDataDtoForPaymentDetails.bankName = this.selectedBankName == null ? null : this.selectedBankName == '' ? null : this.selectedBankName;
    //            }
    //            this.userDataDtoForPaymentDetails.chequeDate = this.getChequeDate;
    //            this.userDataDtoForPaymentDetails.completedOn = this.enteredCompletedOnDate;
    //            this.userDataDtoForPaymentDetails.features = this.enteredRefNumber == null ? null : this.enteredRefNumber == '' ? null : this.enteredRefNumber;
    //            // if received amt is less then balance amt then the remaining amt
    //            // will consider as cash
    //
    //            let memoAmt = this.paymentAmountEntriesDataList[i].cashMemoAmt;
    //            let amtRec = this.paymentAmountEntriesDataList[i].balance;
    //            let lessAmt = this.paymentAmountEntriesDataList[i].chqAmount
    //            let balAsCash = +memoAmt - ( +amtRec + +lessAmt );
    //            this.userDataDtoForPaymentDetails.balance = balAsCash;
    //            this.userDataDtoForPaymentDetails.mode = this.payMode;
    //            this.userDataDtoForPaymentDetails.amount = memoAmt;
    //            this.userDataDtoForPaymentDetails.chqAmt = lessAmt;
    //            this.userDataDtoForPaymentDetails.type = this.paymentAmountEntriesDataList[i].paymenttype;
    //            this.userDataDtoForPaymentDetails.partyName = this.paymentAmountEntriesDataList[i].consigneeName;
    //            this.userDataDtoForPaymentDetails.consigneeId = this.paymentAmountEntriesDataList[i].consigneeId;
    //            //Added By Basha
    //            this.userDataDtoForPaymentDetails.mainStation = this.getMainStation;
    //
    //
    //            this.userDataDtoForPayment.push( this.userDataDtoForPaymentDetails );
    //            //Pending need to check this below new dto list no need of this object userDataDtoListForLess may delete this 
    //            // add the entry details in temp file
    //            if ( type == 'Cheque/PDC' ) {
    //                if ( this.isPaymentClicked ) {
    //                    this.userDataDtosPaymentChqTemp = [];
    //                    this.isPaymentClicked = false;
    //                }
    //                this.userDataDtosPaymentChqTemp.push( this.userDataDtoForPaymentDetails );
    //            } else if ( type == 'NEFT/IMPS' ) {
    //                if ( this.isPaymentClicked ) {
    //                    this.userDataDtosPaymentNeftTemp = [];
    //                    this.isPaymentClicked = false;
    //                }
    //                this.userDataDtosPaymentNeftTemp.push( this.userDataDtoForPaymentDetails );
    //            }
    //        }
    //        $( "#consigneeNameForPayment" ).val( '' );
    //        this.selectedConsigneeId = 0;
    //        this.countOfPaymentMemo = +this.countOfPaymentMemo + 1;
    //        this.sumOfMemoAmtPayment = +this.sumOfMemoAmtPayment + +this.newAttributeForPayment.cashMemoAmt;
    //        this.sumOfLessAmtPayment = +this.sumOfLessAmtPayment + +this.newAttributeForPayment.chqAmount;
    //        this.sumOfBalanceAmtPayment = +this.sumOfBalanceAmtPayment + +this.newAttributeForPayment.balance;
    //        this.newAttributeForPayment = {};
    //        this.modelConsigneeNameForPayment = '';
    //        console.log( this.userDataDtoForPayment );
    //        console.log( this.userDataDtosPaymentChqTemp );
    //        console.log( this.userDataDtosPaymentNeftTemp );
    //        return this.userDataDtoForPayment;
    //    }
    PaymentFollowupComponent.prototype.getChqAndNeftLRDetails = function (type) {
        console.log(this.payType, this.payMode);
        if (this.payType == '' || this.payType == null || this.payMode == '' || this.payMode == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Warning",
                text: "Payment Type or PaymentMmode is missing for lr's",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.selectedPaymentMode = $("#paymentMode").val();
            if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cash') {
                this.payType = "Cash";
                this.payMode = "completedcash";
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque') {
                this.payType = "Cheque";
                this.payMode = "completedcheque";
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft') {
                this.payType = "NEFT/IMPS";
                this.payMode = "completedneft";
            }
        }
        else {
            this.selectedPaymentMode = $("#paymentMode").val();
            if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cash') {
                this.payType = "Cash";
                this.payMode = "completedcash";
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque') {
                this.payType = "Cheque";
                this.payMode = "completedcheque";
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft') {
                this.payType = "NEFT/IMPS";
                this.payMode = "completedneft";
            }
            this.userDataDtoForPayment = [];
            this.selectedCollectionMan = this.enteredCollectionMan;
            if (this.getChequeDate == null || this.getChequeDate == '') {
                this.getChequeDate = null;
            }
            else {
                this.getChequeDate = this.datePipe.transform(this.getChequeDate, "yyyy-MM-dd");
            }
            this.enteredCompletedOnDate = $("#completedOnDate").val();
            if (this.enteredCompletedOnDate == null || this.enteredCompletedOnDate == '') {
                this.enteredCompletedOnDate == null;
            }
            else {
                this.enteredCompletedOnDate = this.datePipe.transform(this.enteredCompletedOnDate, "yyyy-MM-dd");
                //       console.log( this.enteredCompletedOnDate );
            }
            for (var i = 0; i < this.paymentAmountEntriesDataList.length; i++) {
                this.userDataDtoForPaymentDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
                this.userDataDtoForPaymentDetails.memoNumber = this.paymentAmountEntriesDataList[i].chqType;
                this.userDataDtoForPaymentDetails.paymentAmt = this.paymentAmountEntriesDataList[i].balance;
                this.userDataDtoForPaymentDetails.collectioMan = this.selectedCollectionMan;
                this.userDataDtoForPaymentDetails.paymentType = this.payType;
                this.userDataDtoForPaymentDetails.chequeNumber = (this.paymentAmountEntriesDataList[i].chequeno == null ? null : this.paymentAmountEntriesDataList[i].chequeno == '' ? null : this.paymentAmountEntriesDataList[i].chequeno);
                this.userDataDtoForPaymentDetails.updatedBy = this.userDataDtoReturnSession.userId;
                this.userDataDtoForPaymentDetails.bankName = (this.paymentAmountEntriesDataList[i].bankname == null ? null : this.paymentAmountEntriesDataList[i].bankname == '' ? null : this.paymentAmountEntriesDataList[i].bankname);
                this.userDataDtoForPaymentDetails.chequeDate = this.paymentAmountEntriesDataList[i].chequedate;
                this.userDataDtoForPaymentDetails.completedOn = this.enteredCompletedOnDate;
                this.userDataDtoForPaymentDetails.features = (this.paymentAmountEntriesDataList[i].remarks == null ? null : this.paymentAmountEntriesDataList[i].remarks == '' ? null : this.paymentAmountEntriesDataList[i].remarks);
                // if received amt is less then balance amt then the remaining amt
                // will consider as cash
                var memoAmt = this.paymentAmountEntriesDataList[i].cashMemoAmt;
                var amtRec = this.paymentAmountEntriesDataList[i].balance;
                var lessAmt = this.paymentAmountEntriesDataList[i].chqAmount;
                var balAsCash = +memoAmt - (+amtRec + +lessAmt);
                this.userDataDtoForPaymentDetails.balance = balAsCash;
                this.userDataDtoForPaymentDetails.mode = this.payMode;
                this.userDataDtoForPaymentDetails.amount = memoAmt;
                this.userDataDtoForPaymentDetails.chqAmt = lessAmt;
                this.userDataDtoForPaymentDetails.type = this.paymentAmountEntriesDataList[i].paymenttype;
                this.userDataDtoForPaymentDetails.partyName = this.paymentAmountEntriesDataList[i].consigneeName;
                this.userDataDtoForPaymentDetails.consigneeId = this.paymentAmountEntriesDataList[i].consigneeId;
                //Added By Basha
                this.userDataDtoForPaymentDetails.mainStation = this.paymentAmountEntriesDataList[i].mainStation;
                this.userDataDtoForPayment.push(this.userDataDtoForPaymentDetails);
                //Pending need to check this below new dto list no need of this object userDataDtoListForLess may delete this 
                // add the entry details in temp file
                if (type == 'Cheque/PDC') {
                    if (this.isPaymentClicked) {
                        this.userDataDtosPaymentChqTemp = [];
                        this.isPaymentClicked = false;
                    }
                    this.userDataDtosPaymentChqTemp.push(this.userDataDtoForPaymentDetails);
                }
                else if (type == 'NEFT/IMPS') {
                    if (this.isPaymentClicked) {
                        this.userDataDtosPaymentNeftTemp = [];
                        this.isPaymentClicked = false;
                    }
                    this.userDataDtosPaymentNeftTemp.push(this.userDataDtoForPaymentDetails);
                }
            }
            $("#consigneeNameForPayment").val('');
            this.selectedConsigneeId = 0;
            this.countOfPaymentMemo = +this.countOfPaymentMemo + 1;
            this.sumOfMemoAmtPayment = +this.sumOfMemoAmtPayment + +this.newAttributeForPayment.cashMemoAmt;
            this.sumOfLessAmtPayment = +this.sumOfLessAmtPayment + +this.newAttributeForPayment.chqAmount;
            this.sumOfBalanceAmtPayment = +this.sumOfBalanceAmtPayment + +this.newAttributeForPayment.balance;
            this.newAttributeForPayment = {};
            this.modelConsigneeNameForPayment = '';
            console.log(this.userDataDtoForPayment);
            console.log(this.userDataDtosPaymentChqTemp);
            console.log(this.userDataDtosPaymentNeftTemp);
        }
        return this.userDataDtoForPayment;
    };
    PaymentFollowupComponent.prototype.clearCompletePopupFieldsOnTypeChange = function () {
        this.isEdit = false;
        $("#chequeNumber").val('');
        $("#consigneeBankName").val('');
        $("#newBankName").val('');
        this.viewNewBankName = false;
        this.selectedConsigneeId = 0;
        this.controlConsigneeBankName.reset();
        this.controlConsigneeName.reset();
        $("#totalAmountForPayment").val('');
        $("#chequeDate").val('');
        $("#referenceNumber").val('');
        $("#paymentLessAmount").val('');
        $("#memoNumberForManualLessPayment").val('');
        $("#entryLessAmount").val('');
        $("#lessType").val('');
        $("#memoNumberForManualLess").val('');
        this.editTableId = null;
        this.editTableIdForPayment = null;
        this.controlEntryLessType.reset();
        $("#consigneeName").val('');
        $("#totalLess").val('');
        this.controlConsigneeNamePayment.reset();
        this.paymentAmountEntriesDataList = [];
        this.countOfPaymentMemo = 0;
        this.sumOfMemoAmtPayment = 0;
        this.sumOfLessAmtPayment = 0;
        this.sumOfBalanceAmtPayment = 0;
        this.getPartyBankDetailsService();
        //Pending still the less page values need to cleared 
        //        listStoreCompleteLrs.removeAll();
        //        gridCompleteLrs.reconfigure(listStoreCompleteLrs, cmCompleteLrs);
        //        listStoreCompleteLessLrs.removeAll();
        //        gridCompleteLessLrs.reconfigure(listStoreCompleteLessLrs,
        //                cmCompleteLessLrs);
    };
    PaymentFollowupComponent.prototype.clearCompletePopupCashFields = function () {
        this.nf2000Count = '';
        this.nf500Count = '';
        this.nf200Count = '';
        this.nf100Count = '';
        this.nf50Count = '';
        this.nf20Count = '';
        this.nf10Count = '';
        this.nf5Count = '';
        this.nf2Count = '';
        this.nf1Count = '';
        this.nf2000 = '';
        this.nf500 = '';
        this.nf200 = '';
        this.nf100 = '';
        this.nf50 = '';
        this.nf20 = '';
        this.nf10 = '';
        this.nf5 = '';
        this.nf2 = '';
        this.nf1 = '';
        $("#totalRupeeDenomination").val('');
        $("#paymentLessAmount").val('');
        $("#entryLessAmount").val('');
        this.grandTotalForCash = '';
        $("#totalRupeeDenomination").val('');
        $("#twoThousandRupee").val();
        $("#fiveHundredRupee").val('');
        $("#twoHundredRupee").val('');
        $("#hundredRupee").val('');
        $("#fiftyRupee").val('');
        $("#twentyRupee").val('');
        $("#tenRupee").val('');
        $("#fiveRupee").val('');
        $("#twoRupee").val('');
        $("#oneRupee").val('');
        $("#twoThousandRupeeCount").val('');
        $("#fiveHundredRupeeCount").val('');
        $("#twoHundredRupeeCount").val('');
        $("#hundredRupeeCount").val('');
        $("#fiftyRupeeCount").val('');
        $("#twentyRupeeCount").val('');
        $("#tenRupeeCount").val('');
        $("#fiveRupeeCount").val('');
        $("#twoRupeeCount").val('');
        $("#oneRupeeCount").val('');
    };
    PaymentFollowupComponent.prototype.updateNeftDetails = function (type) {
        if (this.payType == '' || this.payType == null || this.payMode == '' || this.payMode == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Warning",
                text: "Payment Type or PaymentMmode is missing for lr's",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.selectedPaymentMode = $("#paymentMode").val();
            if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cash') {
                this.payType = "Cash";
                this.payMode = "completedcash";
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'cheque') {
                this.payType = "Cheque";
                this.payMode = "completedcheque";
            }
            else if (this.selectedPaymentMode != '' && this.selectedPaymentMode == 'neft') {
                this.payType = "NEFT/IMPS";
                this.payMode = "completedneft";
            }
        }
        else {
            this.getChqAndNeftLRDetails(type);
            this.selectedBankName = $("#consigneeBankName").val();
            // add new bank name
            if (this.selectedBankName != '' && this.selectedBankName == 'ADD NEW BANK') {
                this.addBankNames();
            }
            else {
                this.clearCompletePopupFieldsOnTypeChange();
            }
            this.resetPaymentMode();
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Memo Payment",
                text: "Payment details updated temporary, please note that it will only be save permanently when click on Finish",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    //// Finish Btn Process starts here
    PaymentFollowupComponent.prototype.validatePaymentEntryFinishBtn = function (e) {
        var _this = this;
        var balancedAmtInFinal = this.balanceAmountFinal;
        var cashAmt = this.calculateDenominationTotalAmt();
        if (balancedAmtInFinal > cashAmt) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Not Allowed",
                text: "Balance Amount should be NIL to finish this entry, please verify!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Confirm Finish",
                text: "Sure you want to finish this collection transaction",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (finish) {
                if (finish) {
                    //                    this.selectedPaymentMode = $( "#paymentMode" ).val();
                    //                    if ( this.selectedPaymentMode === 'cheque' ) {
                    //                        this.viewByCash = true;
                    //                        this.viewByCashs = true
                    //                        
                    //                    }
                    //                    else if ( this.selectedPaymentMode === 'neft' ) {
                    //                        this.viewByCash = true;
                    //                        this.viewByCashs = true
                    //                    } else if ( this.selectedPaymentMode === 'Select Payment Mode' ) {
                    //                        this.viewByCash = true;
                    //                        this.viewByCashs = true
                    //                    } 
                    _this.viewByCash = true;
                    _this.viewByCashs = true;
                    _this.showSpinner = true;
                    _this.callTempoForCash();
                    _this.calculateAllTotalAndBalance();
                    _this.setCashAmtModel();
                    _this.finishCompleteEntries();
                    $("html, body")
                        .animate({
                        scrollTop: 0
                    }, "medium");
                }
            });
        }
    };
    PaymentFollowupComponent.prototype.finishCompleteEntries = function () {
        this.userDataDtoForFinishDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForFinishDetails.listLessDetails = this.userDataDtosLessTemp;
        this.finishCompleteDetails();
        //    console.log( this.userDataDtoForFinishDetails );
    };
    PaymentFollowupComponent.prototype.finishPaymenChqEntries = function () {
        this.userDataDtoForFinishDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        //        this.userDataDtoForFinishDetails.listChqDetails=this.userDataDtosPaymentChqTemp;
        this.userDataDtoForFinishDetails.listCashDetails = this.userDataDtosPaymentChqTemp;
        this.userDataDtoForFinishDetails.mode = 'completedcheque';
        this.finishPaymenChqDetails();
        console.log(this.userDataDtoForFinishDetails);
    };
    PaymentFollowupComponent.prototype.finishPaymenNeftEntries = function () {
        this.userDataDtoForFinishDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        //        this.userDataDtoForFinishDetails.listNEFTDetails=this.userDataDtosPaymentNeftTemp;
        this.userDataDtoForFinishDetails.listCashDetails = this.userDataDtosPaymentNeftTemp;
        this.userDataDtoForFinishDetails.mode = 'completedneft';
        this.finishPaymenNeftDetails();
        //    console.log( this.userDataDtoForFinishDetails );
    };
    PaymentFollowupComponent.prototype.updateCashEntries = function () {
        this.userDataDtoForFinishDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForFinishDetails.listCashDetails = this.getCashLRDetails();
        this.userDataDtoForFinishDetails.mode = 'completedcash';
        this.updateCashDetails();
        //    console.log( this.userDataDtoForFinishDetails );
    };
    PaymentFollowupComponent.prototype.getCashLRDetails = function () {
        this.userDataDtoForCash = [];
        this.selectedCollectionMan = this.enteredCollectionMan;
        this.enteredCompletedOnDate = $("#completedOnDate").val();
        if (this.enteredCompletedOnDate == null || this.enteredCompletedOnDate == '') {
            this.enteredCompletedOnDate == null;
        }
        else {
            this.enteredCompletedOnDate = this.datePipe.transform(this.enteredCompletedOnDate, "yyyy-MM-dd");
        }
        for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
            this.userDataDtoForPaymentCashDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
            this.userDataDtoForPaymentCashDetails.memoNumber = this.pfAssignedJobDetailsDataList[i].memoNumber;
            this.userDataDtoForPaymentCashDetails.amount = this.pfAssignedJobDetailsDataList[i].amount;
            this.userDataDtoForPaymentCashDetails.collectioMan = this.selectedCollectionMan;
            this.userDataDtoForPaymentCashDetails.paymentType = 'Cash';
            this.userDataDtoForPaymentCashDetails.completedOn = this.enteredCompletedOnDate;
            this.userDataDtoForPaymentCashDetails.updatedBy = this.userDataDtoReturnSession.userId;
            this.userDataDtoForPaymentCashDetails.mode = 'completedcash';
            this.userDataDtoForCash.push(this.userDataDtoForPaymentCashDetails);
        }
        //    console.log( this.userDataDtoForCash );
        return this.userDataDtoForCash;
    };
    PaymentFollowupComponent.prototype.updateCollectionNumberOnComplete = function () {
        this.selectedCollectionMan = this.enteredCollectionMan;
        this.enteredCompletedOnDate = $("#completedOnDate").val();
        if (this.enteredCompletedOnDate == null || this.enteredCompletedOnDate == '') {
            this.enteredCompletedOnDate == null;
        }
        else {
            this.enteredCompletedOnDate = this.datePipe.transform(this.enteredCompletedOnDate, "yyyy-MM-dd");
        }
        this.userDataDtoForFinishDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForFinishDetails.collectioMan = this.selectedCollectionMan;
        this.userDataDtoForFinishDetails.completedOn = this.enteredCompletedOnDate;
        this.userDataDtoForFinishDetails.updatedBy = this.userDataDtoReturnSession.userId;
        this.userDataDtoForFinishDetails.city = this.userDataDtoReturnSession.mainStation;
        this.userDataDtoForFinishDetails.companyId = this.userDataDtoReturnSession.companyId;
        this.updateCollectionNumberOnCompleteDetails();
        //    console.log( this.userDataDtoForFinishDetails );
    };
    PaymentFollowupComponent.prototype.getAllLessDetailsOnFinish = function () {
        this.userDataDtoForFinishDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.listOfMemoNumber = [];
        for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
            this.listOfMemoNumber.push(this.pfAssignedJobDetailsDataList[i].memoNumber);
        }
        this.userDataDtoForFinishDetails.list = this.listOfMemoNumber;
        this.getAllLessDetailsOnFinishDetails();
        //   console.log( this.userDataDtoForFinishDetails );
    };
    PaymentFollowupComponent.prototype.getChallanPrintValues = function () {
        this.selectedCollectionMan = this.enteredCollectionMan;
        this.enteredCompletedOnDate = $("#completedOnDate").val();
        if (this.enteredCompletedOnDate == null || this.enteredCompletedOnDate == '') {
            this.enteredCompletedOnDate == '';
        }
        else {
            this.enteredCompletedOnDate = this.datePipe.transform(this.enteredCompletedOnDate, "dd-MM-yyyy");
        }
        this.nf2000 = $("#twoThousandRupee").val();
        this.nf500 = $("#fiveHundredRupee").val();
        this.nf200 = $("#twoHundredRupee").val();
        this.nf100 = $("#hundredRupee").val();
        this.nf50 = $("#fiftyRupee").val();
        this.nf20 = $("#twentyRupee").val();
        this.nf10 = $("#tenRupee").val();
        this.nf5 = $("#fiveRupee").val();
        this.nf2 = $("#twoRupee").val();
        this.nf1 = $("#oneRupee").val();
        this.nf2000Count = $("#twoThousandRupeeCount").val();
        this.nf500Count = $("#fiveHundredRupeeCount").val();
        this.nf200Count = $("#twoHundredRupeeCount").val();
        this.nf100Count = $("#hundredRupeeCount").val();
        this.nf50Count = $("#fiftyRupeeCount").val();
        this.nf20Count = $("#twentyRupeeCount").val();
        this.nf10Count = $("#tenRupeeCount").val();
        this.nf5Count = $("#fiveRupeeCount").val();
        this.nf2Count = $("#twoRupeeCount").val();
        this.nf1Count = $("#oneRupeeCount").val();
        this.nf2000 = this.nf2000 == null ? 0.0 : this.nf2000 == '' ? 0.0 : this.nf2000;
        this.nf500 = this.nf500 == null ? 0.0 : this.nf500 == '' ? 0.0 : this.nf500;
        this.nf200 = this.nf200 == null ? 0.0 : this.nf200 == '' ? 0.0 : this.nf200;
        this.nf100 = this.nf100 == null ? 0.0 : this.nf100 == '' ? 0.0 : this.nf100;
        this.nf50 = this.nf50 == null ? 0.0 : this.nf50 == '' ? 0.0 : this.nf50;
        this.nf20 = this.nf20 == null ? 0.0 : this.nf20 == '' ? 0.0 : this.nf20;
        this.nf10 = this.nf10 == null ? 0.0 : this.nf10 == '' ? 0.0 : this.nf10;
        this.nf5 = this.nf5 == null ? 0.0 : this.nf5 == '' ? 0.0 : this.nf5;
        this.nf2 = this.nf2 == null ? 0.0 : this.nf2 == '' ? 0.0 : this.nf2;
        this.nf1 = this.nf1 == null ? 0.0 : this.nf1 == '' ? 0.0 : this.nf1;
        this.nf2000Count = this.nf2000Count == null ? 0 : this.nf2000Count == '' ? 0 : this.nf2000Count;
        this.nf500Count = this.nf500Count == null ? 0 : this.nf500Count == '' ? 0 : this.nf500Count;
        this.nf200Count = this.nf200Count == null ? 0 : this.nf200Count == '' ? 0 : this.nf200Count;
        this.nf100Count = this.nf100Count == null ? 0 : this.nf100Count == '' ? 0 : this.nf100Count;
        this.nf50Count = this.nf50Count == null ? 0 : this.nf50Count == '' ? 0 : this.nf50Count;
        this.nf20Count = this.nf20Count == null ? 0 : this.nf20Count == '' ? 0 : this.nf20Count;
        this.nf10Count = this.nf10Count == null ? 0 : this.nf10Count == '' ? 0 : this.nf10Count;
        this.nf5Count = this.nf5Count == null ? 0 : this.nf5Count == '' ? 0 : this.nf5Count;
        this.nf2Count = this.nf2Count == null ? 0 : this.nf2Count == '' ? 0 : this.nf2Count;
        this.nf1Count = this.nf1Count == null ? 0 : this.nf1Count == '' ? 0 : this.nf1Count;
        this.getChallanPrintValDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getChallanPrintValDto.totalLess = this.lblTotLessSummaryValue == '' ? null : this.lblTotLessSummaryValue;
        this.getChallanPrintValDto.collectionMan = this.selectedCollectionMan;
        this.getChallanPrintValDto.completedOn = this.enteredCompletedOnDate;
        this.getChallanPrintValDto.amtToBeCollected = this.amountToBeCollected;
        this.getChallanPrintValDto.delhiLess = this.lblDelhiLessValue == '' ? null : this.lblDelhiLessValue;
        this.getChallanPrintValDto.mumbaiLess = this.lblMumLessValue == '' ? null : this.lblMumLessValue;
        this.getChallanPrintValDto.gujaratLess = this.lblGujLessValue == '' ? null : this.lblGujLessValue;
        this.getChallanPrintValDto.punjabLess = this.lblPjbLessValue == '' ? null : this.lblPjbLessValue;
        this.getChallanPrintValDto.tds = this.lblTDSLessValue == '' ? null : this.lblTDSLessValue;
        this.getChallanPrintValDto.claim = this.lblClaimLessValue == '' ? null : this.lblClaimLessValue;
        this.getChallanPrintValDto.totalChqAmt = this.lblTotChqAmtSummaryValue == '' ? null : this.lblTotChqAmtSummaryValue;
        this.getChallanPrintValDto.totalNeftAmt = this.lblTotNeftAmtSummaryValue == '' ? null : this.lblTotNeftAmtSummaryValue;
        this.getChallanPrintValDto.totalCashAmt = this.lblTotCashAmtSummaryValue == '' ? null : this.lblTotCashAmtSummaryValue;
        this.getChallanPrintValDto.totalCashAmt = this.lblTotCashAmtSummaryValue == '' ? null : this.lblTotCashAmtSummaryValue;
        this.getChallanPrintValDto.balanceAmt = this.balanceAmountFinal;
        this.getChallanPrintValDto.nfof2000Count = this.nf2000Count;
        this.getChallanPrintValDto.nfof500Count = this.nf500Count;
        this.getChallanPrintValDto.nfof200Count = this.nf200Count;
        this.getChallanPrintValDto.nfof100Count = this.nf100Count;
        this.getChallanPrintValDto.nfof50Count = this.nf50Count;
        this.getChallanPrintValDto.nfof20Count = this.nf20Count;
        this.getChallanPrintValDto.nfof10Count = this.nf10Count;
        this.getChallanPrintValDto.nfof5Count = this.nf5Count;
        this.getChallanPrintValDto.nfof2Count = this.nf2Count;
        this.getChallanPrintValDto.nfof1Count = this.nf1Count;
        this.getChallanPrintValDto.nfOF2000 = this.nf2000;
        this.getChallanPrintValDto.nfOF500 = this.nf500;
        this.getChallanPrintValDto.nfOF200 = this.nf200;
        this.getChallanPrintValDto.nfOF100 = this.nf100;
        this.getChallanPrintValDto.nfOF50 = this.nf50;
        this.getChallanPrintValDto.nfOF20 = this.nf20;
        this.getChallanPrintValDto.nfOF10 = this.nf10;
        this.getChallanPrintValDto.nfOF5 = this.nf5;
        this.getChallanPrintValDto.nfOF2 = this.nf2;
        this.getChallanPrintValDto.nfOF1 = this.nf1;
        this.lessDescOpt = this.entryLessTypeOptions;
        //        for ( let i = 0; i < this.lessDescOpt.length; i++ ) {
        //            this.lessDescOptSent.push(this.entryLessTypeOptions[i].label);
        //        }
        //   console.log( this.lessDescOptSent );
        //    console.log( this.lessDescOptSent.length );
        this.getChallanPrintValDto.lessDesc = this.lessDescOpt;
        this.getChallanPrintValDto.totalMemos = this.pfAssignedJobDetailsDataList.length;
        var totAmt = 0.0;
        for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
            totAmt = +totAmt + +this.pfAssignedJobDetailsDataList[i].amount;
        }
        this.getChallanPrintValDto.grandTotal = totAmt;
        return this.getChallanPrintValDto;
    };
    PaymentFollowupComponent.prototype.setPringForChallanReport = function () {
        var _this = this;
        this.getChallanPrintValues();
        localStorage.clear();
        localStorage.setItem('printAfterChallanMemo', JSON.stringify(this.getChallanPrintValDto));
        localStorage.setItem('printAfterChallanMemolist', JSON.stringify(this.diffLessRet));
        this.viewAssignMemoPrint = false;
        this.viewChallanRptPrint = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewChallanRptPrint) {
                _this.viewChallanRptPrint = false;
                _this.viewAssignMemoPrint = false;
                _this.getChallanPrintValDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
                _this.diffLessRet = '';
                _this.clearConsigneewiseDetails();
                _this.clearCompletePopupCashFields();
                _this.clearCompletePopupFieldsOnTypeChange();
                _this.clearALLFieldsAfterCompelte();
                ///Pending Clear Part on Complete
                localStorage.clear();
            }
        });
    };
    PaymentFollowupComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    PaymentFollowupComponent.prototype.rowSelectedDeleteForAssignedTable = function (pfAssignedJobDetailsData, index) {
        //    console.log( pfAssignedJobDetailsData.memoNumber );
        this.gridReconfigureAssgRemove(pfAssignedJobDetailsData);
    };
    PaymentFollowupComponent.prototype.gridReconfigureAssgRemove = function (pfAssignedJobDetailsData) {
        if (this.value == false) {
            //       console.log( 'a' );
            var index = -1;
            for (var i = 0; i < this.tempstore.length; i++) {
                if (this.tempstore[i].memoNumber === pfAssignedJobDetailsData.memoNumber) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            this.tempstore.splice(index, 1);
            //Here instead of clearing the whole pfAssignedJobDetailsDataList i just removed the deleted memo and did the footer calculation
            //        console.log( this.pfAssignedJobDetailsDataList );
            this.modelAllRemove = (this.pfCollectionManDetailsDataList.find(function (pfCollectionManDetailsData) { return pfCollectionManDetailsData.memoNumber === pfAssignedJobDetailsData.memoNumber; }));
            if (this.modelAllRemove == null) {
                this.pfCollectionManDetailsDataList.push(pfAssignedJobDetailsData);
                this.countOFMemosCollectionTable = 0;
                this.sumOFMemosCollectionTable = 0;
                for (var i = 0; i < this.pfCollectionManDetailsDataList.length; i++) {
                    this.countOFMemosCollectionTable = this.countOFMemosCollectionTable + 1;
                    this.sumOFMemosCollectionTable = this.sumOFMemosCollectionTable + +(this.pfCollectionManDetailsDataList[i].amount);
                }
                var index_1 = -1;
                for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
                    if (this.pfAssignedJobDetailsDataList[i].memoNumber === pfAssignedJobDetailsData.memoNumber) {
                        index_1 = i;
                        break;
                    }
                }
                if (index_1 === -1) {
                    alert("Something gone wrong while removing the row");
                }
                //           console.log( this.pfAssignedJobDetailsDataList );
                this.pfAssignedJobDetailsDataList.splice(index_1, 1);
                //            console.log( this.pfAssignedJobDetailsDataList );
                this.countOfAssignLR = 0;
                this.sumOfAssignLR = 0;
                for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
                    this.countOfAssignLR = +this.countOfAssignLR + 1;
                    this.sumOfAssignLR = +this.sumOfAssignLR + +this.pfAssignedJobDetailsDataList[i].amount;
                }
            }
        }
        else {
            //    console.log( 'b' );
            var index = -1;
            //For removing from tempstore
            for (var i = 0; i < this.tempstore.length; i++) {
                if (this.tempstore[i].memoNumber === pfAssignedJobDetailsData.memoNumber) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            this.tempstore.splice(index, 1);
            //For removing from pfAssignedJobDetailsDataList
            for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
                if (this.pfAssignedJobDetailsDataList[i].memoNumber === pfAssignedJobDetailsData.memoNumber) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            this.pfAssignedJobDetailsDataList.splice(index, 1);
            //        console.log( this.tempstore );
            //            this.pfAssignedJobDetailsDataList=[];
            //            this.pfAssignedJobDetailsDataList.push(this.tempstore);
            //       console.log( this.pfAssignedJobDetailsDataList );
            //for foooter in Assign Table
            this.countOfAssignLR = 0;
            this.sumOfAssignLR = 0;
            for (var i = 0; i < this.pfAssignedJobDetailsDataList.length; i++) {
                this.countOfAssignLR = +this.countOfAssignLR + 1;
                this.sumOfAssignLR = +this.sumOfAssignLR + +this.pfAssignedJobDetailsDataList[i].amount;
            }
            this.modelAllRemove = (this.pfCollectionManDetailsDataList.find(function (pfCollectionManDetailsData) { return pfCollectionManDetailsData.memoNumber === pfAssignedJobDetailsData.memoNumber; }));
            if (this.modelAllRemove == null) {
                //            console.log( this.pfCollectionManDetailsDataList );
                this.pfCollectionManDetailsDataList.push(pfAssignedJobDetailsData);
                //for foooter in Collection Table
                this.countOFMemosCollectionTable = 0;
                this.sumOFMemosCollectionTable = 0;
                for (var i = 0; i < this.pfCollectionManDetailsDataList.length; i++) {
                    this.countOFMemosCollectionTable = this.countOFMemosCollectionTable + 1;
                    this.sumOFMemosCollectionTable = this.sumOFMemosCollectionTable + +(this.pfCollectionManDetailsDataList[i].amount);
                }
            }
        }
    };
    PaymentFollowupComponent.prototype.callTempoForLess = function () {
        //        commented by basha on 10/08/2020
        //        this.isLessClicked = true;
        this.isLessClicked = false;
        this.viewNextBtn = false;
        this.showLessLbl = true;
        this.nextEntryType = 'Less Entry';
        //    console.log( 'sa1' );
        this.showChqLbl = false;
        this.showNEFTLbl = false;
        this.showCashLbl = false;
        this.showNextBtnInAssign = false;
        this.viewShowNexInAssingBtn2 = true;
        this.lessEntriesDataTableDataList = [];
        this.countOfLessLR = 0;
        this.sumOfLessAmt = 0;
        //  console.log( this.userDataDtosLessTemp );
    };
    PaymentFollowupComponent.prototype.callTempoForLessForDataTable = function () {
        this.isLessClicked = true;
        this.getLessDetailsOnClickFromTemp();
    };
    PaymentFollowupComponent.prototype.getLessDetailsOnClickFromTemp = function () {
        //    console.log( '' );
        this.isEdit = false;
        var totalLess = this.lblTotLessSummaryValue == '' ? 0 : this.lblTotLessSummaryValue;
        $("#totalLess").val(totalLess);
        this.countOfLessLR = 0;
        this.sumOfLessAmt = 0;
        this.lessEntriesDataTableDataList = [];
        this.newAttribute = {};
        // console.log( this.userDataDtosLessTemp );
        for (var i = 0; i < this.userDataDtosLessTemp.length; i++) {
            var balanceAmt = this.userDataDtosLessTemp[i].amount - (this.userDataDtosLessTemp[i].paymentAmt == null ? 0.0 : this.userDataDtosLessTemp[i].paymentAmt);
            this.newAttribute.chqType = this.userDataDtosLessTemp[i].memoNumber;
            this.newAttribute.chqNumber = this.userDataDtosLessTemp[i].paymentType;
            this.newAttribute.chqAmount = this.userDataDtosLessTemp[i].paymentAmt;
            this.newAttribute.cashMemoAmt = this.userDataDtosLessTemp[i].amount;
            this.newAttribute.balance = balanceAmt;
            this.newAttribute.mainStation = this.userDataDtosLessTemp[i].mainStation;
            this.newAttribute.consigneeId = this.userDataDtosLessTemp[i].consigneeId;
            this.newAttribute.consigneeName = this.userDataDtosLessTemp[i].partyName;
            this.lessEntriesDataTableDataList.push(this.newAttribute);
            this.countOfLessLR = +this.countOfLessLR + 1;
            this.sumOfLessAmt = +this.sumOfLessAmt + +this.newAttribute.chqAmount;
            this.newAttribute = {};
        }
    };
    PaymentFollowupComponent.prototype.callTempoForChq = function () {
        //   console.log( 'sa2' );
        this.viewByCash = true;
        this.viewByCashs = false;
        this.viewByChequeNumber = true;
        this.viewByChequeDate = true;
        this.viewByConsigneeBankName = true;
        this.viewByReferenceNumber = false;
        this.viewByConsigneeName = true;
        this.showNextBtn = true;
        this.payType = "Cheque";
        this.payMode = "completedcheque";
        $("#consigneeBankName").val('');
        $("#newBankName").val('');
        this.selectedConsigneeId = 0;
        this.controlConsigneeBankName.reset();
        this.showForCheckandNeft = true;
        this.viewNewBankName = false;
        //
        //        this.isLessClicked = true;
        this.viewNextBtn = false;
        this.showLessLbl = false;
        this.nextEntryType = 'Payment Entry';
        //    console.log( 'sa222' );
        this.showChqLbl = true;
        this.showNEFTLbl = true;
        this.showCashLbl = true;
        this.showNextBtnInAssign = false;
        this.viewShowNexInAssingBtn2 = true;
        this.paymentAmountEntriesDataList = [];
        this.countOfPaymentMemo = 0;
        this.sumOfMemoAmtPayment = 0;
        this.sumOfLessAmtPayment = 0;
        this.sumOfBalanceAmtPayment = 0;
        this.getChqDetailsOnClickFromTemp();
    };
    PaymentFollowupComponent.prototype.getChqDetailsOnClickFromTemp = function () {
        this.isPaymentClicked = true;
        this.isEdit = false;
        var totalLess = this.lblTotChqAmtSummaryValue == '' ? 0 : this.lblTotChqAmtSummaryValue;
        $("#totalAmountForPayment").val(totalLess);
        this.newAttributeForPayment = {};
        for (var i = 0; i < this.userDataDtosPaymentChqTemp.length; i++) {
            this.newAttributeForPayment.chqType = this.userDataDtosPaymentChqTemp[i].memoNumber;
            this.newAttributeForPayment.chqNumber = "NA";
            this.newAttributeForPayment.chqAmount = this.userDataDtosPaymentChqTemp[i].chqAmt == null ? 0 : this.userDataDtosPaymentChqTemp[i].chqAmt;
            this.newAttributeForPayment.cashMemoAmt = this.userDataDtosPaymentChqTemp[i].amount;
            this.newAttributeForPayment.balance = this.userDataDtosPaymentChqTemp[i].paymentAmt;
            //            this.newAttributeForPayment.mainStation = "NA";
            this.newAttributeForPayment.mainStation = this.userDataDtosPaymentChqTemp[i].mainStation;
            this.newAttributeForPayment.chequeno = this.userDataDtosPaymentChqTemp[i].chequeNumber;
            this.newAttributeForPayment.bankname = this.userDataDtosPaymentChqTemp[i].bankName;
            this.getChequeDate = this.userDataDtosPaymentChqTemp[i].chequeDate;
            if (this.getChequeDate == null || this.getChequeDate == '') {
                this.getChequeDate = null;
            }
            else {
                this.getChequeDate = this.datePipe.transform(this.getChequeDate, "yyyy-MM-dd");
            }
            this.newAttributeForPayment.chequedate = this.getChequeDate;
            this.newAttributeForPayment.remarks = this.userDataDtosPaymentChqTemp[i].features;
            this.newAttributeForPayment.consigneeId = this.userDataDtosPaymentChqTemp[i].consigneeId;
            this.newAttributeForPayment.consigneeName = this.userDataDtosPaymentChqTemp[i].partyName;
            this.newAttributeForPayment.paymenttype = this.userDataDtosPaymentChqTemp[i].type;
            this.paymentAmountEntriesDataList.push(this.newAttributeForPayment);
            this.countOfPaymentMemo = +this.countOfPaymentMemo + 1;
            this.sumOfMemoAmtPayment = +this.sumOfMemoAmtPayment + +this.newAttributeForPayment.cashMemoAmt;
            this.sumOfLessAmtPayment = +this.sumOfLessAmtPayment + +this.newAttributeForPayment.chqAmount;
            this.sumOfBalanceAmtPayment = +this.sumOfBalanceAmtPayment + +this.newAttributeForPayment.balance;
            this.newAttributeForPayment = {};
            this.getChequeDate = '';
        }
        $("#paymentMode").val('cheque');
    };
    PaymentFollowupComponent.prototype.callTempoForNEFT = function () {
        this.viewByCash = true;
        this.viewByCashs = false;
        this.viewByChequeNumber = false;
        this.viewByChequeDate = false;
        this.viewByConsigneeBankName = true;
        this.viewByReferenceNumber = true;
        this.viewByConsigneeName = true;
        this.showNextBtn = true;
        this.payType = "NEFT/IMPS";
        this.payMode = "completedneft";
        $("#consigneeBankName").val('');
        $("#newBankName").val('');
        this.selectedConsigneeId = 0;
        this.controlConsigneeBankName.reset();
        this.showForCheckandNeft = true;
        this.viewNewBankName = false;
        //
        //        this.isLessClicked = true;
        this.viewNextBtn = false;
        this.showLessLbl = false;
        this.nextEntryType = 'Payment Entry';
        //   console.log( 'sa222' );
        this.showChqLbl = true;
        this.showNEFTLbl = true;
        this.showCashLbl = true;
        this.showNextBtnInAssign = false;
        this.viewShowNexInAssingBtn2 = true;
        this.paymentAmountEntriesDataList = [];
        this.countOfPaymentMemo = 0;
        this.sumOfMemoAmtPayment = 0;
        this.sumOfLessAmtPayment = 0;
        this.sumOfBalanceAmtPayment = 0;
        this.getNEFTDetailsOnClickFromTemp();
    };
    PaymentFollowupComponent.prototype.getNEFTDetailsOnClickFromTemp = function () {
        this.isPaymentClicked = true;
        this.isEdit = false;
        var totalLess = this.lblTotNeftAmtSummaryValue == '' ? 0 : this.lblTotNeftAmtSummaryValue;
        $("#totalAmountForPayment").val(totalLess);
        this.newAttributeForPayment = {};
        for (var i = 0; i < this.userDataDtosPaymentNeftTemp.length; i++) {
            this.newAttributeForPayment.chqType = this.userDataDtosPaymentNeftTemp[i].memoNumber;
            this.newAttributeForPayment.chqNumber = "NA";
            this.newAttributeForPayment.chqAmount = this.userDataDtosPaymentNeftTemp[i].chqAmt == null ? 0 : this.userDataDtosPaymentNeftTemp[i].chqAmt;
            this.newAttributeForPayment.cashMemoAmt = this.userDataDtosPaymentNeftTemp[i].amount;
            this.newAttributeForPayment.balance = this.userDataDtosPaymentNeftTemp[i].paymentAmt;
            //            this.newAttributeForPayment.mainStation = "NA";
            this.newAttributeForPayment.mainStation = this.userDataDtosPaymentNeftTemp[i].mainStation;
            this.newAttributeForPayment.chequeno = this.userDataDtosPaymentNeftTemp[i].chequeNumber;
            this.newAttributeForPayment.bankname = this.userDataDtosPaymentNeftTemp[i].bankName;
            this.getChequeDate = this.userDataDtosPaymentNeftTemp[i].chequeDate;
            if (this.getChequeDate == null || this.getChequeDate == '') {
                this.getChequeDate = null;
            }
            else {
                this.getChequeDate = this.datePipe.transform(this.getChequeDate, "yyyy-MM-dd");
            }
            this.newAttributeForPayment.chequedate = this.getChequeDate;
            this.newAttributeForPayment.remarks = this.userDataDtosPaymentNeftTemp[i].features;
            this.newAttributeForPayment.consigneeId = this.userDataDtosPaymentNeftTemp[i].consigneeId;
            this.newAttributeForPayment.consigneeName = this.userDataDtosPaymentNeftTemp[i].partyName;
            this.newAttributeForPayment.paymenttype = this.userDataDtosPaymentNeftTemp[i].type;
            this.paymentAmountEntriesDataList.push(this.newAttributeForPayment);
            this.countOfPaymentMemo = +this.countOfPaymentMemo + 1;
            this.sumOfMemoAmtPayment = +this.sumOfMemoAmtPayment + +this.newAttributeForPayment.cashMemoAmt;
            this.sumOfLessAmtPayment = +this.sumOfLessAmtPayment + +this.newAttributeForPayment.chqAmount;
            this.sumOfBalanceAmtPayment = +this.sumOfBalanceAmtPayment + +this.newAttributeForPayment.balance;
            this.newAttributeForPayment = {};
            this.getChequeDate = '';
        }
        $("#paymentMode").val('neft');
    };
    PaymentFollowupComponent.prototype.callTempoForCash = function () {
        this.viewByCash = true;
        this.viewByCashs = true;
        this.viewByChequeNumber = false;
        this.viewByChequeDate = false;
        this.viewByConsigneeBankName = false;
        this.viewByReferenceNumber = false;
        this.viewByConsigneeName = false;
        this.showNextBtn = true;
        this.controlConsigneeBankName.reset();
        $("#consigneeBankName").val('');
        $("#newBankName").val('');
        this.selectedConsigneeId = 0;
        this.payType = "Cash";
        this.payMode = "completedcash";
        this.showForCheckandNeft = false;
        this.viewNewBankName = false;
        $("#paymentMode").val('cash');
        this.isEdit = false;
        var totalLess = this.lblTotCashAmtSummaryValue == '' ? 0 : this.lblTotCashAmtSummaryValue;
        $("#totalAmountForPayment").val(totalLess);
        this.setCashAmt();
        //    console.log( this.getCashValDto );
    };
    PaymentFollowupComponent.prototype.setCashAmt = function () {
        for (var i = 0; i < this.userDataDtosPaymentCashTemp.length; i++) {
            this.twoThousandRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof2000Count;
            $("#twoThousandRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF2000);
            $("#fiveHundredRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF500);
            $("#twoHundredRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF200);
            $("#hundredRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF100);
            $("#fiftyRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF50);
            $("#twentyRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF20);
            $("#tenRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF10);
            $("#fiveRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF5);
            $("#twoRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF2);
            $("#oneRupee").val(this.userDataDtosPaymentCashTemp[i].nfOF1);
            $("#twoThousandRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof2000Count);
            $("#fiveHundredRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof500Count);
            $("#twoHundredRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof200Count);
            $("#hundredRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof100Count);
            $("#fiftyRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof50Count);
            $("#twentyRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof20Count);
            $("#tenRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof10Count);
            $("#fiveRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof5Count);
            $("#twoRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof2Count);
            $("#oneRupeeCount").val(this.userDataDtosPaymentCashTemp[i].nfof1Count);
            $("#totalRupeeDenomination").val(this.userDataDtosPaymentCashTemp[i].grandTotal);
        }
    };
    PaymentFollowupComponent.prototype.setCashAmtModel = function () {
        for (var i = 0; i < this.userDataDtosPaymentCashTemp.length; i++) {
            this.twoThousandRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof2000Count;
            this.fiveHundredRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof500Count;
            this.twoHundredRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof200Count;
            this.hundredRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof100Count;
            this.fiftyRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof50Count;
            this.twentyRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof20Count;
            this.tenRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof10Count;
            this.fiveRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof5Count;
            this.twoRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof2Count;
            this.oneRupeeCountModel = this.userDataDtosPaymentCashTemp[i].nfof1Count;
            this.twoThousandRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF2000;
            this.fiveHundredRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF500;
            this.twoHundredRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF200;
            this.hundredRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF100;
            this.fiftyRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF50;
            this.twentyRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF20;
            this.tenRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF10;
            this.fiveRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF5;
            this.twoRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF2;
            this.oneRupeeModel = this.userDataDtosPaymentCashTemp[i].nfOF1;
        }
    };
    PaymentFollowupComponent.prototype.clearALLFieldsAfterCompelte = function () {
        this.pfAssignedJobDetailsDataList = [];
        this.tempstore = [];
        this.tempStoreDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.controlCollectionMan.reset();
        this.controlCollectionManAssign.reset();
        $("#consigneeBankName").val('');
        this.selectedConsigneeId = 0;
        $("#newBankName").val('');
        this.controlConsigneeBankName.reset();
        this.viewNewBankName = false;
        this.clearAllAfterBtnFinish();
        this.userDataDtoForStatusRet = '';
        this.memoNum = '';
        this.selectedActionType = '';
        this.selectedEntryType = '';
        this.selectedCodeForManual = '';
        this.selectedMemoNumberForManual = '';
        this.selectedMemoNumberForAutomatic = '';
        this.modelForSearched = '';
        this.letValueofCollectionMan = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getsearchInCollectionManTableFoDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoForDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoInfo = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoDup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.searchedMemoForMemoAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getsearchInCollectionManTableForAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoAlreadyExist = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.setValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getValueofSearchInCollectionManTableFoAlreadyExistToParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.letValueofSearchInCollectionManTableFoAlreadyExistParty = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getCashValDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.modelAlreadyExist = '';
        this.modelDup = '';
        this.countOfAssignLR = 0;
        this.sumOfAssignLR = 0;
        this.consigneeeName = '';
        this.consigneeExist = false;
        this.countOFMemosCollectionTable = 0;
        this.sumOFMemosCollectionTable = 0;
        this.newAttForColTable = {};
        this.pfCollectionManDetailsDataList = [];
        this.pfCollectionManDetailsDataListForSearch = [];
        this.userDataDtoForLRAssign = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.selectedCollectionMan = '';
        this.selectedCollectionManAssign = '';
        this.listOfLrNumber = [];
        this.userDataDtoForLRAssignSRDStock = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForLRStatusBack = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForLRToPartySRDStock = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForLRToParty = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForLRFinish = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.selectedCollectionMan = '';
        this.enteredCompletedOnDate = '';
        $("#completedOnDate").val('');
        this.enteredTotalLess = '';
        $("#totalLess").val('');
        this.enteredLessAmt = '';
        this.enteredAmt = 0.0;
        this.clickedRowAmt = 0.0;
        this.totalAmt = 0.0;
        this.totalBalAmt = 0.0;
        this.enteredAmt = 0.0;
        this.clickedRowAmt = 0.0;
        this.balanceAmountFinal = 0.0;
        this.amountToBeCollected = 0.0;
        this.letValueofMemoFrmAssingedTableAny = [];
        this.lrDtoForGroupStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.lrDtoForGroupStationRet = '';
        this.lrDtoForGroupStationSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.newAttribute = {};
        this.newAttributeForTDS = {};
        this.newAttributeForPayment = {};
        this.newAttributeForConsigneeWiseBalance = {};
        this.editTableId = null;
        this.editTableIdForPayment = null;
        this.slashSplitMemo = [];
        this.maintenanceCompletedLessLrs = [];
        this.maintenanceCompletedLrs = [];
        this.countOfLessLR = 0;
        this.sumOfLessAmt = 0;
        this.editlessamount = 0;
        this.getConsingeewisememoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.getConsingeewisememoAny = '';
        this.isDuplicateBulkLess = false;
        this.tdsBulkTotMemoAmt = 0.0;
        this.listOfMemoNumber = [];
        this.cashMemoDtoForTDS = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.cashMemoDtoForTDSRet = [];
        this.statusBackMemoNumber = '';
        this.letValueofSearchInAssingedTableForStatusBack = [];
        this.userDataDtosLessTemp = [];
        this.userDataDtosPaymentChqTemp = [];
        this.userDataDtosPaymentNeftTemp = [];
        this.userDataDtoForStatusBack = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForStatusBackRet = '';
        this.userDataDtoForStatusRet = '';
        this.lblDelhiLessValue = '';
        this.lblMumLessValue = '';
        this.lblGujLessValue = '';
        this.lblPjbLessValue = '';
        this.lblTDSLessValue = '';
        this.lblClaimLessValue = '';
        this.lblTotLessSummaryValue = '';
        this.lblTotChqAmtSummaryValue = '';
        this.lblTotNeftAmtSummaryValue = '';
        this.lblTotCashAmtSummaryValue = '';
        this.userDataDtoForLess = [];
        this.userDataDtoForPayment = [];
        this.userDataDtoForCash = [];
        this.userDataDtoForLessDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForPaymentDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForPaymentCashDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.isLessClicked = false;
        this.isPaymentClicked = false;
        this.viewNextBtn = false;
        this.userDataDtoForBankDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForBankDetailsRet = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.viewNewBankName = false;
        this.selectedEntryTypeForPayment = '';
        this.paymentLessManualView = true;
        this.paymentLessAutomaticView = false;
        this.viewByConsigneeName = false;
        this.selectedPaymentMode = '';
        this.showNextBtn = false;
        this.payType = '';
        this.payMode = '';
        this.letValueofMemoExistInPaymentEntryTableAny = [];
        this.countOfAssignLR = 0;
        this.sumOfAssignLR = 0;
        this.userDataDtoForChq = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.userDataDtoForChqRet = '';
        this.balanceAmtInAddingTable = 0;
        this.getChequeDate = '';
        this.countOfPaymentMemo = 0;
        this.sumOfMemoAmtPayment = 0;
        this.sumOfLessAmtPayment = 0;
        this.sumOfBalanceAmtPayment = 0;
        this.editMemoAmtForPayment = 0;
        this.editLessAmtForPayment = 0;
        this.editBalanceAmtForPayment = 0;
        this.selectedBankName = '';
        this.userDataDtoForBankName = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.enteredNewBankName = '';
        this.enteredCheckNumber = '';
        this.enteredRefNumber = '';
        this.viewFinishBtn = true;
        this.viewShowNexInAssingBtn = false;
        this.viewShowNexInAssingBtn2 = false;
        this.showNextBtnInAssign = false;
        this.showForCheckandNeft = false;
        this.userDataDtoForFinishDetails = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_10__["UserDataDto"]();
        this.isDuplicateChq = false;
        this.lrDtoForValidateChq = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_15__["LRDto"]();
        this.retrunStatus = '';
        this.diffLessRet = '';
        this.validateChqRet = '';
        this.getChallanPrintValDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.lessDescOpt = [];
        this.lessDescOptSent = [];
        this.viewChallanRptPrint = false;
        this.collectionManTP = '';
        this.countTp = '';
        this.stationForCode = '';
        this.consigneeWiseBalancelDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.consigneeWiseBalancelDtoForUpdate = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.consigneeWiseBalancelRet = '';
        this.countOfConsingeeWiseMemo = 0;
        this.sumOfConsingeeWiseTotalCashMemo = 0;
        this.sumOfConsingeeWiseGrandTotal = 0;
        this.sumOfConsingeeWisePartyLessDed = 0;
        this.sumOfConsingeeWiseAdvChqAmt = 0;
        this.sumOfConsingeeWiseNeftAmtl = 0;
        this.sumOfConsingeeWiseBalance = 0;
        this.countOFMemosCollectionTable = 0;
        this.sumOFMemosCollectionTable = 0;
        this.setCollectionDetails = 'old';
        this.setAssingedDetails = 'old';
        this.newAttForColTable = {};
        this.modelAllRemove = '';
        this.tempStoreForRemove = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_14__["CashMemoDto"]();
        this.consigneeWiseTrigger = 'old';
        this.showLessLbl = false;
        this.showChqLbl = false;
        this.showNEFTLbl = false;
        this.countOFMemosCollectionTable = 0;
        this.sumOFMemosCollectionTable = 0;
        this.isLessClicked = true;
        this.isEdit = false;
        this.addInTable = false;
        this.viewNextBtn = false;
        this.grandTotalForCash = '';
        this.showCashLbl = false;
        this.userDataDtosPaymentCashTemp = [];
        this.showCashLblAmt = false;
        $("#actionType").val('');
        $("#collectionMan").val('');
        this.enteredCollectionMan = '';
        $("#entryType").val('manual');
        $("#station").val('');
        $("#codeForManual").val('');
        $("#memoNumberForManual").val('');
        $("#memoNumberForAutomatic").val('');
        this.manualView = true;
        this.automaticView = false;
        $("#completedOnDa t e").val('');
        this.tdyCompletedOnDate = '';
        $("#collectionManAssig n ").val('');
        this.enteredCollectionManAssign = '';
        $("#collectionManToParty").val('');
        this.enteredCollectionManToParty = '';
        $("#consigneeName").val('');
        $("#totalLess").val('');
        $("#totalMemoForTDS").val('');
        $("#memoAmountForTDS").val('');
        $("#lessForTDS").val('');
        $("#tdsLessTwoPer").val('');
        $("#entryLessEntryType").val('entryLessManual');
        $("#entryLessStation").val('');
        this.entryLessManualView = true;
        this.entryLessAutomaticView = false;
        $("#codeForManualLess").val('');
        $("#memoNumberForManualLess").val('');
        $("#memoNumberForAutomaticLess").val('');
        $("#lessType").val('');
        $("#entryLessAmount").val('');
        $("#hiddenIndexForLessEntry").val('');
        $("#paymentMode").val('select');
        $("#consigneeNameForPayment").val('');
        $("#totalAmountForPayment").val('');
        $("#chequeNumber").val('');
        $("#chequeDate").val('');
        $("#consigneeNameForPayment").val('');
        $("#consigneeBankName").val('');
        $("#newBankName").val('');
        $("#referenceNumber").val('');
        $("#totalRupeeDenomination").val('');
        $("#entryLessPaymentEntry").val('paymentLessManual');
        $("#paymentLessStn").val('');
        $("#codeForManualLessPayment").val('');
        $("#memoNumberForManualLessPayment").val('');
        $("#memoNumberForAutomaticLessPayment").val('');
        $("#paymentLessAmount").val('');
        $("#hiddenIndexForPaymentEntry").val('');
        $("#cashmemoNumberForStatusBack").val('');
        this.viewByCash = false;
        this.viewByCashs = false;
        this.viewByChequeNumber = false;
        this.viewByChequeDate = false;
        this.viewByConsigneeBankName = false;
        this.viewByReferenceNumber = false;
        this.viewByConsigneeName = false;
        this.modelConsigneeName = '';
        this.modelConsigneeNameForPayment = '';
        this.showSpinner = false;
        this.selectTodayCompletedOnDate();
        this.showResetBtn = true;
        this.lessEntriesDataTableDataList = [];
        this.paymentAmountEntriesDataList = [];
        this.modelStationForPayment = '';
        this.modelStationForPaymentAmt = '';
        this.modelStationForLess = '';
        this.modelStationForLessAmt = '';
        this.modelStationName = '';
        this.setLessEntryDetails = 'old';
        this.setPaymentEntryDetails = 'old';
        this.modelPartyBankName = '';
        this.twoThousandRupeeCountModel = '';
        this.twoThousandRupeeModel = '';
        this.fiveHundredRupeeCountModel = '';
        this.fiveHundredRupeeModel = '';
        this.twoHundredRupeeCountModel = '';
        this.twoHundredRupeeModel = '';
        this.hundredRupeeCountModel = '';
        this.hundredRupeeModel = '';
        this.fiftyRupeeCountModel = '';
        this.fiftyRupeeModel = '';
        this.twentyRupeeCountModel = '';
        this.twentyRupeeModel = '';
        this.tenRupeeCountModel = '';
        this.tenRupeeModel = '';
        this.fiveRupeeCountModel = '';
        this.fiveRupeeModel = '';
        this.twoRupeeCountModel = '';
        this.twoRupeeModel = '';
        this.oneRupeeCountModel = '';
        this.oneRupeeModel = '';
        this.modelCollectionManName = '';
        //        window.location.href = "/cashmemo/paymentFollowup";
    };
    PaymentFollowupComponent.prototype.resetAll = function () {
        this.clearALLFieldsAfterCompelte();
        this.consigneeWiseDetails = false;
        this.showResetBtn = false;
        this.modelActionType = '';
        //        console.log(this.setLessEntryDetails);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PaymentFollowupComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceCollectionMan'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"])
    ], PaymentFollowupComponent.prototype, "instanceCollectionMan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('collectionManAssign'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"])
    ], PaymentFollowupComponent.prototype, "collectionManAssign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('collectionManToParty'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"])
    ], PaymentFollowupComponent.prototype, "collectionManToParty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceStation'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"])
    ], PaymentFollowupComponent.prototype, "instanceStation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceEntryLessStation'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"])
    ], PaymentFollowupComponent.prototype, "instanceEntryLessStation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paymentLessStn'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"])
    ], PaymentFollowupComponent.prototype, "paymentLessStn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceConsigneeBankName'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"])
    ], PaymentFollowupComponent.prototype, "instanceConsigneeBankName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceActionType'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"])
    ], PaymentFollowupComponent.prototype, "instanceActionType", void 0);
    PaymentFollowupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-followup',
            template: __webpack_require__(/*! ./payment-followup.component.html */ "./src/app/cashmemo/payment-followup/payment-followup.component.html"),
            styles: [__webpack_require__(/*! ./payment-followup.component.css */ "./src/app/cashmemo/payment-followup/payment-followup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_7__["MemoService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__["MasterReadService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], src_app_dataService_consignor_service__WEBPACK_IMPORTED_MODULE_2__["ConsignorService"]])
    ], PaymentFollowupComponent);
    return PaymentFollowupComponent;
}());



/***/ }),

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
//# sourceMappingURL=default~src-app-cashmemo-cashmemo-module~src-app-dashboards-dashboard-module~src-app-report-cashmemo~24d2fb5c.js.map