 let suaidade;
let aventura;
let ação;
let RPG;
let titulo;
let corpo;
let jogos = {
  menor10:{
    ação: "Super Mario Odyssey",
    aventura: "Luigi Mansion 3",
    RPG: "Pokemon Sword and Shield"
  },
  entre10e14:{
    ação: "Plants Vs Zombie",
    aventura: "Lego Harry Potter",
    RPG: "Dragon Quest Builders 2"
  },
  entre14e16:{
    ação: "Batman: Arkhan Knight",
    aventura: "The Legend Of Zelda",
    RPG: "Final Fantasy XV"
  },
  entre16e18:{
    ação: "Shadow Of The Tomb Raider",
    aventura: "Horizon Forbidden West",
    RPG: "Persona 5 Royal"
  },
  maior18:{
    ação: "GTA V",
    aventura: "Red Dead Redemption 2",
    RPG: "The Elder Scrolls V"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
    createSpan("Qual sua idade?").position(670,530).addClass("hidden");
  suaidade=createInput("").position(630,585).addClass("hidden");
  ação=createCheckbox("Gosta de jogos de ação?").position(100,600).addClass("hidden");
  aventura=createCheckbox("Gosta de jogos de aventura?").position(100,650).addClass("hidden");
  RPG=createCheckbox("Gosta de jogos de RPG?").position(100,700).addClass("hidden");
  titulo="New Amsterdam";
  corpo="SUSE"
 button= createButton("APERTA O MEU BUTÃO🤤").position(width/2, 585);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota(){
  selectAll(".hidden").forEach((el) =>
  el.removeClass("hidden"));  
  button.hide();
}
function draw() {
  background("white");
 
  

  
  let idade= parseInt(suaidade.value());
  let checkação= ação.checked();
  let checkaventura= aventura.checked();
  let checkRPG= RPG.checked();
  let jogo= "insira suas preferências";
 if (suaidade.value() !== ""){
   jogo=mostrajogo(idade, checkação, checkaventura, checkRPG);
 }
  fill("purple");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
  textFont(titulo)
  
   fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text("SUGESTÕES DE JOGOS", width/2,20);
  textFont(corpo);
}

  function mostrajogo(idade, checkação, checkaventura, checkRPG){
    if (isNaN(idade)){
      return "idade inválida";
    } else 
      if(idade <5){
        return "muito novinho"
      } else
        if (idade >120){
          return "ta fazendo hora extra ja"
        }
    if (idade >= 5 && idade < 10){
      if (checkação){
        return jogos["menor10"]["ação"];
      }
      if (checkaventura){
        return jogos["menor10"]["aventura"];
      }
      if (checkRPG){
        return jogos["menor10"]["RPG"];
      }
    }
   else if (idade >= 10 && idade < 14){
      if (checkação){
        return jogos["entre10e14"]["ação"];
      }
      if (checkaventura){
        return jogos["entre10e14"]["aventura"];
      }
      if (checkRPG){
        return jogos["entre10e14"]["RPG"];
      }
    }
   else if (idade >= 14 && idade < 16){
      if (checkação){
        return jogos["entre14e16"]["ação"];
      }
      if (checkaventura){
        return jogos["entre14e16"]["aventura"];
      }
      if (checkRPG){
        return jogos["entre14e16"]["RPG"];
      }
    }
    else if (idade >= 16 && idade < 18){
      if (checkação){
        return jogos["entre14e18"]["ação"];
      }
      if (checkaventura){
        return jogos["entre16e18"]["aventura"];
      }
      if (checkRPG){
        return jogos["entre16e18"]["RPG"];
      }
    }
   else if (idade >=18){
      if (checkação){
        return jogos["maior18"]["ação"];
      }
      if (checkaventura){
        return jogos["maior18"]["aventura"];
      }
      if (checkRPG){
        return jogos["maior18"]["RPG"];
      }
    }
  }