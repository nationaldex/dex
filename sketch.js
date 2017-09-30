'use strict'

var pokedex = [
'MissingNo.',
'Bulbasaur', 
'Ivysaur', 
'Venusaur', 
'Charmander', 
'Charmeleon', 
'Charizard', 
'Squirtle', 
'Wartortle', 
'Blastoise'
];

var myFont;
function preload() {
    myFont = loadFont('fonts/Pokemon_GB.ttf');
}

function setup() {
    createCanvas(160, 144);
    background(255,0,0);
    loadImage("images/list-background.png", function(img) {
        image(img, 0, 0);
    });
}

function draw() {
    loadPokemonList();
    showSprite(9);
}

function loadPokemonList(){
    textFont(myFont);
    textSize(4);
    for(var count = 0; count < 10; count++){
        var y = 10 * count + 20;
        text('00'+count,10,y);
        text('   '+pokedex[count].toUpperCase() ,20,y);
    }
}

function showSprite(number){
    loadImage("sprites/yellow/009.png", function(img) {
        image(img, 104, 6);
    });
}