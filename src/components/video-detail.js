import React from 'react'

const VideoDetail = ({video})=>{
	if(!video) return <p> loading ... </p>
	let url = `https://www.youtube.com/embed/${video.id.videoId}`
	let description = video.snippet.description

	return(
		<div>
			<h2>{video.title}</h2>
			<iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
			<p>{description}</p>
			<hr/>
		</div>
	)
}


export default VideoDetail;