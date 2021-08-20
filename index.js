"use strict"
function mydestination(){
    let myDestinationChoices = ["Mrytle Beach", "Las Vegas","Washington Dc",
    "Disney World" ]
    let randomTripSelection = Math.floor(Math.random()*myDestinationChoices.length)
        
     let yourDestinationChoice = myDestinationChoices[randomTripSelection]
    return yourDestinationChoice;
}

let finalDestinationChoice = mydestination();
//write a function to select entertainment

function myEntertainment(){

    let myEntertainmentChoices = ['movie tavern','Top Golf','Baseball Game','Mueseum']



    let randomEntertainmentSlection = Math.floor(Math.random()*myEntertainmentChoices.length)
    

}

function myResturant(){

    let myResturantChoices = ['movie tavern','Top Golf','Baseball Game','Mueseum']

for ( let i = 0;i<myEntertainmentChoices.length;i++){

    let randomEntertainmentSlection = Math.floor(Math.random()*myEntertainmentChoices.length)
    document.getElementById('newEntertainment selection').innerHTML = myEntertainmentChoices[randomEntertainmentSlection]
}

}


