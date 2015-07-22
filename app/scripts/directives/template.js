'use strict';
var app = angular.module('jordanApp');

// HEADER/FOOTER
app.directive('mainmenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_partials/mainMenu.html'
      };
  });

app.directive('mainfooter', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_partials/mainFooter.html'
      };
  });

// TEMPLATE LOADING PANEL
app.directive('loadtemplatepanel', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_partials/loadTemplatePanel.html'
      };
  });

// TEMPLATE LOADING PANEL
app.directive('loadexportpanel', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_partials/loadExportPanel.html'
      };
  });

// PAGE SAVING PANEL
app.directive('savepagepanel', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/_partials/savePagePanel.html'
      };
  });

// SECTIONS
app.directive('sectioncarousel', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/_partials/sectionCarousel.html'
      };
  });


app.directive('sectioneditorialgrid', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/_partials/sectionEditorialGrid.html'
      };
  });


app.directive('sectiondynamicfst', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/_partials/sectionDynamicFst.html'
      };
  });

// FST LEVEL DIRECTIVES
app.directive('fstcaption', function() {
    return {
        restrict: 'E',
        scope: {
          model : "=model"
        },
        replace: true,
        template: '<h1><inline-edit version="inline-fst-caption" model="model"></inline-edit></h1>'
      };
  });

app.directive('fstsubcaption', function() {
    return {
        restrict: 'E',
        scope: {
          model : "=model"
        },
        replace: true,
        template: '<h2><inline-edit version="inline-fst-subcaption" model="model"></inline-edit></h2>'
      };
  });

app.directive('fstbody', function() {
    return {
        restrict: 'E',
        scope: {
          model : "=model"
        },
        replace: true,
        template: '<p><inline-edit version="inline-fst-body" model="model"></inline-edit></p>'
      };
  });

app.directive('fstcta', function() {
    return {
        restrict: 'E',
        scope: {
          model : "=model",
          initial: "=initial",
          max: "=max"
        },
        template: '<ctapanel cta="model" initial="initial" max="max"></ctapanel>'
      };
  });