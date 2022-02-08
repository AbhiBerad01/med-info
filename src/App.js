
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateRecord from "./components/CreateRecord";
import SearchRecords from "./components/SearchRecords";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecordState from "./contextApi/RecordState";
import { useState } from "react";


function App() {
  const [search, setsearch] = useState("");
  const searchQuery = (query)=>{
    setsearch(query.text)
  }
  return (
   <RecordState>
      <BrowserRouter>
      <Navbar searchQuery={searchQuery} />
      <Routes>
        <Route exact path="/" element={<Home search={search} />} />
        <Route exact path="add" element={<CreateRecord />} />
        <Route exact path="search" element={<SearchRecords />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        <Route  path='*' exact={true} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

   </RecordState>
  );
}

export default App;
