//get element from html dom tree
const menuBtn=document.querySelector(".menu-btn");
const navItems=document.querySelector(".link-items");
menuBtn.addEventListener("click",()=>{
    //toggle menuBtn element class open
    menuBtn.classList.toggle("open");
    //toggle navItems elelement class circle
    navItems.classList.toggle("circle");
})