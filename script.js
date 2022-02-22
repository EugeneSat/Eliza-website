//МОДАЛЬНОЕ ОКНО
let k = function () {


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

};
k();
AOS.init();


function appTheme(theme) {
   document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
   document.body.classList.add(`theme-${theme}`);

}
document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("#theme").addEventListener("change", function() {
        appTheme(this.value);
   });
});
