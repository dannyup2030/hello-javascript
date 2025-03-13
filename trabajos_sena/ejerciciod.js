let persona = {
    name:"danny",
    edad : 23,
    profesion:"software developer",
    saludo : function(){
        return`Hola ${this.name} como estas` 
    },
    job : {
        trabajo:"programacion",
        exp:1.5,
        work : function (name,dinero){
           return  `Hola ${name} si quieres invertir con ${dinero} esta bien`
        }
    }
}

console.log(persona.saludo())
console.log(persona.job.work("daniel",2000))
console.log(persona.name)

let  {name:nombre , job:{exp:experiencia}} = persona
console.log(nombre)
console.log(experiencia)

let persona2 = {...persona , vehiculo: "carro"}
console.log(persona2)
persona2.job.vehiculo = "moto"
console.log(persona)
