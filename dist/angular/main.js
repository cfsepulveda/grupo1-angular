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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_gallery_audio_details_gallery_audio_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery-audio-details/gallery-audio-details.component */ "./src/app/gallery/gallery-audio-details/gallery-audio-details.component.ts");
/* harmony import */ var _gallery_gallery_image_details_gallery_image_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery-image-details/gallery-image-details.component */ "./src/app/gallery/gallery-image-details/gallery-image-details.component.ts");
/* harmony import */ var _gallery_gallery_video_details_gallery_video_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery-video-details/gallery-video-details.component */ "./src/app/gallery/gallery-video-details/gallery-video-details.component.ts");
/* harmony import */ var _gallery_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/add-image/add-image.component */ "./src/app/gallery/add-image/add-image.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _register_users_register_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-users/register-users.component */ "./src/app/register-users/register-users.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");










var routes = [
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
    {
        path: 'gallery',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
    },
    {
        path: 'gallery/audio-details/:id',
        component: _gallery_gallery_audio_details_gallery_audio_details_component__WEBPACK_IMPORTED_MODULE_3__["GalleryAudioDetailsComponent"]
    },
    {
        path: 'gallery/image-details/:id',
        component: _gallery_gallery_image_details_gallery_image_details_component__WEBPACK_IMPORTED_MODULE_4__["GalleryImageDetailsComponent"]
    },
    {
        path: 'gallery/video-details/:id',
        component: _gallery_gallery_video_details_gallery_video_details_component__WEBPACK_IMPORTED_MODULE_5__["GalleryVideoDetailsComponent"]
    }, {
        path: 'gallery/addimage',
        component: _gallery_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_6__["AddImageComponent"]
    },
    {
        path: 'gallery/registerUser',
        component: _register_users_register_users_component__WEBPACK_IMPORTED_MODULE_8__["RegisterUsersComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _services_gallery_rest_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/gallery-rest-client.service */ "./src/app/services/gallery-rest-client.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _gallery_gallery_audio_details_gallery_audio_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery-audio-details/gallery-audio-details.component */ "./src/app/gallery/gallery-audio-details/gallery-audio-details.component.ts");
/* harmony import */ var _gallery_gallery_image_details_gallery_image_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery-image-details/gallery-image-details.component */ "./src/app/gallery/gallery-image-details/gallery-image-details.component.ts");
/* harmony import */ var _gallery_gallery_video_details_gallery_video_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/gallery-video-details/gallery-video-details.component */ "./src/app/gallery/gallery-video-details/gallery-video-details.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _services_details_rest_client_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/details-rest-client.service */ "./src/app/services/details-rest-client.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gallery_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gallery/add-image/add-image.component */ "./src/app/gallery/add-image/add-image.component.ts");
/* harmony import */ var _register_users_register_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register-users/register-users.component */ "./src/app/register-users/register-users.component.ts");
/* harmony import */ var _services_register_users_rest_client_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/register-users-rest-client.service */ "./src/app/services/register-users-rest-client.service.ts");
/* harmony import */ var _services_image_rest_client_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/image-rest-client.service */ "./src/app/services/image-rest-client.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_login_rest_client_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/login-rest-client.service */ "./src/app/services/login-rest-client.service.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"],
                _gallery_gallery_audio_details_gallery_audio_details_component__WEBPACK_IMPORTED_MODULE_8__["GalleryAudioDetailsComponent"],
                _gallery_gallery_image_details_gallery_image_details_component__WEBPACK_IMPORTED_MODULE_9__["GalleryImageDetailsComponent"],
                _gallery_gallery_video_details_gallery_video_details_component__WEBPACK_IMPORTED_MODULE_10__["GalleryVideoDetailsComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _gallery_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_15__["AddImageComponent"],
                _register_users_register_users_component__WEBPACK_IMPORTED_MODULE_16__["RegisterUsersComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
            ],
            providers: [_services_gallery_rest_client_service__WEBPACK_IMPORTED_MODULE_6__["GalleryRestClientService"], _services_details_rest_client_service__WEBPACK_IMPORTED_MODULE_12__["DetailsRestClient"], _services_storage_service__WEBPACK_IMPORTED_MODULE_13__["StorageService"], _services_register_users_rest_client_service__WEBPACK_IMPORTED_MODULE_17__["RegisterUsersRestClientService"], _services_image_rest_client_service__WEBPACK_IMPORTED_MODULE_18__["ImageRestClient"], _services_login_rest_client_service__WEBPACK_IMPORTED_MODULE_20__["LoginRestClientService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/add-image/add-image.component.html":
/*!************************************************************!*\
  !*** ./src/app/gallery/add-image/add-image.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <div class=\"justify-content-center flex-column\">\r\n      <form [formGroup]=\"imageForm\" (ngSubmit)=\"submit()\" novalidate>\r\n \r\n        \r\n              <div class=\"form-group\">\r\n                  <label for=\"Nombre\">Nombre</label>\r\n                  <input formControlName=\"Nombre\" type=\"text\" class=\"form-control\" id=\"Nombre\"\r\n                      placeholder=\"Nombre de la imagen\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"Url\">Url</label>\r\n                  <input  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"Url\" type=\"text\" class=\"form-control\" id=\"Url\"\r\n                      placeholder=\"Url de la imagen\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"Titulo\">Titulo</label>\r\n                  <input formControlName=\"Titulo\" type=\"text\" class=\"form-control\" id=\"Titulo\"\r\n                      placeholder=\"Titulo de la imagen\">\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                  <label for=\"Ciudad\">Ciudad</label>\r\n                  <input formControlName=\"Ciudad\" type=\"text\" class=\"form-control\" id=\"Ciudad\"\r\n                      placeholder=\"Cidad de la imagen\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"Pais\">Pais</label>\r\n                  <input formControlName=\"Pais\" type=\"text\" class=\"form-control\" id=\"Pais\"\r\n                      placeholder=\"Pais de la imagen\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"Descripcion\">Descripcion</label>\r\n                  <input formControlName=\"Descripcion\" type=\"text\" class=\"form-control\" id=\"Descripcion\"\r\n                      placeholder=\"Descripcion de la imagen\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"Tipo\">Tipo</label>\r\n                  <input formControlName=\"Tipo\" type=\"text\" class=\"form-control\" id=\"Tipo\"\r\n                      placeholder=\"Tipo de la imagen\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"Archivo\">Archivo</label>\r\n                  <input  (change)=\"onFileSelected($event)\" type=\"file\" class=\"form-control\"  #selectFile\r\n                      placeholder=\"Archivo de la imagen\">\r\n              </div>\r\n          \r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!imageForm.valid\">Agregar Imagen</button>\r\n      </form>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gallery/add-image/add-image.component.scss":
/*!************************************************************!*\
  !*** ./src/app/gallery/add-image/add-image.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvYWRkLWltYWdlL2FkZC1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gallery/add-image/add-image.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gallery/add-image/add-image.component.ts ***!
  \**********************************************************/
/*! exports provided: AddImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImageComponent", function() { return AddImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_image_rest_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/image-rest-client.service */ "./src/app/services/image-rest-client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AddImageComponent = /** @class */ (function () {
    function AddImageComponent(storageService, route, imageRestClient, formBuilder) {
        this.storageService = storageService;
        this.route = route;
        this.imageRestClient = imageRestClient;
        this.formBuilder = formBuilder;
    }
    AddImageComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectFile = event.target.files[0];
    };
    AddImageComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddImageComponent.prototype.buildForm = function () {
        this.imageForm = this.formBuilder.group({
            Nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            Titulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            Ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            Pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            Descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            Tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    };
    AddImageComponent.prototype.submit = function () {
        var Nombre = this.imageForm.get('Nombre').value;
        var Url = this.Url;
        var Titulo = this.imageForm.get('Titulo').value;
        var date = new Date();
        var Ciudad = this.imageForm.get('Ciudad').value;
        var Pais = this.imageForm.get('Pais').value;
        var Descripcion = this.imageForm.get('Descripcion').value;
        var Tipo = this.imageForm.get('Tipo').value;
        var Archivo = this.selectFile;
        var imagen = { "name": Nombre, "author": Nombre, "url": Url, "title": Titulo, "date": date, "city": Ciudad, "country": Pais, "Descripcion": Descripcion, "type": Tipo, "Archivo": Archivo, "User": 1 };
        this.imageRestClient.createImage(imagen).subscribe(function (response) {
            alert("Imagen agregada");
        });
    };
    AddImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-image',
            template: __webpack_require__(/*! ./add-image.component.html */ "./src/app/gallery/add-image/add-image.component.html"),
            styles: [__webpack_require__(/*! ./add-image.component.scss */ "./src/app/gallery/add-image/add-image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_image_rest_client_service__WEBPACK_IMPORTED_MODULE_2__["ImageRestClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], AddImageComponent);
    return AddImageComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery-audio-details/gallery-audio-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/gallery/gallery-audio-details/gallery-audio-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"justify-content-center flex-column\">\r\n        <audio height=\"200px\" id=\"audio\" [src]=\"audio?.url\" controls></audio>\r\n\r\n        <h1>Detalles</h1>\r\n        <table class=\"table table-sm table-dark\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Titulo</th>\r\n                    <th scope=\"col\">Autor</th>\r\n                    <th scope=\"col\">Fecha</th>\r\n                    <th scope=\"col\">Ciudad</th>\r\n                    <th scope=\"col\">Pais</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <th scope=\"row\">{{id}}</th>\r\n                    <td>{{audio.name}}</td>\r\n                    <td>{{audio.title}}</td>\r\n                    <td>{{audio.author}}</td>\r\n                    <td>{{audio.date  | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{audio.city}}</td>\r\n                    <td>{{audio.country}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <h1 *ngIf=\"this.storageService.isLogged\">clips</h1>\r\n        <table *ngIf=\"this.storageService.isLogged\" class=\"table table-sm table-dark\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Segundo de Inicio</th>\r\n                    <th scope=\"col\">Segundo de Fin</th>\r\n                    <th scope=\"col\">Ver clip</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let clip of clips; let i = index\">\r\n                    <th scope=\"row\">{{i}}</th>\r\n                    <td>{{clip.name}}</td>\r\n                    <td>{{clip.secondstart}}</td>\r\n                    <td>{{clip.secondend}}</td>\r\n                    <td> <button (click)=\"watchClip(i)\" class=\"btn btn-secondary\">Reproducir Clip</button></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <h1 *ngIf=\"this.storageService.isLogged\">Agregar Clip</h1>\r\n\r\n        <form *ngIf=\"this.storageService.isLogged\" [formGroup]=\"clipForm\" (ngSubmit)=\"submit()\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"inputClipName\">Nombre del clip</label>\r\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"inputClipName\"\r\n                    placeholder=\"Nombre del clip\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputSecondStart\">Segundo de inicio</label>\r\n                    <input formControlName=\"secondStart\" type=\"text\" class=\"form-control\" id=\"inputSecondStart\"\r\n                        placeholder=\"Ejemplo 10\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputSecondEnd\">Segundo Fin</label>\r\n                    <input formControlName=\"secondEnd\" type=\"text\" class=\"form-control\" id=\"inputSecondEnd\"\r\n                        placeholder=\"Ejemplo 20\">\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!clipForm.valid\">Agregar Clip</button>\r\n        </form>\r\n    <br>\r\n        <button (click)=\"goBack()\" class=\"btn btn-secondary btn-lg btn-block\">Volver</button>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery-audio-details/gallery-audio-details.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/gallery/gallery-audio-details/gallery-audio-details.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1hdWRpby1kZXRhaWxzL2dhbGxlcnktYXVkaW8tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gallery/gallery-audio-details/gallery-audio-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/gallery/gallery-audio-details/gallery-audio-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GalleryAudioDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryAudioDetailsComponent", function() { return GalleryAudioDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_details_rest_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/details-rest-client.service */ "./src/app/services/details-rest-client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var GalleryAudioDetailsComponent = /** @class */ (function () {
    function GalleryAudioDetailsComponent(storageService, route, detailsRestClient, formBuilder, location) {
        this.storageService = storageService;
        this.route = route;
        this.detailsRestClient = detailsRestClient;
        this.formBuilder = formBuilder;
        this.location = location;
        this.getAudioDetails();
        this.getAudiosClips();
    }
    GalleryAudioDetailsComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    GalleryAudioDetailsComponent.prototype.buildForm = function () {
        this.clipForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            secondStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            secondEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    };
    GalleryAudioDetailsComponent.prototype.getAudioDetails = function () {
        this.id = this.route.snapshot.params['id'];
        this.audio = this.storageService.audiosGallery[this.id];
    };
    GalleryAudioDetailsComponent.prototype.getAudiosClips = function () {
        var _this = this;
        this.detailsRestClient.getAllAudiosClip().subscribe(function (data) {
            _this.clips = data.filter(function (item, index) { return item.audioname == _this.audio.name; });
        });
    };
    GalleryAudioDetailsComponent.prototype.submit = function () {
        var _this = this;
        var name = this.clipForm.get('name').value;
        var secondStart = this.clipForm.get('secondStart').value;
        var secondEnd = this.clipForm.get('secondEnd').value;
        var clip = { "name": name, "secondstart": secondStart, "secondend": secondEnd, "audioname": this.audio.name, 'email': this.storageService.userLogged.email };
        this.detailsRestClient.createAudioClip(clip).subscribe(function (response) {
            _this.getAudiosClips();
            _this.clipForm.reset();
        });
    };
    GalleryAudioDetailsComponent.prototype.watchClip = function (i) {
        this.secondStart = Number(this.clips[i].secondstart);
        this.secondEnd = Number(this.clips[i].secondend);
        this.audio.url + "#t=" + this.secondStart + "," + this.secondEnd;
        document.getElementById("audio").setAttribute("src", this.audio.url + "#t=" + this.secondStart + "," + this.secondEnd);
        document.getElementById("audio").setAttribute("autoplay", "autoplay");
    };
    GalleryAudioDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    GalleryAudioDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-audio-details',
            template: __webpack_require__(/*! ./gallery-audio-details.component.html */ "./src/app/gallery/gallery-audio-details/gallery-audio-details.component.html"),
            styles: [__webpack_require__(/*! ./gallery-audio-details.component.scss */ "./src/app/gallery/gallery-audio-details/gallery-audio-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_details_rest_client_service__WEBPACK_IMPORTED_MODULE_2__["DetailsRestClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], GalleryAudioDetailsComponent);
    return GalleryAudioDetailsComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery-image-details/gallery-image-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/gallery/gallery-image-details/gallery-image-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"justify-content-center flex-column\">\r\n        <img height=\"200px\" [src]=\"image?.url\" controls>\r\n\r\n        <h1>Detalles</h1>\r\n        <table class=\"table table-sm table-dark\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Titulo</th>\r\n                    <th scope=\"col\">Autor</th>\r\n                    <th scope=\"col\">Fecha</th>\r\n                    <th scope=\"col\">Ciudad</th>\r\n                    <th scope=\"col\">Pais</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <th scope=\"row\">{{id}}</th>\r\n                    <td>{{image.name}}</td>\r\n                    <td>{{image.title}}</td>\r\n                    <td>{{image.author}}</td>\r\n                    <td>{{image.date  | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{image.city}}</td>\r\n                    <td>{{image.country}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery-image-details/gallery-image-details.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/gallery/gallery-image-details/gallery-image-details.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1pbWFnZS1kZXRhaWxzL2dhbGxlcnktaW1hZ2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gallery/gallery-image-details/gallery-image-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/gallery/gallery-image-details/gallery-image-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GalleryImageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImageDetailsComponent", function() { return GalleryImageDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");




var GalleryImageDetailsComponent = /** @class */ (function () {
    function GalleryImageDetailsComponent(storageService, route) {
        this.storageService = storageService;
        this.route = route;
        this.getImageDetails();
    }
    GalleryImageDetailsComponent.prototype.ngOnInit = function () {
    };
    GalleryImageDetailsComponent.prototype.getImageDetails = function () {
        this.id = this.route.snapshot.params['id'];
        this.image = this.storageService.imagesGallery[this.id];
    };
    GalleryImageDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-image-details',
            template: __webpack_require__(/*! ./gallery-image-details.component.html */ "./src/app/gallery/gallery-image-details/gallery-image-details.component.html"),
            styles: [__webpack_require__(/*! ./gallery-image-details.component.scss */ "./src/app/gallery/gallery-image-details/gallery-image-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GalleryImageDetailsComponent);
    return GalleryImageDetailsComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery-video-details/gallery-video-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/gallery/gallery-video-details/gallery-video-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"justify-content-center flex-column\">\r\n        <video height=\"200px\" id=\"video\" [src]=\"video.url\" controls></video>\r\n\r\n        <h1>Detalles</h1>\r\n        <table class=\"table table-sm table-dark\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Titulo</th>\r\n                    <th scope=\"col\">Autor</th>\r\n                    <th scope=\"col\">Fecha</th>\r\n                    <th scope=\"col\">Ciudad</th>\r\n                    <th scope=\"col\">Pais</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <th scope=\"row\">{{id}}</th>\r\n                    <td>{{video.name}}</td>\r\n                    <td>{{video.title}}</td>\r\n                    <td>{{video.author}}</td>\r\n                    <td>{{video.date  | date: 'dd/MM/yyyy'}}</td>\r\n                    <td>{{video.city}}</td>\r\n                    <td>{{video.country}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <h1 *ngIf=\"this.storageService.isLogged\" >clips</h1>\r\n        <table *ngIf=\"this.storageService.isLogged\" class=\"table table-sm table-dark\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Segundo de Inicio</th>\r\n                    <th scope=\"col\">Segundo de Fin</th>\r\n                    <th scope=\"col\">Ver clip</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let clip of clips; let i = index\">\r\n                    <th scope=\"row\">{{i}}</th>\r\n                    <td>{{clip.name}}</td>\r\n                    <td>{{clip.secondstart}}</td>\r\n                    <td>{{clip.secondend}}</td>\r\n                    <td> <button (click)=\"watchClip(i)\" class=\"btn btn-secondary\">Reproducir Clip</button></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <h1 *ngIf=\"this.storageService.isLogged\">Agregar Clip</h1>\r\n\r\n        <form *ngIf=\"this.storageService.isLogged\" [formGroup]=\"clipForm\" (ngSubmit)=\"submit()\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"inputClipName\">Nombre del clip</label>\r\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"inputClipName\"\r\n                    placeholder=\"Nombre del clip\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputSecondStart\">Segundo de inicio</label>\r\n                    <input formControlName=\"secondStart\" type=\"text\" class=\"form-control\" id=\"inputSecondStart\"\r\n                        placeholder=\"Ejemplo 10\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"inputSecondEnd\">Segundo Fin</label>\r\n                    <input formControlName=\"secondEnd\" type=\"text\" class=\"form-control\" id=\"inputSecondEnd\"\r\n                        placeholder=\"Ejemplo 20\">\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!clipForm.valid\">Agregar Clip</button>\r\n        </form>\r\n        <br> <button (click)=\"goBack()\" class=\"btn btn-secondary btn-lg btn-block\">Volver</button>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery-video-details/gallery-video-details.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/gallery/gallery-video-details/gallery-video-details.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS12aWRlby1kZXRhaWxzL2dhbGxlcnktdmlkZW8tZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gallery/gallery-video-details/gallery-video-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/gallery/gallery-video-details/gallery-video-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GalleryVideoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryVideoDetailsComponent", function() { return GalleryVideoDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_details_rest_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/details-rest-client.service */ "./src/app/services/details-rest-client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var GalleryVideoDetailsComponent = /** @class */ (function () {
    function GalleryVideoDetailsComponent(storageService, route, detailsRestClient, formBuilder, location) {
        this.storageService = storageService;
        this.route = route;
        this.detailsRestClient = detailsRestClient;
        this.formBuilder = formBuilder;
        this.location = location;
        this.getVideoDetails();
        this.getVideosClips();
    }
    GalleryVideoDetailsComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    GalleryVideoDetailsComponent.prototype.buildForm = function () {
        this.clipForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            secondStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            secondEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    };
    GalleryVideoDetailsComponent.prototype.getVideoDetails = function () {
        this.id = this.route.snapshot.params['id'];
        this.video = this.storageService.videosGallery[this.id];
    };
    GalleryVideoDetailsComponent.prototype.getVideosClips = function () {
        var _this = this;
        this.detailsRestClient.getAllVideosClip().subscribe(function (data) {
            _this.clips = data.filter(function (item, index) { return item.videoname == _this.video.name; });
        });
    };
    GalleryVideoDetailsComponent.prototype.submit = function () {
        var _this = this;
        var name = this.clipForm.get('name').value;
        var secondStart = this.clipForm.get('secondStart').value;
        var secondEnd = this.clipForm.get('secondEnd').value;
        var clip = { "name": name, "secondstart": secondStart, "secondend": secondEnd, "videoname": this.video.name, 'email': this.storageService.userLogged.email };
        this.detailsRestClient.createVideoClip(clip).subscribe(function (response) {
            _this.getVideosClips();
            _this.clipForm.reset();
        });
    };
    GalleryVideoDetailsComponent.prototype.watchClip = function (i) {
        this.secondStart = Number(this.clips[i].secondstart);
        this.secondEnd = Number(this.clips[i].secondend);
        this.video.url + "#t=" + this.secondStart + "," + this.secondEnd;
        document.getElementById("video").setAttribute("src", this.video.url + "#t=" + this.secondStart + "," + this.secondEnd);
        document.getElementById("video").setAttribute("autoplay", "autoplay");
    };
    GalleryVideoDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    GalleryVideoDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-video-details',
            template: __webpack_require__(/*! ./gallery-video-details.component.html */ "./src/app/gallery/gallery-video-details/gallery-video-details.component.html"),
            styles: [__webpack_require__(/*! ./gallery-video-details.component.scss */ "./src/app/gallery/gallery-video-details/gallery-video-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_details_rest_client_service__WEBPACK_IMPORTED_MODULE_2__["DetailsRestClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], GalleryVideoDetailsComponent);
    return GalleryVideoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container-fluid\">\r\n  <h1>Galeria</h1>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-auto\" *ngFor=\"let videoGallery of storageService.videosGallery ; let i = index\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <video height=\"200px\" [src]=\"videoGallery.url\" controls></video>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{videoGallery.title}}</h5>\r\n          <p class=\"card-text\">{{videoGallery.author}}</p>\r\n          <p class=\"card-text\">{{videoGallery.date | date: 'dd/MM/yyyy'}}</p>\r\n          <a routerLink=\"video-details/{{i}}\" class=\"btn btn-primary\">Ver detalles</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-auto\" *ngFor=\"let imageGallery of storageService.imagesGallery ; let i = index\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <img height=\"200px\" [src]=\"imageGallery.url\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{imageGallery.title}}</h5>\r\n          <p class=\"card-text\">{{imageGallery.author}}</p>\r\n          <p class=\"card-text\">{{imageGallery?.date | date: 'dd/MM/yyyy'}}</p>\r\n          <a routerLink=\"image-details/{{i}}\" class=\"btn btn-primary\">Ver detalles</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-auto\" *ngFor=\"let audioGallery of storageService.audiosGallery ; let i = index\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <div style=\"width:90%\">\r\n          <audio [src]=\"audioGallery.url\" controls></audio>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{audioGallery.title}}</h5>\r\n          <p class=\"card-text\">{{audioGallery.author}}</p>\r\n          <p class=\"card-text\">{{audioGallery?.date | date: 'dd/MM/yyyy'}}</p>\r\n          <a routerLink=\"audio-details/{{i}}\" class=\"btn btn-primary\">Ver detalles</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gallery_rest_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gallery-rest-client.service */ "./src/app/services/gallery-rest-client.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(galleryRestClientService, storageService) {
        this.galleryRestClientService = galleryRestClientService;
        this.storageService = storageService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryRestClientService.getAllVideosGallery().subscribe(function (data) {
            _this.storageService.videosGallery = data;
        });
        this.galleryRestClientService.getAllAudiosGallery().subscribe(function (data) {
            _this.storageService.audiosGallery = data;
        });
        this.galleryRestClientService.getAllImagesGallery().subscribe(function (data) {
            _this.storageService.imagesGallery = data;
        });
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gallery_rest_client_service__WEBPACK_IMPORTED_MODULE_2__["GalleryRestClientService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"justify-content-center flex-column\">\r\n    <img src=\"http://www3.uah.es/master_psicopedagogiaUAH/wp-content/uploads/2015/06/galeria_banner.jpg\">\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Usuario</label>\r\n        <input formControlName=\"user\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n          aria-describedby=\"user\" placeholder=\"user\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\r\n          placeholder=\"Password\">\r\n      </div>\r\n      <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary\">Login</button>\r\n      </div>\r\n      <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n        <a routerLink=\"/gallery\" class=\"btn btn-primary\">Volver</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_rest_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login-rest-client.service */ "./src/app/services/login-rest-client.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginRestClientService, storageService, router) {
        this.formBuilder = formBuilder;
        this.loginRestClientService = loginRestClientService;
        this.storageService = storageService;
        this.router = router;
        this.storageService.isLogged = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.storageService.isLogged = false;
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var name = this.loginForm.get('user').value;
        var password = this.loginForm.get('password').value;
        var credentials = { "login": name, "password": password };
        this.loginRestClientService.authenticate(credentials).subscribe(function (response) {
            console.log(response);
            _this.storageService.userLogged = response;
            _this.storageService.isLogged = true;
            _this.router.navigate(['gallery']);
        }, function (error) {
            console.log(error);
            alert("Usuario o Password invalido");
            _this.loginForm.reset();
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_login_rest_client_service__WEBPACK_IMPORTED_MODULE_4__["LoginRestClientService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" routerLink=\"/gallery\">Galeria</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li *ngIf=\"!this.storageService.isLogged\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">login</a>\r\n      </li>\r\n      <li *ngIf=\"this.storageService.isLogged\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/gallery/addimage\">Adicionar imagen</a>\r\n      </li>\r\n      <li *ngIf=\"!this.storageService.isLogged\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/gallery/registerUser\">Registrarse</a>\r\n      </li>\r\n      <li *ngIf=\"this.storageService.isLogged\" class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"sessionClose()\">Cerrar Sesion</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(storageService) {
        this.storageService = storageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.sessionClose = function () {
        this.storageService.isLogged = false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/register-users/register-users.component.html":
/*!**************************************************************!*\
  !*** ./src/app/register-users/register-users.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<!--Grid column-->\r\n<div class=\"col-md-6 col-xl-5 mb-4\">\r\n\r\n  <!--Card-->\r\n  <div class=\"card\">\r\n\r\n    <!-- Form -->\r\n    <form name=\"\" class=\"card\" [formGroup]=\"registerForm\">\r\n      <!-- Heading -->\r\n      <h3 class=\"dark-grey-text text-center\">\r\n        <strong>Registro:</strong>\r\n      </h3>\r\n      <hr>\r\n\r\n      <div class=\"md-form\">\r\n        <i class=\"fas fa-user prefix grey-text\"></i>\r\n        <label for=\"form3\">Usuario: </label>\r\n        <input id=\"login\" formControlName=\"login\" type=\"text\" class=\"form-control\" />\r\n      </div>\r\n      <div class=\"md-form\">\r\n        <i class=\"fas fa-envelope prefix grey-text\"></i>\r\n        <label for=\"form2\">Contraseña: </label>\r\n        <input id=\"password\" formControlName=\"password\" type=\"password\" class=\"form-control\" />\r\n      </div>\r\n      <div class=\"md-form\">\r\n        <i class=\"fas fa-user prefix grey-text\"></i>\r\n        <label for=\"form3\">Nombre: </label>\r\n        <input id=\"name\" formControlName=\"name\" type=\"text\" class=\"form-control\" />\r\n      </div>\r\n      <div class=\"md-form\">\r\n        <i class=\"fas fa-user prefix grey-text\"></i>\r\n        <label for=\"form3\">Apellido: </label>\r\n        <input id=\"lastname\" formControlName=\"lastname\" type=\"text\" class=\"form-control\" />\r\n      </div>\r\n      <div class=\"md-form\">\r\n        <i class=\"fas fa-envelope prefix grey-text\"></i>\r\n        <label for=\"form2\">Correo: </label>\r\n        <input id=\"email\" formControlName=\"email\" type=\"email\" class=\"form-control\" />\r\n      </div>\r\n      <div class=\"md-form\">\r\n        <i class=\"fas fa-envelope prefix grey-text\"></i>\r\n        <label for=\"form2\">URL Fotografia: </label>\r\n        <input id=\"photo\" formControlName=\"photo\" type=\"url\" class=\"form-control\" />\r\n      </div>\r\n      <div class=\"md-form\">\r\n        <i class=\"fas fa-envelope prefix grey-text\"></i>\r\n        <label for=\"form2\">Ciudad: </label>\r\n        <input id=\"city\" formControlName=\"city\" type=\"text\" class=\"form-control\" />\r\n      </div>\r\n      <div class=\"md-form\">\r\n        <i class=\"fas fa-envelope prefix grey-text\"></i>\r\n        <label for=\"form2\">País: </label>\r\n        <input id=\"country\" formControlName=\"country\" type=\"text\" class=\"form-control\" />\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-info btn-sm\" id=\"send\" name=\"send\" type=\"submit\" (click)=\"register()\">Submit</button>\r\n        <hr>\r\n        <button class=\"btn btn-info btn-sm\" (click)=\"goBack()\">Cancelar</button>\r\n      </div>\r\n\r\n    </form>\r\n    <!-- Form -->\r\n\r\n  </div>\r\n  <!--/.Card-->\r\n\r\n</div>\r\n<!--Grid column-->"

/***/ }),

/***/ "./src/app/register-users/register-users.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/register-users/register-users.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXVzZXJzL3JlZ2lzdGVyLXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register-users/register-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/register-users/register-users.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUsersComponent", function() { return RegisterUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_register_users_rest_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/register-users-rest-client.service */ "./src/app/services/register-users-rest-client.service.ts");






var RegisterUsersComponent = /** @class */ (function () {
    function RegisterUsersComponent(router, route, location, registerUsersRestClientService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.registerUsersRestClientService = registerUsersRestClientService;
    }
    RegisterUsersComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    };
    ;
    RegisterUsersComponent.prototype.register = function () {
        var _this = this;
        var login = this.registerForm.get('login').value;
        var password = this.registerForm.get('password').value;
        var name = this.registerForm.get('name').value;
        var lastname = this.registerForm.get('lastname').value;
        var email = this.registerForm.get('email').value;
        var city = this.registerForm.get('city').value;
        var country = this.registerForm.get('country').value;
        var photo = this.registerForm.get('photo').value;
        var user = { 'login': login, 'password': password, 'name': name, 'lastname': lastname, 'email': email, 'photo': photo, 'city': city, 'country': country };
        this.registerUsersRestClientService.register(user).subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['gallery']);
        }, function (error) {
            console.log(error);
            alert("Formulario Invalido");
            _this.registerForm.reset();
        });
    };
    ;
    RegisterUsersComponent.prototype.goBack = function () {
        this.location.back();
    };
    ;
    RegisterUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-users',
            template: __webpack_require__(/*! ./register-users.component.html */ "./src/app/register-users/register-users.component.html"),
            styles: [__webpack_require__(/*! ./register-users.component.scss */ "./src/app/register-users/register-users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_register_users_rest_client_service__WEBPACK_IMPORTED_MODULE_5__["RegisterUsersRestClientService"]])
    ], RegisterUsersComponent);
    return RegisterUsersComponent;
}());



/***/ }),

/***/ "./src/app/services/details-rest-client.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/details-rest-client.service.ts ***!
  \*********************************************************/
/*! exports provided: DetailsRestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRestClient", function() { return DetailsRestClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DetailsRestClient = /** @class */ (function () {
    function DetailsRestClient(http) {
        this.http = http;
    }
    DetailsRestClient.prototype.getAllVideosClip = function () {
        return this.http.get("https://grupo1-app-rest.herokuapp.com/clipVideo/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    DetailsRestClient.prototype.getAllAudiosClip = function () {
        return this.http.get("https://grupo1-app-rest.herokuapp.com/clipAudio/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    DetailsRestClient.prototype.createVideoClip = function (videoClip) {
        return this.http.post("https://grupo1-app-rest.herokuapp.com/clipVideo/", videoClip).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { }));
    };
    DetailsRestClient.prototype.createImage = function (image) {
        return this.http.post("https://grupo1-app-rest.herokuapp.com/images/", image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { }));
    };
    DetailsRestClient.prototype.createAudioClip = function (audioClip) {
        return this.http.post("https://grupo1-app-rest.herokuapp.com/clipAudio/", audioClip).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { }));
    };
    DetailsRestClient.prototype.getUsers = function () {
        return this.http.get("https://grupo1-app-rest.herokuapp.com/registerUser/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    DetailsRestClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DetailsRestClient);
    return DetailsRestClient;
}());



/***/ }),

/***/ "./src/app/services/gallery-rest-client.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/gallery-rest-client.service.ts ***!
  \*********************************************************/
/*! exports provided: GalleryRestClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRestClientService", function() { return GalleryRestClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var GalleryRestClientService = /** @class */ (function () {
    function GalleryRestClientService(http) {
        this.http = http;
    }
    GalleryRestClientService.prototype.getAllAudiosGallery = function () {
        return this.http.get("https://grupo1-app-rest.herokuapp.com/audios/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (reponse) { return reponse.json(); }));
    };
    GalleryRestClientService.prototype.getAllVideosGallery = function () {
        return this.http.get("https://grupo1-app-rest.herokuapp.com/videos/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (reponse) { return reponse.json(); }));
    };
    GalleryRestClientService.prototype.getAllImagesGallery = function () {
        return this.http.get("https://grupo1-app-rest.herokuapp.com/images/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (reponse) { return reponse.json(); }));
    };
    GalleryRestClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GalleryRestClientService);
    return GalleryRestClientService;
}());



/***/ }),

/***/ "./src/app/services/image-rest-client.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/image-rest-client.service.ts ***!
  \*******************************************************/
/*! exports provided: ImageRestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageRestClient", function() { return ImageRestClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ImageRestClient = /** @class */ (function () {
    function ImageRestClient(http) {
        this.http = http;
    }
    ImageRestClient.prototype.createImage = function (image) {
        return this.http.post("https://grupo1-app-rest.herokuapp.com/images/", image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { }));
    };
    ImageRestClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ImageRestClient);
    return ImageRestClient;
}());



/***/ }),

/***/ "./src/app/services/login-rest-client.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/login-rest-client.service.ts ***!
  \*******************************************************/
/*! exports provided: LoginRestClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRestClientService", function() { return LoginRestClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LoginRestClientService = /** @class */ (function () {
    function LoginRestClientService(http) {
        this.http = http;
    }
    LoginRestClientService.prototype.authenticate = function (credentials) {
        return this.http.post("https://grupo1-app-rest.herokuapp.com/loginUser/", credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    LoginRestClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LoginRestClientService);
    return LoginRestClientService;
}());



/***/ }),

/***/ "./src/app/services/register-users-rest-client.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/register-users-rest-client.service.ts ***!
  \****************************************************************/
/*! exports provided: RegisterUsersRestClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUsersRestClientService", function() { return RegisterUsersRestClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var RegisterUsersRestClientService = /** @class */ (function () {
    function RegisterUsersRestClientService(http) {
        this.http = http;
    }
    RegisterUsersRestClientService.prototype.register = function (user) {
        return this.http.post("https://grupo1-app-rest.herokuapp.com/registerUser/", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { }));
    };
    RegisterUsersRestClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], RegisterUsersRestClientService);
    return RegisterUsersRestClientService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aleja\Documents\ProcesosAgiles\Angular\grupo1-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map