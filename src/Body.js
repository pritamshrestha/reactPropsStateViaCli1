import React, {Component} from 'react';

class Body extends Component{
	render(){
	return(
	<div>
		<h2 className="prisumsa"> I am from Body component!</h2>
		<h3 className="text-success">The name of the country is :{this.props.country}</h3>
		<h4 className="text-success">The name of the city is: {this.props.city}</h4>
	</div>
		
		);
	}
}
export default Body;