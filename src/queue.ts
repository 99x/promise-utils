import {InlineObjectResult, InlineArrayResult} from "./types";

export class PromiseQueue {
    private items: | any[] = [];

    constructor(items: any[] = []) {
        this.items = items;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    private add<T>(item: T): void {
        this.items.push(item as InlineArrayResult<T>);
    }

    next<T>():  InlineArrayResult<T> {
        return this.items.shift() as InlineArrayResult<T> || [null, null];
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

export class PromiseQueueObject {
    private items: | any[] = [];

    constructor(items: any[] = []) {
        this.items = items;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    private add<T>(item: T): void {
        this.items.push(item as InlineObjectResult<T>);
    }

    next<T>():  InlineObjectResult<T> {
        return this.items.shift() as InlineObjectResult<T> || {data: null, error: null};
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}
