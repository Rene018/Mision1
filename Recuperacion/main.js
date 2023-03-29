let api = 'https://jsonplaceholder.typicode.com/users'
let btn = document.getElementById('btn1')

async function buscar() {
    const response = await fetch(api)
    const data = await response.json()
    localStorage.setItem('users', JSON.stringify(data))
}

buscar()

let email=document.querySelector('#email')
let user=document.querySelector('#user')
btn.addEventListener('submit', function (e) {
    e.preventDefault()
    data.forEach(element => {
        if (email.value==element.email && user.value==element.username) {
            console.log(element);
        } else {
            
        }
    });
    
})
