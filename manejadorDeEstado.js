
// @@@@@@@@@@@@@@@@@@@@@ INICIADOR DE APLICACION - DECLARACIÓN DE CICLO @@@@@@@@@@@@@@@@@@@@@

// El ciclo del programa es de 3 semanas

function Ciclo(semana1,semana2,semana3,fechaFinal){
    this.semana1=semana1;
    // ------- ciclo1
    this.semana2=semana2;
    // ------- ciclo2
    this.semana3=semana3;
    // ------- ciclo3
    this.fechaFinal=fechaFinal;
    }


// Cada dia tiene 3 ejercicios intercambiando de pie de inicio entre cada uno por lo que son 6 ejercicios al dia 

function Dia(e1Der,e1Izq,e2Der,e2Izq,e3Der,e3Izq){
    this.e1Der=e1Der
    this.e1Izq=e1Izq
    this.e2Der=e2Der
    this.e2Izq=e2Izq
    this.e3Der=e3Der
    this.e3Izq=e3Izq
    }
    
// ------------------ DECLARACION DE FECHAS ------ 

//                    PRIMERA SEMANA - SEGUNDA SEMANA - TERCERA SEMANA - FECHA FINAL    
nuevoCiclo = new Ciclo('2023-1-9'   ,  '2023-1-16'   ,   '2023-1-23'  ,  '2023-1-30')



var date = new Date(); // Tue Oct 18 2022 21:04:37 GMT-0500 (hora de verano central)

var fecha = new Date().toLocaleDateString(); // '18/10/2022'

var num = new Date().getDay(); // 2




// Declaración de variables que se usaran durante la ejecucion del ejercicio

var ejercicioActual = 'Ejercicio 1'; 

var ejercicioActualArr = [0,0];

var pieActual = 'pie derecho';

var inicio = 0;


// Variable que validará la relaizacion de los ejercicios (cúando estén todos en 'true' podra finalizar la actividad)

var cuentaEjercicios = [
    [false,false],
    [false,false],
    [false,false]
]



