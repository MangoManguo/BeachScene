// Beach Scene

var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Sky
var sky = ctx.createRadialGradient(300, 300, 100, 150, 500, 500);
sky.addColorStop(0, "#fff88f");
sky.addColorStop(1, "#ddfaff");

ctx.fillStyle = sky;
ctx.fillRect(0, 0, 800, 600);

// Sand
ctx.fillStyle = "#fde3aa";
ctx.fillRect(0, 400, 800, 200);
ctx.fillStyle = "#dbb671";
ctx.beginPath();
ctx.moveTo(180, 520);
ctx.lineTo(250, 600);
ctx.lineTo(730, 600);
ctx.lineTo(640, 520);
ctx.lineTo(400, 420);
ctx.fill();

// Water
ctx.fillStyle = "#029aff";
ctx.fillRect(0, 300, 800, 100);
var sky = ctx.createRadialGradient(400, 300, 10, 150, 500, 500);
sky.addColorStop(0, "#fff88f");
sky.addColorStop(1, "#029aff");
ctx.fillStyle = sky;
ctx.fillRect(0, 300, 800, 100);

// Castle
ctx.fillStyle = "#fad993";
ctx.fillRect(260, 160, 300, 200);
ctx.fillRect(250, 115, 320, 25);
ctx.fillStyle = "#ecc782";
ctx.strokeStyle = "#ecc782";
ctx.beginPath();
ctx.arc(300, 200, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(275, 200, 50, 40);
ctx.beginPath();
ctx.arc(375, 200, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(350, 200, 50, 40);
ctx.beginPath();
ctx.arc(450, 200, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(425, 200, 50, 40);
ctx.beginPath();
ctx.arc(520, 200, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(495, 200, 50, 40);
ctx.lineWidth = 7;
ctx.beginPath();
ctx.moveTo(300, 260);
ctx.lineTo(550, 260);
ctx.stroke();
ctx.fillStyle = "rgb(255, 229, 180)";
ctx.beginPath();
ctx.moveTo(250, 115);
ctx.lineTo(410, 50);
ctx.lineTo(570, 115);
ctx.lineTo(250, 115);
ctx.fill();
ctx.fillStyle = "#fad993";
ctx.fillRect(250, 100, 25, 15);
ctx.fillRect(299, 100, 25, 15);
ctx.fillRect(348, 100, 25, 15);
ctx.fillRect(397, 100, 25, 15);
ctx.fillRect(446, 100, 25, 15);
ctx.fillRect(495, 100, 25, 15);
ctx.fillRect(545, 100, 25, 15);
ctx.fillStyle = "#e7c272";
ctx.fillRect(250, 300, 300, 200);
ctx.fillRect(295, 280, 30, 20);
ctx.fillRect(345, 280, 30, 20);
ctx.fillRect(396, 280, 30, 20);
ctx.fillRect(447, 280, 30, 20);
ctx.fillRect(495, 280, 30, 20);
ctx.fillStyle = "#f5cf7e";
ctx.fillRect(180, 260, 120, 260);
ctx.fillRect(520, 260, 120, 260);
ctx.fillRect(160, 190, 160, 40);
ctx.fillRect(500, 190, 160, 40);
ctx.fillRect(160, 175, 20, 15);
ctx.fillRect(195, 175, 20, 15);
ctx.fillRect(230, 175, 20, 15);
ctx.fillRect(265, 175, 20, 15);
ctx.fillRect(300, 175, 20, 15);
ctx.fillRect(500, 175, 20, 15);
ctx.fillRect(535, 175, 20, 15);
ctx.fillRect(570, 175, 20, 15);
ctx.fillRect(605, 175, 20, 15);
ctx.fillRect(640, 175, 20, 15);
ctx.fillStyle = "#e7c272";
ctx.beginPath();
ctx.moveTo(180, 260);
ctx.lineTo(160, 230);
ctx.lineTo(320, 230);
ctx.lineTo(300, 260);
ctx.lineTo(180, 260);
ctx.fill();
ctx.beginPath();
ctx.moveTo(520, 260);
ctx.lineTo(500, 230);
ctx.lineTo(660, 230);
ctx.lineTo(640, 260);
ctx.lineTo(520, 260);
ctx.fill();
ctx.beginPath();
// ctx.arc(215, 300, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(200, 300, 30, 40);
ctx.beginPath();
// ctx.arc(605, 300, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(590, 300, 30, 40);
ctx.beginPath();
// ctx.arc(215, 450, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(200, 450, 30, 40);
ctx.beginPath();
// ctx.arc(605, 450, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(590, 450, 30, 40);
ctx.beginPath();
// ctx.arc(555, 375, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(540, 375, 30, 40);
ctx.beginPath();
// ctx.arc(265, 375, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(250, 375, 30, 40);
ctx.fillStyle = "#ecc782";
ctx.beginPath();
ctx.moveTo(260, 160);
ctx.lineTo(250, 140);
ctx.lineTo(570, 140);
ctx.lineTo(560, 160);
ctx.lineTo(260, 160);
ctx.fill();
ctx.fillStyle = "rgb(209, 161, 88)";
ctx.beginPath();
ctx.arc(410, 400, 60, 0, 2 * Math.PI);
ctx.fill();
ctx.fillRect(350, 400, 120, 100);
ctx.fillStyle = "rgb(172, 132, 72)";
ctx.beginPath();
ctx.arc(395, 430, 5, 0, 2 * Math.PI);
ctx.arc(425, 430, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "rgb(172, 132, 72)";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(440, 350);
ctx.lineTo(440, 500);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(380, 350);
ctx.lineTo(380, 500);
ctx.stroke();

// // Lantern Scene

// var cnv = document.getElementById("myCanvas");
// var ctx = cnv.getContext("2d");
// cnv.width = 600;
// cnv.height = 800;

// // Lantern
// // top (top)
// ctx.strokeStyle = "#660f03";
// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.moveTo(200, 130);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 130);
// ctx.lineTo(400, 140);
// ctx.lineTo(300, 110);
// ctx.moveTo(300, 100);
// ctx.lineTo(300, 110);
// ctx.lineTo(200, 140);
// ctx.lineTo(200, 128);
// ctx.stroke();
// // top (middle)
// ctx.lineWidth = 3;
// ctx.beginPath();
// ctx.moveTo(199, 141);
// ctx.lineTo(210, 143);
// ctx.lineTo(300, 117);
// ctx.moveTo(300, 110);
// ctx.lineTo(300, 117);
// ctx.lineTo(390, 143);
// ctx.lineTo(401, 141);
// ctx.stroke();
// // top (bottom)
// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.moveTo(210, 143);
// ctx.lineTo(210, 190);
// ctx.moveTo(300, 117);
// ctx.lineTo(300, 166);
// ctx.moveTo(390, 143);
// ctx.lineTo(390, 190);
// ctx.stroke();
// // middle
// ctx.beginPath();
// ctx.moveTo(160, 205);
// ctx.lineTo(300, 165);
// ctx.lineTo(440, 205);
// ctx.lineTo(440, 500);
// ctx.lineTo(300, 460);
// ctx.stroke();

// // Canvas - Fishing scene

// // Canvas Setup

// // top-left corner (0.0)
// // top-right corner (400,0)
// // bottom-left corner (0.400)
// // bottom-right corner (400,400)

// ctx.fillStyle = "lightblue";
// ctx.fillRect(0, 0, 400, 400);

// ctx.fillStyle = "blue";
// ctx.fillRect(0, 250, 400, 150);

// ctx.fillStyle = "brown";
// ctx.fillRect(0, 200, 250, 25);

// // ctx.fillStyle = "black";
// // ctx.fillRect(250, 100, 50, 50);
// // ctx.fillRect(100, 100, 50, 50);
// // ctx.fillRect(150, 175, 100, 20);

// ctx.lineWidth = 10;
// ctx.strokeStyle = "brown";

// ctx.beginPath();
// ctx.moveTo(10, 150);
// ctx.lineTo(10, 400);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(60, 150);
// ctx.lineTo(60, 400);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(110, 150);
// ctx.lineTo(110, 400);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(160, 150);
// ctx.lineTo(160, 400);
// ctx.stroke();

// // Sun
// ctx.fillStyle = "yellow";

// ctx.beginPath();
// ctx.arc(75, 50, 20, 0, 2 * Math.PI);
// ctx.fill();

// ctx.fillStyle = "salmon";

// ctx.beginPath();
// ctx.arc(250, 300, 13, 0, 2 * Math.PI);
// ctx.fill();

// ctx.fillStyle = "orange";

// ctx.beginPath();
// ctx.arc(325, 325, 13, 0, 2 * Math.PI);
// ctx.fill();

// // Fish Tails
// ctx.fillStyle = "orange";

// ctx.beginPath();
// ctx.moveTo(325, 325);
// ctx.lineTo(350, 310);
// ctx.lineTo(350, 340);
// ctx.lineTo(325, 325);
// ctx.fill();

// ctx.fillStyle = "salmon";

// ctx.beginPath();
// ctx.moveTo(250, 300);
// ctx.lineTo(225, 285);
// ctx.lineTo(225, 315);
// ctx.lineTo(250, 300);
// ctx.fill();

// // Head - Circle (arc) at (250, 140) with radius 15
// ctx.strokeStyle = "black";
// ctx.lineWidth = 3;
// ctx.beginPath();
// ctx.arc(250, 140, 15, 0, 2 * Math.PI);
// ctx.stroke();

// // Torso
// ctx.beginPath();
// ctx.moveTo(248, 155);
// ctx.lineTo(243, 195);
// ctx.stroke();

// // Legs
// ctx.beginPath();
// ctx.moveTo(243, 195);
// ctx.lineTo(265, 205);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(265, 205);
// ctx.lineTo(270, 230);
// ctx.stroke();

// // Arm
// ctx.beginPath();
// ctx.moveTo(246, 170);
// ctx.lineTo(280, 180);
// ctx.stroke();

// // Fishing Pole
// ctx.strokeStyle = "gray";
// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.moveTo(275, 190);
// ctx.lineTo(350, 100);
// ctx.stroke();

// // Fishing Line
// ctx.lineWidth = 1;
// ctx.beginPath();
// ctx.moveTo(350, 100);
// ctx.lineTo(350, 300);
// ctx.stroke();

// // Cloud Image
// var cloudImg = document.getElementById("cloudE1");
// ctx.drawImage(cloudImg, 100, 50, 90, 90);

// // Text
// ctx.font = "15px Arial";
// ctx.fillStyle = "white";
// ctx.fillText("Art by R. Li", 315, 385);
