const personagem = document.getElementById("personagem");
const quadrado = document.getElementById("quadrado");

function jump(){
    if(personagem.classList != "jump"){
      personagem.classList.add("jump");
    
    setTimeout(function(){
        personagem.classList.remove("jump");
    }, 300);
    }
}

let testarColisao = setInterval( function (){

    let topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue("top")
    );
    let EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue("left")
       );

       if(EsquerdaQuadrado < 50 && EsquerdaQuadrado > 0 && topoPersonagem >= 140){
     
        alert("Game over!")
            
    }

}, 10);

document.addEventListener("keydown", function (event) {
    jump();
  });