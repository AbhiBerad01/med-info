import React, { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import recordContext from '../contextApi/recordContext';

export default function Navbar(props) {
    const context = useContext(recordContext);
    const {CreateSearchRecord} = context
    const navigate = useNavigate()
    const [search, setserach] = useState("");
    const handleLogout = ()=>{
        localStorage.setItem("token","")
        navigate("/login")
    }
    const onChange = (e) => {
        setserach({ ...search, [e.target.name]: e.target.value })
      }
      const handleSearch = (e)=>{
        e.preventDefault();
        props.searchQuery(search)
        if(search.text!=""&&search.text!=undefined){
        CreateSearchRecord({
            query:search.text
        })}
      }
      const handleonclick=()=>{
          setserach({
              text:""
          })
          props.searchQuery(search)
      }
      
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" >MedInfo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/" onClick={handleonclick}>Dashboard</NavLink>
                        </li>
                        {!localStorage.getItem('token') ? <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>:<ul className="navbar-nav me-auto mb-2 mb-lg-0"><li className="nav-item">
                            <NavLink className="nav-link" to="add" >Create Record</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="search" >Search Records</NavLink>
                        </li></ul>
                        }
                       
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" name='text' value={search.text||''} onChange={onChange} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
                    </form>
                    {!localStorage.getItem('token') ? <form><NavLink className="btn btn-primary mx-3" to="/login" role="button">Login</NavLink>
                        <NavLink className="btn btn-primary" to="/signup" role="button">Sign up</NavLink></form> : <button className="btn btn-primary mx-3" onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </nav>

    );
}
