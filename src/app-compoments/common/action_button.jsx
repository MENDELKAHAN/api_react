import React from "react";
import {
   ButtonDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";

class ButtonsDropdown extends React.Component {
    constructor(props){
        super(props);
        

     
    }

   state = {
      dropdownOpen: false
   };

   toggle = () => {
      this.setState({
         dropdownOpen: !this.state.dropdownOpen
      });
   };


   render() {


    
      return (
         
         <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret className="btn-danger">Action</DropdownToggle>
            <DropdownMenu>
           { this.props.list.map((name, link) => <DropdownItem>name</DropdownItem> )
            }
            </DropdownMenu>
         </ButtonDropdown>
      );
   }
}

export default ButtonsDropdown