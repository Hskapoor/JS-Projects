let count=0;
// document.getElementById('btn increase').onclick=++count; 

btn2.addEventListener("click",function(e){ 
     
     ++count;
     
value.textContent=count;
});

btn1.addEventListener("click",function(f){ 
     
    --count;
    
value.textContent=count;
});



btn3.addEventListener("click",function(g){ 
     
    count=0;
    
value.textContent=count;
});






