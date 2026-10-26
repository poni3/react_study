import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useEffect, useState, useRef} from 'react'
import Even from './components/Even'



function App() {
  const [count, setCount] = useState(0)
  const[input, setInput] = useState("");
  const isMount = useRef(false);

//1.마운트 : 탄생
//2. 업데이트: 변화,리렌더링
//3. 언마운트:죽음

//1. 마운트
  useEffect(()=> {
    console.log('mount')
  }, []) //빈배열 전달시 1번만실행? documentRedy?

//2. 업데이트
   useEffect(()=> {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update")
   })

//3. 언마운트


  // useEffect(()=>{
  //   console.log(`count: ${count} / input: ${input}`)

  // }, [count, input])

  //의존성 배열
  //deps

  function upCount(value) {

    setCount(count + value)  //비동기로 동작.
    //console.log(count)
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
      </section>
      <section>
        
        <Viewer count={count} />
        {count % 2 === 0? <Even /> : null }
      </section>
      <section>
        <Controller upCount={upCount} />
      </section>
    </div>
  )
}

export default App
