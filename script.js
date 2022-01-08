const personagem = document.getElementById("personagem");
const quadrado = document.getElementById("quadrado");
let gameOver = document.getElementById("gameOver");
let score = document.getElementById("score");

let interval = null;
let playerScore = 0;


let scoreCounter =()=> {
    playerScore=playerScore + 20;
    score.innerHTML = "Score:" + playerScore;
}


interval = setInterval(scoreCounter,200);

window.addEventListener("keydown", (e)=>{

    if(e.key == "w")
      if(personagem.classList != "jump")
      { 
            personagem.classList.add("jump");
      
    
             setTimeout(()=>{
                 personagem.classList.remove("jump");
            },300);
      }
         
});


let testarColisao = setInterval( function (){

    let topPersonagem = parseInt(
getComputedStyle(personagem).getPropertyValue("top")
    );
    let EsquerdaQuadrado = parseInt(
        getComputedStyle(quadrado).getPropertyValue("left")
    );

    if(topPersonagem >= 140 && EsquerdaQuadrado > 0 && EsquerdaQuadrado < 50){
        alert("Game over!")
            
    }
},10);

