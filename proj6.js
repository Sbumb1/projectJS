 function convert (str){

     return parseInt(str);
 }

 //convert from string to int
 console.log(convert("34"));


 operationArrow = (a,b) => {
    
     if(a,b<=10){
         return a+b;
     }else if(a,b<=10 && a>b){
         return a-b;
     }else if(a,b>=10){
         return a*b;
     }else if(a,b>=10 && a>b){
         return a/b;
     }else{
         throw Error("Invalid operation")
     }
 }



 console.log(operationArrow(10,15));

 console.log(operationArrow(10,5));

 console.log(operationArrow(15,20));

 const person = [
         {
         "name" : "Adam",
         "number" : "354",
        
          toDo = ()=>{

            return "testing"
          }
     },
     {
         "name" : "John",
         "number" : "221",
        
          toDo = ()=>{
           
            return "programming"            
          }
     },
     
     {
        "name" : "Mark",
         "number" : "1050",     
          toDo = ()=>{

            return "engineering"
          }
     }
    
 ]
console.log("\nStringify person :")
 
var pers = JSON.stringify(person);
 console.log(pers)


 console.log("\nIterators examample :")

const carsArr = ["Audi","BMW","Mercedes","Volkswagen","Toyota"]

    const iterator = carsArr.forEach(car => console.log(car))
    const iterator1 = carsArr.map(car1 =>{return car1})
    const filter = carsArr.filter(car2 => car2.length<5)


//iterate with forEach
console.log(iterator)

//iterate with map
console.log(iterator1)

//return cars with <5 letter
console.log(filter)


