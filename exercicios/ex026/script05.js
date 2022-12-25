var tituloMenu = window.document.createElement("h1")
var text = window.document.createTextNode("Meu site")
tituloMenu.append(text)

menu.insertBefore(tituloMenu, ulMenu)

function ocultarMenu() {
    menu.style.display = 'none'
    backgroundMenu.style.display = 'none'
    tituloSite.style.visibility = 'visible'
}

function exbirMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block"
        backgroundMenu.style.display = "block"
        tituloSite.style.visibility = "hidden"
    } else {
        menu.style.display = "none"
        backgroundMenu.style.display = "none"
    }
}

function resizeView() {
    if (innerWidth >= 601) {
        menu.style.display = "block"
        backgroundMenu.style.display = "block"
    } else {
        menu.style.display = "none"
        backgroundMenu.style.display = "none"
    }
}
