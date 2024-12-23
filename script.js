

  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div"); // Create a new square
    square.classList.add("square"); // Add the "square" class
    container.appendChild(square); // Add the square to the container
    console.log('Square created')
  }


  const  squares = document.querySelectorAll(".square");


squares.forEach(square => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "red"; // Change color dynamically
  });
});


const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', ()=> {
  squares.forEach(square => {
    square.style.backgroundColor = "";//resets color
  })

})






