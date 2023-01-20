function love_generation(){
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
var love1 = prompt("Who are the first potential Lover?");
var firstc1 = love1.slice(0,1)
var love2 = prompt("And who are the second?")
var firstc2 = love2.slice(0,1)
var Lukas = false;
var Lukas = id = Lukas;
var Theodor = false;
var Anders = false;

if (love1 === "Lukas" || love2 === "Lukas" || love1 === "lukas" || love2 === "lukas" && Anders === false && Theodor === false) {
    Lukas = true;
    alert ("Between Percentage The Match" + firstc1.toUpperCase(0,1) + love1.slice(1,50) + " + " + firstc2.toUpperCase(0,1) + love2.slice(1,50) + " = " + -7432,638 + " % " + " ahigyohobalishi");
} if (love1 === "Theodor" || love2 === "Theodor" || love1 === "theodor" || love2 === "theodor" && Lukas === false && Anders === false) {
    Theodor = true;
    alert ("The Match Percentage Between " + firstc1.toUpperCase(0,1) + love1.slice(1,50) + " + " + firstc2.toUpperCase(0,1) + love2.slice(1,50) + " = " + 0.69 + " % " + " No bitches?");
} if (love1 === "Anders" || love2 === "Anders" || love1 === "anders" || love2 === "anders" && Lukas === false && Theodor === false) {
    Anders = true;
    alert ("The Match Percentage Between " + firstc1.toUpperCase(0,1) + love1.slice(1,50) + " + " + firstc2.toUpperCase(0,1) + love2.slice(1,50) + " = " + 100 + " % " + " Literal Love Perfection");
}



if (Lukas === false && Anders === false && Theodor === false) {
    if (n > 70){
        alert ("The Match Percentage Between " + firstc1.toUpperCase(0,1) + love1.slice(1,50) + " + " + firstc2.toUpperCase(0,1) + love2.slice(1,50) + " = " + n + " % " + "ITS A MATCH MADE IN HEAVEN!");
    } if (n > 10 && n < 40) {
        alert ("The Match Percentage Between " + firstc1.toUpperCase(0,1) + love1.slice(1,50) + " + " + firstc2.toUpperCase(0,1) + love2.slice(1,50) + " = " + n + " % " + " Now this is awkward");
    } if (n > 40 && n < 50) {
        alert ("The Match Percentage Between " + firstc1.toUpperCase(0,1) + love1.slice(1,50) + " + " + firstc2.toUpperCase(0,1) + love2.slice(1,50) + " = " + n + " % " + " You should Stay friends");
    } if (n < 70 && n > 50) {
        alert ("The Match Percentage Between " + firstc1.toUpperCase(0,1) + love1.slice(1,50) + " + " + firstc2.toUpperCase(0,1) + love2.slice(1,50) + " = " + n + " % " + " Potential Lovebirds?");
    } if (n < 10) {
        alert ("The Match Percentage Between " + firstc1.toUpperCase(0,1) + love1.slice(1,50) + " + " + firstc2.toUpperCase(0,1) + love2.slice(1,50) + " = " + n + " % " + " Stay away from each other");
    }
}
}
