
//Función inicial.
function main(){
        //BOTONES QUE DISPONEMOS EN LA CALCULADORA.
        var display = document.getElementById('display');
        var boton1 = document.getElementById("1");
        var boton2 = document.getElementById("2");
        var boton3 = document.getElementById("3");
        var boton4 = document.getElementById("4");
        var boton5 = document.getElementById("5");
        var boton6 = document.getElementById("6");
        var boton7 = document.getElementById("7");
        var boton8 = document.getElementById("8");
        var boton9 = document.getElementById("9");
        var boton0 = document.getElementById("0");
        //OPERACIONES
        var suma = document.getElementById("+");
        var multiplicacion= document.getElementById('*');
        var division= document.getElementById('/');
        var resta = document.getElementById('-');
        var resultado= document.getElementById('=');

        //Poner decimales
        var decimal = document.getElementById(".");
        
        //
        var AC= document.getElementById('AC');
        var DEL= document.getElementById('DEL');
    }

    //Boton valor 0
    boton0.onclick = () => {
      var valor = document.getElementById("0").value;
      var display = document.getElementById("display");
      num = num + valor
      display.innerHTML = (showdisplay = showdisplay + valor);
    }

    //Boton valor 1
    boton1.onclick = () => {
      console.log("Click1");
      var valor = document.getElementById("1").value;
      var display = document.getElementById("display");
      num = num + valor
      display.innerHTML = (showdisplay = showdisplay + valor);
    }
  
      //Boton valor 2
      boton2.onclick = () => {
        console.log("Click2");
        var valor = document.getElementById("2").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }
  
      //Boton valor 3
      boton3.onclick = () => {
        console.log("Click3");
        var valor = document.getElementById("3").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }

      boton4.onclick = () => {
        var valor = document.getElementById("4").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }
    
      boton5.onclick = () => {
        var valor = document.getElementById("5").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }
    
      boton6.onclick = () => {
        var valor = document.getElementById("6").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }
    
      boton7.onclick = () => {
        var valor = document.getElementById("7").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }
    
      boton8.onclick = () => {
        var valor = document.getElementById("8").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }
    
      boton9.onclick = () => {
        var valor = document.getElementById("9").value;
        var display = document.getElementById("display");
        num = num + valor
        display.innerHTML = (showdisplay = showdisplay + valor);
      }
    