import {PromiseQueue, PromiseQueueObject} from "./queue";
import {InlineObjectResult, InlineArrayResult} from "./types";

export const inlinePromise = async <T>(promise: Promise<T | any>): Promise<InlineArrayResult<T> > => {
    return new Promise<InlineArrayResult<T>>(resolve =>
        promise
            .then((data)=>resolve([data as T, null]))
            .catch((err)=>resolve([null, err]))
    )
}

export const inlinePromiseObject = async <T>(promise: Promise<T | any>): Promise<InlineObjectResult<T>> => {
    return new Promise<InlineObjectResult<T>>(resolve =>
        promise
            .then((data)=>resolve({data, error: null}))
            .catch((error: any)=>resolve({data: null, error}))
    )
}

export const inlinePromiseAll = async (promises: Promise<any>[])=>{
    const result = await Promise.all(promises.map(p => inlinePromise(p)))
    return new PromiseQueue(result);
}

export const inlinePromiseObjectAll = async (promises: Promise<any>[])=>{
    const result = await Promise.all(promises.map(p => inlinePromiseObject(p)))
    return new PromiseQueueObject(result);
}
