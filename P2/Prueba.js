function main(){

  var calc ={
    //BOTONES QUE HAY EN LA CALCULADORA

    display: document.getElementById('display'),
    boton1: document.getElementById('1'),
    boton2: document.getElementById('2'),
    boton3: document.getElementById('3'),
    boton4: document.getElementById('4'),
    boton5: document.getElementById('5'),
    boton6: document.getElementById('6'),
    boton7: document.getElementById('7'),
    boton8: document.getElementById('8'),
    boton9: document.getElementById('9'),
    boton0: document.getElementById('0'),
    suma: document.getElementById('suma'),
    multiplicacion: document.getElementById('multiplicacion'),
    division: document.getElementById('division'),
    resta: document.getElementById('resta'),
    resultado: document.getElementById('resultado'),
    AC: document.getElementById('AC'),
    DEL: document.getElementById('DEL'),
    decimal: document.getElementById("."),
    tanto : document.getElementById("%"),
    raiz : document.getElementById("√"),
    }

  const click_sound = new Audio('click.mp3');

  var calculadora = {
    //OPERACIONES QUE REALIZA LA calculadora

    //variable que se mostrará en el display de la calculadora
    operaciondisplay: "",
    //variable que irá formando un número introducido por el usuario
    numero: "",
    //array donde se guardan numeros y operaciones
    array_oper: [],

    //función que borra un numero
    ACfunction: function(){
      this.array_oper = [];
      this.operaciondisplay = "";
      calc.display.innerHTML = 0;
      this.numero = "";
    },

    //función que borra todo el display
    DELfunction:function(){
      if (this.numero != ""){
        var length = this.numero.length;
        this.numero = this.numero.slice(0, length-1);
        var length = this.operaciondisplay.length;
        this.operaciondisplay = this.operaciondisplay.slice(0, length-1);

      }else{
        this.array_oper.pop();
        var length = this.operaciondisplay.length;
        this.operaciondisplay = this.operaciondisplay.slice(0, length-1);
      }
      //Si se borra todo el número el display se pone a 0
      if (this.operaciondisplay != ""){
        calc.display.innerHTML = this.operaciondisplay;
      }else{
        calc.display.innerHTML = 0;
      }
    },

    //función que añade un numero cuando pulsas un boton de la calculadora
    addnumber: function(valor){
      this.operaciondisplay = this.operaciondisplay + valor;
      this.numero = this.numero + valor;
      calc.display.innerHTML = this.operaciondisplay;
    },

    //función que añade un operador cuando pulsas un boton de la calculadora
    addoper: function(valor){
      //cuando pulsen un tipo de operacion, el numero que se estaba formando
      //se incluye al array
      this.array_oper.push(this.numero);
      this.numero = "";
      this.array_oper.push(valor);
      this.operaciondisplay = this.operaciondisplay + valor;
      calc.display.innerHTML = this.operaciondisplay;
    },

    //funcion que te da el resultado final
    resultadofinal: function(){

      var resultado_final = 0.0;

      var multposition = this.array_oper.indexOf("x");
      resulmult = null;
      //si no está "x" devuelve un -1, y tiene que haber un numero antes del operador
      //por ello la condicion será extrictamente mayor que 0
      while (multposition>0){
        resulmult = parseInt(this.array_oper[multposition-1]) * parseInt(this.array_oper[multposition+1]);
        this.array_oper[multposition] = resulmult;

        //elimino las posiciones del array de los numeros que se han utilizado
        //para realizar la multiplicación
        this.array_oper.splice(multposition-1, 1);
        this.array_oper.splice(multposition, 1);
        var multposition = this.array_oper.indexOf("x");
      }
      if (resulmult!=null){
        resultado_final = resulmult;
      }

      var divposition = this.array_oper.indexOf("/");
      resuldiv = null;
      while (divposition>0){
        resuldiv = parseInt(this.array_oper[divposition-1]) / parseInt(this.array_oper[divposition+1]);
        this.array_oper[divposition] = resuldiv;
        //elimino las posiciones del array de los numeros que se han utilizado
        //para realizar la división
        this.array_oper.splice(divposition-1, 1);
        this.array_oper.splice(divposition, 1);
        var divposition = this.array_oper.indexOf("/");
      }
      if (resuldiv!=null){
        resultado_final = resuldiv;
      }

      var sumaposition = this.array_oper.indexOf("+");
      var resultsuma = null;
      while (sumaposition>0){
        resultsuma = parseInt(this.array_oper[sumaposition-1]) + parseInt(this.array_oper[sumaposition+1]);
        this.array_oper[sumaposition] = resultsuma;
        //elimino las posiciones del array de los numeros que se han utilizado
        //para realizar la suma
        this.array_oper.splice(sumaposition-1, 1);
        this.array_oper.splice(sumaposition, 1);
        var sumaposition = this.array_oper.indexOf("+");
      }
      if (resultsuma!=null){
        resultado_final = resultsuma;
      }

      var restaposition = this.array_oper.indexOf("-");
      var resultresta = null;
      while (restaposition>0){
        resultresta = parseInt(this.array_oper[restaposition-1]) - parseInt(this.array_oper[restaposition+1]);
        this.array_oper[restaposition] = resultresta;
        //elimino las posiciones del array de los numeros que se han utilizado
        //para realizar la resta
        this.array_oper.splice(restaposition-1, 1);
        this.array_oper.splice(restaposition, 1);
        var restaposition = this.array_oper.indexOf("-");
      }
      if (resultresta!=null){
        resultado_final = resultresta;
      }
      var tantoposition = this.array_oper.indexOf("%");
      var resultanto = null;
      while (tantoposition>0){
        resultanto = parseInt(this.array_oper[tantoposition-1])/100;
        this.array_oper[tantoposition] = resultanto;
        //elimino las posiciones del array de los numeros que se han utilizado
        //para realizar la resta
        this.array_oper.splice(tantoposition-1, 1);
        this.array_oper.splice(tantoposition, 1);
        var tantoposition = this.array_oper.indexOf("-");
      }
      if (resultanto!=null){
        resultado_final = resultanto;
      }
      var raizposition = this.array_oper.indexOf("√");
      var resultraiz = null;
      while (raizposition>0){
        resultraiz = Math.sqrt(parseInt(this.array_oper[raizposition-1]));
        this.array_oper[raizposition] = resultraiz;
        //elimino las posiciones del array de los numeros que se han utilizado
        //para realizar la raiz
        this.array_oper.splice(raizposition-1, 1);
        this.array_oper.splice(raizposition, 1);
        var raizposition = this.array_oper.indexOf("√");
      }
      if (resultraiz!=null){
        resultado_final = resultraiz;
      }
      var decimalposition = this.array_oper.indexOf(".");
      var resultcoma = null;
      while ( decimalposition>0){
        resultcoma = parseInt(this.array_oper[restaposition-1]).parseInt(this.array_oper[restaposition+1]);
        this.array_oper[decimalposition] = resultcoma;
        this.array_oper.splice(decimalposition-1, 1);
        this.array_oper.splice(decimalposition, 1);
        var decimalposition = this.array_oper.indexOf(".");
      }
      //if(decimal!= null){
      //  resultado_final = resultcoma
     // }
     calc.display.innerHTML = resultado_final;
    }
  }
  function darComa(){
    if(this.numero == 0) {
        op11 = '0.';
    } else if(this.array_oper.indexOf('.') == -1) {
        this.numero += '.';
    }
    refrescar();
}

  console.log("CALCULADORA en javascript");
  calc.decimal.onclick = () =>{
      calculadora.addnumber(".");
     // darComa();
     
  }

  calc.boton1.onclick = () => {
    calculadora.addnumber(1);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton2.onclick = () => {
    calculadora.addnumber(2);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton3.onclick = () => {
    calculadora.addnumber(3);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton4.onclick = () => {
    calculadora.addnumber(4);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton5.onclick = () => {
    calculadora.addnumber(5);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton6.onclick = () => {
    calculadora.addnumber(6);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton7.onclick = () => {
    calculadora.addnumber(7);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton8.onclick = () => {
    calculadora.addnumber(8);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton9.onclick = () => {
    calculadora.addnumber(9);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.boton0.onclick = () => {
    calculadora.addnumber(0);
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.suma.onclick = () => {
    calculadora.addoper("+");
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.multiplicacion.onclick = () => {
    calculadora.addoper("x");
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.division.onclick = () => {
    calculadora.addoper("/");
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.raiz.onclick = () => {
    calculadora.addoper("√")
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.resta.onclick = () => {
    calculadora.addoper("-");
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.tanto.onclick = () => {
    calculadora.addoper("%");
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.AC.onclick = () => {
    calculadora.ACfunction();
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.DEL.onclick = () => {
    calculadora.DELfunction();
    click_sound.currentTime = 0;
    click_sound.play();
  }

  calc.resultado.onclick = () => {

    calculadora.addoper("=");
    calculadora.resultadofinal();
    click_sound.currentTime = 0;
    click_sound.play();
  }

}