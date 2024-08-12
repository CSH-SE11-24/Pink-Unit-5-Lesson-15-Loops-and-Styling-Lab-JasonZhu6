console.log("Script running...");
// Task 1: All off button
// Set up the the DOM manipulation flow such that when you press the all off button, the background color of all the lightbulb p tags changes to black
let off = document.querySelector("#off")
let light = document.querySelectorAll(".lightbulb")

off.addEventListener("click", function() {
  for (let i = 0; i < light.length; i++) {
    light[i].style.backgroundColor = "black"
  }
})

// Task 2: CSH Mode
// Set up the DOM manipulation flow such that when your mouse is over the CSH mode button, the body's background color changes to green and the lightbulb p tags text change to "💻"
// When your mouse leaves the CSH mode button, the body's background should go back to black and the lightbulb p tags text should go back to "💡"
let csh = document.querySelector("#csh")
let body = document.querySelector("body")

csh.addEventListener("mouseover", function() {
  body.style.backgroundColor = "green"

  for (let i = 0; i < light.length; i++) {
    light[i].textContent = "💻"
  }
})

csh.addEventListener("mouseout", function() {
  body.style.backgroundColor = "black"

  for (let i = 0; i < light.length; i++) {
    light[i].textContent = "💡"
  }
})

// Task 3: On and off feature
// Set up the DOM manipulation flow such that when you click any of the lightbulb p tags, the p tag's background color toggles from black to white
// You should use the classList property with the appropriate class from style.css
for (let i = 0; i < light.length; i++) {
  light[i].addEventListener("click", function() {
    light[i].classList.toggle("black")
  })
}
