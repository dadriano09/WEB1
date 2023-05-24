// Adicione um ouvinte de eventos ao botão
document.getElementById('language-toggle').addEventListener('click', function() {
    // Verifique o idioma atual do documento
    var currentLang = document.documentElement.lang;

    // Alterne para o idioma desejado
    if (currentLang === 'pt-br') {
        document.documentElement.lang = 'en';
        document.getElementById('language-toggle').textContent = 'Mudar Idioma';
    } else {
        document.documentElement.lang = 'pt-br';
        document.getElementById('language-toggle').textContent = 'Change Language';
    }
});
