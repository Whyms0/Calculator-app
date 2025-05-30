import React from 'react';
import Calculator from './Calculator';

function App() {
  const buttons = [ 
                  7 , 8 , 9 , '/',
                  4 , 5, 6, '*',
                  1 , 2, 3, '-',
                  'C', 0 , '+' , '='
  ]
  return (
    <Calculator btns={buttons} />
  );
}

export default App;
