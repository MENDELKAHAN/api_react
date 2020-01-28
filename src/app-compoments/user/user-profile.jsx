// import external modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import {
   TabContent,
   TabPane,
   NavLink,
   Row,
   Col,
   Button,
   Input,
   FormGroup,
   Card,
   CardHeader,
   CardBody,
   // CardFooter,
   Form,
   Label
} from "reactstrap";
import classnames from "classnames";
import {
   X,
   CheckSquare,
   User,
   // Info,
   FileText
   // Mail
} from "react-feather";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../assets/scss/views/components/extra/editor.scss";





class UserProfile extends Component {
   state = {
      activeTab: "1"
   };

   toggle = tab => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };

   render() {
      return (
         <Fragment>
            <Row>
               <Col xs="12" id="user-profile">
                  <Card className="profile-with-cover">
                     <div
                        className="card-img-top img-fluid bg-cover height-300"
                        // style={{ background: `url("${photo14}") 50%` }}
                     />
                     <Row className="media profil-cover-details">
                        <Col xs="5">
                           <div className="align-self-start halfway-fab pl-3 pt-2">
                              <div className="text-left">
                                 <h3 className="card-title text-white">Jose Diaz</h3>
                              </div>
                           </div>
                        </Col>
                        <Col xs="2">
                           <div className="align-self-center halfway-fab text-center">
                              <Link to="/pages/user-profile" className="profile-image">
                                 <img
                                    // src={avatarm8}
                                    className="rounded-circle img-border gradient-summer width-100"
                                    alt="Card avatar"
                                 />
                              </Link>
                           </div>
                        </Col>
                        <Col xs="5">
                           <div className="profile-cover-buttons">
                              <div className="media-body halfway-fab align-self-end">
                                 <div className="text-right d-none d-sm-none d-md-none d-lg-block">
                                    
                                   
                                 </div>
                                 <div className="text-right">
                                    <Button
                                       color="primary"
                                       className="btn-raised mr-2 d-block d-sm-block d-md-block d-lg-none float-right"
                                    >
                                       <i className="fa fa-plus" />
                                    </Button>
                                 </div>
                              </div>
                           </div>
                        </Col>
                     </Row>
                     <div className="profile-section">
                        <Row>
                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "1"
                                       })}
                                       onClick={() => {
                                          this.toggle("1");
                                       }}
                                    >
                                       Email
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "2"
                                       })}
                                       onClick={() => {
                                          this.toggle("2");
                                       }}
                                    >
                                       About
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>

                           <Col lg="2" md="2" className="text-center">
                              <span className="font-medium-2 text-uppercase">Jose Diaz</span>
                              <p className="grey font-small-2">Ninja Developer</p>
                           </Col>

                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "3"
                                       })}
                                       onClick={() => {
                                          this.toggle("3");
                                       }}
                                    >
                                       Friends
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "4"
                                       })}
                                       onClick={() => {
                                          this.toggle("4");
                                       }}
                                    >
                                       Photos
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>

            <TabContent activeTab={this.state.activeTab}>
              
               
               <TabPane tabId="2">
                  <Row>
                     <Col xs="12">
                        <div className="content-header">About</div>
                     </Col>
                  </Row>
                  <Row>
                 
                           
                     <Col sm="12">
                        <Card>
                           <CardHeader>
                              <h5>Personal Information</h5>
                           </CardHeader>
                           <CardBody>
                              <div className="mb-3">
                                 <span className="text-bold-500 primary">About Me:</span>
                                 <span className="display-block overflow-hidden">
                                    Hi, I’m Jose, I’m 29 and I work as a Ninja Developer for the “PIXINVENT” Creative Studio.
                                    In my research, I follow the flow of early medieval slavery from viking raids in the
                                    west, through the booming ports of the Scandinavian north, and out into the Islamic
                                    world. Reading texts against the grain and seeing artifacts as traces of the past can
                                    make their lives once again visible to us today. This website documents my efforts to do
                                    just that, and I hope it will prove a resource and an inspiration for others in similar
                                    pursuits.
                                 </span>
                              </div>
                              <hr />
                              <Row>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/useer-profile">Birthday:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">June 10th, 1988</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Birthplace:</Link>
                                          </span>
                                          <span className="d-block overflow-hidden">New Jersey, USA</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Lives in:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">Denver, USA</span>
                                       </li>
                                    </ul>
                                 </Col>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Gender:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">Male</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Email:</Link>
                                          </span>
                                          <Link to="/pages/user-profile" className="display-block overflow-hidden">
                                             jose@yourmail.com
                                          </Link>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Website:</Link>
                                          </span>
                                          <Link to="/pages/user-profile" className="display-block overflow-hidden">
                                             pixinvent.com
                                          </Link>
                                       </li>
                                    </ul>
                                 </Col>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Phone Number:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">(012) 345 - 678 - 9910</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Occupation:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">Ninja Developer</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Joined:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">April 1st, 2012</span>
                                       </li>
                                    </ul>
                                 </Col>
                              </Row>
                              <hr />
                              <div className="mt-3">
                                 <span className="text-bold-500 primary">Hobbies:</span>
                                 <span className="display-block overflow-hidden">
                                    I like to ride the cycle to work, swimming, listning music and working out. I also like
                                    reading magazines, go to museums, watching good movies and eat spicy food while it’s
                                    raining outside.Twin siblings Dipper and Mabel Pines spend the summer at their uncle's
                                    tourist trap in the enigmatic town of Gravity Falls.A mysterious Hollywood stuntman and
                                    mechanic moonlights as a getaway driver.Scuba Diving, Skiing, Surfing, Photography, Long
                                    drive.
                                 </span>
                              </div>
                              <div className="mt-2 overflow-hidden">
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-plane danger font-large-2" />
                                    <div className="mt-2">Travelling</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-speedometer danger font-large-2" />
                                    <div className="mt-2">Driving</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-camera danger font-large-2" />
                                    <div className="mt-2">Photography</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-game-controller danger font-large-2" />
                                    <div className="mt-2">Gaming</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-music-tone-alt danger font-large-2" />
                                    <div className="mt-2">Music</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-basket-loaded danger font-large-2" />
                                    <div className="mt-2">Shopping</div>
                                 </span>
                              </div>
                           </CardBody>
                        </Card>
                     </Col>
                     </Row>
               </TabPane>
               {/*Email */}
               <Row>
               <Col sm="12">
                        <Card>
                           <CardHeader>
                              <h5>Email Info</h5>
                           </CardHeader>
                           <CardBody>

                           <Form className="form-horizontal">
                              <div className="form-body">
                                 <h4 className="form-section"><User size={20} color="#212529" /> Personal Info</h4>
                                 
                                 <FormGroup row>
                                    <Label for="projectinput1" sm={3}>SMTP server address:</Label>
                                    <Col sm={9}>
                                       <Input type="text" id="projectinput1"   name="server_address" />
                                    </Col>
                                 </FormGroup>

                                 <FormGroup row>
                                    <Label for="projectinput3" sm={3}>E-mail:</Label>
                                    <Col sm={9}>
                                       <Input type="text" id="projectinput3"   name="email"/>
                                    </Col>
                                 </FormGroup>
                                 <FormGroup row>
                                    <Label for="projectinput4" sm={3}>Password:</Label>
                                    <Col sm={9}>
                                       <Input type="password" id="projectinput4"   name="password"/>
                                    </Col>
                                 </FormGroup>

                                 <FormGroup row>
                                    <Label for="projectinput4" sm={3}>Port:</Label>
                                    <Col sm={4}>
                                       
                                       <Input type="number" id="projectinput4"   name="port" />
                                       </Col>
                                       <Col sm={4}>
                                    <Label check sm={3}>
                                                <Input type="checkbox" defaultChecked />{' '}
                                                TLS
                                            </Label>
                                            </Col>
                                           
                                 </FormGroup>


                                 
                             
                                 <h4 className="form-section"><FileText size={20} color="#212529" /> Signature</h4>

                             
                              
                              

                                
                                 <FormGroup row>
                                    {/* <Label for="projectinput9" sm={3}>About Project:</Label> */}
                                    <Col sm={12}>
                                       {/* <Input type="textarea" id="projectinput9" rows="5"  name="comment" /> */}
                                       <Row>
                            
                             
                             
                              <Col sm="12">
                                <Editor editorClassName="demo-editor" />
                              </Col>
                            </Row>
                                    </Col>
                                 </FormGroup>
                              </div>

                              <div className="form-actions">
                                 <Button color="warning" className="mr-1">
                                    <X size={16} color="#FFF" /> Cancel
                                 </Button>
                                 <Button color="primary">
                                    <CheckSquare size={16} color="#FFF" /> Save
                                 </Button>
                              </div>
                           </Form>
                        



                           </CardBody>
                           </Card>
                           </Col>
                           </Row>

               </TabContent>
         </Fragment>
      );
   }
}

export default UserProfile;
