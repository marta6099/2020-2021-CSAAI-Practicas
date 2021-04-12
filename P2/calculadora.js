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
        },
        //Funcion DEL, para borrar todo lo que hay en el display.
        DELfuncion:function(){
            if (this.numero != ""){
              var length = this.numero.length;
              this.numero = this.numero.slice(0, length-1);
              var length = this.display_ini.length;
              this.display_ini = this.display_ini.slice(0, length-1);
      
            }else{
              this.array_calcoo.pop();
              var length = this.operaciondisplay.length;
              this.display_ini = this.display_ini.slice(0, length-1);
            }
            //Si se borra todo el número el display se pone a 0
            if (this.display_ini != ""){
              gui.display.innerHTML = this.display_ini;
            }else{
              gui.display.innerHTML = 0;
            }
          },
    }
}


console.log("CALCULADORA en javascript");

gui.boton1.onclick = () => {
  calculadora.addnumber(1);
}

gui.boton2.onclick = () => {
  calculadora.addnumber(2);
}

gui.boton3.onclick = () => {
  calculadora.addnumber(3);
}

gui.boton4.onclick = () => {
  calculadora.addnumber(4);
}

gui.boton5.onclick = () => {
  calculadora.addnumber(5);
}

gui.boton6.onclick = () => {
  calculadora.addnumber(6);
}

gui.boton7.onclick = () => {
  calculadora.addnumber(7);
}

gui.boton8.onclick = () => {
  calculadora.addnumber(8);
}

gui.boton9.onclick = () => {
  calculadora.addnumber(9);
}

gui.boton0.onclick = () => {
  calculadora.addnumber(0);
}

gui.suma.onclick = () => {
  calculadora.addoper("+");
}

gui.multiplicacion.onclick = () => {
  calculadora.addoper("x");
}

gui.division.onclick = () => {
  calculadora.addoper("/");
}

gui.resta.onclick = () => {
  calculadora.addoper("-");
}

gui.AC.onclick = () => {
  calculadora.ACfunction();
}

gui.DEL.onclick = () => {
  calculadora.DELfunction();
}

gui.resultado.onclick = () => {

  calculadora.addoper("=");
  calculadora.resultadofinal();
}

