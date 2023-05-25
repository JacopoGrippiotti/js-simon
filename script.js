function missingTimeFromNow(endDate){

    let missingTime = Date.parse(endDate) - Date.parse(new Date())

    let missingSeconds = Math.floor((missingTime / 1000) % 60)

    let missingMinutes = Math.floor((missingTime / 1000 / 60) % 60)

    let missingHours = Math.floor((missingTime / (1000*60*60)) % 24)

    let missingDays = Math.floor(missingTime / (1000 * 60 * 60 * 24))

   return {

    'missing time': missingTime,
    
    'missing seconds': missingSeconds,
    
    'missing minutes': missingMinutes,

    'missing hours': missingHours,

    'missing days': missingDays
   }
}

const missingTime = missingTimeFromNow('2023-05-26T09:30:00.000+01:00')

console.log(missingTime)
