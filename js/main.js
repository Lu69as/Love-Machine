function love_generation() {
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n) + 1;
    var name1 = prompt("Who is the first potential Lover?");
    var name2 = prompt("And who is the second?");

    var love1 = name1.toLowerCase()
    var love2 = name2.toLowerCase()
    
    var firstc1 = love1.slice(0, 1);
    var firstc2 = love2.slice(0, 1);

    if (love1 === "lukas" || love2 === "lukas") {
        alert("Downsyndrome detected." + "Between Percentage Of The Match " + name1 + " + " + name2 + " = " + "-7432 638,00000000127" + " ¤ " + " Boobadibie Sjjoopphahaha");
        alert("ALERT!! ERROR; EIIOU#");
        prompt("WHAT IS NEM`'?£");
        alert("Exiting Software");
        window.close();
    } 
    else if (love1 === "theodor" || love2 === "theodor") {
        alert("The Match Percentage Between " + name1 + " + " + name2 + " = " + 0.69 + " % " + " No bitches?");
        alert("You may now leave the site");
        alert("You didnt leave");
        alert("You couldnt have seen this if you left!");
        alert("You dont have a say in this!");
        alert("You dont think I can close the tab?");
        alert("I can actually!, \n But if you answer this question correct, you may stay.");
        var nineplusten = prompt("What is 9 + 10?");
        if (nineplusten === "21") {

            alert("Fine! You can stay for this time...");
        } else if (nineplusten === "19") {
            alert("WRONG!!!");
            alert("19 is completely wrong! Bad Math!");
            window.close();
        } else {
            alert("Ha! Idiot");
            alert("Didnt even get close lol!")
            alert("Get the F*ck of my site");
            window.close();
        }
    } 
    else if (love1 === "anders" || love2 === "anders") {
        alert("The Match Percentage Between " + name1 + " + " + name2 + " = " + 100 + " % " + " Literal Love Perfection");
    } 
    else if (love1 === "albert" || love2 === "albert") {
        var firstc1 = love1.slice(0, 1);
        var firstc2 = love2.slice(0, 1);
        alert("The Match Percentage Between " + name1 + " + " + name2 + " = " + 0 + " % " + " Its allways gonna be zero, sorry Albert");
        window.close();

    } 
    else {
        var mp = "The Match Percentage Between " + name1 + " + " + name2 + " = " + n + " % "
        if (n > 70) {
            alert(mp + "ITS A MATCH MADE IN HEAVEN!");
        }
        else if (n > 50) {
            alert(mp + " Potential Lovebirds?");
        }
        else if (n > 40) {
            alert(mp + " You should Stay friends");
        }
        else if (n > 20) {
            alert(mp + " Now this is awkward");
        } 
        else if (n < 10) {
            alert(mp + " Stay away from each other");
        }
    }
}