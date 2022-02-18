function Promedio(lista1)
{
 
    var sLista = lista1.reduce( //reduce parecido al ciclo for
        function(vAcumulado = 0, nElemento){ //valor acumulado de la suma, si no tiene datos sera 0 y el elemento de la lista que esta recorriendo
            return vAcumulado + nElemento;
        }
    );

    return sLista/lista1.length;
}

function Mediana(lista1)
{
    var Mediana = parseInt(lista1.length/2);
    
    lista1.sort(
        function(a,b){
            return a - b;
        }
    );

    if (ParImpar(lista1.length)){
        var promedio = Promedio([lista1[Mediana],lista1[Mediana - 1]]);
        return promedio;
    }else {
        return lista1[Mediana];
    }

}

function ParImpar(numero)
{
    if (numero%2 == 0) {
        return true;
    }else{
        return false;
    }
}

function data(){
    var a = [1,1,2,2,3,4,5,3,5,4,5];
    return Moda(a);
}

function Moda(lista1){
    var lCount = {};
    
    lista1.map(
        function(element){
            if (lCount[element]) {
                lCount[element] += 1;
            }else{
                lCount[element] = 1;
            }
        }
    )

    var listaArrys = Object.entries(lCount).sort(
        function (a,b){ return a[1] - b[1]}
    );

    return listaArrys[listaArrys.length - 1];
}