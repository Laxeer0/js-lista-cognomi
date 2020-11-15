var lastName = ["Bianchi", "Rossi", "Verdi", "Bassano", "Zerino"];
console.log(lastName);

var newLastname = prompt("Inserisci cognome");

lastName.push(newLastname);
lastName.sort();

var listLastName = document.getElementById("listLastname");
var spanLastName = document.getElementById("newLastnamespan")
var positionLastname = 0;

for(var i = 0; i < lastName.length; i++){
  listLastName.innerHTML += "<li>"+lastName[i]+"</li>";
  if(lastName[i] == newLastname){
    spanLastName.innerHTML = i+1;
  }
}
