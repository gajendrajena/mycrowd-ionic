angular.module('mycrowd.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login forScripts:m
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DashboardCtrl', function($scope) {
  $scope.dashboard = [
  {
    icon: 'ion-ios-home-outline',
    title: 'My Dashboard',
    id: 'my_dashboard'
  },
  {
    icon: 'ion-ios-compose-outline',
    title: 'Available Tests',
    id: 'available_tests'
  },
  {
    icon: 'ion-ios-list-outline',
    title: 'Report a Bug',
    id: 'report_a_bug'
  },
  {
    icon: 'ion-ios-people',
    title: 'Review Bugs',
    id: 'review_bugs'
  },
  {
    icon: 'ion-laptop',
    title: 'My Bugs',
    id: 'my_bugs'
  },
  {
    icon: 'ion-ios-person',
    title: 'My Profile',
    id: 'my_profile'
  }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.menu_items = {
    my_dashboard: 'My Dashboard',
    available_tests: 'Available Tests',
    report_a_bug: 'Report a Bug',
    review_bugs: 'Review Bugs',
    my_bugs: 'My Bugs',
    my_profile: 'My Profile'
  };

  $scope.title = $scope.menu_items[$stateParams['playlistId']];
});
