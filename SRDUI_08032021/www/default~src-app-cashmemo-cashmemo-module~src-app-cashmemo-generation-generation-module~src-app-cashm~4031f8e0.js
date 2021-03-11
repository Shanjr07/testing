(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-cashmemo-cashmemo-module~src-app-cashmemo-generation-generation-module~src-app-cashm~4031f8e0"],{

/***/ "./src/app/dataService/report-service.ts":
/*!***********************************************!*\
  !*** ./src/app/dataService/report-service.ts ***!
  \***********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
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



var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        //for Local
        //        private _baseUrl = "http://localhost:8080/srd/report/v1";
        //for QA
        //    private _baseUrl = "http://54.210.51.40:8080/srd/report/v1";
        //for Live
        //        private _baseUrl = "http://3.222.201.242:8080/srd/report/v1";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webReport;
    }
    ReportService.prototype.getPaidRpt = function (lrDto) {
        return this.http.post(this._baseUrl + "/getPaidReportDetails", lrDto);
    };
    ReportService.prototype.getLorryHireStmtService = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getLorryHireStmtDetails", hireSlipDto);
    };
    ReportService.prototype.getSummaryData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/lr-dispatch-booking-report.json');
    };
    ReportService.prototype.getDailyBookingReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getdailybookingreportdetails", lrDto);
    };
    ReportService.prototype.getLRIssueReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlrissuereportdetails", lrDto);
    };
    ReportService.prototype.getLoaderPerformanceService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLoaderPerformanceDetails", lrDto);
    };
    ReportService.prototype.getStaffDetailsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getStaffDetails", lrDto);
    };
    ReportService.prototype.getBookingStationsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingStationsDetails", lrDto);
    };
    ReportService.prototype.getLocalTripDetailsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLocalTripDetails", lrDto);
    };
    ReportService.prototype.getTruckReportDetailsService = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getTruckReportDetails", hireSlipDto);
    };
    ReportService.prototype.getHireslipNumberRpt = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/gethireslipnumberreport", hireSlipDto);
    };
    ReportService.prototype.getHireslipSummaryWiseRpt = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/gethireslipsummarywiserpt", hireSlipDto);
    };
    ReportService.prototype.getCashmemoDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getcashmemodetails", lrDto);
    };
    ReportService.prototype.getDummyInvoiceDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getdummyinvoicedetails", lrDto);
    };
    ReportService.prototype.getLocalTripsDetailsForLrEnquiry = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlocaltripsdetailsforlrenquiry", lrDto);
    };
    ReportService.prototype.getLRsShortage = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlrsshortage", lrDto);
    };
    ReportService.prototype.getLrEnquiryDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlrenquirydetails", lrDto);
    };
    ReportService.prototype.getLrEnquiryStatus = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlrenquirystatus", lrDto);
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/dto/LR-dto.ts":
/*!*******************************!*\
  !*** ./src/app/dto/LR-dto.ts ***!
  \*******************************/
/*! exports provided: LRDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LRDto", function() { return LRDto; });
/* harmony import */ var _TruckData_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckData-dto */ "./src/app/dto/TruckData-dto.ts");

var LRDto = /** @class */ (function () {
    function LRDto() {
        this.truckDataDto = new _TruckData_dto__WEBPACK_IMPORTED_MODULE_0__["TruckDataDto"]();
    }
    return LRDto;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: UserGodownFilterPipe, AgentFilterPipe, FilterPipe, SupplierNameFilterPipe, AgentSrcFilterPipe, TruckNumberFilterPipe, StaffNameFilterPipe, DestinationFrmSrcFilterPipe, SourceFilterPipe, ConsignorNameFilterPipe, DestFilterPipe, SourceSummNameFilterPipe, CollectioManFilterPipe, StateFilterPipe, LoaderHeadFilterPipe, PackNameFilterPipe, CommodityNameFilterPipe, GodownNameFilterPipe, BankNameFilterPipe, DestinationFilterPipe, ConsigneeNameFilterPipe, DestListFilterPipe, MultipleCommodityFilterPipe, SubCommodityFilterPipe, CollectionManFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGodownFilterPipe", function() { return UserGodownFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFilterPipe", function() { return AgentFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierNameFilterPipe", function() { return SupplierNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentSrcFilterPipe", function() { return AgentSrcFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckNumberFilterPipe", function() { return TruckNumberFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffNameFilterPipe", function() { return StaffNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationFrmSrcFilterPipe", function() { return DestinationFrmSrcFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceFilterPipe", function() { return SourceFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignorNameFilterPipe", function() { return ConsignorNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestFilterPipe", function() { return DestFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceSummNameFilterPipe", function() { return SourceSummNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectioManFilterPipe", function() { return CollectioManFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateFilterPipe", function() { return StateFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderHeadFilterPipe", function() { return LoaderHeadFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackNameFilterPipe", function() { return PackNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityNameFilterPipe", function() { return CommodityNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownNameFilterPipe", function() { return GodownNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankNameFilterPipe", function() { return BankNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationFilterPipe", function() { return DestinationFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeNameFilterPipe", function() { return ConsigneeNameFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestListFilterPipe", function() { return DestListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleCommodityFilterPipe", function() { return MultipleCommodityFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCommodityFilterPipe", function() { return SubCommodityFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionManFilterPipe", function() { return CollectionManFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserGodownFilterPipe = /** @class */ (function () {
    function UserGodownFilterPipe() {
    }
    UserGodownFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        //        return items.filter(
        //            item =>
        //                item['label']
        //                    .toLowerCase()
        //                    .includes( searchTerm.toLowerCase() ) === true
        //        );
        return items.filter(function (item) { return item['subStations'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
        //        return items.filter( function( item: any ) {
        //            return JSON.stringify( item ).toLowerCase().includes( searchTerm.toLowerCase() );
        //        } );
    };
    UserGodownFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterUserGodown'
        })
    ], UserGodownFilterPipe);
    return UserGodownFilterPipe;
}());

var AgentFilterPipe = /** @class */ (function () {
    function AgentFilterPipe() {
    }
    AgentFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['subStation'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    AgentFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterAgent'
        })
    ], AgentFilterPipe);
    return AgentFilterPipe;
}());

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['label'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());

var SupplierNameFilterPipe = /** @class */ (function () {
    function SupplierNameFilterPipe() {
    }
    SupplierNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['supplierName'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    SupplierNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterSupplierName'
        })
    ], SupplierNameFilterPipe);
    return SupplierNameFilterPipe;
}());

var AgentSrcFilterPipe = /** @class */ (function () {
    function AgentSrcFilterPipe() {
    }
    AgentSrcFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['subStation'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    AgentSrcFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterAgentSorce'
        })
    ], AgentSrcFilterPipe);
    return AgentSrcFilterPipe;
}());

var TruckNumberFilterPipe = /** @class */ (function () {
    function TruckNumberFilterPipe() {
    }
    TruckNumberFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['truckNumber'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    TruckNumberFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterTruckNumber'
        })
    ], TruckNumberFilterPipe);
    return TruckNumberFilterPipe;
}());

