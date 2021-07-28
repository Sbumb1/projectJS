var myArray =[[2,1],[3,"Hello"],["4","Sami"]]

//accessing from multiple array
console.log(myArray[0][1])
console.log(myArray[2][1])
console.log(myArray[1][1])
console.log(myArray[1][0])

//<<<manipulating array>>>
var myArray1 = [1,2,3,"Ionut",2.34,"Marcel"]
//add at the end
myArray1.push("Hymrid")
console.log(myArray1)

//delete at the beginning
myArray1.shift()
console.log(myArray1)

//delete at the end
myArray1.pop()
console.log(myArray1)

//add at the beginning
myArray1.unshift("Gigel")
console.log(myArray1)

//delete in the array
delete myArray1[1]
console.log(myArray1)

console.log("Length of first array "+myArray.length+"\nLength of second array "+myArray1.length)



//functions

function buy(product,price){
    return product+" costs "+ price
}

console.log(buy("nivea",34))
console.log(buy("Coca Cola",10))
console.log(buy("Milka cu capsuni",4.5))



console.log("\nWe have some products,let's buy them")

let products = [
    {
        prodName : "BIC",
        price :1.05,
        whatItDoes : ()=>{ 
            return "Shaving"
        },
        sell : ()=>{
           return products.shift();
        } 

    },
    {
        prodName : "Milka",
        price : 4.5,
        gettingFat : true
    }
]
var str = JSON.stringify(products)
console.log("Products :"+str)

console.log(products[0].prodName+" "+products.sell+" sold.\n"+str)


console.log("\n\n<<<Operations>>>")

function sum(a,b,c){

    return a+b+c
}

function subtract(a,b,c){

    return a-b-c
}

function multiply(a,b,c){

    return a*b*c
}

function divide(a,b,c){

    return a/b/c
}


console.log("Sum "+sum(1,2,3))
console.log(subtract(3,2,1))
console.log(multiply(10,11,12))
console.log(divide(50,5,5))



console.log("\n\n<<<Scopes>>>")

var q=54;

for(var q=0;q<10;q+=2){
    console.log(q)
}

for(let q=0;q<10;q+=3){
    console.log("q from for has a local scope not a global one because of let keyword, q="+q)

}

console.log("\nI wanted the first q which is 54,but because I didn't use 'let' will appear the q variable from for loop :"+q)

const w = 300;
if(typeof w!="number"){
    console.log("w is not a  number")
}else if(typeof w == "number"){
    console.log("w is a number")
}

console.log("\n\nNext in Line")

function nextInLine(arr,item){

    arr.push(item)
    
    console.log(item)

}

let arr = [1,2,3,4,5]

console.log("Before "+JSON.stringify(arr))
nextInLine(arr,6)
console.log("After "+JSON.stringify(arr))


console.log("\n\nBoolean and if statements")

//by default is false
let bool;

if(!bool){
    console.log(true)
}else{
    console.log(false)
}

function trueOrFalse(bool){
    if(bool==true){
        return "it's true"
    }else{
        return false
    }
}

console.log(trueOrFalse(true))

function verifyEquality(a,b){
    if(a==b){
        return "Equal"
    }else if(a<b){
        return "a is smaler than b "+a+" < "+b
    }else if(a>b){
        return "a is bigger than b "+a+" > "+b

    }else{
        return "equality";
    }
}
console.log(verifyEquality(23742374237453,723548236327434))


function ifInIf(a,b,c,d){
    if(a>b && c>d){
        if(a>c){
            return "a is bigger"
        }else{
            return "c is bigger than a"
        }
    }else if(a==b && c<d){
        if(a!=c){
            return "c,d="+c+" "+d
        }else{
            return "a&b"+a+" "+b
        }
    }else if(a!=b && c!=d){
        if(a<b){
            if(a==0){
                return a
            }else{
                return a+" is not 0"
            }
            

        }if(c<d){
            if(d==0){
                return "d is "+d
            }else{
                return d+" is not 0"
            }
    }
}
}

console.log(ifInIf(0,1,2,3))
console.log(ifInIf(15,4,22,13))


function size(size){
    if(size<5){
        return "tiny"
    }else if(size>5 && size<10){
        return "small"
    }else if(size>10 && size<20){
        return "medium"
    }else if(size>20){
        return "large"
    }
}
console.log("Size is :"+size(21))

console.log("\n\nFootball code")

var footNames=["goooooal","penalty","corner","out","end match"]

function play(nr,faze){

    if(faze==1){
        return footNames[0]
    }else if(faze<=nr-2){
        return footNames[1]
    }else if(faze<=nr-1){
        return footNames[2]
    }else if(faze<=nr){
        return footNames[3]
    }else if(faze<=nr+1){
        return footNames[4]
    }
}

