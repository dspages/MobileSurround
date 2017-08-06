import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let myDate = Date.now();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: "foo"
    };
    this.tick = this.tick.bind(this);
    this.posUpdate = this.posUpdate.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  AudioStop(){

  }

// Sample comment

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

  posUpdate(pos){
    this.setState({pos: pos});
  }

  tick() {
    window.navigator.geolocation.getCurrentPosition(
      (pos)=>{
        // console.log({pos});
        this.posUpdate(pos.timestamp);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.pos} is state</Text>
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
