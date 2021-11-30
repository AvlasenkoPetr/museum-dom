let resultPrice = document.querySelectorAll('.tickets__result-sum'); // итоговая сумма в форме [0], на странице [1]
let formSpans = document.querySelectorAll('.tickets__price-count-span'); // те черные квадраты в форме с количеством билетов
let formTicketPrice = document.querySelectorAll('.sum-for-tickets') // суммы за отдельные билеты в форме

let calculators = document.querySelectorAll('.tickets__calcualtor') // контейнеры на странице
let calculatorsForm = document.querySelectorAll('.tickets__calculator-form') // контейнеры в форме

let ticketsTypeBlock = document.querySelectorAll('.page-ticket-select')

let ticketPrice;

for (let i = 0; i < calculators.length; i++){
    calculators[i].onclick = function(e){     
        if (e.target.type == 'button') {
            if(ticketsTypeBlock[0].children[0].checked){
                ticketPrice = 20
            } else if(ticketsTypeBlock[1].children[0].checked){
                ticketPrice = 25
            } else {
                ticketPrice = 40
            }
            
            if (i == 0) { // basic on page
                let ticketAmount = e.target.parentElement.children[1].value
                formSpans[0].innerHTML = ticketAmount
                formTicketPrice[0].innerHTML = ticketAmount * ticketPrice
                calculatorsForm[0].children[1].value = ticketAmount

                resultPrice[1].innerHTML = ticketAmount * ticketPrice + calculators[1].children[1].value * (ticketPrice / 2)
                resultPrice[0].innerHTML = ticketAmount * ticketPrice + calculators[1].children[1].value * (ticketPrice / 2)
            }
            if (i == 1) { // senior on page
                let ticketAmount = e.target.parentElement.children[1].value
                
                formSpans[1].innerHTML = ticketAmount
                formTicketPrice[1].innerHTML = ticketAmount * (ticketPrice / 2)
                calculatorsForm[1].children[1].value = ticketAmount

                resultPrice[1].innerHTML = ticketAmount * (ticketPrice / 2) + calculators[0].children[1].value * ticketPrice
                resultPrice[0].innerHTML = ticketAmount * (ticketPrice / 2) + calculators[0].children[1].value * ticketPrice
            }    
        }
    }
}

for (let i = 0; i < calculatorsForm.length; i++){
    calculatorsForm[i].onclick = function(e){     
        if (e.target.type == 'button') {
            if(ticketsTypeBlock[0].children[0].checked){
                ticketPrice = 20
            } else if(ticketsTypeBlock[1].children[0].checked){
                ticketPrice = 25
            } else {
                ticketPrice = 40
            }

            if (i == 0) { // basic on form
                let ticketAmount = e.target.parentElement.children[1].value

                formSpans[0].innerHTML = ticketAmount
                formTicketPrice[0].innerHTML = ticketAmount * ticketPrice
                calculators[0].children[1].value = ticketAmount

                resultPrice[1].innerHTML = ticketAmount * ticketPrice + calculators[1].children[1].value * (ticketPrice / 2)
                resultPrice[0].innerHTML = ticketAmount * ticketPrice + calculators[1].children[1].value * (ticketPrice / 2)
            }
            if (i == 1) { // senior on form
                let ticketAmount = e.target.parentElement.children[1].value
                
                formSpans[1].innerHTML = ticketAmount
                formTicketPrice[1].innerHTML = ticketAmount * (ticketPrice / 2)
                calculators[1].children[1].value = ticketAmount

                resultPrice[1].innerHTML = ticketAmount * (ticketPrice / 2) + calculators[0].children[1].value * ticketPrice
                resultPrice[0].innerHTML = ticketAmount * (ticketPrice / 2) + calculators[0].children[1].value * ticketPrice
            }    
        }
    }
}

let seniorSpan = document.querySelectorAll('.senior-ticket-price')
let basicSpan = document.querySelectorAll('.basic-ticket-price')
let options = document.querySelectorAll('.option-ticket')


for(let i = 0; i < ticketsTypeBlock.length; i++){
    ticketsTypeBlock[i].onclick = function() {
        if(i == 0){
            ticketPrice = 20;
        } else if(i == 1){
            ticketPrice = 25;
        } else {
            ticketPrice = 40;
        }


        basicSpan[0].innerHTML = ticketPrice
        basicSpan[1].innerHTML = ticketPrice
        seniorSpan[0].innerHTML = ticketPrice / 2
        seniorSpan[1].innerHTML = ticketPrice / 2

        formTicketPrice[0].innerHTML = calculators[0].children[1].value * ticketPrice
        formTicketPrice[1].innerHTML = calculators[1].children[1].value * (ticketPrice / 2)

        resultPrice[1].innerHTML = calculators[1].children[1].value * (ticketPrice / 2) + calculators[0].children[1].value * ticketPrice
        resultPrice[0].innerHTML = calculators[1].children[1].value * (ticketPrice / 2) + calculators[0].children[1].value * ticketPrice
    }
}


// if (options[1].hasAttribute('selected')){
//     options[1].removeAttribute('selected')
// } else if (options[2].selected){
//     options[2].removeAttribute('selected')
// }
// options[0].setAttribute('selected')