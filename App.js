import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

console.log("attempting to load module");
//
// import SoundPlayer from 'react-native-sound-player';

import testComponent from './components/TestComponent';

console.log("attempting to load module");

// try {
//   SoundPlayer.playSoundFile('/MusicSamples/maldicion.m4a', 'm4a');
// } catch (e) {
//   console.log(`cannot play the sound file`, e);
// }
// Import the react-native-sound module
// let Sound = require('react-native-sound');
// // Enable playback in silence mode (iOS only)
// console.log("beginning to play");
// Sound.setCategory('Playback');
//
//
// var maldicion = new Sound('./MusicSamples/maldicion.m4a');
// console.log("attempting to play");
// // Play the sound with an onEnd callback
// maldicion.play((success) => {
//   if (success) {
//     console.log('successfully finished playing');
//   } else {
//     console.log('playback failed due to audio decoding errors');
//   }
// });
//
//
// // Reduce the volume by half
// // maldicion.setVolume(0.5);
//
// // Position the sound to the full right in a stereo field
// // maldicion.setPan(1);
//
// // Loop indefinitely until stop() is called
// // maldicion.setNumberOfLoops(-1);
//
// // Get properties of the player instance
// console.log('volume: ' + maldicion.getVolume());
// console.log('pan: ' + maldicion.getPan());
// console.log('loops: ' + maldicion.getNumberOfLoops());

// Seek to a specific point in seconds
// maldicion.setCurrentTime(2.5);

// Get the current playback point in seconds
// maldicion.getCurrentTime((seconds) => console.log('at ' + seconds));

// Pause the sound
// maldicion.pause();

// Stop the sound and rewind to the beginning
// maldicion.stop(() => {
//   // Note: If you want to play a sound after stopping and rewinding it,
//   // it is important to call play() in a callback.
//   maldicion.play();
// });

// Release the audio player resource
// maldicion.release();

let myDate = Date.now();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timeVerificationThreshold: 3,
      timeVerificationNum: 0,
      timeVerificationBool: false,
      time: "bar"
    };
    // this.tick = this.tick.bind(this);
    // this.posUpdate = this.posUpdate.bind(this);
    // this.geoTimeMedian = this.geoTimeMedian.bind(this);
  }



  componentDidMount() {
    // this.intervalId = setInterval(this.tick, 1);
  }

  componentWillUnmount() {
    // this.intervalId.clearInterval();
  }

  audioStop(){

  }



  audioPlay(){



  }


  // geoTimeMedian(pos){
  //   if (this.timeVerificationNum === this.timeVerificationThreshold
  //     && this.timeVerificationBool === true){
  //       setTimeout(this.audioPlay,(this.state.date-pos.timestamp)*1000);
  //       this.setState({timeVerificationBool: false});
  //       this.setState({timeVerificationNum: 0});
  //   }
  //   else{
  //     this.setState({timeVerificationNum: this.state.timeVerificationNum + 1});
  //   }
  // }
  //
  // startAudioCallback(date,audioID){
  //   this.timeVerificationBool = true;
  //   this.setState({date: date});
  //   for (var i = 0; i < 5; i++) {
  //     window.navigator.geolocation.getCurrentPosition(
  //       (pos)=>{
  //         this.geoTimeMedian(pos);
  //       }
  //     );
  //   }
  //
  //
  // }

  timeUpdate(time){
    this.setState({time: time});
  }

  tick() {
    // window.navigator.geolocation.getCurrentPosition(
    //   (geoStamp)=>{
    //     // console.log({pos});
    //     this.timeUpdate(geoStamp.timestamp);
    //   }
    // );
  }

  render() {
    return (
      <View style={styles.container}>
        {testComponent}
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.time} is time</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
