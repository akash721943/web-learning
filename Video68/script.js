// console.log("Aakash")

// let boxes = document.getElementsByClassName("box")

// console.log(boxes)

// boxes[3].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "green"

// document.querySelector(".box").style.backgroundColor = "yellow"

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "blue"
// })

e = document.getElementsByTagName("div")

// console.log(e[5].matches("#redbox"))
console.log(e[5].matches("#redbox"));
console.log(e[4].closest("#redbox"))
console.log(e[4].closest(".container"))
console.log(e[4].closest("html"))


console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))

