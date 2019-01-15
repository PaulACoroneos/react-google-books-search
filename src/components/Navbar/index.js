import React from 'react';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
  render() {
    return (
      <div class="ui menu">
        <div class="header item">
          <FontAwesomeIcon
            icon={faGoogle}
            style={{marginRight:'5px'}}
          />Google Books
        </div>
        <a class="item">Searched</a>
        <a class="item">Saved</a>
      </div>
    )
  }
}

export default Navbar;