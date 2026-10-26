

const Controller = ({upCount}) => {

    const buttons = [-1, -10, -100, 100, 10, 1];

    function onClickCount(e) {

        upCount(Number(e.target.innerText))
    }

    return (
        <>
            {buttons.map((value) => (
            <button key={value} onClick={onClickCount}>
                {value > 0 ? `+${value}` : value}
            </button>
        ))}
        </>
    )
}

export default Controller;