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
  
    .state('app.note2self', {
      url: '/note2self',
      views: {
        'menuContent': {
          templateUrl: 'templates/note2self.html'
        }
      }
    })
  
//    .state('app.playlists', {
//      url: '/playlists',
//      views: {
//        'menuContent': {
//          templateUrl: 'templates/playlists.html',
//          controller: 'PlaylistsCtrl'
//        }
//      }
//    })
//
//  .state('app.single', {
//    url: '/playlists/:playlistId',
//    views: {
//      'menuContent': {
//        templateUrl: 'templates/playlist.html',
//        controller: 'PlaylistCtrl'
//      }
//    }
//  })
  
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
  
      .state('app.CV', {
        url: '/contents/CV',
        views: {
            'menuContent': {
            templateUrl: 'templates/cv.html'
        }
      }
    })
  
          .state('app.TSSL', {
        url: '/contents/TSSL',
        views: {
            'menuContent': {
            templateUrl: 'templates/tssl.html'
        }
      }
    })
  
              .state('app.LG', {
        url: '/contents/LG',
        views: {
            'menuContent': {
            templateUrl: 'templates/lg.html'
        }
      }
    })
  
                .state('app.MT', {
        url: '/contents/MT',
        views: {
            'menuContent': {
            templateUrl: 'templates/mt.html'
        }
      }
    })
  
                  .state('app.LBTM', {
        url: '/contents/LBTM',
        views: {
            'menuContent': {
            templateUrl: 'templates/lbtm.html'
        }
      }
    })
  
                    .state('app.TSMOP', {
        url: '/contents/TSMOP',
        views: {
            'menuContent': {
            templateUrl: 'templates/tsmop.html'
        }
      }
    })
  
                      .state('app.DF', {
        url: '/contents/DF',
        views: {
            'menuContent': {
            templateUrl: 'templates/df.html'
        }
      }
    })
  
                        .state('app.MM', {
        url: '/contents/MM',
        views: {
            'menuContent': {
            templateUrl: 'templates/mm.html'
        }
      }
    })
  
                        .state('app.TCOE', {
        url: '/contents/TCOE',
        views: {
            'menuContent': {
            templateUrl: 'templates/tcoe.html'
        }
      }
    })
  
                        .state('app.HLMF', {
        url: '/contents/HLMF',
        views: {
            'menuContent': {
            templateUrl: 'templates/hlmf.html'
        }
      }
    })
  
                          .state('app.AZD', {
        url: '/contents/AZD',
        views: {
            'menuContent': {
            templateUrl: 'templates/azd.html'
        }
      }
    })
  
                          .state('app.TRS', {
        url: '/contents/TRS',
        views: {
            'menuContent': {
            templateUrl: 'templates/trs.html'
        }
      }
    })
  
                          .state('app.GT', {
        url: '/contents/GT',
        views: {
            'menuContent': {
            templateUrl: 'templates/gt.html'
        }
      }
    })
  
                          .state('app.AOKOL', {
        url: '/contents/AOKOL',
        views: {
            'menuContent': {
            templateUrl: 'templates/aokol.html'
        }
      }
    })
  
                          .state('app.TAB', {
        url: '/contents/TAB',
        views: {
            'menuContent': {
            templateUrl: 'templates/tab.html'
        }
      }
    })
  
                            .state('app.CTTW', {
        url: '/contents/CTTW',
        views: {
            'menuContent': {
            templateUrl: 'templates/cttw.html'
        }
      }
    })
  
                              .state('app.PM', {
        url: '/contents/PM',
        views: {
            'menuContent': {
            templateUrl: 'templates/pm.html'
        }
      }
    })
  
                                .state('app.ERR', {
        url: '/contents/ERR',
        views: {
            'menuContent': {
            templateUrl: 'templates/err.html'
        }
      }
    })
  
                                .state('app.WY', {
        url: '/contents/WY',
        views: {
            'menuContent': {
            templateUrl: 'templates/wy.html'
        }
      }
    })
  
                                .state('app.ABOG', {
        url: '/contents/ABOG',
        views: {
            'menuContent': {
            templateUrl: 'templates/abog.html'
        }
      }
    })
  
                                  .state('app.BR', {
        url: '/contents/BR',
        views: {
            'menuContent': {
            templateUrl: 'templates/br.html'
        }
      }
    })
  
                                  .state('app.TLD', {
        url: '/contents/TLD',
        views: {
            'menuContent': {
            templateUrl: 'templates/tld.html'
        }
      }
    })
  
                                  .state('app.DML', {
        url: '/contents/DML',
        views: {
            'menuContent': {
            templateUrl: 'templates/dml.html'
        }
      }
    })
  
                                  .state('app.OTJ', {
        url: '/contents/OTJ',
        views: {
            'menuContent': {
            templateUrl: 'templates/otj.html'
        }
      }
    })
  
                                  .state('app.WDG', {
        url: '/contents/WDG',
        views: {
            'menuContent': {
            templateUrl: 'templates/wdg.html'
        }
      }
    })
  
                                  .state('app.CC', {
        url: '/contents/CC',
        views: {
            'menuContent': {
            templateUrl: 'templates/cc.html'
        }
      }
    })
  
                                  .state('app.TM', {
        url: '/contents/TM',
        views: {
            'menuContent': {
            templateUrl: 'templates/tm.html'
        }
      }
    })
  
                                  .state('app.TFAHM', {
        url: '/contents/TFAHM',
        views: {
            'menuContent': {
            templateUrl: 'templates/tfahm.html'
        }
      }
    })
                                    .state('app.ABS', {
        url: '/contents/ABS',
        views: {
            'menuContent': {
            templateUrl: 'templates/abs.html'
        }
      }
    })
  
                                    .state('app.AS', {
        url: '/contents/AS',
        views: {
            'menuContent': {
            templateUrl: 'templates/as.html'
        }
      }
    })
                                    .state('app.MLL', {
        url: '/contents/MLL',
        views: {
            'menuContent': {
            templateUrl: 'templates/mll.html'
        }
      }
    })
                                    .state('app.WLD', {
        url: '/contents/WLD',
        views: {
            'menuContent': {
            templateUrl: 'templates/wld.html'
        }
      }
    })
  
                                 .state('app.HGB', {
        url: '/contents/HGB',
        views: {
            'menuContent': {
            templateUrl: 'templates/hgb.html'
        }
      }
    })
  
                            .state('app.ITTOAE', {
        url: '/contents/ITTOAE',
        views: {
            'menuContent': {
            templateUrl: 'templates/ittoae.html'
        }
      }
    })
  
                                   .state('app.JGS', {
        url: '/contents/JGS',
        views: {
            'menuContent': {
            templateUrl: 'templates/jgs.html'
        }
      }
    })
  
                                   .state('app.ADOJ', {
        url: '/contents/ADOJ',
        views: {
            'menuContent': {
            templateUrl: 'templates/adoj.html'
        }
      }
    })
  
                                   .state('app.TPOD', {
        url: '/contents/TPOD',
        views: {
            'menuContent': {
            templateUrl: 'templates/tpod.html'
        }
      }
    })
  
                                   .state('app.TR', {
        url: '/contents/TR',
        views: {
            'menuContent': {
            templateUrl: 'templates/tr.html'
        }
      }
    })
  
                                   .state('app.TS', {
        url: '/contents/TS',
        views: {
            'menuContent': {
            templateUrl: 'templates/ts.html'
        }
      }
    })
  
                                   .state('app.WD', {
        url: '/contents/WD',
        views: {
            'menuContent': {
            templateUrl: 'templates/wd.html'
        }
      }
    })
  
                                     .state('app.ROL', {
        url: '/contents/ROL',
        views: {
            'menuContent': {
            templateUrl: 'templates/rol.html'
        }
      }
    })
  
                                     .state('app.OR', {
        url: '/contents/OR',
        views: {
            'menuContent': {
            templateUrl: 'templates/or.html'
        }
      }
    })
  
                                       .state('app.SM', {
        url: '/contents/SM',
        views: {
            'menuContent': {
            templateUrl: 'templates/sm.html'
        }
      }
    })
  
                                    .state('app.PUYS', {
        url: '/contents/PUYS',
        views: {
            'menuContent': {
            templateUrl: 'templates/puys.html'
        }
      }
    })
  
                                    .state('app.ET', {
        url: '/contents/ET',
        views: {
            'menuContent': {
            templateUrl: 'templates/et.html'
        }
      }
    })
  
                                    .state('app.COH', {
        url: '/contents/COH',
        views: {
            'menuContent': {
            templateUrl: 'templates/coh.html'
        }
      }
    })
  
                                    .state('app.BOR', {
        url: '/contents/BOR',
        views: {
            'menuContent': {
            templateUrl: 'templates/bor.html'
        }
      }
    })
                                    .state('app.MTMP', {
        url: '/contents/MTMP',
        views: {
            'menuContent': {
            templateUrl: 'templates/mtmp.html'
        }
      }
    })
  
                                .state('app.BBTS', {
        url: '/contents/BBTS',
        views: {
            'menuContent': {
            templateUrl: 'templates/bbts.html'
        }
      }
    })
  
  
                                .state('app.TPTW', {
        url: '/contents/TPTW',
        views: {
            'menuContent': {
            templateUrl: 'templates/tptw.html'
        }
      }
    })
  ;
    
      
    
    
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/playlists');
    //$urlRouterProvider.otherwise('/app/browse');
    $urlRouterProvider.otherwise('/app/contents');
});
