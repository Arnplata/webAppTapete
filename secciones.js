
  


var introduccion = `
<div class="introduccion">
<h1>TAPETE CUADRICULADO:</h1>

<p>El tapete cuadriculado es un invento japonés realizado por los doctores <strong>Shiguematzu y Okura</strong>, con el propósito de disminuir el riesgo de caídas y prevenir síndrome demencial en los adultos mayores.</p>
<p>La diabetes Melitus es un factor de riesgo para la demencia, por ello a las personas con ésta enfermedad se les recomienda hacer ejercicio físico y combinarlos con ejercicio mental simultáneamente.</p>

</div>

<div class="rectanguloGris">
    <div class="interno">
        <div class="contTit">
            <div class="beneTit"><h2>BENEFICIOS MENTALES O COGNITIVOS</h2></div>
            <div class="beneTit"><h2>BENEFICIOS FÍSICOS</h2></div>
        </div>

        <div class="libre"></div>

        <div class="contBene">

            <div class="beneLista">

                <ul>
                    <li>Memoria</li>
                    <li>Atención</li>
                    <li>Lenguaje</li>
                    <li>Función ejecutiva</li>
                    <li>Concentración</li>
                </ul>


            </div>

            <div class="beneLista">

                <ul>
                    <li>Mejora la cordinación del cuerpo.</li>
                    <li>Mejora el equilibrio.</li>
                    <li>Incrementa la fuerza de las piernas.</li>
                    <li>Disminuye el riesgo de caidas.</li>
                </ul>
            </div>
        </div>
        
    </div>
</div>

<div class="meta">
    <h3>¡LA META!</h3>
    <p>40 MINUTOS, 3 VECES A LA SEMANA DURANTE 6 MESES CONTINUOS</p>
</div>

<div class="botones">

    <div class="boton" onclick="moverseccion(instruccionesPaso1)">COMENZAR</div>
</div>
</div>      

`;

// instruccionesPaso1
var instruccionesPaso1 = `
<div class="instrucciones">
<div id="semana" class="header">
Instrucciones
</div>
            
            <div class="pContInstr">
                <p><strong>Paso 1</strong></p>
                <p>En una superficie plana, dibuje un tapete cuadriculado como se muestra en la figura:</p>
            
            </div>
            <div class="imagenTapeteCont">
                <div class="imagenTapete"></div>
            </div>
            
           

            
            
            
            
            <div class="botones">
                <div class="boton" onclick="moverseccion(bitacoraInicial)">SIGUIENTE</div>
            </div>
            </div>       
`;  



var bitacoraInicial = `
<div class="bitacora">
            <h1>BÍTACORA INICIAL:</h1>
            <div class="pCont">
                <p>Antes de comenzar, nos gustaría saber como se encuentra el día de hoy:
                </p>
            </div>
            
            <div class="escalaEsfuerzo">
                    <div class="renglonEsfuerzo">
                        <div class="num">0.</div>
                        <label for="0">Reposos</label>
                        <input type="radio" id="0" name="escalaEsfuerzo" value="Reposos" onchange="modMetricas('esfuerzo1','0 - Reposo')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">1.</div>
                        <label for="1">Muy muy ligero</label>
                        <input type="radio" id="1" name="escalaEsfuerzo" value="Muy muy ligero" onchange="modMetricas('esfuerzo1','1 - Muy muy ligero')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">2.</div>
                        <label for="2">Muy ligero</label>
                        <input type="radio" id="2" name="escalaEsfuerzo" value="Muy ligero" onchange="modMetricas('esfuerzo1','2 - Muy ligero')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">3.</div>
                        <label for="3">Ligero</label>
                        <input type="radio" id="3" name="escalaEsfuerzo" value="Ligero" onchange="modMetricas('esfuerzo1','3 - Ligero')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">4.</div>
                        <label for="4">Algo pesado</label>
                        <input type="radio" id="4" name="escalaEsfuerzo" value="Algo pesado" onchange="modMetricas('esfuerzo1','4 - Algo pesado')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">5.</div>
                        <label for="5">Pesado</label>
                        <input type="radio" id="5" name="escalaEsfuerzo" value="Pesado" onchange="modMetricas('esfuerzo1','5 - Pesado')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">6.</div>
                        <label for="6">Más pesado</label>
                        <input type="radio" id="6" name="escalaEsfuerzo" value="Más pesado" onchange="modMetricas('esfuerzo1','6 - Más pesado')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">7.</div>
                        <label for="7">Muy pesado</label>
                        <input type="radio" id="7" name="escalaEsfuerzo" value="Muy pesado" onchange="modMetricas('esfuerzo1','7 - Muy pesado')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">8.</div>
                        <label for="8">Muy muy pesado</label>
                        <input type="radio" id="8" name="escalaEsfuerzo" value="Muy muy pesado" onchange="modMetricas('esfuerzo1','8 - Muy muy pesado')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">9.</div>
                        <label for="9">Máximo</label>
                        <input type="radio" id="9" name="escalaEsfuerzo" value="Máximo" onchange="modMetricas('esfuerzo1','9 - Máximo')">
                    </div>
    
                    <div class="renglonEsfuerzo">
                        <div class="num">10.</div>
                        <label for="10">Extremo</label>
                        <input type="radio" id="10" name="escalaEsfuerzo" value="Extremo" onchange="modMetricas('esfuerzo1','10 - Extremo')">
                    </div>
                    
            </div>
            
            
            
            
                
            <div class="botones">
                        <div class="boton" onclick="moverseccion(calentamiento)">SIGUIENTE</div>
            </div>
        </div>
    
`;

