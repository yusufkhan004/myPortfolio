var navElement = $(".navbar").offset();
var navtop = navElement.top;
$("document").ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()> navtop-100){
            $('.navbar').css({             
                position: 'fixed',
                top: '100px',
            });
        }else{
            $('.navbar').css({ 
                position: 'absolute',
                top: '100vh'
            });        
            }
    });
});



const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
console.log(sections);
console.log(navLi);




// console.log($(window).scroll());
// console.log(navElement.top);
// console.log(navElement.top - 10);

// console.log(navtop-(navtop*(15/100)));
// console.log($(window).scrollTop());
// console.log(navElement);