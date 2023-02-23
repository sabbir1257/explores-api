// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json()) //json is not similar but clase to json. parse
//   .then((json) => console.log(json));

const url = "https://jsonplaceholder.typicode.com/todos/1";
//   fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
  
  function lodeData() {
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
}
