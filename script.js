let game = document.getElementsByClassName("game")
let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
let stop = document.getElementById("letsStop");
let start = document.getElementById("letsStart");


start.addEventListener("click", (event) => {
    cactus.classList.add("cactus-anim");
 })
stop.addEventListener("click", (event) => {
   cactus.classList.remove("cactus-anim");
})


document.addEventListener("keydown", function(event){
   jump();
});



function jump(){
    if(dino.classList != "jump"){
      dino.classList.add("jump");
    } 

    setTimeout( function(){
        dino.classList.remove("jump");
    }, 300);
}


let result = 0;
let isAlive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 25 && cactusLeft > 0 && dinoTop > 130) {
        alert("GAVE OVER!!!");
        alert("Ваш результат : " + result + " очков");
        document.location.reload();
        console.log(cactusLeft) 
    }
    if(cactusLeft < 25 && cactusLeft > 0 && dinoTop < 130) {
        result += 10;
        console.log(result);
    }
}, 100); 