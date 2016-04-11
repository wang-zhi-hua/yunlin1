window.onload=function(){
	var W=document.documentElement.clientWidth;
    var H=document.documentElement.clientHeight;
    var box=document.getElementsByTagName('body');
    box[0].style.width=W+'px';
    box[0].style.height=H+'px';
	var zhifu=document.getElementsByClassName('zhifu')[0];
	var wancheng=document.getElementsByClassName('wancheng')[0];
    zhifu.style.lineHeight=zhifu.offsetHeight+'px';
    wancheng.style.lineHeight=wancheng.offsetHeight+'px';
}