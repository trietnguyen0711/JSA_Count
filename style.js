let x = 0
let CountJs = document.getElementById("Count")
function increase() {
    x = x + 1
    CountJs.innerText = x
}
function decrease() {
    if (x == 0) {
        alert("Don't have any people to decrease")
    }
    else {
        x = x - 1
        CountJs.innerText = x
    }
}
function reset() {
    if (x == 0) {
        alert("It has already reseted")
    }
    else {
        x = 0
        CountJs.innerText = x
    }
}