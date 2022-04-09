import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='aboutbox'>
       <h2>Created Using react.js</h2>
        <h4>Version 1.0.0</h4>
        <p className='aboutlink'><Link to='/'>Go Back</Link></p>
    </div>
  )
}

export default About