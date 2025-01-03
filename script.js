
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



// const newGridButton = document.getElementById("newGridButton");
// newGridButton.addEventListener('click', () => { 
//   let newGrid = prompt("number per side for new grid") 
//    newGrid = Number(newGrid);
//    if (isNaN(newGrid) || newGrid < 1 || newGrid > 100) {
//     console.log("Invalid choice. Try again.");
//     return; // Exit early if input is invalid
//   } 
// });
   

//   const container = document.getElementById("container");
//   container.innerHTML = ""; // Clears all squares
 
  
//   for (let i = 0; i < newGrid; i++) {

//     for (let j = 0; j < newGrid; j++) {
  
//   const square = document.createElement("div");
//   square.classList.add("square");// Apply styles
//   container.appendChild(square); // Add square to the container
 

//   }
// } 







