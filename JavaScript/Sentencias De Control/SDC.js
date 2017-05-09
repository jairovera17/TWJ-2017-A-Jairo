/**
 * Created by USRDEL on 9/5/17.
 */

  var conHambre={}; //objeto vacio


function condicion() {


    if (conHambre) {
        console.log("Comer");
    }
    else {
        console.log("Trabajo")
    }

}


var persona ={

    name:"Jairo",
    lastname:"Vera",
    fechaNacimiento:new Date(),
    imprimir:function () {
        console.log(persona.name+"  "+persona.lastname);
    },

    ano:function(){
        return this.fechaNacimiento.getFullYear();
    }
}

console.log(persona.ano());
