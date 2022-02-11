var myGlide = new Glide('.portfolio__glide', {
  type: 'carousel',
  perView: 1,
  breakpoints: {
		993: {
			peek: {
        before: 30,
        after: 30
      }
    }
  },
  
}).mount();

var myGlide2 = new Glide('.feedback__glide', {
  type: 'carousel',
  perView: 3,

  breakpoints: {
		993: {
      perView: 2,
      peek: {
        before: 40,
        after: 40
      }
    },
    430: {
      perView: 1,
      peek: {
        before: 40,
        after: 40
      },
    },
    330: {
      perView: 1,
      peek: {
        before: 20,
        after: 20
      }
    }
  },
  
}).mount();

var projectsData = [ 
  {
    name: 'Проект №193',
    text: 'Матовый потолок в спальню.',
    area: 'спальня - 12 м кв',
    price: '11 965 руб',
    material: 'Ткань',
    factura: 'матовый',
    light: '6 светильников'
  }, 
  {
    name: 'Проект №23',
    text: 'Глянцевый натяжной потолок в кухню.',
    area: 'кухня - 13 м кв',
    price: '11 578 руб',
    material: 'MSD Classic',
    factura: 'глянец',
    light: '7 светильников'
  },  
  {
    name: 'Проект №75',
    text: 'Двухуровневый, волнообразный натяжной потолок в кухню.',
    area: 'кухня - 12 м кв',
    price: '22 374 руб',
    material: 'MSD Classic',
    factura: 'глянец',
    light: '1 люстра, 5 светильников'
  },
  {
    name: 'Проект №219',
    text: 'Сатиновый потолок в ванную комнату.',
    area: 'ванна - 7 м кв',
    price: '10 388 руб',
    material: 'MSD Premium',
    factura: 'сатин',
    light: '9 светильников'
  }
];

pUpdateData();

function pUpdateData() {
  $('.portfolio__desc-text').fadeOut();
  $('.portfolio__desc-group').fadeOut();
  setTimeout(function() {
    var data = projectsData[myGlide.index];
    document.getElementById('pText').innerHTML = data.text;
    document.getElementById('pArea').innerHTML = data.area;
    document.getElementById('pPrice').innerHTML = data.price;
    document.getElementById('pMaterial').innerHTML = data.material;
    document.getElementById('pFactura').innerHTML = data.factura;
    document.getElementById('pLight').innerHTML = data.light;
    $('.portfolio__desc-group').fadeIn();
    $('.portfolio__desc-text').fadeIn();
  }, 300);
}

myGlide.on('run.before', function() {
  pUpdateData();
});
