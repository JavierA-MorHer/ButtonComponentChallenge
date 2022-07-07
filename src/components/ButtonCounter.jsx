import React, { useState } from 'react';

export const ButtonCounter = () => {

    const [counter, useCounter] = useState(0);

    const handleClick = ()=>{
        useCounter( counter + 1 )
    }

  return (
    <div>
        <p>You clicked {counter} times </p>
        <button onClick={ handleClick } 
                className='btn btn-primary'
        >
            Click
        </button>
    </div>
  )
}
