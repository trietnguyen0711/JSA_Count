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

let amountKey = document.querySelector(".amountKey")
if (localStorage.getItem("key")) {
    let key = localStorage.getItem("key")
    amountKey.innerHTML = key
}
else {
    let key = 0
    amountKey.innerHTML = key
}
function increaseKey() {
    if (localStorage.getItem("key")) {
        let key = parseInt(localStorage.getItem("key"))
        key += 1
        amountKey.innerHTML = key
        localStorage.setItem("key", JSON.stringify(key))
    }
    else {
        let key = 0
        key += 1
        amountKey.innerHTML = key
        localStorage.setItem("key", JSON.stringify(key))
    }
}
function decreaseKey() {
    if (localStorage.getItem("key")) {
        let key = parseInt(localStorage.getItem("key"))
        if (key == 0) {
            alert("Don't have any keys to decrease!")
        }
        else {
            key -= 1
            amountKey.innerHTML = key
            localStorage.setItem("key", JSON.stringify(key))
        }
    }
    else {
        let key = 0
        key -= 1
        amountKey.innerHTML = key
        localStorage.setItem("key", JSON.stringify(key))
    }
}
function resetKey() {
    if (localStorage.getItem("key")) {
        let key = parseInt(localStorage.getItem("key"))
        if (key == 0) {
            alert("You don't have any keys to reset!")
            return
        }
        key = 0
        amountKey.innerHTML = key
        localStorage.setItem("key", JSON.stringify(key))
    }
    else {
        let key = 0
        alert("You don't have any keys to reset!")
        localStorage.setItem("key", JSON.stringify(key))
    }
}