var calentamiento = `
<div class="bitacora">
<div id="semana" class="header">
Instrucciones
</div>
    <h1>CALENTAMIENTO</h1>

    <div class="pCont">
                
                <p>Iniciar Con un calentamiento de marcha "indoor" por 15 minutos. Apóyese del siguiente video:</p>
            
            </div>

            <div class="video">
            <iframe width="319" height="180" src="https://www.youtube.com/embed/tW9IY48x1bc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
    <div class="botones">
        <div class="boton" onclick="moverseccion(bitacoraPreActividad)">SIGUIENTE</div>
    </div>
</div>
`;

// bitacoraPreActividad

var bitacoraPreActividad = `
<div class="bitacora">
<h1>BÍTACORA PRE-ACTIVIDAD:</h1>


    <div class="pCont">
    <p>Escala de medición de esfuerzo percibido durante
    el calentamiento:</p>
    </div>

    <div class="escalaEsfuerzo">
    <div class="renglonEsfuerzo">
        <div class="num">0.</div>
        <label for="0">Reposos</label>
        <input type="radio" id="0" name="escalaEsfuerzo" value="Reposos" onchange="modMetricas('esfuerzo2','0 - Reposo')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">1.</div>
        <label for="1">Muy muy ligero</label>
        <input type="radio" id="1" name="escalaEsfuerzo" value="Muy muy ligero" onchange="modMetricas('esfuerzo2','1 - Muy muy ligero')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">2.</div>
        <label for="2">Muy ligero</label>
        <input type="radio" id="2" name="escalaEsfuerzo" value="Muy ligero" onchange="modMetricas('esfuerzo2','2 - Muy ligero')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">3.</div>
        <label for="3">Ligero</label>
        <input type="radio" id="3" name="escalaEsfuerzo" value="Ligero" onchange="modMetricas('esfuerzo2','3 - Ligero')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">4.</div>
        <label for="4">Algo pesado</label>
        <input type="radio" id="4" name="escalaEsfuerzo" value="Algo pesado" onchange="modMetricas('esfuerzo2','4 - Algo pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">5.</div>
        <label for="5">Pesado</label>
        <input type="radio" id="5" name="escalaEsfuerzo" value="Pesado" onchange="modMetricas('esfuerzo2','5 - Pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">6.</div>
        <label for="6">Más pesado</label>
        <input type="radio" id="6" name="escalaEsfuerzo" value="Más pesado" onchange="modMetricas('esfuerzo2','6 - Más pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">7.</div>
        <label for="7">Muy pesado</label>
        <input type="radio" id="7" name="escalaEsfuerzo" value="Muy pesado" onchange="modMetricas('esfuerzo2','7 - Muy pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">8.</div>
        <label for="8">Muy muy pesado</label>
        <input type="radio" id="8" name="escalaEsfuerzo" value="Muy muy pesado" onchange="modMetricas('esfuerzo2','8 - Muy muy pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">9.</div>
        <label for="9">Máximo</label>
        <input type="radio" id="9" name="escalaEsfuerzo" value="Máximo" onchange="modMetricas('esfuerzo2','9 - Máximo')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">10.</div>
        <label for="10">Extremo</label>
        <input type="radio" id="10" name="escalaEsfuerzo" value="Extremo" onchange="modMetricas('esfuerzo2','10 - Extremo')">
    </div>
    
</div>




    
<div class="botones">
    <div class="boton" onclick="moverseccion(indicacionesTapete),comenzarAct()">SIGUIENTE</div>
</div>
</div>        
`;

