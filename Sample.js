


// $("body").keypress(function(){

//     $("#red").click(function(){
//         $("#redd")[0].play();
//     });
    
//     $("#blue").click(function(){
//         $("#bluee")[0].play();
//     });
    
//     $("#green").click(function(){
//         $("#greenn")[0].play();
//     });
    
//     $("#yellow").click(function(){
//         $("#yelloww")[0].play();
//     });
// });


var arr =["red","blue","green","yellow"];

var Random = [];
var user = [];

var level=0;
var start = false;

$(document).keypress(function(){
    if(!start)
    {
        $("h1").text("Level "+level);
        nextrandom();
        start=true;
    }
});

function nextrandom(){
    user=[];
    level++;

    $("h1").text("Level " + level);

    var randomNumber=Math.floor(Math.random()*4);
    var randomcolor= arr[randomNumber];

    Random.push(randomcolor);

    $("#" + randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(randomcolor);
}


$(".click").click(function(){
    var userclick = $(this).attr("id");
    user.push(userclick);
    sound(userclick);
    Animate(userclick);
    check(user.length - 1);
});

function check(presentLength){
    if(Random[presentLength] === user[presentLength])
    {
        if(Random.length === user.length)
        {
            setTimeout(function () {
             nextrandom();
            }, 1000);
        }
    }
    else{
        sound("wrong");
        $("body").addClass("out");
        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("out");
        }, 200);

        restart();
    }
}


function restart(){
    level=0;
    Random=[];
    start=false;
}


function Animate(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  

function sound(name){
    // var audio=new Audio("Sound/"+name+".mp3");
    // audio.play();
    $("."+name)[0].play();
}









