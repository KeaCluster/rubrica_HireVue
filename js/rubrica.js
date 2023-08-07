let TOTAL_SCORE = 0;
let RESULT_ELEMENT = document.getElementById("total-score");
let RECOMMEND_ELEMENT = document.getElementById("recomendacion");
const criteriaRow = {};


for( const element of document.querySelectorAll('.score-button')) {
    element.addEventListener('click', e => {

        // get context of the selected row
        const row = element.parentNode.rowIndex

        // substract previous value
        if (criteriaRow.hasOwnProperty(row)) TOTAL_SCORE -= criteriaRow[row]


        // get value 
        criteriaRow[row] = parseInt(element.getAttribute('value'));

        // reset sibling class
        for( const sibling of element.parentNode.querySelectorAll('.score-button')) {
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

    })
}


const checkRecommend = (score) => {
    switch(true) {
        case(score <= 1.5 && score >= 0):
            return "No";         
        case(score <= 2.5 && score >= 1.6):
            return "Tal vez no";
        case (score <= 3.5 && score >= 2.6):
            return "Tal vez si";
        case (score <= 4 && score >= 3.6):
            return "Si";
        default:
            return "Tal vez, tal vez no, tal vez algo no funciona";
    }
}
