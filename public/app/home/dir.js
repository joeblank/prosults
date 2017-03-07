angular.module('prosults')
.directive('words', () => {
  return {
    restrict: 'A',
    link: (scope, elem, attrs) => {

      $(window).scroll(() => {
        let scrollTracker = $(window).scrollTop();
        if(scrollTracker > 50) {
          // $('.prosults, .about, .contact, .services').fadeOut();
          $('.nav-container').fadeOut(750);

        } else {
          $('.nav-container').fadeIn(750);
        }
      })

      $('.strategy-image').on('mouseenter', function() {
        $(this).css({
          "background-size": "195%"
        })
      })
      $('.strategy-image').on('mouseleave', function() {
        $(this).css({
          "background-size": "187%"
        })
      })

      $('.analytics-image').on('mouseenter', function() {
        $(this).css({
          "background-size": "160%"
        })
      })
      $('.analytics-image').on('mouseleave', function() {
        $(this).css({
          "background-size": "152%"
        })
      })

      $('.sustainability-image').on('mouseenter', function() {
        $(this).css({
          "background-size": "171%"
        })
      })
      $('.sustainability-image').on('mouseleave', function() {
        $(this).css({
          "background-size": "163%"
        })
      })

    }

  }
})
