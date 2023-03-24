const tabla = document.getElementById('tabla')
var p = JSON.parse(localStorage.getItem('personasg'))
let contador = {}
if (p != null) {

}
function rows(p) {
    p.forEach(element => {
        contador[element.area] = (contador[element.area] || 0) + 1
    });
}
function areas() {
    const newTbody = document.createElement('tbody');
    newTbody.id = `${element.area}`;
    newTbody.ariaRowSpan(``)
    tabla.appendChild(newTbody);
}