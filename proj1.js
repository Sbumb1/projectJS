"use strict";
const ps=require("prompt-sync");
const prompt =ps();

// const arr = [1,'sami',2];
 
// console.log(arr[1]+" "+"is lazy");
 
// for(var i=0;i<arr.length;i++){
//     if(i===0){
//         return "Is"+" "+arr[0];
//     }else if(i===1){
//         return arr[1];
//     }else if(i===2){
//         return Is+" "+arr[2]
//     }else if(i!==0 ||i!==1||i!==2){
//         throw Error("No element found!")
//     }
//     return arr[0]+"."+" "+arr[1]+" is numeber "+arr[2];
// }
 
let persContacts = {
    
    "contact1" :{"name" : "Sami",
               "phoneNumber" : "0723479846",
               "eMail" : "bmb.sami@yahoo.com"
              },
    "contact2" :{"name" : "","" : "","" : ""},
    "contact3" :{"name" : "","" : "","" : ""},
    "contact4" :{"name" : "","" : "","" : ""},
    
    
};
 
const names = ["laurentiu","ionut","marcel"]
 
function addNames(){
    for(var i=0;i<persContacts.length;i++){
        if(persContacts[i].name==""){
            for(let namee in names) {
                persContacts.push(namee[i])
            }
            console.log(persContacts);
        }else if(persContacts[i].name=="Sami"){
            return persContacts.name+" "+persContacts.phoneNumber+" "+persContacts.eMail;
        }
    }
}
//let s make a login 

function loginForm(){
    let userName = "sami";
    let password = "sami123";
    let nrOfMaxAttpempt = 3;
    let nrOfAttpempts = 0;
 
    while(nrOfAttpempts<nrOfMaxAttpempt){
        var name = prompt("Enter your name: ");
        var passwordd = prompt("Enter your password: ")
 
        if(name==userName && passwordd==password){
            console.log("Hello "+userName);

            let stringifyy =JSON.stringify(persContacts)
            console.log("Contacts available :"+stringifyy);
            break;
        }else{
            console.log("Wrong username or password");
        }
        nrOfAttpempts++;
        console.log("Please try again. Attempts :"+nrOfAttpempts);
        try{
            if(nrOfAttpempts===nrOfMaxAttpempt){
                throw RangeError("Number of attepmts excedeed!")
                break;
            }
        }catch(err){
            console.log(err);
        }
    }
}

 console.log(addNames());

console.log(loginForm());