const formatDate = (date)=>{ //Función para formatear la fecha 
    let formatted_date = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`
    
     return formatted_date;
    }
    
function getPeriodo(){ //Función para obtener el ciclo al inicar la aplicacion

    var hoy =  new Date(formatDate(date));
    var sem1 = new Date(nuevoCiclo.semana1);
    var sem2 = new Date(nuevoCiclo.semana2);
    var sem3 = new Date(nuevoCiclo.semana3);
    var fechFinal = new Date(nuevoCiclo.fechaFinal);
    

    //valida a partir de la fecha actual y las fechas establecidas

           if (hoy>=sem1&&hoy<sem2) {
        return 'Semana 1'
    } else if (hoy>=sem2&&hoy<sem3) {
        return 'Semana 2'
    } else if (hoy>=sem3&&hoy<fechFinal) {
        return 'Semana 3'
    } else if (hoy>fechFinal) {
        return 'Fin del Programa'
    } 
}

function getDia(){ //Función para obtener el día que le corresponde a la aplicacion 
    var numDia = (
        num == 1 ? 'Día 1' :
        num == 2 ? 'Día 1' :
        num == 3 ? 'Día 2' :
        num == 4 ? 'Día 2' :
        num == 5 ? 'Día 3' :
        num == 6 ? 'Día 3' :'');
    return numDia
}


// @@@@@@@@@@@@@@@@@@@@@ INICIADOR DE APLICACION - DECLARACIÓN DE EJERCICIOS POR DÍA @@@@@@@@@@@@@@@@@@@@@

function generarDia(){ // Para iniciar la sesion, se crea una variable que obtiene un String con la semana y el dia actual, posteriormente se crea un objeto llamado dia de acuerdo al String creado, el cual es validado para cargar los ejercicios previamente declarados

    let periodoDia = getPeriodo() + ' ' + getDia();

    console.log(periodoDia)


    switch (periodoDia) {

        // SEMANA 1

        case 'Semana 1 Día 1':
            nuevoDia = new Dia(
                E1_1,E1_2,
                E1_3,E1_4,
                E1_5,E1_6);
            break;
        case 'Semana 1 Día 2':
            nuevoDia = new Dia(
                E1_7,E1_8,
                E2_1,E2_2,
                E2_3,E2_4 );
            break;
        case 'Semana 1 Día 3':
            nuevoDia = new Dia(
                E1_7,E1_8,
                E2_1,E2_2,
                E2_3,E2_4 );
            break;
        
        // SEMANA 2
            
        case 'Semana 2 Día 1':
            nuevoDia = new Dia(
                E1_7,E1_8,
                E2_1,E2_2,
                E2_3,E2_4 );
            break;
        case 'Semana 2 Día 2':
            nuevoDia = new Dia(
                E1_7,E1_8,
                E2_1,E2_2,
                E2_3,E2_4 );

            break;
        case 'Semana 2 Día 3':
            nuevoDia = new Dia(
                E1_7,E1_8,
                E2_1,E2_2,
                E2_3,E2_4 );
            break;

        // SEMANA 3

        case 'Semana 3 Día 1':
            nuevoDia = new Dia(
                E1_7,E1_8,
                E2_1,E2_2,
                E2_3,E2_4 );
            break;
        case 'Semana 3 Día 2':
            nuevoDia = new Dia(
                E1_7,E1_8,
                E2_3,E2_4,
                E2_5,E2_6 );
            break;
        case 'Semana 3 Día 3':
            nuevoDia = new Dia(
                E1_7,E1_8,
                E2_1,E2_2,
                E2_3,E2_4 );
            break;
    }


}


generarDia() // Se ejecuta la funcion anterior


function setEjercicioActualArr(){ //Durante la actividad, obtiene el ejercicio en el que se encuentra
    let e = (
        ejercicioActual == 'Ejercicio 1' ? 0 :
        ejercicioActual == 'Ejercicio 2' ? 1 :
        ejercicioActual == 'Ejercicio 3' ? 2 :"" );
    
    let p = (
        pieActual == 'pie derecho' ? 0 :
        pieActual == 'pie izquierdo' ? 1 :"" );
    ejercicioActualArr=[e,p]
    return ejercicioActualArr
    
}

function changeCuenta(){ //Cambia el estado del ejercicio actual "COMPLETADO / NO COMPLETADO"
    
    let e = ejercicioActualArr[0];
    let p = ejercicioActualArr[1];
    let label = document.getElementById(`ejerLabel-${e}-${p}`)
    let estadoCheck = cuentaEjercicios[ejercicioActualArr[0]][ejercicioActualArr[1]];

    
    if (estadoCheck===true) {

        cuentaEjercicios[e][p] = false;
        console.log(cuentaEjercicios);
        label.classList.remove('true');
         
        
    } else {

        cuentaEjercicios[e][p] = true;
        console.log(cuentaEjercicios)
        label.classList.add('true');
        
    }    

    actCompleta() // Ejecuta funcion que pregunta si la actividad esta completada (si todos los ejercicios tienen status de COMPLETADO)
    
} 

function changeCheckBox(){ 
    document.getElementById('complete').checked = cuentaEjercicios[ejercicioActualArr[0]][ejercicioActualArr[1]];
}

function selectLabel(){ 
    let labelArr = document.getElementsByClassName('l');
    for (let i = 0; i < labelArr.length; i++) {
        labelArr[i].classList.remove('slc')
    }
    document.getElementById(`ejerLabel-${ejercicioActualArr[0]}-${ejercicioActualArr[1]}`).classList.add('slc')

}

function selectBtnAct(){
    let btnArr = document.getElementsByClassName('btnEjercicio');
    for (let i = 0; i < btnArr.length; i++) {
        btnArr[i].classList.remove('actve')
    }
    btnArr[ejercicioActualArr[0]].classList.add('actve')

}

function actCompleta(){
    if (cuentaEjercicios[0][0]&&
        cuentaEjercicios[0][1]&&
        cuentaEjercicios[1][0]&&
        cuentaEjercicios[1][1]&&
        cuentaEjercicios[2][0]&&
        cuentaEjercicios[2][1] === true) {
        
            console.log("yaacabe")
        document.getElementsByClassName('btnFinalizar')[0].classList.remove('disabled');
        return
    }
    
    document.getElementsByClassName('btnFinalizar')[0].classList.add('disabled');
    
    return
}