const modal = document.querySelector(".modal");
const showModalBtn = document.querySelectorAll(".showModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const toggleBold = document.querySelector(".toggleBold");
const overlay = document.querySelector(".overlay");

function openModal(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

for (i=0; i<showModalBtn.length; i++){ 
showModalBtn[i].addEventListener("click", openModal);
}

const close = function (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
closeModalBtn.addEventListener("click",close);

document.addEventListener('keydown', function(pressed){
    if(pressed.key === 'Escape'){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
})