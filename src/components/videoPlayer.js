import React from 'react';

const VideoWrapper =(props)=>{

        return(
                <div id="VideoBackground" style={{'width': props.width,
                    'height':props.height}}>
                
                        <video id="background-video" loop autoPlay >
                            <source src={props.source} type={props.type} />
                        
                            Your browser does not support the video tag.
                        </video> 

                    <div id="TextOverlay">
                        {props.children}
                    </div>

            </div>

        )
    
}

export default VideoWrapper;

