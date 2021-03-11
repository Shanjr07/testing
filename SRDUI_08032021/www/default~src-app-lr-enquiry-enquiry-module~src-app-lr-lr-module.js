(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-lr-enquiry-enquiry-module~src-app-lr-lr-module"],{

/***/ "./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title_custom {\n\tborder-bottom: 1px solid orange;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n@media ( max-width : 1022px) {\n\th6 {\n\t\tdisplay: grid;\n\t}\n}\n\n@media ( min-width : 1023px) and (max-width: 1500px) {\n\tb, strong {\n\t\tfont-weight: bolder;\n\t\tfont-size: 13px;\n\t\tdisplay: inline-block;\n\t}\n\tspan {\n\t\tfont-size: 13px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW5xdWlyeS9tdWx0aXBsZS1hcnRpY2xlLXNpemUtcG9wdXAvbXVsdGlwbGUtYXJ0aWNsZS1zaXplLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsWUFBWTtDQUNaLGFBQWE7Q0FDYjs7QUFFRDtDQUNDO0VBQ0MsY0FBYztFQUNkO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCO0NBQ0Q7RUFDQyxnQkFBZ0I7RUFDaEI7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2xyL2VucXVpcnkvbXVsdGlwbGUtYXJ0aWNsZS1zaXplLXBvcHVwL211bHRpcGxlLWFydGljbGUtc2l6ZS1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlX2N1c3RvbSB7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2U7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbkBtZWRpYSAoIG1heC13aWR0aCA6IDEwMjJweCkge1xuXHRoNiB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiAxMDIzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcblx0Yiwgc3Ryb25nIHtcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdH1cblx0c3BhbiB7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title_custom\" mat-dialog-title>\n\t<h6 style=\"margin-bottom: 0px;\">Multiple Article Size</h6>\n</h1>\n<div mat-dialog-content>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>length</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bth</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hgt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let articlesData of articlesDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ articlesData.articlesInMultiple }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ articlesData.length }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ articlesData.breadth }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ articlesData.height }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div mat-dialog-actions style=\"float: right;\">\n\t\n\t<button class=\"btn btn-outline-success\" mat-button\n\t\t[mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MultipleArticleSizePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleArticleSizePopupComponent", function() { return MultipleArticleSizePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
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


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts
//from the particular global folder ends
//for datatable ends
//for popup modal ends
//for modal starts




//for modal ends
var MultipleArticleSizePopupComponent = /** @class */ (function () {
    //for datatable ends
    function MultipleArticleSizePopupComponent(
    /* for datatable starts */ masterReadService, /* for datatable ends */ 
    //for modal starts
    dialogRef, data
    //for modal ends
    ) {
        this.masterReadService = masterReadService;
        this.dialogRef = dialogRef;
        this.data = data;
        //for datatable starts
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.newAttribute = {};
        //for datatable ends
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerLrDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
        this.listOfDataToGet = this.data.listOfDataToPass;
        //        console.log( "Finally >>> " + this.listOfDataToGet );
        this.setValuesInTable();
    }
    /* for datatable starts */
    MultipleArticleSizePopupComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    MultipleArticleSizePopupComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsLrDetails = {
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            //            buttons: [
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    footer: true,
            //                    title: this.changeDataTableTitileForExcel(),
            //                    messageTop: this.chnageDataTableMessageTopExcel(),
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                },
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //                    title: this.changeDataTableTitileForPrint(),
            //                    //                    messageTop: this.chnageDataTableMessageTop(),
            //                    autoPrint: true,
            //                    footer: true,
            //
            //                }
            //            ],
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
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
            }
            //end footerCallback      
        };
    };
    MultipleArticleSizePopupComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLrDetails.unsubscribe();
    };
    //for modal starts
    MultipleArticleSizePopupComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    //for modal ends
    //    getDataForRead() {
    //        this.lrDto.id = this.listOfDataToGet.id;
    //        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
    //
    //    }
    MultipleArticleSizePopupComponent.prototype.setValuesInTable = function () {
        this.articlesDataList = this.listOfDataToGet;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MultipleArticleSizePopupComponent.prototype, "dtElements", void 0);
    MultipleArticleSizePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-article-size-popup',
            template: __webpack_require__(/*! ./multiple-article-size-popup.component.html */ "./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.html"),
            styles: [__webpack_require__(/*! ./multiple-article-size-popup.component.css */ "./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], MultipleArticleSizePopupComponent);
    return MultipleArticleSizePopupComponent;
}());



/***/ }),

