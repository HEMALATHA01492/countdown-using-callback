let div=document.createElement('div');
div.setAttribute('class','container fs-2 p-5 mb-5 mt-5 bg-success text-center text-bg-dark  justify-content-center');
div.setAttribute('style','width:800px');
div.innerText="Count Down Timer Using Call Back Function";

let head=document.createElement('h1');
head.setAttribute('class','p-5 m-5 bg-primary text-center text-bg-dark border border-dark justify-content-center');
head.setAttribute('style','width:600px');
head.setAttribute('id','Display');
div.appendChild(head);
document.body.appendChild(div);


let timer=10;

let time=document.getElementById('Display');
setTimeout(()=>{
    time.innerHTML=timer--;
    setTimeout(()=>{
        time.innerHTML=timer--;
        setTimeout(()=>{
            time.innerHTML=timer--;
            setTimeout(()=>{
                time.innerHTML=timer--;
                setTimeout(()=>{
                    time.innerHTML=timer--;
                    setTimeout(()=>{
                        time.innerHTML=timer--;
                        setTimeout(()=>{
                            time.innerHTML=timer--;
                            setTimeout(()=>{
                                time.innerHTML=timer--;
                                setTimeout(()=>{
                                    time.innerHTML=timer--;
                                    setTimeout(()=>{
                                        time.innerHTML=timer--;
                                        setTimeout(()=>{
                                            time.innerHTML="HAPPY NEW YEAR";
                                        
                                        },1000)                                  
                                    },1000)                                
                                },1000)                          
                            },1000)                      
                        },1000)                    
                    },1000)                
                },1000)            
            },1000)
        },1000)
    },1000)
},1000)