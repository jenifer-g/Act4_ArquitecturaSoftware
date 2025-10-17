document.getElementById('contacto').addEventListener('submit', ()=>{
    alert("Correo enviado, en un momentos nos ponemos en contacto!")
});


document.getElementById('tema').addEventListener('click', ()=>{
    const header = document.querySelector('header');
    const titulos2 = document.querySelectorAll('.titulo2');
    const general = document.querySelector('.general');
    const p_sobremi = document.querySelector('.sobremi');
    const body = document.querySelector('body');

    body.classList.toggle('oscuro');
    p_sobremi.classList.toggle('oscuro')
    header.classList.toggle('oscuro');
    general.classList.toggle('oscuro');

    titulos2.forEach(t=> {
        t.classList.toggle('oscuro');
    })
});