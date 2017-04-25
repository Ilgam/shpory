/// GOOD ALERT
GoodAlertElements = {};
window.GoodAlert = function (str){
    var d = document;
    var a = GoodAlertElements;
    
    if(a.isShow) return false;
    
    if(!a.c){ 
        setTimeout(function(){
            
                a.c = d.createElement('div');
                a.w = d.createElement('div');
                a.i = d.createElement('div');
                a.m = d.createElement('p');
                a.b = d.createElement('button');
                
                a.c.setAttribute('id', 'GoodAlertConteiner');
                a.w.setAttribute('id', 'GoodAlert');
                a.i.setAttribute('id', 'GoodAlertInner');
                a.m.setAttribute('id', 'GoodAlertMessage');
                a.b.setAttribute('id', 'GoodAlertButton');
                
                a.i.appendChild(a.m);
                a.i.appendChild(a.b);
                
                a.w.appendChild(a.i);
                
                
                a.b.textContent = 'ok';
                
                
                a.b.onclick = a.hide;
                
                a.c.appendChild(a.w);
                d.getElementsByTagName('body')[0].appendChild(a.c);
                
                a.show(str); 
        }, 50);        
    }
    else{
        a.show(str); 
    }  
    a.show = function(message){
       a.m.textContent = message;
       a.c.style.display = 'block'; 
       a.isShow = true;   
       if(typeof GoodAlertOpen === 'function') GoodAlertOpen();
    }
    a.hide = function(){
       a.c.style.display = 'none'; 
       a.isShow = false; 
       if(typeof GoodAlertClose === 'function') GoodAlertClose();      
    }   
}
if (!window._GoodAlert){
    var IELegacy = false;
    if (document.all && !document.querySelector) {
        IELegacy = true;
    }
    if (document.all && document.querySelector && !document.addEventListener) {
        IELegacy = true;
    }    
    if(IELegacy === false){
        window._GoodAlert = window.alert;
        window.alert = window.GoodAlert;
    }
}


/*
GoodAlertClose = function(){
    console.log('close');
}

GoodAlertOpen = function(){
    console.log('open');
}
*/