const container = document.querySelector("#container");

async function fetchData(){
 const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
 const jsonData = await response.json();

 const h2 = document.createElement("h2");
 h2.innerText = jsonData.title;

 const checkbox = document.createElement("input");
 checkbox.setAttribute("type","checkbox");
 
 if(jsonData.completed){
   checkbox.checked = true;
 } else{
   checkbox.checked = false;
 }


 container.append(h2);
 container.append(checkbox);
}

fetchData()