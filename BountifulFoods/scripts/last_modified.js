document.querySelector(
	"#lastModified"
).textContent = `@ 2022 BountifulFoods | Carter Raymond | WDD230 Project | Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
