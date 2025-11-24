


let stopWatch = document.getElementById("js-stop-watch");
let reactionButton = document.getElementById("js-reaction-button");
let msDisplay = document.getElementById("js-ms-display");


let state = "blue";
let startTime;
let elapsed;
let early = false;
function reactionSpeed(){

  let rand = ((Math.random() * 6) * 1000).toFixed(2);
  
  if(state == "blue"){
    early = false;
    state = "red";
    reactionButton.style.color = "white";
    reactionButton.style.backgroundColor = "rgb(158, 27, 27)";
    reactionButton.innerText = "Wait...";
      
    setTimeout(() =>{
      if(!early){
        state = "green";
        reactionButton.style.color = "white";
        reactionButton.style.backgroundColor = "rgb(32, 166, 25)";
        reactionButton.innerText = "Click!";

        startTime = Date.now();
        setInterval(() => {
        elapsed = Date.now() - startTime;
        
        }, 10);
      }
    }, rand);

  } else if(state == "red"){
    state = "blue";
    reactionButton.innerText = "You clicked too early, click to try again";
    reactionButton.style.backgroundColor = "rgb(50, 139, 194)";
    early = true;
    return;


  } else if (state == "green"){
    console.log(elapsed);
    reactionButton.innerText = "Click to try again";
    reactionButton.style.backgroundColor = "rgb(50, 139, 194)";
    msDisplay.innerHTML = `<p>You have a reaction time of ${elapsed} ms</p>`;
    state = "blue";
  }
}

reactionButton.addEventListener("click", () =>{
  reactionSpeed();
});


