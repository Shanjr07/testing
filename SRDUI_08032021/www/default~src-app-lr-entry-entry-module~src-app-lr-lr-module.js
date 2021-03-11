(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-lr-entry-entry-module~src-app-lr-lr-module"],{

/***/ "./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title_custom {\n\tborder-bottom: 1px solid orange;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n@media ( max-width : 1022px) {\n\th6 {\n\t\tdisplay: grid;\n\t}\n}\n\n.hyperLink_td {\n\tcolor: blue;\n\tcursor: pointer;\n}\n\n@media ( min-width : 1023px) and (max-width: 1500px) {\n\tb, strong {\n\t\tfont-weight: bolder;\n\t\tfont-size: 13px;\n\t\tdisplay: inline-block;\n\t}\n\tspan {\n\t\tfont-size: 13px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW50cnkvYXV0b21hdGVkbHJob2xkLWxyLWVudHJ5LXBvcHVwL2F1dG9tYXRlZGxyaG9sZC1sci1lbnRyeS1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0NBQWdDO0NBQ2hDLFlBQVk7Q0FDWixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQztFQUNDLGNBQWM7RUFDZDtDQUNEOztBQUNEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDO0VBQ0Msb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEI7Q0FDRDtFQUNDLGdCQUFnQjtFQUNoQjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvbHIvZW50cnkvYXV0b21hdGVkbHJob2xkLWxyLWVudHJ5LXBvcHVwL2F1dG9tYXRlZGxyaG9sZC1sci1lbnRyeS1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlX2N1c3RvbSB7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2U7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbkBtZWRpYSAoIG1heC13aWR0aCA6IDEwMjJweCkge1xuXHRoNiB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0fVxufVxuLmh5cGVyTGlua190ZCB7XG5cdGNvbG9yOiBibHVlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDEwMjNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuXHRiLCBzdHJvbmcge1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXHRzcGFuIHtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title_custom\" mat-dialog-title>\n\t<h6 style=\"margin-bottom: 0px;\">Automated Lr Hold Details</h6>\n</h1>\n<div mat-dialog-content>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-7\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t<label>Total Lr's</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"totalLrs\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\tstyle=\"padding: 1px; font-size: 12px\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateBtnSubmit();\">Submit</button>\n\t\t\t\t\t\t\t<button type=\"submit\" style=\"padding: 1px; font-size: 12px\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateClear()\">Clear</button>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t<strong>Multiple LR's Block</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Blocked By</th>\n\t\t\t\t\t\t\t\t\t\t<th>Blocked Date</th>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrDetailsData of lrDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td  (click)=\"goToLrEntryPage(lrDetailsData)\"><u class=\"hyperLink_td\">{{ lrDetailsData.lrNumber }}</u></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.userName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.bookingDate }}</td>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div mat-dialog-actions style=\"float: right;\">\n\n\t<button class=\"btn btn-outline-success\" mat-button\n\t\t[mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AutomatedLrHoldLrEntryPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatedLrHoldLrEntryPopupComponent", function() { return AutomatedLrHoldLrEntryPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
var AutomatedLrHoldLrEntryPopupComponent = /** @class */ (function () {
    //for datatable ends
    function AutomatedLrHoldLrEntryPopupComponent(
    /* for datatable starts */ masterReadService, reportService, router, datePipe, dialog, route, /* for datatable ends */ 
    //for modal starts
    dialogRef, data
    //for modal ends
    ) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.reportService = reportService;
        this.router = router;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.route = route;
        this.dialogRef = dialogRef;
        this.data = data;
        //for datatable starts
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrCntPop = 0;
        this.holdLrs = 0;
        this.lrDtoMultiLrs = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        //for datatable ends
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerLrDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getHoldLrsDetails = function () {
            _this.getHoldLrsInfo();
            _this.masterReadService.getBlockedLrsList(_this.lrDto).subscribe(function (response) {
                if (response.length == 0) {
                    _this.lrCntPop = 0;
                    swal({
                        title: "Warning",
                        text: "No records found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    $("#totalLrs").val('');
                }
                else {
                    _this.lrDetailsDataList = response;
                    _this.lrCntPop = response.length;
                    $("#totalLrs").val('');
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getBlockMultiLrs = function () {
            _this.getBlockMultiLrsInfo();
            _this.masterReadService.getAutomaticLrNo(_this.lrDtoMultiLrs).subscribe(function (response) {
                if (response.length == 0) {
                    swal({
                        title: "Warning",
                        text: "No records found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    $("#totalLrs").val('');
                }
                else {
                    _this.lrDetailsDataList = response;
                    //                  console.log(this.lrDtoMultiLrsRet);
                    _this.getHoldLrsDetails();
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
        this.blockedLrCount = this.userDataDtoReturnSession.blockedLrCount;
        //        console.log( 'last ' + this.blockedLrCount );
        this.listOfDataToGet = this.data.listOfDataToPass;
        this.getHoldLrsDetails();
        //        console.log( "Finally >>> " + this.listOfDataToGet );
    }
    /* for datatable starts */
    AutomatedLrHoldLrEntryPopupComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    AutomatedLrHoldLrEntryPopupComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsLrDetails = {
            dom: 'Bfrtip',
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
            }
            //end footerCallback      
        };
    };
    AutomatedLrHoldLrEntryPopupComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLrDetails.unsubscribe();
    };
    //for modal starts
    AutomatedLrHoldLrEntryPopupComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    //for modal ends
    AutomatedLrHoldLrEntryPopupComponent.prototype.getHoldLrsInfo = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.userName = this.userDataDtoReturnSession.userId;
        //        console.log( this.lrDto.userName );
    };
    AutomatedLrHoldLrEntryPopupComponent.prototype.validateBtnSubmit = function () {
        this.enteredTotalLrs = $("#totalLrs").val();
        //        console.log( '1 ' + this.enteredTotalLrs );
        this.frmCount = this.enteredTotalLrs;
        //        console.log( '2 ' + this.frmCount );
        this.lrCount = this.lrCntPop;
        //        console.log( '3 ' + this.lrCount );
        this.totalLrs = +this.frmCount + +this.lrCount;
        //        console.log( '4 ' + this.totalLrs );
        this.blockedLrCount = this.userDataDtoReturnSession.blockedLrCount;
        //        console.log( 'last ' + this.blockedLrCount );
        if (this.totalLrs > this.blockedLrCount) {
            //            this.holdLrs = +this.totalLrs + -this.frmCount;
            swal({
                title: "Warning",
                text: "Already U have Hold " + this.lrCntPop + " LR's. Not allowed Holding More then " + this.blockedLrCount + " LR's",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            $("#totalLrs").val('');
        }
        else {
            this.getBlockMultiLrs();
        }
    };
    AutomatedLrHoldLrEntryPopupComponent.prototype.getBlockMultiLrsInfo = function () {
        this.enteredTotalLrs = $("#totalLrs").val();
        this.lrDtoMultiLrs.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoMultiLrs.mainstation = this.userDataDtoReturnSession.mainAdminStation;
        this.lrDtoMultiLrs.userName = this.userDataDtoReturnSession.userId;
        this.lrDtoMultiLrs.toLrNo = this.enteredTotalLrs;
    };
    AutomatedLrHoldLrEntryPopupComponent.prototype.goToLrEntryPage = function (lrDetailsData) {
        this.selectedLrNumber = lrDetailsData.lrNumber;
        localStorage.clear();
        localStorage.setItem('lrEntry', this.selectedLrNumber);
        //        console.log( 'this is the Selected Lr ' + localStorage.getItem('lrEntry') );
        this.dialogRef.close();
        //        this.getAutomatedLrHoldDetails();
    };
    //    getAutomatedLrHoldDetails(): void {
    //
    //        const dialogRef = this.dialog.open( LrEntryFormComponent, {
    //
    //            data: { listOfDataToPasstoLrEntry: this.enteredTotalLrs }
    //        } );
    //
    //        dialogRef.afterClosed().subscribe( result => {
    //
    //            this.router.navigate( ['.'], { relativeTo: this.route } );
    //        } );
    //    }
    AutomatedLrHoldLrEntryPopupComponent.prototype.validateClear = function () {
        $("#totalLrs").val('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AutomatedLrHoldLrEntryPopupComponent.prototype, "dtElements", void 0);
    AutomatedLrHoldLrEntryPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-automatedlrhold-lr-entry-popup',
            template: __webpack_require__(/*! ./automatedlrhold-lr-entry-popup.component.html */ "./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.html"),
            styles: [__webpack_require__(/*! ./automatedlrhold-lr-entry-popup.component.css */ "./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.css")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"], src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AutomatedLrHoldLrEntryPopupComponent);
    return AutomatedLrHoldLrEntryPopupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-lr-entry-entry-module~src-app-lr-lr-module.js.map