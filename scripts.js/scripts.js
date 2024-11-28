const form = document_getElementById('form')
const username = document_getElementById('username')
const email = document_getElementById('email')
const password = document_getElementById('password')
const passwordConfirmation = document_getElementById('passwordConfirmation')

form.addEventListener("submit", (e)=>{
    e.addEventListener();
});

function checkInputs() {
    const usernameValue = username.Value;
    const emailValue = email.Value;
    const passwordValue = password.Value;
    const passwordConfirmationValue = passwordConfirmation.Value;

    if (usernameValue  === "") {
        SetErrorFor(username, 'o nome do usuario e obrigatorio')
    }
}

function SetErrorFor(input, messege) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar a mensagem de erro 
    small .innerText = messege;
    //Adicionar a classe de erro
    formControl .className = "form-control error"
}

    function SetErrorFor(input) {
        const formControl = input.parentElement;

        // Adicionar a classe de sucesso
        formControl.className = "form-control success";
}
