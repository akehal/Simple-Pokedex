const searchName = document.getElementById('pokeName'); // gets pokeName search bar
const searchNum = document.getElementById('pokeNum'); //gets pokeNum search bar
var filteredPokemon = []; // list of pokemon displayed in dom
var list = document.createElement('ul'); // ul of dom

    //checks to see when key is up 
    searchName.addEventListener('keyup', (e) =>{ 
        searchName.addEventListener('keydown', (e)=>{ // when key is down, if previous list was there it clears it everytime a button is pressed
            if(filteredPokemon){
                removeUL(filteredPokemon); // function to clear list
            }
        })
        const searchNameString = e.target.value; // input in the search bar
        searchNameString.toLowerCase(); 
        filteredPokemon = pokemonArray.filter(pokemon =>{ // returns all the names that include input
            return pokemon.name.toLowerCase().includes(searchNameString);
        });
        if(searchNameString.length != 0){ // makes sure when the input is empty, doesnt display whole list of pokemon
            makeUL(filteredPokemon);
        }
    })

    // same functionality as searchName, but for the numbers search bar
    searchNum.addEventListener('keyup', (e) =>{
        searchNum.addEventListener('keydown', (e)=>{
            if(filteredPokemon){
                removeUL(filteredPokemon);
            }
        })
        const searchNumString = e.target.value;
        filteredPokemon = pokemonArray.filter(pokemon =>{
            return pokemon.number.includes(searchNumString);
        });
        if(searchNumString.length != 0){
            makeUL(filteredPokemon);
        }
    })

    // makes and populates the UL in the dom with the filteredpokemon array
    function makeUL(array){
        var divElement = document.createElement('div');
        var containerDiv = document.querySelector('.container');
        containerDiv.appendChild(divElement);
        for(var i = 0; i<array.length; i++){
            var item = document.createElement("li");
            item.appendChild(document.createTextNode("Name:" + array[i].name 
            + ", Number: " + array[i].number 
            + ", Rarity: " + array[i].rarity 
            + ", Type Combo: " + array[i].typeCombo 
            + ", Fast Moves: " + array[i].fastMoves));
            var imageFilter = document.createElement('img');
            imageFilter.src = array[i].Image;
            list.appendChild(imageFilter);

            list.appendChild(item);
        }
        divElement.appendChild(list);
        console.log(list);
        return list;
    }

    // removes the entire UL from DOM 
    function removeUL(array){
        while(list.firstChild) {list.removeChild(list.firstChild)}
    }


var pokemonArray = [
    {name: "Bulbasaur", number: "001", rarity: "4", typeCombo: "Grass / Poison", fastMoves: "Tackle / Vine Whip", Image: "images/1.png"},
    {name: "Ivysaur", number: "002", rarity: "5", typeCombo: "Grass / Poison", fastMoves: "Razor Leaf / Vine Whip", Image: "images/2.png"},
    {name: "Venusaur", number: "003", rarity: "6", typeCombo: "Grass / Poison", fastMoves: "Razor Leaf / Vine Whip", Image: "images/3.png"},
    {name: "Charmander", number: "004", rarity: "4", typeCombo: "Fire", fastMoves: "Ember / Scratch", Image: "images/4.png"},
    {name: "Charmeleon", number: "005", rarity: "5", typeCombo: "Fire", fastMoves: "Ember / Fire Fang", Image: "images5/.png"},
    {name: "Charizard", number: "006", rarity: "6", typeCombo: "Fire / Flying", fastMoves: "Fire Spin / Air Slash", Image: "images/6.png"},
    {name: "Squirtle", number: "007", rarity: "4", typeCombo: "Water", fastMoves: "Tackle / Bubble", Image: "images/7.png"},
    {name: "Wartortle", number: "008", rarity: "5", typeCombo: "Water", fastMoves: "Bite / Water Gun", Image: "images/8.png"},
    {name: "Blastoise", number: "009", rarity: "6", typeCombo: "Water", fastMoves: "Bite / Water Gun", Image: "images/9.png"},
    {name: "Caterpie", number: "010", rarity: "1", typeCombo: "Bug", fastMoves: "Tackle / Bug Bite", Image: "images/10.png"},
    {name: "Metapod", number: "011", rarity: "3", typeCombo: "Bug", fastMoves: "Tackle / Bug Bite", Image: "images/11.png"},
    {name: "Butterfree", number: "012", rarity: "4", typeCombo: "Bug / Flying", fastMoves: "Struggle Bug / Confusion", Image: "images/12.png"},
    {name: "Weedle", number: "013", rarity: "1", typeCombo: "Bug / Poison", fastMoves: "Bug Bite / Poison Sting", Image: "images/13.png"},
    {name: "Kakuna", number: "014", rarity: "3", typeCombo: "Bug / Poison", fastMoves: "Bug Bite / Poison Sting", Image: "images/14.png"},
    {name: "Beedrill", number: "015", rarity: "4", typeCombo: "Bug / Poison", fastMoves: "Infestation / Poison Jab", Image: "images/15.png"},
    {name: "Pidgey", number: "016", rarity: "1", typeCombo: "Normal / Flying", fastMoves: "Tackle / Quick Attack", Image: "images/16.png"},
    {name: "Pidgeotto", number: "017", rarity: "3", typeCombo: "Normal / Flying", fastMoves: "Wing Attack / Steel Wing", Image: "images/17.png"},
    {name: "Pidgeot", number: "018", rarity: "4", typeCombo: "Normal / Flying", fastMoves: "Air Slash / Steel Wing", Image: "images/18.png"},
    {name: "Rattata", number: "019", rarity: "1", typeCombo: "Normal", fastMoves: "Tackle / Quick Attack", Image: "images/19.png"},
    {name: "Raticate", number: "020", rarity: "4", typeCombo: "Normal", fastMoves: "Bite / Quick Attack", Image: "images/20.png"},
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




//pokemonArray[i].name.toLowerCase() == pokeName.value.toLowerCase() || 






