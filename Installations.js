let installationButtons;
let installationSlides;
let installationTitle;
let installationBody;
//Should be split


async function installations(){
  var navbar = await fetch("./Installations.html")
  var html = await navbar.text().then(
    html=>{
        document.getElementById("mobileInstallationsWrapper").insertAdjacentHTML("afterbegin",html);
        Runit();
    }
  )
}
installations();

function Runit(){
  installationButtons = document.querySelectorAll("[data-installation-button]");
  installationSlides = installationButtons[0].closest("[data-installation]").querySelector("[data-slides]");
  installationTitle = document.getElementById("installationTitle");
  installationBody = document.getElementById("installationBody")
  installationButtons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-installation]")
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
  const activeSlide = installationSlides.querySelector("[data-active]");
  let newIndex = [...installationSlides.children].indexOf(activeSlide) + 1
      if (newIndex < 0) newIndex = installationSlides.children.length - 1
      if (newIndex >= installationSlides.children.length) newIndex = 0
  
      installationSlides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active

      installationTitle.innerHTML = installationSlides.children[newIndex].dataset.title;
      installationBody.innerHTML = installationSlides.children[newIndex].dataset.body;
}


