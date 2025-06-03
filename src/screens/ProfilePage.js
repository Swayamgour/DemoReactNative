import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0)).current;
  
  const userData = {
    name: "Alex Morgan",
    username: "@alex_morgan",
    bio: "Digital creator | Photographer | Travel enthusiast ✈️ Exploring the world one photo at a time",
    location: "San Francisco, CA",
    website: "alexmorgan.design",
    stats: {
      posts: 347,
      followers: "12.4K",
      following: 843
    },
    photos: [
      { id: 1, uri: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
      { id: 2, uri: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
      { id: 3, uri: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
      { id: 4, uri: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
      { id: 5, uri: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
      { id: 6, uri: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" },
    ]
  };

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
    
    // Animation for the follow button
    scaleAnim.setValue(0);
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const renderPhotoGrid = () => (
    <View style={styles.photoGrid}>
      {userData.photos.map((photo, index) => (
        <Animatable.View 
          key={photo.id}
          animation="fadeInUp"
          duration={800}
          delay={index * 100}
          style={styles.photoContainer}
        >
          <Image source={{ uri: photo.uri }} style={styles.photo} />
        </Animatable.View>
      ))}
    </View>
  );

  const renderStats = () => (
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{userData.stats.posts}</Text>
        <Text style={styles.statLabel}>Posts</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{userData.stats.followers}</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{userData.stats.following}</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#171449" />
      
      {/* Header Background */}
      <LinearGradient
        colors={['#6a11cb', '#2575fc']}
        style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      
      <ScrollView style={styles.container}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Animatable.View 
            animation="fadeInDown"
            duration={1000}
            style={styles.profileImageContainer}
          >
            <Image 
              source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" }} 
              style={styles.profileImage}
            />
            <View style={styles.onlineIndicator} />
          </Animatable.View>
          
          <View style={styles.profileInfo}>
            <Animatable.Text 
              animation="fadeInRight"
              duration={800}
              delay={200}
              style={styles.name}
            >
              {userData.name}
            </Animatable.Text>
            
            <Animatable.Text 
              animation="fadeInRight"
              duration={800}
              delay={300}
              style={styles.username}
            >
              {userData.username}
            </Animatable.Text>
            
            <Animatable.View 
              animation="fadeInRight"
              duration={800}
              delay={400}
              style={styles.followButtonContainer}
            >
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <TouchableOpacity 
                  style={[styles.followButton, isFollowing && styles.followingButton]}
                  onPress={toggleFollow}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.followButtonText, isFollowing && styles.followingButtonText]}>
                    {isFollowing ? "Following" : "Follow"}
                  </Text>
                  {isFollowing && <Icon name="check" size={18} color="#fff" style={styles.checkIcon} />}
                </TouchableOpacity>
              </Animated.View>
              
              <TouchableOpacity style={styles.messageButton} activeOpacity={0.8}>
                <Icon name="mail-outline" size={20} color="#171449" />
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>
        
        {/* Bio Section */}
        <Animatable.View 
          animation="fadeInUp"
          duration={800}
          delay={500}
          style={styles.bioContainer}
        >
          <Text style={styles.bioText}>{userData.bio}</Text>
          
          <View style={styles.infoRow}>
            <Icon name="location-on" size={18} color="#777" />
            <Text style={styles.infoText}>{userData.location}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Icon name="link" size={18} color="#777" />
            <Text style={[styles.infoText, styles.linkText]}>{userData.website}</Text>
          </View>
        </Animatable.View>
        
        {/* Stats Section */}
        <Animatable.View 
          animation="fadeInUp"
          duration={800}
          delay={600}
          style={styles.statsWrapper}
        >
          {renderStats()}
        </Animatable.View>
        
        {/* Tab Navigation */}
        <Animatable.View 
          animation="fadeInUp"
          duration={800}
          delay={700}
          style={styles.tabsContainer}
        >
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'posts' && styles.activeTab]}
            onPress={() => setActiveTab('posts')}
          >
            <Text style={[styles.tabText, activeTab === 'posts' && styles.activeTabText]}>Posts</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'photos' && styles.activeTab]}
            onPress={() => setActiveTab('photos')}
          >
            <Text style={[styles.tabText, activeTab === 'photos' && styles.activeTabText]}>Photos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
            onPress={() => setActiveTab('saved')}
          >
            <Text style={[styles.tabText, activeTab === 'saved' && styles.activeTabText]}>Saved</Text>
          </TouchableOpacity>
        </Animatable.View>
        
        {/* Content Section */}
        <Animatable.View 
          animation="fadeInUp"
          duration={800}
          delay={800}
          style={styles.contentContainer}
        >
          {activeTab === 'photos' && renderPhotoGrid()}
          
          {activeTab === 'posts' && (
            <View style={styles.postsContainer}>
              <View style={styles.postCard}>
                <View style={styles.postHeader}>
                  <Image 
                    source={{ uri: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" }} 
                    style={styles.postImage}
                  />
                  <View style={styles.postInfo}>
                    <Text style={styles.postTitle}>Mountain Adventures</Text>
                    <Text style={styles.postDate}>May 15, 2023</Text>
                  </View>
                </View>
                <Text style={styles.postContent}>
                  Just returned from an incredible hiking trip in the Rockies. The views were absolutely breathtaking...
                </Text>
                <View style={styles.postStats}>
                  <View style={styles.postStat}>
                    <Icon name="favorite" size={18} color="#ff6b6b" />
                    <Text style={styles.postStatText}>247 Likes</Text>
                  </View>
                  <View style={styles.postStat}>
                    <Icon name="chat-bubble" size={18} color="#171449" />
                    <Text style={styles.postStatText}>42 Comments</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.postCard}>
                <View style={styles.postHeader}>
                  <Image 
                    source={{ uri: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" }} 
                    style={styles.postImage}
                  />
                  <View style={styles.postInfo}>
                    <Text style={styles.postTitle}>Sunset Photography Tips</Text>
                    <Text style={styles.postDate}>April 28, 2023</Text>
                  </View>
                </View>
                <Text style={styles.postContent}>
                  Sharing my favorite techniques for capturing the perfect sunset. Golden hour is truly magical for photographers...
                </Text>
                <View style={styles.postStats}>
                  <View style={styles.postStat}>
                    <Icon name="favorite" size={18} color="#ff6b6b" />
                    <Text style={styles.postStatText}>512 Likes</Text>
                  </View>
                  <View style={styles.postStat}>
                    <Icon name="chat-bubble" size={18} color="#171449" />
                    <Text style={styles.postStatText}>89 Comments</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          
          {activeTab === 'saved' && (
            <View style={styles.savedContainer}>
              <Icon name="bookmark" size={60} color="#ddd" style={styles.savedIcon} />
              <Text style={styles.savedTitle}>No Saved Items</Text>
              <Text style={styles.savedText}>Save posts and photos to view them later</Text>
            </View>
          )}
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerGradient: {
    height: height * 0.2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 50,
    marginBottom: 10,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
    marginBottom: 2,
  },
  username: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  followButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followButton: {
    backgroundColor: '#171449',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  followingButton: {
    backgroundColor: '#e0e0e0',
  },
  followButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  followingButtonText: {
    color: '#666',
  },
  checkIcon: {
    marginLeft: 5,
  },
  messageButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#171449',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bioContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  bioText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#666',
    marginLeft: 8,
  },
  linkText: {
    color: '#171449',
    fontWeight: '500',
  },
  statsWrapper: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#171449',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777',
  },
  activeTabText: {
    color: '#171449',
  },
  contentContainer: {
    padding: 15,
    paddingBottom: 30,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoContainer: {
    width: (width - 40) / 3,
    height: (width - 40) / 3,
    marginBottom: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  postsContainer: {
    marginTop: 10,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  postImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  postInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  postDate: {
    fontSize: 14,
    color: '#888',
  },
  postContent: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 15,
  },
  postStats: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  postStatText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  savedContainer: {
    alignItems: 'center',
    padding: 40,
  },
  savedIcon: {
    opacity: 0.3,
    marginBottom: 15,
  },
  savedTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#888',
    marginBottom: 10,
  },
  savedText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

export default ProfilePage;
