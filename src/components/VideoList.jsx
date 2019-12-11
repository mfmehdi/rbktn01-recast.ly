import VideoListEntry from './VideoListEntry.js';



// class VideoList extends React.Component {

//   constructor(){
//     super();
//     VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired,
// };
//     console.log(exampleVideoData);
//   }
// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated


// render(){
//   return(
//   <div className="video-list">
//     {exampleVideoData.map(video =>
//                 <div><VideoListEntry  url= {video.snippet.thumbnails.default.url} title={video.snippet.title} description={video.snippet.description} /></div>)}
//   </div>
//   )
// }
// }
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => <VideoListEntry
    handleClick= {props.handleClick}
    video={video}
     />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
