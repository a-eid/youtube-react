import React , {Component} from 'react'

class SearchBar extends Component{
	constructor(){
		super()
		this.state = {
			term : ""
		}
	}
	onInputChange(e){
		let term = e.target.value
		this.setState({
			term
		})
	}
	render(){
		return(
			<div>
				<input 
					value={this.state.term} // controlled form element : gets value from state . 
					onChange={this.onInputChange.bind(this)} 
				type="text"/>
				<p>input vaule is {this.state.term}</p>
			</div>
			)
	}
}
export default SearchBar;