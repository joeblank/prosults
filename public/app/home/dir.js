angular.module('prosults')
.directive('words', () => {
  return {
    restrict: 'A',
    link: (scope, elem, attrs) => {
      console.log(elem);
      elem.on('mouseenter', () => {
        console.log('hey now');
        elem.text('whoa')
      })
      elem.on('mouseleave', () => {
        console.log('hey now');
        elem.text('prosults')
      })
    }

  }
})
