import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native'
// import { Feather } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather'
import ArrowLeft from 'react-native-vector-icons/Feather'

const SearchPage = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const navigate = useNavigation()

  // Mock search function (replace with your actual search logic)
  const handleSearch = text => {
    setSearchText(text)

    if (text) {
      // Simulate search results
      setSearchResults([
        {id: '1', title: 'Modern UI Design', category: 'Design'},
        {id: '2', title: 'React Native Tutorial', category: 'Development'},
        {id: '3', title: 'Color Theory', category: 'Design'},
        {id: '4', title: 'Animation Techniques', category: 'Development'},
      ])
    } else {
      setSearchResults([])
    }
  }

  const clearSearch = () => {
    setSearchText('')
    setSearchResults([])
    Keyboard.dismiss()
  }

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.resultItem}>
      <View style={styles.itemIcon}>
        <Feather name='file-text' size={20} color='#171449' />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
      </View>
      <Feather name='chevron-right' size={20} color='#A9A9C8' />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigate.goBack()
          }}>
          <ArrowLeft
            name='arrow-left'
            size={20}
            color='#171449'
            style={styles.ArrowTitle}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Search</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather
            name='search'
            size={20}
            color='#A9A9C8'
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder='Search here...'
            placeholderTextColor='#A9A9C8'
            value={searchText}
            onChangeText={handleSearch}
            autoFocus={true}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
              <Feather name='x' size={20} color='#A9A9C8' />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Results Section */}
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.resultsContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          {/* <Image
            source={require('../assets/home/child-calculator-finance-copy-space-education.jpg')} // Replace with your image
            style={styles.emptyImage}
          /> */}
          <Text style={styles.emptyTitle}>Find what you need</Text>
          <Text style={styles.emptyText}>
            Search for tutorials, articles and resources
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    // backgroundColor: '#171449',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    // color: '#FFFFFF',
  },


  ArrowTitle: {
    fontSize: 25,
    fontWeight: '400',
    // color: '#FFFFFF',
  },
  searchContainer: {
    paddingHorizontal: 24,
    // paddingTop: 20,/
    paddingBottom: 16,
    // backgroundColor: '#171449',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#171449',
    height: '100%',
  },
  clearButton: {
    padding: 8,
  },
  resultsContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F7',
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(23, 20, 73, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#171449',
    marginBottom: 4,
  },
  itemCategory: {
    fontSize: 13,
    color: '#A9A9C8',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyImage: {
    width: 200,
    height: 100,
    marginBottom: 24,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#171449',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#A9A9C8',
    textAlign: 'center',
    maxWidth: 300,
  },
})

export default SearchPage
