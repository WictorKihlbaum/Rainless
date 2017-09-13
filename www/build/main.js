webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lookup_lookup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_review__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(launchReview) {
        this.launchReview = launchReview;
        this.lookupPage = __WEBPACK_IMPORTED_MODULE_2__lookup_lookup__["a" /* LookupPage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    HomePage.prototype.onRateApp = function () {
        var appId = '1223036183';
        this.launchReview.launch(appId)
            .then(function () {
            console.log('Successfully launched store app');
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/wictor/Documents/Rainless2/src/pages/home/home.html"*/'<ion-content class="gradient-background" no-bounce>\n\n  <ion-grid class="page-grid-top">\n    <ion-row align-items-center class="page-grid-row">\n      <ion-col>\n\n        <img src="assets/img/inapp-logo.png" id="inapp-logo" />\n\n        <h1 id="home-topic">\n          Rainless\n        </h1>\n        <h2 id="home-subtopic">\n          Plan the future with the past\n        </h2>\n\n        <ion-row>\n          <ion-col col-6 id="rate-button-col">\n            <!-- Rate button -->\n            <button ion-fab mini id="rate-button" (click)="onRateApp()">\n              <ion-icon name="md-star"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-6>\n            <!-- Info button -->\n            <button ion-fab mini id="info-button" [navPush]="aboutPage">\n              <ion-icon name="md-information-circle"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="page-grid-bottom">\n    <ion-row align-items-center class="page-grid-row">\n\n      <!-- Lookup date button -->\n      <ion-col id="lookup-button-col">\n        <button [navPush]="lookupPage" ion-button icon-left round block id="lookup-button">\n          <ion-icon name="search"></ion-icon>\n          Lookup Date\n        </button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Rainless2/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_review__["a" /* LaunchReview */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_review__["a" /* LaunchReview */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(iab) {
        this.iab = iab;
    }
    AboutPage.prototype.onVisitDarkSky = function () {
        this.iab.create('https://darksky.net/poweredby/', '_system');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/wictor/Documents/Rainless2/src/pages/about/about.html"*/'<ion-header no-border>\n  <ion-navbar color="header" [hideBackButton]="true">\n    <ion-buttons start>\n      <button ion-button icon-only navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="gradient-background" no-bounce>\n\n  <div class="page-text">\n    This app will tell you how many times it has rained\n    on a particular date and location during the past years.\n\n    <h4 id="attribution-topic">Attribution</h4>\n    <ul id="attribution-list">\n      <li>\n        Powered by Dark Sky\n      </li>\n      <li>\n        Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY\n      </li>\n    </ul>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Rainless2/src/pages/about/about.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_autocomplete_items_modal_autocomplete_items__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__help_help__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_lookup_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__advanced_options_advanced_options__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_handler__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var LookupPage = (function () {
    function LookupPage(navCtrl, loadingCtrl, lookupService, modalCtrl, geolocation, nativeGeocoder, popoverCtrl, toastCtrl, statusBar, platform, mapHandler) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.lookupService = lookupService;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.platform = platform;
        this.mapHandler = mapHandler;
        this.helpPage = __WEBPACK_IMPORTED_MODULE_4__help_help__["a" /* HelpPage */];
        this.yearLimit = 20; // Max amount of past years
        this.mm = 0; // Precipitation option
        this.optionsAvailable = true;
        this.pastYears = 10; // Default amount of past years
        this.niceLookingDate = 'No date'; // Will be shown in view for user
        this.mapIsSet = false;
        this.location = { address: 'No address', lat: null, lng: null, set: false };
    }
    LookupPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.showLoading('Loading');
                        this.setupDatePicker();
                        return [4 /*yield*/, this.setCurrentCoordinates()];
                    case 1:
                        _a.sent();
                        this.setMap();
                        this.mapHandler.createMapMarker({ lat: this.location.lat, lng: this.location.lng });
                        //this.setCurrentAddress();
                        this.setNiceLookingDate();
                        return [3 /*break*/, 3];
                    case 2:
                        message_1 = _a.sent();
                        this.showToast(message_1, 'error-toast');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LookupPage.prototype.onShowAdvancedOptions = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__advanced_options_advanced_options__["a" /* AdvancedOptionsPage */], { mm: this.mm });
        popover.onDidDismiss(function (mm) {
            if (mm != null)
                _this.mm = mm;
        });
        popover.present({ ev: myEvent });
    };
    LookupPage.prototype.setCurrentCoordinates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var position, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        position = _a.sent();
                        this.location.lat = position.coords.latitude;
                        this.location.lng = position.coords.longitude;
                        this.location.set = true;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw 'An error occurred while trying to get your current coordinates.';
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LookupPage.prototype.setCurrentAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var locationData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.nativeGeocoder.reverseGeocode(this.location.lat, this.location.lng)];
                    case 1:
                        locationData = _a.sent();
                        this.location.address = "\n        " + locationData['thoroughfare'] + ", \n        " + locationData['locality'] + ", \n        " + locationData['countryName'] + "\n      ";
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        // Desktop developing purpose since this only works for iOS and Android.
                        if (this.platform.is('ios') || this.platform.is('android')) {
                            throw 'An error occurred while trying to get your current address.';
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LookupPage.prototype.showToast = function (message, css) {
        var _this = this;
        this.statusBar.hide();
        this.toast = this.toastCtrl.create({
            message: message,
            position: 'top',
            cssClass: css,
            duration: 10000
        });
        this.toast.onDidDismiss(function () {
            _this.statusBar.show();
        });
        this.toast.present();
    };
    /*
     * Present Google places view.
     */
    LookupPage.prototype.onShowPlacesModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_autocomplete_items_modal_autocomplete_items__["a" /* ModalAutocompleteItems */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.location.address = data.description;
                _this.getPlaceDetail(data.place_id);
            }
        });
        modal.present();
    };
    LookupPage.prototype.getPlaceDetail = function (placeID) {
        var self = this;
        var request = { placeId: placeID };
        var map = this.mapHandler.getMap();
        this.placesService = new google.maps.places.PlacesService(map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                // Update map marker and location data on location changes
                self.location.address = place.formatted_address;
                var location_1 = place.geometry.location;
                self.location.lat = location_1.lat();
                self.location.lng = location_1.lng();
                self.mapHandler.setMapCenter(location_1);
                self.mapHandler.createMapMarker(location_1);
            }
        }
    };
    LookupPage.prototype.setMap = function () {
        var coordinates = { lat: this.location.lat, lng: this.location.lng };
        var divMap = document.getElementById('map');
        this.mapHandler.initMap(divMap, coordinates);
        this.mapHandler.setLoaderDismiss(this.loader);
        this.mapIsSet = true;
    };
    /*
     * Update view depending on chosen date and amount of past years.
     */
    LookupPage.prototype.onDateChange = function () {
        this.setNiceLookingDate();
        this.setOptionsAvailable();
    };
    /*
     * Set the date which will be shown for the user in the view.
     */
    LookupPage.prototype.setNiceLookingDate = function () {
        var day = this.chosenDate.substring(8, 10);
        if (day.charAt(0) == '0')
            day = day.charAt(1); // Remove 0 if any
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var month = months[this.chosenDate.substring(5, 7) - 1];
        this.niceLookingDate = day + " " + month;
    };
    LookupPage.prototype.setOptionsAvailable = function () {
        var fromYear = parseInt(this.chosenDate.substring(0, 4)); // Get YYYY
        var toYear = new Date().getFullYear();
        this.pastYears = toYear - fromYear;
        // Disable advanced options. Weather data is to insufficient.
        if (toYear - fromYear >= 11)
            this.optionsAvailable = false;
        else
            this.optionsAvailable = true;
    };
    LookupPage.prototype.onFetchWeatherData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var latitude, longitude, fromYear, toYear, years, precipDays, i, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        // Show loading animation
                        this.showLoading('Loading');
                        latitude = this.location.lat;
                        longitude = this.location.lng;
                        fromYear = new Date(this.chosenDate).getFullYear();
                        toYear = new Date().getFullYear();
                        years = toYear - fromYear;
                        precipDays = 0;
                        i = fromYear;
                        _a.label = 1;
                    case 1:
                        if (!(i < toYear)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.lookupService.load(i, this.chosenDate, latitude, longitude)];
                    case 2:
                        data = _a.sent();
                        if (this.wasRain(data))
                            precipDays += 1;
                        _a.label = 3;
                    case 3:
                        i += 1;
                        return [3 /*break*/, 1];
                    case 4:
                        this.showResultPage(precipDays, years);
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        this.loader.dismiss();
                        this.showToast('Weather data could not be fetched', 'error-toast');
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /*
     * Calculate if the day was rainy.
     */
    LookupPage.prototype.wasRain = function (data) {
        var rain = false;
        if (data.hasOwnProperty('precipType') && data['precipType'] == 'rain') {
            if (this.optionsAvailable && this.mm > 0) {
                if (data.hasOwnProperty('precipIntensity')) {
                    if (data['precipIntensity'] * 24 >= this.mm) {
                        rain = true;
                    }
                }
            }
            else {
                rain = true;
            }
        }
        return rain;
    };
    LookupPage.prototype.showResultPage = function (precipDays, yearsBack) {
        // Set database key
        var key = this.chosenDate.substring(0, 10) + "-" + this.mm + "mm-" + this.location.lat + "-" + this.location.lng;
        // Assemble all necessary data for result page
        var parameters = {
            keyName: key,
            precipDays: precipDays,
            yearsBack: yearsBack,
            location: this.location,
            niceLookingDate: this.niceLookingDate,
            mm: this.mm
        };
        // Present result page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], parameters);
    };
    LookupPage.prototype.showLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: text,
            dismissOnPageChange: true,
            cssClass: 'loading-animation'
        });
        this.loader.present();
    };
    /*
     * Setup date picker and the range of years to choose.
     */
    LookupPage.prototype.setupDatePicker = function () {
        var date = new Date();
        var year = date.getFullYear();
        var defaultYear = (year - this.pastYears).toString();
        var tzoffset = date.getTimezoneOffset() * 60000; // offset in milliseconds
        var localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
        this.chosenDate = localISOTime.replace(/^\d{4}/, defaultYear);
        this.minYear = year - this.yearLimit;
        this.maxYear = year - 1;
    };
    return LookupPage;
}());
LookupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lookup',template:/*ion-inline-start:"/Users/wictor/Documents/Rainless2/src/pages/lookup/lookup.html"*/'<ion-header no-border>\n\n  <!-- Navbar -->\n  <ion-navbar [hideBackButton]="true" color="header">\n    <ion-buttons start>\n      <button ion-button icon-only navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Date\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only [navPush]="helpPage">\n        <ion-icon name="help-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div class="gradient-background">\n\n    <!-- Current settings -->\n    <h1>{{ niceLookingDate }}</h1>\n    <h2>{{ pastYears }} past years</h2>\n\n    <!-- Settings buttons -->\n    <ion-grid padding>\n      <ion-row justify-content-center>\n        <ion-col>\n          <!-- Calendar button -->\n          <button ion-fab (click)="picker.open()" [disabled]="!mapIsSet" id="calendar-button">\n            <ion-icon name="md-calendar"></ion-icon>\n            <ion-datetime #picker\n              id="datetime-picker"\n              pickerFormat="D MMMM YYYY"\n              min="{{minYear}}"\n              max="{{maxYear}}"\n              (ionChange)="onDateChange()"\n              [(ngModel)]="chosenDate">\n            </ion-datetime>\n          </button>\n        </ion-col>\n        <ion-col>\n          <!-- Advanced options button -->\n          <button ion-fab (click)="onShowAdvancedOptions($event)" [disabled]="!optionsAvailable || !mapIsSet" id="options-button">\n            <ion-icon name="md-rainy"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <!-- Location button -->\n          <button ion-fab (click)="onShowPlacesModal()" [disabled]="!mapIsSet" id="pin-button">\n            <ion-icon name="pin"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-header>\n\n<ion-content no-bounce>\n\n  <!-- Google map -->\n  <div id="map"></div>\n\n  <!-- Lookup button -->\n  <ion-fab bottom center id="search-fab-container">\n    <button ion-fab class="gradient-background" (click)="onFetchWeatherData()" [disabled]="!chosenDate || !location.set">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Rainless2/src/pages/lookup/lookup.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_lookup_service__["a" /* LookupService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_10__map_handler__["a" /* MapHandler */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_lookup_service__["a" /* LookupService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_10__map_handler__["a" /* MapHandler */]])
], LookupPage);

