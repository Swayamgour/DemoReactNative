import React, {useEffect, useRef, useState, useMemo} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native'

const {height} = Dimensions.get('window')

const OfferDetailsModal = ({modalVisible, onClose}) => {
  console.log(modalVisible)
  const translateY = useRef(new Animated.Value(height)).current
  // const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   if (visible) {
  //     showModal();
  //   } else if (!visible && modalVisible) {
  //     hideModal();
  //   }
  // }, [visible]);

  const showModal = () => {
    // setModalVisible(true);
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  const hideModal = () => {
    Animated.spring(translateY, {
      toValue: height,
      useNativeDriver: true,
    }).start(() => {
      // setModalVisible(false);
      onClose?.()
    })
  }

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
          if (gestureState.dy > 0) {
            translateY.setValue(gestureState.dy)
          }
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dy > 100 || gestureState.vy > 0.5) {
            hideModal()
          } else {
            Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true,
            }).start()
          }
        },
      }),
    [],
  )

  const handleViewTerms = () => {
    Linking.openURL('https://example.com/terms')
  }

  if (!modalVisible ) return null;

  return (
    <View style={styles.overlay}>
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={hideModal}
      />

      <Animated.View
        style={[styles.modalContainer, {transform: [{translateY}]}]}
        {...panResponder.panHandlers}>
        {/* Drag handle */}
        <View style={styles.dragHandleContainer}>
          <View style={styles.dragHandle} />
        </View>

        <ScrollView style={styles.content}>
          <Text style={styles.title}>Offer Details</Text>

          <View style={styles.offerHeader}>
            <Text style={styles.offerTitle}>CRED UP!</Text>
            <Text style={styles.cashbackText}>Flat ₹10 Cashback</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              • Get flat ₹10 cashback on transacting with CRED UP!{'\n'}•
              Minimum deposit of ₹51 on Android devices{'\n'}• Applicable twice
              per user{'\n'}• Valid until 5th June, 2025
            </Text>
          </View>

          <TouchableOpacity
            style={styles.termsButton}
            onPress={handleViewTerms}>
            <Text style={styles.termsText}>View T&C</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.actionButton} onPress={hideModal}>
          <Text style={styles.actionButtonText}>OK, GOT IT</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    zIndex: 100,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: height * 0.85,
  },
  dragHandleContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 25,
  },
  offerHeader: {
    marginBottom: 20,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
  },
  cashbackText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#27ae60',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
  },
  detailsContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  termsButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  termsText: {
    color: '#4a6cf7',
    fontSize: 16,
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: '#4a6cf7',
    padding: 18,
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
})

export default OfferDetailsModal
