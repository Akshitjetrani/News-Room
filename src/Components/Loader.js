import React from 'react';
import loading from './img/loading.gif';

const Loader = () => {
  return (
    <div className='container center'>
      <img className='img-loader my-3' src={loading} alt='loading' />
    </div>
  );
};

export default Loader;