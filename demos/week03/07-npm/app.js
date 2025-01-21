// OLD way of doing things
// they're import ing a package
// const cowsay = require('cowsay')

import cowsay from "cowsay"
import rough from 'roughjs';


console.log(cowsay.say({text: 'Hello class!', e: 'zz', r:true}))

const rc = rough.canvas(document.getElementById('canvas'));
rc.rectangle(10, 10, 200, 200); // x, y, width, height