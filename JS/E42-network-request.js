const button = document.querySelector("button");
const input = document.getElementById("todo-title");
const checkbox = document.getElementById("todo-completed");

async function fetchPost(event) {
  event.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: input.value,
      completed: true,
    }),
  });
  const data = await response.json();
  console.log(data);
  checkbox.checked = data.completed
}
button.addEventListener("click", fetchPost);