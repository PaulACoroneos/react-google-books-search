import React from 'react';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
  render() {
    return (
      <div class="ui menu">
        <div
          class="header item"
          style={{color:'#4285F4'}}
        >
          <FontAwesomeIcon
            icon={faGoogle}
            style={{marginRight:'5px',color:'#dd4b39'}}
          />Google Books
        </div>
        <a class="item" href='/Search'>Search</a>
        <a class="item" href='/Saved'>Saved</a>
      </div>
    )
  }
}

export default Navbar;