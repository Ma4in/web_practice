let contextMenu = document.querySelectorAll('.context-menu'); 
let contextMenuOpen = document.querySelector('.context-menu-open'); 
for (let i = 0; i < contextMenu.length; i++){ 
    contextMenu[i].addEventListener('contextmenu', function(e) {
        e.preventDefault();
        contextMenuOpen.style.left = e.clientX + 'px'; 
        contextMenuOpen.style.top = e.clientY + 'px';
        contextMenuOpen.style.display = 'block';
    });
}    

document.body.addEventListener('click', function() {
    contextMenuOpen.style.display = 'none';
});

function changeColor() {
    document.getElementById("m1").style.background = '#' + (Math.random().toString(16) + '000000').substring(2,8);
};

function changeborderSquere(){
    document.getElementById("m1").style.borderRadius = "50%";
    console.log(1);
};

function changeborderCircle() {
    document.getElementById("m1").style.borderRadius = 0;
};

let disp = true;
function hideIt(){
    if (disp) {document.getElementById("m1").style.display = "none"; disp=false;}
    else {document.getElementById("m1").style.display = "block"; disp=true;};
};

let margNone = true;

function setMargin(){
    if (margNone) {document.getElementById("m1").style.margin = "0"; margNone=false;}
    else {document.getElementById("m1").style.margin = "auto"; margNone=true;};
};

//____________2____________//

let ball = document.getElementById("bll");
    ballStyle = window.getComputedStyle(ball);
    leftPos = parseInt(ballStyle.getPropertyValue('left').slice(0, -2));
    topPos = parseInt(ballStyle.getPropertyValue('top').slice(0, -2));

let playground = document.getElementById("pgnd");

let pressedButtons = new Set();

playground.onkeydown = function (e){
    pressedButtons.add(e.code)
    if (pressedButtons.has("KeyA")){
        ball.style.left = (leftPos - 5).toString() + "px";
        leftPos -= 5; 
    }
    if (pressedButtons.has("KeyW")){
        ball.style.top = (topPos - 5).toString() + "px";
        topPos -= 5; 
    }
    if (pressedButtons.has("KeyD")){
        ball.style.left = (leftPos+- 5).toString() + "px";
        leftPos += 5; 
    }
    if (pressedButtons.has("KeyS")){
        ball.style.top = (topPos + 5).toString() + "px";
        topPos += 5; 
    }
    console.log(pressedButtons)
};

playground.onkeyup = function (){
    pressedButtons.clear();
};