function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}   // Fin de la función calcularEdad

function invocarApiServicios() {
    var url = "https://api.github.com/users/juanjose";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var respuesta = JSON.parse(xhr.responseText);
            var nombre = respuesta.name;
            var avatar = respuesta.avatar_url;
            var edad = calcularEdad(respuesta.bio);
            var nacimiento = respuesta.bio;
            var email = respuesta.email;
            var telefono = respuesta.phone;
            var direccion = respuesta.location;
            var repositorios = respuesta.public_repos;
            var siguen = respuesta.followers;
            var seguidos = respuesta.following;

            document.getElementById("nombre").innerHTML = nombre;
            document.getElementById("avatar").src = avatar;
            document.getElementById("edad").innerHTML = edad;
            document.getElementById("nacimiento").innerHTML = nacimiento;
            document.getElementById("email").innerHTML = email;
            document.getElementById("telefono").innerHTML = telefono;
            document.getElementById("direccion").innerHTML = direccion;
            document.getElementById("repositorios").innerHTML = repositorios;
            document.getElementById("siguen").innerHTML = siguen;
            document.getElementById("seguidos").innerHTML = seguidos;
        }
    }
}   // Fin de la función invocarApiServicios