var StaffNameFilterPipe = /** @class */ (function () {
    function StaffNameFilterPipe() {
    }
    StaffNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['staffName'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    StaffNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterStaffName'
        })
    ], StaffNameFilterPipe);
    return StaffNameFilterPipe;
}());

var DestinationFrmSrcFilterPipe = /** @class */ (function () {
    function DestinationFrmSrcFilterPipe() {
    }
    DestinationFrmSrcFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['source'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    DestinationFrmSrcFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterDestinationFrmSrc'
        })
    ], DestinationFrmSrcFilterPipe);
    return DestinationFrmSrcFilterPipe;
}());

var SourceFilterPipe = /** @class */ (function () {
    function SourceFilterPipe() {
    }
    SourceFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['subStations'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    SourceFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterFrmSource'
        })
    ], SourceFilterPipe);
    return SourceFilterPipe;
}());

var ConsignorNameFilterPipe = /** @class */ (function () {
    function ConsignorNameFilterPipe() {
    }
    ConsignorNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['consignorName'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    ConsignorNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterConsignorName'
        })
    ], ConsignorNameFilterPipe);
    return ConsignorNameFilterPipe;
}());

var DestFilterPipe = /** @class */ (function () {
    function DestFilterPipe() {
    }
    DestFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['destination'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    DestFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterDest'
        })
    ], DestFilterPipe);
    return DestFilterPipe;
}());

var SourceSummNameFilterPipe = /** @class */ (function () {
    function SourceSummNameFilterPipe() {
    }
    SourceSummNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['source'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    SourceSummNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterSourceForSumm'
        })
    ], SourceSummNameFilterPipe);
    return SourceSummNameFilterPipe;
}());

var CollectioManFilterPipe = /** @class */ (function () {
    function CollectioManFilterPipe() {
    }
    CollectioManFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['collectioMan'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    CollectioManFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterCollectioMan'
        })
    ], CollectioManFilterPipe);
    return CollectioManFilterPipe;
}());

var StateFilterPipe = /** @class */ (function () {
    function StateFilterPipe() {
    }
    StateFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['state'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    StateFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterState'
        })
    ], StateFilterPipe);
    return StateFilterPipe;
}());

var LoaderHeadFilterPipe = /** @class */ (function () {
    function LoaderHeadFilterPipe() {
    }
    LoaderHeadFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['loaderHead'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    LoaderHeadFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterLoaderHead'
        })
    ], LoaderHeadFilterPipe);
    return LoaderHeadFilterPipe;
}());

var PackNameFilterPipe = /** @class */ (function () {
    function PackNameFilterPipe() {
    }
    PackNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['packNature'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    PackNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterPackName'
        })
    ], PackNameFilterPipe);
    return PackNameFilterPipe;
}());

var CommodityNameFilterPipe = /** @class */ (function () {
    function CommodityNameFilterPipe() {
    }
    CommodityNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['commodityName'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    CommodityNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterCommodityName'
        })
    ], CommodityNameFilterPipe);
    return CommodityNameFilterPipe;
}());

var GodownNameFilterPipe = /** @class */ (function () {
    function GodownNameFilterPipe() {
    }
    GodownNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['godownName'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    GodownNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterGodownName'
        })
    ], GodownNameFilterPipe);
    return GodownNameFilterPipe;
}());

var BankNameFilterPipe = /** @class */ (function () {
    function BankNameFilterPipe() {
    }
    BankNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['bankName'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    BankNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterBankName'
        })
    ], BankNameFilterPipe);
    return BankNameFilterPipe;
}());

var DestinationFilterPipe = /** @class */ (function () {
    function DestinationFilterPipe() {
    }
    DestinationFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['godownName'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    DestinationFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterDestination'
        })
    ], DestinationFilterPipe);
    return DestinationFilterPipe;
}());

var ConsigneeNameFilterPipe = /** @class */ (function () {
    function ConsigneeNameFilterPipe() {
    }
    ConsigneeNameFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['consigneeName'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    ConsigneeNameFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterConsigneeName'
        })
    ], ConsigneeNameFilterPipe);
    return ConsigneeNameFilterPipe;
}());

var DestListFilterPipe = /** @class */ (function () {
    function DestListFilterPipe() {
    }
    DestListFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['listOfDestination'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    DestListFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterDestList'
        })
    ], DestListFilterPipe);
    return DestListFilterPipe;
}());

var MultipleCommodityFilterPipe = /** @class */ (function () {
    function MultipleCommodityFilterPipe() {
    }
    MultipleCommodityFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['multipleCommodity'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    MultipleCommodityFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterMultipleCommodity'
        })
    ], MultipleCommodityFilterPipe);
    return MultipleCommodityFilterPipe;
}());

var SubCommodityFilterPipe = /** @class */ (function () {
    function SubCommodityFilterPipe() {
    }
    SubCommodityFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['subCommodity'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    SubCommodityFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterSubCommodity'
        })
    ], SubCommodityFilterPipe);
    return SubCommodityFilterPipe;
}());

var CollectionManFilterPipe = /** @class */ (function () {
    function CollectionManFilterPipe() {
    }
    CollectionManFilterPipe.prototype.transform = function (items, searchTerm) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) { return item['collectioMan'].toLowerCase()
            .includes(searchTerm.toLowerCase()) === true; });
    };
    CollectionManFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterCollectionMan'
        })
    ], CollectionManFilterPipe);
    return CollectionManFilterPipe;
}());



/***/ }),

