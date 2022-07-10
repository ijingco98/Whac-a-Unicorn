const holesDiv=document.querySelector(".holes");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const startButton = document.querySelector(".modal button");
const modal = document.querySelector(".modal");
const highScore = document.querySelector(".highscore");
const gameOver = document.querySelector(".display h2");
const cursor = document.querySelector('.cursor');


let timeLeft;
let pScore=0;
let maxScore=0;

//for the holes.

for (let i=1;i<=16; i++) {
    let hole = document.createElement("div");
    hole.classList.add("hole");
    holesDiv.appendChild(hole);

//created a div for the hiding spot

    let rainBow = document.createElement("img");
    rainBow.classList.add("rainBow");
    rainBow.src="./images/newHidingSpot.png";
    hole.appendChild(rainBow);

//created a div for the head
    let head = document.createElement("img");
    head.classList.add("head");
    head.src="./images/uniCat.png";
    head.setAttribute("name", "head");
    hole.appendChild(head); 
}

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})

window.addEventListener("click",(e)=> {
    if(e.target.name === "head"){
    setTimeout(() =>{
    document.body.classList.toggle("flash");
},100)
    document.body.classList.toggle("flash");
    pScore=pScore+1;
    score.textContent=pScore;
}
});

startButton.addEventListener("click",()=>{
    modal.classList.add("modalClose");
    timeLeft=10;
    pScore=0;
    score.textContent=pScore;
    time.textContent=timeLeft;

    let timer = setInterval(() => {
        time.textContent = timeLeft;
        if (timeLeft === 0){
            gameOver.style.visibility="visible";
            modal.classList.remove("modalClose");
        if (pScore>maxScore) {
            maxScore=pScore;
            highScore.textContent=maxScore;
        }else {
           highScore.textContent= maxScore;
        }
            clearInterval(timer);
        }else{
            timeLeft --;
            time.textContent = timeLeft < 10 ? "0" + 
            timeLeft : timeLeft;
            const head = document.querySelectorAll(".head");
let chooseHead = Math.floor(Math.random() * head.length);
head[chooseHead].style.pointerEvents="all";
head[chooseHead].style.animation="faceup 2s ease";
head[chooseHead].addEventListener("animationEnd", ()=>{
    head[chooseHead].style.
    pointerEvents="all";
    head[chooseHead].style.
    animation="facedown 0.5s ease";
    head[chooseHead].addEventListener
    ("animationEnd", ()=>{
    head[chooseHead].style.pointerEvents = "none";});
})}
}, 1000);
});












