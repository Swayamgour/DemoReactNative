import React, {useRef, useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native'

const {width} = Dimensions.get('window')

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']

const Tab = () => {
  const scrollRef = useRef(null)
  const [activeTab, setActiveTab] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

  const handleTabPress = index => {
    scrollRef.current.scrollTo({x: index * width, animated: true})
    setActiveTab(index)
  }

  const indicatorTranslateX = scrollX.interpolate({
    inputRange: [0, width, 2 * width],
    outputRange: [0, width / 3, (2 * width) / 3],
    extrapolate: 'clamp',
  })

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <View style={styles.container}>
        {/* Tabs */}
        <View style={styles.tabContainer}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={styles.tabButton}
              onPress={() => handleTabPress(index)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === index && styles.activeTabText,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
          <Animated.View
            style={[
              styles.indicator,
              {transform: [{translateX: indicatorTranslateX}]},
            ]}
          />
        </View>

        {/* Scrollable Content */}
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}
          onMomentumScrollEnd={event => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width)
            setActiveTab(index)
          }}>
          <View style={[styles.page, {backgroundColor: '#f8d7da'}]}>
            <Text>Page 1</Text>
          </View>
          <View style={[styles.page, {backgroundColor: '#d1ecf1'}]}>
            <Text>Page 2</Text>
          </View>
          <View style={[styles.page, {backgroundColor: '#d4edda'}]}>
            <Text>Page 3</Text>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  tabText: {
    color: '#888',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#000',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: width / 3,
    backgroundColor: '#007bff',
  },
  page: {
    width: width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Tab
