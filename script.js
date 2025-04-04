document.getElementById("contactForm").addEventListener("submit", function (event) {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    if (name.value.trim() === "") {
        nameError.textContent = "Por favor, insira seu nome.";
        isValid = false;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        emailError.textContent = "Por favor, insira um e-mail válido.";
        isValid = false;
    }

    if (subject.value.trim() === "") {
        subjectError.textContent = "Por favor, insira um assunto.";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Por favor, insira sua mensagem.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

