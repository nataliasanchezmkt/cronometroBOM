/*Cronómetro

Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

*/

let min ='00' // escribimos como cadena de texto prar que muestre los dobles ceros hasta qye empieza el cronometro real
let sec = '00'
let hour = '00'
let tiempo = document.getElementById('time')
let str;

function timer(){
        sec++
        if(sec <10){
            sec = '0'+ sec
        }if(sec===60){
            sec= '00'
            min++
            if(min<10){
                min = '0' +  min
            }if(min===60){
                hour++
                min='00'
            }
        }
    
    tiempo.innerHTML = `${hour}:${min}:${sec}`
}

        
    function start(){
        // guardar la funcion de empezar el cronometro en una variable, para luego poder reutilizarla en las otras funciones ya que es la q manipula el timer
        str =  setInterval(timer,1000)
    }


    function pause(){
        clearInterval(str)

    }

    function reset(){
        clearInterval(str)
        tiempo.innerHTML = `00:00:00`
    }





