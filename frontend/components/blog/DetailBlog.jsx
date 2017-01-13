import React from 'react';
import $ from 'jquery';

const DetailBlog = React.createClass({
	getInitialState: function(){
		return({ iData: null, counter: 0})
	},
	componentDidMount: function() {
    $.ajax({
    	url:'/api/blog/' + this.props.params.id,
    	type: 'GET',
    	success: (data, err) => {
    		if(data){
    			this.setState({ iData: data  })
    			console.log(this.state.counter)
    		} else {
    			console.log(err)
    		}
    	}
    }) 
},
    handleClick: function(){
    	this.setState({counter: this.state.counter + 1})


    },
    render: function(){
		
		return(
			<center>
			   <div className='main-blog'>
			   { (this.state.iData === null) 
			     ? <h1> Loading Page</h1>
			     : <div className='single-blog'>
			   		<h1> Individual Post </h1>
			            Title: {this.state.iData.title} <br/>
			            Text: {this.state.iData.text_body} <br/>
			            Author: {this.state.iData.author} <br/>
			            <button name='likes' onClick={this.handleClick}>{this.state.counter} </button>
			       
			       </div>
				}        
			    </div>
			  </center>
			)   
	}
});

export default DetailBlog;