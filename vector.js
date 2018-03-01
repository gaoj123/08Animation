var clearButton=document.getElementById("clear")
var stopButton=document.getElementById("stop")
var dvdButton=document.getElementById("dvd")
var growShrinkButton=document.getElementById("growShrink")
var slate=document.getElementById("screen");

var timerId;

var stopIt=function(){
    clearInterval(timerId)
}

var animateDVD=function(){
    var x=200;
    var y=225;
    var randomOne=Math.floor(Math.random()*2);
    var randomTwo=Math.floor(Math.random()*2);
    var ranX=Math.floor(Math.random()*7)+1;
    var ranY=Math.floor(Math.random()*7)+1;
    var moveRight=true;
    var moveDown=true;
    if(randomOne==1){
	moveRight=true;
    }
    else{
	moveRight=false;
    }
    if(randomTwo==1){
	moveDown=true;
    }
    else{
	moveDown=false;
    }
    var rect=function(){
	clear();
	var r=document.createElementNS("http://www.w3.org/2000/svg", "rect");
	slate.appendChild(r);
	if(x>=400){
	    moveRight=false;
	}
	if(x<=0){
	    moveRight=true;
	}
	if(y>=450){
	    moveDown=false;
	}
	if(y<=0){
	    moveDown=true;
	}
	if(moveRight){
	    x+=ranX;
	}
	else{
	    x-=ranX;
	}
	if(moveDown){
	    y+=ranY;
	}
	else{
	    y-=ranY;
	}
	r.setAttribute("x",x);
	r.setAttribute("y",y);
	r.setAttribute("width",100);
	r.setAttribute("height",50);
	r.setAttribute("fill","lightsteelblue");
    };
    timerId=setInterval(rect,10);
};

var animateCircle=function(){
    var r=0;
    var tooBig=false;
    var tooSmall=false;
    var circle=function(){
	clear();
	var c=document.createElementNS("http://www.w3.org/2000/svg", "circle");
	slate.appendChild(c);
	if(r==250){
	    tooBig=true;
	}
	if(!tooBig){
	    c.setAttribute("cx",250);
	    c.setAttribute("cy",250);
	    c.setAttribute("r",r);
	    r++;
	}
	else{
	    r--;
	    c.setAttribute("cx",250);
	    c.setAttribute("cy",250);
	    c.setAttribute("r",r);
	    if(r==0){
		tooBig=false;
	    }
	}
	c.setAttribute("fill","blue");
	c.setAttribute("stroke","black");
    };
    timerId=setInterval(circle,10);
};

var clear=function(e){
    while(slate.hasChildNodes()){
	slate.removeChild(slate.childNodes[0]);
    }
}

clearButton.addEventListener("click",clear);
growShrinkButton.addEventListener("click", animateCircle);
dvdButton.addEventListener("click", animateDVD);
stopButton.addEventListener("click", stopIt);
