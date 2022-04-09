import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
// import Tasks from './Tasks';
const Header = ({title, onAdd, showAdd}) => {
 
    const location = useLocation()
    return (
        <div  className='container'>
        <header className='heading'>
            <h1>{title}</h1>
            
            {location.pathname === '/' && (<Button 
            color= {showAdd ? 'red' : 'green'} 
            text={showAdd ? 'close' : 'Add'} 
            onclick={onAdd}/>
            )}
          
        </header>
        {/* <Tasks/> */}
        </div>
        
    )
}

Header.defaultProps = 
{
    title: 'Trace Tracker',
}

Header.propTypes = {
title: PropTypes.string,
}

export default Header

