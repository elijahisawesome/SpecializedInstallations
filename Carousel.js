let buttons;
let iSlides;
let productText;
//Should be split


async function carousel(){
  var navbar = await fetch("./ProductsModule.html");
  var html = await navbar.text();
  document.getElementById("productswrapper").insertAdjacentHTML("afterbegin",html);

  runit();
}
carousel();
function runit(){
  buttons = document.querySelectorAll("[data-carousel-button]");
  iSlides = buttons[0].closest("[data-carousel]").querySelector("[data-slides]");
  productText = document.getElementById("productText");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })
  
  

 

  setInterval(cycle,7000);
}
function cycle(){
  const activeSlide = iSlides.querySelector("[data-active]");
  let newIndex = [...iSlides.children].indexOf(activeSlide) + 1
      if (newIndex < 0) newIndex = iSlides.children.length - 1
      if (newIndex >= iSlides.children.length) newIndex = 0
  
      iSlides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active

      productText.innerHTML = iSlides.children[newIndex].dataset.name;
}


