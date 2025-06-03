import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  Dimensions,
  StatusBar,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import Navbar from '../components/Navbar'
import * as Animatable from 'react-native-animatable'

const {width} = Dimensions.get('window')

const RewordPage = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedReward, setSelectedReward] = useState(null)
  const [scaleAnim] = useState(new Animated.Value(0))
  const [userPoints] = useState(1250)

  const rewards = [
    {
      id: 1,
      title: 'Premium Coffee',
      points: 150,
      category: 'food',
      icon: 'local-cafe',
      color: '#FF9E80',
    },
    {
      id: 2,
      title: 'Free Delivery',
      points: 100,
      category: 'service',
      icon: 'local-shipping',
      color: '#81D4FA',
    },
    {
      id: 3,
      title: 'Movie Tickets',
      points: 250,
      category: 'entertainment',
      icon: 'local-movies',
      color: '#CE93D8',
    },
    {
      id: 4,
      title: 'Discount Coupon',
      points: 200,
      category: 'shopping',
      icon: 'shopping-cart',
      color: '#FFF59D',
    },
    {
      id: 5,
      title: 'Gift Card',
      points: 500,
      category: 'shopping',
      icon: 'card-giftcard',
      color: '#80CBC4',
    },
    {
      id: 6,
      title: 'E-Book Bundle',
      points: 300,
      category: 'learning',
      icon: 'menu-book',
      color: '#A5D6A7',
    },
    {
      id: 7,
      title: 'Music Subscription',
      points: 400,
      category: 'entertainment',
      icon: 'music-note',
      color: '#F48FB1',
    },
    {
      id: 8,
      title: 'Fitness Class',
      points: 350,
      category: 'health',
      icon: 'fitness-center',
      color: '#90CAF9',
    },
  ]

  const filteredRewards =
    activeTab === 'all'
      ? rewards
      : rewards.filter(reward => reward.category === activeTab)

  const redeemReward = reward => {
    setSelectedReward(reward)
    scaleAnim.setValue(0)
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 400,
      easing: Easing.elastic(1.5),
      useNativeDriver: true,
    }).start()

    // Close the modal after 2 seconds
    setTimeout(() => {
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => setSelectedReward(null))
    }, 2000)
  }

  const RewardCard = ({reward}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => redeemReward(reward)}
      activeOpacity={0.8}>
      <LinearGradient
        colors={['#2c2c54', '#40407a']}
        style={styles.cardGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={[styles.iconContainer, {backgroundColor: reward.color}]}>
          <Icon name={reward.icon} size={30} color='#fff' />
        </View>
        <Text style={styles.cardTitle}>{reward.title}</Text>
        <View style={styles.pointsContainer}>
          <Icon name='star' size={20} color='#FFD700' />
          <Text style={styles.pointsText}>{reward.points} points</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInUp' duration={1000}>
        <LinearGradient
          colors={['#1e1e3f', '#2d2b55']}
          style={styles.headerGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={styles.header}>
            <Text style={styles.title}>Your Rewards</Text>
            <View style={styles.pointsDisplay}>
              <Icon name='star' size={24} color='#FFD700' />
              <Text style={styles.pointsTotal}>
                {userPoints.toLocaleString()}
              </Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.levelContainer}>
              <Text style={styles.levelText}>Level 4 Explorer</Text>
              <Text style={styles.nextLevel}>Next level: 200 points</Text>
            </View>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={['#ff9a9e', '#fad0c4']}
                style={[
                  styles.progressFill,
                  {width: `${(userPoints / 2000) * 100}%`},
                ]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
              />
            </View>
          </View>
        </LinearGradient>
      </Animatable.View>

      {/* Tabs */}
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'all' && styles.activeTabText,
            ]}>
            All Rewards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'food' && styles.activeTab]}
          onPress={() => setActiveTab('food')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'food' && styles.activeTabText,
            ]}>
            Food & Drinks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'shopping' && styles.activeTab]}
          onPress={() => setActiveTab('shopping')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'shopping' && styles.activeTabText,
            ]}>
            Shopping
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'entertainment' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('entertainment')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'entertainment' && styles.activeTabText,
            ]}>
            Entertainment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'health' && styles.activeTab]}
          onPress={() => setActiveTab('health')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'health' && styles.activeTabText,
            ]}>
            Health & Fitness
          </Text>
        </TouchableOpacity>
      </ScrollView> */}

      {/* Rewards Grid */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Available Rewards</Text>
        <View style={styles.grid}>
          {filteredRewards.map(reward => (
            <RewardCard key={reward.id} reward={reward} />
          ))}
        </View>
      </ScrollView>

      {/* Reward Modal */}
      {selectedReward && (
        <View style={styles.modalOverlay}>
          <Animatable.View
            animation='fadeInUp'
            duration={800}
            delay={500}
            style={[styles.modalContent, {transform: [{scale: scaleAnim}]}]}>
            <LinearGradient
              colors={['#11998e', '#38ef7d']}
              style={styles.modalGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Icon
                name='check-circle'
                size={60}
                color='#fff'
                style={styles.successIcon}
              />
              <Text style={styles.modalTitle}>Reward Claimed!</Text>
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: selectedReward.color, marginVertical: 15},
                ]}>
                <Icon name={selectedReward.icon} size={40} color='#fff' />
              </View>
              <Text style={styles.rewardName}>{selectedReward.title}</Text>
              <View style={styles.pointsContainer}>
                <Icon name='star' size={24} color='#FFD700' />
                <Text style={styles.modalPoints}>
                  {selectedReward.points} points
                </Text>
              </View>
              <Text style={styles.modalMessage}>
                Your reward has been added to your account
              </Text>
            </LinearGradient>
          </Animatable.View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1a1a2e',
  },
  headerGradient: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: '#fff',
  },
  pointsDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
  },
  pointsTotal: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFD700',
    marginLeft: 8,
  },
  progressContainer: {
    marginBottom: 10,
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  levelText: {
    color: '#fff',

    fontSize: 16,
    fontWeight: '600',
  },
  nextLevel: {
    color: '#aaa',
    fontSize: 14,
  },
  progressBar: {
    height: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 10,
  },
  tabsContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#6a11cb',
  },
  tabText: {
    color: '#ddd',
    fontWeight: '600',
    fontSize: 14,
  },
  activeTabText: {
    fontWeight: '700',
  },
  scrollView: {
    height: 550,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 20,
    marginLeft: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: width > 500 ? '30%' : '48%',
    aspectRatio: 0.9,
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  cardGradient: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',

    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 15,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  pointsText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 5,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalContent: {
    width: width * 0.85,
    borderRadius: 25,
    overflow: 'hidden',
  },
  modalGradient: {
    padding: 30,
    alignItems: 'center',
  },
  successIcon: {
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 5,
    textAlign: 'center',
  },
  rewardName: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalPoints: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
  },
})

export default RewordPage
