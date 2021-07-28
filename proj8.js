//Object basics 1

let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
    
  var catName = cat["name"];
  console.log(catName);

  cat.greeting();

  cat["color"] = "black";

  console.log(cat);


  console.log("\n---Object basics 2---");

  const myBand = {
      name : "band1",
      nationality : "romanian",
      genre : "reggae",
      members : 7,
      formed : 1965,
      split : false,
      albums : [{
          name : "album1",
          released : 1970
        },
        {
           name : "album2",
           released :1990
        }
        ]
  }

  let bandInfo = `${myBand.name} is `+myBand.nationality+" since 1965." + myBand.name+ " has "+myBand.members+" members and still runs."
  +"It has 2 albums."+ myBand.albums[0]["name"] +" appeared in "+myBand.albums[0]["released"]+"."

  console.log(bandInfo)


  console.log("\n<<<Object basics 3>>>")

  //using this keyword in method to take the properties of created object
  let mouse = {
    name : 'Bernard',
    breed : 'Cymric',
    color : 'grey',
    greeting: function() {
      console.log("\"Hello\",said "+this.name+" the "+this.breed);
    }
  }

  let mouse2 = {
    name : 'Bia',
    breed : 'Hamster',
    color : 'brown',
    greeting: mouse.greeting
    }
  

  mouse.greeting();

  mouse2.greeting();