/***/ "./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title_custom {\n\tborder-bottom: 1px solid orange;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n@media ( max-width : 1022px) {\n\th6 {\n\t\tdisplay: grid;\n\t}\n}\n\n@media ( min-width : 1023px) and (max-width: 1500px) {\n\tb, strong {\n\t\tfont-weight: bolder;\n\t\tfont-size: 13px;\n\t\tdisplay: inline-block;\n\t}\n\tspan {\n\t\tfont-size: 13px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW5xdWlyeS9zaG9ydC1leHRyYS1sci1lbnF1aXJ5LXBvcHVwL3Nob3J0LWV4dHJhLWxyLWVucXVpcnktcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdDQUFnQztDQUNoQyxZQUFZO0NBQ1osYUFBYTtDQUNiOztBQUVEO0NBQ0M7RUFDQyxjQUFjO0VBQ2Q7Q0FDRDs7QUFFRDtDQUNDO0VBQ0Msb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEI7Q0FDRDtFQUNDLGdCQUFnQjtFQUNoQjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvbHIvZW5xdWlyeS9zaG9ydC1leHRyYS1sci1lbnF1aXJ5LXBvcHVwL3Nob3J0LWV4dHJhLWxyLWVucXVpcnktcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZV9jdXN0b20ge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlO1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4O1xufVxuXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAxMDIycHgpIHtcblx0aDYge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdH1cbn1cblxuQG1lZGlhICggbWluLXdpZHRoIDogMTAyM3B4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG5cdGIsIHN0cm9uZyB7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG5cdHNwYW4ge1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title_custom\" mat-dialog-title>\n\t<h6 style=\"margin-bottom: 0px;\">Short & Extra Details</h6>\n</h1>\n<div mat-dialog-content>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t<strong>LR :</strong>&nbsp;&nbsp;&nbsp;<span  style=\"color: green;\" id=\"lrNumber\"><b>{{listOfDataToGet}}</b></span>\n<!-- \t\t\t\t\t\t\t\t<strong>Short & Extra Details</strong> -->\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Belongs To</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Vehicle Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entered By</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entered At</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrDetailsData of lrDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.lrShortage }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.status }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.userName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.enteredDate }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf=\"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t</tr>-->\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div mat-dialog-actions style=\"float: right;\">\n\t\n\t<button class=\"btn btn-outline-success\" mat-button\n\t\t[mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ShortExtraLrEnquiryPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortExtraLrEnquiryPopupComponent", function() { return ShortExtraLrEnquiryPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
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


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts
//from the particular global folder ends
//for datatable ends
//for popup modal ends
//for modal starts





//for modal ends
var ShortExtraLrEnquiryPopupComponent = /** @class */ (function () {
    //for datatable ends
    function ShortExtraLrEnquiryPopupComponent(
    /* for datatable starts */ masterReadService, reportService, /* for datatable ends */ 
    //for modal starts
    dialogRef, data
    //for modal ends
    ) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.reportService = reportService;
        this.dialogRef = dialogRef;
        this.data = data;
        //for datatable starts
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        //for datatable ends
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerLrDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getShortAndExtraForLrEnquiry = function () {
            _this.getShortAndExtraDetailsInfo();
            _this.reportService.getLRsShortage(_this.lrDto).subscribe(function (response) {
                if (response.length == 0) {
                    swal({
                        title: "Warning",
                        text: "No records found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDetailsDataList = response;
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
        this.listOfDataToGet = this.data.listOfDataToPass;
        this.getShortAndExtraForLrEnquiry();
        //        console.log( "Finally >>> " + this.listOfDataToGet );
    }
    /* for datatable starts */
    ShortExtraLrEnquiryPopupComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    ShortExtraLrEnquiryPopupComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsLrDetails = {
            //};
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            //            buttons: [
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    footer: true,
            //                    title: this.changeDataTableTitileForExcel(),
            //                    messageTop: this.chnageDataTableMessageTopExcel(),
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                },
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //                    title: this.changeDataTableTitileForPrint(),
            //                    //                    messageTop: this.chnageDataTableMessageTop(),
            //                    autoPrint: true,
            //                    footer: true,
            //
            //                }
            //            ],
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
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                // Total over this page
                var pageTotals = api
                    .column(2)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(2).footer()).html(pageTotals);
                //                count starts
                //                counts ends
            }
            //end footerCallback      
        };
    };
    ShortExtraLrEnquiryPopupComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLrDetails.unsubscribe();
    };
    //for modal starts
    ShortExtraLrEnquiryPopupComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    //for modal ends
    ShortExtraLrEnquiryPopupComponent.prototype.getShortAndExtraDetailsInfo = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.branch = this.userDataDtoReturnSession.office;
        this.lrDto.branchType = this.userDataDtoReturnSession.role;
        this.lrDto.mode = "lrEnquiry";
        this.lrDto.lrNumber = this.listOfDataToGet;
        //        console.log( this.lrDto.lrNumber );+
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ShortExtraLrEnquiryPopupComponent.prototype, "dtElements", void 0);
    ShortExtraLrEnquiryPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-short-extra-lr-enquiry-popup',
            template: __webpack_require__(/*! ./short-extra-lr-enquiry-popup.component.html */ "./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.html"),
            styles: [__webpack_require__(/*! ./short-extra-lr-enquiry-popup.component.css */ "./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"], src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], ShortExtraLrEnquiryPopupComponent);
    return ShortExtraLrEnquiryPopupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-lr-enquiry-enquiry-module~src-app-lr-lr-module.js.map