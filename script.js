
var ul = document.getElementById("listbox")
var inpu = document.getElementById("text")

function add() {
    var listitem = document.createElement("li")
    listitem.innerHTML = inpu.value + "<button onclick='Delete(event)'>Delete</button>"
    ul.append(listitem)
}

function Delete(event) {
    event.target.parentElement.remove()
}
