import { PromiseQueue, PromiseQueueObject } from "./queue";
import { InlineObjectResult, InlineArrayResult } from "./types";
export declare const inlinePromise: <T>(promise: Promise<any>) => Promise<InlineArrayResult<T>>;
export declare const inlinePromiseObject: <T>(promise: Promise<any>) => Promise<InlineObjectResult<T>>;
export declare const inlinePromiseAll: (promises: Promise<any>[]) => Promise<PromiseQueue>;
export declare const inlinePromiseObjectAll: (promises: Promise<any>[]) => Promise<PromiseQueueObject>;
