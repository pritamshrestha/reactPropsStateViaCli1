import React,{Component} from 'react';


class Footer extends Component{
	render(){
		return(<div>
		       <h2 className="suchana">I am from Footer component!</h2>
		       <p className="text-danger">Title  is :{this.props.title}</p>
		       <p className="text-danger">Contact no is :{this.props.phone}</p>
			</div>   
	);
}
}

export default Footer;