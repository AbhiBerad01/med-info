import { useState } from "react";
import recordContext from "./recordContext";


const RecordState = (props)=>{

    const initialRecord =[]
    const initialSearch =[]

    const [records, setrecords] = useState(initialRecord);
    const [searchRecord, setSearchRecord] = useState(initialSearch);

    const host = "http://localhost:8000"

    const getRecords = async()=>{
        const responce = await fetch(`${host}/medinfo/getMedinfo`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            },
        });
        const json = await responce.json();
        setrecords(json)

    }

   const CreateRecord = async(record)=>{
    const responce = await fetch(`${host}/medinfo/createMedinfo`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem("token")
        },
        body:JSON.stringify(record),
    });
    const json = await responce.json();
   }
   
   const getSearchRecords = async()=>{
       const responce = await fetch(`${host}/searchRecord/getRecord`,{
           method:"GET",
           headers:{
               'Content-Type': 'application/json',
               'auth-token': localStorage.getItem("token")
            }
        });
        const json = await responce.json();
        setSearchRecord(json)
    }

    const CreateSearchRecord = async(searchrecord)=>{
     const responce = await fetch(`${host}/searchRecord/createRecord`,{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'auth-token': localStorage.getItem("token")
         },
         body:JSON.stringify(searchrecord),
     });
     const json = await responce.json();
    }

   const login = async(creditial)=>{
    const responce = await fetch(`${host}/auth/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(creditial),
    });
    const json = await responce.json();
    return json
   }
   const signup = async(user)=>{
    const responce = await fetch(`${host}/auth/createUser`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(user),
    });
    const json = await responce.json();
    return json
   }


    return (
        <recordContext.Provider value={{searchRecord, records,getSearchRecords,CreateSearchRecord,  getRecords ,CreateRecord,login,signup}}>
            {props.children}
        </recordContext.Provider>
    );
}

export default RecordState;