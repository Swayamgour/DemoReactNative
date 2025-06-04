import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { launchImageLibrary } from 'react-native-image-picker'

const { width } = Dimensions.get('window')

const ProfilePageMinimal = () => {
  const [name, setName] = useState('Alex Morgan')
  const [editingName, setEditingName] = useState(false)
  const [profileImage, setProfileImage] = useState(
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  )

  const changeProfileImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 400,
        maxHeight: 400,
        quality: 0.8,
      },
      response => {
        if (
          !response.didCancel &&
          !response.errorCode &&
          response.assets &&
          response.assets.length > 0
        ) {
          setProfileImage(response.assets[0].uri)
        }
      }
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={changeProfileImage}
        activeOpacity={0.7}
      >
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.cameraIconContainer}>
          <Icon name="camera-alt" size={20} color="#fff" />
        </View>
      </TouchableOpacity>

      <View style={styles.nameContainer}>
        {editingName ? (
          <TextInput
            style={styles.nameInput}
            value={name}
            onChangeText={setName}
            autoFocus
            onBlur={() => setEditingName(false)}
            maxLength={30}
          />
        ) : (
          <TouchableOpacity
            style={styles.nameRow}
            onPress={() => setEditingName(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.nameText}>{name}</Text>
            <Icon name="edit" size={20} color="#171449" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#171449',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#171449cc',
    padding: 4,
    borderRadius: 15,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 20,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#171449',
  },
  nameInput: {
    fontSize: 26,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderColor: '#171449',
    paddingVertical: 2,
    color: '#171449',
  },
})

export default ProfilePageMinimal
