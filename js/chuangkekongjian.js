window.onload=function(){
	var W=document.documentElement.clientWidth;
    var H=document.documentElement.clientHeight;
    var box=document.getElementsByTagName('body');
    box[0].style.width=W+'px';
    box[0].style.height=H+'px';
	var leiji=document.getElementsByClassName('leiji')[0];
	var jine=document.getElementsByClassName('jine')[0];
	var xiaoshoues2=document.getElementsByClassName('xiaoshoues2');
    leiji.style.lineHeight=leiji.offsetHeight+'px';
    jine.style.lineHeight=jine.offsetHeight+'px';
    for(var i=0;i<xiaoshoues2.length;i++){
    	xiaoshoues2[i].style.lineHeight=xiaoshoues2[0].offsetHeight+'px';
    }
    
}