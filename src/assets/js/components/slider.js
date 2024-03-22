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
    text: 'Матовый потолок в кабинет.',
    area: 'комната - 12 м кв',
    price: '13 969 руб',
    material: 'Ткань',
    factura: 'матовый',
    light: '1 люстра 3 светильника'
  }, 
  {
    text: 'Потолок в ванну со светильниками',
    area: 'ванна - 8 м кв',
    price: '18 578 руб',
    material: 'MSD Premium',
    factura: 'матовый',
    light: '2 вытянутых светильника'
  },  
  {
    text: 'Многоцветный натяжной потолок в евро-кухню.',
    area: 'кухня - 18 м кв',
    price: '22 374 руб',
    material: 'MSD Premium',
    factura: 'глянец',
    light: '9 светильников'
  },
  {
    text: 'Многоцветный натяжной потолок в спальню.',
    area: 'спальня - 16 м кв',
    price: '19 568 руб',
    material: 'MSD Premium',
    factura: 'глянец',
    light: '12 светильников'
  },
  {
    text: 'Многоцветный натяжной потолок в гостинную.',
    area: 'комната - 21 м кв',
    price: '26 490 руб',
    material: 'MSD Premium',
    factura: 'глянец',
    light: '1 светильник сложной формы'
  },
  {
    text: 'Матовый натяжной потолок в коридор.',
    area: 'коридор - 7 м кв',
    price: '9 911 руб',
    material: 'MSD Classic',
    factura: 'матовый',
    light: '2 светильника'
  },
  {
    text: 'Простой натяжной потолок в ванную комнату.',
    area: 'ванна - 9 м кв',
    price: '7 259 руб',
    material: 'Ткань',
    factura: 'ткань',
    light: 'Без светильников'
  },
  {
    text: 'Сатиновый потолок в небольшую комнату.',
    area: 'комната - 13 м кв',
    price: '14 552 руб',
    material: 'MSD Classic',
    factura: 'сатин',
    light: '1 светильник'
  },
  {
    text: 'Двухуровневый потолок в кухню.',
    area: 'кухня - 11 м кв',
    price: '17 114 руб',
    material: 'MSD Premium',
    factura: 'глянцевый',
    light: '3 светильника + люстра в подарок!'
  },
  {
    text: 'Натяжной потолок сложной формы в коридор.',
    area: 'коридор - 6 м кв',
    price: '15 712 руб',
    material: 'MSD Classic',
    factura: 'матовый',
    light: '6 светильников'
  },
  {
    text: 'Двухуровневый потолок в спальню.',
    area: 'комната - 11 м кв',
    price: '18 599 руб',
    material: 'MSD Premium',
    factura: 'глянцевый',
    light: 'по периметру'
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
