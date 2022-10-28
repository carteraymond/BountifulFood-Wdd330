document.querySelector(
	"#lastModified"
).textContent = `@ 2022 ToL Chamber | Carter Raymond | WDD230 Project | Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const dayOfWeek = new Intl.DateTimeFormat("en-US",{weekday:"long",}).format(now);
if (dayOfWeek ==="Monday" || "Tuesday"){
	const banner = document.createElement("div");
	banner.className = "banner";
	banner.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
	document.body.insertBefore(banner,document.body.childNodes[0]);
};
datefield.innerHTML = `<em>${fulldate}</em>`;