/***/ "./src/app/report/daily-report/bangalore-office/bangalore-office.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/report/daily-report/bangalore-office/bangalore-office.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2RhaWx5LXJlcG9ydC9iYW5nYWxvcmUtb2ZmaWNlL2JhbmdhbG9yZS1vZmZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9kYWlseS1yZXBvcnQvYmFuZ2Fsb3JlLW9mZmljZS9iYW5nYWxvcmUtb2ZmaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/report/daily-report/bangalore-office/bangalore-office.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/report/daily-report/bangalore-office/bangalore-office.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n.imb_patch {\n\ttext-align: center;\n\tbackground-color: orange;\n\tpadding: 2px;\n}\n</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Bangalore Office</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\"\n\t\t\t\t\t\tstyle=\"pading-bottom: 5px; border-bottom: 1px solid orange;\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"selectDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"selectDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#selectDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"selectDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"selectRegion\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Region</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Region</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"south\">South</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mh\">MH</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"selectRegion\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Region</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Region\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(options | filter: control.value) as result\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!result.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 0px 10px 0px 10px;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-primary\" id=\"dropdownBasic1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDropdownToggle>Action</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10 dropdown-item\" id=\"\">Get\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10 dropdown-item\" id=\"\">Print</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10 dropdown-item\" id=\"\">Export</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark \n\t\t\t\t\t\t\t\t\t\t\tdropdown-item\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"finishBtn\">Finish</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-7 vl p-t-10\">\n\t\t\t\t\t\t<!-- \t\t\t\t\tstyle=\"border-bottom: 1px solid orange;\"> -->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">Agent Due\n\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgetnsDueDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgetnsDueDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Stations</th>\n\t\t\t\t\t\t\t\t\t\t<th>Old Dues</th>\n\t\t\t\t\t\t\t\t\t\t<th>D-Note</th>\n\t\t\t\t\t\t\t\t\t\t<th>Last Due</th>\n\t\t\t\t\t\t\t\t\t\t<th>D-Note</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Due</th>\n\t\t\t\t\t\t\t\t\t\t<th>D-Note</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agetnsDueDetailsData of agetnsDueDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ agetnsDueDetailsData.stations }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agetnsDueDetailsData.oldDues }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agetnsDueDetailsData.oldDueNote }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agetnsDueDetailsData.lastDue }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agetnsDueDetailsData.lastDueNote }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agetnsDueDetailsData.currentDue }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agetnsDueDetailsData.currentDueNote }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agetnsDueDetailsData.total }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble ends -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable starts  -->\n\n\t\t\t\t\t<div class=\"col-md-5 vl p-t-10\" style=\"padding-bottom: 10px;\">\n\t\t\t\t\t\t<!-- \t\t\t\t\tborder-bottom: 1px solid orange; -->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">Supplier Balance\n\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSupplierBalanceDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerSupplierBalanceDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Supplier Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Balance Amt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let supplierBalanceDetailsData of supplierBalanceDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ supplierBalanceDetailsData.supplierName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ supplierBalanceDetailsData.balanceAmt }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable ends  -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\n\t\t\t\t\t<div class=\"col-md-6 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">Bank Master</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBankMaster\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerBankMaster\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Bank Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount(In Cash)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Balance</th>\n\t\t\t\t\t\t\t\t\t\t<th>Provisions Chq Amt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let bankMasterData of bankMasterDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.bankName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.amountInCash }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.chequeAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.totalBalance }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.provisionsChequeAmount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable starts  -->\n\n\t\t\t\t\t<div class=\"col-md-3 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">PDC Details</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPdcDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPdcDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t<th>Balance Amt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let pdcDetailsData of pdcDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ pdcDetailsData.station }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ pdcDetailsData.balanceAmt }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable ends  -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable starts  -->\n\n\t\t\t\t\t<div class=\"col-md-3 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div class=\"row\" style=\"padding-bottom: 5px;\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">Email ID's</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" style=\"padding: 0px 10px 0px 10px;\"\n\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary\" id=\"sendEmailBtn\">Send Email</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsEmailId\" [dtTrigger]=\"dtTriggerEmailId\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Email ID</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let emailIdData of emailIdDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ emailIdData.emailId }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable ends  -->\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/daily-report/bangalore-office/bangalore-office.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/report/daily-report/bangalore-office/bangalore-office.component.ts ***!
  \************************************************************************************/
/*! exports provided: BangaloreOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangaloreOfficeComponent", function() { return BangaloreOfficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
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

//for the select option with filter starts

//for the select option with filter ends
//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var BangaloreOfficeComponent = /** @class */ (function () {
    function BangaloreOfficeComponent(agetnsDueDetailsRpt) {
        this.agetnsDueDetailsRpt = agetnsDueDetailsRpt;
        //for the select option with filter starts
        this.options = [
            { id: 1, label: 'South' },
            { id: 2, label: 'MH' },
        ];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerAgetnsDueDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerSupplierBalanceDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerBankMaster = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerPdcDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerEmailId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    BangaloreOfficeComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    BangaloreOfficeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //the first datatable starts
        this.dtOptionsAgetnsDueDetails = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Stations',
                    data: 'stations'
                },
                {
                    title: 'Old Dues',
                    data: 'oldDues'
                },
                {
                    title: 'D-Note',
                    data: 'oldDueNote'
                },
                {
                    title: 'Last Due',
                    data: 'latDueNote'
                },
                {
                    title: 'Current Due',
                    data: 'currentDueNote'
                },
                {
                    title: 'Total',
                    data: 'total'
                },
                {
                    title: 'To Pay',
                    data: 'toPay'
                },
                {
                    title: 'Paid',
                    data: 'paid'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            // dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            /*  buttons: [
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
                      text: '<i class="fas fa-print"> Print</i>',
                      titleAttr: 'Print',
  
                  }
  
  
              ],*/
            // the below code is for button export ends
            //place holder in search/filter in datatable starts
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            //place holder in search/filter in datatable ends
            processing: true,
            searching: false,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 220,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        },
            //the first datatable ends
            //            the second datatable starts 
            this.dtOptionsSupplierBalanceDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Supplier Name',
                        data: 'supplierName'
                    },
                    {
                        title: 'Balance Amt',
                        data: 'balanceAmt'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                //dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                /* buttons: [
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
                         text: '<i class="fas fa-print"> Print</i>',
                         titleAttr: 'Print',
 
                     }
                 ],*/
                // the below code is for button export ends
                //place holder in search/filter in datatable starts
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                //place holder in search/filter in datatable ends
                processing: true,
                searching: false,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 220,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //the second datatable ends
            //the third datatable starts            
            this.dtOptionsBankMaster = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Bank Name',
                        data: 'bankName'
                    },
                    {
                        title: 'Amount(In Cash)',
                        data: 'amountInCash'
                    },
                    {
                        title: 'Cheque Amount',
                        data: 'chequeAmount'
                    },
                    {
                        title: 'Total Balance',
                        data: 'totalBalance'
                    },
                    {
                        title: 'Provisions Chq Amt',
                        data: 'provisionsChequeAmount'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                //dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                /* buttons: [
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
                 ],*/
                // the below code is for button export ends
                //place holder in search/filter in datatable starts
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                //place holder in search/filter in datatable ends
                processing: true,
                searching: false,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 380,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //the third datatable ends
            //the fourth datatable starts
            this.dtOptionsPdcDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Station',
                        data: 'station'
                    },
                    {
                        title: 'Balance Amt',
                        data: 'balanceAmt'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                //dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                /* buttons: [
                     {
                         extend: 'print',
                         text: '<i class="fas fa-print"> Print</i>',
                         titleAttr: 'Print',
                     }, {
                         extend: 'excel',
                         text: '<i class="fas fa-file-excel"> Excel</i>',
                         titleAttr: 'Excel',
                         exportOptions: {
                             columns: ':visible'
                         }
                     }
 
                 ], */
                // the below code is for button export ends
                //place holder in search/filter in datatable starts
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                //place holder in search/filter in datatable ends
                processing: true,
                searching: false,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 380,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //the fourth datatable ends
            //the fifth datatable starts 
            this.dtOptionsEmailId = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Email Id',
                        data: 'emailId'
                    }
                ],
                "columnDefs": [{
                        'targets': 0,
                        'checkboxes': {
                            'selectRow': true
                        }
                    }],
                "select": {
                    'style': 'multi'
                },
                //columns is used to for export and others endss                    
                // the below code is for button export starts
                //dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                /* buttons: [
                    //                {
                    //                    extend: 'excel',
                    //                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    //                    titleAttr: 'Excel',
                    //                    exportOptions: {
                    //                        columns: ':visible'
                    //                    }
                    //                },
                    {
                        extend: 'print',
                        text: '<i class="fas fa-print"> Print</i>',
                        titleAttr: 'Print',

                    }

                ], */
                // the below code is for button export ends
                //place holder in search/filter in datatable starts
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                //place holder in search/filter in datatable ends
                processing: true,
                searching: false,
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 290,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            };
        //the fifth datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        this.getDataAgetnsDueDetailsTable = this.agetnsDueDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionAgetnsDueDetails = this.getDataAgetnsDueDetailsTable.subscribe(function (data) {
            _this.agetnsDueDetailsDataList = data['data'];
            _this.dtTriggerAgetnsDueDetails.next();
        });
        //first service ends
        //second service starts
        this.getDataSupplierBalanceDetailsTable = this.agetnsDueDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionSupplierBalanceDetails = this.getDataSupplierBalanceDetailsTable.subscribe(function (data) {
            _this.supplierBalanceDetailsDataList = data['data'];
            _this.dtTriggerSupplierBalanceDetails.next();
        });
        //second service ends
        //third service starts
        this.getDataBankMaster = this.agetnsDueDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionBankMaster = this.getDataBankMaster.subscribe(function (data) {
            _this.bankMasterDataList = data['data'];
            _this.dtTriggerBankMaster.next();
        });
        //third service ends
        //fourth service starts
        this.getDataPdcDetails = this.agetnsDueDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionPdcDetails = this.getDataPdcDetails.subscribe(function (data) {
            _this.pdcDetailsDataList = data['data'];
            _this.dtTriggerPdcDetails.next();
        });
        //fourth service ends
        //fifth service starts
        this.getDataEmailIdTable = this.agetnsDueDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionEmailId = this.getDataEmailIdTable.subscribe(function (data) {
            _this.emailIdDataList = data['data'];
            _this.dtTriggerEmailId.next();
        });
        //fifth service ends
    };
    BangaloreOfficeComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerAgetnsDueDetails.unsubscribe();
        this.dtTriggerSupplierBalanceDetails.unsubscribe();
        this.dtTriggerBankMaster.unsubscribe();
        this.dtTriggerPdcDetails.unsubscribe();
        this.dtTriggerEmailId.unsubscribe();
        this.onDestroyUnsubscribtionAgetnsDueDetails.unsubscribe();
        this.onDestroyUnsubscribtionSupplierBalanceDetails.unsubscribe();
        this.onDestroyUnsubscribtionBankMaster.unsubscribe();
        this.onDestroyUnsubscribtionPdcDetails.unsubscribe();
        this.onDestroyUnsubscribtionEmailId.unsubscribe();
    };
    //for datepicker starts
    // the selectToday is the method for  selecting todays'z date
    BangaloreOfficeComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker ends
    //for the select option with filter starts
    BangaloreOfficeComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], BangaloreOfficeComponent.prototype, "dtElements", void 0);
    BangaloreOfficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bangalore-office',
            template: __webpack_require__(/*! ./bangalore-office.component.html */ "./src/app/report/daily-report/bangalore-office/bangalore-office.component.html"),
            styles: [__webpack_require__(/*! ./bangalore-office.component.css */ "./src/app/report/daily-report/bangalore-office/bangalore-office.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], BangaloreOfficeComponent);
    return BangaloreOfficeComponent;
}());



/***/ }),

/***/ "./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\n\nhr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below css is done for the verticle form ends here */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2RhaWx5LXJlcG9ydC9kYWlseS1ib29raW5nLXJlcG9ydC9kYWlseS1ib29raW5nLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDs7QUFFNUQ7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVELDJEQUEyRCIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9kYWlseS1yZXBvcnQvZGFpbHktYm9va2luZy1yZXBvcnQvZGFpbHktYm9va2luZy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gc3RhcnRzIGhlcmUqL1xuXG5ociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gZW5kcyBoZXJlICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Daily Booking Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <label>View Type</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-question\"></i>\n                            </span>\n                          </div>\n                           <select class=\"custom-select col-12\"   id=\"viewType\">\n                            <option selected value=\"summaryWise\">Summary Wise</option>\n                            <option value=\"detailsWise\">Details Wise</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"godownRpt\" [(ngModel)]=\"viewByGodownRpt\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"godownRpt\">Godown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"orderGoodsRpt\" [(ngModel)]=\"viewByOrderGoodsRpt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"orderGoodsRpt\">Order Goods</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"!viewByGodownRpt\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input ng-change=\"vm.dateString = (dateObj | date: 'dd/dd/yyyy')\" class=\"form-control\" (click)=\"e.toggle()\" placeholder=\"yyyy-mm-dd\"\n                                  name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #e=\"ngbDatepicker\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"fromDates\" ngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"!viewByGodownRpt\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"source\" #source placeholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [formControl]=\"controlMainSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"defaultGodownName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentDetailsSourceOptions | filterAgentSorce: controlMainSource.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.subStation\"> {{\n\t\t\t\t\t\t\t\t\t\t\toption.subStation }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultSource.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destination\" #destination\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainDestination\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(lrDtosDestinationOptionsGet | filterGodownName: controlMainDestination.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.godownName\"> {{\n\t\t\t\t\t\t\t\t\t\t\toption.godownName }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultDestination.length\"> No result</app-option> </ng-container> </ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"validateBtnSearch()\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t(click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Daily Booking Report</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDailyBkgReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDailyBkgReport\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>LC Charge</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t<th>Pvt Marker</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dep.Dt Frm 1st Pt.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Arr.Dt At 1st Pt.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dep.Dt Frm 2nd Pt.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Arr.Dt At 2nd Pt.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dep.Dt Frm 3rd Pt.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Arr.Dt At 3rd Pt.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Delivery Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot No.of Days</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let dailyBkgReportData of dailyBkgReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.chargedWeight}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.lcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.riskCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.privateMarker }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.enteredDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.departuredate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.ArrivalDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.depDateFrmTrnspDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.arrDateAtTrnspDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.depDateFrmTrnspDate2 }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.arrDateAtTrnspDate2 }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.deliveryDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dailyBkgReportData.diffDays }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DailyBookingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyBookingReportComponent", function() { return DailyBookingReportComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*for popup*/ 
//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts



//for the select option with filter ends




