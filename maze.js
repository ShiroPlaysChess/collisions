//draw function

//always off until turned on.
let leftarrow_prst = false;
let rightarrow_prst = false;
let uparrow_prst = false;
let downarrow_prst = false;

window.addEventListener("draw", draw)

function draw() {
   if (rightPressed) {
    
   }
}

document.addEventListener("keydown", pressmehandle);

function pressmehandle(e) {
  if (e.code == "ArrowLeft") {
    leftarrow_prst = true;
  }
  if (e.code == "ArrowRight") {
    rightarrow_prst = true;
  }
  if (e.code == "ArrowUp") {
    uparrow_prst = true;
  }
  if (e.code == "ArrowDown") {
    downarrow_prst = true;
  }
}

document.addEventListener("keyup", leggomehandle);

function leggomehandle(e) {
  if (e.code == "ArrowLeft") {
    leftarrow_prst = false;
  }
  if (e.code == "ArrowRight") {
    rightarrow_prst = false;
  }
  if (e.code == "ArrowUp") {
    uparrow_prst = false;
  }
  if (e.code == "ArrowDown") {
    downarrow_prst = false;
  }
}