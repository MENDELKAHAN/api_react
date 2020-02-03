import React, {  Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import { NavLink } from "react-router-dom";
import { Table, Input, FormGroup, Label } from "reactstrap";
import { Edit, Trash2 } from 'react-feather';
import UserNew from './userNew';
import axios from 'axios';



export default class User extends React.Component {


   state = {
      users: []
    }
   componentDidMount() {
      axios.get(`http://127.0.0.1:8000/api/v1/users`)
        .then(res => {
         console.log(res.data)
          this.setState({users: res.data});
        })
    }



   render() {
      return (
        <Fragment>
        <ContentHeader>Users </ContentHeader>
        <UserNew/>

        <Table responsive>
            <thead>
               <tr>
                  <th>
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox1" /> #
                        </Label>
                     </FormGroup>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th> Role </th>
                  <th>Action</th>
                
               </tr>
            </thead>
            <tbody>
            {this.state.users.map((users) => 
            
         
               <tr>
                  <th scope="row">
                     {" "}
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox2" /> 1
                        </Label>
                     </FormGroup>
                  </th>
                  <td>{users.name}</td>
                  <td>test@test.com</td>
                 <td>
                
                                  
                    <Input type="select" id="defaultSelect" name="defaultSelect">
                        <option value="none" defaultValue="" disabled="">
                            None
                        </option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                        <option value="3">Developer</option>
                    
                    </Input>
                   
                    </td>
                  <td><Edit size={18} className="mr-2" /> <Trash2 size={18} color="#FF586B"/></td>
               </tr>
              
            
             
              )}
            </tbody>
         </Table>
         </Fragment>
      );
   }
}