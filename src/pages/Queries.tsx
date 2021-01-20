import React from 'react';
import { useQuery } from 'react-query';
import ExternalService from '../services/ExternalService';

const svc = new ExternalService();

function Queries() {
  const { isLoading, error, data, isSuccess } = useQuery('fetchData', () => svc.getProducts());

  return (
    <React.Fragment>
      Queries page
      {error && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Loading products ...</div>
      ) : (
        <ul>
          {data?.map(item => (
            <li key={item.id}>{item.product} - ${item.price}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  )
}

export default Queries;