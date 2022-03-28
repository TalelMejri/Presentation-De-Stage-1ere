/*****SNE****/
let btn_sne=document.querySelector("#read1");
let sne=document.querySelector("#sne");
let anuller=document.querySelector("#anulle");
 btn_sne.addEventListener("click",()=>{
     sne.style.display="block";
 })
 anuller.addEventListener("click",()=>{
     sne.style.display="none";
 })
 /**reseaux********/
 let anuller1=document.querySelector("#anulle1");
 let btn_res=document.querySelector("#read2");
 let reseaux=document.querySelector("#reseaux");
 btn_res.addEventListener("click",()=>{
    reseaux.style.display="block";
})
anuller1.addEventListener("click",()=>{
    reseaux.style.display="none";
})
/***app************/
 let btn_app=document.querySelector("#read3");
 let app=document.querySelector("#app");
 let anuller2=document.querySelector("#anulle2");
 btn_app.addEventListener("click",()=>{
    app.style.display="block";
})
anuller2.addEventListener("click",()=>{
    app.style.display="none";
})
/*** reseaux  */
const accor=document.querySelectorAll(".accordion-item-header");
accor.forEach(accor =>{
    accor.addEventListener("click",event =>{
        accor.classList.toggle("active"); 
        const accorbody=accor.nextElementSibling;
        if(accor.classList.contains("active")){
            accorbody.style.maxHeight=accorbody.scrollHeight + "px";
        } 
        else{
            accorbody.style.maxHeight=0;
        }
    });
});
let interface1=document.querySelector(".interface");
let interfcae2=document.querySelector(".interface2");
let plus=document.querySelector("#plus");
    
  plus.addEventListener("click",()=>{
      interface1.style.display="none";
      interfcae2.style.opacity="1";
      plus.style.display="none";
  })

