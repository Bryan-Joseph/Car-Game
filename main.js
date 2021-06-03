canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

let car1 = {
    width: 120,
    height: 70,
    image: "assets/car1.png",
    x : 10,
    y : 10,
    speed : 10
}

let car2 = {
    width: 120,
    height: 70,
    image: "assets/car2.png",
    x : 10,
    y : 100,
    speed : 10
}

let background = "assets/background.png";


    var backgroundImage = new Image();
    backgroundImage.onload = function(){
        backgrodnd();//ctx.drawImage(backgroundImage , 0, 0 ,canvas.width, canvas.height);
    }
    backgroundImage.src = background;

    var car1Img = new Image();
    car1Img.onload = function(){
        car11();//ctx.drawImage(car1Img , car1.x , car1.y , car1.width, car1.height);
    }
    car1Img.src = car1.image;

    var car2Img = new Image();
    car2Img.onload = function(){
        car22();//ctx.drawImage(car2Img , car2.x , car2.y , car2.width, car2.height);
    }
    car2Img.src = car2.image;


window.addEventListener("keydown" , function(e){
    keypress1 = e.keyCode;
    console.log(keypress1);

    if (keypress1 == 38 && car1.y - car1.speed >= 0) {
        console.log("Up arrow key");
        //car1_up();

        moveC1(0 , -1);
    }
    if (keypress1 == 40 && car1.y + car1.speed <= canvas.height - car1.height) {
        console.log("Down arrow key");
        //car1_down();

        moveC1(0 , 1);
    }
    if (keypress1 == 39 && car1.x + car1.speed <= canvas.width - car1.width) {
        console.log("Right arrow key");
        //car1_right();

        moveC1(1 , 0);
    }
    if (keypress1 == 37 && car1.x - car1.speed >= 0) {
        console.log("Left arrow key");
        //car1_left();

        moveC1(-1 , 0);
    }

    if (keypress1 == 87 && car2.y - car2.speed >= 0) {
        console.log("W key");
        //car2_up();

        moveC2(0 , -1);
    }
    if (keypress1 == 83 && car2.y + car2.speed <= canvas.height - car2.height) {
        console.log("S key");
        //car2_down();

        moveC2(0 , 1);
    }
    if (keypress1 == 68 && car2.x + car2.speed <= canvas.width - car2.width) {
        console.log("D key");
        //car2_right();

        moveC2(1 , 0);
    }
    if (keypress1 == 65 && car2.x - car2.speed >= 0){
        console.log("A key");
        //car2_left();

        moveC2(-1 , 0);
    }

});


function backgrodnd() {
    ctx.drawImage(backgroundImage , 0, 0 ,canvas.width, canvas.height);
}
function car11() {
    ctx.drawImage(car1Img , car1.x , car1.y , car1.width, car1.height);
}
function car22() {
    ctx.drawImage(car2Img , car2.x , car2.y , car2.width, car2.height);
}
function moveC1(x , y) {
    car1.x += x * car1.speed;
    car1.y += y * car1.speed;

    backgrodnd();
    car11();
    car22();
}

function moveC2(x , y) {
    car2.x += x * car2.speed;
    car2.y += y * car2.speed;

    backgrodnd();
    car11();
    car22();
}