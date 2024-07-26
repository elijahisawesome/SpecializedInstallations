let installationButtons;
let installationSlides;
let installationTitle;
let installationBody;

let c;
let s;

async function installations(){
  var mInstallations = await fetch("Modules/Installations.html")
  var dInstallations = await fetch("Modules/InstallationsDesktop.html")
  var html = await mInstallations.text().then(
    html=>{
        document.getElementById("mobileInstallationsWrapper").insertAdjacentHTML("afterbegin",html);
        Runit();
    }
  )
  var dHtml = await dInstallations.text().then(
    xHtml =>{
      document.getElementById("installations").insertAdjacentHTML("afterbegin",xHtml);
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
      const offset = button.dataset.installationButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-installation]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active

      installationTitle.innerHTML = installationSlides.children[newIndex].dataset.title;
      installationBody.innerHTML = installationSlides.children[newIndex].dataset.body;
    })
  })

  c = document.querySelector(".iCarousel");
  s = document.querySelectorAll(".sSlide");
  
  s.forEach((slide)=>{
    slide.style.height = s[0].clientWidth +"px";
  })
  
  c.style.height = s[0].scrollHeight+"px";
  window.addEventListener("resize",(event)=>{
    s.forEach((slide)=>{
        slide.style.height = slide.clientWidth +"px";
      })
    c.style.height = s[0].scrollHeight +"px";
  })

}



