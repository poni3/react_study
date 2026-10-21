import { useState, useRef } from "react";


//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개
//let count = 0;

const Register = () => {
    
    const [input, setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:"",

    });

    const countRef = useRef(0);
    console.log("레지스터 렌더링")
    const infRef = useRef();

    //let count = 0;

    const onChage = (e) => {
        countRef.current++
        //count++;
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = () => {
        console.log(infRef)
        if(input.name === "") {
            infRef.current.focus();
        }
    }


    //const [name, setName] = useState("이름");
   // const [birth, setBirth] = useState("");
    //const [country, setCounry] = useState("");
    //const [bio, setBio] = useState("");


    const onChangeName = (e) => {
        console.log(e)
        //setName(e.target.value);
        setInput({
            ...input,
            name: e.target.value
        })
        
    }

    const onChangBirth = (e) => {
        console.log(e)
        //setBirth(e.target.value);
        setInput({
            ...input,
            birth: e.target.value
        })
        
    }

    const onChangCountry = (e) => {
        console.log(e)
        //setCounry(e.target.value);
         setInput({
            ...input,
            country: e.target.value
        })
        
    }

    const onChangBio = (e) => {
        console.log(e)
        //setBio(e.target.value);
         setInput({
            ...input,
            bio: e.target.value
        })
        
    }

    return  (
        <div>

            <div>
                <input ref={infRef} name="name" value={input.name} onChange={onChage} placeholder={"이름"}  />
            </div>
            <div>
                <input name="birth"  type="date" value={input.birth} onChange={onChage} placeholder={"생년월일"}  />
            </div>

            <div>
                <select name="country"  onChange={onChage} value={input.country}>
                    <option></option>
                    <option value="kr" >한국</option>
                    <option value="us" >미국</option>
                    <option value="uk" >영국</option>
                </select>
                {input.country}
            </div>

            <div>
                <textarea name="bio"  value={input.bio} onChange={onChage} ></textarea>{input.bio} 
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )

}


export default Register;