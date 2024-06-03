const check = document.getElementById("check");
const icon =  document.querySelector("i")
const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click" , ()=>{
    btn.classList.add("hide");
    icon.classList.add("rotateIn");
    message.classList.add("fadeIn");
})