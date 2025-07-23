import React, {useState, useRef, useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Keyboard,
  Animated,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

const ChatWithUs = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hello! How can I assist you today?',
      time: '10:30 AM',
      sender: 'support',
    },
    {
      id: '2',
      text: 'I need help with my recent order',
      time: '10:31 AM',
      sender: 'user',
    },
    {
      id: '3',
      text: "Sure, I'd be happy to help. Can you provide your order number?",
      time: '10:32 AM',
      sender: 'support',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const scrollViewRef = useRef()
  const typingAnimation = useRef(new Animated.Value(0)).current

  const handleSend = () => {
    if (message.trim() === '') return

    const newMessage = {
      id: Date.now().toString(),
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      sender: 'user',
    }

    setMessages([...messages, newMessage])
    setMessage('')

    // Simulate bot response after a delay
    setIsTyping(true)
    setTimeout(() => {
      const botResponse = {
        id: Date.now().toString() + 'bot',
        text: "Thanks for sharing that. I'll look into your issue right away.",
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        sender: 'support',
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  useEffect(() => {
    // Animate typing indicator
    if (isTyping) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(typingAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(typingAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ).start()
    }
  }, [isTyping, typingAnimation])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true})
    }
  }, [messages])

  const renderMessage = msg => {
    const isUser = msg.sender === 'user'

    return (
      <View
        key={msg.id}
        style={[
          styles.messageContainer,
          isUser ? styles.userMessageContainer : styles.supportMessageContainer,
        ]}>
        <View
          style={[
            styles.messageBubble,
            isUser ? styles.userMessageBubble : styles.supportMessageBubble,
          ]}>
          <Text
            style={isUser ? styles.userMessageText : styles.supportMessageText}>
            {msg.text}
          </Text>
          <Text
            style={isUser ? styles.userMessageTime : styles.supportMessageTime}>
            {msg.time}
          </Text>
        </View>
      </View>
    )
  }
  const navigate = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {navigate.goBack()
            // navigate.
        }}>
          <Icon name='arrow-back' size={24} color='#171449' />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.avatar}>
            <Image
              source={require('../assets/profile.webp')}
              style={styles.avatarImage}
            />
            <View style={styles.onlineIndicator} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Support Team</Text>
            <Text style={styles.headerSubtitle}>Online now</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name='more-vert' size={24} color='#171449' />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <KeyboardAvoidingView
        style={styles.chatContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          {/* Welcome message */}
          <View style={styles.welcomeContainer}>
            <View style={styles.welcomeBubble}>
              <Text style={styles.welcomeText}>
                Hi there! 👋 I'm Sophia from the support team. How can I help
                you today?
              </Text>
            </View>
          </View>

          {/* Messages */}
          {messages.map(renderMessage)}

          {/* Typing indicator */}
          {isTyping && (
            <View style={styles.typingContainer}>
              <View style={styles.typingBubble}>
                <Animated.View
                  style={[styles.typingDot, {opacity: typingAnimation}]}
                />
                <Animated.View
                  style={[
                    styles.typingDot,
                    {
                      opacity: typingAnimation,
                      transform: [
                        {
                          translateY: typingAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -5],
                          }),
                        },
                      ],
                    },
                  ]}
                />
                <Animated.View
                  style={[styles.typingDot, {opacity: typingAnimation}]}
                />
              </View>
            </View>
          )}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachmentButton}>
            <Ionicons name='attach' size={24} color='#171449' />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder='Type your message...'
            placeholderTextColor='#999'
            multiline
          />

          {message ? (
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Ionicons name='send' size={24} color='#FFF' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.micButton}>
              <Ionicons name='mic' size={24} color='#171449' />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F7',
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'ios' ? 60 : 50,
  },
  backButton: {
    padding: 8,
  },
  menuButton: {
    padding: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    position: 'relative',
    marginRight: 12,
  },
  avatarImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E0E0FF',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  headerText: {
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171449',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  chatContainer: {
    flex: 1,
  },
  messagesContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeBubble: {
    backgroundColor: '#F0F0F7',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    maxWidth: '80%',
  },
  welcomeText: {
    fontSize: 14,
    color: '#171449',
    textAlign: 'center',
  },
  messageContainer: {
    marginBottom: 16,
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  supportMessageContainer: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    borderRadius: 20,
    padding: 12,
    maxWidth: '80%',
  },
  userMessageBubble: {
    backgroundColor: '#171449',
    borderBottomRightRadius: 4,
  },
  supportMessageBubble: {
    backgroundColor: '#F0F0F7',
    borderBottomLeftRadius: 4,
  },
  userMessageText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  supportMessageText: {
    fontSize: 16,
    color: '#171449',
  },
  userMessageTime: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
    textAlign: 'right',
  },
  supportMessageTime: {
    fontSize: 12,
    color: 'rgba(23,20,73,0.7)',
    marginTop: 4,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F7',
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 120,
    backgroundColor: '#F8F8FA',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#171449',
    marginHorizontal: 8,
  },
  attachmentButton: {
    padding: 8,
  },
  micButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F8F8FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#171449',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typingContainer: {
    alignItems: 'flex-start',
    marginTop: 8,
  },
  typingBubble: {
    backgroundColor: '#F0F0F7',
    borderRadius: 20,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#171449',
    marginHorizontal: 2,
  },
})

export default ChatWithUs
