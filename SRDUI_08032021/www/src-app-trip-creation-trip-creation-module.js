(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-trip-creation-trip-creation-module"],{

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

/***/ "./src/app/dto/SupplierDetails-dto.ts":
/*!********************************************!*\
  !*** ./src/app/dto/SupplierDetails-dto.ts ***!
  \********************************************/
/*! exports provided: SupplierDetailsDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierDetailsDto", function() { return SupplierDetailsDto; });
var SupplierDetailsDto = /** @class */ (function () {
    function SupplierDetailsDto() {
    }
    return SupplierDetailsDto;
}());



/***/ }),

/***/ "./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n::ng-deep .mat-horizontal-stepper-header {\r\n\tpointer-events: none !important;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi9oYW1hbGktZGV0YWlsLXJlcG9ydC9oYW1hbGktZGV0YWlsLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0NBQ0MsZ0NBQWdDO0NBQ2hDOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvdHJpcC1jcmVhdGlvbi9oYW1hbGktZGV0YWlsLXJlcG9ydC9oYW1hbGktZGV0YWlsLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdHRvcDogMjZweDtcclxuICAgIGxlZnQ6IDE4OHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\r\n<head>\r\n\t<style>\r\n\t\t.imb_patch {\r\n\t\t\ttext-align: center;\r\n\t\t\tbackground-color: orange;\r\n\t\t\tpadding: 2px;\r\n\t\t}\r\n\t</style>\r\n</head>\r\n\r\n<body>\r\n\t<div mat-dialog-content>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-university\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input id=\"adminStationSource\" type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForAdminStationSource($event)\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelAdminStationSource\" [ngbTypeahead]=\"searchAdminStationSource\"\r\n\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterAdminStationSource\"\r\n\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterAdminStationSource\" placeholder=\"Select Source\"\r\n\t\t\t\t\t\t\t\t\t(focus)=\"focusAdminStationSourceTA$.next($any($event).target.value)\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-search\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"hamaliType\" name=\"hamaliType\" #hamaliType\r\n\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForHamaliType($event.keyCode)\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"Loading Hamali\">Loading Hamali</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Unloading Hamali\">Unloading Hamali</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Thappi\">Thappi</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t\t<div class=\"control\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-university\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<input id=\"hamaliValue\" type=\"text\" class=\"form-control\" autocomplete=\"off\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Hamali Value\"\r\n\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForHamaliValue($event.keyCode)\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' id=\"addInTableOtherChargeBtnId\" #addBtn\r\n\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" class=\"btn btn-icon-only yellow\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"addInTableOfHamaliDetailsTable();\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\" title=\"Add\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t\t\t<table datatable id=\"hamaliDetailTableId\"\r\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHamali\" [dtTrigger]=\"dtTriggerHamali\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Hamali</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Hamali Value</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let gridTosetHamali of gridTosetHamaliList let i = index\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedHamaliDataOnEdit(gridTosetHamali,i);\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ gridTosetHamali.source }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ gridTosetHamali.hamaliType }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ gridTosetHamali.hamaliValue }}</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div mat-dialog-actions style=\"float: right;\">\r\n\t\t<button class=\"btn btn-outline-danger\" mat-button (click)=\"onCancelClick()\">Cancel</button>\r\n\t</div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HamaliDetailReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamaliDetailReportComponent", function() { return HamaliDetailReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
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
/*import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';
import { NgbModule, NgbModalRef, NgbModal, ModalDismissReasons, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { ElementRef } from "@angular/core";
import { ReportService } from 'src/app/dataService/report-service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { filter } from "rxjs/internal/operators/filter";
import { PartyMasterDto } from "src/app/dto/PartyMaster-dto";
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { MasterReadService } from "src/app/dataService/masterread-service";
const my = new Date();
import { Subject, Subscription, merge } from 'rxjs';
import { DataTableDirective } from "angular-datatables";
import { CashMemoDto } from 'src/app/dto/CashMemo-dto';
import { MemoReport } from 'src/app/dataService/memo-report';
import *  as moment from 'moment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HireSlipDto } from 'src/app/dto/HireSlip-dto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
export interface DialogData {
    animal: string;
    name: string;
}*/


//for datatable starts



//from the particular global folder ends
//for datatable ends
//for modal starts




var my = new Date();




//for modal ends
var HamaliDetailReportComponent = /** @class */ (function () {
    function HamaliDetailReportComponent(memoLessRpt, router, masterReadService, memoReport, modalService, dialogRef, data) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dtTriggerHamali = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.loadingIndicator = true;
        /* DROP DOWN */
        this.adminStationSourceHireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.adminStationSourceTA = [];
        this.focusAdminStationSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchAdminStationSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusAdminStationSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (term) { return (term === '' ? _this.adminStationSourceTA
                : _this.adminStationSourceTA.filter(function (v) { return v.branch.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterAdminStationSource = function (x) { return x.branch; };
        /* DROP DOWN */
        this.newAttributeTosetHamaliDetails = {};
        this.editHamaliTableDetailsId = null;
        this.setAdminStationSourceDetails = function () {
            _this.adminStationSourceHireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
            _this.adminStationSourceHireSlipDto.companyid = _this.userDataDtoReturnSession.companyId;
            _this.adminStationSourceHireSlipDto.mainStation = _this.userDataDtoReturnSession.mainAdminStation;
            _this.masterReadService.getAdminStationsBranch(_this.adminStationSourceHireSlipDto).subscribe(function (response) {
                if (response.length == 0) {
                    _this.adminStationSourceTA = [];
                    _this.adminStationSourceOption = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Admin Station  records found!", "warning");
                }
                else {
                    _this.adminStationSourceTA = [];
                    _this.adminStationSourceOption = [];
                    _this.adminStationSourceOption = response;
                    for (var i = 0; i < _this.adminStationSourceOption.length; i++) {
                        _this.adminStationSourceTA.push(_this.adminStationSourceOption[i]);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
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
            this.popUpOpenHamaliData = JSON.parse(localStorage.getItem('HamaliPopUpOpen'));
            localStorage.clear();
            console.log(this.popUpOpenHamaliData);
            this.setAdminStationSourceDetails();
        }
    }
    HamaliDetailReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    HamaliDetailReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                //this.dtTriggerMemoLessDescriptionDetails.next();
            });
        });
    };
    HamaliDetailReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsHamali = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            searching: false,
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 350,
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
                var discAmt = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                //$(api.column(0).footer()).html('Total : ' + data.length);
                //$(api.column(1).footer()).html(discAmt);
            },
        };
    };
    HamaliDetailReportComponent.prototype.ngOnDestroy = function () {
        //this.dtTriggerHamalis.unsubscribe();
    };
    HamaliDetailReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerHamali.next();
    };
    HamaliDetailReportComponent.prototype.onKeyPressFieldForHamaliType = function (event) {
        if (event.charCode == '13') {
            $("#hamaliValue").focus();
        }
    };
    HamaliDetailReportComponent.prototype.onKeyPressFieldForHamaliValue = function (event) {
        console.log(event);
        if (event == '13') {
            if (($("#adminStationSource").val() == null) || ($("#adminStationSource").val() == undefined) ||
                ($("#adminStationSource").val() == "") || ($("#hamaliType").val() == null) ||
                ($("#hamaliType").val() == undefined) || ($("#hamaliType").val() == "") ||
                ($("#hamaliValue").val() == null) || ($("#hamaliValue").val() == undefined) ||
                ($("#hamaliValue").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "Please enter all the details to proceed", "warning");
                return false;
            }
            else {
                this.gridReconfigureHamaliDetails();
            }
        }
    };
    HamaliDetailReportComponent.prototype.addInTableOfHamaliDetailsTable = function () {
        if (($("#adminStationSource").val() == null) || ($("#adminStationSource").val() == undefined) ||
            ($("#adminStationSource").val() == "") || ($("#hamaliType").val() == null) ||
            ($("#hamaliType").val() == undefined) || ($("#hamaliType").val() == "") ||
            ($("#hamaliValue").val() == null) || ($("#hamaliValue").val() == undefined) ||
            ($("#hamaliValue").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "Please enter all the details to proceed", "warning");
            return false;
        }
        else {
            this.gridReconfigureHamaliDetails();
        }
    };
    HamaliDetailReportComponent.prototype.clickListnerForAdminStationSource = function (e, fubi) {
        this.modelAdminStationSource = e.item;
        $("#adminStationSource").val(this.modelAdminStationSource.branch);
        $("#hamaliType").focus();
    };
    HamaliDetailReportComponent.prototype.gridReconfigureHamaliDetails = function () {
        var _this = this;
        this.newAttributeTosetHamaliDetails.source = $("#adminStationSource").val();
        this.newAttributeTosetHamaliDetails.hamaliType = $("#hamaliType").val();
        this.newAttributeTosetHamaliDetails.hamaliValue = $("#hamaliValue").val();
        if (this.editHamaliTableDetailsId != null &&
            this.editHamaliTableDetailsId != undefined) {
            this.gridTosetHamaliList.splice(this.editHamaliTableDetailsId, 1);
        }
        if (this.gridTosetHamaliList == null || this.gridTosetHamaliList == undefined ||
            this.gridTosetHamaliList.length == 0) {
            this.gridTosetHamaliList = [];
        }
        if (this.gridTosetHamaliList.length == 0) {
            $("#hamaliDetailTableId").DataTable().destroy();
            this.gridTosetHamaliList.push(this.newAttributeTosetHamaliDetails);
            this.dtTriggerHamali.next();
        }
        else {
            console.log(this.newAttributeTosetHamaliDetails);
            console.log(this.gridTosetHamaliList);
            var result = this.gridTosetHamaliList.filter(function (gridTosetHamaliData) {
                return gridTosetHamaliData.source === _this.newAttributeTosetHamaliDetails.source &&
                    gridTosetHamaliData.hamaliType === _this.newAttributeTosetHamaliDetails.hamaliType;
            });
            //console.log( result );
            if (result.length > 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Duplicate Entry", "Duplicate Value Entered..Please recheck", "warning");
            }
            else {
                $("#hamaliDetailTableId").DataTable().destroy();
                this.gridTosetHamaliList.push(this.newAttributeTosetHamaliDetails);
                this.dtTriggerHamali.next();
            }
        }
        //clear
        this.newAttributeTosetHamaliDetails = {};
        this.modelAdminStationSource = null;
        $("#adminStationSource").val('');
        $("#hamaliType").val('');
        $("#hamaliValue").val('');
        this.editHamaliTableDetailsId = null;
    };
    HamaliDetailReportComponent.prototype.rowSelectedHamaliDataOnEdit = function (editHamaliData, index) {
        console.log(editHamaliData);
        $("#adminStationSource").val(editHamaliData.source);
        $("#hamaliType").val(editHamaliData.hamaliType);
        $("#hamaliValue").val(editHamaliData.hamaliValue);
        this.editHamaliTableDetailsId = index;
    };
    HamaliDetailReportComponent.prototype.onCancelClick = function () {
        this.dialogRef.close(JSON.stringify(this.gridTosetHamaliList));
        localStorage.clear();
        this.popUpOpenHamaliData = null;
        console.log(this.popUpOpenHamaliData);
        console.log(localStorage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HamaliDetailReportComponent.prototype, "dtElements", void 0);
    HamaliDetailReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hamali-detail-report',
            template: __webpack_require__(/*! ./hamali-detail-report.component.html */ "./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.html"),
            styles: [__webpack_require__(/*! ./hamali-detail-report.component.css */ "./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_10__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_4__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], HamaliDetailReportComponent);
    return HamaliDetailReportComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\r\n\ttext-align: center;\r\n}\r\n\r\n.dsply-ib {\r\n\tdisplay: inline-block;\r\n}\r\n\r\nh6, h5, h4, h3, h2, h1, p, .custome {\r\n\tfont-size: 13.3px;\r\n\tmargin: 1px;\r\n\tpadding: 1px;\r\n\tpadding-top: 3px;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.fontS_15 {\r\n\tfont-size: 16px;\r\n\tmargin: 0px;\r\n}\r\n\r\n.fontS_13 {\r\n\tfont-size: 14px;\r\n\tmargin: 0px;\r\n\tpadding: 0px\r\n}\r\n\r\n.fontS_12 {\r\n\tfont-size: 13px;\r\n\tmargin: 0px;\r\n\tpadding: 0px\r\n}\r\n\r\n.font_bold{\r\nfont-weight:900;\r\n}\r\n\r\n.border {\r\n\tborder: 1px solid #000 !important;\r\n\tborder-collapse: collapse;\r\n\tpadding: 0px;\r\n}\r\n\r\n.dsplyNone {\r\n\tdisplay: none;\r\n}\r\n\r\n.border_right {\r\n\tborder-right: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.border_left {\r\n\tborder-left: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n\tmargin-left: -1px;\r\n}\r\n\r\n.border_bottom {\r\n\tborder-bottom: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.border_top {\r\n\tborder-top: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#sidebarnav {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#section_to_print, #section_to_print * {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t .modal-basic-title{\r\n visibility: hidden;\r\n }\r\n #closePopupBtn{\r\n visibility: hidden;\r\n }\r\n}\r\n\r\n#left, #right, div:empty {\r\n\tmin-height: 19px;\r\n}\r\n\r\n#left, div:empty {\r\n\tmin-height: 22px;\r\n}\r\n\r\n/* #left, #right, div!:empty { */\r\n\r\n/* \tmargin-top: -15px; */\r\n\r\n/* } */\r\n\r\n.sidebar-nav ul .sidebar-item {\r\n\tdisplay: none;\r\n}\r\n\r\n/* print changes */\r\n\r\n.container {\r\n\tmax-width: 97%;\r\n}\r\n\r\n@media ( min-width : 768px) {\r\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media ( min-width : 768px) {\r\n\t.col-md-3, .col-md-9 {\r\n\t\tpadding-left: 7px !important;\r\n\t}\r\n}\r\n\r\nhr {\r\n\tborder: .5px solid black;\r\n\twidth: 100%;\r\n\tmargin-left: 7px !important;\r\n\tmargin: 0px;\r\n}\r\n\r\n@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#sidebarnav {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#firstPrint, #firstPrint * {\r\n\t\tvisibility: visible;\r\n\t}\r\n/* \t.page-break { display:block; page-break-before:always; }  */\r\n    .fontStyle {\r\n\tfont-size: 20px;\r\n\tfont-family:Arial, Helvetica, sans-serif;\r\n\t}\r\n\t.fontSizeHeaderTable{\r\n\tfont-size: 20px;\r\n\tborder-bottom: 1px solid #000; \r\n\tborder-top: 1px solid #000; \r\n\tborder-left: 1px solid #000; \r\n\tword-wrap: break-word;\r\n\tfont-family:Arial, Helvetica, sans-serif;\r\n\t}\r\n\t.fontSizeBodyTable{\r\n\tfont-size: 20px;\r\n\tborder-bottom: 1px solid #000; \r\n\tborder-left: 1px solid #000; \r\n\tword-wrap: break-word;\r\n\tfont-family:Arial, Helvetica, sans-serif;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi9oaXJlc2xpcC1kZXRhaWxzLXByaW50L2hpcmVzbGlwLWRldGFpbHMtcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQiwwQ0FBMEM7Q0FDMUM7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjs7QUFDRDtBQUNBLGdCQUFnQjtDQUNmOztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQyw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQjs7RUFFQTtDQUNELG1CQUFtQjtFQUNsQjtDQUNEO0NBQ0EsbUJBQW1CO0VBQ2xCO0NBQ0Q7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQsaUNBQWlDOztBQUNqQyx5QkFBeUI7O0FBQ3pCLE9BQU87O0FBSVA7Q0FDQyxjQUFjO0NBQ2Q7O0FBQ0QsbUJBQW1COztBQUNuQjtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2Q7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MsNkJBQTZCO0VBQzdCO0NBQ0Q7O0FBRUQ7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxvQkFBb0I7RUFDcEI7QUFDRixnRUFBZ0U7SUFDNUQ7Q0FDSCxnQkFBZ0I7Q0FDaEIseUNBQXlDO0VBQ3hDO0NBQ0Q7Q0FDQSxnQkFBZ0I7Q0FDaEIsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLHlDQUF5QztFQUN4QztDQUNEO0NBQ0EsZ0JBQWdCO0NBQ2hCLDhCQUE4QjtDQUM5Qiw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLHlDQUF5QztFQUN4QztDQUNEIiwiZmlsZSI6InNyYy9hcHAvdHJpcC1jcmVhdGlvbi9oaXJlc2xpcC1kZXRhaWxzLXByaW50L2hpcmVzbGlwLWRldGFpbHMtcHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eHRfYWMge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRzcGx5LWliIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmg2LCBoNSwgaDQsIGgzLCBoMiwgaDEsIHAsIC5jdXN0b21lIHtcclxuXHRmb250LXNpemU6IDEzLjNweDtcclxuXHRtYXJnaW46IDFweDtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblx0cGFkZGluZy10b3A6IDNweDtcclxuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvbnRTXzE1IHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5mb250U18xMyB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweFxyXG59XHJcblxyXG5cclxuLmZvbnRTXzEyIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4XHJcbn1cclxuLmZvbnRfYm9sZHtcclxuZm9udC13ZWlnaHQ6OTAwO1xyXG59XHJcbi5ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmRzcGx5Tm9uZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJvcmRlcl9yaWdodCB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uYm9yZGVyX2xlZnQge1xyXG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG59XHJcblxyXG4uYm9yZGVyX2JvdHRvbSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmJvcmRlcl90b3Age1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcblx0Ym9keSAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3NpZGViYXJuYXYge1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHQjc2VjdGlvbl90b19wcmludCwgI3NlY3Rpb25fdG9fcHJpbnQgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdH1cclxuXHRcclxuXHQgLm1vZGFsLWJhc2ljLXRpdGxle1xyXG4gdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gfVxyXG4gI2Nsb3NlUG9wdXBCdG57XHJcbiB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiB9XHJcbn1cclxuXHJcbiNsZWZ0LCAjcmlnaHQsIGRpdjplbXB0eSB7XHJcblx0bWluLWhlaWdodDogMTlweDtcclxufVxyXG5cclxuI2xlZnQsIGRpdjplbXB0eSB7XHJcblx0bWluLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLyogI2xlZnQsICNyaWdodCwgZGl2ITplbXB0eSB7ICovXHJcbi8qIFx0bWFyZ2luLXRvcDogLTE1cHg7ICovXHJcbi8qIH0gKi9cclxuXHJcblxyXG5cclxuLnNpZGViYXItbmF2IHVsIC5zaWRlYmFyLWl0ZW0ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogcHJpbnQgY2hhbmdlcyAqL1xyXG4uY29udGFpbmVyIHtcclxuXHRtYXgtd2lkdGg6IDk3JTtcclxufVxyXG5cclxuQG1lZGlhICggbWluLXdpZHRoIDogNzY4cHgpIHtcclxuXHQjbWFpbi13cmFwcGVyW2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSAuc2lkZWJhci1uYXYgI3NpZGViYXJuYXYge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2OHB4KSB7XHJcblx0LmNvbC1tZC0zLCAuY29sLW1kLTkge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbmhyIHtcclxuXHRib3JkZXI6IC41cHggc29saWQgYmxhY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdGJvZHkgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNzaWRlYmFybmF2IHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I2ZpcnN0UHJpbnQsICNmaXJzdFByaW50ICoge1xyXG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHR9XHJcbi8qIFx0LnBhZ2UtYnJlYWsgeyBkaXNwbGF5OmJsb2NrOyBwYWdlLWJyZWFrLWJlZm9yZTphbHdheXM7IH0gICovXHJcbiAgICAuZm9udFN0eWxlIHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHR9XHJcblx0LmZvbnRTaXplSGVhZGVyVGFibGV7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyBcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDsgXHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwOyBcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHR9XHJcblx0LmZvbnRTaXplQm9keVRhYmxle1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDsgXHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwOyBcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--First Main Table Start-->\n<div class=\"page row system_responsive\" id=\"hireslipPrint\">\n\t<div class=\"col-md-12\">\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='50%' valign='top'>\n\t\t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<span>{{address}} </span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='50%' valign='top' *ngFor=\"let PS of printBarcode\">\n\t\t\t\t\t\t\t<ngx-barcode [bc-width]=\"1.5\" [bc-height]=\"27\" [bc-font-size]=\"13\" [bc-value]=\"PS.barcode\"\n\t\t\t\t\t\t\t\t[bc-display-value]=\"false\">\n\t\t\t\t\t\t\t</ngx-barcode>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<!--First Main Table End-->\n\t\t<!--Second Main Table Start-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> From </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{fromStation}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> To </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{toStation}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Hireslip No </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{hireslipNumber}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Invoice No </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{invoiceNumber}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Eway Bill </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{ewayBillNo}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Date </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{invoiceDate}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Second Main Table End-->\n\t\t<!--Third Main Table Start-->\n\t\t<br>\n\t\t<hr>\n\t\t<br>\n\t\t<u><b> The Under Mentioned Goods Have Been Loaded In </b></u>\n\t\t<br>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Lorry No </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{lorryNumber}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> PAN No </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{panNo}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Lorry Owner Name </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{lorryOwnerName}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Lorry Type </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{lorryType}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Address </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' style='word-wrap: break-word;' class='fontStyle'\n\t\t\t\t\t\t\t\t\t\talign='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{lorry_address}}</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Truck Length </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{truckLength}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Third Main Table End-->\n\n\t\t<!--Four Main Table Start-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1'\n\t\t\t\t\tstyle='table-layout: fixed;margin-top: 7px;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='25%' align='center' class='fontSizeHeaderTable' valign='top' type='text'><strong>\n\t\t\t\t\t\t\t\tTotal No. of GC </strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='25%' align='center' class='fontSizeHeaderTable' valign='top' type='number'><strong>\n\t\t\t\t\t\t\t\tArticle as per Invoice </strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='25%' align='center' class='fontSizeHeaderTable' valign='top' type='number'><strong>\n\t\t\t\t\t\t\t\tGurantee Weight </strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='25%' align='center' class='fontSizeHeaderTable' style='border-right: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Kanta Weight </strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='25%' align='center' class='fontSizeBodyTable' valign='top' type='text'><strong\n\t\t\t\t\t\t\t\tclass='fontStyle'> {{totalLrs }} </strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='25%' align='center' class='fontSizeBodyTable' valign='top' type='number'><strong\n\t\t\t\t\t\t\t\tclass='fontStyle'> {{totalArticles}} </strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='25%' align='center' class='fontSizeBodyTable' valign='top' type='number'><strong\n\t\t\t\t\t\t\t\tclass='fontStyle'> {{guranteeWgt}} </strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='25%' align='center' class='fontSizeBodyTable' style='border-right: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong class='fontStyle'> {{kantaWgt}} </strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table><br>\n\t\t\t\t<hr>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Four Main Table End-->\n\n\t\t<!--Five Main Table Start-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Broker Name </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{brokerName}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> PAN No </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{brokerPanNo}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<hr>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<!--Five Main Table End-->\n\n\t\t<!--Six Main Table Start-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Company Name </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{companyName}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Total Hire </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{totalHire}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Advance </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{advanceAmt}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' style='word-wrap: break-word;' class='fontStyle'\n\t\t\t\t\t\t\t\t\t\talign='left'>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Balance </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{balanceAmt}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> To Pay </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span>{{toPay}}</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Payable At </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{payableAt}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<hr>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<!--Six Main Table End-->\n\n\t\t<!--Seven Main Table Start-->\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Driver Name </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{driverName}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Driver Licence </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{driverLicNo}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Phone No </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{driverPhoneNo}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<hr>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<!--Seven Main Table End-->\n\n\t\t<!--Eight Main Table Start-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Departure Date </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{departureDate}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong> Departure Time </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{departureTime}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<strong>Remarks </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t\t<span> {{remarks}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' valign='top'></td>\n\t\t\t\t\t\t<td width='48%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='30%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='70%' valign='top' class='fontStyle' align='left'>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<!--<tr>\n\t\t\t\t\t\t\t\t<td width='100%' valign='top'>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'style='margin-top: 7px;'>\n\t\t\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td width='100%' valign='top'class='fontStyle'align='left'>\n\t\t\t\t\t\t\t\t\t\t\t\t   <strong *ngIf=\"hideShowForDoorCharge\">Door Charge:{{doorCharge}},</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t\t\t\t\t   <strong *ngIf=\"hideShowForVehicleHeight\">Vehicle Height:{{vehicleHeight}},</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t   <strong *ngIf=\"hideShowForDoorDelivery\">Door Delivery:{{doorDelivery}},</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t   <strong *ngIf=\"hideShowForExtraWeight\">Extra weight(Kg):{{extraWeight}},</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t\t\t\t\t   <strong *ngIf=\"hideShowForCheckPost\">Check Post:{{checkPost}}</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t\t\t\t\t   <strong *ngIf=\"hideShowForOtherCharges\">Other Charges:{{otherCharges}}</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>-->\n\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width='100%' class='fontStyle'>\n\t\t\t\t\t\t\t\t<strong *ngIf=\"hideShowForDoorCharge\">Door Charge:{{doorCharge}},</strong>\n\n\t\t\t\t\t\t\t\t<strong *ngIf=\"hideShowForVehicleHeight\">Vehicle Height:{{vehicleHeight}},</strong>\n\n\t\t\t\t\t\t\t\t<strong *ngIf=\"hideShowForDoorDelivery\">Door Delivery:{{doorDelivery}},</strong>\n\n\t\t\t\t\t\t\t\t<strong *ngIf=\"hideShowForExtraWeight\">Extra weight(Kg):{{extraWeight}},</strong>\n\n\t\t\t\t\t\t\t\t<strong *ngIf=\"hideShowForCheckPost\">Check Post:{{checkPost}}</strong>\n\n\t\t\t\t\t\t\t\t<strong *ngIf=\"hideShowForOtherCharges\">Other Charges:{{otherCharges}}</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</table>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 7px;'\n\t\t\t\t\t*ngIf=\"hideShowLRsExtraTable\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td height='25' class='fontStyle'>\n\t\t\t\t\t\t\t<strong><u>LR's Extra</u>\n\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td height='25'>\n\t\t\t\t\t\t\t<span>{{validateLrShortage}}</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-top: 5px;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='48%' *ngIf=\"hideShowForRewardTable\">\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td colspan='3' class='fontSizeHeaderTable'\n\t\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: none !important;'>\n\t\t\t\t\t\t\t\t\t\t<strong class='fontsizetable'>Reward Amount Details</strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='33%' align='center' class='fontSizeHeaderTable' valign='top' type='text'>\n\t\t\t\t\t\t\t\t\t\t<strong> From </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='33%' align='center' class='fontSizeHeaderTable' valign='top'\n\t\t\t\t\t\t\t\t\t\ttype='number'><strong class='fontsizetable'> To </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='34%' align='center' class='fontSizeHeaderTable'\n\t\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; ' valign='top' type='text'><strong> Amount\n\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='33%' align='center' class='fontSizeBodyTable' valign='top' type='text'>\n\t\t\t\t\t\t\t\t\t\t<span class='fontStyle'> {{fromTime1}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='33%' align='center' class='fontSizeBodyTable' valign='top' type='number'>\n\t\t\t\t\t\t\t\t\t\t<span class='fontStyle'> {{toTime1}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='34%' align='center' class='fontSizeBodyTable'\n\t\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; ' valign='top' type='text'><span\n\t\t\t\t\t\t\t\t\t\t\tclass='fontStyle'> {{rewardingAmount1}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='33%' align='center' class='fontSizeBodyTable' valign='top' type='text'>\n\t\t\t\t\t\t\t\t\t\t<span class='fontStyle'> {{fromTime2}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='33%' align='center' class='fontSizeBodyTable' valign='top' type='number'>\n\t\t\t\t\t\t\t\t\t\t<span class='fontStyle'> {{toTime2}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='34%' align='center' class='fontSizeBodyTable'\n\t\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; ' valign='top' type='text'><span\n\t\t\t\t\t\t\t\t\t\t\tclass='fontStyle'> {{rewardingAmount2}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='33%' align='center' class='fontSizeBodyTable' valign='top' type='text'>\n\t\t\t\t\t\t\t\t\t\t<span class='fontStyle'> {{toTime2}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='33%' align='center' class='fontSizeBodyTable' valign='top' type='number'>\n\t\t\t\t\t\t\t\t\t\t<span class='fontStyle'> and above </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='34%' align='center' class='fontSizeBodyTable'\n\t\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; ' valign='top' type='text'><span\n\t\t\t\t\t\t\t\t\t\t\tclass='fontStyle'> 0 </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='2%'>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='48%' *ngIf=\"hideShowForLRShortageTable\">\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td colspan='7' class='fontSizeHeaderTable'\n\t\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none !important;'>\n\t\t\t\t\t\t\t\t\t\t<strong class='fontsizetable'>LR Shortage Details</strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td width='15%' align='center' class='fontSizeHeaderTable' valign='top' type='text'>\n\t\t\t\t\t\t\t\t\t\t<strong> LR No </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeHeaderTable' valign='top'\n\t\t\t\t\t\t\t\t\t\ttype='number'><strong> Art </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeHeaderTable' valign='top'\n\t\t\t\t\t\t\t\t\t\ttype='number'><strong> Extra </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeHeaderTable' valign='top'\n\t\t\t\t\t\t\t\t\t\ttype='number'><strong> Open </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeHeaderTable' valign='top'\n\t\t\t\t\t\t\t\t\t\ttype='number'><strong> Short </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeHeaderTable' valign='top'\n\t\t\t\t\t\t\t\t\t\ttype='number'><strong> Wet </strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='15%' align='center' class='fontSizeHeaderTable'\n\t\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; ' valign='top' type='text'><strong> Remarks\n\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!--<tr>-->\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let listDataLrsShortage of datatableForLrsShortage\">\n\t\t\t\t\t\t\t\t\t<td width='15%' align='center' class='fontSizeBodyTable' valign='top' type='text'>\n\t\t\t\t\t\t\t\t\t\t<span> {{listDataLrsShortage.lrNumber}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeBodyTable' valign='top' type='number'>\n\t\t\t\t\t\t\t\t\t\t<span> {{listDataLrsShortage.totalArticles}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeBodyTable' valign='top' type='number'>\n\t\t\t\t\t\t\t\t\t\t<span> {{listDataLrsShortage.excessGoods}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeBodyTable' valign='top' type='number'>\n\t\t\t\t\t\t\t\t\t\t<span> {{listDataLrsShortage.openConditionGoods}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeBodyTable' valign='top' type='number'>\n\t\t\t\t\t\t\t\t\t\t<span> {{listDataLrsShortage.shortGoods}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='14%' align='center' class='fontSizeBodyTable' valign='top' type='number'>\n\t\t\t\t\t\t\t\t\t\t<span> {{listDataLrsShortage.wetConditionGoods}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td width='15%' align='center' class='fontSizeBodyTable'\n\t\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; ' valign='top' type='text'><span>\n\t\t\t\t\t\t\t\t\t\t\t{{listDataLrsShortage.remarks}} </span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Eight Main Table End-->\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.ts ***!
  \******************************************************************************************/
/*! exports provided: HireslipDetailsPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipDetailsPrintComponent", function() { return HireslipDetailsPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HireslipDetailsPrintComponent = /** @class */ (function () {
    function HireslipDetailsPrintComponent(router, datePipe) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.isLoggedIn = true;
        //summaryLRDto: LRDto = new LRDto();
        //listOfLrDto: LRDto [] =[];
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_4__["HireSlipDto"]();
        this.hireSlipDtoTimeDuration = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_4__["HireSlipDto"]();
        this.hireSlipDtoFor_LRShortage = [];
        this.listOfShortageLrs = new Array();
        this.hideShowLRsExtraTable = false;
        this.hideShowForRewardTable = false;
        this.hideShowForLRShortageTable = false;
        this.hideShowForDoorCharge = false;
        this.hideShowForVehicleHeight = false;
        this.hideShowForDoorDelivery = false;
        this.hideShowForExtraWeight = false;
        this.hideShowForCheckPost = false;
        this.hideShowForOtherCharges = false;
        this.printBarcode = [];
        this.barcodeValue = null;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? ' ' : this.userDataDtoReturnSession.addressId;
            this.hireSlipDto = JSON.parse(localStorage.getItem('hireslipDetailsPrintForHireslip_Dto'));
            this.hireSlipDtoTimeDuration = JSON.parse(localStorage.getItem('hireslipDetailsPrintForHireSlipDto'));
            this.hireSlipDtoFor_LRShortage = JSON.parse(localStorage.getItem('hireslipDetailsPrintLRShortgeForHireslip_Dto'));
            this.listOfShortageLrs = JSON.parse(localStorage.getItem('hireslipDetailsPrintForLRShortgeList'));
            this.commonList = JSON.parse(localStorage.getItem('hireslipDetailsPrintForCommonParameters'));
            localStorage.clear();
            console.log(this.hireSlipDto);
            console.log(this.hireSlipDtoTimeDuration);
            console.log(this.hireSlipDtoFor_LRShortage);
            console.log(this.listOfShortageLrs);
            console.log(this.commonList);
            this.fromStation = this.hireSlipDto.fromstation == null ? "NA" : this.hireSlipDto.fromstation;
            this.toStation = this.hireSlipDto.tostation == null ? "NA" : this.hireSlipDto.tostation;
            this.hireslipNumber = this.hireSlipDto.hireslipnumber == null ? "NA" : this.hireSlipDto.hireslipnumber;
            this.invoiceNumber = this.hireSlipDto.invoiceNumber == null ? "NA" : this.hireSlipDto.invoiceNumber;
            this.ewayBillNo = this.hireSlipDto.ewayBill == null ? "NA" : this.hireSlipDto.ewayBill;
            this.invoiceDate = this.hireSlipDto.hireSlipDateStr == null ? "NA" : this.hireSlipDto.hireSlipDateStr;
            this.lorryNumber = this.hireSlipDto.vehicleNumber == null ? "NA" : this.hireSlipDto.vehicleNumber;
            this.panNo = this.hireSlipDto.vehiCompPanNo == null ? "NA" : this.hireSlipDto.vehiCompPanNo;
            this.lorryOwnerName = this.hireSlipDto.vehiCompName == null ? "NA" : this.hireSlipDto.vehiCompName;
            this.lorryType = this.hireSlipDto.truckType == null ? "NA" : this.hireSlipDto.truckType;
            this.truckLength = this.hireSlipDto.trkLgth == null ? "NA" : this.hireSlipDto.trkLgth;
            this.lorry_address = this.hireSlipDto.vehiCompAddress == null ? "NA" : this.hireSlipDto.vehiCompAddress;
            this.brokerName = this.hireSlipDto.brokerName == null ? "NA" : this.hireSlipDto.brokerName;
            this.brokerPanNo = this.hireSlipDto.brokerPanNo == null ? "NA" : this.hireSlipDto.brokerPanNo;
            this.totalLrs = this.hireSlipDto.totalLRs == null ? "NA" : this.hireSlipDto.totalLRs;
            this.totalArticles = this.hireSlipDto.totalArticles == null ? "NA" : this.hireSlipDto.totalArticles;
            this.guranteeWgt = this.hireSlipDto.gurWeight == null ? "NA" : this.hireSlipDto.gurWeight;
            this.kantaWgt = this.hireSlipDto.kantaWeight == null ? "NA" : this.hireSlipDto.kantaWeight;
            this.companyName = this.hireSlipDto.companyName == null ? "NA" : this.hireSlipDto.companyName;
            if (this.hireSlipDto.tostation != null && this.hireSlipDto.tostation == "Chennai") {
                this.totalHire = 0.0;
                this.advanceAmt = 0.0;
                this.balanceAmt = 0.0;
            }
            else {
                this.totalHire = this.hireSlipDto.totalhire == null ? "NA" : this.hireSlipDto.totalhire;
                this.advanceAmt = this.hireSlipDto.advance == null ? "NA" : this.hireSlipDto.advance;
                this.balanceAmt = this.hireSlipDto.balance == null ? "NA" : this.hireSlipDto.balance;
            }
            this.payableAt = this.hireSlipDto.payableat == null ? "NA" : this.hireSlipDto.payableat;
            if (this.hireSlipDto.toPay == 0.0 || this.hireSlipDto.toPay == 0) {
                this.toPay = "ZERO";
            }
            else {
                this.toPay = this.inWords();
            }
            this.driverName = this.hireSlipDto.drivername == null ? "NA" : this.hireSlipDto.drivername;
            this.driverPhoneNo = this.hireSlipDto.driverMobileNumber == null ? "NA" : this.hireSlipDto.driverMobileNumber;
            this.driverLicNo = this.hireSlipDto.driverlicencenumber == null ? "NA" : this.hireSlipDto.driverlicencenumber;
            this.departureDate = this.hireSlipDto.departuredateStr == null ? "NA" : this.hireSlipDto.departuredateStr;
            this.departureTime = this.hireSlipDto.departureTime == null ? "NA" : this.hireSlipDto.departureTime;
            this.remarks = this.hireSlipDto.remarks == null ? "NA" : this.hireSlipDto.remarks;
            this.messageText = this.hireSlipDto.messageText == null ? "NA" : this.hireSlipDto.messageText;
            //barcode print 
            this.barcodeValue = this.commonList[2];
            this.printBarcode = [{
                    barcode: this.barcodeValue
                }
            ];
            /* this.printBarcode = [
                 {
                     SerialId: 585885,
                     Name: 'A'
                 }
             ];*/
            for (var i = 0; i < this.listOfShortageLrs.length; i++) {
                this.lrShortage = this.lrShortage + "," + this.listOfShortageLrs[i];
            }
            this.validateLrShortage = (this.lrShortage == null ? "" : this.lrShortage.replace("null,", ""));
            //
            if (this.hireSlipDtoTimeDuration.column1 != null) {
                this.splitTimeDetails = (this.hireSlipDtoTimeDuration.column1).split(",");
                console.log(this.splitTimeDetails);
                this.splitEachTimeDetails = null;
                var size = this.splitTimeDetails.length;
                console.log(this.splitTimeDetails + "size" + size);
                switch (size) {
                    case 1:
                        this.splitEachTimeDetails = this.splitTimeDetails[0].split("_");
                        this.fromTime1 = this.splitEachTimeDetails[0];
                        this.toTime1 = this.splitEachTimeDetails[1];
                        this.rewardingAmount1 = this.splitEachTimeDetails[2];
                        break;
                    case 2:
                        this.splitEachTimeDetails = this.splitTimeDetails[0].split("_");
                        this.fromTime1 = this.splitEachTimeDetails[0];
                        this.toTime1 = this.splitEachTimeDetails[1];
                        this.rewardingAmount1 = this.splitEachTimeDetails[2];
                        this.splitEachTimeDetails = this.splitTimeDetails[1].split("_");
                        this.fromTime2 = this.splitEachTimeDetails[0];
                        this.toTime2 = this.splitEachTimeDetails[1];
                        this.rewardingAmount2 = this.splitEachTimeDetails[2];
                        break;
                    case 3:
                        this.splitEachTimeDetails = this.splitTimeDetails[0].split("_");
                        this.fromTime1 = this.splitEachTimeDetails[0];
                        this.toTime1 = this.splitEachTimeDetails[1];
                        this.rewardingAmount1 = this.splitEachTimeDetails[2];
                        this.splitEachTimeDetails = this.splitTimeDetails[1].split("_");
                        this.fromTime2 = this.splitEachTimeDetails[0];
                        this.toTime2 = this.splitEachTimeDetails[1];
                        this.rewardingAmount2 = this.splitEachTimeDetails[2];
                        this.splitEachTimeDetails = this.splitTimeDetails[2].split("_");
                        this.fromTime3 = this.splitEachTimeDetails[0];
                        this.toTime3 = this.splitEachTimeDetails[1];
                        this.rewardingAmount3 = this.splitEachTimeDetails[2];
                        break;
                    default:
                        this.splitEachTimeDetails = null;
                        break;
                }
            }
            for (var i = 0; i < this.hireSlipDtoFor_LRShortage.length; i++) {
                this.datatableForLrsShortage.push(this.hireSlipDtoFor_LRShortage[i]);
            }
            //lrs shortage
            if (this.listOfShortageLrs.length > 0) {
                this.hideShowLRsExtraTable = true;
            }
            //lrs reward amount details
            if (this.hireSlipDtoTimeDuration.column1) {
                this.hideShowForRewardTable = true;
            }
            if (this.hireSlipDtoFor_LRShortage.length > 0) {
                this.hideShowForLRShortageTable = true;
            }
            if ((this.hireSlipDto.fromstation != null) &&
                this.hireSlipDto.fromstation == "KVH" &&
                (this.hireSlipDto.tostation != null) &&
                (!(this.hireSlipDto.tostation == "Bangalore"))) {
                if (this.hireSlipDto.doorOpen > 0) {
                    this.hideShowForDoorCharge = true;
                    this.doorCharge = this.hireSlipDto.doorOpen;
                }
                if (this.hireSlipDto.vehiHeight > 0) {
                    this.hideShowForVehicleHeight = true;
                    this.vehicleHeight = this.hireSlipDto.vehiHeight;
                }
                if (this.hireSlipDto.doorDelivery > 0) {
                    this.hideShowForDoorDelivery = true;
                    this.doorDelivery = this.hireSlipDto.doorDelivery;
                }
                if (this.hireSlipDto.extraWeight > 0) {
                    this.hideShowForExtraWeight = true;
                    this.extraWeight = this.hireSlipDto.extraWeight;
                }
                if (this.hireSlipDto.chkPost > 0) {
                    this.hideShowForCheckPost = true;
                    this.checkPost = this.hireSlipDto.chkPost;
                }
                if (this.hireSlipDto.otherChgs > 0) {
                    this.hideShowForOtherCharges = true;
                    this.otherCharges = this.hireSlipDto.otherChgs;
                }
            }
            console.log("HAI-Hireslip Print");
            console.log(this.printBarcode);
            window.setTimeout(function () {
                window.print();
            }, 0);
            window.onafterprint = function () {
                window.close();
            };
            localStorage.clear();
            window.addEventListener('afterprint', function (event) {
                _this.clearField();
            });
        }
    }
    HireslipDetailsPrintComponent.prototype.ngOnInit = function () {
    };
    HireslipDetailsPrintComponent.prototype.validatBeforePrint = function () {
    };
    HireslipDetailsPrintComponent.prototype.clearField = function () {
        this.hideShowLRsExtraTable = false;
        this.hideShowForRewardTable = false;
        this.hideShowForLRShortageTable = false;
        this.hideShowForDoorCharge = false;
        this.hideShowForVehicleHeight = false;
        this.hideShowForDoorDelivery = false;
        this.hideShowForExtraWeight = false;
        this.hideShowForCheckPost = false;
        this.hideShowForOtherCharges = false;
    };
    HireslipDetailsPrintComponent.prototype.inWords = function () {
        var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ',
            'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ',
            'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ',
            'Seventeen ', 'Eighteen ', 'Nineteen '];
        var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty',
            'Seventy', 'Eighty', 'Ninety'];
        this.num = this.hireSlipDto.toPay;
        //        console.log( this.num );
        if ((this.num = this.num.toString()).length > 9)
            return 'overflow';
        this.n = ('000000000' + this.num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!this.n)
            return;
        var str = '';
        str += (this.n[1] != 0) ? (a[Number(this.n[1])] || b[this.n[1][0]] + ' '
            + a[this.n[1][1]])
            + 'Crore ' : '';
        str += (this.n[2] != 0) ? (a[Number(this.n[2])] || b[this.n[2][0]] + ' '
            + a[this.n[2][1]])
            + 'Lakh ' : '';
        str += (this.n[3] != 0) ? (a[Number(this.n[3])] || b[this.n[3][0]] + ' '
            + a[this.n[3][1]])
            + 'Thousand ' : '';
        str += (this.n[4] != 0) ? (a[Number(this.n[4])] || b[this.n[4][0]] + ' '
            + a[this.n[4][1]])
            + 'Hundred ' : '';
        str += (this.n[5] != 0) ? ((str != '') ? 'and ' : '')
            + (a[Number(this.n[5])] || b[this.n[5][0]] + ' ' + a[this.n[5][1]])
            + '' : '';
        str += ' Only ';
        return str;
    };
    HireslipDetailsPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hireslipPrint'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HireslipDetailsPrintComponent.prototype, "printEl", void 0);
    HireslipDetailsPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hireslip-details-print',
            template: __webpack_require__(/*! ./hireslip-details-print.component.html */ "./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.html"),
            styles: [__webpack_require__(/*! ./hireslip-details-print.component.css */ "./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], HireslipDetailsPrintComponent);
    return HireslipDetailsPrintComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/invoice-details-print/invoice-details-print.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-details-print/invoice-details-print.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\r\n\ttext-align: center;\r\n}\r\n\r\n.dsply-ib {\r\n\tdisplay: inline-block;\r\n}\r\n\r\nh6, h5, h4, h3, h2, h1, p, .custome {\r\n\tfont-size: 13.3px;\r\n\tmargin: 1px;\r\n\tpadding: 1px;\r\n\tpadding-top: 3px;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.fontS_15 {\r\n\tfont-size: 16px;\r\n\tmargin: 0px;\r\n}\r\n\r\n.fontS_13 {\r\n\tfont-size: 14px;\r\n\tmargin: 0px;\r\n\tpadding: 0px\r\n}\r\n\r\n.fontS_12 {\r\n\tfont-size: 13px;\r\n\tmargin: 0px;\r\n\tpadding: 0px\r\n}\r\n\r\n.font_bold{\r\nfont-weight:900;\r\n}\r\n\r\n.border {\r\n\tborder: 1px solid #000 !important;\r\n\tborder-collapse: collapse;\r\n\tpadding: 0px;\r\n}\r\n\r\n.dsplyNone {\r\n\tdisplay: none;\r\n}\r\n\r\n.border_right {\r\n\tborder-right: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.border_left {\r\n\tborder-left: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n\tmargin-left: -1px;\r\n}\r\n\r\n.border_bottom {\r\n\tborder-bottom: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.border_top {\r\n\tborder-top: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#sidebarnav {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#section_to_print, #section_to_print * {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t .modal-basic-title{\r\n visibility: hidden;\r\n }\r\n #closePopupBtn{\r\n visibility: hidden;\r\n }\r\n}\r\n\r\n#left, #right, div:empty {\r\n\tmin-height: 19px;\r\n}\r\n\r\n#left, div:empty {\r\n\tmin-height: 22px;\r\n}\r\n\r\n/* #left, #right, div!:empty { */\r\n\r\n/* \tmargin-top: -15px; */\r\n\r\n/* } */\r\n\r\n.sidebar-nav ul .sidebar-item {\r\n\tdisplay: none;\r\n}\r\n\r\n/* print changes */\r\n\r\n.container {\r\n\tmax-width: 97%;\r\n}\r\n\r\n@media ( min-width : 768px) {\r\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media ( min-width : 768px) {\r\n\t.col-md-3, .col-md-9 {\r\n\t\tpadding-left: 7px !important;\r\n\t}\r\n}\r\n\r\nhr {\r\n\tborder: .5px solid black;\r\n\twidth: 100%;\r\n\tmargin-left: 7px !important;\r\n\tmargin: 0px;\r\n}\r\n\r\n@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#sidebarnav {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#firstPrint, #firstPrint * {\r\n\t\tvisibility: visible;\r\n\t}\r\n/* \t.page-break { display:block; page-break-before:always; }  */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi9pbnZvaWNlLWRldGFpbHMtcHJpbnQvaW52b2ljZS1kZXRhaWxzLXByaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsMENBQTBDO0NBQzFDOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUdEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBQ0Q7QUFDQSxnQkFBZ0I7Q0FDZjs7QUFDRDtDQUNDLGtDQUFrQztDQUNsQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsNkJBQTZCO0NBQzdCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsOEJBQThCO0NBQzlCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxvQkFBb0I7RUFDcEI7O0VBRUE7Q0FDRCxtQkFBbUI7RUFDbEI7Q0FDRDtDQUNBLG1CQUFtQjtFQUNsQjtDQUNEOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVELGlDQUFpQzs7QUFDakMseUJBQXlCOztBQUN6QixPQUFPOztBQUlQO0NBQ0MsY0FBYztDQUNkOztBQUNELG1CQUFtQjs7QUFDbkI7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQztFQUNDLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLDZCQUE2QjtFQUM3QjtDQUNEOztBQUVEO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaOztBQUVEO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0Msb0JBQW9CO0VBQ3BCO0FBQ0YsZ0VBQWdFO0NBQy9EIiwiZmlsZSI6InNyYy9hcHAvdHJpcC1jcmVhdGlvbi9pbnZvaWNlLWRldGFpbHMtcHJpbnQvaW52b2ljZS1kZXRhaWxzLXByaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0X2FjIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kc3BseS1pYiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5oNiwgaDUsIGg0LCBoMywgaDIsIGgxLCBwLCAuY3VzdG9tZSB7XHJcblx0Zm9udC1zaXplOiAxMy4zcHg7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cdHBhZGRpbmctdG9wOiAzcHg7XHJcblx0Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb250U18xNSB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZm9udFNfMTMge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHhcclxufVxyXG5cclxuXHJcbi5mb250U18xMiB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweFxyXG59XHJcbi5mb250X2JvbGR7XHJcbmZvbnQtd2VpZ2h0OjkwMDtcclxufVxyXG4uYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5kc3BseU5vbmUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3JkZXJfcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmJvcmRlcl9sZWZ0IHtcclxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRtYXJnaW4tbGVmdDogLTFweDtcclxufVxyXG5cclxuLmJvcmRlcl9ib3R0b20ge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5ib3JkZXJfdG9wIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdGJvZHkgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNzaWRlYmFybmF2IHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3NlY3Rpb25fdG9fcHJpbnQsICNzZWN0aW9uX3RvX3ByaW50ICoge1xyXG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHR9XHJcblx0XHJcblx0IC5tb2RhbC1iYXNpYy10aXRsZXtcclxuIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuIH1cclxuICNjbG9zZVBvcHVwQnRue1xyXG4gdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gfVxyXG59XHJcblxyXG4jbGVmdCwgI3JpZ2h0LCBkaXY6ZW1wdHkge1xyXG5cdG1pbi1oZWlnaHQ6IDE5cHg7XHJcbn1cclxuXHJcbiNsZWZ0LCBkaXY6ZW1wdHkge1xyXG5cdG1pbi1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi8qICNsZWZ0LCAjcmlnaHQsIGRpdiE6ZW1wdHkgeyAqL1xyXG4vKiBcdG1hcmdpbi10b3A6IC0xNXB4OyAqL1xyXG4vKiB9ICovXHJcblxyXG5cclxuXHJcbi5zaWRlYmFyLW5hdiB1bCAuc2lkZWJhci1pdGVtIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIHByaW50IGNoYW5nZXMgKi9cclxuLmNvbnRhaW5lciB7XHJcblx0bWF4LXdpZHRoOiA5NyU7XHJcbn1cclxuXHJcbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2OHB4KSB7XHJcblx0I21haW4td3JhcHBlcltkYXRhLWxheW91dD1cImhvcml6b250YWxcIl0gLnNpZGViYXItbmF2ICNzaWRlYmFybmF2IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xyXG5cdC5jb2wtbWQtMywgLmNvbC1tZC05IHtcclxuXHRcdHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5ociB7XHJcblx0Ym9yZGVyOiAuNXB4IHNvbGlkIGJsYWNrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDBweDtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuXHRib2R5ICoge1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHQjc2lkZWJhcm5hdiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNmaXJzdFByaW50LCAjZmlyc3RQcmludCAqIHtcclxuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0fVxyXG4vKiBcdC5wYWdlLWJyZWFrIHsgZGlzcGxheTpibG9jazsgcGFnZS1icmVhay1iZWZvcmU6YWx3YXlzOyB9ICAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/trip-creation/invoice-details-print/invoice-details-print.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-details-print/invoice-details-print.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page row system_responsive\" id=\"firstPrint\">\n\t<div class=\"col-md-12\">\n\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"padding-top: 10px;\" width='40%' valign='top'>\n\t\t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t\t\t\t<br> {{address}}\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width='60%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='40%'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Two Point Door Delivery LRs : </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='60%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{twoPtLrs}}\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='20%'><strong>Truck No : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='30%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{vehicleNumber}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='20%'><strong>Supplier : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='30%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{supplierName}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr><br>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='20%'><strong>Invoice No : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='30%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{invoiceNum}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='20%'><strong>Truck Type : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='30%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{goodsType}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr><br>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='20%'><strong>From : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='30%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{fromStation}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='20%'><strong>To : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='30%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{toStation}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr><br>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='15%'><strong>Dated : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='15%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{invoiceDate}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='15%'><strong>Gur.Wgt : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='15%' style='border-bottom:1px solid #000;'><strong>{{gurWgt}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='15%'><strong>Kanta Wgt : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='15%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{kantaWgt}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='text-align: center;font-size: large;'>\n\t\t\t\t\t<strong><u>{{toStation}} Loading Sheet.</u></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<!--Second  row starts-->\n\t\t<!--<div class=\"container border\">\n\t\t\t<table width='100%' border='0' cellpadding='0' cellspacing='0'>\n\t\t\t\t<tr>\n\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000; border-left: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong> Note **</strong></td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='number'><strong> LR No</strong></td>\n\t\t\t\t\t<td width='4%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='number'><strong> Art</strong></td>\n\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='number'><strong> Pvt.Mrk</strong></td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong> Booking Date</strong></td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong> Booking From</strong></td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong> Description</strong></td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong>Consignee</strong></td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong>Consignor</strong></td>\n\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong> Act Wgt</strong></td>\n\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong> Chg Wgt</strong></td>\n\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\tstyle='border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;border-right: 1px solid #000;'\n\t\t\t\t\t\tvalign='top' type='text'><strong>Goods Value</strong></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>-->\n\t\t<div class=\"container border\">\n\t\t\t<div>\n\n\t\t\t\t<table width='100%' border='0' cellpadding='0' cellspacing='0' style='table-layout: fixed;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000; border-left: none;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Note **</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> LR No</strong></td>\n\t\t\t\t\t\t<td width='4%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Art.</strong></td>\n\t\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Pvt.Mrk</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Booking Date</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Booking From</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Description</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong>Consignee</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong>Consignor</strong></td>\n\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Act Wgt</strong></td>\n\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Chg Wgt</strong></td>\n\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\tstyle='border-bottom: 1px solid #000; word-wrap: break-word;border-top: 1px solid #000;border-right: none'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong>Goods Value</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<ng-container *ngFor=\"let item of result\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan=\"12\">\n\t\t\t\t\t\t\t\t<strong>{{item.deliveryPoints}}</strong></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let value of item.values\">\n\t\t\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word; border-left: none'>\n\t\t\t\t\t\t\t\t{{value.isHandWithCareStr}} <br>{{value.isBankLr}} <br> {{value.selfLrStr}}</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.lrNumber}}</td>\n\t\t\t\t\t\t\t<td width='4%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.totalArticles}}</td>\n\t\t\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t<span>{{value.privateMarker}}</span></td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.bookingDateStr}}</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.bookedFrom}}</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.description}}</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.consigneeName}}</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.consignorName}}</td>\n\t\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.actualWeight}}</td>\n\t\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t{{value.chargedWeight}}</td>\n\t\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: none '>\n\t\t\t\t\t\t\t\t{{value.goodsValue}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word; border-left: none'>\n\t\t\t\t\t\t\t\t<strong> Total </strong> </td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='4%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t<strong> {{item.totalArticles}}</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t<strong>{{item.actualWeight}}</strong></td>\n\t\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t<strong>{{item.chargedWeight}}</strong></td>\n\t\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: none'>\n\t\t\t\t\t\t\t\t<strong>{{item.goodsValue}}</strong></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<br><br>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word; border-left: none'>\n\t\t\t\t\t\t\t<strong> Total </strong> </td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='4%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t<strong> {{totArtNet}}</strong>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t<strong>{{totActWgtNet}}</strong></td>\n\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t\t<strong>{{totChgWgtNet}}</strong></td>\n\t\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right:none'>\n\t\t\t\t\t\t\t<strong>{{totGoodsValueNet}}</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<!--/div>-->\n\t\t\t</div>\n\t\t</div>\n\t\t<!--<br>\n\t\t<div class=\"container border\">\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word; border-left: 1px solid #000;'>\n\t\t\t\t\t\t<strong> Total </strong> </td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width='4%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t<strong> {{totArtNet}}</strong>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t<strong>{{totActWgtNet}}</strong></td>\n\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'>\n\t\t\t\t\t\t<strong>{{totChgWgtNet}}</strong></td>\n\t\t\t\t\t<td width='8%' align='center'\n\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;border-right: 1px solid #000; '>\n\t\t\t\t\t\t<strong>{{totGoodsValueNet}}</strong></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-left: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>HC-HANDLE WITH CARE, NW PRTY-NEW PARTY, COD </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Loading Clerk : </strong>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 200px;'>\n\t\t\t\t\t\t\t\t\t</u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6><br><br>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Incharge Sign : </strong>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 200px;'>\n\t\t\t\t\t\t\t\t\t</u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/trip-creation/invoice-details-print/invoice-details-print.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-details-print/invoice-details-print.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InvoiceDetailsPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsPrintComponent", function() { return InvoiceDetailsPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceDetailsPrintComponent = /** @class */ (function () {
    function InvoiceDetailsPrintComponent(router, datePipe) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.isLoggedIn = true;
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_5__["HireSlipDto"]();
        this.lrDto = [];
        this.listOfLrShortage = new Array();
        this.totLrsNet = 0;
        this.totArtNet = 0;
        this.totToPayNet = 0;
        this.totPaidNet = 0;
        this.totSerTaxNet = 0;
        this.totActWgtNet = 0;
        this.totChgWgtNet = 0;
        this.totGoodsValueNet = 0;
        this.sizeOfLrdto = 0;
        this.firstList = [];
        this.secondList = [];
        this.thirdList = [];
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? ' ' : this.userDataDtoReturnSession.addressId;
            this.hireSlipDto = JSON.parse(localStorage.getItem('invoiceDetailsForBookingHireslipDtoPrint'));
            this.lrDto = JSON.parse(localStorage.getItem('invoiceDetailsForBookingLrDtoPrint'));
            this.listOfLrShortage = JSON.parse(localStorage.getItem('invoiceDetailsForBookingListOfLrsShortPrint'));
            console.log(this.hireSlipDto);
            console.log(this.lrDto);
            //console.log( moment(this.lrDto[0].invoiceDate).format('DD-MM-YYYY'));
            console.log(this.listOfLrShortage);
            this.twoPtLrs = this.hireSlipDto.twoPtLrs == null ? "NA" : this.hireSlipDto.twoPtLrs;
            this.vehicleNumber = this.hireSlipDto.vehicleNumber == null ? "NA" : this.hireSlipDto.vehicleNumber;
            this.supplierName = this.hireSlipDto.suppliername == null ? "NA" : this.hireSlipDto.suppliername;
            this.invoiceNum = this.hireSlipDto.invoiceNumber == null ? "NA" : this.hireSlipDto.invoiceNumber;
            this.goodsType = this.hireSlipDto.goodsType == null ? "NA" : this.hireSlipDto.goodsType;
            this.fromStation = this.hireSlipDto.fromstation == null ? "NA" : this.hireSlipDto.fromstation;
            this.toStation = this.hireSlipDto.tostation == null ? "NA" : this.hireSlipDto.tostation;
            this.gurWgt = this.hireSlipDto.gurWeight == null ? "NA" : this.hireSlipDto.gurWeight;
            if (this.lrDto.length > 0) {
                this.invoiceDate = this.lrDto[0].invoiceDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_4__(this.lrDto[0].invoiceDate).format('DD-MM-YYYY');
            }
            this.kantaWgt = this.hireSlipDto.kantaWeight == null ? "NA" : this.hireSlipDto.kantaWeight;
            console.log("KANTA:" + this.kantaWgt);
            this.sizeOfLrdto = 0;
            for (var i = 0; i < this.lrDto.length; i++) {
                this.handleWithCare = "";
                this.isBankLr = "";
                this.isSelfLr = "";
                this.serTax = 0.0;
                if (this.lrDto[i].isHandWithCare && this.lrDto[i].isNewConsignee && this.lrDto[i].isCod) {
                    this.handleWithCare = "HC & NW PRTY & COD";
                }
                else if (this.lrDto[i].isHandWithCare && !this.lrDto[i].isNewConsignee && this.lrDto[i].isCod) {
                    this.handleWithCare = "HC & COD";
                }
                else if (!this.lrDto[i].isHandWithCare && this.lrDto[i].isNewConsignee && this.lrDto[i].isCod) {
                    this.handleWithCare = "NW PRTY & COD";
                }
                else if (this.lrDto[i].isHandWithCare && this.lrDto[i].isNewConsignee && !this.lrDto[i].isCod) {
                    this.handleWithCare = "Hc & NW PRTY";
                }
                else if (this.lrDto[i].isHandWithCare && !this.lrDto[i].isNewConsignee && !this.lrDto[i].isCod) {
                    this.handleWithCare = "Hc";
                }
                else if (!this.lrDto[i].isHandWithCare && this.lrDto[i].isNewConsignee && !this.lrDto[i].isCod) {
                    this.handleWithCare = "NW PRTY";
                }
                else if (!this.lrDto[i].isHandWithCare && !this.lrDto[i].isNewConsignee && this.lrDto[i].isCod) {
                    this.handleWithCare = "COD";
                }
                if (this.lrDto[i].isBankLr == "1") {
                    this.isBankLr = "BL";
                }
                else if (this.lrDto[i].isBankLr == "0") {
                    this.isBankLr = "";
                }
                if (this.lrDto[i].selfLr != null && this.lrDto[i].selfLr) {
                    this.isSelfLr = "Self LR";
                }
                else {
                    this.isSelfLr = "";
                }
                this.serTax = this.lrDto[i].serviceTax == null ? 0 : this.lrDto[i].serviceTax;
                this.totLrsNet = +this.totLrsNet + +1;
                this.totArtNet = +this.totArtNet + +this.lrDto[i].totalArticles;
                this.totToPayNet = +this.totToPayNet + +this.lrDto[i].toPay;
                this.totPaidNet = +this.totPaidNet + +this.lrDto[i].paid;
                this.totSerTaxNet = +this.totSerTaxNet + +this.serTax;
                this.totActWgtNet = +this.totActWgtNet + +this.lrDto[i].actualWeight;
                this.totChgWgtNet = +this.totChgWgtNet + +this.lrDto[i].chargedWeight;
                this.totGoodsValueNet = +this.totGoodsValueNet + +this.lrDto[i].goodsValue;
            }
            this.lrDtoDataList = [];
            if (this.lrDto.length > 0) {
                this.lrDtoDataList = this.lrDto;
                console.log(this.lrDtoDataList);
                this.setInvoiceDetailsPrintData();
            }
            console.log("HAI-Invoice Details");
            window.setTimeout(function () {
                window.print();
            }, 0);
            window.onafterprint = function () {
                window.close();
            };
            localStorage.clear();
            window.addEventListener('afterprint', function (event) {
                _this.clearField();
            });
        }
    }
    InvoiceDetailsPrintComponent.prototype.ngOnInit = function () {
    };
    InvoiceDetailsPrintComponent.prototype.setInvoiceDetailsPrintData = function () {
        var _this = this;
        var groups = new Set(this.lrDtoDataList.map(function (item) { return item.deliveryPoints; }));
        this.result = [];
        groups.forEach(function (g) {
            /* Each Summary Data Value */
            var totArticle = _this.lrDtoDataList
                .filter(function (i) { return i.deliveryPoints === g; })
                .reduce(function (sum, i) { return +sum + +i.totalArticles; }, 0);
            var actWgt = _this.lrDtoDataList
                .filter(function (i) { return i.deliveryPoints === g; })
                .reduce(function (sum, i) { return +sum + +i.actualWeight; }, 0);
            var chgWgt = _this.lrDtoDataList
                .filter(function (i) { return i.deliveryPoints === g; })
                .reduce(function (sum, i) { return +sum + +i.chargedWeight; }, 0);
            var goodsVal = _this.lrDtoDataList
                .filter(function (i) { return i.deliveryPoints === g; })
                .reduce(function (sum, i) { return +sum + +i.goodsValue; }, 0);
            _this.result.push({
                deliveryPoints: g,
                values: _this.lrDto.filter(function (i) { return i.deliveryPoints === g; }),
                totalArticles: totArticle,
                actualWeight: actWgt,
                chargedWeight: chgWgt,
                goodsValue: goodsVal,
            });
        });
    };
    InvoiceDetailsPrintComponent.prototype.validatBeforePrint = function () {
    };
    InvoiceDetailsPrintComponent.prototype.clearField = function () {
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_5__["HireSlipDto"]();
        this.listOfLrShortage = [];
        this.lrDto = [];
        this.lrDtoDataList = [];
    };
    InvoiceDetailsPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    InvoiceDetailsPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-details-print',
            template: __webpack_require__(/*! ./invoice-details-print.component.html */ "./src/app/trip-creation/invoice-details-print/invoice-details-print.component.html"),
            styles: [__webpack_require__(/*! ./invoice-details-print.component.css */ "./src/app/trip-creation/invoice-details-print/invoice-details-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], InvoiceDetailsPrintComponent);
    return InvoiceDetailsPrintComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\r\n\ttext-align: center;\r\n}\r\n\r\n.dsply-ib {\r\n\tdisplay: inline-block;\r\n}\r\n\r\nh6, h5, h4, h3, h2, h1, p, .custome {\r\n\tfont-size: 13.3px;\r\n\tmargin: 1px;\r\n\tpadding: 1px;\r\n\tpadding-top: 3px;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.fontS_15 {\r\n\tfont-size: 16px;\r\n\tmargin: 0px;\r\n}\r\n\r\n.fontS_13 {\r\n\tfont-size: 14px;\r\n\tmargin: 0px;\r\n\tpadding: 0px\r\n}\r\n\r\n.fontS_12 {\r\n\tfont-size: 13px;\r\n\tmargin: 0px;\r\n\tpadding: 0px\r\n}\r\n\r\n.font_bold{\r\nfont-weight:900;\r\n}\r\n\r\n.border {\r\n\tborder: 1px solid #000 !important;\r\n\tborder-collapse: collapse;\r\n\tpadding: 0px;\r\n}\r\n\r\n.dsplyNone {\r\n\tdisplay: none;\r\n}\r\n\r\n.border_right {\r\n\tborder-right: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.border_left {\r\n\tborder-left: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n\tmargin-left: -1px;\r\n}\r\n\r\n.border_bottom {\r\n\tborder-bottom: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.border_top {\r\n\tborder-top: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#sidebarnav {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#section_to_print, #section_to_print * {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t .modal-basic-title{\r\n visibility: hidden;\r\n }\r\n #closePopupBtn{\r\n visibility: hidden;\r\n }\r\n}\r\n\r\n#left, #right, div:empty {\r\n\tmin-height: 19px;\r\n}\r\n\r\n#left, div:empty {\r\n\tmin-height: 22px;\r\n}\r\n\r\n/* #left, #right, div!:empty { */\r\n\r\n/* \tmargin-top: -15px; */\r\n\r\n/* } */\r\n\r\n.sidebar-nav ul .sidebar-item {\r\n\tdisplay: none;\r\n}\r\n\r\n/* print changes */\r\n\r\n.container {\r\n\tmax-width: 97%;\r\n}\r\n\r\n@media ( min-width : 768px) {\r\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media ( min-width : 768px) {\r\n\t.col-md-3, .col-md-9 {\r\n\t\tpadding-left: 7px !important;\r\n\t}\r\n}\r\n\r\nhr {\r\n\tborder: .5px solid black;\r\n\twidth: 100%;\r\n\tmargin-left: 7px !important;\r\n\tmargin: 0px;\r\n}\r\n\r\n@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#sidebarnav {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#firstPrint, #firstPrint * {\r\n\t\tvisibility: visible;\r\n\t}\r\n/* \t.page-break { display:block; page-break-before:always; }  */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi9pbnZvaWNlLWxvYWRpbmdzaGVldC1wcmludC9pbnZvaWNlLWxvYWRpbmdzaGVldC1wcmludC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLDBDQUEwQztDQUMxQzs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUNEO0FBQ0EsZ0JBQWdCO0NBQ2Y7O0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEMsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLDhCQUE4QjtDQUM5QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0Msb0JBQW9CO0VBQ3BCOztFQUVBO0NBQ0QsbUJBQW1CO0VBQ2xCO0NBQ0Q7Q0FDQSxtQkFBbUI7RUFDbEI7Q0FDRDs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRCxpQ0FBaUM7O0FBQ2pDLHlCQUF5Qjs7QUFDekIsT0FBTzs7QUFJUDtDQUNDLGNBQWM7Q0FDZDs7QUFDRCxtQkFBbUI7O0FBQ25CO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0NBQ0M7RUFDQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZDtDQUNEOztBQUVEO0NBQ0M7RUFDQyw2QkFBNkI7RUFDN0I7Q0FDRDs7QUFFRDtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osNEJBQTRCO0NBQzVCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQjtBQUNGLGdFQUFnRTtDQUMvRCIsImZpbGUiOiJzcmMvYXBwL3RyaXAtY3JlYXRpb24vaW52b2ljZS1sb2FkaW5nc2hlZXQtcHJpbnQvaW52b2ljZS1sb2FkaW5nc2hlZXQtcHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eHRfYWMge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRzcGx5LWliIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmg2LCBoNSwgaDQsIGgzLCBoMiwgaDEsIHAsIC5jdXN0b21lIHtcclxuXHRmb250LXNpemU6IDEzLjNweDtcclxuXHRtYXJnaW46IDFweDtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblx0cGFkZGluZy10b3A6IDNweDtcclxuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvbnRTXzE1IHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5mb250U18xMyB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweFxyXG59XHJcblxyXG5cclxuLmZvbnRTXzEyIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4XHJcbn1cclxuLmZvbnRfYm9sZHtcclxuZm9udC13ZWlnaHQ6OTAwO1xyXG59XHJcbi5ib3JkZXIge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmRzcGx5Tm9uZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJvcmRlcl9yaWdodCB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uYm9yZGVyX2xlZnQge1xyXG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG59XHJcblxyXG4uYm9yZGVyX2JvdHRvbSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmJvcmRlcl90b3Age1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcblx0Ym9keSAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3NpZGViYXJuYXYge1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHQjc2VjdGlvbl90b19wcmludCwgI3NlY3Rpb25fdG9fcHJpbnQgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdH1cclxuXHRcclxuXHQgLm1vZGFsLWJhc2ljLXRpdGxle1xyXG4gdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gfVxyXG4gI2Nsb3NlUG9wdXBCdG57XHJcbiB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiB9XHJcbn1cclxuXHJcbiNsZWZ0LCAjcmlnaHQsIGRpdjplbXB0eSB7XHJcblx0bWluLWhlaWdodDogMTlweDtcclxufVxyXG5cclxuI2xlZnQsIGRpdjplbXB0eSB7XHJcblx0bWluLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLyogI2xlZnQsICNyaWdodCwgZGl2ITplbXB0eSB7ICovXHJcbi8qIFx0bWFyZ2luLXRvcDogLTE1cHg7ICovXHJcbi8qIH0gKi9cclxuXHJcblxyXG5cclxuLnNpZGViYXItbmF2IHVsIC5zaWRlYmFyLWl0ZW0ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogcHJpbnQgY2hhbmdlcyAqL1xyXG4uY29udGFpbmVyIHtcclxuXHRtYXgtd2lkdGg6IDk3JTtcclxufVxyXG5cclxuQG1lZGlhICggbWluLXdpZHRoIDogNzY4cHgpIHtcclxuXHQjbWFpbi13cmFwcGVyW2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSAuc2lkZWJhci1uYXYgI3NpZGViYXJuYXYge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2OHB4KSB7XHJcblx0LmNvbC1tZC0zLCAuY29sLW1kLTkge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbmhyIHtcclxuXHRib3JkZXI6IC41cHggc29saWQgYmxhY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdGJvZHkgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNzaWRlYmFybmF2IHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I2ZpcnN0UHJpbnQsICNmaXJzdFByaW50ICoge1xyXG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHR9XHJcbi8qIFx0LnBhZ2UtYnJlYWsgeyBkaXNwbGF5OmJsb2NrOyBwYWdlLWJyZWFrLWJlZm9yZTphbHdheXM7IH0gICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page row system_responsive\" id=\"loadingsheetprint\">\n\t<div class=\"col-md-12\">\n\t\t<!--first row starts-->\n\n\t\t<!--first row starts-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style=\"padding-top: 10px;\" width='100%' valign='top'>\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t{{address}}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Start Time : </strong>\n\t\t\t\t\t\t\t\t<!--<strong>{{todayDate}}</strong>-->\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 100px;'></u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Truck No : </strong>\n\t\t\t\t\t\t\t\t<strong>{{truckNumber}}</strong>\n\t\t\t\t\t\t\t\t<!--<strong>AN5633j9</strong>-->\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Source : </strong>\n\t\t\t\t\t\t\t\t<strong>{{source}}</strong>\n\t\t\t\t\t\t\t\t<!--<strong>Allepy</strong>-->\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Complete Time : </strong>\n\t\t\t\t\t\t\t\t<!--<strong>{{todayDate}}</strong>-->\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 100px;'></u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Challan No : </strong>\n\t\t\t\t\t\t\t\t<!--<strong>{{todayDate}}</strong>-->\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 100px;'></u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Dated : </strong>\n\t\t\t\t\t\t\t\t<strong>{{date}}</strong>\n\t\t\t\t\t\t\t\t<!--<strong>28-07-2020</strong>-->\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='text-align: center;font-size: large;'>\n\t\t\t\t\t<strong><u>{{toStation}} Loading Sheet.</u></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<!--Second  row starts-->\n\t\t<div class=\"container border\">\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Booking Date</strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> L.R.No.</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Note **</strong></td>\n\t\t\t\t\t\t<td width='5%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Art.</strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Booking From</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Act Wgt</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Chg Wgt</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong>Pvt Marker</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center' style='border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Remarks</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngFor=\"let listOfLrDtoData of listOfLrDtoDataTable\">\n\t\t\t\t\t\t<!--<tr>-->\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoBookingDate'>\n\t\t\t\t\t\t\t<strong>{{listOfLrDtoData.bookingDateStr}}</strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='lrDtoLrNo'>\n\t\t\t\t\t\t\t<strong>{{listOfLrDtoData.lrNumber}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'>\n\t\t\t\t\t\t\t<strong> {{listOfLrDtoData.description}}</strong></td>\n\t\t\t\t\t\t<td width='5%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoTotArt'>\n\t\t\t\t\t\t\t<strong>{{listOfLrDtoData.totalArticles}} </strong></td>\n\t\t\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoAgentName'>\n\t\t\t\t\t\t\t<strong>{{listOfLrDtoData.agentName}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='leDtoActWgt'>\n\t\t\t\t\t\t\t<strong>{{listOfLrDtoData.actualWeight}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoChgWgt'>\n\t\t\t\t\t\t\t<strong>{{listOfLrDtoData.chargedWeight}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoPrivateMarks'>\n\t\t\t\t\t\t\t<strong>{{listOfLrDtoData.privateMarker}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoRemarks'>\n\t\t\t\t\t\t\t<strong></strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<br>\n\t\t<div class=\"container border\">\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text'><strong> Shift.</strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Short </strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> Extra </strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<!--<tr *ngFor=\"let pfCollectionManDetailsData of pfCollectionManDetailsDataList\">-->\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appMemoNumberPrint'>\n\t\t\t\t\t\t\t<strong>Total L.R</strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appMemoNumberPrint'>\n\t\t\t\t\t\t\t<strong>{{totalCount}}</strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appEnteredDatePrint'>\n\t\t\t\t\t\t\t<strong>1 </strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'>\n\t\t\t\t\t\t\t<strong>1</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appMemoNumberPrint'>\n\t\t\t\t\t\t\t<strong>Weight</strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appMemoNumberPrint'>\n\t\t\t\t\t\t\t<strong>{{totWgt}} </strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appEnteredDatePrint'>\n\t\t\t\t\t\t\t<strong>1 </strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'>\n\t\t\t\t\t\t\t<strong>1</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appMemoNumberPrint'>\n\t\t\t\t\t\t\t<strong>To Pay</strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='appMemoNumberPrint'>\n\t\t\t\t\t\t\t<strong>{{totPay}} </strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appEnteredDatePrint'>\n\t\t\t\t\t\t\t<strong>1 </strong></td>\n\t\t\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'>\n\t\t\t\t\t\t\t<strong>1</strong></td>\n\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-left: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>HC-HANDLE WITH CARE, NW PRTY-NEW PARTY, COD </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Loading Clerk : </strong>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 200px;'>\n\t\t\t\t\t\t\t\t\t</u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6><br><br>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Incharge Sign : </strong>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 200px;'>\n\t\t\t\t\t\t\t\t\t</u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InvoiceLoadingsheetPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceLoadingsheetPrintComponent", function() { return InvoiceLoadingsheetPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceLoadingsheetPrintComponent = /** @class */ (function () {
    function InvoiceLoadingsheetPrintComponent(router, datePipe) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.isLoggedIn = true;
        this.invoiceDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_3__["InvoiceDto"]();
        this.listOfLrDto = [];
        this.listOfLrDtoDataTable = [];
        this.totWgt = 0;
        this.totPay = 0;
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
            this.invoiceDto = JSON.parse(localStorage.getItem('loadingSheetBookingForInvoiceDtoPrint'));
            this.listOfLrDto = JSON.parse(localStorage.getItem('loadingSheetBookingForListLrDtoPrint'));
            console.log(this.invoiceDto);
            console.log(this.listOfLrDto);
            this.truckNumber = this.invoiceDto.vehicleNumber == null ? null : this.invoiceDto.vehicleNumber;
            this.source = this.invoiceDto.stocksAt == null ? "" : this.invoiceDto.stocksAt;
            this.date = moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format('DD-MM-YYYY');
            this.toStation = this.invoiceDto.toStation == null ? "" : this.invoiceDto.toStation;
            // this.listOfLrDtoDataTable = this.listOfLrDto;
            this.totalCount = this.listOfLrDto.length;
            this.validatBeforePrint();
            // this.image =this.userDataDtoReturnSession.ip;
            for (var i = 0; i < this.listOfLrDto.length; i++) {
                this.handleWithCare = "";
                if (this.listOfLrDto[i].isHandWithCare
                    && this.listOfLrDto[i].isNewConsignee
                    && this.listOfLrDto[i].isCod) {
                    this.handleWithCare = "HC & NW PRTY & COD";
                }
                else if (this.listOfLrDto[i].isHandWithCare
                    && this.listOfLrDto[i].isNewConsignee
                    && !this.listOfLrDto[i].isCod) {
                    this.handleWithCare = "HC & COD";
                }
                else if (!this.listOfLrDto[i].isHandWithCare
                    && this.listOfLrDto[i].isNewConsignee
                    && this.listOfLrDto[i].isCod) {
                    this.handleWithCare = "NW PRTY & COD";
                }
                else if (this.listOfLrDto[i].isHandWithCare
                    && this.listOfLrDto[i].isNewConsignee
                    && !this.listOfLrDto[i].isCod) {
                    this.handleWithCare = "Hc & NW PRTY";
                }
                else if (this.listOfLrDto[i].isHandWithCare
                    && !this.listOfLrDto[i].isNewConsignee
                    && !this.listOfLrDto[i].isCod) {
                    this.handleWithCare = "Hc";
                }
                else if (!this.listOfLrDto[i].isHandWithCare
                    && this.listOfLrDto[i].isNewConsignee
                    && !this.listOfLrDto[i].isCod) {
                    this.handleWithCare = "NW PRTY";
                }
                else if (!this.listOfLrDto[i].isHandWithCare
                    && !this.listOfLrDto[i].isNewConsignee
                    && this.listOfLrDto[i].isCod) {
                    this.handleWithCare = "COD";
                }
                this.listOfLrDto[i].description = this.handleWithCare;
                this.totWgt = +this.totWgt + +this.listOfLrDto[i].actualWeight;
                this.totPay = +this.totPay + +this.listOfLrDto[i].toPay;
                this.listOfLrDtoDataTable.push(this.listOfLrDto[i]);
            }
            window.setTimeout(function () {
                window.print();
            }, 0);
            window.onafterprint = function () {
                window.close();
            };
            localStorage.clear();
            window.addEventListener('afterprint', function (event) {
                _this.clearField();
            });
        }
    }
    InvoiceLoadingsheetPrintComponent.prototype.ngOnInit = function () {
    };
    InvoiceLoadingsheetPrintComponent.prototype.validatBeforePrint = function () {
        this.address = this.userDataDtoReturnSession.addressId == null ? ' ' : this.userDataDtoReturnSession.addressId;
    };
    InvoiceLoadingsheetPrintComponent.prototype.clearField = function () {
        this.invoiceDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_3__["InvoiceDto"]();
        this.listOfLrDto = [];
        this.truckNumber = "";
        this.source = "";
        this.date = "";
        this.toStation = "";
        this.listOfLrDtoDataTable = [];
        this.totalCount = "";
        this.handleWithCare = "";
        this.totWgt = 0;
        this.totPay = 0;
        this.address = "";
        this.image = "";
        //document.getElementById("loadingsheetprint").innerHTML="";
        //document.all.item("firstPrint").innerHTML ="";
    };
    InvoiceLoadingsheetPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    InvoiceLoadingsheetPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-loadingsheet-print',
            template: __webpack_require__(/*! ./invoice-loadingsheet-print.component.html */ "./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.html"),
            styles: [__webpack_require__(/*! ./invoice-loadingsheet-print.component.css */ "./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], InvoiceLoadingsheetPrintComponent);
    return InvoiceLoadingsheetPrintComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\r\n\ttext-align: center;\r\n}\r\n\r\n.dsply-ib {\r\n\tdisplay: inline-block;\r\n}\r\n\r\nh6, h5, h4, h3, h2, h1, p, .custome {\r\n\tfont-size: 13.3px;\r\n\tmargin: 1px;\r\n\tpadding: 1px;\r\n\tpadding-top: 3px;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.fontS_15 {\r\n\tfont-size: 16px;\r\n\tmargin: 0px;\r\n}\r\n\r\n.fontS_13 {\r\n\tfont-size: 14px;\r\n\tmargin: 0px;\r\n\tpadding: 0px\r\n}\r\n\r\n.fontS_12 {\r\n\tfont-size: 13px;\r\n\tmargin: 0px;\r\n\tpadding: 0px\r\n}\r\n\r\n.font_bold{\r\nfont-weight:900;\r\n}\r\n\r\n.border {\r\n\tborder: 1px solid #000 !important;\r\n\tborder-collapse: collapse;\r\n\tpadding: 0px;\r\n}\r\n\r\n.dsplyNone {\r\n\tdisplay: none;\r\n}\r\n\r\n.border_right {\r\n\tborder-right: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.border_left {\r\n\tborder-left: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n\tmargin-left: -1px;\r\n}\r\n\r\n.border_bottom {\r\n\tborder-bottom: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n.border_top {\r\n\tborder-top: 1px solid #000;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\n@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#sidebarnav {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#section_to_print, #section_to_print * {\r\n\t\tvisibility: visible;\r\n\t}\r\n\t\r\n\t .modal-basic-title{\r\n visibility: hidden;\r\n }\r\n #closePopupBtn{\r\n visibility: hidden;\r\n }\r\n}\r\n\r\n#left, #right, div:empty {\r\n\tmin-height: 19px;\r\n}\r\n\r\n#left, div:empty {\r\n\tmin-height: 22px;\r\n}\r\n\r\n/* #left, #right, div!:empty { */\r\n\r\n/* \tmargin-top: -15px; */\r\n\r\n/* } */\r\n\r\n.sidebar-nav ul .sidebar-item {\r\n\tdisplay: none;\r\n}\r\n\r\n/* print changes */\r\n\r\n.container {\r\n\tmax-width: 97%;\r\n}\r\n\r\n@media ( min-width : 768px) {\r\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media ( min-width : 768px) {\r\n\t.col-md-3, .col-md-9 {\r\n\t\tpadding-left: 7px !important;\r\n\t}\r\n}\r\n\r\nhr {\r\n\tborder: .5px solid black;\r\n\twidth: 100%;\r\n\tmargin-left: 7px !important;\r\n\tmargin: 0px;\r\n}\r\n\r\n@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#sidebarnav {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#firstPrint, #firstPrint * {\r\n\t\tvisibility: visible;\r\n\t}\r\n/* \t.page-break { display:block; page-break-before:always; }  */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi9pbnZvaWNlLXN1bW1hcnktcHJpbnQvaW52b2ljZS1zdW1tYXJ5LXByaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsMENBQTBDO0NBQzFDOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUdEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBQ0Q7QUFDQSxnQkFBZ0I7Q0FDZjs7QUFDRDtDQUNDLGtDQUFrQztDQUNsQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsNkJBQTZCO0NBQzdCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsOEJBQThCO0NBQzlCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxvQkFBb0I7RUFDcEI7O0VBRUE7Q0FDRCxtQkFBbUI7RUFDbEI7Q0FDRDtDQUNBLG1CQUFtQjtFQUNsQjtDQUNEOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVELGlDQUFpQzs7QUFDakMseUJBQXlCOztBQUN6QixPQUFPOztBQUlQO0NBQ0MsY0FBYztDQUNkOztBQUNELG1CQUFtQjs7QUFDbkI7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQztFQUNDLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLDZCQUE2QjtFQUM3QjtDQUNEOztBQUVEO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaOztBQUVEO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0Msb0JBQW9CO0VBQ3BCO0FBQ0YsZ0VBQWdFO0NBQy9EIiwiZmlsZSI6InNyYy9hcHAvdHJpcC1jcmVhdGlvbi9pbnZvaWNlLXN1bW1hcnktcHJpbnQvaW52b2ljZS1zdW1tYXJ5LXByaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0X2FjIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kc3BseS1pYiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5oNiwgaDUsIGg0LCBoMywgaDIsIGgxLCBwLCAuY3VzdG9tZSB7XHJcblx0Zm9udC1zaXplOiAxMy4zcHg7XHJcblx0bWFyZ2luOiAxcHg7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cdHBhZGRpbmctdG9wOiAzcHg7XHJcblx0Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb250U18xNSB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZm9udFNfMTMge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHhcclxufVxyXG5cclxuXHJcbi5mb250U18xMiB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweFxyXG59XHJcbi5mb250X2JvbGR7XHJcbmZvbnQtd2VpZ2h0OjkwMDtcclxufVxyXG4uYm9yZGVyIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5kc3BseU5vbmUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3JkZXJfcmlnaHQge1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmJvcmRlcl9sZWZ0IHtcclxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRtYXJnaW4tbGVmdDogLTFweDtcclxufVxyXG5cclxuLmJvcmRlcl9ib3R0b20ge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5ib3JkZXJfdG9wIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdGJvZHkgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNzaWRlYmFybmF2IHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3NlY3Rpb25fdG9fcHJpbnQsICNzZWN0aW9uX3RvX3ByaW50ICoge1xyXG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHR9XHJcblx0XHJcblx0IC5tb2RhbC1iYXNpYy10aXRsZXtcclxuIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuIH1cclxuICNjbG9zZVBvcHVwQnRue1xyXG4gdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gfVxyXG59XHJcblxyXG4jbGVmdCwgI3JpZ2h0LCBkaXY6ZW1wdHkge1xyXG5cdG1pbi1oZWlnaHQ6IDE5cHg7XHJcbn1cclxuXHJcbiNsZWZ0LCBkaXY6ZW1wdHkge1xyXG5cdG1pbi1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi8qICNsZWZ0LCAjcmlnaHQsIGRpdiE6ZW1wdHkgeyAqL1xyXG4vKiBcdG1hcmdpbi10b3A6IC0xNXB4OyAqL1xyXG4vKiB9ICovXHJcblxyXG5cclxuXHJcbi5zaWRlYmFyLW5hdiB1bCAuc2lkZWJhci1pdGVtIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIHByaW50IGNoYW5nZXMgKi9cclxuLmNvbnRhaW5lciB7XHJcblx0bWF4LXdpZHRoOiA5NyU7XHJcbn1cclxuXHJcbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2OHB4KSB7XHJcblx0I21haW4td3JhcHBlcltkYXRhLWxheW91dD1cImhvcml6b250YWxcIl0gLnNpZGViYXItbmF2ICNzaWRlYmFybmF2IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xyXG5cdC5jb2wtbWQtMywgLmNvbC1tZC05IHtcclxuXHRcdHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5ociB7XHJcblx0Ym9yZGVyOiAuNXB4IHNvbGlkIGJsYWNrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDBweDtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuXHRib2R5ICoge1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHQjc2lkZWJhcm5hdiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNmaXJzdFByaW50LCAjZmlyc3RQcmludCAqIHtcclxuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0fVxyXG4vKiBcdC5wYWdlLWJyZWFrIHsgZGlzcGxheTpibG9jazsgcGFnZS1icmVhay1iZWZvcmU6YWx3YXlzOyB9ICAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page row system_responsive\" id=\"printPageHideShow\">\n\t<div class=\"col-md-12\">\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='40%' style=\"padding-top: 10px;\" valign='top'>\n\t\t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t{{address}}\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width='60%' valign='top'>\n\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='40%'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Truck No : </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='60%' style='border-bottom:1px solid #000;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{vehicleNumber}}\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='40%'><strong>Invoice No : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='60%' style='border-bottom:1px solid #000;'><strong>{{invoiceNumber}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='20%'><strong>From : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='30%' style='border-bottom:1px solid #000;'><strong>{{fromStation}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='20%'><strong>To : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='30%' style='border-bottom:1px solid #000;'><strong>{{toStation}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='40%'><strong>Dated : </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td width='60%' style='border-bottom:1px solid #000;'><strong>{{invoiceDate}} </strong></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='text-align: center;font-size: large;'>\n\t\t\t\t\t<strong><u>{{toStation}} Loading Sheet.</u></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<!--Second  row starts-->\n\t\t<div class=\"container border\">\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text'><strong> Station </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='number'><strong> L.R'S</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='number'><strong> Article</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='number'><strong> Actual Weight.</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text'><strong> Charged Weight</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text'><strong> To Pay</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text'><strong> Paid </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text'><strong>F O V</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text'><strong>Discount</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center' style='border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text'><strong> Goods Value</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngFor=\"let listOfInvoiceSummaryData of listOfInvoiceSummaryDetailsData\">\n\t\t\t\t\t\t<!--<tr>-->\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoBookingDate'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.destination}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='lrDtoLrNo'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.lrNumber}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'>\n\t\t\t\t\t\t\t<strong> {{listOfInvoiceSummaryData.actualArt}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoTotArt'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.actualWeight}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoAgentName'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.chargedWeight}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='leDtoActWgt'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.toPay}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoChgWgt'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.paid}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoPrivateMarks'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.riskCharge}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoPrivateMarks'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.discountAmount}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoPrivateMarks'>\n\t\t\t\t\t\t\t<strong>{{listOfInvoiceSummaryData.goodsValue}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text' id='lrDtoRemarks'>\n\t\t\t\t\t\t\t<strong></strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoBookingDate'>\n\t\t\t\t\t\t\t<strong>Total {{totalCounts}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='lrDtoLrNo'>\n\t\t\t\t\t\t\t<strong>{{totalLrs}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'>\n\t\t\t\t\t\t\t<strong> {{articles}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoTotArt'>\n\t\t\t\t\t\t\t<strong>{{actWt}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoAgentName'>\n\t\t\t\t\t\t\t<strong>{{chgWt}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='leDtoActWgt'>\n\t\t\t\t\t\t\t<strong>{{toPay}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoChgWgt'>\n\t\t\t\t\t\t\t<strong>{{paid}}</strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoPrivateMarks'>\n\t\t\t\t\t\t\t<strong>{{riskChg}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoPrivateMarks'>\n\t\t\t\t\t\t\t<strong>{{lessAmt}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='text' id='lrDtoPrivateMarks'>\n\t\t\t\t\t\t\t<strong>{{goodsValue}} </strong></td>\n\t\t\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\t\t\ttype='text' id='lrDtoRemarks'>\n\t\t\t\t\t\t\t<strong></strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<br>\n\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Loaded By : </strong>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 200px;'>\n\t\t\t\t\t\t\t\t\t\t{{loadedBy}}</u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InvoiceSummaryPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSummaryPrintComponent", function() { return InvoiceSummaryPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceSummaryPrintComponent = /** @class */ (function () {
    function InvoiceSummaryPrintComponent(router, datePipe) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.isLoggedIn = true;
        this.summaryLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_3__["LRDto"]();
        this.listOfLrDto = [];
        this.articles = 0;
        this.totalLrs = 0;
        this.actWt = 0;
        this.chgWt = 0;
        this.toPay = 0;
        this.paid = 0;
        this.servTax = 0;
        this.lessAmt = 0;
        this.riskChg = 0;
        this.listOfInvoiceSummaryDetailsData = [];
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
            this.address = this.userDataDtoReturnSession.addressId == null ? ' ' : this.userDataDtoReturnSession.addressId;
            this.summaryLRDto = JSON.parse(localStorage.getItem('invoiceSummaryForLRDtoPrint'));
            this.listOfLrDto = JSON.parse(localStorage.getItem('invoiceSummaryForLRDtoListPrint'));
            console.log(this.summaryLRDto);
            console.log(this.listOfLrDto);
            if (this.listOfLrDto != null &&
                this.listOfLrDto != undefined &&
                this.listOfLrDto.length > 0) {
                this.vehicleNumber = this.listOfLrDto[0].vehicleNumber;
                this.totalCounts = this.listOfLrDto.length;
                this.loadedBy = this.listOfLrDto[0].loaderName;
            }
            if (this.summaryLRDto != null && this.summaryLRDto != undefined) {
                this.invoiceNumber = this.summaryLRDto.invoiceNumber;
                this.fromStation = this.summaryLRDto.fromStation;
                this.toStation = this.summaryLRDto.toStation;
                this.invoiceDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.summaryLRDto.invoiceDate).format('DD-MM-YYYY');
            }
            this.listOfInvoiceSummaryDetailsData = [];
            if (this.listOfLrDto != null && this.listOfLrDto != undefined && this.listOfLrDto.length > 0) {
                for (var i = 0; i < this.listOfLrDto.length; i++) {
                    this.articles = +this.articles + +this.listOfLrDto[i].actualArt;
                    this.totalLrs = +this.totalLrs + +this.listOfLrDto[i].lrNumber;
                    this.actWt = +this.actWt + +this.listOfLrDto[i].actualWeight;
                    this.chgWt = +this.chgWt + +this.listOfLrDto[i].chargedWeight;
                    this.toPay = +this.toPay + +this.listOfLrDto[i].toPay;
                    this.paid = +this.paid + +this.listOfLrDto[i].paid;
                    this.servTax = +this.servTax + +this.listOfLrDto[i].serviceTax;
                    this.goodsValue = +this.goodsValue + +this.listOfLrDto[i].goodsValue;
                    this.lessAmt = +this.lessAmt + +this.listOfLrDto[i].discountAmount;
                    this.riskChg = +this.riskChg + +this.listOfLrDto[i].riskCharge;
                    this.listOfInvoiceSummaryDetailsData.push(this.listOfLrDto[i]);
                }
            }
            console.log("HAI-Invoice Summary");
            console.log(this.listOfInvoiceSummaryDetailsData);
            window.setTimeout(function () {
                window.print();
            }, 0);
            window.onafterprint = function () {
                window.close();
            };
            localStorage.clear();
            window.addEventListener('afterprint', function (event) {
                _this.clearField();
            });
        }
    }
    InvoiceSummaryPrintComponent.prototype.ngOnInit = function () {
    };
    InvoiceSummaryPrintComponent.prototype.validatBeforePrint = function () {
    };
    InvoiceSummaryPrintComponent.prototype.clearField = function () {
    };
    InvoiceSummaryPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    InvoiceSummaryPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-summary-print',
            template: __webpack_require__(/*! ./invoice-summary-print.component.html */ "./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.html"),
            styles: [__webpack_require__(/*! ./invoice-summary-print.component.css */ "./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], InvoiceSummaryPrintComponent);
    return InvoiceSummaryPrintComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/multiple-point-details/multiple-point-details.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/trip-creation/multiple-point-details/multiple-point-details.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n::ng-deep .mat-horizontal-stepper-header {\r\n\tpointer-events: none !important;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi9tdWx0aXBsZS1wb2ludC1kZXRhaWxzL211bHRpcGxlLXBvaW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtDQUNDLGdDQUFnQztDQUNoQzs7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtY3JlYXRpb24vbXVsdGlwbGUtcG9pbnQtZGV0YWlscy9tdWx0aXBsZS1wb2ludC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3d7XHJcblx0dG9wOiAyNnB4O1xyXG4gICAgbGVmdDogMTg4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/trip-creation/multiple-point-details/multiple-point-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/trip-creation/multiple-point-details/multiple-point-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<html>\r\n\r\n<head>\r\n\t<style>\r\n\t\t.imb_patch {\r\n\t\t\ttext-align: center;\r\n\t\t\tbackground-color: orange;\r\n\t\t\tpadding: 2px;\r\n\t\t}\r\n\t</style>\r\n</head>\r\n\r\n<body>-->\r\n<div mat-dialog-content>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-12 col-md-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-university\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<input id=\"multipleDeliveryPointDestinationId\" type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForMultipleDeliveryPointStation($event)\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"modelMultipleDeliveryPointDestination\"\r\n\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchMultipleDeliveryPointDest\"\r\n\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterMultipleDeliveryPointDest\"\r\n\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterMultipleDeliveryPointDest\"\r\n\t\t\t\t\t\t\t\t(focus)=\"focusMultipleDeliveryPointDestTA$.next($any($event).target.value)\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12 col-md-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-search\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"deliveryPointMultipleFormat\"\r\n\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \" autocomplete=\"off\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t<div class=\"control\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-university\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"deliveryPointMultipleSearch\"\r\n\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\r\n\t\t\t\t\t\t\t\t\t(keypress)=\"keyEventHandlerMultiDeliveryPointSearch($event.keyCode)\"\r\n\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' #addBtn style=\"padding: 1px 4px;\"\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-icon-only yellow\" (click)=\"clearFieldBtn();\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-times\" title=\"Clear\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t\t<table datatable id=\"deliveryPointMultipleTableId\"\r\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDeliveryPointMultiple\"\r\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDeliveryPointMultiple\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Delivery Area</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Delivery Points</th>\r\n\t\t\t\t\t\t\t\t\t\t<!--<th>Delivery Points Value</th>-->\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let gridDeliveryPointData of gridDeliveryPointMultiple let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ gridDeliveryPointData.deliveryarea }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ gridDeliveryPointData.invoiceNumber }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"radioBtnMultiplePointId\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"radioBtnMultiplePointId\" title=\"Delivery Points\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"radioButtonListnerDeliveryPoint(gridDeliveryPointData)\">\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<!--<td>{{ gridDeliveryPointData.deliveryPoints }}</td>-->\r\n\t\t\t\t\t\t\t\t\t\t<td><button style=\"padding: 1px 4px; background-color: #ffffff00;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"deleteRowSelectedMultipleDeliveryPt(gridDeliveryPointData,i)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button></td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div mat-dialog-actions style=\"float: right;\">\r\n\t<button class=\"btn btn-outline-danger\" mat-button (click)=\"onCancelClick()\">Close</button>\r\n</div>\r\n<!--</body>\r\n\r\n</html>-->"

/***/ }),

/***/ "./src/app/trip-creation/multiple-point-details/multiple-point-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/trip-creation/multiple-point-details/multiple-point-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MultiplePointDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplePointDetailsComponent", function() { return MultiplePointDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
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


//for datatable starts



//from the particular global folder ends
//for datatable ends
//for modal starts





var my = new Date();






//for modal ends
var MultiplePointDetailsComponent = /** @class */ (function () {
    function MultiplePointDetailsComponent(memoLessRpt, router, masterReadService, memoReport, stockService, modalService, dialogRef, data) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.stockService = stockService;
        this.modalService = modalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dtTriggerDeliveryPointMultiple = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.loadingIndicator = true;
        /* DROP DOWN */
        this.lrDtoForMultipleInvoice = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.MultipleDeliveryPointStationTA = [];
        this.focusMultipleDeliveryPointDestTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchMultipleDeliveryPointDest = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusMultipleDeliveryPointDestTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (term) { return (term === '' ? _this.MultipleDeliveryPointStationTA
                : _this.MultipleDeliveryPointStationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterMultipleDeliveryPointDest = function (x) { return x.destination; };
        /* DROP DOWN */
        this.userDataDtoMultipleDeliveryPointStationCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_13__["UserDataDto"]();
        this.hireSlipDtoForDeliveryPointMultiple = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__["HireSlipDto"]();
        this.newAttributeToSetMultipleDeliveryPoint = {};
        this.editMultipleDeliveryPointTableDetailsId = null;
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
            console.log(data);
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.popUpOpenMultipleDeliveryPointData = JSON.parse(localStorage.getItem('DeliveryPointOpen'));
            this.hireslipLocalStorageDeliveryPoint = JSON.parse(localStorage.getItem('DeliveryPointHireslipLocalStorage'));
            localStorage.clear();
            console.log(this.popUpOpenMultipleDeliveryPointData);
            this.getDestinationMultiInvoice();
        }
    }
    MultiplePointDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    MultiplePointDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    MultiplePointDetailsComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsDeliveryPointMultiple = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            searching: false,
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 200,
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
                var discAmt = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            },
        };
    };
    MultiplePointDetailsComponent.prototype.ngOnDestroy = function () {
        //this.dtTriggerDeliveryPointMultiple.unsubscribe();
    };
    MultiplePointDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerDeliveryPointMultiple.next();
    };
    MultiplePointDetailsComponent.prototype.clickListnerForMultipleDeliveryPointStation = function (e, fubi) {
        this.modelMultipleDeliveryPointDestination = e.item;
        console.log(this.modelMultipleDeliveryPointDestination);
        $("#multipleDeliveryPointDestinationId").val(this.modelMultipleDeliveryPointDestination.destination);
        this.getStationCodeMultiInvoice();
    };
    MultiplePointDetailsComponent.prototype.getDestinationMultiInvoice = function () {
        var _this = this;
        this.lrDtoForMultipleInvoice = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDtoForMultipleInvoice.branch = this.userDataDtoReturnSession.office;
        this.lrDtoForMultipleInvoice.mode = "Other";
        this.lrDtoForMultipleInvoice.companyId = this.userDataDtoReturnSession.companyId;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoForMultipleInvoice).subscribe(function (response) {
            if (response.length == 0) {
                //swal("Warning", "No Destination Multi Invoice records found!", "warning");
                _this.lrDtoListMultipleDeliveryPointOptions = [];
                _this.MultipleDeliveryPointStationTA = [];
            }
            else {
                _this.lrDtoListMultipleDeliveryPointOptions = [];
                _this.MultipleDeliveryPointStationTA = [];
                _this.lrDtoListMultipleDeliveryPointOptions = response;
                for (var i = 0; i < _this.lrDtoListMultipleDeliveryPointOptions.length; i++) {
                    _this.MultipleDeliveryPointStationTA.push(_this.lrDtoListMultipleDeliveryPointOptions[i]);
                }
            }
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Error While Getting Destination Multi Invoice", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    MultiplePointDetailsComponent.prototype.getStationCodeMultiInvoice = function () {
        var _this = this;
        this.userDataDtoMultipleDeliveryPointStationCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_13__["UserDataDto"]();
        this.multiDeliveryPointDestination = $("#multipleDeliveryPointDestinationId").val();
        this.userDataDtoMultipleDeliveryPointStationCode.office = this.multiDeliveryPointDestination;
        //alert(this.multiInvoiceDestination);
        this.userDataDtoMultipleDeliveryPointStationCode.companyId = this.userDataDtoReturnSession.companyId;
        this.masterReadService.getStationCodeService(this.userDataDtoMultipleDeliveryPointStationCode).subscribe(function (response) {
            _this.userDataDtoReturnMultipleDeliveryPointStationCode = response;
            if (response) {
                _this.searchFormatForMultipleDeliveryPoint = null;
                _this.searchFormatForMultipleDeliveryPoint = _this.userDataDtoReturnSession.stationCode + "/"
                    + _this.userDataDtoReturnMultipleDeliveryPointStationCode.stationCode + "/"
                    + _this.userDataDtoReturnSession.financialYearSplit + "/";
                $("#deliveryPointMultipleFormat").val(_this.searchFormatForMultipleDeliveryPoint);
                //pending work
                //txtMultiInvoicePopupInvoiceFormat.setReadOnly(false);
                $("#deliveryPointMultipleSearch").focus();
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Error",
            text: "Server Error While Getting Destination Multi Invoice",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    MultiplePointDetailsComponent.prototype.keyEventHandlerMultiDeliveryPointSearch = function (event) {
        var _this = this;
        if (event == 13) {
            if ($("#deliveryPointMultipleSearch").val() == null ||
                $("#deliveryPointMultipleSearch").val() == undefined ||
                $("#deliveryPointMultipleSearch").val() == "") {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Empty Data", "Please enter the Invoice Number", "warning");
                $("#deliveryPointMultipleSearch").focus();
            }
            else {
                this.hireSlipDtoForDeliveryPointMultiple = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__["HireSlipDto"]();
                this.multipleDeliveryPointFormat = $("#deliveryPointMultipleFormat").val();
                this.multipleDeliveryPointSearch = $("#deliveryPointMultipleSearch").val();
                this.hireSlipDtoForDeliveryPointMultiple.invoiceNumber = this.multipleDeliveryPointFormat + ""
                    + this.multipleDeliveryPointSearch;
                this.hireSlipDtoForDeliveryPointMultiple.fromStation = this.userDataDtoReturnSession.mainStation;
                this.stockService.checkInvoiceForMultiPtDeliv(this.hireSlipDtoForDeliveryPointMultiple).subscribe(function (response) {
                    if (response) {
                        console.log(response.status);
                        response.status = "allow";
                        if (response.status != null && response.status == "allow") {
                            _this.reconfigureAddMultiDeliveryPointInvoice();
                            $("#deliveryPointMultipleSearch").val('');
                        }
                        else if (response.status != null && response.status == "block") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Not Allowed", "Invoice Number is Not Allowed", "warning");
                        }
                    }
                }), function (error) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Error While Getting Station Code Service", "warning");
                }, function () { return console.log('done'); };
            }
        }
    };
    MultiplePointDetailsComponent.prototype.reconfigureAddMultiDeliveryPointInvoice = function () {
        var _this = this;
        this.newAttributeToSetMultipleDeliveryPoint.invoiceNumber = $("#deliveryPointMultipleFormat").val() + "" +
            $("#deliveryPointMultipleSearch").val();
        this.newAttributeToSetMultipleDeliveryPoint.deliveryarea = $("#multipleDeliveryPointDestinationId").val();
        //this.newAttributeToSetMultipleDeliveryPoint.deliveryPoints = $("#checkboxArea").is(":checked");
        if (this.gridDeliveryPointMultiple == null ||
            this.gridDeliveryPointMultiple == undefined) {
            this.gridDeliveryPointMultiple = [];
        }
        if (this.gridDeliveryPointMultiple.length == 0) {
            $("#deliveryPointMultipleTableId").DataTable().destroy();
            this.gridDeliveryPointMultiple.push(this.newAttributeToSetMultipleDeliveryPoint);
            this.dtTriggerDeliveryPointMultiple.next();
        }
        else {
            var result = this.gridDeliveryPointMultiple.filter(function (multiInvoiceNoData) {
                return multiInvoiceNoData.invoiceNumber === _this.newAttributeToSetMultipleDeliveryPoint.invoiceNumber;
            });
            console.log(result);
            if (result.length > 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Duplicate Entry",
                    text: "Invoice Number " + this.newAttributeToSetMultipleDeliveryPoint.invoiceNumber + " Already Exist",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                $("#deliveryPointMultipleTableId").DataTable().destroy();
                this.gridDeliveryPointMultiple.push(this.newAttributeToSetMultipleDeliveryPoint);
                this.dtTriggerDeliveryPointMultiple.next();
            }
        }
        this.newAttributeToSetMultipleDeliveryPoint = {};
    };
    MultiplePointDetailsComponent.prototype.deleteRowSelectedMultipleDeliveryPt = function (gridDeliveryPointData, index) {
        this.gridDeliveryPointMultiple.splice(index, 1);
        $("#deliveryPointMultipleSearch").val('');
    };
    MultiplePointDetailsComponent.prototype.clearFieldBtn = function () {
        $("#deliveryPointMultipleSearch").val('');
        $("#deliveryPointMultipleFormat").val('');
        this.modelMultipleDeliveryPointDestination = null;
    };
    MultiplePointDetailsComponent.prototype.onCancelClick = function () {
        if (this.gridDeliveryPointMultiple == null ||
            this.gridDeliveryPointMultiple == undefined ||
            this.gridDeliveryPointMultiple.length == 0) {
            this.gridDeliveryPointMultiple = [];
        }
        localStorage.clear();
        localStorage.setItem('DeliveryPointClose', JSON.stringify(this.gridDeliveryPointMultiple));
        localStorage.setItem('firstPtDelivPopupClose', JSON.stringify(this.firstPtDelivPopup));
        this.dialogRef.close("Close");
        this.popUpOpenMultipleDeliveryPointData = null;
        $("#deliveryPointMultipleSearch").val('');
        $("#deliveryPointMultipleFormat").val('');
        this.modelMultipleDeliveryPointDestination = null;
        console.log(this.popUpOpenMultipleDeliveryPointData);
        console.log(localStorage);
        this.clearField();
    };
    MultiplePointDetailsComponent.prototype.radioButtonListnerDeliveryPoint = function (selectedCheckBoxData) {
        console.log(selectedCheckBoxData);
        if (this.hireslipLocalStorageDeliveryPoint.size > 0 &&
            selectedCheckBoxData.deliveryArea == this.hireslipLocalStorageDeliveryPoint.deliveryArea) {
            $("#radioBtnMultiplePointId").prop('checked', true);
        }
        this.firstPtDelivPopup = selectedCheckBoxData.deliveryArea;
    };
    MultiplePointDetailsComponent.prototype.clearField = function () {
        this.userDataDtoMultipleDeliveryPointStationCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_13__["UserDataDto"]();
        this.hireSlipDtoForDeliveryPointMultiple = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__["HireSlipDto"]();
        this.userDataDtoReturnMultipleDeliveryPointStationCode = null;
        this.multiDeliveryPointDestination = null;
        this.searchFormatForMultipleDeliveryPoint = null;
        this.multipleDeliveryPointFormat = null;
        this.multipleDeliveryPointSearch = null;
        this.newAttributeToSetMultipleDeliveryPoint = {};
        this.firstPtDelivPopup = null;
        this.editMultipleDeliveryPointTableDetailsId = null;
        this.hireslipLocalStorageDeliveryPoint = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MultiplePointDetailsComponent.prototype, "dtElements", void 0);
    MultiplePointDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-point-details',
            template: __webpack_require__(/*! ./multiple-point-details.component.html */ "./src/app/trip-creation/multiple-point-details/multiple-point-details.component.html"),
            styles: [__webpack_require__(/*! ./multiple-point-details.component.css */ "./src/app/trip-creation/multiple-point-details/multiple-point-details.component.css")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_11__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_4__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__["MemoReport"],
            src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_14__["StockService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], MultiplePointDetailsComponent);
    return MultiplePointDetailsComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n::ng-deep .mat-horizontal-stepper-header {\r\n\tpointer-events: none !important;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi9tdWx0aXBsZWludm9pY2UtbGFzdHBvaW50LWRldGFpbHMvbXVsdGlwbGVpbnZvaWNlLWxhc3Rwb2ludC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7Q0FDQyxnQ0FBZ0M7Q0FDaEM7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC90cmlwLWNyZWF0aW9uL211bHRpcGxlaW52b2ljZS1sYXN0cG9pbnQtZGV0YWlscy9tdWx0aXBsZWludm9pY2UtbGFzdHBvaW50LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcclxuXHR0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxODhweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-12 col-md-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-university\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<input id=\"multiInvoiceDestinationId\" type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForMultiInvoiceStation($event)\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"modelMultiInvoiceDest\" [ngbTypeahead]=\"searchMultiInvoiceDest\"\r\n\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterMultiInvoiceDest\"\r\n\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterMultiInvoiceDest\"\r\n\t\t\t\t\t\t\t\t(focus)=\"focusMultiInvoiceDestTA$.next($any($event).target.value)\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12 col-md-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-search\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"multiInvoicePopupInvoiceFormat\"\r\n\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \" autocomplete=\"off\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t<div class=\"control\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-university\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"multiInvoicePopUpNo\"\r\n\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\r\n\t\t\t\t\t\t\t\t\t(keypress)=\"keyEventHandlerMultiInvoicePopUp($event.keyCode)\" autocomplete=\"off\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' #addBtn style=\"padding: 1px 4px;\"\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-icon-only yellow\" (click)=\"clearFieldBtn();\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-times\" title=\"Clear\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t\t<table datatable id=\"multipleInvoiceLastPointTableId\"\r\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHireslipDetails\" [dtTrigger]=\"dtTriggerHireslipDetails\">\r\n\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let multiInvoiceNoData of gridTosetInvoiceNumberList let i = index \">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ multiInvoiceNoData.cmMultiInvoice }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; background-color: #ffffff00;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDelete(multipleInvoiceNoLinkedHireslip,i)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div mat-dialog-actions style=\"float: right;\">\r\n\t<button class=\"btn btn-outline-success\" mat-button (click)=\"onMultipleInvoiceOkClick()\">Ok</button>\r\n\t<button class=\"btn btn-outline-danger\" mat-button (click)=\"onCancelClick()\">Close</button>\r\n</div>"

/***/ }),

/***/ "./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MultipleInvoiceLastPointDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleInvoiceLastPointDetailsComponent", function() { return MultipleInvoiceLastPointDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
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










var my = new Date();






//for modal ends
var MultipleInvoiceLastPointDetailsComponent = /** @class */ (function () {
    function MultipleInvoiceLastPointDetailsComponent(memoLessRpt, router, masterReadService, memoReport, stockService, modalService, dialogRef, data) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.stockService = stockService;
        this.modalService = modalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dtTriggerHireslipDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.loadingIndicator = true;
        this.lrDtoForMultipleInvoice = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.multipleInvoiceStationTA = [];
        this.focusMultiInvoiceDestTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchMultiInvoiceDest = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusMultiInvoiceDestTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (term) { return (term === '' ? _this.multipleInvoiceStationTA
                : _this.multipleInvoiceStationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterMultiInvoiceDest = function (x) { return x.destination; };
        this.newAttributeTosetInvoiceNo = {};
        this.userDataDtoStationCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_13__["UserDataDto"]();
        this.hireSlipDtoMultiInvoicePopup = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__["HireSlipDto"]();
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
            this.multipleInvoiceLastPointLocalStorage = JSON.parse(localStorage.getItem('MultipleInvoiceLastPtOpen'));
            localStorage.clear();
            this.getDestinationMultiInvoice();
        }
    }
    MultipleInvoiceLastPointDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                //this.dtTriggerMemoLessDescriptionDetails.next();
            });
        });
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsHireslipDetails = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            searching: false,
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 200,
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
                var discAmt = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                //$(api.column(0).footer()).html('Total : ' + data.length);
                //$(api.column(1).footer()).html(discAmt);
            },
        };
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.ngOnDestroy = function () {
        //this.dtTriggerHireslipDetails.unsubscribe();
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerHireslipDetails.next();
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.clickListnerForMultiInvoiceStation = function (e, fubi) {
        this.modelMultiInvoiceDest = e.item;
        console.log(this.modelMultiInvoiceDest);
        $("#multiInvoiceDestinationId").val(this.modelMultiInvoiceDest.destination);
        this.getStationCodeMultiInvoice();
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.getDestinationMultiInvoice = function () {
        var _this = this;
        this.lrDtoForMultipleInvoice = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDtoForMultipleInvoice.branch = this.userDataDtoReturnSession.office;
        this.lrDtoForMultipleInvoice.mode = "Other";
        this.lrDtoForMultipleInvoice.companyId = this.userDataDtoReturnSession.companyId;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoForMultipleInvoice).subscribe(function (response) {
            if (response.length == 0) {
                _this.lrDtoListMultipleInvOptions = [];
                _this.multipleInvoiceStationTA = [];
            }
            else {
                _this.lrDtoListMultipleInvOptions = [];
                _this.multipleInvoiceStationTA = [];
                _this.lrDtoListMultipleInvOptions = response;
                for (var i = 0; i < _this.lrDtoListMultipleInvOptions.length; i++) {
                    _this.multipleInvoiceStationTA.push(_this.lrDtoListMultipleInvOptions[i]);
                }
            }
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Error While Getting Destination Multi Invoice", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    MultipleInvoiceLastPointDetailsComponent.prototype.getStationCodeMultiInvoice = function () {
        var _this = this;
        this.userDataDtoStationCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_13__["UserDataDto"]();
        this.multiInvoiceDestination = $("#multiInvoiceDestinationId").val();
        this.userDataDtoStationCode.office = this.multiInvoiceDestination;
        //alert(this.multiInvoiceDestination);
        this.userDataDtoStationCode.companyId = this.userDataDtoReturnSession.companyId;
        this.masterReadService.getStationCodeService(this.userDataDtoStationCode).subscribe(function (response) {
            _this.userDataDtoReturnStationCode = response;
            if (response) {
                _this.invocieFormat = _this.userDataDtoReturnSession.stationCode + "/"
                    + _this.userDataDtoReturnStationCode.stationCode + "/"
                    + _this.userDataDtoReturnSession.financialYearSplit + "/";
                $("#multiInvoicePopupInvoiceFormat").val(_this.invocieFormat);
                //pending work
                //txtMultiInvoicePopupInvoiceFormat.setReadOnly(false);
                $("#multiInvoicePopUpNo").focus();
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Error",
            text: "Server Error While Getting getDestinationMultiInvoice",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.keyEventHandlerMultiInvoicePopUp = function (event) {
        var _this = this;
        if (event == 13) {
            if ($("#multiInvoicePopUpNo").val() == null || $("#multiInvoicePopUpNo").val() == "") {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Empty Data", "Please enter the Invoice Number", "warning");
                $("#multiInvoicePopUpNo").focus();
            }
            else {
                this.hireSlipDtoMultiInvoicePopup = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__["HireSlipDto"]();
                this.multiInvoiceNumberFormatForPopUp = $("#multiInvoicePopupInvoiceFormat").val();
                this.multiInvoiceNumberForPopUp = $("#multiInvoicePopUpNo").val();
                this.hireSlipDtoMultiInvoicePopup.invoiceNumber = this.multiInvoiceNumberFormatForPopUp + ""
                    + this.multiInvoiceNumberForPopUp;
                this.hireSlipDtoMultiInvoicePopup.fromStation = this.userDataDtoReturnSession.mainStation;
                this.stockService.checkInvoiceForMultiPtDeliv(this.hireSlipDtoMultiInvoicePopup).subscribe(function (response) {
                    if (response) {
                        console.log(response.status);
                        //response.status = "allow";
                        if (response.status != null && response.status == "allow") {
                            _this.reconfigureAddMultiInvoice();
                            $("#multiInvoicePopUpNo").val('');
                        }
                        else if (response.status != null && response.status == "block") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Not Allowed", "Invoice Number is Not Allowed, please enter the valid Invoice Number", "warning");
                        }
                    }
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Error",
                    text: "Server Error While Getting getStationCodeService",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                    function () { return console.log('done'); };
            }
        }
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.reconfigureAddMultiInvoice = function () {
        var _this = this;
        this.newAttributeTosetInvoiceNo.cmMultiInvoice = $("#multiInvoicePopupInvoiceFormat").val() + "" + $("#multiInvoicePopUpNo").val();
        if (this.gridTosetInvoiceNumberList == null) {
            this.gridTosetInvoiceNumberList = [];
        }
        if (this.gridTosetInvoiceNumberList.length == 0) {
            $("#multipleInvoiceLastPointTableId").DataTable().destroy();
            this.gridTosetInvoiceNumberList.push(this.newAttributeTosetInvoiceNo);
            this.dtTriggerHireslipDetails.next();
        }
        else {
            var result = this.gridTosetInvoiceNumberList.filter(function (multiInvoiceNoData) { return multiInvoiceNoData.cmMultiInvoice === _this.newAttributeTosetInvoiceNo.cmMultiInvoice; });
            console.log(result);
            if (result.length > 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Duplicate Entry",
                    text: "Invoice Number " + this.newAttributeTosetInvoiceNo.cmMultiInvoice + " Already Exist",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                $("#multipleInvoiceLastPointTableId").DataTable().destroy();
                this.gridTosetInvoiceNumberList.push(this.newAttributeTosetInvoiceNo);
                this.dtTriggerHireslipDetails.next();
            }
        }
        this.newAttributeTosetInvoiceNo = {};
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.rowSelectedDelete = function (multipleInvoiceNoLinkedHireslip, index) {
        this.gridTosetInvoiceNumberList.splice(index, 1);
        $("#multiInvoicePopUpNo").val('');
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.getInvoiceNumbersMultiInvoice = function () {
        this.listOfInvoice = [];
        if (this.gridTosetInvoiceNumberList != null &&
            this.gridTosetInvoiceNumberList != undefined &&
            this.gridTosetInvoiceNumberList.length > 0) {
            for (var i = 0; i < this.gridTosetInvoiceNumberList.length; i++) {
                this.listOfInvoice.push(this.gridTosetInvoiceNumberList[i]);
            }
        }
        console.log(this.gridTosetInvoiceNumberList);
        console.log(this.listOfInvoice);
        return this.listOfInvoice;
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.onMultipleInvoiceOkClick = function () {
        //this.listOfInvoice = [];
        this.listOfInvoice = this.getInvoiceNumbersMultiInvoice();
        if (this.listOfInvoice.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Warning", "Please add atleast one Invoice to proceed.", "warning");
            return false;
        }
        else {
            console.log(this.listOfInvoice);
            this.dialogRef.close(JSON.stringify(this.listOfInvoice));
            //this.dialogRef.close(JSON.stringify(this.gridTosetInvoiceNumberList));
            this.clearField();
        }
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.onCancelClick = function () {
        this.listOfInvoice = [];
        this.listOfInvoiceReturn = [];
        this.dialogRef.close(JSON.stringify(this.listOfInvoiceReturn));
        this.clearField();
    };
    MultipleInvoiceLastPointDetailsComponent.prototype.clearField = function () {
        this.multipleInvoiceLastPointLocalStorage = null;
        this.multiInvoiceDestination = null;
        this.userDataDtoReturnStationCode = null;
        this.invocieFormat = null;
        this.multiInvoiceNumberFormatForPopUp = null;
        this.multiInvoiceNumberForPopUp = null;
        this.newAttributeTosetInvoiceNo = {};
        this.userDataDtoStationCode = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_13__["UserDataDto"]();
        this.hireSlipDtoMultiInvoicePopup = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__["HireSlipDto"]();
        this.listOfInvoiceReturn = [];
        this.listOfInvoice = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MultipleInvoiceLastPointDetailsComponent.prototype, "dtElements", void 0);
    MultipleInvoiceLastPointDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multipleinvoice-lastpoint-details',
            template: __webpack_require__(/*! ./multipleinvoice-lastpoint-details.component.html */ "./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.html"),
            styles: [__webpack_require__(/*! ./multipleinvoice-lastpoint-details.component.css */ "./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.css")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_11__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_4__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__["MemoReport"],
            src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_14__["StockService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], MultipleInvoiceLastPointDetailsComponent);
    return MultipleInvoiceLastPointDetailsComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/stocks-grouping/stocks-grouping.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/trip-creation/stocks-grouping/stocks-grouping.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-horizontal-stepper-header {\n\theight: auto !important;\n}\n\n::ng-deep table.dataTable {\n\theight: 220px;\n}\n\n::ng-deep .mat-horizontal-content-container {\n\toverflow: hidden;\n\tpadding: 0px 0px 0px 0px !important;\n}\n\n/* ::ng-deep basic-container .mat-step-header .mat-step-icon-selected { */\n\n/* \tbackground-color: ; */\n\n/* \tcolor: #fff; */\n\n/* } */\n\n::ng-deep .mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done,\n\t.mat-step-header .mat-step-icon-state-edit .mat-step-header .mat-step-icon\n\t{\n\tbackground-color: blue;\n\tcolor: #fff;\n}\n\n/* ::ng-deep .mat-step-header.cdk-program-focused, .mat-step-header:hover { */\n\n/* \tbackground-color: #ffcd72; */\n\n/* } */\n\n/* for label starts */\n\n::ng-deep.mat-step-label {\n\tfont-size: 16px;\n\tfont-weight: 700;\n}\n\n/* icon fonts */\n\n::ng-deep .mat-horizontal-stepper-header .mat-step-icon {\n\tfont-size: 18px;\n}\n\n/* previous icon */\n\n.mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done,\n\t.mat-step-header .mat-step-icon-state-edit {\n\tbackground-color: #673ab7;\n\tcolor: #fff;\n}\n\n/* icons */\n\n::ng-deep .mat-step-icon {\n\theight: 30px;\n\twidth: 30px;\n}\n\n::ng-deep .mat-step-icon .mat-icon {\n\tfont-size: 20px;\n\theight: 22px;\n\twidth: 20px;\n}\n\n/* for row of stepper */\n\n::ng-deep .mat-horizontal-stepper-header-container {\n\theight: 32px;\n\tbackground-color: lightcyan;\n}\n\n/* on hover */\n\n::ng-deep .mat-step-header:hover, .mat-step-label:hover {\n\tbackground-color: white;\n\tcolor: #fff;\n}\n\n::ng-deep .mat-stepper-horizontal-line {\n\tborder-top-width: 2px !important;\n}\n\n/* Invocie Details */\n\n@media ( max-width : 767px) {\n\t.bbtitle {\n\t\tpadding-top: 10px;\n\t\tborder-bottom: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.bbtitle {\n\t\tborder-bottom: 1px solid orange;\n\t}\n}\n\n/* timeline starts  */\n\n/* for content starts */\n\n.timeline-left>.timeline-item>.timeline-panel {\n\twidth: calc(100% - 60px);\n}\n\n.timeline>.timeline-item>.timeline-panel {\n\tpadding: 10px 10px 10px 5px;\n\tbox-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);\n}\n\n.timeline>.timeline-item {\n\tmargin-bottom: 100px;\n}\n\n.timeline-title {\n\tfont-size: 17px;\n\tfont-weight: 600;\n\twhite-space: nowrap;\n}\n\n/* for content ends */\n\n/* for icon starts */\n\n.timeline:before {\n\theight: 50%;\n\ttop: 50px;\n\tbackground-color: #507090;\n}\n\n.timeline>.timeline-item>.timeline-badge {\n\tcolor: black;\n}\n\n.timeline-badge.success {\n\tbackground-color: darkkhaki;\n}\n\n/* for icon ends */\n\n/* timeline ends */\n\n.custome_Effects {\n\tmargin-right: 224px;\n  position: relative;\n  -webkit-animation: mymove 3s;  /* Safari 4.0 - 8.0 */\n  -webkit-animation-fill-mode: forwards; /* Safari 4.0 - 8.0 */\n  -webkit-animation: mymove 7s;\n          animation: mymove 7s;\n  animation-fill-mode: forwards;\n  -webkit-animation: mymove infinite;\n          animation: mymove infinite;\n  -webkit-animation-duration: 7s;\n          animation-duration: 7s;\n  -webkit-transform:rotate(90deg);\n          transform:rotate(90deg);\n  text-shadow:0px 8px 6px rgb(1, 1, 1, 0.4);\n  cursor:pointer;\n}\n\n/* Safari 4.0 - 8.0 */\n\n@-webkit-keyframes mymove {\n  from {top: -80px;}\n  to {top: 70px;}\n}\n\n@keyframes mymove {\n  from {top: -80px;}\n  to {top: 70px;}\n}\n\n/* Invoice Details*/\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 150px;\n\t\toverflow-y: auto;\n\t\tmax-height: 150px;\n    position: absolute;\n    max-width: 225px;\n}\n\n::ng-deep .mat-horizontal-stepper-header {\n/*\tpointer-events: none !important;*/\n\n}\n\n@media print {\n\tbody, html * {\n\t\tvisibility: hidden;\n\t}\n\t#stockGroupingId, #stockGroupingId * {\n\t\tvisibility: hidden;\n\t}\n\t#printInvoiceLoadingSheet {\n\t\tposition: static;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin-top: -580px !important;\n\t}\n\n\t#printInvoiceDetails {\n\t\tposition: static;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin-top: -580px !important;\n\t}\n\n\t#printInvoiceSummary {\n\t\tposition: static;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin-top: -580px !important;\n\t}\n\t#printHireSlipDetailsCSS {\n\t\tposition: static;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin-top: -580px !important;\n\t}\n}\n\n/* 5 th Hireslip */\n\n/* for redirect to other page starts */\n\n.hyperLink_td {\n\tcolor: blue;\n\tcursor: pointer;\n}\n\n.hyperLink_td:hover {\n\tcolor: blue;\n\tfont-weight: bolder;\n\tcursor: pointer;\n}\n\n/* for redirect to other page ends */\n\n/* the below code we add to view the option in popup modal starts  for truck master*/\n\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n\n::ng-deep .myCustomModalClass\t.modal-dialog {\n\tmax-width: 90%;\n}\n\n/* the below code we add to view the option in popup modal ends truck master*/\n\n/* the below code we add to view the option in popup modal starts  for truck master*/\n\n::ng-deep .modalClassForPopUpTruckOwner\t.modal-dialog {\n\tmax-width: 50%;\n}\n\n/* the below code we add to view the option in popup modal ends truck master*/\n\n.mandatoryField_Style{\n\tcolor:red;\n}\n\nlabel{\n\tfont-weight: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi9zdG9ja3MtZ3JvdXBpbmcvc3RvY2tzLWdyb3VwaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3QkFBd0I7Q0FDeEI7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakIsb0NBQW9DO0NBQ3BDOztBQUVELDBFQUEwRTs7QUFDMUUsMEJBQTBCOztBQUMxQixtQkFBbUI7O0FBQ25CLE9BQU87O0FBQ1A7OztDQUdDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1o7O0FBRUQsOEVBQThFOztBQUM5RSxpQ0FBaUM7O0FBQ2pDLE9BQU87O0FBRVAsc0JBQXNCOztBQUN0QjtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakI7O0FBQ0QsZ0JBQWdCOztBQUNoQjtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRCxtQkFBbUI7O0FBQ25COztDQUVDLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1o7O0FBQ0QsV0FBVzs7QUFDWDtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLFlBQVk7Q0FDWjs7QUFDRCx3QkFBd0I7O0FBQ3hCO0NBQ0MsYUFBYTtDQUNiLDRCQUE0QjtDQUM1Qjs7QUFDRCxjQUFjOztBQUNkO0NBQ0Msd0JBQXdCO0NBQ3hCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGlDQUFpQztDQUNqQzs7QUFDRCxxQkFBcUI7O0FBQ3JCO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLGdDQUFnQztFQUNoQztDQUNEOztBQUNELHNCQUFzQjs7QUFDdEIsd0JBQXdCOztBQUN4QjtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFFRDtDQUNDLDRCQUE0QjtDQUM1Qix5Q0FBeUM7Q0FDekM7O0FBRUQ7Q0FDQyxxQkFBcUI7Q0FDckI7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQjs7QUFDRCxzQkFBc0I7O0FBQ3RCLHFCQUFxQjs7QUFDckI7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLDRCQUE0QjtDQUM1Qjs7QUFDRCxtQkFBbUI7O0FBQ25CLG1CQUFtQjs7QUFHbkI7Q0FDQyxvQkFBb0I7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QixFQUFFLHNCQUFzQjtFQUNyRCxzQ0FBc0MsQ0FBQyxzQkFBc0I7RUFDN0QsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMENBQTBDO0VBQzFDLGVBQWU7Q0FDaEI7O0FBRUQsc0JBQXNCOztBQUN0QjtFQUNFLE1BQU0sV0FBVyxDQUFDO0VBQ2xCLElBQUksVUFBVSxDQUFDO0NBQ2hCOztBQUVEO0VBQ0UsTUFBTSxXQUFXLENBQUM7RUFDbEIsSUFBSSxVQUFVLENBQUM7Q0FDaEI7O0FBQ0Qsb0JBQW9COztBQUNwQjtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtBQUNBLHFDQUFxQzs7Q0FFcEM7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLE9BQU87RUFDUCw4QkFBOEI7RUFDOUI7O0NBRUQ7RUFDQyxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLE9BQU87RUFDUCw4QkFBOEI7RUFDOUI7O0NBRUQ7RUFDQyxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLE9BQU87RUFDUCw4QkFBOEI7RUFDOUI7Q0FDRDtFQUNDLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsT0FBTztFQUNQLDhCQUE4QjtFQUM5QjtDQUNEOztBQUVELG1CQUFtQjs7QUFFbkIsdUNBQXVDOztBQUN2QztDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQjs7QUFDRCxxQ0FBcUM7O0FBRXJDLHFGQUFxRjs7QUFDckY7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFDRCw4RUFBOEU7O0FBRTlFLHFGQUFxRjs7QUFFckY7Q0FDQyxlQUFlO0NBQ2Y7O0FBQ0QsOEVBQThFOztBQUU5RTtDQUNDLFVBQVU7Q0FDVjs7QUFDRDtDQUNDLCtCQUErQjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtY3JlYXRpb24vc3RvY2tzLWdyb3VwaW5nL3N0b2Nrcy1ncm91cGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgdGFibGUuZGF0YVRhYmxlIHtcblx0aGVpZ2h0OiAyMjBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4vKiA6Om5nLWRlZXAgYmFzaWMtY29udGFpbmVyIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQgeyAqL1xuLyogXHRiYWNrZ3JvdW5kLWNvbG9yOiA7ICovXG4vKiBcdGNvbG9yOiAjZmZmOyAqL1xuLyogfSAqL1xuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcblx0Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb25cblx0e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuLyogOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7ICovXG4vKiBcdGJhY2tncm91bmQtY29sb3I6ICNmZmNkNzI7ICovXG4vKiB9ICovXG5cbi8qIGZvciBsYWJlbCBzdGFydHMgKi9cbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cbi8qIGljb24gZm9udHMgKi9cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHByZXZpb3VzIGljb24gKi9cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcblx0Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcblx0Y29sb3I6ICNmZmY7XG59XG4vKiBpY29ucyAqL1xuOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIHtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIC5tYXQtaWNvbiB7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0aGVpZ2h0OiAyMnB4O1xuXHR3aWR0aDogMjBweDtcbn1cbi8qIGZvciByb3cgb2Ygc3RlcHBlciAqL1xuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuXHRoZWlnaHQ6IDMycHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcbn1cbi8qIG9uIGhvdmVyICovXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciwgLm1hdC1zdGVwLWxhYmVsOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG5cdGJvcmRlci10b3Atd2lkdGg6IDJweCAhaW1wb3J0YW50O1xufVxuLyogSW52b2NpZSBEZXRhaWxzICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiA3NjdweCkge1xuXHQuYmJ0aXRsZSB7XG5cdFx0cGFkZGluZy10b3A6IDEwcHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQuYmJ0aXRsZSB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcblx0fVxufVxuLyogdGltZWxpbmUgc3RhcnRzICAqL1xuLyogZm9yIGNvbnRlbnQgc3RhcnRzICovXG4udGltZWxpbmUtbGVmdD4udGltZWxpbmUtaXRlbT4udGltZWxpbmUtcGFuZWwge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG59XG5cbi50aW1lbGluZT4udGltZWxpbmUtaXRlbT4udGltZWxpbmUtcGFuZWwge1xuXHRwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi50aW1lbGluZT4udGltZWxpbmUtaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4udGltZWxpbmUtdGl0bGUge1xuXHRmb250LXNpemU6IDE3cHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4vKiBmb3IgY29udGVudCBlbmRzICovXG4vKiBmb3IgaWNvbiBzdGFydHMgKi9cbi50aW1lbGluZTpiZWZvcmUge1xuXHRoZWlnaHQ6IDUwJTtcblx0dG9wOiA1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3MDkwO1xufVxuXG4udGltZWxpbmU+LnRpbWVsaW5lLWl0ZW0+LnRpbWVsaW5lLWJhZGdlIHtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG4udGltZWxpbmUtYmFkZ2Uuc3VjY2VzcyB7XG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcbn1cbi8qIGZvciBpY29uIGVuZHMgKi9cbi8qIHRpbWVsaW5lIGVuZHMgKi9cblxuXG4uY3VzdG9tZV9FZmZlY3RzIHtcblx0bWFyZ2luLXJpZ2h0OiAyMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbXltb3ZlIDNzOyAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gIGFuaW1hdGlvbjogbXltb3ZlIDdzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBteW1vdmUgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XG4gIHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO1xuICB0ZXh0LXNoYWRvdzowcHggOHB4IDZweCByZ2IoMSwgMSwgMSwgMC40KTtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBteW1vdmUge1xuICBmcm9tIHt0b3A6IC04MHB4O31cbiAgdG8ge3RvcDogNzBweDt9XG59XG5cbkBrZXlmcmFtZXMgbXltb3ZlIHtcbiAgZnJvbSB7dG9wOiAtODBweDt9XG4gIHRvIHt0b3A6IDcwcHg7fVxufVxuLyogSW52b2ljZSBEZXRhaWxzKi9cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcblx0dG9wOiAyNnB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdFx0bWF4LWhlaWdodDogMTUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDogMjI1cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuLypcdHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7Ki9cblxufVxuXG5AbWVkaWEgcHJpbnQge1xuXHRib2R5LCBodG1sICoge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjc3RvY2tHcm91cGluZ0lkLCAjc3RvY2tHcm91cGluZ0lkICoge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjcHJpbnRJbnZvaWNlTG9hZGluZ1NoZWV0IHtcblx0XHRwb3NpdGlvbjogc3RhdGljO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdG1hcmdpbi10b3A6IC01ODBweCAhaW1wb3J0YW50O1xuXHR9XG5cblx0I3ByaW50SW52b2ljZURldGFpbHMge1xuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDA7XG5cdFx0bWFyZ2luLXRvcDogLTU4MHB4ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQjcHJpbnRJbnZvaWNlU3VtbWFyeSB7XG5cdFx0cG9zaXRpb246IHN0YXRpYztcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRtYXJnaW4tdG9wOiAtNTgwcHggIWltcG9ydGFudDtcblx0fVxuXHQjcHJpbnRIaXJlU2xpcERldGFpbHNDU1Mge1xuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDA7XG5cdFx0bWFyZ2luLXRvcDogLTU4MHB4ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLyogNSB0aCBIaXJlc2xpcCAqL1xuXG4vKiBmb3IgcmVkaXJlY3QgdG8gb3RoZXIgcGFnZSBzdGFydHMgKi9cbi5oeXBlckxpbmtfdGQge1xuXHRjb2xvcjogYmx1ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaHlwZXJMaW5rX3RkOmhvdmVyIHtcblx0Y29sb3I6IGJsdWU7XG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIGZvciByZWRpcmVjdCB0byBvdGhlciBwYWdlIGVuZHMgKi9cblxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBzdGFydHMgIGZvciB0cnVjayBtYXN0ZXIqL1xuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuXHQvKiBEbyB5b3UgY2hhbmdlcyBoZXJlICovXG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogOTk5OTtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcblx0ei1pbmRleDogOTk5OTtcbn1cblxuOjpuZy1kZWVwIC5teUN1c3RvbU1vZGFsQ2xhc3NcdC5tb2RhbC1kaWFsb2cge1xuXHRtYXgtd2lkdGg6IDkwJTtcbn1cbi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgZW5kcyB0cnVjayBtYXN0ZXIqL1xuXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXG5cbjo6bmctZGVlcCAubW9kYWxDbGFzc0ZvclBvcFVwVHJ1Y2tPd25lclx0Lm1vZGFsLWRpYWxvZyB7XG5cdG1heC13aWR0aDogNTAlO1xufVxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBlbmRzIHRydWNrIG1hc3RlciovXG5cbi5tYW5kYXRvcnlGaWVsZF9TdHlsZXtcblx0Y29sb3I6cmVkO1xufVxubGFiZWx7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trip-creation/stocks-grouping/stocks-grouping.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/trip-creation/stocks-grouping/stocks-grouping.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n</head>\n<!-- Row -->\n<div class=\"row\" id=\"stockGroupingId\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<h6 class=\"card-title text-white\">Trip Creation</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 5px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<mat-horizontal-stepper [linear]=\"false\" #stepper>\n\t\t\t\t\t\t\t\t\t<!--one starts -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<!--<form [formGroup]=\"firstFormGroup\"></form>-->\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Stocks Grouping</ng-template>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<app-trip-creation-stock-summary>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-trip-creation-stock-summary>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStocks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSummary</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table #datatableStockSummary datatable id='stockSummaryTableId'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockSummary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStockSummary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let stockSummaryData of stockSummaryDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.endDest }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableLRDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedGetTripLRDeatils(stockSummaryData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Get Total LR Details\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<app-trip-creation-stock-details>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-trip-creation-stock-details>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStocks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table #datatableStockDetails datatable id='stockDetailsTableId'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStockDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Urgent Daily</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"viewEwayBillStatus\">E-Way Bill Status\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Marked On Src</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booing Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"viewDeliveryManager\">Arrival Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"viewDeliveryManager\"> DiffDate\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(Bkg-Today)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Note</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"ewayBillAlert\">E-Way Bill No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let stockDetailsData of stockDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.urgentDly }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"viewEwayBillStatus\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ stockDetailsData.ewayBillStatus }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td (click)=\"goToLrEnquiryPage()\"><u\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"hyperLink_td\">{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstockDetailsData.lrNumber }}</u></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.urgentDlyMarkedAt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.deliveryPoints }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"viewDeliveryManager\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ stockDetailsData.arrivalDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"viewDeliveryManager\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ stockDetailsData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"ewayBillAlert\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ stockDetailsData.eWayBillNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"viewEwayBillStatus\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"viewDeliveryManager\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"viewDeliveryManager\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"ewayBillAlert\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"nextToMakeATripBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"nextTomakeAtripBtnHideShow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNextToMakeTripButton(tripToDestList)\">Make a\n\t\t\t\t\t\t\t\t\t\t\t\t\tTrip</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"makeATripBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"makeAtripBtnHideShow\" (click)=\"validateMakeATripButton();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperNext>Make a Trip</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<button class=\"btn btn-info m-r-10\" id=\"tripSheetBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"tripSheetBtnHideShow\">Trip Sheet</button>-->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t\t\t\t<!--one flow is ends -->\n\t\t\t\t\t\t\t\t\t<!-- two flow is starts  -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<!--<form [formGroup]=\"secondFormGroup\"></form>-->\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Invoice Details</ng-template>\n\t\t\t\t\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-trip-creation-invoice-details>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-trip-creation-invoice-details>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary m-r-10\" id=\"startFromStocksGroupingBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button>Start\n\t\t\t\t\t\t\t\t\t\t\t\t\tOver</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info m-r-10\" id=\"resetInInvoiceDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button>Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToStocksGroupingBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperPrevious>Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"nextToMakeATripBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperNext>Next</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"timeline timeline-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"timeline-inverted timeline-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-badge success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{fromStationLocation}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custome_Effects\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-truck \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Trip Creation\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"timeline-inverted timeline-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-badge success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{toStationLocation}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 bbtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Invoice Info</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Head\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mandatoryField_Style\"> *\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"loaderHead\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForLoaderHead($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelLoaderHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchLoaderHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterLoaderHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterLoaderHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusLoaderHeadTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Name\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mandatoryField_Style\"> *\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"loaderStaffName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForLoaderStaffName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelLoaderStaffName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchLoaderStaffName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterLoaderStaffName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterLoaderStaffName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusLoaderStaffNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mandatoryField_Style\"> *\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"truckNumber\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForTruckNumber($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusTruckNumber$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mandatoryField_Style\"> *\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"supplierName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForSupplier($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchSupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSupplierNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mandatoryField_Style\"> *\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #rt let-r=\"result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet-t=\"term\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-highlight [result]=\"r.driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[term]=\"t\"></ngb-highlight> -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-highlight [result]=\"r.licenceNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[term]=\"t\"></ngb-highlight>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"driverName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDriverName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultTemplate]=\"rt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDriverNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Licence Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"licenceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForLicNo($event.keyCode)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bay No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mandatoryField_Style\"> *\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--(change)=\"selectBayNo(bayNumber.value)\"-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"bayNumber\" name=\"bayNumber\" #bayNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForBayNo($event.keyCode)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"Select Bay\">Select\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBay</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 1\">Bay 1</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 2\">Bay 2</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 3\">Bay 3</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 4\">Bay 4</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 5\">Bay 5</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 6\">Bay 6</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 7\">Bay 7</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 8\">Bay 8</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 9\">Bay 9</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 10\">Bay 10</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 11\">Bay 11</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bay 12\">Bay 12</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bay Loading Date\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mandatoryField_Style\"> *\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"bayLoadingDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"bayLoadingDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"bayLoadingDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#bayLoadingDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForBayDate($event.keyCode)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"bayLoadingDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bay Loading Time\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mandatoryField_Style\"> *\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"time\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"bayLoadingTime\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForBayTime($event.keyCode)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 bbtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">TP Info</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry CP</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"mdi mdi-truck-delivery\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"entryCP\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForEntryCP($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelEntryCP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchEntryCP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterEntryCP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterEntryCP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusEntryCPTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Exit CP</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"mdi mdi-truck-delivery\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"exitCP\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForExitCP($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelExitCP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchExitCP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterExitCP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterExitCP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusExitCPTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Exp Exit Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"expExitDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"expExitDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelExpExitDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#expExitDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"expExitDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Exp Exit Days</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"expExitDays\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"expExitDays\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForExpDay($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Remarks</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-notes-medical\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"remarks\" rows=\"4\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"clearForInvoiceDetailsBtnid\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clearInvoiceDetailsBtn();\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"nextToInvoiceDetailOfDarkBtnHideShow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark m-r-10\" id=\"nextDarkBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateDarkNextBtn()\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"nextToInvoiceDetailOfGreenBtnHideShow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"nextToMakeATripBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNextMakeATrip();\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperNext>Next</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t\t\t\t<!-- two flow is end -->\n\t\t\t\t\t\t\t\t\t<!-- three flow is starts -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"thirdFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<!--<form [formGroup]=\"thirdFormGroup\"></form>-->\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Make a Trip</ng-template>\n\t\t\t\t\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-trip-creation-make-a-trip></app-trip-creation-make-a-trip>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary m-r-10\" id=\"startFromStocksGroupingBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button>Start\n\t\t\t\t\t\t\t\t\t\t\t\t\tOver</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info m-r-10\" id=\"resetInMakeATripBtn\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperPrevious>Reset</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToInvoiceDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperPrevious>Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"nextToBtn\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperNext>Next</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerActionForMakeATrip\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- the first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Truck Capacity</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"truckCapacity\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForTruckCapacity($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelTruckCapacity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchTruckCapacity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterTruckCapacity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterTruckCapacity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusTruckCapacityTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlaceholder=\"Select Truck Capacity\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"hideshowControlsBins\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Bins</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"controlBins\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForControlBins($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelControlBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchControlBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterControlBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterControlBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusControlBinsTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlaceholder=\"Select Bins\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label>LR Number</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" Placeholder=\"LR Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"lrNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"keyEventHandlerLRNumber($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--HERE LOCATION START-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"timeline timeline-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"timeline-inverted timeline-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-badge success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{fromStationLocation}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custome_Effects\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-truck \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Trip Creation\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"timeline-inverted timeline-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-badge success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{toStationLocation}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--HERE LOCATION END-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--Col-md-2 end-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Eligible LRs</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clearBtnEligibleLrs()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClear All</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"eligibleLrsTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsEligibleLrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerEligibleLrs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Urgent Daily</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"viewEwayBillStatus\">E-Way\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBill Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let eligibleLrsData of eligibleLrsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.urgentDly }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"viewEwayBillStatus\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ eligibleLrsData.ewayBillStatus }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.eWayBillNo }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.lrNumber }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.totalArticles }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.actualWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.chargedWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.goodsValue }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.bookingDateStr }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.consigneeName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.destination }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: lightgrey;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEligibleLrDelete(eligibleLrsData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove From Eligible Lrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"viewEwayBillStatus\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Remaining LRs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"resetBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"resetDatatableBtn()\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"remainingLrsTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionRemainingLrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRemainingLrs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Urgent Daily</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let remainingLrsData of remainingLrsDataList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.urgentDly }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.lrNumber }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.totalArticles }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.actualWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.chargedWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.toPay }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.goodsValue }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.consigneeName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.destination }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.bookingDateStr }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--Col md-10 end-->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToInvoiceDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"backBtnOfMakeAtrip();\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperPrevious>Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewNextDarkBtnOfInvoice\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"nextDarkBtnForInvoiceDetailsBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNextDarkBtnForInvoiceDetails();\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewNextBtnOfInvoice\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"nextGreenBtnForInvoiceDetailsBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNextBtnForInvoiceDetails();\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperNext>Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info m-r-10\" id=\"resetInMakeATripBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperPrevious>Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToInvoiceDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperPrevious>Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"nextToInvoiceBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"btnNext()\" mat-button matStepperNext>Next</button>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t\t\t\t<!-- three flow is ends -->\n\t\t\t\t\t\t\t\t\t<!--four flow is starts -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"fourthFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<!--<form [formGroup]=\"fourthFormGroup\"></form>-->\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Invoice</ng-template>\n\t\t\t\t\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-trip-creation-invoice></app-trip-creation-invoice>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary m-r-10\" id=\"startFromStocksGroupingBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button>Start\n\t\t\t\t\t\t\t\t\t\t\t\t\tOver</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToInvoiceDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperPrevious>Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"nextToBtn\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperNext>Next</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerActionForInvoice\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">Inovice</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"invoiceTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoice\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerInvoice\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!viewCheckBoxInvoiceDummyLr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSelect</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let invoiceData of invoiceDataList let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.ewayBillStatus }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.eWayBillNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!viewCheckBoxInvoiceDummyLr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"invoiceData.lrDummyInv\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"checkSelectedLrDummtInvoice($event,invoiceData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ invoiceData.lrDummyInv }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!viewCheckBoxInvoiceDummyLr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"nextToPrintLoadingSheetBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"hamaliDetailsBtn();\">Get\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHamali Details</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"nextToPrintLoadingSheetBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"printLoadingSheet()\" mat-button>Loading\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSheet</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateCreateTripSheetBtn();\">Create Hire\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSlip</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToInvoiceDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"backBtnOfInvoice();\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperPrevious>Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"overAllResetBtn();\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"startOverBtn();\">Start Over</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t\t\t\t<!-- four flow is ends  -->\n\t\t\t\t\t\t\t\t\t<!-- five flow is starts -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"fifthFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<!--<form [formGroup]=\"fifthFormGroup\"></form>-->\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Hireslip Generation</ng-template>\n\t\t\t\t\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-trip-creation-hireslip-generation>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-trip-creation-hireslip-generation>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToInvoiceDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperPrevious>Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"nextToBtn\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperNext>Next</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerActionForHireslip\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--col-md 4 Hireslip-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">Trip\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyInvoiceNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inoviceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForInvoiceNo($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyInvoiceDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"invoiceDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"invoiceDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#invoiceDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"invoiceDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyHireslipNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"hireslipNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForHireslipNo($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlySource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Number Of LR's</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyNumberOfLrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"numberOfLrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Number Of Articles</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyTotalNoArticle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"numberOfArticles\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Total GUR Wt</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"gurWeightTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForTruckTotalWgt($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Gurantee Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"guranteeWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"eventHandlerGurWgt($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Kanta Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"kantaWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"eventHandlerKantaWgt($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loaded By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"loadedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">Goods\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tShort & Extra Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsGoodsShortAndExtraDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGoodsShortAndExtraDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"goodsShortageExtraLrDetailsId\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Extra</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Open</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Short</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Wet</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let goodsShortAndExtraDetailsData of goodsShortAndExtraDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.lrNo }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.art }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.extra }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.open }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.short }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.wet }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.remarks }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--col md 4 hireslip 1 section end-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--col md 4 hireslip 2- section start-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tVehicle Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Lorry Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyLorryNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"lorryNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Lorry Owner</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyLorryOwner\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"lorryOwner\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Length</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-boxes\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyTruckLength\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"truckLength\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-boxes\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"truckType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForTruckType($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelTruckType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchTruckType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterTruckType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterTruckType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusTruckTypeTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"lorryOwnerDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"truckMasterInPopUpPage(truckMasterPopUp)\"><u\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"hyperLink_td\">Update\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorry Owner\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</u></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Person</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyLorryContactPerson\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"contactPerson\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyOwnerAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"driverNameText\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver License No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyDriverLicNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"driverLicenseNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Mobile No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Mobile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"driverMobileNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForDriverMobileNo($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Update Driver New Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addDriverBtnClickPopShow(hireSlipUpdateDriverNo)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Update Driver New Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addDriverBtnClickPopShow(hireSlipUpdateDriverNo)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlySupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"supplierNameText\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pan No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"isReadOnlyPanNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"panNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Insurance No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"insuranceNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForInsuranceNo($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>No of NO EWB in\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConsolidated-System</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-laptop\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"noOfNoEwbInConsolidatedSystem\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t basic-addon11 \" autocomplete=\"off\" (keypress)=\"onKeyPressFieldForEWBSystem($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>No of NO EWB in\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConsolidated-Manual</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-keyboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"noOfNoEwbInConsolidatedManual\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForEWBManual($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consolidated Eway\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBill</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consolidatedEwayBill\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Must Be 10 Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForConsolidateEWB($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tonCopy=\"return false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tonPaste=\"return false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toninput=\"javascript: if(this.value.length > this.maxLength) \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.value=value.slice(0,this.maxLength);\" maxLength=\"10\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Confirm Consolidated Eway\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBill</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"confirmConsolidatedEwayBill\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Must Be 10 Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForConfirmConsolidateEWB($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tonCopy=\"return false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tonPaste=\"return false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toninput=\"javascript: if(this.value.length > this.maxLength) \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.value=value.slice(0,this.maxLength);\" maxLength=\"10\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--col md 4 hireslip 2 section end-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--col md 4 hireslip 3 section start-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">Billing\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\t<div class=\"row\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"hideAndShowInputFields\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Base HireAmt</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"baseHireAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"baseHireAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForBaseHireAmt($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Door Open</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"doorOpen\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"doorOpenAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForDoorOpen($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHeight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"vehicleHeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"vehicleHeightAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForVehicleHgt($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Door Delivery</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"doorDelivery\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"doordeliveryAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForDoorDely($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Extra Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"extraWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"extraWgtAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForExtraWgt($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Check Post</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkPost\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"checkPostAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForCheckPost($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Other Charges</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"otherCharges\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"otherChargeAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForOtherChrgs($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Hire</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"totalHire\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"totalHireAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForTotalHire($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Advance</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"advance\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"advanceAmtChgBlur($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"eventHandlerAdvance($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Balance</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"balance\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForBalance($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payable At</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"payableAt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Remarks</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-notes-medical\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"hireslipRemarksId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trows=\"4\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"hideAndShowInputFieldsOne\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPoint</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Point</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"deliveryPointIdForSingle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"deliveryPointIdForSingle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tchecked\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#deliveryPointIdForSingle\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"deliveryPointSingleCheckBoxEvent($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"deliveryPointIdForSingle\">Single</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"deliveryPointIdForMultiple\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"deliveryPointIdForMultiple\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#deliveryPointIdForMultiple\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"deliveryPointMultipleCheckBoxEvent($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"deliveryPointIdForMultiple\">Muliple</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPoints</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck-loading\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"deliveryPoints\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"twoPointDD\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"twoPointDDCheckBoxEvent($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"twoPointDD\">2 Point\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDoor Delivery</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"hideShowTwoPointDoorDelivery\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>2 Point Door Delivery\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLRs(Multiple LRs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tseparated by\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcomma(,)):</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck-loading\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"twoPointsDoorDeliveryLrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Print Reward\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-medical\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"printRewardDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"yes\">Yes\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"no\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"isMultiInvoiceTripId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"multiInvTripCheckBoxEvent($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"isMultiInvoiceTripId\">Is\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMulti-Invoice Trip?</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"hideShowIsLastPointDelivery\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"islastPointDeliveryId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"isLastPointDeliveryLinkedHireslipListner($event);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"islastPointDeliveryId\">Is\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLast Point Delivery?</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Date & Time</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"departureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"departureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#departureDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"departureDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTime</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"time\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"scheduleDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"scheduleDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#scheduleDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"scheduleDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTime</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"scheduleTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"time\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"scheduleTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--col md 4 hireslip 3 section end-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='float:right;' (click)=\"startOverFromHireslipBtn();\">Start\n\t\t\t\t\t\t\t\t\t\t\t\t\tOver</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='float:right;' (click)=\"resetFormHireslipBtnBtn();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tReset</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"invoiceSummaryBtnForPrint();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='float:right;' class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"btnInvoiceSummaryPrint\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tPrint Invoice Summary\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"btnHireSlipPrint\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='float:right;' (click)=\"printHireslipButton();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tPrint Hire Slip\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"printButton\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='float:right;' (click)=\"printInvoiceButton();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tPrint Invoice\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" *ngIf=\"departureButtonHideShow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='float:right;' class=\"btn btn-dark\" id=\"depButton\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"departureButton();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tDeparture\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"saveButton\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='float:right;' (click)=\"saveBtn();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave & Print\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t\t\t\t<!--five flow is ends -->\n\t\t\t\t\t\t\t\t</mat-horizontal-stepper>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n<!--Popup Work Start HERE Stock Grouping-->\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\">\n\t\t\t<ng-template #tripToDestList let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">\n\t\t\t\t\t\tTrip Info</h6>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body \">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Trip To</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-university\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"tripToDestType\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForTripToDestType($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelTripToDestType\" [ngbTypeahead]=\"searchTripToDestType\"\n\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterTripToDestType\"\n\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterTripToDestType\"\n\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusTripToDestTypeTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\" style='border-bottom: 1px solid #e9ecef;'>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<button mat-button (click)=\"btnProceedTripTo();\n\t\t\t\t\t\td('Cross click')\">Proceed</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Print Work Start HERE Stock Grouping-->\n\n<!-- 5 th page of Pop up Hire Slip start-->\n<!--<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\" id=\"popupDetailsNotAssigned\">\n\t\t\t<ng-template #hireSlipContentPopUp let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5>Linked Hireslip Details</h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"multiInvoiceDestinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForMultiInvoiceStation($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelMultiInvoiceDest\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchMultiInvoiceDest\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterMultiInvoiceDest\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterMultiInvoiceDest\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusMultiInvoiceDestTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"multiInvoicePopupInvoiceFormat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \" autocomplete=\"off\" />\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"multiInvoicePopUpNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"keyEventHandlerMultiInvoicePopUp($event.keyCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<button title='Clear Value' type=\"button\" class=\"btn btn-dark\" id=\"clear\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times\"> </i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t<table datatable class=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHireslipDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerHireslipDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let multiInvoiceNoData of gridTosetInvoiceNumberList let i = index \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ multiInvoiceNoData.cmMultiInvoice }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDelete(multipleInvoiceNoLinkedHireslip,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>-->\n\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\" id=\"\">\n\t\t\t<ng-template #hireSlipUpdateDriverNo let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5>Update Driver Number</h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver New Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"driverNewMobileNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressFieldForDriverNewMobileNo($event.keyCode)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"updateBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"updateDriverNewMobileNoPopUpCreation()\">\n\t\t\t\t\t\t\t\t\t\t\tUpdate\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"cancelBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"closeNewDriverPopupBtn();\">\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\">\n\t\t\t<ng-template #truckMasterPopUp let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5>Truck Master</h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<app-truck-master></app-truck-master>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\">\n\t\t\t<ng-template #uploadTruckOwnerPopUp let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5>Declaration Upload</h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Owner Declaration</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"truckOwnerFileUpload\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onFileChangedTruckOwner($event)\" #fileInputTruckOwner />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"updateBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"uploadFileOfTruckOwnerDetails()\">\n\t\t\t\t\t\t\t\t\t\t\tUpload\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"cancelBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\">\n\t\t\t<ng-template #uploadRCInsLicForTruck let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5>Declaration Upload</h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>RC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"popUpTruckRcFileUpload\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onFileChangedTruckDetailPopUpRC($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#fileInputTruckForRC />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Insurance</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"popUpTruckInsuranceFileUpload\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onFileChangedTruckDetailPopUpInsurance($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#fileInputTruckForInsurance />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>License</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"popUpTruckLicenseFileUpload\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"onFileChangedTruckDetailPopUpLicense($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t#fileInputTruckForLicense />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"updateBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"uploadFileForTruckRCInsLicInPopUpBtnUpload()\">\n\t\t\t\t\t\t\t\t\t\t\tUpload\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" id=\"cancelBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n<!-- 5 th page of Pop up Hire Slip end-->\n\n<!-- Print Work Start Here Invoice  4 & 5 th page-->\n\n<div *ngIf=\"viewInvoiceLoadingSheetPrint\" onafterprint=\"afterPrint()\" id=\"printInvoiceLoadingSheet\">\n\t<app-invoice-loadingsheet-print></app-invoice-loadingsheet-print>\n</div>\n\n<div *ngIf=\"viewInvoiceDetailsPrint\" onafterprint=\"afterPrint()\" id=\"printInvoiceDetails\">\n\t<app-invoice-details-print></app-invoice-details-print>\n</div>\n<div *ngIf=\"viewInvoiceSummaryPrint\" onafterprint=\"afterPrint()\" id=\"printInvoiceSummary\">\n\t<app-invoice-summary-print></app-invoice-summary-print>\n</div>\n\n\n<!--<div *ngIf=\"viewInvoiceSummaryPrint\" onafterprint=\"afterPrint()\"\n\t\tid=\"printInvoiceSummary\">\n\t\t<app-invoice-summary-print></app-invoice-summary-print>\n</div>\n<div *ngIf=\"viewInvoiceDetailsPrint\" onafterprint=\"afterPrint()\" id=\"printInvoiceDetails\">\n\t<app-invoice-details-print></app-invoice-details-print>\n</div>-->\n<div *ngIf=\"viewHireslipDetailsPrint\" onafterprint=\"afterPrint()\" id=\"printHireSlipDetailsCSS\">\n\t<app-hireslip-details-print></app-hireslip-details-print>\n</div>\n<!-- Print Work Start Here Invoice  4 & 5 th page-->"

/***/ }),

/***/ "./src/app/trip-creation/stocks-grouping/stocks-grouping.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/trip-creation/stocks-grouping/stocks-grouping.component.ts ***!
  \****************************************************************************/
/*! exports provided: StocksGroupingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksGroupingComponent", function() { return StocksGroupingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dto/SupplierDetails-dto */ "./src/app/dto/SupplierDetails-dto.ts");
/* harmony import */ var src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dto/Driverdetails-dto */ "./src/app/dto/Driverdetails-dto.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
/* harmony import */ var src_app_trip_creation_hamali_detail_report_hamali_detail_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/trip-creation/hamali-detail-report/hamali-detail-report.component */ "./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_trip_creation_multiple_point_details_multiple_point_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/trip-creation/multiple-point-details/multiple-point-details.component */ "./src/app/trip-creation/multiple-point-details/multiple-point-details.component.ts");
/* harmony import */ var src_app_trip_creation_multipleinvoice_lastpoint_details_multipleinvoice_lastpoint_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component */ "./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var StocksGroupingComponent = /** @class */ (function () {
    /* 5 th level Hireslip Form end */
    function StocksGroupingComponent(_formBuilder, modalService, stockService, router, masterReadService, hireslipService, dialog, route, masterService) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.modalService = modalService;
        this.stockService = stockService;
        this.router = router;
        this.masterReadService = masterReadService;
        this.hireslipService = hireslipService;
        this.dialog = dialog;
        this.route = route;
        this.masterService = masterService;
        this.isLinear = false;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.showSpinnerActionForMakeATrip = false;
        this.showSpinnerActionForInvoice = false;
        this.showSpinnerActionForHireslip = false;
        this.fromStationLocation = '';
        this.toStationLocation = '';
        this.dtTriggerStockSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerStockDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerEligibleLrs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerRemainingLrs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerInvoice = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.gridTosetInvoiceNumberList = [];
        this.dtTriggerGoodsShortAndExtraDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerHireslipDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /* 5 th level Hireslip end */
        /*for datatable end */
        /* 1 st level stock grouping start */
        this.viewDeliveryManager = false;
        this.ewayBillAlert = false;
        this.viewEwayBillStatus = false;
        this.makeAtripBtnHideShow = false;
        this.tripSheetBtnHideShow = false;
        this.nextTomakeAtripBtnHideShow = false;
        this.lrDtoStockSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoStocksDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForInvoiceBlocking = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.lrDtoDest = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.tripToDestTypeTA = [];
        this.focusTripToDestTypeTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchTripToDestType = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusTripToDestTypeTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.tripToDestTypeTA
                : _this.tripToDestTypeTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterTripToDestType = function (x) { return x.destination; };
        /* Drop Down Field end  */
        /*InvoiceDetailsPage for localstorge dto*/
        this.lrDtoForStockGroupingLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        /* Rights start */
        this.rightsToShowDatatableOfArticleGroupingColumn = "Rights For ArticleGrouping Show Datatable Column";
        this.rightsToShowMakeaTripButton = "Show make a trip option";
        this.rightsToShowTripSheetButton = "Show trip sheet option";
        this.rigthsForMakeTripBtnGenerateInvoice = "selected destination to generate invoice";
        /* Rights end */
        /* 1 st level stock grouping end */
        /* 2 nd level Invoice Details start */
        /* 2nd level Drop Down Field start  */
        this.loaderHeadHireslipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.loaderHeadTA = [];
        this.focusLoaderHeadTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchLoaderHead = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusLoaderHeadTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.loaderHeadTA
                : _this.loaderHeadTA.filter(function (v) { return v.loaderHead.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterLoaderHead = function (x) { return x.loaderHead; };
        this.staffDetailsLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.loaderStaffNameTA = [];
        this.focusLoaderStaffNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchLoaderStaffName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusLoaderStaffNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.loaderStaffNameTA
                : _this.loaderStaffNameTA.filter(function (v) { return v.staffName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterLoaderStaffName = function (x) { return x.staffName; };
        this.truckDataDtoForTruckNo = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckNumberTA = [];
        this.focusTruckNumber$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchTruckNumber = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusTruckNumber$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.truckNumberTA
                : _this.truckNumberTA.filter(function (v) { return v.truckNumber.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterTruckNumber = function (x) { return x.truckNumber; };
        this.supplierDetailsDto = new src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_17__["SupplierDetailsDto"]();
        this.supplierNameTA = [];
        this.focusSupplierNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchSupplierName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSupplierNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.supplierNameTA
                : _this.supplierNameTA.filter(function (v) { return v.supplierName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSupplierName = function (x) { return x.supplierName; };
        this.driverDetailsDto = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_18__["DriverdetailsDto"]();
        this.driverNameTA = [];
        this.focusDriverNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDriverName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDriverNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.driverNameTA
                : _this.driverNameTA.filter(function (v) { return v.driverName && v.licenceNo.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDriverName = function (x) { return x.driverName; };
        this.truckDataTPCPEntryDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.entryCPTA = [];
        this.focusEntryCPTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchEntryCP = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusEntryCPTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.entryCPTA
                : _this.entryCPTA.filter(function (v) { return v.cpName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterEntryCP = function (x) { return x.cpName; };
        this.truckDataTPCPExitDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.exitCPTA = [];
        this.focusExitCPTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchExitCP = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusExitCPTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.exitCPTA
                : _this.exitCPTA.filter(function (v) { return v.cpName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterExitCP = function (x) { return x.cpName; };
        /* 2nd level Drop Down Field end  */
        /* Hash Map Of Invoice Details start */
        this.hashmapLoaderHead = new Map();
        this.hashmapLoader = new Map();
        this.hashmapTruckNumberIndex = new Map();
        this.hashmapTruck = new Map();
        this.hashMapSupplierIndex = new Map();
        this.hashMapSupplier = new Map();
        this.hashMapDriver = new Map();
        this.hashMapDriverIndex = new Map();
        this.hashMapDriverIndexNew = new Map();
        this.hashMapEntryCPIndex = new Map();
        this.hashMapExitCPIndex = new Map();
        /* Hash Map Of Invoice Details end */
        /* entered validate start*/
        this.userValueTruckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.userValueTruckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.userValueDriverdetailsDto = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_18__["DriverdetailsDto"]();
        this.userValueSupplierDetailsDto = new src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_17__["SupplierDetailsDto"]();
        /* entered validate end*/
        this.nextToInvoiceDetailOfDarkBtnHideShow = false;
        this.nextToInvoiceDetailOfGreenBtnHideShow = false;
        /*MakeATripPage for localstorge dto*/
        this.lrDtoForInvoiceDetailLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        /* 2 nd level Invoice Details end */
        /* 3 rd level Make a Trip Details end */
        /* Drop Down Field */
        this.truckDataDtoForTruckCapacity = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckCapacityTA = [];
        this.focusTruckCapacityTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchTruckCapacity = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusTruckCapacityTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.truckCapacityTA
                : _this.truckCapacityTA.filter(function (v) { return v.capacity; })).slice(0, 200); }));
        };
        this.formatterTruckCapacity = function (x) { return x.capacity; };
        this.lrDtoBins = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrdDtoBinSpecific = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.controlBinTA = [];
        this.focusControlBinsTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchControlBins = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusControlBinsTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.controlBinTA
                : _this.controlBinTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterControlBins = function (x) { return x.subStations; };
        /* Drop Down Field */
        /* Rights start */
        // rightsToShowSpecificBinsDataForBkg = "MakeATrip Show Bins Data For Bkg";
        //rightsToShowBinsDataForTrx = "MakeATrip Show Bins Data For Trx";
        /* Rights end */
        this.hideshowControlsBins = false;
        //hash 
        this.hashmapBins = new Map();
        this.lrDtoCallService = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoControlBinService = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoForCheckDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoInvoiceLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.viewNextDarkBtnOfInvoice = false;
        this.viewNextBtnOfInvoice = false;
        /* 3 rd level Make a Trip Details end */
        /* 4 th level Invoice end */
        this.lrDtoForInvoiceLoadingPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForHireslip = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.invoiceDtoForLoadingSheetAndHireslip = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_19__["InvoiceDto"]();
        this.summaryInvoiceForLrDtoPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForCreateHireslipLocalStorage = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.listOfLrDto = [];
        this.listOfTotalLrs = new Array();
        this.listOfLrs = new Array();
        this.listOfLrShortage = new Array();
        this.checkInvoiceListLrs = new Array();
        this.bookingInvoiceListOfTotalLrs = new Array();
        this.bookingInvoiceListOfLrs = new Array();
        this.bookingInvoiceListOfLrShortage = new Array();
        this.bookingInvoiceForTotalArticle = 0;
        this.bookingInvoiceForHireslipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.bookingInvoiceForLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.guranteeWeight = 0;
        this.viewInvoiceLoadingSheetPrint = false;
        this.viewInvoiceDetailsPrint = false;
        this.viewInvoiceSummaryPrint = false;
        //rightsForLoadingSheetBranch ="rights for loading sheet print branch";
        this.rightsForLoadingSheetOffice = "rights for loading sheet print office";
        // rightsForCreateHireslipBranch ="rights for create hireslip branch";
        this.rightsForCreateHireslipOffice = "rights for create hireslip office";
        this.rightsForOfficeTypeHideDummyLrPrint = "rights for officetype hide dummy lr print";
        this.rightsForofficeTypeBookingInvoiceDetailsPrint = "rights for officetype booking invoice details print";
        this.viewCreateHireslipDarkBtn = false;
        this.viewCreateHireslipGreenBtn = false;
        this.set = new Set();
        this.viewCheckBoxInvoiceDummyLr = false;
        //rights
        this.rightsForInvoiceTypeAndMainInvocie = "rights to show invoice type and main invoice for main and dummy";
        this.rightsForSMSHireslip = "rights for the sms binnymillsBinnymills and Konditope";
        this.hmTruckType = new Map();
        this.hmTruckTypeDto = new Map();
        this.truckTypeDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckTypeTA = [];
        this.focusTruckTypeTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchTruckType = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusTruckTypeTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (term) { return (term === '' ? _this.truckTypeTA
                : _this.truckTypeTA.filter(function (v) { return v.truckType.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterTruckType = function (x) { return x.truckType; };
        this.isMainInvoice = false;
        this.isBookingStation = false;
        this.departureButtonHideShow = false;
        this.hideShowIsLastPointDelivery = false;
        this.hideShowTwoPointDoorDelivery = false;
        this.hideAndShowInputFields = true;
        this.hideAndShowInputFieldsOne = true;
        this.hideAndShowPrintInvoiceBtn = false;
        this.hideAndShowPrintHireslipBtn = false;
        this.hideAndShowInvSummPrintBtn = false;
        this.validateDeliveryPtSingleChecked = false;
        this.validateDeliveryPtMultipleChecked = false;
        this.validateIslastPointDeliveryIdChecked = false;
        this.isFTTripReq = false;
        //print
        this.viewHireslipDetailsPrint = false;
        this.isMatched = false;
        /* Hash Map */
        this.hashmapEwayBill = new Map();
        /*Single Dto */
        this.truckDataDtoLocalStorageTruckMaster = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.hireSlipDtoForShortAndExtra = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoGoodsTypes = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        /* save & depart Single dto */
        this.hireSlipDtoUserValue = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoSaveHireslip = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.chkStatusHireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.truckDataDtoValidateTruckType = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.rcLicInscTruckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataDtoDepartRCLicPan = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataDtoCheckPanIns = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.hireSlipDtoForPrintInvoiceAlone = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        //depart
        this.hireSlipDtoUserValueForDepartureMethod = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.truckDataDtoForDepartureMethod = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.hireSlipDtoUserValueTripDeparture = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.lrDtoForSMS = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForInvoiceDetails = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoBarCode1 = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.lrDtoForLrDetailsMhdPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForLrDetailsMhd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForPrintHireslip = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoUserValueForPrintInvoiceBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.lrsPrintInvoiceBtn = new Array();
        this.lrDtoPrintInvoiceBtn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForBookingInvoicePrintMhd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoUserValueForPrintHireslipBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoBarCode = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForTimeDuratioMethod = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.isValid = false;
        this.truckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.calculateAalanceAmt = 0;
        this.validateTotalHireAmt = 0;
        this.validateAdvanceAmt = 0;
        this.validateTruckTypeTotGurWgt = 0;
        this.listOfShortageLrs = new Array();
        this.ewayBillLrForLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.returnEwayBillLrsLRDto = [];
        this.listInvoice = new Array();
        this.listOfInvoice = new Array();
        this.lrsDetailsMhdForPrint = new Array();
        this.isUploadedTruckOwner = false;
        this.truckDataDtoTruckOwner = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.isUploadedPopUp = false;
        this.truckDataDtoFileUploadRcInsLic = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.invPrintAloneForLrs = new Array();
        this.invPrintAloneForLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoFTRoutingExcep = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        /* 4 th level */
        this.lrDtoHideDummyInvoice = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        //listOfLrsHideDummyInvoice = new Array<String>();
        this.truckDataDtoForTruckTypeClick = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        /* 4 th level */
        /* 5 th level */
        this.hireSlipDtoForFtTrackingUserValue = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.getLoaderHeadListDetails = function () {
            _this.getLoaderHeadList();
            _this.masterReadService.getLoaderHeadDetails(_this.loaderHeadHireslipDto).subscribe(function (response) {
                if (response.length == 0) {
                    _this.loaderHeadOptions = [];
                    _this.loaderHeadTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Loader records found!", "warning");
                }
                else {
                    _this.loaderHeadOptions = [];
                    _this.loaderHeadTA = [];
                    _this.loaderHeadOptions = response;
                    for (var i = 0; i < _this.loaderHeadOptions.length; i++) {
                        _this.loaderHeadTA.push(_this.loaderHeadOptions[i]);
                        _this.hashmapLoaderHead.set(_this.loaderHeadOptions[i].loaderHead, i + 1);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getStaffNameDetailsList = function () {
            _this.getStaffDetailsForRead();
            _this.masterReadService.getStaffDetails(_this.staffDetailsLrDto).subscribe(function (response) {
                if (response.length == 0) {
                    _this.loaderStaffOption = [];
                    _this.loaderStaffNameTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Staff Name records found!", "warning");
                }
                else {
                    _this.loaderStaffOption = [];
                    _this.loaderStaffNameTA = [];
                    _this.loaderStaffOption = response;
                    for (var i = 0; i < _this.loaderStaffOption.length; i++) {
                        _this.loaderStaffNameTA.push(_this.loaderStaffOption[i]);
                        _this.hashmapLoader.set(_this.loaderStaffNameTA[i].staffName, i + 1);
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Loader Name Details", "warning");
            },
                function () { return console.log('done'); };
        };
        this.getTruckMasterDetailsList = function () {
            _this.getDriverDetailsForReadTruckNo();
            _this.masterReadService.getTruck(_this.truckDataDtoForTruckNo).subscribe(function (response) {
                if (response.length == 0) {
                    _this.truckNumberOptions = [];
                    _this.truckNumberTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Truck Number records found!", "warning");
                }
                else {
                    _this.truckNumberOptions = [];
                    _this.truckNumberTA = [];
                    _this.truckNumberOptions = response;
                    for (var i = 0; i < _this.truckNumberOptions.length; i++) {
                        _this.truckNumberTA.push(_this.truckNumberOptions[i]);
                        _this.hashmapTruck.set(_this.truckNumberOptions[i].truckNumber, _this.truckNumberOptions[i]);
                        _this.hashmapTruckNumberIndex.set(_this.truckNumberOptions[i].truckNumber, i + 1);
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Truck Master Details", "warning");
            },
                function () { return console.log('done'); };
        };
        this.getSupplierDetailsList = function () {
            _this.getSupplierDetails();
            _this.masterReadService.getSuplierMaster(_this.supplierDetailsDto).subscribe(function (response) {
                if (response.length == 0) {
                    _this.supplierOptions = [];
                    _this.supplierNameTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Supplier Master records found!", "warning");
                }
                else {
                    _this.supplierOptions = [];
                    _this.supplierNameTA = [];
                    _this.supplierOptions = response;
                    for (var i = 0; i < _this.supplierOptions.length; i++) {
                        _this.supplierNameTA.push(_this.supplierOptions[i]);
                        _this.hashMapSupplier.set(_this.supplierOptions[i].supplierName, _this.supplierOptions[i]);
                        _this.hashMapSupplierIndex.set(_this.supplierOptions[i].supplierName, i);
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Supplier Master Details", "warning");
            },
                function () { return console.log('done'); };
        };
        this.getDriverNameList = function () {
            _this.getDriverDetailsForRead();
            _this.masterReadService.getDriver(_this.driverDetailsDto).subscribe(function (response) {
                if (response.length == 0) {
                    _this.driverNameOptions = [];
                    _this.driverNameTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Driver Master records found!", "warning");
                }
                else {
                    _this.driverNameOptions = [];
                    _this.driverNameTA = [];
                    _this.driverNameOptions = response;
                    for (var i = 0; i < _this.driverNameOptions.length; i++) {
                        _this.driverNameTA.push(_this.driverNameOptions[i]);
                        // this.driverNameTA.push( this.driverNameOptions[i].driverName,this.driverNameOptions[i]);
                        _this.hashMapDriver.set(_this.driverNameOptions[i].driverName, _this.driverNameOptions[i]);
                        _this.hashMapDriverIndex.set(_this.driverNameOptions[i].id, _this.driverNameOptions[i].driverName);
                        _this.hashMapDriverIndexNew.set(_this.driverNameOptions[i].id, i);
                        //console.log(this.driverNameTA.push( this.driverNameOptions[i].driverName),this.driverNameOptions[i]);
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Driver Master Details", "warning");
            },
                function () { return console.log('done'); };
        };
        this.getTPCPEntryList = function () {
            _this.getCheckPostEntryList();
            _this.masterReadService.getTPCP(_this.truckDataTPCPEntryDto).subscribe(function (response) {
                if (response.length == 0) {
                    _this.entryCpOptions = [];
                    _this.entryCPTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No TPCP records found!", "warning");
                }
                else {
                    _this.entryCpOptions = [];
                    _this.entryCPTA = [];
                    _this.entryCpOptions = response;
                    for (var i = 0; i < _this.entryCpOptions.length; i++) {
                        _this.entryCPTA.push(_this.entryCpOptions[i]);
                        _this.hashMapEntryCPIndex.set(_this.entryCpOptions[i].cpName, i + 1);
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Truck Master Details", "warning");
            },
                function () { return console.log('done'); };
        };
        this.getTPCPExitList = function () {
            _this.getCheckPostExitList();
            _this.masterReadService.getTPCP(_this.truckDataTPCPExitDto).subscribe(function (response) {
                if (response.length == 0) {
                    _this.exitCpOptions = [];
                    _this.exitCPTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No TPCP records found!", "warning");
                }
                else {
                    _this.exitCpOptions = [];
                    _this.exitCPTA = [];
                    _this.exitCpOptions = response;
                    for (var i = 0; i < _this.exitCpOptions.length; i++) {
                        _this.exitCPTA.push(_this.exitCpOptions[i]);
                        _this.hashMapExitCPIndex.set(_this.exitCpOptions[i].cpName, i + 1);
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Truck Master Details", "warning");
            },
                function () { return console.log('done'); };
        };
        this.getTruckCapacityDetails = function () {
            _this.getTruckCapacityList();
            _this.masterReadService.getTruckCapacityDetails(_this.truckDataDtoForTruckCapacity).subscribe(function (response) {
                if (response.length == 0) {
                    _this.truckCapacityOptions = [];
                    _this.truckCapacityTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Truck Capacity records found!", "warning");
                }
                else {
                    _this.truckCapacityOptions = [];
                    _this.truckCapacityTA = [];
                    _this.truckCapacityOptions = response;
                    for (var i = 0; i < _this.truckCapacityOptions.length; i++) {
                        _this.truckCapacityTA.push(_this.truckCapacityOptions[i]);
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Truck Capacity Details", "error");
            },
                function () { return console.log('done'); };
        };
        this.getBinsDataDetails = function () {
            _this.getBinsData();
            _this.masterReadService.getBranchSubstations(_this.lrDtoBins).subscribe(function (response) {
                if (response.length == 0) {
                    _this.binsOptions = [];
                    _this.controlBinTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Bins records found!", "warning");
                }
                else {
                    _this.binsOptions = [];
                    _this.controlBinTA = [];
                    _this.binsOptions = response;
                    for (var i = 0; i < _this.binsOptions.length; i++) {
                        //this.controlBinTA.push( this.binsOptions[i].subStations );
                        _this.hashmapBins.set(_this.binsOptions[i].subStations, _this.binsOptions[i].stationType);
                        console.log(_this.lrDtoForInvoiceDetailLocalStorage.branch);
                        if (!(_this.binsOptions[i].subStations == _this.lrDtoForInvoiceDetailLocalStorage.branch)) {
                            if (!(_this.binsOptions[i].subStations == "Bangalore Delivery Godown")) {
                                _this.controlBinTA.push(_this.binsOptions[i]);
                            }
                        }
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Branch SubStations Details", "error");
            },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //sweet alert starts
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
            // userdata get through from login starts
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            console.log(this.userDataDtoReturnSession);
            /* rights start*/
            /* if (SRDWeb.sortedMapFeatures.get("Rights") != null) {
                    for (int i = 0; i < SRDWeb.sortedMapFeatures.get("Rights").size(); i++) {
                        if (SRDWeb.sortedMapFeatures.get("Rights").get(i) != null
                                && SRDWeb.sortedMapFeatures.get("Rights").get(i)
                                        .equalsIgnoreCase("Stocks Grouping Bins")) {
                            showBins = true;
                        }
                    }
                }*/
            /* rights end */
            /* 1 st level stock grouping start */
            /* if(this.rightsToShowDatatableOfArticleGroupingColumn == "Rights For ArticleGrouping Show Datatable Column"){
                 this.viewDeliveryManager=true;
              } */
            if (this.userDataDtoReturnSession.role == "Delivery Manager") {
                this.viewDeliveryManager = true;
            }
            if (this.userDataDtoReturnSession.ewayBillAlert) {
                this.ewayBillAlert = true;
                this.viewEwayBillStatus = true;
            }
            //this.userDataDtoReturnSession.isOpenTrip = true;
            if (this.userDataDtoReturnSession.isOpenTrip != null && this.userDataDtoReturnSession.isOpenTrip) {
                // alert(this.userDataDtoReturnSession.isOpenTrip);
                this.getDestInCombo();
            }
            this.getArticlesStocksSummaryDetailsList();
            /* 1 st level stock grouping end */
            /* 2 nd level invoice details start */
            this.getLoaderHeadListDetails();
            this.getStaffNameDetailsList();
            this.getTruckMasterDetailsList();
            this.getSupplierDetailsList();
            this.getDriverNameList();
            this.getTPCPEntryList();
            this.getTPCPExitList();
            /* 2 nd level invoice details end */
            /* 3 rd level make a trip details start */
            // flow has change by asrar bhaiya as per discuss
            /*if (SRDWeb.role.equalsIgnoreCase("Booking Manager")) {
                comboBoxBins.setVisible(true);
                lblBins.setVisible(true);
            } else if (SRDWeb.role.equalsIgnoreCase("Transshipment Manager")
                    && (SRDWeb.office.equalsIgnoreCase("Binnymills"))) {
                comboBoxBins.setVisible(true);
                lblBins.setVisible(true);
            } else if (showBins) {
                comboBoxBins.setVisible(true);
                lblBins.setVisible(true);
            } else {
                comboBoxBins.setVisible(false);
                lblBins.setVisible(false);
            }
            */
            this.getTruckCapacityDetails();
            if (this.userDataDtoReturnSession.showStkGrpBins == true) {
                this.hideshowControlsBins = true;
            }
            /* 3 rd level make a trip details end */
            /*   4 th level invoie details start */
            //if(this.rightsForOfficeTypeHideDummyLrPrint != "rights for officetype hide dummy lr print"){
            if (this.userDataDtoReturnSession.officeType != "Booking Office") {
                this.viewCheckBoxInvoiceDummyLr = true;
            }
            else {
                this.viewCheckBoxInvoiceDummyLr = false;
            }
            /*   4 th level invoie details end */
            /*   5 th level Hireslip form start */
            /*if(this.rightsForInvoiceTypeAndMainInvocie == "rights to show invoice type and main invoice for main and dummy")
           {*/
            if (this.userDataDtoReturnSession.officeType != null &&
                this.userDataDtoReturnSession.officeType == "Booking Office") {
                this.invoiceType = "Main";
                this.isMainInvoice = true;
                this.isBookingStation = true;
                //hpLorry.setVisible(true);
            }
            else {
                this.isMainInvoice = false;
                this.invoiceType = "Dummy";
                //hpLorry.setVisible(false);
            }
            this.getTruckTypeDetails();
            this.financialYearOnloadValidate = this.userDataDtoReturnSession.financialYear;
            this.firstYearStgOnloadValidate = this.financialYearOnloadValidate.split("-")[0];
            this.secondYearStgOnloadValidate = this.financialYearOnloadValidate.split("-")[1];
            /*   5 th level Hireslip form end */
        }
    }
    StocksGroupingComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StocksGroupingComponent.prototype.ngOnInit = function () {
        /* 1 st level stock grouping start */
        this.dtOptionsStockSummary = {
            dom: 'Bfrtip',
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
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 230,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            // pageLength: 10,
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
                var totLrs = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var articles = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totAmt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(totLrs);
                $(api.column(2).footer()).html(articles);
                $(api.column(3).footer()).html(actWgt);
                $(api.column(4).footer()).html(chgWgt);
                $(api.column(5).footer()).html(totAmt);
            }
        }, this.dtOptionsStockDetails = {
            dom: 'Bfrtip',
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
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Urgent LRs</i>',
                    titleAttr: 'Print Urgent LRs',
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Urgent LRs</i>',
                    titleAttr: 'Excel Urgent LRs',
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
            "scrollY": 230,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            // pageLength: 10,
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
                var articles = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totAmt = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(8).footer()).html(articles);
                $(api.column(9).footer()).html(actWgt);
                $(api.column(10).footer()).html(chgWgt);
                $(api.column(11).footer()).html(totAmt);
            }
        };
        /* 1 st level stock grouping end */
        /* 3 rd level make a trip details start */
        this.dtOptionsEligibleLrs = {
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
            "scrollY": 220,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            //pageLength: 8,
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
                var articles = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var goodsvalue = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(4).footer()).html(articles);
                $(api.column(5).footer()).html(actWgt);
                $(api.column(6).footer()).html(chgWgt);
                $(api.column(7).footer()).html(toPay);
                $(api.column(8).footer()).html(paid);
                $(api.column(9).footer()).html(goodsvalue);
            }
        }, this.dtOptionRemainingLrs = {
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 220,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            //pageLength: 8,
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
                var articles = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var goodsvalue = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(2).footer()).html(articles);
                $(api.column(3).footer()).html(actWgt);
                $(api.column(4).footer()).html(chgWgt);
                $(api.column(5).footer()).html(toPay);
                $(api.column(6).footer()).html(paid);
                $(api.column(7).footer()).html(goodsvalue);
            }
        };
        /* 3 rd level make a trip details end */
        /* 4 th level invoice start */
        this.dtOptionsInvoice = {
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 230,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            //pageLength: 8,
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
                var articles = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(12).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(13).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var goodsvalue = api.column(14).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(7).footer()).html(articles);
                $(api.column(10).footer()).html(actWgt);
                $(api.column(11).footer()).html(chgWgt);
                $(api.column(12).footer()).html(toPay);
                $(api.column(13).footer()).html(paid);
                $(api.column(14).footer()).html(goodsvalue);
            }
        };
        /* 4 th invoice end */
        /* 5 th Hireslip start */
        this.dtOptionsGoodsShortAndExtraDetails = {
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
        },
            this.dtOptionsHireslipDetails = {
                // the below code is for button export starts
                dom: 'Bfrtip',
                buttons: [],
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
                "paging": false,
                "info": false,
            };
        /* 5 th Hireslip end*/
    };
    StocksGroupingComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                //dtInstance.destroy();
                //console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
                //console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
            });
        });
    };
    StocksGroupingComponent.prototype.ngOnDestroy = function () {
        /* 1 st level stock grouping start */
        //this.dtTriggerStockSummary.unsubscribe();
        //this.dtTriggerStockDetails.unsubscribe();
        /* 1 st level stock grouping end */
    };
    StocksGroupingComponent.prototype.ngAfterViewInit = function () {
        /* 1 st level stock grouping start */
        this.dtTriggerStockSummary.next();
        this.dtTriggerStockDetails.next();
        /* 1 st level stock grouping end */
        /* 5 th level stock grouping end */
        this.dtTriggerGoodsShortAndExtraDetails.next();
        this.dtTriggerHireslipDetails.next();
        /* 5 th level stock grouping end */
    };
    /* 1 st level main stock grouping start */
    StocksGroupingComponent.prototype.getArticlesStocksSummaryDetails = function () {
        this.lrDtoStockSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoStockSummary.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoStockSummary.branch = this.userDataDtoReturnSession.office;
        this.lrDtoStockSummary.branchType = this.userDataDtoReturnSession.stationType;
        this.lrDtoStockSummary.destType = this.userDataDtoReturnSession.destType;
        this.lrDtoStockSummary.destination = this.userDataDtoReturnSession.mainStation;
        this.lrDtoStockSummary.OfficeType = this.userDataDtoReturnSession.officeType;
        console.log(this.lrDtoStockSummary);
    };
    StocksGroupingComponent.prototype.getArticlesStocksSummaryDetailsList = function () {
        var _this = this;
        this.getArticlesStocksSummaryDetails();
        this.showSpinnerForAction = true;
        this.stockService.getArticlesStocksSummary(this.lrDtoStockSummary).subscribe(function (response) {
            //console.log(response);
            _this.stockSummaryDataList = [];
            $("#stockSummaryTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.stockSummaryDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "No Record Found", "warning");
            }
            _this.dtTriggerStockSummary.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Trip Creation Stock Summary", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksGroupingComponent.prototype.rowSelectedGetTripLRDeatils = function (stockSummaryTableData) {
        //console.log(stockSummaryTableData);
        this.lrDtoStocksDetails.branch = this.userDataDtoReturnSession.office;
        this.stockDetailsDataList = [];
        $("#stockDetailsTableId").DataTable().destroy();
        this.dtTriggerStockDetails.next();
        if (stockSummaryTableData.totalLrs > 0) {
            this.lrDtoStocksDetails.destination = stockSummaryTableData.endDest;
            this.lrDtoStocksDetails.stationType = stockSummaryTableData.stationType;
            this.lrDtoStocksDetails.subStations = stockSummaryTableData.endDest;
            this.lrDtoStocksDetails.branchType = this.userDataDtoReturnSession.stationType;
            this.lrDtoStocksDetails.destType = this.userDataDtoReturnSession.destType;
            this.lrDtoStocksDetails.companyId = this.userDataDtoReturnSession.companyId;
            this.makeATripBtn = stockSummaryTableData.endDest;
            this.tripSheetBtn = stockSummaryTableData.endDest;
            this.getArticlesStocksDetailsList(this.lrDtoStocksDetails);
        }
    };
    StocksGroupingComponent.prototype.getArticlesStocksDetailsList = function (lrDtoStocksDetails) {
        var _this = this;
        //console.log(this.lrDtoStocksDetails);
        this.showSpinnerForAction = true;
        this.stockService.getArticlesStocks(this.lrDtoStocksDetails).subscribe(function (response) {
            _this.stockDetailsDataList = [];
            $("#stockDetailsTableId").DataTable().destroy();
            if (response.length > 0) {
                // console.log(response);
                _this.stockDetailsDataList = response;
                setTimeout(function () {
                    _this.dtTriggerStockDetails.next();
                }, 1000);
                /*  if(this.rightsToShowMakeaTripButton =="Show make a trip option"){
                          this.makeAtripBtnHideShow=true;
                  }else if(this.rightsToShowTripSheetButton == "Show trip sheet option"){
                          this.tripSheetBtnHideShow=true;
                  }
                */
                if ((_this.userDataDtoReturnSession.officeType = "Booking Office")
                    || ((_this.userDataDtoReturnSession.officeType = "Transshipment Office")
                        && ((_this.userDataDtoReturnSession.stationType = "Transshipment"))
                        && (!(_this.userDataDtoReturnSession.office = "Binnymills")))) {
                    _this.nextTomakeAtripBtnHideShow = true;
                    //this.makeAtripBtnHideShow = true;
                    _this.tripSheetBtnHideShow = true;
                }
                if (_this.lrDtoStocksDetails.stationType != null && (!(_this.lrDtoStocksDetails.stationType == ""))
                    && (_this.lrDtoStocksDetails.stationType == "local")) {
                    _this.nextTomakeAtripBtnHideShow = false;
                    //this.makeAtripBtnHideShow = false;
                    _this.tripSheetBtnHideShow = false;
                }
                else if (_this.lrDtoStocksDetails.stationType != null
                    && (!(_this.lrDtoStocksDetails.stationType == ""))
                    && (_this.lrDtoStocksDetails.stationType == "Others"
                        || (_this.lrDtoStocksDetails.stationType == "Godown Delivery"
                            && (!(_this.userDataDtoReturnSession.office == "Binnymills"))))) {
                    _this.nextTomakeAtripBtnHideShow = false;
                    //this.makeAtripBtnHideShow = false;
                    _this.tripSheetBtnHideShow = false;
                }
                else if ((_this.lrDtoStocksDetails.stationType == "Godown Delivery")
                    && (_this.userDataDtoReturnSession.office == "Binnymills")) {
                    _this.nextTomakeAtripBtnHideShow = true;
                    //this.makeAtripBtnHideShow = true;
                    _this.tripSheetBtnHideShow = false;
                }
                else {
                    _this.nextTomakeAtripBtnHideShow = true;
                    //this.makeAtripBtnHideShow = true;
                    _this.tripSheetBtnHideShow = false;
                }
                if (_this.userDataDtoReturnSession.ewayBillAlert) {
                    _this.ewayBillAlertMsg(_this.stockDetailsDataList);
                }
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Trip Creation Stock Details", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksGroupingComponent.prototype.ewayBillAlertMsg = function (dataForEway) {
        var count = 0;
        var ewayBillStatus = "Multiple Lr's, No EWB";
        var lrs = "";
        //console.log(dataForEway.length);
        for (var i = 0; i < dataForEway.length; i++) {
            if (dataForEway[i].ewayBillStatus != null
                && dataForEway[i].ewayBillStatus == ewayBillStatus) {
                if (count == 0) {
                    lrs = dataForEway[i].lrNumber;
                }
                else {
                    lrs += ", " + dataForEway[i].lrNumber;
                }
                count++;
            }
        }
        if (count > 1) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "LR Numbers without Eway Bill Number are listed below. Total:" + count + "",
                text: "" + lrs + "",
                icon: "info",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    /*Button Click Method Make a trip */
    StocksGroupingComponent.prototype.validateNextToMakeTripButton = function (tripToDestList) {
        //this.makeAtripBtnHideShow = true;
        //this.nextTomakeAtripBtnHideShow = false;
        this.validationInvoiceBlocking(tripToDestList);
    };
    /* validateInvoiceBlockingMakeTripButton(tripToDestList) {
         this.validationInvoiceBlocking(tripToDestList);
     }*/
    StocksGroupingComponent.prototype.getInvoiceBlockingDto = function () {
        this.hireSlipDtoForInvoiceBlocking = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForInvoiceBlocking.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDtoForInvoiceBlocking.branch = this.userDataDtoReturnSession.office;
    };
    StocksGroupingComponent.prototype.validationInvoiceBlocking = function (tripToDestList) {
        var _this = this;
        this.getInvoiceBlockingDto();
        this.hireslipService.getUnclearedInvoives(this.hireSlipDtoForInvoiceBlocking).subscribe(function (response) {
            console.log(response);
            var hireslipUncleared = "";
            if (response.length > 0) {
                for (var i = 0; i < response.length; i++) {
                    if (i == 0) {
                        hireslipUncleared = response[i].hireslipnumber;
                    }
                    else {
                        hireslipUncleared += ", " + response[i].hireslipnumber;
                    }
                }
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Invoice creation blocked,Please update the Invoice(s) no.",
                    text: "" + hireslipUncleared + " in LR short & extra",
                    icon: "info",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                _this.getMakeATripMethod(tripToDestList);
            }
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Invoice Blocking in Stock Summary", "warning");
        }, function () { return console.log('done'); };
    };
    ;
    /*getMakeATripMethod(tripToDestList) {
        if (this.makeATripBtn == "Others") {
            swal({
                title: "Trips For Other",
                text: "Can't generate Trips for UnAssigned Lrs",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        } else {
            // this.userDataDtoReturnSession.isOpenTrip = true;
            if (this.userDataDtoReturnSession.isOpenTrip) {
                this.openTripToDestList(tripToDestList);
                //popupTripTo.show();
            } else {
                //this.myStepper.next();
                this.makeMainTrip(this.makeATripBtn);
                // stepper.next();
            }
        }
    }*/
    StocksGroupingComponent.prototype.getMakeATripMethod = function (tripToDestList) {
        if (this.makeATripBtn == "Others") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Trips For Other",
                text: "Can't generate Trips for UnAssigned Lrs",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            //this.userDataDtoReturnSession.isOpenTrip = true;
            if (this.userDataDtoReturnSession.isOpenTrip) {
                this.openTripToDestList(tripToDestList);
                //popupTripTo.show();
            }
            else {
                this.makeAtripBtnHideShow = true;
                this.nextTomakeAtripBtnHideShow = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("OK", "Please Click The Make A Trip Button Again To Continue", "info");
            }
        }
    };
    StocksGroupingComponent.prototype.validateMakeATripButton = function () {
        this.makeMainTrip(this.makeATripBtn);
    };
    StocksGroupingComponent.prototype.makeMainTrip = function (selectedDestination) {
        console.log(this.makeATripBtn);
        /*
         if(this.rigthsForMakeTripBtnGenerateInvoice == "selected destination to generate invoice"){
            this.lrDtoLocalStorage.branch="Konditope";
        */
        if ((this.makeATripBtn == "Godown Delivery") && (this.userDataDtoReturnSession.office == "Binnymills")) {
            //FORMWARDIG TO NEXT PAGE PENDING
            // tabInvoiceGeneration.add(new InvoiceDetailsForTrip("Konditope",
            //"grouping", null, null, null, SRDWeb.office,
            //selectedDestination));
            this.lrDtoForStockGroupingLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
            this.lrDtoForStockGroupingLocalStorage.branch = "Konditope";
            this.lrDtoForStockGroupingLocalStorage.mode = "grouping";
            this.lrDtoForStockGroupingLocalStorage.invoiceNumber = null;
            this.lrDtoForStockGroupingLocalStorage.guranteeWt = null;
            this.lrDtoForStockGroupingLocalStorage.truckDataDto = null;
            this.lrDtoForStockGroupingLocalStorage.source = this.userDataDtoReturnSession.office;
            this.lrDtoForStockGroupingLocalStorage.tripTo = selectedDestination;
        }
        else {
            //tabInvoiceGeneration.add(new InvoiceDetailsForTrip(
            //btnGenerateInvoice.getId(), "grouping", null, null, null,
            //SRDWeb.office, selectedDestination));
            this.lrDtoForStockGroupingLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
            this.lrDtoForStockGroupingLocalStorage.branch = this.makeATripBtn;
            this.lrDtoForStockGroupingLocalStorage.mode = "grouping";
            this.lrDtoForStockGroupingLocalStorage.invoiceNumber = null;
            this.lrDtoForStockGroupingLocalStorage.guranteeWt = null;
            this.lrDtoForStockGroupingLocalStorage.truckDataDto = null;
            this.lrDtoForStockGroupingLocalStorage.source = this.userDataDtoReturnSession.office;
            this.lrDtoForStockGroupingLocalStorage.tripTo = selectedDestination;
        }
        /* 2 nd level invoice details start*/
        this.nextToInvoiceDetailOfDarkBtnHideShow = true;
        this.nextToInvoiceDetailOfGreenBtnHideShow = false;
        this.fromStationLocation = this.userDataDtoReturnSession.office;
        this.toStationLocation = selectedDestination;
        /* 2 nd level invoice details emd*/
    };
    StocksGroupingComponent.prototype.clickListnerForTripToDestType = function (e, fubi) {
        this.modelTripToDestType = e.item;
        console.log(this.modelTripToDestType);
        $("#tripToDestType").val(this.modelTripToDestType.destination);
    };
    StocksGroupingComponent.prototype.getDestInCombo = function () {
        var _this = this;
        this.lrDtoDest = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoDest.mode = "desttrip";
        this.lrDtoDest.companyId = this.userDataDtoReturnSession.companyId;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDest).subscribe(function (response) {
            if (response) {
                //console.log(response);
                if (response.length == 0) {
                    _this.tripToDestOptions = [];
                    _this.tripToDestTypeTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Destination records found!", "warning");
                }
                else {
                    _this.tripToDestOptions = [];
                    _this.tripToDestTypeTA = [];
                    _this.tripToDestOptions = response;
                    for (var i = 0; i < _this.tripToDestOptions.length; i++) {
                        _this.tripToDestTypeTA.push(_this.tripToDestOptions[i]);
                    }
                    console.log(_this.tripToDestTypeTA);
                }
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Error",
            text: "Server Error While Getting getDestInCombo in Stock Summary",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    StocksGroupingComponent.prototype.openTripToDestList = function (tripToDestList) {
        this.modalService.open(tripToDestList, { centered: true });
    };
    StocksGroupingComponent.prototype.btnProceedTripTo = function () {
        var selectedTripToDest = $("#tripToDestType").val();
        if (selectedTripToDest == null || selectedTripToDest == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Mandatory Field",
                text: "Please select Trip To option to proceed",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            var selectedDestType = this.modelTripToDestType.destinationType;
            if (selectedDestType == "Booking Office") {
                this.makeLocalTrip(selectedTripToDest);
            }
            else {
                //this.makeMainTrip(this.makeATripBtn);
                this.makeAtripBtnHideShow = true;
                this.nextTomakeAtripBtnHideShow = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("OK", "Please Click The Make A Trip Button Again To Continue", "info");
            }
        }
    };
    StocksGroupingComponent.prototype.makeLocalTrip = function (selectedTripToDest) {
        //alert(selectedTripToDest);
        //PENDING WORK
        //popup = new Dialog();
        //popup.setHeading("Trip Schedule For " + btnGenerateInvoice.getId());
        // popup.add(new TripForLocal(btnGenerateInvoice.getId(), "localgrouping",
        //   null, "booking", selectedTripToDest, 0));
        // popup.setWidth(x - (x / 65));
        //popup.setHeight(600);
        //popup.setModal(true);
        //popup.setButtons("");
        //popup.show();
    };
    StocksGroupingComponent.prototype.resetFeilds = function () {
        /* 1 st level  stock grouping end */
        //this.viewEwayBillStatus = false;
        //this.ewayBillAlert = false;
        //this.viewDeliveryManager = true;
        this.makeATripBtn = "";
        this.tripSheetBtn = "";
        this.lrDtoForStockGroupingLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.makeAtripBtnHideShow = false;
        this.tripSheetBtnHideShow = false;
        this.nextTomakeAtripBtnHideShow = false;
        this.modelTripToDestType = null;
        this.fromStationLocation = '';
        this.toStationLocation = '';
        /* 1 st level  stock grouping end */
        /* 2 nd level invoice details start*/
        this.nextToInvoiceDetailOfDarkBtnHideShow = false;
        this.nextToInvoiceDetailOfGreenBtnHideShow = false;
        /* 2 nd level  invoice details end*/
    };
    /* 1 st level main stock grouping end */
    /* 2 nd level main invoice details start*/
    /*For Select Method Of Drop Down START HERE*/
    StocksGroupingComponent.prototype.clickListnerForLoaderHead = function (e, fubi) {
        this.modelLoaderHead = e.item;
        window.setTimeout(function () {
            $("#loaderStaffName").focus();
        }, 100);
    };
    StocksGroupingComponent.prototype.clickListnerForLoaderStaffName = function (e, fubi) {
        this.modelLoaderStaffName = e.item;
        window.setTimeout(function () {
            $("#truckNumber").focus();
        }, 100);
    };
    StocksGroupingComponent.prototype.clickListnerForTruckNumber = function (e, fubi) {
        this.modelTruckNumber = e.item;
        window.setTimeout(function () {
            $("#supplierName").focus();
        }, 100);
    };
    StocksGroupingComponent.prototype.clickListnerForSupplier = function (e, fubi) {
        this.modelSupplierName = e.item;
        window.setTimeout(function () {
            $("#driverName").focus();
        }, 100);
    };
    StocksGroupingComponent.prototype.clickListnerForDriverName = function (e, fubi) {
        this.modelDriverName = e.item;
        $("#licenceNumber").val(this.modelDriverName.licenceNo);
        window.setTimeout(function () {
            $("#licenceNumber").focus();
        }, 100);
    };
    StocksGroupingComponent.prototype.clickListnerForEntryCP = function (e, fubi) {
        this.modelEntryCP = e.item;
        window.setTimeout(function () {
            $("#exitCP").focus();
        }, 100);
        this.onSelectEntryCpCode = null;
        this.onSelectEntryCpCode = this.modelEntryCP.cpCode;
    };
    StocksGroupingComponent.prototype.clickListnerForExitCP = function (e, fubi) {
        this.modelExitCP = e.item;
        window.setTimeout(function () {
            $("#expExitDates").focus();
        }, 100);
        this.onSelectExitCpCode = null;
        this.onSelectExitCpCode = this.modelExitCP.cpCode;
    };
    /*For Select Method Of Drop Down END HERE */
    /*On Key Press Function Start Here */
    StocksGroupingComponent.prototype.onKeyPressFieldForExpDay = function (event) {
        if (event == 13) {
            $("#remarks").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForLicNo = function (event) {
        if (event == 13) {
            window.setTimeout(function () {
                $("#bayNumber").focus();
            }, 100);
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForBayNo = function (event) {
        if (event == 13) {
            window.setTimeout(function () {
                $("#bayLoadingDates").focus();
            }, 100);
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForBayDate = function (event) {
        if (event == 13) {
            window.setTimeout(function () {
                $("#bayLoadingTime").focus();
            }, 100);
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForBayTime = function (event) {
        if (event == 13) {
            window.setTimeout(function () {
                $("#entryCP").focus();
            }, 100);
        }
    };
    /*On Key Press Function End Here */
    StocksGroupingComponent.prototype.getLoaderHeadList = function () {
        this.loaderHeadHireslipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.loaderHeadHireslipDto.mainStation = this.userDataDtoReturnSession.mainStation;
        this.loaderHeadHireslipDto.companyid = this.userDataDtoReturnSession.companyId;
    };
    StocksGroupingComponent.prototype.getStaffDetailsForRead = function () {
        this.staffDetailsLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.staffDetailsLrDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksGroupingComponent.prototype.getDriverDetailsForReadTruckNo = function () {
        this.truckDataDtoForTruckNo = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataDtoForTruckNo.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDtoForTruckNo.status = "Working";
    };
    StocksGroupingComponent.prototype.getSupplierDetails = function () {
        this.supplierDetailsDto = new src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_17__["SupplierDetailsDto"]();
        this.supplierDetailsDto.companyId = this.userDataDtoReturnSession.companyId;
        //this.supplierDetailsDto.mode = "Working";
    };
    StocksGroupingComponent.prototype.getDriverDetailsForRead = function () {
        this.driverDetailsDto = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_18__["DriverdetailsDto"]();
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
    StocksGroupingComponent.prototype.getCheckPostEntryList = function () {
        this.truckDataTPCPEntryDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataTPCPEntryDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataTPCPEntryDto.status = "Entry";
    };
    StocksGroupingComponent.prototype.getCheckPostExitList = function () {
        this.truckDataTPCPExitDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataTPCPExitDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataTPCPExitDto.status = "Exit";
    };
    StocksGroupingComponent.prototype.getUserValues = function () {
        this.userValueTruckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.selectedLoaderHead = $("#loaderHead").val();
        this.selectedLoaderName = $("#loaderStaffName").val();
        this.selectedRemarks = $("#remarks").val();
        this.selectedLicNo = $("#licenceNumber").val();
        this.selectedTruckNumber = $("#truckNumber").val();
        this.selectedDriverName = $("#driverName").val();
        if (this.modelDriverName.id != null && this.modelDriverName.id != undefined) {
            this.selectedDriverId = this.modelDriverName.id;
        }
        this.selectedSupplierName = $("#supplierName").val();
        this.selectedEntryCp = $("#entryCP").val();
        this.selectedExitCp = $("#exitCP").val();
        this.selectedEntryCpCode = this.onSelectEntryCpCode;
        this.selectedExitCpCode = this.onSelectExitCpCode;
        this.selectedExpExitDate = $("#expExitDates").val();
        this.selectedExpExitDays = $("#expExitDays").val();
        this.selectedBayNumber = $("#bayNumber").val();
        this.selectedBayLoadingDate = $("#bayLoadingDates").val();
        this.selectedBayLoadingTime = $("#bayLoadingTime").val();
        this.userValueTruckDataDto.loaderHead = this.selectedLoaderHead;
        this.userValueTruckDataDto.loaderName = this.selectedLoaderName;
        this.userValueTruckDataDto.remarks = this.selectedRemarks;
        this.userValueTruckDataDto.licNo = this.selectedLicNo;
        //truckDtoTruck = hashMapTruck.get(listBoxTruck.getItemText(listBoxTruck.getSelectedIndex()));
        this.userValueTruckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.userValueTruckDto = this.hashmapTruck.get(this.selectedTruckNumber);
        //console.log(this.userValueTruckDto);
        this.userValueTruckDataDto.truckNumber = this.selectedTruckNumber;
        this.userValueTruckDataDto.ownerName = this.userValueTruckDto.ownerName;
        this.userValueTruckDataDto.panNo = this.userValueTruckDto.tinNo;
        this.userValueTruckDataDto.contactPerson = this.userValueTruckDto.contactPerson;
        this.userValueTruckDataDto.address = this.userValueTruckDto.address;
        this.userValueTruckDataDto.ownerStateCode = this.userValueTruckDto.stateCode;
        this.userValueTruckDataDto.ownerPincode = this.userValueTruckDto.pinCodeNumber;
        // fayaz
        this.userValueTruckDataDto.trkLgth = this.userValueTruckDto.trkLgth;
        //driverDto = hashMapDriver.get(listBoxDriver.getValue(listBoxDriver.getSelectedIndex()));
        this.userValueDriverdetailsDto = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_18__["DriverdetailsDto"]();
        this.userValueDriverdetailsDto = this.hashMapDriver.get(this.selectedDriverName);
        //console.log(this.userValueDriverdetailsDto);
        this.userValueTruckDataDto.driverName = this.selectedDriverName;
        this.userValueTruckDataDto.driverAdd = this.userValueDriverdetailsDto.address;
        this.userValueTruckDataDto.driverLicState = this.userValueDriverdetailsDto.DLIssState;
        this.userValueTruckDataDto.driverLicStateCode = this.userValueDriverdetailsDto.DLIssStateCode;
        this.userValueTruckDataDto.driverPincode = this.userValueDriverdetailsDto.pin;
        this.userValueTruckDataDto.driverMobNo = this.userValueDriverdetailsDto.mobileNo;
        this.userValueTruckDataDto.driverId = this.selectedDriverId;
        //supplierDto = hashMapSupplier.get(listBoxSupplier.getItemText(listBoxSupplier.getSelectedIndex()));
        this.userValueSupplierDetailsDto = new src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_17__["SupplierDetailsDto"]();
        this.userValueSupplierDetailsDto = this.hashMapSupplier.get(this.selectedSupplierName);
        this.userValueTruckDataDto.supplierName = this.selectedSupplierName;
        this.userValueTruckDataDto.suppAdd = this.userValueSupplierDetailsDto.address;
        this.userValueTruckDataDto.suppPanNo = this.userValueSupplierDetailsDto.tinNumber;
        this.userValueTruckDataDto.suppPhNo = this.userValueSupplierDetailsDto.contactNumber;
        this.userValueTruckDataDto.entryCP = this.selectedEntryCp;
        this.userValueTruckDataDto.exitCP = this.selectedExitCp;
        this.userValueTruckDataDto.entryCPCode = this.selectedEntryCpCode;
        this.userValueTruckDataDto.exitCPCode = this.selectedExitCpCode;
        this.userValueTruckDataDto.expExitDate = this.selectedExpExitDate;
        this.userValueTruckDataDto.expExitDays = this.selectedExpExitDays;
        if (this.lrDtoForStockGroupingLocalStorage.truckDataDto != null) {
            this.userValueTruckDataDto.multipleSource = this.lrDtoForStockGroupingLocalStorage.truckDataDto.multipleSource == null ? null : this.lrDtoForStockGroupingLocalStorage.truckDataDto.multipleSource;
            this.userValueTruckDataDto.multipleHamali = this.lrDtoForStockGroupingLocalStorage.truckDataDto.multipleHamali == null ? null : this.lrDtoForStockGroupingLocalStorage.truckDataDto.multipleHamali;
        }
        this.userValueTruckDataDto.tripTo = this.lrDtoForStockGroupingLocalStorage.tripTo;
        if ($("#bayNumber").val() != null && $("#bayNumber").val() == "Select Bay") {
            this.userValueTruckDataDto.bayNo = null;
        }
        else {
            this.userValueTruckDataDto.bayNo = this.selectedBayNumber;
        }
        this.userValueTruckDataDto.bayUnloadingDate = this.selectedBayLoadingDate;
        this.userValueTruckDataDto.bayUnloadingTime = this.selectedBayLoadingTime;
        console.log(this.lrDtoForStockGroupingLocalStorage.truckDataDto);
        return this.userValueTruckDataDto;
    };
    StocksGroupingComponent.prototype.validateDarkNextBtn = function () {
        if (($("#loaderHead").val() == null) || ($("#loaderHead").val() == undefined) ||
            ($("#loaderHead").val() == "") || ($("#loaderStaffName").val() == null) ||
            ($("#loaderStaffName").val() == undefined) || ($("#loaderStaffName").val() == "") ||
            ($("#truckNumber").val() == null) || ($("#truckNumber").val() == undefined) ||
            ($("#truckNumber").val() == "") || ($("#supplierName").val() == null) ||
            ($("#supplierName").val() == undefined) || ($("#supplierName").val() == "") ||
            ($("#driverName").val() == null) || ($("#driverName").val() == undefined) ||
            ($("#driverName").val() == "") || ($("#bayNumber").val() == null) ||
            ($("#bayNumber").val() == undefined) || ($("#bayNumber").val() == "Select Bay") ||
            ($("#bayNumber").val() == "") || ($("#bayLoadingDates").val() == null) ||
            ($("#bayLoadingDates").val() == undefined) || ($("#bayLoadingDates").val() == "") ||
            ($("#bayLoadingTime").val() == null) || ($("#bayLoadingTime").val() == undefined) ||
            ($("#bayLoadingTime").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Please enter the mandatory field", "warning");
            return false;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("OK", "Please Click The Next Button Again To Continue", "info");
            this.nextToInvoiceDetailOfDarkBtnHideShow = false;
            this.nextToInvoiceDetailOfGreenBtnHideShow = true;
        }
    };
    StocksGroupingComponent.prototype.validateNextMakeATrip = function () {
        // swal("You Are 50%  Reached");
        /* 2 nd level make a trip start */
        console.log(this.lrDtoForStockGroupingLocalStorage);
        this.lrDtoForInvoiceDetailLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoForInvoiceDetailLocalStorage.branch = this.lrDtoForStockGroupingLocalStorage.branch;
        this.lrDtoForInvoiceDetailLocalStorage.mode = this.lrDtoForStockGroupingLocalStorage.mode;
        this.lrDtoForInvoiceDetailLocalStorage.invoiceNumber = this.lrDtoForStockGroupingLocalStorage.invoiceNumber;
        this.lrDtoForInvoiceDetailLocalStorage.guranteeWt = this.lrDtoForStockGroupingLocalStorage.guranteeWt;
        this.lrDtoForInvoiceDetailLocalStorage.truckDataDto = this.getUserValues();
        this.lrDtoForInvoiceDetailLocalStorage.source = this.lrDtoForStockGroupingLocalStorage.source;
        this.lrDtoForInvoiceDetailLocalStorage.tripTo = this.lrDtoForStockGroupingLocalStorage.tripTo;
        console.log(this.lrDtoForInvoiceDetailLocalStorage);
        /* 2 nd level make a trip end */
        /* 3 rd level make a trip start */
        this.viewNextDarkBtnOfInvoice = true;
        this.viewNextBtnOfInvoice = false;
        this.makeATripClearField();
        if (this.userDataDtoReturnSession.showStkGrpBins == true) {
            this.setBinsDataSpecificDetails();
        }
        /* else {
            this.getBinsDataDetails();
        }*/
        /* 3 rd level make a trip end */
    };
    StocksGroupingComponent.prototype.clearInvoiceDetailsBtn = function () {
        this.invoiceDetailsClearField();
    };
    StocksGroupingComponent.prototype.invoiceDetailsClearField = function () {
        this.nextToInvoiceDetailOfDarkBtnHideShow = true;
        this.nextToInvoiceDetailOfGreenBtnHideShow = false;
        this.lrDtoForInvoiceDetailLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.selectedLoaderHead = null;
        this.selectedLoaderName = null;
        this.selectedRemarks = null;
        this.selectedLicNo = null;
        this.selectedTruckNumber = null;
        this.selectedDriverName = null;
        this.selectedDriverId = null;
        this.selectedSupplierName = null;
        this.selectedEntryCp = null;
        this.selectedExitCp = null;
        this.selectedEntryCpCode = null;
        this.selectedExitCpCode = null;
        this.selectedExpExitDate = null;
        this.selectedExpExitDays = null;
        this.modelExpExitDate = null;
        this.modelLoaderHead = null;
        this.modelLoaderStaffName = null;
        this.modelTruckNumber = null;
        this.modelSupplierName = null;
        this.modelDriverName = null;
        $("#licenceNumber").val('');
        this.modelEntryCP = null;
        this.modelExitCP = null;
        $("#expExitDays").val('');
        $("#remarks").val('');
        this.selectedBayNumber = null;
        this.selectedBayLoadingDate = null;
        this.selectedBayLoadingTime = null;
        this.bayLoadingDateModel = null;
        $("#bayLoadingTime").val('');
        $("#bayLoadingDates").val('');
        $("#bayNumber").val('Select Bay');
        this.onSelectExitCpCode = null;
        this.onSelectEntryCpCode = null;
    };
    /* 2 nd level main invoice details end */
    /* 3 rd level main make a trip details start */
    StocksGroupingComponent.prototype.clickListnerForTruckCapacity = function (e, fubi) {
        this.modelTruckCapacity = e.item;
        $("#truckCapacity").val(this.modelTruckCapacity.capacity);
        /* this.lrDtoMakeATripLocalStorage = JSON.parse(localStorage.getItem('makeATripGenLocalStorage'));
         if (this.lrDtoMakeATripLocalStorage != null) {
             this.lrDtoLocalStorage = this.lrDtoMakeATripLocalStorage;
         }*/
        this.callService("filtered");
    };
    StocksGroupingComponent.prototype.getTruckCapacityList = function () {
        this.truckDataDtoForTruckCapacity = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataDtoForTruckCapacity.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksGroupingComponent.prototype.getBinsData = function () {
        this.lrDtoBins = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoBins.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoBins.branch = this.userDataDtoReturnSession.office;
        this.lrDtoBins.mode = "filtered";
    };
    StocksGroupingComponent.prototype.clickListnerForControlBins = function (e, fubi) {
        this.modelControlBins = e.item;
        //console.log(this.modelControlBins);
        $("#controlBins").val(this.modelControlBins.subStations);
        this.setControlBinsDest();
    };
    StocksGroupingComponent.prototype.getBinsDataSpecific = function () {
        this.lrdDtoBinSpecific = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrdDtoBinSpecific.fromStation = this.userDataDtoReturnSession.office;
        this.lrdDtoBinSpecific.invoiceDL = this.lrDtoForInvoiceDetailLocalStorage.branch;
    };
    StocksGroupingComponent.prototype.setBinsDataSpecificDetails = function () {
        var _this = this;
        this.getBinsDataSpecific();
        if (this.lrdDtoBinSpecific.invoiceDL != null) {
            this.showSpinnerActionForMakeATrip = true;
            this.masterReadService.getTripRoutingFeatureDetails(this.lrdDtoBinSpecific).subscribe(function (response) {
                console.log("DATA");
                console.log(response);
                if (response.length == 0) {
                    _this.binsOptions = [];
                    _this.controlBinTA = [];
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "No Bins records found!", "warning");
                }
                else {
                    _this.binsOptions = [];
                    _this.controlBinTA = [];
                    _this.binsOptions = response;
                    //All Need to update option here
                    for (var i = 0; i < _this.binsOptions.length; i++) {
                        _this.hashmapBins.set(_this.binsOptions[i].subStations, _this.binsOptions[i].stationType);
                        _this.controlBinTA.push(_this.binsOptions[i]);
                    }
                }
                _this.showSpinnerActionForMakeATrip = false;
            }), function (error) {
                _this.showSpinnerActionForMakeATrip = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Trip Routing Feature Details", "error");
            },
                function () { return console.log('done'); };
        }
    };
    ;
    StocksGroupingComponent.prototype.callService = function (mode) {
        var _this = this;
        this.lrDtoCallService = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.truckCapcityLoadValue = null;
        this.lrDtoCallService.destination = this.lrDtoForInvoiceDetailLocalStorage.branch;
        this.lrDtoCallService.branch = this.userDataDtoReturnSession.office;
        this.lrDtoCallService.branchType = this.userDataDtoReturnSession.role;
        this.lrDtoCallService.stationType = "";
        this.lrDtoCallService.invoiceNumber = "";
        this.lrDtoCallService.stocksAt = this.userDataDtoReturnSession.mainStation;
        this.lrDtoCallService.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoCallService.mode = mode;
        if (mode == "filtered" && this.hideshowControlsBins == true) {
            // lrDto.setVehiCapacity(Double.valueOf(comboBox.getRawValue()) * 1000);
            this.truckCapcityLoadValue = $("#truckCapacity").val();
            this.lrDtoCallService.vehiCapacity = (this.truckCapcityLoadValue * 1000);
        }
        //console.log(this.lrDtoCallService);
        /*if(this.rightsForOfficeToDestStocksForInside == "office to show truck capacity dest stock for inside" &&
        this.lrDtoLocalStorage.branch =="Konditope"){*/
        if (this.userDataDtoReturnSession.office == "Binnymills"
            && this.lrDtoForInvoiceDetailLocalStorage.branch == "Konditope") {
            this.showSpinnerActionForMakeATrip = true;
            this.stockService.getDestStocksForInside(this.lrDtoCallService).subscribe(function (response) {
                console.log(response);
                for (var key in response) {
                    if (key == "EligibleLRs") {
                        _this.eligibleLrsDataList = [];
                        $("#eligibleLrsTableId").DataTable().destroy();
                        _this.eligibleLrsDataList = response[key];
                        _this.dtTriggerEligibleLrs.next();
                    }
                    else if (key == "RemainingLRs") {
                        _this.remainingLrsDataList = [];
                        $("#remainingLrsTableId").DataTable().destroy();
                        _this.remainingLrsDataList = response[key];
                        _this.dtTriggerRemainingLrs.next();
                    }
                }
                _this.showSpinnerActionForMakeATrip = false;
            }), function (error) {
                _this.showSpinnerActionForMakeATrip = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Dest Stocks For Inside Details", "error");
            },
                function () { return console.log('done'); };
        }
        else {
            this.showSpinnerActionForMakeATrip = true;
            this.stockService.getDestStocks(this.lrDtoCallService).subscribe(function (response) {
                //console.log(response);
                for (var key in response) {
                    //console.log(response[key]);
                    if (key == "EligibleLRs") {
                        _this.eligibleLrsDataList = [];
                        $("#eligibleLrsTableId").DataTable().destroy();
                        _this.eligibleLrsDataList = response[key];
                        _this.dtTriggerEligibleLrs.next();
                    }
                    else if (key == "RemainingLRs") {
                        _this.remainingLrsDataList = [];
                        $("#remainingLrsTableId").DataTable().destroy();
                        _this.remainingLrsDataList = response[key];
                        _this.dtTriggerRemainingLrs.next();
                    }
                }
                _this.showSpinnerActionForMakeATrip = false;
            }), function (error) {
                _this.showSpinnerActionForMakeATrip = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Dest Stocks Details", "error");
            },
                function () { return console.log('done'); };
        }
    };
    StocksGroupingComponent.prototype.setControlBinsDest = function () {
        var _this = this;
        this.lrDtoControlBinService = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.truckCapcityLoadValue = null;
        this.controlBinsDestValue = null;
        this.stationType = null;
        this.truckCapcityLoadValue = $("#truckCapacity").val();
        this.controlBinsDestValue = $("#controlBins").val();
        this.lrDtoControlBinService.destination = this.controlBinsDestValue;
        this.lrDtoControlBinService.branch = this.userDataDtoReturnSession.office;
        this.lrDtoControlBinService.branchType = this.userDataDtoReturnSession.role;
        this.lrDtoControlBinService.mode = "ALL";
        if (this.controlBinsDestValue == "Others") {
            this.lrDtoControlBinService.stationType = this.userDataDtoReturnSession.stationType;
        }
        else {
            this.stationType = this.hashmapBins.get(this.controlBinsDestValue);
            this.lrDtoControlBinService.stationType = this.stationType;
        }
        if (!(this.truckCapcityLoadValue == "")) {
            this.truckCapcityLoadValue = $("#truckCapacity").val();
            this.lrDtoControlBinService.vehiCapacity = (this.truckCapcityLoadValue * 1000);
        }
        this.showSpinnerActionForMakeATrip = true;
        this.stockService.getDestStocks(this.lrDtoControlBinService).subscribe(function (response) {
            console.log(response);
            for (var key in response) {
                if (key == "AllLRs") {
                    _this.selectedControBinsDataOfAllLrsList = response[key];
                }
            }
            _this.remainingLrsDataList = [];
            if (_this.selectedControBinsDataOfAllLrsList != null &&
                _this.selectedControBinsDataOfAllLrsList.length > 0) {
                _this.remainingLrsDataList = _this.selectedControBinsDataOfAllLrsList;
            }
            console.log(_this.remainingLrsDataList);
            console.log(_this.eligibleLrsDataList);
            _this.remainingLrsDataList = _this.remainingLrsDataList.filter(function (remainingLrsData) {
                return !_this.eligibleLrsDataList.find(function (eligibleLrsData) {
                    return (eligibleLrsData.lrNumber === remainingLrsData.lrNumber);
                });
            });
            console.log(_this.remainingLrsDataList);
            $("#remainingLrsTableId").DataTable().destroy();
            _this.dtTriggerRemainingLrs.next();
            _this.showSpinnerActionForMakeATrip = false;
        }), function (error) {
            _this.showSpinnerActionForMakeATrip = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Dest Stocks Details", "error");
        },
            function () { return console.log('done'); };
    };
    StocksGroupingComponent.prototype.keyEventHandlerLRNumber = function (event) {
        if (event == 13) {
            this.setLRNumberDetailsValueInDatatTable();
        }
    };
    StocksGroupingComponent.prototype.setLRNumberDetailsValueInDatatTable = function () {
        var _this = this;
        this.lrNumber = null;
        this.lrNumber = $("#lrNumber").val();
        this.lrNumber = this.lrNumber == null ? null : this.lrNumber.toUpperCase();
        // finding eligible & remaing lrs method
        var validateRemaingLrNumber = this.findRemainingLrsDup(this.remainingLrsDataList, this.lrNumber);
        var validateEligibleLrNumber = this.findEligibleLrs(this.eligibleLrsDataList, this.lrNumber);
        console.log("EligibleFind: " + validateEligibleLrNumber);
        console.log("RemaingFind: " + validateRemaingLrNumber);
        if (validateRemaingLrNumber == null && validateEligibleLrNumber == null) {
            this.lrDtoForCheckDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
            this.lrDtoForCheckDestination.source = this.userDataDtoReturnSession.office;
            this.lrDtoForCheckDestination.lrNumber = this.lrNumber;
            this.lrDtoForCheckDestination.companyId = this.userDataDtoReturnSession.companyId;
            this.showSpinnerActionForMakeATrip = true;
            this.stockService.getLRNewTrip(this.lrDtoForCheckDestination).subscribe(function (response) {
                console.log(response);
                if (response.destination == null) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "LR number does not exist", "warning");
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "This LR number belongs to '" + response.destination + "'", "warning");
                    $("#lrNumber").val('');
                    if (_this.userDataDtoReturnSession.mainAdminStation != null &&
                        _this.userDataDtoReturnSession.mainAdminStation == "Mumbai") {
                        $("#lrNumber").val('SRD');
                    }
                }
                _this.showSpinnerActionForMakeATrip = false;
            }), function (error) {
                _this.showSpinnerActionForMakeATrip = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting LR NewTrip Details", "error");
            },
                function () { return console.log('done'); };
        }
        else if (validateEligibleLrNumber != null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Make Invoice", "LRNumber '" + this.lrNumber + "'Already Transfered", "warning");
        }
        else {
            this.setLrNumberEligibleAndRemaingLrs();
        }
    };
    StocksGroupingComponent.prototype.findRemainingLrsDup = function (findRemaingLrs, lrNumber) {
        var checkingRemLrNumber = null;
        var remainLrNumberReturn = null;
        for (var i = 0; i < findRemaingLrs.length; i++) {
            checkingRemLrNumber = findRemaingLrs[i].lrNumber;
            if (checkingRemLrNumber == lrNumber) {
                remainLrNumberReturn = checkingRemLrNumber;
                break;
            }
            else {
                remainLrNumberReturn = null;
            }
        }
        return remainLrNumberReturn;
    };
    StocksGroupingComponent.prototype.findEligibleLrs = function (findEligibleLrs, lrNumber) {
        var checkingEligLrNumber = null;
        var eligibleLrNumberReturn = null;
        for (var i = 0; i < findEligibleLrs.length; i++) {
            checkingEligLrNumber = findEligibleLrs[i].lrNumber;
            if (checkingEligLrNumber == lrNumber) {
                eligibleLrNumberReturn = checkingEligLrNumber;
                break;
            }
            else {
                eligibleLrNumberReturn = null;
            }
        }
        return eligibleLrNumberReturn;
    };
    StocksGroupingComponent.prototype.setLrNumberEligibleAndRemaingLrs = function () {
        var _this = this;
        this.resultList = null;
        this.showSpinnerActionForMakeATrip = true;
        this.resultList = this.remainingLrsDataList.filter(function (remainingLrsData) {
            return remainingLrsData.lrNumber == $("#lrNumber").val();
        });
        if (this.resultList.length > 0) {
            for (var i = 0; i < this.resultList.length; i++) {
                this.eligibleLrsDataList.push(this.resultList[i]);
            }
            $("#eligibleLrsTableId").DataTable().destroy();
            setTimeout(function () {
                _this.dtTriggerEligibleLrs.next();
            }, 1000);
            var deletedContrat = this.remainingLrsDataList.find(function (x) { return x.lrNumber === $("#lrNumber").val(); });
            this.remainingLrsDataList.splice(this.remainingLrsDataList.indexOf(deletedContrat), 1);
            $("#remainingLrsTableId").DataTable().destroy();
            setTimeout(function () {
                _this.dtTriggerRemainingLrs.next();
            }, 1000);
            // console.log(deletedContrat);
        }
        this.showSpinnerActionForMakeATrip = false;
    };
    StocksGroupingComponent.prototype.clearBtnEligibleLrs = function () {
        $("#eligibleLrsTableId").DataTable().destroy();
        this.dtTriggerEligibleLrs.next();
        $("#remainingLrsTableId").DataTable().destroy();
        for (var i = 0; i < this.eligibleLrsDataList.length; i++) {
            this.remainingLrsDataList.push(this.eligibleLrsDataList[i]);
        }
        this.eligibleLrsDataList = [];
        this.dtTriggerRemainingLrs.next();
    };
    StocksGroupingComponent.prototype.resetDatatableBtn = function () {
        this.eligibleLrsDataList = [];
        $("#eligibleLrsTableId").DataTable().destroy();
        this.dtTriggerEligibleLrs.next();
        this.remainingLrsDataList = [];
        $("#remainingLrsTableId").DataTable().destroy();
        this.dtTriggerRemainingLrs.next();
    };
    StocksGroupingComponent.prototype.rowSelectedEligibleLrDelete = function (selectedEligibleLrsRowData) {
        var _this = this;
        this.enteredLrNumber = null;
        this.enteredLrNumber = selectedEligibleLrsRowData.lrNumber;
        this.enteredLrNumber = this.enteredLrNumber == null ? null : this.enteredLrNumber.toUpperCase();
        // finding eligible & remaing lrs method
        this.showSpinnerActionForMakeATrip = true;
        var validateRemaingLrNumber = this.findRemainingLrsDup(this.remainingLrsDataList, this.enteredLrNumber);
        var validateEligibleLrNumber = this.findEligibleLrs(this.eligibleLrsDataList, this.enteredLrNumber);
        this.showSpinnerActionForMakeATrip = false;
        console.log("EligibleFind: " + validateEligibleLrNumber);
        console.log("RemaingFind: " + validateRemaingLrNumber);
        if (validateRemaingLrNumber == null && validateEligibleLrNumber == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "LR number does not exist", "warning");
        }
        else if (validateRemaingLrNumber != null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Make Invoice", "LR Number '" + selectedEligibleLrsRowData.lrNumber + "'Already Transfered", "warning");
        }
        else {
            this.resultList = null;
            this.showSpinnerActionForMakeATrip = true;
            this.resultList = this.eligibleLrsDataList.filter(function (eligibleLrsData) {
                return eligibleLrsData.lrNumber == selectedEligibleLrsRowData.lrNumber;
            });
            if (this.resultList.length > 0) {
                for (var i = 0; i < this.resultList.length; i++) {
                    this.remainingLrsDataList.push(this.resultList[i]);
                }
                $("#remainingLrsTableId").DataTable().destroy();
                setTimeout(function () {
                    _this.dtTriggerRemainingLrs.next();
                }, 1000);
                var deletedContrat = this.eligibleLrsDataList.find(function (x) { return x.lrNumber === selectedEligibleLrsRowData.lrNumber; });
                this.eligibleLrsDataList.splice(this.eligibleLrsDataList.indexOf(deletedContrat), 1);
                $("#eligibleLrsTableId").DataTable().destroy();
                setTimeout(function () {
                    _this.dtTriggerEligibleLrs.next();
                }, 1000);
            }
            this.showSpinnerActionForMakeATrip = false;
        }
    };
    StocksGroupingComponent.prototype.makeATripResetField = function () {
        this.remainingLrsDataList = [];
        this.eligibleLrsDataList = [];
        $("#eligibleLrsTableId").DataTable().destroy();
        $("#remainingLrsTableId").DataTable().destroy();
        this.dtTriggerEligibleLrs.next();
        this.dtTriggerRemainingLrs.next();
        $("#truckCapacity").val('');
        $("#controlBins").val('');
        $("#lrNumber").val('');
        this.modelTruckCapacity = null;
        this.modelControlBins = null;
        this.viewNextDarkBtnOfInvoice = true;
        this.viewNextBtnOfInvoice = false;
    };
    StocksGroupingComponent.prototype.makeATripClearField = function () {
        console.log(this.eligibleLrsDataList);
        if (this.eligibleLrsDataList == null ||
            this.eligibleLrsDataList == undefined ||
            this.eligibleLrsDataList.length == 0) {
            this.remainingLrsDataList = [];
            this.eligibleLrsDataList = [];
            $("#eligibleLrsTableId").DataTable().destroy();
            $("#remainingLrsTableId").DataTable().destroy();
            this.dtTriggerEligibleLrs.next();
            this.dtTriggerRemainingLrs.next();
        }
        $("#truckCapacity").val('');
        $("#controlBins").val('');
        $("#lrNumber").val('');
        this.modelTruckCapacity = null;
        this.modelControlBins = null;
    };
    StocksGroupingComponent.prototype.backBtnOfMakeAtrip = function () {
        if (this.eligibleLrsDataList == null ||
            this.eligibleLrsDataList == undefined ||
            this.eligibleLrsDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "No Lrs Found", "warning");
            return false;
        }
        else {
            this.nextToInvoiceDetailOfDarkBtnHideShow = true;
            this.nextToInvoiceDetailOfGreenBtnHideShow = false;
        }
    };
    StocksGroupingComponent.prototype.validateNextDarkBtnForInvoiceDetails = function () {
        if (this.eligibleLrsDataList == null ||
            this.eligibleLrsDataList == undefined ||
            this.eligibleLrsDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "No Lrs Found", "warning");
            return false;
        }
        else {
            this.viewNextDarkBtnOfInvoice = false;
            this.viewNextBtnOfInvoice = true;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("OK", "Please Click The Next Button Again To Continue", "info");
        }
    };
    StocksGroupingComponent.prototype.validateNextBtnForInvoiceDetails = function () {
        console.log(this.eligibleLrsDataList);
        this.lrDtoInvoiceLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.truckCapcityLoadValue = $("#truckCapacity").val();
        //this.lrDtoEligibleList
        this.lrDtoInvoiceLocalStorage.lrDtoEligible = this.eligibleLrsDataList;
        this.lrDtoInvoiceLocalStorage.branch = this.lrDtoForInvoiceDetailLocalStorage.branch == null ? null : this.lrDtoForInvoiceDetailLocalStorage.branch;
        this.lrDtoInvoiceLocalStorage.lrDtoRemains = this.remainingLrsDataList;
        this.lrDtoInvoiceLocalStorage.guranteeWt = this.lrDtoForInvoiceDetailLocalStorage.guranteeWt;
        this.lrDtoInvoiceLocalStorage.invoiceNumber = this.lrDtoForInvoiceDetailLocalStorage.invoiceNumber;
        this.lrDtoInvoiceLocalStorage.loadingChg = this.truckCapcityLoadValue;
        this.lrDtoInvoiceLocalStorage.truckDataDto = this.lrDtoForInvoiceDetailLocalStorage.truckDataDto;
        this.lrDtoInvoiceLocalStorage.source = this.lrDtoForInvoiceDetailLocalStorage.source;
        console.log(this.lrDtoInvoiceLocalStorage);
        //this.invoiceClearField();
        this.setOnloadOfInvoiceDetailsData();
    };
    /* 3 rd level main make a trip details end */
    /* 4 th level main Invoice start */
    StocksGroupingComponent.prototype.invoiceClearField = function () {
        this.invoiceDataList = [];
        $("#invoiceTableId").DataTable().destroy();
        this.dtTriggerInvoice.next();
        if (this.userDataDtoReturnSession.officeType != "Booking Office") {
            this.viewCheckBoxInvoiceDummyLr = true;
        }
        else {
            this.viewCheckBoxInvoiceDummyLr = false;
        }
    };
    StocksGroupingComponent.prototype.backBtnOfInvoice = function () {
        this.viewNextDarkBtnOfInvoice = true;
        this.viewNextBtnOfInvoice = false;
    };
    StocksGroupingComponent.prototype.setOnloadOfInvoiceDetailsData = function () {
        var _this = this;
        console.log("HAI");
        console.log(this.lrDtoInvoiceLocalStorage.lrDtoEligible);
        this.invoiceDataList = [];
        $("#invoiceTableId").DataTable().destroy();
        for (var i = 0; i < this.lrDtoInvoiceLocalStorage.lrDtoEligible.length; i++) {
            this.invoiceDataList.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i]);
        }
        this.listMaintenancesHideDummyInvoice = [];
        for (var i = 0; i < this.invoiceDataList.length; i++) {
            if (this.invoiceDataList[i].lrDummyInv) {
                this.listMaintenancesHideDummyInvoice.push(this.invoiceDataList[i]);
            }
        }
        console.log(this.listMaintenancesHideDummyInvoice);
        setTimeout(function () {
            _this.dtTriggerInvoice.next();
        }, 1000);
    };
    StocksGroupingComponent.prototype.checkSelectedLrDummtInvoice = function (event, invoiceData, index) {
        if (event.target.checked == true) {
            if (this.listMaintenancesHideDummyInvoice != null &&
                this.listMaintenancesHideDummyInvoice != undefined &&
                this.listMaintenancesHideDummyInvoice.length > 0) {
                this.listMaintenancesHideDummyInvoice.push(invoiceData);
            }
            else {
                this.listMaintenancesHideDummyInvoice = [];
                this.listMaintenancesHideDummyInvoice.push(invoiceData);
            }
        }
        else {
            var deletedContrat = this.listMaintenancesHideDummyInvoice.find(function (x) { return x.lrNumber === invoiceData.lrNumber; });
            this.listMaintenancesHideDummyInvoice.splice(this.listMaintenancesHideDummyInvoice.indexOf(deletedContrat), 1);
            //console.log(deletedContrat);
        }
        //console.log(this.listMaintenancesHideDummyInvoice);
    };
    StocksGroupingComponent.prototype.printLoadingSheet = function () {
        this.listOfLrDto = [];
        this.listOfLrs = new Array();
        this.listOfTotalLrs = new Array();
        this.listOfLrShortage = new Array();
        this.totalArticles = 0;
        for (var i = 0; i < this.lrDtoInvoiceLocalStorage.lrDtoEligible.length; i++) {
            this.lrDtoForInvoiceLoadingPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
            this.lrDtoForInvoiceLoadingPrint.lrNumber = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber;
            this.lrDtoForInvoiceLoadingPrint.totalArticles = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].totalArticles;
            this.lrDtoForInvoiceLoadingPrint.bookingDateStr = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].bookingDateStr;
            this.lrDtoForInvoiceLoadingPrint.actualWeight = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].actualWeight;
            this.lrDtoForInvoiceLoadingPrint.chargedWeight = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].chargedWeight;
            this.lrDtoForInvoiceLoadingPrint.toPay = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].toPay;
            this.lrDtoForInvoiceLoadingPrint.agentName = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].agentName;
            this.lrDtoForInvoiceLoadingPrint.privateMarker = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].privateMarker;
            this.lrDtoForInvoiceLoadingPrint.isHandWithCare = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].isHandWithCare;
            //COD
            this.lrDtoForInvoiceLoadingPrint.isCod = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].isCod;
            this.lrDtoForInvoiceLoadingPrint.isNewConsignee = this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].isNewConsignee;
            this.listOfTotalLrs.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber);
            // avoid shortage Lrs
            if (this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].status != null &&
                this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].status == "Short" &&
                this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrsShortage > 0) {
                this.listOfLrShortage.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber + "-" + this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrsShortage);
            }
            else {
                this.listOfLrs.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber);
                this.totalArticles = this.totalArticles + this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].totalArticles;
                // Avoid Other booking LR
                //this.listOfLrShortage.push("1"); // for check we put here its updating are not
                if (this.userDataDtoReturnSession.officeType == "Booking Office") {
                    if (this.userDataDtoReturnSession.office == this.lrDtoInvoiceLocalStorage.source) {
                        if (this.userDataDtoReturnSession.office == this.lrDtoInvoiceLocalStorage.source) {
                            this.listOfLrDto.push(this.lrDtoForInvoiceLoadingPrint);
                        }
                    }
                    else {
                        this.listOfLrDto.push(this.lrDtoForInvoiceLoadingPrint);
                    }
                }
            }
        }
        this.invoiceDtoForLoadingSheetAndHireslip = this.getInvoiceDtoForLoadingSheetAndHireSlip();
        this.invoiceDtoForLoadingSheetAndHireslip.vehicleNumber = this.lrDtoInvoiceLocalStorage.truckDataDto.truckNumber;
        /*if(this.lrDtoForLocalStorage.branch !=null && this.lrDtoForLocalStorage.branch =="Godown Delivery" &&
         this.rightsForLoadingSheetOffice == "rights for loading sheet print office"){
         */
        if (this.lrDtoInvoiceLocalStorage.branch != null && this.lrDtoInvoiceLocalStorage.branch == "Godown Delivery" &&
            this.userDataDtoReturnSession.office == "Binnymills") {
            this.invoiceDtoForLoadingSheetAndHireslip.toStation = "konditope";
        }
        else {
            this.invoiceDtoForLoadingSheetAndHireslip.toStation = this.lrDtoInvoiceLocalStorage.truckDataDto.tripTo;
        }
        this.invoiceDtoForLoadingSheetAndHireslip.truckDataDto = this.lrDtoInvoiceLocalStorage.truckDataDto;
        this.getLdgHamaliValues(this.invoiceDtoForLoadingSheetAndHireslip);
        this.callInvService(this.invoiceDtoForLoadingSheetAndHireslip, this.listOfLrDto);
    };
    StocksGroupingComponent.prototype.getInvoiceDtoForLoadingSheetAndHireSlip = function () {
        this.invoiceDtoForLoadingSheetAndHireslip = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_19__["InvoiceDto"]();
        this.invoiceDtoForLoadingSheetAndHireslip.invoiceNumber = this.lrDtoInvoiceLocalStorage.invoiceNumber;
        this.invoiceDtoForLoadingSheetAndHireslip.listTotalLrs = this.listOfTotalLrs;
        this.invoiceDtoForLoadingSheetAndHireslip.list = this.listOfLrs;
        this.invoiceDtoForLoadingSheetAndHireslip.listLrsShortage = this.listOfLrShortage;
        this.invoiceDtoForLoadingSheetAndHireslip.totalLRs = this.listOfLrs.length;
        this.invoiceDtoForLoadingSheetAndHireslip.fromStation = this.lrDtoInvoiceLocalStorage.source;
        //PENDING NEED TO WORK
        //this.invoiceDto.loadedby = txtLoadedBy.getValue();
        this.invoiceDtoForLoadingSheetAndHireslip.enteredby = this.userDataDtoReturnSession.userId;
        this.invoiceDtoForLoadingSheetAndHireslip.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.invoiceDtoForLoadingSheetAndHireslip.financialYear = this.userDataDtoReturnSession.financialYear;
        this.invoiceDtoForLoadingSheetAndHireslip.totalArticles = this.totalArticles;
        this.invoiceDtoForLoadingSheetAndHireslip.listLrsRem = this.chkInvoiceLrs(this.lrDtoInvoiceLocalStorage.lrDtoRemains);
        this.invoiceDtoForLoadingSheetAndHireslip.stocksAt = this.userDataDtoReturnSession.office;
        this.invoiceDtoForLoadingSheetAndHireslip.stationType = this.userDataDtoReturnSession.stationType;
        this.invoiceDtoForLoadingSheetAndHireslip.officeType = this.userDataDtoReturnSession.officeType;
        this.invoiceDtoForLoadingSheetAndHireslip.loaderHead = this.lrDtoInvoiceLocalStorage.truckDataDto.loaderHead;
        if (this.lrDtoInvoiceLocalStorage.loadingChg != null) {
            this.guranteeWeight = this.lrDtoInvoiceLocalStorage.loadingChg;
            this.invoiceDtoForLoadingSheetAndHireslip.gurWeight = (this.guranteeWeight);
        }
        else if (this.lrDtoInvoiceLocalStorage.guranteeWt != null) {
            this.guranteeWeight = this.lrDtoInvoiceLocalStorage.guranteeWt;
            this.invoiceDtoForLoadingSheetAndHireslip.gurWeight = (this.guranteeWeight * 1000);
        }
        this.invoiceDtoForLoadingSheetAndHireslip.companyId = this.userDataDtoReturnSession.companyId;
        return this.invoiceDtoForLoadingSheetAndHireslip;
    };
    StocksGroupingComponent.prototype.chkInvoiceLrs = function (lrDtoRemains) {
        this.checkInvoiceListLrs = new Array();
        for (var i = 0; i < lrDtoRemains.length; i++) {
            console.log(lrDtoRemains[i].invoiceNumber);
            if (lrDtoRemains[i].invoiceNumber != null) {
                this.checkInvoiceListLrs.push(lrDtoRemains[i].lrNumber);
            }
        }
        return this.checkInvoiceListLrs;
    };
    StocksGroupingComponent.prototype.callInvService = function (invoiceDto, listOfLrDto) {
        var _this = this;
        console.log(invoiceDto);
        console.log(listOfLrDto);
        this.showSpinnerActionForInvoice = true;
        this.stockService.addInvoiceDetails(invoiceDto).subscribe(function (response) {
            _this.showSpinnerActionForInvoice = false;
            console.log(response);
            if (response.invoiceNumber != null) {
                invoiceDto.invoiceNumber = response.invoiceNumber;
                _this.setHideLrInDummyInvoicePrint();
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Loading Sheet",
                    text: "Invoice No : " + response.invoiceNumber + " Created.Do You Want To Print This Invoice?",
                    icon: "info",
                    buttons: ["No", "Yes"]
                }).then(function (isConfirm) {
                    if (isConfirm) {
                        _this.LoadingSheetBookingPrint(invoiceDto, listOfLrDto, response.invoiceNumber);
                    }
                    else {
                        _this.invoiceSummaryMethod(response.invoiceNumber);
                        // this.bookingInvoiceMethod(response.invoiceNumber);
                    }
                });
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Loading Sheet", "Problem Occurs While creating the Invoice..", "error");
            }
        }), function (error) {
            _this.showSpinnerActionForInvoice = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem Occurs While getting Add Invoice Details", "error");
        },
            function () { return console.log('done'); };
    };
    StocksGroupingComponent.prototype.setHideLrInDummyInvoicePrint = function () {
        //if(this.rightsForOfficeTypeHideDummyLrPrint != "rights for officetype hide dummy lr print"){
        if (this.userDataDtoReturnSession.officeType != "Booking Office") {
            this.lrDtoHideDummyInvoice = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
            this.listHideDummyInvoice = [];
            this.listOfLrsHideDummyInvoice = [];
            this.listHideDummyInvoice = this.listMaintenancesHideDummyInvoice;
            console.log(this.listHideDummyInvoice);
            for (var i = 0; i < this.listHideDummyInvoice.length; i++) {
                this.listOfLrsHideDummyInvoice.push(this.listHideDummyInvoice[i].lrNumber);
            }
            console.log(this.listOfLrsHideDummyInvoice);
            this.lrDtoHideDummyInvoice.list = this.listOfLrsHideDummyInvoice;
            this.lrDtoHideDummyInvoice.userName = this.userDataDtoReturnSession.userId;
            if (this.lrDtoHideDummyInvoice.list.length > 0 &&
                this.lrDtoInvoiceLocalStorage.invoiceNumber != null &&
                this.lrDtoInvoiceLocalStorage.invoiceNumber != undefined) {
                this.lrDtoHideDummyInvoice.invoiceNumber = this.lrDtoInvoiceLocalStorage.invoiceNumber;
                this.stockService.setLrHideInDummyInvoice(this.bookingInvoiceForLrDto).subscribe(function (response) {
                    console.log(response);
                    if (response.status == "Failed") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", "Failed to Updating a LR Hide In Dummy Invoice", "error");
                    }
                }), function (error) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Error While Updating a LR Hide In Dummy Invoice", "error");
                }, function () { return console.log('done'); };
            }
        }
    };
    StocksGroupingComponent.prototype.LoadingSheetBookingPrint = function (invoiceDtoPrint, listOfLrDtoPrint, invoice_no) {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('loadingSheetBookingForInvoiceDtoPrint', JSON.stringify(invoiceDtoPrint));
        localStorage.setItem('loadingSheetBookingForListLrDtoPrint', JSON.stringify(listOfLrDtoPrint));
        this.viewInvoiceLoadingSheetPrint = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewInvoiceLoadingSheetPrint) {
                _this.viewInvoiceLoadingSheetPrint = false;
                _this.listOfLrDto = [];
                localStorage.clear();
                _this.invoiceSummaryMethod(invoice_no);
                //this.bookingInvoiceMethod(invoice_no);
            }
        });
    };
    StocksGroupingComponent.prototype.bookingInvoiceMethod = function (invoiceNumber) {
        var _this = this;
        this.bookingInvoiceListOfTotalLrs = new Array();
        this.bookingInvoiceListOfLrs = new Array();
        this.bookingInvoiceListOfLrShortage = new Array();
        this.bookingInvoiceForTotalArticle = 0;
        for (var i = 0; i < this.lrDtoInvoiceLocalStorage.lrDtoEligible.length; i++) {
            this.bookingInvoiceListOfTotalLrs.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber);
            if (this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].status != null &&
                this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].status == "Short" &&
                this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrsShortage > 0) {
                this.bookingInvoiceListOfLrShortage.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber + "-" + this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrsShortage);
            }
            else {
                this.listOfLrs.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber);
                this.totalArticles = this.totalArticles + this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].totalArticles;
                /*PENDING WORK*/
                /*
                set.add(((modelStore.get(i).getDestination().substring(0, 1).toUpperCase()) + "" +
                 (modelStore.get(i).getDestination().substring(1).toLowerCase()).trim()));
 
                this.set.add((this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].destination.substring(0,1).toUpperCase() +""+
                (this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].destination.substring(1).toLowerCase()).trim()));
                */
            }
        }
        //console.log("this.set");
        //console.log(this.set);
        this.bookingInvoiceForHireslipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.bookingInvoiceForHireslipDto.vehicleNumber = this.lrDtoInvoiceLocalStorage.truckDataDto.truckNumber;
        this.bookingInvoiceForHireslipDto.fromstation = this.lrDtoInvoiceLocalStorage.source;
        this.bookingInvoiceForHireslipDto.tostation = this.lrDtoInvoiceLocalStorage.branch;
        this.bookingInvoiceForHireslipDto.loadedby = this.lrDtoInvoiceLocalStorage.truckDataDto.loaderName;
        this.bookingInvoiceForHireslipDto.column2 = this.userDataDtoReturnSession.addressId;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Booking Invoice",
            text: "Sure You Want To Print This Booking Invoice Report",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then(function (isConfirm) {
            /*yes isConfirm start */
            //hard code need to remove
            invoiceNumber = 'NP/CLT/1920/30';
            if (isConfirm) {
                _this.bookingInvoiceForLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
                _this.bookingInvoiceForLrDto.invoiceNumber = invoiceNumber;
                _this.bookingInvoiceForLrDto.companyId = _this.userDataDtoReturnSession.companyId;
                _this.showSpinnerActionForInvoice = true;
                _this.stockService.getBookingInvoiceDetails(_this.bookingInvoiceForLrDto).subscribe(function (response) {
                    _this.showSpinnerActionForInvoice = false;
                    console.log(response);
                    console.log(response.length);
                    //if(this.rightsForofficeTypeBookingInvoiceDetailsPrint == "rights for officetype booking invoice details print"){
                    if (_this.userDataDtoReturnSession.officeType != null &&
                        _this.userDataDtoReturnSession.officeType == "Booking Office") {
                        if (response[0].kantaWeight = null) {
                            _this.bookingInvoiceForHireslipDto.kantaWeight = response[0].kantaWeight;
                        }
                        if (response[0].guranteeWt != null) {
                            _this.bookingInvoiceForHireslipDto.gurWeight = response[0].guranteeWt;
                        }
                        if (response[0].supplierName != null) {
                            _this.bookingInvoiceForHireslipDto.suppliername = response[0].supplierName;
                        }
                        if (response[0].goodsType == "Select Type") {
                            _this.bookingInvoiceForHireslipDto.goodsType = "NA";
                        }
                        else {
                            _this.bookingInvoiceForHireslipDto.goodsType = response[0].goodsType;
                        }
                        _this.bookingInvoiceForHireslipDto.invoiceNumber = invoiceNumber;
                        _this.bookingInvoiceNewPrint(_this.bookingInvoiceForHireslipDto, _this.bookingInvoiceListOfLrShortage, response);
                    }
                    else {
                        console.log("Pending NEED TO WORK");
                        //Pending need to work
                        //new BookingDummyInvoice(list,invoiceNumber,hireSlipDto,listOfLrsShortage,"print");
                        _this.overAllResetComplete();
                        _this.stepper.reset();
                    }
                }), function (error) {
                    _this.showSpinnerActionForInvoice = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Error While Getting a result of bookingInvoiceMethod", "error");
                }, function () { return console.log('done'); };
            }
            /*yes isConfirm End */
            /*No isConfirm start */
            else {
                _this.overAllResetComplete();
                _this.stepper.reset();
                // this.invoiceSummaryMethod(invoiceNumber);
            }
            /*No isConfirm end */
        });
    };
    StocksGroupingComponent.prototype.bookingInvoiceNewPrint = function (bookingInvoiceForHireslipDto, bookingInvoiceListOfLrShortage, bookingInvoiceForLrDto) {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('invoiceDetailsForBookingHireslipDtoPrint', JSON.stringify(bookingInvoiceForHireslipDto));
        localStorage.setItem('invoiceDetailsForBookingListOfLrsShortPrint', JSON.stringify(bookingInvoiceListOfLrShortage));
        localStorage.setItem('invoiceDetailsForBookingLrDtoPrint', JSON.stringify(bookingInvoiceForLrDto));
        this.viewInvoiceDetailsPrint = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewInvoiceDetailsPrint) {
                _this.viewInvoiceDetailsPrint = false;
                _this.bookingInvoiceListOfLrShortage = [];
                localStorage.clear();
                _this.overAllResetComplete();
                _this.stepper.reset();
            }
        });
    };
    StocksGroupingComponent.prototype.invoiceSummaryMethod = function (invoiceNumber) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Invoice Summary",
            text: "Do You Want To Print Invoice Summary Report",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then(function (isConfirm) {
            if (isConfirm) {
                //yes start
                _this.summaryInvoiceForLrDtoPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
                _this.summaryInvoiceForLrDtoPrint.invoiceNumber = invoiceNumber;
                _this.summaryInvoiceForLrDtoPrint.fromStation = _this.lrDtoInvoiceLocalStorage.source;
                _this.summaryInvoiceForLrDtoPrint.toStation = _this.lrDtoInvoiceLocalStorage.branch;
                _this.summaryInvoiceForLrDtoPrint.companyId = _this.userDataDtoReturnSession.companyId;
                console.log(_this.lrDtoInvoiceLocalStorage.source);
                console.log(_this.lrDtoInvoiceLocalStorage.branch);
                _this.showSpinnerActionForInvoice = true;
                _this.stockService.getInvoiceDestinationSummary(_this.summaryInvoiceForLrDtoPrint).subscribe(function (response) {
                    _this.showSpinnerActionForInvoice = false;
                    console.log(response);
                    if (response != null) {
                        _this.destInvoiceSummaryReportPrintOut(_this.summaryInvoiceForLrDtoPrint, response, invoiceNumber);
                    }
                }), function (error) {
                    _this.showSpinnerActionForInvoice = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Error Occur While Getting  result of Invoice Summary Method", "error");
                }, function () { return console.log('done'); };
            }
            else {
                _this.bookingInvoiceMethod(invoiceNumber);
            }
        });
    };
    StocksGroupingComponent.prototype.destInvoiceSummaryReportPrintOut = function (summaryInvoiceForLrDtoPrint, response, invoiceNumber) {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('invoiceSummaryForLRDtoPrint', JSON.stringify(summaryInvoiceForLrDtoPrint));
        localStorage.setItem('invoiceSummaryForLRDtoListPrint', JSON.stringify(response));
        this.viewInvoiceSummaryPrint = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewInvoiceSummaryPrint) {
                _this.viewInvoiceSummaryPrint = false;
                summaryInvoiceForLrDtoPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
                response = [];
                localStorage.clear();
                _this.bookingInvoiceMethod(invoiceNumber);
            }
        });
    };
    StocksGroupingComponent.prototype.validateCreateTripSheetBtn = function () {
        this.listOfLrs = new Array();
        this.listOfTotalLrs = new Array();
        this.listOfLrShortage = new Array();
        this.totalArticles = 0;
        this.totToPay = 0;
        this.totPaid = 0;
        for (var i = 0; i < this.lrDtoInvoiceLocalStorage.lrDtoEligible.length; i++) {
            this.listOfTotalLrs.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber);
            if (this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].status != null &&
                this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].status == "Short" &&
                this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrsShortage > 0) {
                this.listOfLrShortage.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber + "-" + this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrsShortage);
            }
            else {
                this.listOfLrs.push(this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].lrNumber);
                this.totalArticles = this.totalArticles + this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].totalArticles;
                this.totToPay = this.totToPay + this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].toPay == null ? 0.0 : this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].toPay;
                this.totToPay = this.totPaid + this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].paid == null ? 0.0 : this.lrDtoInvoiceLocalStorage.lrDtoEligible[i].paid;
                //PENDING TO WORK
                /* set.add(((modelStore.get(i).getDestination()
                .substring(0, 1).toUpperCase())
                + "" + (modelStore.get(i).getDestination()
                .substring(1).toLowerCase()).trim()));*/
            }
        }
        this.invoiceDtoForLoadingSheetAndHireslip = this.getInvoiceDtoForLoadingSheetAndHireSlip();
        /*if(this.lrDtoForLocalStorage.branch !=null && this.lrDtoForLocalStorage.branch =="Godown Delivery" &&
        this.rightsForLoadingSheetOffice == "rights for loading sheet print office"){
        */
        if (this.lrDtoInvoiceLocalStorage.branch != null &&
            this.lrDtoInvoiceLocalStorage.branch == "Godown Delivery" &&
            this.userDataDtoReturnSession.office == "Binnymills") {
            this.invoiceDtoForLoadingSheetAndHireslip.toStation = "konditope";
        }
        else {
            this.invoiceDtoForLoadingSheetAndHireslip.toStation = this.lrDtoInvoiceLocalStorage.branch;
        }
        this.invoiceDtoForLoadingSheetAndHireslip.truckDataDto = this.lrDtoInvoiceLocalStorage.truckDataDto;
        this.hireSlipDtoForHireslip = this.getHireSlipDtoInfo();
        this.getLdgHamaliValues(this.invoiceDtoForLoadingSheetAndHireslip);
        this.callHireService(this.invoiceDtoForLoadingSheetAndHireslip, this.hireSlipDtoForHireslip);
    };
    StocksGroupingComponent.prototype.getHireSlipDtoInfo = function () {
        this.hireSlipDtoForHireslip = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForHireslip.listTotalLrs = this.listOfTotalLrs;
        this.hireSlipDtoForHireslip.list = this.listOfLrs;
        this.hireSlipDtoForHireslip.listLrsShortage = this.listOfLrShortage;
        this.hireSlipDtoForHireslip.totalLRs = this.listOfLrs.length;
        this.hireSlipDtoForHireslip.fromstation = this.lrDtoInvoiceLocalStorage.source;
        this.hireSlipDtoForHireslip.enteredby = this.userDataDtoReturnSession.userId;
        this.hireSlipDtoForHireslip.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDtoForHireslip.financialYear = this.userDataDtoReturnSession.financialYear;
        this.hireSlipDtoForHireslip.totalArticles = this.totalArticles;
        this.hireSlipDtoForHireslip.listLrsRem = this.chkInvoiceLrs(this.lrDtoInvoiceLocalStorage.lrDtoRemains);
        this.hireSlipDtoForHireslip.loadedby = this.lrDtoInvoiceLocalStorage.truckDataDto.loaderName;
        this.hireSlipDtoForHireslip.contactPerson = this.lrDtoInvoiceLocalStorage.truckDataDto.contactPerson;
        this.hireSlipDtoForHireslip.suppliername = this.lrDtoInvoiceLocalStorage.truckDataDto.supplierName;
        this.hireSlipDtoForHireslip.suppAddress = this.lrDtoInvoiceLocalStorage.truckDataDto.suppAdd;
        this.hireSlipDtoForHireslip.suppPhNo = this.lrDtoInvoiceLocalStorage.truckDataDto.suppPhNo;
        this.hireSlipDtoForHireslip.supplierpanno = this.lrDtoInvoiceLocalStorage.truckDataDto.suppPanNo;
        this.hireSlipDtoForHireslip.driverlicencenumber = this.lrDtoInvoiceLocalStorage.truckDataDto.licNo;
        this.hireSlipDtoForHireslip.driverLicState = this.lrDtoInvoiceLocalStorage.truckDataDto.driverLicState;
        this.hireSlipDtoForHireslip.driverLicStateCode = this.lrDtoInvoiceLocalStorage.truckDataDto.driverLicStateCode;
        this.hireSlipDtoForHireslip.drivername = this.lrDtoInvoiceLocalStorage.truckDataDto.driverName;
        this.hireSlipDtoForHireslip.driverAdd = this.lrDtoInvoiceLocalStorage.truckDataDto.driverAdd;
        this.hireSlipDtoForHireslip.driverPinCode = this.lrDtoInvoiceLocalStorage.truckDataDto.driverPincode;
        this.hireSlipDtoForHireslip.driverId = this.lrDtoInvoiceLocalStorage.truckDataDto.driverId;
        this.hireSlipDtoForHireslip.vehiCompPanNo = this.lrDtoInvoiceLocalStorage.truckDataDto.panNo;
        this.hireSlipDtoForHireslip.vehicleNumber = this.lrDtoInvoiceLocalStorage.truckDataDto.truckNumber;
        this.hireSlipDtoForHireslip.vehOwnerState = this.lrDtoInvoiceLocalStorage.truckDataDto.ownerRegState;
        this.hireSlipDtoForHireslip.vehOwnerStateCode = this.lrDtoInvoiceLocalStorage.truckDataDto.ownerStateCode;
        this.hireSlipDtoForHireslip.vehiCompName = this.lrDtoInvoiceLocalStorage.truckDataDto.ownerName;
        this.hireSlipDtoForHireslip.vehiCompAddress = this.lrDtoInvoiceLocalStorage.truckDataDto.address;
        this.hireSlipDtoForHireslip.vehiclePinCode = this.lrDtoInvoiceLocalStorage.truckDataDto.ownerPincode;
        this.hireSlipDtoForHireslip.trkLgth = this.lrDtoInvoiceLocalStorage.truckDataDto.trkLgth;
        this.hireSlipDtoForHireslip.entryCP = this.lrDtoInvoiceLocalStorage.truckDataDto.entryCP;
        this.hireSlipDtoForHireslip.entryCPCode = this.lrDtoInvoiceLocalStorage.truckDataDto.entryCPCode;
        this.hireSlipDtoForHireslip.toPay = this.totToPay;
        this.hireSlipDtoForHireslip.paid = this.totPaid;
        /*if(this.lrDtoForLocalStorage.branch !=null && this.lrDtoForLocalStorage.branch =="Godown Delivery" &&
           this.rightsForCreateHireslipOffice == "rights for create hireslip office"){*/
        if (this.lrDtoInvoiceLocalStorage.branch != null &&
            this.lrDtoInvoiceLocalStorage.branch == "Godown Delivery" &&
            this.userDataDtoReturnSession.office == "Binnymills") {
            this.hireSlipDtoForHireslip.toStation = "konditope";
        }
        else {
            this.hireSlipDtoForHireslip.toStation = this.lrDtoInvoiceLocalStorage.branch;
        }
        return this.hireSlipDtoForHireslip;
    };
    StocksGroupingComponent.prototype.callHireService = function (invoiceDto, hireSlipDto) {
        var _this = this;
        console.log(invoiceDto);
        console.log(hireSlipDto);
        //this.tripCreationInvoiceScreen.addInvoiceDetails( this.invoiceDto).subscribe(
        this.showSpinnerActionForInvoice = true;
        this.stockService.addInvoiceDetails(invoiceDto).subscribe(function (response) {
            _this.showSpinnerActionForInvoice = false;
            console.log(response);
            if (response.invoiceNumber != null) {
                invoiceDto.invoiceNumber = response.invoiceNumber;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Hireslip Creation", "Invoice No : " + response.invoiceNumber + " Created.", "success");
                //PENDING NEED TO WORK
                /*
                setHideLrInDummyInvoicePrint();
               invoiceDto.setInvoiceNumber(invoiceNum);
             MessageBox.confirm("Confirm Hireslip Creation",
             "Sure U Want to create the Hireslip",
             if yes
             hireSlipDto.setInvoiceNumber(invoiceNum);
             hireSlipDto.setMode("add");
                 */
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Confirm Hireslip Creation",
                    text: "Sure U Want to create the Hireslip",
                    icon: "info",
                    buttons: ["No", "Yes"]
                }).then(function (isConfirm) {
                    if (isConfirm) {
                        hireSlipDto.invoiceNumber = response.invoiceNumber;
                        hireSlipDto.mode = "add";
                        _this.hireSlipDtoForCreateHireslipLocalStorage = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
                        _this.hireSlipDtoForCreateHireslipLocalStorage = hireSlipDto;
                        console.log(_this.hireSlipDtoForCreateHireslipLocalStorage);
                        _this.stepper.selectedIndex = 4;
                        _this.setOnloadOnHireSlipDetails();
                    }
                    else {
                        _this.startOverBtn();
                    }
                });
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Loading Sheet", "Problem Occurs While creating the Invoice..", "error");
            }
        }), function (error) {
            _this.showSpinnerActionForInvoice = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem Occurs While getting add Invoice Details.", "error");
        },
            function () { return console.log('done'); };
    };
    //pop up
    StocksGroupingComponent.prototype.getDismissReason = function (reason) {
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
    // PopUp Open Of Hamali Details Btn Click
    StocksGroupingComponent.prototype.hamaliDetailsBtn = function () {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('HamaliPopUpOpen', JSON.stringify("HamaliPopUpOpen"));
        var dialogRef = this.dialog.open(src_app_trip_creation_hamali_detail_report_hamali_detail_report_component__WEBPACK_IMPORTED_MODULE_20__["HamaliDetailReportComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            console.log(JSON.parse(result));
            localStorage.clear();
            _this.ledgerHamaliListPopupReturn = [];
            _this.ledgerHamaliListPopupReturn = JSON.parse(result);
        });
    };
    StocksGroupingComponent.prototype.getLdgHamaliValues = function (invoiceDtoForLdgHamali) {
        this.multipleSrcEntered = null;
        this.hamaliSourceEntered = null;
        this.multipleHamaliEntered = null;
        if (this.ledgerHamaliListPopupReturn != null &&
            this.ledgerHamaliListPopupReturn != undefined &&
            this.ledgerHamaliListPopupReturn.length > 0) {
            for (var i = 0; i < this.ledgerHamaliListPopupReturn.length; i++) {
                if (i == 0) {
                    this.multipleSrcEntered = this.ledgerHamaliListPopupReturn[i].source;
                    this.hamaliSourceEntered = this.ledgerHamaliListPopupReturn[i].source;
                    this.multipleHamaliEntered = this.ledgerHamaliListPopupReturn[i].hamaliType + "_" +
                        this.ledgerHamaliListPopupReturn[i].hamaliValue;
                }
                else if (!(this.multipleSrcEntered == this.ledgerHamaliListPopupReturn[i].source)) {
                    this.multipleSrcEntered = this.ledgerHamaliListPopupReturn[i].source;
                    this.hamaliSourceEntered += "#" + this.ledgerHamaliListPopupReturn[i].source;
                    this.multipleHamaliEntered += "#" + this.ledgerHamaliListPopupReturn[i].hamaliType + "_" +
                        this.ledgerHamaliListPopupReturn[i].hamaliValue;
                }
                else {
                    this.multipleHamaliEntered += "&" + this.ledgerHamaliListPopupReturn[i].hamaliType + "_" +
                        this.ledgerHamaliListPopupReturn[i].hamaliValue;
                }
            }
        }
        invoiceDtoForLdgHamali.multipleSource = this.hamaliSourceEntered;
        invoiceDtoForLdgHamali.multipleHamali = this.multipleHamaliEntered;
    };
    /* 4 th level main Invoice end */
    /* 5 th level main Hireslip start */
    /* click Listner */
    StocksGroupingComponent.prototype.clickListnerForTruckType = function (e, fubi) {
        this.modelTruckType = e.item;
        $("#truckType").val(this.modelTruckType.truckType);
        this.selectedTruckTypeId = null;
        this.selectedTruckTypeId = this.modelTruckType.id;
        this.truckDataDtoForTruckTypeClick = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataDtoForTruckTypeClick = this.validateTruckTypeSelectionsOnGurWgt();
        this.truckDataDtoForTruckTypeClick.isValid = true;
        if (($("#truckType").val() == null) || ($("#truckType").val() == undefined) ||
            $("#truckType").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "Please select Truck Type to proceed!", "warning");
            return false;
        }
        else if (!this.truckDataDtoForTruckTypeClick.isValid) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "The Truck Type selected does not match with the Total GUR Wt entered, kindly select the appropriate Truck Type.", "warning");
            return false;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Confirm Truck Type",
                text: "Are you sure this is " + $("#truckType").val() + "",
                icon: "info",
                buttons: ["No", "Yes"]
            }).then(function (isConfirm) {
                if (isConfirm) {
                    // console.log(this.modelTruckType);
                }
                else {
                    $("#truckType").val('');
                }
            });
        }
    };
    /*clickListnerForMultiInvoiceStation(e: NgbTypeaheadSelectItemEvent, fubi: any) {
        this.modelMultiInvoiceDest = e.item;
        console.log(this.modelMultiInvoiceDest);
        $("#multiInvoiceDestinationId").val(this.modelMultiInvoiceDest.destination);
        this.getStationCodeMultiInvoice();
    }*/
    /*On Key Enter press start here  */
    StocksGroupingComponent.prototype.onKeyPressFieldForInvoiceNo = function (event) {
        if (event == 13) {
            $("#invoiceDate").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForHireslipNo = function (event) {
        if (event == 13) {
            $("#gurWeightTotal").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForTruckTotalWgt = function (event) {
        if (event == 13) {
            $("#guranteeWeight").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForDriverMobileNo = function (event) {
        if (event == 13) {
            $("#insuranceNo").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForInsuranceNo = function (event) {
        if (event == 13) {
            $("#baseHireAmt").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForEWBSystem = function (event) {
        if (event == 13) {
            $("#noOfNoEwbInConsolidatedManual").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForEWBManual = function (event) {
        if (event == 13) {
            $("#consolidatedEwayBill").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForConsolidateEWB = function (event) {
        if (event == 13) {
            $("#confirmConsolidatedEwayBill").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForConfirmConsolidateEWB = function (event) {
        if (event == 13) {
            $("#totalHire").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForBalance = function (event) {
        if (event == 13) {
            $("#deliveryPoints").focus();
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForBaseHireAmt = function (event) {
        if (event == 13) {
            $("#totalHire").val(this.calHireAmt());
            this.calculateBalanceAmt();
            $("#doorOpen").focus();
        }
    };
    StocksGroupingComponent.prototype.baseHireAmtChgBlur = function (event) {
        $("#totalHire").val(this.calHireAmt());
        this.calculateBalanceAmt();
        $("#doorOpen").focus();
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForDoorOpen = function (event) {
        if (event == 13) {
            $("#totalHire").val(this.calHireAmt());
            this.calculateBalanceAmt();
            $("#vehicleHeight").focus();
        }
    };
    StocksGroupingComponent.prototype.doorOpenAmtChgBlur = function (event) {
        $("#totalHire").val(this.calHireAmt());
        this.calculateBalanceAmt();
        $("#vehicleHeight").focus();
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForVehicleHgt = function (event) {
        if (event == 13) {
            $("#totalHire").val(this.calHireAmt());
            this.calculateBalanceAmt();
            $("#doorDelivery").focus();
        }
    };
    StocksGroupingComponent.prototype.vehicleHeightAmtChgBlur = function (event) {
        $("#totalHire").val(this.calHireAmt());
        this.calculateBalanceAmt();
        $("#doorDelivery").focus();
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForDoorDely = function (event) {
        if (event == 13) {
            $("#totalHire").val(this.calHireAmt());
            this.calculateBalanceAmt();
            $("#extraWeight").focus();
        }
    };
    StocksGroupingComponent.prototype.doordeliveryAmtChgBlur = function (event) {
        $("#totalHire").val(this.calHireAmt());
        this.calculateBalanceAmt();
        $("#extraWeight").focus();
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForExtraWgt = function (event) {
        if (event == 13) {
            $("#totalHire").val(this.calHireAmt());
            this.calculateBalanceAmt();
            $("#checkPost").focus();
        }
    };
    StocksGroupingComponent.prototype.extraWgtAmtChgBlur = function (event) {
        $("#totalHire").val(this.calHireAmt());
        this.calculateBalanceAmt();
        $("#checkPost").focus();
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForCheckPost = function (event) {
        if (event == 13) {
            $("#totalHire").val(this.calHireAmt());
            this.calculateBalanceAmt();
            $("#otherCharges").focus();
        }
    };
    StocksGroupingComponent.prototype.checkPostAmtChgBlur = function (event) {
        $("#totalHire").val(this.calHireAmt());
        this.calculateBalanceAmt();
        $("#otherCharges").focus();
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForOtherChrgs = function (event) {
        if (event == 13) {
            $("#totalHire").val(this.calHireAmt());
            this.calculateBalanceAmt();
            $("#totalHire").focus();
        }
    };
    StocksGroupingComponent.prototype.otherChargeAmtChgBlur = function (event) {
        $("#totalHire").val(this.calHireAmt());
        this.calculateBalanceAmt();
        $("#totalHire").focus();
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForDriverNewMobileNo = function (event) {
        if (event == 13) {
            $("#updateBtnId").focus();
        }
    };
    StocksGroupingComponent.prototype.calHireAmt = function () {
        this.hireAmt = 0;
        this.validateHireAmtForBaseHireAmt = $("#baseHireAmt").val() == null ? 0.0 : $("#baseHireAmt").val();
        this.validateHireAmtForDoorOpen = $("#doorOpen").val() == null ? 0.0 : $("#doorOpen").val();
        this.validateHireAmtForVehicleHeight = $("#vehicleHeight").val() == null ? 0.0 : $("#vehicleHeight").val();
        this.validateHireAmtForDoorDely = $("#doorDelivery").val() == null ? 0.0 : $("#doorDelivery").val();
        this.validateHireAmtForExtraWeight = $("#extraWeight").val() == null ? 0.0 : $("#extraWeight").val();
        this.validateHireAmtForCheckPost = $("#checkPost").val() == null ? 0.0 : $("#checkPost").val();
        this.validateHireAmtForotherChrg = $("#otherCharges").val() == null ? 0.0 : $("#otherCharges").val();
        this.hireAmt = +this.validateHireAmtForBaseHireAmt + +this.validateHireAmtForDoorOpen +
            +this.validateHireAmtForVehicleHeight + +this.validateHireAmtForDoorDely +
            +this.validateHireAmtForExtraWeight + +this.validateHireAmtForCheckPost +
            +this.validateHireAmtForotherChrg;
        return parseFloat(this.hireAmt);
    };
    StocksGroupingComponent.prototype.eventHandlerGurWgt = function (event) {
        var _this = this;
        if (event == 13) {
            var guranteeWgt = $("#guranteeWeight").val() == null ? 0 : $("#guranteeWeight").val();
            if (guranteeWgt < 14000) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Warning",
                    text: "This Hire Slip Seems To Be Of 2 Point Delivery, Do You Want To Merge It?",
                    icon: "warning",
                    buttons: ['No', 'Yes'],
                }).then(function (isConfirm) {
                    //console.log(isConfirm);
                    if (isConfirm) {
                        console.log("if");
                        //PENDING WORK
                        // popupDelvPnts.show();
                        //console.log("");
                        $("#deliveryPointIdForSingle").prop('checked', false);
                        $("#deliveryPointIdForMultiple").prop('checked', true);
                        _this.showMultipleDeliveryPointPopup();
                    }
                    else {
                        //console.log("else");
                        $("#deliveryPointIdForMultiple").prop("checked", false);
                        $("#deliveryPointIdForSingle").prop("checked", true);
                    }
                });
            }
        }
    };
    StocksGroupingComponent.prototype.eventHandlerKantaWgt = function (event) {
        if (event == 13) {
            if (this.isMainInvoice) {
                $("#panNumber").focus();
            }
            else {
                $("#panNumber").focus();
            }
        }
    };
    StocksGroupingComponent.prototype.onKeyPressFieldForTotalHire = function (event) {
        if (event == 13) {
            this.calculateBalanceAmt();
            $("#advance").focus();
        }
    };
    StocksGroupingComponent.prototype.totalHireAmtChgBlur = function (event) {
        this.calculateBalanceAmt();
        $("#advance").focus();
    };
    StocksGroupingComponent.prototype.eventHandlerAdvance = function (event) {
        if (event == 13) {
            this.calculateBalanceAmt();
            $("#balance").focus();
        }
    };
    StocksGroupingComponent.prototype.advanceAmtChgBlur = function (event) {
        this.calculateBalanceAmt();
        $("#balance").focus();
    };
    StocksGroupingComponent.prototype.calculateBalanceAmt = function () {
        this.calculateAalanceAmt = 0;
        this.validateTotalHireAmt = 0;
        this.validateAdvanceAmt = 0;
        this.validateTotalHireAmt = $("#totalHire").val() == null ? 0 : $("#totalHire").val();
        this.validateAdvanceAmt = $("#advance").val() == null ? 0 : $("#advance").val();
        //console.log(this.validateTotalHireAmt + "-Chan-" + this.validateAdvanceAmt);
        this.calculateAalanceAmt = +this.validateTotalHireAmt + -this.validateAdvanceAmt;
        //console.log(this.calculateAalanceAmt);
        if (this.calculateAalanceAmt != null &&
            this.calculateAalanceAmt != 0 &&
            this.calculateAalanceAmt > 0) {
            $("#balance").val(this.calculateAalanceAmt);
        }
        else {
            $("#balance").val(0);
        }
    };
    /* On Key Enter press end here */
    /* pop up flow start here */
    //for popup modal starts 
    /* openNotAssignedPopup(contentProceed) {
         this.modalService.open(contentProceed, { centered: true }).result.then(
             resultContent => {
                 this.closeResultContentNotAssigned = `Closed with: ${resultContent}`;
             },
             reason => {
                 this.closeResultContentNotAssigned = `Dismissed ${this.getDismissReason(reason)}`;
             }
         );
     }*/
    StocksGroupingComponent.prototype.isLastPointDeliveryLinkedHireslipListner = function (event) {
        var _this = this;
        console.log(event.target.checked);
        if (event.target.checked == true) {
            localStorage.clear();
            localStorage.setItem('MultipleInvoiceLastPtOpen', JSON.stringify("MultipleInvoiceLastPtOpen"));
            var dialogRef = this.dialog.open(src_app_trip_creation_multipleinvoice_lastpoint_details_multipleinvoice_lastpoint_details_component__WEBPACK_IMPORTED_MODULE_24__["MultipleInvoiceLastPointDetailsComponent"], {});
            dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog result: " + result);
                if (result != null) {
                    var dataArray = JSON.parse(result);
                    var arrayData = [];
                    _this.multipleInvoiceIsLastPointListPopupReturn = [];
                    dataArray.forEach(function (item) {
                        arrayData.push(item.cmMultiInvoice);
                    });
                    _this.multipleInvoiceIsLastPointListPopupReturn = arrayData;
                    console.log(_this.multipleInvoiceIsLastPointListPopupReturn);
                }
                localStorage.clear();
            });
        }
    };
    StocksGroupingComponent.prototype.addDriverBtnClickPopShow = function (hireSlipUpdateDriverNo) {
        var _this = this;
        this.modalRefferenceNewDriverMobileNo = this.modalService.open(hireSlipUpdateDriverNo, { centered: true });
        this.modalRefferenceNewDriverMobileNo.result.then(function (result) {
            _this.closeResultContentUpdateDriverMobileNo = "Closed with: " + result;
        }, function (reason) {
            _this.closeResultContentUpdateDriverMobileNo = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StocksGroupingComponent.prototype.updateDriverNewMobileNoPopUpCreation = function () {
        if ($("#driverNewMobileNumber").val() == null || $("#driverNewMobileNumber").val() == "") {
            alert("Please enter the New Driver Mobile Number");
            return false;
        }
        else {
            $("#driverMobileNo").val('');
            $("#driverMobileNo").val($("#driverNewMobileNumber").val());
            this.driverNumberChangeTemp = null;
            this.driverNumberChangeTemp = $("#driverMobileNo").val();
            this.modalRefferenceNewDriverMobileNo.close();
        }
    };
    StocksGroupingComponent.prototype.closeNewDriverPopupBtn = function () {
        $("#driverNewMobileNumber").val('');
        this.modalRefferenceNewDriverMobileNo.close();
        this.driverNumberChangeTemp = null;
    };
    StocksGroupingComponent.prototype.truckMasterInPopUpPage = function (truckMasterPopUp) {
        var _this = this;
        this.truckDataDtoLocalStorageTruckMaster = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.localStorageLorryTruckNo = $("#lorryNumber").val();
        this.truckDataDtoLocalStorageTruckMaster.truckNumber = this.localStorageLorryTruckNo;
        this.truckDataDtoLocalStorageTruckMaster.status = "update";
        localStorage.clear();
        localStorage.setItem('fromHireslipPageLocalStorage', 'Hireslip');
        localStorage.setItem('fromHireslipPassingTruckDataDtoIntoLocalStorage', JSON.stringify(this.truckDataDtoLocalStorageTruckMaster));
        console.log(localStorage);
        this.modalRefferenceTruckMasterPopUp = this.modalService.open(truckMasterPopUp, { centered: true, windowClass: "myCustomModalClass" });
        this.modalRefferenceTruckMasterPopUp.result.then(function (result) {
            _this.modalRefferenceTruckMasterClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceTruckMasterClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StocksGroupingComponent.prototype.showMultipleDeliveryPointPopup = function () {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('DeliveryPointOpen', JSON.stringify("DeliveryPointOpen"));
        localStorage.setItem('DeliveryPointHireslipLocalStorage', JSON.stringify(this.hireSlipDtoForCreateHireslipLocalStorage));
        var dialogRef = this.dialog.open(src_app_trip_creation_multiple_point_details_multiple_point_details_component__WEBPACK_IMPORTED_MODULE_23__["MultiplePointDetailsComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result != null && result == "Close") {
                _this.multipleDeliveryPointListPopupReturn = [];
                _this.firstPtDeliv = null;
                _this.multipleDeliveryPointListPopupReturn = JSON.parse(localStorage.getItem('DeliveryPointClose'));
                _this.firstPtDeliv = JSON.parse(localStorage.getItem('firstPtDelivPopupClose'));
                localStorage.clear();
            }
        });
    };
    /* pop up flow end here */
    /*Check Box Click Start*/
    StocksGroupingComponent.prototype.multiInvTripCheckBoxEvent = function (values) {
        if (values.currentTarget.checked == true) {
            this.hideShowIsLastPointDelivery = true;
        }
        else {
            this.hideShowIsLastPointDelivery = false;
        }
    };
    StocksGroupingComponent.prototype.twoPointDDCheckBoxEvent = function (values) {
        if (values.currentTarget.checked == true) {
            this.hideShowTwoPointDoorDelivery = true;
        }
        else {
            this.hideShowTwoPointDoorDelivery = false;
        }
    };
    StocksGroupingComponent.prototype.deliveryPointMultipleCheckBoxEvent = function (values) {
        if (values.currentTarget.checked == true) {
            $("#deliveryPointIdForSingle").prop('checked', false);
            this.showMultipleDeliveryPointPopup();
        }
        else {
            $("#deliveryPointIdForSingle").prop('checked', true);
        }
    };
    StocksGroupingComponent.prototype.deliveryPointSingleCheckBoxEvent = function (values) {
        if (values.currentTarget.checked == true) {
            $("#deliveryPointIdForMultiple").prop('checked', false);
        }
        else {
            $("#deliveryPointIdForSingle").prop('checked', true);
        }
    };
    /*Check Box Click End*/
    /* Service start here */
    StocksGroupingComponent.prototype.getTruckTypeDetails = function () {
        var _this = this;
        this.truckTypeDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckTypeDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.masterReadService.getTruckTypeCommonDetails(this.truckTypeDataDto).subscribe(function (response) {
            //console.log(response);
            if (response.length == 0) {
                //swal("Warning","No Truck Type records found!","warning");
                _this.truckTypeOptions = [];
                _this.truckTypeTA = [];
            }
            else {
                _this.truckTypeOptions = [];
                _this.truckTypeTA = [];
                _this.truckTypeOptions = response;
                for (var i = 0; i < _this.truckTypeOptions.length; i++) {
                    _this.truckTypeTA.push(_this.truckTypeOptions[i]);
                    _this.hmTruckType.set(_this.truckTypeOptions[i].id, i + 1);
                    _this.hmTruckTypeDto.set(_this.truckTypeOptions[i].id, _this.truckTypeOptions[i]);
                }
            }
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Truck Type Details", "warning");
        }, function () { return console.log('done'); };
    };
    ;
    StocksGroupingComponent.prototype.setOnloadOnHireSlipDetails = function () {
        //this.hireSlipDtoForCreateHireslipLocalStorage;
        console.log(this.hireSlipDtoForCreateHireslipLocalStorage);
        //its for testing true we used in live it shd uncomments pls
        if (this.userDataDtoReturnSession.isFTTrackingReq != null &&
            this.userDataDtoReturnSession.isFTTrackingReq) {
            // departure btn block until tracking consent done @09/06/2020
            if (this.hireSlipDtoForCreateHireslipLocalStorage.trackingFTConsentStatus != null &&
                (this.hireSlipDtoForCreateHireslipLocalStorage.trackingFTConsentStatus == "Accepted" ||
                    this.hireSlipDtoForCreateHireslipLocalStorage.trackingFTConsentStatus == "Cleared")) {
                this.departureButtonHideShow = false;
            }
            else if (this.hireSlipDtoForCreateHireslipLocalStorage.trackingFTTrackingSupported != null &&
                this.hireSlipDtoForCreateHireslipLocalStorage.trackingFTTrackingSupported == "unsupported") {
                this.departureButtonHideShow = true;
            }
            else {
                this.departureButtonHideShow = false;
            }
        }
        else {
            this.isFTTripReq = false;
        }
        // based on the ftrouteexception @28/07/2020
        var sourceFt = this.hireSlipDtoForCreateHireslipLocalStorage.fromstation;
        var destinationFt = this.hireSlipDtoForCreateHireslipLocalStorage.toStation;
        if (this.userDataDtoReturnSession.lrDtosFTRouteExcep != null &&
            this.userDataDtoReturnSession.lrDtosFTRouteExcep != undefined &&
            this.userDataDtoReturnSession.lrDtosFTRouteExcep.length > 0) {
            for (var k = 0; k < this.userDataDtoReturnSession.lrDtosFTRouteExcep.length; k++) {
                //this.lrDtoFTRoutingExcep = new LRDto();
                this.lrDtoFTRoutingExcep = this.userDataDtoReturnSession.lrDtosFTRouteExcep[k];
                if (sourceFt == this.lrDtoFTRoutingExcep.source &&
                    destinationFt == this.lrDtoFTRoutingExcep.destination) {
                    this.departureButtonHideShow = true;
                    this.isFTTripReq = false;
                    break;
                }
            }
        }
        console.log("HIRESLIP PAGE");
        console.log(this.userDataDtoReturnSession.lrDtosFTRouteExcep);
        // temp remove the mandatory since facing issues with FT consent
        // @14/09/2020, will remove this code once issue solve
        // blocked again on 18/09/2020, hence commented
        // depButton.setVisible(true);
        // new logic to enable dep when the consent starts time exceeded more
        // than 30mins, since facing issues with FT @26/09/2020
        console.log(this.userDataDtoReturnSession.diffFtAllow);
        if (this.hireSlipDtoForCreateHireslipLocalStorage.diffFtAllow != null &&
            this.hireSlipDtoForCreateHireslipLocalStorage.diffFtAllow) {
            this.departureButtonHideShow = true;
        }
        //its for testing true we used in live it shd comments pls
        this.departureButtonHideShow = true;
        //PENDING WORK
        this.getGoodsTypes(this.hireSlipDtoForCreateHireslipLocalStorage.vehicleNumber);
        this.gurWgt = this.hireSlipDtoForCreateHireslipLocalStorage.gurWeight == null ? 0.0
            : this.hireSlipDtoForCreateHireslipLocalStorage.gurWeight;
        this.kantaWgt = this.hireSlipDtoForCreateHireslipLocalStorage.kantaWeight == null ? 0.0
            : this.hireSlipDtoForCreateHireslipLocalStorage.kantaWeight;
        this.suppName = this.hireSlipDtoForCreateHireslipLocalStorage.suppliername;
        this.listOfShortageLrs = this.hireSlipDtoForCreateHireslipLocalStorage.listLrsShortage;
        this.printMode = this.hireSlipDtoForCreateHireslipLocalStorage.mode;
        //hpDesc.add(lbldescription);
        //hpDesc.add(lbldescriptionValue);
        //alert(this.hireSlipDtoLocalStorage.fromstation);
        //alert(this.hireSlipDtoLocalStorage.toStation);
        if ((this.hireSlipDtoForCreateHireslipLocalStorage.fromstation == "KVH") &&
            (this.hireSlipDtoForCreateHireslipLocalStorage.toStation != "Bangalore")) {
            this.hideAndShowInputFields = true;
            this.hideAndShowInputFieldsOne = true;
        }
        else {
            this.hideAndShowInputFields = false;
            this.hideAndShowInputFieldsOne = false;
        }
        if (this.hireSlipDtoForCreateHireslipLocalStorage.invoiceNumber != null) {
            this.invoiceNumberSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.invoiceNumber;
            this.hireslipNumberSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.invoiceNumber;
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_21__(new Date()).format('DD/MM/YYYY');
            this.invoiceDateSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.invoicedate == null ? this.currentDate :
                this.hireSlipDtoForCreateHireslipLocalStorage.invoicedate;
            this.sourceSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.fromstation;
            this.destinationSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.toStation;
            this.numberOfLrsSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.list.length;
            this.numberOfArticlesSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.totalArticles;
            this.guaranteeWgtSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.gurWeight;
            this.gurWeightTotalSetOnload = this.hireSlipDtoForCreateHireslipLocalStorage.gurWeightTotal;
            this.kantaWeightSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.kantaWeight;
            this.loadedBySetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.loadedby;
            this.lorryNumberSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.vehicleNumber;
            this.lorryOwnerSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.vehiCompName;
            this.truckLengthSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.trkLgth;
            this.contactPersonSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.contactPerson;
            this.addressSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.vehiCompAddress;
            this.truckDriverNameSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.drivername;
            this.driverLicNoSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.driverlicencenumber;
            this.driverMobileNoSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.driverMobileNumber == null ? null
                : this.hireSlipDtoForCreateHireslipLocalStorage.driverMobileNumber;
            this.supplierNameTextSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.suppliername;
            this.panNoSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.vehiCompPanNo;
            this.insuranceNoSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.insuranceNumber;
            this.totalHireAmountSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.totalhire == null ? 0
                : this.hireSlipDtoForCreateHireslipLocalStorage.totalhire;
            this.advanceAmountSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.advance;
            this.balanceAmountSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.balance;
            this.payableAtSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.toStation;
            this.payableAtDupSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.toStation;
            this.remarksSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.remarks;
            this.deliveryPointsSetOnLoad = this.hireSlipDtoForCreateHireslipLocalStorage.deliveryPoints;
            this.twoPointDDCheckBox = $("#twoPointDD").val();
            this.twoPointsDoorDeliveryMultipleLrs = this.hireSlipDtoForCreateHireslipLocalStorage.twoPtLrs;
            this.ewayBillNo = this.hireSlipDtoForCreateHireslipLocalStorage.ewayBill;
            this.ewayBillNoConfirm = this.hireSlipDtoForCreateHireslipLocalStorage.ewayBill;
            this.isReadOnlyInvoiceNo = true;
            this.isReadOnlyInvoiceDates = true;
            this.isReadOnlyHireslipNo = true;
            this.isReadOnlySource = true;
            this.isReadOnlyDestination = true;
            this.isReadOnlyNumberOfLrs = true;
            this.isReadOnlyTotalNoArticle = true;
            this.isReadOnlyLorryNo = true;
            this.isReadOnlyLorryOwner = true;
            this.isReadOnlyTruckLength = true;
            this.isReadOnlyLorryContactPerson = true;
            this.isReadOnlyOwnerAddress = true;
            this.isReadOnlyDriverName = true;
            this.isReadOnlyDriverLicNo = true;
            this.isReadOnlySupplierName = true;
            this.isReadOnlyPanNo = true;
            $("#inoviceNumber").val(this.invoiceNumberSetOnLoad);
            $("#invoiceDate").val(this.invoiceDateSetOnLoad);
            $("#hireslipNumber").val(this.hireslipNumberSetOnLoad);
            $("#source").val(this.sourceSetOnLoad);
            $("#destination").val(this.destinationSetOnLoad);
            $("#numberOfLrs").val(this.numberOfLrsSetOnLoad);
            $("#numberOfArticles").val(this.numberOfArticlesSetOnLoad);
            $("#guranteeWeight").val(this.guaranteeWgtSetOnLoad);
            $("#gurWeightTotal").val(this.gurWeightTotalSetOnload);
            $("#kantaWeight").val(this.kantaWeightSetOnLoad);
            $("#loadedBy").val(this.loadedBySetOnLoad);
            $("#lorryNumber").val(this.lorryNumberSetOnLoad);
            $("#lorryOwner").val(this.lorryOwnerSetOnLoad);
            $("#truckLength").val(this.truckLengthSetOnLoad);
            $("#contactPerson").val(this.contactPersonSetOnLoad);
            $("#address").val(this.addressSetOnLoad);
            $("#driverNameText").val(this.truckDriverNameSetOnLoad);
            $("#driverLicenseNo").val(this.driverLicNoSetOnLoad);
            if (this.driverMobileNoSetOnLoad != null) {
                $("#driverMobileNo").val(this.driverMobileNoSetOnLoad);
            }
            $("#supplierNameText").val(this.supplierNameTextSetOnLoad);
            $("#panNumber").val(this.panNoSetOnLoad);
            $("#insuranceNo").val(this.insuranceNoSetOnLoad);
            if (this.advanceAmountSetOnLoad == null) {
                this.advanceAmountSetOnLoad = 0.0;
                $("#advance").val(this.advanceAmountSetOnLoad);
            }
            else {
                this.advanceAmountSetOnLoad = 0.0;
                $("#advance").val(this.advanceAmountSetOnLoad);
                $("#totalHire").val(this.totalHireAmountSetOnLoad);
            }
            if (this.balanceAmountSetOnLoad == null) {
                this.balanceAmountSetOnLoad = 0.0;
                $("#balance").val(this.balanceAmountSetOnLoad);
            }
            else {
                $("#balance").val(this.balanceAmountSetOnLoad);
            }
            $("#payableAt").val(this.payableAtSetOnLoad);
            $("#remarks").val(this.remarksSetOnLoad);
            $("#deliveryPoints").val(this.deliveryPointsSetOnLoad);
            if (this.hireSlipDtoForCreateHireslipLocalStorage.ewayBill != null &&
                this.hireSlipDtoForCreateHireslipLocalStorage.ewayBill != "") {
                $("#consolidatedEwayBill").val(this.ewayBillNo);
                $("#confirmConsolidatedEwayBill").val(this.ewayBillNoConfirm);
            }
            if (this.hireSlipDtoForCreateHireslipLocalStorage.twoPtLrs != null &&
                this.hireSlipDtoForCreateHireslipLocalStorage.twoPtLrs != "") {
                $("#twoPointDD").prop('checked', true);
                this.twoPointDDCheckBox = true;
                $("#twoPointsDoorDeliveryLrs").val(this.twoPointsDoorDeliveryMultipleLrs);
            }
            //PENDING WORK
            if (this.hireSlipDtoForCreateHireslipLocalStorage.listLrsShortage.length != 0) {
                //hpDesc.setVisible(true);
                this.shortageLrs = null;
                for (var i = 0; i < this.hireSlipDtoForCreateHireslipLocalStorage.listLrsShortage.length; i++) {
                    this.spiltLrs = this.hireSlipDtoForCreateHireslipLocalStorage.listLrsShortage[i].split("-");
                    if (this.spiltLrs[1] != null && this.spiltLrs[1] > 0) {
                        this.lrShrotageSpilt = this.hireSlipDtoForCreateHireslipLocalStorage.listLrsShortage[i];
                        this.shortageLrs = this.shortageLrs + "," + this.lrShrotageSpilt;
                    }
                }
                if (this.shortageLrs != null) {
                    //lbldescriptionValue.setText("Shortage Articles: "+ shortageLrs.replace("null,", ""));
                    // lbldescriptionValue.setStyleName("hireSlipLbl");
                    //lbldescription.setStyleName("hireSlipLbl");
                }
            }
            /*Departure Date & Time Flow Start */
            if (this.hireSlipDtoForCreateHireslipLocalStorage.departuredate != null) {
                this.departureDate = this.hireSlipDtoForCreateHireslipLocalStorage.departuredate;
                $("#departureDate").val(moment__WEBPACK_IMPORTED_MODULE_21__(this.departureDate).format('YYYY-MM-DD'));
                //$("#departureDate").val(this.departureDate);
            }
            else {
                this.departureDate = new Date();
                $("#departureDate").val(moment__WEBPACK_IMPORTED_MODULE_21__(this.departureDate).format('YYYY-MM-DD'));
            }
            if (this.hireSlipDtoForCreateHireslipLocalStorage.departureTime != null) {
                this.departureTime = this.hireSlipDtoForCreateHireslipLocalStorage.departureTime;
                $("#departureTime").val(this.departureTime);
            }
            /*Departure Date & Time Flow End */
            /*Schedule Date & Time Flow Start */
            if (this.hireSlipDtoForCreateHireslipLocalStorage.scheduleddate != null) {
                this.scheduledDate = this.hireSlipDtoForCreateHireslipLocalStorage.scheduleddate;
                $("#scheduleDate").val(this.scheduledDate);
            }
            if (this.hireSlipDtoForCreateHireslipLocalStorage.scheduleddate != null) {
                this.scheduledTime = this.hireSlipDtoForCreateHireslipLocalStorage.scheduledTime;
                $("#scheduleTime").val(this.scheduledTime);
            }
            /*Schedule Date & Time Flow End */
            if (this.hireSlipDtoForCreateHireslipLocalStorage.isMultiPntDelv != null &&
                this.hireSlipDtoForCreateHireslipLocalStorage.isMultiPntDelv) {
                $("#deliveryPointIdForMultiple").prop('checked', true);
                $("#deliveryPointIdForSingle").prop('checked', false);
                this.gridReconfigurMutlDevPt();
                this.firstPtDeliv = this.hireSlipDtoForCreateHireslipLocalStorage.firstPntDelv;
            }
            else {
                $("#deliveryPointIdForSingle").prop('checked', true);
                $("#deliveryPointIdForMultiple").prop('checked', false);
            }
            if (this.hireSlipDtoForCreateHireslipLocalStorage.status != null &&
                this.hireSlipDtoForCreateHireslipLocalStorage.status == "Transit") {
                this.hideAndShowPrintInvoiceBtn = true;
            }
            else {
                this.hideAndShowPrintInvoiceBtn = false;
            }
            if (this.hireSlipDtoForCreateHireslipLocalStorage.reportMode != null &&
                this.hireSlipDtoForCreateHireslipLocalStorage.reportMode == "report") {
                this.hideAndShowPrintHireslipBtn = true;
                this.hideAndShowInvSummPrintBtn = true;
            }
            else {
                this.hideAndShowPrintHireslipBtn = false;
                this.hideAndShowInvSummPrintBtn = false;
            }
            if (this.hireSlipDtoForCreateHireslipLocalStorage.isMultiInvFT != null &&
                this.hireSlipDtoForCreateHireslipLocalStorage.isMultiInvFT) {
                $("#isMultiInvoiceTripId").prop('checked', true);
                $("#islastPointDeliveryId").prop('checked', true);
            }
            else {
                $("#isMultiInvoiceTripId").prop('checked', false);
                $("#islastPointDeliveryId").prop('checked', false);
            }
            //PENDING WORK
            if (this.hireSlipDtoForCreateHireslipLocalStorage.isLastPtDelvFT != null &&
                this.hireSlipDtoForCreateHireslipLocalStorage.isLastPtDelvFT) {
                $("#isMultiInvoiceTripId").prop('checked', true);
                $("#islastPointDeliveryId").prop('checked', true);
                this.gridReconfigurMultiInvoice();
            }
            else {
                $("#isMultiInvoiceTripId").prop('checked', false);
                $("#islastPointDeliveryId").prop('checked', false);
            }
            this.getShortExtraDetails();
        }
        this.getNoEwayBillLrDetails();
    };
    StocksGroupingComponent.prototype.getShortExtraDetails = function () {
        var _this = this;
        this.hireSlipDtoForShortAndExtra = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        //Pending Need To Work   hireslip no this.hireslipNumber;
        //this.hireSlipDto.hireslipnumber ="NP/CLT/1920/30";
        this.hireSlipDtoForShortAndExtra.hireslipnumber = this.hireslipNumberSetOnLoad;
        this.hireSlipDtoForShortAndExtra.companyid = this.userDataDtoReturnSession.companyId;
        this.stockService.getLRShortageDtls(this.hireSlipDtoForShortAndExtra).subscribe(function (response) {
            _this.goodsShortAndExtraDetailsDataList = [];
            $("#goodsShortageExtraLrDetailsId").DataTable().destroy();
            if (response.length > 0) {
                console.log(response);
                _this.goodsShortAndExtraDetailsDataList = response;
                _this.dtTriggerGoodsShortAndExtraDetails.next();
            }
            else {
                _this.dtTriggerGoodsShortAndExtraDetails.next();
            }
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting getShortExtraDetails", "warning");
        },
            function () { return console.log('done'); };
    };
    StocksGroupingComponent.prototype.getNoEwayBillLrDetails = function () {
        var _this = this;
        this.ewayBillLrForLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.ewayLrs = "";
        this.countEwayLrs = 0;
        this.countEwayLrsAbove50K = 0;
        this.countEwayLrsBelow50K = 0;
        //this.ewayBillLrForLRDto.invoiceNumber ="NP/CLT/1920/30";
        this.ewayBillLrForLRDto.invoiceNumber = this.hireSlipDtoForCreateHireslipLocalStorage.invoiceNumber;
        this.ewayBillLrForLRDto.companyId = this.userDataDtoReturnSession.companyId;
        this.stockService.getLrsForNoEwayBillValidations(this.ewayBillLrForLRDto).subscribe(function (response) {
            console.log("response");
            console.log(response.length);
            console.log(response);
            if (response != null) {
                _this.returnEwayBillLrsLRDto = [];
                _this.returnEwayBillLrsLRDto.push(response);
                _this.hashmapEwayBill = new Map();
                _this.goodsValueFind = null;
                for (var i = 0; i < _this.returnEwayBillLrsLRDto.length; i++) {
                    if (_this.hashmapEwayBill.get(_this.returnEwayBillLrsLRDto[i].gstNoConsignee) == null) {
                        _this.hashmapEwayBill.set(_this.returnEwayBillLrsLRDto[i].gstNoConsignee, _this.returnEwayBillLrsLRDto[i].goodsValue);
                    }
                    else {
                        _this.goodsValueFind = _this.hashmapEwayBill.get(_this.returnEwayBillLrsLRDto[i].gstNoConsignee);
                        _this.hashmapEwayBill.set(_this.returnEwayBillLrsLRDto[i].gstNoConsignee, _this.returnEwayBillLrsLRDto[i].goodsValue + _this.goodsValueFind);
                    }
                }
                _this.goodsValueFind1 = null;
                _this.ewayBill = null;
                for (var j = 0; j < _this.returnEwayBillLrsLRDto.length; j++) {
                    // logic for eway status @Dated : 26/12/2018
                    _this.goodsValueFind1 = _this.hashmapEwayBill.get(_this.returnEwayBillLrsLRDto[j].gstNoConsignee);
                    _this.ewayBill = _this.hashmapEwayBill.get(_this.returnEwayBillLrsLRDto[j].eWayBillNo);
                    if (_this.goodsValueFind1 >= 50000 && _this.ewayBill == null) {
                        if (_this.countEwayLrs == 0) {
                            _this.ewayBill += _this.returnEwayBillLrsLRDto[j].lrNumber;
                        }
                        else {
                            _this.ewayBill += ", " + _this.returnEwayBillLrsLRDto[j].lrNumber;
                        }
                        _this.countEwayLrs++;
                    }
                    // goods value greater than 50K and eway bill is not null
                    // goods value lesser than 50K and eway bill is not null
                    if (_this.returnEwayBillLrsLRDto[j].goodsValue >= 50000 && _this.ewayBill != null) {
                        _this.countEwayLrsAbove50K = +_this.countEwayLrsAbove50K + +1;
                    }
                    else if (_this.returnEwayBillLrsLRDto[j].goodsValue < 50000 && _this.ewayBill != null) {
                        _this.countEwayLrsAbove50K = +_this.countEwayLrsAbove50K + +1;
                    }
                }
                $("#noOfNoEwbInConsolidatedSystem").val(_this.countEwayLrs);
            }
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting No EwayBill LR Details", "warning");
        },
            function () { return console.log('done'); };
    };
    StocksGroupingComponent.prototype.getGoodsTypes = function (vehicleNumber) {
        var _this = this;
        this.hireSlipDtoGoodsTypes = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoGoodsTypes.vehicleNumber = vehicleNumber;
        this.hireSlipDtoGoodsTypes.companyid = this.userDataDtoReturnSession.companyId;
        this.stockService.getTruckTypeFromTruckMaster(this.hireSlipDtoGoodsTypes).subscribe(function (response) {
            console.log(response.truckType);
            if (response.truckType == "Select Type") {
                _this.goodsType = "NA";
            }
            else {
                _this.goodsType = response.truckType;
            }
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting GoodsTypes", "warning");
        },
            function () { return console.log('done'); };
    };
    //Pending Need to work
    StocksGroupingComponent.prototype.gridReconfigurMutlDevPt = function () {
        var _this = this;
        /* private void gridReconfigurMutlDevPt() {
             listInvoice.clear();
             storeDelvPnts.removeAll();
             if (dto.getHashMap() != null) {
                 for (Map.Entry<String, String> entry : dto.getHashMap().entrySet()) {
                     storeDelvPnts.add(new Maintenance(entry.getKey(), entry
                             .getValue()));
                     gridDelvPnts.reconfigure(storeDelvPnts, cmDelvPnts);
                     listInvoice.add(entry.getKey());
                 }
             }
         }*/
        if (this.hireSlipDtoForCreateHireslipLocalStorage.hashMap != null) {
            this.hireSlipDtoForCreateHireslipLocalStorage.hashMap.forEach(function (value, key) {
                console.log(key, value);
                _this.multipleDeliveryPointListPopupReturn.push(value);
            });
        }
    };
    StocksGroupingComponent.prototype.gridReconfigurMultiInvoice = function () {
        this.multipleInvoiceIsLastPointListPopupReturn = [];
        if (this.hireSlipDtoForCreateHireslipLocalStorage.listOfDest != null) {
            for (var i = 0; i < this.hireSlipDtoForCreateHireslipLocalStorage.listOfDest.length; i++) {
                this.multipleInvoiceIsLastPointListPopupReturn.push(this.hireSlipDtoForCreateHireslipLocalStorage.listOfDest[i]);
            }
        }
    };
    StocksGroupingComponent.prototype.getUsersValue = function () {
        this.hireSlipDtoUserValue = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        //console.log(this.hireSlipDtoForCreateHireslipLocalStorage);
        this.hireslipNumber = $("#hireslipNumber").val();
        this.invoiceDate = $("#invoiceDate").val();
        //this.invoiceDate = moment($("#invoiceDate").val()).format('YYYY/MM/DD');
        this.source = $("#source").val();
        this.destination = $("#destination").val();
        ;
        this.invoiceNumber = $("#inoviceNumber").val();
        ;
        this.lorryNumber = $("#lorryNumber").val();
        ;
        this.lorryOwner = $("#lorryOwner").val();
        this.panNo = $("#panNumber").val();
        this.address = $("#address").val();
        this.numberOfLrs = $("#numberOfLrs").val();
        this.numberOfArticles = $("#numberOfArticles").val();
        this.supplierNameText = $("#supplierNameText").val();
        //this.panNo = $("#supplierNameText").val();
        this.contactPerson = $("#contactPerson").val();
        this.truckDriverName = $("#driverNameText").val();
        this.driverLicNo = $("#driverLicenseNo").val();
        this.driverMobileNo = $("#driverMobileNo").val();
        this.payableAt = $("#payableAt").val();
        this.guaranteeWgt = $("#guranteeWeight").val();
        this.gurWgtTotal = $("#gurWeightTotal").val();
        this.kantaWeight = $("#kantaWeight").val();
        this.loadedBy = $("#loadedBy").val();
        /* this.validateDepartureDT = $("#departureDateTime").val();
         this.validateScheduledDT = $("#scheduleDateTime").val();*/
        this.validateDepartureDate = $("#departureDate").val();
        this.validateDepartureTime = $("#departureTime").val();
        this.validateScheduledDate = $("#scheduleDate").val();
        this.validateScheduledTime = $("#scheduleTime").val();
        this.totalHireAmount = $("#totalHire").val();
        this.advanceAmount = $("#advance").val();
        this.balanceAmount = $("#balance").val();
        this.remarks = $("#hireslipRemarksId").val();
        this.deliveryPoints = $("#deliveryPoints").val();
        this.truckLength = $("#truckLength").val();
        this.baseHireAmount = $("#baseHireAmt").val();
        this.doorOpenAmount = $("#doorOpen").val();
        this.vehiHeightAmount = $("#vehicleHeight").val();
        this.doorDeliveryAmount = $("#doorDelivery").val();
        this.extraWeightAmount = $("#extraWeight").val();
        this.chkPostAmount = $("#checkPost").val();
        this.otherChargesAmount = $("#otherCharges").val();
        this.ewayBillNumber = $("#consolidatedEwayBill").val();
        this.twoPtDoorDelyLrs = $("#twoPointsDoorDeliveryLrs").val();
        this.hireSlipDtoUserValue.hireslipnumber = this.hireslipNumber;
        this.hireSlipDtoUserValue.hireSlipDateStr = this.invoiceDate;
        //this.hireSlipDtoUserValue.hireslipdate =  this.invoiceDate;
        this.hireSlipDtoUserValue.fromstation = this.hireSlipDtoForCreateHireslipLocalStorage.fromstation;
        this.hireSlipDtoUserValue.tostation = this.destination;
        this.hireSlipDtoUserValue.invoiceNumber = this.invoiceNumber;
        this.hireSlipDtoUserValue.vehicleNumber = this.lorryNumber;
        this.hireSlipDtoUserValue.vehiCompName = this.lorryOwner;
        this.hireSlipDtoUserValue.vehiCompPanNo = this.panNo;
        this.hireSlipDtoUserValue.vehiCompAddress = this.address;
        this.hireSlipDtoUserValue.totalLRs = this.numberOfLrs;
        this.hireSlipDtoUserValue.totalArticles = this.numberOfArticles == null ? 0 : this.numberOfArticles;
        this.hireSlipDtoUserValue.brokerName = this.supplierNameText;
        this.hireSlipDtoUserValue.supplierpanno = this.panNo;
        this.hireSlipDtoUserValue.contactPerson = this.contactPerson;
        this.hireSlipDtoUserValue.drivername = this.truckDriverName;
        this.hireSlipDtoUserValue.driverlicencenumber = this.driverLicNo;
        this.hireSlipDtoUserValue.driverMobileNumber = this.driverMobileNo;
        this.hireSlipDtoUserValue.driverId = this.hireSlipDtoForCreateHireslipLocalStorage.driverId;
        this.hireSlipDtoUserValue.payableat = this.payableAt;
        this.hireSlipDtoUserValue.gurWeight = this.guaranteeWgt == null ? 0 : this.guaranteeWgt;
        this.hireSlipDtoUserValue.gurWeightTotal = this.gurWgtTotal == null ? 0 : this.gurWgtTotal;
        this.hireSlipDtoUserValue.kantaWeight = this.kantaWeight == null ? 0 : this.kantaWeight;
        this.hireSlipDtoUserValue.loadedby = this.loadedBy;
        this.arrivalTime = null;
        this.departureTime = null;
        this.scheduledTime = null;
        if (this.validateDepartureDate != null && this.validateDepartureDate != "") {
            this.departureDate = moment__WEBPACK_IMPORTED_MODULE_21__(this.validateDepartureDate).format('YYYY-MM-DD');
        }
        if (this.validateDepartureTime != null && this.validateDepartureTime != "") {
            this.departureTime = this.validateDepartureTime;
        }
        if (this.validateScheduledDate != null && this.validateScheduledDate != "") {
            this.scheduledDate = moment__WEBPACK_IMPORTED_MODULE_21__(this.validateScheduledDate).format('YYYY-MM-DD');
        }
        if (this.validateScheduledTime != null && this.validateScheduledTime != "") {
            this.arrivalTime = this.validateScheduledTime;
        }
        this.hireSlipDtoUserValue.departureTime = this.departureTime;
        this.hireSlipDtoUserValue.scheduledTime = this.arrivalTime;
        this.hireSlipDtoUserValue.departuredateStr = this.departureDate;
        this.hireSlipDtoUserValue.scheduleddateStr = this.scheduledDate;
        this.hireSlipDtoUserValue.enteryby = this.userDataDtoReturnSession.userId;
        this.hireSlipDtoUserValue.financialyear = this.userDataDtoReturnSession.financialyear;
        this.hireSlipDtoUserValue.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDtoUserValue.list = this.hireSlipDtoForCreateHireslipLocalStorage.list;
        this.hireSlipDtoUserValue.supId = this.hireSlipDtoForCreateHireslipLocalStorage.supId;
        this.hireSlipDtoUserValue.stocksAt = this.userDataDtoReturnSession.office;
        this.hireSlipDtoUserValue.companyName = "SRD Logistics Pvt.Ltd";
        if (this.hireSlipDtoForCreateHireslipLocalStorage.hireslipnumber != null) {
            this.hireSlipDtoUserValue.mode = "update";
        }
        else {
            this.hireSlipDtoUserValue.mode = "add";
        }
        if (this.hireSlipDtoUserValue.fromstation != null
            && this.hireSlipDtoUserValue.fromstation == "KVH"
            && (!(this.destination == "Bangalore Delivery Godown"))) {
            this.hireSlipDtoUserValue.totalhire = this.totalHireAmount == null ? 0 : this.totalHireAmount;
            this.hireSlipDtoUserValue.advance = this.advanceAmount == null ? 0 : this.advanceAmount;
            this.hireSlipDtoUserValue.balance = ((this.totalHireAmount == null ? 0 : this.totalHireAmount)
                - (this.advanceAmount == null ? 0 : this.advanceAmount));
            this.hireSlipDtoUserValue.remarks = this.remarks;
        }
        else {
            //pending total hiredup value totalHireAmountDup we same does here logic if else onload hide show
            this.hireSlipDtoUserValue.totalhire = this.totalHireAmount == null ? 0 : this.totalHireAmount;
            this.hireSlipDtoUserValue.advance = this.advanceAmount == null ? 0 : this.advanceAmount;
            this.hireSlipDtoUserValue.balance = ((this.totalHireAmount == null ? 0 : this.totalHireAmount)
                - (this.advanceAmount == null ? 0 : this.advanceAmount));
            this.hireSlipDtoUserValue.remarks = this.remarks;
        }
        this.hireSlipDtoUserValue.deliveryPoints = this.deliveryPoints == null ? 1 : this.deliveryPoints;
        this.hireSlipDtoUserValue.doorOpen = this.doorOpenAmount == null ? 0 : this.doorOpenAmount;
        this.hireSlipDtoUserValue.vehiHeight = this.vehiHeightAmount == null ? 0 : this.vehiHeightAmount;
        this.hireSlipDtoUserValue.doorDelivery = this.doorDeliveryAmount == null ? 0 : this.doorDeliveryAmount;
        this.hireSlipDtoUserValue.extraWeight = this.extraWeightAmount == null ? 0 : this.extraWeightAmount;
        this.hireSlipDtoUserValue.chkPost = this.chkPostAmount == null ? 0 : this.chkPostAmount;
        this.hireSlipDtoUserValue.otherChgs = this.otherChargesAmount == null ? 0 : this.otherChargesAmount;
        this.hireSlipDtoUserValue.baseHireAmt = this.baseHireAmount == null ? 0 : this.baseHireAmount;
        this.validateDeliveryPtSingleMult = $("#deliveryPointIdForMultiple").val();
        if (this.validateDeliveryPtSingleMult == true) {
            this.hireSlipDtoUserValue.isMultiPntDelv = true;
            this.listInvoice = this.getInvoiceNumbers();
            this.hireSlipDtoUserValue.listOfInvoice = this.listInvoice;
            this.hireSlipDtoUserValue.firstPntDelv = this.firstPtDeliv;
        }
        else {
            this.hireSlipDtoUserValue.isMultiPntDelv = false;
        }
        if ($("#departureTime").val() != null && $("#departureTime").val() != "") {
            this.departureTimeSplit = [];
            this.departureTimeSplit = this.validateDepartureTime.split(":");
            this.hireSlipDtoUserValue.depHours = this.departureTimeSplit[0];
            this.hireSlipDtoUserValue.depMins = this.departureTimeSplit[1];
            console.log(this.departureTimeSplit[0], this.departureTimeSplit[1]);
        }
        this.hireSlipDtoUserValue.column2 = this.hireSlipDtoForCreateHireslipLocalStorage.column2;
        this.hireSlipDtoUserValue.listLrsShortage = this.hireSlipDtoForCreateHireslipLocalStorage.listLrsShortage;
        this.hireSlipDtoUserValue.barcodeValue = this.hireSlipDtoForCreateHireslipLocalStorage.barcodeValue;
        // newly added
        this.hireSlipDtoUserValue.toPay = this.hireSlipDtoForCreateHireslipLocalStorage.toPay;
        this.hireSlipDtoUserValue.paid = this.hireSlipDtoForCreateHireslipLocalStorage.paid;
        this.hireSlipDtoUserValue.truckType = this.goodsType;
        // Niyamath
        this.hireSlipDtoUserValue.trkLgth = this.truckLength == null ? 0 : this.truckLength;
        this.printRewardYesNoValidate = $("#printRewardDetails").val();
        if (this.printRewardYesNoValidate == "yes") {
            this.hireSlipDtoUserValue.isRewarded = true;
        }
        else {
            this.hireSlipDtoUserValue.isRewarded = false;
        }
        //Not used this current new application
        //this.hireSlipDtoUserValue.deviceId = null;
        this.hireSlipDtoUserValue.ewayBill = this.ewayBillNumber;
        this.hireSlipDtoUserValue.twoPtLrs = this.twoPtDoorDelyLrs;
        if (this.selectedTruckTypeId != null &&
            this.selectedTruckTypeId != undefined &&
            this.selectedTruckTypeId != "") {
            this.hireSlipDtoUserValue.truckTypeCommonId = this.selectedTruckTypeId;
        }
        console.log(this.multipleInvoiceIsLastPointListPopupReturn);
        this.hireSlipDtoUserValue.trackingFTTripId = this.hireSlipDtoForCreateHireslipLocalStorage.trackingFTTripId;
        this.hireSlipDtoUserValue.listOfDest = this.multipleInvoiceIsLastPointListPopupReturn;
        this.hireSlipDtoUserValue.isFTTripReq = this.isFTTripReq;
        this.hireSlipDtoUserValue.companyid = this.userDataDtoReturnSession.companyId;
        return this.hireSlipDtoUserValue;
    };
    StocksGroupingComponent.prototype.getInvoiceNumbers = function () {
        this.listOfInvoice = new Array();
        if (this.multipleDeliveryPointListPopupReturn != null &&
            this.multipleDeliveryPointListPopupReturn != undefined &&
            this.multipleDeliveryPointListPopupReturn.length > 0) {
            for (var i = 0; i < this.multipleDeliveryPointListPopupReturn.length; i++) {
                this.listOfInvoice.push(this.multipleDeliveryPointListPopupReturn[i]);
            }
        }
        return this.listOfInvoice;
    };
    /* Save function call start here  */
    StocksGroupingComponent.prototype.saveBtn = function () {
        //this.saveHireslipDetailsMethod();
        if ($("#driverMobileNo").val() == null || $("#driverMobileNo").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory", "Driver mobile number is Mandatory", "warning");
        }
        else if ($("#departureTime").val() == null || $("#departureTime").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory", "Departure Time is Mandatory", "warning");
        }
        else {
            console.log($("#departureDate").val());
            if ($("#departureDate").val() != null) {
                //var currentYear = moment($("#departureDate").val()).format('DD/MM/YYYY');
                //var depYear = (currentYear.split("-")[2]);
                var currentYear = moment__WEBPACK_IMPORTED_MODULE_21__($("#departureDate").val()).format('YYYY');
                var depYear = currentYear;
                if (depYear == this.firstYearStgOnloadValidate || depYear == this.secondYearStgOnloadValidate) {
                    if (this.invoiceType != null && this.invoiceType == "Dummy") {
                        this.saveHireslipDetailsMethod();
                    }
                    else {
                        this.getSaveRcLicInscDtls();
                    }
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory", "Please Check The Departure Year", "warning");
                }
            }
        }
    };
    StocksGroupingComponent.prototype.saveHireslipDetailsMethod = function () {
        var _this = this;
        console.log("CHECKING");
        this.hireSlipDtoSaveHireslip = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.chkStatusHireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoSaveHireslip = this.getUsersValue();
        console.log(this.hireSlipDtoSaveHireslip);
        this.chkStatusHireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        this.chkStatusHireSlipDto.hireslipnumber = this.hireslipNumber;
        this.showSpinnerActionForHireslip = true;
        this.stockService.chkHireslipStatus(this.chkStatusHireSlipDto).subscribe(function (response) {
            if (response) {
                _this.showSpinnerActionForHireslip = false;
                console.log(response.status);
                _this.truckDataDtoValidateTruckType = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
                _this.truckDataDtoValidateTruckType = _this.validateTruckTypeSelectionsOnGurWgt();
                console.log(_this.truckDataDtoValidateTruckType);
                if (response.status != null && response.status == "Transit") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "Hireslip was already Departed", "warning");
                }
                else if ($("#truckType").val() == null || $("#truckType").val() == ""
                    || $("#truckType").val() == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "Please select Truck Type to proceed!", "warning");
                }
                else if (!_this.truckDataDtoValidateTruckType.isValid) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "The Truck Type selected does not match with the Total GUR Wt entered, kindly select the appropriate Truck Type.", "warning");
                }
                else {
                    /*  here addhireslipdetails service starting */
                    _this.showSpinnerActionForHireslip = true;
                    _this.stockService.addHireSlipDetails(_this.hireSlipDtoSaveHireslip).subscribe(function (response) {
                        _this.showSpinnerActionForHireslip = false;
                        console.log(response);
                        if (response.status == "Failed") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", "Failed to save/update add hire slip details", "warning");
                        }
                        else if (response.status == "Success") {
                            _this.printInvoiceAlone(_this.hireSlipDtoSaveHireslip, response.hireslipnumber);
                            if (_this.hireSlipDtoForCreateHireslipLocalStorage.fromstation == "KVH" &&
                                (!($("#destination").val() == "Bangalore"))) {
                                if (!$("#isMultiInvoiceTripId").is(':checked')) {
                                    //ftTrackingFlow();
                                }
                                else if ($("#isMultiInvoiceTripId").is(':checked') &&
                                    $("#islastPointDeliveryId").is(':checked')) {
                                    //ftTrackingFlow();
                                }
                            }
                            else {
                                if (!$("#isMultiInvoiceTripId").is(':checked')) {
                                    //ftTrackingFlow();
                                }
                                else if ($("#isMultiInvoiceTripId").is(':checked') &&
                                    $("#islastPointDeliveryId").is(':checked')) {
                                    //ftTrackingFlow();
                                }
                            }
                            console.log("SAVE");
                            //this.stepper.reset();
                            //this.overAllResetComplete();
                        }
                    }), function (error) {
                        _this.showSpinnerActionForHireslip = false;
                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Save Hireslip Details", "warning");
                    }, function () { return console.log('done'); };
                }
                /*  here addhireslipdetails service ending */
            }
        }), function (error) {
            _this.showSpinnerActionForHireslip = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting checking Hireslip Status", "warning");
        }, function () { return console.log('done'); };
    };
    StocksGroupingComponent.prototype.validateTruckTypeSelectionsOnGurWgt = function () {
        //Pending work of comment line erroer shwg
        this.isValid = false;
        this.truckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckTypeId = null;
        //this.truckTypeId = this.modelTruckType.id;
        this.truckTypeId = this.selectedTruckTypeId;
        this.truckDto = this.hmTruckTypeDto.get(this.truckTypeId);
        this.validateTruckTypeTotGurWgt = $("#gurWeightTotal").val();
        if (this.truckDto != null) {
            if (this.validateTruckTypeTotGurWgt < this.truckDto.fromRange ||
                this.totalGurWgt > this.truckDto.toRange) {
                this.isValid = false;
            }
            else {
                this.isValid = true;
            }
            this.truckDto.isValid = this.isValid;
        }
        return this.truckDto;
    };
    StocksGroupingComponent.prototype.getSaveRcLicInscDtls = function () {
        var _this = this;
        this.rcLicInscTruckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        // this.hireSlipDtoForCreateHireslipLocalStorage = JSON.parse(localStorage.getItem('createHireSlipLocalStorage'));
        console.log(this.hireSlipDtoForCreateHireslipLocalStorage);
        this.rcLicInscTruckDataDto.truckNumber = this.hireSlipDtoForCreateHireslipLocalStorage.vehicleNumber == null ? null :
            this.hireSlipDtoForCreateHireslipLocalStorage.vehicleNumber;
        this.rcLicInscTruckDataDto.driverId = this.hireSlipDtoForCreateHireslipLocalStorage.driverId;
        this.rcLicInscTruckDataDto.companyId = this.hireSlipDtoForCreateHireslipLocalStorage.companyid;
        this.showSpinnerActionForHireslip = true;
        this.stockService.getRcLicInscDtls(this.rcLicInscTruckDataDto).subscribe(function (response) {
            _this.showSpinnerActionForHireslip = false;
            _this.rcLicInscTruckDataDtoReturn = null;
            _this.rcLicInscTruckDataDtoReturn = response;
            console.log(response);
            if (_this.rcLicInscTruckDataDtoReturn == true) {
                _this.chkPanInscDtls("Save");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Mandatory Docs",
                    text: "RC/Pan/License Docs are not uploaded.Do You Want To Update",
                    icon: "warning",
                    buttons: ["No", "Yes"]
                }).then(function (isConfirm) {
                    if (isConfirm) {
                        //Pop Up For RC LIC Ins File Upload
                        _this.modalRefferenceTruckDetailOfRCInsLicPopUp = _this.modalService.open(_this.uploadRCInsLicForTruck, { centered: true, windowClass: "modalClassForPopUpTruckOwner" });
                        _this.modalRefferenceTruckDetailOfRCInsLicPopUp.result.then(function (result) {
                            _this.modalRefferenceTruckDetailOfRCInsLicClosePopUp = "Closed with: " + result;
                        }, function (reason) {
                            _this.modalRefferenceTruckDetailOfRCInsLicClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                        });
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                            title: "Alert",
                            text: "Pan/Insurance is not matching with Truck Master.Sure You Want To Save?",
                            icon: "warning",
                            buttons: ["No", "Yes"]
                        }).then(function (isConfirm) {
                            if (isConfirm) {
                                _this.saveHireslipDetailsMethod();
                            }
                            else {
                                $("#panNumber").focus();
                            }
                        });
                    }
                });
            }
        }),
            function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Rc Lic Insc Details", "warning");
            }, function () { return console.log('done'); };
    };
    /* Save function call end here  */
    StocksGroupingComponent.prototype.chkPanInscDtls = function (mode_saveUpdateDepart) {
        var _this = this;
        this.truckDataDtoCheckPanIns = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.validateLorryNumber = $("#lorryNumber").val();
        this.validatePanNo = $("#panNumber").val();
        this.validateInsPolNo = $("#insuranceNo").val();
        this.truckDataDtoCheckPanIns.truckNumber = this.validateLorryNumber;
        this.truckDataDtoCheckPanIns.panNo = this.validatePanNo;
        this.truckDataDtoCheckPanIns.insPolNo = this.validateInsPolNo;
        this.truckDataDtoCheckPanIns.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerActionForHireslip = true;
        this.stockService.getPanInscDtls(this.truckDataDtoCheckPanIns).subscribe(function (response) {
            _this.showSpinnerActionForHireslip = false;
            var isRcLicInscResult = response;
            _this.modeMain = mode_saveUpdateDepart;
            if (mode_saveUpdateDepart != null && mode_saveUpdateDepart == "Save") {
                /*if mode_saveUpdateDepart save start */
                if (isRcLicInscResult) {
                    _this.masterService.setTruckOwnerDeclDetails(_this.truckDataDtoCheckPanIns).subscribe(function (response) {
                        console.log(response);
                        if (response == "failure") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "While Getting the result of setTruckOwnerDeclDetails", "error");
                        }
                        else if (response == null) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                                title: "Confirm Upload",
                                text: "Do you want to Upload the Truck Owner Declaration",
                                icon: "info",
                                buttons: ["No", "Yes"]
                            }).then(function (isConfirm) {
                                if (isConfirm) {
                                    _this.modalRefferenceTruckOwnerPopUp = _this.modalService.open(_this.uploadTruckOwnerPopUp, { centered: true, windowClass: "modalClassForPopUpTruckOwner" });
                                    _this.modalRefferenceTruckOwnerPopUp.result.then(function (result) {
                                        _this.modalRefferenceTruckOwnerClosePopUp = "Closed with: " + result;
                                    }, function (reason) {
                                        _this.modalRefferenceTruckOwnerClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                                    });
                                }
                                else {
                                    /*save method call here */
                                    _this.saveHireslipDetailsMethod();
                                }
                            });
                        }
                    }),
                        function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting chkPanInscDtls->setTruckOwnerDeclDetails", "warning"); },
                        function () { return console.log('done'); };
                }
                else {
                    /* else start */
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Alert",
                        text: "Pan/Insurance is not matching with Truck Master.Sure You Want To Save?",
                        icon: "info",
                        buttons: ["No", "Yes"]
                    }).then(function (isConfirm) {
                        if (isConfirm) {
                            _this.masterService.setTruckOwnerDeclDetails(_this.truckDataDtoCheckPanIns).subscribe(function (response) {
                                console.log(response);
                                if (response == "failure") {
                                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "While Getting the result of setTruckOwnerDeclDetails", "error");
                                }
                                else if (response == null) {
                                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                                        title: "Confirm Upload",
                                        text: "Do you want to Upload the Truck Owner Declaration",
                                        icon: "info",
                                        buttons: ["No", "Yes"]
                                    }).then(function (isConfirm) {
                                        if (isConfirm) {
                                            _this.modalRefferenceTruckOwnerPopUp = _this.modalService.open(_this.uploadTruckOwnerPopUp, { centered: true, windowClass: "modalClassForPopUpTruckOwner" });
                                            _this.modalRefferenceTruckOwnerPopUp.result.then(function (result) {
                                                _this.modalRefferenceTruckOwnerClosePopUp = "Closed with: " + result;
                                            }, function (reason) {
                                                _this.modalRefferenceTruckOwnerClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                                            });
                                        }
                                        else {
                                            //save method call here
                                            _this.saveHireslipDetailsMethod();
                                        }
                                    });
                                }
                                else {
                                    //save method call here
                                    _this.saveHireslipDetailsMethod();
                                }
                            }),
                                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting chkPanInscDtls->setTruckOwnerDeclDetails", "warning"); },
                                function () { return console.log('done'); };
                        }
                        else {
                            $("#panNumber").focus();
                        }
                    });
                }
                /*else end */
            } //if mode_saveUpdateDepart save end && else if mode_saveUpdateDepart Depart start
            else if (mode_saveUpdateDepart != null && mode_saveUpdateDepart == "Depart") {
                if (isRcLicInscResult) {
                    _this.masterService.setTruckOwnerDeclDetails(_this.truckDataDtoCheckPanIns).subscribe(function (response) {
                        console.log(response);
                        if (response == "failure") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "While Getting the result of setTruckOwnerDeclDetails", "error");
                        }
                        else if (response == null) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                                title: "Confirm Upload",
                                text: "Do you want to Upload the Truck Owner Declaration",
                                icon: "info",
                                buttons: ["No", "Yes"]
                            }).then(function (isConfirm) {
                                if (isConfirm) {
                                    _this.modalRefferenceTruckOwnerPopUp = _this.modalService.open(_this.uploadTruckOwnerPopUp, { centered: true, windowClass: "modalClassForPopUpTruckOwner" });
                                    _this.modalRefferenceTruckOwnerPopUp.result.then(function (result) {
                                        _this.modalRefferenceTruckOwnerClosePopUp = "Closed with: " + result;
                                    }, function (reason) {
                                        _this.modalRefferenceTruckOwnerClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                                    });
                                }
                                else {
                                    //depart method call here
                                    _this.setDepartureMtd();
                                }
                            });
                        }
                        else {
                            //depart method call here
                            _this.setDepartureMtd();
                        }
                    }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting chkPanInscDtls->setTruckOwnerDeclDetails", "warning"); },
                        function () { return console.log('done'); };
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "Pan/Insurance is not matching with Truck Master.Please Check Pan/Insurance No", "warning");
                    $("#panNumber").focus();
                }
            }
        }),
            function (error) {
                _this.showSpinnerActionForHireslip = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting chkPanInscDtls->getPanInscDtls", "warning");
            },
            function () { return console.log('done'); };
    };
    /* departure function call start here */
    StocksGroupingComponent.prototype.departureButton = function () {
        var ewayValidationMsg = this.verifyEwayNumber();
        if (ewayValidationMsg != null && ewayValidationMsg != "valid") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", ewayValidationMsg, "warning");
            return false;
        }
        else if ($("#departureTime").val() == null || $("#departureTime").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory", "Departure Time is Mandatory", "warning");
        }
        else {
            if ($("#departureDate").val() != null) {
                //var currentYear = moment($("#departureDate").val()).format('YYYY/MM/DD');
                var currentYear = moment__WEBPACK_IMPORTED_MODULE_21__($("#departureDate").val()).format('YYYY');
                var depYear = currentYear;
                if (depYear == this.firstYearStgOnloadValidate ||
                    depYear == this.secondYearStgOnloadValidate) {
                    this.validateIslastPointDeliveryIdChecked = $("#islastPointDeliveryId").prop('checked');
                    //this.validateDepBtndeliveryPtForMultiple = $("#deliveryPointIdForMultiple").val();
                    if (this.validateIslastPointDeliveryIdChecked == true) {
                        var booleanIsAllowReturn = this.checkMultiPtInvoice();
                        console.log(booleanIsAllowReturn);
                        if (booleanIsAllowReturn) {
                            if (this.invoiceType != null && this.invoiceType == "Dummy") {
                                this.setDepartureMtd();
                            }
                            else {
                                this.getDepartureRcLicInscDtls();
                            }
                        }
                    }
                    else {
                        if (this.invoiceType != null && this.invoiceType == "Dummy") {
                            this.setDepartureMtd();
                        }
                        else {
                            this.getDepartureRcLicInscDtls();
                        }
                    }
                }
            }
        }
    };
    StocksGroupingComponent.prototype.verifyEwayNumber = function () {
        var msg = null;
        if ($("#consolidatedEwayBill").val() == null || $("#consolidatedEwayBill").val() == "" ||
            $("#confirmConsolidatedEwayBill").val() == null ||
            $("#confirmConsolidatedEwayBill").val() == "") {
            msg = "Consolidated Eway Bill and Confirm Consolidated Eway Bill is mandatory";
        }
        else {
            this.validateEwayBill = $("#consolidatedEwayBill").val();
            this.validateEwayBillConsoldateConfirm = $("#confirmConsolidatedEwayBill").val();
            if (this.validateEwayBill != this.validateEwayBillConsoldateConfirm) {
                msg = "Consolidated Eway Bill is not matched with Confirm Consolidated Eway Bill, please verify it!";
            }
            else if (!this.validateEwayBill.match('[0-9]{10}') ||
                !this.validateEwayBillConsoldateConfirm.match('[0-9]{10}')) {
                msg = "Eway Bill should not exceed 10 digit, please verify it!";
            }
            else if (this.userDataDtoReturnSession.ewayNoBlockList != null &&
                this.userDataDtoReturnSession.ewayNoBlockList.length > 0) {
                this.isMatched = false;
                for (var i = 0; i < this.userDataDtoReturnSession.ewayNoBlockList.length; i++) {
                    if (this.validateEwayBill == this.userDataDtoReturnSession.ewayNoBlockList[i]) {
                        msg = "Eway Bill is not valid, please verify it!";
                        this.isMatched = true;
                        break;
                    }
                }
                if (!this.isMatched) {
                    msg = "valid";
                }
            }
            else {
                msg = "valid";
            }
        }
        return msg;
    };
    StocksGroupingComponent.prototype.checkMultiPtInvoice = function () {
        var booleanChkMultiIsAllow = false;
        console.log(this.gridTosetInvoiceNumberList);
        if (this.gridTosetInvoiceNumberList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "For Multiple Pt Delivery Minimum 2 Invoices Required With 1st Pt Delivery Selected", "warning");
            return false;
        }
        else if (this.gridTosetInvoiceNumberList.length == 1) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "Multiple Point Is Not Allowed For Single Invoice", "warning");
        }
        else if (this.gridTosetInvoiceNumberList.length >= 2) {
            booleanChkMultiIsAllow = true;
        }
        return booleanChkMultiIsAllow;
    };
    StocksGroupingComponent.prototype.setDepartureMtd = function () {
        var _this = this;
        this.hireSlipDtoUserValueForDepartureMethod = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoUserValueForDepartureMethod = this.getUsersValue();
        this.stockService.chkHireslipStatus(this.hireSlipDtoUserValueForDepartureMethod).subscribe(function (response) {
            if (response) {
                console.log(response.status);
                _this.truckDataDtoForDepartureMethod = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
                _this.truckDataDtoForDepartureMethod = _this.validateTruckTypeSelectionsOnGurWgt();
                //console.log(this.truckDataDtoForDepartureMethod);
                if (response.status != null && response.status == "Transit") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "Hireslip was already Departed", "warning");
                }
                else if ($("#truckType").val() == null
                    || $("#truckType").val() == "" || $("#truckType").val() == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "Please select Truck Type to proceed!", "warning");
                }
                else if (!_this.truckDataDtoForDepartureMethod.isValid) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "The Truck Type selected does not match with the Total GUR Wt entered, kindly select the appropriate Truck Type.", "warning");
                }
                else {
                    _this.stockService.addHireSlipDetails(_this.hireSlipDtoUserValueForDepartureMethod).subscribe(function (response) {
                        // if (response) {
                        console.log("CHECKC BARCode");
                        console.log(response.barcodeValue);
                        if (response.status == "not persisted") {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "Failure", "error");
                        }
                        else {
                            _this.hireSlipDtoUserValueForDepartureMethodReturn = null;
                            _this.hireSlipDtoUserValueForDepartureMethodReturn = response.barcodeValue;
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                                title: "Trip Departure",
                                text: "Sure U want to launch this trip",
                                icon: "info",
                                buttons: ["No", "Yes"]
                            }).then(function (isConfirm) {
                                if (isConfirm) {
                                    _this.hireSlipDtoUserValueTripDeparture = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
                                    _this.hireSlipDtoUserValueTripDeparture.hireslipnumber = _this.hireSlipDtoUserValueForDepartureMethod.hireslipnumber;
                                    _this.hireSlipDtoUserValueTripDeparture.status = "Transit";
                                    _this.hireSlipDtoUserValueTripDeparture.mode = "scheduled";
                                    _this.hireSlipDtoUserValueTripDeparture.fromstation = _this.hireSlipDtoUserValueForDepartureMethod.fromstation;
                                    ;
                                    _this.hireSlipDtoUserValueTripDeparture.tostation = _this.hireSlipDtoUserValueForDepartureMethod.tostation;
                                    ;
                                    _this.hireSlipDtoUserValueTripDeparture.branch = _this.userDataDtoReturnSession.stationType;
                                    _this.hireSlipDtoUserValueTripDeparture.listOfInvoice = _this.hireSlipDtoUserValueForDepartureMethod.listOfDest;
                                    _this.hireSlipDtoUserValueTripDeparture.companyid = _this.userDataDtoReturnSession.companyId;
                                    _this.stockService.updateHireSlipStatus(_this.hireSlipDtoUserValueTripDeparture).subscribe(function (response) {
                                        if (response) {
                                            console.log(response);
                                            if (_this.hireSlipDtoUserValueForDepartureMethod.isMultiPntDelv &&
                                                _this.hireSlipDtoUserValueForDepartureMethod.listOfInvoice.length > 0) {
                                                for (var i = 0; i < _this.hireSlipDtoUserValueForDepartureMethod.listOfInvoice.length; i++) {
                                                    //Pending Need to Work
                                                    _this.getInvoiceDetails(_this.hireSlipDtoUserValueForDepartureMethod.listOfInvoice[i]);
                                                }
                                            }
                                            else {
                                                _this.generateBarcode(_this.hireSlipDtoUserValueForDepartureMethod.hireslipnumber, _this.hireSlipDtoUserValueForDepartureMethodReturn, _this.hireSlipDtoUserValueForDepartureMethod);
                                            }
                                            // SMS
                                            //if(rightsForSMSHireslip == "rights for the sms binnymillsBinnymills and Konditope"){
                                            if ((_this.hireSlipDtoUserValueForDepartureMethod.fromstation == "BinnymillsBinnymills") &&
                                                (_this.hireSlipDtoUserValueForDepartureMethod.tostation == "Konditope")) {
                                                //sms service here pending
                                                _this.lrDtoForSMS = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
                                                _this.lrDtoForSMS.city = "Chennai";
                                                _this.lrDtoForSMS.companyId = _this.userDataDtoReturnSession.companyId;
                                            }
                                            _this.overAllResetComplete();
                                            _this.stepper.reset();
                                        }
                                    }), function (error) {
                                        return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting updateHireSlipStatus", "warning");
                                    },
                                        function () { return console.log('done'); };
                                }
                            });
                        }
                        // }
                    }), function (error) {
                        return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting adding HireSlipDetails", "warning");
                    },
                        function () { return console.log('done'); };
                }
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Departure Mtd", "warning"); },
            function () { return console.log('setDepartureMtd'); };
    };
    StocksGroupingComponent.prototype.getInvoiceDetails = function (listOfInvoiceHireslipNo) {
        var _this = this;
        this.hireSlipDtoForInvoiceDetails = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForInvoiceDetails.hireslipnumber = listOfInvoiceHireslipNo;
        this.hireSlipDtoForInvoiceDetails.branch = this.userDataDtoReturnSession.office;
        this.hireSlipDtoForInvoiceDetails.companyid = this.userDataDtoReturnSession.companyId;
        this.stockService.getHireSlipDetails(this.hireSlipDtoForInvoiceDetails).subscribe(function (response) {
            console.log(response);
            if (response.size > 0) {
                _this.generateBarcode(listOfInvoiceHireslipNo, response.barcodeValue, response);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Error While HireSlip Details", "warning");
            }
        }),
            function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Invoice Details", "warning"); },
            function () { return console.log('done'); };
    };
    StocksGroupingComponent.prototype.generateBarcode = function (hireslipNo, dtoRetBarcodeValue, hireSlipDtoUserValueForDepartureMethod) {
        var _this = this;
        this.hireSlipDtoBarCode1 = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoBarCode1 = hireSlipDtoUserValueForDepartureMethod;
        this.hireSlipDtoBarCode1.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDtoBarCode1.hireslipnumber = hireslipNo;
        this.hireSlipDtoBarCode1.invoiceNumber = hireslipNo;
        this.hireSlipDtoBarCode1.companyImgUrl = "";
        this.hireSlipDtoBarCode1.barcodeImgUrl = "";
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Invoice Report",
            text: "Sure U Want to Print the Invoice Details for this Trip",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then(function (isConfirm) {
            if (isConfirm) {
                _this.getLrDetails(hireslipNo, _this.hireSlipDtoBarCode1, dtoRetBarcodeValue);
            }
            else {
                _this.printHireSlip(hireslipNo, hireSlipDtoUserValueForDepartureMethod, dtoRetBarcodeValue);
                //printHireSlip(hireSlipNum,hireSlipDto,listOfShortageLrs);
            }
        });
    };
    StocksGroupingComponent.prototype.getLrDetails = function (invoiceNUmber, hireslipBarCode_1, barcodeValue) {
        var _this = this;
        this.lrsDetailsMhdForPrint = new Array();
        this.lrDtoForLrDetailsMhdPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForLrDetailsMhd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForLrDetailsMhd = hireslipBarCode_1;
        this.lrsDetailsMhdForPrint = this.hireSlipDtoForCreateHireslipLocalStorage.list;
        this.lrDtoForLrDetailsMhdPrint.list = this.lrsDetailsMhdForPrint;
        // Hard Code Pls remove after solved
        //this.lrDtoForLrDetailsMhdPrint.invoiceNumber = 'NP/CLT/1920/30';
        this.lrDtoForLrDetailsMhdPrint.invoiceNumber = this.hireSlipDtoForLrDetailsMhd.invoiceNumber;
        this.lrDtoForLrDetailsMhdPrint.companyId = this.userDataDtoReturnSession.companyId;
        this.hireSlipDtoForLrDetailsMhd.suppliername = this.suppName;
        this.hireSlipDtoForLrDetailsMhd.gurWeight = this.gurWgt;
        this.hireSlipDtoForLrDetailsMhd.goodsType = this.goodsType;
        this.stockService.getBookingInvoiceDetails(this.lrDtoForLrDetailsMhdPrint).subscribe(function (response) {
            console.log(response);
            if (_this.hireSlipDtoForCreateHireslipLocalStorage.invoiceType == "Dummy") {
                alert("Dummy Print Method Pending");
            }
            else {
                _this.bookingInvoiceNewPrint(_this.hireSlipDtoForLrDetailsMhd, _this.listOfShortageLrs, response);
            }
            _this.printHireSlip(invoiceNUmber, _this.hireSlipDtoForLrDetailsMhd, barcodeValue);
        }),
            function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "Error While Getting LR Details", "error"); },
            function () { return console.log('done'); };
    };
    StocksGroupingComponent.prototype.printHireSlip = function (invoiceNumber, hireslipDtoUserValuesLrDetailsMhd, barcodeValue) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Print HireSlip",
            text: "Track No: " + hireslipDtoUserValuesLrDetailsMhd.hireslipNumber + " Do U Want to Print this HireSlip",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then(function (isConfirm) {
            if (isConfirm) {
                _this.printHireslipMethodForLRDetailsMhd(hireslipDtoUserValuesLrDetailsMhd, barcodeValue);
                //this.hireslipPrintMethod(hireSlipDtoBarCode,listOfShortageLrs,mode);
            }
        });
    };
    StocksGroupingComponent.prototype.printHireslipMethodForLRDetailsMhd = function (hireslipDto, barcodeValue) {
        var _this = this;
        this.hireSlipDtoForPrintHireslip = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForPrintHireslip = hireslipDto;
        this.hireSlipDtoForPrintHireslip.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDtoForPrintHireslip.fromstation = this.userDataDtoReturnSession.office;
        this.masterReadService.getTimeService(this.hireSlipDtoForPrintHireslip).subscribe(function (response) {
            console.log(response);
            _this.hireslipDtoForPrintHireslipReturn = response;
            console.log(_this.hireSlipDtoForPrintHireslip.tostation);
            _this.stockService.getGodownsDetails(_this.hireSlipDtoForPrintHireslip).subscribe(function (response) {
                console.log(response);
                _this.lrDtoForPrintHireslipReturn = response;
                var address = _this.lrDtoForPrintHireslipReturn.column2;
                if (address == null || _this.lrDtoForPrintHireslipReturn.size == 0) {
                    address = "";
                }
                _this.stockService.getLRShortageDtls(_this.hireSlipDtoForPrintHireslip).subscribe(function (response) {
                    console.log(response);
                    var commomParameters = [address, _this.printMode, barcodeValue];
                    localStorage.clear();
                    localStorage.setItem('hireslipDetailsPrintForHireslip_Dto', JSON.stringify(_this.hireSlipDtoForPrintHireslip));
                    localStorage.setItem('hireslipDetailsPrintForHireSlipDto', JSON.stringify(_this.lrDtoForPrintHireslipReturn));
                    localStorage.setItem('hireslipDetailsPrintLRShortgeForHireslip_Dto', JSON.stringify(response));
                    localStorage.setItem('hireslipDetailsPrintForLRShortgeList', JSON.stringify(_this.listOfShortageLrs));
                    localStorage.setItem('hireslipDetailsPrintForCommonParameters', JSON.stringify(commomParameters));
                    _this.viewHireslipDetailsPrint = true;
                    window.addEventListener('afterprint', function (onclick) {
                        if (_this.viewHireslipDetailsPrint) {
                            _this.viewHireslipDetailsPrint = false;
                        }
                    });
                }),
                    function (error) { return console.log(error.json()); },
                    function () { return console.log('printHireslipMethodForLRDetailsMhd->getLRShortageDtls'); };
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('printHireslipMethodForLRDetailsMhd->getGodownsDetails'); };
        }),
            function (error) { return console.log(error.json()); },
            function () { return console.log('printHireslipMethodForLRDetailsMhd ->getTimeService'); };
    };
    StocksGroupingComponent.prototype.getDepartureRcLicInscDtls = function () {
        var _this = this;
        this.truckDataDtoDepartRCLicPan = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        console.log(this.hireSlipDtoForCreateHireslipLocalStorage);
        this.truckDataDtoDepartRCLicPan.truckNumber = this.hireSlipDtoForCreateHireslipLocalStorage.vehicleNumber;
        this.truckDataDtoDepartRCLicPan.driverId = this.hireSlipDtoForCreateHireslipLocalStorage.driverId;
        this.truckDataDtoDepartRCLicPan.companyId = this.userDataDtoReturnSession.companyId;
        this.stockService.getRcLicInscDtls(this.truckDataDtoDepartRCLicPan).subscribe(function (response) {
            console.log(response);
            if (response) {
                _this.chkPanInscDtls("Depart");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Mandatory Docs",
                    text: "RC/Pan/License Docs are not uploaded.Do You Want To Update",
                    icon: "warning",
                    buttons: ["No", "Yes"]
                }).then(function (isConfirm) {
                    var _this = this;
                    if (isConfirm) {
                        this.modalRefferenceTruckDetailOfRCLicPanPopUp = this.modalService.open(this.uploadRCInsLicForTruck, { centered: true, windowClass: "modalClassForPopUpTruckOwner" });
                        this.modalRefferenceTruckDetailOfRCLicPanPopUp.result.then(function (result) {
                            _this.modalRefferenceTruckDetailOfRCLicPanClosePopUp = "Closed with: " + result;
                        }, function (reason) {
                            _this.modalRefferenceTruckDetailOfRCLicPanClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                        });
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                            title: "Alert",
                            text: "Pan/Insurance is not matching with Truck Master.Sure You Want To Save?",
                            icon: "warning",
                            buttons: ["No", "Yes"]
                        }).then(function (isConfirm) {
                            if (isConfirm) {
                                _this.saveHireslipDetailsMethod();
                            }
                            else {
                                $("#panNumber").focus();
                            }
                        });
                    }
                });
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Error",
            text: "Server Error While Getting getDepartureRcLicInscDtls",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    /* departure function call end here */
    StocksGroupingComponent.prototype.printInvoiceButton = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Confirm Print",
            text: "Sure you want to Print the Invoice",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then(function (isConfirm) {
            if (isConfirm) {
                _this.hireSlipDtoUserValueForPrintInvoiceBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
                _this.hireSlipDtoUserValueForPrintInvoiceBtn = _this.getUsersValue();
                _this.printBookingInvoice(_this.hireSlipDtoUserValueForPrintInvoiceBtn);
            }
        });
    };
    StocksGroupingComponent.prototype.printBookingInvoice = function (hireSlipDtoForInvoicePrintBtn) {
        var _this = this;
        this.lrsPrintInvoiceBtn = new Array();
        this.lrDtoPrintInvoiceBtn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForBookingInvoicePrintMhd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForBookingInvoicePrintMhd = hireSlipDtoForInvoicePrintBtn;
        this.lrsPrintInvoiceBtn = this.hireSlipDtoForCreateHireslipLocalStorage.list;
        this.lrDtoPrintInvoiceBtn.list = this.lrsPrintInvoiceBtn;
        // Hard Code Pls remove after solved
        //this.lrDtoPrintInvoiceBtn.invoiceNumber = 'NP/CLT/1920/30';
        this.lrDtoPrintInvoiceBtn.invoiceNumber = this.hireSlipDtoForBookingInvoicePrintMhd.invoiceNumber;
        this.lrDtoPrintInvoiceBtn.companyId = this.userDataDtoReturnSession.companyId;
        this.validateKantaWgtBookingInvoice = null;
        this.validateKantaWgtBookingInvoice = $("#kantaWeight").val() == null ? 0.0 : $("#kantaWeight").val();
        this.hireSlipDtoForBookingInvoicePrintMhd.kantaWeight = this.validateKantaWgtBookingInvoice;
        this.hireSlipDtoForBookingInvoicePrintMhd.suppliername = this.suppName;
        this.hireSlipDtoForBookingInvoicePrintMhd.gurWeight = this.gurWgt;
        this.hireSlipDtoForBookingInvoicePrintMhd.goodsType = this.goodsType;
        this.stockService.getBookingInvoiceDetails(this.lrDtoPrintInvoiceBtn).subscribe(function (response) {
            console.log(response);
            if (_this.hireSlipDtoForCreateHireslipLocalStorage.invoiceType == "Dummy") {
                alert("Dummy Print Method Pending");
            }
            else {
                _this.bookingInvoiceNewPrint_InHireslip(_this.hireSlipDtoForBookingInvoicePrintMhd, _this.listOfShortageLrs, response, _this.gurWgt, _this.suppName, _this.goodsType);
            }
        }),
            function (error) { return console.log(error.json()); },
            function () { return console.log('done'); };
    };
    StocksGroupingComponent.prototype.bookingInvoiceNewPrint_InHireslip = function (hireSlipDtoForBookingInvoicePrint, invoiceListOfLrShortage, invoiceForLrDto, gurWgt, supplierName, goodsTtpe) {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('invoiceDetailsForBookingHireslipDtoPrint', JSON.stringify(hireSlipDtoForBookingInvoicePrint));
        localStorage.setItem('invoiceDetailsForBookingListOfLrsShortPrint', JSON.stringify(invoiceListOfLrShortage));
        localStorage.setItem('invoiceDetailsForBookingLrDtoPrint', JSON.stringify(invoiceForLrDto));
        this.viewInvoiceDetailsPrint = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewInvoiceDetailsPrint) {
                _this.viewInvoiceDetailsPrint = false;
                _this.listOfShortageLrs = [];
                localStorage.clear();
                //this.overAllResetComplete();
                //this.stepper.selectedIndex = 0;
            }
        });
    };
    StocksGroupingComponent.prototype.printHireslipButton = function () {
        this.hireSlipDtoUserValueForPrintHireslipBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoUserValueForPrintHireslipBtn = this.getUsersValue();
        //this.getBarcode($("#hireslipNumber").val(), this.hireSlipDtoUserValueForPrintHireslipBtn);
        //Need to Open This Comment below status
        if (this.hireSlipDtoForCreateHireslipLocalStorage.status == null ||
            this.hireSlipDtoForCreateHireslipLocalStorage.status == "Scheduled") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "Not allow to Print the Hireslip before Departure", "warning");
            return false;
        }
        else {
            this.getBarcode($("#hireslipNumber").val(), this.hireSlipDtoUserValueForPrintHireslipBtn);
        }
        /*  this.viewHireslipDetailsPrint = true;
          window.addEventListener('afterprint', (onclick) => {
              if (this.viewHireslipDetailsPrint) {
                  this.viewHireslipDetailsPrint = false;
                  //this.listOfShortageLrs =[];
              }
          });*/
    };
    StocksGroupingComponent.prototype.getBarcode = function (hireSlipNum, hireSlipDto) {
        //alert("BArcode");
        this.hireSlipDtoBarCode = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoBarCode = hireSlipDto;
        this.hireSlipDtoBarCode.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDtoBarCode.hireslipnumber = hireSlipNum;
        /*this.tripCreationHireslipGenerationScreen.generateBarcode( this.hireSlipDtoBarCode).subscribe(
            ( response ) => {
                console.log("HAI");
                console.log(response);
                this.hireSlipDtoBarCode.invoiceNumber=hireSlipNum;
                this.hireSlipDtoBarCode.companyImgUrl="";
                this.hireSlipDtoBarCode.barcodeImgUrl="";
                this.hireSlip(this.hireSlipDtoBarCode,this.listOfShortageLrs);*/
        /* if(response !=null){
             hireSlipDto.invoiceNumber=hireSlipNum;
             hireSlipDto.companyImgUrl="";
             hireSlipDto.BarcodeImgUrl="";
             this.hireSlip(hireSlipDto,this.listOfShortageLrs);
         }else{
             swal("Alert","Failed to Generate a bar code","warning");
         }*/
        /*  }),
          ( error ) => console.log( error.json(),"HI" ),
          () => console.log( 'done' );*/
        this.hireSlipDtoBarCode.invoiceNumber = hireSlipNum;
        this.hireSlipDtoBarCode.companyImgUrl = "";
        this.hireSlipDtoBarCode.barcodeImgUrl = "";
        this.hireSlip(this.hireSlipDtoBarCode);
    };
    StocksGroupingComponent.prototype.hireSlip = function (hireSlipDtoBarCode) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Print HireSlip",
            text: "Track No: " + hireSlipDtoBarCode.hireslipNumber + " Do U Want to Print this HireSlip",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then(function (isConfirm) {
            if (isConfirm) {
                _this.hireslipPrintMethod(hireSlipDtoBarCode);
            }
        });
    };
    StocksGroupingComponent.prototype.hireslipPrintMethod = function (hireSlipDtoBarCode) {
        var _this = this;
        this.hireSlipDtoForTimeDuratioMethod = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForTimeDuratioMethod = hireSlipDtoBarCode;
        this.hireSlipDtoForTimeDuratioMethod.companyid = this.userDataDtoReturnSession.companyId;
        // this.hireSlipDtoForTimeDuratioMethod.fromstation = this.userDataDtoReturnSession.office;
        this.masterReadService.getTimeService(this.hireSlipDtoForTimeDuratioMethod).subscribe(function (response) {
            console.log(response);
            _this.hireslipDtoForTimeDuratioReturn = response;
            console.log(_this.hireSlipDtoForTimeDuratioMethod.tostation);
            _this.stockService.getGodownsDetails(_this.hireSlipDtoForTimeDuratioMethod).subscribe(function (response) {
                console.log(response);
                _this.lrDtoForTimeDuratioReturn = response;
                var address = _this.lrDtoForTimeDuratioReturn.column2;
                if (address == null || _this.lrDtoForTimeDuratioReturn.length() == 0) {
                    address = "";
                }
                _this.stockService.getLRShortageDtls(_this.hireSlipDtoForTimeDuratioMethod).subscribe(function (response) {
                    console.log(response);
                    localStorage.clear();
                    //this.hireSlipDtoLocalStorage = JSON.parse(localStorage.getItem('createHireSlipLocalStorage'));
                    //var mode =this.hireSlipDtoLocalStorage.mode;
                    var commomParameters = [address, _this.printMode];
                    localStorage.setItem('hireslipDetailsPrintForHireslip_Dto', JSON.stringify(_this.hireSlipDtoForTimeDuratioMethod));
                    localStorage.setItem('hireslipDetailsPrintForHireSlipDto', JSON.stringify(_this.hireslipDtoForTimeDuratioReturn));
                    localStorage.setItem('hireslipDetailsPrintLRShortgeForHireslip_Dto', JSON.stringify(response));
                    localStorage.setItem('hireslipDetailsPrintForLRShortgeList', JSON.stringify(_this.listOfShortageLrs));
                    localStorage.setItem('hireslipDetailsPrintForCommonParameters', JSON.stringify(commomParameters));
                    _this.viewHireslipDetailsPrint = true;
                    window.addEventListener('afterprint', function (onclick) {
                        if (_this.viewHireslipDetailsPrint) {
                            _this.viewHireslipDetailsPrint = false;
                            //this.listOfShortageLrs =[];
                        }
                    });
                }), function (error) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Time Service", "warning");
                }, function () { return console.log('getLRShortageDtls'); };
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Godowns Details Service", "warning");
            }, function () { return console.log('getGodownsDetails'); };
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting LR Shortage Detaills", "warning");
        },
            function () { return console.log('getTimeDurationDetails'); };
    };
    /* Truck Owner File Upload Code Start Here */
    StocksGroupingComponent.prototype.onFileChangedTruckOwner = function (event) {
        this.selectedFileTruckOwner = event.target.files[0];
        console.log(this.selectedFileTruckOwner);
    };
    StocksGroupingComponent.prototype.uploadFileOfTruckOwnerDetails = function () {
        var _this = this;
        this.isUploadedTruckOwner = false;
        if ($("#truckOwnerFileUpload").val() != null && $("#truckOwnerFileUpload").val() != "") {
            if ((this.selectedFileTruckOwner.type != null &&
                (this.selectedFileTruckOwner.type == "image/jpeg" ||
                    this.selectedFileTruckOwner.type == "image/jpg" ||
                    this.selectedFileTruckOwner.type == "image/png"))) {
                var splitTypeTruckOwner = this.selectedFileTruckOwner.type.split("/");
                var fileNameDecl = $("#panNumber").val() + "_" + $("#lorryNumber").val();
                var commonListTruckOwner = "vehicledriverdocs && truckownerdeclaration && ASRAR && " + splitTypeTruckOwner[1] + "&&" + fileNameDecl + "";
                var formData = new FormData();
                formData.append(commonListTruckOwner, commonListTruckOwner);
                formData.append('myfileTruckOwner', this.selectedFileTruckOwner, this.selectedFileTruckOwner.name);
                this.masterReadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        //console.log(response[0]);
                        if (response[0] != "Error") {
                            _this.isUploadedTruckOwner = true;
                            //String[] declFileParts = fileNameDecl.split("_");
                            var declFileParts = fileNameDecl.split("_");
                            _this.truckDataDtoTruckOwner = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
                            _this.truckDataDtoTruckOwner.panNo = declFileParts[0];
                            _this.truckDataDtoTruckOwner.truckNumber = declFileParts[1];
                            _this.truckDataDtoTruckOwner.mode = "particularTruck";
                            _this.truckDataDtoTruckOwner.companyId = _this.userDataDtoReturnSession.companyId;
                            _this.truckDataDtoTruckOwner.financialYear = _this.userDataDtoReturnSession.financialYearSplit;
                            if (_this.isUploadedTruckOwner) {
                                if ($("#truckOwnerFileUpload").val() != null && $("#truckOwnerFileUpload").val() != "") {
                                    var constImgUrlTruckOwner = "http://vehicledriverdocs.s3.amazonaws.com/truckownerdeclaration/" + fileNameDecl + "_" + $("#truckOwnerFileUpload").val() + "";
                                    _this.truckDataDtoTruckOwner.imgURLPan = constImgUrlTruckOwner;
                                }
                                /* here starting masterReadService service */
                                _this.masterReadService.setTruckOwnerDetails(_this.truckDataDtoTruckOwner).subscribe(function (response) {
                                    if (response) {
                                        //console.log(this.modeMain);
                                        if (_this.modeMain != null && _this.modeMain == "Save") {
                                            _this.modalRefferenceTruckOwnerPopUp.close();
                                            //pending method here need to call
                                            _this.saveHireslipDetailsMethod();
                                        }
                                        else if (_this.modeMain != null && _this.modeMain == "Depart") {
                                            _this.modalRefferenceTruckOwnerPopUp.close();
                                            _this.setDepartureMtd();
                                        }
                                    }
                                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("ERROR", "Server Error While setTruckOwnerDetails", "error"); },
                                    function () { return console.log('done'); };
                                /* here ending a masterReadService  service */
                            }
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("ERROR", "Correct the Truck Owner File and Upload Again", "error");
                        }
                    }
                }), function (error) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Uploading a Truck Owner File", "warning");
                }, function () { return console.log('done'); };
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Please Browse the Image To Upload", "warning");
        }
    };
    /* Truck Owner File Upload Code Start End */
    /* Drive Of RC Lic Ins File Upload Code Start Here */
    StocksGroupingComponent.prototype.testingPopUp = function (uploadRCInsLicForTruck) {
        var _this = this;
        this.modalRefferenceTruckDetailOfRCInsLicPopUp = this.modalService.open(uploadRCInsLicForTruck, { centered: true, windowClass: "modalClassForPopUpTruckOwner" });
        this.modalRefferenceTruckDetailOfRCInsLicPopUp.result.then(function (result) {
            _this.modalRefferenceTruckDetailOfRCInsLicClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceTruckDetailOfRCInsLicClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StocksGroupingComponent.prototype.onFileChangedTruckDetailPopUpRC = function (event) {
        this.selectedFileTruckDetailsForRC = event.target.files[0];
        console.log(this.selectedFileTruckDetailsForRC);
    };
    StocksGroupingComponent.prototype.onFileChangedTruckDetailPopUpLic = function (event) {
        this.selectedFileTruckDetailsForInsurance = event.target.files[0];
        console.log(this.selectedFileTruckDetailsForInsurance);
    };
    StocksGroupingComponent.prototype.onFileChangedTruckDetailPopUpLicense = function (event) {
        this.selectedFileTruckDetailsForLicense = event.target.files[0];
        console.log(this.selectedFileTruckDetailsForLicense);
    };
    StocksGroupingComponent.prototype.uploadFileForTruckRCInsLicInPopUpBtnUpload = function () {
        var _this = this;
        //RC
        if ($("#popUpTruckRcFileUpload").val() != null && $("#popUpTruckRcFileUpload").val() != "") {
            if ((this.selectedFileTruckDetailsForRC.type != null &&
                (this.selectedFileTruckDetailsForRC.type == "image/jpeg" ||
                    this.selectedFileTruckDetailsForRC.type == "image/jpg" ||
                    this.selectedFileTruckDetailsForRC.type == "image/png"))) {
                var splitTypePopUpRc = this.selectedFileTruckDetailsForRC.type.split("/");
                var commonListRcPopUp = "vehicledriverdocs && documents && ASRAR && " + splitTypePopUpRc[1] + "&&" + $("#lorryNumber").val() + "";
                var formData = new FormData();
                formData.append(commonListRcPopUp, commonListRcPopUp);
                formData.append('myfileRC', this.selectedFileTruckDetailsForRC, this.selectedFileTruckDetailsForRC.name);
                this.masterReadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        if (response[0] != "Error") {
                            _this.isUploadedPopUp = true;
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("ERROR", "Correct the File and Upload Again", "warning");
                        }
                    }
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Uploading a File", "error"); },
                    function () { return console.log('done'); };
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Only jpg & png image format are allowed to upload for RC File", "warning");
            }
        }
        //Insurance
        if ($("#popUpTruckInsuranceFileUpload").val() != null && $("#popUpTruckInsuranceFileUpload").val() != "") {
            if ((this.selectedFileTruckDetailsForInsurance.type != null &&
                (this.selectedFileTruckDetailsForInsurance.type == "image/jpeg" ||
                    this.selectedFileTruckDetailsForInsurance.type == "image/jpg" ||
                    this.selectedFileTruckDetailsForInsurance.type == "image/png"))) {
                var splitTypeInsurance = this.selectedFileTruckDetailsForInsurance.type.split("/");
                var commonListInsurancePopUp = "vehicledriverdocs && documents && ASRAR && " + splitTypeInsurance[1] + "&&" + $("#lorryNumber").val() + "";
                var formData = new FormData();
                formData.append(commonListInsurancePopUp, commonListInsurancePopUp);
                formData.append('myfileInsurance', this.selectedFileTruckDetailsForInsurance, this.selectedFileTruckDetailsForInsurance.name);
                this.masterReadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        if (response[0] != "Error") {
                            _this.isUploadedPopUp = true;
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("ERROR", "Correct the File and Upload Again", "warning");
                        }
                    }
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Uploading a File", "error"); },
                    function () { return console.log('done'); };
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Only jpg & png image format are allowed to upload for Insurance file", "warning");
            }
        }
        //License
        if ($("#popUpTruckLicenseFileUpload").val() != null && $("#popUpTruckLicenseFileUpload").val() != "") {
            if ((this.selectedFileTruckDetailsForLicense.type != null &&
                (this.selectedFileTruckDetailsForLicense.type == "image/jpeg" ||
                    this.selectedFileTruckDetailsForLicense.type == "image/jpg" ||
                    this.selectedFileTruckDetailsForLicense.type == "image/png"))) {
                var splitTypeLicensePopUp = this.selectedFileTruckDetailsForLicense.type.split("/");
                var commonListLicensePopUp = "vehicledriverdocs && documents && ASRAR && " + splitTypeLicensePopUp[1] + "&&" + $("#lorryNumber").val() + "";
                var formData = new FormData();
                formData.append(commonListLicensePopUp, commonListLicensePopUp);
                formData.append('myfileLic', this.selectedFileTruckDetailsForLicense, this.selectedFileTruckDetailsForLicense.name);
                this.masterReadService.saveRCInsurancePanForTruckMasterFileUpload(formData).subscribe(function (response) {
                    if (response) {
                        if (response[0] != "Error") {
                            _this.isUploadedPopUp = true;
                            _this.truckDataDtoFileUploadRcInsLic = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
                            _this.validatePopUpFileUploadTruckNumber = $("#lorryNumber").val();
                            _this.truckDataDtoFileUploadRcInsLic.truckNumber = _this.validatePopUpFileUploadTruckNumber;
                            //this.hireSlipDtoForCreateHireslipLocalStorage = JSON.parse(localStorage.getItem('createHireSlipLocalStorage'));
                            _this.truckDataDtoFileUploadRcInsLic.driverId = _this.hireSlipDtoForCreateHireslipLocalStorage.driverId;
                            //truckDataDto.setDriverId(dto.getDriverId());
                            _this.truckDataDtoFileUploadRcInsLic.companyId = _this.userDataDtoReturnSession.companyId;
                            if (_this.isUploadedPopUp) {
                                if ($("#popUpTruckRcFileUpload").val() != null && $("#popUpTruckRcFileUpload").val() != "") {
                                    var constImgUrlRcPopUp = "http://vehicledriverdocs.s3.amazonaws.com/documents/" + $("#lorryNumber").val() + "_" + _this.selectedFileTruckDetailsForRC.name + "";
                                    _this.truckDataDtoFileUploadRcInsLic.imgURLRc = constImgUrlRcPopUp;
                                }
                                if ($("#popUpTruckInsuranceFileUpload").val() != null && $("#popUpTruckInsuranceFileUpload").val() != "") {
                                    var constImgUrlInsuransePopUp = "http://vehicledriverdocs.s3.amazonaws.com/documents/" + $("#lorryNumber").val() + "_" + _this.selectedFileTruckDetailsForInsurance.name + "";
                                    _this.truckDataDtoFileUploadRcInsLic.imgURLIns = constImgUrlInsuransePopUp;
                                }
                                if ($("#popUpTruckLicenseFileUpload").val() != null && $("#popUpTruckLicenseFileUpload").val() != "") {
                                    var constImgUrlLicensePopUp = "http://vehicledriverdocs.s3.amazonaws.com/documents/" + $("#lorryNumber").val() + "_" + _this.selectedFileTruckDetailsForLicense.name + "";
                                    _this.truckDataDtoFileUploadRcInsLic.imgURLLic = constImgUrlLicensePopUp;
                                }
                            }
                            _this.stockService.setRcLicInscDtls(_this.truckDataDtoFileUploadRcInsLic).subscribe(function (response) {
                                if (response) {
                                    if (response) {
                                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "Update the RC/Lic/Ins successfully", "success");
                                        _this.modalRefferenceTruckDetailOfRCInsLicPopUp.close();
                                    }
                                    else {
                                        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "Failed to Update the RC/Lic/Ins", "warning");
                                        //this.modalRefferenceTruckDetailOfRCInsLicPopUp.close();
                                    }
                                }
                            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While updateing a setRcLicInscDtls", "error"); },
                                function () { return console.log('done'); };
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("ERROR", "Correct the File and Upload Again", "error");
                        }
                    }
                }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Uploading a License File", "error"); },
                    function () { return console.log('done'); };
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Only jpg & png image format are allowed to upload for License file", "warning");
            }
        }
    };
    StocksGroupingComponent.prototype.printInvoiceAlone = function (hireslipDto, hireSlipNum) {
        var _this = this;
        this.hireSlipDtoForPrintInvoiceAlone = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForPrintInvoiceAlone.hireslipnumber = hireSlipNum;
        this.hireSlipDtoForPrintInvoiceAlone.invoiceNumber = hireSlipNum;
        this.hireSlipDtoForPrintInvoiceAlone.companyImgUrl = "";
        this.hireSlipDtoForPrintInvoiceAlone.barcodeImgUrl = "";
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Invoice Report",
            text: "Sure U Want to Print the Invoice Detials for this Trip",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then(function (isConfirm) {
            if (isConfirm) {
                _this.getLrDetailsForInvPrintAlone(hireSlipNum, _this.hireSlipDtoForPrintInvoiceAlone);
            }
            else {
                //this.overAllResetComplete();
                //this.stepper.selectedIndex = 0;
            }
        });
    };
    StocksGroupingComponent.prototype.getLrDetailsForInvPrintAlone = function (invoiceNumber, hireslipDto) {
        var _this = this;
        this.invPrintAloneForLrs = [];
        this.invPrintAloneForLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.kantaWeight = $("#kantaWeight").val();
        this.invPrintAloneForLrs = this.hireSlipDtoForCreateHireslipLocalStorage.list;
        this.invPrintAloneForLRDto.list = this.invPrintAloneForLrs;
        this.invPrintAloneForLRDto.invoiceNumber = invoiceNumber;
        this.invPrintAloneForLRDto.kantaWeight = this.kantaWeight == null ? 0 : this.kantaWeight;
        this.showSpinnerActionForHireslip = true;
        this.stockService.getBookingInvoiceDetails(this.lrDtoPrintInvoiceBtn).subscribe(function (response) {
            _this.showSpinnerActionForHireslip = false;
            console.log(response);
            if (_this.hireSlipDtoForCreateHireslipLocalStorage.invoiceType == "Dummy") {
                alert("Dummy Print  Pending");
            }
            else {
                _this.bookingInvoiceNewPrint_InHireslip(_this.hireSlipDtoForBookingInvoicePrintMhd, _this.listOfShortageLrs, response, _this.gurWgt, _this.suppName, _this.goodsType);
            }
        }),
            function (error) {
                _this.showSpinnerActionForHireslip = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Booking Invoice Details", "warning");
            },
            function () { return console.log('done'); };
    };
    /* Drive Of RC Lic Ins File Upload Code End Here */
    /* ftTrackingFlow Start */
    StocksGroupingComponent.prototype.ftTrackingFlow = function () {
        var _this = this;
        this.hireSlipDtoForFtTrackingUserValue = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForFtTrackingUserValue = this.getUsersValue();
        if (this.isFTTripReq &&
            this.hireSlipDtoForFtTrackingUserValue.trackingFTTripId == null) {
            this.showSpinnerActionForHireslip = true;
            this.stockService.trackingIntgTripFT(this.hireSlipDtoForFtTrackingUserValue).subscribe(function (response) {
                _this.showSpinnerActionForHireslip = false;
                console.log(response);
                if (response.trackingFTStatus) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Success", "Tracking integration initiated successfully, to complete the Consent process," +
                        response.trackingCarrierMsg + ".", "success");
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", "Tracking Integration failed, please try again or contact Admin", "warning");
                }
            }),
                function (error) {
                    _this.showSpinnerActionForHireslip = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Tracking Integration TripFT,please try again or contact Admin", "warning");
                }, function () { return console.log('done'); };
        }
        else if (this.isFTTripReq &&
            this.hireSlipDtoForFtTrackingUserValue.trackingFTTripId > 0 &&
            this.driverNumberChangeTemp != null &&
            !this.hireSlipDtoForFtTrackingUserValue.driverMobileNumber == this.driverNumberChangeTemp) {
            this.showSpinnerActionForHireslip = true;
            this.stockService.trackingIntgTripFTUpdate(this.hireSlipDtoForFtTrackingUserValue).subscribe(function (response) {
                _this.showSpinnerActionForHireslip = false;
                console.log(response);
                if (response.trackingFTStatus) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Success", "Driver number updated successfully and integrated with the Trip, to complete the Consent process," +
                        response.trackingCarrierMsg + ".", "success");
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", "Failed to update the Driver number with Tracking, please try again or contact Admin", "warning");
                }
            }),
                function (error) {
                    _this.showSpinnerActionForHireslip = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Failed to update the Driver number with Tracking, please try again or contact Admin", "warning");
                }, function () { return console.log('done'); };
        }
    };
    /* ftTrackingFlow End */
    StocksGroupingComponent.prototype.resetFeildHireslip = function () {
        localStorage.clear();
        if (this.userDataDtoReturnSession.officeType != null &&
            this.userDataDtoReturnSession.officeType == "Booking Office") {
            this.invoiceType = "Main";
            this.isMainInvoice = true;
            this.isBookingStation = true;
            //hpLorry.setVisible(true);
        }
        else {
            this.isMainInvoice = false;
            this.invoiceType = "Dummy";
            //hpLorry.setVisible(false);
        }
        this.financialYearOnloadValidate = this.userDataDtoReturnSession.financialYear;
        this.firstYearStgOnloadValidate = this.financialYearOnloadValidate.split("-")[0];
        this.secondYearStgOnloadValidate = this.financialYearOnloadValidate.split("-")[1];
        this.printMode = null;
        this.modeMain = null;
        this.departureButtonHideShow = false;
        this.hideShowIsLastPointDelivery = false;
        this.hideShowTwoPointDoorDelivery = false;
        this.hideAndShowInputFields = true;
        this.hideAndShowInputFieldsOne = true;
        this.hideAndShowPrintInvoiceBtn = false;
        this.hideAndShowPrintHireslipBtn = false;
        this.hideAndShowInvSummPrintBtn = false;
        this.validateDeliveryPtSingleChecked = false;
        this.validateDeliveryPtMultipleChecked = false;
        this.validateIslastPointDeliveryIdChecked = false;
        this.isFTTripReq = false;
        //print
        this.viewHireslipDetailsPrint = false;
        this.isMatched = false;
        /* Hash Map */
        this.hashmapEwayBill = new Map();
        /*Single Dto */
        this.truckDataDtoLocalStorageTruckMaster = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.hireSlipDtoForShortAndExtra = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoGoodsTypes = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        /* save & depart Single dto */
        this.hireSlipDtoUserValue = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoSaveHireslip = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.chkStatusHireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.truckDataDtoValidateTruckType = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.rcLicInscTruckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataDtoDepartRCLicPan = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.truckDataDtoCheckPanIns = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.hireSlipDtoForPrintInvoiceAlone = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        //depart
        this.hireSlipDtoUserValueForDepartureMethod = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.truckDataDtoForDepartureMethod = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.hireSlipDtoUserValueTripDeparture = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.lrDtoForSMS = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForInvoiceDetails = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoBarCode1 = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.lrDtoForLrDetailsMhdPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForLrDetailsMhd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForPrintHireslip = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireslipDtoForPrintHireslipReturn = null;
        this.lrDtoForPrintHireslipReturn = null;
        this.hireSlipDtoUserValueForPrintInvoiceBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.lrsPrintInvoiceBtn = [];
        this.lrDtoPrintInvoiceBtn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.hireSlipDtoForBookingInvoicePrintMhd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.validateKantaWgtBookingInvoice = null;
        this.hireSlipDtoUserValueForPrintHireslipBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoBarCode = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoForTimeDuratioMethod = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.lrDtoForTimeDuratioReturn = null;
        this.hireslipDtoForTimeDuratioReturn = null;
        /*listDto */
        //pop up
        this.localStorageLorryTruckNo = null;
        this.invoiceNumberSetOnLoad = null;
        this.hireslipNumberSetOnLoad = null;
        this.invoiceDateSetOnLoad = null;
        this.sourceSetOnLoad = null;
        this.destinationSetOnLoad = null;
        this.numberOfLrsSetOnLoad = null;
        this.numberOfArticlesSetOnLoad = null;
        this.guaranteeWgtSetOnLoad = null;
        this.gurWeightTotalSetOnload = null;
        this.kantaWeightSetOnLoad = null;
        this.loadedBySetOnLoad = null;
        //Vehicle details
        this.lorryNumberSetOnLoad = null;
        this.lorryOwnerSetOnLoad = null;
        this.truckLengthSetOnLoad = null;
        this.contactPersonSetOnLoad = null;
        this.addressSetOnLoad = null;
        this.truckDriverNameSetOnLoad = null;
        this.driverLicNoSetOnLoad = null;
        this.driverMobileNoSetOnLoad = null;
        this.supplierNameTextSetOnLoad = null;
        this.panNoSetOnLoad = null;
        this.insuranceNoSetOnLoad = null;
        this.noOfEWBInConsolidatedSystemSetOnLoad = null;
        this.noOfEWBInConsolidatedManualSetOnLoad = null;
        this.consolidatedEwayBillSetOnLoad = null;
        this.confirmConsolidatedEwayBillSetOnLoad = null;
        //Billing details
        this.totalHireAmountSetOnLoad = null;
        this.advanceAmountSetOnLoad = null;
        this.balanceAmountSetOnLoad = null;
        this.payableAtSetOnLoad = null;
        this.payableAtDupSetOnLoad = null;
        this.remarksSetOnLoad = null;
        this.deliveryPointsSetOnLoad = null;
        this.shortageLrs = null;
        this.spiltLrs = [];
        this.lrShrotageSpilt = null;
        this.twoPointDDCheckBox = null;
        this.twoPointsDoorDeliveryMultipleLrs = null;
        this.ewayBillNo = null;
        this.ewayBillNoConfirm = null;
        this.validateDepartureDate = null;
        this.validateScheduledDate = null;
        this.validateDepartureTime = null;
        this.validateScheduledTime = null;
        this.departureDate = null;
        this.scheduledDate = null;
        this.scheduledTime = null;
        this.departureTime = null;
        this.arrivalTime = null;
        this.currentDate = null;
        this.hireAmt = null;
        this.validateHireAmtForBaseHireAmt = null;
        this.validateHireAmtForDoorOpen = null;
        this.validateHireAmtForVehicleHeight = null;
        this.validateHireAmtForDoorDely = null;
        this.validateHireAmtForExtraWeight = null;
        this.validateHireAmtForCheckPost = null;
        this.validateHireAmtForotherChrg = null;
        this.isValid = false;
        this.truckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.totalGurWgt = null;
        this.calculateAalanceAmt = null;
        this.validateTotalHireAmt = null;
        this.validateAdvanceAmt = null;
        this.truckTypeId = null;
        this.validateTruckTypeTotGurWgt = null;
        this.goodsType = null;
        this.gurWgt = null;
        this.kantaWgt = null;
        this.suppName = null;
        this.listOfShortageLrs = [];
        this.ewayLrs = null;
        this.countEwayLrs = null;
        this.countEwayLrsAbove50K = null;
        this.countEwayLrsBelow50K = null;
        this.ewayBillLrForLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.returnEwayBillLrsLRDto = [];
        this.goodsValueFind = null;
        this.goodsValueFind1 = null;
        this.ewayBill = null;
        this.isReadOnlyInvoiceNo = false;
        this.isReadOnlyInvoiceDates = false;
        this.isReadOnlyHireslipNo = false;
        this.isReadOnlySource = false;
        this.isReadOnlyDestination = false;
        this.isReadOnlyNumberOfLrs = false;
        this.isReadOnlyTotalNoArticle = false;
        this.isReadOnlyLorryNo = false;
        this.isReadOnlyLorryOwner = false;
        this.isReadOnlyTruckLength = false;
        this.isReadOnlyLorryContactPerson = false;
        this.isReadOnlyOwnerAddress = false;
        this.isReadOnlyDriverName = false;
        this.isReadOnlyDriverLicNo = false;
        this.isReadOnlySupplierName = false;
        this.isReadOnlyPanNo = false;
        this.invoiceNumber = null;
        this.hireslipNumber = null;
        this.invoiceDate = null;
        this.source = null;
        this.destination = null;
        this.numberOfLrs = null;
        this.numberOfArticles = null;
        this.guaranteeWgt = null;
        this.gurWgtTotal = null;
        this.kantaWeight = null;
        this.loadedBy = null;
        //Vehicle details
        this.lorryNumber = null;
        this.lorryOwner = null;
        this.truckLength = null;
        this.contactPerson = null;
        this.address = null;
        this.truckDriverName = null;
        this.driverLicNo = null;
        this.driverMobileNo = null;
        this.supplierNameText = null;
        this.panNo = null;
        this.insuranceNo = null;
        this.noOfEWBInConsolidatedSystem = null;
        this.noOfEWBInConsolidatedManual = null;
        this.consolidatedEwayBill = null;
        this.confirmConsolidatedEwayBill = null;
        //Billing details
        this.totalHireAmount = null;
        this.advanceAmount = null;
        this.balanceAmount = null;
        this.payableAt = null;
        this.remarks = null;
        this.deliveryPoints = null;
        this.doorOpenAmount = null;
        this.vehiHeightAmount = null;
        this.doorDeliveryAmount = null;
        this.extraWeightAmount = null;
        this.chkPostAmount = null;
        this.otherChargesAmount = null;
        this.baseHireAmount = null;
        this.ewayBillNumber = null;
        this.twoPtDoorDelyLrs = null;
        this.selectedTruckTypeId = null;
        this.validateDeliveryPtSingleMult = null;
        this.printRewardYesNoValidate = null;
        this.listInvoice = [];
        this.listOfInvoice = [];
        this.lrsDetailsMhdForPrint = [];
        this.departureTimeSplit = [];
        this.validateInsPolNo = null;
        this.validateLorryNumber = null;
        this.validatePanNo = null;
        this.selectedFileTruckOwner = null;
        this.isUploadedTruckOwner = false;
        this.truckDataDtoTruckOwner = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.selectedFileTruckDetailsForRC = null;
        this.selectedFileTruckDetailsForInsurance = null;
        this.selectedFileTruckDetailsForLicense = null;
        this.isUploadedPopUp = false;
        this.truckDataDtoFileUploadRcInsLic = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_16__["TruckDataDto"]();
        this.validatePopUpFileUploadTruckNumber = null;
        this.multipleDeliveryPointListPopupReturn = null;
        this.firstPtDeliv = null;
        this.multipleInvoiceIsLastPointListPopupReturn = null;
        this.validateEwayBill = null;
        this.validateEwayBillConsoldateConfirm = null;
        this.invPrintAloneForLrs = [];
        this.invPrintAloneForLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrDtoFTRoutingExcep = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.rcLicInscTruckDataDtoReturn = null;
        $("input[type=text], textarea").val("");
        $("input[type=number]").val("");
        $("#deliveryPointIdForSingle").prop('checked', true);
        $("#deliveryPointIdForMultiple").prop('checked', false);
        $("#twoPointDD").prop('checked', false);
        $("#isMultiInvoiceTripId").prop('checked', false);
        $("#islastPointDeliveryId").prop('checked', false);
        $("#printRewardDetails").val('no');
    };
    StocksGroupingComponent.prototype.overAllResetComplete = function () {
        /* 1 st level stock grouping */
        this.resetFeilds();
        this.stockDetailsDataList = [];
        $("#stockDetailsTableId").DataTable().destroy();
        this.dtTriggerStockDetails.next();
        /* 1 st level stock grouping */
        /* 2 nd level invoice details */
        this.invoiceDetailsClearField();
        /* 2 nd level invoice details */
        /* 3 th level make a trip */
        this.makeATripResetField();
        /* 3 th level make a trip */
        /* 4 th level invoice */
        this.invoiceClearField();
        /* 4 th level invoice */
        /* 5 th level Hireslip */
        this.resetFeildHireslip();
        /* 5 th level Hireslip */
    };
    StocksGroupingComponent.prototype.startOverFromHireslipBtn = function () {
        this.stepper.reset();
        this.overAllResetComplete();
    };
    StocksGroupingComponent.prototype.resetFormHireslipBtnBtn = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Reset Confirm",
            text: "Sure U want to reset this Stock Grouping details",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (sureYesBtn) {
            if (sureYesBtn) {
                _this.stepper.reset();
                _this.overAllResetComplete();
            }
        });
    };
    /* 5 th level main Hireslip detail start*/
    /* 5 th level main Hireslip detail end*/
    //Clear Form OverAll
    StocksGroupingComponent.prototype.startOverBtn = function () {
        this.stepper.reset();
        this.overAllResetComplete();
    };
    StocksGroupingComponent.prototype.overAllResetBtn = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Reset Confirm",
            text: "Sure U want to reset this Stock Grouping details",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (sureYesBtn) {
            if (sureYesBtn) {
                _this.stepper.reset();
                _this.overAllResetComplete();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepper"])
    ], StocksGroupingComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StocksGroupingComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadTruckOwnerPopUp'),
        __metadata("design:type", Object)
    ], StocksGroupingComponent.prototype, "uploadTruckOwnerPopUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadRCInsLicForTruck'),
        __metadata("design:type", Object)
    ], StocksGroupingComponent.prototype, "uploadRCInsLicForTruck", void 0);
    StocksGroupingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-grouping',
            template: __webpack_require__(/*! ./stocks-grouping.component.html */ "./src/app/trip-creation/stocks-grouping/stocks-grouping.component.html"),
            styles: [__webpack_require__(/*! ./stocks-grouping.component.css */ "./src/app/trip-creation/stocks-grouping/stocks-grouping.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"],
            src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_15__["HireslipService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_22__["MasterService"]])
    ], StocksGroupingComponent);
    return StocksGroupingComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* for redirect to other page starts */\n.hyperLink_td {\n\tcolor: blue;\n\tcursor: pointer;\n}\n.hyperLink_td:hover {\n\tcolor: blue;\n\tfont-weight: bolder;\n\tcursor: pointer;\n}\n/* for redirect to other page ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi90cmlwLWNyZWF0aW9uLWhpcmVzbGlwLWdlbmVyYXRpb24vdHJpcC1jcmVhdGlvbi1oaXJlc2xpcC1nZW5lcmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEI7QUFDRCxxQ0FBcUMiLCJmaWxlIjoic3JjL2FwcC90cmlwLWNyZWF0aW9uL3RyaXAtY3JlYXRpb24taGlyZXNsaXAtZ2VuZXJhdGlvbi90cmlwLWNyZWF0aW9uLWhpcmVzbGlwLWdlbmVyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvciByZWRpcmVjdCB0byBvdGhlciBwYWdlIHN0YXJ0cyAqL1xuLmh5cGVyTGlua190ZCB7XG5cdGNvbG9yOiBibHVlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oeXBlckxpbmtfdGQ6aG92ZXIge1xuXHRjb2xvcjogYmx1ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLyogZm9yIHJlZGlyZWN0IHRvIG90aGVyIHBhZ2UgZW5kcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card\">\n\t\t\t<div class=\"row\" style=\"margin-top: 10px;\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Trip\n\t\t\t\t\t\t\t\t\tDetails</h6>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"inoviceNumber\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"invoiceDate\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"invoiceDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t#invoiceDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"invoiceDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hireslipNumber\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"numberOfLrs\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Number Of LR's</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"numberOfArticles\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Number Of Articles</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"guranteeWeight\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Gurantee Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"kantaWeight\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Kanta Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"loadedBy\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Loaded By</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Goods\n\t\t\t\t\t\t\t\t\tShort & Extra Details</h6>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<div class=\"row\"> -->\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsGoodsShortAndExtraDetails\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGoodsShortAndExtraDetails\">\n\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Extra</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Open</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Short</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Wet</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let goodsShortAndExtraDetailsData of goodsShortAndExtraDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.art }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.extra }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.open }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.short }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.wet }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">\n\t\t\t\t\t\t\t\t\tVehicle Details</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lorryNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Lorry Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lorryOwner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Lorry Owner</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckLength\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Length</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-boxes\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lorryOwnerDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"goToLrEnquiryPage()\"><u class=\"hyperLink_td\">Update\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorry Owner Details</u></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"contactPerson\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Person</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"address\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"driverName\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"driverLicenseNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver License No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"driverMobileNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Mobile No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"supplierName\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"panNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Pan No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"insuranceNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Insurance No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"trackingDeviceId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Tracking Device Id</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Tracking Device Id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlTrackingDeviceId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteTrackingDeviceId\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t#autocompleteTrackingDeviceId=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(trackingDeviceIdOptions | filter: controlTrackingDeviceId.value) as resultTrackingDeviceId\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultTrackingDeviceId\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultTrackingDeviceId.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"noOfNoEwbInConsolidatedSystem\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>No of NO EWB in Consolidated-System</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-laptop\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"noOfNoEwbInConsolidatedManual\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>No of NO EWB in Consolidated-Manual</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-keyboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consolidatedWwayBill\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Consolidated Eway Bill</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"confirmConsolidatedEwayBill\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Confirm Consolidated Eway Bill</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Billing\n\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"totalHire\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Hire</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"advance\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Advance</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"balance\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Balance</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"payableAt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Payable At</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"remarks\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Remarks</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-notes-medical\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"4\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"deliveryPoints\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Points</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck-loading\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"twoPointDD\" [(ngModel)]=\"twoPointDoorDelivery\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"twoPointDD\">2 Point Door Delivery</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"twoPointDoorDelivery\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"twoPointsDoorDeliveryLrs\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>2 Point Door Delivery LRs(Multiple LRs\n\t\t\t\t\t\t\t\t\t\t\t\t\tseparated by comma(,)):</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck-loading\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\" basic-addon11 \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"printRewardDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Print Reward Details</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-medical\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"yes\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"no\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Time</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label> <input id=\"departureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"2019-01-06\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"departureDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t#departureDates=\"ngbDatepicker\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"departureDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"departureTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"02:30 AM\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDepartureTime\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDepartureTime=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(departureTimeOptions | filter: control.value) as resultDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDepartureTime.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scheduledDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"2019-01-12\" name=\"scheduledDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #scheduledDates=\"ngbDatepicker\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"scheduledDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Scheduled Time\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteScheduledTime=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(scheduledTimeOptions | filter: controlScheduledTime.value) as resultScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultScheduledTime.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\tthe proceed popup starts -->\n\n\n\n\n\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsNotAssigned\">\n\t\t\t\t\t\t\t\t<ng-template #contentProceed let-ok=\"close\" let-d=\"dismiss\">\n\n\n\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t<h5>Time</h5>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Time</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label> <input id=\"departureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"2019-01-06\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"departureDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#departureDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"departureDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"departureTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"02:30 AM\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteDepartureTime=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(departureTimeOptions | filter: control.value) as resultDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultDepartureTime.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scheduledDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"2019-01-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"scheduledDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#scheduledDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"scheduledDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Scheduled Time\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteScheduledTime=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(scheduledTimeOptions | filter: controlScheduledTime.value) as resultScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultScheduledTime.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\tthe procced popup ends -->\n\t\t\t\t</div>\n\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t\t<div class=\"col-md-6\" style=\"text-align: center;\">\n\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t(click)=\"openNotAssignedPopup(contentProceed)\"\n\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"proceedBtn\">Proceed</button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"printInvoiceBtn\">Print\n\t\t\t\t\t\tInvoice</button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"cancelBtn\">Cancel</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: TripCreationHireslipGenerationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreationHireslipGenerationComponent", function() { return TripCreationHireslipGenerationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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
//for datatable starts


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for datatable ends
//for the select option with filter starts

//for the select option with filter ends
//for redirect to other page starts

//for redirect to other page ends
//for popup modal starts 

//for popup modal ends
var TripCreationHireslipGenerationComponent = /** @class */ (function () {
    //for datatable ends
    function TripCreationHireslipGenerationComponent(/* for datatable starts */ tripCreationHireslipGenerationScreen, /* for datatable endss */ 
    //for redirect to other page starts
    router, 
    //for redirect to other page ends
    //for popup modal starts
    modalService
    //for popup modal ends
    ) {
        this.tripCreationHireslipGenerationScreen = tripCreationHireslipGenerationScreen;
        this.router = router;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        //for the select option with filter starts
        this.controlTrackingDeviceId = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlDepartureTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlScheduledTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
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
        this.trackingDeviceIdOptions = [
            { id: 1, label: '26682' },
            { id: 2, label: '26685' },
            { id: 3, label: '26737' },
            { id: 4, label: '29276' },
        ];
        this.dtTriggerGoodsShortAndExtraDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /* for datatable starts */
    TripCreationHireslipGenerationComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    TripCreationHireslipGenerationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsGoodsShortAndExtraDetails = {
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
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrGoodsShortAndExtraDetailsTable = this.tripCreationHireslipGenerationScreen.getSummaryData();
        this.onDestroyUnsubscribtionGoodsShortAndExtraDetails = this.gettingDataFrmServiceFrGoodsShortAndExtraDetailsTable.subscribe(function (data) {
            _this.goodsShortAndExtraDetailsDataList = data['data'];
            _this.dtTriggerGoodsShortAndExtraDetails.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    TripCreationHireslipGenerationComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerGoodsShortAndExtraDetails.unsubscribe();
        this.onDestroyUnsubscribtionGoodsShortAndExtraDetails.unsubscribe();
        //for datatable ends
    };
    //for datepicker starts
    // the selectToday is the method for  selecting todays'z date
    TripCreationHireslipGenerationComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker ends
    //for the select option with filter starts
    TripCreationHireslipGenerationComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    //for redirect to other page starts
    TripCreationHireslipGenerationComponent.prototype.goToLrEnquiryPage = function () {
        this.router.navigate(['/masters/transhipment/truckMaster']);
    };
    //for redirect to other page starts
    //for popup modal starts 
    TripCreationHireslipGenerationComponent.prototype.openNotAssignedPopup = function (contentProceed) {
        var _this = this;
        this.modalService.open(contentProceed, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContentNotAssigned = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContentNotAssigned = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TripCreationHireslipGenerationComponent.prototype.getDismissReason = function (reason) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TripCreationHireslipGenerationComponent.prototype, "dtElements", void 0);
    TripCreationHireslipGenerationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-creation-hireslip-generation',
            template: __webpack_require__(/*! ./trip-creation-hireslip-generation.component.html */ "./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.html"),
            styles: [__webpack_require__(/*! ./trip-creation-hireslip-generation.component.css */ "./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
            //for popup modal ends
        ])
    ], TripCreationHireslipGenerationComponent);
    return TripCreationHireslipGenerationComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media ( max-width : 767px) {\n\t.bbtitle {\n\t\tpadding-top: 10px;\n\t\tborder-bottom: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.bbtitle {\n\t\tborder-bottom: 1px solid orange;\n\t}\n}\n\n/* timeline starts  */\n\n/* for content starts */\n\n.timeline-left>.timeline-item>.timeline-panel {\n\twidth: calc(100% - 60px);\n}\n\n.timeline>.timeline-item>.timeline-panel {\n\tpadding: 10px 10px 10px 5px;\n\tbox-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);\n}\n\n.timeline>.timeline-item {\n\tmargin-bottom: 100px;\n}\n\n.timeline-title {\n\tfont-size: 17px;\n\tfont-weight: 600;\n\twhite-space: nowrap;\n}\n\n/* for content ends */\n\n/* for icon starts */\n\n.timeline:before {\n\theight: 50%;\n\ttop: 50px;\n\tbackground-color: #507090;\n}\n\n.timeline>.timeline-item>.timeline-badge {\n\tcolor: black;\n}\n\n.timeline-badge.success {\n\tbackground-color: darkkhaki;\n}\n\n/* for icon ends */\n\n/* timeline ends */\n\n.custome_Effects {\n\tmargin-right: 224px;\n  position: relative;\n  -webkit-animation: mymove 3s;  /* Safari 4.0 - 8.0 */\n  -webkit-animation-fill-mode: forwards; /* Safari 4.0 - 8.0 */\n  -webkit-animation: mymove 7s;\n          animation: mymove 7s;\n  animation-fill-mode: forwards;\n  -webkit-animation: mymove infinite;\n          animation: mymove infinite;\n  -webkit-animation-duration: 7s;\n          animation-duration: 7s;\n  -webkit-transform:rotate(90deg);\n          transform:rotate(90deg);\n  text-shadow:0px 8px 6px rgb(1, 1, 1, 0.4);\n  cursor:pointer;\n}\n\n/* Safari 4.0 - 8.0 */\n\n@-webkit-keyframes mymove {\n  from {top: -80px;}\n  to {top: 70px;}\n}\n\n@keyframes mymove {\n  from {top: -80px;}\n  to {top: 70px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi90cmlwLWNyZWF0aW9uLWludm9pY2UtZGV0YWlscy90cmlwLWNyZWF0aW9uLWludm9pY2UtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLGdDQUFnQztFQUNoQztDQUNEOztBQUNELHNCQUFzQjs7QUFDdEIsd0JBQXdCOztBQUN4QjtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFFRDtDQUNDLDRCQUE0QjtDQUM1Qix5Q0FBeUM7Q0FDekM7O0FBRUQ7Q0FDQyxxQkFBcUI7Q0FDckI7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQjs7QUFDRCxzQkFBc0I7O0FBQ3RCLHFCQUFxQjs7QUFDckI7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLDRCQUE0QjtDQUM1Qjs7QUFDRCxtQkFBbUI7O0FBQ25CLG1CQUFtQjs7QUFHbkI7Q0FDQyxvQkFBb0I7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QixFQUFFLHNCQUFzQjtFQUNyRCxzQ0FBc0MsQ0FBQyxzQkFBc0I7RUFDN0QsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMENBQTBDO0VBQzFDLGVBQWU7Q0FDaEI7O0FBRUQsc0JBQXNCOztBQUN0QjtFQUNFLE1BQU0sV0FBVyxDQUFDO0VBQ2xCLElBQUksVUFBVSxDQUFDO0NBQ2hCOztBQUVEO0VBQ0UsTUFBTSxXQUFXLENBQUM7RUFDbEIsSUFBSSxVQUFVLENBQUM7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC90cmlwLWNyZWF0aW9uL3RyaXAtY3JlYXRpb24taW52b2ljZS1kZXRhaWxzL3RyaXAtY3JlYXRpb24taW52b2ljZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKCBtYXgtd2lkdGggOiA3NjdweCkge1xuXHQuYmJ0aXRsZSB7XG5cdFx0cGFkZGluZy10b3A6IDEwcHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQuYmJ0aXRsZSB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcblx0fVxufVxuLyogdGltZWxpbmUgc3RhcnRzICAqL1xuLyogZm9yIGNvbnRlbnQgc3RhcnRzICovXG4udGltZWxpbmUtbGVmdD4udGltZWxpbmUtaXRlbT4udGltZWxpbmUtcGFuZWwge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG59XG5cbi50aW1lbGluZT4udGltZWxpbmUtaXRlbT4udGltZWxpbmUtcGFuZWwge1xuXHRwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi50aW1lbGluZT4udGltZWxpbmUtaXRlbSB7XG5cdG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4udGltZWxpbmUtdGl0bGUge1xuXHRmb250LXNpemU6IDE3cHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4vKiBmb3IgY29udGVudCBlbmRzICovXG4vKiBmb3IgaWNvbiBzdGFydHMgKi9cbi50aW1lbGluZTpiZWZvcmUge1xuXHRoZWlnaHQ6IDUwJTtcblx0dG9wOiA1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3MDkwO1xufVxuXG4udGltZWxpbmU+LnRpbWVsaW5lLWl0ZW0+LnRpbWVsaW5lLWJhZGdlIHtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG4udGltZWxpbmUtYmFkZ2Uuc3VjY2VzcyB7XG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcbn1cbi8qIGZvciBpY29uIGVuZHMgKi9cbi8qIHRpbWVsaW5lIGVuZHMgKi9cblxuXG4uY3VzdG9tZV9FZmZlY3RzIHtcblx0bWFyZ2luLXJpZ2h0OiAyMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbXltb3ZlIDNzOyAgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gIGFuaW1hdGlvbjogbXltb3ZlIDdzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBteW1vdmUgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XG4gIHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO1xuICB0ZXh0LXNoYWRvdzowcHggOHB4IDZweCByZ2IoMSwgMSwgMSwgMC40KTtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBteW1vdmUge1xuICBmcm9tIHt0b3A6IC04MHB4O31cbiAgdG8ge3RvcDogNzBweDt9XG59XG5cbkBrZXlmcmFtZXMgbXltb3ZlIHtcbiAgZnJvbSB7dG9wOiAtODBweDt9XG4gIHRvIHt0b3A6IDcwcHg7fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12 lineBottom_custom\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"timeline timeline-left\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"timeline-inverted timeline-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-badge success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">Nanglipoona</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custome_Effects\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-truck \" title=\"Trip Creation\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"timeline-inverted timeline-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-badge success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"timeline-title\">Alwaye</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 bbtitle\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Info Invoice</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"loaderHead\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Head</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Loader Head\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlLoaderHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteLoaderHead\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteLoaderHead=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(loaderHeadOptions | filter: controlLoaderHead.value) as resultLoaderHead\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultLoaderHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultLoaderHead.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"loaderName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Loader Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlLoaderName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteLoaderName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteLoaderName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(loaderNameOptions | filter: controlLoaderName.value) as resultLoaderName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultLoaderName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultLoaderName.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Truck No\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteTruckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteTruckNumber=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(truckNumberOptions | filter: controlTruckNumber.value) as resultTruckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultTruckNumber.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fourth autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"supplier\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Supplier\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlSupplier\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSupplier\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSupplier=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(supplierOptions | filter: controlSupplier.value) as resultSupplier\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSupplier\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSupplier.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fourth autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fifth autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"driverName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Driver Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDriverName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDriverName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(driverNameOptions | filter: controlDriverName.value) as resultDriverName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDriverName.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe fifth autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"licenceNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Licence Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-5 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 bbtitle\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">TP Info</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe sixth autocomplete starts  -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"entryCp\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Entry CP</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"mdi mdi-truck-delivery\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Entry CP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlEntryCp\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteEntryCp\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteEntryCp=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(entryCpOptions | filter: controlEntryCp.value) as resultEntryCp\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultEntryCp\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultEntryCp.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe sixth autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe seventh autocomplete starts  -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"exitCp\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Exit CP</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"mdi mdi-truck-delivery\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Exit CP\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlExitCp\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteExitCp\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteExitCp=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(exitCpOptions | filter: controlExitCp.value) as resultExitCp\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultExitCp\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultExitCp.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe seventh autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Exp Exit Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"expExitDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#expExitDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"expExitDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"expExitDays\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Exp Exit Days</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"remarks\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Remarks</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-notes-medical\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"4\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: TripCreationInvoiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreationInvoiceDetailsComponent", function() { return TripCreationInvoiceDetailsComponent; });
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


var TripCreationInvoiceDetailsComponent = /** @class */ (function () {
    function TripCreationInvoiceDetailsComponent(expensesDetailsEntrys) {
        this.expensesDetailsEntrys = expensesDetailsEntrys;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.controlLoaderHead = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlLoaderName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlTruckNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlSupplier = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlDriverName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlEntryCp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlExitCp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.loaderHeadOptions = [
            { id: 1, label: 'Budhpur Labour' },
            { id: 2, label: 'Nangli Poona Labour' },
        ];
        this.loaderNameOptions = [
            { id: 1, label: 'Adhik' },
            { id: 2, label: 'Anoop' },
            { id: 3, label: 'Asif' },
            { id: 4, label: 'Ashok' }
        ];
        this.truckNumberOptions = [
            { id: 1, label: 'AB04UT5795' },
            { id: 2, label: 'AP02HT2216' },
            { id: 3, label: 'AP03AT2457' },
            { id: 4, label: 'AP03U8520' }
        ];
        this.supplierOptions = [
            { id: 1, label: 'A B Cargo Mover' },
            { id: 2, label: 'A B Cargo Movers' },
            { id: 3, label: 'A R C Logistics' },
            { id: 4, label: 'Anil Motors' }
        ];
        this.driverNameOptions = [
            { id: 1, label: 'Aamir' },
            { id: 2, label: 'Aarif' },
            { id: 3, label: 'Aadil' },
            { id: 3, label: 'Aalam' }
        ];
        this.entryCpOptions = [
            { id: 1, label: 'CP-Aland Road' },
            { id: 2, label: 'CP-Anmod' },
            { id: 3, label: 'CP-Bellary' }
        ];
        this.exitCpOptions = [
            { id: 1, label: 'CP-Aland Road' },
            { id: 2, label: 'CP-Anmod' },
            { id: 3, label: 'CP-Bellary' }
        ];
        this.dtTriggerExpensesDetailsEntry = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    TripCreationInvoiceDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TripCreationInvoiceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsExpensesDetailsEntry = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Particulars',
                    data: 'particulars'
                },
                {
                    title: 'Quantity',
                    data: 'quantity'
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
                    title: 'Amount',
                    data: 'amount'
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
        this.gettingDataFrmServiceFrExpensesDetailsEntryTable = this.expensesDetailsEntrys.getSummaryData();
        this.onDestroyUnsubscribtionExpensesDetailsEntry = this.gettingDataFrmServiceFrExpensesDetailsEntryTable.subscribe(function (data) {
            _this.expensesDetailsEntryDataList = data['data'];
            _this.dtTriggerExpensesDetailsEntry.next();
        });
        //the below code is for the getting data through json ends
    };
    TripCreationInvoiceDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerExpensesDetailsEntry.unsubscribe();
        this.onDestroyUnsubscribtionExpensesDetailsEntry.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    TripCreationInvoiceDetailsComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    TripCreationInvoiceDetailsComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], TripCreationInvoiceDetailsComponent.prototype, "dtElements", void 0);
    TripCreationInvoiceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-creation-invoice-details',
            template: __webpack_require__(/*! ./trip-creation-invoice-details.component.html */ "./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.html"),
            styles: [__webpack_require__(/*! ./trip-creation-invoice-details.component.css */ "./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], TripCreationInvoiceDetailsComponent);
    return TripCreationInvoiceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtY3JlYXRpb24vdHJpcC1jcmVhdGlvbi1pbnZvaWNlL3RyaXAtY3JlYXRpb24taW52b2ljZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Inovice</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoice\" [dtTrigger]=\"dtTriggerInvoice\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill No</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let invoiceData of invoiceDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceData.destination }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TripCreationInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreationInvoiceComponent", function() { return TripCreationInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
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
var TripCreationInvoiceComponent = /** @class */ (function () {
    //for datatable ends
    function TripCreationInvoiceComponent(/* for datatable starts */ tripCreationInvoiceScreen /* for datatable endss */) {
        this.tripCreationInvoiceScreen = tripCreationInvoiceScreen;
        this.dtTriggerInvoice = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /* for datatable starts */
    TripCreationInvoiceComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    TripCreationInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsInvoice = {
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
            pagingType: 'full_numbers',
            pageLength: 8,
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrInvoiceTable = this.tripCreationInvoiceScreen.getStocksSummaryData();
        this.onDestroyUnsubscribtionInvoice = this.gettingDataFrmServiceFrInvoiceTable.subscribe(function (data) {
            _this.invoiceDataList = data['data'];
            _this.dtTriggerInvoice.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    TripCreationInvoiceComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerInvoice.unsubscribe();
        this.onDestroyUnsubscribtionInvoice.unsubscribe();
        //for datatable ends
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TripCreationInvoiceComponent.prototype, "dtElements", void 0);
    TripCreationInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-creation-invoice',
            template: __webpack_require__(/*! ./trip-creation-invoice.component.html */ "./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.html"),
            styles: [__webpack_require__(/*! ./trip-creation-invoice.component.css */ "./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"] /* for datatable endss */])
    ], TripCreationInvoiceComponent);
    return TripCreationInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep table.dataTable {\n\theight: 180px!important;\n}\n/* truck mvoing animtion starts */\n@-webkit-keyframes movingTopToBottom {\n  0% {\n    top: -15px;\n  }\n  95% {\n    top: 150px;\n  }\n  100% {\n    top: 165px;\n  }\n}\n@keyframes movingTopToBottom {\n  0% {\n    top: -15px;\n  }\n  95% {\n    top: 150px;\n  }\n  100% {\n    top: 165px;\n  }\n}\n.container {\n  height: 150px;\n  overflow: hidden;\n}\n#divTAReviews {\n  -webkit-animation: movingTopToBottom 5s linear infinite;\n          animation: movingTopToBottom 5s linear infinite;\n  position: relative;\n  background: lightblue;\n  display: inline-block;\n  padding: 10px;\n}\n/* truck mvoing animtion stops */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi90cmlwLWNyZWF0aW9uLW1ha2UtYS10cmlwL3RyaXAtY3JlYXRpb24tbWFrZS1hLXRyaXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHdCQUF3QjtDQUN4QjtBQUNELGtDQUFrQztBQUNsQztFQUNFO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFdBQVc7R0FDWjtDQUNGO0FBVkQ7RUFDRTtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7Q0FDRjtBQUNEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usd0RBQWdEO1VBQWhELGdEQUFnRDtFQUNoRCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixjQUFjO0NBQ2Y7QUFDRCxpQ0FBaUMiLCJmaWxlIjoic3JjL2FwcC90cmlwLWNyZWF0aW9uL3RyaXAtY3JlYXRpb24tbWFrZS1hLXRyaXAvdHJpcC1jcmVhdGlvbi1tYWtlLWEtdHJpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHRhYmxlLmRhdGFUYWJsZSB7XG5cdGhlaWdodDogMTgwcHghaW1wb3J0YW50O1xufVxuLyogdHJ1Y2sgbXZvaW5nIGFuaW10aW9uIHN0YXJ0cyAqL1xuQGtleWZyYW1lcyBtb3ZpbmdUb3BUb0JvdHRvbSB7XG4gIDAlIHtcbiAgICB0b3A6IC0xNXB4O1xuICB9XG4gIDk1JSB7XG4gICAgdG9wOiAxNTBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDE2NXB4O1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNkaXZUQVJldmlld3Mge1xuICBhbmltYXRpb246IG1vdmluZ1RvcFRvQm90dG9tIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cbi8qIHRydWNrIG12b2luZyBhbmltdGlvbiBzdG9wcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \">\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-2 \">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckCapacity\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Capacity</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Truck Capacity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlTruckCapacity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteTruckCapacity\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteTruckCapacity=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(truckCapacityOptions | filter: controlTruckCapacity.value) as resultTruckCapacity\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultTruckCapacity\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultTruckCapacity.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"bins\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<label>Bins</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Bins\" [formControl]=\"controlBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteBins\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteBins=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(binsOptions | filter: controlBins.value) as resultBins\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultBins\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultBins.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lrNumber\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>LR Number</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" Placeholder=\"LR Number\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\n\n\n\n\n\t\t\t\t\t<div class=\"col-md-10 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Eligible LRs</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"clearAllBtn\">Clear\n\t\t\t\t\t\t\t\t\t\t\t\t\tAll</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the first datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsEligibleLrs\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerEligibleLrs\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody class='dragndrop' [dragula]='\"first-bag\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let eligibleLrsData of eligibleLrsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatable ends  -->\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the second datatable starts  -->\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Remaining LRs</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\" id=\"resetBtn\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionRemainingLrs\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRemainingLrs\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody class='dragndrop' [dragula]='\"first-bag\"'>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let remainingLrsData of remainingLrsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.position }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t the second datatable ends  -->\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t<!--  to open  popup use this << (click)=\"openPopup(content)\" >>  -->\n\t\t\t\t\t<!-- Row -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsTwo\">\n\t\t\t\t\t\t\t\t<ng-template #content let-save=\"close\" let-cancel=\"close\"\n\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\">\n\n\n\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t<h5>Add New Truck Capacity</h5>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Add Truck Capacity</h5>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckCapacityPopup\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truc Capacity (Tons)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"save('Save click')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"cancle('Cancel click')\">Cancel</button>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TripCreationMakeATripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreationMakeATripComponent", function() { return TripCreationMakeATripComponent; });
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
var TripCreationMakeATripComponent = /** @class */ (function () {
    function TripCreationMakeATripComponent(tripCreationMakeATripScreen, 
    //for popup modal starts
    modalService
    //for popup modal ends                
    ) {
        this.tripCreationMakeATripScreen = tripCreationMakeATripScreen;
        this.modalService = modalService;
        //for the select option with filter starts
        this.controlTruckCapacity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlBins = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.truckCapacityOptions = [
            { id: 1, label: 'ADD NEW' },
            { id: 2, label: '0' },
            { id: 3, label: '1' },
            { id: 4, label: '2' },
            { id: 5, label: '3' },
        ];
        this.binsOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Chennai' },
            { id: 4, label: 'Erode' },
            { id: 5, label: 'Kannur' },
        ];
        //for popup modal ends
        //summaryTable:any;
        this.loadingIndicator = true;
        //
        this.dtTriggerEligibleLrs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerRemainingLrs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    TripCreationMakeATripComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TripCreationMakeATripComponent.prototype.ngOnInit = function () {
        var _this = this;
        //first datatable starts
        this.dtOptionsEligibleLrs = {
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
            "scrollY": 220,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            pagingType: 'full_numbers',
            pageLength: 8,
        }, //first datatable ends
            //second datatable starts 
            this.dtOptionRemainingLrs = {
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
                "scrollY": 220,
                "scrollCollapse": true,
                //this to paggination and content like showing 1 to 3 of 20 entries Starts
                pagingType: 'full_numbers',
                pageLength: 8,
            },
            //second datatable ends
            //the below code is for the getting data through json starts
            //            this.supplierList.getAllData().subscribe(data => {
            //                this.lrDispatchBknRptList = data['data'];
            //                this.dtTriggerSummary.next();
            //                } );
            //first service starts 
            this.getDataFrmServiceFrEligibleLrsTable = this.tripCreationMakeATripScreen.getSupplierMasterData();
        this.onDestroyUnsubscribtionEligibleLrs = this.getDataFrmServiceFrEligibleLrsTable.subscribe(function (data) {
            _this.eligibleLrsDataList = data['data'];
            _this.dtTriggerEligibleLrs.next();
        });
        //first service ends
        //second service starts 
        this.getDataFrmServiceFrRemainingLrsTable = this.tripCreationMakeATripScreen.getSupplierMasterData();
        this.onDestroyUnsubscribtionRemainingLrs = this.getDataFrmServiceFrRemainingLrsTable.subscribe(function (data) {
            _this.remainingLrsDataList = data['data'];
            _this.dtTriggerRemainingLrs.next();
        });
        //second service ends
        //the below code is for the getting data through json ends
    };
    TripCreationMakeATripComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerEligibleLrs.unsubscribe();
        this.dtTriggerRemainingLrs.unsubscribe();
        this.onDestroyUnsubscribtionEligibleLrs.unsubscribe();
        this.onDestroyUnsubscribtionRemainingLrs.unsubscribe();
    };
    //for the select option with filter starts
    TripCreationMakeATripComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    TripCreationMakeATripComponent.prototype.RowSelected = function (confirmedConsignorListData) {
        this.selectedUser = confirmedConsignorListData;
        this.consignorName = this.selectedUser.name;
        console.log(this.selectedUser.name);
    };
    //to insert value of selected row in table to input field ends
    //for popup modal starts 
    TripCreationMakeATripComponent.prototype.openPopup = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContent = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContent = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TripCreationMakeATripComponent.prototype.getDismissReason = function (reason) {
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
    ], TripCreationMakeATripComponent.prototype, "dtElements", void 0);
    TripCreationMakeATripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-creation-make-a-trip',
            template: __webpack_require__(/*! ./trip-creation-make-a-trip.component.html */ "./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.html"),
            styles: [__webpack_require__(/*! ./trip-creation-make-a-trip.component.css */ "./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_consignor_service__WEBPACK_IMPORTED_MODULE_1__["ConsignorService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
            //for popup modal ends                
        ])
    ], TripCreationMakeATripComponent);
    return TripCreationMakeATripComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::ng-deep table.dataTable { */\n/* \theight: 220px; */\n/* } */\n/* ::ng-deep .mat-horizontal-content-container { */\n/* \toverflow: hidden; */\n/* \tpadding: 0 24px 0px 24px; */\n/* } */\n/* for redirect to other page starts */\n.hyperLink_td {\n\tcolor: blue;\n\tcursor: pointer;\n}\n.hyperLink_td:hover {\n\tcolor: blue;\n\tfont-weight: bolder;\n\tcursor: pointer;\n}\n/* for redirect to other page ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi90cmlwLWNyZWF0aW9uLXN0b2NrLWRldGFpbHMvdHJpcC1jcmVhdGlvbi1zdG9jay1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQixPQUFPO0FBRVAsbURBQW1EO0FBQ25ELHdCQUF3QjtBQUN4QixnQ0FBZ0M7QUFDaEMsT0FBTztBQUVQLHVDQUF1QztBQUN2QztDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCO0FBQ0QscUNBQXFDIiwiZmlsZSI6InNyYy9hcHAvdHJpcC1jcmVhdGlvbi90cmlwLWNyZWF0aW9uLXN0b2NrLWRldGFpbHMvdHJpcC1jcmVhdGlvbi1zdG9jay1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6Om5nLWRlZXAgdGFibGUuZGF0YVRhYmxlIHsgKi9cbi8qIFx0aGVpZ2h0OiAyMjBweDsgKi9cbi8qIH0gKi9cblxuLyogOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7ICovXG4vKiBcdG92ZXJmbG93OiBoaWRkZW47ICovXG4vKiBcdHBhZGRpbmc6IDAgMjRweCAwcHggMjRweDsgKi9cbi8qIH0gKi9cblxuLyogZm9yIHJlZGlyZWN0IHRvIG90aGVyIHBhZ2Ugc3RhcnRzICovXG4uaHlwZXJMaW5rX3RkIHtcblx0Y29sb3I6IGJsdWU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmh5cGVyTGlua190ZDpob3ZlciB7XG5cdGNvbG9yOiBibHVlO1xuXHRmb250LXdlaWdodDogYm9sZGVyO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBmb3IgcmVkaXJlY3QgdG8gb3RoZXIgcGFnZSBlbmRzICovIl19 */"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Stocks\n\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStockDetails\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Marked On Src</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booing Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Note</th>\n\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill No</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let stockDetailsData of stockDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td (click)=\"goToLrEnquiryPage()\"><u class=\"hyperLink_td\">{{\n\t\t\t\t\t\t\t\t\t\t\t\tstockDetailsData.contactNo }}</u></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.position }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.position }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TripCreationStockDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreationStockDetailsComponent", function() { return TripCreationStockDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
//for redirect to other page starts

//for redirect to other page ends
var TripCreationStockDetailsComponent = /** @class */ (function () {
    //for datatable ends
    function TripCreationStockDetailsComponent(/* for datatable starts */ stockDetailsScreen, /* for datatable endss */ 
    //for redirect to other page starts
    router
    //for redirect to other page ends        
    ) {
        this.stockDetailsScreen = stockDetailsScreen;
        this.router = router;
        this.dtTriggerStockDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /* for datatable starts */
    TripCreationStockDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    TripCreationStockDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsStockDetails = {
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
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Urgent LRs</i>',
                    titleAttr: 'Print Urgent LRs',
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Urgent LRs</i>',
                    titleAttr: 'Excel Urgent LRs',
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
            pagingType: 'full_numbers',
            pageLength: 8,
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrStockDetailsTable = this.stockDetailsScreen.getSupplierMasterData();
        this.onDestroyUnsubscribtionStockDetails = this.gettingDataFrmServiceFrStockDetailsTable.subscribe(function (data) {
            _this.stockDetailsDataList = data['data'];
            _this.dtTriggerStockDetails.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    TripCreationStockDetailsComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerStockDetails.unsubscribe();
        this.onDestroyUnsubscribtionStockDetails.unsubscribe();
        //for datatable ends
    };
    //for redirect to other page starts
    TripCreationStockDetailsComponent.prototype.goToLrEnquiryPage = function () {
        this.router.navigate(['/lr/enquiry/lrEnquiry']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TripCreationStockDetailsComponent.prototype, "dtElements", void 0);
    TripCreationStockDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-creation-stock-details',
            template: __webpack_require__(/*! ./trip-creation-stock-details.component.html */ "./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.html"),
            styles: [__webpack_require__(/*! ./trip-creation-stock-details.component.css */ "./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
            //for redirect to other page ends        
        ])
    ], TripCreationStockDetailsComponent);
    return TripCreationStockDetailsComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::ng-deep table.dataTable { */\n/* \theight: 220px; */\n/* } */\n/* ::ng-deep .mat-horizontal-content-container { */\n/* \toverflow: hidden; */\n/* \tpadding: 0 24px 0px 24px; */\n/* } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC1jcmVhdGlvbi90cmlwLWNyZWF0aW9uLXN0b2NrLXN1bW1hcnkvdHJpcC1jcmVhdGlvbi1zdG9jay1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQixPQUFPO0FBRVAsbURBQW1EO0FBQ25ELHdCQUF3QjtBQUN4QixnQ0FBZ0M7QUFDaEMsT0FBTyIsImZpbGUiOiJzcmMvYXBwL3RyaXAtY3JlYXRpb24vdHJpcC1jcmVhdGlvbi1zdG9jay1zdW1tYXJ5L3RyaXAtY3JlYXRpb24tc3RvY2stc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOjpuZy1kZWVwIHRhYmxlLmRhdGFUYWJsZSB7ICovXG4vKiBcdGhlaWdodDogMjIwcHg7ICovXG4vKiB9ICovXG5cbi8qIDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIgeyAqL1xuLyogXHRvdmVyZmxvdzogaGlkZGVuOyAqL1xuLyogXHRwYWRkaW5nOiAwIDI0cHggMHB4IDI0cHg7ICovXG4vKiB9ICovIl19 */"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Stocks\n\t\t\t\t\t\t\t\tSummary</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockSummary\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStockSummary\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let stockSummaryData of stockSummaryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.amount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TripCreationStockSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreationStockSummaryComponent", function() { return TripCreationStockSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
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
var TripCreationStockSummaryComponent = /** @class */ (function () {
    //for datatable ends
    function TripCreationStockSummaryComponent(/* for datatable starts */ stockSummaryScreen /* for datatable endss */) {
        this.stockSummaryScreen = stockSummaryScreen;
        this.dtTriggerStockSummary = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /* for datatable starts */
    TripCreationStockSummaryComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    TripCreationStockSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsStockSummary = {
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
            pagingType: 'full_numbers',
            pageLength: 8,
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrStockSummaryTable = this.stockSummaryScreen.getStocksSummaryData();
        this.onDestroyUnsubscribtionStockSummary = this.gettingDataFrmServiceFrStockSummaryTable.subscribe(function (data) {
            _this.stockSummaryDataList = data['data'];
            _this.dtTriggerStockSummary.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    TripCreationStockSummaryComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerStockSummary.unsubscribe();
        this.onDestroyUnsubscribtionStockSummary.unsubscribe();
        //for datatable ends
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TripCreationStockSummaryComponent.prototype, "dtElements", void 0);
    TripCreationStockSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-creation-stock-summary',
            template: __webpack_require__(/*! ./trip-creation-stock-summary.component.html */ "./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.html"),
            styles: [__webpack_require__(/*! ./trip-creation-stock-summary.component.css */ "./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"] /* for datatable endss */])
    ], TripCreationStockSummaryComponent);
    return TripCreationStockSummaryComponent;
}());



/***/ }),

/***/ "./src/app/trip-creation/trip-creation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/trip-creation/trip-creation.module.ts ***!
  \*******************************************************/
/*! exports provided: TripCreationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreationModule", function() { return TripCreationModule; });
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
/* harmony import */ var src_app_trip_creation_trip_creation_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/trip-creation/trip-creation.routing */ "./src/app/trip-creation/trip-creation.routing.ts");
/* harmony import */ var src_app_trip_creation_trip_creation_stock_summary_trip_creation_stock_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component */ "./src/app/trip-creation/trip-creation-stock-summary/trip-creation-stock-summary.component.ts");
/* harmony import */ var src_app_trip_creation_trip_creation_stock_details_trip_creation_stock_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component */ "./src/app/trip-creation/trip-creation-stock-details/trip-creation-stock-details.component.ts");
/* harmony import */ var src_app_trip_creation_stocks_grouping_stocks_grouping_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/trip-creation/stocks-grouping/stocks-grouping.component */ "./src/app/trip-creation/stocks-grouping/stocks-grouping.component.ts");
/* harmony import */ var src_app_trip_creation_trip_creation_invoice_details_trip_creation_invoice_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component */ "./src/app/trip-creation/trip-creation-invoice-details/trip-creation-invoice-details.component.ts");
/* harmony import */ var src_app_trip_creation_trip_creation_make_a_trip_trip_creation_make_a_trip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component */ "./src/app/trip-creation/trip-creation-make-a-trip/trip-creation-make-a-trip.component.ts");
/* harmony import */ var src_app_trip_creation_trip_creation_invoice_trip_creation_invoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component */ "./src/app/trip-creation/trip-creation-invoice/trip-creation-invoice.component.ts");
/* harmony import */ var src_app_trip_creation_trip_creation_hireslip_generation_trip_creation_hireslip_generation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component */ "./src/app/trip-creation/trip-creation-hireslip-generation/trip-creation-hireslip-generation.component.ts");
/* harmony import */ var _invoice_loadingsheet_print_invoice_loadingsheet_print_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./invoice-loadingsheet-print/invoice-loadingsheet-print.component */ "./src/app/trip-creation/invoice-loadingsheet-print/invoice-loadingsheet-print.component.ts");
/* harmony import */ var _invoice_details_print_invoice_details_print_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./invoice-details-print/invoice-details-print.component */ "./src/app/trip-creation/invoice-details-print/invoice-details-print.component.ts");
/* harmony import */ var _invoice_summary_print_invoice_summary_print_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./invoice-summary-print/invoice-summary-print.component */ "./src/app/trip-creation/invoice-summary-print/invoice-summary-print.component.ts");
/* harmony import */ var src_app_trip_creation_hamali_detail_report_hamali_detail_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/trip-creation/hamali-detail-report/hamali-detail-report.component */ "./src/app/trip-creation/hamali-detail-report/hamali-detail-report.component.ts");
/* harmony import */ var src_app_trip_creation_multiple_point_details_multiple_point_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/trip-creation/multiple-point-details/multiple-point-details.component */ "./src/app/trip-creation/multiple-point-details/multiple-point-details.component.ts");
/* harmony import */ var src_app_trip_creation_multipleinvoice_lastpoint_details_multipleinvoice_lastpoint_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component */ "./src/app/trip-creation/multipleinvoice-lastpoint-details/multipleinvoice-lastpoint-details.component.ts");
/* harmony import */ var src_app_master_transhipment_truck_master_truck_master_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/master/transhipment/truck-master/truck-master.component */ "./src/app/master/transhipment/truck-master/truck-master.component.ts");
/* harmony import */ var _hireslip_details_print_hireslip_details_print_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hireslip-details-print/hireslip-details-print.component */ "./src/app/trip-creation/hireslip-details-print/hireslip-details-print.component.ts");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
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


















var TripCreationModule = /** @class */ (function () {
    function TripCreationModule() {
    }
    TripCreationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_trip_creation_trip_creation_routing__WEBPACK_IMPORTED_MODULE_12__["TripCreationRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_10__["DragulaModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_28__["NgxBarcodeModule"]
            ],
            declarations: [src_app_trip_creation_trip_creation_stock_summary_trip_creation_stock_summary_component__WEBPACK_IMPORTED_MODULE_13__["TripCreationStockSummaryComponent"], src_app_trip_creation_trip_creation_stock_details_trip_creation_stock_details_component__WEBPACK_IMPORTED_MODULE_14__["TripCreationStockDetailsComponent"],
                src_app_trip_creation_stocks_grouping_stocks_grouping_component__WEBPACK_IMPORTED_MODULE_15__["StocksGroupingComponent"], src_app_trip_creation_trip_creation_invoice_details_trip_creation_invoice_details_component__WEBPACK_IMPORTED_MODULE_16__["TripCreationInvoiceDetailsComponent"],
                src_app_trip_creation_trip_creation_make_a_trip_trip_creation_make_a_trip_component__WEBPACK_IMPORTED_MODULE_17__["TripCreationMakeATripComponent"], src_app_trip_creation_trip_creation_invoice_trip_creation_invoice_component__WEBPACK_IMPORTED_MODULE_18__["TripCreationInvoiceComponent"],
                src_app_trip_creation_trip_creation_hireslip_generation_trip_creation_hireslip_generation_component__WEBPACK_IMPORTED_MODULE_19__["TripCreationHireslipGenerationComponent"], _invoice_loadingsheet_print_invoice_loadingsheet_print_component__WEBPACK_IMPORTED_MODULE_20__["InvoiceLoadingsheetPrintComponent"],
                _invoice_details_print_invoice_details_print_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceDetailsPrintComponent"], _invoice_summary_print_invoice_summary_print_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceSummaryPrintComponent"],
                src_app_trip_creation_hamali_detail_report_hamali_detail_report_component__WEBPACK_IMPORTED_MODULE_23__["HamaliDetailReportComponent"], src_app_trip_creation_multiple_point_details_multiple_point_details_component__WEBPACK_IMPORTED_MODULE_24__["MultiplePointDetailsComponent"],
                src_app_trip_creation_multipleinvoice_lastpoint_details_multipleinvoice_lastpoint_details_component__WEBPACK_IMPORTED_MODULE_25__["MultipleInvoiceLastPointDetailsComponent"], src_app_master_transhipment_truck_master_truck_master_component__WEBPACK_IMPORTED_MODULE_26__["TruckMasterComponent"],
                _hireslip_details_print_hireslip_details_print_component__WEBPACK_IMPORTED_MODULE_27__["HireslipDetailsPrintComponent"]],
            entryComponents: [src_app_trip_creation_hamali_detail_report_hamali_detail_report_component__WEBPACK_IMPORTED_MODULE_23__["HamaliDetailReportComponent"], src_app_trip_creation_multiple_point_details_multiple_point_details_component__WEBPACK_IMPORTED_MODULE_24__["MultiplePointDetailsComponent"],
                src_app_trip_creation_multipleinvoice_lastpoint_details_multipleinvoice_lastpoint_details_component__WEBPACK_IMPORTED_MODULE_25__["MultipleInvoiceLastPointDetailsComponent"]],
        })
    ], TripCreationModule);
    return TripCreationModule;
}());



/***/ }),

/***/ "./src/app/trip-creation/trip-creation.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/trip-creation/trip-creation.routing.ts ***!
  \********************************************************/
/*! exports provided: TripCreationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCreationRoutes", function() { return TripCreationRoutes; });
/* harmony import */ var src_app_trip_creation_stocks_grouping_stocks_grouping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/trip-creation/stocks-grouping/stocks-grouping.component */ "./src/app/trip-creation/stocks-grouping/stocks-grouping.component.ts");

var TripCreationRoutes = [
    {
        path: '',
        children: [
            {
                path: 'stocksGrouping',
                component: src_app_trip_creation_stocks_grouping_stocks_grouping_component__WEBPACK_IMPORTED_MODULE_0__["StocksGroupingComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-trip-creation-trip-creation-module.js.map