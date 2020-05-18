let mouseCursor = document.querySelector(".cursor");
let title = document.querySelector(".main-title");
let titleImage = document.querySelector("#about-exploration-svg");

window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

title.addEventListener("mouseover", () =>{
    mouseCursor.style.width = "10rem";
    mouseCursor.style.height = "10rem";
    mouseCursor.style.backdropFilter = "invert(1)";
});

title.addEventListener("mouseout", () =>{
    mouseCursor.style.width = "0";
    mouseCursor.style.height = "0";
});


titleImage.addEventListener("mouseover", () =>{
    mouseCursor.style.width = "4rem";
    mouseCursor.style.height = "4rem";
    mouseCursor.style.backdropFilter = "hue-rotate(120deg)";
});

titleImage.addEventListener("mouseout", () =>{
    mouseCursor.style.width = "0";
    mouseCursor.style.height = "0";
});