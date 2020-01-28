import React from "react";
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';



class RoleNew extends React.Component {

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
            <Button className="my-2 btn-raised shadow-z-2" color="danger" onClick={this.toggle} block> New Role</Button>
          </Col>
        </div>
      <Modal isOpen={this.state.composeModal} toggle={this.toggle} size="lg">
        <ModalHeader toggle={this.toggle}>Create New Role</ModalHeader>
        <ModalBody>
          <Form>
            <div className="form-body">
                <Row>
                  
                  <Col sm="12">
                      <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" name="name" />
                      </FormGroup>
                  </Col>
                  
                </Row>

                <Row>
                  
                  <Col sm="12">
                      <FormGroup>
                        <Label for="name">Slug</Label>
                        <Input type="text" id="slug" name="slug" />
                      </FormGroup>
                  </Col>
                 
                </Row>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Create</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    )
  }
}

export default RoleNew;
