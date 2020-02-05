// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import axios from 'axios';
import authService from '../../services/authService';
import {
   Row,
   Col,
   Input,
   Form,
   FormGroup,
   Button,
   Label,
   Card,   
   CardBody,
   CardFooter,
   // Alert
   UncontrolledAlert
} from "reactstrap";




class Login extends Component {
   constructor(props) {
      super(props);
}

   state = {
      isChecked: true,
      email: '',
      password: '',
      show: 0
   };
   catch
  

   handleChecked = e => {
      this.setState(prevState => ({
         isChecked: !prevState.isChecked
      }));
   };



  

   onFormSubmit  =  (event) => {
      event.preventDefault();
      authService.login(this.state.email,this.state.password)
      .then (

        this.props.history.push("/")
      )
      .catch(  (error)  => {

         if(typeof error !== 'undefined'){
           
            if (error.response.status === 401) {
               this.setState ({show: 1});              
             
              }
         }
  
        });

  
   
 }





   render() {
      return (
         <div className="container">
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="gradient-indigo-purple text-center width-400">
                     <CardBody>
                        <h2 className="white py-4">Login</h2>
                        <Form className="pt-2" onSubmit={this.onFormSubmit}>
                     
                    
                        <UncontrolledAlert
                           color="danger"
                            style = {{ display : this.state.show === 1 ? "block" : "none"  }}
                           >
                           Email or Password incorrect
                        </UncontrolledAlert> 
           
                           <FormGroup>
                              <Col md="12">
                              <Input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="inputemail"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({email : e.target.value})}
                                    required
                                 />
                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="inputPass"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({password : e.target.value})}
                                    required
                                 />





                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Row>
                                 <Col md="12">
                                    <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0 ml-3">
                                       <Input
                                          type="checkbox"
                                          className="custom-control-input"
                                          checked={this.state.isChecked}
                                          onChange={this.handleChecked}
                                          id="rememberme"
                                       />
                                       <Label className="custom-control-label float-left white" for="rememberme">
                                          Remember Me
                                       </Label>
                                    </div>
                                 </Col>
                              </Row>
                           </FormGroup>
                           <FormGroup>
                              <Col md="12">
                                 <Button type="submit" color="danger" block className="btn-pink btn-raised">
                                    Login
                                 </Button>
                                 {/* <Button type="button" color="secondary" block className="btn-raised">
                                    Cancel
                                 </Button> */}
                              </Col>
                           </FormGroup>
                        </Form>
                     </CardBody>
                     <CardFooter>
                        <div className="float-left">
                           <NavLink to="/pages/forgot-password" className="text-white">
                              Forgot Password?
                           </NavLink>
                        </div>
                        <div className="float-right">
                           
                        </div>
                     </CardFooter>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

export default Login;
