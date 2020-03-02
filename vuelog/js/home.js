
var left=document.querySelectorAll(".left");
var b=document.querySelectorAll('.left span b')
var h3=document.querySelectorAll('.left h3')
var hoverimgbox01=document.querySelector('.hoverimgbox01')
var hoverbox01=document.querySelector('#hoverbox01')
var hoverbox02=document.querySelector('#hoverbox02')
var hoverimgbox02=document.querySelector('.hoverimgbox02')
var boxcontentUl01=document.querySelector('.boxcontentUl01')
var round=document.querySelector(".round")
var join=document.querySelector(".join")

for(let i=0;i<left.length;i++){
	
	left[i].onmouseover=function(){
		b[i].style.display='block'
		h3[i].style.fontWeight='bold';
		left[i].onmouseleave=function(){
		b[i].style.display='none'
		h3[i].style.fontWeight='lighter';	
	}
	}
}

round.onclick=function(){
	window.location.href = './dongtai.html';
	
}


//hoverimgbox01.onclick=function(){
//	hoverimgbox01.src='img/向上.png'
//	hoverbox01.style.visibility='visible'
//	hoverbox01.onmouseleave=function(){
//		hoverimgbox01.src='img/向下.png'
//		hoverbox01.style.visibility='hidden'
//	}
//	
//
//}
//hoverimgbox02.onclick=function(){
//	hoverimgbox02.src='img/向上.png'
//	hoverbox02.style.visibility='visible'
//	hoverbox02.onmouseleave=function(){
//		hoverimgbox02.src='img/向下.png'
//		hoverbox02.style.visibility='hidden'
//	}
//	
//
//}


