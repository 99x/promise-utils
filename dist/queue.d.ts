import { InlineObjectResult, InlineArrayResult } from "./types";
export declare class PromiseQueue {
    private items;
    constructor(items?: any[]);
    isEmpty(): boolean;
    private add;
    next<T>(): InlineArrayResult<T>;
    size(): number;
    clear(): void;
}
export declare class PromiseQueueObject {
    private items;
    constructor(items?: any[]);
    isEmpty(): boolean;
    private add;
    next<T>(): InlineObjectResult<T>;
    size(): number;
    clear(): void;
}
