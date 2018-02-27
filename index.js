document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("main").style.display = "block";
    document.getElementById("head").style.opacity = "1";
    document.getElementById("body").style.opacity = "0";
    document.getElementById("leg").style.opacity = "0";
    document.getElementById("foot").style.opacity = "0";
});

document.getElementById("bg2").addEventListener("click", function(){
    document.getElementById("main").style.display = "block";
    document.getElementById("head").style.opacity = "0";
    document.getElementById("body").style.opacity = "1";
    document.getElementById("leg").style.opacity = "0";
    document.getElementById("foot").style.opacity = "0";
  
});

document.getElementById("bg3").addEventListener("click", function(){
    document.getElementById("main").style.display = "block";
    document.getElementById("head").style.opacity = "0";
    document.getElementById("body").style.opacity = "0";
    document.getElementById("leg").style.opacity = "1";
    document.getElementById("foot").style.opacity = "0";
 
});

document.getElementById("bg4").addEventListener("click", function(){
    document.getElementById("main").style.display = "block";
    document.getElementById("head").style.opacity = "0";
    document.getElementById("body").style.opacity = "0";
    document.getElementById("leg").style.opacity = "0";
    document.getElementById("foot").style.opacity = "1";
  
});
