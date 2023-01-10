function Bitacora(BitIniEsf,BitPreEsf,BitPostEsf,BitAnimo){
    this.BitIniEsf=BitIniEsf
    this.BitPreEsf=BitPreEsf
    this.BitPostEsf=BitPostEsf
    this.BitAnimo=BitAnimo
    }
    nuevaPersona = new Bitacora('ligero','ligero','AlgoPesado','4/5')
// console.log(nuevaPersona)

var tiempo = [0,0,0];

var esfuerzo = ['vacio','vacio','vacio'];

var estadoDeAnimo = [];


function modMetricas(metrica,valor){
    switch (metrica) {
        case 'tiempo':
            
            break;

        case 'esfuerzo1':
            esfuerzo[0]= valor;
            console.log(esfuerzo)
            break;

        case 'esfuerzo2':
            esfuerzo[1]= valor;
            console.log(esfuerzo)
            break;
        
        case 'esfuerzo3':
            esfuerzo[2]= valor;
            console.log(esfuerzo)
            break;

        case 'estadoDeAnimo':
            estadoDeAnimo= valor;
            console.log(estadoDeAnimo)
            break;

        
    
        
    }
}




