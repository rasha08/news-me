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
var LikedNewsComponent = (function () {
    function LikedNewsComponent() {
        this.remove = new core_1.EventEmitter();
        this.clear = new core_1.EventEmitter();
    }
    return LikedNewsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LikedNewsComponent.prototype, "likedNews", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LikedNewsComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LikedNewsComponent.prototype, "clear", void 0);
LikedNewsComponent = __decorate([
    core_1.Component({
        selector: 'app-liked-news',
        templateUrl: './liked-news.component.html',
        styleUrls: ['./liked-news.components.css']
    }),
    __metadata("design:paramtypes", [])
], LikedNewsComponent);
exports.LikedNewsComponent = LikedNewsComponent;
//# sourceMappingURL=liked-news.component.js.map