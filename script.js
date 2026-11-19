function compruebaaceptarcookies() {
    const cajacookies = document.getElementById('cajacookies');
    
    if (localStorage.getItem('aceptarcookies') === 'true') {
        if (cajacookies) {
            cajacookies.style.display = 'none';
        }
    }
}

function aceptarcookies() {
    const cajacookies = document.getElementById('cajacookies');
    
    localStorage.setItem('aceptarcookies', 'true');
    if (cajacookies) {
        cajacookies.style.display = 'none';
    }
}

// Ejecutar al cargar la página sin depender de jQuery
document.addEventListener('DOMContentLoaded', function() {
    compruebaaceptarcookies();
});