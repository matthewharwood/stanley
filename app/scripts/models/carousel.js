app.factory('Carousel', function(ImageGen) {

  function Carousel(type) {
  	var carousel1 = [
        {
          'image': ImageGen('black4x1'),
          'image_scale' : '1',
          'image_top' : '0',
          'image_left' : '0',
          'hero_align' : 'fstgrid6',
          //'video': '/videos/black.mp4',
          'video': '',
          'sections':[
          {
            type:'caption', data: 'Nike Knows'
          },
          {
            type:'subcaption', data: 'The passion. The attitude. The lifestyle.'
          },
          {
            type:'body', data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, temporibus, soluta atque voluptatum animi officia hic eaque suscipit deserunt perspiciatis iure voluptatem sint tenetur cupiditate eligendi aperiam cumque minus placeat!'
          },
          {
            type: 'cta', data: [
            {
              ctaclass: 'black',
              text: 'black'
            }
            ]
          }
        ]}
        ,
        {
          'image': ImageGen('black4x1'),
          'image_scale' : '1',
          'image_top' : '0',
          'image_left' : '0',
          'hero_align' : 'fstgrid6',
          'video': '',
          'sections':[
          {
            type:'caption', data: 'Nike Knows Something'
          },
          {
            type:'subcaption', data: 'The passion. The attitude. The lifestyle.'
          },
          {
            type:'body', data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, temporibus, soluta atque voluptatum animi officia hic eaque suscipit deserunt perspiciatis iure voluptatem sint tenetur cupiditate eligendi aperiam cumque minus placeat!'
          },
          {
            type: 'cta', data: []
          }
        ]}
        ,

        {
          'image': ImageGen('black4x1'),
          'image_scale' : '1',
          'image_top' : '0',
          'image_left' : '0',
          'hero_align' : 'fstgrid6',
          'video': '',
          'sections':[
          {
            type:'caption', data: 'Nike Knows a bit more'
          },
          {
            type:'subcaption', data: 'The passion. The attitude. The lifestyle.'
          },
          {
            type:'body', data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, temporibus, soluta atque voluptatum animi officia hic eaque suscipit deserunt perspiciatis iure voluptatem sint tenetur cupiditate eligendi aperiam cumque minus placeat!'
          },
          {
            type: 'cta', data: []
          }
        ]}
        ,
        {
          'image': ImageGen('black4x1'),
          'image_scale' : '1',
          'image_top' : '0',
          'image_left' : '0',
          'hero_align' : 'fstgrid6',
          'video': '',
          'sections':[
          {
            type:'caption', data: 'Nike Knows a lot'
          },
          {
            type:'subcaption', data: 'The passion. The attitude. The lifestyle.'
          },
          {
            type:'body', data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, temporibus, soluta atque voluptatum animi officia hic eaque suscipit deserunt perspiciatis iure voluptatem sint tenetur cupiditate eligendi aperiam cumque minus placeat!'
          },
          {
            type: 'cta', data: []
          }
        ]}
      ];

      var carousel2 = [
        {
          'image': ImageGen('black4x1'),
          'image_scale' : '1',
          'image_top' : '0',
          'image_left' : '0',
          'hero_align' : 'fstgrid6',
          'video': '',
          'sections':[
          {
            type:'caption', data: 'Nike Knows'
          },
          {
            type:'subcaption', data: 'The passion. The attitude. The lifestyle.'
          },
          {
            type:'body', data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, temporibus, soluta atque voluptatum animi officia hic eaque suscipit deserunt perspiciatis iure voluptatem sint tenetur cupiditate eligendi aperiam cumque minus placeat!'
          },
          {
            type: 'cta', data: [
            {
              ctaclass: 'black',
              text: 'black'
            }
            ]
          }
        ]}
        ,
        {
          'image': ImageGen('black4x1'),
          'image_scale' : '1',
          'image_top' : '0',
          'image_left' : '0',
          'hero_align' : 'fstgrid6',
          'video': '',
          'sections':[
          {
            type:'caption', data: 'Nike Knows Something'
          },
          {
            type:'subcaption', data: 'The passion. The attitude. The lifestyle.'
          },
          {
            type:'body', data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, temporibus, soluta atque voluptatum animi officia hic eaque suscipit deserunt perspiciatis iure voluptatem sint tenetur cupiditate eligendi aperiam cumque minus placeat!'
          },
          {
            type: 'cta', data: []
          }
        ]}
        ,

        {
          'image': ImageGen('black4x1'),
          'image_scale' : '1',
          'image_top' : '0',
          'image_left' : '0',
          'hero_align' : 'fstgrid6',
          'video': '',
          'sections':[
          {
            type:'caption', data: 'Nike Knows a bit more'
          },
          {
            type:'subcaption', data: 'The passion. The attitude. The lifestyle.'
          },
          {
            type:'body', data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, temporibus, soluta atque voluptatum animi officia hic eaque suscipit deserunt perspiciatis iure voluptatem sint tenetur cupiditate eligendi aperiam cumque minus placeat!'
          },
          {
            type: 'cta', data: []
          }
        ]}
        ,
        {
          'image': ImageGen('black4x1'),
          'image_scale' : '1',
          'image_top' : '0',
          'image_left' : '0',
          'hero_align' : 'fstgrid6',
          'video': '',
          'sections':[
          {
            type:'caption', data: 'Nike Knows a lot'
          },
          {
            type:'subcaption', data: 'The passion. The attitude. The lifestyle.'
          },
          {
            type:'body', data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, temporibus, soluta atque voluptatum animi officia hic eaque suscipit deserunt perspiciatis iure voluptatem sint tenetur cupiditate eligendi aperiam cumque minus placeat!'
          },
          {
            type: 'cta', data: []
          }
        ]}
      ];

  	if (type == 1) {
  		return carousel1;
  	}
  	else if (type == 2) {
  		return carousel2;
  	}
  }
  return Carousel;
});