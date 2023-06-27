"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseQueueObject = exports.PromiseQueue = void 0;
var PromiseQueue = /** @class */ (function () {
    function PromiseQueue(items) {
        if (items === void 0) { items = []; }
        this.items = [];
        this.items = items;
    }
    PromiseQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    PromiseQueue.prototype.add = function (item) {
        this.items.push(item);
    };
    PromiseQueue.prototype.next = function () {
        return this.items.shift() || [null, null];
    };
    PromiseQueue.prototype.size = function () {
        return this.items.length;
    };
    PromiseQueue.prototype.clear = function () {
        this.items = [];
    };
    return PromiseQueue;
}());
exports.PromiseQueue = PromiseQueue;
var PromiseQueueObject = /** @class */ (function () {
    function PromiseQueueObject(items) {
        if (items === void 0) { items = []; }
        this.items = [];
        this.items = items;
    }
    PromiseQueueObject.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    PromiseQueueObject.prototype.add = function (item) {
        this.items.push(item);
    };
    PromiseQueueObject.prototype.next = function () {
        return this.items.shift() || { data: null, error: null };
    };
    PromiseQueueObject.prototype.size = function () {
        return this.items.length;
    };
    PromiseQueueObject.prototype.clear = function () {
        this.items = [];
    };
    return PromiseQueueObject;
}());
exports.PromiseQueueObject = PromiseQueueObject;
