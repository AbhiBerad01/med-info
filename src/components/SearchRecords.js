import React, { useContext, useEffect, useState } from 'react';
import recordContext from '../contextApi/recordContext';
import { useNavigate } from 'react-router-dom';

export default function SearchRecords() {
    const context = useContext(recordContext);
    const {getSearchRecords,searchRecord} = context
    useEffect(() => {
        getSearchRecords();
    }, []);
    
  return (<div className="container my-3">
  <table className="table">
      <thead>
          <tr>
              <th className='text-center' scope="col ">Query</th>
          </tr>
      </thead>
      <tbody>
          {
              searchRecord.map(record => {
                  return (<tr key={record._id}>
                      <td className='text-center'>{record.searchQuery}</td>
                  </tr>)}
              )

          }
      </tbody>
  </table>

</div>);
}
