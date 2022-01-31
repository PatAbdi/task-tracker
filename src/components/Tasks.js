import Last from "./Last"

const Tasks = ({listsname, onDelete, onToggle}) => {
     
    return (
        <>
        {listsname.map((tasking)=> 
        (<Last key={tasking.id} lastlist={tasking} onDelete={onDelete} onToggle={onToggle} />
        
        ))}
        
        </>
            
        
    )
}

export default Tasks
