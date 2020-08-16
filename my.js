var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particlesOnScreen = 70;
// var n = ;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;
var spacing = Math.floor(w/particlesOnScreen);

function random(min, max) {
    return min + Math.random() * (max - min + 1);
};

function clientResize(ev){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
};
window.addEventListener("resize", clientResize);

function createRainfall() {
    var tempx = 3; 
    // var tempy = Math.random() * h;
    for(var i = 0; i < particlesOnScreen; i++){
        particlesArray.push({
            x: tempx,  
            y: Math.random() * h,  
            speedY: random(7, 15),      
        })
        // tempx = tempx + 40;
        tempx = tempx + spacing;
    }
};


function drawRainfall(){
    var img = document.getElementById("rain");
    var droplet = document.getElementById("droplet");
    for(var i = 0; i < particlesArray.length; i++){   
        ctx.drawImage(img, particlesArray[i].x, particlesArray[i].y, 0.75, 60);  
        ctx.drawImage(img, particlesArray[i].x, particlesArray[i].y+100, 0.75, 60);  
        ctx.drawImage(img, particlesArray[i].x, particlesArray[i].y+200, 0.75, 60);
        ctx.drawImage(droplet, particlesArray[i].x, particlesArray[i].y+300, 5, 5);
    }
};


//     var tempx = particlesArray[i].x;
    //     var tempy = particlesArray[i].y;
    //     for(j = 0; j < 200; j++){
    //         tempy = tempy + Math.random() * w;
    //         ctx.drawImage(img, tempx, tempy,20,20);               
    //     }

function moveRainfall(){
    for (var i = 0; i < particlesArray.length; i++) {
        // particlesArray[i].x += particlesArray[i].speedX;     
        particlesArray[i].y += particlesArray[i].speedY;     

        if (particlesArray[i].y > h) {                                                                               
            // particlesArray[i].x = Math.random() * w * 1.5;
            particlesArray[i].y = 0;
        }
    }
};

function updateRainfall(){
    ctx.clearRect(0, 0, w, h);
    drawRainfall();
    moveRainfall();
};


setInterval(updateRainfall,30);
createRainfall();
