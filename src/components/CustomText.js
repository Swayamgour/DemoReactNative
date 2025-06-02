import React from 'react'
import {Text, TextProps, StyleSheet} from 'react-native'

export default function CustomText (props) {
  return (
    <Text {...props} style={[styles.defaultFont, props.style]}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'Switzer-Extrabold',
  },
})
