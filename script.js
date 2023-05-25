function missingTimeVariables(endDate){

    let missingTime = Date.parse(endDate) - Date.parse(new Date())

    let missingSeconds = Math.floor((missingTime / 1000) % 60)

    let missingMinutes = Math.floor((missingTime / 1000 / 60) % 60)

    let missingHours = Math.floor((missingTime / (1000*60*60)) % 24)

    let missingDays = Math.floor(missingTime / (1000 * 60 * 60 * 24))

   return [missingTime,missingSeconds,missingMinutes,missingHours,missingDays ]
}

const timeVariables = missingTimeVariables('2023-05-26T09:30:00.000+02:00')

const totalTimeMissing = timeVariables[0]

const secondsMissing = timeVariables[1]

const minutesMissing = timeVariables[2]

const hoursMissing = timeVariables[3]

const daysMissing = timeVariables[4]




function lessonStarted(){

    alert('FORZA ADESSO INIZIA LA LEZIONE')
}


