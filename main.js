(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-http/api-request.service.ts":
/*!*************************************************!*\
  !*** ./src/app/api-http/api-request.service.ts ***!
  \*************************************************/
/*! exports provided: ApiRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequestService", function() { return ApiRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mane */ "./src/app/mane.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': '5badbe409aa02b6ee6743fbde33fb9cdc9f3d29e',
    })
};
var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(http) {
        this.http = http;
        this._baseUrl = '';
        this.manes = [];
        this._baseUrl = "https://kinyozi.herokuapp.com";
    }
    ApiRequestService.prototype.apiRequest = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl).toPromise().then(function (response) {
                _this.mane = response;
                console.log(_this.mane);
                _this.mane.forEach(function (m) {
                    _this.manes.push(new _mane__WEBPACK_IMPORTED_MODULE_3__["Mane"](m.id, m.img, m.hair_type));
                    console.log(m);
                });
                resolve();
            }, function (error) {
                _this.manes = [];
                reject(error);
            });
            return promise;
        });
    };
    ApiRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiRequestService);
    return ApiRequestService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hair_hair_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hair/hair.component */ "./src/app/hair/hair.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hair_detail_hair_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hair-detail/hair-detail.component */ "./src/app/hair-detail/hair-detail.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'home', component: _hair_hair_component__WEBPACK_IMPORTED_MODULE_2__["HairComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'detail/:id', component: _hair_detail_hair_detail_component__WEBPACK_IMPORTED_MODULE_4__["HairDetailComponent"] },
    { path: 'allstyles', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "title{\n  background-color: white;\n\n}\nh1{\n  font-family: 'Cabin Sketch', cursive;\n  color:black;\n  font-size: 950%;\n  margin-top: -90vh;\n  text-align: left;\n  margin-left: 10vw;\n  margin-bottom: 10%;\n}\nimg{\n  opacity:0.8;\n  margin-top:-59vh;\n  width:100%;\n  margin-bottom: 20vh;\n}\nnav{\n  margin-top: 50vh;\n  font-family: 'Cabin Sketch', cursive;\n  color:black;\n  font-size: 170%;\n\n\n}\na{\n  color:grey;\n}\nbody{\n  background: url('/assets/img/hair.jpg')no-repeat center center fixed;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<spinner></spinner>\n<img src=\"assets/img/background.jpeg\">\n<div style=\"text-align:center;\">\n  <h1>{{ title }}</h1>\n\n  <nav>\n    <a routerLink=\"/dashboard\">DASHBOARD-</a>\n    <a routerLink=\"/home\">HOME-</a>\n    <a routerLink=\"/allstyles\">ALL STYLES</a>\n  </nav>\n\n\n<router-outlet></router-outlet>\n\n<app-messages></app-messages>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KINYOZI';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hair_hair_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hair/hair.component */ "./src/app/hair/hair.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _hair_detail_hair_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hair-detail/hair-detail.component */ "./src/app/hair-detail/hair-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hair_form_hair_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hair-form/hair-form.component */ "./src/app/hair-form/hair-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _hair_hair_component__WEBPACK_IMPORTED_MODULE_3__["HairComponent"],
                _hair_detail_hair_detail_component__WEBPACK_IMPORTED_MODULE_5__["HairDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _hair_form_hair_form_component__WEBPACK_IMPORTED_MODULE_10__["HairFormComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_19__["NgHttpLoaderModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n\n  border-radius: 2px;\n}\n.module:hover {\n\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\nimg{\n  height:40vh;\n  width:17vw;\n  border-radius:13em;\n}\nh3{\n  font-family: 'Cabin Sketch', cursive;\n  font-size: 10vh;\n}\np {\n  margin-top: 4vh;\n  color:black;\n  margin-bottom: 5vh;\n  font-family: 'Cabin Sketch', cursive;\n  font-size: 2em;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Stylists</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\" routerLink=\"/detail/{{hero.id}}\">\n    <div class=\"module hero\">\n      <img src=\"{{hero.image}}\">\n      <p>{{hero.name}}</p>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hair_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hair.service */ "./src/app/hair.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(hairService) {
        this.hairService = hairService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.hairService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_hair_service__WEBPACK_IMPORTED_MODULE_1__["HairService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/hair-detail/hair-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hair-detail/hair-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main{\n  margin-top: -1%;\n  height:30vh;\n  margin-left: -4vw;\n  border-radius: 20em;\n  float:left;\n}\n.third{\n  margin-top: 6%;\n  height:40vh;\n  width:18vw;\n\n}\n.title{\n  margin-left: -40vw;\n  font-family: 'Cabin Sketch', cursive;\n}\n#photos{\n\n  width:80%;\n  margin-left: 26%;\n\n}\n#third{\n  height:70%;\n  width:70%;\n}\nbutton{\n  margin-top:5vh;\n}\n#bio{\n  background-color: darkgrey;\n  margin-top:-90vh;\n  margin-right: 10vw;\n  text-align:left;\n  color:white;\n  width:55%;\n  height:1%;\n  font-family: 'Quicksand', sans-serif;\n\n  border-radius: 3em;\n\n}\n#style{\n  margin-top: 0.4em;\n  margin-bottom:0.4em;\n}\n.bio{\n  margin-left: 20%;\n  font-size: 170%;\n  font-family: 'Quicksand', sans-serif;\n}\n#name{\n  font-family: 'Cabin Sketch', cursive;\n  font-size: 280%;\n  margin-bottom: -0.4em;\n}\nh2{\n  margin-bottom:-10vh;\n  margin-top: 60vh;\n  font-size: 350%;\n  margin-left: -7%;\n\n}\nh4{\n  margin-top: 80vh;\n  margin-bottom:-20vh;\n  font-family: 'Cabin Sketch', cursive;\n}\n"

/***/ }),

/***/ "./src/app/hair-detail/hair-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/hair-detail/hair-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"hero\" class=\"title\">\n\n<h2>Portfolio</h2>\n<div class=\"container-fluid\" id=photos>\n  <img src=\"{{hero.style1}}\" class=\"third\">\n  <img src=\"{{hero.style2}}\" class=\"third\" >\n  <img src=\"{{hero.style3}}\" class=\"third\" >\n  <img src=\"{{hero.style4}}\" class=\"third\" >\n  <img src=\"{{hero.style5}}\" class=\"third\" >\n</div>\n\n<div class=\"container-fluid\" id=bio>\n    <img src=\"{{hero.image}}\" id=\"main\">\n  <p class=\"bio\" id=\"name\">{{hero.name | uppercase}}</p>\n  <p class=\"bio\" id=\"style\">Style: {{hero.style}}</p>\n  <p class=\"bio\">Location: {{hero.location}}</p>\n</div>\n\n\n</div>\n\n<h4>Book here with {{hero.name}}</h4>\n<app-hair-form></app-hair-form>\n<button type=\"button\" class=\"btn btn-dark\" (click)=\"goBack()\">BACK</button>\n"

/***/ }),

/***/ "./src/app/hair-detail/hair-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hair-detail/hair-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HairDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairDetailComponent", function() { return HairDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hair_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hair.service */ "./src/app/hair.service.ts");
/* harmony import */ var _style_stylist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/stylist.service */ "./src/app/style/stylist.service.ts");
/* harmony import */ var _mane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mane */ "./src/app/mane.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HairDetailComponent = /** @class */ (function () {
    function HairDetailComponent(route, hairService, location, stylistService) {
        this.route = route;
        this.hairService = hairService;
        this.location = location;
        this.stylistService = stylistService;
        this.newMane = new _mane__WEBPACK_IMPORTED_MODULE_5__["Mane"](0, "", 0);
        this.manes = [];
    }
    HairDetailComponent.prototype.submitHandler = function () {
    };
    HairDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HairDetailComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.hairService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HairDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HairDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hair-detail',
            template: __webpack_require__(/*! ./hair-detail.component.html */ "./src/app/hair-detail/hair-detail.component.html"),
            styles: [__webpack_require__(/*! ./hair-detail.component.css */ "./src/app/hair-detail/hair-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _hair_service__WEBPACK_IMPORTED_MODULE_3__["HairService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _style_stylist_service__WEBPACK_IMPORTED_MODULE_4__["StylistService"]])
    ], HairDetailComponent);
    return HairDetailComponent;
}());



