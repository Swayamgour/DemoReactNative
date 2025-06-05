import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [featuredArticle, setFeaturedArticle] = useState(null)
  const [articles, setArticles] = useState([])
  const [scrollY] = useState(new Animated.Value(0))
  const [savedArticles, setSavedArticles] = useState([])

  // Header animation values
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [250, 100],
    extrapolate: 'clamp',
  })

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.9],
    extrapolate: 'clamp',
  })

  // Load data
  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setFeaturedArticle({
        id: 1,
        title:
          'The Future of AI: How Machine Learning is Transforming Industries',
        category: 'Technology',
        date: 'May 15, 2023',
        readTime: '8 min read',
        image:
          'https://images.unsplash.com/photo-1677442135722-5fbf127e7308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        content:
          'Artificial intelligence is no longer a futuristic concept. From healthcare to finance, AI is revolutionizing how industries operate...',
      })

      setArticles([
        {
          id: 2,
          title: 'Global Markets Rally as Economic Recovery Gains Momentum',
          category: 'Business',
          date: 'May 14, 2023',
          readTime: '5 min read',
          image:
            'https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 3,
          title: 'New Breakthrough in Renewable Energy Storage Technology',
          category: 'Science',
          date: 'May 13, 2023',
          readTime: '6 min read',
          image:
            'https://images.unsplash.com/photo-1627556592933-ffe99c435cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 4,
          title: 'Top Travel Destinations for 2023 Revealed in Annual Report',
          category: 'Travel',
          date: 'May 12, 2023',
          readTime: '4 min read',
          image:
            'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 5,
          title: 'World Leaders Gather for Climate Summit Amid Rising Concerns',
          category: 'Politics',
          date: 'May 11, 2023',
          readTime: '7 min read',
          image:
            'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 6,
          title: 'Film Industry Celebrates Diversity at International Festival',
          category: 'Entertainment',
          date: 'May 10, 2023',
          readTime: '5 min read',
          image:
            'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 7,
          title:
            'Health Experts Reveal New Findings on Mediterranean Diet Benefits',
          category: 'Health',
          date: 'May 9, 2023',
          readTime: '4 min read',
          image:
            'https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 8,
          title:
            'Sports League Announces Revolutionary Rule Changes for Next Season',
          category: 'Sports',
          date: 'May 8, 2023',
          readTime: '6 min read',
          image:
            'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        },
      ])
    }, 800)
  }, [])

  const toggleSaveArticle = article => {
    if (savedArticles.includes(article.id)) {
      setSavedArticles(savedArticles.filter(id => id !== article.id))
    } else {
      setSavedArticles([...savedArticles, article.id])
    }
  }

  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        activeCategory === item.id && styles.activeCategory,
      ]}
      onPress={() => setActiveCategory(item.id)}>
      <Text
        style={[
          styles.categoryText,
          activeCategory === item.id && styles.activeCategoryText,
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  )

  const renderArticleItem = ({item, index}) => (
    <Animatable.View
      animation='fadeInUp'
      duration={800}
      // delay={index * 100}
      style={styles.articleCard}>
      <Image
        source={{uri: item.image}}
        style={styles.articleImage}
        resizeMode='cover'
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
        style={styles.articleImageGradient}>
        <Text style={styles.articleCategory}>{item.category}</Text>
      </LinearGradient>
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <View style={styles.articleMeta}>
          <Text style={styles.articleDate}>{item.date}</Text>
          <Text style={styles.articleReadTime}>{item.readTime}</Text>
        </View>
        <View style={styles.articleActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => toggleSaveArticle(item)}>
            <Icon
              name={
                savedArticles.includes(item.id)
                  ? 'bookmark'
                  : 'bookmark-outline'
              }
              size={24}
              color={savedArticles.includes(item.id) ? '#4A90E2' : '#888'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name='share' size={24} color='#888' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Read Article</Text>
            <Icon name='arrow-forward' size={18} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View>
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <StatusBar barStyle='light-content' backgroundColor='#0c1e3e' /> */}

      {/* Header */}
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <View
          // colors={['#0c1e3e', '#152b50']}
          style={styles.headerGradient}
          // start={{x: 0, y: 0}}
          // end={{x: 1, y: 1}}
          >
          <View style={styles.headerContent}>
            <View style={styles.headerTop}>
              <Text style={styles.headerTitle}>NewsDaily</Text>
              <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconButton}>
                  <Icon name='search' size={24} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Icon name='notifications' size={24} color='#fff' />
                </TouchableOpacity>
              </View>
            </View>

            {featuredArticle && (
              <Animatable.View
                animation='fadeIn'
                // delay={300}
                style={styles.featuredContainer}>
                <Text style={styles.featuredTag}>FEATURED STORY</Text>
                <Text style={styles.featuredTitle}>
                  {featuredArticle.title}
                </Text>
                <View style={styles.featuredMeta}>
                  <Text style={styles.featuredCategory}>
                    {featuredArticle.category}
                  </Text>
                  <Text style={styles.featuredDate}>
                    {featuredArticle.date} • {featuredArticle.readTime}
                  </Text>
                </View>
                <TouchableOpacity style={styles.readButton}>
                  <Text style={styles.readButtonText}>Read Now</Text>
                </TouchableOpacity>
              </Animatable.View>
            )}
          </View>
        </View>
      </Animated.View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={[
            {id: 'all', title: 'All News'},
            {id: 'tech', title: 'Technology'},
            {id: 'business', title: 'Business'},
            {id: 'politics', title: 'Politics'},
            {id: 'health', title: 'Health'},
            {id: 'sports', title: 'Sports'},
            {id: 'entertainment', title: 'Entertainment'},
          ]}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      {/* News List */}
      <Animated.FlatList
        data={articles}
        renderItem={renderArticleItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.articlesContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <Text style={styles.latestTitle}>Latest News</Text>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    overflow: 'hidden',
  },
  headerGradient: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    // paddingBottom:20
  },
  headerContent: {
    flex: 1,
    // height: 200,
    justifyContent: 'space-between',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    // color: '#fff',
    letterSpacing: 0.5,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 20,
  },
  featuredContainer: {
    marginBottom: 20,
  },
  featuredTag: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: 1,
  },
  featuredTitle: {
    // color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 15,
    lineHeight: 30,
  },
  featuredMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featuredCategory: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '700',
  },
  featuredDate: {
    color: '#a0b3d6',
    fontSize: 14,
  },
  readButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  readButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 10,
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f2f5',
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor: '#0c1e3e',
  },
  categoryText: {
    color: '#666',
    fontWeight: '600',
    fontSize: 14,
  },
  activeCategoryText: {
    color: '#fff',
    fontWeight: '700',
  },
  articlesContainer: {
    padding: 20,
    paddingTop: 15,
    paddingBottom: 100,
  },
  latestTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0c1e3e',
    marginBottom: 20,
  },
  articleCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 180,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  articleImageGradient: {
    height: 180,
    padding: 20,
    justifyContent: 'flex-end',
  },
  articleCategory: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    backgroundColor: '#4A90E2',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  articleContent: {
    padding: 20,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0c1e3e',
    marginBottom: 15,
    lineHeight: 26,
  },
  articleMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 20,
  },
  articleDate: {
    color: '#666',
    fontSize: 14,
  },
  articleReadTime: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '600',
  },
  articleActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  readMoreButton: {
    backgroundColor: '#0c1e3e',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 22.5,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 8,
  },
})

export default News
