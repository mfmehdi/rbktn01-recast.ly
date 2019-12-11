var searchYouTube = (options, callback) => {
  // TODO
  $.get("GET https://www.googleapis.com/youtube/v3/search",{
    part:'snippet',
    key:options.key,
    q:options.query,
    maxResults:options.max,
    videoEmbeddable:true
  });
};

export default searchYouTube;
