window.onload=function(){
	var W=document.documentElement.clientWidth;
    var H=document.documentElement.clientHeight;
    var box=document.getElementsByTagName('body');
    box[0].style.width=W+'px';
    box[0].style.height=H+'px';
	var tab1=document.getElementsByClassName('jia')[0];
	var tab2=document.getElementsByClassName('jian')[0];
	var tab3=document.getElementsByClassName('shuliang')[0];
	var zhuce=document.getElementsByClassName('zhuce')[0];
	var denglu=document.getElementsByClassName('denglu')[0];
	tab1.style.lineHeight=tab1.offsetHeight+'px';
	tab2.style.lineHeight=tab1.offsetHeight+'px';
	tab3.style.lineHeight=tab1.offsetHeight+'px';
	zhuce.style.lineHeight=zhuce.offsetHeight+'px';
    denglu.style.lineHeight=denglu.offsetHeight+'px';
    
}