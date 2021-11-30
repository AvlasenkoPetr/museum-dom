let date = document.querySelectorAll('.date-time__width')[0]
let dateDiv = document.querySelector('.tickets__input-date')

let time = document.querySelectorAll('.date-time__width')[1]
let timeDiv = document.querySelector('.tickets__input-time')

date.oninput = function(){
    let result = date.value.split('-').reverse().map((value) => {
        if (value.length > 2) {
            return value.slice(2)
        } else {
            return value
        }
    }).join('.')
    
    dateDiv.innerHTML = result;
    
    let fullDate = new Date(date.value)

    let dayOfWeek = fullDate.getDay()
    let dayOfMonth = fullDate.getDate()
    let month = fullDate.getMonth()
    switch(dayOfWeek){
        case(1): dayOfWeek = 'Monday'
        break;
        case(2): dayOfWeek = 'Tuesday'
        break;
        case(3): dayOfWeek = 'Wednesday'
        break;
        case(4): dayOfWeek = 'Thursday'
        break;
        case(5): dayOfWeek = 'Friday'
        break;
        case(6): dayOfWeek = 'Sаturday'
        break;
        case(0): dayOfWeek = 'Sunday'
        break;
    }
    switch(month){
        case(0): month = 'January'
        break;
        case(1): month = 'February'
        break;
        case(2): month = 'March'
        break;
        case(3): month = 'April'
        break;
        case(4): month = 'May'
        break;
        case(5): month = 'June'
        break;
        case(6): month = 'July'
        break;
        case(7): month = 'August'
        break;
        case(8): month = 'September'
        break;
        case(9): month = 'October'
        break;
        case(10): month = 'November'
        break;
        case(11): month = 'December'
        break;
    }
    document.querySelector('#text-date').innerHTML = `${dayOfWeek}, ${dayOfMonth} ${month}`
}

time.oninput = function(){
    timeDiv.innerHTML = time.value
    document.querySelector('#text-time').innerHTML = time.value.split(':').join(' : ')
}