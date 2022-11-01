addEventListener("DOMContentLoaded", (e) => {

    let form = document.querySelector('#myForm');
    let respuesta =document.querySelector(".rta");
    let acum = 0;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log(e);
        let data_Input = Object.fromEntries(new FormData(e.target));
        let numero = Number(data_Input.numero);
        
        for(let i = 1; i <=numero / 2; ++i){
            if (numero % i == 0){
                acumulador 
            }
            respuesta.innerHTML= 'no'
        }

    })
})