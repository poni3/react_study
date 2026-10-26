import './List.css'
import TodoItem from './TodoItem'
import { useState } from 'react'

const List = ({todos, onUpdate, onDelete}) =>{

    const [search, setSearch] = useState("");

    const onChageSearch= (e) => {
        setSearch(e.target.value)
    }

    const getFillteredDate = () => {
        if(search === "") {
            return todos;
        } 
        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase())
        })
    }

    const filteredTodos = getFillteredDate();

    return (
            <div className="List">
                <h4>Todo List 🌱</h4>
                <input value={search} onChange={onChageSearch} placeholder="검색어를 입력하세요" />
                <div className="todos_wraaper">
                    {filteredTodos.map((todo) => {
                        return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                    })}
                </div>
            </div>
    )

}

export default List;