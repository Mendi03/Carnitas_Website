// ****************************** FAQ section ***************************

const allFAQ = document.querySelectorAll('.question')

console.log(allFAQ);

allFAQ.forEach(question => {
    question.addEventListener('click', event => {
        question.classList.toggle('active');
        const answer = question.lastElementChild
        console.log(answer);
        
        if(question.classList.contains('active')){
            answer.style.setProperty('max-height', answer.scrollHeight + 'px');
            question.style.setProperty('background-image', 'url(../Images/chevron-up.svg)');
        }
        else{
            answer.style.maxHeight = 0;
            question.style.setProperty('background-image', 'url(../Images/chevron-down.svg)');
        }
    })
})

document.addEventListener('scroll', () =>{
    const toTopButton = document.querySelector('#to-top');

    if (window.scrollY > 200){
        toTopButton.classList.add('show')
    }
    else{
        toTopButton.classList.remove('show')
    }
})
