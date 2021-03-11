(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-cashmemo-cashmemo-module~src-app-cashmemo-generation-generation-module~src-app-cashm~c7142c2a"],{

/***/ "./src/app/dataService/masterread-service.ts":
/*!***************************************************!*\
  !*** ./src/app/dataService/masterread-service.ts ***!
  \***************************************************/
/*! exports provided: MasterReadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterReadService", function() { return MasterReadService; });
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



var MasterReadService = /** @class */ (function () {
    function MasterReadService(http) {
        this.http = http;
        //for local
        //    private _baseUrl = "http://localhost:8080/srd/masterread/v1";
        //for QA
        //        private _baseUrl = "http://54.210.51.40:8080/srd/masterread/v1";
        //for Live
        //        private _baseUrl = "http://3.222.201.242:8080/srd/masterread/v1";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webMasterRead;
    }
    MasterReadService.prototype.getSubBookingStationDetailsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getSubBookingStationDetails", lrDto);
    };
    MasterReadService.prototype.getSourceListDetails = function (agentDetailsDto) {
        return this.http.post(this._baseUrl + "/getSourceList", agentDetailsDto);
    };
    MasterReadService.prototype.getEditCompany = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getEditCompanyMasterDetails", userDataDto);
    };
    MasterReadService.prototype.getDriver = function (driverDetailsDto) {
        return this.http.post(this._baseUrl + "/getDriverDetails", driverDetailsDto);
    };
    MasterReadService.prototype.getNatureOfPack = function (lrDto) {
        return this.http.post(this._baseUrl + "/getNatureOfPack", lrDto);
    };
    MasterReadService.prototype.getTruck = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/getTruckDetails", truckDataDto);
    };
    MasterReadService.prototype.getConsignorMaster = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/getConsignorDetails", partyMasterDto);
    };
    MasterReadService.prototype.getSuplierMaster = function (supplierDetailsDto) {
        return this.http.post(this._baseUrl + "/getSupplierDetails", supplierDetailsDto);
    };
    MasterReadService.prototype.getVehicleSetupMaster = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/getVehicleMaster", truckDataDto);
    };
    MasterReadService.prototype.getBankMasterDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getBankDetails", userDataDto);
    };
    MasterReadService.prototype.getCollectionManMasterDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getCollectionManDetails", userDataDto);
    };
    MasterReadService.prototype.getCommonChargesMasterDetails = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getCommonChargesDetails", rateMasterDto);
    };
    MasterReadService.prototype.getUserDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getUserDetails", lrDto);
    };
    MasterReadService.prototype.getExpensesHeadsService = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getExpenseHeadDetails", hireSlipDto);
    };
    MasterReadService.prototype.getTimeService = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getTimeDetails", hireSlipDto);
    };
    MasterReadService.prototype.getDebitNoteMaster = function (fortNightStmtDto) {
        return this.http.post(this._baseUrl + "/getDebitNoteMasterDetails", fortNightStmtDto);
    };
    MasterReadService.prototype.getCommodityDetails = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getCommodityMasterDetails", rateMasterDto);
    };
    MasterReadService.prototype.getConsignmentsClaimsSettlementEntry = function (lrDto) {
        return this.http.post(this._baseUrl + "/getConsignmentsClaimsSettlementEntryDetails", lrDto);
    };
    MasterReadService.prototype.getLorryHireDeductionService = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getLorryHireDeductionDetails", hireSlipDto);
    };
    MasterReadService.prototype.getBankMasterPdcDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBankPdcDetails", lrDto);
    };
    MasterReadService.prototype.getDestinationListDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getdestinationlistdetails", lrDto);
    };
    MasterReadService.prototype.getConsignorDetails = function (partyDto) {
        return this.http.post(this._baseUrl + "/getconsignordetails", partyDto);
    };
    MasterReadService.prototype.getTripLrService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getTripLrDetails", lrDto);
    };
    MasterReadService.prototype.getDestinationForLREntryService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getDestinationForLREntry", lrDto);
    };
    MasterReadService.prototype.getFromStationService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getFromStationDetails", lrDto);
    };
    MasterReadService.prototype.getMainBookingStationsDetails = function (agentDetailsDto) {
        return this.http.post(this._baseUrl + "/getmainbookingstationsdetails", agentDetailsDto);
    };
    MasterReadService.prototype.getStationCodeService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getStationCode", userDataDto);
    };
    MasterReadService.prototype.getMsgDispInCMService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getMsgDispInCMDetails", lrDto);
    };
    MasterReadService.prototype.getStateDetailsService = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/getStateDetails", partyMasterDto);
    };
    MasterReadService.prototype.getLoaderHeadDetails = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getloaderheaddetails", hireSlipDto);
    };
    MasterReadService.prototype.getCommodityNamesDetails = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getcommoditynamesdetails", rateMasterDto);
    };
    MasterReadService.prototype.getBranchAreaDetailsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBranchAreaDetails", lrDto);
    };
    MasterReadService.prototype.getPartyBankDetailsService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getPartyBankDetails", userDataDto);
    };
    MasterReadService.prototype.getConsigneeMaster = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/getconsigneedetails", partyMasterDto);
    };
    MasterReadService.prototype.getDestinationForLREntryForm = function (lrDto) {
        return this.http.post(this._baseUrl + "/getdestinationforlrentryform", lrDto);
    };
    MasterReadService.prototype.getCityMainCommodityDetails = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/getcitymaincommoditycetails", partyMasterDto);
    };
    MasterReadService.prototype.getConsigneeAddress = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/getconsigneeaddress", partyMasterDto);
    };
    MasterReadService.prototype.getGoodsTypeCommdity = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getgoodstypecommdity", rateMasterDto);
    };
    MasterReadService.prototype.getAutomaticLrNo = function (lrDto) {
        return this.http.post(this._baseUrl + "/getautomaticlrno", lrDto);
    };
    MasterReadService.prototype.getBlockedLrsList = function (lrDto) {
        return this.http.post(this._baseUrl + "/getblockedlrslist", lrDto);
    };
    MasterReadService.prototype.validateFOVRateWhileLREntry = function (lrDto) {
        return this.http.post(this._baseUrl + "/validatefovratewhilelrentry", lrDto);
    };
    MasterReadService.prototype.getAgentNameForChallanNo = function (lrDto) {
        return this.http.post(this._baseUrl + "/getagentnameforchallanno", lrDto);
    };
    MasterReadService.prototype.isCommodityAllowArtSize = function (lrDto) {
        return this.http.post(this._baseUrl + "/iscommodityallowartsize", lrDto);
    };
    MasterReadService.prototype.addLRNumber = function (lrDto) {
        return this.http.post(this._baseUrl + "/addlrnumber", lrDto);
    };
    MasterReadService.prototype.chkLREntryMissAgent = function (lrDto) {
        return this.http.post(this._baseUrl + "/chklrentrymissagent", lrDto);
    };
    MasterReadService.prototype.validateLrBookingDate = function (lrDto) {
        return this.http.post(this._baseUrl + "/validatelrbookingdate", lrDto);
    };
    MasterReadService.prototype.addLRDetails = function (lrDto) {
        //        console.log( lrDto );
        return this.http.post(this._baseUrl + "/addlrdetails", lrDto);
    };
    MasterReadService.prototype.getAutoLrDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getautolrdetails", lrDto);
    };
    MasterReadService.prototype.getConsigneeRateDetailsForCashMemoService = function (rateMasterDto) {
        //console.log( rateMasterDto );
        return this.http.post(this._baseUrl + "/getConsigneeRateDetailsForCashMemo", rateMasterDto);
    };
    MasterReadService.prototype.getCommmodityMasterDetailsService = function (rateMasterDto) {
        //console.log( rateMasterDto );
        return this.http.post(this._baseUrl + "/getCommmodityMasterDetails", rateMasterDto);
    };
    MasterReadService.prototype.getCrossingChgService = function (lrDto) {
        //console.log( lrDto );
        return this.http.post(this._baseUrl + "/getCrossingChg", lrDto);
    };
    MasterReadService.prototype.recalculateBkgMemoAfterAdminRateService = function (rateMasterDto) {
        // console.log( rateMasterDto );
        return this.http.post(this._baseUrl + "/recalculateBkgMemoAfterAdminRateDtls", rateMasterDto);
    };
    MasterReadService.prototype.getLRDetailsAfterBkgMemoChgedService = function (lrDto) {
        //console.log( lrDto );
        return this.http.post(this._baseUrl + "/getLRDetailsAfterBkgMemoChged", lrDto);
    };
    MasterReadService.prototype.getCommodityFromAdminRateMater = function (lrDto) {
        return this.http.post(this._baseUrl + "/getCommodityFromAdminRateMater", lrDto);
    };
    MasterReadService.prototype.updateLrCopyTypeDetails = function (lrDto) {
        console.log(lrDto);
        return this.http.post(this._baseUrl + "/updatelrcopytypedetails", lrDto);
    };
    MasterReadService.prototype.addConsignorInLrEntry = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/addconsignorinlrentry", partyMasterDto);
    };
    MasterReadService.prototype.addConsigneeInLrEntry = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/addconsigneeinlrentry", partyMasterDto);
    };
    MasterReadService.prototype.getDestMemoOtherChgDetails = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getDestMemoOtherChgDetails", rateMasterDto);
    };
    MasterReadService.prototype.verifyChallanTotalLrs = function (lrDto) {
        return this.http.post(this._baseUrl + "/verifychallantotallrs", lrDto);
    };
    MasterReadService.prototype.getTruckTypes = function (truckDto) {
        return this.http.post(this._baseUrl + "/getTruckTypes", truckDto);
    };
    MasterReadService.prototype.saveRCInsurancePanForTruckMasterFileUpload = function (formData) {
        return this.http.post(this._baseUrl + "/saveRCInsurancePanForTruckMasterFileUpload", formData);
    };
    MasterReadService.prototype.getTruckDtlsInHireSlipGeneration = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/getTruckDtlsInHireSlipGeneration", truckDataDto);
    };
    MasterReadService.prototype.getBranchAreas = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBranchAreas", lrDto);
    };
    MasterReadService.prototype.uploadFile = function (formData) {
        return this.http.post(this._baseUrl + "/uploadFileApi", formData);
    };
    MasterReadService.prototype.getCheckPostList = function (lrDto) {
        return this.http.post(this._baseUrl + "/getCheckPostListApi", lrDto);
    };
    MasterReadService.prototype.addCheckPost = function (lrDto) {
        return this.http.post(this._baseUrl + "/addCheckPostApi", lrDto);
    };
    MasterReadService.prototype.getLabourDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLabourDetailsApi", lrDto);
    };
    MasterReadService.prototype.getLoaderHeadsDetails = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getLoaderHeadsDetailsApi", hireSlipDto);
    };
    MasterReadService.prototype.getReasonsDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getReasonsDetailsApi", lrDto);
    };
    //Article Grouping //added at 20-02-2021
    MasterReadService.prototype.getStaffDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getStaffDetailsApi", lrDto);
    };
    MasterReadService.prototype.getTPCP = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/getTPCPApi", truckDataDto);
    };
    MasterReadService.prototype.getTruckCapacityDetails = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/getTruckCapacityDetailsApi", truckDataDto);
    };
    MasterReadService.prototype.getTripRoutingFeatureDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getTripRoutingFeatureDetailsApi", lrDto);
    };
    MasterReadService.prototype.getBranchSubstations = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBranchSubstationsApi", lrDto);
    };
    MasterReadService.prototype.getAdminStationsBranch = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getAdminStationsBranchApi", hireSlipDto);
    };
    MasterReadService.prototype.getTruckTypeCommonDetails = function (truckTypeDataDto) {
        return this.http.post(this._baseUrl + "/getTruckTypeCommonDetailsApi", truckTypeDataDto);
    };
    MasterReadService.prototype.setTruckOwnerDetails = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/setTruckOwnerDetails", truckDataDto);
    };
    MasterReadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MasterReadService);
    return MasterReadService;
}());



/***/ }),

/***/ "./src/app/dto/TruckData-dto.ts":
/*!**************************************!*\
  !*** ./src/app/dto/TruckData-dto.ts ***!
  \**************************************/
/*! exports provided: TruckDataDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckDataDto", function() { return TruckDataDto; });
var TruckDataDto = /** @class */ (function () {
    function TruckDataDto() {
    }
    return TruckDataDto;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-cashmemo-cashmemo-module~src-app-cashmemo-generation-generation-module~src-app-cashm~c7142c2a.js.map