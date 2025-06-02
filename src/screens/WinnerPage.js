// import React from 'react'
// import {View, Text} from 'react-native'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const WinnerPage = () => {
//   return (
//     <>
//       <Navbar />
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <View
//           style={{
//             width: '80%',
//             padding: 20,
//             backgroundColor: '#f0f0f0',
//             borderRadius: 10,
//           }}>
//           <View style={{alignItems: 'center'}}>
//             <Text style={{fontSize: 24, color: '#171449'}}>
//               Congratulations!
//             </Text>
//             <Text style={{fontSize: 18, color: '#555', marginTop: 10}}>
//               You have won the event!
//             </Text>
//           </View>
//         </View>
//       </View>
//     </>
//   )
// }

// export default WinnerPage

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

const WinnerPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWinner, setSelectedWinner] = useState(null);
  const scaleValue = new Animated.Value(0);

  const winnersData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      prize: 'Grand Prize Winner',
      amount: '₹ 10,000',
      date: 'Oct 15, 2023',
      location: 'New York, USA',
      category: 'grand',
    },
    {
      id: 2,
      name: 'Michael Chen',
      prize: 'First Prize',
      amount: '₹ 5,000',
      date: 'Sep 28, 2023',
      location: 'San Francisco, USA',
      category: 'first',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      prize: 'Second Prize',
      amount: '₹ 3,000',
      date: 'Sep 15, 2023',
      category: 'second',
    },
    {
      id: 4,
      name: 'David Kim',
      prize: 'Third Prize',
      amount: '₹ 2,000',
      date: 'Sep 10, 2023',
      location: 'Seoul, South Korea',
      category: 'third',
    },
    {
      id: 5,
      name: 'Olivia Williams',
      prize: 'Consolation Prize',
      amount: '₹ 1,000',
      date: 'Aug 30, 2023',
      location: 'London, UK',
      category: 'other',
    },
    {
      id: 6,
      name: 'James Wilson',
      prize: 'Special Recognition',
      amount: '₹ 500',
      date: 'Aug 15, 2023',
      location: 'Sydney, Australia',
      category: 'other',
    },
  ];

  const filteredWinners = winnersData.filter(winner => 
    activeCategory === 'all' || winner.category === activeCategory
  );

  const openWinnerDetails = (winner) => {
    setSelectedWinner(winner);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeWinnerDetails = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 200,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setSelectedWinner(null));
  };

  const renderCategoryButton = (category, label, icon) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        activeCategory === category && styles.activeCategory
      ]}
      onPress={() => setActiveCategory(category)}
    >
      <Icon2 name={icon} size={18} color={activeCategory === category ? '#fff' : '#171449'} />
      <Text style={[
        styles.categoryText,
        activeCategory === category && styles.activeCategoryText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderWinnerCard = (winner) => (
    <TouchableOpacity 
      key={winner.id} 
      style={styles.winnerCard}
      onPress={() => openWinnerDetails(winner)}
    >
      <View style={styles.cardHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{winner.name.charAt(0)}</Text>
        </View>
        <View style={styles.winnerInfo}>
          <Text style={styles.winnerName}>{winner.name}</Text>
          <Text style={styles.winnerLocation}>
            <Icon name="location-on" size={14} color="#171449" /> 
            {winner.location || 'Remote'}
          </Text>
        </View>
        <View style={styles.prizeBadge}>
          <Text style={styles.prizeAmount}>{winner.amount}</Text>
        </View>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={styles.prizeTitle}>{winner.prize}</Text>
        <Text style={styles.winDate}>{winner.date}</Text>
      </View>
      
      {/* <View style={styles.cardFooter}>
        <Text style={styles.viewDetails}>View Details →</Text>
      </View> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Winners</Text>
        <Text style={styles.headerSubtitle}>Celebrating exceptional achievements</Text>
      </View>
      
      {/* Category Filters */}
      {/* <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.categoryContainer}
      >
        {renderCategoryButton('all', 'All Winners', 'trophy')}
        {renderCategoryButton('grand', 'Grand Prize', 'crown')}
        {renderCategoryButton('first', 'First Prize', 'medal')}
        {renderCategoryButton('second', 'Second Prize', 'award')}
        {renderCategoryButton('third', 'Third Prize', 'star')}
        {renderCategoryButton('other', 'Special Prizes', 'gem')}
      </ScrollView> */}
      
      {/* Winners List */}
      <ScrollView style={styles.winnersContainer}>
        {filteredWinners.map(renderWinnerCard)}
      </ScrollView>
      
      {/* Winner Details Modal */}
      {selectedWinner && (
        <View style={styles.modalBackdrop}>
          <Animated.View style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] }
          ]}>
            <TouchableOpacity style={styles.closeButton} onPress={closeWinnerDetails}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
            
            <View style={styles.modalHeader}>
              <View style={styles.modalAvatarPlaceholder}>
                <Text style={styles.modalAvatarText}>{selectedWinner.name.charAt(0)}</Text>
              </View>
              <Text style={styles.modalWinnerName}>{selectedWinner.name}</Text>
              <Text style={styles.modalWinnerLocation}>
                <Icon name="location-on" size={16} color="#fff" /> 
                {selectedWinner.location || 'Remote'}
              </Text>
            </View>
            
            <View style={styles.modalContent}>
              <View style={styles.detailRow}>
                <Icon name="emoji-events" size={24} color="#FFD700" />
                <View style={styles.detailInfo}>
                  <Text style={styles.detailLabel}>Prize</Text>
                  <Text style={styles.detailValue}>{selectedWinner.prize}</Text>
                </View>
              </View>
              
              <View style={styles.detailRow}>
                <Icon name="attach-money" size={24} color="#4CAF50" />
                <View style={styles.detailInfo}>
                  <Text style={styles.detailLabel}>Amount</Text>
                  <Text style={styles.detailValue}>{selectedWinner.amount}</Text>
                </View>
              </View>
              
              <View style={styles.detailRow}>
                <Icon name="event" size={24} color="#171449" />
                <View style={styles.detailInfo}>
                  <Text style={styles.detailLabel}>Date Won</Text>
                  <Text style={styles.detailValue}>{selectedWinner.date}</Text>
                </View>
              </View>
              
              <View style={styles.detailRow}>
                <Icon name="category" size={24} color="#FF6B6B" />
                <View style={styles.detailInfo}>
                  <Text style={styles.detailLabel}>Category</Text>
                  <Text style={styles.detailValue}>
                    {selectedWinner.category === 'grand' && 'Grand Prize'}
                    {selectedWinner.category === 'first' && 'First Prize'}
                    {selectedWinner.category === 'second' && 'Second Prize'}
                    {selectedWinner.category === 'third' && 'Third Prize'}
                    {selectedWinner.category === 'other' && 'Special Recognition'}
                  </Text>
                </View>
              </View>
            </View>
            
            <View style={styles.modalFooter}>
              <Text style={styles.congratsText}>Congratulations!</Text>
            </View>
          </Animated.View>
        </View>
      )}
      
      {/* Decorative Elements */}
      <View style={styles.decorCircle1} />
      <View style={styles.decorCircle2} />
      <View style={styles.decorCircle3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
    paddingTop: 20,
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2D2B6B',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#171449',
    fontWeight: '500',
  },
  categoryContainer: {
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#171449',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeCategory: {
    backgroundColor: '#171449',
    borderColor: '#171449',
  },
  categoryText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#171449',
  },
  activeCategoryText: {
    color: '#fff',
  },
  winnersContainer: {
    flex: 1,
    padding: 15,
  },
  winnerCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#171449',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#171449',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#171449',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  winnerInfo: {
    flex: 1,
  },
  winnerName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D2B6B',
    marginBottom: 3,
  },
  winnerLocation: {
    fontSize: 14,
    color: '#757575',
  },
  prizeBadge: {
    backgroundColor: '#FFEDED',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  prizeAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B6B',
  },
  cardContent: {
    marginBottom: 15,
  },
  prizeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171449',
    marginBottom: 5,
  },
  winDate: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 15,
    alignItems: 'flex-end',
  },
  viewDetails: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171449',
  },
  modalBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#2D2B6B',
    width: width * 0.9,
    borderRadius: 25,
    padding: 25,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  modalAvatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#171449',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalAvatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalWinnerName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  modalWinnerLocation: {
    fontSize: 16,
    color: '#BDBDFF',
  },
  modalContent: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailInfo: {
    marginLeft: 15,
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#BDBDFF',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  modalFooter: {
    alignItems: 'center',
  },
  congratsText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFD700',
    textAlign: 'center',
  },
  decorCircle1: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(107, 92, 231, 0.1)',
    zIndex: -1,
  },
  decorCircle2: {
    position: 'absolute',
    bottom: 100,
    left: -70,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    zIndex: -1,
  },
  decorCircle3: {
    position: 'absolute',
    bottom: -50,
    right: 50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(77, 171, 247, 0.1)',
    zIndex: -1,
  },
});

export default WinnerPage;
