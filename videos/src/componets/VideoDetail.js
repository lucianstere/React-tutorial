import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return (<div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        </div>);
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video player"/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>);
};

export default VideoDetail;

/**
 * <iframe width="560" height="315"
 * src="https://www.youtube.com/embed/HW-JYbpfkYQ" 
 * frameborder="0" allow="accelerometer; autoplay; 
 * encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */