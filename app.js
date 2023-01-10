


const teclas = document.getElementsByClassName("tecla");



function b(id) {
    let tecla = document.getElementById(`${id}`);
    limpiarActive();
    tecla.classList.add("active");
}



function limpiarPrint(){
    
    // const teclas = document.getElementsByClassName("tecla");

    for (let i = 0; i < teclas.length; i++) {
        let tecla = teclas[i];
        tecla.classList.remove("i","f","d");
        tecla.innerHTML = "";
    }
}

function filtro(fila, columna){

    let primero = (
        fila == 'J' ? 0 :
        fila == 'I' ? 1 :
        fila == 'H' ? 2 :
        fila == 'G' ? 3 :
        fila == 'F' ? 4 :
        fila == 'E' ? 5 :
        fila == 'D' ? 6 :
        fila == 'C' ? 7 :
        fila == 'B' ? 8 :
        fila == 'A' ? 9 :"" );

    let segundo = (
        columna == 1 ? 0 :
        columna == 2 ? 1 :
        columna == 3 ? 2 :
        columna == 4 ? 3 :"" );

        return [primero,segundo]

}


function printEjer(ejercicio){

    limpiarPrint();
    
    for (let i = 0; i < teclas.length; i++) {
        let tecla = teclas[i];

        let fila = tecla.id.charAt(0);
        let columna = tecla.id.charAt(1);

        let [uno, dos] = filtro(fila,columna);
        
        let contTecla = ejercicio[uno][dos];
        
        if (ejercicio[uno][dos] == 0) {
            tecla.classList.add("f");
        } else {

            let numero = contTecla.charAt(0)
            let pie = contTecla.charAt(1)

            tecla.innerHTML = `${numero}`;


            if (pie == 'd') {
                tecla.classList.add("d");
            } else {
                tecla.classList.add("i");
            }
        }

        limpiarActive();
    }  


}

function manejadorInterruptor(pie){
    let pieLabel = document.getElementById('inicio');
    if (pie =='pie izquierdo') {
        document.getElementById('btnPieInicio').classList.remove('der');
        pieLabel.classList.remove('b');
        pieLabel.classList.add('g');
        pieLabel.innerHTML=pie;
    } else {
        document.getElementById('btnPieInicio').classList.add('der');
        pieLabel.classList.remove('g');
        pieLabel.classList.add('b');
        pieLabel.innerHTML=pie;
    }
}

function cambiarEjer(ejerDerecho,ejerIzquierdo,tipo){

    let botonBox = document.getElementById('pInicioBx');
    let titulo = document.getElementById('titulo');
    if (tipo.charAt(0)=='E') {
        botonBox.innerHTML= `
        <div class="inicio-t der" id="btnPieInicio" onclick="cambiarEjer(${ejerDerecho[11]},${ejerIzquierdo[11]},'btn')">
            <div class="boton"></div>
        </div>
        `;
        printEjer(ejerDerecho); 
        manejadorInterruptor(ejerDerecho[10])
        titulo.innerHTML= tipo ;
        cambiarBtnDemo(ejerDerecho);
        ejercicioActual = tipo;
        pieActual = ejerDerecho[10];
        setEjercicioActualArr();
        changeCheckBox();
        selectLabel();
        selectBtnAct()
    } else {
        
        botonBox.innerHTML= `
        <div class="inicio-t der" id="btnPieInicio" onclick="cambiarEjer(${ejerIzquierdo[11]},${ejerDerecho[11]},'btn')">
            <div class="boton"></div>
        </div>
        `;
        manejadorInterruptor(ejerIzquierdo[10]);
        printEjer(ejerIzquierdo);
        cambiarBtnDemo(ejerIzquierdo);
        //setState(ejercicioActual,ejerIzquierdo[10]);
        pieActual = ejerIzquierdo[10];
        console.log(pieActual)
        setEjercicioActualArr();
        changeCheckBox();
        selectLabel();

    }    

    
    
}

function cambiarBtnDemo(e){
    var demoCont = document.getElementById('demoCont');
    var btnDemo = `
    <div class="btnDemostracion " onclick="runDemo(${e[11]},800)">
            <div class="btnLabel">DEMOSTRACIÓN</div>
            <div class="triangulo"></div>
        </div>
    `;

    demoCont.innerHTML = btnDemo;

}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
  
async function runDemo(e,velocidad) {
    let ejercicio = e[12]
    for (let i = 0; i < ejercicio.length; ++i) {
        await waitforme(`${velocidad}`);
        b(ejercicio[i]);
        
    }
    await waitforme(`${velocidad}`);
    limpiarActive();
    
}




function limpiarActive(){
    var teclas=document.getElementsByClassName("tecla")
    for (var i = 0; i<teclas.length; i++) {
        teclas[i].classList.remove("active");
     }
}



