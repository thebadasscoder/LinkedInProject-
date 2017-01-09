import React from 'react';
import $ from 'jquery';



const NewBlog = React.createClass({
	getInitialState: function(){
		return({title: '', text: '', author: ''})
	},
    handleTitle: function(e){
    	this.setState({ title: e.target.value})
    	console.log('title '  + this.state.title)
    },
    handleContent: function(event){
    	this.setState({ text: event.target.value});
    	console.log('content ' + this.state.text);
    },
    handleAuthor: function(e1){
    	this.setState({author: e1.target.value});
    	console.log('author '  + this.state.author);
    },
    handleSubmit: function(e2){
    	e2.preventDefault()
		$.ajax({
			url:'/api/blog',
			type: 'POST',
			data: this.state

        })
        .done((data) => {
        	console.log('Received the data')
        })
	},

	render: function(){
		return(
			<div>
			  <h1> Create Blog </h1>
			  <form className='create-blog' onClick={this.handleSubmit} >
			  Title: <input type='text' name='t1' onChange={this.handleTitle} /> <br/>
			  Contents:<input type='text' name='t2' placeholder='Plz enter your text here' onChange={this.handleContent}/> <br/>
			  Author: <input type= 'text' name='t3' onChange={this.handleAuthor} />
			  <input type='submit'  />
              </form>
		    </div>
	    )
	}
});

export default NewBlog;