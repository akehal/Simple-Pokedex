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

function showAlertNum(){ 
    alert(num.value);
}

function showAlertName(){
    for(let i in pokemonArray){
        if(pokemonArray[i].name == pokeName.value){
            alert("Number: " + pokemonArray[i].number + "   Name: " + pokemonArray[i].name + "   Rarity: " + pokemonArray[i].rarity + "   Type Combo: " + pokemonArray[i].typeCombo + "   Fast Moves: " + pokemonArray[i].fastMoves);

        }
    }
}







