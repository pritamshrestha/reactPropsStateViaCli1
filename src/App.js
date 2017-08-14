import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';


class App extends Component {
	constructor(props){
		super(props);
		this.state={names:['state-pritam','state-suchana','state-prisumsa']};
	}
	clickHandeler(){
		this.setState({names:this.state.names.reverse()});
	}
	
  render() {
    return (
      <div className="App">
       <button className="btn-primary" onClick={this.clickHandeler.bind(this)}>click here to reverse</button>
        
        <Header  name="suchana" gender="female" allnames={this.state.names}/>
        
        <Body  country="nepal" city="pokhara"/>
        <Footer title="contact" phone="6504303219" />
      </div>
    );
  }
}

export default App;
