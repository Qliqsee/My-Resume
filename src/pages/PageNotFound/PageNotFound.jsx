import React from 'react';
import Layout from '../../components/Layout/Layout';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <Layout>
      {' '}
      <div className='p404'>
        <p>Sorry this page does not exist. How did you ever get here?</p>
      </div>{' '}
    </Layout>
  );
};

export default PageNotFound;
