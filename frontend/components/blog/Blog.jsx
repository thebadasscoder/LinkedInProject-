import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';


const Blog = React.createClass({
	getInitialState: function(){
		return({ postsList: [] })
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/blog', 
			type: 'GET',
			success: (data, err) => {
				if(data){
					this.setState({postsList: data})
					console.log(data)
				}
				else {
					console.log(err)
				}
			}
		})
	},
	render: function(){
		return (
			<div className='blog-posts'>
               <h1> Blog Posts </h1>
               <div className='blog-list' >
               {this.state.postsList.map(function(val, indx){
               	return <li key={indx} className='elements'>
               	       <Link to={'/blog/'+ val.id} > 
               	       id: {val.id}  </Link>
               	       <br/>
               	       title: {val.title} <br/>
               	       text: {val.text_body} <br/>
               	       author: {val.author}

               	</li>
               })}
               </div>
        	</div>
			)
	}
});

export default Blog