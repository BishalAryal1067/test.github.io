const galleryOverlay = document.querySelector('.gallery-overlay');
const serviceImage = document.querySelectorAll('.service__image');
const header = document.querySelector('.main-header__top');
const navbar = document.querySelector('nav');
const navigationContainer = document.querySelector('.main-menu__wrapper .clearfix')
const body = document.querySelector('body');
const overlayCloseBtn = document.querySelector('#close-overlay');


const navigationMenu = [
    header,navbar,navigationContainer
]



serviceImage.forEach(image=>{
    image.addEventListener('click', ()=>{
        let url = image.src;
        let newImage = document.createElement('img');
        newImage.src = url;
        galleryOverlay.appendChild(newImage);
        galleryOverlay.classList.add('gallery-overlay__show');
        newImage.classList.add('overlay__image');
        hideNavbar();
        overlayCloseBtn.addEventListener('click', ()=>{
            galleryOverlay.removeChild(newImage);
            galleryOverlay.classList.remove('gallery-overlay__show');
            showNavbar();
        })
    })
})





function hideNavbar(){
  navigationMenu.forEach(item=>{
    item.classList.add('hide__navbar')
    console.log(item);
  })   
}

function showNavbar(){
    navigationMenu.forEach(item=>{
        item.classList.remove('hide__navbar')
        console.log(item);
      })  
}