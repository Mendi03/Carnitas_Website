// ****************************** Default stuff ******************************

document.addEventListener('scroll', () =>{
    const toTopButton = document.querySelector('#to-top');

    if (window.scrollY > 200){
        toTopButton.classList.add('show')
    }
    else{
        toTopButton.classList.remove('show')
    }

    let menu_mobile = null

    openMenu(menu_mobile)
})

document.addEventListener('click', e => {
    // Header section

    let menu_mobile

    if (e.target.matches('.sidebar img')){
        menu_mobile = e.target.closest('.sidebar')
        openMenu(menu_mobile)
    }
    else{
        menu_mobile = null
        openMenu(menu_mobile)
    }

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

    // package plan section cards

    let selected_btn
    if(e.target.matches('#pickup .plan_nav li')){
        selected_btn = e.target
    }
    if(e.target.matches('#on_site .plan_nav li')){
        selected_btn = e.target
    }
    else{
        selected_btn = e.target.closest('.plan_nav li')
    }
    if(selected_btn != null){
        onCardBtnClick(selected_btn)
    }

    // FAQ section

    let question
    if(e.target.matches('.question')){
        question = e.target
    }
    else {
        question = e.target.closest('.question')
    }
    if(question != null){
        onFAQClick(question)
    }

})



// Header

function openMenu(menu_mobile){

    const side_menu = document.querySelector('.desktop_nav')

    if(menu_mobile == null){
        side_menu.style.setProperty('--move', 1)
    }

    else if(menu_mobile.classList.contains('open')){
        side_menu.style.setProperty('--move', 0)
    }

    else if(menu_mobile.classList.contains('close')){
        side_menu.style.setProperty('--move', 1)
    }

    
}

// ****************************** Index page ******************************

// Dishes section

function onArrowClick(arrow){
    const slider = arrow.closest('.container').querySelector('.slider')
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))
    

    //--last-index: has to be increased a new dish in the html is added. var has to be decreased if html dish is removed (change is to be made in css variable)
    const root = document.documentElement;
    const lastIndex = parseInt(getComputedStyle(root).getPropertyValue('--last-index'));

    // if(lastIndex === null){
    //     lastIndex = 3;
    // }
    
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

// ****************************** Menu page ******************************

function onCardBtnClick(selected_btn){
    let card_nav = selected_btn.closest('.plan_nav')

    // this code determines which package plan is being selected by labeling the li item with the class 'selected'
    for(const child of card_nav.children){
        if(child != selected_btn){
            child.classList.remove('selected')
        }
        else{
            if(selected_btn.classList != 'selected')
            {
                selected_btn.classList.add('selected')
                // selected_btn.textContent = 'test'
            }
        } 
    }

    //the following code determines the text content of the selected plan
    let parent = card_nav.closest('.plan_card')

    let price = parent.querySelector('#price h1');
    let servings = parent.querySelector('#servings');
    let entire_list = parent.querySelector('.details');
    let list_children = entire_list.children;
    let classes = selected_btn.classList.value;
    //the following code determines the text content of the selected plan

    // this is an anchor tag with a url that sends customers to our payment gateway
    let chosen_plan = document.querySelector('#card_btn');

    switch(classes){
        case "plan1 selected":
            price.textContent = '600';
            servings.textContent = 'For 50-60 Servings';
            list_children[0].textContent = '70 lbs of Carnitas*';
            list_children[2].textContent = '30 Gorditas';
            list_children[3].textContent = '30 Crispy Tacos';
            list_children[4].textContent = '15 Tortas';
            chosen_plan.setAttribute('href', 'https://www.youtube.com/')
            break;

        case "plan2 selected":
            price.textContent = '800';
            servings.textContent = 'For 100-120 Servings';
            list_children[0].textContent = '140 lbs of Carnitas*';
            list_children[2].textContent = '50 Gorditas';
            list_children[3].textContent = '50 Crispy Tacos';
            list_children[4].textContent = '20 Tortas';
            chosen_plan.setAttribute('href', 'https://www.w3schools.com/jquery/jquery_intro.asp')
            break;

        case 'plan3 selected':
            price.textContent = '???';
            servings.textContent = 'For 150-180 Servings';
            list_children[0].textContent = '210 lbs of Carnitas*';
            list_children[2].textContent = '75 Gorditas';
            list_children[3].textContent = '?? Crispy Tacos';
            list_children[4].textContent = '?? Tortas';
            chosen_plan.setAttribute('href', 'https://play.hbomax.com/page/urn:hbo:page:home')
            break;
   
        case 'plan4 selected':
            price.textContent = '???';
            servings.textContent = 'For 200-240 Servings';
            list_children[0].textContent = '280 lbs of Carnitas*';
            list_children[2].textContent = '100 Gorditas';
            list_children[3].textContent = '?? Crispy Tacos';
            list_children[4].textContent = '?? Tortas';
            chosen_plan.setAttribute('href', 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwidz7bcpoKKAxWmJNAFHYe7JrkQPAgI')
            break;
        
        case "plan5 selected":
            price.textContent = '1200';
            servings.textContent = 'For 50-60 Servings';
            list_children[0].textContent = '70 lbs of Carnitas*';
            list_children[2].textContent = '30 Gorditas';
            list_children[3].textContent = '30 Crispy Tacos';
            list_children[4].textContent = '15 Tortas';
            chosen_plan.setAttribute('href', 'https://www.youtube.com/')
            break;

        case "plan6 selected":
            price.textContent = '1500';
            servings.textContent = 'For 100-120 Servings';
            list_children[0].textContent = '140 lbs of Carnitas*';
            list_children[2].textContent = '50 Gorditas';
            list_children[3].textContent = '50 Crispy Tacos';
            list_children[4].textContent = '20 Tortas';
            chosen_plan.setAttribute('href', 'https://www.w3schools.com/jquery/jquery_intro.asp')
            break;

        case 'plan7 selected':
            price.textContent = '2000';
            servings.textContent = 'For 150-180 Servings';
            list_children[0].textContent = '210 lbs of Carnitas*';
            list_children[2].textContent = '75 Gorditas';
            list_children[3].textContent = '?? Crispy Tacos';
            list_children[4].textContent = '?? Tortas';
            chosen_plan.setAttribute('href', 'https://play.hbomax.com/page/urn:hbo:page:home')
            break;
   
        case 'plan8 selected':
            price.textContent = '2500';
            servings.textContent = 'For 200-240 Servings';
            list_children[0].textContent = '280 lbs of Carnitas*';
            list_children[2].textContent = '100 Gorditas';
            list_children[3].textContent = '?? Crispy Tacos';
            list_children[4].textContent = '?? Tortas';
            chosen_plan.setAttribute('href', 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwidz7bcpoKKAxWmJNAFHYe7JrkQPAgI')
            break;
        

        default:
            console.log('not_workin');
    }

}

// ****************************** Contact page ******************************

function onFAQClick(question){

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
}
       