
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
          AC: document.getElementById('AC'),
          DEL: document.getElementById('DEL'),
      }
    

    //Boton valor 1
      numeros.boton1.onclick = () => {
      console.log("Click1");
      var valor = document.getElementById("1").value;
      showdisplay.update(valor);
      op_elements.num += valor
    }
  
      //Boton valor 2
      numeros.boton2.onclick = () => {
        var valor = document.getElementById("2").value
        showdisplay.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton3.onclick = () => {
        var valor = document.getElementById("3").value
        showdisplay.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton4.onclick = () => {
        var valor = document.getElementById("4").value
        showdisplay.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton5.onclick = () => {
        var valor = document.getElementById("5").value
        showdisplay.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton6.onclick = () => {
        var valor = document.getElementById("6").value
        showdisplay.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton7.onclick = () => {
        var valor = document.getElementById("7").value
        showdisplay.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton8.onclick = () => {
        var valor = document.getElementById("8").value
        showdisplay.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton9.onclick = () => {
        var valor = document.getElementById("9").value
        showdisplay.update(valor);
        op_elements.num += valor
      }
    
      numeros.boton0.onclick = () => {
        var valor = document.getElementById("0").value
        showdisplay.update(valor);
        op_elements.num += valor
      }

      //Operaciones
      suma.onclick = () => {
        console.log("Suma");
        var operation = document.getElementById("+").value;
        var display = document.getElementById("display");
        showdisplay = showdisplay + operation;
        operation_arr.push(num);
        operation_arr.push(operation);
        num = "";
        console.log(operation_arr);
        display.innerHTML = showdisplay;
      }
      
      resta.onclick = () => {
        console.log("Resta");
        var operation = document.getElementById("-").value;
        var display = document.getElementById("display");
        showdisplay = showdisplay + operation;
        operation_arr.push(num);
        operation_arr.push(operation);
        num = "";
        console.log(operation_arr);
        display.innerHTML = showdisplay;
      }
      multiplicacion.onclick = () => {
        console.log("Multiplicación");
        var operation = document.getElementById("*").value;
        var display = document.getElementById("display");
        showdisplay = showdisplay + operation;
        operation_arr.push(num);
        operation_arr.push(operation);
        num = "";
        console.log(operation_arr);
        display.innerHTML = showdisplay;
      }
      division.onclick = () => {
        console.log("Multiplicación");
        var operation = document.getElementById("/").value;
        var display = document.getElementById("display");
        showdisplay = showdisplay + operation;
        operation_arr.push(num);
        operation_arr.push(operation);
        num = "";
        console.log(operation_arr);
        display.innerHTML = showdisplay;
      }
      decimal.onclick = () => {
        var valor = document.getElementById(".").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }

    }
