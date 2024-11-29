// ****************************** Default stuff ******************************

document.addEventListener('scroll', () =>{
    const toTopButton = document.querySelector('#to-top');

    if (window.scrollY > 200){
        toTopButton.classList.add('show')
    }
    else{
        toTopButton.classList.remove('show')
    }
})

document.addEventListener('click', e => {
    // Dishes section 
    let arrow

    if (e.target.matches('.arrow')){
        arrow = e.target
    } 
    // do not delete comment since it could be used later
    // else {
    //     arrow = e.target.closest('.arrow')
    // }
    if (arrow != null) {
        onArrowClick(arrow)
    }

    // Services Section

    let point

    if (e.target.matches('.pointer')){
        point = e.target
    } 

    if (point != null) {
        servicesClick(point)
    }

    //about section

    let read_btn

    if (e.target.matches('.about_text button')){
        read_btn = e.target
    } 

    if (read_btn != null) {
        showText(read_btn)
    }
})

// ****************************** Index page ******************************

// Dishes section

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

// Services section 

function servicesClick(point){
    const carousel = point.closest('.carousel')

    if(point.classList.contains('right')){
        carousel.style.setProperty('--carousel-index', 1)
    }

    if(point.classList.contains('left')){
        carousel.style.setProperty('--carousel-index', 0)
    }
}

// About section

function showText(read_btn){
    let parent = read_btn.closest('.about_text')
    let extra_text = parent.querySelectorAll('.read_more')

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
}




