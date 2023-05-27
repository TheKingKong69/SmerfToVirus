console.log("Index.js loaded")


let clicks = 0;

function add(){
    clicks++;
    document.getElementById("clickcount").innerHTML = 'Clicks ' + clicks
};

