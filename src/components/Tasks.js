import Last from "./Last"

const Tasks = ({listsname, onDelete, onToggle}) => {
     
    return (
        <>
        {listsname.map((tasking, index)=> 
        (<Last key={index} lastlist={tasking} onDelete={onDelete} onToggle={onToggle} />
        
        ))}
        
        </>
            
        
    )
}

export default Tasks
