
import React, {
  Component,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

console.log("testComponent importing");

class TestComponent extends React.Component {

  constructor(props) {
    console.log("testComponent constructing");
    super(props);
    }

    render() {
      console.log("testComponent rendering");
      return (
        <div>
          <Text>Test component works!</Text>
        </div>
      );
    }
  }

export default TestComponent;
