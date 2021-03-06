import React, { Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";

import { Table, Input, FormGroup, Label } from "reactstrap";
import { Edit, Trash2 } from 'react-feather';
// import ButtonsDropdown from '../common/action_button';
import PermissionNew from './permissionNew';


export default class Permission extends React.Component {




   render() {
      return (
        <Fragment>
        <ContentHeader>Permissions </ContentHeader>
       
{/* <ButtonsDropdown list={[{name: "new", link: 'new_role'}]}/> */}
<PermissionNew/>

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
                  <th>Slug</th>
                  <th>Action</th>
                
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">
                     {" "}
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox2" /> 1
                        </Label>
                     </FormGroup>
                  </th>
                  <td>Dev</td>
                  <td>Dev</td>
                 
                  <td><Edit size={18} className="mr-2" /> <Trash2 size={18} color="#FF586B"/></td>
               </tr>
              
           
             
              
            </tbody>
         </Table>
         </Fragment>
      );
   }
}