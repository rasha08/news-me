"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SideMenuComponent = (function () {
    function SideMenuComponent() {
        this.show = new core_1.EventEmitter();
    }
    return SideMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "sideMenu", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "show", void 0);
SideMenuComponent = __decorate([
    core_1.Component({
        selector: 'app-side-menu',
        moduleId: module.id,
        templateUrl: './side-menu.component.html',
        styleUrls: ['./side-menu.component.css']
    })
], SideMenuComponent);
exports.SideMenuComponent = SideMenuComponent;
//# sourceMappingURL=side-menu.component.js.map