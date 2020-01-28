import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";

import { Table, Input, FormGroup, Label } from "reactstrap";
import { Edit, Trash2 } from 'react-feather';


export default class Role extends React.Component {
   render() {
      return (
        <Fragment>
        <ContentHeader>Roles </ContentHeader>
       

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
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>markotto@mdo.com</td>
                  <td><Edit size={18} className="mr-2" /> <Trash2 size={18} color="#FF586B"/></td>
               </tr>
               <tr>
                  <th scope="row">
                     {" "}
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox3" /> 2
                        </Label>
                     </FormGroup>
                  </th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>jacob@fat.com</td>
                  <td><Edit size={18} className="mr-2" /> <Trash2 size={18} color="#FF586B"/></td>
               </tr>
               <tr>
                  <th scope="row">
                     {" "}
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox4" /> 3
                        </Label>
                     </FormGroup>
                  </th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>larry@twitte.comr</td>
                  <td><Edit size={18} className="mr-2" /> <Trash2 size={18} color="#FF586B"/></td>
               </tr>
               <tr>
                  <th scope="row">
                     {" "}
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox5" /> 4
                        </Label>
                     </FormGroup>
                  </th>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td><Edit size={18} className="mr-2" /> <Trash2 size={18} color="#FF586B"/></td>
               </tr>
               <tr>
                  <th scope="row">
                     {" "}
                     <FormGroup check>
                        <Label check>
                           <Input type="checkbox" id="checkbox6" /> 5
                        </Label>
                     </FormGroup>
                  </th>
                  <td>Peater</td>
                  <td>Partker</td>
                  <td>peater@example.com</td>
                  <td><Edit size={18} className="mr-2" /> <Trash2 size={18} color="#FF586B"/></td>
               </tr>
            </tbody>
         </Table>
         </Fragment>
      );
   }
}