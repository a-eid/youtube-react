import React from 'react'

const VideoListItem =({video , handleChangeVid }) => {
	let url = video.snippet.thumbnails.default.url
	let title = video.snippet.title
	let channelTitle = video.snippet.channelTitle
	let description = video.snippet.description
	let id = video.id.videoId
	const changeVid = (e)=>{
		e.preventDefault()
		handleChangeVid(id)
	}
	return(
			<div>
				<a href="/" onClick = {changeVid}>
					<img src={url} alt=""/>
					<h2>{title}</h2>
				</a>
				<p>video video is from {channelTitle} channel</p>
				<p>{description}</p>
			</div>
		)
} 

export default VideoListItem;