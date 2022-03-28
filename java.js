let headers=document.querySelectorAll("#headers");
 headers.forEach(head=>{
     head.addEventListener("click",()=>{
         head.classList.toggle("active");
         const item=head.nextElementSibling;
         if(head.classList.contains('active')){
             item.style.maxHeight=item.scrollHeight+"px";
         }
         else{
             item.style.maxHeight=0;
         }

     });
 })
 
 let parag_cfrt=document.querySelector(".cf");
 let logo_cfrt=document.querySelector("#open");
  let img=document.querySelector(".annuler");
  logo_cfrt.addEventListener("click",()=>{
      img.style.display="block";
      parag_cfrt.style.display="block";
   })

   img.addEventListener("click",()=>{
    img.style.display="none";
    parag_cfrt.style.display="none";
   })
 
   function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  window.onload = fadeOut();

  

   