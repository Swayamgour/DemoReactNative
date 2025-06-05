import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  SafeAreaView,
  Modal,
  StatusBar,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Navbar from '../components/Navbar'
import * as Animatable from 'react-native-animatable'

// import LottieView from 'lottie-react-native'

const {width, height} = Dimensions.get('window')

const MyQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [progress] = useState(new Animated.Value(0))
  const [pulseAnim] = useState(new Animated.Value(1))
  const [isCorrect, setIsCorrect] = useState(false)

  const questions = [
    {
      id: 1,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
      image: 'planet',
    },
    {
      id: 2,
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
      image: 'whale',
    },
    {
      id: 3,
      question: "Which element has the chemical symbol 'O'?",
      options: ['Gold', 'Oxygen', 'Osmium', 'Oganesson'],
      correctAnswer: 'Oxygen',
      image: 'element',
    },
    {
      id: 4,
      question: 'Who painted the Mona Lisa?',
      options: [
        'Vincent van Gogh',
        'Pablo Picasso',
        'Leonardo da Vinci',
        'Michelangelo',
      ],
      correctAnswer: 'Leonardo da Vinci',
      image: 'monalisa',
    },
    {
      id: 5,
      question: 'What is the capital of Japan?',
      options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
      correctAnswer: 'Tokyo',
      image: 'japan',
    },
  ]

  useEffect(() => {
    // Reset progress animation when question changes
    Animated.timing(progress, {
      toValue: ((currentQuestion + 1) / questions.length) * width,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }, [currentQuestion])

  const handleAnswer = option => {
    setSelectedOption(option)

    // Pulse animation
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start()

    // Check if answer is correct
    const correct = option === questions[currentQuestion].correctAnswer
    setIsCorrect(correct)

    if (correct) {
      setScore(score + 1)
    }

    // Move to next question or show results
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        setShowScore(true)
      }
    }, 1500)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption(null)
    Animated.timing(progress, {
      toValue: (1 / questions.length) * width,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const getOptionStyle = option => {
    if (selectedOption === null) {
      return styles.option
    }

    if (option === questions[currentQuestion].correctAnswer) {
      return [styles.option, styles.correctOption]
    }

    if (
      option === selectedOption &&
      option !== questions[currentQuestion].correctAnswer
    ) {
      return [styles.option, styles.incorrectOption]
    }

    return [styles.option, styles.disabledOption]
  }

  const getIconForOption = option => {
    if (selectedOption === null) return null

    if (option === questions[currentQuestion].correctAnswer) {
      return (
        <Icon
          name='check-circle'
          size={24}
          color='#4CAF50'
          style={styles.optionIcon}
        />
      )
    }

    if (
      option === selectedOption &&
      option !== questions[currentQuestion].correctAnswer
    ) {
      return (
        <Icon
          name='cancel'
          size={24}
          color='#F44336'
          style={styles.optionIcon}
        />
      )
    }

    return null
  }

  return (
    // <Navbar />

    <LinearGradient
      colors={['#fff', '#fff', '#fff']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.safeArea}>
        {/* <StatusBar barStyle={'dark-content'} /> */}
        {/* Header */}
        <Animatable.View
          animation='fadeInRight'
          duration={1000}
          style={styles.header}>
          <Text style={styles.title}>Knowledge Quiz</Text>
          <View style={styles.scoreContainer}>
            <Icon name='star' size={24} color='#FFD700' />
            <Text style={styles.scoreText}>
              {score}/{questions.length}
            </Text>
          </View>
        </Animatable.View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Animated.View style={[styles.progressBar, {width: progress}]} />
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {questions.length}
          </Text>
        </View>

        {/* Question Card */}
        <Animatable.View
          animation='fadeInUp'
          duration={800}
          delay={500}
          style={[styles.questionCard, {transform: [{scale: pulseAnim}]}]}>
          <LinearGradient
            colors={['#2c3e50', '#4A6580']}
            style={styles.questionGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text style={styles.questionText}>
              {questions[currentQuestion].question}
            </Text>

            {/* Question Image Placeholder */}
            <View style={styles.imagePlaceholder}>
              <Icon name='image' size={60} color='rgba(255,255,255,0.3)' />
              <Text style={styles.imageText}>Question Visual</Text>
            </View>
          </LinearGradient>
        </Animatable.View>

        {/* Options */}
        <Animatable.View
          animation='fadeInUp'
          duration={800}
          delay={600}
          style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={getOptionStyle(option)}
              onPress={() => handleAnswer(option)}
              disabled={selectedOption !== null}
              activeOpacity={0.8}>
              {getIconForOption(option)}
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </Animatable.View>

        {/* Feedback Animation */}
        {selectedOption !== null && (
          <View style={styles.feedbackContainer}>
            {/* {isCorrect ? (
              <LottieView
                source={require('./correct.json')}
                autoPlay
                loop={false}
                // style={styles.lottie}
              />
            ) : (
              <LottieView
                source={require('./wrong.json')}
                autoPlay
                loop={false}
                style={styles.lottie}
              />
            )} */}
            <Text style={styles.feedbackText}>
              {isCorrect
                ? 'Correct! Well done!'
                : `Incorrect. The answer is: ${questions[currentQuestion].correctAnswer}`}
            </Text>
          </View>
        )}

        {/* Results Modal */}
        <Modal
          animationType='slide'
          transparent={true}
          visible={showScore}
          onRequestClose={() => setShowScore(false)}>
          <View style={styles.modalContainer}>
            <LinearGradient
              colors={['#11998e', '#38ef7d']}
              style={styles.modalContent}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              {/* <LottieView
                source={require('../celebration.json')}
                autoPlay
                loop={false}
                style={styles.celebrationLottie}
              /> */}
              <Text style={styles.modalTitle}>Quiz Completed!</Text>

              <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Your Score:</Text>
                <Text style={styles.resultScore}>
                  {score}/{questions.length}
                </Text>
                <Text style={styles.resultPercentage}>
                  {Math.round((score / questions.length) * 100)}%
                </Text>
              </View>

              <Text style={styles.resultMessage}>
                {score === questions.length
                  ? "Perfect! You're a genius! 🎉"
                  : score >= questions.length / 2
                  ? 'Great job! Keep learning! 👍'
                  : 'Good try! Practice makes perfect! 💪'}
              </Text>

              <TouchableOpacity
                style={styles.restartButton}
                onPress={restartQuiz}>
                <Text style={styles.restartButtonText}>Play Again</Text>
                <Icon name='replay' size={24} color='#fff' />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#171449',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFD700',
    marginLeft: 8,
  },
  progressContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#171449',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 25,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  questionGradient: {
    padding: 25,
  },
  questionText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  imageText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 16,
    marginTop: 10,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  option: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#171449',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    flex: 1,
  },
  optionIcon: {
    marginRight: 15,
  },
  correctOption: {
    backgroundColor: '#C8E6C9',
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  incorrectOption: {
    backgroundColor: '#FFCDD2',
    borderLeftWidth: 5,
    borderLeftColor: '#F44336',
  },
  disabledOption: {
    opacity: 0.7,
  },
  feedbackContainer: {
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  lottie: {
    width: 100,
    height: 100,
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContent: {
    width: width * 0.9,
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
  },
  celebrationLottie: {
    width: 200,
    height: 200,
  },
  modalTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  resultScore: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FFD700',
    marginBottom: 10,
  },
  resultPercentage: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
  },
  resultMessage: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
    lineHeight: 28,
  },
  restartButton: {
    backgroundColor: '#0c1e3e',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10,
  },
})

export default MyQuizPage
