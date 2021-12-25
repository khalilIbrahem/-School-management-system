import { Button, Input } from 'antd';
import Student from 'componentes/students';
import React from 'react';
import { create } from 'Services/Create';
import './index.css';
class CreateStudent extends React.Component{
    render(){
       let firstName='';
        let lastName='';
        let birthdate='';
        let classid='';
        return(
            <>
          <div className="create-container">
            <h1>Create Page </h1>
            <table className="create-table" >
                 <tr>
                     <td className="create-table-first-column">
                         <label>First Name</label>
                     </td>
                     <td className="create-table-second-column">
                         <Input placeholder="FirstName" onChange={(event)=>
                        {firstName=event.target.value;}
                         }/>
                     </td>
                </tr>
                <tr><br></br></tr>
                <tr>
                     <td className="create-table-first-column">
                         <label>Last Name</label>
                     </td>
                     <td className="create-table-second-column">
                         <Input placeholder="LastName"onChange={(event)=>
                        {lastName=event.target.value;}}/>
                     </td>
                </tr>
                <tr><br></br></tr>
                <tr>
                     <td className="create-table-first-column">
                         <label>Birthdate</label>
                     </td>
                     <td className="create-table-second-column">
                         <Input placeholder="birthdate" onChange={(event)=>
                        {birthdate=event.target.value;}}/>
                     </td>
                </tr>
                <tr><br></br></tr>
                <tr>
                     <td className="create-table-first-column">
                         <label>Classid</label>
                     </td>
                     <td className="create-table-second-column">
                         <Input placeholder="classid" onChange={(event)=>
                        {classid=event.target.value;}}/>
                     </td>
                </tr>
                <tr><br></br></tr>
                <tr>
                    <td>
                        <Button type="default" onClick={
                            ()=>{
                                create(firstName,lastName,birthdate,classid).then(
                                    ()=> {window.location.href="/students";}
                                );
                            }
                        }>Save</Button>
                    </td>
                </tr>

            </table>
            </div>
            </>
        );

    }
}
export default CreateStudent;