import './NumberBtn.css';


function NumberBtn({ numb, action }) {
    return <button className="number" onClick={action}>{numb}</button>
}

export default NumberBtn;