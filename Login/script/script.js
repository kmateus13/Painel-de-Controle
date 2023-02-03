function entrar() {
    let email = document.getElementById("iptemail")
    let senha = document.getElementById("iptsenha")
    let listauser1 = []
    let uservalido = {
        email: '',
        senha: '',
        confirmcao:''
    }
    

    listauser1 = JSON.parse(localStorage.getItem("listauser"))

    listauser1.forEach((item) => {
        if (email.value == item.emailcad && senha.value == item.senhacad) {
            uservalido = {
                email: item.emailcad,
                senha: item.senhacad,
                confirmacao: item.confirmacaocad
            }
            console.log(uservalido)
        }
    })
    
    if (email.value === uservalido.email && senha.value === uservalido.senha){
        window.location.href = "/Painel/index3.html"
    }else{
        alert("Usuario não cadastrado!")
    }
}