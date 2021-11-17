
// Whatsapp form

    // Muy importante tomar bien el id, y usar bien las variables para que no genere error.
    // + "%0a" +           -> Salto de línea
    // + "%0a%0a" +        -> Doble salto de línea

    form__contacto.onsubmit = enviarWhatsapp;

    function enviarWhatsapp() {

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const opciones = document.getElementById("opciones").value;
        const range = document.getElementById("range").value;
        const message = document.getElementById("message").value;
        let check = document.getElementById("check").checked;

        if (check) {
            check = "Si "
        } else {
            check = "No "
        }

        const url = "https://api.whatsapp.com/send?phone=+543517054804&text=" +
            "¡Hola!" + "%0a%0a" +
            "Mi nombre es: " + name + "%0a" +
            "Teléfono: " + phone + "%0a" +
            "Email: " + email + "%0a" +
            "Opciones: " + opciones + "%0a" +
            "Rango: " + range + "%0a" +
            message + "%0a" +
            check + "recibir noticias";

        window.open(url, '_blank').focus();
    }