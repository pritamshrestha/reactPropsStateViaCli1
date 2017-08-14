import React, {Component} from 'react';

class Header extends Component{
	
	
	render(){
 return(
	<div>
	 <h1 className="pritam">I am from Header component!</h1>
	 <p className="text-primary">My name is :{this.props.name}</p>
	 <p className="text-primary">My gender is :{this.props.gender}</p>
	 
	 <div id="nepal">{this.props.allnames.map((item,i)=>{
					   return <p key={i}>{item}</p>
				   })}</div>
			  
		
	</div>);
	}
}
Header.defaultProps={
	names:['pritam','suchana','prisumsa']
}


export default Header;