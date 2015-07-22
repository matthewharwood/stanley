'use strict';
var app = angular.module('jordanApp');

app.controller('TemplateCtrl', function($scope, $location, $route, $routeParams, $cookies, $timeout, Tplsection, CreateTout, CreateCta, CreateGridRow, Fst, Fstsection, ImageGen, $firebase) {
  $scope.currentImageIndex = 0;
  $scope.pristinePage = 1;

  //$cookies.finishedSave = 1;
  if ($cookies.finishedSave) {
    $scope.showSaveStatus = 1;
  }
  //console.log($routeParams);

    // var myDataRef = new Firebase('https://burning-fire-5228.firebaseio.com/');
    // new Firebase('https://burning-fire-5228.firebaseio.com/user/1').once('value', function(snap) {
    //   console.log('I fetched a user!', snap.val());
    // });

    // $scope.bindTemplate = function() {
    //   var templateRef = new Firebase('https://burning-fire-5228.firebaseio.com/templates/1');
    //   $scope.tpl_sections = $firebase(templateRef);
    //   console.log($scope.tpl_sections);
    // };

    // $scope.bindTemplate();


  // CURRENT PAGE VARIABLES
  // $scope.project_name = "jordan";
  // $scope.page_name = "test";
  // $scope.version_number = "1";
  $scope.project_name = 'jordan';
  $scope.page_name = $routeParams.page;
  $scope.version_number = $routeParams.id;
  $scope.toggleWidth = false;
  

  $scope.toggleMaxWidth = function() {

    $scope.toggleWidth = !$scope.toggleWidth;

  }


  //$scope.testRef = new Firebase($scope.firebaseURL+'/test/');

  //$scope.projectRef = new Firebase($scope.firebaseURL+'/pages/'+$scope.project_name+'/');

  // GETTING PAGE INFORMATION
  $scope.pageRef = new Firebase($scope.firebaseURL+'/pagesInfo/'+$scope.project_name+'/'+$scope.page_name+'/');
  //console.log($scope.firebaseURL+'/pages/'+$scope.project_name+'/'+$scope.page_name+'/'+$scope.version_number+'/');
  $scope.versionInfoRef = new Firebase($scope.firebaseURL+'/pagesInfo/'+$scope.project_name+'/'+$scope.page_name+'/'+$scope.version_number+'/');
  $scope.versionDataRef = new Firebase($scope.firebaseURL+'/pagesData/'+$scope.version_number+'/');

  // 3WAY BINDING REFERENCES
  //$scope.tplColorRef = new Firebase($scope.firebaseURL+'/pagesData/'+$scope.version_number+'/tpl_color/');
  //$scope.tplSectionsRef = new Firebase($scope.firebaseURL+'/pagesData/'+$scope.version_number+'/tpl_sections/');

  // LOAD VERSION SWITCH UI DATA
  $scope.pageRef.once('value', function(snap) {
    $scope.$apply( function() {
      $scope.versionArray = angular.fromJson(snap.val());
    });
  });
  // TEST FIREBASE
  //$scope.test = $firebase($scope.testRef);
  //$scope.test.$bind($scope, "testfirebase");
  //alert($scope.test);

  $scope.toggleTplColor = function() {
    if ($scope.tpl_color == "tpl_white") {
      $scope.tpl_color = "tpl_black";
    }
    else {
      $scope.tpl_color = "tpl_white";
    }
    // TRIGGER: COMMENT OUT WHEN MANUAL SAVING
    //$scope.tplColorRef.set($scope.tpl_color);
    $scope.pristinePage = 0;
    $scope.pristinePageListener();
  }

  $scope.toggleMenuMobile = function() {
       
    $scope.menu_on = !$scope.menu_on;

  }

// Load from template on firebase server
  $scope.loadTemplates = function(tpl_number) {
    var fb_url = $scope.firebaseURL+'/templates/'+tpl_number;
    //console.log('fb_url: '+fb_url);
    //var templateRef = $firebase(new Firebase(fb_url));
    var templateRef = new Firebase(fb_url);
    /*
    templateRef.on('value', function(templateSnapshot) {
      var x = templateSnapshot.name();
      alert(x);
    });
*/
    // tpl_number == 0
    if (tpl_number >= 1 && tpl_number <=9) {
      // send request
      //template = tpl_number;

    var templateRef = new Firebase(fb_url);
      templateRef.once('value', function(nameSnapshot) {
          $scope.$apply( function() {
            $scope.loadedTemplate = nameSnapshot.val();
            $scope.loadedTemplateJson = angular.fromJson($scope.loadedTemplate);
            // console.log($scope.loadedTemplateJson);
            // console.log($scope.loadedTemplateJson.tpl_color);
            // console.log($scope.loadedTemplateJson.tpl_name);
            // console.log($scope.loadedTemplateJson.template);
            $scope.tpl_color = $scope.loadedTemplateJson.tpl_color;
            console.log($scope.loadedTemplateJson.tpl_color);
            $scope.tpl_sections = $scope.loadedTemplateJson.tpl_sections;
            //console.log($scope.tpl_sections);
          });
      });
    }
    else {

      var defaultTemplate = [];
      defaultTemplate.push(new Tplsection('carousel',$scope.carousel));
      defaultTemplate.push(new Tplsection('eg',$scope.makeEGTemplate(1)));
      $scope.tpl_sections = defaultTemplate;
    }
  };
  // Load page data from pages database
  $scope.loadPage = function(project_name, page_name, version_number) {
    //console.log($scope.firebaseURL+'/pages/'+project_name+'/'+page_name+'/'+version_number+'/');
    //$scope.versionRef = new Firebase($scope.firebaseURL+'/pages/'+project_name+'/'+page_name+'/'+version_number+'/');

    $scope.versionInfoRef = new Firebase($scope.firebaseURL+'/pagesInfo/'+$scope.project_name+'/'+$scope.page_name+'/'+$scope.version_number+'/');
    
    // TRIGGER: COMMENT OUT WHEN MANUAL SAVING
    //$scope.tpl_colorFB = $firebase( new Firebase($scope.firebaseURL+'/pagesData/'+$scope.version_number+'/tpl_color/'));
    //$scope.tpl_colorFB.$bind($scope, "tpl_color");

    // TRIGGER: LEAVE AS ONCE WHEN DOING MANUAL SAVING
    // TRIGGER: LEAVE AS ON WHEN DOING 3RD PARTY BINDING / LIVE SAVING
    $scope.versionInfoRef.once('value', function(nameSnapshot) {
          $scope.loadedPageInfo = nameSnapshot.val();
          $scope.loadedPageInfoJson = angular.fromJson($scope.loadedPageInfo);
          $scope.$apply( function() {
            $scope.pageTitle = $scope.loadedPageInfo.title;
          });
          $scope.versionDataRef = new Firebase($scope.firebaseURL+'/pagesData/'+$scope.version_number+'/');
          $scope.versionDataRef.once('value', function(snap) {
            $scope.loadedPageData = snap.val();
            //console.log( $scope.loadedPageData);
            $scope.$apply( function() {
              $scope.tpl_sections = angular.fromJson($scope.loadedPageData.tpl_sections);

              //console.log($scope.loadedPageData);

              // Initialize Tpl Color
              $scope.tpl_color = $scope.loadedPageData.tpl_color;
              var init_tpl_sections = true;
              // TODO: Check optimization for checking for dirty changes
               // Listens for changes to sections to determine if page is still pristine
              $scope.pristinePageListener = $scope.$watch('tpl_sections', function () {
                if (init_tpl_sections) {
                  // this knocks out initial page load change
                  $timeout (function(){init_tpl_sections=false;});
                }
                else {
                  $scope.pristinePage = 0;
                  $scope.pristinePageListener();
                }
              },true);
            });
          });
          
        // if ($scope.tpl_color=="tpl_black") {
        //   $scope.tpl_sectionsFB = $firebase( new Firebase($scope.firebaseURL+'/pages/'+$scope.project_name+'/'+$scope.page_name+'/'+$scope.version_number+'/tpl_sections/'));
        //   $scope.tpl_sectionsFB.$bind($scope, "tpl_sections");
        // }
        //$scope.tpl_color = $scope.loadedPageJson.tpl_color;
        //$scope.version_number = $scope.loadedPageJson.version;
        //console.log($scope.tpl_sections);
        //$scope.createSectionWatchBindings();

        // TRIGGER: TESTING FOR 3WAY BINDING
        //$scope.tpl_sectionsFB = $firebase( new Firebase($scope.firebaseURL+'/pages/'+$scope.project_name+'/'+$scope.page_name+'/'+$scope.version_number+'/tpl_sections/'));

        // $scope.tpl_sectionsFB.$bind($scope, "tpl_sections");

        // WatchCollection('tpl_sections')
        // refreshes on Page Load, Template Load, Reorder, and FST add

        // $scope.$watchCollection('tpl_sections', function() {
        //   console.log('scope.tpl_sections watch has changed!');
        //   //$scope.createSectionWatchBindings();

        //   $scope.tplSectionsRef.set(angular.copy($scope.tpl_sections));
        // });
    }); 
  };

  // Leave off, 3way binding tests
  $scope.createSectionWatchBindings = function() {
    var section_length = $scope.tpl_sections.length;
    //alert('length:'+section_length);
    var i = 0;
    var j = 0;
    // for (i=0; i<section_length; i++) {
    //   //console.log(i+'/'+$scope.tpl_sections[i].type);
    //   //$scope.tplSections.$watch


    //   for (j=0; j<$scope.tpl_sections[i].data.length; j++) {
    //     console.log($scope.tpl_sections[i].data[j]);
    //     $scope.$watchCollection('tpl_sections[i].data[j]', function() {
    //       $scope.nodeRef = new Firebase($scope.firebaseURL+'/pages/'+$scope.project_name+'/'+$scope.page_name+'/'+$scope.version_number+'/tpl_sections/'+i+'/data/'+j);
    //       $scope.nodeRefFB = $firebase($scope.nodeRef);
    //       $scope.nodeRefFB.$bind($scope, "tpl_sections[i].data[j]");
          
    //       //$scope.nodeRef.set(angular.copy($scope.tpl_sections[i].data[j]));
    //     });
        
    //   }
    // }
  }

  // INITIAL TEMPLATE LOADING //
  // Default Template // LOCAL GENERATED
  //$scope.loadTemplates(0);

  // Load Template From Firebase Database
  //$scope.loadTemplates(1);


  // Load Page from Firebase Database
  $scope.loadPage($scope.project_name,$scope.page_name,$scope.version_number);

 

  // TODO: tie this to promise of only loading once page has been loaded; currently on time delay
  if ($cookies.finishedSave) {
    setTimeout(function(){
      $("#save_status").fadeOut('1000');
      }, 3000);

    // reset save flag (not sure if needed)
    $cookies.finishedSave = 0;
  }

  $scope.carouselGoto = function(id) {
  	$scope.currentImageIndex = id;
  }
  $scope.addFST = function () {
    //$scope.tpl_sections.push(new Tplsection('fst',[{'caption':'New FST Caption','subcaption':'New FST Subcaption','body':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, veniam perspiciatis doloribus adipisci ea facilis laudantium excepturi eius voluptates ratione. Delectus, unde, voluptatem culpa dolorum iure fuga adipisci? Consequuntur, blanditiis?'}]));
  
    var fstdata = [];
    var caption = new Fstsection('caption','New FST Caption');
    var subcaption = new Fstsection('subcaption','New FST Subcaption');
    var body = new Fstsection('body','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, veniam perspiciatis doloribus adipisci ea facilis laudantium excepturi eius voluptates ratione. Delectus, unde, voluptatem culpa dolorum iure fuga adipisci? Consequuntur, blanditiis?');
    var ctaList = [];
    var newcta = new CreateCta('This is THE cta', 'red');
    ctaList.push(newcta);
    var cta = new Fstsection('cta',ctaList);

    fstdata.push(caption);
    fstdata.push(subcaption);
    fstdata.push(body);
    fstdata.push(cta);

    var new_fst = new Fst(ImageGen('blackpixel'),'',fstdata);
    //console.log(new_fst);
    $scope.tpl_sections.push(new Tplsection('fst',[new_fst]));
    console.log($scope.tpl_sections);
  };
  $scope.removeFST = function (idx) {
    $scope.tpl_sections.splice(idx,1);
  };
  // Retrieve image from remote database server
  $scope.getImage = function(ref) {
    $scope.imageRef = new Firebase($scope.firebaseURL+'/images/');
    //$scope.imageRef_FB = $firebase($scope.imageRef);

    //return $scope.imageRef_FB;
    //console.log($scope.imageRef_FB.$child(ref));
    $scope.imageRef.once('value', function(nameSnapshot) {
          $scope.$apply( function() {
            var imageRefVal = nameSnapshot.val();
            return imageRefVal;
          });
      });
  };

  $scope.$on('new_dynamic_fst', function() {
    $scope.addFST();
  });

  $scope.SavePage = function() {
    var new_ts = Date.now();
    // UPDATE PAGE DETAILS
    $scope.saveVersionInfoRef = new Firebase($scope.firebaseURL+'/pagesInfo/'+$scope.project_name+'/'+$scope.page_name+'/'+$scope.version_number+'/');
    $scope.saveVersionInfoRef.once('value', function(snap) {
      $scope.saveVersionInfoRef.child('last_updated').set(new_ts);
      $scope.saveVersionInfoRef.child('version').set($scope.version_number);
      $scope.saveVersionInfoRef.child('title').set($scope.pageTitle);
      
      // SAVE DATA
      $scope.saveVersionRef = new Firebase($scope.firebaseURL+'/pagesData/'+$scope.version_number+'/');

      $scope.saveVersionRef.once('value', function(snap) {
        $scope.saveVersionRef.child('tpl_color').set($scope.tpl_color);
        $scope.saveVersionRef.child('tpl_sections').set(angular.copy($scope.tpl_sections));
        $scope.saveVersionRef.child('last_updated').set(new_ts);
        //alert('Save success!');
        $cookies.finishedSave = 1;
        $route.reload();
      });
    });

    
  };

  $scope.DuplicatePage = function() {
    var new_ts = Date.now();
    // CREATE NEW PAGE INFO
    $scope.newNodeRef = new Firebase($scope.firebaseURL+'/pagesInfo/'+$scope.project_name+'/'+$scope.page_name+'/'+new_ts);
    
    $scope.newNodeRef.once('value', function(snap) {
      $scope.newNodeRef.set({'version':new_ts, 'title':new_ts ,'last_updated':new_ts});

      // SAVE NEW SECTION NODE
      $scope.newDataNodeRef = new Firebase($scope.firebaseURL+'/pagesData/'+new_ts+'/');
      $scope.newDataNodeRef.once('value', function(snap) {
        $scope.newDataNodeRef.child('tpl_color').set($scope.tpl_color);
        $scope.newDataNodeRef.child('tpl_sections').set(angular.copy($scope.tpl_sections));
        $scope.newDataNodeRef.child('last_updated').set(new_ts);
        alert('New page has been created');
      });
    });

    //$location.path('/'+$scope.project_name+'/'+$scope.page_name+'/'+new_ts);
  };

  $scope.LoadExportPanel = function() {
    $scope.export_panel_on = !$scope.export_panel_on;
    $scope.ExportImages();
    if ($scope.export_panel_on) {
      $scope.tpl_panel_class = 'blur';
    }
    else {
      $scope.export_panel_on = '';
    }
  };
  $scope.ProjectPage = function() {
    //console.log('$scope.pristinePage'+$scope.pristinePage);
    if (!$scope.pristinePage) {
      var confirm_leave = confirm('You have unsaved changes. Are you sure you want to leave?');
      if (confirm_leave) {
        $location.path('/');
      }
    }
    else {
      // No changes; no problem
      $location.path('/');
    }
  }
  $scope.ExportImages = function() {
    // Canvas Mirror Algorithm
    // Scaling algorithm
    // oi = Original Image
    // Zoom * original

    // Temporary Image
    // render ti = oi.width * oi.height

    // Crop New Image
    // fi = final image
    // fi.width = divbox.width
    // fi.height = divbox.height

    // LEFT: margin left neg // position left offset
    // TOP: margin top neg // position top offset

    // fi = LEFT, TOP // origin
    // crop fi.width/fi.height

    // Create Canvas element holder

    // Empty out the div
    $("#exportImagesContainer").hide();
    $("#exportImagesContainer").empty();

    $scope.camanHolder = [];
    $scope.canvasHolder = [];
    $scope.textHolder = [];
    $scope.dataHolder = [];
    $scope.dataHolderMobile = [];

    $scope.camanHolderMobile = [];
    $scope.canvasHolderMobile = [];
    $scope.dataHolderMobile = [];

    Caman.DEBUG = true;
    // Loop through the sections
    //console.log($scope.tpl_sections);
    //sections

    for (var i=0; i<$scope.tpl_sections.length; i++) {
      // node
      //console.log($scope.tpl_sections[i]);
      //var temp_node = $scope.tpl_sections[i];
      var type = $scope.tpl_sections[i].type;
      var data = $scope.tpl_sections[i].data;
      var tempCanvas = 0;
      var tempCaman = 0;
      var tempCanvasMobile = 0;
      var tempCamanMobile = 0;
      var tempText = '';

      var dataArray = [];
      if (type == 'carousel') {
        for (var j=0; j<data.length;j++) {
          //console.log('datanode '+j);
          // console.log(data[j]);
          tempCanvas = document.createElement('canvas');
          tempText = document.createElement('div');
          document.getElementById('exportImagesContainer').appendChild(tempCanvas);
          //document.getElementsByTagName("body")[0].appendChild(tempCanvas);
          //document.getElementById('exportImagesContainer').appendChild(tempText);
           tempCaman = Caman(tempCanvas, data[j].image);
          $scope.camanHolder.push(tempCaman);
          $scope.canvasHolder.push(tempCanvas);
          $scope.textHolder.push(tempText);
          $scope.dataHolder.push(data[j]);
        }
      }
      else if (type == 'eg') {
        for (var j=0; j<data.length;j++) {
          //console.log('datanode '+j);
          //console.log(data[j]);
          var touts = data[j].touts;
          //touts
          for (var k=0; k<touts.length;k++) {
            console.log(touts[k]);
            tempCanvas = document.createElement('canvas');
            tempText = document.createElement('div');
            document.getElementById('exportImagesContainer').appendChild(tempCanvas);
            //document.getElementsByTagName("body")[0].appendChild(tempCanvas);
            //document.getElementById('exportImagesContainer').appendChild(tempText);
            tempCaman = Caman(tempCanvas, touts[k].image);
            //console.log(tempCaman);

            // PREP MOBILE DATA
            tempCanvasMobile = document.createElement('canvas');
            document.getElementById('exportImagesContainerMobile').appendChild(tempCanvasMobile);
            tempCamanMobile = Caman(tempCanvasMobile, touts[k].image_mobile);

            // PUSH THE DATA
            $scope.camanHolder.push(tempCaman);
            $scope.canvasHolder.push(tempCanvas);
            $scope.textHolder.push(tempText);
            $scope.dataHolder.push(touts[k]);
            // MOBILE DATA
            $scope.camanHolderMobile.push(tempCamanMobile);
            $scope.canvasHolderMobile.push(tempCanvasMobile);
            $scope.dataHolderMobile.push(touts[k]);
           }
        }
      }
      else if (type == 'fst') {
        for (var j=0; j<data.length;j++) {
          //console.log('datanode '+j);
          // console.log(data[j]);
          tempCanvas = document.createElement('canvas');
          tempText = document.createElement('div');
          document.getElementById('exportImagesContainer').appendChild(tempCanvas);
          //document.getElementsByTagName("body")[0].appendChild(tempCanvas);
          //document.getElementById('exportImagesContainer').appendChild(tempText);
          tempCaman = Caman(tempCanvas, data[j].image);
          $scope.camanHolder.push(tempCaman);
          $scope.canvasHolder.push(tempCanvas);
          $scope.textHolder.push(tempText);
          $scope.dataHolder.push(data[j]);
        }
      }
    }

    setTimeout(function(){$( "#export_btn" ).trigger( "click" )},3000);
  }
  // Generate Export on click
    $("#export_btn").click(function() {
      //$scope.ExportImages();
      //$("#exportImagesContainer").show();
      //$scope.downloadZip = function() {
      $scope.zip = new JSZip();
      $scope.content = 0;
      var imageRawData = [];

      for (var i=0;i<$scope.camanHolder.length;i++) {
        $scope.canvasHolder[i].setAttribute("id","tempCanvas"+i);
        //console.log($scope.camanHolder[i]);
        //console.log($scope.dataHolder[i]);

        // original image
        var oi_w = $scope.camanHolder[i].originalWidth;
        var oi_h = $scope.camanHolder[i].originalHeight;
        //console.log('original image: '+oi_w+', '+oi_h);

        // viewport
        //var vp_w = parseInt($('#viewport').css('width'));
        var vp_w = 940;
        var vp_h = 350;

        if ($scope.dataHolder[i].classlg==12) {
          vp_w = 940;
          vp_h = 350;
        }
        else if ($scope.dataHolder[i].classlg==9) {
          vp_w = 703;
          vp_h = 350;
        }
        else if ($scope.dataHolder[i].classlg==6) {
          vp_w = 466;
          vp_h = 350;
        }
        else if ($scope.dataHolder[i].classlg==3) {
          vp_w = 229;
          vp_h = 350;
        }
        // for FST use original width and height
        else {
          vp_w = oi_w;
          vp_h = oi_h;
        }

        //console.log('viewport: '+vp_w+', '+vp_h);

        // scale
        var scale = $scope.dataHolder[i].image_scale;
        //console.log('scale: '+scale);

        // offset
        var offset_x = $scope.dataHolder[i].image_left * -1;
        var offset_y = $scope.dataHolder[i].image_top * -1;
        //console.log('offset: '+offset_x+', '+offset_y);

        // scaled width
        var si_w = oi_w*scale;
        var si_h = oi_h*scale;
        //console.log('scaled image: '+si_w+', '+si_h);

        //console.log('vp: '+vp_w+'x'+vp_h+', scale: '+scale+', scaled image: '+si_w+', '+si_h+', offset: '+offset_x+', '+offset_y+', scaled_offset: '+offset_x*scale+', '+offset_y*scale);
        //console.log($scope.camanHolder[i]);
        $scope.camanHolder[i].reset();
        $scope.camanHolder[i].resize({width: si_w, height: si_h});
        $scope.camanHolder[i].crop(vp_w,vp_h, offset_x*scale, offset_y*scale);
        $scope.camanHolder[i].render();
        //$scope.camanHolder[i].render();
        //console.log($scope.canvasHolder[i].toDataURL("image/jpeg"));
        //console.log(document.getElementById("tempCanvas"+i).toDataURL("image/jpeg"));
        
        // RAW DATA
        var base64data = $scope.camanHolder[i].toBase64("jpeg");
        //var base64data = $scope.canvasHolder[i].toDataURL("image/jpeg");

        //$scope.textHolder[i].innerHTML='<a href="'+base64data+'" download="image_'+i+'.jpg">Download Image</a>';
        //var rawData = base64data.replace('data:image/png;base64,','');
        var rawData = base64data.replace('data:image/jpeg;base64,','');

        $scope.zip.file(i+".jpg",rawData, {base64: true, binary: true});
      }

      // MOBILE IMAGES

      for (var i=0;i<$scope.camanHolderMobile.length;i++) {
        $scope.canvasHolderMobile[i].setAttribute("id","tempCanvasMobile"+i);
        // original image
        var oi_w = $scope.camanHolderMobile[i].originalWidth;
        var oi_h = $scope.camanHolderMobile[i].originalHeight;

        // viewport
        var vp_w = 568;
        var vp_h = 568;
        // scale
        var scale = $scope.dataHolderMobile[i].image_mobile_scale;
        // offset
        var offset_x = $scope.dataHolderMobile[i].image_mobile_left * -1;
        var offset_y = $scope.dataHolderMobile[i].image_mobile_top * -1;
        // scaled width
        var si_w = oi_w*scale;
        var si_h = oi_h*scale;
        //render
        $scope.camanHolderMobile[i].reset();
        $scope.camanHolderMobile[i].resize({width: si_w, height: si_h});
        $scope.camanHolderMobile[i].crop(vp_w,vp_h, offset_x*scale, offset_y*scale);
        $scope.camanHolderMobile[i].render();// RAW DATA
        var base64data = $scope.camanHolderMobile[i].toBase64("jpeg");
        var rawData = base64data.replace('data:image/jpeg;base64,','');
        $scope.zip.file('mobile_'+i+'.jpg',rawData, {base64: true, binary: true});
      }

      $scope.content = $scope.zip.generate(); // base64
      location.href="data:application/zip;base64,"+$scope.content;
   });


  $scope.$on('load_template', function(evt, tpl_number){
    // Load a template
    //alert('5 by 5. Initiating wipe');
    $scope.tpl_sections = [];
    // Request new template
    // only have video on template 1 for now
    if (tpl_number==1) {
      $scope.tpl_sections.push(new Tplsection('carousel',$scope.carousel));
    }
    else {
      $scope.tpl_sections.push(new Tplsection('carousel',$scope.carousel2));
    }
    $scope.tpl_sections.push(new Tplsection('eg',$scope.makeEGTemplate(tpl_number)));
    //$scope.tpl_sections.push(new Tplsection('eg',[{"touts":[{"image_src":"images/guy-1.3.jpeg","caption":"Caption","subcaption":"Subcaption","classmd":3,"classlg":3,"cta":[]},{"image_src":"images/shoe-sing.jpeg","caption":"Caption","subcaption":"Subcaption","classmd":9,"classlg":9,"cta":[]}]},{"touts":[{"image_src":"images/knoll.jpg","caption":"Caption","subcaption":"Subcaption","classmd":12,"classlg":12,"cta":[{"text":"This is THE cta","ctaclass":"red"}]}]},{"touts":[{"image_src":"images/lady.jpg","caption":"Caption","subcaption":"Subcaption","classmd":6,"classlg":6,"cta":[]},{"image_src":"images/lady.jpg","caption":"Caption","subcaption":"Subcaption","classmd":6,"classlg":6,"cta":[]}]}]));
  
  });



  // TODO: reset image setting on drop + RESET button for scale and move
  // Note: this will not work on changing ngdrop as the variables are bound to model and cannot be changed by css

});

// ALLOW VIDEOS FROM NIKE AND EXTERNAL SOURCES
// app.config(function($sceDelegateProvider) {
//  $sceDelegateProvider.resourceUrlWhitelist([
//    // Allow same origin resource loads.
//    'self',
//    // Allow loading from our assets domain.  Notice the difference between * and **.

//    'C:**',
//    'http://nikevideo.nike.com/**']);
// });

app.config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});


