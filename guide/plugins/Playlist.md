## Playlist

The playlist UI at the right-hand side need to create by yourself

<img src="../../screenshot/playlist_1.png" style="max-width: 960px;">
<img src="../../screenshot/playlist_2.png" style="max-width: 960px;">

[Demo](https://pong420.github.io/videojs-plus/examples/playlist.html)

#### Usage

inclide the plugin and style.css

```js
const playlist = [
  {
    source: [
      {
        src: 'some.mp4',
        type: 'video/mp4'
      }
    ],
    title: 'some title',
    poster: 'some poster'
  },
  {
    source: [
      {
        src: 'demo.mp4',
        type: 'video/mp4'
      }
    ],
    title: 'demo title',
    poster: 'demo poster',
    default: true // you could set the start index of playlist
  }
  //....
];

// set playlist in options
const player = videojs('example-video', {
  playlist
});

// or

/**
 *  @params {Array} playlist
 *  @params {Number|String} startIndex - index of the default video in the playlist
 */
player.setPlayList(playlist, startIndex);
```

#### API and Event

```js
// switch video
player.playlist.play(1);

// get current video
player.playlist.current();

// get current video index
player.playlist.index();

// get playlist
player.playlist.values;

// loop playlist, default true
player.playlist.loop(false);

// control player should autoplay next or not
player.playlist.autoplayNext(false);

// fire when `player.setPlayList` call.
player.on('playlist', playlist => {
  console.log('playlist setup', playlist);
});

player.on('playlistchange', (event, selectedPlayList) => {
  console.log('playlist changed', selectedPlayList);
});

// fire when autoplay next options changed
player.on('autoplaynext', (event, autoplayNext) => {
  console.log('autoplay next behaviour changed', autoplayNext);
});
```
