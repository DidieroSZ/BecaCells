function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.infoCliente = function(){
        console.log('Función de cliente.');
        console.log('| Nombre | Saldo |');
        console.log('| ______ | _____ |');
        console.log(`| ${this.nombre}  | ${this.saldo}  |`);
}

const pedro = new Cliente('Pedro', 7000);
pedro.infoCliente();
console.log(pedro);


// HEREDAR

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype );
Persona.prototype.constructor = Cliente;