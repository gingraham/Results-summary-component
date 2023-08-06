/*=============== SCROLL REVEAL ANIMATIONS ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay:100,
})
sr.reveal('.result__score')
sr.reveal('.summary__item ', {delay:300, distance: '100px', interval:120})
sr.reveal('.result__response', {origin: 'right'})
sr.reveal('.summary__section', {origin: 'left'})
sr.reveal('.button', {origin: 'bottom', interval:100})

/*=============== FUNCTIONS ===============*/
// import data from './data.json' assert { type: 'json' };
// const catScore = document.querySelectorAll('.summary-score');
// const catTitle = document.querySelectorAll('.summary-item-title');


// data.forEach(item =>{
//     let category = item.category;
//     let score = item.score
//    if(){

//    }
// })
