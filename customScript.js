(function() {
    // Button
    var button = document.querySelector('.btn-red');
    if (button) {
        button.style.backgroundColor = '#cf4242';
        button.textContent = 'Baixar';
        button.style.borderRadius = '50px';
        button.style.border = 'none';
    }


    // Input
    var textbox = document.querySelector('#s_input');
    if (textbox) {
        textbox.placeholder = 'Link do YouTube aqui';
        textbox.style.borderRadius = '50px';
        textbox.style.border = 'none';
    }

    // Title
    var titleElement = document.querySelector('.title');
    if (titleElement) {
        titleElement.style.fontSize = '30px';
        titleElement.style.color = '#dbdbdd';
        titleElement.textContent = 'YOU MUSIC';
    }

    // Center Section
    var centerSection = document.querySelector('.ftco-section.center');
    if (centerSection) {
        centerSection.style.height = '80vh';
        centerSection.style.display = 'flex';
        centerSection.style.flexDirection = 'column';
        centerSection.style.justifyContent = 'center';
    }

    // Rest of your customizations...
})();
