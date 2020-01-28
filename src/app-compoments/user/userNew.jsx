import React from "react";
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import {
  X,
  CheckSquare,
  User,
  FileText,
  
} from "react-feather";


class UserNew extends React.Component {

  state = {
    composeModal: false
  };

  toggle = () => {
    this.setState({
      composeModal: !this.state.composeModal
    });
  }

  render() {
    return (
      <div className="form-group form-group-compose text-center">
        <div className="float-right" >
          <Col>
            <Button className="my-2 btn-raised shadow-z-2" color="danger" onClick={this.toggle} block> New User</Button>
          </Col>
        </div>
      <Modal isOpen={this.state.composeModal} toggle={this.toggle} size="lg">
        <ModalHeader toggle={this.toggle}>Create New User</ModalHeader>
        <ModalBody>
        <Form className="form-horizontal">
                              <div className="form-body">
                                 <h4 className="form-section"><User size={20} color="#212529" /> Personal Info</h4>
                                 
                                 <FormGroup row>
                                    <Label for="projectinput1" sm={3}>Name:</Label>
                                    <Col sm={9}>
                                       <Input type="text" id="projectinput1"   name="name" />
                                    </Col>
                                 </FormGroup>
                                 <FormGroup row>
                                    <Label for="projectinput3" sm={3}>E-mail:</Label>
                                    <Col sm={9}>
                                       <Input type="password" id="projectinput3"   name="email"/>
                                    </Col>
                                 </FormGroup>

                                 <FormGroup row>
                                    <Label for="projectinput4" sm={3}>Password:</Label>
                                    <Col sm={9}>
                                       <Input type="password" id="projectinput4"   name="password"/>
                                    </Col>
                                 </FormGroup>

                                 <FormGroup row>
                                    <Label for="projectinput5" sm={3}>Repeat Password:</Label>
                                    <Col sm={9}>
                                       <Input type="password" id="projectinput5"   name="repeat-password"/>
                                    </Col>
                                 </FormGroup>
                               
                                    
                                 <h4 className="form-section"><FileText size={20} color="#212529" /> Permissions</h4>
                                 <FormGroup row>
                                    <Label for="projectinput6" sm={3}>Role:</Label>
                                    <Col sm={9}>
                                       <Input type="select" id="projectinput6" name="Role" >
                                          <option value="0" defaultValue="" disabled="">Budget</option>
                                          <option value="1">Admin</option>
                                          <option value="2">Developer</option>
                                          
                                       </Input>
                                    </Col>
                                 </FormGroup>

                               
                              </div>

                             
                           </Form>
        </ModalBody>
        <ModalFooter>


        <div className="form-actions">
                      <Button color="warning" className="mr-1">
                        <X size={16} color="#FFF" /> Cancel
                      </Button>
                      <Button color="primary">
                        <CheckSquare size={16} color="#FFF" /> Save
                      </Button>
                  </div>
         
         




        </ModalFooter>
      </Modal>
    </div>
    )
  }
}

export default UserNew;
