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
  StatusBar,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      user: 'Sarah Johnson',
      time: '2 mins ago',
      message: 'liked your photo',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      postImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      type: 'comment',
      user: 'Michael Chen',
      time: '15 mins ago',
      message: 'commented: "Great shot! Where was this taken?"',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      postImage: null
    },
    {
      id: 3,
      type: 'follow',
      user: 'Emma Rodriguez',
      time: '1 hour ago',
      message: 'started following you',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      postImage: null
    },
    {
      id: 4,
      type: 'mention',
      user: 'Travel Enthusiasts',
      time: '3 hours ago',
      message: 'mentioned you in a post: "Check out this amazing view!"',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      postImage: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      type: 'like',
      user: 'David Kim',
      time: '5 hours ago',
      message: 'liked your comment',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      postImage: null
    },
    {
      id: 6,
      type: 'event',
      user: 'Photography Meetup',
      time: '1 day ago',
      message: 'Your event starts tomorrow at 10:00 AM',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      postImage: null
    },
    {
      id: 7,
      type: 'share',
      user: 'Alex Morgan',
      time: '2 days ago',
      message: 'shared your post',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      postImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
  ]);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === id) {
        return { ...notification, read: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
  };

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(notification => notification.type === activeTab);

  const getIcon = (type) => {
    switch(type) {
      case 'like':
        return { name: 'favorite', color: '#e91e63' };
      case 'comment':
        return { name: 'comment', color: '#4caf50' };
      case 'follow':
        return { name: 'person-add', color: '#2196f3' };
      case 'mention':
        return { name: 'alternate-email', color: '#ff9800' };
      case 'event':
        return { name: 'event', color: '#9c27b0' };
      case 'share':
        return { name: 'share', color: '#00bcd4' };
      default:
        return { name: 'notifications', color: '#607d8b' };
    }
  };

  const renderNotification = ({ item, index }) => {
    const icon = getIcon(item.type);
    return (
      <Animatable.View 
        animation="fadeInUp"
        duration={600}
        delay={index * 50}
        style={[
          styles.notificationCard,
          !item.read && styles.unreadNotification
        ]}
      >
        <View style={styles.notificationHeader}>
          <View style={styles.iconContainer}>
            <Icon name={icon.name} size={20} color="#fff" />
          </View>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        
        <View style={styles.notificationContent}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          
          <View style={styles.messageContainer}>
            <Text style={styles.userName}>{item.user}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
          
          {item.postImage && (
            <Image source={{ uri: item.postImage }} style={styles.postImage} />
          )}
        </View>
        
        {!item.read && (
          <TouchableOpacity 
            style={styles.readButton}
            onPress={() => markAsRead(item.id)}
          >
            <Text style={styles.readButtonText}>Mark as Read</Text>
          </TouchableOpacity>
        )}
      </Animatable.View>
    );
  };

  return (
    <LinearGradient
      colors={['#f8f9fa', '#e9ecef']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Notifications</Text>
          <TouchableOpacity style={styles.markAllButton} onPress={markAllAsRead}>
            <Text style={styles.markAllText}>Mark all as read</Text>
          </TouchableOpacity>
        </View>
        
        {/* Tab Navigation */}
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'all' && styles.activeTab]}
            onPress={() => setActiveTab('all')}
          >
            <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>All</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'like' && styles.activeTab]}
            onPress={() => setActiveTab('like')}
          >
            <Icon name="favorite" size={18} color={activeTab === 'like' ? '#e91e63' : '#777'} />
            <Text style={[styles.tabText, activeTab === 'like' && styles.activeTabText]}>Likes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'comment' && styles.activeTab]}
            onPress={() => setActiveTab('comment')}
          >
            <Icon name="comment" size={18} color={activeTab === 'comment' ? '#4caf50' : '#777'} />
            <Text style={[styles.tabText, activeTab === 'comment' && styles.activeTabText]}>Comments</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'follow' && styles.activeTab]}
            onPress={() => setActiveTab('follow')}
          >
            <Icon name="person-add" size={18} color={activeTab === 'follow' ? '#2196f3' : '#777'} />
            <Text style={[styles.tabText, activeTab === 'follow' && styles.activeTabText]}>Follows</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'mention' && styles.activeTab]}
            onPress={() => setActiveTab('mention')}
          >
            <Icon name="alternate-email" size={18} color={activeTab === 'mention' ? '#ff9800' : '#777'} />
            <Text style={[styles.tabText, activeTab === 'mention' && styles.activeTabText]}>Mentions</Text>
          </TouchableOpacity>
        </ScrollView>
        
        {/* Notification List */}
        {filteredNotifications.length > 0 ? (
          <FlatList
            data={filteredNotifications}
            renderItem={renderNotification}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Icon name="notifications-off" size={60} color="#ccc" />
            <Text style={styles.emptyTitle}>No notifications</Text>
            <Text style={styles.emptyText}>You don't have any notifications right now</Text>
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: Platform.OS === 'ios' ? 60 : 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#333',
  },
  markAllButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#f0f2f5',
  },
  markAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171449',
  },
  tabsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    height:70,
    marginBottom:10
    
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f2f5',
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#171449',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#777',
    marginLeft: 6,
  },
  activeTabText: {
    color: '#fff',
  },
  listContainer: {
    padding: 15,
    paddingBottom: 30,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 16,

    
    // border:1px
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    
    // elevation: 2,
  },
  unreadNotification: {
    borderLeftWidth: 4,
    borderLeftColor: '#171449',
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#171449',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  postImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
  },
  readButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#f0f2f5',
  },
  readButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171449',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#888',
    marginTop: 20,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default NotificationPage;
