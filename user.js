var content = document.getElementById("content");

function getUser() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => data.results[0])
        .then(user => {
            console.log(user);

            let fullName = user.name.first + " " + user.name.last;

            content.innerHTML = `
                <img src="${user.picture.large}" alt="" class="img-fluid rounded-circle">

                <div class="mt-4">
                    <p>Name: <span class="text-capitalize">${fullName}</span></p>
                    <p>Username: ${user.login.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Teléfono: ${user.phone}</p>
                </div>
            `;
        })
}
