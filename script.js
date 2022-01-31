//МОДАЛЬНОЕ ОКНО
const modalViews = document.querySelectorAll('.servises__modal');
const modalBtns = document.querySelectorAll('.servises__button');
const modalClose = document.querySelectorAll('.servises__modal_close');

let modal = function(modalClick){
   modalViews[modalClick].classList.add('active_modal');
}

modalBtns.forEach((mb, i) =>{
   mb.addEventListener('click', () =>{
      modal(i)
   });
});

modalClose.forEach((mc) =>{
   mc.addEventListener('click', () =>{
      modalViews.forEach((mv) => {
         mv.classList.remove('active_modal');
      });
   });
})
