app.factory('ImageGen', function() {

  function ImageGen(type) {
  	if (type == 'blackpixel') {
  		return '/images/blackpixel.jpg';
  	}
  	else if (type == 'black1x1') {
  		return '/images/black1x1.jpg';
  	}
  	else if (type == 'black2x1') {
  		return '/images/black2x1.jpg';
  	}
  	else if (type == 'black3x1') {
  		return '/images/black3x1.jpg';
  	}
  	else if (type == 'black4x1') {
  		return '/images/black4x1.jpg';
  	}
  	else if (type == 'blackmobile') {
  		return '/images/blackmobile.jpg';
  	}
  	else if (type == 'AirMaxLunar90_HUB_02_FILT') {
  		//return '-JHU2n5GPPVqSVBqSBPN';
  		return '/images/AirMaxLunar90_HUB_02_FILT.jpg';
  	}
  	else if (type == '_jordan') {
  		//return '-JHU2n5K9JEbWEoNnMLa';
  		return '/images/_jordan.jpg';
  	}
  	else if (type == '_polygonshoe') {
  		//return '-JHU2n5Lf2l1xYahR1VL';
  		return '/images/_polygonshoe.jpg';
  	}
  	else if (type == '_upcloseShoe') {
  		//return '-JHU2n5MHv2lFJ7ZN4J5';
  		return '/images/_upcloseShoe.jpg';
  	}
  	else if (type == 'guy-1.3') {
  		//return '-JHU2n5MHv2lFJ7ZN4J6';
  		return '/images/guy-1.3.jpg';
  	}
  	else if (type == 'shoe-sing') {
  		//return '-JHU2n5NrG40TlwiFkGK';
  		return '/images/shoe-sing.jpg';
  	}
  	else if (type == 'knoll') {
  		//return '-JHU2n5ONY6amfyY5WSf';
  		return '/images/knoll.jpg';
  	}
  	else if (type == 'lady') {
  		//return '-JHU2n5ONY6amfyY5WSg';
  		return '/images/lady.jpg';
  	}
  	else if (type == 'grey') {
		return '/images/grey.jpg';
  	}
  }
  return ImageGen;
});

