const searchNum = document.getElementById('pokeNum');
const searchName = document.getElementById('pokeName');
var a, i, txtvalue;
searchName.value.toLowerCase();
searchNum.value.toLowerCase();
ul = document.getElementById("pokeUL");
li = document.getElementsByTagName('li');

for(i = 0l i < li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    txtvalue
}

search.addEventListener("input", (e) =>{
    let value = e.target.value;
    if(value && value.trim().length >0){
        value = value.trim().toLowerCase();
        setList(pokemonArray.filter(pokemon=>{
            return pokemon.name.includes(value)
        }))
    }else{

    }
})

function setList(results){
    for(const pokemon of results){
        const listItem = document.createElement('li')
        listItem.classList.add('list-item');
        const text = document.createTextNode(pokemon.name);
        listItem.appendChild(text);
        list.appendChild(listItem);
    }
}


var pokemonArray = [
    {name: "Bulbasaur", number: "001", rarity: "4", typeCombo: "Grass / Poison", fastMoves: "Tackle / Vine Whip"},
    {name: "Ivysaur", number: "002", rarity: "5", typeCombo: "Grass / Poison", fastMoves: "Razor Leaf / Vine Whip"},
    {name: "Venusaur", number: "003", rarity: "6", typeCombo: "Grass / Poison", fastMoves: "Razor Leaf / Vine Whip"},
    {name: "Charmander", number: "004", rarity: "4", typeCombo: "Fire", fastMoves: "Ember / Scratch"},
    {name: "Charmeleon", number: "005", rarity: "5", typeCombo: "Fire", fastMoves: "Ember / Fire Fang"},
    {name: "Charizard", number: "006", rarity: "6", typeCombo: "Fire / Flying", fastMoves: "Fire Spin / Air Slash"},
    {name: "Squirtle", number: "007", rarity: "4", typeCombo: "Water", fastMoves: "Tackle / Bubble"},
    {name: "Wartortle", number: "008", rarity: "5", typeCombo: "Water", fastMoves: "Bite / Water Gun"},
    {name: "Blastoise", number: "009", rarity: "6", typeCombo: "Water", fastMoves: "Bite / Water Gun"},
    {name: "Caterpie", number: "010", rarity: "1", typeCombo: "Bug", fastMoves: "Tackle / Bug Bite"},
    {name: "Metapod", number: "011", rarity: "3", typeCombo: "Bug", fastMoves: "Tackle / Bug Bite"},
    {name: "Butterfree", number: "012", rarity: "4", typeCombo: "Bug / Flying", fastMoves: "Struggle Bug / Confusion"},
    {name: "Weedle", number: "013", rarity: "1", typeCombo: "Bug / Poison", fastMoves: "Bug Bite / Poison Sting"},
    {name: "Kakuna", number: "014", rarity: "3", typeCombo: "Bug / Poison", fastMoves: "Bug Bite / Poison Sting"},
    {name: "Beedrill", number: "015", rarity: "4", typeCombo: "Bug / Poison", fastMoves: "Infestation / Poison Jab"},
    {name: "Pidgey", number: "016", rarity: "1", typeCombo: "Normal / Flying", fastMoves: "Tackle / Quick Attack"},
    {name: "Pidgeotto", number: "017", rarity: "3", typeCombo: "Normal / Flying", fastMoves: "Wing Attack / Steel Wing"},
    {name: "Pidgeot", number: "018", rarity: "4", typeCombo: "Normal / Flying", fastMoves: "Air Slash / Steel Wing"},
    {name: "Rattata", number: "019", rarity: "1", typeCombo: "Normal", fastMoves: "Tackle / Quick Attack"},
    {name: "Raticate", number: "020", rarity: "4", typeCombo: "Normal", fastMoves: "Bite / Quick Attack"},
];

var pokemonArrayDisplay = [];
var counter = 0;
var finalOuput = "" 



function showAlertNum(){ //gets called when user types in a pokemon number
    if(pokeNum.value>0 && pokeNum.value <= 20){
        for(let i in pokemonArray){ //iterates through array and pushes object if object includes the user's input
            if(pokemonArray[i].number.includes(pokeNum.value)){
                pokemonArrayDisplay.push(pokemonArray[i]);
            }
        }
        for(let i in pokemonArrayDisplay){ //iterates through the new array that contains the matches and addes them into one string
            finalOuput += "Name: " + pokemonArrayDisplay[i].name + " | Number: " + pokemonArrayDisplay[i].number + " | Rarity: " + pokemonArrayDisplay[i].rarity + " | Type Combo: " + pokemonArrayDisplay[i].typeCombo + " | Fast Moves: " + pokemonArrayDisplay[i].fastMoves + "\n";
            counter++;
            if(counter==5){ //for maxiumum of 5 outputs
                break;
            }
        
        }
        alert(finalOuput); //outputs an alert box with the first 5 objects that matched
    }
    else{
        alert("The number you have input is not between 1 and 20, please try again!")
    }
    }
    


function showAlertName(){ //gets called when user types in a pokemon name
    for(let i in pokemonArray){ //iterates through array and pushes object if object includes the user's input
        if(pokemonArray[i].name.toLowerCase().includes(pokeName.value.toLowerCase())){
            pokemonArrayDisplay.push(pokemonArray[i]);
        }
    }
    for(let i in pokemonArrayDisplay){ //iterates through the new array that contains the matches and addes them into one string
        finalOuput += "Name: " + pokemonArrayDisplay[i].name + " | Number: " + pokemonArrayDisplay[i].number + " | Rarity: " + pokemonArrayDisplay[i].rarity + " | Type Combo: " + pokemonArrayDisplay[i].typeCombo + " | Fast Moves: " + pokemonArrayDisplay[i].fastMoves + "\n";
        counter++;
        if(counter==5){ //for maxiumum of 5 outputs
            break;
        }
    
    }
    if(finalOuput.length == 0){ //if user enters a string with no matches, will display this
        alert("The input you have given has no matches.");
    }
    else{
        alert(finalOuput); //outputs an alert box with the first 5 objects that matched
    }
}


let divElement = document.createElement('div');
//console.dir(divElement);
let textNode = document.createTextNode("HELLO THIS IS CONTENT");
divElement.appendChild(textNode);
let divContainer = document.querySelector('.container');
divContainer.appendChild(divElement);


//pokemonArray[i].name.toLowerCase() == pokeName.value.toLowerCase() || 






