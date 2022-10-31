addEventListener("DOMContentLoaded", (e)=>{   
    let myform = document.querySelector("#myForm");
    let ventane = document.querySelector("dialog");
    let btnClose = document.querySelector("#close");
    myform.addEventListener("submit", (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));
        for(let val in data[dataInput.scale]){
            if(data[dataInput.scale][val][0] <= dataInput.nota && data[dataInput.scale][val][1] >= dataInput.nota){
                ventane.showModal();
                let myTabla = document.querySelector("tbody");
                myTabla.innerHTML = "";
                myTabla.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td>${data["Traditional"][val].join("-")}</td>
                        <td>${data["Point_Range"][val].join("-")}</td>
                        <td>${data["Letter"][val]}</td>
                        <td>${data["SBG_Rating"][val]}</td>
                        <td>${data["Proficiency_level_witch_standard"][val]}</td>
                    </tr>
                    <tr>
                        <td colspan="5">${(val == 0) ? "Querido usuario se gano un viaje a <b>Cancún</b>" : (val == 1) ? "Querido usuario se gano unas voletas para Cine Colombia para ver la pelicula de <b>Black Adam</b>" : ""}</td>
                    </tr>
                `);
            }
        }
    })
    btnClose.addEventListener("click", (e)=>{
        ventane.close();
    })


})