const contextMenu = document.querySelector(".wrapper"),
shareMenu = contextMenu.querySelector(".share-menu");

document.addEventListener("contextmenu", e =>{
    e.preventDefault(); //preventing default context menu of the browser
    let x = e.offsetX,
    y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth,
    cmHeight = contextMenu.offsetHeight;

    if(x > (winWidth - cmWidth - shareMenu.offsetWidth)){
        shareMenu.style.left = "-200px";
    }else{
       shareMenu.style.left = ""; 
       shareMenu.style.right = "-200px"; 
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

//hides context menu on document click or left mouse click
document.addEventListener("click", () => contextMenu.style.visibility = "hidden");