/***/ }),

/***/ "./src/app/hair-form/hair-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/hair-form/hair-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\n  margin-top: 40vh;\n}\n"

/***/ }),

/***/ "./src/app/hair-form/hair-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/hair-form/hair-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"heroForm\">\n  <div class=\"form-group\">\n    <hr>\n\n    <mat-form-field>\n        <input matInput placeholder=\"email\" formControlName=\"email\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea matInput placeholder=\"your message...\" formControlName=\"message\" ></textarea>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <button mat-button color=\"primary\" type=\"submit\">Submit Form</button>\n</div>\n</form>\n\n<div class=\"notification is-success\">\n    Yay! We received your submission\n</div>\n"

/***/ }),

/***/ "./src/app/hair-form/hair-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hair-form/hair-form.component.ts ***!
  \**************************************************/
/*! exports provided: HairFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairFormComponent", function() { return HairFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HairFormComponent = /** @class */ (function () {
    function HairFormComponent(fb) {
        this.fb = fb;
        this.createForm();
    }
    HairFormComponent.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: '',
        });
    };
    HairFormComponent.prototype.ngOnInit = function () {
    };
    HairFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hair-form',
            template: __webpack_require__(/*! ./hair-form.component.html */ "./src/app/hair-form/hair-form.component.html"),
            styles: [__webpack_require__(/*! ./hair-form.component.css */ "./src/app/hair-form/hair-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HairFormComponent);
    return HairFormComponent;
}());



