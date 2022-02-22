var salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

var salariosColSorted = salariosCol.sort(
    function(a,b){
        return a - b;
    }
);

function esPar (Numero){
    return (Numero % 2 === 0);
};

function medianaSalarios (lista) {

    const mitad = parseInt (lista.length/ 2);
    
    if (esPar(lista.lengt)){
        var perMitad1 = lista[mitad - 1];
        var perMitad2 = lista[mitad];

        var result = Promedio([perMitad1,perMitad2]);

        return result;
        
    }else{
        var perMitad = lista[mitad];
        return perMitad;
    };
};

function Promedio(lista1)
{
 
    var sLista = lista1.reduce( //reduce parecido al ciclo for
        function(vAcumulado = 0, nElemento){ //valor acumulado de la suma, si no tiene datos sera 0 y el elemento de la lista que esta recorriendo
            return vAcumulado + nElemento;
        }
    );

    return sLista/lista1.length;
};

var spliceStart = (salariosColSorted.length * (90)/100);
var spliceCount = salariosColSorted.length - spliceStart;
var salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount); // permite cortar los arrys desde posicion que deseas param1 =posicion inicial, param2 = cantidad de registros a cortar

console.log(medianaSalarios(salariosColTop10));
