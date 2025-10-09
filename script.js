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

    document.addEventListener('keydown', function(event) {
    // Comprueba si la tecla presionada es la letra 'e' (o 'E' para mayúsculas)
    if (event.key === 'e' || event.key === 'E') {
        // Muestra un mensaje en la consola (opcional, para verificación)
        console.log('Tecla "e" presionada. Reiniciando la página...');

        // Reinicia la página web
        location.reload();

        // Opcional: Evita la acción predeterminada de la tecla (aunque 'e' no suele tener una acción predeterminada significativa)
        // event.preventDefault();
    }
});
})