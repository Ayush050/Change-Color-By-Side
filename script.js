
var box = document.querySelector('#card');

box.addEventListener("mousemove", function(details) {

   var rectanglelocation=box.getBoundingClientRect(); 

   var  insiderectangle=details.clientX-rectanglelocation.left; 
   
    if(insiderectangle<rectanglelocation.width/2){
       var redColor=gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderectangle); 
       gsap.to(box,{backgroundColor:"rgb("+redColor+",0,0)"});
   } 
   else {
    var blueColor=gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,insiderectangle); 
    gsap.to(box,{backgroundColor:`rgb(0,0,${blueColor})`});
   }
}); 

box.addEventListener("mouseleave",function(){
  gsap.to(box,{
    backgroundColor:"white",
  });
});

