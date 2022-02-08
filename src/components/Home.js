import React, { useContext, useEffect, useState } from 'react';
import recordContext from '../contextApi/recordContext';
import { useNavigate } from 'react-router-dom';


export default function Home(props) {
    const navigate = useNavigate();
    const context = useContext(recordContext);

    const { getRecords, records } = context
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getRecords();
        } else {
            navigate("/login")
        }
    }, []);
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name of Medicine</th>
                        <th scope="col">Date of Affection</th>
                        <th scope="col">Date of Recovery</th>
                        <th scope="col">Note</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.filter(record=>{
                            
                            if(props.search==""){
                                return record
                            }else if(props.search==undefined){
                                return record
                            }
                            else if(record.name.toLowerCase().includes(props.search.toLowerCase())||record.to.includes(props.search)||record.from.includes(props.search)){
                                return record
                            }
                        }).map(record => {
                            return (<tr key={record._id}>
                                <td>{record.name}</td>
                                <td>{record.to}</td>
                                <td>{record.from}</td>
                                <td>{record.note}</td>
                            </tr>)}
                        )

                    }
                </tbody>
            </table>

        </div>

    );
}
