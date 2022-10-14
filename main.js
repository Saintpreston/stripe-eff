"use strict"
const heroTitle = document.querySelector(".hero-title");
const heroTitleOverlay = document.querySelector(".hero-title[data-overlay");

/* from https://codepen.io/tmrDevelops/pen/vOPZBv  */
const c = document.getElementsByTagName("canvas")[0];
//var c = document.getElementById('canv');
const $ = c.getContext("2d");

const col = (x, y, r, g, b) => {
  const color = `rgb(${r},${g},${b})`;

  $.fillStyle = color;
  $.fillRect(x, y, 1, 1);
};

var R = function (x, y, t) {
  return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
};

var G = function (x, y, t) {
  return Math.floor(
    192 +
      64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
  );
};

var B = function (x, y, t) {
  return Math.floor(
    192 +
      64 *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
};

var t = 0;

var run = function () {
  for (let x = 0; x <= 35; x++) {
    for (let y = 0; y <= 35; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }
  t = t + 0.02;
  window.requestAnimationFrame(run);
};

run();

/* from https://codepen.io/tmrDevelops/pen/vOPZBv  */
