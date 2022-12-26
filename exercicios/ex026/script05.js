var tituloMenu = window.document.createElement("h1")
var text = window.document.createTextNode("Meu site")
tituloMenu.append(text)

function ocultarMenu() {
    menu.style.display = 'none'
    backgroundMenu.style.display = 'none'
    tituloSite.style.visibility = 'visible'
}

function exbirMenu() {
    menu.style.display = "block"
    backgroundMenu.style.display = "block"

    tituloSite.style.visibility = "hidden"
    menu.insertBefore(tituloMenu, ulMenu)
}

function resizeView() {
    if (innerWidth >= 769) {
        menu.style.display = "block"
        backgroundMenu.style.display = "none"

        tituloSite.style.visibility = 'visible'
        menu.removeChild(tituloMenu)
    }

    if (innerWidth < 769 && backgroundMenu.style.display == 'none') {
        menu.style.display = "none"
    }
}
