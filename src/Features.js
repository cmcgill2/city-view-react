import React, { Component } from 'react';
import Feature from './Feature';
class Features extends Component {
    state = {
        lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'
    }

    displayFeatures() {
        // create array of react elements
        return this.props.cities.map((feature, index) => {
          return (
            <Feature key={feature} city={feature} lorem={this.state.lorem} click={() => this.props.click(index)}/>
          ) 
        });
      }

    render(){
        return (
            <div className="Features">
                <div className="row">
                    {this.displayFeatures()}
                </div>
            </div>
        );
    }
}

export default Features;