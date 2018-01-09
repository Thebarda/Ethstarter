$(document).ready(function () {
   $('.carousel').carousel({
       duration: 150,
       dist: 0,
       padding: 4000
   });
   setInterval(function(){
       $('.carousel').carousel('next');
   }, 5000);
   $("#menu").css("margin-top", "-5rem");
   $("#menu").css("position", "absolute");
   $("footer").css("margin-top", "-5rem");
});