"use strict";
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
import { generateMeme, windowBlur } from "./module.js";
window.onload = function () {
    var generate_btn = document.querySelector('.generate-btn');
    generate_btn.addEventListener('click', generateMeme);
    window.addEventListener('visibilitychange', windowBlur);
};
