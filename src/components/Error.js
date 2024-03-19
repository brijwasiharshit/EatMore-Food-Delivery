import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>OOPS!!</h1>
      <h3>{err.data}</h3>
    </div>
  )
}

export default Error;
