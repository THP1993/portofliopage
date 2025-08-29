// template_7cmbj7p
// service_opvlhdx"
// ldU_gvrzmfKaA-r8G

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


let isModalOpen = false;
function toggleModal() {
isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList.remove("modal--open");
        
    }
    document.body.classList += " modal--open";
}