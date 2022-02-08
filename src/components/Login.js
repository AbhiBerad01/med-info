import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import recordContext from '../contextApi/recordContext';

const initial = {
  email : "",
  password : ""
}
export default function Login() {
  const [creditial, setcreditial] = useState(initial);
  const {email,password}= creditial;
  const context = useContext(recordContext);
  const {login} = context
  const navigate = useNavigate();
  const onClickhandler= async(e)=>{
    e.preventDefault();
    const res =  await login(creditial)
    if(res.success){
      localStorage.setItem("token",res.Auth_token)
      setcreditial(initial)
      navigate("/")
    }else{
    navigate("/login")
    setcreditial(initial)
    }
  }
 
  const onChange = (e) => {
    setcreditial({ ...creditial, [e.target.name]: e.target.value })
  }
  return (
  <div className="container my-4">
  <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"  name='email' value={email} onChange={onChange}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" name='password' value={password} onChange={onChange}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={onClickhandler}>Submit</button>
  </form>
  </div>);
}
