import React from 'react';
import './App.css';
import VideoWrapper from './components/videoPlayer';

function App() {
  return (
    <div className="App">

    <div>
      <h1>Hi I am some component</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      {/* This is Video wrapper component.
      It takes source and type of video along with style attributes to specify the dimensions.
      The text to be shown can be passed as children to this component.
      */ }
      <VideoWrapper source="http://techslides.com/demos/sample-videos/small.webm" type="video/ogg" width="560px" height="320px">
      <h4>This is text overlay</h4>
      <div>Some text for you.</div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button onClick={()=>alert('You liked it!')}>Like</button>
      </VideoWrapper>
      

      <div>
      <h3>Some info about this video</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
}

export default App;
