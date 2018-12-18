import 'preact'
import 'lodash'
class Hello {
    constructor(x, y) {
        console.log('hello world');
    }
}

let hello = new Hello()
console.log(hello)

import(/* webpackChunkName: "moduleA"*/'./modules/moduleB.js');
import(/* webpackChunkName: "moduleA"*/'./modules/moduleC.js');
import(/* webpackChunkName: "moduleA"*/'./modules/moduleD.js');