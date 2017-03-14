var nombresCompletos=[];

function Queue(){
  this.dataStore=Array.prototype.slice.call(arguments,0);
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.print= print;
  function dequeue(){
  return this.dataStore.shift();
  }
  function enqueue (elemento){
    this.dataStore.push(elemento);
  }
  function print (elemento){
    return console.log(this.dataStore);
  }
}

var nombre = new Queue();
nombre.enqueue("Fernanda");
nombre.enqueue("Conny");
nombre.enqueue("Esmeralda");
nombre.enqueue("Rodrigo");
nombre.enqueue("Felipe");

var apellido = new Queue();
apellido.enqueue("Larios");
apellido.enqueue("Saltello");
apellido.enqueue("Ponce");
apellido.enqueue("Rios");
apellido.enqueue("Islas");

for(i=0;i<5;i++){
nombresCompletos.push(nombre.dequeue()+" "+ apellido.dequeue());
}
console.log(nombresCompletos);
