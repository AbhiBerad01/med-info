import React, { useState,useContext,useEffect } from 'react';

import recordContext from '../contextApi/recordContext';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
const initialRecord = {
  name: "",
  to: "",
  from: "",
  note: ""
}
export default function CreateRecord() {
  const [record, setrecord] = useState(initialRecord);
  const { name, to, from, note } = record;
  const context = useContext(recordContext);
  const navigate = useNavigate();
  const { CreateRecord} = context
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  
  }, []);
  
  const onClickhandle = (e) => {
    e.preventDefault();
    CreateRecord(record);
    setrecord(initialRecord)
    navigate('/')
  }



  const onChange = (e) => {
    setrecord({ ...record, [e.target.name]: e.target.value })
  }

  return (
    <div className="container my-4 d-flex justify-content-center">
      <form style={{width:"40%",}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name of Medicine</label>
          <input type="text" className="form-control" name='name' onChange={onChange} value={name} />
        </div>
        <div className="mb-3 ">
          <label htmlFor="to" className="form-label" style={{display:"block"}}>Affected Date</label>
          <input type="date" id="to" name="to"  onChange={onChange} value={to}/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="from" className="form-label" style={{display:"block"}}>Recovery Date</label>
          <input type="date" id="from" name="from" onChange={onChange} value={from}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Want to add Note</label>
          <input type="text" className="form-control" name='note' onChange={onChange} value={note} />
        </div>
        <button type="submit" className="btn btn-primary text-center" onClick={onClickhandle}>Submit</button>
      </form>
    </div>
  );
}
