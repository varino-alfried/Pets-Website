$(function()
{
    /*Start button up*/
    var buttonUp = $(".button-up");
      $(window).scroll(function() 
      { 
        if($(this).scrollTop() >= 100) {
          buttonUp.show();
        } else {
          buttonUp.hide();
        }

      });
      buttonUp.click(function() {
          $('html,body').animate({ 
            scrollTop : 0 
          }, 600);
        });
    /*End button up*/
});


