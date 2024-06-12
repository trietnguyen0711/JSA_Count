let CountJs = document.getElementById("Count")
if (localStorage.getItem("points")) {
    let x = parseInt(localStorage.getItem("points"))
    CountJs.innerText = x
    localStorage.setItem("points", x)
}

function increase() {
    if (localStorage.getItem("points")) {
        let x = parseInt(localStorage.getItem("points"))
        x = x + 1
        CountJs.innerText = x
        localStorage.setItem("points", x)
    }
    else {
        let x = 0
        x = x + 1
        CountJs.innerText = x
        localStorage.setItem("points", x)
    }
}
function decrease() {
    if (localStorage.getItem("points")) {
        let x = parseInt(localStorage.getItem("points"))
        if (x == 0) {
            alert("Don't have any points to decrease")
        }
        else {
            x = x - 1
            CountJs.innerText = x
            localStorage.setItem("points", x)
        }
    }
    else {
        let x = 0
        if (x == 0) {
            alert("Don't have any points to decrease")
        }
        else {
            x = x - 1
            CountJs.innerText = x
        }
    }
}
function reset() {
    if (localStorage.getItem("points")) {
        let x = parseInt(localStorage.getItem("points"))
        if (x == 0) {
            alert("It has already reseted")
        }
        else {
            x = 0
            CountJs.innerText = x
            localStorage.setItem("points", x)
        }
    }
    else {
        let x = 0
        if (x == 0) {
            alert("It has already reseted")
        }
        else {
            x = 0
            CountJs.innerText = x
        }
    }
}