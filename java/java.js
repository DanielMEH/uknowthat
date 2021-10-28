window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrousel__lista'),  {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carrusel__indicadores',
        arrows: {
          prev: '.carrousel__anterior',
          next: '.carrousel__suguiente'

    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            duration: 0.25
          }
        }
      ]
		
	});
});
const close = document.getElementById('close-uknow');
const close_dad = document.getElementById('cerrar__btn')

close.addEventListener('click', ()=>{
  if (close !== 'click') {
    document.querySelector('.submenu_hero').classList.add('active')
    document.querySelector('.submenu_ketlap').classList.add('activo')
    document.querySelector('.close').classList.add('activos')
  }
  if (close && 'click') {
    close_dad.addEventListener('click',()=>{
      document.querySelector('.submenu_hero').classList.remove('active')
    document.querySelector('.submenu_ketlap').classList.remove('activo')
    document.querySelector('.close').classList.remove('activos')
    })
  }
});

// const imagen1 = document.getElementById('imahe')
// const  carcgarImagen = (entradas, observer)=>{
//   entradas.forEach( (entrada) =>{
//     if (entrada.isIntersecting) {
//       entrada.target.classList.add("ver")
      
//     }
//   }) 

  
// }
// const obserImg = new IntersectionObserver(carcgarImagen,{
//   root: null,
//   rootMargin: "500, 0, 100, 0",
//   threshold: 1.0
// });
// obserImg.observe(imagen1)