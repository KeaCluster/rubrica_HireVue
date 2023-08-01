let totalScore = 0;

function updateScore(score) {
    // Restaurar el estilo de los botones de la fila actual
    const buttons = document.querySelectorAll('.score-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Resaltar el botón seleccionado
    event.target.classList.add('active');

    // Obtener el puntaje seleccionado y actualizar el puntaje total
    totalScore = totalScore - parseInt(document.getElementById('total-score').innerText) + score;
    document.getElementById('total-score').innerText = totalScore;
}
