// IMPORT REACT, AND COMPONENT
import React, { Component } from 'react';
import JSONData  from '../../json/recipe';
import '../index.css'; // IMPORT THE CSS FILE

//console.log('JSONData', JSONData)

class Ingredients extends Component {
  render() {
    return (
      <div>
        <div id="Ingredients_cont">
            <h1>Ingredients</h1>
            <ul>
              <li> 6 garlic cloves, finely grated</li>
              <li>4 teaspoons finely grated peeled ginger</li>
              <li>4 teaspoons ground turmeric</li>
              <li>2 teaspoons garam masala</li>
              <li>2 teaspoons ground cumin</li>
              <li>1 tablespoon kosher salt</li>
              <li>2 pounds skinless, boneless chicken breasts</li>
              <li>3 tablespoons ghee (clarified butter) or vegetable oil</li>
              <li>1 small onion, thinly sliced...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
            </div>
      </div>
    )
  }
}

export default Ingredients;