document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        msg: '',
    }
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const spinner = document.querySelector('#spinner');

    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', resetFormulario);

    function resetFormulario(){
        email.email = '';
        email.asunto = '';
        email.msg = '';
        formulario.reset();
        camposLlenos();
    }

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.add('hidden');
            resetFormulario();
            const alertExito = document.createElement('DIV');
            alertExito.textContent = `Formulario enviado.`;
            alertExito.classList.add('bg-green-500', 'px-3', 'py-2', 'rounded-lg', 'text-white', 'relative');
            formulario.appendChild(alertExito);

             setTimeout(() => {
                alertExito.remove();
             }, 1000);
        }, 2000);
    }


    function validar(e){
        const idInput = e.target.id;
        const valorInput = e.target.value.trim();
        email[e.target.name] = '';
        valorInput === '' ? alertLogic(idInput, true) : alertLogic(idInput, false);

        if (idInput === 'email' && !validarEmail(e.target.value)){
            alertLogic(idInput, true);
            camposLlenos();
            return;
        }

        email[e.target.name] = valorInput.toLowerCase();
        camposLlenos();
    }

    function alertLogic(idInput, valor){
        const input = document.getElementById(idInput);
        const padreInput = input.parentElement;
        const alerta = padreInput.querySelector('.alertas');

        if (alerta) {
            alerta.remove();
        }
        if (valor) {
            const error = document.createElement('DIV');
            error.textContent = `Varifica la información ingresada en ${idInput}`;
            error.classList.add('bg-red-600', 'px-3', 'py-2', 'rounded-lg', 'text-white', 'alertas');
            error.id = `${idInput}-alert`;
            input.after(error);
        }        
    }

    function validarEmail(e){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        return resultado = regex.test(e)
    }

    function camposLlenos(){
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        }
        else{
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }
});