function tapeteLoad(){
    
    var btnEjercicios =`
        <div class='btnEjercicioCnt'>
            <div class="btnEjercicio actve" onclick="cambiarEjer(${nuevoDia.e1Der[11]},${nuevoDia.e1Izq[11]},'Ejercicio 1')">Ejercicio 1</div>
            <div id='ejerLabel-0-1' class='l i slc'>I</div>
            <div id='ejerLabel-0-0' class='l d'>D</div>
        </div>
        <div class='btnEjercicioCnt'>
            <div class="btnEjercicio" onclick="cambiarEjer(${nuevoDia.e2Der[11]},${nuevoDia.e2Izq[11]},'Ejercicio 2')">Ejercicio 2</div>
            <div id='ejerLabel-1-1' class='l i'>I</div>
            <div id='ejerLabel-1-0' class='l d'>D</div>
        </div>
        <div class='btnEjercicioCnt'>
            <div class="btnEjercicio" onclick="cambiarEjer(${nuevoDia.e3Der[11]},${nuevoDia.e3Izq[11]},'Ejercicio 3')">Ejercicio 3</div>
            <div id='ejerLabel-2-1' class='l i'>I</div>
            <div id='ejerLabel-2-0' class='l d'>D</div>
        </div>
    
        `;

    var dia = (
        num == 0 ? 'Domingo' :
        num == 1 ? 'Lunes' :
        num == 2 ? 'Martes' :
        num == 3 ? 'Miércoles' :
        num == 4 ? 'Jueves' :
        num == 5 ? 'Viernes' :
        num == 6 ? 'Sábado' :"" );

    document.getElementById("diaPalabra").innerHTML= dia;
    document.getElementById("diaNumero").innerHTML= fecha;
    document.getElementById('semana').innerHTML = getPeriodo();
    document.getElementById("ejerciciosMenuCont").innerHTML= btnEjercicios;
    cambiarEjer(nuevoDia.e1Der,nuevoDia.e1Izq,'Ejercicio 1')

}


const agregarCeroSiEsNecesario = valor => {
	if (valor < 10) {
		return "0" + valor;
	} else {
		return "" + valor;
	}
}
const milisegundosAMinutosYSegundos = (milisegundos) => {
	const minutos = parseInt(milisegundos / 1000 / 60);
	milisegundos -= minutos * 60 * 1000;
	const segundos = (milisegundos / 1000);
	return `${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(segundos.toFixed(1))}`;
};

function timeStampToHour(ts){
    date    = new Date(ts),
    hours   = date.getHours(),
    minutes = date.getMinutes();

    let output  = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2);
    return output
}


function comenzarAct(){
    inicio = Date.now();
    console.log(inicio)
    tiempo[0]=timeStampToHour(inicio); 
    return inicio
}

function finalizarAct(){
    var final = Date.now();
    var finalDeco = milisegundosAMinutosYSegundos(final-inicio); 
    console.log(finalDeco)
    tiempo[1]=timeStampToHour(final);
    tiempo[2]=finalDeco
    return [finalDeco,final]
}



function imprimirResumen() {
    var tiempoRes = document.getElementById('resTiempo');
    var esfuerzoRes = document.getElementById('resEsfuerzo');
    var animoRes = document.getElementById('resAnimo');
    var fechaRes = document.getElementById('resFecha');
    
    fechaRes.innerHTML=`
    <div class="semana">${getPeriodo()}</div>
    <div class="fecha">${fecha}</div>
    `
    tiempoRes.innerHTML=`
    <div class="cardTit">Tiempo de actividad</div>
    <div>-Hora de Inicio: ${tiempo[0]}</div>
    <div>-Hora Final: ${tiempo[1]}</div>
    <div>TOTAL: ${tiempo[2]}</div>
    `
    esfuerzoRes.innerHTML=`
    <div class="cardTit">Escala de esfuerzo</div>
    <div>-Inicial: ${esfuerzo[0]}</div>
    <div>-Post Calentamiento: ${esfuerzo[1]}</div>
    <div>-Post Actividad: ${esfuerzo[2]}</div>
    `
    animoRes.innerHTML=`
    <div class="cardTit">Escala de Ánimo</div>
    <div class="cara"></div>
    <div class="num">${estadoDeAnimo[1]}</div>
    <div class="estado">${estadoDeAnimo[2]}</div>
    `
}

function moverseccion(sec){
    var mainCont = document.getElementById("mainCont")


    if (sec == tapeteFisico) {
        mainCont.innerHTML = sec
        
        setTimeout(tapeteLoad, 10);

        // setTimeout(cambiarEjer(nuevoDia.e1Der,nuevoDia.e1Izq,'Ejercicio 1'), 100);
        
        
        
        
      

        
    } else if(sec == resumen){
        mainCont.innerHTML = sec;
        
        
        setTimeout(imprimirResumen, 10);
    }

    mainCont.innerHTML = sec
}
