var num = 0;

function registro(){
    let storage = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
    }

    localStorage.setItem(`usuario${num}`, JSON.stringify(storage));
    num++
}



function logar(){
    localStorage.removeItem("ativo");
    let userEmail = document.getElementById("email").value;
    let userSenha = document.getElementById("senha").value;

    for(let i=0; i < localStorage.length; i++){
        let {email,senha} = JSON.parse(localStorage.getItem(`usuario${i}`));

        if(userEmail == email && userSenha == senha){
            localStorage.setItem("ativo",true);
            window.location.href = "page.html";
        }
    }

    if(localStorage.getItem("ativo") == null){
        alert("Email ou Senha incorretos!");
    }

}
