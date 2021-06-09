player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");


document.getElementById("player_1name").innerHTML=player1name+":";
document.getElementById("player_2name").innerHTML=player2name+":";


player_1score=0;
player_2score=0;

document.getElementById("player1score").innerHTML=player_1score;
document.getElementById("player2score").innerHTML=player_2score;

document.getElementById("player_question").innerHTML="Question Turn: "+player1name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2name;