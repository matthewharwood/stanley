// Template Factories
app.factory('CreateCta', function() {
  function CreateCta(text, ctaclass) {
    if (text != '') {
      this.text = text;
    }
    else {
      this.text = 'CTA Text';
    }
    if (ctaclass != '') {
      this.ctaclass = ctaclass;
    }
    else {
      this.ctaclass = 'red';
    }
  }
  return CreateCta;
});

app.factory('GridRow', function(Tout) {
    function GridRow() {
      this.scallop = 0; // divider below
      var tout = new Tout();
      this.touts = [];
      this.touts.push(tout);
    }

    return GridRow;
  });
app.factory('CreateGridRow', function() {
    function CreateGridRow(touts) {
      this.scallop = 0; // divider below
      this.touts = touts;
    }
    return CreateGridRow;
  });

app.factory('Tout', function(ImageGen) {
    function Tout() {
      this.image   = ImageGen('black4x1');
      this.image_scale = '1';
      this.image_top = '0';
      this.image_left = '0';
      this.image_mobile   = ImageGen('blackmobile');
      this.image_mobile_scale = '1';
      this.image_mobile_top = '0';
      this.image_mobile_left = '0';
      this.caption = 'default caption';
      this.subcaption   = 'default subcaption';
      this.caption_mobile = 'default mobile caption';
      this.subcaption_mobile   = 'default mobile subcaption';
      this.classmd = '3';
      this.classlg = '3';
      this.cta = [];
    }

    return Tout;
  });
app.factory('CreateTout', function(CreateCta, ImageGen) {
    function CreateTout(classmd, classlg) {
      var imgsrc3 = ImageGen('black4x1');
      var imgsrc6 = ImageGen('black4x1');
      var imgsrc9 = ImageGen('black4x1');
      var imgsrc12 = ImageGen('black4x1');
      if (classlg == '3') {
        this.image = imgsrc3;
      }
      else if (classlg == '6') {
        this.image = imgsrc6;
      }
      else if (classlg == '9') {
        this.image = imgsrc9;
      }
      else if (classlg == '12') {
        this.image = imgsrc12;
      }

      this.image_scale = '1';
      this.image_top = '0';
      this.image_left = '0';
      
      this.image_mobile   = ImageGen('blackmobile');
      this.image_mobile_scale = '1';
      this.image_mobile_top = '0';
      this.image_mobile_left = '0';
      this.caption = 'Caption';
      this.subcaption = 'Subcaption';
      this.caption_mobile = 'Mobile Caption';
      this.subcaption_mobile = 'Mobile Subcaption';
      this.classmd = classmd;
      this.classlg = classlg;
      this.cta = [];

      // create cta for full screen tout
      // if (classlg == '12') {
      //   var newcta = new CreateCta('This is THE cta', 'red');
      //   this.cta.push(newcta);
      // }
    }
    return CreateTout;
  });


// FST object

app.factory('Tplsection', function() {

  function Tplsection(type, data) {
    this.type = type;
    this.data = data;
  }
  return Tplsection;
});
app.factory('Fst', function() {

  function Fst(image, video, sections) {
    this.image = image;
    this.image_scale = '1';
    this.image_top = '0';
    this.image_left = '0';
    this.hero_align = 'fstgrid1';
    this.video = '';
    this.sections = sections;
  }
  return Fst;
});
app.factory('Fstsection', function() {

  function Fstsection(type, data) {
    this.type = type;
    this.data = data;
  }
  return Fstsection;
});