//# sourceMappingURL=lookup.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultPage = (function () {
    function ResultPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.niceLookingDate = navParams.get('niceLookingDate');
        this.address = navParams.get('location').address;
        this.mm = navParams.get('mm');
        this.precipDays = navParams.get('precipDays');
        this.yearsBack = navParams.get('yearsBack');
    }
    ResultPage.prototype.onVisitDarkSky = function () {
        this.iab.create('https://darksky.net/poweredby/', '_system');
    };
    ResultPage.prototype.onPopToRoot = function () {
        this.navCtrl.popToRoot();
    };
    return ResultPage;
}());
ResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-result',template:/*ion-inline-start:"/Users/wictor/Documents/Rainless2/src/pages/lookup/result/result.html"*/'<ion-content class="gradient-background" no-bounce>\n\n  <!-- Top grid -->\n  <ion-grid class="page-grid-top">\n    <ion-row align-items-center class="page-grid-row">\n      <ion-col>\n\n        <h1 class="page-topic">Result</h1>\n\n        <ion-card class="result-card">\n          <ion-item>\n            <ion-icon name="md-rainy" item-left></ion-icon>\n            <h2>{{ niceLookingDate }}</h2>\n            <p>{{ address }}</p>\n          </ion-item>\n          <ion-card-content>\n            <p>\n              It has rained <span *ngIf="mm > 0">at least {{ mm }}mm</span>\n              {{ precipDays }} out of {{ yearsBack }} times this date during\n              the past {{ yearsBack }} years.\n            </p>\n          </ion-card-content>\n          <img src="assets/img/darksky-white-wide.png" class="darksky-logo-wide" (click)="onVisitDarkSky()" />\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Bottom grid -->\n  <ion-grid class="page-grid-bottom">\n    <ion-row align-items-center class="page-grid-row">\n      <ion-col>\n\n        <div padding>\n\n          <button ion-button icon-left navPop round block class="result-button">\n            <ion-icon name="search"></ion-icon>\n            New lookup\n          </button>\n\n          <button ion-button icon-left round block (click)="onPopToRoot()" class="result-button">\n            <ion-icon name="arrow-back"></ion-icon>\n            Back to menu\n          </button>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Rainless2/src/pages/lookup/result/result.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], ResultPage);

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAutocompleteItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalAutocompleteItems = (function () {
    function ModalAutocompleteItems(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = { query: '' };
    }
    ModalAutocompleteItems.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.content.scrollToTop();
        setTimeout(function () { return _this.searchbar.setFocus(); }, 100);
    };
    ModalAutocompleteItems.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalAutocompleteItems.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
    };
    ModalAutocompleteItems.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            types: ['geocode'],
            input: this.autocomplete.query
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            self.autocompleteItems = [];
            if (predictions) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                });
            }
        });
    };
    return ModalAutocompleteItems;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('searchbar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Searchbar */])
], ModalAutocompleteItems.prototype, "searchbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], ModalAutocompleteItems.prototype, "content", void 0);
ModalAutocompleteItems = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal-autocomplete-items',template:/*ion-inline-start:"/Users/wictor/Documents/Rainless2/src/pages/lookup/modal-autocomplete-items/modal-autocomplete-items.html"*/'<ion-header no-border>\n  <ion-navbar color="header" [hideBackButton]="true">\n    <ion-buttons start>\n      <button ion-button icon-only navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Location\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar color="header">\n    <ion-searchbar\n      #searchbar\n      [(ngModel)]="autocomplete.query"\n      [showCancelButton]="true"\n      (ionInput)="updateSearch()"\n      (ionCancel)="dismiss()"\n      placeholder="Search location">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content no-bounce>\n  <ion-list>\n    <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n      {{ item.description }}\n      <ion-icon name="pin" item-left></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Rainless2/src/pages/lookup/modal-autocomplete-items/modal-autocomplete-items.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], ModalAutocompleteItems);

