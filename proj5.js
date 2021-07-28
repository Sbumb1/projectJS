"use strict";
const ps=require("prompt-sync");
const prompt =ps();


function guessNumber(){

    const difficulty = [1,2,3];
    var choosedNr = prompt("Choose difficulty: 1,2,3");
  
    console.log("Difficulty :"+choosedNr)
    
    if(choosedNr==difficulty[0]){
      let nr = prompt("Guess a number beetwen 0-10 :");
  
      let min=1;
      let max=10;
  
      let generatedNr =min + Math.floor(Math.random() * max);
      
      if(nr==generatedNr){
        return "Number guessed"
  
      }else if(nr!==generatedNr){
        return false +" - number was "+ generatedNr;
      }
  
    }else if(choosedNr==difficulty[1]){
      let nr = prompt("Guess a number beetwen 0-100 :");
  
      let min=1;
      let max=100;
  
      let generatedNr =min + Math.floor(Math.random() * max);
  
      if(nr===generatedNr){
        return "Number guessed"
  
      }else if(nr!==generatedNr){
        return false +" - number was "+ generatedNr;
      }
  
    }else if(choosedNr==difficulty[2]){
      let nr = prompt("Guess a number beetwen 0-1000 :");
  
      let min=1;
      let max=1000;
  
      let generatedNr =min + Math.floor(Math.random() * max);
  
      if(nr==generatedNr){
        return "Number guessed"
  
      }else if(nr!=generatedNr){

        return false +" - number was "+ generatedNr;
      }
    }
  }
  
  var generatedNr =Math.floor(Math.random() * 11);

    console.log(guessNumber());
  //console.log(generatedNr);
