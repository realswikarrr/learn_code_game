const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 64 * 16;
canvas.height = 64 * 9;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);
