import React from 'react';
import { CopyCat } from '../components/CopyCat';

export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true
    };

    this.state = {
        input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  handleChange ({target}) {
      this.setState({input: target.value})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape
    
    return <CopyCat name='' copying={copying} toggleTape={toggleTape} input={this.state.input} handleChange={this.handleChange} />
  };
}