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
        	this.props.router.push('/blog')
        	console.log('Received the data')
        })
        this.setState({title:'', text: '', author: ''})
	},

	render: function(){
		return(
			<div className='new-blog'>
			  <h1 className="blog"> Create A Blog!</h1>
			
			  <form className='create-blog' onSubmit={this.handleSubmit} >
                    Title: <input type='text' className="title" name='t1' 
                      onChange={this.handleTitle} value={this.state.title} /> <br/>
			        <input type='text' className="body" name='t2' placeholder='Plz enter your text here' 
			          onChange={this.handleContent}    value={this.state.text} /> <br/>
			        Author:<input type='text' className="author" name='t3' 
			          onChange={this.handleAuthor} value={this.state.author}/> <br/>
			        {/*Picture:<br/> <input type='file' name='pic' accept='image/*' /> <br/>*/}
			        <input type='submit'  />
              </form>
           
		    </div>
	    )
	}
});


export default NewBlog;