var DailyBookingReportComponent = /** @class */ (function () {
    function DailyBookingReportComponent(masterService, http, modalService, masterReadService, reportService, router) {
        var _this = this;
        this.masterService = masterService;
        this.http = http;
        this.modalService = modalService;
        this.masterReadService = masterReadService;
        this.reportService = reportService;
        this.router = router;
        //for datepicker ends
        this.loadingIndicator = true;
        //    onDestroyUnsubscribtionDailyBkgReport: Subscription;
        this.viewByGodownRpt = false;
        this.viewByOrderGoodsRpt = false;
        this.pageTitle = "Daily Booking Stock Report";
        this.controlMainSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.controlMainDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        //    lrDtosDestinationOptions:any;
        //    lrDtosDestinationOptionsGet:any;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        //    lrDtoFromStation: LRDto = new LRDto();
        //    lrDtoFromRet: any;
        this.lrDtoToStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.isLoggedIn = true;
        this.agentDto = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_10__["AgentDetailsDto"]();
        this.agentDtoAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_10__["AgentDetailsDto"]();
        this.lrDtoToStationAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        //    agentDetailsSourceOptions: any;
        //    agentDetailsSourceOptionsGet: any;
        this.srcForRpt = "Daily Bkg Rpt Show Src Specific";
        this.dtTriggerDailyBkgReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getToStationDetailsList = function () {
            _this.getToStationDetails();
            _this.masterReadService.getDestinationListDetails(_this.lrDtoToStation).subscribe(function (response) {
                if (response.length == 0) {
                    alert('No Destination records found!');
                }
                else {
                    _this.lrDtosDestinationOptionsGet = response;
                    _this.lrDtoToStationAll.godownName = "ALL";
                    _this.lrDtosDestinationOptionsGet.push(_this.lrDtoToStationAll);
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getAgentList = function () {
            //        this.getAgentListDetails();
            _this.masterReadService.getSourceListDetails(_this.agentDto).subscribe(function (response) {
                if (response.length == 0) {
                    alert('No records found!');
                }
                else {
                    if (_this.srcForRpt == 'Daily Bkg Rpt Show Src All') {
                        _this.agentDetailsSourceOptions = response;
                        _this.agentDtoAll.subStation = "ALL";
                        _this.agentDetailsSourceOptions.push(_this.agentDtoAll);
                    }
                    else if (_this.srcForRpt == 'Daily Bkg Rpt Show Src Specific') {
                        _this.agentDetailsSourceOptions = response;
                        _this.agentDtoAll.subStation = "ALL";
                        _this.agentDetailsSourceOptions.push(_this.agentDtoAll);
                    }
                    else {
                        _this.agentDetailsSourceOptions = response;
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.gridReconfigure = function () {
            _this.getSearchMethod();
            //        store.removeAll();
            //        prtlrDtos.clear();
            _this.reportService.getDailyBookingReport(_this.lrDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.dailyBkgReportDataList = response;
                    _this.dtTriggerDailyBkgReport.next();
                    //                    console.log( this.dailyBkgReportDataList );
                }
            }), function (error) { return swal({
                title: "Error",
                text: "Server Error While Getting Daily Booking Report Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
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
        }
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.getToStationDetailsList();
            if (this.srcForRpt == "Daily Bkg Rpt Show Src All") {
                this.getAgentListDetails('SrcAll');
                //                this.defaultGodownName ='All';
            }
            else if (this.srcForRpt == "Daily Bkg Rpt Show Src Specific") {
                this.getAgentListDetails('specific');
                //                this.defaultGodownName ='All';
            }
            else {
                this.defaultGodownName = this.userDataDtoReturnSession.office;
            }
        }
    }
    DailyBookingReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    DailyBookingReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DailyBookingReportComponent.prototype.ngOnInit = function () {
        this.dtOptionsDailyBkgReport = {
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
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    title: this.changeDataTableTitile(),
                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: this.changeDataTableTitile(),
                    messageTop: this.chnageDataTableMessageTopExcel(),
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
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                var total = api
                    .column(3)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(3).footer()).html(total);
                var total = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(7).footer()).html(total);
                var total = api
                    .column(8)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(8).footer()).html(total);
                var total = api
                    .column(9)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(9).footer()).html(total);
                var total = api
                    .column(10)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(10).footer()).html(total);
                var total = api
                    .column(11)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(11).footer()).html(total);
                var total = api
                    .column(12)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(12).footer()).html(total);
            }
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //        this.getDataFrmServiceFrTable = this.dailyBkgReport.getSummaryData()
        //        this.onDestroyUnsubscribtionDailyBkgReport = this.getDataFrmServiceFrTable.subscribe(data => {
        //            this.dailyBkgReportDataList = data['data'];
        //            this.dtTriggerDailyBkgReport.next();
        //        });
    };
    DailyBookingReportComponent.prototype.changeDataTableTitile = function () {
        return '<table><tr style="width:100%"><td style="width:60%"><img src="assets/images/srdLogisticPrintLogo.png"></td>'
            + '<td style="width:40%"><p>' + this.userDataDtoReturnSession.addressId
            + '</p></td></tr></table>';
    };
    DailyBookingReportComponent.prototype.chnageDataTableMessageTop = function () {
        return '<span>'
            + '<div style="text-align:center;">'
            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
            + '<h6 style="font-weight:bold;">'
            + "From : " + '<span style="font-weight:400;">' + this.lrDto.fromDate + '</span>'
            + "To : " + '<span style="font-weight:400;">' + this.lrDto.toDate + '</span>'
            + '</h6>'
            + '</div>'
            + '</span>';
    };
    DailyBookingReportComponent.prototype.chnageDataTableMessageTopExcel = function () {
        return "From: "
            + this.lrDto.fromDate
            + "           "
            + "To: "
            + this.lrDto.toDate;
    };
    DailyBookingReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDailyBkgReport.unsubscribe();
        //        this.onDestroyUnsubscribtionDailyBkgReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    DailyBookingReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //  To Station 
    DailyBookingReportComponent.prototype.getToStationDetails = function () {
        this.lrDtoToStation.companyId = this.userDataDtoReturnSession.companyId;
        if (this.srcForRpt == "Daily Bkg Rpt Show Src All") {
            this.lrDtoToStation.mode = "";
        }
    };
    //  From Station for Booking
    DailyBookingReportComponent.prototype.getAgentListDetails = function (string) {
        this.agentDto.companyId = this.userDataDtoReturnSession.companyId;
        this.agentDto.column2 = "Working";
        if (string == "SrcAll") {
            this.agentDto.mode = "SrcAllForDlyBkgRpt";
        }
        else {
            this.agentDto.mode = "mainBranch";
            if (this.srcForRpt == 'Daily Bkg Rpt Show Src Specific') {
                this.agentDto.mainStation = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.agentDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
            }
        }
        this.getAgentList();
    };
    DailyBookingReportComponent.prototype.validateBtnSearch = function () {
        this.gridReconfigure();
    };
    DailyBookingReportComponent.prototype.getSearchMethod = function () {
        //        this.selectedSource = $( "#source" ).val();
        //        this.selectedDest = $( "#destination" ).val();
        this.selectedSource = "Budhpur";
        this.selectedDest = "ALL";
        //        console.log( 'Source is ' + this.selectedSource );
        //        console.log( 'Destination is ' + this.selectedDest );
        this.lrDto.mode = null;
        if (this.viewByGodownRpt == true) {
            //            console.log( 'Godown is 1 : ' + this.viewByGodownRpt );
            this.lrDto.mode = "Godown";
            this.lrDto.fromDate = null;
            this.lrDto.toDate = null;
            //            this.lrDto.fromDate =new Date();
            //            this.lrDto.toDate =new Date();
        }
        else {
            //            console.log( 'Godown is 2 : ' + this.viewByGodownRpt );
            this.lrDto.fromDate = "2019-05-01";
            this.lrDto.toDate = "2019-06-01";
            //            lrDto.setFromDate(dtf.format(dfFrom.getValue()));
            //            lrDto.setToDate(dtf.format(dfTo.getValue()));
        }
        this.lrDto.mainstation = this.userDataDtoReturnSession.mainAdminStation;
        this.lrDto.source = this.selectedSource;
        //        console.log( 'mainstation is ' + this.lrDto.mainstation );
        //        console.log( 'source is ' + this.lrDto.source );
        if (this.selectedSource != null
            && this.selectedSource == "All") {
            //            this.lrDto.listOfStation = this.userDataDtoReturnSession.stationList;
        }
        else if (this.selectedSource != null
            && (this.selectedSource != "All")) {
            //            this.lrDto.listOfStation = this.selectedSource;
            //            console.log( 'listOfStation is 2 ' + this.lrDto.listOfStation );
            //            console.log( 'listOfStation is List  ' + this.userDataDtoReturnSession.stationList );
        }
        if (this.selectedDest != null) {
            this.lrDto.destination = this.selectedDest;
        }
        this.lrDto.reportMode = this.userDataDtoReturnSession.mainAdminStation;
        if (this.viewByOrderGoodsRpt != null && this.viewByOrderGoodsRpt == true) {
            this.lrDto.isOrderGoods = true;
            //            console.log( 'isOrderGoods is 1 ' + this.viewByOrderGoodsRpt );
        }
        else {
            this.lrDto.isOrderGoods = false;
            //            console.log( 'isOrderGoods is 2 ' + this.viewByOrderGoodsRpt );
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], DailyBookingReportComponent.prototype, "dtElements", void 0);
    DailyBookingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-daily-booking-report',
            template: __webpack_require__(/*! ./daily-booking-report.component.html */ "./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.html"),
            styles: [__webpack_require__(/*! ./daily-booking-report.component.css */ "./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"], src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_11__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], DailyBookingReportComponent);
    return DailyBookingReportComponent;
}());



/***/ }),

