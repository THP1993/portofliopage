// template_7cmbj7p
// service_opvlhdx"
// ldU_gvrzmfKaA-r8G


let isModalOpen = false;
let contrastToggle = false;


function moveBackground(event){
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX;
  const y = event.clientY;
  
  for (let i = 0; i < shapes.length; ++i) {
    shapes[i].style.transform = `translate (${x}px, ${y}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
  
}





function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visable";

  emailjs
    .sendForm(
      "service_opvlhdx",
      "template_7cmbj7p",
      event.target,
      "ldU_gvrzmfKaA-r8G"
    )
    .then(() => {
      loading.classList.remove("model__overlay--visable");
      success.classList += " modal__overlay--visable";
    }).catch(() => {
       alert(
        "The email service is temporarily unavailable. Please contact me directly on thwebdesignservices@gmail.com "
       ); 
    })
}


function toggleModal() {

    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
        
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
}

