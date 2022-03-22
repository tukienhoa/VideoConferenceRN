import JitsiMeet, {JitsiMeetView} from '@bortolilucas/react-native-jitsimeet';
import React, {useState} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

const conferenceOptions = {
  room: 'RNRoom',
  userInfo: {
    displayName: 'RN Example',
    email: 'example@test.com',
    avatar: 'https://picsum.photos/200',
  },
  featureFlags: {
    'live-streaming.enabled': false,
  },
};

function App() {
  const [showJitsiView, setShowJitsiView] = useState(false);

  /*
    The localParticipant leaves the current conference.
  */
  const hangUp = () => {
    JitsiMeet.hangUp();
  };

  if (showJitsiView) {
    /* Mode 2 - Starts Jitsi as a RN View */

    return (
      <JitsiMeetView
        style={styles.jitsiMeetView}
        options={conferenceOptions}
        onConferenceTerminated={_ => setShowJitsiView(false)}
        onConferenceJoined={e => console.log(e.nativeEvent)}
        onConferenceWillJoin={e => console.log(e.nativeEvent)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setShowJitsiView(true)}
        style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.5 : 1}]}>
        <Text style={styles.pressableText}>Join Room</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    width: '80%',
    borderRadius: 15,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  pressableText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  jitsiMeetView: {
    flex: 1,
  },
});

export default App;
