let button = document.getElementById("btn")


button.addEventListener("dblclick", () => {
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Yes you were clicked.</b>"
})

button.addEventListener("contextmenu", () => {
    alert("Don't hack us by right click")
})

document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode)
})