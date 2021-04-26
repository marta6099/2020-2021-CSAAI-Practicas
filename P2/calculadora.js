
//Función inicial.
function main(){
  console.log("Que comiencen los juegos de JS");
 
       var op_elements = {
        num: "",
        operation_arr: [],
        }
        //BOTONES QUE DISPONEMOS EN LA CALCULADORA.
        var numeros = {
          boton1: document.getElementById("1"),
          boton2: document.getElementById("2"),
          boton3: document.getElementById("3"),
          boton4: document.getElementById("4"),
          boton5: document.getElementById("5"),
          boton6: document.getElementById("6"),
          boton7: document.getElementById("7"),
          boton8: document.getElementById("8"),
          boton9: document.getElementById("9"),
          boton0: document.getElementById("0"),
          display: document.getElementById("display")
        }
        //OPERACIONES
        var operaciones = {
          suma: document.getElementById("+"),
          resta: document.getElementById("-"),
          multiplicacion: document.getElementById("*"),
          division: document.getElementById("/"),
          botonera: document.getElementById("="),
          decimal: document.getElementById("."),
          tanto : document.getElementById("%"),
          
          DEL: document.getElementById('DEL'),
      }
      var AC= document.getElementById('AC');
    //Para el display
      var display = {
        disp: "",
        update: function (value) {
          this.disp += value;
          numeros.display.innerHTML = this.disp;
        }
      }
  //Estados de la calculadora
 /*  const ESTADO = {
    INIT: 0,
    OPE1: 1,
    OPE: 2,
    OPE2: 3,
    OPE3: 4,
  }
  var estado = ESTADO.INIT;
  function number(num){
    if (estado == ESTADO.INIT){
      display.innerHTML = num;
      estado = ESTADO.OPE1;
    } else if(estado == ESTADO.OPE1){
      display.innerHTML += num;
      estado = ESTADO.OPE1;
    } else if ( estado == ESTADO.OPE){
      display.innerHTML += num;
      estado = ESTADO.OPE3;
    } else if(estado == ESTADO.OPE2 || estado == ESTADO.OPE3){
      display.innerHTML += num;
      estado = ESTADO.OPE3;
    }
  }

  function operation (op){
    if (estado == ESTADO.OPE1){
      display.innerHTML += op;
      estado = ESTADO.OPE;
    }else if(estado == ESTADO.OPE2){
      display.innerHTML += op;
      estado = ESTADO.OPE3;
    }else if (estado == ESTADO.OPE3){
      display.innerHTML += op;
      estado = ESTADO.OPE3;
    }
  }
  function resultado(){
    if( estado == ESTADO.OP3 || estado == ESTADO.OP2){
      display.innerHTML = eval(display.innerHTML);
      estado = ESTADO.OPE1;
    }
  }
  digitos = document.getElementsByClassName("digitos")
  for ( i=0; i < digitos.length; i++){
    op[i].onclick = (ev) => {
      operation(ev.target.value)
    }
  }
  op = document.getElementsByClassName("operador")
  for ( i=0; i < op.length; i++){
    op[i].onclick = (ev) => {
      operation(ev.target.value)
    }
  }
  igual.onclick = () => {
    resultado();
  }
  AC.onclick = () => {
    display.innerHTML = "0";
    estado = ESTADO.INIT
  } */

    //Boton valor 1
      numeros.boton1.onclick = () => {
      console.log("Click1");
      var valor = document.getElementById("1").value;
      display.update(valor);
      op_elements.num += valor
    }
  
      //Boton valor 2
      numeros.boton2.onclick = () => {
        var valor = document.getElementById("2").value
        display.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton3.onclick = () => {
        var valor = document.getElementById("3").value
        display.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton4.onclick = () => {
        var valor = document.getElementById("4").value
        display.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton5.onclick = () => {
        var valor = document.getElementById("5").value
        display.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton6.onclick = () => {
        var valor = document.getElementById("6").value
        display.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton7.onclick = () => {
        var valor = document.getElementById("7").value
        display.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton8.onclick = () => {
        var valor = document.getElementById("8").value
        display.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton9.onclick = () => {
        var valor = document.getElementById("9").value
        display.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton0.onclick = () => {
        var valor = document.getElementById("0").value
        display.update(valor);
        op_elements.num += valor
      }

      //Operaciones
    
      operaciones.suma.onclick = () => {
        var operation = document.getElementById("+").value;
        op_elements.operation_arr.push(op_elements.num);
        op_elements.operation_arr.push(operation)
        display.update(operation);
        op_elements.num = "";
      }
      
      operaciones.resta.onclick = () => {
        console.log("rest");
        var operation = document.getElementById("-").value;
        op_elements.operation_arr.push(op_elements.num);
        op_elements.operation_arr.push(operation);
        display.update(operation);
        op_elements.num = "";
      }

      operaciones.multiplicacion.onclick = () => {
        console.log("mult");
        var operation = document.getElementById("*").value;
        op_elements.operation_arr.push(op_elements.num);
        op_elements.operation_arr.push(operation)
        display.update(operation);
        op_elements.num = "";
      }
      operaciones.division.onclick = () => {
        console.log("divi");
        var operation = document.getElementById("/").value;
        op_elements.operation_arr.push(op_elements.num);
        op_elements.operation_arr.push(operation)
        display.update(operation);
        op_elements.num = "";
      }
      operaciones.decimal.onclick = () => {
        console.log("decimal");
        var valor = document.getElementById(".").value;
        display.update(valor)
        op_elements.num += valor
      }
      operaciones.tanto.onclick = () => {
        console.log("tantoporciento");
        var valor = document.getElementById("%").value;
        op_elements.operation_arr.push(op_elements.num);
        op_elements.operation_arr.push(operation)
        display.update(valor)
        op_elements.num = "";
      } 

      operaciones.botonera.onclick = () => {
        console.log("Igual");
        op_elements.operation_arr.push(op_elements.num);
        display.disp = "";
        op_elements.num = ""
    
        operation = op_elements.operation_arr[1];
        op1 = parseFloat(op_elements.operation_arr[0]);
        op2 = parseFloat(op_elements.operation_arr[2]);
    
        if (operation == "+") {
          resultado = op1 + op2;

        } else if (operation == "-") {
          resultado = op1 - op2;

        } else if (operation == "*") {
          resultado = op1 * op2;
        
        } else if (operation == "/") {
          if (op2 == 0) {
            resultado = "Math error"
          } else {
            resultado = op1 / op2;
          }
        
        } else if(operation == "%") {
          resultado = op1 / 100;

        } if (operation == "AC") {
          resetear();
          resultado= "0"; 
          }
        
      
    
        console.log(resultado)
        display.update(resultado);
        op_elements.operation_arr.splice(0, 3);
        display.disp = "";
        }
    }