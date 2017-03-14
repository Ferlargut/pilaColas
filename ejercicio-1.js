var nombres=[];

function Pila() {
  var items = [];

  this.push = function(element){
    items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };
  this.print = function(){
    console.log(items.toString());
  };
}
var nombre= new Pila();
nombre.push("Fernanda");
nombre.push("Luisa");
nombre.push("Conny");
nombre.push("Laura");
nombre.push("Alberto");


var apellido=new Pila();
apellido.push("Rojas");
apellido.push("Leon");
apellido.push("Torres");
apellido.push("Alvaro");
apellido.push("Guzman");



for(i=0;i<=nombre.size();i++){
nombres.push(nombre.pop()+" "+apellido.pop());
}
console.log(nombres);