console.log(play(5,6))

console.log("\n\nSwitch statement")

function switchValue(value){
    let name="";

    switch(value){
        case 1:
            name="Sami";
            break;
        
        case 2:
            name="Mary";
            break;

        case 3:
            name="John";
            break;
        
        case 4:
        case 5:
        case 6:
        case 7:
            name="Chris";
            break;
        
        default:
            name="no name";
            break;
    }

    return name;
}

console.log(switchValue(3))

console.log("\n\nMath")

let randomNr = Math.floor(Math.random * 10)
console.log("Random number beetwen 0-10 "+ randomNr)

function abTest(a,b){

    if(a<0 && b<0){
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

console.log(abTest(2,3))


console.log("\n\nObjects :")

const ourDog={
    "name" : "Freddy",
    "legs" : 4,
    "color" : "black",
    "activities" : ["eat","sleep","repeat"]
}

//access object using dot and brackets
var theName = ourDog.name;
var theLegs = ourDog['legs'];
var theColor = ourDog.color;
var theActivities = ourDog['activities'];

console.log("Accesing object :"+theName+" "+theLegs+" "+theColor+" "+theActivities)

//update properties
ourDog.name="Max";
ourDog.legs=5;
console.log(JSON.stringify(ourDog))

//add new properties to object
ourDog.bite=true;
ourDog.love="Clara";
console.log(JSON.stringify(ourDog))

//delete a prop
delete ourDog.bite;
console.log(JSON.stringify(ourDog))

console.log(`${ourDog.name} has ${ourDog.legs} legs.He is ${ourDog.color} and all the day he ${ourDog.activities}.His love is ${ourDog.love}.`)

//check property
function checkObj(checkProp){

    if(ourDog.hasOwnProperty(checkProp)){
        return "Our property :"+ourDog[checkProp]
    }else{
        return "Property NOT FOUND";
    }
    
}

console.log(checkObj("activities"))


//access complex and nested obj

var cars =[
    {
        carName : {
            brand : "Audi",
            model : "A7"
        },
        year : 2020,
        price : [60000,70000,80000]
    },
    {
        carName : {
            brand : "Mercedes-Benz",
            model : "GLE53s AMG"
        },
        year : 2020,
        price : [130000,140000,180000]
    },
    {
        carName : {
            brand : "BMW",
            model : "8-series"
        },
        year : 2021,
        price : [120000,134500,160000]
    }
]

var accessCarBrand = cars[0].carName.brand;
var accesTopPrice = cars[0].price[2];

console.log(accessCarBrand+" from "+cars[0].year+" and price:"+accesTopPrice)

console.log("\n\nChange properties :")

var collection = {
    "car1" : {
        "carname" : "Audi A7",
        "year" : 2017,
        "prices" : [30000,40000]

    },
    "car2" : {
        "carname" : "Audi A6",
        "year" : 2020,
        "prices" : [35000,45000]

    },
    "car3" : {
        "carname" : "Mercedes E500",
        "year" : 2019,
        "prices" : [50000,60000]

    },
    "car4" : {
        "carname" : "Audi SQ8",
        "year" : 2020,
        "prices" : [110000,140000]

    }
}

function updateRecords(car,prop,value){

    if(value === ""){
        delete collection[car][prop]
    }else if(prop === "prices"){
        collection[car][prop] = collection[car][prop] || [];
        collection[car][prop].push(value)
    }else{
        collection[car][prop] = value;
    }

    return collection;
}


console.log("\n\nLoops :")

//for loop
var pers = ["nico","ionut","marius","marioara","vasile"]

for(let i=1;i<=pers.length;i++){
    console.log(i+". "+pers[i-1]+"\n")
}

//while loop
let i=5
while(i>=1){
    console.log(i+". "+pers[i-1])

    i--;
}

//add ages to array
for(let i=10;i<50;i+=10){
    pers.push(i)

    if(i==40){
        console.log(pers)
    }
}

//from 1000 to 0
for(let i=1000;i>=1;i-=100){
    console.log(i)
    if(i==100){
        for(let i=90;i>=1;i-=10){
            console.log(i)
            if(i==10){
                for(let i=9;i>=0;i--){
                    console.log(i)
                }
            }
        }
    }
}


//do while
// do{
//     let i=1;
//     console.log(i+". "+pers[i-1])
//     i++;
// }while(i<=pers.length);


//generate random 10 numbers

// "use strict";
// const ps=require("prompt-sync");
// const prompt =ps();


// function guessNumber(){

//     const difficulty = [1,2,3];
//     var choosedNr = prompt("Choose difficulty: 1,2,3");
  
//     console.log("Difficulty :"+choosedNr)
    
//     if(choosedNr==difficulty[0]){
//       let nr = prompt("Guess a number beetwen 0-10 :");
  
//       let min=1;
//       let max=10;
  
//       let generatedNr =min + Math.floor(Math.random() * max);
      
//       if(nr==generatedNr){
//         return "Number guessed"
  
//       }else if(nr!==generatedNr){
//         return false +" - number was "+ generatedNr;
//       }
  
//     }else if(choosedNr==difficulty[1]){
//       let nr = prompt("Guess a number beetwen 0-100 :");
  
//       let min=1;
//       let max=100;
  
//       let generatedNr =min + Math.floor(Math.random() * max);
  
//       if(nr===generatedNr){
//         return "Number guessed"
  
//       }else if(nr!==generatedNr){
//         return false +" - number was "+ generatedNr;
//       }
  
//     }else if(choosedNr==difficulty[2]){
//       let nr = prompt("Guess a number beetwen 0-1000 :");
  
//       let min=1;
//       let max=1000;
  
//       let generatedNr =min + Math.floor(Math.random() * max);
  
//       if(nr==generatedNr){
//         return "Number guessed"
  
//       }else if(nr!=generatedNr){

//         return false +" - number was "+ generatedNr;
//       }
//     }
//   }
  
//   var generatedNr =Math.floor(Math.random() * 11);

//     console.log(guessNumber());


console.log("\n\n Convert :")

function convertfromStr(str){

    return parseInt(str)
}
console.log(convertfromStr("32423"))


console.log("\n\nTernary operators :")

function ternaryOperations(a){
    return a>0 ? "positive" : "negative"
}
console.log(ternaryOperations(-2))

function ternaryOp2(b){
    return b>1 && b<4 ? b : b>2 && b<3 ? b : "false"
}

console.log(ternaryOp2(2))

console.log("\n\nArrow functions :")

var catel = () => {return ourDog.name+" is "+ourDog.activities}
var date = ()=> new Date()

var  toConcat = (arr1,arr2) => arr1.concat(arr2);

console.log(toConcat([1,2],[3,4,5]))

var no2 = [21,4,14,342,523,42,3,2,4,5,223,2.4,23.5,22.422,342,342]

var filter = no2.filter(nr =>Number.isInteger(nr) && nr<100).map(nrr => nrr+10)
console.log("Filtered numbers :"+filter)


const months = ["January","February","March","April","May","June","July","..."]
let months2;

(function () {
    months2 =[...months];
    months[0] = "December";
})();

console.log(months2)


console.log("\n\nUse destructing :")

const clujTemp = {
    today : 30,
    tomorrow : 32
}

function getTemp(temp){
    "use strict";

    const {today : todayTemp , tomorrow : tomorrowTemp} = temp;

    return todayTemp + " " + tomorrowTemp;
}

const clujTempLim = {
    today : {
        min : 22,
        max : 34
    },
    tomorrow : {
        min :20,
        max :40
    }
}

function getTempLim(tempLim){
    "use strict"

    const {today : {min : minToday , max : maxToday}, tomorrow : {min : minTomorrow, max : maxTommorrow}} = tempLim;

    return "Today :"+minToday+" "+maxToday+"\n"+"Tomorrow :"+minTomorrow+" "+maxTommorrow
}

console.log(clujTemp)
console.log(clujTempLim)


const list= [1,2,3,4,5,6]

removeFirstTwo = (lista) =>{

    const [,,...arrr]=lista;

    return arrr;
}
const arrr = removeFirstTwo(list);
console.log(arrr)
console.log(list)

console.log("\n\nTemplate literals :")
const dinosaur = {
    name : "Mozilla Firefox",
    age : 999
}

const template = `${dinosaur.name} has ${dinosaur.age} years`
console.log(template)


const create = (persName,age) => ({persName,age});
console.log(create("doru","34"))


console.log("\n\nClass :")
class Phone {
 
    constructor(name,year,country){
       this._name=name;
       this._year=year;
       this._country=country;
    }

    get name (){
        return this._name;
    }
    get year(){
        return this._year;
    }
    get country(){
        return this._country;
    }
}
 
function presentation(){
    var phone1 = new Phone("Iphone 11",2020,"USA")
 
    return phone1.name+" "+"appeared in "+phone1.year+" in USA";
}
 
function charging(chargingHours){
 
    var phone2 = new Phone("Samsung S20",2020,"Japan");
 
    console.log(`We have a ${phone2.name}`);
    
    if(chargingHours == 8){
       
        return phone2.name+" full charged"
    
    }else if(chargingHours<8){
       try{
        throw new Error(phone2.name+" not charged.");
       }catch(err){
           console.log(err)
       }
    }  
}
console.log(presentation())

console.log(charging(7));