const boton = document.querySelector('#btn')
const volver = document.querySelector('.header-btn')
let personas = []
class Persona {

    constructor(nombre, apellido, area, user, edad, direccion, email) {
        this.nombre = nombre
        this.apellido = apellido
        this.area = area
        this.user = user
        this.edad = edad
        this.direccion = direccion
        this.email = email
    }
    info() {
        return `${this.nombre} ${this.apellido}`
    }
}
boton.addEventListener('click', function (e) {
    const nombre = document.querySelector('#Nombre').value
    const apellidos = document.querySelector('#Apellidos').value
    const area = document.querySelector('#Area').value
    const user = document.querySelector('#usuario').value
    const edad = document.querySelector('#Edad').value
    const direccion = document.querySelector('#Direccion').value
    const email = document.querySelector('#Email').value
    if (nombre == "" || apellidos == "" || area == "" || user == "" || edad == "" || direccion == "" || email == "") {

    } else {
        if (personas.length > 0) {
            for (let index = 0; index < personas.length; index++) {
                const element = personas[index];
                if (element.user == user) {
                    alert('usuario en uso')
                } else {
                    const persona = new Persona(nombre, apellidos, area, user, edad, direccion, email)
                    personas.push(persona)
                    document.getElementById("formulario").reset();
                }
            }
        } else {
            const persona = new Persona(nombre, apellidos, area, user, edad, direccion, email)
            personas.push(persona)
            document.getElementById("formulario").reset();
        }


    }
    relenar()
});





volver.addEventListener('click', function () {
    localStorage.clear()
    localStorage.setItem('personasg', JSON.stringify(personas))
})
function relenar() {
    personas.forEach(element => { console.log(element); });
}

