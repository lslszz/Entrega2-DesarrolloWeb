document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('form-sugerir');
    
    if (form) {
        form.addEventListener('submit',  function(e) {
            const motivoPeli = document.getElementById('porque').value;
            
            if (motivoPeli.length < 10) {
                e.preventDefault();
                alert('Por favor, escribe al menos 10 caracteres explicando por qué recomiendas esta película');
                return false;
            }
        });
    }
    
    const elemClickeable = document.querySelector('.clickeable');
    if (elemClickeable) {
        elemClickeable.addEventListener('click', function() {
            alert('¡Gracias por visitarnos! 😊');
        });
    }
});