var swipe = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

swipe.controller("SwipeController", function($scope) {

  $scope.slides = [1,2,3,4];
  $scope.slider = {};
  $scope.verticalOptions = {
    direction: 'vertical',
    slidesPerView: '1',
    loop: true,
    paginationClickable: true,
    effect: "coverflow"
  };
  
  $scope.horizontalOptions = {
	direction: 'horizontal',
    slidesPerView: '1',
    loop: true,
    paginationClickable: true,
    showNavButtons: false,
    effect: "coverflow"
  };
  
});
