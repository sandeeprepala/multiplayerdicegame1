var randomnumber1 = Math.random();
randomnumber1 = randomnumber1*6+1;
randomnumber1 = Math.floor(randomnumber1);
if (randomnumber1 ==1){
    var img = document.getElementById("img11");
    img.src ="images/dice1.png" 
}
else if(randomnumber1 ==2){
    var img = document.getElementById("img11");
    img.src ="images/dice2.png"
} 
else if(randomnumber1 ==3){
    var img = document.getElementById("img11");
    img.src ="images/dice3.png"
} else if(randomnumber1 ==4){
    var img = document.getElementById("img11");
    img.src ="images/dice4.png"
} else if(randomnumber1 ==5){
    var img = document.getElementById("img11");
    img.src ="images/dice5.png"
} else if(randomnumber1 ==6){
    var img = document.getElementById("img11");
    img.src ="images/dice6.png"
} 
console.log(randomnumber1);
var randomnumber2 = Math.random();
randomnumber2 = randomnumber2*6+1;
randomnumber2 = Math.floor(randomnumber2);
console.log(randomnumber2);
if (randomnumber2 ==1){
    var img = document.getElementById("img22");
    img.src ="images/dice7.png" 
}
else if(randomnumber2 ==2){
    var img = document.getElementById("img22");
    img.src ="images/dice8.png"
} 
else if(randomnumber2 ==3){
    var img = document.getElementById("img22");
    img.src ="images/dice9.png"
} else if(randomnumber2 ==4){
    var img = document.getElementById("img22");
    img.src ="images/dice10.png"
} else if(randomnumber2 ==5){
    var img = document.getElementById("img22");
    img.src ="images/dice11.png"
} else if(randomnumber2 ==6){
    var img = document.getElementById("img22");
    img.src ="images/dice12.png"
} 
var display = document.querySelector("h1").innerHTML;
if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML= "PLAYER 1 WON";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML = " PLAYER 2 WON"
}
else{
    document.querySelector("h1").innerHTML = "DRAW MATCH";
}