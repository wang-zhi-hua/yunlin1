window.onload=function(){
	var W=document.documentElement.clientWidth;
    var H=document.documentElement.clientHeight;
    var box=document.getElementsByTagName('body');
    box[0].style.width=W+'px';
    box[0].style.height=H+'px';
}