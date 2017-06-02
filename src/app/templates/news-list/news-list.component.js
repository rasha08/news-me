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
var NewsListComponent = (function () {
    function NewsListComponent() {
        this.showBig = new core_1.EventEmitter();
        this.search = new core_1.EventEmitter();
    }
    return NewsListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], NewsListComponent.prototype, "news", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewsListComponent.prototype, "showBig", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewsListComponent.prototype, "search", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NewsListComponent.prototype, "message", void 0);
NewsListComponent = __decorate([
    core_1.Component({
        selector: 'app-news-list',
        moduleId: module.id,
        templateUrl: './news-list.component.html',
        styleUrls: ['./news-list.component.css']
    })
], NewsListComponent);
exports.NewsListComponent = NewsListComponent;
//# sourceMappingURL=news-list.component.js.map