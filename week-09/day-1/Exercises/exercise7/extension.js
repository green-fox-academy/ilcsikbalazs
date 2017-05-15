'use strict';

// Adds a and b, returns as result
const addNumbers = function(a, b) {
  if(typeof a === 'number' && typeof b === 'number') {
    return a+b;
  } else {
    throw new Error('Invalid value');
  }
}

// Returns the highest value from the three given params
const maxOfThree = function(a, b, c) {
  if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    if (a > b && a > c) {
      return a;
    } else if (c > a && c > b) {
      return c;
    } else if (b > a && b > c) {
      return b;
    }
  } else {
    throw new Error('Invalid value');
  }
}

//Returns the median value of a list given as param
const median = function(pool){
  try {
    pool.forEach(function(element) {
      if(typeof element != 'number') {
        throw new Error('Invalid value');
      }
    });
    if(pool.length%2 === 0) {
      return pool.sort()[pool.length/2];
    } else {
      return pool.sort()[(pool.length-1)/2];
    }
  } catch (error) {
    return error.message;
  }
}

// Returns true if the param is a vovel
const isVovel = function(char){
  try {
    if(char.length > 0 && char.length < 2) {
      if('aeiouéáőűöüóí'.includes(char)) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error('Please, give me one character');
    }
  } catch (error) {
    return error.message;
  }
}

// Create a method that translates hungarian into the teve language
const translate = function(hungarian) {
  let text = toString(hungarian).split('');
  let teve = '';
  text.forEach(function(char){
    if (isVovel(char)){
      teve += char + 'v'+ char;
    }
  });
  return teve;
}

module.exports = {
  addNumbers: addNumbers,
  maxOfThree: maxOfThree,
  median: median,
  isVovel: isVovel,
  translate: translate
}