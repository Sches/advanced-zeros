module.exports = function getZerosCount(number, base) {
  // your implementation

  let simpleMultipliersOfBase = simpleMultipliers(base);
  
  let res = number;

  let currentMultiplier = 0;
  let currentMultiplierCounter;
  for (let i = 0; i <= simpleMultipliersOfBase.length; i++) {
    if (currentMultiplier === 0) {
      currentMultiplier = simpleMultipliersOfBase[i];
      currentMultiplierCounter = 1;
    }
    else {
      if (i === simpleMultipliersOfBase.length || currentMultiplier !== simpleMultipliersOfBase[i]) {
        let inFactorial = countInFactorial(number, currentMultiplier);
        let t = Math.floor(inFactorial/currentMultiplierCounter);
        if (t < res) {
          res = t;
        }
        if (i !== simpleMultipliersOfBase.length) {
          currentMultiplier = simpleMultipliersOfBase[i];
          currentMultiplierCounter = 1;
        }
      } else {
        currentMultiplierCounter++;
      }
    }
  }
  return res;
}

function countInFactorial(number, multiplier) {
  let res = 0;
  while (number >= multiplier) {
    number = Math.floor(number/multiplier);
    res += number;
  }
  return res;
}

function simpleMultipliers(base)
{
  let multiplier = 2;
  let j = 0;
  let multipliers = [];
  while(base != 1)
  {
    if(base % multiplier === 0)
    {
      multipliers[j] = multiplier;
      j++;
      base /= multiplier; 
    }
    else
    {
      multiplier++;
    }
  }
  return multipliers;
} 