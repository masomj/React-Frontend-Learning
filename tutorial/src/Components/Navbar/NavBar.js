import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css"
class NavBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {active:true}
  };

  handleClick() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(this)
  };

  render() {
    return(
      <nav className="md:flex md:items-center md:flex-wrap md:flex-grow md:justify-between">
          <div className="flex justify-between">
          <img alt="Pampered Pooch Logo" className="pt-4 pl-4 md:mb-1"src="images/PamperedPoochLogo.jpg"></img>
          <button className="p-2 pt-4 md:hidden hamburgerL" onClick={this.handleClick.bind(this)}><FontAwesomeIcon icon={faBars}/></button>
          </div>
          <div className="md:items-center text-start md:flex-grow md:justify-between md:flex-wrap md:p-0 p-2 lg:flex lg:items-center lg:w-auto collapsible-menu">
          
            <div className={this.state.active ? 'openMenu' : "menu-content"}> 
              <ul className="text-start md:ms-3 md:text-center md:flex ">
                <li><a className="md:pr-3 block pt-1">{this.props.el1}</a></li>
                <li><a className="md:pr-3 block pt-1">{this.props.el2}</a></li>
                <li><a className="md:pr-3 block pt-1">{this.props.el3}</a></li>
              </ul>  
            </div>
          </div>
        </nav> 
    )
  }
}
export default NavBar;