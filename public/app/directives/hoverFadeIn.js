angular.module('prosults')
.directive('hover', () => {
  return {
    restrict: 'A',
    link: (scope, elem, attrs) => {

      $(window).scroll(() => {
        let scrollPosition = $(window).scrollTop();

        if (scrollPosition > 379) {
          $('.side-services').css('background', 'white');
        } else {
          $('.side-services').css('background', 'transparent');
        }

        if (scrollPosition > 947) {
          $('.side-services').css('background', 'transparent');
          $('.side-about').css('background', 'white');
        } else {
          $('.side-about').css('background', 'transparent');
        }

        if (scrollPosition > 1539) {
          $('.side-about').css('background', 'transparent');
          $('.side-contact').css('background', 'white');
        } else {
          $('.side-contact').css('background', 'transparent');
        }

      })

      //services
      $('.side-services').mouseenter(() => {
        $('.slide-services').fadeIn();
      })
      $('.side-services').mouseleave(() => {
        $('.slide-services').fadeOut();
      })
      //about
      $('.side-about').mouseenter(() => {
        $('.slide-about').fadeIn();
      })
      $('.side-about').mouseleave(() => {
        $('.slide-about').fadeOut();
      })
      //contact
      $('.side-contact').mouseenter(() => {
        $('.slide-contact').fadeIn();
      })
      $('.side-contact').mouseleave(() => {
        $('.slide-contact').fadeOut();
      })


    }
  }
})
