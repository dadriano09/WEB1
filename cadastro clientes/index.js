function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + value + ";" + expires + ";path=/";

}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return "";
}

function handleFormSubmit(event) {
  event.preventDefault();

  try {
    var nome = document.getElementById("nome").value;
    var id = document.getElementById("id").value;


    setCookie("nomeFormulario", nome, 30);
    setCookie("idFormulario", id, 30);

    alert("Formulário enviado com sucesso!");

  } catch (error) {

    alert("Ocorreu um erro ao enviar o formulário. Por favor, verifique os campos e tente novamente.");
    console.error(error);
  }
}


document.getElementById("cadastroForm").addEventListener("submit", handleFormSubmit);