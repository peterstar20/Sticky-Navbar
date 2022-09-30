const navbarEl = document.querySelector(".navbar");
const container2El = document.querySelector(".container2");
console.log(container2El);


console.log(navbarEl.offsetHeight);
console.log(container2El.offsetTop);
window.addEventListener("scroll", function(){
    if(window.scrollY > container2El.offsetTop - navbarEl.offsetHeight - 15){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
})