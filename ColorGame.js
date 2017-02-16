var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var great = document.querySelector("#Great");
var title = document.querySelector("#title");
var great = document.querySelector("#Great");

var colors = [];


init();

function init(){
	setup();
	setcolortogo();
	reset();
}




function setcolortogo(){
	
	colors = colorchange();
	setsquare();
	checkColor = answer();
	clickbutton();
}




function reset(){
	great.addEventListener("click",function(){
	  setup();
	  setcolortogo();
});

}




function randomcolors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

	return "rgb( " + r + ", " + g + ", " + b + ")" ;
}

function setup(){

title.style.background = "rgb( 35, 35, 35)";
}


function colorchange(){
var colors = []
	//repeat num times
	for(var i = 0; i < 25; i++){
		//get random color and push into arr
		colors.push(randomcolors())
	}
	//return that array
	return colors ;
}



function setsquare(){
for(var i = 0;i < square.length;i++){
    square[i].style.background = colors[i] ;
   }//   -----for-----    
}



function clickbutton(){
for(var i = 0;i < square.length;i++){
    square[i].addEventListener("click",function(){
        
        var clickColor = this.style.background;

        // alert(checkColor);
        // alert(clickColor);

        if(checkColor===clickColor){
        	
        	for(var i = 0;i < square.length;i++){
        		square[i].style.background = checkColor;
        	}
        	
        	title.style.background = checkColor;
            colorDisplay.textContent = "Correct";

       }else{
        	this.style.background = "rgb( 35, 35, 35)";
        }
        
    }) ;

  }//   -----for-----    
}




function answer(){
// 放這是因為有順序問題
var i = Math.floor(Math.random()*square.length);
var checkColor = square[i].style.background;
colorDisplay.textContent = checkColor;
   return checkColor;
}




