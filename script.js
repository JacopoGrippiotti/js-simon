
function missingTimeInMilliseconds(endDate){

    let missingTime = Date.parse(endDate) - Date.parse(new Date())
    let missingSeconds = Math.floor((missingTime / 1000) % 60)

    let missingMinutes = Math.floor((missingTime / 1000 / 60) % 60)

    let missingHours = Math.floor((missingTime / (1000*60*60)) % 24)

    let missingDays = Math.floor(missingTime / (1000 * 60 * 60 * 24))
   
    return [missingDays, missingHours, missingMinutes, missingSeconds, missingTime]
}

setInterval(missingTimeInMilliseconds, 1000, '2023-05-26T09:30:00.000+02:00')
let timeFunction = missingTimeInMilliseconds('2023-05-26T09:30:00.000+02:00')

let missingMilliseconds = timeFunction[4]

let secondsSpan = document.querySelector('span.seconds')
    
let minutesSpan = document.querySelector('span.minutes')
    
let hoursSpan = document.querySelector('span.hours')
    
let daysSpan = document.querySelector('span.days')

let span = document.querySelectorAll('span')

function displayMissingTime(endtime){

     let missingTime = missingTimeInMilliseconds(endtime)

     let missingDays = missingTime[0]

     let missingHours = missingTime[1]

     let missingMinutes = missingTime[2]

     let missingSeconds = missingTime[3]
        
     secondsSpan.innerHTML = ''
     secondsSpan.innerHTML += missingSeconds

     minutesSpan.innerHTML = ''
     minutesSpan.innerHTML += missingMinutes

     hoursSpan.innerHTML = ''
     hoursSpan.innerHTML += missingHours

     daysSpan.innerHTML = ''
     daysSpan.innerHTML += missingDays  
}


let timer = setInterval(displayMissingTime, 1000, '2023-05-26T09:30:00.000+02:00')


function lessonStarted(){

    clearInterval(timer)
    alert('FORZA ADESSO INIZIA LA LEZIONE')
}

setTimeout(lessonStarted, missingMilliseconds)



