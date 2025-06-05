import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
// import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window')

const InviteEarnPage = () => {
  // Mock data
  const steps = [
    {id: 1, title: 'Invite Your Friends', icon: 'person-add', color: '#FF6B6B'},
    {id: 2, title: 'Friends Join & Play', icon: 'people', color: '#4CAF50'},
    {id: 3, title: 'You Earn Rewards', icon: 'card-giftcard', color: '#FF9800'},
  ]

  const referrals = [
    {
      id: 1,
      name: 'Alex Johnson',
      status: 'Joined',
      amount: '$500',
      date: '2 days ago',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      status: 'Pending',
      amount: '$500',
      date: '5 days ago',
    },
    {
      id: 3,
      name: 'Michael Chen',
      status: 'Joined',
      amount: '$500',
      date: '1 week ago',
    },
  ]

  const handleInvite = () => {
    // Implement actual invitation logic
    alert('Invitation sent via WhatsApp!')
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Invite Friends & Earn</Text>
        <View style={styles.pointsContainer}>
          <FontAwesome name='diamond' size={16} color='#FFD700' />
          <Text style={styles.pointsText}>1,250 Points</Text>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.rewardAmount}>$500</Text>
        <Text style={styles.perFriend}>PER FRIEND</Text>

        <View style={styles.rewardCard}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Invite Friends & Get Rewards</Text>
            <Text style={styles.cardText}>
              Share your referral code and earn $500 for each friend who joins
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
            }}
            style={styles.giftImage}
          />
        </View>
      </View>

      {/* Invite Button */}
      <TouchableOpacity style={styles.inviteButton} onPress={handleInvite}>
        <Ionicons name='logo-whatsapp' size={28} color='white' />
        <Text style={styles.inviteButtonText}>Invite via WhatsApp</Text>
      </TouchableOpacity>

      {/* Referral Code */}
      <View style={styles.referralContainer}>
        <Text style={styles.sectionTitle}>Your Referral Code</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>FRIEND500</Text>
          <TouchableOpacity style={styles.copyButton}>
            <MaterialIcons name='content-copy' size={20} color='#171449' />
          </TouchableOpacity>
        </View>
      </View>

      {/* How It Works */}
      <View style={styles.stepsContainer}>
        <Text style={styles.sectionTitle}>How It Works</Text>
        <View style={styles.stepsGrid}>
          {steps.map(step => (
            <View key={step.id} style={styles.stepCard}>
              <View style={[styles.stepIcon, {backgroundColor: step.color}]}>
                <Ionicons name={step.icon} size={28} color='white' />
              </View>
              <Text style={styles.stepTitle}>{step.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Recent Referrals */}
      <View style={styles.referralsContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Referrals</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {referrals.map(referral => (
          <View key={referral.id} style={styles.referralItem}>
            <View style={styles.avatar}>
              <Ionicons name='person' size={24} color='#171449' />
            </View>
            <View style={styles.referralInfo}>
              <Text style={styles.referralName}>{referral.name}</Text>
              <Text style={styles.referralStatus}>{referral.status}</Text>
            </View>
            <View style={styles.referralAmountContainer}>
              <Text style={styles.referralAmount}>{referral.amount}</Text>
              <Text style={styles.referralDate}>{referral.date}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Terms & Conditions Apply</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#171449',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  pointsText: {
    marginLeft: 5,
    color: 'white',
    fontWeight: '600',
  },
  hero: {
    alignItems: 'center',
    padding: 2,
  },
  rewardAmount: {
    fontSize: 30,
    fontWeight: '800',
    color: '#808080',
    marginTop: 10,
  },
  perFriend: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 30,
  },
  rewardCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#171449',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  cardContent: {
    flex: 1,
    paddingRight: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 20,
  },
  giftImage: {
    width: 50,
    height: 50,
  },
  inviteButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 3,
  },
  inviteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 10,
  },
  referralContainer: {
    margin: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#444',
    marginBottom: 15,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E0D7FF',
  },
  codeText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#171449',
    letterSpacing: 3,
  },
  copyButton: {
    padding: 8,
  },
  stepsContainer: {
    margin: 20,
    marginTop: 10,
  },
  stepsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
  },
  stepCard: {
    // width: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    // flexDirection: '',
    alignItems: 'center',
  },
  stepIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 10,
  },
  stepTitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#444',
    marginTop: 8,
  },
  referralsContainer: {
    margin: 20,
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  viewAll: {
    color: '#171449',
    fontWeight: '600',
  },
  referralItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0E9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  referralInfo: {
    flex: 1,
  },
  referralName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  referralStatus: {
    fontSize: 14,
    color: '#666',
  },
  referralAmountContainer: {
    alignItems: 'flex-end',
  },
  referralAmount: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4CAF50',
  },
  referralDate: {
    fontSize: 12,
    color: '#999',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#999',
    fontSize: 12,
  },
})

export default InviteEarnPage
