import 'preact'
import 'lodash'
class Hello {
    constructor(x, y) {
        console.log('hello');
    }
}

let hello = new Hello()
console.log(hello)
console.log('梁凤波');

import(/* webpackChunkName: "moduleA"*/'./modules/moduleB.js');
import(/* webpackChunkName: "moduleA"*/'./modules/moduleC.js');
import(/* webpackChunkName: "moduleA"*/'./modules/moduleD.js');