'use strict';

const $ = require('jquery');
const sayHello = () => {
    console.log("hello");
};

sayHello();

$("body").css("background-color", "black");

import name from "./say-hello.js";

name();