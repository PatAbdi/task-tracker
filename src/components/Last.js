import {FaTimes} from 'react-icons/fa'
const Last = ({lastlist, onDelete, onToggle}) => {
    return (
    <div className={`lasthead ${lastlist.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(lastlist.id)}>
            <h3>{lastlist.text} <FaTimes style={{color: 'red'}} onClick={()=>onDelete(lastlist.id)}/></h3>
            <p>{lastlist.day}</p>
        </div>
    )
}

export default Last

