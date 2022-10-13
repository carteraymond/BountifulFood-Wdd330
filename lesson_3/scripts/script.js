const date = new Date();
let year=date.getFullYear();
let time =document.lastModified


const intro="&copy;"+year+ " Carter Raymond"
const timeUpdated="Last Updated: " + time
console.log(date.getFullYear())

document.querySelector("#info").innerHTML = intro;
document.getElementById("last-updated").innerHTML = timeUpdated;