let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++; //level function  jab call hoga levelup hoga
    h2.innerText = `Level ${level}`; //level value increase hoga

    //random btn choose
    let randIdx = Math.floor(Math.random() * 3); //random index choose hoga 0-3 tak
    let randColor = btns[randIdx]; //randIdx se hum btns array se ek color randomly choose karenge
    let randBtn = document.querySelector(`.${randColor}`); //randColor se ek .randColor class banayenge and wo class se ek document.queryselector banayenge
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn); //btnFlash se wo btn ko abb flash karwa denge
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");  
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){ 
    let btn = this; //ye btn btnPress function ke andar hai toh ye btn only iss function ka hua, so jahan jahan v btn use hua hai confuse mathona becoz sab btn alag alag fucntion ke andar main hai.
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);    
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