/***/ }),

/***/ "./src/app/hair.service.ts":
/*!*********************************!*\
  !*** ./src/app/hair.service.ts ***!
  \*********************************/
/*! exports provided: HairService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairService", function() { return HairService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-heroes */ "./src/app/mock-heroes.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HairService = /** @class */ (function () {
    function HairService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
    }
    HairService.prototype.getHeroes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_heroes__WEBPACK_IMPORTED_MODULE_3__["HEROES"]);
    };
    HairService.prototype.getHero = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_heroes__WEBPACK_IMPORTED_MODULE_3__["HEROES"].find(function (hero) { return hero.id === id; }));
    };
    HairService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HairService);
    return HairService;
}());



/***/ }),

/***/ "./src/app/hair/hair.component.css":
/*!*****************************************!*\
  !*** ./src/app/hair/hair.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 20em;\n  margin-top: 12vh;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: grey;\n  margin: .5em;\n  padding: .3em 0;\n  height: 2em;\n  border-radius: 4px;\n  opacity:0.8;\n  margin-left: 6vw;\n  font-size: 2em;\n\n  font-family: 'Cabin Sketch', cursive;\n\n}\na{\n\n  color:white;\n}\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #black;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n\n}\n.details{\n  margin-top: -60vh;\n}\nimg{\n  height:1em;\n\n}\n#background{\n  height:57em;\n  margin-top:-33vh;\n  margin-bottom:-50em;\n  margin-right:-47vw;\n}\n"

/***/ }),

/***/ "./src/app/hair/hair.component.html":
/*!******************************************!*\
  !*** ./src/app/hair/hair.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\">\n    <a routerLink=\"/detail/{{hero.id}}\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </a>\n  </li>\n</ul>\n<div class=\"details\">\n<div *ngIf=\"hero\">\n  <h2>{{ hero.name | uppercase }}Details</h2>\n\n</div>\n<div *ngIf=\"hero\">\n  <h2>{{ hero.name | uppercase }}Details</h2>\n  <div><span>id: </span>{{hero.id}}</div>\n\n</div>\n\n<img src='/assets/img/hair.jpg' id=\"background\">\n  <app-hair-detail></app-hair-detail>\n  <app-portfolio></app-portfolio>\n"

/***/ }),

/***/ "./src/app/hair/hair.component.ts":
/*!****************************************!*\
  !*** ./src/app/hair/hair.component.ts ***!
  \****************************************/
/*! exports provided: HairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairComponent", function() { return HairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hair_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hair.service */ "./src/app/hair.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HairComponent = /** @class */ (function () {
    function HairComponent(hairService) {
        this.hairService = hairService;
    }
    HairComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HairComponent.prototype.getHeroes = function () {
        var _this = this;
        this.hairService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    HairComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hair',
            template: __webpack_require__(/*! ./hair.component.html */ "./src/app/hair/hair.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./hair.component.css */ "./src/app/hair/hair.component.css")]
        }),
        __metadata("design:paramtypes", [_hair_service__WEBPACK_IMPORTED_MODULE_1__["HairService"]])
    ], HairComponent);
    return HairComponent;
}());



/***/ }),

/***/ "./src/app/mane.ts":
/*!*************************!*\
  !*** ./src/app/mane.ts ***!
  \*************************/
