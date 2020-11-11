import React, { useState, useEffect } from 'react';
import ExternalService, { IEmployee } from '../services/ExternalService';

const svc = new ExternalService();

function Stuff() {
  const [data, setData] = useState<IEmployee[]>([] as IEmployee[]);

  useEffect(() => {
    const loadData = async () => {
      const result = await svc.getEmployees();
      setData(result);
    }
    loadData();
  })

  return (
    <React.Fragment>
      Stuff page
      <ul>
        {data.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Stuff;