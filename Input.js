import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Input_style';
import * as actions from './changeTextActions';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class Input extends React.Component {
  render() {
    return (
      <ParallaxScrollView
        backgroundColor="blue"
        contentBackgroundColor="pink"
        stickyHeaderHeight={50}
        renderStickyHeader={() => (
         <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello World!</Text>
          </View>
        )}
        parallaxHeaderHeight={300}
        renderForeground={() => (
         <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello World!</Text>
          </View>
        )}>
        <View style={{ height: 700 }}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    );
  }
}

const mapStateToProps = state => state.ct;
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Input);