import React from 'react'
import {render} from 'react-dom'
import SearchBar from './components/search-bar'
import YoutubeSearch from 'youtube-api-search'
// youtube data api v3 
const YOUTUBE_API_KEY = "AIzaSyCA5CKQL0ywFGSmL2JVMCx3hi045evmEbs"
// youtube-api-search 
// youtbe-api-search(apikey , searchterm) : data 

YoutubeSearch({
	key:YOUTUBE_API_KEY , 
	term : 'reactjs' , 
	function(data){
		console.log(data) // returns an array with 5 obj containing videos .. 
	}
})




const App = (props)=>{
	return(
		<div>
			<h1>React App</h1>
			<SearchBar />
		</div>
		)
}

render(<App /> , document.getElementById('app'));


















