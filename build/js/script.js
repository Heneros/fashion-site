$(document).ready(function () {

  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      480:{
        items:1
      }
    }
  });

});

$(document).ready(function () {
  $('.carousel').owlCarousel({
    loop:true,
    margin: 30,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
      },
      480:{
        items:2
      },
      680:{
       items: 3
      },
      1024:{
        items: 4
      }
    }
  });
    const iconSearch = document.querySelector('.icons__search');
  const body = document.querySelector('body');

  iconSearch.addEventListener('click', function (event) {
    event.stopPropagation();
    this.classList.add('icons__search--active');
  });

  body.addEventListener('click', function (event) {
    iconSearch.classList.remove('icons__search--active');
  });

});

//filter products

(function(){
  const elm = document.querySelector(".offers");
  const iso = new Isotope(elm, {
      itemSelector: ".offers__element",
      filter: '.all'
  });
  
  const controlls = document.querySelectorAll(".filter__link");
  const activeClass = "filter__item--active";
  
  controlls.forEach(function(control){
      control.addEventListener("click", function(e){
          e.preventDefault();
  
          const filterName = control.getAttribute("data-filter");
  
          controlls.forEach(function(link){
              link.closest(".filter__item").classList.remove(activeClass)
          });
          control.closest(".filter__item").classList.add(activeClass);
  
          iso.arrange({
              filter: `.${filterName}`
          })
      });
  });
  })();
  

  ///smooth transition to anchor links
 $(document).ready(function(){
  $("ul").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 500);
  });
});
