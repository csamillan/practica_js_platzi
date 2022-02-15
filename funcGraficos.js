function CalcularPerimetro(){
    var lado1 = parseInt(document.getElementById("lado1").value);
    var lado2 = parseInt(document.getElementById("lado2").value);
    var lado3 = parseInt(document.getElementById("lado3").value);
    var forma = document.getElementById("forma").value;
    var vform = 0;

    if(forma == "c"){
        vform = 1
    }else if( forma == "t")
    {
        vform = 2;
    }else{
        vform =3;
    };

    var result = perimetro(vform,lado1,lado2,lado3);
    alert(result);
}

function CalcularArea(){
    var lado1 = parseInt(document.getElementById("lado1").value);
    var altura = parseInt(document.getElementById("altura").value);
    var forma = document.getElementById("forma").value;
    var vform = 0;

    if(forma == "c"){
        vform = 1
    }else if( forma == "t")
    {
        vform = 2;
    }else{
        vform =3;
    };

    var result = Area(vform,lado1,altura);
    alert(result);
}

function perimetro(tipo,lado1,lado2,lado3){

var perimetro = 0;
var forma = "";

    switch(tipo)
    {
        case 1: //triangulo
            perimetro = lado1 * 4;
            forma = "El perimetro del Cuadrado ";
            break;

        case 2://Triangulo
            perimetro = lado1 + lado2 + lado3;
            forma = "El perimetro del Triangulo ";
            break;

        case 3://Circulo
            perimetro = 2*lado1*Math.PI;
            forma = "El perimetro del Circulo ";
            break;

        default:
            break;
    }

    return forma + perimetro + " cm"

};

function Area(tipo,lado1,altura)
{
    var perimetro = 0;
    var forma = "";
    
        switch(tipo)
        {
            case 1: //triangulo
                perimetro = lado1 * lado1;
                forma = "El Area del Cuadrado";
                break;
    
            case 2://Triangulo
                perimetro = (lado1 *altura)/2;
                forma = "El Area del Triangulo";
                break;
    
            case 3://Circulo
                perimetro = lado1*lado1*Math.PI;
                forma = "El Area del Circulo";
                break;
    
            default:
                break;
        }
    
        return forma + perimetro + " cm";
};