/***/ "./src/app/report/daily-report/daily-report.module.ts":
/*!************************************************************!*\
  !*** ./src/app/report/daily-report/daily-report.module.ts ***!
  \************************************************************/
/*! exports provided: DailyReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportModule", function() { return DailyReportModule; });
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
/* harmony import */ var src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.routing */ "./src/app/report/daily-report/daily-report.routing.ts");
/* harmony import */ var src_app_report_daily_report_daily_booking_report_daily_booking_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/daily-report/daily-booking-report/daily-booking-report.component */ "./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.ts");
/* harmony import */ var src_app_report_daily_report_office_report_office_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/daily-report/office-report/office-report.component */ "./src/app/report/daily-report/office-report/office-report.component.ts");
/* harmony import */ var src_app_report_daily_report_bangalore_office_bangalore_office_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/daily-report/bangalore-office/bangalore-office.component */ "./src/app/report/daily-report/bangalore-office/bangalore-office.component.ts");
/* harmony import */ var src_app_report_daily_report_door_delivery_door_delivery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/daily-report/door-delivery/door-delivery.component */ "./src/app/report/daily-report/door-delivery/door-delivery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends





var DailyReportModule = /** @class */ (function () {
    function DailyReportModule() {
    }
    DailyReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_daily_report_daily_report_routing__WEBPACK_IMPORTED_MODULE_10__["DailyReportRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"]],
            declarations: [
                src_app_report_daily_report_daily_booking_report_daily_booking_report_component__WEBPACK_IMPORTED_MODULE_11__["DailyBookingReportComponent"],
                src_app_report_daily_report_office_report_office_report_component__WEBPACK_IMPORTED_MODULE_12__["OfficeReportComponent"],
                src_app_report_daily_report_bangalore_office_bangalore_office_component__WEBPACK_IMPORTED_MODULE_13__["BangaloreOfficeComponent"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["AgentFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["UserGodownFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SupplierNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["AgentSrcFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["StaffNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["TruckNumberFilterPipe"],
                src_app_report_daily_report_door_delivery_door_delivery_component__WEBPACK_IMPORTED_MODULE_14__["DoorDeliveryComponent"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["DestinationFrmSrcFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SourceFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["ConsignorNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["DestFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SourceSummNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CollectioManFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["StateFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["LoaderHeadFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["PackNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CommodityNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["GodownNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["BankNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CommodityNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["ConsigneeNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["DestListFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["MultipleCommodityFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["DestinationFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SubCommodityFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CollectionManFilterPipe"],
            ],
            exports: [
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["AgentFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["UserGodownFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SupplierNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["AgentSrcFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["StaffNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["TruckNumberFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["DestinationFrmSrcFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SourceFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["ConsignorNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["DestFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SourceSummNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CollectioManFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["StateFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["LoaderHeadFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["PackNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CommodityNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["GodownNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["BankNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CommodityNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["ConsigneeNameFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["DestListFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["MultipleCommodityFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["DestinationFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SubCommodityFilterPipe"],
                src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CollectionManFilterPipe"]
            ],
        })
    ], DailyReportModule);
    return DailyReportModule;
}());



/***/ }),

/***/ "./src/app/report/daily-report/daily-report.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/report/daily-report/daily-report.routing.ts ***!
  \*************************************************************/
/*! exports provided: DailyReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportRoutes", function() { return DailyReportRoutes; });
/* harmony import */ var src_app_report_daily_report_daily_booking_report_daily_booking_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/daily-report/daily-booking-report/daily-booking-report.component */ "./src/app/report/daily-report/daily-booking-report/daily-booking-report.component.ts");
/* harmony import */ var src_app_report_daily_report_office_report_office_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/daily-report/office-report/office-report.component */ "./src/app/report/daily-report/office-report/office-report.component.ts");
/* harmony import */ var src_app_report_daily_report_bangalore_office_bangalore_office_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/daily-report/bangalore-office/bangalore-office.component */ "./src/app/report/daily-report/bangalore-office/bangalore-office.component.ts");
/* harmony import */ var src_app_report_daily_report_door_delivery_door_delivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/daily-report/door-delivery/door-delivery.component */ "./src/app/report/daily-report/door-delivery/door-delivery.component.ts");




var DailyReportRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dailyBookingReport',
                component: src_app_report_daily_report_daily_booking_report_daily_booking_report_component__WEBPACK_IMPORTED_MODULE_0__["DailyBookingReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'officeReport',
                component: src_app_report_daily_report_office_report_office_report_component__WEBPACK_IMPORTED_MODULE_1__["OfficeReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'bangaloreOffice',
                component: src_app_report_daily_report_bangalore_office_bangalore_office_component__WEBPACK_IMPORTED_MODULE_2__["BangaloreOfficeComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'doorDelivery',
                component: src_app_report_daily_report_door_delivery_door_delivery_component__WEBPACK_IMPORTED_MODULE_3__["DoorDeliveryComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/daily-report/door-delivery/door-delivery.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/report/daily-report/door-delivery/door-delivery.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_custom {\n\tpadding: 5px 10px 5px 10px;\n}\n\n.border_bottom {\n\tborder-bottom: 1px solid orange;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2RhaWx5LXJlcG9ydC9kb29yLWRlbGl2ZXJ5L2Rvb3ItZGVsaXZlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDJCQUEyQjtDQUMzQjs7QUFFRDtDQUNDLGdDQUFnQztDQUNoQyIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9kYWlseS1yZXBvcnQvZG9vci1kZWxpdmVyeS9kb29yLWRlbGl2ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuX2N1c3RvbSB7XG5cdHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xufVxuXG4uYm9yZGVyX2JvdHRvbSB7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2U7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/report/daily-report/door-delivery/door-delivery.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/report/daily-report/door-delivery/door-delivery.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n\n/* for ipad and ipad pro */\n@media ( min-width : 768px) and (max-width: 1200px) {\n\t.col-md-3 {\n\t\tflex: 0 0 50% !important;\n\t\tmax-width: 100% !important;\n\t}\n}\n</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Door Delivery</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"departFrom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDate\" ngbDatepicker #toDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"srdPercentage\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>SRD%</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-handshake\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hamaliPercentage\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali%</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-handshake\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"partyName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Party Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Party\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(partyOptions | filter: control.value) as resultParty\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultParty\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultParty.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"padding: 10px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"articles\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"Articles\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"srdAmount\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"SRD Amt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hamaliAmount\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"Hamali Amt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn_custom btn-success\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"addBtn\" placement=\"left\" ngbTooltip=\"Add\">+</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn_custom btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"removeBtn\" placement=\"left\" ngbTooltip=\"Remove\">x</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPartyDetailsTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPartyDetailsTable\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amt to SRD</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amt to Hamali</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let partyDetailsTableData of partyDetailsTableDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyDetailsTableData.partyName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyDetailsTableData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyDetailsTableData.amtToSrd }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyDetailsTableData.amtToHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"statementNumber\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Statement Number</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"createBtn\">Create</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"printBtn\">Print</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"printSummaryBtn\">Print\n\t\t\t\t\t\t\t\tSummary</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable starts  -->\n\t\t\t\t\t<div class=\"col-md-4 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Trip Details</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTripDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTripDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t<th>No. Of Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>DD Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tripDetailsData of tripDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.noOfArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ tripDetailsData.ddAmount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\n\t\t\t\t\t\t\t<div class=\"p-t-10\" [hidden]=\"vehicleDetailsTable\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Vehicle Details</h6>\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsVehicleDetails\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerVehicleDetails\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Vehicle Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Driver Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>No. Of Trips</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>No. Of Articles</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let vehicleDetailsData of vehicleDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ vehicleDetailsData.vehicleName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ vehicleDetailsData.driverName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ vehicleDetailsData.noOfTrips }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ vehicleDetailsData.noOfArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable starts  -->\n\n\t\t\t\t\t\t\t<div [hidden]=\"loaderDetailsTable\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Loader Details</h6>\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLoaderDetails\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLoaderDetails\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Delivery Man</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>No. Of Trips</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>DD Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Labour Hamali</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let loaderDetailsData of loaderDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderDetailsData.deliveryMan }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderDetailsData.noOfTrips }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderDetailsData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderDetailsData.ddAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderDetailsData.labourHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ loaderDetailsData.action }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable starts  -->\n\n\t\t\t\t\t\t\t<div class=\"p-t-10\" [hidden]=\"hamaliDetailsTable\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Hamali Details</h6>\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHamaliDetails\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerHamaliDetails\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Hamali Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>No. Of Trips</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Labour Hamali</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let hamaliDetailsData of hamaliDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hamaliDetailsData.hamaliName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hamaliDetailsData.noOfTrips }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hamaliDetailsData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hamaliDetailsData.labourHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable ends  -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/daily-report/door-delivery/door-delivery.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/report/daily-report/door-delivery/door-delivery.component.ts ***!
  \******************************************************************************/
/*! exports provided: DoorDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorDeliveryComponent", function() { return DoorDeliveryComponent; });
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


var DoorDeliveryComponent = /** @class */ (function () {
    function DoorDeliveryComponent(doorDeliveryRpt) {
        this.doorDeliveryRpt = doorDeliveryRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.partyOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'K.G. Associates' },
            { id: 3, label: 'KK Enterprises' },
            { id: 4, label: 'KC Enterprises' }
        ];
        this.dtTriggerPartyDetailsTable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerTripDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerVehicleDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerLoaderDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerHamaliDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DoorDeliveryComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DoorDeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //the first datatable starts
        this.dtOptionsPartyDetailsTable = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Party Name',
                    data: 'partyName'
                },
                {
                    title: 'Articles',
                    data: 'articles'
                },
                {
                    title: 'Amt To SRD',
                    data: 'amtToSrd'
                },
                {
                    title: 'Amt To Hamali',
                    data: 'amtToHamali'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //            {
            //                extend: 'excel',
            //                text: '<i class="fas fa-file-excel"> Excel</i>',
            //                titleAttr: 'Excel',
            //                exportOptions: {
            //                    columns: ':visible'
            //                }
            //            },
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
            "scrollY": 180,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        },
            //the first datatable ends
            //            the second datatable starts 
            this.dtOptionsTripDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Area',
                        data: 'area'
                    },
                    {
                        title: 'No. Of Articles',
                        data: 'noOfArticles'
                    },
                    {
                        title: 'DD Amount',
                        data: 'ddAmount'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //            {
                //                extend: 'excel',
                //                text: '<i class="fas fa-file-excel"> Excel</i>',
                //                titleAttr: 'Excel',
                //                exportOptions: {
                //                    columns: ':visible'
                //                }
                //            },
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //
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
                "scrollY": 180,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //the second datatable ends
            //the third datatable starts            
            this.dtOptionsVehicleDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Vehicle Name',
                        data: 'vehicleName'
                    },
                    {
                        title: 'Driver Name',
                        data: 'driverName'
                    },
                    {
                        title: 'No. Of Trips',
                        data: 'noOfTrips'
                    },
                    {
                        title: 'No. Of Articles',
                        data: 'noOfArticles'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //                    },
                //                    {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
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
                "scrollY": 180,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //the third datatable ends
            //the fourth datatable starts
            this.dtOptionsLoaderDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Delivery Man',
                        data: 'deliveryMan'
                    },
                    {
                        title: 'No. Of Trips',
                        data: 'noOfTrips'
                    },
                    {
                        title: 'Articles',
                        data: 'articles'
                    },
                    {
                        title: 'DD Amount',
                        data: 'ddAmount'
                    },
                    {
                        title: 'Labour Hamali',
                        data: 'labourHamali'
                    },
                    {
                        title: 'Action',
                        data: 'action'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //                    }, {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
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
                "scrollY": 180,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //the fourth datatable ends
            //the fifth datatable starts 
            this.dtOptionsHamaliDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Hamali Name',
                        data: 'hamaliName'
                    },
                    {
                        title: 'No. Of Trips',
                        data: 'noOfTrips'
                    },
                    {
                        title: 'Articles',
                        data: 'articles'
                    },
                    {
                        title: 'Labour Hamali',
                        data: 'labourHamali'
                    }
                ],
                //columns is used to for export and others endss                    
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //
                //                    }, {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
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
                "scrollY": 180,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            };
        //the fifth datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        this.getDataPartyDetailsTableDataTable = this.doorDeliveryRpt.getSummaryData();
        this.onDestroyUnsubscribtionPartyDetailsTable = this.getDataPartyDetailsTableDataTable.subscribe(function (data) {
            _this.partyDetailsTableDataList = data['data'];
            _this.dtTriggerPartyDetailsTable.next();
        });
        //first service ends
        //second service starts
        //first service starts 
        this.getDataTripDetailsDataTable = this.doorDeliveryRpt.getSummaryData();
        this.onDestroyUnsubscribtionTripDetails = this.getDataTripDetailsDataTable.subscribe(function (data) {
            _this.tripDetailsDataList = data['data'];
            _this.dtTriggerTripDetails.next();
        });
        //second service ends
        //third service starts
        this.getDataVehicleDetails = this.doorDeliveryRpt.getSummaryData();
        this.onDestroyUnsubscribtionVehicleDetails = this.getDataVehicleDetails.subscribe(function (data) {
            _this.vehicleDetailsDataList = data['data'];
            _this.dtTriggerVehicleDetails.next();
        });
        //third service ends
        //fourth service starts
        this.getDataLoaderDetails = this.doorDeliveryRpt.getSummaryData();
        this.onDestroyUnsubscribtionLoaderDetails = this.getDataLoaderDetails.subscribe(function (data) {
            _this.loaderDetailsDataList = data['data'];
            _this.dtTriggerLoaderDetails.next();
        });
        //fourth service ends
        //fifth service starts
        this.getDataServiceFrHamaliDetailsTable = this.doorDeliveryRpt.getSummaryData();
        this.onDestroyUnsubscribtionHamaliDetails = this.getDataServiceFrHamaliDetailsTable.subscribe(function (data) {
            _this.hamaliDetailsDataList = data['data'];
            _this.dtTriggerHamaliDetails.next();
        });
        //fifth service ends
    };
    DoorDeliveryComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerPartyDetailsTable.unsubscribe();
        this.dtTriggerTripDetails.unsubscribe();
        this.dtTriggerVehicleDetails.unsubscribe();
        this.dtTriggerLoaderDetails.unsubscribe();
        this.dtTriggerHamaliDetails.unsubscribe();
        this.onDestroyUnsubscribtionPartyDetailsTable.unsubscribe();
        this.onDestroyUnsubscribtionTripDetails.unsubscribe();
        this.onDestroyUnsubscribtionVehicleDetails.unsubscribe();
        this.onDestroyUnsubscribtionLoaderDetails.unsubscribe();
        this.onDestroyUnsubscribtionHamaliDetails.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    DoorDeliveryComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    DoorDeliveryComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], DoorDeliveryComponent.prototype, "dtElements", void 0);
    DoorDeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-door-delivery',
            template: __webpack_require__(/*! ./door-delivery.component.html */ "./src/app/report/daily-report/door-delivery/door-delivery.component.html"),
            styles: [__webpack_require__(/*! ./door-delivery.component.css */ "./src/app/report/daily-report/door-delivery/door-delivery.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], DoorDeliveryComponent);
    return DoorDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/report/daily-report/office-report/office-report.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/report/daily-report/office-report/office-report.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9kYWlseS1yZXBvcnQvb2ZmaWNlLXJlcG9ydC9vZmZpY2UtcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/daily-report/office-report/office-report.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/report/daily-report/office-report/office-report.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Office Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"date\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"dates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"dates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nagpur\">Nagpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-5 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTruckWise\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTruckWise\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Truck Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t<th>Gur Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Kanta Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Freight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hire</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t<th>Loaded By</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let truckWiseData of truckWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.truckNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.supplier }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.gurWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.kantaWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.actWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.chgWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.freight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.hire }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckWiseData.loadedBy }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div [hidden]=\"destWiseTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionDestWise\" [dtTrigger]=\"dtTriggerDestWise\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Truck No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let destWiseData of destWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ destWiseData.truckNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ destWiseData.actWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ destWiseData.chgWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ destWiseData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ destWiseData.paid }}</td>\n\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/daily-report/office-report/office-report.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/report/daily-report/office-report/office-report.component.ts ***!
  \******************************************************************************/
/*! exports provided: OfficeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeReportComponent", function() { return OfficeReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var OfficeReportComponent = /** @class */ (function () {
    function OfficeReportComponent(officeRpt) {
        this.officeRpt = officeRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerTruckWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerDestWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    OfficeReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    OfficeReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsTruckWise = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Truck Number',
                    data: 'truckNumber'
                },
                {
                    title: 'Supplier',
                    data: 'supplier'
                },
                {
                    title: 'Gur Wt',
                    data: 'gurWt'
                },
                {
                    title: 'Kanta Wt',
                    data: 'kantaWt'
                },
                {
                    title: 'Act Wt',
                    data: 'actWt'
                },
                {
                    title: 'Chg Wt',
                    data: 'chgWt'
                }, {
                    title: 'Freight',
                    data: 'freight'
                }, {
                    title: 'Hire',
                    data: 'hire'
                }, {
                    title: 'Remarks',
                    data: 'remarks'
                }, {
                    title: 'Loaded By',
                    data: 'loadedBy'
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
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
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
        this.dtOptionDestWise = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Truck No',
                    data: 'truckNo'
                },
                {
                    title: 'Act Wt',
                    data: 'actWt'
                },
                {
                    title: 'Chg Wt',
                    data: 'chgWt'
                },
                {
                    title: 'To Pay',
                    data: 'toPay'
                },
                {
                    title: 'Paid',
                    data: 'paid'
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
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
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
        this.gettingDataFrmServiceFrTruckWiseTable = this.officeRpt.getSummaryData();
        this.onDestroyUnsubscribtionTruckWise = this.gettingDataFrmServiceFrTruckWiseTable.subscribe(function (data) {
            _this.truckWiseDataList = data['data'];
            _this.dtTriggerTruckWise.next();
        });
        this.gettingDataFrmServiceFrDestWiseTable = this.officeRpt.getSummaryData();
        this.onDestroyUnsubscribtionDestWise = this.gettingDataFrmServiceFrDestWiseTable.subscribe(function (data) {
            _this.destWiseDataList = data['data'];
            _this.dtTriggerDestWise.next();
        });
        //the below code is for the getting data through json ends
    };
    OfficeReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTruckWise.unsubscribe();
        this.dtTriggerDestWise.unsubscribe();
        this.onDestroyUnsubscribtionTruckWise.unsubscribe();
        this.onDestroyUnsubscribtionDestWise.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    OfficeReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], OfficeReportComponent.prototype, "dtElements", void 0);
    OfficeReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office-report',
            template: __webpack_require__(/*! ./office-report.component.html */ "./src/app/report/daily-report/office-report/office-report.component.html"),
            styles: [__webpack_require__(/*! ./office-report.component.css */ "./src/app/report/daily-report/office-report/office-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], OfficeReportComponent);
    return OfficeReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-cashmemo-cashmemo-module~src-app-cashmemo-generation-generation-module~src-app-cashm~4031f8e0.js.map