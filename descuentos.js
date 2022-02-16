function Calculo()
{
    var precio = document.getElementById("Precio").value;
    var descuento = document.getElementById("descuento").value;

    var valor = CalcularDescuento(precio,descuento);
    
    document.getElementById("respuesta").innerText = "El precio Final es: " + valor;
}

function CalcularDescuento(precio,descuento)
{
    return (precio*(100 - descuento)/100);
};