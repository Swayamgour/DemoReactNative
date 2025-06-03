import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Modal from 'react-native-modal'

function BottomDrawer({isVisible, setIsVisible}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating={true}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      animationInTiming={300}
      animationOutTiming={300}
      statusBarTranslucent={true}
      style={styles.modal}>
      <View style={styles.drawer}>
        <Text style={styles.text}>Smooth Bottom Drawer</Text>
      </View>
    </Modal>
  )
}

export default BottomDrawer

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  drawer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 300,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
})
