$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

window.addEventListener("scroll",function(){
	     var header = document.querySelector("header");
		 header.classList.toggle("sticky",window.scrollY > 0);
		 })
      $(".hover").mouseleave(
          function () {
           $(this).removeClass("hover");
         }
        );