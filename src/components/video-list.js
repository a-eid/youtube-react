import React from 'react'
import VideoListItem from './video-list-item'

// items of the same type have to have a unique key : 
// etag is unique provided by youtube  .

const VideoList = ({changeSelected , videos })=>{
	
	let onChangeVid = (id)=>{
		changeSelected(id);
	}

	let renderItems = (video)=>{
		return (
				<li key={video.id.videoId} >
					<VideoListItem handleChangeVid={onChangeVid} video={video}  />
				</li>
			)
	}

	if(videos.length == 0 )
		return <p> loading .... </p>
	
	return (
		<ul>
			{videos.map(renderItems)}
		</ul>
		)
}





export default VideoList;