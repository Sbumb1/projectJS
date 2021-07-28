const person = {
    persName : 'Sami Bumb',
    age : 23,
    located : {
        country : 'Romania',
        county : 'Cluj',
        city : 'Cluj-Napoca'
    },
    hobbies : ['reading','singing','sport'],

}

//add new property
Object.defineProperty(person,"job",{value :"somer"});

//change property value
Object.defineProperty(person,"persName",{value : "Samuel Bumb"});

//get all
Object.getOwnPropertyNames(person);

//make a prop read-only
Object.defineProperty(person,"persName",{writable:false});

console.log(person)

const persons = [
    {
        fullName : "Liviu Dragnea",
        address : "Jilava",
        phoneNumber : "07xxxxxxxx",
        email : "liviu.dragnea@jilava.com",
        job :() => {
            return persons[0].fullName+" is free";
        }
    },
    {
        fullName : "Johnny Montana",
        address : {
            city : "Texas",
            country : "Nevada"
        },
        phoneNumber : "0438475829",
        email : "",
        disease : "Covid-19",
        specialTreatment : [
            function medicalCare (){
                console.log(persons[1].fullName+" has "+persons[1].disease)
            }
        ]
    },
    {
        fullName : "",
        address : "",
        phoneNumber : "",
        email : ""
    }    
]

console.log(persons[0].job());

//JSON format
const persJSON=JSON.stringify(persons);

//console.log(persJSON);