var indicacionesTapete = `
<div class="bitacora">
<div id="semana" class="header">
Instrucciones
</div>
<h1>INDICACIONES</h1>
<div class="indicacionesWrapp">
<ul>
                <li>Recorrer 3 veces el tapete físico con el patrón descrito en tapete virtual, iniciando con el <strong>pie derecho.</strong> (se recomienda utilizar el boton de <i>"DEMOSTRACIÓN"</i> antes de recorrer el patrón)</strong></li>
                <li>Una vez recorrido el patrón 3 veces con el <strong>pie derecho</strong> marcar la casilla de <i>"COMPLETADO"</i> y apretar el boton de <i>PIE DE INICIO</i>  para visualizar el mismo patrón iniciado con el pie izquierdo.</li>
                <li>Recorrer 3 veces el tapete físico con el patrón descrito en el tapete virtual iniciando con el pie izquierdo.</li>
                <li>Una vez recorrido el patrón 3 veces con el pie izquierdo marcar la casilla de "COMPLETADO"</li>
                <li>Elegir el siguiente ejercicio mediante el botón correspondiente: <i>"Ejercicio 1, Ejercicio 2 ó Ejercicio 3"</i> y repetir el procedimiento</li>
                <li>Una vez completados los ejercicios, apretar el botón <i>"FINALIZAR DÍA"</i></li>
            </ul>
</div>
<div class="botones">
    <div class="boton" onclick="moverseccion(tapeteFisico)">SIGUIENTE</div>
</div>
</div>
`;
//TAPETE VIRTUAL 
var tapeteFisico = `
<div class="header">
<span id="semana">Semana 2</span>
</div>

<div class="diaCont">
<div id="diaPalabra">
    Lunes
</div>
<div id="diaNumero">
    00/0/0000
</div>
</div>

<div class="tapContainer">
<div id="contGrilla" class="tapeteFisico">
    <div class="fila">
        <div class="g-title" id="titulo">E1-1</div>

    </div>
    <div class="fila">
        <div id="J1" class="tecla f" onclick="b('J1')"></div>
        <div id="J2" class="tecla i" onclick="b('J2')">2</div>
        <div id="J3" class="tecla f" onclick="b('J3')"></div>
        <div id="J4" class="tecla f" onclick="b('J4')"></div>
    </div>

    <div class="fila">
        <div id="I1" class="tecla f" onclick="b('I1')"></div>
        <div id="I2" class="tecla f" onclick="b('I2')"></div>
        <div id="I3" class="tecla d" onclick="b('I3')">1</div>
        <div id="I4" class="tecla f" onclick="b('I4')"></div>
    </div>

    <div class="fila">
        <div id="H1" class="tecla f" onclick="b('H1')"></div>
        <div id="H2" class="tecla i" onclick="b('H2')">2</div>
        <div id="H3" class="tecla f" onclick="b('H3')"></div>
        <div id="H4" class="tecla f" onclick="b('H4')"></div>
    </div>

    <div class="fila">
        <div id="G1" class="tecla f" onclick="b('G1')"></div>
        <div id="G2" class="tecla f" onclick="b('G2')"></div>
        <div id="G3" class="tecla d" onclick="b('G3')">1</div>
        <div id="G4" class="tecla f" onclick="b('G4')"></div>
    </div>

    <div class="fila">
        <div id="F1" class="tecla f" onclick="b('F1')"></div>
        <div id="F2" class="tecla i" onclick="b('F2')">2</div>
        <div id="F3" class="tecla f" onclick="b('F3')"></div>
        <div id="F4" class="tecla f" onclick="b('F4')"></div>
    </div>

    <div class="fila">
        <div id="E1" class="tecla f" onclick="b('E1')"></div>
        <div id="E2" class="tecla f" onclick="b('E2')"></div>
        <div id="E3" class="tecla d" onclick="b('E3')">1</div>
        <div id="E4" class="tecla f" onclick="b('E4')"></div>
    </div>

    <div class="fila">
        <div id="D1" class="tecla f" onclick="b('D1')"></div>
        <div id="D2" class="tecla i" onclick="b('D2')">2</div>
        <div id="D3" class="tecla f" onclick="b('D3')"></div>
        <div id="D4" class="tecla f" onclick="b('D4')"></div>
    </div>

    <div class="fila">
        <div id="C1" class="tecla f" onclick="b('C1')"></div>
        <div id="C2" class="tecla f" onclick="b('C2')"></div>
        <div id="C3" class="tecla d" onclick="b('C3')">1</div>
        <div id="C4" class="tecla f" onclick="b('C4')"></div>
    </div>

    <div class="fila">
        <div id="B1" class="tecla f" onclick="b('B1')"></div>
        <div id="B2" class="tecla i" onclick="b('B2')">2</div>
        <div id="B3" class="tecla f" onclick="b('B3')"></div>
        <div id="B4" class="tecla f" onclick="b('B4')"></div>
    </div>

    <div class="fila">
        <div id="A1" class="tecla f" onclick="b('A1')"></div>
        <div id="A2" class="tecla f" onclick="b('A2')"></div>
        <div id="A3" class="tecla d" onclick="b('A3')">1</div>
        <div id="A4" class="tecla f" onclick="b('A4')"></div>
    </div>

</div>

<div class="acciones" onload="si()">
    
    <div class="vueltas">
        
        
        <div class="label">3 VUELTAS</div>
    
</div>

    <div class="inicio">

        <div>PIE DE INICIO</div>

        
            <div id="pInicioBx">
                <div class="inicio-t der" id="btnPieInicio">
                    <div class="boton">
            
                    </div>
                </div>
            </div>
        
        
        <div id="inicio" class="b">pie derecho</div>
    </div>

    <div class="btnDemostracionCont" id="demoCont">
        <div class="btnDemostracion " onclick="runDemo(E1_1,800)">
            <div class="btnLabel">DEMOSTRACIÓN</div>
            <div class="triangulo"></div>
        </div>
    </div>

    

    <div class="inputs">
       

        <div class="inpt">
            <label class="completado" for="complete">COMPLETADO</label>
            <input type="checkbox" id="complete" value="completado" onchange="changeCuenta()">
        </div>
    </div>

    <div id="ejerciciosMenuCont">

        <div class="ejercicioCont">
            <div class="btnEjercicio active" onclick="cambiarEjer(E1_1,E1_2,'Ejercicio 1')">Ejercicio 1</div>
            <div id='ejerLabel-0-1'>I</div>
            <div id='ejerLabel-0-0'>D</div>
        </div>
        <div class="ejercicioCont">
            <div class="btnEjercicio" onclick="cambiarEjer(E1_3,E1_4,'Ejercicio 2')">Ejercicio 2</div>
            <div id='ejerLabel-1-1'>I</div>
            <div id='ejerLabel-1-0'>D</div>
        </div>
        <div class="ejercicioCont">
            <div class="btnEjercicio" onclick="cambiarEjer(E1_5,E1_6,'Ejercicio 3')">Ejercicio 3</div>
            <div id='ejerLabel-2-1'>I</div>
            <div id='ejerLabel-2-0'>D</div>
        </div>
        
        

    </div>

    <div class="btnFinalizarCont">
        <div class="btnFinalizar disabled" onclick="moverseccion(bitacoraPost),finalizarAct()">FINALIZAR DÍA</div>
    </div>
</div>
</div>
<div class="pContInstr">
                <h3><strong>Instrucciones:</strong></h3>
                <ul>
                <li>Recorrer 3 veces el tapete físico con el patrón descrito en tapete virtual, iniciando con el <strong>pie derecho.</strong> (se recomienda utilizar el boton de <i>"DEMOSTRACIÓN"</i> antes de recorrer el patrón)</strong></li>
                <li>Una vez recorrido el patrón 3 veces con el <strong>pie derecho</strong> marcar la casilla de <i>"COMPLETADO"</i> y apretar el botón: <i>"PIE DE INICIO"</i>  para visualizar el mismo patrón iniciado con el <strong>pie izquierdo.</strong></li>
                <li>Recorrer 3 veces el tapete físico con el patrón descrito en el tapete virtual iniciando con el <strong>pie izquierdo.</strong></li>
                <li>Una vez recorrido el patrón 3 veces con el <strong>pie izquierdo</strong> marcar la casilla de <i>"COMPLETADO"</i></li>
                <li>Elegir el siguiente ejercicio mediante el botón correspondiente: <i>"Ejercicio 1, Ejercicio 2 ó Ejercicio 3"</i> y repetir el procedimiento</li>
                <li>Una vez completados los ejercicios, apretar el botón <i>"FINALIZAR DÍA"</i></li>
            </ul>
            
            </div>

            


`;

