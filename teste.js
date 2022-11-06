let submitButton = document.getElementById("submit-button");
let image = document.getElementById("image");

 submitButton.addEventListener("click", (e) => {
  e.preventDefault();
 
  fetch("https://randomfox.ca/floof/")
     
 
  .then((response) => {
    return response.json();
  })

  .then((data) => {
      console.log('Success:', data);
        image.src = data.image;
  })
  .catch((error) => {
      console.error('Error:', error);
  });

})