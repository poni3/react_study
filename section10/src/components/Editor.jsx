import './Editor.css'
import { useState, useRef , memo} from 'react'

const Editor = ({onCreate}) =>{

    const [content, setContent] = useState("");
    const contentRef = useRef("");

    const onKeydonw = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    const onChaangeContent = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {

        if(content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("");
    }

    return (
            <div className='Editor'>
                <input value={content} onKeyDown={onKeydonw} ref={contentRef} onChange={onChaangeContent} placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가 </button>
            </div>
    )

}

export default memo(Editor);