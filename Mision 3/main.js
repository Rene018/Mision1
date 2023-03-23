const tabla = document.getElementById('tabla')
var p = JSON.parse(localStorage.getItem('personasg'))

if (p != null) {
    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        
    }
}
function areas() {
    const newTbody = document.createElement('tbody');
    newTbody.id = `${element.area}`;
    newTbody.ariaRowSpan(``)
    tabla.appendChild(newTbody);
}