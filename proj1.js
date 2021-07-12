let arr = [1,'sami',2];
 
console.log(arr[1]+" "+"is lazy");
 
for(var i=0;i<arr.length;i++){
    if(i===0){
        return "Is"+" "+arr[0];
    }else if(i===1){
        return arr[1];
    }else if(i===2){
        return Is+" "+arr[2]
    }else if(i!==0 ||i!==1||i!==2){
        throw Error("No element found!")
    }
    return arr[0]+"."+" "+arr[1]+" is numeber "+arr[2];
}
 
let contacts = {
    
    contact1 :{"name" : "Sami","phoneNumber" : "0723479846","eMail" : "bmb.sami@yahoo.com"},
    contact2 :{"name" : "","" : "","" : ""},
    contact3 :{"name" : "","" : "","" : ""},
    contact4 :{"name" : "","" : "","" : ""},
    
    
};
 
const names = {
    
};
 
for(var i=0;i<contacts.length;i++){
    if(contacts[i].name===""){
        for(var namee in names){
            contacts.push(namee[i])
        }
    }else if(contacts[i].name==="Sami"){
        return contact1.name+" "+contact1.phoneNumber+" "+contact1.eMail;
    }
}
 
//let s make a login 

function loginForm(){
    var userName = "sami";
    var password = "sami123",
    var nrOfMaxAttpempt = 3;
    var nrOfAttpempts = 0;
 
    while(nrOfAttpempts<nrOfMaxAttpempt){
        var name = window.prompt("Enter your name: ");
        var passwordd = window.prompt("Enter your password: ")
 
        if(name===userName && passwordd===password){
            console.log("Hello "+userName);
        }else{
            console.log("Wrong username or password");
        }
        nrOfAttpempts++;
 
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