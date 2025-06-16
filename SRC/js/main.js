let weight
let height
let imc

weight = prompt("place, enter your weight")
height = prompt("place, enter your height")

parseInt(weight)
parseInt(height)

imc = weight / (height * height )


window.alert("your imc is " + imc)