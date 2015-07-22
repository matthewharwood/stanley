'use strict';
var app = angular.module('jordanApp');

app.controller('MainCtrl', function ($scope, Tplsection, ImageGen, CreateTout, CreateCta, CreateGridRow, Fst, Fstsection, Carousel, $firebase) {
  // Firebase variables

  // Do not touch: "Live"
  //$scope.firebaseURL = 'https://burning-fire-5228.firebaseio.com';

  // Dev
  $scope.firebaseURL = 'https://jordanstanley01.firebaseio.com';

  $scope.export_panel_on = false;
  $scope.tpl_panel_on = false;
  $scope.tpl_panel_class = 'blur';
  $scope.tpl_color = "tpl_white";
  //$scope.tpl_sections = ['carousel','eg','fst'];
  $scope.tpl_sections = [];

  // Template Variable
  //$scope.tpl = [];

  // PRELOADED DATA
  $scope.carousel = Carousel(1);

  // No video preloaded
  $scope.carousel2 = Carousel(2);

    //Template Functions
  // Fast Row Template Maker
  $scope.makeRow = function(type, option) {
    // Template Combinations
    // 1 - 12x1 [mkrow(A,*)]
    // 2 - 3x9 / 6x6 / 9x3 [mkrow(B,1-3/Default to 1)]
    // 3 - 3x3x6 / 3x6x3 / 6x3x3 [mkrow(C,1-3/Default to 1)]
    // 4 - 3x3x3x3 [mkrow(D,*]

    var row = [];
    if (type == 'A') {
      var tout = new CreateTout(12,12);
      row = new CreateGridRow([tout]);
    }
    else if (type == 'B') {
      if (option == '2') {
        // 6x6
        var tout1 = new CreateTout(6,6);
        var tout2 = new CreateTout(6,6);
        row = new CreateGridRow([tout1,tout2]);
      }
      else if (option == '3') {
        // 9x3
        var tout1 = new CreateTout(9,9);
        var tout2 = new CreateTout(3,3);
        row = new CreateGridRow([tout1,tout2]);
      }
      else  {
        // 3x9
        var tout1 = new CreateTout(3,3);
        var tout2 = new CreateTout(9,9);
        row = new CreateGridRow([tout1,tout2]);
      }
    }
    else if (type == 'C') {
      if (option == '2') {
        // 3x6x3
        var tout1 = new CreateTout(3,3);
        var tout2 = new CreateTout(6,6);
        var tout3 = new CreateTout(3,3);
        row = new CreateGridRow([tout1,tout2, tout3]);
      }
      else if (option == '3') {
        // 6x3x3
        var tout1 = new CreateTout(6,6);
        var tout2 = new CreateTout(3,3);
        var tout3 = new CreateTout(3,3);
        row = new CreateGridRow([tout1,tout2, tout3]);
      }
      else  {
        // 3x3x6
        var tout1 = new CreateTout(3,3);
        var tout2 = new CreateTout(3,3);
        var tout3 = new CreateTout(6,6);
        row = new CreateGridRow([tout1,tout2, tout3]);
      }
    }
    else if (type =='D') {
      // 3x3x3x3
      var tout1 = new CreateTout(3,3);
      var tout2 = new CreateTout(3,3);
      var tout3 = new CreateTout(3,3);
      var tout4 = new CreateTout(3,3);
      row = new CreateGridRow([tout1,tout2, tout3, tout4]);
    }

    return row;
  }
  $scope.makeEGTemplate = function(tpl_number) {
    var tempRows = [];
    // tpl_number has the template to be loaded
    if (tpl_number == 1) {
      // 1x1 - 3x1
      // 4x1
      // 2x1 - 2x1
      tempRows.push($scope.makeRow('B'));
      tempRows.push($scope.makeRow('A'));
      tempRows.push($scope.makeRow('B',2));
    }
    else if (tpl_number == 2) {
      // 1x1 - 1x1 - 2x1
      // 1x1 - 3x1
      // 1x1 - 1x1 - 1x1 - 1x1
      tempRows.push($scope.makeRow('C'));
      tempRows.push($scope.makeRow('B'));
      tempRows.push($scope.makeRow('D'));
    }
    else if (tpl_number == 3) {
      // 2x1 - 1x1 - 1x1
      // 1x1 - 2x1 - 1x1
      // 1x1 - 1x1 - 2x1
      tempRows.push($scope.makeRow('C',3));
      tempRows.push($scope.makeRow('C',2));
      tempRows.push($scope.makeRow('C'));
    }
    else if (tpl_number == 4) {
      // 1x1 - 1x1 - 2x1
      // 1x1 - 1x1 - 2x1
      // 2x1 - 2x1
      tempRows.push($scope.makeRow('C'));
      tempRows.push($scope.makeRow('C'));
      tempRows.push($scope.makeRow('B',2));
    }
    else if (tpl_number == 5) {
      // 2x1 - 2x1
      // 1x1 - 3x1
      // 2x1 - 1x1 - 1x1
      tempRows.push($scope.makeRow('B',2));
      tempRows.push($scope.makeRow('B'));
      tempRows.push($scope.makeRow('C',3));
    }
    else if (tpl_number == 6) {
      // 3x1 - 1x1
      // 3x1 - 1x1
      // 1x1 - 2x1 - 1x1
      tempRows.push($scope.makeRow('B',3));
      tempRows.push($scope.makeRow('B',3));
      tempRows.push($scope.makeRow('C',2));
    }
    else if (tpl_number == 7) {
      // 1x1 - 3x1
      // 1x1 - 2x1 - 1x1
      // 4x1
      tempRows.push($scope.makeRow('B'));
      tempRows.push($scope.makeRow('C',2));
      tempRows.push($scope.makeRow('A'));
    }
    else if (tpl_number == 8) {
      // 2x1 - 1x1 - 1x1
      // 1x1 - 3x1
      // 4x1
      tempRows.push($scope.makeRow('C',3));
      tempRows.push($scope.makeRow('B'));
      tempRows.push($scope.makeRow('A'));
    }
    else if (tpl_number == 9) {
      // 2x1 - 2x1
      // 4x1
      // 1x1 - 1x1 - 1x1 - 1x1
      tempRows.push($scope.makeRow('B',2));
      tempRows.push($scope.makeRow('A'));
      tempRows.push($scope.makeRow('D'));
    }
    return tempRows;
  };

  // Function Definitions
  $scope.addFST = function () {
    $scope.$broadcast ('new_dynamic_fst');
  };
   $scope.addEGRow = function () {
    $scope.$broadcast ('newEGRow');
  };

  $scope.LoadTemplatePanel = function() {
    $scope.tpl_panel_on = !$scope.tpl_panel_on;
    if ($scope.tpl_panel_on) {
      $scope.tpl_panel_class = 'blur';
    }
    else {
      $scope.tpl_panel_class = '';
    }
  };

  $scope.checkTplPanel = function() {
    return $scope.tpl_panel_on;
  }

  $scope.checkTplPanel = function() {
    return $scope.tpl_panel_on;
  }



  // Initialize Firebase Templates
  $scope.initTemplatesDatabase = function() {
    // Default Sections
    var template1 = [];
    var template2 = [];
    var template3 = [];
    var template4 = [];
    var template5 = [];
    var template6 = [];
    var template7 = [];
    var template8 = [];
    var template9 = [];

    // Template 1
    template1.push(new Tplsection('carousel',$scope.carousel));
    template1.push(new Tplsection('eg',$scope.makeEGTemplate(1)));
    // Template 2
    template2.push(new Tplsection('carousel',$scope.carousel));
    template2.push(new Tplsection('eg',$scope.makeEGTemplate(2)));
    // Template 3
    template3.push(new Tplsection('carousel',$scope.carousel));
    template3.push(new Tplsection('eg',$scope.makeEGTemplate(3)));
    // Template 4
    template4.push(new Tplsection('carousel',$scope.carousel));
    template4.push(new Tplsection('eg',$scope.makeEGTemplate(4)));
    // Template 5
    template5.push(new Tplsection('carousel',$scope.carousel));
    template5.push(new Tplsection('eg',$scope.makeEGTemplate(5)));
    // Template 6
    template6.push(new Tplsection('carousel',$scope.carousel));
    template6.push(new Tplsection('eg',$scope.makeEGTemplate(6)));
    // Template 7
    template7.push(new Tplsection('carousel',$scope.carousel));
    template7.push(new Tplsection('eg',$scope.makeEGTemplate(7)));
    // Template 8
    template8.push(new Tplsection('carousel',$scope.carousel));
    template8.push(new Tplsection('eg',$scope.makeEGTemplate(8)));
    // Template 9
    template9.push(new Tplsection('carousel',$scope.carousel));
    template9.push(new Tplsection('eg',$scope.makeEGTemplate(9)));

    var newTemplate1 = {tpl_name:'1', tpl_color:'tpl_white', tpl_sections: template1};
    var newTemplate2 = {tpl_name:'2', tpl_color:'tpl_white', tpl_sections: template2};
    var newTemplate3 = {tpl_name:'3', tpl_color:'tpl_white', tpl_sections: template3};
    var newTemplate4 = {tpl_name:'4', tpl_color:'tpl_white', tpl_sections: template4};
    var newTemplate5 = {tpl_name:'5', tpl_color:'tpl_white', tpl_sections: template5};
    var newTemplate6 = {tpl_name:'6', tpl_color:'tpl_white', tpl_sections: template6};
    var newTemplate7 = {tpl_name:'7', tpl_color:'tpl_white', tpl_sections: template7};
    var newTemplate8 = {tpl_name:'8', tpl_color:'tpl_white', tpl_sections: template8};
    var newTemplate9 = {tpl_name:'9', tpl_color:'tpl_black', tpl_sections: template9};


    var templateRef = new Firebase($scope.firebaseURL+'/templates/');
    //var templates = $firebase(templateRef);

    // Send Firebase updates
    templateRef.update({'1': newTemplate1});
    templateRef.update({'2': newTemplate2});
    templateRef.update({'3': newTemplate3});
    templateRef.update({'4': newTemplate4});
    templateRef.update({'5': newTemplate5});
    templateRef.update({'6': newTemplate6});
    templateRef.update({'7': newTemplate7});
    templateRef.update({'8': newTemplate8});
    templateRef.update({'9': newTemplate9});
  }

  // Initialize Firebase Pages
  $scope.initPagesDatabase = function() {
    var pages = [];
    var projectsArray = [];
    var pageArray = [];
    var page = {};
    pageArray.push({'version':'0', 'title':'0', 'tpl_sections':'', 'tpl_color':'tpl_white', 'last_updated':'1394473894854'});
    pageArray.push({'version':'1', 'title':'1', 'tpl_sections':'', 'tpl_color':'tpl_white', 'last_updated':'1394473894854'});
    projectsArray = {'test':pageArray};
    var projectsNikeArray = {'default':pageArray};

    pages = {'jordan':projectsArray,'nike':projectsNikeArray};
  
    var pagesRef = new Firebase($scope.firebaseURL+'/pages/');
    pagesRef.set(pages);

    // Sample data: 
    // {
    //   "nike" : {
    //     "test" : [ {
    //       "tpl_color" : "tpl_white",
    //       "tpl_sections" : "",
    //       "version" : "0"
    //     }, {
    //       "tpl_color" : "tpl_white",
    //       "tpl_sections" : "",
    //       "version" : "1"
    //     } ]
    //   },
    //   "jordan" : {
    //     "test" : [ {
    //       "tpl_color" : "tpl_white",
    //       "tpl_sections" : "",
    //       "version" : "0"
    //     }, {
    //       "tpl_color" : "tpl_white",
    //       "tpl_sections" : "",
    //       "version" : "1"
    //     } ]
    //   }
    // }
  }
  // Initialize Firebase Pages
  $scope.initPagesDataDatabase = function() {
    var pagesDataRef = new Firebase($scope.firebaseURL+'/pagesData/0');
    pagesDataRef.set({'version':'0', 'last_updated':'0', 'tpl_sections':'', 'tpl_color':'tpl_white'});
  }
    // COPY FUNCTION
  $scope.copyPagesDatabase = function() {
    var pagesRef = new Firebase($scope.firebaseURL+'/pages/');

    var pagesInfoRef = new Firebase($scope.firebaseURL+'/pagesInfo/');
    pagesRef.once('value', function(snap) {
      pagesInfoRef.set(snap.val());
    });
  }


  $scope.formatVersionNum = function(number) {
      if (number<=999) { number = ("00"+number).slice(-2); }
      return number;
  }

  // Send request to save a page
  // $scope.SavePage = function() {
  //   // TRIGGER: UNCOMMENT TO ALLOW SAVING
  //   $scope.$broadcast ('save_page');
  // };



    // INITIAL TEMPLATE DATABASE INITIALIZATION
    // $scope.initTemplatesDatabase();

    // INITIAL PAGES DATABASE INITIALIZATION
    //$scope.initPagesDatabase();

    // INITIAL PAGES DATA DATABASE INITIALIZATION
    //$scope.initPagesDataDatabase();

    // INITIAL IMAGES DATABASE INITIALIZATION
    //$scope.initImagesDatabase();

    // INITIAL PAGES DATABASE COPY
    //$scope.copyPagesDatabase();


    angular.element(document).ready(function () {
      $(document).bind('drop dragover', function (e) {
        e.preventDefault();
      });

    });


    
});
