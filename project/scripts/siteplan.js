const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const messages = [
    "At Columnprax, we care about your well-being.",
    "Experience relief and recovery with our expert therapy.",
    "Your health, our priority—trust our professional team."
];

let index = 0;

function changeMessage() {
    index = (index + 1) % messages.length;
    document.getElementById("heroMessage").textContent = messages[index];
}

setInterval(changeMessage, 5000); 
