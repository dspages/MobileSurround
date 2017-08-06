import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let myDate = Date.now();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeVerificationThreshold: 3,
      timeVerificationNum: 0,
      timeVerificationBool: false,
      pos: "foo"
    };
    this.tick = this.tick.bind(this);
    this.posUpdate = this.posUpdate.bind(this);
    this.geoTimeMedian = this.geoTimeMedian.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  audioStop(){

  }

// Sample comment

  audioPlay(){

  }


  geoTimeMedian(pos){
    if (this.timeVerificationNum === this.timeVerificationThreshold
      && this.timeVerificationBool === true){
        setTimeout(this.audioPlay,(this.state.date-pos.timestamp)*1000);
        this.setState({timeVerificationBool: false});
        this.setState({timeVerificationNum: 0});
    }
    else{
      this.setState({timeVerificationNum: this.state.timeVerificationNum + 1});
    }
  }

  startAudioCallback(date,audioID){
    this.timeVerificationBool = true;
    this.setState({date: date});
    for (var i = 0; i < 5; i++) {
      window.navigator.geolocation.getCurrentPosition(
        (pos)=>{
          this.geoTimeMedian(pos);
        }
      );
    }


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
