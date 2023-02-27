function preloader(){
  document.querySelector(".preloader").classList.add("preloaded");
}
// function navbar_toggler(){
//   document.querySelector(".header_search_box").classList.toggle("active_mobile_search")
// }

$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $(".navbar-collapse").fadeToggle();
    $(".navbar_close_btn").addClass("navbar_close_btn_active");
    $(".header_search_box").addClass("active_mobile_search")
  });
  $(".navbar_close_btn").click(function(){
    
    $(".navbar-collapse").fadeOut();
    $(".navbar_close_btn").removeClass("navbar_close_btn_active");
    $(".header_search_box").removeClass("active_mobile_search");

  })
})
