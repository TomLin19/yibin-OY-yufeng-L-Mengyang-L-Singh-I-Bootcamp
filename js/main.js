
window.onload = function(){
    window.setInterval("scrollImg()", 3000);
    }
    var i=1;
    function scrollImg(){
    var imgs = document.getElementById("groupImg");
    imgs.style = "left:" + (i * -380) +"px";
    if(i==2){
    i=0;
    }else{
    i++
    }}

    (function(){
        "use strict";
        
        console.log("fired");
    
        var button = document.querySelector("#button");
        var burgerCon = document.querySelector("#burgerCon");
    
        function hamburgerMenu() {
            burgerCon.classList.toggle("slideToggle");
            button.classList.toggle("expanded");
        }
    
        button.addEventListener("click", hamburgerMenu, false);
            
    })();
    
    function Show(){
        document.getElementById('shade').classList.remove('hide');
        document.getElementById('modal').classList.remove('hide');
    }
     function Hide(){
        document.getElementById('shade').classList.add('hide');
        document.getElementById('modal').classList.add('hide');
    }