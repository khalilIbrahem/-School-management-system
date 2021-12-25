import { Button, Input } from 'antd';
import React from 'react';
import { getToken } from 'Services/auth';
import './index.css';

class Login extends React.Component{
 
    render() {
      let email='';
      let password='';
        return(
            <>
           <div className="login-container">
            <h1>
             Login page 
            </h1>
            <table className="login-table">
              <tr>
                <td className="login-table-first-column">
                  <label>Email:</label>
                </td>
                 <td className="login-table-second-column"> 
                 <Input placeholder="Email" onChange={(event)=>{
                   email=event.target.value;
                 }} />
                 </td> 
                 </tr>
                 <tr><br></br></tr>
              <tr>
                <td className="login-table-first-column">
                  <label>PassWord:</label>
                </td>
                 <td className="login-table-second-column"> 
                   <Input.Password placeholder="PassWord" onChange={(event)=>{
                   password=event.target.value;
                 }} />
                 </td>
              </tr>
              <tr><br></br></tr>
              <tr>
                <td className="login-table-button-column">
                  <Button type="default" onClick = {
                    
                    ()=>{
                      
                      getToken(email,password).then(
                      (response)=>{ 
                        console.log(response.data);
                        localStorage.setItem('access_Token',response.data.access_Token);
                        
                        
                      
                      });} }
               >Login</Button>
                </td>
              </tr>
            </table>
            </div>
            </>
            );
    }
}
export default Login;