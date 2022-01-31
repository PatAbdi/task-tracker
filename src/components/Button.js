import PropTypes from 'prop-types';
const Button = ({ color, text, onclick}) => {
    return <button 
    onClick={onclick} 
    style={{backgroundColor: color}} 
    className='btn'>{text}</button>
    
}

Button.defaultProps = 
{
    color: 'black',

}

Button.propTypes = 
{
 text: PropTypes.string,
 onClick: PropTypes.func,
}

export default Button