/*! exports provided: Mane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mane", function() { return Mane; });
var Mane = /** @class */ (function () {
    function Mane(id, img, hair_type) {
        this.id = id;
        this.img = img;
        this.hair_type = hair_type;
        this.id = id;
        this.img = img;
        this.hair_type = hair_type;
    }
    return Mane;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'>{{message}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/mock-heroes.ts":
/*!********************************!*\
  !*** ./src/app/mock-heroes.ts ***!
  \********************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Michelle', image: 'assets/img/stylist1.jpg', location: "CBD", style: "afro", style1: 'assets/img/style-afro.jpg', style2: 'assets/img/style-afro1.jpg', style3: 'assets/img/style-afro2.jpg', style4: 'assets/img/style-afro3.jpg', style5: 'assets/img/style-afro4.jpg' },
    { id: 12, name: 'Nelly', image: 'assets/img/stylist2.jpg', location: "Lavington", style: "braids", style1: 'assets/img/style-braids.jpg', style2: 'assets/img/style-braids1.jpg', style3: '/assets/img/style-braids2.jpg', style4: 'assets/img/style-braids3.jpg', style5: 'assets/img/style-braids4.jpg' },
    { id: 13, name: 'Brenda', image: 'assets/img/stylist3.jpg', location: "Westlands", style: "dreads", style1: 'assets/img/style-dreads.jpg', style2: 'assets/img/style-dreads1.jpg', style3: 'assets/img/style-dreads2.jpg', style4: 'assets/img/style-dreads3.jpg', style5: 'assets/img/style-dreads4.jpg' },
    { id: 14, name: 'Cecily', image: 'assets/img/stylist4.JPG', location: "CBD", style: "lines", style1: 'assets/img/style-lines.jpg', style2: 'assets/img/style-lines1.jpg', style3: 'assets/img/style-lines2.jpg', style4: 'assets/img/style-lines3.jpg', style5: 'assets/img/style-lines5.jpg' },
    { id: 15, name: 'Maggie', image: 'assets/img/stylist5.jpg', location: "Karen", style: "short", style1: 'assets/img/style-short.jpg', style2: 'assets/img/style-short1.jpg', style3: 'assets/img/style-short2.jpg', style4: 'assets/img/style-short3.jpg', style5: 'assets/img/style-short4.jpg' },
    { id: 16, name: 'Angela', image: 'assets/img/stylist6.jpg', location: "Madaraka", style: "afro", style1: 'assets/img/style-afro9.jpg', style2: '/assets/img/style-afro1.jpg', style3: 'assets/img/style-dreads8.jpg', style4: 'assets/img/style-dreads6.jpg', style5: 'assets/img/style-afro2.jpg' },
];


/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n  height:40vh;\n  float:left;\n  padding:1%;\n  border-radius: 20%\n}\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul>\n  <div *ngFor='let Mane of manes'>\n    <img src=\"{{Mane.img}}\" alt=\"\">\n    <p>{{Mane.name}}</p>\n  </div>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_api_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-http/api-request.service */ "./src/app/api-http/api-request.service.ts");
/* harmony import */ var _mane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mane */ "./src/app/mane.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(apiService) {
        this.apiService = apiService;
        this.newMane = new _mane__WEBPACK_IMPORTED_MODULE_2__["Mane"](0, "", 0);
        this.manes = [];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.apiService.apiRequest();
        this.manes = this.apiService.manes;
        console.log(this.manes);
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_api_http_api_request_service__WEBPACK_IMPORTED_MODULE_1__["ApiRequestService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/style/stylist.service.ts":
/*!******************************************!*\
  !*** ./src/app/style/stylist.service.ts ***!
  \******************************************/
/*! exports provided: StylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylistService", function() { return StylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mane */ "./src/app/mane.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StylistService = /** @class */ (function () {
    function StylistService(http) {
        this.http = http;
        this.mane = new _mane__WEBPACK_IMPORTED_MODULE_1__["Mane"](0, "", 0);
    }
    StylistService.prototype.apiRequest = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl).toPromise().then(function (response) {
                console.log(response);
                resolve();
            }, function (error) {
                _this.mane.id = 1;
                _this.mane.img = "https://kinyozi.herokuapp.com/media/posts/photo-afropunk-1.jpg";
                _this.mane.hair_type = 3;
                reject(error);
            });
        });
        return promise;
    };
    StylistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StylistService);
    return StylistService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    apiUrl: "https://kinyozi.herokuapp.com/api/port/?format=json"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lulumutuli/Documents/moringa-school-projects/frontend-kinyozi/kinyozi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map