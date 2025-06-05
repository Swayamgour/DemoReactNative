import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

const {width} = Dimensions.get('window')

const ProfilePage = () => {
  const [name, setName] = useState('Alex Morgan')
  const [editingName, setEditingName] = useState(false)
  const [profileImage] = useState(
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  )

  const navigate = useNavigation()
  const stats = [
    {icon: 'trophy', label: 'Quizzes Won', value: '24'},
    {icon: 'play', label: 'Quizzes Played', value: '56'},
    {icon: 'star', label: 'Win Rate', value: '43%'},
  ]

  const transactions = [
    {
      id: 1,
      type: 'Deposit',
      amount: '₹500',
      date: 'Today, 10:30 AM',
      icon: 'arrow-down-circle',
      color: '#4CAF50',
    },
    {
      id: 2,
      type: 'Quiz Entry',
      amount: '₹50',
      date: 'Today, 09:15 AM',
      icon: 'game-controller',
      color: '#FF6B6B',
    },
    {
      id: 3,
      type: 'Quiz Win',
      amount: '₹250',
      date: 'Yesterday',
      icon: 'trophy',
      color: '#FFD700',
    },
    {
      id: 4,
      type: 'Referral Bonus',
      amount: '₹100',
      date: 'May 28',
      icon: 'gift',
      color: '#7E57C2',
    },
  ]

  const menuItems = [
    {icon: 'wallet', title: 'Wallet', screen: 'Wallet'},
    {icon: 'history', title: 'Transaction History', screen: 'History'},
    {icon: 'award', title: 'Achievements', screen: 'Achievements'},
    {icon: 'gift', title: 'Refer & Earn', screen: 'Referral'},
    {icon: 'settings', title: 'Settings', screen: 'Settings'},
    {icon: 'help-circle', title: 'Help & Support', screen: 'Support'},
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image source={{uri: profileImage}} style={styles.profileImage} />
            <View style={styles.cameraIconContainer}>
              <Icon name='camera-alt' size={16} color='#fff' />
            </View>
          </View>

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
                // onPress={() => setEditingName(true)}
                activeOpacity={0.7}>
                <Text style={styles.nameText}>{name}</Text>
                <Icon
                  name='edit'
                  size={20}
                  color='#fff'
                  style={{marginLeft: 8}}
                />
              </TouchableOpacity>
            )}
            <Text style={styles.playerId}>Player ID: QZ#45892</Text>
          </View>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceTitle}>Wallet Balance</Text>
          <Text style={styles.balanceAmount}>₹1,250</Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={() => navigate.navigate('Wallet')}
              style={[styles.actionButton, styles.addButton]}>
              <Ionicons name='add' size={18} color='#fff' />
              <Text style={styles.buttonText}>Add Money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate.navigate('Withdraw')}
              style={[styles.actionButton, styles.withdrawButton]}>
              <Ionicons name='arrow-up' size={18} color='#fff' />
              <Text style={styles.buttonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Stats</Text>
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <FontAwesome name={stat.icon} size={20} color='#171449' />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Recent Transactions */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionsContainer}>
          {transactions.map(transaction => (
            <View key={transaction.id} style={styles.transactionCard}>
              <View
                style={[
                  styles.transactionIcon,
                  {backgroundColor: `${transaction.color}20`},
                ]}>
                <Ionicons
                  name={transaction.icon}
                  size={24}
                  color={transaction.color}
                />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionType}>{transaction.type}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
              <Text
                style={[styles.transactionAmount, {color: transaction.color}]}>
                {transaction.amount}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Menu Section */}
      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuIconContainer}>
                <Ionicons name={item.icon} size={22} color="#171449" />
              </View>
              <Text style={styles.menuText}>{item.title}</Text>
              <Icon name="chevron-right" size={24} color="#9E9E9E" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
       */}
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <MaterialCommunityIcons name='logout' size={24} color='#FF6B6B' />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  header: {
    backgroundColor: '#171449',
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#7E57C2',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#E0D7FF',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#7E57C2',
    padding: 5,
    borderRadius: 15,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 20,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  nameInput: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#7E57C2',
    paddingVertical: 2,
  },
  playerId: {
    color: '#E0D7FF',
    fontSize: 14,
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  balanceTitle: {
    color: '#777',
    fontSize: 16,
    marginBottom: 1,
  },
  balanceAmount: {
    fontSize: 25,
    fontWeight: '800',
    color: '#171449',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    width: '48%',
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  withdrawButton: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 16,
  },
  section: {
    padding: 20,
    paddingBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171449',
    marginBottom: 10,
  },
  viewAll: {
    color: '#7E57C2',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    width: '31%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0E9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#171449',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  transactionsContainer: {
    marginBottom: 10,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  transactionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: '800',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0E9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  logoutText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
})

export default ProfilePage
