import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let myDate = Date.now();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "foo"
    };
    this.tick = this.tick.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  AudioStop(){

  }

  AudioPlay(audioID,filePath){

  }

  startAudioCallback(date,audioID){
    window.navigator.geolocation.getCurrentPosition(
      (time)=>{
        const timeout = date - time.timestamp;
        setTimeout(function(){

        },timeout);
      }
    );
  }

  timeUpdate(time){
    this.setState({time: time});
  }

  tick() {
    window.navigator.geolocation.getCurrentPosition(
      (geoStamp)=>{
        // console.log({pos});
        this.timeUpdate(geoStamp.timestamp);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
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
