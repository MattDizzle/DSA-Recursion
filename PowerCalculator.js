// 2. Power Calculator
// Write a function called powerCalculator() 
// that takes two parameters, an integer as a base,
//  and another integer as an exponent. The function
//   returns the value of the base raised to the power 
//   of the exponent. Use only exponents greater than
//    or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(base, expo){
  let total = 0;
  
  if( expo === 0 ){
    return 0;
  } 
    
  else if( expo === 1){
    return base;
  }
  
  for(let i = expo; i > 1; i--){
    if(total === 0){
      total += base;
    }
    total = total*base;
  }
  return total;
}
  
  
powerCalculator(10,-2); 