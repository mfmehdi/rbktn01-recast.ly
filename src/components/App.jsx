import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentVideo: exampleVideoData[0],
      videos : exampleVideoData
    };
  }

 handleClick(video){
   this.setState({
    currentVideo:video
  });
}
  render() {
    return(
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em><Search/></em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em> </h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><VideoList
           handleClick={this.handleClick.bind(this)}
           videos = {this.state.videos} /></h5></div>
        </div>
      </div>
    </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
