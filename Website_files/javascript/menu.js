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
    if(e.target.matches('.plan_nav li')){
        selected_btn = e.target
    }else{
        selected_btn = e.target.closest('.plan_nav li')
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
    if(selected_btn.classList == 'plan1 selected'){
        console.log(selected_btn)
    }


}