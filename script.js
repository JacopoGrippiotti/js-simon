function missingTimeInMilliseconds(endDate){

    let missingTime = Date.parse(endDate) - Date.parse(new Date())
    
   return missingTime
}

let missingTime = missingTimeInMilliseconds('2023-05-26T09:30:00.000+02:00')

let missingSeconds = Math.floor((missingTime / 1000) % 60)

let missingMinutes = Math.floor((missingTime / 1000 / 60) % 60)

let missingHours = Math.floor((missingTime / (1000*60*60)) % 24)

let missingDays = Math.floor(missingTime / (1000 * 60 * 60 * 24))

function displayMissingTime(days, hours, minutes, seconds){


}

setInterval(displayMissingTime, 1000)
function lessonStarted(){

    alert('FORZA ADESSO INIZIA LA LEZIONE')
}


