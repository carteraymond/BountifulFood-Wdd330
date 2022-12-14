const requestURL =
    "https://brotherblazzard.github.io/canvas-content/fruit.json";

document.querySelector("#dateStamp").value = new Date();
const populate = document.querySelectorAll('#fruit');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const directory = jsonObject;
        directory.forEach(populateOptions);
        
    });

function populateOptions(directory) {
    let fruit1 = document.createElement("option");
    let fruit2 = document.createElement("option");
    let fruit3 = document.createElement("option");
    fruit1.value = directory.name;
    fruit2.value = directory.name;
    fruit3.value = directory.name;
    fruit1.textContent = directory.name;
    fruit2.textContent = directory.name;
    fruit3.textContent = directory.name;
    

    document.getElementById("fruit1").appendChild(fruit1);
    document.getElementById("fruit2").appendChild(fruit2);
    document.getElementById("fruit3").appendChild(fruit3);
}
function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    createTable(value);
    fruit1 = value.fruit1
    fruit2 = value.fruit2
    fruit3 = value.fruit3   
}



const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit, createTable);


function createTable(values) {
    // create table elements to add to document
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let fruit1 = document.createElement("td");
    let fruit2 = document.createElement("td");
    let fruit3 = document.createElement("td");
    let info = document.createElement("td");
    let date = document.createElement("td")
    let carbs = document.createElement("td");

    name.textContent = `${values.fname}`;
    fruit1.textContent = `${values.fruit1}`;
    fruit2.textContent = `${values.fruit2}`;
    fruit3.textContent = `${values.fruit3}`;
    info.textContent = `${values.extrainfo}`;
    date.textContent = `${values.formDate}`;

    row.appendChild(name);
    row.appendChild(fruit1);
    row.appendChild(fruit2);
    row.appendChild(fruit3);
    row.appendChild(info);
    row.appendChild(date);

    document.querySelector("#information").appendChild(row);
}

