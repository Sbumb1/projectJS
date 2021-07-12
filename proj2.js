class Animal {
 
    constructor(name,age,breed){
       this.name=name;
       this.age=age;
       this.breed=breed;
    }
}
 
function bark(){
    var woofey = new Animal("woofey",4,"dog")
 
    return woofey.name+" "+"is barking at just "+woofey.age+" years.";
}
 
function sleep(sleepHours,maxSleep=8){
 
    var animal = new Animal("mario","","");
 
    console.log(animal.name+" is sleeping "+sleepHours+" hours.");
    
    if(sleepHours<8){
       
        return animal.name+" didn't sleep enough.Go to sleep"
    
    }else if(sleepHours>maxSleep){
       
        return animal.name+" has excedeed sleep hours.";
    }
    
}