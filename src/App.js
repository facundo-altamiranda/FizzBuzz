// "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

import React from 'react';

const App = () => {
  const renderText = index => {
    const isIndexOfThree = ((index + 1) % 3) === 0;
    const isIndexOfFive = ((index + 1) % 5) === 0;

    if (!isIndexOfThree && !isIndexOfFive) {
        return index + 1;
    } else if(isIndexOfThree && isIndexOfFive) {
        return 'FizzBuzz';
    } else if(isIndexOfThree) {
        return 'Fizz';
    } else if(isIndexOfFive) {
        return 'Buzz';
    }
  }

  return (
    <div>
      <h1>Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.</h1>
      {[...Array(100)].map((value, index) => 
        <span>{renderText(index)}</span>
      )}
    </div>
  );
}

export default App;
