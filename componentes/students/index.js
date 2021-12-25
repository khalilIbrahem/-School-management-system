import { Button, Table } from "antd";
import React from "react";
import { getAllStudent } from "Services/GetAllStudents";
import { deleteStudent } from "Services/DeleteStudent"
import './index.css';

class Student extends React.Component{
 
        state ={
        students  :[]
        };
        componentDidMount(){
                getAllStudent().then(
                        (response)=>
                        {
                                this.setState(
                                        {
                                                students:response.data
                                        }
                                );
                        }
                );
        }
    render(){
        const columns = [
                {
                  title: 'FirstName',
                  dataIndex: 'firstName',
                  key: 'id',
                },
                {
                  title: 'LastName',
                  dataIndex: 'lastName',
                  key: 'id',
                },
                {
                  title: 'BirthDate',
                  dataIndex: 'birthDate',
                  key: 'id',
                },
                {
                        title: 'Action',
                        render: (value,row,index)=>(<>
                        <button onClick={
                                ()=>{deleteStudent(value.id);
                                console.log(value);}
                        }>Remove</button>
                        </>),
                      }]   

                   return( 
<>
<a onClick={
        ()=>{window.location.href="/createStudent";}
} >Create</a>
<Table className="tableStudent" dataSource={this.state.students} columns={columns}>
</Table>

</>
        );
};


    
}
export default Student;