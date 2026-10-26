import './TodoItem.css'
import {memo} from "react";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChageCheckbox = () => {
        onUpdate(id)
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }

    return  (
        <div className="TodoItem">
            <input onChange={onChageCheckbox}  checked={isDone} type="checkbox" />
            <div  className="content" >{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>

        </div>
    )


}

//고차 컴포넌트
// export default memo(TodoItem, (preProps, nextProps)=> {
//     //T 안바꼇다, F 바꼇다
//     if(preProps.id !== nextProps.id) return false;
//     if(preProps.isDone !== nextProps.isDone) return false;
//     if(preProps.content !== nextProps.content) return false;
//     if(preProps.date !== nextProps.date) return false;
    
//     return true;
// });

export default memo(TodoItem)