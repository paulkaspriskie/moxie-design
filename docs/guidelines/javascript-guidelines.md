# Javascript
## Comment Blocks
Moxie uses [JSDoc](https://jsdoc.app/) stye comment blocks.

### Files
Document the top of js files using the following style:
```js
/** 
 *  @fileOverview Write what's going on in the file here.
 *
 *  @author       Philip J. Fry
 *  @author       Doug Funnie
 *
 *  @requires     NPM:npm_module_1
 *  @requires     BOWER:bower_module_1
 *  @requires     EXTERNAL:@link{http://url.com module_name}
 *  @requires     path/to/file:your_module_2
 */
```

<br/>

---

<br/>

### Functions
Document javascript functions as follows:
```js
/**
 * Takes 2 numbers and returns their sum.
 * @param   {number} a     the first number
 * @param   {number} b     the second number
 * @param   {number} [c=0] the optional third number
 *
 * @returns {number} the sum of a and b
 */
function addNumbers(a, b, c) {
  if (typeof c === "undefined") {
    c = 0;
  }
  return a + b + c;
}
```

<br/>

---

<br/>