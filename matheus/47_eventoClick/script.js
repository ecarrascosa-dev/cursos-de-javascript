// Click

var btn = document.querySelector("#btn")

btn.addEventListener("click", function() {
    console.log("clicou")
    this.style.color = "red"
})

var title = document.querySelector("#title")
title.addEventListener("click", function() {
    var subtitle = document.querySelector(".subtitle")
    subtitle.style.background = "lightblue"
})

// double click
var subtitle = document.querySelector(".subtitle")

subtitle.addEventListener("dblclick", function() {
    console.log("click duplo!")
})