//# sourceMappingURL=modal-autocomplete-items.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpPage = (function () {
    function HelpPage() {
        this.lastYear = new Date().getFullYear() - 1;
    }
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"/Users/wictor/Documents/Rainless2/src/pages/lookup/help/help.html"*/'<ion-header no-border>\n  <ion-navbar color="header" [hideBackButton]="true">\n    <ion-buttons start>\n      <button ion-button icon-only navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Help\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Date and years card -->\n  <ion-card class="help-card">\n    <ion-item>\n      <ion-icon item-left name="md-calendar"></ion-icon>\n      <h2>Date and years</h2>\n    </ion-item>\n    <ion-card-content>\n      <p>\n        Tap the calendar button to choose the date you want and the amount of past years to lookup.\n        By default this is set for today\'s date and 10 past years.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Daily precipitation card -->\n  <ion-card class="help-card">\n    <ion-item>\n      <ion-icon item-left name="md-rainy"></ion-icon>\n      <h2>Daily precipitation</h2>\n    </ion-item>\n    <ion-card-content>\n      <p>\n        Adjust the slider to choose the amount of daily precipitation.\n        The app will only consider a day as rainy if the chosen amount\n        of rain (or more) has fallen during that whole day. This might\n        be something you want to set to get a more desirable result.\n        This setting is completely optional and by default it is set for 0 mm.\n      </p>\n      <p id="worth-noting">\n        <strong>Worth noting</strong>\n      </p>\n      <p>\n        This setting is only available for lookups 10 past years or less.\n        This is because the older weather data often is to insufficient\n        for such calculations.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Location card -->\n  <ion-card class="help-card">\n    <ion-item>\n      <ion-icon item-left name="pin"></ion-icon>\n      <h2>Location</h2>\n    </ion-item>\n    <ion-card-content>\n      <p>\n        Tap the pin button to choose a location. A new window will appear with a search field\n        to type in a location. By default this is set for your current location.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Search card -->\n  <ion-card class="help-card">\n    <ion-item>\n      <ion-icon item-left name="search"></ion-icon>\n      <h2>Search</h2>\n    </ion-item>\n    <ion-card-content>\n      <p>\n        Tap the search button when you are done with all settings to make your lookup.\n        The app will check the chosen date and location for each year as from the year you\n        choose up until {{ lastYear }}. The result will be shown on a new page.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Rainless2/src/pages/lookup/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvancedOptionsPage = (function () {
    function AdvancedOptionsPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.mmPrecipitation = navParams.get('mm');
    }
    AdvancedOptionsPage.prototype.onClosePopover = function () {
        this.viewCtrl.dismiss(this.mmPrecipitation);
    };
    return AdvancedOptionsPage;
}());
AdvancedOptionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-advanced-options',template:/*ion-inline-start:"/Users/wictor/Documents/Rainless2/src/pages/lookup/advanced-options/advanced-options.html"*/'<ion-list no-lines>\n  <ion-list-header>\n    Daily precipitation\n  </ion-list-header>\n  <ion-item>\n    <ion-label>\n      <ion-badge id="mm-badge">{{ mmPrecipitation }} mm</ion-badge>\n    </ion-label>\n    <ion-range min="0" max="10" [(ngModel)]="mmPrecipitation">\n      <ion-icon small range-left name="md-rainy"></ion-icon>\n      <ion-icon range-right name="md-rainy"></ion-icon>\n    </ion-range>\n  </ion-item>\n</ion-list>\n\n<ion-item no-lines>\n  <button ion-button round block (click)="onClosePopover()" id="done-button">\n    Done\n  </button>\n</ion-item>\n'/*ion-inline-end:"/Users/wictor/Documents/Rainless2/src/pages/lookup/advanced-options/advanced-options.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AdvancedOptionsPage);

