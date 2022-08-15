window.addEventListener("load", () => {

    let form = document.querySelector("form.form-completo");
    form.email.focus();

    form.addEventListener("submit", (e) => {

        let errors = [];

        let email = document.querySelector("#email");
        let pEmail = document.querySelector("#pEmail");
        let password = document.querySelector("#password");
        let pPassword = document.querySelector("#pPassword");

        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {

            errors.push("Debe ingresar un email válido");
            pEmail.classList.add("invalid");

        } else {

            pEmail.classList.add("valid");
            pEmail.classList.remove("invalid");
            form.password.focus();

        };

        if (password.value == "") {

            errors.push("Debe ingresar su contraseña");
            pPassword.classList.remove("valid");
            pPassword.classList.add("invalid");

        } else if (password.value.length < 5) {

            errors.push("La contraseña debe tener al menos 5 caracteres");
            pPassword.classList.remove("valid");
            pPassword.classList.add("invalid");

        } else {

            pPassword.classList.add("valid");
            pPassword.classList.remove("invalid");
            form.country.focus();

        };

        if (errors.length > 0) {

            e.preventDefault();

        } else {

            form.submit();
        }
    })
})