// validacion y envio del formulario
document.addEventListener('DOMContentLoaded', function() {
    
    // manejar envio del form
    const form = document.getElementById('form-sugerir');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // obtener datos del form
        const peliTitulo = document.getElementById('titulo').value;
        const directorPeli = document.getElementById('director').value;
        const añoPeli = document.getElementById('year').value;
        const userEmail = document.getElementById('email').value;
        const motivoPeli = document.getElementById('porque').value;
        
        // validacion basica
        if (!peliTitulo || !directorPeli || !añoPeli || !userEmail || !motivoPeli) {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        // mostrar datos en alerta
        alert('¡Gracias por tu sugerencia!\n\nPelicula: ' + peliTitulo + '\nDirector: ' + directorPeli + '\nAño: ' + añoPeli + '\nEmail: ' + userEmail);
        
        // limpiar form
        form.reset();
    });
    
    // evento interactivo con mouse
    const elemClickeable = document.querySelector('.clickeable');
    elemClickeable.addEventListener('click', function() {
        alert('¡Gracias por visitarnos! 😊');
    });
})