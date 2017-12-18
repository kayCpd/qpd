// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.dailyMantra', {
    url: '/dailyMantra',
    views: {
      'menuContent': {
        templateUrl: 'templates/dailyMantra.html',
        controller: 'dMantraCtrl'
      }
    }
  })

  .state('app.askMe', {
      url: '/askMe',
      views: {
        'menuContent': {
          templateUrl: 'templates/askMe.html'
        }
      }
    })
  
    .state('app.circle', {
      url: '/circle',
      views: {
        'menuContent': {
          templateUrl: 'templates/circle.html'
        }
      }
    })
  
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
      .state('app.contents', {
      url: '/contents',
      views: {
        'menuContent': {
          templateUrl: 'templates/contents.html'
        }
      }
    })
  
    .state('app.Intro', {
        url: '/contents/Intro',
        views: {
            'menuContent': {
            templateUrl: 'templates/intro.html'
        }
      }
    })
  
      .state('app.Cupids_Vineyard', {
        url: '/contents/Cupids_Vineyard',
        views: {
            'menuContent': {
            templateUrl: 'templates/cupids_vineyard.html'
        }
      }
    })
  
          .state('app.The_Sultry_Sassy_Lass', {
        url: '/contents/The_Sultry_Sassy_Lass',
        views: {
            'menuContent': {
            templateUrl: 'templates/the_sultry_sassy_lass.html'
        }
      }
    })
  
              .state('app.Let_Go', {
        url: '/contents/Let_Go',
        views: {
            'menuContent': {
            templateUrl: 'templates/let_go.html'
        }
      }
    })
  ;
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/playlists');
    //$urlRouterProvider.otherwise('/app/browse');
    $urlRouterProvider.otherwise('/app/contents');
});
