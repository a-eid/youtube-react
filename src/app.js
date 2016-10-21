import React , {Component} from 'react'
import {render} from 'react-dom'
import YoutubeSearch from 'youtube-api-search'

/* Components  */
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'


// youtube data api v3 
const YOUTUBE_API_KEY = "AIzaSyCA5CKQL0ywFGSmL2JVMCx3hi045evmEbs"
// youtube-api-search 
// youtbe-api-search(apikey , searchterm) : data 
class App extends Component{
	constructor(){
		super()
		this.state = {	
			videos : [],
		}
		this.search();
	}

	search(term){
		if(term){
			YoutubeSearch({ key: YOUTUBE_API_KEY ,term : term } , (videos)=>{
				this.setState({
					videos : videos
				})
				this.setState({
					selected : this.state.videos[0]
				})
			});
		}
	}

	handleChangeSelected(id){
		let selected = this.state.videos.find((v)=>{				
			return v.id.videoId == id 
		})
		this.setState({selected});
		window.scrollTo(0, 0);
	}

	handleSearch(term){
		this.setState({
			term
		})
		this.search(term);
	}

	render(){
		return(
				<div>
					<h2>Youtube React Search</h2>
					<SearchBar onSearch={this.handleSearch.bind(this)} />
					<VideoDetail video={this.state.selected} />
					<VideoList videos={this.state.videos} changeSelected={this.handleChangeSelected.bind(this)} />
				</div>

			)
	}
}

render(<App /> , document.getElementById('app'));


















