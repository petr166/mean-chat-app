webpackJsonp([1,4],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // development
        // private apiUrl: string = "http://localhost:8080/users"; //!CHANGE this with the backend url
        // build
        this.apiUrl = "/users";
    }
    AuthService.prototype.registerUser = function (user) {
        var url = this.apiUrl + "/register";
        // prepare the request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var reqBody = user;
        // POST
        var observableReq = this.http.post(url, reqBody, options)
            .map(this.extractData);
        return observableReq;
    };
    AuthService.prototype.authenticateUser = function (user) {
        var url = this.apiUrl + "/authenticate";
        // prepare the request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var reqBody = user;
        // POST
        var observableReq = this.http.post(url, reqBody, options)
            .map(this.extractData);
        return observableReq;
    };
    AuthService.prototype.getProfile = function () {
        var url = this.apiUrl + "/profile";
        this.loadCredentials();
        // prepare the request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
            "Content-Type": "application/json",
            "Authorization": this.authToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // POST
        var observableReq = this.http.get(url, options)
            .map(this.extractData);
        return observableReq;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUserData = function () {
        this.loadCredentials();
        var jUser = JSON.parse(this.user);
        var jData = { token: this.authToken, user: jUser };
        return jData;
    };
    AuthService.prototype.loadCredentials = function () {
        var token = localStorage.getItem("token");
        var user = localStorage.getItem("user");
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 230;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(247);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(332),
        styles: [__webpack_require__(319)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chat_room_chat_room_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_message_message_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_chat_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_11__components_chat_room_chat_room_component__["a" /* ChatRoomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_chat_room_chat_room_component__["a" /* ChatRoomComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_message_message_component__["a" /* MessageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16__services_chat_service__["a" /* ChatService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatRoomComponent = (function () {
    function ChatRoomComponent(formBuilder, el, authService, chatService) {
        this.formBuilder = formBuilder;
        this.el = el;
        this.authService = authService;
        this.chatService = chatService;
        this.messageList = [];
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userData = this.authService.getUserData();
        this.username = userData.user.username;
        this.sendForm = this.formBuilder.group({
            message: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.chatService.getMessages()
            .subscribe(function (data) {
            for (var _i = 0, _a = data.messages; _i < _a.length; _i++) {
                var message = _a[_i];
                _this.checkMine(message);
            }
            _this.messageList = data.messages;
            console.log(data);
            _this.scrollToBottom();
        });
        this.chatService.connect(function () {
            _this.receiveMessageObs = _this.chatService.receiveMessage()
                .subscribe(function (message) {
                message.mine = false;
                _this.messageList.push(message);
                _this.scrollToBottom();
            });
        });
    };
    ChatRoomComponent.prototype.onSendSubmit = function () {
        var newMessage = {
            created: new Date(),
            from: this.username,
            text: this.sendForm.value.message
        };
        console.log(newMessage);
        this.chatService.sendMessage(newMessage);
        newMessage.mine = true;
        this.messageList.push(newMessage);
        this.scrollToBottom();
        this.sendForm.setValue({ message: "" });
    };
    ChatRoomComponent.prototype.checkMine = function (message) {
        if (message.from == this.username) {
            message.mine = true;
        }
    };
    ChatRoomComponent.prototype.scrollToBottom = function () {
        var element = this.el.nativeElement.querySelector('.msg-container');
        setTimeout(function () {
            element.scrollTop = element.scrollHeight;
        }, 100);
    };
    return ChatRoomComponent;
}());
ChatRoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-room',
        template: __webpack_require__(333),
        styles: [__webpack_require__(320)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]) === "function" && _d || Object])
], ChatRoomComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chat-room.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(334),
        styles: [__webpack_require__(321)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, flashMessagesService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkLoggedIn();
        this.loginForm = this.formBuilder.group({
            //controlname: ['initial value', rules]
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(14)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)]]
        });
    };
    LoginComponent.prototype.checkLoggedIn = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(["/"]);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.authenticateUser(this.loginForm.value)
            .subscribe(function (data) {
            if (data.success == true) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(["/chat"]);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: "alert-danger", timeout: 3000 });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(335),
        styles: [__webpack_require__(322)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message_model__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_message_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.updateFromNow(); _this.fadeTime = true; }, 2000);
        setInterval(function () { _this.updateFromNow(); }, 60000);
    };
    MessageComponent.prototype.updateFromNow = function () {
        this.time = __WEBPACK_IMPORTED_MODULE_1_moment__(this.message.created).fromNow();
    };
    return MessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_message_model__["Message"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_message_model__["Message"]) === "function" && _a || Object)
], MessageComponent.prototype, "message", void 0);
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(336),
        styles: [__webpack_require__(323)]
    }),
    __metadata("design:paramtypes", [])
], MessageComponent);

var _a;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(["/login"]);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(337),
        styles: [__webpack_require__(324)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(338),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, flashMessagesService, authService, router) {
        this.formBuilder = formBuilder;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.checkLoggedIn();
        this.registerForm = this.formBuilder.group({
            //controlname: ['initial value', rules]
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(14)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)]],
            confirmPass: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)]]
        });
    };
    RegisterComponent.prototype.checkLoggedIn = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(["/"]);
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.authService.registerUser(this.registerForm.value)
            .subscribe(function (data) {
            if (data.success == true) {
                _this.flashMessagesService.show(data.msg, { cssClass: "alert-success", timeout: 3000 });
                _this.router.navigate(["/login"]);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: "alert-danger", timeout: 3000 });
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(339),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".chat-container {\n  border: none;\n  margin-top: -21px;\n  margin-bottom: 0; }\n  .chat-container .msg-container {\n    height: calc(100vh - 126.67px);\n    overflow-y: scroll; }\n  .chat-container form .input-group {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/**\n* SassFlexbox\n* Manage Flexbox in Sass easily.\n*\n* @author     Samuel Marchal (zessx)\n* @version    0.1\n*/\n/*\n    Display\n */\n.panel-body {\n  display: -webkit-box;\n  display: -webkit-flexbox;\n  display: -ms-flexbox;\n  display: flex; }\n\n/*\n    Flex direction\n */\n/*\n    Flex wrap\n */\n/*\n    Flex flow\n */\n/*\n    Order\n */\n/*\n    Flex grow\n */\n/*\n    Flex shrink\n */\n/*\n    Flex basis\n */\n/*\n    Flex\n */\n/*\n    Justify content\n */\n.panel-body.mine {\n  -webkit-box-pack: end;\n  -webkit-flex-pack: end;\n  -ms-flex-pack: end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end; }\n\n/*\n    Align items\n */\n/*\n    Align self\n */\n/*\n    Align content\n */\n.panel-body.mine {\n  text-align: right; }\n\n.panel-body .avatar {\n  height: 57px;\n  width: 50px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.panel-body .msg-text-container {\n  padding-left: 10px;\n  padding-right: 10px; }\n  .panel-body .msg-text-container .msg-text {\n    margin-top: 12px; }\n\n#time {\n  filter: alpha(opacity=0);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  -webkit-opacity: 0;\n  -khtml-opacity: 0;\n  -moz-opacity: 0;\n  -ms-opacity: 0;\n  -o-opacity: 0;\n  opacity: 0;\n  transition: opacity .2s ease-in 0s; }\n  #time.fade-in {\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-opacity: 1;\n    -khtml-opacity: 1;\n    -moz-opacity: 1;\n    -ms-opacity: 1;\n    -o-opacity: 1;\n    opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 98,
	"./af.js": 98,
	"./ar": 105,
	"./ar-dz": 99,
	"./ar-dz.js": 99,
	"./ar-kw": 100,
	"./ar-kw.js": 100,
	"./ar-ly": 101,
	"./ar-ly.js": 101,
	"./ar-ma": 102,
	"./ar-ma.js": 102,
	"./ar-sa": 103,
	"./ar-sa.js": 103,
	"./ar-tn": 104,
	"./ar-tn.js": 104,
	"./ar.js": 105,
	"./az": 106,
	"./az.js": 106,
	"./be": 107,
	"./be.js": 107,
	"./bg": 108,
	"./bg.js": 108,
	"./bn": 109,
	"./bn.js": 109,
	"./bo": 110,
	"./bo.js": 110,
	"./br": 111,
	"./br.js": 111,
	"./bs": 112,
	"./bs.js": 112,
	"./ca": 113,
	"./ca.js": 113,
	"./cs": 114,
	"./cs.js": 114,
	"./cv": 115,
	"./cv.js": 115,
	"./cy": 116,
	"./cy.js": 116,
	"./da": 117,
	"./da.js": 117,
	"./de": 120,
	"./de-at": 118,
	"./de-at.js": 118,
	"./de-ch": 119,
	"./de-ch.js": 119,
	"./de.js": 120,
	"./dv": 121,
	"./dv.js": 121,
	"./el": 122,
	"./el.js": 122,
	"./en-au": 123,
	"./en-au.js": 123,
	"./en-ca": 124,
	"./en-ca.js": 124,
	"./en-gb": 125,
	"./en-gb.js": 125,
	"./en-ie": 126,
	"./en-ie.js": 126,
	"./en-nz": 127,
	"./en-nz.js": 127,
	"./eo": 128,
	"./eo.js": 128,
	"./es": 130,
	"./es-do": 129,
	"./es-do.js": 129,
	"./es.js": 130,
	"./et": 131,
	"./et.js": 131,
	"./eu": 132,
	"./eu.js": 132,
	"./fa": 133,
	"./fa.js": 133,
	"./fi": 134,
	"./fi.js": 134,
	"./fo": 135,
	"./fo.js": 135,
	"./fr": 138,
	"./fr-ca": 136,
	"./fr-ca.js": 136,
	"./fr-ch": 137,
	"./fr-ch.js": 137,
	"./fr.js": 138,
	"./fy": 139,
	"./fy.js": 139,
	"./gd": 140,
	"./gd.js": 140,
	"./gl": 141,
	"./gl.js": 141,
	"./gom-latn": 142,
	"./gom-latn.js": 142,
	"./he": 143,
	"./he.js": 143,
	"./hi": 144,
	"./hi.js": 144,
	"./hr": 145,
	"./hr.js": 145,
	"./hu": 146,
	"./hu.js": 146,
	"./hy-am": 147,
	"./hy-am.js": 147,
	"./id": 148,
	"./id.js": 148,
	"./is": 149,
	"./is.js": 149,
	"./it": 150,
	"./it.js": 150,
	"./ja": 151,
	"./ja.js": 151,
	"./jv": 152,
	"./jv.js": 152,
	"./ka": 153,
	"./ka.js": 153,
	"./kk": 154,
	"./kk.js": 154,
	"./km": 155,
	"./km.js": 155,
	"./kn": 156,
	"./kn.js": 156,
	"./ko": 157,
	"./ko.js": 157,
	"./ky": 158,
	"./ky.js": 158,
	"./lb": 159,
	"./lb.js": 159,
	"./lo": 160,
	"./lo.js": 160,
	"./lt": 161,
	"./lt.js": 161,
	"./lv": 162,
	"./lv.js": 162,
	"./me": 163,
	"./me.js": 163,
	"./mi": 164,
	"./mi.js": 164,
	"./mk": 165,
	"./mk.js": 165,
	"./ml": 166,
	"./ml.js": 166,
	"./mr": 167,
	"./mr.js": 167,
	"./ms": 169,
	"./ms-my": 168,
	"./ms-my.js": 168,
	"./ms.js": 169,
	"./my": 170,
	"./my.js": 170,
	"./nb": 171,
	"./nb.js": 171,
	"./ne": 172,
	"./ne.js": 172,
	"./nl": 174,
	"./nl-be": 173,
	"./nl-be.js": 173,
	"./nl.js": 174,
	"./nn": 175,
	"./nn.js": 175,
	"./pa-in": 176,
	"./pa-in.js": 176,
	"./pl": 177,
	"./pl.js": 177,
	"./pt": 179,
	"./pt-br": 178,
	"./pt-br.js": 178,
	"./pt.js": 179,
	"./ro": 180,
	"./ro.js": 180,
	"./ru": 181,
	"./ru.js": 181,
	"./sd": 182,
	"./sd.js": 182,
	"./se": 183,
	"./se.js": 183,
	"./si": 184,
	"./si.js": 184,
	"./sk": 185,
	"./sk.js": 185,
	"./sl": 186,
	"./sl.js": 186,
	"./sq": 187,
	"./sq.js": 187,
	"./sr": 189,
	"./sr-cyrl": 188,
	"./sr-cyrl.js": 188,
	"./sr.js": 189,
	"./ss": 190,
	"./ss.js": 190,
	"./sv": 191,
	"./sv.js": 191,
	"./sw": 192,
	"./sw.js": 192,
	"./ta": 193,
	"./ta.js": 193,
	"./te": 194,
	"./te.js": 194,
	"./tet": 195,
	"./tet.js": 195,
	"./th": 196,
	"./th.js": 196,
	"./tl-ph": 197,
	"./tl-ph.js": 197,
	"./tlh": 198,
	"./tlh.js": 198,
	"./tr": 199,
	"./tr.js": 199,
	"./tzl": 200,
	"./tzl.js": 200,
	"./tzm": 202,
	"./tzm-latn": 201,
	"./tzm-latn.js": 201,
	"./tzm.js": 202,
	"./uk": 203,
	"./uk.js": 203,
	"./ur": 204,
	"./ur.js": 204,
	"./uz": 206,
	"./uz-latn": 205,
	"./uz-latn.js": 205,
	"./uz.js": 206,
	"./vi": 207,
	"./vi.js": 207,
	"./x-pseudo": 208,
	"./x-pseudo.js": 208,
	"./yo": 209,
	"./yo.js": 209,
	"./zh-cn": 210,
	"./zh-cn.js": 210,
	"./zh-hk": 211,
	"./zh-hk.js": 211,
	"./zh-tw": 212,
	"./zh-tw.js": 212
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 329;


/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<header>\n  <!-- Navbar -->\n  <app-navbar></app-navbar>\n</header>\n\n<div class=\"\">\n  <!-- Alerts -->\n  <div class=\"container\">\n    <flash-messages></flash-messages>\n  </div>\n\n  <!-- Page Content -->\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-primary chat-container\">\n    <div class=\"panel-body msg-container\">\n      <app-message *ngFor=\"let message of messageList\" [message]=\"message\"></app-message>\n    </div>\n\n    <div class=\"panel-footer\">\n      <form [formGroup]=\"sendForm\"\n        (ngSubmit)=\"onSendSubmit()\"\n        >\n\n        <div class=\"input-group\">\n          <input type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Type your message...\"\n            id=\"message\"\n            name=\"message\"\n            formControlName=\"message\"\n            autofocus=\"true\"\n            autocomplete=\"off\"\n            >\n\n          <span class=\"input-group-btn hidden-xs\">\n            <button [disabled]=\"sendForm.invalid\" type=\"submit\" class=\"btn btn-primary\" name=\"send\">Send</button>\n          </span>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron text-center\">\n    <h1>MEAN Chat App</h1>\n    <p class=\"lead\">Welcome to my ChatApp built using the MEAN stack</p>\n    <div *ngIf=\"!this.authService.loggedIn()\">\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n      or\n      <a class=\"btn btn-info\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>Express Backend</h3>\n      <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Angular-CLI</h3>\n      <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>JWT Tokens</h3>\n      <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Login</h2>\n\n  <form [formGroup]=\"loginForm\"\n    (ngSubmit)=\"onLoginSubmit()\"\n    >\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n\n    <input type=\"text\" name=\"username\" class=\"form-control\"\n      id=\"username\"\n      placeholder=\"Enter your username\"\n      formControlName=\"username\"\n      autofocus=\"true\"\n      >\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n\n    <input type=\"password\" name=\"password\" class=\"form-control\"\n      id=\"password\"\n      placeholder=\"Enter your password\"\n      formControlName=\"password\"\n      >\n  </div>\n\n  <button [disabled]=\"loginForm.invalid\"\n    type=\"submit\"\n    class=\"btn btn-primary\"\n    name=\"login\"\n    >Login\n  </button>\n  or\n\n  <a class=\"btn btn-info\" role=\"button\" routerLink=\"/register\">Register</a>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel message\" [ngClass]=\"{'panel-info': message.mine, 'panel-warning': !message.mine}\">\n  <div class=\"panel-body\" [ngClass]=\"{mine: message.mine}\">\n      <div *ngIf=\"!message.mine\" class=\"avatar\">\n        <img src=\"assets/generic-avatar.png\" alt=\"\" height=\"57px\" width=\"50px\">\n      </div>\n\n      <div class=\"msg-text-container\">\n        <h3 class=\"panel-title\"><strong>{{message.from}}</strong></h3>\n        <p class=\"msg-text\">{{message.text}}</p>\n        <h3 class=\"panel-title\" id=\"time\" [ngClass]=\"{'fade-in': fadeTime}\"><small> • {{time}}</small></h3>\n      </div>\n\n    <div *ngIf=\"message.mine\" class=\"avatar\">\n       <img src=\"assets/generic-avatar.png\" alt=\"\" height=\"57px\" width=\"50px\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">ChatApp</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Home</a></li>\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/chat\">Chat</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/login\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/profile\">Profile</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.username}}'s profile</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Type: awesome</li>\n    </ul>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Register</h2>\n\n  <form [formGroup]=\"registerForm\"\n    (ngSubmit)=\"onRegisterSubmit()\"\n    >\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n\n    <input type=\"text\" name=\"username\" class=\"form-control\"\n      id=\"username\"\n      placeholder=\"Enter your username\"\n      formControlName=\"username\"\n      autofocus=\"true\"\n      >\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n\n    <input type=\"password\" name=\"password\" class=\"form-control\"\n      id=\"password\"\n      placeholder=\"Enter your password\"\n      formControlName=\"password\"\n      >\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"confirmPass\">Confirm password</label>\n\n      <input type=\"password\" name=\"confirmPass\" class=\"form-control\"\n      id=\"confirmPass\"\n      placeholder=\"Confirm password\"\n      formControlName=\"confirmPass\"\n      >\n  </div>\n\n  <button [disabled]=\"registerForm.invalid\"\n    type=\"submit\"\n    class=\"btn btn-primary\"\n    name=\"register\"\n    >Register\n  </button>\n  or\n\n  <a class=\"btn btn-info\" role=\"button\" routerLink=\"/login\">Login</a>\n\n  </form>\n  \n</div>\n"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(231);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatService = (function () {
    function ChatService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.serverUrl = "http://localhost:8080";
        // private apiUrl: string = "http://localhost:8080/messages"; //!CHANGE this with the backend url
        //build
        this.apiUrl = "/messages";
    }
    ChatService.prototype.connect = function (callback) {
        // initialize the connection
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(this.serverUrl);
        this.socket.on("connect", function () {
            console.log("connected to the chat server");
        });
        callback();
    };
    ChatService.prototype.getMessages = function () {
        var url = this.apiUrl;
        var authToken = this.authService.getUserData().token;
        // prepare the request
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            "Content-Type": "application/json",
            "Authorization": authToken
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        // POST
        var observableReq = this.http.get(url, options)
            .map(this.extractData);
        return observableReq;
    };
    ChatService.prototype.receiveMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on("message", function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit("message", message);
    };
    ChatService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
], ChatService);

var _a, _b;
//# sourceMappingURL=chat.service.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.bundle.js.map