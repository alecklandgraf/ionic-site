var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var Page1 = (function () {
    function Page1(app) {
        this.app = app;
        this.menu1Active();
    }
    Page1.prototype.menu1Active = function () {
        this.activeMenu = 'menu1';
        this.app.getComponent('menu1').enable(true);
        this.app.getComponent('menu2').enable(false);
    };
    Page1.prototype.menu2Active = function () {
        this.activeMenu = 'menu2';
        this.app.getComponent('menu1').enable(false);
        this.app.getComponent('menu2').enable(true);
    };
    Page1 = __decorate([
        ionic_1.Page({ templateUrl: 'page1.html' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object])
    ], Page1);
    return Page1;
    var _a;
})();
var ApiDemoApp = (function () {
    function ApiDemoApp(app) {
        this.app = app;
        this.rootView = Page1;
    }
    ApiDemoApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object])
    ], ApiDemoApp);
    return ApiDemoApp;
    var _a;
})();