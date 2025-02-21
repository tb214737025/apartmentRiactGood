import {  NavLink } from 'react-router-dom'
//import './style.css'
export const Nav = () => {
    return <>
        <div className="nav">


<NavLink to='/Home' className='link'>Home</NavLink>
<NavLink to='/City' className='link'>Login</NavLink>
<NavLink to='/Catgory' className='link'>Catgory</NavLink>

<NavLink to='/Aprtment' className='link'>aprtment</NavLink>
</div>
</>
}