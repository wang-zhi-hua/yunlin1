window.onload=function(){
	var W=document.documentElement.clientWidth;
    var H=document.documentElement.clientHeight;
    var box=document.getElementsByTagName('body');
    box[0].style.width=W+'px';
    box[0].style.height=H+'px';
	var tabs=document.getElementById('tabs');
	var tab=document.getElementsByClassName('tab');
	for(var i=0;i<tab.length;i++){
		tab[i].style.lineHeight=tabs.offsetHeight+'px';
	}
	//轮播
    var img=$(".lunbotu");
	var anniu=$(".anniu");
	var num=1;
	function move(){
	    if(num==3){
	      num=0;
	    }
	    for(var i=0;i<img.length;i++){
	      img[i].style.zIndex=2;
	      anniu[i].style.background="#ccc";
	    }
	    img[num].style.zIndex=3;
	    anniu[num].style.background="#FF3C3C";
	    num++;
	}
	var t=setInterval(move,2000);
	for(var i=0;i<anniu.length;i++){
	    anniu[i].index=i;
	    anniu[i].onmouseover=function(){
	      clearInterval(t);
	      for(var j=0;j<anniu.length;j++){
	        img[j].style.zIndex=2;
	        anniu[j].style.background="#ccc";
	      }
	        img[this.index].style.zIndex=3;
	       this.style.background="#ff3c3c";
	    }
	    anniu[i].onmouseout=function(){
	      t=setInterval(move,2000);
	      num=this.index+1;
	    }
	}
}