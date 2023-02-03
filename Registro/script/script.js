function registrar() {
    let email = document.getElementById("iptemail").value
    let senha = document.getElementById("iptsenha").value
    let confirmacao = document.getElementById("iptconfirmacao").value

    if (email === "" || senha === "" || confirmacao === "") {
        alert("Um ou mais campos estão em branco!")


    } else {
        if (senha == confirmacao) {
            let listauser = JSON.parse(localStorage.getItem("listauser") || '[]')

            listauser.push({
                emailcad: email,
                senhacad: senha,
                confirmacaocad: confirmacao
            })

            localStorage.setItem('listauser', JSON.stringify(listauser))

            alert("Cadastrado com sucesso!")
            window.location.href = "/Login/index.html"
        } else {
            alert("As senhas nao correspondem")
        }
    }
}   