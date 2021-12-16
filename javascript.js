var content = document.getElementById("box");
var btn = document.getElementById("button1");
btn.addEventListener("click",function(){
    var width1 = content.offsetWidth
    content.style.width= (width1+75)+"px";
});
btn.addEventListener("click",function(){
    var height1 = content.offsetHeight
    content.style.height= (height1+75)+"px";
});

document.getElementById("button2").addEventListener("click",function(){
    document.getElementById("box").style.backgroundColor = "Blue";
});

var element = document.getElementById("box");
var btn = document.getElementById("button3");
btn.addEventListener("click",function(){
    element.style.opacity = ".5"
    element.style.filter = 'alpha(opacity=50)'; // IE fallback
});

document.getElementById("button4").addEventListener("click",function(){
    document.getElementById("box").style.backgroundColor = "orchid";
});
document.getElementById("button4").addEventListener("click",function(){
    document.getElementById("box").style.height = "150px";
});
document.getElementById("button4").addEventListener("click",function(){
    document.getElementById("box").style.width = "150px";
});
document.getElementById("button4").addEventListener("click",function(){
    document.getElementById("box").style.opacity ="1";
});
document.getElementById("button4").addEventListener("click",function(){
    document.getElementById("box").style.filter = 'alpha(opacity=100'; // IE fallback
});
