import React, {  Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import { Table, Input, FormGroup, Label } from "reactstrap";
import { Edit, Trash2 } from 'react-feather';
import RoleNew from './roleNew';
import axiosService from '../../services/axios';

class Role extends React.Component {
   state={roles:[], 
      formErrors: [],
      showForm : false}
  
      componentDidMount() {
      axiosService.get(`roles`)
        .then(res => {
          this.setState({roles: res.data.data});
          
        })
        .catch(error => {
         // console.log(error);
        }
         )
    }

   processNewRoleForm = async (name, slug ) =>  {
      const response = await axiosService.post('roles',
      {name, slug}
      )
      .then(res => {
         this.setState({
            roles: this.state.roles.concat(res.data.data)
          })
          this.setState({formErrors:[]})
      })
      
      .catch(error =>{
         this.setState({formErrors: error.response.data.errors})
         this.setState({ showForm : true})

        
      })
   }


   render() {
      return (
        <Fragment>
        <ContentHeader>Roles </ContentHeader>
       
        <RoleNew onSubmit={this.processNewRoleForm} formErrors = {this.state.formErrors}  showForm = {this.state.showForm}/>

        <Table responsive>
            <thead>
               <tr >
                  <th>
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox1" /> #
                        </Label>
                     </FormGroup>
                  </th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Action</th>
                
               </tr>
            </thead>
            <tbody>
            {this.state.roles.map((roles) => 
               <tr key={roles.id}>

                  <th scope="row">
                     {" "}
                     
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox2" /> {roles.id}
                        </Label>
                     </FormGroup>

                  </th>
                  
                  <td>{roles.name}</td>
                  <td>{roles.slug}</td>
                 
                  <td><Edit size={18} className="mr-2" /> <Trash2 size={18} color="#FF586B"/></td>
                 
               </tr>
                )}
            
            </tbody>
         </Table>
         </Fragment>
      );
   }
}


export default Role;