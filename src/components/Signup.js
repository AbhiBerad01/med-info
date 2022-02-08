import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import recordContext from '../contextApi/recordContext';

const initialUser = {
  name:"",
  email : "",
  password : ""
}
export default function Login() {
  const [user, setUser] = useState(initialUser);
  const {name,email,password}= user;
  const context = useContext(recordContext);
  const {signup} = context
  const navigate = useNavigate();
  const onClickhandler= async(e)=>{
    e.preventDefault();
    const res =  await signup(user)
    if(res.success){
      localStorage.setItem("token",res.Auth_token)
      setUser(initialUser)
      navigate("/")
    }else{
    navigate("/signup")
    setUser(initialUser)
    }
  }
 
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
  <div className="container my-4">
  <form>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Enter Name</label>
      <input type="text" className="form-control" id='name'  name='name' value={name} onChange={onChange}/>
    </div>
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
