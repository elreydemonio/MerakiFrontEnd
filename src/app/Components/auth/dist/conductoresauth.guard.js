"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConductoresauthGuard = void 0;
var core_1 = require("@angular/core");
var ConductoresauthGuard = /** @class */ (function () {
    function ConductoresauthGuard(router) {
        this.router = router;
    }
    ConductoresauthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('Rol') !== '3' && localStorage.getItem('token') !== null) {
            return true;
        }
        else {
            this.router.navigate(['usuario/login']);
            return true;
        }
    };
    ConductoresauthGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ConductoresauthGuard);
    return ConductoresauthGuard;
}());
exports.ConductoresauthGuard = ConductoresauthGuard;
