const tabla = document.getElementById('tbody')
var p = JSON.parse(localStorage.getItem('personasg'))
if (p != null) {
    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        tabla.innerHTML += `<tr class="sombreado">
    <td>${element.area}</td>
    <td>${element.nombre} ${element.apellido}</td>
    <td>${element.user}</td>
    <td>${element.email}</td>
    <td>${element.edad}</td>
</tr>`
    }
}
