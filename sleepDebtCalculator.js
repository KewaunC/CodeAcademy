//Change the numbers inside getSleepHours to suit how many hours of sleep would like to get


const getSleepHours = (day) => {
  if (day === "Monday") {
    return 8;
  } else if (day === "Tuesday") {
    return 9;
  } else if (day === "Wednesday") {
    return 11;
  } else if (day === "Thursday") {
    return 10;
  } else if (day === "Friday") {
    return 4;
  } else if (day === "Saturday") {
    return 5;
  } else if (day === "Sunday") {
    return 12;
  }
};

const getActualSleep = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

const getIdealSleepHours = () => {
  let idealHours = 10;
  return idealHours * 7;
};

const calculateSleep = () => {
  let actualSleep = getActualSleep();
  let idealSleep = getIdealSleepHours();

  if (actualSleep === idealSleep) {
    if (actualSleep > idealSleep) {
      return "User got more sleep than needed";
    } else if (actualSleep < idealSleep) {
      return "User should get some more rest";
    } else {
      return "User got the perfect amount of sleep";
    }
  }

  if (actualSleep < idealSleep) {
    console.log(
      "You got " +
        (idealSleep- actualSleep) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};

calculateSleep()
