let menu=document.getElementById("menu")
console.log(menu);
let slide=document.getElementsByClassName("slide-bar")[0];
console.log(slide);
menu.addEventListener('click',()=>{
    if (slide.style.display === "none") {
        slide.style.display = "inline";
      } else {
        slide.style.display = "none";
      }
})