//# sourceMappingURL=advanced-options.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lookup_lookup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lookup_advanced_options_advanced_options__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lookup_help_help__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lookup_modal_autocomplete_items_modal_autocomplete_items__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_lookup_result_result__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_lookup_lookup__["a" /* LookupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_lookup_advanced_options_advanced_options__["a" /* AdvancedOptionsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_lookup_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_lookup_modal_autocomplete_items_modal_autocomplete_items__["a" /* ModalAutocompleteItems */],
            __WEBPACK_IMPORTED_MODULE_13__pages_lookup_result_result__["a" /* ResultPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_lookup_lookup__["a" /* LookupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_lookup_advanced_options_advanced_options__["a" /* AdvancedOptionsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_lookup_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_lookup_modal_autocomplete_items_modal_autocomplete_items__["a" /* ModalAutocompleteItems */],
            __WEBPACK_IMPORTED_MODULE_13__pages_lookup_result_result__["a" /* ResultPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/wictor/Documents/Rainless2/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/wictor/Documents/Rainless2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_localforage__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_localforage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LookupService = (function () {
    function LookupService(http, platform) {
        this.http = http;
        this.platform = platform;
        this.cors = 'https://cors-anywhere.herokuapp.com/';
        this.apiURL = 'https://api.darksky.net/forecast';
        this.apiKey = '2735c64ddcc4acfb0c869faf3adfad18';
        this.excludes = 'exclude=flags,currently,hourly';
        this.units = 'units=si';
        // Desktop developing purpose.
        if (platform.is('ios') || platform.is('android')) {
            this.cors = ''; // Cors is not needed on mobile devices.
        }
        this.setCacheStore();
    }
    LookupService.prototype.setCacheStore = function () {
        this.cacheStore = __WEBPACK_IMPORTED_MODULE_4_localforage__["createInstance"]({ name: "rainless", storeName: "cache" });
    };
    LookupService.prototype.load = function (i, chosenDate, latitude, longitude) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var year = i.toString();
            var month = (new Date(chosenDate).getMonth() + 1).toString();
            var day = new Date(chosenDate).getDate().toString();
            if (day.length == 1)
                day = '0' + day;
            if (month.length == 1)
                month = '0' + month;
            var date = year + "-" + month + "-" + day + "T00:00:00";
            var key = year + "-" + month + "-" + day + "-" + latitude + "-" + longitude;
            var url = "" + _this.cors + _this.apiURL + "/" + _this.apiKey + "/" + latitude + "," + longitude + "," + date + "?" + _this.excludes + "&" + _this.units;
            // First check if weather data is cached.
            _this.cacheStore.getItem(key).then(function (cache) {
                if (cache != null) {
                    resolve(cache);
                }
                else {
                    // If no cache was found call the weather API.
                    _this.http.get(url)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        data = data.daily.data[0];
                        _this.cacheStore.setItem(key, data).then(function () {
                            resolve(data);
                        });
                    }, function (error) {
                        reject();
                    });
                }
            });
        });
    };
    return LookupService;
}());
LookupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]])
], LookupService);

//# sourceMappingURL=lookup-service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapHandler = (function () {
    function MapHandler() {
        this.setMapPin();
    }
    MapHandler.prototype.initMap = function (divMap, coordinates) {
        this.map = new google.maps.Map(divMap, {
            center: coordinates,
            zoom: 12,
            styles: this.getMapStyle(),
            disableDefaultUI: true,
            draggable: true,
            zoomControl: false
        });
    };
    MapHandler.prototype.getMapStyle = function () {
        return [{ "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "color": "#5b6571" }, { "lightness": "35" }] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#f3f4f4" }] }, { "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{ "weight": 0.9 }, { "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#83cead" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#fee379" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#7fc8ed" }] }];
    };
    /*
     * Set map marker image and size.
     */
    MapHandler.prototype.setMapPin = function () {
        this.pin = {
            url: 'assets/img/pin.png',
            scaledSize: new google.maps.Size(32, 32)
        };
    };
    /*
     * Show user location/chosen location marker on map.
     */
    MapHandler.prototype.createMapMarker = function (place) {
        // Remove current marker from map.
        if (this.marker)
            this.marker.setMap(null);
        // Set new marker on map.
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            icon: this.pin,
            position: place
        });
    };
    MapHandler.prototype.setMapCenter = function (location) {
        this.map.setCenter(location);
    };
    MapHandler.prototype.getMap = function () {
        return this.map;
    };
    /*
     * Remove loader animation when map tiles have loaded.
     */
    MapHandler.prototype.setLoaderDismiss = function (loader) {
        google.maps.event.addListenerOnce(this.map, 'tilesloaded', function () {
            loader.dismiss();
        });
    };
    return MapHandler;
}());
MapHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MapHandler);

//# sourceMappingURL=map-handler.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map