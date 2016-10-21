import React , {Component} from 'react'


class SearchBar extends Component{
	constructor(){
		super()
		this.state ={
			term : ""
		}
	}


	handleSubmit(e){
		e.preventDefault()
		this.props.onSearch(this.refs.term.value)
	}		

	render() {
	return( 
		<div>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input ref='term' type="text" placeholder="search for ..." autoFocus/>
				<button>Search</button>
			</form>
		</div>
		)
	}
} 


export default SearchBar;