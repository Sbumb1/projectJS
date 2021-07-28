//Our car array

const carArray = [];

//create Dealer Auto

const dealerAuto = [
  {
    "id" : 1,
    "brand" : "Mercedes-Benz",
    "model" : "GLE 63S AMG Coupe",
    "year" : 2019 ,
    "price" : 130000+"$",

    buy : function(){

      carArray.shift(dealerAuto[0]);

      console.log("First car bought.Cars remianed :");

      return dealerAuto;
    }

  },
  {
    "id" : 2,
    "brand" : "Audi",
    "model" : "Q8",
    "year" : 2018 ,
    "price" : 80000+"$",

    buy : ()=>{

      delete dealerAuto.id[2]

      console.log(dealerAuto[1].brand+" bought.Cars remianed :");

      return dealerAuto;
    }
  },
  {
    "id" : 3,
    "brand" : "BMW",
    "model" : "x7",
    "year" : 2020 ,
    "price" : 110000+"$",

    buy : function(){

      delete dealerAuto.id[3];

      console.log("Third car bought.Cars remianed :");

      return dealerAuto;
    }
  },
  {
    "id" : 4,
    "brand" : "Volkswagen",
    "model" : "Passat",
    "year" : 2020 ,
    "price" : 30000+"$",

    buy : function(){

      delete dealerAuto.id[4];

      console.log("Fourth car bought.Cars remianed :");

      return dealerAuto;
    }
  },
  {
    "id" : 5,
    "brand" : "Porsche",
    "model" : "Macan Turbo S",
    "year" : 2021 ,
    "price" : 135000+"$",


    buy : function(){
      console.log("Car no.5 bought.Cars remianed :");

      carArray.pop(jsonCars[4]["Porsche"]);

      return dealerAuto;
    }
  }
]


//add cars to Car array
addCar = function(){
  for(var i = 0;i<carArray.length;i++){

  
    carArray.push(dealerAuto[i])

    if(i===carArray.length-1){
      const arr=JSON.stringify(carArray);

      console.log(arr);
    }
  }
}

//display car by specified id

function displayCar(id){

  if(id===dealerAuto.id && dealerAuto.id==1){
    return dealerAuto.brand+" "+dealerAuto.model;
  }else if(id===dealerAuto.id && dealerAuto.id==2){
    return dealerAuto.brand+" "+dealerAuto.model;
  }else if(id===dealerAuto.id && dealerAuto.id==3){
    return dealerAuto.brand+" "+dealerAuto.model;
  }else if(id===dealerAuto.id && dealerAuto.id==4){
    return dealerAuto.brand+" "+dealerAuto.model;
  }else if(id===dealerAuto.id && dealerAuto.id==5){
    return dealerAuto.brand+" "+dealerAuto.model;
  }
}

// display car with id 2

console.log("Display car "+displayCar(1));

console.log(dealerAuto[1].buy)
console.log(dealerAuto)