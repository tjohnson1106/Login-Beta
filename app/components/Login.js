import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  View
} from "react-native";

import { Switch } from "react-native-switch";

import Video from "react-native-video";

let { height, width } = Dimensions.get("window");

export default class Login extends Component {
  render() {
    return (
      <Image
        style={styles.container}
        //for background only
        resizeMode="stretch"
        source={require("../images/Blurred_Blue.jpg")}
      >
        {/* <Video
          style={styles.video}
          source={require("../images/Oculus.mp4")}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat
        />

        <View
          style={{
            flex: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 300,
            marginVertical: 25
          }}
        >
          <View
            style={{
              width: width / 2 + 40,
              padding: 5,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
              flexDirection: "row",
              backgroundColor: "rgba(0,0,0,0.5)",
              alignItems: "center"
            }}
          > */}
        {/* <TouchableOpacity style={styles.circle}>
          <Image
            source={require("../images/bird.png")}
            resizeMode="contain"
            style={{ height: 30, width: 30 }}
          />
        </TouchableOpacity> */}
        {/* <Text
          style={{
            color: "#fff",
            fontSize: 15,
            margin: 12
          }}
        >
          Login with Twitter
        </Text> */}

        <View
          style={{
            flex: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 40,
            paddingTop: 400
          }}
        >
          <View
            style={{
              width: width / 2 + 40,
              padding: 5,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 50,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
              flexDirection: "row",
              backgroundColor: "rgba(0,0,0,0.5)",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={styles.circle}>
              <Image
                source={require("../images/facebook2.png")}
                resizeMode="contain"
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 14, margin: 12 }}>
              Login with Facebook
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0)",
            alignItems: "center",
            padding: 25
          }}
        >
          <Text style={{ color: "#e7e7e7", fontSize: 17 }}>
            Already Have An Account?
          </Text>
          <Text style={{ color: "#8dd7ff", fontSize: 18 }}>Sign In</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,

    backgroundColor: "#F5FCFF"
  },
  circle: {
    backgroundColor: "rgba(85,172,239,0.2)",
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
