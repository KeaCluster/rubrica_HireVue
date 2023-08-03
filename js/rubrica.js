let TOTAL_SCORE = 0;
let RESULT_ELEMENT = document.getElementById("total-score");

// Get all elements with the same class
document.querySelectorAll(".score-button").forEach((element) => {
    // add click listener to all elements
    element.addEventListener('click', event => {

        // Reset siblings class
        element.parentNode.querySelectorAll('.score-button').forEach((sibling) => {
            sibling.classList.remove('active');
        });

        // add active class
        element.classList.add("active");

        // update score 
        /*
        
        This doesn't result in an average of 4
        To do that update the code and make the necessary adjustments before RESULT_ELEMENT is updated with TOTAL_SCORE
        parseInt is necessary because the value is a string. If removed it will concatenate the current number to the previous

        */
        TOTAL_SCORE += parseInt(element.getAttribute("value"));
        RESULT_ELEMENT.innerText = TOTAL_SCORE;

    })
})

///////////////////////// PREV CODE

// function updateScore(score) {
//     // Restaurar el estilo de los botones de la fila actual
//     const buttons = document.querySelectorAll('.score-button');
//     buttons.forEach(button => button.classList.remove('active'));

//     // Resaltar el botón seleccionado
//     event.target.classList.add('active');

//     // Obtener el puntaje seleccionado y actualizar el puntaje total
//     totalScore = totalScore - parseInt(document.getElementById('total-score').innerText) + score;
//     document.getElementById('total-score').innerText = totalScore;
// }
