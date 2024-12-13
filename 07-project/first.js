const buttons = document.querySelectorAll('.buttons')
// console.log(buttons);
const body = document.querySelector("body")
buttons.forEach(function(buttons){
    console.log(buttons);
    buttons.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);
        if(e.target === grey ){
            body.style.backgroundColor=e.target.id
        }
        if(e.target === white ){
            body.style.backgroundColor=e.target.id
        }
        if(e.target === yellow ){
            body.style.backgroundColor=e.target.id
        }
        if(e.target === blue ){
            body.style.backgroundColor=e.target.id
        }

    })
    
})