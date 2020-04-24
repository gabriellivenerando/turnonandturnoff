/*
  Exercício 1
  -----------

  Liga e desliga

  1. selecione a imagem do documento.
  2. selecione o body do documento. 
  3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.

    
*/



let ligado = true;

function changeBg(){
  if(ligado){
    document.getElementById("12").style.backgroundColor = 'black';
    ligado = false;

  }else{
    document.getElementById("12").style.backgroundColor = 'white';
    ligado = true;
  }
}

// OUTRA FORMA DE FAZER

// const background = document.querySelector('body');

// background.style.backgroundColor = 'white';

// function changeBg() {
  
//   if( background.style.backgroundColor == 'white'){
//     background.style.backgroundColor ='black';
//   }else{
//     background.style.backgroundColor = 'white';
//   }