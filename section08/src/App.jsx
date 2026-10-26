import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
import { useState ,useRef } from 'react'


  const mockData = [
    {
      id: 0,
      isDone:false,
      content:"리액트공부하기",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone:false,
      content:"놀러가기",
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone:false,
      content:"여행가기",
      date: new Date().getTime(),
    },
  ]


function App() {
  const idRef = useRef(3);

  const [todos, setTodos] = useState(mockData)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone:false,
      content: content,
      date:new Date().getTime()
    }

    setTodos([newTodo, ...todos])

  }


  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
      // if(todos.id === targetId) {
      //   return {
      //     ...todos,
      //     isDone: !todos.isDone
      //   }  
      // }
      // return todos
    ) )
  }

  const onDelete = (targetId) =>{
      
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }


  return (
    <div className='App'>
        <Header></Header>
        <Editor onCreate={onCreate} ></Editor>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} ></List>
    </div>
  )
}

export default App
