import React, { Component } from 'react';
import './index.css';

class Header extends Component {
    render(){
        return(
          <div className="Header">
            <p className="text-center pb-1">I am thinking a number from 1 to 10.</p>
            <p className="p-2">You must guess what it is in three tries.</p>
          </div>
        );
    }
}

export default Header;