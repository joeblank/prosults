angular.module('prosults')
.controller('mainCtrl', ($scope, $timeout, mainService, preloader) => {

  $scope.jumbotron = [
    './../../../images/mainBackground.jpg'
  ]

  $scope.prosults = 'haha'
  // preloader.preloadImages( $scope.jumbotron ).then(response => {
  //   console.log('here',response);
  // })


  //===jquery for typed.js
  // $(() => {
  //     const one = 'DYNAMIC CONSULTING.';
  //     const two = 'SUPERIOR SERVICE.';
  //     const three = 'PROFESSIONAL RESULTS.'
  //       $(".element").typed({
  //           strings: [one, two, three],
  //           typeSpeed: 100,
  //           backSpeed: 50,
  //           loop: true,
  //           startDelay: 1500,
  //           backDelay: 1000
  //       });
  //   });
  //===============

})