//TAPETE VIRTUAL 

var bitacoraPost = `
<div class="bitacora">
            <h1>BÍTACORA POST-ACTIVIDAD:</h1>
            <div class="pCont">
                <P>Escala de medición de esfuerzo percibido <strong>después del ejercicio</strong>
                </P>
            </div>
            
            <div class="escalaEsfuerzo">
    <div class="renglonEsfuerzo">
        <div class="num">0.</div>
        <label for="0">Reposos</label>
        <input type="radio" id="0" name="escalaEsfuerzo" value="Reposos" onchange="modMetricas('esfuerzo3','0 - Reposo')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">1.</div>
        <label for="1">Muy muy ligero</label>
        <input type="radio" id="1" name="escalaEsfuerzo" value="Muy muy ligero" onchange="modMetricas('esfuerzo3','1 - Muy muy ligero')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">2.</div>
        <label for="2">Muy ligero</label>
        <input type="radio" id="2" name="escalaEsfuerzo" value="Muy ligero" onchange="modMetricas('esfuerzo3','2 - Muy ligero')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">3.</div>
        <label for="3">Ligero</label>
        <input type="radio" id="3" name="escalaEsfuerzo" value="Ligero" onchange="modMetricas('esfuerzo3','3 - Ligero')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">4.</div>
        <label for="4">Algo pesado</label>
        <input type="radio" id="4" name="escalaEsfuerzo" value="Algo pesado" onchange="modMetricas('esfuerzo3','4 - Algo pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">5.</div>
        <label for="5">Pesado</label>
        <input type="radio" id="5" name="escalaEsfuerzo" value="Pesado" onchange="modMetricas('esfuerzo3','5 - Pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">6.</div>
        <label for="6">Más pesado</label>
        <input type="radio" id="6" name="escalaEsfuerzo" value="Más pesado" onchange="modMetricas('esfuerzo3','6 - Más pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">7.</div>
        <label for="7">Muy pesado</label>
        <input type="radio" id="7" name="escalaEsfuerzo" value="Muy pesado" onchange="modMetricas('esfuerzo3','7 - Muy pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">8.</div>
        <label for="8">Muy muy pesado</label>
        <input type="radio" id="8" name="escalaEsfuerzo" value="Muy muy pesado" onchange="modMetricas('esfuerzo3','8 - Muy muy pesado')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">9.</div>
        <label for="9">Máximo</label>
        <input type="radio" id="9" name="escalaEsfuerzo" value="Máximo" onchange="modMetricas('esfuerzo3','9 - Máximo')">
    </div>

    <div class="renglonEsfuerzo">
        <div class="num">10.</div>
        <label for="10">Extremo</label>
        <input type="radio" id="10" name="escalaEsfuerzo" value="Extremo" onchange="modMetricas('esfuerzo3','10 - Extremo')">
    </div>
    
</div>
    
            <div class="pCont">
                <p>Escala de medición del estado de ánimo del
                    paciente <strong>después del Ejercicio:</strong></p>
            </div>
            
            <div class="contEscalaCaras">
                
                <div class="caras">
                    <div class="caraBtnCont">
                        <label class="cara1" for="cara1">
                            <div class="cara cara1"></div>
                        </label>
                        <input type="radio" id="cara1" name="caras" value="1" onchange="modMetricas('estadoDeAnimo',['cara1','1/5','Muy Triste'])">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara2">
                            <div class="cara cara2"></div>
                        </label>
                        <input type="radio" id="cara2" name="caras" value="1" onchange="modMetricas('estadoDeAnimo',['cara2','2/5','Triste'])">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara3">
                            <div class="cara cara3"></div>
                        </label>
                        <input type="radio" id="cara3" name="caras" value="1" onchange="modMetricas('estadoDeAnimo',['cara3','3/5','Neutral'])">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara4">
                            <div class="cara cara4"></div>
                        </label>
                        <input type="radio" id="cara4" name="caras" value="1" onchange="modMetricas('estadoDeAnimo',['cara4','4/5','Feliz'])">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara5">
                            <div class="cara cara5"></div>
                        </label>
                        <input type="radio" id="cara5" name="caras" value="1" onchange="modMetricas('estadoDeAnimo',['cara5','5/5','Muy Feliz'])">
                    </div>
    
                </div>
            </div>


            <div class="pContInstr">
                <p><strong>Enfriamiento:</strong></p>
                <p>Al terminar la actividad, deberá realizar un enfriamiento por 5 minutos, <strong>éste puede ser una ligera caminata al rededor del tapete</strong></p>
            
            </div>
            
            
                
            <div class="botones">
                        <div class="boton" onclick="moverseccion(resumen)">FINALIZAR</div>
            </div>
        </div>
       
    
`;

