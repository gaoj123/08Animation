var clearButton=document.getElementById("clear")
var stopButton=document.getElementById("stop")
var dvdButton=document.getElementById("dvd")
var growShrinkButton=document.getElementById("growShrink")
var slate=document.getElementById("screen");

var timerId;

var stopIt=function(){
    clearInterval(timerId)
}

var animateCircle=function(){
    var r=0;
    var tooBig=false;
    var tooSmall=false;
    //window.cancelAnimationFrame(requestID);
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
	    //ctx.arc(250,250,r,0,2*Math.PI);
	    r++;
	}
	else{
	    r--;
	    c.setAttribute("cx",250);
	    c.setAttribute("cy",250);
	    c.setAttribute("r",r);
	    //ctx.arc(250,250,r,0,2*Math.PI);
	    if(r==0){
		tooBig=false;
	    }
	}
	//var c=document.createElementNS("http://www.w3.org/2000/svg", "circle");
	//c.setAttribute("cx",250);
	//c.setAttribute("cy",250);
	//c.setAttribute("r",r);
	c.setAttribute("fill","blue");
	c.setAttribute("stroke","black");
	//timerId=setInterval(circle,1000);
    };
    timerId=setInterval(circle,10);
    //circle();
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
