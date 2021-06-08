const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]
function inicio(){
    let titulo = document.querySelector("#t_h1")
    titulo.style.color='#ff0000'
    const block = document.getElementById('tb_body');
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.endsWith("@academlo.com")) {
            let HTMLString = `    
            <td>${users[i].name}</td>
            <td>${users[i].age}</td>
            <td>${users[i].email}</td>
            <td>
                <ul>
                    <li>${users[i].social[0].url}</li>
                    <li>${users[i].social[1].url}</li>
                </ul>
            </td>
            <td>${users[i].gender}</td>
        `;
        let nodo = document.createElement("tr")
        nodo.innerHTML = HTMLString
        block.appendChild(nodo)     
        }           
    }
}
