const person = {
    persName : 'Sami Bumb',
    age : 21,
    located : {
        country : 'Romania',
        county : 'Cluj',
        city : 'Cluj-Napoca'
    },
    hobbies : ['reading','singing','sport'],

}

const persons = [
    {
        fullName : "Liviu Dragnea",
        address : "Jilava",
        phoneNumber : "07xxxxxxxx",
        email : "liviu.dragnea@jilava.com",
        job : function whatHeDoes(){
            return persons[0].fullName+" washes the floor";
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



//JSON format
const persJSON=JSON.stringify(persons);

console.log(persJSON);