var resumen = `


<div class="resumen">
        
        <div class="resTit">

            <h2>Reporte De actividad</h2>
            <div class="semanaFechaCont" id="resFecha">
                <div class="semana">Semana 1</div>
                <div class="fecha">12/04/2022</div>
            </div>

        </div>
        

        <div class="resCont">
            
    
            <div class="resCard" id="resTiempo">
                <div class="cardTit">Tiempo de actividad</div>
                <div>-Inicio:</div>
                <div>-Finalizado:</div>
                <div>TOTAL:</div>
            </div>
    
            <div class="resCard" id="resEsfuerzo">
                <div class="cardTit">Escala de esfuerzo</div>
                <div>-Inicial:</div>
                <div>-Post Calentamiento:</div>
                <div>-Post Actividad:</div>
    
            </div>
    
            <div class="escalaAnimo resCard" id="resAnimo">
            <div class="cardTit">Escala de Ánimo</div>
            <div class="cara"></div>
            <div class="num"></div>
            <div class="estado"></div>
            </div>
        </div>

        <div class="finCont">
            <div class="finYSubir">
                Finalizar y Subir
            </div>
        </div>

     
  


`;







var opcionesMenu = `
<div class="semCont">
Semana 1
<div class="btnCont">
<div class="btn" onclick="printEjer(E1_1)">E1-1</div>
<div class="btn" onclick="printEjer(E1_2)">E1-2</div>
<div class="btn" onclick="printEjer(E1_3)">E1-3</div>
</div>

<div class="btnCont">
<div class="btn" onclick="printEjer(E1_4)">E1-4</div>
<div class="btn" onclick="printEjer(E1_5)">E1-5</div>
<div class="btn" onclick="printEjer(E1_6)">E1-6</div>
</div>
</div>

<div class="semCont">
Semana 2

<div class="btnCont">
<div class="btn" onclick="printEjer(E1_7)">E1-7</div>
<div class="btn" onclick="printEjer(E1_8)">E1-8</div>
<div class="btn" onclick="printEjer(E2_1)">E2-1</div>
<div class="btn" onclick="printEjer(E2_2)">E2-2</div>
</div>
<div class="btnCont">
<div class="btn" onclick="printEjer(E2_3)">E2-3</div>
<div class="btn" onclick="printEjer(E2_4)">E2-4</div>
<div class="btn" onclick="printEjer(E2_5)">E2-5</div>
<div class="btn" onclick="printEjer(E2_6)">E2-6</div>
</div>
</div>

<div class="semCont">
Semana 3

<div class="btnCont">
<div class="btn" onclick="printEjer(E1_3)">E1-3</div>
<div class="btn" onclick="printEjer(E1_4)">E1-4</div>
<div class="btn" onclick="printEjer(E2_7)">E2-7</div>
<div class="btn" onclick="printEjer(E2_8)">E2-8</div>
</div>
<div class="btnCont">
<div class="btn" onclick="printEjer(E2_1)">E2-1</div>
<div class="btn" onclick="printEjer(E2_2)">E2-2</div>
<div class="btn" onclick="printEjer(E2_19)">E2-19</div>
<div class="btn" onclick="printEjer(E2_20)">E2-20</div>
</div>
</div>

<div class="semCont">
Semana 4

<div class="btnCont">
<div class="btn" onclick="printEjer(E1_3)">E1-3</div>
<div class="btn" onclick="printEjer(E1_4)">E1-4</div>
<div class="btn" onclick="printEjer(E2_7)">E2-7</div>
<div class="btn" onclick="printEjer(E2_8)">E2-8</div>
</div>
<div class="btnCont">
<div class="btn" onclick="printEjer(E2_1)">E2-1</div>
<div class="btn" onclick="printEjer(E2_2)">E2-2</div>
<div class="btn" onclick="printEjer(E2_19)">E2-19</div>
<div class="btn" onclick="printEjer(E2_20)">E2-20</div>
</div>
</div> -->
`;

