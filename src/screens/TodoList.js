import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import {useGetTodoQuery} from '../services/api'
import {io} from 'socket.io-client'

const socket = io('http://192.168.1.17:5000') // 👈 replace with your backend URL if needed

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const {data, isLoading, refetch, isError, isSuccess} = useGetTodoQuery()

  useEffect(() => {
    if (isSuccess) {
      setTodos(data)
    }
  }, [isSuccess])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket connected')
    })

    socket.on('todoCreated', todo => {
      setTodos(prev => [...prev, todo])
    })

    socket.on('todoUpdated', updated => {
      setTodos(prev =>
        prev.map(todo => (todo._id === updated._id ? updated : todo)),
      )
    })

    socket.on('todoDeleted', id => {
      setTodos(prev => prev.filter(todo => todo._id !== id))
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>Error loading todos</Text>

  return (
    <View style={{padding: 16}}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>Todo List</Text>
      {todos?.map(item => (
        <View
          key={item._id}
          style={{
            padding: 20,
            elevation: 3,
            backgroundColor: '#fff',
            marginTop: 10,
            borderRadius:10
          }}>
          <Text style={{textAlign: 'center'}}>{item?.text}</Text>
        </View>
      ))}
    </View>
  )
}

export default TodoList
