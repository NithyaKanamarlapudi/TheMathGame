player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");


document.getElementById("player_1name").innerHTML=player1name+":";
document.getElementById("player_2name").innerHTML=player2name+":";

var Answerturn=player1name;
var Questionturn=player2name;

player_1score=0;
player_2score=0;

document.getElementById("player1score").innerHTML=player_1score;
document.getElementById("player2score").innerHTML=player_2score;

document.getElementById("player_question").innerHTML="Question Turn: "+player1name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2name;
var number1;
var number2;
function send()
{
    number1= document.getElementById("word").value;
    number2=document.getElementById("word2").value;
    questionnumber = "<h4 id='word_display'> Q. "+number1+" * "+number2+"</h4>";
    inputbox = "<br> Answer : <input type='text' id='inputcheckbox'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionnumber + inputbox + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
function check(){
var answer=number1*number2;
var player_answer=document.getElementById("inputcheckbox").value;
if(answer==player_answer){
    if (Answerturn == "player1")
        {
            player_1score = player_1score +1;
            document.getElementById("player1score").innerHTML = player_1score;
        }
        else
        {
            player_2score = player_2score +1;
            document.getElementById("player2score").innerHTML = player_2score;
        }
    }
    if(Answerturn == "player1")
    {
        Answerturn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn :" + player2name;
    }
    else
    {
        Answerturn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn :" + player1name;
    }
    if(Questionturn == "player1")
    {
        Questionturn= "player2";
        document.getElementById("player_question").innerHTML = "Question turn :" + player2name;
    }
    else
    {
        Questionturn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn :" + player1name;
    }
}
