angular.module('prosults')
.directive('words', () => {
  return {
    restrict: 'A',
    link: (scope, elem, attrs) => {
      // console.log(elem);
      // $('.pro').on('mouseenter', () => {
      //   $('.sults').text('FESSIONAL')
      // })
      // $('.pro').on('mouseleave', () => {
      //   $('.sults').text('SULTS')
      // })
      $(window).scroll(() => {
        let scrollTracker = $(window).scrollTop();
        if(scrollTracker > 50) {
          // $('.prosults, .about, .contact, .services').fadeOut();
          $('.nav-container').fadeOut(750);
          
        } else {
          $('.nav-container').fadeIn(750);
        }
      })
    }

  }
})
