const ptag=document.querySelector("#para");
setInterval(function(){
    var dt=new Date();
    ptag.innerText=dt.toLocaleTimeString();
}, 1000);