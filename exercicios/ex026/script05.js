// Criar o título do menu
var tituloMenu = window.document.createElement("h1")
var text = window.document.createTextNode("Meu site")
tituloMenu.append(text)

// Criar uma linha horizontal e dar estilo a ela
var linha = window.document.createElement("hr")
linha.style = 'margin-top: 6px; margin-bottom: 20px;'

// Links do menu
var linksMenu = window.document.querySelectorAll("a.linksMenu")

function ocultarMenu() {
    // Esconder a div de fundo do menu
    backgroundMenu.style.display = 'none'
    // Iniciar a animação de saida do menu depois de 0.2s/200ms
    setTimeout(() => {
        menu.style.animation = 'saidaMenu 0.2s ease-out 0s 1 normal forwards'
        tituloSite.style.visibility = 'visible'
    }, 200)
    // Esconder o menu depois da animação acabar em 0.39s/390ms
    setTimeout(() => {
        menu.style.display = 'none'
    }, 390)
}

function exbirMenu() {
    // adicionar animação de abertura do menu, abrir o menu e a div de fundo
    menu.style.animation = "entradaMenu 0.3s cubic-bezier(0, 0, 0.3, 1) 0.01s 1 normal backwards running"
    menu.style.display = "block"
    backgroundMenu.style.display = "block"

    // Colocar margem lateral nos itens do menu
    if (innerWidth < 769) {
        if (menu.offsetWidth <= 296) {
            for (var i = 0; i < 5; i++) {
                linksMenu[i].style.margin = '8px'
            }
        } else {
            // Voltar para o valor padrão *Que eu definido nas css
            for (var i = 0; i < 5; i++) {
                linksMenu[i].style.margin = '8px auto'
            }
        }
    }
    // Esconder o título do site, inserir o título no menu e lihna horizontal
    tituloSite.style.visibility = "hidden"
    menu.insertBefore(tituloMenu, ulMenu)
    menu.insertBefore(linha, ulMenu)
}

function resizeView() {
    // Configurações do modo mobile
    if (innerWidth < 769) {
        // Colocar margem lateral nos itens do menu 
        if (menu.offsetWidth <= 296) {
            for (var i = 0; i < 5; i++) {
                linksMenu[i].style.margin = '8px'
            }
        } else {
            // Voltar para o valor padrão *Que eu definido nas css
            for (var i = 0; i < 5; i++) {
                linksMenu[i].style.margin = '8px auto'
            }
        }

        // Aumentar a porcentagem que o menu oculpa na tela
        if (innerWidth <= 450) {
            menu.style.width = '65vw'
        } else {
            // Voltar para o valor padrão *Que eu definido nas css
            menu.style.width = '55vw'
        }
        // Remover os estilos do link do desktop
        linksMenu[atual].style = ''
    } else {
        // Configurações do modo desktop
        menu.style.display = "block"
        backgroundMenu.style.display = "none"

        tituloSite.style.visibility = 'visible'
        
        // Remover o h1 e linha horizontal do menu quando sair do modo mobile
        if (menu.childElementCount >= 3) {
            menu.removeChild(tituloMenu)
            menu.removeChild(linha)
        }
        
        // Remover a margem dos links do menu para o modo desktop
        for (i = 0; i < 5; i++) {
            linksMenu[i].style.margin = '0px'
        }

        // Readicionar borda para o link selecionado anteriormente
        linksMenu[atual].style = 'font-weight: bold; border-bottom: 4px solid var(--cor04);'
    }

    // Evitar que o menu abra sozinho quando a tela for diminuida
    if (innerWidth < 769 && backgroundMenu.style.display == 'none') {
        menu.style.display = 'none'
    }
}

var atual = 0
// Adicionar borda ao primeiro link
linksMenu[atual].style = 'font-weight: bold; border-bottom: 4px solid var(--cor04);'

function selecionar(posicao) {
    if (innerWidth > 768) {
        // Remover estilos do link atual
        linksMenu[atual].style = ''
        // Adicionar estilos ao novo link selecionado
        linksMenu[posicao].style = 'font-weight: bold; border-bottom: 4px solid var(--cor04);'
        // Adicionar a posição do link selecionado a variável atual
        atual = posicao
    }
}