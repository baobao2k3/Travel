
const menuBtn=document.querySelector('.js-menu')
const modal=document.querySelector('.js-overlay-all')
const tickClose=document.querySelector('.ti-close')
    
menuBtn.onclick=function(){
    
}
tickClose.onclick=function(){
    modal.classList.remove('open')
}
function showMenuslider() {
     modal.classList.add('open')
}
function hideMenuslider() {
    modal.classList.remove('open')
}

