let scrollMenu = document.getElementById("scrollMenu")

function onTrigger() {
    if (scrollMenu.classList.contains("hidden")) {
        scrollMenu.classList.remove("hidden")
        scrollMenu.classList.add("block")
    } else if (scrollMenu.classList.contains("block")) {
        scrollMenu.classList.remove("block")
        scrollMenu.classList.add("hidden")
    }
}

    