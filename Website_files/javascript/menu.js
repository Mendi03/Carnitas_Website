document.addEventListener('scroll', () =>{
    const toTopButton = document.querySelector('#to-top');

    if (window.scrollY > 200){
        toTopButton.classList.add('show')
    }
    else{
        toTopButton.classList.remove('show')
    }
})

document.addEventListener('click', e =>{
    let selected_btn
    if(e.target.matches('#pickup .plan_nav li')){
        selected_btn = e.target
    }
    if(e.target.matches('#on_site .plan_nav li')){
        selected_btn = e.target
    }
    if(selected_btn != null){
        onCardBtnClick(selected_btn)
    }
})

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