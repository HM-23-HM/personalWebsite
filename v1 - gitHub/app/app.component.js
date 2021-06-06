"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo';
        this.filter = 'all';
        this.allItems = [
            { description: 'eat', done: true },
            { description: 'sleep', done: false },
            { description: 'play', done: false },
            { description: 'laugh', done: false },
        ];
    }
    Object.defineProperty(AppComponent.prototype, "items", {
        get: function () {
            var _this = this;
            if (this.filter === 'all') {
                return this.allItems;
            }
            return this.allItems.filter(function (item) { return _this.filter === 'done' ? item.done : !item.done; });
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.prototype.addItem = function (description) {
        this.allItems.unshift({
            description: description,
            done: false
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
