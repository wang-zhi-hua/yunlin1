window.onload=function(){
	var W=document.documentElement.clientWidth;
    var H=document.documentElement.clientHeight;
    var box=document.getElementsByTagName('body');
    box[0].style.width=W+'px';
    box[0].style.height=H+'px';
    var zhuce=document.getElementById('zhuce');
    var denglu=document.getElementById('denglu');
    var jinru=document.getElementById('jinru');
    var mami=document.getElementById('mami');
    zhuce.style.lineHeight=zhuce.offsetHeight+'px';
    denglu.style.lineHeight=denglu.offsetHeight+'px';
    jinru.style.lineHeight=jinru.offsetHeight+'px';
    
}