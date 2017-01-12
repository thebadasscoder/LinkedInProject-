import React from 'react';
import $ from 'jquery';

const DetailBlog = React.createClass({
	getInitialState: function(){
		return({ iData: null})
	},
	componentDidMount: function() {
    $.ajax({
    	url:'/api/blog/' + this.props.params.id,
    	type: 'GET',
    	success: (data, err) => {
    		if(data){
    			this.setState({ iData: data})
    			console.log(this.state)
    		} else {
    			console.log(err)
    		}
    	}
    }) 
},
    render: function(){
		
		return(
			   <div className='main'>
			   { (this.state.iData === null) 
			     ? <h1> Loading Page</h1>
			     : <div className='single-blog'>
			     		<h1> Individaul Post </h1>
			            Title: {this.state.iData.title} <br/>
			            Text: {this.state.iData.text_body} <br/>
			            Author: {this.state.iData.author} <br/>
			            Likes: {this.state.iData.likes}
			       </div>
			    }        
			    </div>
			)   
	}
});

export default DetailBlog;