let choiceArray;
let buttonArray;
let ServicesBox;
let ServicesBoxHover;

async function ServicesSetup(){
    choiceArray = document.querySelectorAll(".choice");
    buttonArray = document.querySelectorAll(".ServicesButtons")
    ServicesBox = document.querySelector(".horizontal-accordion");
    ServicesBoxHover = document.getElementById("servicesBoxHover");
    let index=0;
    choiceArray.forEach((card) => {
        buttonArray[index].addEventListener("pointerover", () => {
            choiceArray.forEach((element) => {
                element.classList.remove("expand", "unset")
                element.classList.add('small')
            })
            card.classList.remove("small")
            card.classList.add('expand')
    
            console.log(ServicesBox.classList);

            ServicesBox.classList.remove("shrink-accordion",true);
            ServicesBox.classList.add("expand-accordion");

            
        });
        index++;
    });
    ServicesBoxHover.addEventListener("pointerleave",()=>{
       if(ServicesBox.classList.contains("expand-accordion")){

        ServicesBox.classList.add("shrink-accordion");
        ServicesBox.classList.remove("expand-accordion");
        
        choiceArray.forEach((card)=>{
            card.classList.remove("expand");
            card.classList.add('small',"unset");
        })
       }
    })
}
ServicesSetup();
