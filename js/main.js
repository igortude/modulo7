const form = document.getElementById('formulario');

function getValue (botaoA, botaoB) {
    botaoA = document.getElementById('btn-A').value;
    botaoB = document.getElementById('btn-B').value;
}

form.addEventListener('submit', function(e){
    formVALIDO = false;
    e.preventDefault();

    const botaoA = document.getElementById('btn-A').value;
    const botaoB = document.getElementById('btn-B').value;

    const msgOK = `Validação Aceita. ${botaoB} > ${botaoA}`

    formVALIDO = getValue(botaoA.value, botaoB.value)
        if (botaoB > botaoA) {
            const msg_OK = document.querySelector('.sucesso');
            msg_OK.innerHTML = msgOK;
            msg_OK.style.display = 'block';
            document.querySelector('.error').style.display = 'none';
        } else {
            document.querySelector('.error').style.display = 'block';
        }
})