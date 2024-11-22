document.body.addEventListener('load', comprobarContador())
const btn = document.getElementById("btnReestablecer")

btn.addEventListener('click', () => {
    localStorage.setItem('con', 0)  
    const contId = document.getElementById("contadorVisitas")
    contId.innerText = 0
})

function comprobarContador(){
    var contador = 0
    const contId = document.getElementById("contadorVisitas")
    if (!isNaN(localStorage.getItem('con'))) {
        debugger
        var num = localStorage.getItem('con')
        contador = parseInt(num) + 1
        localStorage.setItem('con', contador)        
    }else{
        contador++
        localStorage.setItem('con', contador)        
    }

    contId.innerText = contador
}

