angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

//  // Form data for the login modal
//  $scope.loginData = {};
//
//  // Create the login modal that we will use later
//  $ionicModal.fromTemplateUrl('templates/login.html', {
//    scope: $scope
//  }).then(function(modal) {
//    $scope.modal = modal;
//  });
//
//  // Triggered in the login modal to close it
//  $scope.closeLogin = function() {
//    $scope.modal.hide();
//  };
//
//  // Open the login modal
//  $scope.login = function() {
//    $scope.modal.show();
//  };
//
//  // Perform the login action when the user submits the login form
//  $scope.doLogin = function() {
//    console.log('Doing login', $scope.loginData);
//
//    // Simulate a login delay. Remove this and replace with your login
//    // code if using a login system
//    $timeout(function() {
//      $scope.closeLogin();
//    }, 1000);
//  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Introduction', id: 0 },
    { title: 'Cupid’s Vineyard', id: 2 },
    { title: 'The sultry sassy lass', id: 3 },
    { title: 'Let go!', id: 4 },
    { title: 'Mating', id: 5 },
    { title: 'Living by the memories', id: 6 }
  ];})

.controller('PlaylistCtrl', function($scope, $stateParams) {
    
    
})


.controller('dMantraCtrl', function ($scope) {
//        $scope.doRefresh = function(){
////        getDM();
//           // getD();
//        $scope.$broadcast('scroll.refreshComplete');
//    }
//}
//    $scope.t = new date();
    
    $scope.counter = 10;  
            
    var gT = setInterval(function(){ getD() }, 7000);
    
                 
            var mI = new Array();
//var mI = new Array("../img/DM/dm1.jpg", "../img/DM/dm2.png", "../img/DM/dm3.jpg");
            
                    //add images to array
//            mImages[1] = "images/banner1.png";
//            mI[1] = "../img/DM/dm1.jpg";
//            mI[2] = "../img/DM/dm2.png";
//            mI[3] = "../img/DM/dm3.jpg";
//            mI[4] = "../img/DM/dm4.jpg";
//            mI[5] = "../img/DM/dm5.jpg";
//            mI[6] = "../img/DM/dm6.jpg";
//            mI[7] = "../img/DM/dm7.jpg";
    
//            mI[1] = "../img/DM/a.jpg";
//            mI[2] = "../img/DM/b.png";
//            mI[3] = "../img/DM/c.jpg";
//            mI[4] = "../img/DM/d.jpg";
//            mI[5] = "../img/DM/e.jpg";
//            mI[6] = "../img/DM/f.jpg";
//            mI[7] = "../img/DM/g.jpg";    
    
    
    
            mI[1] = "../img/Try/a.jpg";
            mI[2] = "../img/Try/b.jpg";
            mI[3] = "../img/Try/c.jpg";
            mI[4] = "../img/Try/d.png";
            
            mI[5] = "../img/Try/a1.jpg";
            mI[6] = "../img/Try/e.jpg";
            mI[7] = "../img/Try/f.jpg";
            mI[8] = "../img/Try/g.png";
    
    
            mI[9] = "../img/Try/h.jpg";
            mI[10] = "../img/Try/i.jpg";
            mI[11] = "../img/Try/j.jpg";
            mI[12] = "../img/Try/k.jpg";
            
            mI[13] = "../img/Try/l.jpg";
            mI[14] = "../img/Try/m.png";
            mI[15] = "../img/Try/n.png";
            mI[16] = "../img/Try/o.jpg";
            
            mI[17] = "../img/Try/p.jpg";
            mI[18] = "../img/Try/i.jpg";
            mI[19] = "../img/Try/j.jpg";
            mI[20] = "../img/Try/k.png";
            
            mI[21] = "../img/Try/l.jpg";
            mI[22] = "../img/Try/m.png";
            mI[23] = "../img/Try/n.png";
            mI[24] = "../img/Try/o.jpg";
    
    
             
    function getD(){  
        
//remove if statement, stop function and var gt, we hve an infinite call to getD()  
//        if($scope.counter == 8){
            
            var rnd = Math.floor(Math.random() * mI.length);
            if(rnd == 0){
                //var rnd = Math.floor(Math.random() * mI.length);
                rnd = 1;
            }
            
            //alert("Hello");
            document.getElementById("mp").src = mI[rnd];
            
            //stopD();   //calls function to stops timer
//        } //endif
        
        
        //shows '5' times and counter is at '5'    
        //alert("Hello");
        $scope.counter--;
    }
   
    function stopD() {
        clearInterval(gT);
    }
    
    
});


//        var d = new Date();
//        document.getElementById("demo").innerHTML = d.toDateString();

