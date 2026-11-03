
/*variables queryselector pour rechercher les éléments dans mon html*/
const displaySup = document.querySelector('.display-sup');
const displayInf = document.querySelector('.display-inf');
const btn = document.querySelectorAll('.btn');
const operators = ["+", "-", "*", "/", "%"];
/*variables globales pour l'affichage du calcul et de l'historique de calcul (la ligne précédente) */
let currentInput = "";
let previousInput = "";

/*fonction d'affichage dans mon écran de calculatrice*/
function updateDisplay() {
  if (currentInput === "") {
    displayInf.textContent = "0";
  } else {
    displayInf.textContent = currentInput;
  }
  displaySup.textContent = previousInput;
}

updateDisplay();

/*Fonction qui ajoute les caractères dans currentInput*/
function appendChar(nb) {
  if (nb === ",") {
    let cut = currentInput.split(/[+\-*\/]/);
    let lastCut = cut[cut.length-1];
    if (lastCut.includes(",")){
      return;
    } else {
      currentInput += nb;
      return;
    }
  }
  if (currentInput ==="0" && nb != ",") {
    currentInput = nb;
  } else {
    currentInput += nb;
  }
}
/*fonction pour ajouter l'opérateur mathémathique*/
function appendOp(op) {
  
  let lastOp = currentInput.slice(-1);
  if( operators.includes(lastOp) || lastOp === ",") {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
}

/* fonction de l'action des parenthèses, détection de quelle parenthèse le calcul a besoin*/

function handleParenthesis() {
  let openPar = currentInput.split("(").length -1;
  let closePar = currentInput.split(")").length -1;
  let lastChar = currentInput.slice(-1);
  if (currentInput ==="0") {
    currentInput = "("
  } else if ( openPar > closePar && !operators.includes(lastChar) && lastChar !== "," && lastChar !== "("){
    currentInput += ")";
  } else {
    currentInput += "(";
  }
}

/* fonction de remise à 0*/
function clearAll() {
  currentInput = "0";
  previousInput = "";
}

/*fonction de retour en arrière*/
function backspace() {
  if (currentInput.length >= 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
}

/*fonction de résultat de calcul*/

function calculate() {
  if (currentInput === "0" || currentInput ==="") {
    return
  }
  let expression = currentInput
    .replaceAll(",", ".")
    .replaceAll("÷", "/")
    .replaceAll("×", "*")
    .replaceAll("%", "/100");
    previousInput = currentInput + "=";
  try {
    currentInput = eval(expression).toString();
  } catch (error) {
      currentInput = "Error";
  }
}

/* fonction de event listener click*/

btn.forEach(function(button) {
  button.addEventListener('click', function(){
    let btnValue = button.dataset.value;
    let btnOp = button.dataset.operator;
    let btnAc = button.dataset.action;

    if (btnValue) {
      appendChar(btnValue);
    } else if (btnOp) {
      appendOp(btnOp);
    } else if (btnAc) {
      if (btnAc === "clear-all"){
        clearAll();
      } else if (btnAc === "backspace") {
        backspace();
      } else if (btnAc === "parenthesis") {
        handleParenthesis();
      } else if (btnAc === "calculate") {
        calculate();
      }
    }
    updateDisplay();
  });
});

/* fonction de event listener sur toute la fenetre lorsqu'on appuie sur les touches du clavier numérique*/
window.addEventListener('keydown', function(event){
  let key = event.key;
  if (key >= "0" && key <="9") {
    appendChar(key);
  } else if ( key ==="," || key ===".") {
    appendChar(",");
  } else if (operators.includes(key)) {
    appendOp(key);
  } else if ( key ==="(" || key ===")"){
    handleParenthesis();
  } else if (key ==="Enter" || key ==="=") {
    event.preventDefault();
    calculate();
  } else if (key ==="Backspace") {
    backspace();
  } else if (key ==="Escape" || key ==="Delete") {
    clearAll();
  }
  updateDisplay();
  });