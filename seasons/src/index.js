import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import useLocation from './useLocation';

const App = () => {
  const [ lat, errorMessage ] = useLocation();

  let content;
  if(errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if(lat) {
    content = <SeasonDisplay lat={ lat } />;
  } else {
    content = <Loader message="Please accept location request!" />;
  }

  return <div className="border read">{content}</div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
