// ****************************** Dishes section ******************************
document.addEventListener('click', e => {
    let arrow
    if (e.target.matches('.arrow')){
        arrow = e.target
    } else {
        arrow = e.target.closest('.arrow')
    }
    if (arrow != null) {
        onArrowClick(arrow)
    }
})

function onArrowClick(arrow){
    const slider = arrow.closest('.container').querySelector('.slider')
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))

    //This variable has to be increased a new dish in the html is added. var has to be decreased if html dish is removed
    const lastIndex = 3
    
    if(arrow.classList.contains('left-arrow')) {
        if(sliderIndex - 1 < 0){
            slider.style.setProperty('--slider-index', lastIndex)
        }
        else{
            slider.style.setProperty('--slider-index', sliderIndex - 1)
        }
    }

    if(arrow.classList.contains('right-arrow')) {
        if(sliderIndex + 1 > lastIndex){
            slider.style.setProperty('--slider-index', 0)
        }
        else{
            slider.style.setProperty('--slider-index', sliderIndex + 1)
        }
    }

}




// ****************************** Services section ******************************




// ****************************** About section ***************************

let btn = document.querySelector('.about_text button')
let extra_text = document.querySelectorAll('.read_more')

btn.addEventListener('click', e => {
    extra_text.forEach(item => {
        if(item.classList == 'read_more hide')
        {
            item.classList.remove('hide')
            item.classList.add('show')
        }
        else
        {
            item.classList.remove('show')
            item.classList.add('hide')
        }
    })    
})


