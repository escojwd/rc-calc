import './ActionBtn.css';


function ActionBtn({ mathAct, action }) {


    return <button className="actions" onClick={action}>{mathAct}</button>
}
export default ActionBtn;