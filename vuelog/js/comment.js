var moreand=document.querySelector('.moreand')
var desc=document.querySelector('.desc')
moreand.onclick=function(){
	desc.classList.remove('line-hide')
	desc.style.display='inline-block'
	moreand.style.display='none'
}