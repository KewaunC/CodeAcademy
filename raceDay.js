let raceNumber = Math.floor(Math.random() * 1000);

registeredEarly = true

const runnerAge = 18 //play with the number for the age :)

if(runnerAge > 18 && registeredEarly){
  console.log(raceNumber + 1000)
}else if(runnerAge > 18 && !registeredEarly){
  console.log(raceNumber + 1000)
}

if(runnerAge >18 && registeredEarly){
  console.log(`You are starting ${raceNumber + 1000} at 9:30AM`)
}else if(runnerAge > 18 && !registeredEarly){
console.log(`Your number is ${raceNumber + 1000} you start to run at 11:00AM`)
}else if (runnerAge < 18){
  console.log(`Youth registration starts at 12:30 and your number is ${raceNumber + 1000}`)
} else if(runnerAge === 18){
  console.log('Please head to the registration desk')
}

