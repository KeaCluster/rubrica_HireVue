let TOTAL_SCORE = 0;
let RESULT_ELEMENT = document.getElementById("total-score");
let RECOMMEND_ELEMENT = document.getElementById("recomendacion");
const tableBody = document.querySelector('tbody');
const criteriaRow = {};

// fetch data && create elements 

fetch('data.json')
    .then(res => res.json())
    .then(data => {

        data.forEach(data => {
            // create elements
            const row = document.createElement('tr');
            const criteriaCell = document.createElement('th');

            // add attributes/classes/values
            criteriaCell.classList.add('text-center');
            criteriaCell.setAttribute('scope', 'row');

            // populate
            criteriaCell.textContent = data.criteria;
            row.appendChild(criteriaCell);

            // nested loop
            data.scores.forEach(score => {
                // same logic as above
                const scoreCell = document.createElement('td');

                scoreCell.classList.add('text-center', 'score-button');
                scoreCell.setAttribute('value', score.value);
                scoreCell.textContent = score.text;

                row.appendChild(scoreCell);
            })

            tableBody.appendChild(row);
        })

        // add event listener
        tableBody.addEventListener('click', clickHandler);
    })
    .catch(err => console.error("Not working: ", err));



const clickHandler = event => {
    const element = event.target;

    if (element && element.matches('.score-button')) {
        // get context of the selected row
        const row = element.parentNode.rowIndex

        // substract previous value
        if (criteriaRow.hasOwnProperty(row)) TOTAL_SCORE -= criteriaRow[row]


        // get value 
        criteriaRow[row] = parseInt(element.getAttribute('value'));

        // reset sibling class
        for (const sibling of element.parentNode.querySelectorAll('.score-button')) {
            sibling.classList.remove('active');
        }

        // add active class
        element.classList.add('active');


        // update score 
        TOTAL_SCORE += parseInt(element.getAttribute("value"));

        // Since there are 8 criteria points, the value will be TOTAL_SCORE / 8 in an average of 4
        const FINAL_SCORE = (TOTAL_SCORE / 8).toFixed(1);


        // Populate / update elements
        RECOMMEND_ELEMENT.innerText = checkRecommend(FINAL_SCORE);
        RESULT_ELEMENT.innerText = FINAL_SCORE;
    }
}


const checkRecommend = (score) => {
    switch (true) {
        case (score <= 1.5 && score >= 0):
            return "No";
        case (score <= 2.5 && score >= 1.6):
            return "Tal vez no";
        case (score <= 3.5 && score >= 2.6):
            return "Tal vez si";
        case (score <= 4 && score >= 3.6):
            return "Si";
        default:
            return "Tal vez, tal vez no, tal vez algo no funciona";
    }
}
