function main(){
    var gui = {
        //BOTONES QUE DISPONEMOS EN LA CALCULADORA.
        display: document.getElementById('display'),
        boton1: document.getElementById('boton1'),
        boton2: document.getElementById('boton2'),
        boton3: document.getElementById('boton3'),
        boton4: document.getElementById('boton4'),
        boton5: document.getElementById('boton5'),
        boton6: document.getElementById('boton6'),
        boton7: document.getElementById('boton7'),
        boton8: document.getElementById('boton8'),
        boton9: document.getElementById('boton9'),
        boton0: document.getElementById('boton0'),
        //OPERACIONES
        suma: document.getElementById('suma'),
        multiplicacion: document.getElementById('multiplicacion'),
        division: document.getElementById('division'),
        resta: document.getElementById('resta'),
        resultado: document.getElementById('resultado'),
        
        AC: document.getElementById('AC'),
        DEL: document.getElementById('DEL')
    }

    var CALCULADORA = {
        //Aqui tenemos las operaciones qu eva a realizar la calculadora.
        display_ini: " ",
        numero: "",
        //Debemos crear un array para que se guarden los numeros introduccidos y las operaciones
        array_calcoo: [],

        //Crear funcion para borrar un número o una operacion.
        ACfuncion: function(){
            this.array_calcoo = [];
            this.display_ini = "";
            gui.display.innerHTML = 0;
            this.numero = "";
        }
    }
}