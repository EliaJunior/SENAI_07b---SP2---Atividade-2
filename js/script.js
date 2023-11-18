//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior: 'smooth'
        }
    )
}

//Validação de Login

function login() {
    var logado = 0;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == '123456'){
        logado = 1;
        window.location = 'index.html';
    }

    if(logado == 0){
        alert('Usuário ou senha incorreto!');
        document.getElementById('usuario').value = ''
        document.getElementById('senha').value = ''
    }
}


//Ativar alert no botão cadastrar
function cadastro() {
    var usuario = document.getElementById('usuario_cadastro').value;
    var senha = document.getElementById('senha_cadastro').value;
    var email = document.getElementById('email_cadastro').value;
    var lngsenha = senha.length;

    if(usuario == "" || senha =="" || email == ""){
        alert('Todos os campos são obrigatórios!')
    }
    else if(lngsenha<6){
        alert('A senha deve ter mais do que 6 caracteres')
    }
    else{
        alert('Cadastrado com sucesso!');
        window.location.href = 'index.html'
    }
}