var tapeteVirtual = `
<div class="tapVirtual">
<div id="contGrilla">
    <div class="fila">
        <div class="g-title">E1-1</div>
    
    </div>
    <div class="fila">
        <div id="J1" class="tecla f" onclick="b('J1')"></div>
        <div id="J2" class="tecla i" onclick="b('J2')">2</div>
        <div id="J3" class="tecla f" onclick="b('J3')"></div>
        <div id="J4" class="tecla f" onclick="b('J4')"></div>
    </div>
    
    <div class="fila">
        <div id="I1" class="tecla f" onclick="b('I1')"></div>
        <div id="I2" class="tecla f" onclick="b('I2')"></div>
        <div id="I3" class="tecla d" onclick="b('I3')">1</div>
        <div id="I4" class="tecla f" onclick="b('I4')"></div>
    </div>
    
    <div class="fila">
        <div id="H1" class="tecla f" onclick="b('H1')"></div>
        <div id="H2" class="tecla i" onclick="b('H2')">2</div>
        <div id="H3" class="tecla f" onclick="b('H3')"></div>
        <div id="H4" class="tecla f" onclick="b('H4')"></div>
    </div>
    
    <div class="fila">
        <div id="G1" class="tecla f" onclick="b('G1')"></div>
        <div id="G2" class="tecla f" onclick="b('G2')"></div>
        <div id="G3" class="tecla d" onclick="b('G3')">1</div>
        <div id="G4" class="tecla f" onclick="b('G4')"></div>
    </div>
    
    <div class="fila">
        <div id="F1" class="tecla f" onclick="b('F1')"></div>
        <div id="F2" class="tecla i" onclick="b('F2')">2</div>
        <div id="F3" class="tecla f" onclick="b('F3')"></div>
        <div id="F4" class="tecla f" onclick="b('F4')"></div>
    </div>
    
    <div class="fila">
        <div id="E1" class="tecla f" onclick="b('E1')"></div>
        <div id="E2" class="tecla f" onclick="b('E2')"></div>
        <div id="E3" class="tecla d" onclick="b('E3')">1</div>
        <div id="E4" class="tecla f" onclick="b('E4')"></div>
    </div>
    
    <div class="fila">
        <div id="D1" class="tecla f" onclick="b('D1')"></div>
        <div id="D2" class="tecla i" onclick="b('D2')">2</div>
        <div id="D3" class="tecla f" onclick="b('D3')"></div>
        <div id="D4" class="tecla f" onclick="b('D4')"></div>
    </div>
    
    <div class="fila">
        <div id="C1" class="tecla f" onclick="b('C1')"></div>
        <div id="C2" class="tecla f" onclick="b('C2')"></div>
        <div id="C3" class="tecla d" onclick="b('C3')">1</div>
        <div id="C4" class="tecla f" onclick="b('C4')"></div>
    </div>
    
    <div class="fila">
        <div id="B1" class="tecla f" onclick="b('B1')"></div>
        <div id="B2" class="tecla i" onclick="b('B2')">2</div>
        <div id="B3" class="tecla f" onclick="b('B3')"></div>
        <div id="B4" class="tecla f" onclick="b('B4')"></div>
    </div>
    
    <div class="fila">
        <div id="A1" class="tecla f" onclick="b('A1')"></div>
        <div id="A2" class="tecla f" onclick="b('A2')"></div>
        <div id="A3" class="tecla d" onclick="b('A3')">1</div>
        <div id="A4" class="tecla f" onclick="b('A4')"></div>
    </div>

</div>

<div class="instr">
    <div class="pieInicio" id="inicio">Pie de Inicio: Pie Derecho</div>
    <div class="subContInst">
        <div class="izquierdo">Pie Izquierdo</div>
        <div class="derecho">Pie Derecho</div>
    </div>
    <div class="subContInst">
        <div id="dia1">Lunes</div>
        <div >3 Vueltas</div>
    </div>
    <div class="subContInst">
        <div id="dia2">Miércoles</div>
        <div >3 Vueltas</div>
    </div>
    <div class="subContInst">
        <div id="dia3">Viernes</div>
        <div >3 Vueltas</div>
    </div>
</div>

</div>
`;

