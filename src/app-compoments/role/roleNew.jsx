import React from "react";
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
// import axiosService from '../../services/axios';


class RoleNew extends React.Component {

  constructor(props){
    super(props);
   
   this.state = {
      composeModal: this.props.showForm,
      name: '',
      slug: '',
      errors: this.props.formErrors
    };
    
  }

  

  toggle = () => {
    this.setState({
      composeModal: !this.state.composeModal
    });
  }



  onFormSubmit  = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.slug)
  }
      
 
  render() {
    return (
      <div className="form-group form-group-compose text-center">
        <div className="float-right" >
          <Col>
            <Button className="my-2 btn-raised shadow-z-2" color="danger" onClick={this.toggle} block> New Role</Button>
          </Col>
        </div>
      <Modal isOpen={this.state.composeModal} toggle={this.toggle} size="lg">
        <ModalHeader toggle={this.toggle}>Create New Role</ModalHeader>
        <ModalBody>
          <Form  onSubmit={this.onFormSubmit}>
            <div className="form-body">
                <Row>
                  
                  <Col sm="12">
                      <FormGroup>
                        <Label for="name">Name</Label>
                        
                        <Input
                            type="name"
                            className="form-control"
                            name="name"
                            id="inputname"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({name : e.target.value})}
                            // required
                                 />
                      </FormGroup>
                  </Col>
                  
                </Row>

                <Row>
                  
                  <Col sm="12">
                      <FormGroup>
                        <Label for="name">Slug</Label>
                        <Input
                                    type="text"
                                    className="form-control"
                                    name="slug"
                                    id="inputslug"
                                    placeholder="Slug"
                                    value={this.state.slug}
                                    onChange={(e) => this.setState({slug : e.target.value})}
                                    // required
                                 />
                      </FormGroup>
                  </Col>
                 
                </Row>
            </div>
            <ModalFooter>
          <Button color="primary" type="submit">Create</Button>{' '}
         
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
            </Form>
        </ModalBody>
       
        
      </Modal>
    </div>
    )
  }
}

export default RoleNew;
