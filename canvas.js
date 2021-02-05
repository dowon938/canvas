"use strict";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// // rectangle
// c.fillStyle = "rgba(255,0,0, 0.5)";
// c.fillRect(100,100,100,100,);
// c.fillStyle = "rgba(0,255,0, 0.5)";
// c.fillRect(200,200,100,100,);
// c.fillStyle = "rgba(0,0,255, 0.5)";
// c.fillRect(300,300,100,100,);
// // c.ellipse(200,200,100, 50, 360,0,0,true);
// console.log(c);

// // line
// c.beginPath();
// c.moveTo(50,200);
// c.lineTo(400,50);
// c.lineTo(300,150);
// c.strokeStyle = "rgba(200,10,30, 0.5)";
// c.stroke();

// // Arc / circle
// for (let i = 0; i < 5; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let r = Math.random() * 255;
//     let g = Math.random() * 255;
//     let b = Math.random() * 255;
//     c.beginPath();
//     c.arc(x,y, 70, 0, Math.PI * 2 , Boolean(true));
//     c.strokeStyle = `rgba(${r},${g},${b},0.5)`
//     c.stroke();
// }

c.fillStyle = "snow";
c.beginPath();
c.arc(100, 100, 50, 0, Math.PI * 2, true);
c.stroke();

let x = 200;
let y = window.innerHeight - 50;
let vx = 1;
let vy = -6;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, true);
  c.stroke();
  y = y + vy;
  x = x + vx;
  if (x > 260 || x < 200) {
    vx = vx * -1;
  }
  if (y < 50 || y > window.innerHeight - 50) {
    vy = vy * -1;
  }
}
animate();
