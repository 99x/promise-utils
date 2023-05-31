# @ruwan.m.s/promise-utils

## Introduction
Welcome to the documentation for the `@ruwan.m.s/promise-utils` npm package! This package provides utility functions for working with Promises.

## Installation
To install `@ruwan.m.s/promise-utils`, you can use npm. Open your terminal and run the following command:

```bash
npm install @ruwan.m.s/promise-utils
```

## Usage
Once you have installed the package, you can import it into your project using the following syntax:

### TypeScript (TS)
```typescript
import promiseUtils from '@ruwan.m.s/promise-utils';
```

### JavaScript (JS)
```javascript
const promiseUtils = require('@ruwan.m.s/promise-utils');
```


## API Reference
- `inlinePromise`: Function for executing a Promise inline. Return the as `[result, error]`
- `inlinePromiseObject`: Function for executing a Promise inline. Return the as `{data, error}`
- `inlinePromiseAll`: Function for executing an array of Promises inline using `Promise.all()`. Returns list of `[result, error]`
- `inlinePromiseObjectAll`: Function for executing an array of Promises inline using `Promise.all()`. Returns list of `{data, error}`


## Example Usage

Let's consider simple delay function

```javascript
const delay = (ms: number): Promise<number> => {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}
```

### inlinePromise()

Here's an example of how you can use the `inlinePromise` function:

```javascript
const [delayTime, error] = await inlinePromise(delay(300));
if (error) {
  // Error Handling
}

console.log(delayTime); // Output: 300
```

### inlinePromiseAll()

Here's an example of how you can use the `inlinePromiseAll` function:

```javascript
const res= await inlinePromiseAll([
    delay(200),
    delay(400),
]);

const [result1, error1] = res.next<number>();
console.log(result1) // Output: 200
const [result2, error2] = res.next<number>();
console.log(result2) // Output: 400
```


### inlinePromiseObject()

Here's an example of how you can use the `inlinePromise` function:

```javascript
  const {data: delayTime, error} = await inlinePromiseObject(delay(300))
if(error){
    // Error Handling
}
console.log(delayTime) // Output: 300
```

### inlinePromiseObject()

Here's an example of how you can use the `inlinePromiseObjectAll` function:

```javascript
const res= await inlinePromiseObjectAll([
    delay(200),
    delay(400),
]);

const {data:result1} = res.next<number>();
console.log(result1) // Output: 200
const {data:result2} = res.next<number>();
console.log(result2) // Output: 400
```
