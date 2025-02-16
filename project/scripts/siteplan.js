//Hamburger effect to collapse the menu on mobile screens:
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});


//Array used to define messages (which will change) within the class hero-message.
const messages = [
    "At Columnprax, we care about your well-being.",
    "Experience relief and recovery with our expert therapy.",
    "Your health, our priority—trust our professional team."
];
let index = 0;


//JavaScript DOM Manipulation:
//Function used to change the messages from the "messages" array.
function changeMessage() {
    index = (index + 1) % messages.length;
    document.getElementById("heroMessage").textContent = messages[index];
}
setInterval(changeMessage, 5000); 


//JavaScript Conditional Branching:
//used in my form to validate the contact field before submitting the form.
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que la página se recargue

      // Capturar los valores ingresados por el usuario
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields.");
          return;
      }

      // URL de tu formulario de Google Forms (usa "formResponse" en lugar de "viewform")
      let formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdvxnPqNgzNrGiGWkmrhbJbO6dT0b3Rpnax2MyBE2ASrfoSJQ/formResponse";

      // Construir los datos a enviar
      let formData = new FormData();
      formData.append("entry.55427798", name);      // Nombre
      formData.append("entry.1531109985", email);   // Correo
      formData.append("entry.1642900546", message); // Mensaje

      // Enviar los datos usando Fetch API
      fetch(formUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors"
      })
      .then(() => {
          alert("Message sent successfully!");
          form.reset(); // Limpia el formulario
      })
      .catch(error => {
          alert("Error sending the message. Try again.");
      });
  });
});



//LocalStorage to store visits in the user's browser (just in the footer of the home page: siteplan):
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("siteplan.html")) {
      let visitCount = localStorage.getItem("visitCountSiteplan");

      if (!visitCount) {
          visitCount = 1;
      } else {
          visitCount = parseInt(visitCount) + 1;
      }

      localStorage.setItem("visitCountSiteplan", visitCount);
      document.getElementById("visitCounter").textContent = visitCount;
  }
});


//Display the current year and indicate my last HTML update (in the footer):
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
