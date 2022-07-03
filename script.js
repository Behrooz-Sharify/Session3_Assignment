document.getElementById('fit').style.display = "none";
document.getElementById('windows').style.display = "none";
document.getElementById('word').style.display = "none";
document.getElementById('powerpoint').style.display = "none";
document.getElementById('excel').style.display = "none";
document.getElementById('network').style.display = "none";
document.getElementById('internet').style.display = "none";

function FIT(evt, FIT){
    document.getElementById('windows').style.display = "none";
    document.getElementById('word').style.display = "none";
    document.getElementById('powerpoint').style.display = "none";
    document.getElementById('excel').style.display = "none";
    document.getElementById('network').style.display = "none";
    document.getElementById('internet').style.display = "none";
    document.getElementById('fit').style.display = 'block'
}

function WINDOWS(evt, FIT){
    document.getElementById('fit').style.display = "none";
    document.getElementById('word').style.display = "none";
    document.getElementById('powerpoint').style.display = "none";
    document.getElementById('excel').style.display = "none";
    document.getElementById('network').style.display = "none";
    document.getElementById('internet').style.display = "none";
    document.getElementById('windows').style.display = 'block'
}

function WORD(evt, WORD){
    document.getElementById('fit').style.display = "none";
    document.getElementById('word').style.display = "block";
    document.getElementById('powerpoint').style.display = "none";
    document.getElementById('excel').style.display = "none";
    document.getElementById('network').style.display = "none";
    document.getElementById('internet').style.display = "none";
    document.getElementById('windows').style.display = "none";
}

function POWERPOINT(evt, POWERPOINT){
    document.getElementById('fit').style.display = "none";
    document.getElementById('word').style.display = "none";
    document.getElementById('powerpoint').style.display = "block";
    document.getElementById('excel').style.display = "none";
    document.getElementById('network').style.display = "none";
    document.getElementById('internet').style.display = "none";
    document.getElementById('windows').style.display = "none";
}

function EXCEL(evt, EXCEL){
    document.getElementById('fit').style.display = "none";
    document.getElementById('word').style.display = "none";
    document.getElementById('powerpoint').style.display = "none";
    document.getElementById('excel').style.display = "block";
    document.getElementById('network').style.display = "none";
    document.getElementById('internet').style.display = "none";
    document.getElementById('windows').style.display = "none";
}

function NETWORK(evt, NETWORK){
    document.getElementById('fit').style.display = "none";
    document.getElementById('word').style.display = "none";
    document.getElementById('powerpoint').style.display = "none";
    document.getElementById('excel').style.display = "none";
    document.getElementById('network').style.display = "block";
    document.getElementById('internet').style.display = "none";
    document.getElementById('windows').style.display = "none";
}

function INTERNET(evt, INTERNET){
    document.getElementById('fit').style.display = "none";
    document.getElementById('word').style.display = "none";
    document.getElementById('powerpoint').style.display = "none";
    document.getElementById('excel').style.display = "none";
    document.getElementById('network').style.display = "none";
    document.getElementById('internet').style.display = "block";
    document.getElementById('windows').style.display = "none";
}