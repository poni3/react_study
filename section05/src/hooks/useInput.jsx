import { useState } from "react";

function useInput() {
    const [input, setInput] = useState("");

    const onChage = (e) => {
        setInput(e.target.value);
    }

    return [input, onChage]
}

export default useInput;