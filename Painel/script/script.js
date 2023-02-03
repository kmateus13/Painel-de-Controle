function clickMenu() {
    var icon = document.querySelector("div.icon")
    var links = document.querySelector("div.menu-links")
    var line1 = document.querySelector("div.line1")
    var line2 = document.querySelector("div.line2")
    var line3 = document.querySelector("div.line3")
    let localpag = document.querySelector(".conteudo")

    if (icon.style.transform == "translateX(0%)" && links.style.transform == "translateX(0%)") {
        icon.style.transform = "translateX(-410%)"
        links.style.transform = "translateX(-100%)"
        line1.style.transform = "rotate(0deg) translate( 0px, 0px)"
        line2.style.opacity = "100"
        line3.style.transform = "rotate(0deg) translate( 0px, 0px)"
        localpag.style.display = "flex"
        localpag.style.transform = "translateX(-7.2%)"
        localpag.style.width = "150vw"
        
        
        
    } else {
        icon.style.transform = "translateX(0%)"
        links.style.transform = "translateX(0%)"
        line1.style.transform = "rotate(-45deg) translate( -8px, 8px)"
        line2.style.opacity = "0"
        line3.style.transform = "rotate(45deg) translate( -5px, -7px)"
        localpag.style.transform = "translateX(-1.4%)"
        
    }

}

function openpage(a){
    let localpag = document.querySelector(".conteudo")
    let pag = new XMLHttpRequest()

    pag.onreadystatechange = () =>{
        if (pag.readyState == 4 && pag.status == 200){
            localpag.innerHTML = pag.response
        }
    }

    pag.open('GET', `../Painel/conteudos/${a}.html`)
    pag.send()
}