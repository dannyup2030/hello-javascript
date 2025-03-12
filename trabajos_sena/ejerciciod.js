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