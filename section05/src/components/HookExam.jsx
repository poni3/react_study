import useInput from "../hooks/useInput";




// hook 조건
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출가능
//2. 조건부로 호출될수없다
//3. 나만의 훅(Custom Hook) 직접만들수있다. 
const HookExam = () => {
    const [input, onChage] = useInput();
    const [input2, onChage2] = useInput();

    return (
        <>
            <input value={input} onChange={onChage} />
            <input value={input2} onChange={onChage2} />
        </>
    )

}

export default HookExam;