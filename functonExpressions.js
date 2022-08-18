const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true
  }else{
    return false
  }
} 

// Cam we make this into an arrow function?
console.log(plantNeedsWater('Tuesday'))

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


//can I shorten it even more?
const plantNeedsWater = day => day === 'Wednesday' ? true : false;  
