import PropTypes from 'prop-types';
import Button from './Button';
// import Tasks from './Tasks';
const Header = ({title, onAdd, showAdd}) => {
 
    return (
        <div  className='container'>
        <header className='heading'>
            <h1>{title}</h1>
            <Button 
            color= {showAdd ? 'red' : 'green'} 
            text={showAdd ? 'close' : 'Add'} 
            onclick={onAdd}/>
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

