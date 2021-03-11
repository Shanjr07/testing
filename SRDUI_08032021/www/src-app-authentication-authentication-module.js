(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-authentication-authentication-module"],{

/***/ "./src/app/authentication/404/not-found.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\n    <div class=\"error-body text-center\">\n        <h1 class=\"error-title text-danger\">404</h1>\n        <h3 class=\"text-uppercase error-subtitle\">PAGE NOT FOUND !</h3>\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\n        <a href=\"#/dashboard/classic\" class=\"btn btn-danger btn-rounded waves-effect waves-light m-b-40\">Back to home</a> \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/404/not-found.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngAfterViewInit = function () { };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/authentication/404/not-found.component.html")
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_authentication_404_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var src_app_authentication_lock_lock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/authentication/lock/lock.component */ "./src/app/authentication/lock/lock.component.ts");
/* harmony import */ var src_app_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var src_app_authentication_login2_login2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/authentication/login2/login2.component */ "./src/app/authentication/login2/login2.component.ts");
/* harmony import */ var src_app_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var src_app_authentication_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/authentication/signup2/signup2.component */ "./src/app/authentication/signup2/signup2.component.ts");
/* harmony import */ var src_app_authentication_authentication_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/authentication/authentication.routing */ "./src/app/authentication/authentication.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(src_app_authentication_authentication_routing__WEBPACK_IMPORTED_MODULE_11__["AuthenticationRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                src_app_authentication_404_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"],
                src_app_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                src_app_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                src_app_authentication_lock_lock_component__WEBPACK_IMPORTED_MODULE_6__["LockComponent"],
                src_app_authentication_login2_login2_component__WEBPACK_IMPORTED_MODULE_8__["Login2Component"],
                src_app_authentication_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_10__["Signup2Component"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var src_app_authentication_404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/authentication/404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var src_app_authentication_lock_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/lock/lock.component */ "./src/app/authentication/lock/lock.component.ts");
/* harmony import */ var src_app_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var src_app_authentication_login2_login2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/login2/login2.component */ "./src/app/authentication/login2/login2.component.ts");
/* harmony import */ var src_app_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var src_app_authentication_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/signup2/signup2.component */ "./src/app/authentication/signup2/signup2.component.ts");






var AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'login'
            },
            {
                path: '404',
                component: src_app_authentication_404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
            },
            {
                path: 'lock',
                component: src_app_authentication_lock_lock_component__WEBPACK_IMPORTED_MODULE_1__["LockComponent"]
            },
            {
                path: 'login',
                component: src_app_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'login2',
                component: src_app_authentication_login2_login2_component__WEBPACK_IMPORTED_MODULE_3__["Login2Component"]
            },
            {
                path: 'signup',
                component: src_app_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
            },
            {
                path: 'signup2',
                component: src_app_authentication_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_5__["Signup2Component"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/authentication/lock/lock.component.html":
/*!*********************************************************!*\
  !*** ./src/app/authentication/lock/lock.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\n    <div class=\"auth-box\">\n        <div>\n            <div class=\"logo\">\n                <span class=\"db\"><img alt=\"thumbnail\" class=\"rounded-circle\" width=\"100\" src=\"assets/images/users/1.jpg\"></span>\n                <h5 class=\"font-medium m-b-20\">Genelia</h5>\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-12\">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\"\" placeholder=\"Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <div class=\"col-xs-12 p-b-20\">\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">LOGIN</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/lock/lock.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/lock/lock.component.ts ***!
  \*******************************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockComponent = /** @class */ (function () {
    function LockComponent() {
    }
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/authentication/lock/lock.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/authentication/login2/login2.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/login2/login2.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/background/login-register.jpg) no-repeat center center;\">\n    <div class=\"auth-box on-sidebar\">\n        <div id=\"loginform\" [ngClass]=\"{'d-none': recoverform}\">\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\n                <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5>\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form class=\"form-horizontal m-t-20\" id=\"loginform\">\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\n                            </div>\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                        </div>\n                        <div class=\"input-group mb-3\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"ti-pencil\"></i></span>\n                            </div>\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\n                                    <a (click)=\"showRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark float-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <div class=\"col-xs-12 p-b-20\">\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">Log In</button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n                                <div class=\"social\">\n                                    <a href=\"javascript:void(0)\" class=\"btn  btn-facebook\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab  fa-facebook\"></i> </a>\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab  fa-google-plus\"></i> </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group m-b-0 m-t-10\">\n                            <div class=\"col-sm-12 text-center\">\n                                Don't have an account? <a href=\"#/authentication/signup2\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div id=\"recoverform\" [ngClass]=\"{'d-block': recoverform}\">\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\n                <h5 class=\"font-medium m-b-20\">Recover Password</h5>\n                <span>Enter your Email and instructions will be sent to you!</span>\n            </div>\n            <div class=\"row m-t-20\">\n                <!-- Form -->\n                <form class=\"col-12\" action=\"index.html\">\n                    <!-- email -->\n                    <div class=\"form-group row\">\n                        <div class=\"col-12\">\n                            <input class=\"form-control form-control-lg\" type=\"email\" required=\"\" placeholder=\"Username\">\n                        </div>\n                    </div>\n                    <!-- pwd -->\n                    <div class=\"row m-t-20\">\n                        <div class=\"col-12\">\n                            <button class=\"btn btn-block btn-lg btn-danger\" type=\"submit\" name=\"action\">Reset</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/login2/login2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login2/login2.component.ts ***!
  \***********************************************************/
/*! exports provided: Login2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2Component", function() { return Login2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Login2Component = /** @class */ (function () {
    function Login2Component() {
        this.loginform = true;
        this.recoverform = false;
    }
    Login2Component.prototype.showRecoverForm = function () {
        this.loginform = !this.loginform;
        this.recoverform = !this.recoverform;
    };
    Login2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login2.component.html */ "./src/app/authentication/login2/login2.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], Login2Component);
    return Login2Component;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\n    <div class=\"auth-box\">\n        <div>\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\n                        <div class=\"form-group row \">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12 \">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center \">\n                            <div class=\"col-xs-12 p-b-20 \">\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\n                            </div>\n                        </div>\n                        <div class=\"form-group m-b-0 m-t-10 \">\n                            <div class=\"col-sm-12 text-center \">\n                                Already have an account? <a href=\"#/authentication/login \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup2/signup2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/signup2/signup2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/background/login-register.jpg) no-repeat center center;\">\n    <div class=\"auth-box on-sidebar\">\n        <div>\n            <div class=\"logo\">\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\n                <h5 class=\"font-medium m-b-20\">Sign Up to Admin</h5>\n            </div>\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\n                        <div class=\"form-group row \">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Name\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"text\" required=\" \" placeholder=\"Email\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 \">\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\" \" placeholder=\"Confirm Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12 \">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                                    <label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center \">\n                            <div class=\"col-xs-12 p-b-20 \">\n                                <button class=\"btn btn-block btn-lg btn-info \" type=\"submit \">SIGN UP</button>\n                            </div>\n                        </div>\n                        <div class=\"form-group m-b-0 m-t-10 \">\n                            <div class=\"col-sm-12 text-center \">\n                                Already have an account? <a href=\"#/authentication/login2 \" class=\"text-info m-l-5 \"><b>Sign In</b></a>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/signup2/signup2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup2/signup2.component.ts ***!
  \*************************************************************/
/*! exports provided: Signup2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2Component", function() { return Signup2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Signup2Component = /** @class */ (function () {
    function Signup2Component() {
    }
    Signup2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup2.component.html */ "./src/app/authentication/signup2/signup2.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], Signup2Component);
    return Signup2Component;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-authentication-authentication-module.js.map